import Vue from 'vue'
import NProgress from 'nprogress'
import router from '@js/router'
import store from '@js/store'
import toastConfig from '@core/configs/toast'
import { isMobile } from '@core/plugins/is-mobile'

let config = {}
let appName = window.kmenv.name

store.dispatch('config/SetLoaded', false)

router.beforeEach((to, from, next) => {
    const toFullPath = to.fullPath
    const toPath = to.path
    if(isMobile()) {
        store.dispatch('config/SetUiConfig', { leftSidebarShow: false })
    }

    NProgress.start()

    if(toPath === '/error') {
        next()
    } else {

        loadConfig().then(() => {
            const routeValidFor = to.matched.some(m => m.meta.validFor)
                                    ? to.matched.find(m => m.meta.validFor).meta.validFor
                                    : ''
            if(to.meta.forceRedirect) {

                next(to.meta.forceRedirect)

            } else if(config.failedInstall && toPath !== '/install') {

                next({ name: 'install' })

            } else {

                if (routeValidFor === 'auth') {

                    guardAuthRoutes(to, from, next)

                } else if (routeValidFor === 'guest') {

                    if (config.authenticated === true) {
                        let toRoute = to.query && to.query.ref ? to.query.ref : { name: 'appDashboard' }
                        if(toRoute.name === from.name) {
                            NProgress.done()
                            next(false)
                        } else {
                            next(toRoute)
                        }
                    } else {
                        next()
                    }

                } else if (routeValidFor === 'site') {

                    if(!config.website || !config.website.enableWebsite) {

                        next({ name: 'login' })

                    } else if(config.system.maintenanceMode && !store.getters['user/hasRole']('admin')) {

                        next({ name: 'maintenance', replace: true, query: { ref: toFullPath } })

                    } else {
                        next()
                    }

                } else {
                    next()
                }
            }

        }).catch(error => {
            console.error(error);
            next({ name: 'error', replace: true, query: { ref: to.fullPath } })
        })
    }
})

router.afterEach((to, from) => {
    updatePageTitleAndMeta(to, from)
    setupAppUi(to, from)
    NProgress.done()
})

router.onError(() => {
    NProgress.done()
})


async function loadConfig() {
    try {
        if(! (store.getters['config/isLoaded'] && config && config.system && config.auth) ) {
            await store.dispatch('config/GetConfig', { resetFirst: true })
        }

        config = store.getters['config/configs']
        appName = config && config.basic && config.basic.appName ? config.basic.appName : appName
        return config
    }
    catch(error){
        throw error
    }
}

function loadUserRolesAndPermissions(to, next){
    store.dispatch('user/GetUser').then(response => {
        return next()
    }).catch((error) => {
        store.dispatch('user/Logout').then(() => {
            Vue.toasted.error(error || 'Authentication failed, please login again', toastConfig)
            next({ name: 'login', query: { ref: to.fullPath } })
        })
    })
}

function guardAuthRoutes(to, from, next) {
    const toFullPath = to.fullPath
    const toPath = to.path
    const fromPath = from.path
    const validationRequired = to.matched.some(m => m.meta.validate)
                                ? to.matched.find(m => m.meta.validate).meta.validate
                                : []

    if(config.authenticated !== true) {
            store.dispatch('user/Logout').then(() => {
                next({ name: 'login', query: { ref: toFullPath } })
            })
    } else {
        // Check if user's roles and permissions are loaded, if not call the api and load it
        if( ! (store.getters['user/roles'] && store.getters['user/roles'].length && store.getters['user/permissions'] && store.getters['user/permissions'].length ) ) {

            loadUserRolesAndPermissions(to, next)

        // Check for valid license; If invalid, redirect to "/panel/license"
        } else if(!config.license && toPath !== '/panel/auth/security' && toPath !== '/panel/license' ) {
            Vue.toasted.error($t('setup.license.invalid_license'), toastConfig)

            if( fromPath === '/panel/license' ) {
                return next(new Error($t('setup.license.invalid_license')))
            } else {
                if(store.getters['user/hasRole']('admin')){
                    next({ name: 'license' })
                } else {
                    store.dispatch('user/Logout').then(() => {
                        next({ name: 'login' })
                    })
                }
            }

        } else {
            // Check for two factor security; If enabled, redirect to "/panel/auth/security" route after login
            if(config.auth.twoFactorSecurity && store.getters['user/twoFactorSet'] && toPath !== '/panel/auth/security' ) {

                next({ name: 'authSecurity' })

            // Check for app's maintenance mode status; If enabled, redirect to "/maintenance" route if user is not admin
            } else if(config.system.maintenanceMode && !store.getters['user/hasRole']('admin') && toPath !== '/maintenance' ) {

                next({ name: 'maintenance', replace: true, query: { ref: toFullPath } })

            // Check for lockScreenEnabled; If enabled, redirect to "/panel/auth/lock" route
            } else if(config.auth.lockScreen && (store.getters['user/locked'] || store.getters['config/isScreenLocked']) && toPath !== '/panel/auth/lock' ) {

                next({ name: 'authLock', query: { ref: toFullPath } })

            // Check for valid academic session; If invalid redirect to "/dashboard"
            } else {
                if(toPath !== '/panel/auth/lock' ) {
                    store.dispatch('user/SetLastActivity')
                }

                let userRolesPermittedToAccess = false
                let userPermissionsPermittedToAccess = false

                if(to.meta.hasOwnProperty('roles') && to.meta.roles.length) {
                    userRolesPermittedToAccess = store.getters['user/hasAnyRole'](to.meta.roles)
                } else {
                    userRolesPermittedToAccess = true
                }

                if(to.meta.hasOwnProperty('permissions') && to.meta.permissions.length) {
                    userPermissionsPermittedToAccess = to.meta.allPermissions
                                            ? store.getters['user/hasAllPermissions'](to.meta.permissions)
                                            : store.getters['user/hasAnyPermission'](to.meta.permissions)
                } else {
                    userPermissionsPermittedToAccess = true
                }

                if (userRolesPermittedToAccess && userPermissionsPermittedToAccess) {
                    next()
                } else {
                    next({ name: 'error401', replace: true, query: { ref: toFullPath } })
                }

            }
        }

    }
}

