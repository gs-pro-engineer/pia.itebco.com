export default [
    {
        path: 'activities',
        name: 'appActivity',
        redirect: { name: 'appActivityList' },
        meta: {
            title: 'activity.activities',
            icon: 'fas fa-stream',
            hideChildren: true,
            permissions: ['access-activity'],
        },
        component: {
            template: '<router-view></router-view>'
        },
        children: [
            {
                path: '',
                name: 'appActivityList',
                meta: {
                    trans: 'global.list',
                    title: 'activity.activities',
                },
                component: () => import('@views/app/activity/index' /* webpackChunkName: "app/activity/index" */),
            },
        ]
    },
]