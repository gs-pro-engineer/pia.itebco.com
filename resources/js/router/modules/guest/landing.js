import store from '@js/store'

export default [{
    path: 'guest/meetings/:uuid',
    name: 'liveMeetingForGuest',
    meta: {
        title: 'meeting.join_meeting_as_guest',
    },
    component: () => import('@views/app/meeting/live-as-guest' /* webpackChunkName: "app/meeting/live-as-guest" */ ),
    beforeEnter: ((to, from, next) => {
        const configs = store.getters['config/configs']
        if(configs.meeting && configs.meeting.enablePam) {
            next()
        } else {
            next({ name: 'login' })
        }
    })
}]
