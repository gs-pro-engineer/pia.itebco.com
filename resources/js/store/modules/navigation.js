import store from '@js/store'
import { routesMap } from '@js/router'

function filterPermittedRoutes(routes) {
    const permittedRoutes = routes.filter(route => {
        let permittedToAccess = false;

        if(!route.meta) {
            permittedToAccess = true
        } else {
            if(route.meta.isNotNav === true) {
                return false
            } else if(route.meta.isNotNav) {
                const reqConfig = route.meta.isNotNav.split('.')
                const reqConfigLength = reqConfig.length
                const configs = store.getters['config/configs']

                if(!configs[ reqConfig[0] ]) {
                    return false
                } else if(reqConfigLength >= 2 && !configs[ reqConfig[0] ][ reqConfig[1] ]) {
                    return false
                } else if(reqConfigLength >= 3 && !configs[ reqConfig[0] ][ reqConfig[1] ][ reqConfig[2] ]) {
                    return false
                } else if(reqConfigLength >= 4 && !configs[ reqConfig[0] ][ reqConfig[1] ][ reqConfig[2] ][ reqConfig[3] ]) {
                    return false
                }
            }

            if(route.meta.hasOwnProperty('permissions') && route.meta.permissions.length) {
                permittedToAccess = route.meta.allPermissions ?
                                    store.getters['user/hasAllPermissions'](route.meta.permissions) :
                                    store.getters['user/hasAnyPermission'](route.meta.permissions)
            } else {
                permittedToAccess = true
            }
        }

        if(permittedToAccess) {
            if (route.children && route.children.length) {
                route.children = filterPermittedRoutes(route.children)
            }
            return true
        }
        return false
    })
    return permittedRoutes
}

function filterConfigRoutes(routes) {
    let foundRoute = false
    routes.map(route => {
        if(!foundRoute) {
            if(route.name === 'appConfig') {
                foundRoute = route
            } else if (route.children && route.children.length) {
                foundRoute = filterConfigRoutes(route.children)
            }
        }
    })
    return foundRoute
}

function filterUiConfigRoutes(routes) {
    let foundRoute = false
    routes.map(route => {
        if(!foundRoute) {
            if(route.name === 'appUiConfig') {
                foundRoute = route
            } else if (route.children && route.children.length) {
                foundRoute = filterUiConfigRoutes(route.children)
            }
        }
    })
    return foundRoute
}

function removeUndefinedConfigRoutes(routes, configs) {
    let newRoutes = _.cloneDeep(routes)
    newRoutes.children = routes.children ? routes.children.filter(route => {
        return ! route.meta.key || (route.meta.key && configs.hasOwnProperty(route.meta.key))
    }) : []
    return newRoutes
}

function filterRouteChildrenByName(routes, routeName) {
    let foundRoute = false
    routes.map(route => {
        if(!foundRoute) {
            if(route.name === routeName) {
                foundRoute = route
            } else if (route.children && route.children.length) {
                foundRoute = filterRouteChildrenByName(route.children, routeName)
            }
        }
    })
    return foundRoute
}

const navigation = {
    namespaced: true,
    state: {
        routes: [],
        configRoutes: [],
        uiConfigRoutes: [],
    },
    mutations: {
        SET_ROUTES: (state, {routes = [], configRoutes = [], uiConfigRoutes = []}) => {
            state.routes = routes
            state.configRoutes = configRoutes
            state.uiConfigRoutes = uiConfigRoutes
        },
        RESET_ROUTES: (state) => {
            state.routes = []
            state.configRoutes = []
            state.uiConfigRoutes = []
        }
    },
    actions: {
        Generate({ commit, rootGetters }) {
            return new Promise((resolve, reject) => {
                try {
                    const configs = rootGetters['config/configs']
                    const generatedRoutes = filterPermittedRoutes(_.cloneDeep(routesMap))
                    let configRoutes = filterConfigRoutes(generatedRoutes)
                    if(configRoutes) {
                        configRoutes = _.cloneDeep(removeUndefinedConfigRoutes(configRoutes, configs))
                    }
                    const uiConfigRoutes = _.cloneDeep(filterUiConfigRoutes(generatedRoutes))

                    commit('SET_ROUTES', {
                        routes: generatedRoutes,
                        configRoutes: configRoutes ? configRoutes.children : [],
                        uiConfigRoutes: uiConfigRoutes ? uiConfigRoutes.children : [],
                    })
                    resolve()
                } catch (error) {
                    reject(error)
                }
            })
        },
        Reset({ commit }) {
            return new Promise((resolve, reject) => {
                try {
                    commit('RESET_ROUTES')
                    resolve()
                } catch (error) {
                    reject(error)
                }
            })
        },
        async GetNavigationForRoute({ commit, state }, routeName) {
            try {
                const routesToReturn = await filterRouteChildrenByName(state.routes, routeName)
                return routesToReturn.children
            } catch (error) {
                throw error
            }
        },
    },
    getters: {
        permittedNavigations: state => state.routes,
        configNavigations: state => state.configRoutes,
        uiConfigNavigations: state => state.uiConfigRoutes,
    }
}
export default navigation
