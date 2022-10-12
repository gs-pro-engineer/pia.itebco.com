export default [{
        path: 'rooms',
        name: 'appRoom',
        redirect: { name: 'appRoomList' },
        meta: {
            title: 'room.rooms',
            icon: 'fas fa-door-open',
            hideChildren: true,
            permissions: ['list-meeting', 'create-meeting', 'edit-meeting'],
        },
        component: {
            template: '<router-view></router-view>'
        },
        children: [{
                path: '',
                name: 'appRoomList',
                meta: {
                    trans: 'global.list',
                    title: 'room.rooms',
                    permissions: ['list-meeting']
                },
                component: () => import('@views/app/room/index' /* webpackChunkName: "app/room/index" */ ),
            },
            {
                path: 'add',
                name: 'appRoomAdd',
                meta: {
                    trans: 'global.add',
                    title: 'room.room',
                    permissions: ['create-meeting']
                },
                component: () => import('@views/app/room/add' /* webpackChunkName: "app/room/add" */ ),
            },
            {
                path: ':uuid/edit',
                name: 'appRoomEdit',
                meta: {
                    trans: 'global.edit',
                    title: 'room.room',
                    permissions: ['edit-meeting']
                },
                component: () => import('@views/app/room/edit' /* webpackChunkName: "app/room/edit" */ ),
            },
            {
                path: ':uuid/duplicate',
                name: 'appRoomDuplicate',
                meta: {
                    trans: 'global.add',
                    title: 'room.room',
                },
                component: () => import('@views/app/room/edit' /* webpackChunkName: "app/room/edit" */),
            },
            {
                path: ':subUuid/invitees/add',
                name: 'appRoomInviteeAdd',
                meta: {
                    trans: 'global.add',
                    title: 'meeting.invitee.invitees',
                },
                component: () => import('@views/app/room/invite' /* webpackChunkName: "app/room/invite" */),
            },
            {
                path: ':subUuid/config',
                name: 'appRoomSingleConfig',
                meta: {
                    trans: 'global.config',
                    title: 'room.room_level',
                },
                component: () => import('@views/app/room/config' /* webpackChunkName: "app/room/config" */),
            },
            {
                path: ':uuid',
                name: 'appRoomView',
                meta: {
                    trans: 'global.view',
                    title: 'room.room',
                    permissions: ['list-meeting']
                },
                component: () => import('@views/app/room/view' /* webpackChunkName: "app/room/view" */ ),
            },
        ]
    },
]
