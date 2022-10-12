// loading app routes

export default [{
    path: 'ui-config',
    name: 'appUiConfig',
    redirect: { name: 'appUiConfigScheme' },
    meta: {
        title: 'config.ui_config',
        icon: 'fas fa-sliders-h',
        permissions: ['access-ui-config'],
        hideChildren: true,
    },
    component: () =>
        import('@views/app/ui-config/index' /* webpackChunkName: "app/ui-config/index" */ ),
    children: [{
        path: 'scheme',
        name: 'appUiConfigScheme',
        meta: {
            title: 'config.ui.color_scheme',
            icon: 'fas fa-palette',
        },
        component: () =>
            import('@views/app/ui-config/scheme/index' /* webpackChunkName: "app/ui-config/scheme/index" */ ),
    }, {
        path: 'navigation',
        name: 'appUiConfigNavigation',
        meta: {
            title: 'config.ui.navigation',
            icon: 'fas fa-sitemap',
        },
        component: () =>
            import('@views/app/ui-config/navigation/index' /* webpackChunkName: "app/ui-config/navigation/index" */ ),
    }, {
        path: 'navbar',
        name: 'appUiConfigNavbar',
        meta: {
            title: 'config.ui.navbar',
            icon: 'fas fa-grip-lines',
        },
        component: () =>
            import('@views/app/ui-config/navbar/index' /* webpackChunkName: "app/ui-config/navbar/index" */ ),
    }, {
        path: 'sidebar',
        name: 'appUiConfigSidebar',
        meta: {
            title: 'config.ui.sidebar',
            icon: 'fas fa-grip-lines-vertical',
        },
        component: () =>
            import('@views/app/ui-config/sidebar/index' /* webpackChunkName: "app/ui-config/sidebar/index" */ ),
    }, {
        path: 'page',
        name: 'appUiConfigPage',
        meta: {
            title: 'config.ui.page_and_container',
            icon: 'far fa-square',
        },
        component: () =>
            import('@views/app/ui-config/page/index' /* webpackChunkName: "app/ui-config/page/index" */ ),
    }, {
        path: 'notification',
        name: 'appUiConfigNotification',
        meta: {
            title: 'config.ui.notification',
            icon: 'fas fa-bell',
        },
        component: () =>
            import('@views/app/ui-config/notification/index' /* webpackChunkName: "app/ui-config/notification/index" */ ),
    }]
}]
