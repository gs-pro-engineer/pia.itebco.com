export default [{
    path: 'subscribers',
    name: 'appSiteSubscriber',
    redirect: { name: 'appSiteSubscriberList' },
    meta: {
        title: 'site.subscriber.subscribers',
        icon: 'fas fa-rss',
        hideChildren: true,
        permissions: ['list-subscriber'],
    },
    component: {
        template: '<router-view></router-view>'
    },
    children: [{
            path: '',
            name: 'appSiteSubscriberList',
            meta: {
                trans: 'global.list',
                title: 'site.subscriber.subscribers',
                permissions: ['list-subscriber']
            },
            component: () => import('@views/app/site/subscriber/index' /* webpackChunkName: "app/site/subscriber/index" */ ),
        },
    ]
}, ]
