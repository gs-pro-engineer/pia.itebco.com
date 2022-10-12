export default [{
    path: 'queries',
    name: 'appSiteQuery',
    redirect: { name: 'appSiteQueryList' },
    meta: {
        title: 'site.query.queries',
        icon: 'far fa-envelope',
        hideChildren: true,
        permissions: ['list-query'],
    },
    component: {
        template: '<router-view></router-view>'
    },
    children: [{
            path: '',
            name: 'appSiteQueryList',
            meta: {
                trans: 'global.list',
                title: 'site.query.queries',
                permissions: ['list-query']
            },
            component: () => import('@views/app/site/query/index' /* webpackChunkName: "app/site/query/index" */ ),
        },
        {
            path: ':uuid',
            name: 'appSiteQueryView',
            meta: {
                trans: 'global.view',
                title: 'site.query.query',
                permissions: ['list-query']
            },
            component: () => import('@views/app/site/query/view' /* webpackChunkName: "app/site/query/view" */ ),
        },
    ]
}, ]
