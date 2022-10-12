export default [
    {
        path: 'notes',
        name: 'appUtilityNote',
        redirect: { name: 'appUtilityNoteList' },
        meta: {
            title: 'utility.note.notes',
            icon: 'far fa-check-square',
            hideChildren: true,
            permissions: ['list-note', 'manage-note', 'manage-note-config']
        },
        component: {
            template: '<router-view></router-view>'
        },
        children: [
            {
                path: '',
                name: 'appUtilityNoteList',
                meta: {
                    trans: 'global.list',
                    title: 'utility.note.notes',
                    permissions: ['list-note'],
                },
                component: () => import('@views/app/utility/note/index' /* webpackChunkName: "app/utility/note/index" */),
            },
            {
                path: 'add',
                name: 'appUtilityNoteAdd',
                meta: {
                    trans: 'global.add',
                    title: 'utility.note.note',
                    permissions: ['manage-note'],
                },
                component: () => import('@views/app/utility/note/add' /* webpackChunkName: "app/utility/note/add" */),
            },
            {
                path: ':uuid/edit',
                name: 'appUtilityNoteEdit',
                meta: {
                    trans: 'global.edit',
                    title: 'utility.note.note',
                    permissions: ['manage-note'],
                },
                component: () => import('@views/app/utility/note/edit' /* webpackChunkName: "app/utility/note/edit" */),
            },
            {
                path: ':uuid/duplicate',
                name: 'appUtilityNoteDuplicate',
                meta: {
                    trans: 'global.add',
                    title: 'utility.note.note',
                    permissions: ['manage-note'],
                },
                component: () => import('@views/app/utility/note/edit' /* webpackChunkName: "app/utility/note/edit" */),
            },
            {
                path: ':uuid',
                name: 'appUtilityNoteView',
                meta: {
                    trans: 'global.view',
                    title: 'utility.note.note',
                    permissions: ['list-note'],
                },
                component: () => import('@views/app/utility/note/view' /* webpackChunkName: "app/utility/note/view" */),
            }
        ]
    },
]
