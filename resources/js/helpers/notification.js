import store from '@js/store'

export const nRoutes = {
    'todo': {
        'new': 'appUtilityTodoList',
    },
}

export const nActions = {
    'logout': (router) => {
        return store.dispatch('user/Logout')
            .then(response => {
                router.push({ name: 'login', query: { logout: 'true' } })
            })
    },
    'lock': (router) => {
        const configs = store.getters['config/configs']
        if(configs.auth.lockScreen) {
            store.dispatch('user/Lock')
        }
    },
}
