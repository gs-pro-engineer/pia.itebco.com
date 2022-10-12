import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

/* Layouts */
const AppLayout = () => import("@views/layouts/app-layout" /* webpackChunkName: "layouts/app-layout" */);
const GuestLayout = () => import("@views/layouts/guest-layout" /* webpackChunkName: "layouts/guest-layout" */);
const GeneralLayout = () => import("@views/layouts/general-layout" /* webpackChunkName: "layouts/general-layout" */);
const LandingLayout = () => import("@views/layouts/landing-layout" /* webpackChunkName: "layouts/landing-layout" */);
const AppContentContainer = () => import("@views/layouts/partials/app-content-container" /* webpackChunkName: "layouts/app-content-container" */);

/* Router Modules */
import appRoutes from './modules/app'
import authRoutes from './modules/app/auth'
import liveRoutes from './modules/app/live'
import landingRoutes from './modules/app/landing'
import guestRoutes from './modules/guest'
import landingRoutesForGuest from './modules/guest/landing'
import generalRoutes from './modules/general'

export const baseURL = '/app'

export const routesMap = [{
        path: '/',
        component: GuestLayout,
        redirect: { name: 'login' },
        meta: {
            isNotNav: true,
            validFor: 'guest',
        },
        children: [
            ...guestRoutes,
        ]
    },
    {
        path: '/',
        component: GeneralLayout,
        meta: {
            isNotNav: true,
            validFor: 'public',
        },
        children: [
            ...generalRoutes,
        ]
    },
    {
        path: '/',
        component: LandingLayout,
        meta: {
            isNotNav: true,
            validFor: 'guest',
        },
        children: [
            ...landingRoutesForGuest,
        ]
    },
    {
        path: '/',
        component: LandingLayout,
        meta: {
            isNotNav: true,
            validFor: 'auth',
        },
        children: [
            ...liveRoutes,
            ...landingRoutes,
        ]
    },
    {
        path: '/panel',
        component: GuestLayout,
        meta: {
            isNotNav: true,
            validFor: 'auth',
        },
        redirect: { name: 'appDashboard' },
        children: [
            ...authRoutes,
        ]
    },
    {
        path: '/panel',
        name: 'App',
        meta: {
            validFor: 'auth',
        },
        redirect: { name: 'appDashboard' },
        component: AppLayout,
        children: [{
            path: '',
            meta: {
                title: '',
                isNavSection: true,
                isHiddenNav: true,
            },
            component: AppContentContainer,
            children: [
                ...appRoutes,
            ]
        }, ]
    },
    {
        path: '*',
        meta: {
            isNotNav: true,
        },
        beforeEnter: (to, from, next) => {
            next({ name: 'error404', replace: true, query: { 'ref': to.fullPath, 'refFrom': from.fullPath } })
        }
    }
]

const router = new VueRouter({
    base: baseURL,
    linkActiveClass: 'active',
    mode: 'history',
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition
        } else {

            const position = {}

            if (to.hash) {
                position.selector = to.hash

                if (document.querySelector(to.hash)) {
                    return position
                }

                // if the returned position is falsy or an empty object,
                // will retain current scroll position.
                return false
            }

            return new Promise(resolve => {
                if (to.matched.some(m => m.meta.hasOwnProperty('scrollToTop') && m.meta.scrollToTop === false)) {} else {
                    position.x = 0
                    position.y = 0
                }
                setTimeout(() => {
                    resolve(position)
                }, 500)
            })
        }
    },
    routes: routesMap
})

window.vueRouter = router

export default router
