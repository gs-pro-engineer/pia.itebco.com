// loading app routes
import store from '@js/store'
import query from './query'
import subscriber from './subscriber'

export default [{
        path: 'site',
        name: 'appSite',
        redirect: { name: 'appSitePage' },
        meta: {
            prefixTitle: 'site.site',
            title: 'site.site',
            icon: 'fas fa-globe',
            isHiddenNav: true,
            isNotNav: 'website.enabled',
            permissions: ['access-page', 'list-query', 'list-subscriber']
        },
        beforeEnter: ((to, from, next) => {
            if(store.getters['config/configs'].website && store.getters['config/configs'].website.enabled) {
                next()
            } else {
                next({ name: 'appDashboard'})
            }
        }),
        component: {
            template: '<router-view></router-view>'
        },
        children: [
            ...query,
            ...subscriber,
        ]
    },
]
