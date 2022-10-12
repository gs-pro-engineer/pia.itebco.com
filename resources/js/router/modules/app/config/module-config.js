export const getOptionRoutes = function(opts = {}) {

    return {
        path: opts.path,
        name: `${opts.routeNamePrefix}`,
        redirect: { name: `${opts.routeNamePrefix}List` },
        meta: {
            title: opts.entitiesTitle,
            hideChildren: true,
        },
        component: {
            template: '<router-view></router-view>'
        },
        children: [{
                path: '',
                name: `${opts.routeNamePrefix}List`,
                meta: {
                    trans: 'global.list',
                    title: opts.entitiesTitle,
                    ...opts,
                },
                component: () => import('@views/app/option/index' /* webpackChunkName: "app/option/index" */ ),
            },
            {
                path: 'add',
                name: `${opts.routeNamePrefix}Add`,
                meta: {
                    trans: 'global.add',
                    title: opts.entityTitle,
                    ...opts,
                },
                component: () => import('@views/app/option/add' /* webpackChunkName: "app/option/add" */ ),
            },
            {
                path: ':uuid/edit',
                name: `${opts.routeNamePrefix}Edit`,
                meta: {
                    trans: 'global.edit',
                    title: opts.entityTitle,
                    ...opts,
                },
                component: () => import('@views/app/option/edit' /* webpackChunkName: "app/option/edit" */ ),
            },
        ]
    }
}