function updatePageTitleAndMeta(to, from) {
    const matchedRoutes = to.matched.slice()
    const matchedRoutesReversed = matchedRoutes.reverse()
    const nearestWithDesc = matchedRoutesReversed.find(r => r.meta && r.meta.description)
    const nearestWithMeta = matchedRoutesReversed.find(r => r.meta && r.meta.metaTags)
    const titleComposedArr = matchedRoutesReversed.filter(r => r.meta && r.meta.title).map(r => {
        return r.meta.trans ? $t(r.meta.trans, {'attribute': $t(r.meta.title)}) : $t(r.meta.title)
    })

    if (titleComposedArr.length) {
        let titleComposed = titleComposedArr.join(' - ')
        document.title = titleComposed + ' - ' + appName
    }

    Array.from(document.querySelectorAll('[data-vue-router-controlled]')).map(el => el.parentNode.removeChild(el))

    if (nearestWithDesc) {
        const descMeta = document.querySelector("[name='description']")
        if(descMeta) {
            descMeta.remove()
        }


        const metaTag = document.createElement('meta')
        metaTag.setAttribute('name', 'description')
        metaTag.setAttribute('content', nearestWithDesc.meta.description)
        metaTag.setAttribute('data-vue-router-controlled', '')
        document.head.appendChild(metaTag)
    }

    if (!nearestWithMeta) {
        return
    }

    nearestWithMeta.meta.metaTags.map(tagDef => {
            const tag = document.createElement('meta')
            Object.keys(tagDef).forEach(key => {
                tag.setAttribute(key, tagDef[key])
            })
            tag.setAttribute('data-vue-router-controlled', '')
            return tag
        })
        .forEach(tag => document.head.appendChild(tag))
}

function setupAppUi(to, from) {
    function setPageHeader(buttonsArray, floatersArray, linksArray, hideLinks, sort) {
        store.dispatch('common/SetPageHeader', {
            hideLinks: hideLinks,
            buttons: buttonsArray,
            sort: sort,
            links: linksArray,
            title: '',
            subTitle: ''
        })

        store.dispatch('common/ResetColumns')
    }

    function setKeyBindings(keyBindingList) {
        store.dispatch('config/SetConfig', {
            keyBindings: keyBindingList
        })
    }

    let buttonsArray = []
    let floatersArray = []
    let linksArray = []
    let hideLinks = false
    let sort = null
    let pageHeader = {}
    let keyBindingList = {}

    if(to.name && to.hasOwnProperty('meta')) {
        const currentMeta = to.meta
        if(currentMeta.header) {
            pageHeader = currentMeta.header

            if(pageHeader.buttons && pageHeader.buttons.length) {
                buttonsArray = pageHeader.buttons
            }

            if(pageHeader.floaters && pageHeader.floaters.length) {
                floatersArray = pageHeader.floaters
            }

            if(pageHeader.sort) {
                sort = pageHeader.sort
            }

            if(pageHeader.links && pageHeader.links.length) {
                linksArray = pageHeader.links
            }

            if(pageHeader.hideLinks) {
                hideLinks = true
            }
        }

        if(currentMeta.keyBindings) {
            keyBindingList = currentMeta.keyBindings
        }
    }

    setPageHeader(buttonsArray, floatersArray, linksArray, hideLinks, sort)
    setKeyBindings(keyBindingList)
}
