import store from '@js/store'

export default [
    {
        path: 'todos',
        name: 'appUtilityTodo',
        redirect: { name: 'appUtilityTodoList' },
        meta: {
            title: 'utility.todo.todos',
            icon: 'far fa-check-square',
            hideChildren: true,
            isNotNav: 'system.todo',
            permissions: ['access-todo']
        },
        beforeEnter: ((to, from, next) => {
            if(!store.getters['config/configs'].system.todo) {
                next({ name: 'appDashboard'})
            } else {
                next()
            }
        }),
        component: {
            template: '<router-view></router-view>'
        },
        children: [
            {
                path: '',
                name: 'appUtilityTodoList',
                meta: {
                    trans: 'global.list',
                    title: 'utility.todo.todos',
                },
                component: () => import('@views/app/utility/todo/index' /* webpackChunkName: "app/utility/todo/index" */),
            },
            {
                path: 'add',
                name: 'appUtilityTodoAdd',
                meta: {
                    trans: 'global.add',
                    title: 'utility.todo.todo',
                },
                component: () => import('@views/app/utility/todo/add' /* webpackChunkName: "app/utility/todo/add" */),
            },
            {
                path: ':uuid/edit',
                name: 'appUtilityTodoEdit',
                meta: {
                    trans: 'global.edit',
                    title: 'utility.todo.todo',
                },
                component: () => import('@views/app/utility/todo/edit' /* webpackChunkName: "app/utility/todo/edit" */),
            },
            {
                path: ':uuid',
                name: 'appUtilityTodoView',
                meta: {
                    trans: 'global.view',
                    title: 'utility.todo.todo',
                },
                component: () => import('@views/app/utility/todo/view' /* webpackChunkName: "app/utility/todo/view" */),
            }
        ]
    },
]