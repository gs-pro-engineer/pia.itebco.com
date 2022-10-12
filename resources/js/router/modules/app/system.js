import store from '@js/store'

export default [{
        path: 'product',
        name: 'appProduct',
        redirect: { name: 'appProductUpdate' },
        meta: {
            title: 'product.product',
            icon: 'product',
            roles: ['admin'],
            isNotNav: true,
        },
        component: () =>
            import ('@views/app/product/index' /* webpackChunkName: "app/product/index" */ ),
        children: [{
                path: 'update',
                name: 'appProductUpdate',
                meta: {
                    title: 'product.update.product_update',
                },
                component: () =>
                    import ('@views/app/product/update' /* webpackChunkName: "app/product/update" */ ),
            }
        ]
    },
    {
        path: 'license',
        name: 'license',
        meta: {
            title: 'product.license.verification',
            roles: ['admin'],
            isNotNav: true,
        },
        component: () =>
            import ('@views/app/license/index' /* webpackChunkName: "app/license/index" */ ),
        beforeEnter: ((to, from, next) => {
            const configs = store.getters['config/configs']
            if (configs.license) {
                next('/')
            } else {
                next()
            }
        })
    },
    {
        path: 'membership',
        name: 'appMembership',
        redirect: { name: 'appMembershipList' },
        meta: {
            title: 'membership.membership_history',
            icon: 'membership',
            isNotNav: true,
        },
        component: {
            template: '<router-view></router-view>'
        },
        children: [
            {
                path: ':uuid/print',
                name: 'appMembershipPrint',
                meta: {
                    trans: 'global.print',
                    title: 'membership.membership',
                    isNotNav: true,
                    hideNav: true,
                },
                component: () =>
                    import ('@views/app/membership/print' /* webpackChunkName: "app/membership/print" */ ),
            },
            {
                path: '',
                component: () =>
                    import ('@views/app/membership/index' /* webpackChunkName: "app/membership/index" */ ),
                children: [
                    {
                        path: '',
                        name: 'appMembershipList',
                        meta: {
                            title: 'membership.your_membership',
                        },
                        components: {
                            plan:  () => import('@views/app/membership/active' /* webpackChunkName: "app/membership/active" */),
                            history:  () => import('@views/app/membership/list' /* webpackChunkName: "app/membership/list" */),
                        },
                    }, {
                        path: 'extend',
                        name: 'appMembershipExtend',
                        meta: {
                            title: 'membership.membership',
                        },
                        beforeEnter: ((to, from, next) => {
                            const hasLifetimeMembership = store.getters['user/hasLifetimeMembership']
                            const isAdmin = store.getters['user/hasAnyRole'](['admin'])
                            if(!isAdmin && !hasLifetimeMembership) {
                                next()
                            } else {
                                next({ name: 'appDashboard' })
                            }
                        }),
                        components: {
                            plan:  () => import('@views/app/membership/form' /* webpackChunkName: "app/membership/form" */),
                        },
                    }
                ]
            }

        ]
    }
]
