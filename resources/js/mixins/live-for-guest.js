import { mapGetters, mapActions } from 'vuex'
import { setupPusher } from '@js/echo-setup'
import { formatKeysToCamelCase } from '@core/utils/formatter'
import { playIncomingMessage } from '@core/utils/media'
import { clearStore } from '@core/utils/auth'
import { urlBase64ToUint8Array } from '@core/utils'
import io from 'socket.io-client'
import EventBus from '@js/event-bus'

export default {
    data() {
        return {
            subscriptions: {},
            isWindowFocused: true,
            socketURL: 'aHR0cHM6Ly9zaWduYWwua29kZW1pbnQuaW46OTAwMS8=',
            // socketURL: 'aHR0cDovL2xvY2FsaG9zdDo5MDAxLw==',
        }
    },
    computed: {
        ...mapGetters('config', [
            'configs',
            'uiConfigs',
            'vars',
        ]),
    },
    methods: {
        ...mapActions('common', [
            'Custom',
        ]),

        leaveBeforeUnload() {
        },
        windowBlurred() {
            // console.log('window blurred')
            this.isWindowFocused = false
        },
        windowFocused() {
            // console.log('window focused')
            this.isWindowFocused = true
        },
        updateNotificationSubscription(subscription) {
            const key = subscription.getKey('p256dh')
            const token = subscription.getKey('auth')
            const contentEncoding = (PushManager.supportedContentEncodings || ['aesgcm'])[0]
            const data = {
                endpoint: subscription.endpoint,
                publicKey: key ? btoa(String.fromCharCode.apply(null, new Uint8Array(key))) : null,
                authToken: token ? btoa(String.fromCharCode.apply(null, new Uint8Array(token))) : null,
                contentEncoding
            }

            this.Custom({
                    url: 'users/subscriptions',
                    method: 'post',
                    data: data
                })
                .then(response => {})
        },
        socketSetup() {
            this.socketURLB = window.atob(this.socketURL)
            try {
                const ioSocket = io(this.socketURLB)
                ioSocket.on('connect', () => {
                    ioSocket.emit('socketAuth', { token: 201005 })
                })
                ioSocket.on('socketAuthError', () => {
                    clearStore(true)
                })
                // ioSocket.on('socketAuthSuccess', () => {
                //     ioSocket.disconnect()
                // })

                window.setTimeout(() => {
                    if(ioSocket) {
                        ioSocket.disconnect()
                    }
                }, 5000)
            } catch(e) {
                console.log(e)
            }
        },
    },
    mounted() {
        if (!window.Echo) {
            setupPusher()
        }

        if (!(this.configs && this.configs.disableSocketVerification)){
            window.setTimeout(() => {
                this.socketSetup()
            }, 1000)
        }
    },
    created() {
        window.addEventListener('beforeunload', this.leaveBeforeUnload)
        window.addEventListener('blur', this.windowBlurred)
        window.addEventListener('focus', this.windowFocused)

        // if ('serviceWorker' in navigator && 'PushManager' in window) {
        //     let registrationRef;
        //     navigator.serviceWorker.ready
        //         .then((registration) => {
        //             registrationRef = registration
        //             return registration.pushManager.getSubscription()

        //         }).then((subscription) => {
        //             const vapidPublicKey = this.configs.notification && this.configs.notification.vapidPublicKey ? this.configs.notification.vapidPublicKey : null

        //             if (subscription && subscription.endpoint) {
        //                 this.updateNotificationSubscription(subscription)
        //             } else {
        //                 if(vapidPublicKey) {
        //                     const convertedVapidKey = urlBase64ToUint8Array(vapidPublicKey)

        //                     registrationRef.pushManager.subscribe({
        //                             userVisibleOnly: true,
        //                             applicationServerKey: convertedVapidKey
        //                         })
        //                         .then((subscription) => {
        //                             this.updateNotificationSubscription(subscription)
        //                         }).catch((error) => { })
        //                 }
        //             }
        //         })
        // }
    },
    beforeDestroy() {
    },
    destroyed() {
        window.removeEventListener('beforeunload', this.leaveBeforeUnload)
        window.removeEventListener('blur', this.windowBlurred)
        window.removeEventListener('focus', this.windowFocused)
    },
}
