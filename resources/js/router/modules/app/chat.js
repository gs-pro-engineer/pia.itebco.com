import store from '@js/store'

export default [{
        path: 'chat',
        name: 'appChat',
        meta: {
            title: 'chat.live_chat',
            icon: 'far fa-comments',
            isHiddenNav: true,
            isNotNav: true,
            // isNotNav: 'chat.separateWindow',
        },
        component: () => import('@views/app/chat' /* webpackChunkName: "app/chat" */ ),
        beforeEnter: ((to, from, next) => {
            const configs = store.getters['config/configs']
            if (configs.chat.separateWindow) {
                next()
            } else {
                next('/')
            }
        })
    },
]
