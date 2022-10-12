import './bootstrap'

import store from './store'
import router from './router'
import VueAnalytics from 'vue-analytics'
import VueSocketIO from "vue-socket.io";

Vue.use(VueAnalytics, {
    id() {
        return window.kmenv.gaid || ''
    },
    router,
    debug: {
        enabled: false, // default value
        trace: false, // default value
        sendHitTask: true // default value
    }
})

Vue.use(new VueSocketIO({
    debug: true,
    connection: `${location.origin}:27017`,
    vuex: {
        store,
        actionPrefix: 'SOCKET_',
        mutationPrefix: 'SOCKET_'
    },
    options: {
        withCredentials: true,
        extraHeaders: {
            "my-custom-header": "abcd"
        }
    } //Optional options
}))


const app = new Vue({
    el: '#root',
    store,
    router
})
