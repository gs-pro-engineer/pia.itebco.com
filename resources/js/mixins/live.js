import { mapGetters, mapActions } from 'vuex'
import { setupPusher } from '@js/echo-setup'
import { formatKeysToCamelCase } from '@core/utils/formatter'
import { playIncomingMessage } from '@core/utils/media'
import { clearStore } from '@core/utils/auth'
import { urlBase64ToUint8Array } from '@core/utils'
import io from 'socket.io-client'
import EventBus from '@js/event-bus'

import ChatBox from '@components/chat-box/index.vue'

export default {
    components: {
        ChatBox,
    },
    data() {
        return {
            subscriptions: {},
            isChatBoxShown: false,
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
        ...mapGetters('user', [
            'loggedInUser',
            'liveUsers',
        ]),
        ...mapGetters('chat', [
            'roomsPageMeta',
            'totalUnreadMessages',
            'chatBoxLoaded',
        ]),
    },
    watch: {
        liveMembersCount(newVal, oldVal) {
            if (!window.isLiveMeetingDestroyed && newVal !== oldVal) {
                this.meetingRoomCreated(this.entity)
            }
        },
    },
    methods: {
        ...mapActions('common', [
            'Custom',
        ]),
        ...mapActions('user', [
            'SetLastActivity',
            'SetLiveUsers',
            'AddLiveUser',
            'RemoveLiveUser',
            'UpdateLiveUser',
            'ResetLiveUsers',
        ]),
        ...mapActions('chat', [
            'GetRooms',
            'MessageReceived',
            'ResetTotalUnreadCount',
        ]),
        showChatBox() {
            this.$gaEvent('engagement', 'showChatBox')

            this.isChatBoxShown = true
            this.ResetTotalUnreadCount()
        },
        toggleChatBox() {
            this.$gaEvent('engagement', 'toggleChatBox')
            this.isChatBoxShown = !this.isChatBoxShown
        },
        afterJoiningUsersChannel(users) {
            this.ResetLiveUsers()
            this.SetLiveUsers(formatKeysToCamelCase(users))
        },
        userIsOnline(user) {
            if(this.liveUsers.findIndex(u => (u.uuid === user.uuid)) !== -1) {
                this.RemoveLiveUser(user)
            }
            this.AddLiveUser(formatKeysToCamelCase(user))
        },
        userIsOffline(user) {
            if(window.callTo) {
                this.callDroppedNotification({
                    from: this.loggedInUser,
                    to: user,
                })
            }
            this.RemoveLiveUser(user)
        },
        updateOnlineUser(user) {
            this.UpdateLiveUser(formatKeysToCamelCase(user))
        },
        setUserStatus(status = false, timerToFalse = null) {
            this.UpdateLiveUser({
                    ...this.loggedInUser,
                    busy: status,
                    timerToFalse: timerToFalse,
                })

            this.subscriptions.users.whisper('SetUserStatus', {
                ...this.loggedInUser,
                busy: status,
            })
        },

        // Message Related
        newMessageReceived(chatMessage) {
            if (!chatMessage || !(this.configs.chat && this.configs.chat.enabled) ) {
                return
            }
            chatMessage = formatKeysToCamelCase(chatMessage)

            if (chatMessage && chatMessage.user && chatMessage.user.uuid !== this.loggedInUser.uuid) {
                this.MessageReceived(chatMessage)

                if(this.configs.chat.muteSoundNotification) {
                    return
                }

                if(!this.isChatBoxShown || (this.isChatBoxShown && !this.isWindowFocused)) {
                    playIncomingMessage()
                }
            }
        },
        startChatWith(withUser) {
            if(this.configs.chat && this.configs.chat.enabled && !this.isChatBoxShown) {
                this.isChatBoxShown = true
            }
        },

        leaveBeforeUnload() {
            if(window && window.Echo) {
                window.Echo.leave('Users')
                window.Echo.leave(`User.${this.loggedInUser.uuid}`)
            }
        },
        windowBlurred() {

            this.isWindowFocused = false
        },
        windowFocused() {

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
            if(this.vars.appDss) {
                return
            }
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

        if(window.Echo && window.EchoOpts) {
            window.EchoOpts.subscriptions.users = window.Echo.join(`Users`)
            window.EchoOpts.subscriptions.userPrivate = window.Echo.private(`User.${this.loggedInUser.uuid}`)

            this.subscriptions = {
                users: window.EchoOpts.subscriptions.users,
                userPrivate: window.EchoOpts.subscriptions.userPrivate,
            }

            this.ResetTotalUnreadCount()
            this.ResetLiveUsers()

            this.subscriptions.userPrivate.listen('ChatMessageSentToUser', this.newMessageReceived)

            this.subscriptions.users.here(this.afterJoiningUsersChannel)
                .joining(this.userIsOnline)
                .leaving(this.userIsOffline)
                .listenForWhisper('SetUserStatus', this.updateOnlineUser)


            this.GetRooms({ ...this.roomsPageMeta, lastItemUuid: null })

            EventBus.$off('START_CHAT_WITH', this.startChatWith)
            EventBus.$on('START_CHAT_WITH', this.startChatWith)
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

        if ('serviceWorker' in navigator && 'PushManager' in window) {
            let registrationRef;
            navigator.serviceWorker.ready
                .then((registration) => {
                    registrationRef = registration
                    return registration.pushManager.getSubscription()

                }).then((subscription) => {
                    const vapidPublicKey = this.configs.notification && this.configs.notification.vapidPublicKey ? this.configs.notification.vapidPublicKey : null

                    if (subscription && subscription.endpoint) {
                        this.updateNotificationSubscription(subscription)
                    } else {
                        if(vapidPublicKey) {
                            const convertedVapidKey = urlBase64ToUint8Array(vapidPublicKey)

                            registrationRef.pushManager.subscribe({
                                    userVisibleOnly: true,
                                    applicationServerKey: convertedVapidKey
                                })
                                .then((subscription) => {
                                    this.updateNotificationSubscription(subscription)
                                }).catch((error) => { })
                        }
                    }
                })
        }
    },
    beforeDestroy() {
        if(window.Echo) {
            if(window.EchoOpts) {
                window.EchoOpts.subscriptions.users = null

                if(window.EchoOpts.subscriptions.privateUser) {
                    window.EchoOpts.subscriptions.privateUser.stopListening('ChatMessageSentToUser')
                    window.EchoOpts.subscriptions.privateUser = null
                }

                if(window.EchoOpts.subscriptions.chatRoom) {
                    window.EchoOpts.subscriptions.chatRoom.stopListening('ChatMessageSentToRoom')
                    window.EchoOpts.subscriptions.chatRoom = null
                }
            }
            this.subscriptions = {}
            window.Echo.leave('Users')
            window.Echo.leave(`User.${this.loggedInUser.uuid}`)
        }
    },
    destroyed() {
        EventBus.$off('START_CHAT_WITH', this.startChatWith)
        window.removeEventListener('beforeunload', this.leaveBeforeUnload)
        window.removeEventListener('blur', this.windowBlurred)
        window.removeEventListener('focus', this.windowFocused)
    },
}
