export default [
    {
        path: 'users',
        name: 'appUser',
        redirect: { name: 'appUserList' },
        meta: {
            title: 'user.users',
            icon: 'fas fa-users',
            hideChildren: true,
            permissions: ['list-user', 'create-user', 'edit-user'],
        },
        component: {
            template: '<router-view></router-view>'
        },
        children: [
            {
                path: '',
                name: 'appUserList',
                meta: {
                    trans: 'global.list',
                    title: 'user.users',
                    permissions: ['list-user']
                },
                component: () => import('@views/app/user/index' /* webpackChunkName: "app/user/index" */),
            },
            {
                path: 'add',
                name: 'appUserAdd',
                meta: {
                    trans: 'global.add',
                    title: 'user.user',
                    permissions: ['create-user']
                },
                component: () => import('@views/app/user/add' /* webpackChunkName: "app/user/add" */),
            },
            {
                path: ':uuid/edit',
                name: 'appUserEdit',
                meta: {
                    trans: 'global.edit',
                    title: 'user.user',
                    permissions: ['edit-user']
                },
                component: () => import('@views/app/user/edit' /* webpackChunkName: "app/user/edit" */),
            },
            {
                path: 'change-password',
                name: 'appUserChangePassword',
                meta: {
                    title: 'user.change_password',
                },
                component: () => import('@views/app/user/change-password' /* webpackChunkName: "app/user/change-password" */),
            },
            {
                path: ':uuid',
                name: 'appUserView',
                meta: {
                    trans: 'global.view',
                    title: 'user.user',
                    permissions: ['list-user']
                },
                component: () => import('@views/app/user/view' /* webpackChunkName: "app/user/view" */),
            },
        ]
    },
    {
        path: 'profile',
        name: 'appProfile',
        redirect: { name: 'appProfileView' },
        meta: {
            title: 'user.users',
            isNotNav: true,
            hideChildren: true,
        },
        component: {
            template: '<router-view></router-view>'
        },
        children: [
            {
                path: '',
                name: 'appProfileView',
                meta: {
                    title: 'user.your_profile',
                },
                component: () => import('@views/app/user/profile/view' /* webpackChunkName: "app/user/profile/view" */),
            },
            {
                path: 'edit',
                name: 'appProfileEdit',
                meta: {
                    trans: 'global.edit',
                    title: 'user.your_profile',
                },
                component: () => import('@views/app/user/profile/edit' /* webpackChunkName: "app/user/profile/edit" */),
            },
            {
                path: 'image',
                name: 'appProfileViewImage',
                meta: {
                    trans: 'global.view',
                    title: 'user.props.image',
                },
                component: () => import('@views/app/user/profile/image/view' /* webpackChunkName: "app/user/profile/image/view" */),
            },
        ]
    },

]