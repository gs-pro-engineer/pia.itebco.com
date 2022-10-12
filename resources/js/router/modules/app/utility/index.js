// loading app routes
import todo from './todo'
import note from './note'

export default [{
        path: 'utility',
        name: 'appUtility',
        redirect: { name: 'appUtilityTodo' },
        meta: {
            title: 'utility.utility',
            icon: 'fas fa-tools',
            isHiddenNav: true,
        },
        component: {
            template: '<router-view></router-view>'
        },
        children: [
            ...todo,
            ...note,
        ]
    },
]
