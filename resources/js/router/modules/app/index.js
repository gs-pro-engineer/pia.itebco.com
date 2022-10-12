import system from './system';

// loading app routes
import meeting from './meeting'
import room from './room'
import contact from './contact'
import segment from './segment'
import user from './user'

import utility from './utility'
import config from './config'
import uiConfig from './ui-config'
import page from './page'
import userPreference from './user-preference'
import activity from './activity'
import chat from './chat'

import site from './site'

export default [
    {
        path: 'dashboard',
        name: 'appDashboard',
        meta: {
            title: 'dashboard.dashboard',
            description: '',
            icon: 'fas fa-home',
        },
        components: {
            header: () => import('@views/app/dashboard/header' /* webpackChunkName: "app/dashboard/header" */),
            special: () => import('@views/app/dashboard/index' /* webpackChunkName: "app/dashboard/index" */),
        },
    },
    {
        path: '',
        meta: {
            isHiddenNav: true,
        },
        components: {
            header: () => import('@views/layouts/partials/app-common-page-header' /* webpackChunkName: "layouts/partials/app-common-page-header" */),
            default: { template: '<router-view></router-view>' },
        },
        children: [
            ...system,

            ...meeting,
            // ...room,
            ...segment,
            ...contact,
            ...user,

            ...utility,
            ...config,
            ...uiConfig,
            ...page,
            ...userPreference,
            ...activity,
            ...chat,

            ...site,
        ]
    },
]
