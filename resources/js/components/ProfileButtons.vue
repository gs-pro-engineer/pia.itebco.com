<template>
    <div class="buttons-container">
        <div class="buttons-wrapper">
            <div class="btn-group buttons" role="group">
                <router-link v-if="link" tag="a" class="btn btn-sm btn-light flex-grow-2" :to="link">
                    {{ $t('user.profile') }}
                </router-link>

                <template v-if="!isLoggedIn && (!showCallButtonsIfOnline || (showCallButtonsIfOnline && isOnline) )">
                    <button class="btn btn-sm btn-light d-none" :disabled="isUserBusy || loggedInUserBusy" @click="startCalling">
                        <i class="fas fa-phone-alt"></i>
                    </button>
                </template>

                <template v-if="configs.chat && configs.chat.enabled && chatBoxLoaded && uuid !== user.uuid">
                    <button class="btn btn-sm btn-light" @click="startChat">
                        <i class="fas fa-comment"></i>
                    </button>
                </template>

            </div>
        </div>
    </div>
</template>

<script>
    import { mapGetters, mapActions } from 'vuex'
    import { playOutgoingCall } from '@core/utils/media'
    import { callAlert, Swal } from '@core/configs/sweet-alert'
    import EventBus from '@js/event-bus'

    export default {
        name: "profile-buttons",
        props: {
            link: {
                type: Object,
                default: null
            },
            showCallButtonsIfOnline: {
                type: Boolean,
                default: true
            },
            user: {
                type: Object,
                required: true
            },
        },
        data() {
            return {
                subscriptions: {},
                callId: null
            }
        },
        computed: {
            ...mapGetters('user', [
                'uuid',
                'username',
                'profile',
                'loggedInUser',
                'liveLoggedInUser',
                'loggedInUserBusy',
                'liveUsers',
            ]),
            ...mapGetters('config', [
                'configs',
            ]),
            ...mapGetters('chat', [
                'chatBoxLoaded',
            ]),
            liveUser() {
                return this.user && this.liveUsers.find(u => u.uuid === this.user.uuid)
            },
            isOnline() {
                return !!this.liveUser
            },
            isUserBusy() {
                return this.isOnline && !!this.liveUser.busy
            },
            isLoggedIn() {
                return this.user && this.liveLoggedInUser && this.user.uuid === this.liveLoggedInUser.uuid
            },
            callUuid() {
                return this.callId ? this.callId : (this.callId = uuid())
            },
        },
        methods: {
            ...mapActions('user', [
                'SetLiveUsers',
                'UpdateLiveUser',
            ]),
            ...mapActions('chat', [
                'SetActiveChatUser',
            ]),
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
            showCallingNotification(to) {
                window.callPlaying = playOutgoingCall()

                const alertContent = {
                    title: `Calling ${to.name}...`,
                    cancelButtonText: 'CANCEL',
                    showConfirmButton: false,
                    showCancelButton: true,
                }

                this.$toasted.clear()
                this.setUserStatus('CALLING')
                window.callTo = to

                callAlert.fire(alertContent)
                    .then((result) => {
                        window.callPlaying.pause()
                        window.callTo = null

                        if (result.value) {
                            this.setUserStatus('ON_CALL')

                        } else {

                            if(result.dismiss === Swal.DismissReason.cancel) {

                                this.setUserStatus(false)
                                this.subscriptions.users.whisper('CallCancelled', {
                                    to: Object.assign({}, this.user),
                                    from: Object.assign({}, this.loggedInUser),
                                    id: this.callUuid
                                })

                            } else if(result.dismiss === Swal.DismissReason.timer) {

                                this.setUserStatus(false)
                                this.$toasted.info(`No answer from ${to.name}`, this.$toastConfig.info)

                            }
                        }
                    })
            },
            startCalling() {
                this.$gaEvent('engagement', 'startCalling', 'ProfileButtons')
                this.$emit('buttonClicked')
                this.showCallingNotification(Object.assign({}, this.user))
                this.callId = uuid()
                window.callUuid = this.callUuid
                this.subscriptions.users.whisper('StartCalling', {
                    to: Object.assign({}, this.user),
                    from: Object.assign({}, this.loggedInUser),
                    id: this.callUuid
                })
            },
            endCall() {
                this.subscriptions.users.whisper('EndCalling', {
                    to: Object.assign({}, this.user),
                    from: Object.assign({}, this.loggedInUser),
                    id: this.callUuid
                })
                this.setUserStatus(false)
                window.callUuid = null
            },
            startChat() {
                this.$gaEvent('engagement', 'startChat', 'ProfileButtons')

                this.SetActiveChatUser(this.user)
                EventBus.$emit('START_CHAT_WITH', this.user)
            },
        },
        mounted() {
        },
        created() {
            if(window.Echo && window.EchoOpts) {
                this.subscriptions = {
                    users: window.EchoOpts.subscriptions.users
                }
            }
        },
        beforeDestroy() {
        },
        destroyed() {
        },
    }

</script>
