import Echo from 'laravel-echo'
import axios from 'axios'
import Pusher from 'pusher-js'
import store from '@js/store'

export const setupPusher = function() {
    const configs = store.getters['config/configs']
    const pusherConfigs = configs.hasOwnProperty('pusher') ? configs.pusher : null
    if (!window.Echo && pusherConfigs && pusherConfigs.pusherAppKey) {
        if(pusherConfigs.debugMode) {
            Pusher.logToConsole = true
        } else {
            Pusher.logToConsole = false
        }

        window.Echo = new Echo({
            broadcaster: "pusher",
            cluster: pusherConfigs.pusherAppCluster,
            encrypted: true,
            key: pusherConfigs.pusherAppKey,
            authorizer: (channel, options) => {
                return {
                    authorize: (socketId, callback) => {
                        axios.post('/api/broadcasting/auth', {
                                socket_id: socketId,
                                channel_name: channel.name
                            })
                            .then(response => {
                                if(!response || !response.data) {
                                    console.error('Invalid Data!')
                                } else {
                                    callback(false, response.data)
                                }
                            })
                            .catch(error => {
                                callback(true, error)
                            })
                    }
                }
            },
        })
    
        window.EchoOpts = {
            subscriptions: {},
        }
    }
}


export default {
    setupPusher
}
