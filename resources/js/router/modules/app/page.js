import { getOptionRoutes } from './config/module-config'

export default [
    {
        path: 'pages',
        name: 'appSitePage',
        redirect: { name: 'appSitePageList' },
        meta: {
            title: 'site.page.pages',
            icon: 'far fa-newspaper',
            hideChildren: true,
            permissions: ['access-page']
        },
        component: {
            template: '<router-view></router-view>'
        },
        children: [
            {
                path: '',
                name: 'appSitePageList',
                meta: {
                    trans: 'global.list',
                    title: 'site.page.pages',
                },
                component: () => import('@views/app/site/page/index' /* webpackChunkName: "app/site/page/index" */),
            }, {
                path: 'config',
                name: 'appSitePageConfig',
                redirect: { name: 'appSitePageConfigTemplate' },
                meta: {
                    title: 'config.config',
                    permissions: ['access-page-config'],
                    isConfigRoute: true,
                },
                component: () => import('@views/app/site/page/config/index' /* webpackChunkName: "app/site/page/config/index" */ ),
                children: [
                    getOptionRoutes({
                        path: 'templates',
                        entityTitle: 'site.page_template.template',
                        entitiesTitle: 'site.page_template.templates',
                        entityDescription: 'site.page_template.module_description',
                        routeNamePrefix: 'appSitePageConfigTemplate',
                        permissionRequired: 'access-page-config',
                        optionType: 'page_template',
                        hasSlug: true,
                    }),
                ]
            },
            {
                path: 'add',
                name: 'appSitePageAdd',
                meta: {
                    trans: 'global.add',
                    title: 'site.page.page',
                },
                component: () => import('@views/app/site/page/add' /* webpackChunkName: "app/site/page/add" */),
            },
            {
                path: ':uuid/edit',
                name: 'appSitePageEdit',
                meta: {
                    trans: 'global.edit',
                    title: 'site.page.page',
                },
                component: () => import('@views/app/site/page/edit' /* webpackChunkName: "app/site/page/edit" */),
            },
            {
                path: ':uuid/duplicate',
                name: 'appSitePageDuplicate',
                meta: {
                    trans: 'global.add',
                    title: 'site.page.page',
                },
                component: () => import('@views/app/site/page/edit' /* webpackChunkName: "app/site/page/edit" */),
            },
        ]
    },
]
