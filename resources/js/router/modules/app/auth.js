import store from '@js/store'

export default [
    {
        path: 'auth/security',
        name: 'authSecurity',
        meta: {
            title: 'auth.security.page_title',
        },
        component: () => import('@views/auth/security' /* webpackChunkName: "auth/security" */),
        beforeEnter: ((to, from, next) => {
            const configs = store.getters['config/configs']
            const twoFactorSet = store.getters['user/twoFactorSet']
            if(configs.auth.twoFactorSecurity && twoFactorSet) {
                next()
            } else {
                next({ name: 'appDashboard' })
            }
        })
    },
    {
        path: 'auth/lock',
        name: 'authLock',
        meta: {
            title: 'auth.lock.page_title',
        },
        component: () => import('@views/auth/lock' /* webpackChunkName: "auth/lock" */),
        beforeEnter: ((to, from, next) => {
            const configs = store.getters['config/configs']
            const isScreenLocked = store.getters['config/isScreenLocked']
            const locked = store.getters['user/locked']

            if(configs.auth.lockScreen && (locked || isScreenLocked) ) {
                next()
            } else {
                next({ name: 'appDashboard' })
            }
        })
    }
]