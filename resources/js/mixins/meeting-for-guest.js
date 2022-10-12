let ebml = document.createElement('script')
ebml.setAttribute('src', '/js/EBML.js')
document.head.appendChild(ebml)

import { mapGetters, mapActions } from 'vuex'

import io from 'socket.io-client'
import RTCMultiConnection from 'rtcmulticonnection'
import * as RecordRTC from 'recordrtc'

import '@resources/public/js/adapter-latest.js'
import hark from 'hark/hark.bundle.js'

import 'fbr'
import screenfull from 'screenfull'

import { setupPusher } from '@js/echo-setup'
import { initMedia, showMediaPermissionError, playIncomingMessage, playScreenshot, share } from '@core/utils/media'
import { calculateTimeDuration, hmsToSeconds, loadScript } from '@core/utils'
import { clearStore } from '@core/utils/auth'
import { areEqual, toSnakeCase } from '@core/utils/form'
import * as MomentTz from '@core/filters/momentz'
import VuMeter from '@core/plugins/vumeter'

import '@core/plugins/detect-duplicate-tab'
import { swtToast, Swal } from '@core/configs/sweet-alert'
import { saveToStorage, getFromStorage } from '@core/utils'

window.io = io
window.hark = hark

export default {
    components: {
        RTCMultiConnection,
    },
    data() {
        return {
            uuid: null,
            entity: null,
            entityDatesBackup: {},
            isLoading: false,
            prevRoute: null,

            fullScreenItemId: null,
            meetingRoomId: null,
            initUrl: 'meetings',
            fallBackRoute: 'login',
            newMessages: false,
            roomIdAlive: false,
            showFlipClock: true,
            duplicateTab: false,
            fullScreenInOn: false,
            mediaDeviceIssue: false,
            permissionRejected: false,
            needStreamAddOrReplace: false,
            membersLive: [],
            videoList: [],
            mediaConfigFormData: {},
            mediaConfigurations: {
                selectedAudioInput: null,
                selectedAudioOutput: null,
                selectedVideoInput: null,
                activeAudioInput: null,
                activeVideoInput: null,
                activeFacingMode: null,
                selectedResolution: 'Auto',
                facingMode: 'auto',
                frameRate: 'auto',
                bandwidth: {
                    audio: 'auto',
                    video: 'auto',
                    screen: 'auto',
                    audioMin: 6,
                    videoMin: 100,
                    screenMin: 300,
                },
                recording: {
                    type: 'video',
                    mimeType: 'video/webm',
                    timeSlice: 5000,
                    disableLogs: false,
                }
            },
            audioBandwidthOpts: [
                { uuid: 'auto', label: 'Auto' },
                { uuid: 64, label: '64 kbps' },
                { uuid: 128, label: '128 kbps' },
                { uuid: 256, label: '256 kbps' },
                { uuid: 510, label: '512 kbps' },
            ],
            videoBandwidthOpts: [
                { uuid: 'auto', label: 'Auto' },
                { uuid: 128, label: '128 kbps' },
                { uuid: 256, label: '256 kbps' },
                { uuid: 512, label: '512 kbps' },
                { uuid: 1024, label: '1 mbps' },
                { uuid: 2000, label: '2 mbps' },
            ],
            screenBandwidthOpts: [
                { uuid: 'auto', label: 'Auto' },
                { uuid: 512, label: '512 kbps' },
                { uuid: 1024, label: '1 mbps' },
                { uuid: 2048, label: '2 mbps' },
                { uuid: 3000, label: '3 mbps' },
                { uuid: 4000, label: '4 mbps' },
            ],
            mediaDevices: {
                audioInput: [
                    { uuid: 'auto', name: 'Auto' },
                ],
                audioOutput: [
                    { uuid: 'auto', name: 'Auto' },
                ],
                videoInput: [
                    { uuid: 'auto', name: 'Auto' },
                ],
                resolutions: [
                    { label: 'Auto', constraints: {} },
                    { label: '240p', constraints: { width: { max: 320, ideal: 320 }, height: { max: 240, ideal: 240 } } },
                    { label: '240p Wide', constraints: { width: { max: 426, ideal: 426 }, height: { max: 240, ideal: 240 } }, wide: true },
                    { label: '360p', constraints: { width: { max: 640, ideal: 640 }, height: { max: 480, ideal: 480 } } },
                    { label: '360p Wide', constraints: { width: { max: 640, ideal: 640 }, height: { max: 360, ideal: 360 } }, wide: true },
                    { label: '720p', constraints: { width: { max: 960, ideal: 960 }, height: { max: 720, ideal: 720 } } },
                    { label: '720p Wide', constraints: { width: { max: 1280, ideal: 1280 }, height: { max: 720, ideal: 720 } }, wide: true },
                    { label: '1080p', constraints: { width: { max: 1920, ideal: 1920 }, height: { max: 1080, ideal: 1080 } } },
                    { label: '4K', constraints: { width: { max: 4096, ideal: 4096 }, height: { max: 2160, ideal: 2160 } } },
                ],
                facingModes: [
                    { uuid: 'auto', label: 'Auto' },
                    { uuid: 'user', label: 'User' },
                    { uuid: 'environment', label: 'Environment' },
                ],
                frameRates: [
                    { uuid: 'auto', label: 'Auto' },
                    { uuid: 30, label: '30 fps' },
                    { uuid: 60, label: '60 fps' },
                ],
            },
            autoTranslates: [
                { uuid: "microsoft_azure", label: "Microsoft Azure" },
                { uuid: "google_translate", label: "Google Translate" },
                { uuid: "none", label: "NONE" }
            ],
            socketURL: 'aHR0cHM6Ly9zaWduYWwua29kZW1pbnQuaW46OTAwMS8=',
            // socketURL: 'aHR0cDovL2xvY2FsaG9zdDo5MDAxLw==',
            rtcmConnection: null,
            localVideo: null,
            localScreenStreamid: null,
            localWhiteboardStreamid: null,
            localGreenRoomStream: null,
            audioConstraints: {},
            videoConstraints: {},
            pageConfigs: {
                hasAgenda: true,
                enableChat: true,
                enableAudio: true,
                enableVideo: true,
                showEnableAudioBtn: true,
                showEnableVideoBtn: true,
                showDeviceConfig: true,
                enableScreenSharing: true,
                enableRecording: false,
                enableAutoRecording: false,
                autoUploadRecording: false,
                autoUploadRecorded: false,
                canStopAutoRecording: false,
                recordingTimeSlice: 5000,
                enableHandGesture: true,
                enableWhiteboard: false,
                footerAutoHide: false,
                disableScroll: false,
                speechDetection: false,
                muteParticipantsOnStart: false,
                allowJoiningWithoutDevices: false,
                enableFileSharing: true,
                enableLinkSharing: true,
                enableSnapshot: false,
                anyoneCanTakeSnapshot: false,
                enableSnapshotAlert: false,
                snapshotAlertToUserOnly: false,
                snapshotAlertToModerators: false,
                askHostBeforeJoining: false,
                preferRearCameraFirst: false,
                enableUserAvatar: false,
                enableFullUserAvatar: false,
                enableMeetingInfo: false,
                forceUpdateUsername: false,
                autoEndMeeting: false,
                alertBeforeAutoEnd: false,
                canSnoozeAutoEnd: false,
                canCancelAutoEnd: false,
                alertBeforeAutoEndTime: 1,
                endTimeSnoozePeriod: 1,
                layout: 'fullpage',
                lastLayout: 'fullpage',
                maxParticipantCount: 1000,
            },
            meetingRulesHost: {
                session: {
                    audio: false,
                    video: false,
                    screen: false,
                    data: false,
                    oneway: false,
                },
                mediaConstraints: {
                    audio: false,
                    video: false,
                    screen: false,
                },
                mandatory: {
                    OfferToReceiveAudio: false,
                    OfferToReceiveVideo: false,
                },
                autoCloseEntireSession: false,
            },
            meetingRulesGuest: {
                session: {
                    audio: false,
                    video: false,
                    screen: false,
                    data: false,
                    oneway: false,
                },
                mediaConstraints: {
                    audio: false,
                    video: false,
                    screen: false,
                },
                mandatory: {
                    OfferToReceiveAudio: false,
                    OfferToReceiveVideo: false,
                },
                autoCloseEntireSession: false,
            },
            snoozeOpts: [
                { uuid: 5, name: 5, type: 'm' },
                { uuid: 10, name: 10, type: 'm' },
                { uuid: 15, name: 15, type: 'm' },
                { uuid: 30, name: 30, type: 'm' },
                { uuid: 60, name: 1, type: 'h' },
            ],
            isHandUp: false,
            recording: false,
            recorded: false,
            recordingPaused: false,
            recordingDuration: null,
            showDevicesModal: false,
            showFileSharing: false,
            showWhiteboard: false,
            showAgenda: true,
            fileSharingConnection: null,
            canvasDesigner: null,
            autoEndingToast: null,
            micVolumeActivity: 20,
            meetingRoomNotFound: false,
            profile: {
                uuid: '',
                username: '',
                name: '',
            },
        }
    },
    computed: {
        ...mapGetters('config', [
            'configs',
            'uiConfigs',
            'vars',
        ]),
        user() {
            return this.profile
        },
        hasVideos() {
            return this.videoList && this.videoList.length > 0 ? this.videoList.length : 0
        },
        // videos() {
        //     return this.videoList
        // },
        hasVideosClasses() {
            if (!this.hasVideos) {
                return 'has-no-video'
            }
            let toReturn = 'has-videos ' + (this.pageConfigs.disableScroll ? 'disable-scroll ' : '') + `has-${this.hasVideos}-videos `
            const rows = this.hasVideos > 15 ? 4 : (this.hasVideos > 8 ? 3 : (this.hasVideos > 3 ? 2 : 1))
            const itemPerRows = this.hasVideos > 20 ? 6 : (this.hasVideos === 16 ? 4 : (this.hasVideos > 12 ? 5 : (this.hasVideos > 9 ? 4 : (this.hasVideos === 9 ? 3 : (this.hasVideos > 6 ? 4 : (this.hasVideos > 4 ? 3 : (this.hasVideos === 4 ? 2 : this.hasVideos)))))))

            return toReturn + (this.hasVideos > 20 ? 'has-gt-20-videos' : (this.hasVideos > 12 ? 'has-gt-12-videos' : (this.hasVideos > 4 ? 'has-gt-4-videos' : (this.hasVideos > 1 ? 'has-2-3-videos' : 'has-1-video')))) + ` has-${rows}-rows has-${itemPerRows}-per-row`
        },
        liveMembersCount() {
            return this.membersLive.length - 1
        },
        startDateTimeIsFuture() {
            const isInFuture = this.entity && this.showFlipClock && this.isStartDateTimeInFuture()
            if (isInFuture) {
                this.startCountDown()
            } else {
                if (window.countdownInterval) {
                    clearInterval(window.countdownInterval)
                }
            }
            return isInFuture
        },
        enableLogs() {
            return (this.rtcmConnection && this.rtcmConnection.enableLogs) || this.configs.meeting.debugMode
        },
        coverPageStyles() {
            return this.entity && this.entity.cover && this.hasVideos ? {
                backgroundImage: 'url(' + this.entity.cover + ')',
            } : {}
        }
    },
    watch: {
        liveMembersCount(newVal, oldVal) {
            if (!window.isLiveMeetingDestroyed && newVal !== oldVal) {
                this.meetingRoomCreated(this.entity)
            }
        },
    },
    methods: {
        ...mapActions('config', [
            'GetConfig',
            'SetUiConfig',
        ]),
        ...mapActions('common', [
            'Init',
            'Get',
            'Custom',
            'GetPreRequisite',
        ]),

        stopAutoEndMeeting() {
            if (window.autoEndMeetingTimeout) {
                clearInterval(window.autoEndMeetingTimeout)
                window.autoEndMeetingTimeout = null
            }
            if (this.autoEndingToast && this.autoEndingToast.close && _.isFunction(this.autoEndingToast.close)) {
                swtToast.close()
                this.autoEndingToast = null
            }
        },
        startAutoEndMeeting(toEndIn = 300) { //300 seconds
            if (window.autoEndMeetingTimeout) {
                clearInterval(window.autoEndMeetingTimeout)
                window.autoEndMeetingTimeout = null
            }
            window.autoEndMeetingTimeout = setTimeout(() => {
                this.getOffline()
            }, 1000 * toEndIn) //1000*toEndIn
        },
        startMeetingTimer() {
            if (window.meetingDurationInterval) {
                this.meetingDuration = null
                clearInterval(window.meetingDurationInterval)
            }

            if (!this.entity || this.entity.status !== 'live') {
                return
            }

            const checkAutoEndMeeting = () => {

                if (!this.entity || this.entity.status !== 'live') {
                    this.stopAutoEndMeeting()
                    this.stopMeetingTimer()
                    return
                }

                if (this.pageConfigs.autoEndMeeting && this.entity.estimatedEndTime) {
                    const autoEndTimeAlert = this.pageConfigs.alertBeforeAutoEndTime || 5 //in minutes
                    const estimatedEndTime = moment(this.entity.estimatedEndTime, this.vars.serverDateTimeFormat)
                    const timeRightNow = MomentTz.now({ moment: true })

                    const toEndIn = ((estimatedEndTime.valueOf() - timeRightNow.valueOf()) / 1000).toFixed(0)

                    if (toEndIn <= 0) {
                        if (window.autoEndMeetingTimeout) {
                            clearInterval(window.autoEndMeetingTimeout)
                            window.autoEndMeetingTimeout = null
                        }

                        this.getOffline()
                    } else if (toEndIn <= ((autoEndTimeAlert) * 60)) {
                        let toEndInTime = calculateTimeDuration(toEndIn) + ' ' + $t('list.general.durations.seconds')

                        if (toEndIn >= 60) {
                            toEndInTime = calculateTimeDuration(toEndIn) + ' ' + $t('list.general.durations.minutes')
                        } else if (toEndIn >= 3600) {
                            toEndInTime = calculateTimeDuration(toEndIn) + ' ' + $t('list.general.durations.hours')
                        }


                        if (this.pageConfigs.alertBeforeAutoEnd) {

                            if (window.autoEndMeetingTimeout && this.autoEndingToast && Swal.isVisible() && Swal.isTimerRunning()) {

                                swtToast.update({
                                    title: $t('meeting.auto_ending_msg', { attribute: toEndInTime }),
                                })

                            } else {

                                if (!this.autoEndingToast && Swal.isVisible()) {
                                    return
                                }

                                if (this.autoEndingToast && this.autoEndingToast.close && _.isFunction(this.autoEndingToast.close)) {
                                    swtToast.close()
                                    this.autoEndingToast = null
                                }

                                this.autoEndingToast = swtToast.fire({
                                    iconHtml: '<i class="far fa-clock"></i>',
                                    title: $t('meeting.auto_ending_msg', { attribute: toEndInTime }),
                                    timer: toEndIn * 1000,
                                    showConfirmButton: false,
                                    position: 'bottom',
                                })
                            }
                        }

                        if (!(window.autoEndMeetingTimeout && this.autoEndingToast)) {
                            this.stopAutoEndMeeting()
                            this.startAutoEndMeeting(toEndIn)
                        }

                    } else if (toEndIn > ((autoEndTimeAlert) * 60)) {
                        if (this.autoEndingToast && this.autoEndingToast.close && _.isFunction(this.autoEndingToast.close)) {
                            swtToast.close()
                            this.autoEndingToast = null
                        }
                    } else {
                        this.stopAutoEndMeeting()
                    }
                }
            }

            const meetingStartedAt = moment(this.entity.startedAt, this.vars.serverDateTimeFormat).valueOf()

            window.meetingDurationInterval = window.setInterval(() => {
                const timeNow = MomentTz.now({ moment: true }).valueOf()
                this.meetingDuration = calculateTimeDuration((timeNow - meetingStartedAt) / 1000)

                checkAutoEndMeeting()
            }, 1000)
        },
        stopMeetingTimer() {
            if (window.meetingDurationInterval) {
                this.meetingDuration = null
                clearInterval(window.meetingDurationInterval)
            }
        },

        shareURL() {
            if (!this.entity) {
                return
            }

            this.$gaEvent('engagement', 'shareURL', 'Shown')

            let url = window.location.protocol + '//' + window.location.hostname + (window.location.port ? ':' + window.location.port : '')

            url = url + (this.entity.identifier ? `/m/${this.entity.identifier}` : `/app/live/meetings/${this.entity.uuid}`)

            const alertTitle = this.entity.identifier ? `${$t('meeting.meeting_code')}: <strong class="ml-2"> ${this.entity.identifier}</strong>` : null

            share({
                title: $t('meeting.user_inviting_msg', { attribute: this.user.name }),
                alertTitle: alertTitle,
                alertHtml:
                    `${$t('misc.share_alert.text')}<br>` +
                    `<small class='text-muted'>${url}</small><br>`,
                url: url
            }, () => {
                this.$gaEvent('engagement', 'shareURL', 'Copied')

                this.$toasted.success($t('meeting.url_has_been_copied'), this.$toastConfig)
            })
        },

        // query / countdown / timer methods
        isStartDateTimeInFuture() {
            return this.entity && this.entity.startDateTime && moment(this.entity.startDateTime, this.vars.serverDateTimeFormat).isAfter(MomentTz.now({ moment: true }))
        },
        startCountDown() {
            if (window.countdownInterval) {
                clearInterval(window.countdownInterval)
            }

            window.countdownInterval = window.setInterval(() => {
                if (this.isStartDateTimeInFuture()) {
                    this.showFlipClock = true
                } else {
                    if (this.showFlipClock && !document.hasFocus()) {
                        playIncomingMessage()
                    }
                    this.showFlipClock = false
                }
            }, 1000)
        },


        takeSnapshotOfStream(item, itemIndex) {
            if (!(this.pageConfigs.enableSnapshot && this.pageConfigs.anyoneCanTakeSnapshot)) {
                return
            }

            this.$gaEvent('engagement', 'takeSnapshot')

            const image = this.takeSnapshot(this.$refs.videos[itemIndex], !item.disableMirror)
            const name = `${item.extra.username} stream by ${this.username}`

            this.Custom({
                url: `/${this.initUrl}/${this.uuid}/snapshots`,
                method: 'post',
                data: {
                    image,
                    name
                }
            })
                .then(response => {
                    this.$toasted.info($t('meeting.snapshot_taken'), {
                        ...this.$toastConfig.info,
                        duration: 10000,
                        icon: { name: 'fa-download' },
                        action: {
                            text: 'View / Download',
                            href: response.fullUrl,
                            target: '_blank',
                        },
                    })
                })
                .catch(error => {
                    this.isLoading = false
                    formUtil.handleErrors(error)
                })

            this.informAboutSnapshot(item)
            playScreenshot()
        },
        takeSnapshot(video, enableMirror) {
            var canvas = document.createElement('canvas')
            canvas.width = (video.videoWidth || video.clientWidth) * 2
            canvas.height = (video.videoHeight || video.clientHeight) * 2

            var context = canvas.getContext('2d')
            if (this.configs.meeting && this.configs.meeting.mirroredVideo && enableMirror) {
                context.translate(canvas.width, 0)
                context.scale(-1, 1)
            }
            context.drawImage(video, 0, 0, canvas.width, canvas.height)

            return canvas.toDataURL('image/png')
        },
        informAboutSnapshot(item) {
            if (this.pageConfigs.enableSnapshotAlert) {
                this.emitSocketEvents('snapshotTaken', {
                    byUser: this.user,
                    ofUser: item.extra,
                    item
                })
            }
        },

        // toggle methods
        toggleHandUp() {
            this.$gaEvent('engagement', 'toggleHandUp')

            if (window.lowerHandTimer) {
                clearTimeout(window.lowerHandTimer)
            }

            let found = this.$refs.videos.find(video => {
                return video.id === this.localVideo.id
            })
            const videoIndex = this.videoList.findIndex(video => {
                return video.id === this.localVideo.id
            })

            if (found && found.srcObject) {
                const stream = found.srcObject

                this.isHandUp = !this.isHandUp
                this.videoList[videoIndex].isHandUp = this.isHandUp

                this.emitSocketEvents('remoteHandToggled', {
                    isHandUp: this.isHandUp,
                    streamid: stream.streamid
                })

                if (this.isHandUp) {
                    window.lowerHandTimer = setTimeout(() => {
                        this.toggleHandUp()
                    }, 30000)
                }

                this.rtcmConnection.extra.isHandUp = this.isHandUp
                this.updateExtraData()
            } else {
                this.localVideo = null
            }
        },
        toggleAudio(event, forceMute = false) {

            this.pageConfigs.enableAudio = forceMute ? false : !this.pageConfigs.enableAudio

            if (this.rtcmConnection) {
                this.rtcmConnection.extra.audioMuted = !this.pageConfigs.enableAudio
                this.updateExtraData()
            }

            if (!(this.$refs.videos && this.$refs.videos.length)) {
                this.setupGreenRoom()
                return
            }

            let found = this.$refs.videos.find(video => {
                return video.id === this.localVideo.id
            })
            const videoIndex = this.videoList.findIndex(video => {
                return video.id === this.localVideo.id
            })

            if (found && found.srcObject) {
                const stream = found.srcObject
                const tracks = stream.getAudioTracks()
                tracks.forEach(track => {
                    if (this.pageConfigs.enableAudio) {
                        track.enabled = true
                        this.videoList[videoIndex].audioMuted = false
                    } else {
                        track.enabled = false
                        this.videoList[videoIndex].audioMuted = true
                    }
                })

                this.emitSocketEvents('remoteMutedUnmuted', {
                    audioEnabled: this.pageConfigs.enableAudio,
                    streamid: stream.streamid
                })
            } else {
                this.localVideo = null
            }
        },
        toggleVideo() {
            this.pageConfigs.enableVideo = !this.pageConfigs.enableVideo

            if (this.rtcmConnection) {
                this.rtcmConnection.extra.videoMuted = !this.pageConfigs.enableVideo
                this.updateExtraData()
            }

            if (!(this.$refs.videos && this.$refs.videos.length)) {
                this.setupGreenRoom()
                return
            }

            let found = this.$refs.videos.find(video => {
                return video.id === this.localVideo.id
            })
            const videoIndex = this.videoList.findIndex(video => {
                return video.id === this.localVideo.id
            })

            if (found && found.srcObject) {
                const stream = found.srcObject
                const tracks = stream.getVideoTracks()
                tracks.forEach(track => {
                    if (this.pageConfigs.enableVideo) {
                        track.enabled = true
                        this.videoList[videoIndex].videoMuted = false
                    } else {
                        track.enabled = false
                        this.videoList[videoIndex].videoMuted = true
                    }
                })

                this.emitSocketEvents('remoteMutedUnmuted', {
                    videoEnabled: this.pageConfigs.enableVideo,
                    streamid: stream.streamid
                })
            } else {
                this.localVideo = null
            }
        },
        toggleRemoteAudio(videoItem, itemIndex) {
            if (videoItem.muted) {
                this.videoList[itemIndex].muted = false
                this.$refs.videos[itemIndex].muted = false
            } else {
                this.videoList[itemIndex].muted = true
                this.$refs.videos[itemIndex].muted = true
            }
        },
        toggleRemoteAudioSource(item, itemIndex) {
            this.emitSocketEvents('muteUnmuteRemote', item)
        },
        toggleEleFullScreen(videoItem, itemIndex) {
            const targetParentEl = this.$refs['videoListEle']
            this.fullScreenItemId = videoItem.id
            this.$fullscreen.toggle(targetParentEl, {
                wrap: false,
                callback: (fullscreen) => {
                    this.fullScreenInOn = fullscreen
                }
            })
        },
        toggleFullScreen(to) {
            if (screenfull.isEnabled) {
                if (to) {
                    screenfull.request()
                } else {
                    screenfull.exit()
                }
            }
        },
        toggleFooterAutoHide() {
            this.pageConfigs.footerAutoHide = !this.pageConfigs.footerAutoHide
            this.$gaEvent('engagement', 'toggleFooterAutoHide')
        },
        toggleLayout(layout) {
            this.pageConfigs.layout = layout ? layout : this.pageConfigs.layout
            this.pageConfigs.disableScroll = this.pageConfigs.layout === 'grid' ? true : (this.entity.config && this.entity.config.hasOwnProperty('disableScroll') ? this.entity.config.disableScroll : this.pageConfigs.disableScroll)
            this.$gaEvent('engagement', 'toggleLayout', layout)
        },
        toggleFileSharing() {
            this.showFileSharing = !this.showFileSharing
            this.$gaEvent('engagement', 'toggleFileSharing')
        },
        toggleAgenda() {
            this.showAgenda = !this.showAgenda
            this.$gaEvent('engagement', 'toggleAgenda')
        },
        toggleWhiteboard() {
            this.$gaEvent('engagement', 'toggleWhiteboard')
            if (!this.showWhiteboard) {
                if (!this.canvasDesigner) {
                    this.initWhiteboard()
                }
                this.pageConfigs.lastLayout = this.pageConfigs.layout
                this.pageConfigs.layout = 'presentation'
                this.showWhiteboard = true
            } else {
                this.pageConfigs.layout = this.pageConfigs.lastLayout
                this.showWhiteboard = false
            }
        },
        changeFocus(item) {
            // if(item.local) {
            //     return
            // }
            this.videoList.forEach(v => {
                v.maximized = v.id === item.id
            })
        },
        disableMirror(item, itemIndex) {
            this.videoList[itemIndex].disableMirror = this.videoList[itemIndex].disableMirror ? false : true
        },
        kickRemoteUser(item, itemIndex) {
            formUtil.confirmAction()
                .then((result) => {
                    if (result.value) {
                        let found = this.$refs.videos.find(video => {
                            return video.id === item.id
                        })

                        if (found && found.srcObject) {
                            const stream = found.srcObject

                            this.rtcmConnection.removeStream(stream.streamid)
                            this.emitSocketEvents('banAttendee', item)

                            this.Custom({
                                url: `/${this.initUrl}/${this.uuid}/invitees/${item.extra.uuid}/block`,
                                method: 'post',
                            })
                                .then(response => {
                                    this.$toasted.success(response.message, this.$toastConfig)
                                })
                                .catch(error => {
                                    formUtil.handleErrors(error)
                                })
                        }
                    } else {
                        result.dismiss === Swal.DismissReason.cancel
                    }
                })
        },
        switchCamera() {
            this.mediaConfigurations.facingMode = this.mediaConfigurations.facingMode === 'user' ? 'environment' : 'user'
            this.applyMediaConstraints()
        },
        stopStream(localVideo) {
            let found = this.$refs.videos.find(video => {
                return video.id === localVideo.id
            })

            if (found && found.srcObject) {
                const stream = found.srcObject
                this.stopStream(stream)
            }
        },

        // channel event callback methods
        afterJoiningChannel(members) {
            this.membersLive = members
        },
        newMemberJoining(member) {
            this.membersLive.push(member)
        },
        memberLeaving(member) {
            this.membersLive = this.membersLive.filter(u => (u.uuid !== member.uuid))
        },
        updateEntityBackup(data) {
            this.entityDatesBackup.status = data.status
            this.entityDatesBackup.startDateTime = data.startDateTime
            this.entityDatesBackup.plannedStartDateTime = data.plannedStartDateTime
            this.entityDatesBackup.startedAt = data.startedAt
            this.entityDatesBackup.estimatedEndTime = data.estimatedEndTime
            this.entityDatesBackup.endedAt = data.endedAt
        },
        meetingStatusChanged(e) {
            const getTimezoneDateTime = (dt) => {
                return MomentTz.momentDateTimeTz(dt, this.vars.serverDateTimeFormat)
            }

            if (e.uuid === this.entity.uuid) {

                if (this.entity.status === e.status && !e.delayed && !e.updated) {
                    return
                } else if (e.updated) {
                    this.stopAutoEndMeeting()
                }

                this.updateEntityBackup(e)
                this.entity.status = e.status
                this.entity.startDateTime = getTimezoneDateTime(e.startDateTime)

                if (this.entity.plannedStartDateTime) {
                    this.entity.plannedStartDateTime = getTimezoneDateTime(e.plannedStartDateTime)
                }
                if (this.entity.startedAt) {
                    this.entity.startedAt = getTimezoneDateTime(e.startedAt)
                }
                if (this.entity.estimatedEndTime) {
                    this.entity.estimatedEndTime = getTimezoneDateTime(e.estimatedEndTime)
                }

                if (this.entity.status === e.status && !e.delayed) {
                    return
                }

                let meetingStatus = e.status

                if (meetingStatus === 'scheduled' && e.delayed) {
                    meetingStatus = 'delayed'
                }

                const statusUpdateMessages = {
                    'live': 'meeting.is_live_now',
                    'delayed': 'meeting.meeting_delayed',
                    'cancelled': 'meeting.meeting_cancelled',
                    'ended': 'meeting.meeting_ended',
                }

                this.$toasted.success($t(statusUpdateMessages[meetingStatus]), this.$toastConfig)
            }
        },
        gotNewMessage() {
            if (!(this.pageConfigs.enableChat && this.configs.chat && this.configs.chat.enabled)) {
                return
            }

            if (!this.pageConfigs.showChat || this.fullScreenInOn) {
                this.newMessages = true
                playIncomingMessage()
            }
        },
        meetingRoomCreated(e) {
            const data = e.hasOwnProperty('data') && e.data ? e.data : e

            this.entity.roomId = data.roomId
            this.initMediaAndRtcmConnection()
            this.rtcmConnection.checkPresence(this.entity.roomId, (isRoomExist, roomid) => {
                this.roomIdAlive = !!isRoomExist
                if (isRoomExist === true && this.meetingRoomNotFound === true) {
                    this.meetingRoomNotFound = false
                    this.getOnline()
                }
            })
        },
        banAttendee(e) {
            const data = e.hasOwnProperty('data') && e.data ? e.data : e

            if (this.enableLogs) {
                console.log(data)
            }
            let found = this.$refs.videos.find(video => {
                return video.id === data.id
            })

            if (found && found.srcObject) {
                const stream = found.srcObject
                this.rtcmConnection.removeStream(stream.streamid)
            }

            if (e.uuid === this.userUuid) {
                this.closeConnectionAndStream()
                this.getInitialData()
            }

            this.$toasted.info($t('meeting.ban_notification'), this.$toastConfig.info)
        },
        streamRemoved(e) {
            const data = e.hasOwnProperty('data') && e.data ? e.data : e

            if (this.rtcmConnection && data.id) {
                this.rtcmConnection.removeStream(data.id)
            }
            this.rtcmOnStreamEnded(data)
        },
        meetingEnded(e) {
            const data = e.hasOwnProperty('data') && e.data ? e.data : e

            this.closeConnectionAndStream()
            this.getInitialData()
        },

        // channel action methods
        joinChannel() {
            if (!window.Echo) {
                return
            }

            if (this.entity.isPam) {
                window.meetingChannel = window.Echo.channel(`MeetingGuest.${this.uuid}`)
            } else {
                window.meetingChannel = window.Echo.join(`Meeting.${this.uuid}`)
                window.meetingChannel.here(this.afterJoiningChannel)
                    .joining(this.newMemberJoining)
                    .leaving(this.memberLeaving)
            }

            window.meetingChannel.listen('MeetingStatusChanged', this.meetingStatusChanged)
                .listen('NewMessage', this.gotNewMessage)
                .listen('MeetingRoomCreated', this.meetingRoomCreated)
                .listen('PublicMeetingRoomCreated', this.meetingRoomCreated)
        },
        emitSocketEvents(event, data = {}) {
            if (!(this.rtcmConnection && this.rtcmConnection.socket && event)) {
                return
            }
            if (this.enableLogs) {
                console.log('Emitting on Socket: ', event)
            }
            try {
                this.rtcmConnection.socket.emit('Whisper', {
                    event,
                    data
                })
            } catch (e) { }
        },

        // rtcm event callback methods
        rtcmOnOpen(e) {
            if (this.canvasDesigner && this.canvasDesigner.pointsLength <= 0) {
                setTimeout(() => {
                    this.rtcmConnection.send('sync-canvas-points')
                }, 1000)
            }

            if (this.canvasDesigner && this.rtcmConnection.isInitiator) {
                setTimeout(function () {
                    this.canvasDesigner.renderStream()
                }, 1000)
            }
        },
        rtcmOnClose(e) {
        },
        rtcmOnMessage(e) {
            // if (e.data === 'sync-canvas-points') {
            //     this.canvasDesigner.sync()
            //     return
            // }

            // this.canvasDesigner.syncData(e.data)
        },
        rtcmOnUserStatusChanged(event) {
            const localUserId = this.rtcmConnection.userid

            if (this.enableLogs) {
                console.log("On rtcmOnUserStatusChanged - event : ", event)
                // console.log("On rtcmOnUserStatusChanged - rtcmConnection : ", this.rtcmConnection)
                console.log("On rtcmOnUserStatusChanged - localUserId : ", localUserId)
            }

            const newUserAdded = (stream) => {
                // debugger
                let streamId = stream.userid;
                let streamType = stream.userid === localUserId ? 'local' : 'remote';

                if (!(this.rtcmConnection.isInitiator || this.entity.canModerate) && streamType !== 'local' && (this.entity.type.uuid === 'live_class' || this.entity.type.uuid === 'webinar')) { //if current user is a normal user (not an initiator or moderator), and stream type is from remote, and type is live class
                    return
                }

                let found = this.videoList.find(video => {
                    return video.id === stream.streamid
                })

                if (this.videoList.length > 1) {
                    this.recheckLiveParticipants(null)
                }

                if (found === undefined) {
                    let video = {
                        id: streamId,
                        streamUserId: stream.userid,
                        muted: true,
                        ...stream.extra,
                        extra: stream.extra,
                        maximized: false,
                        local: streamType === 'local' ? true : false, //bad me dekhenge
                        screen: false,
                        status: true,
                        hasAudio: false,
                        hasVideo: false,
                        hasStream: false,
                        speaking: false,
                    }

                    this.videoList.push(video)
                }

                this.isLoading = false
            }

            let foundVideos = this.videoList.filter(video => {
                return video.id === event.userid || video.streamUserId === event.userid || (event.extra && video.uuid === event.extra.uuid)
            })

            if (event && event.status === "online") {
                if (foundVideos && foundVideos.length) {
                    foundVideos.forEach(foundVideo => {
                        if (foundVideo.username !== event.extra.username) {
                            const tempIndex = this.videoList.findIndex(video => video.uuid === foundVideo.uuid)
                            this.videoList[tempIndex].username = event.extra.username
                            this.videoList[tempIndex].name = event.extra.name

                            if (this.videoList[tempIndex].extra) {
                                this.videoList[tempIndex].extra['username'] = event.extra.username
                                this.videoList[tempIndex].extra['name'] = event.extra.name
                            }
                        }
                    })
                } else if (event.extra && event.extra.hasOwnProperty('username') && event.extra.username) {
                    newUserAdded(event)
                }
            } else {
                if (foundVideos && foundVideos.length) {
                    foundVideos.forEach(foundVideo => {
                        this.rtcmConnection.removeStream(foundVideo.id)
                        this.recheckLiveParticipants({ ...foundVideo, streamid: foundVideo.id })
                        this.autoSetVideoMaximized()
                    })
                }
            }
        },
        rtcmOnLeave(event) {
            if (this.enableLogs) {
                console.log("On rtcmOnLeave - event : ", event)
            }
        },
        rtcmOnSpeaking(event) {
            // if (this.enableLogs) {
            // console.log("On rtcmOnSpeaking - event : ", event)
            // }

            const videoIndex = this.videoList.findIndex(v => v.id === event.streamid)
            if (window.onSilenceTimeoutObj['index' + videoIndex]) {
                clearTimeout(window.onSilenceTimeoutObj['index' + videoIndex])
            }

            if (this.videoList[videoIndex]) {
                this.videoList[videoIndex].speaking = true
            }

            window.onSilenceTimeoutObj['index' + videoIndex] = setTimeout(() => {
                if (this.videoList[videoIndex]) {
                    this.videoList[videoIndex].speaking = false
                }
            }, 5000)
        },
        rtcmOnSilence(event) {
            // if (this.enableLogs) {
            // console.log("On rtcmOnSilence - event : ", event)
            // }

            const videoIndex = this.videoList.findIndex(v => v.id === event.streamid)
            if (window.onSilenceTimeoutObj['index' + videoIndex]) {
                clearTimeout(window.onSilenceTimeoutObj['index' + videoIndex])
            }
            window.onSilenceTimeoutObj['index' + videoIndex] = setTimeout(() => {
                if (this.videoList[videoIndex]) {
                    this.videoList[videoIndex].speaking = false
                }
            }, 2000)
        },
        rtcmOnVolumeChange(event) {
            // if (this.enableLogs) {
            //     console.log("On rtcmOnVolumeChange - event : ", event)
            // }
        },
        rtcmOnStream(stream) {
            if (this.enableLogs) {
                console.log('On Stream: ', stream)
            }

            if (!(this.rtcmConnection.isInitiator || this.entity.canModerate) && stream.type !== 'local' && (this.entity.type.uuid === 'live_class' || this.entity.type.uuid === 'webinar')) { //if current user is a normal user (not an initiator or moderator), and stream type is from remote, and type is live class
                if (!stream.extra.isInitiator) { // if remove stream is from a user who is not an initiator, then dont show
                    return
                }
            }

            let streamId = stream.streamid
            let foundIndex = this.videoList.findIndex(video => {
                return video.id === stream.streamid || video.id === stream.userid
            })

            let streamInstance = stream.stream.idInstance ? JSON.parse(stream.stream.idInstance) : stream.stream

            const isWhiteboard = !(streamInstance.isAudio || streamInstance.audio || streamInstance.isVideo || streamInstance.video || streamInstance.isScreen || streamInstance.screen) && stream.extra.hasWhiteboard

            if (streamInstance.isScreen && stream.type === 'local') {
                this.localScreenStreamid = stream.streamid

                let tracks = stream.stream.getTracks()
                tracks.forEach(track => {
                    track.addEventListener('ended', this.stopSharingScreen)
                })
            } else if (isWhiteboard && stream.type === 'local') {
                this.localWhiteboardStreamid = stream.streamid
            }

            if (this.videoList.length > 1) {
                this.recheckLiveParticipants(null)
            }

            let video = {
                id: streamId,
                streamUserId: stream.userid,
                muted: stream.type === 'local',
                ...stream.extra,
                extra: stream.extra,
                maximized: stream.type === 'local' && !streamInstance.isScreen && !isWhiteboard,
                local: stream.type === 'local',
                screen: (stream.extra.screenStreamId && streamId === stream.extra.screenStreamId) || this.localScreenStreamid === streamId || streamInstance.isScreen,
                whiteboard: (stream.extra.whiteboardStreamId && streamId === stream.extra.whiteboardStreamId) || isWhiteboard,
                status: true,
                hasAudio: streamInstance.isAudio || streamInstance.audio,
                hasVideo: streamInstance.isVideo || streamInstance.video || streamInstance.isScreen || isWhiteboard || streamInstance.screen,
                hasStream: true,
                speaking: false,
                disableMirror: false,
            }

            if (video.screen || video.whiteboard) {
                video.videoMuted = false
            }

            if (foundIndex === -1) {

                // let foundUserIndex = this.videoList.findIndex(item => item.uuid === stream.extra.uuid)

                // if (foundUserIndex >= 0) {
                //     const foundUserVideo = this.videoList[foundUserIndex]
                //     if (!foundUserVideo.status) {
                //         let newList = this.videoList.map(item => item.uuid !== foundUserVideo.uuid)
                //         this.videoList = newList
                //     }
                // }

                if (stream.type === 'local' && this.localScreenStreamid !== video.id && this.localWhiteboardStreamid !== video.id) {
                    if (this.localVideo && this.needStreamAddOrReplace) {
                        video.id = streamId = this.localVideo.id
                    } else {
                        this.localVideo = video
                        this.videoList.push(video)
                    }
                } else {
                    this.videoList.push(video)
                }

                //just for testing -start
                // let video2 = {
                //     ...video,
                //     maximized: false,
                //     uuid: uuid(),
                // }
                // this.videoList.push(video)
                // this.videoList.push(video2)
                //just for testing -ended
            } else if (foundIndex !== -1 && !this.videoList[foundIndex].hasStream) {
                if (stream.type === 'local' && this.localScreenStreamid !== video.id && this.localWhiteboardStreamid !== video.id) {
                    if (this.localVideo && this.needStreamAddOrReplace) {
                        video.id = streamId = this.localVideo.id
                    } else {
                        this.localVideo = video
                        this.videoList[foundIndex] = Object.assign({}, this.videoList[foundIndex], video)
                    }
                } else {
                    this.videoList[foundIndex] = Object.assign({}, this.videoList[foundIndex], video)
                }
            }

            this.autoSetVideoMaximized()


            if (this.pageConfigs.enableRecording) {
                let recorderInstance = this.rtcmConnection.recorder

                if (recorderInstance) {
                    const internalRecorder = recorderInstance.getInternalRecorder()
                    if (this.recording && internalRecorder) {
                        internalRecorder.addStreams(stream.stream)
                    }
                }

                // if(!this.rtcmConnection.recorder.streams) {
                //     this.rtcmConnection.recorder.streams = []
                // }

                // if(this.recording) {
                //     this.rtcmConnection.recorder.streams.push(stream.stream)
                // }
            }

            setTimeout(() => {
                if (this.enableLogs) {
                    console.log("$refs : ", this.$refs)
                    console.log("$refs.videos : ", this.$refs.videos)
                }

                for (let i = 0, len = this.$refs.videos.length; i < len; i++) {
                    if (this.$refs.videos[i].id === streamId || this.$refs.videos[i].id === stream.userid) {
                        this.$refs.videos[i].srcObject = stream.stream
                        break
                    }
                }

                // this.rtcmConnection.streamEvents.selectAll({
                //     isScreen: true
                // }).forEach(function(screenEvent) {
                //     this.videoList.forEach((item, index) => {
                //         if (item.id !== screenEvent.stream.streamid) {
                //             this.videoList[index].screen = true
                //         } else {
                //             this.videoList[index].screen = false
                //         }
                //     })
                // })

                if (stream.type === 'local') {
                    this.applyOnStartConfigs()
                }

                setTimeout(() => {
                    if (this.pageConfigs.speechDetection && !isWhiteboard && !streamInstance.isScreen) {
                        this.initHark({
                            stream: stream.stream,
                            streamedObject: stream,
                            connection: this.rtcmConnection,
                        })
                    }
                }, 1000)
            }, 500)

            this.isLoading = false
        },
        rtcmOnStreamEnded(stream) {
            this.recheckLiveParticipants(stream)
            this.autoSetVideoMaximized()
        },
        rtcmOnError(error) {
            this.isLoading = false
            // if(window.currentUserMediaRequest) {
            //     window.currentUserMediaRequest.mutex = false
            // }
        },
        rtcmOnMediaError(error) {
            this.isLoading = false
            if (window.currentUserMediaRequest) {
                window.currentUserMediaRequest.mutex = false
            }
            if (this.enableLogs) {
                console.log("onMediaError : ", error)
            }
            this.mediaDeviceIssue = true

            const msgObj = showMediaPermissionError(error)

            msgObj.alert.then((result) => {
                if (error.name === 'NotFoundError' || error.name === 'NotReadableError' || error.name === 'OverconstrainedError') {
                    this.applyMediaConstraints(true)
                    this.$toasted.info($t('meeting.media_devices.setup_reset_try_again'), this.$toastConfig.info)
                } else if (error.name === 'NotAllowedError' || error.name === 'PermissionDeniedError') {
                    this.permissionRejected = true
                }
                if (!result.value) {
                    this.isLoading = false
                    result.dismiss === Swal.DismissReason.cancel
                }
            })
            // this.meetingAction('leave', { error: { name: error.name, title: msg.title } }, { alert: false })
        },
        rtcmOnMute(stream) {
            if (this.enableLogs) {
                console.log("On rtcmOnMute: ", stream)
            }
            const videoIndex = this.videoList.findIndex(v => v.id === stream.streamid)
            const videoEle = this.$refs.videos.find(video => {
                return video.id === stream.streamid
            })

            if (stream.muteType === 'video') {
                this.videoList[videoIndex].videoMuted = true
            } else if (stream.muteType === 'audio') {
                this.videoList[videoIndex].muted = true
            } else {
                this.videoList[videoIndex].videoMuted = true
                this.videoList[videoIndex].muted = true
                videoEle.srcObject = null
            }
        },
        rtcmOnUnmute(stream) {
            if (this.enableLogs) {
                console.log(stream)
            }
            const videoIndex = this.videoList.findIndex(v => v.id === stream.streamid)
            const videoEle = this.$refs.videos.find(video => {
                return video.id === stream.streamid
            })

            if (stream.unmuteType === 'video') {
                this.videoList[videoIndex].videoMuted = false
            } else if (stream.unmuteType === 'audio') {
                this.videoList[videoIndex].muted = false
            } else {
                this.videoList[videoIndex].videoMuted = false
                this.videoList[videoIndex].muted = false
                videoEle.srcObject = stream
            }
        },
        rtcmOnRemoteMuteUnmuted(e) {
            const data = e.hasOwnProperty('data') && e.data ? e.data : e

            if (this.enableLogs) {
                console.log(data)
            }
            const videoIndex = this.videoList.findIndex(video => {
                return video.id === data.streamid
            })

            if (videoIndex === -1 || !this.videoList[videoIndex]) {
                return
            }

            if (data.hasOwnProperty('audioEnabled')) {
                if (data.audioEnabled) {
                    this.videoList[videoIndex].audioMuted = false
                } else {
                    this.videoList[videoIndex].audioMuted = true
                }
            } else if (data.hasOwnProperty('videoEnabled')) {
                // const videoEle = this.$refs.videos.find(video => {
                //     return video.id === data.streamid
                // })

                if (data.videoEnabled) {
                    this.videoList[videoIndex].videoMuted = false
                } else {
                    this.videoList[videoIndex].videoMuted = true
                }
            }
        },
        rtcmOnSnapshotTaken(e) {
            const data = e.hasOwnProperty('data') && e.data ? e.data : e

            if (this.enableLogs) {
                console.log('rtcmOnSnapshotTaken', data)
            }

            if (!(this.pageConfigs.enableSnapshotAlert && data && data.byUser && data.ofUser)) {
                return
            }

            if (this.pageConfigs.snapshotAlertToUserOnly) {
                if (this.userUuid === data.ofUser.uuid) {
                    this.$toasted.info($t('meeting.snapshot_taken_notification_your', { by_user: data.byUser.name }), this.$toastConfig.info)
                    playScreenshot()
                }
            } else {
                if (this.userUuid === data.ofUser.uuid) {
                    this.$toasted.info($t('meeting.snapshot_taken_notification_your', { by_user: data.byUser.name }), this.$toastConfig.info)
                } else {
                    this.$toasted.info($t('meeting.snapshot_taken_notification_user', { by_user: data.byUser.name, of_user: data.ofUser.name }), this.$toastConfig.info)
                }
                playScreenshot()
            }
        },
        rtcmOnMeetingUpdated(e) {
            let data = {}
            if (e.data) {
                data = e.data
            }

            if (this.enableLogs) {
                console.log('rtcmOnMeetingUpdated', data)
            }
            if (data.dateUpdated) {
                const getTimezoneDateTime = (dt) => {
                    return MomentTz.momentDateTimeTz(dt, this.vars.serverDateTimeFormat)
                }
                console.log('rtcmOnMeetingUpdated', this.entity)

                this.updateEntityBackup(data)
                this.entity.status = data.status
                this.entity.startDateTime = getTimezoneDateTime(data.startDateTime)
                if (data.plannedStartDateTime) {
                    this.entity.plannedStartDateTime = getTimezoneDateTime(data.plannedStartDateTime)
                }
                if (data.startedAt) {
                    this.entity.startedAt = getTimezoneDateTime(data.startedAt)
                }
                if (data.estimatedEndTime) {
                    this.entity.estimatedEndTime = getTimezoneDateTime(data.estimatedEndTime)
                }
                if (data.endedAt) {
                    this.entity.endedAt = getTimezoneDateTime(data.endedAt)
                }

                console.log('rtcmOnMeetingUpdated', this.entity)

            }

            if (data.endTimeSnoozed && this.autoEndingToast && this.autoEndingToast.close && _.isFunction(this.autoEndingToast.close)) {
                this.stopAutoEndMeeting()
                swtToast.close()
                this.autoEndingToast = null
            }

            if (data.autoEndCancelled && this.autoEndingToast && this.autoEndingToast.close && _.isFunction(this.autoEndingToast.close)) {
                this.stopAutoEndMeeting()
                this.pageConfigs.autoEndMeeting = false
                swtToast.close()
                this.autoEndingToast = null
            }
        },
        rtcmOnRemoteHandToggled(e) {
            const data = e.hasOwnProperty('data') && e.data ? e.data : e

            if (this.enableLogs) {
                console.log(data)
            }
            if (!(data && data.streamid && this.rtcmConnection.streamEvents[data.streamid])) {
                return
            }
            const videoIndex = this.videoList.findIndex(video => {
                return video.id === data.streamid
            })

            if (data.hasOwnProperty('isHandUp')) {
                if (data.isHandUp) {
                    this.videoList[videoIndex].isHandUp = true
                    this.$toasted.info($t('meeting.handup_notification', { attribute: this.videoList[videoIndex].name }), this.$toastConfig.info)
                } else {
                    this.videoList[videoIndex].isHandUp = false
                }
            }
        },
        rtcmOnMuteUnmuteRemote(e) {
            const data = e.hasOwnProperty('data') && e.data ? e.data : e

            if (this.enableLogs) {
                console.log(data)
            }
            let found = this.$refs.videos.find(video => {
                return video.id === data.id
            })

            if (found && found.srcObject) {
                this.toggleAudio()
            }
        },
        rtcmOnUserIdAlreadyTaken(useridAlreadyTaken, yourNewUserId) {
            this.rtcmConnection.userid = yourNewUserId
        },

        // rtc action methods
        initMediaAndRtcmConnection() {
            if (!this.rtcmConnection) {
                this.rtcmConnection = new RTCMultiConnection()

                this.rtcmConnection.socketURL = window.atob(this.socketURL)
                if (this.configs.signalServers && this.configs.signalServers.url) {
                    this.rtcmConnection.socketURL = this.configs.signalServers.url
                }

                this.rtcmConnection.autoCreateMediaElement = false
                // this.rtcmConnection.autoCloseEntireSession = true // set this line to close room as soon as room creator leaves

                if (this.configs.meeting) {
                    if (this.configs.meeting.debugMode) {
                        this.rtcmConnection.enableLogs = true
                    } else {
                        this.rtcmConnection.enableLogs = true
                    }

                    if (this.configs.meeting.forceTurn) {
                        this.rtcmConnection.candidates = {
                            turn: true,
                            stun: false,
                            host: false
                        }
                    }
                }


                this.rtcmConnection.onopen = this.rtcmOnOpen
                this.rtcmConnection.onclose = this.rtcmOnClose
                this.rtcmConnection.onleave = this.rtcmOnLeave
                this.rtcmConnection.onmessage = this.rtcmOnMessage
                // this.rtcmConnection.onNewParticipant = this.rtcmOnNewParticipant
                // this.rtcmConnection.onReadyForOffer = this.rtcmOnReadyForOffer
                this.rtcmConnection.onUserStatusChanged = this.rtcmOnUserStatusChanged
                this.rtcmConnection.onstream = this.rtcmOnStream
                this.rtcmConnection.onstreamended = this.rtcmOnStreamEnded
                this.rtcmConnection.onmute = this.rtcmOnMute
                this.rtcmConnection.onunmute = this.rtcmOnUnmute
                this.rtcmConnection.onMediaError = this.rtcmOnMediaError
                this.rtcmConnection.onerror = this.rtcmOnError
                this.rtcmConnection.onUserIdAlreadyTaken = this.rtcmOnUserIdAlreadyTaken

                if (this.pageConfigs.speechDetection) {
                    this.rtcmConnection.onspeaking = this.rtcmOnSpeaking
                    this.rtcmConnection.onsilence = this.rtcmOnSilence
                    this.rtcmConnection.onvolumechange = this.rtcmOnVolumeChange
                    window.onSilenceTimeoutObj = {}
                }

                this.rtcmConnection.setCustomSocketEvent('Whisper')

                this.fileSharingConnection = this.rtcmConnection
            }


            this.getMediaConstraints()

            //Bandwidth and bitrate setup
            const BandwidthHandler = this.rtcmConnection.BandwidthHandler

            this.rtcmConnection.bandwidth = {
                audio: this.mediaConfigurations.bandwidth.audio === 'auto' ? false : this.mediaConfigurations.bandwidth.audio,
                video: this.mediaConfigurations.bandwidth.video === 'auto' ? false : this.mediaConfigurations.bandwidth.video,
                screen: this.mediaConfigurations.bandwidth.screen === 'auto' ? false : this.mediaConfigurations.bandwidth.screen,
            }

            // this.rtcmConnection.processSdp = (sdp) => {
            //     if (this.rtcmConnection.DetectRTC.browser.name === 'Safari') {
            //         return sdp
            //     }

            //     if (this.rtcmConnection.codecs.video.toUpperCase() === 'VP8') {
            //         sdp = BandwidthHandler.preferCodec(sdp, 'vp8')
            //     }

            //     if (this.rtcmConnection.codecs.video.toUpperCase() === 'VP9') {
            //         sdp = BandwidthHandler.preferCodec(sdp, 'vp9')
            //     }

            //     if (this.rtcmConnection.codecs.video.toUpperCase() === 'H264') {
            //         sdp = BandwidthHandler.preferCodec(sdp, 'h264')
            //     }

            //     if (this.rtcmConnection.codecs.audio === 'G722') {
            //         sdp = BandwidthHandler.removeNonG722(sdp)
            //     }

            //     if (this.rtcmConnection.DetectRTC.browser.name === 'Firefox') {
            //         return sdp
            //     }

            //     if (this.rtcmConnection.bandwidth.video || this.rtcmConnection.bandwidth.screen) {
            //         sdp = BandwidthHandler.setApplicationSpecificBandwidth(sdp, this.rtcmConnection.bandwidth, !!this.rtcmConnection.session.screen)
            //     }

            //     if (this.rtcmConnection.bandwidth.video) {
            //         sdp = BandwidthHandler.setVideoBitrates(sdp, {
            //             min: this.mediaConfigurations.bandwidth.videoMin * 8 * 1024,
            //             max: this.rtcmConnection.bandwidth.video * 8 * 1024
            //         })
            //     }

            //     if (this.rtcmConnection.bandwidth.audio) {
            //         sdp = BandwidthHandler.setOpusAttributes(sdp, {
            //             maxaveragebitrate: this.rtcmConnection.bandwidth.audio * 8 * 1024,
            //             maxplaybackrate: this.rtcmConnection.bandwidth.audio * 8 * 1024,
            //             stereo: 1,
            //             maxptime: 3
            //         })
            //     }

            //     return sdp
            // }

            this.rtcmConnection.iceServers = [
                {
                    urls: [
                        "stun.l.google.com:19302",
                        "stun1.l.google.com:19302",
                        "stun2.l.google.com:19302",
                        "stun3.l.google.com:19302",
                        "stun4.l.google.com:19302"
                    ]
                }
            ]

            if (this.pageConfigs.maxParticipantCount) {
                this.rtcmConnection.maxParticipantsAllowed = this.pageConfigs.maxParticipantCount
            }

            if (this.configs.iceServers.length) {
                this.rtcmConnection.iceServers = [...this.configs.iceServers]
            }

            this.rtcmConnection.session = {
                ...this.meetingRulesHost.session
            }

            this.rtcmConnection.sdpConstraints.mandatory = {
                ...this.meetingRulesHost.mandatory
            }

            this.rtcmConnection.mediaConstraints = {
                video: this.meetingRulesHost.mediaConstraints.video ? this.videoConstraints : false,
                audio: this.meetingRulesHost.mediaConstraints.audio ? this.audioConstraints : false,
                screen: this.meetingRulesHost.mediaConstraints.screen,
            }
        },
        initSocketListener() {
            if (!(this.rtcmConnection && this.rtcmConnection.socket)) {
                return
            }

            const callbackList = {
                'removedStream': this.streamRemoved,
                'banAttendee': this.banAttendee,
                'muteUnmuteRemote': this.rtcmOnMuteUnmuteRemote,
                'remoteMutedUnmuted': this.rtcmOnRemoteMuteUnmuted,
                'remoteHandToggled': this.rtcmOnRemoteHandToggled,
                'meetingEnded': this.meetingEnded,
                'snapshotTaken': this.rtcmOnSnapshotTaken,
                'meetingUpdated': this.rtcmOnMeetingUpdated,
            }

            this.rtcmConnection.socket.on('Whisper', (e) => {
                if (e && callbackList.hasOwnProperty(e.event)) {
                    callbackList[e.event](e.data)
                }
            })
        },
        initCanvasDesigner() {
            // here goes canvas designer
            this.canvasDesigner = new CanvasDesigner()

            // you can place widget.html anywhere
            this.canvasDesigner.widgetHtmlURL = '/js/canvas-designer/widget.html'
            this.canvasDesigner.widgetJsURL = '/js/canvas-designer/widget.min.js'
        },
        initWhiteboard() {
            if (this.videoList.length < 1 || !this.$refs.whiteboard || !CanvasDesigner) {
                return
            }

            if (!this.canvasDesigner) {
                this.initCanvasDesigner()
            }

            this.canvasDesigner.addSyncListener((data) => {
                this.rtcmConnection.send(data)
            })

            this.canvasDesigner.setSelected('pencil')

            this.canvasDesigner.setTools({
                pencil: true,
                text: true,
                image: true,
                pdf: true,
                eraser: true,
                line: true,
                arrow: true,
                dragSingle: true,
                dragMultiple: true,
                arc: true,
                rectangle: true,
                quadratic: true,
                bezier: false,
                marker: true,
                zoom: false,
                lineWidth: true,
                colorsPicker: true,
                extraOptions: true,
                code: false,
                undo: true
            })
            if (!this.canvasDesigner.iframe) {
                this.canvasDesigner.appendTo(this.$refs.whiteboard, () => {

                    this.rtcmConnection.extra.hasWhiteboard = true
                    this.updateExtraData()

                    this.canvasDesigner.captureStream((stream) => {
                        this.rtcmConnection.addStream(stream)
                        this.rtcmConnection.onstream({
                            streamid: stream.id,
                            stream: stream,
                            userid: this.rtcmConnection.userid,
                            type: 'local',
                            extra: this.rtcmConnection.extra,
                        })
                    })
                })
            }
        },
        updateExtraData() {
            if (this.rtcmConnection && this.rtcmConnection.socket) {
                this.rtcmConnection.updateExtraData()
            }
        },
        destroyWhiteboard() {
            if (this.canvasDesigner) {
                this.canvasDesigner.destroy()
                this.canvasDesigner = null

                let found = this.$refs.videos.find(video => {
                    return video.id === this.localWhiteboardStreamid
                })

                if (found && found.srcObject) {
                    if (this.rtcmConnection && this.localWhiteboardStreamid) {
                        this.rtcmConnection.removeStream(this.localWhiteboardStreamid)
                        this.rtcmOnStreamEnded({ id: this.localWhiteboardStreamid })
                        if (this.videoList.length > 1) {
                            this.recheckLiveParticipants({ streamid: this.localWhiteboardStreamid })
                        }
                        this.autoSetVideoMaximized()
                    }

                    this.emitSocketEvents('removedStream', found.srcObject)

                    // this.videoList = this.videoList.filter(video => video.id !== this.localScreenStreamid)
                    this.localWhiteboardStreamid = null
                } else {
                    this.localWhiteboardStreamid = null
                }
            }

            this.rtcmConnection.extra.hasWhiteboard = false
            this.updateExtraData()
        },
        hideAndDestroyWhiteboard() {
            formUtil.confirmAction()
                .then((result) => {
                    if (result.value) {
                        this.pageConfigs.layout = this.pageConfigs.lastLayout
                        this.showWhiteboard = false
                        this.destroyWhiteboard()
                    } else {
                        result.dismiss === Swal.DismissReason.cancel
                    }
                })
        },
        getMediaConstraints(setDefaults = false) {
            this.needStreamAddOrReplace = false

            if (setDefaults) {
                this.audioConstraints = {
                    "sampleSize": 16,
                    "channelCount": 2,
                    "echoCancellation": false,
                }
                this.videoConstraints = {
                    width: { min: 426, ideal: 1280, max: 4096 },
                    height: { min: 240, ideal: 720, max: 2160 },
                }
                return
            }

            if (this.pageConfigs.enableAudio) {
                if (this.mediaConfigurations.selectedAudioInput && this.mediaConfigurations.selectedAudioInput.uuid && this.mediaConfigurations.selectedAudioInput.uuid !== 'auto') {
                    this.audioConstraints = {
                        deviceId: { ideal: this.mediaConfigurations.selectedAudioInput.uuid }
                    }

                    if (this.audioConstraints.hasOwnProperty('deviceId') && this.mediaConfigurations.activeAudioInput !== this.audioConstraints.deviceId.ideal) {
                        this.needStreamAddOrReplace = true
                    }
                } else {
                    this.audioConstraints = true
                }
            } else {
                this.audioConstraints = false
            }

            if (this.pageConfigs.enableVideo) {
                if (this.mediaConfigurations.selectedVideoInput && this.mediaConfigurations.selectedVideoInput.uuid && this.mediaConfigurations.selectedVideoInput.uuid !== 'auto') {
                    this.videoConstraints = {
                        deviceId: { ideal: this.mediaConfigurations.selectedVideoInput.uuid }
                    }

                    if (this.videoConstraints.hasOwnProperty('deviceId') && this.mediaConfigurations.activeVideoInput !== this.videoConstraints.deviceId.ideal) {
                        this.needStreamAddOrReplace = true
                    }
                } else {
                    delete this.videoConstraints.deviceId
                }

                if (this.mediaConfigurations.facingMode !== 'auto') {
                    this.videoConstraints.facingMode = this.mediaConfigurations.facingMode

                    if (this.mediaConfigurations.activeFacingMode !== this.videoConstraints.facingMode) {
                        this.needStreamAddOrReplace = true
                    }
                } else {
                    if (this.videoConstraints.hasOwnProperty('facingMode')) {
                        if (this.mediaConfigurations.activeFacingMode !== this.videoConstraints.facingMode) {
                            this.needStreamAddOrReplace = true
                        }
                        delete this.videoConstraints.facingMode
                    }
                }

                if (this.mediaConfigurations.frameRate !== 'auto') {
                    this.videoConstraints.frameRate = this.mediaConfigurations.frameRate
                } else {
                    if (this.videoConstraints.hasOwnProperty('frameRate')) {
                        delete this.videoConstraints.frameRate
                    }
                }

                let selectedResolution = this.mediaDevices.resolutions.find(r => r.label === this.mediaConfigurations.selectedResolution)

                if (selectedResolution && selectedResolution.label !== 'Auto') {
                    this.videoConstraints.width = selectedResolution.constraints.width
                    this.videoConstraints.height = selectedResolution.constraints.height
                } else {
                    if (this.videoConstraints.hasOwnProperty('width')) {
                        delete this.videoConstraints.width
                    }
                    if (this.videoConstraints.hasOwnProperty('height')) {
                        delete this.videoConstraints.height
                    }
                }

            } else {
                this.videoConstraints = false
            }
        },
        applyMediaConstraints(setDefaults = false) {
            if (!(this.rtcmConnection && this.localVideo)) {
                return
            }

            this.getMediaConstraints(setDefaults)

            this.rtcmConnection.mediaConstraints = {
                video: this.meetingRulesHost.mediaConstraints.video ? this.videoConstraints : false,
                audio: this.meetingRulesHost.mediaConstraints.audio ? this.audioConstraints : false,
                screen: this.meetingRulesHost.mediaConstraints.screen,
            }

            this.rtcmConnection.bandwidth = {
                audio: this.mediaConfigurations.bandwidth.audio === 'auto' ? false : this.mediaConfigurations.bandwidth.audio,
                video: this.mediaConfigurations.bandwidth.video === 'auto' ? false : this.mediaConfigurations.bandwidth.video,
                screen: this.mediaConfigurations.bandwidth.screen === 'auto' ? false : this.mediaConfigurations.bandwidth.screen,
            }

            this.mediaConfigurations.activeAudioInput = this.audioConstraints && this.audioConstraints.hasOwnProperty('deviceId') ? this.audioConstraints.deviceId.ideal : null
            this.mediaConfigurations.activeVideoInput = this.videoConstraints && this.videoConstraints.hasOwnProperty('deviceId') ? this.videoConstraints.deviceId.ideal : null
            this.mediaConfigurations.activeFacingMode = this.mediaConfigurations.facingMode

            if (!this.needStreamAddOrReplace) {
                this.rtcmConnection.applyConstraints(this.rtcmConnection.mediaConstraints)
                return
            }

            this.closeConnectionAndStream(true)
        },
        closeConnectionAndStream(reopen = false, callbackFn) {
            this.stopAutoEndMeeting()

            if (this.autoEndingToast && _.isEmpty(this.autoEndingToast)) {
                swtToast.close()
                this.autoEndingToast = null
            }

            if (this.rtcmConnection) {
                try {
                    this.destroyWhiteboard()

                    this.rtcmConnection.attachStreams.forEach((localStream) => {
                        localStream.stop()
                    })

                    if (this.$refs.greenRoomVideo && this.$refs.greenRoomVideo.srcObject) {
                        const stream = this.$refs.greenRoomVideo.srcObject
                        stream.stop()
                        this.localGreenRoomStream = null
                    } else if (this.localGreenRoomStream) {
                        const stream = this.localGreenRoomStream
                        stream.stop()
                        this.localGreenRoomStream = null
                    }


                    if (this.localVideo) {
                        // this.rtcmConnection.removeStream(this.localVideo.id)

                        this.emitSocketEvents('removedStream', this.localVideo)
                    }

                    this.rtcmConnection.getAllParticipants()
                        .forEach((pid) => {
                            this.rtcmConnection.disconnectWith(pid)
                        })

                    this.rtcmConnection.leave()
                    this.rtcmConnection.closeSocket()

                    window.setTimeout(() => {
                        this.localVideo = null
                        this.localScreenStreamid = null
                        this.localWhiteboardStreamid = null
                        this.localGreenRoomStream = null
                        if (this.rtcmConnection) {
                            this.rtcmConnection.recorder = null
                        }
                        this.rtcmConnection = null

                        if (reopen) {
                            this.getOnline()
                        }
                        if (callbackFn && _.isFunction(callbackFn)) {
                            callbackFn()
                        }
                    }, 500)

                    this.stopKeepAlivePolling()
                    this.stopAutoEndMeeting()
                } catch (e) { }
            }
            this.videoList = []
        },
        initHark(args) {
            if (!window.hark || !this.pageConfigs.speechDetection) {
                return
            }

            let streamedObject = args.streamedObject
            let stream = args.stream
            let connection = args.connection

            let options = {}
            let speechEvents = hark(stream, options)

            speechEvents.on('speaking', function () {
                // console.log('speaking')
                connection.onspeaking(streamedObject)
            })

            speechEvents.on('stopped_speaking', function () {
                // console.log('silence')
                connection.onsilence(streamedObject);
            })

            // speechEvents.on('volume_change', function(volume, threshold) {
            //     streamedObject.volume = volume
            //     streamedObject.threshold = threshold
            // connection.onvolumechange(streamedObject)
            // })

            window.harkInitiated = true
            // console.log('hark initiated - ', streamedObject.extra.name)
        },
        recheckLiveParticipants(stream) {
            let newList = []
            const liveParticipants = this.rtcmConnection ? this.rtcmConnection.getAllParticipants() : []

            this.videoList.forEach((item, index) => {
                const userIndex = liveParticipants.findIndex(m => m === item.streamUserId)
                if ((!stream || (stream && item.id !== stream.streamid)) && (item.local || (!item.local && userIndex !== -1))) {
                    newList.push(item)
                } else {
                    item.status = false
                    newList.push(item)
                }
            })

            this.videoList = newList

            setTimeout(() => {
                this.videoList = this.videoList.filter(v => v.status)
                this.autoSetVideoMaximized()
            }, 3000)
        },
        autoSetVideoMaximized() {
            const setMaximized = (maximizedIndex) => {
                this.videoList[maximizedIndex].maximized = true
                this.videoList = this.videoList.map((v, index) => {
                    v.maximized = false
                    if (index === maximizedIndex) {
                        v.maximized = true
                    }
                    return v
                })
            }

            if (this.videoList.length > 1) {
                const maximizedRemoteVideoIndex = this.videoList.findIndex(v => !v.local && v.maximized && v.status)
                if (maximizedRemoteVideoIndex === -1) {
                    const remoteVideoIndex = this.videoList.findIndex(v => !v.local && v.hasStream)
                    if (remoteVideoIndex !== -1) {
                        setMaximized(remoteVideoIndex)
                    } else {
                        setMaximized(0)
                    }
                } else {
                    const whiteboardRemoteVideoIndex = this.videoList.findIndex(v => !v.local && v.whiteboard && v.status)
                    if (whiteboardRemoteVideoIndex !== -1 && this.videoList[whiteboardRemoteVideoIndex].whiteboard) {
                        setMaximized(whiteboardRemoteVideoIndex)
                    }
                }
            } else if (this.videoList.length) {
                setMaximized(0)
            }
        },
        validateMediaDeviceRequest(mediaConstraints) {
            let deviceRequest = {
                video: mediaConstraints.video ? true : false,
                audio: mediaConstraints.audio ? true : false,
                screen: mediaConstraints.screen ? true : false,
            }

            if (this.pageConfigs.allowJoiningWithoutDevices) {
                if (deviceRequest.audio && !(this.mediaDevices.audioInput && this.mediaDevices.audioInput.length)) {
                    deviceRequest.audio = false
                }

                if (deviceRequest.video && !(this.mediaDevices.videoInput && this.mediaDevices.videoInput.length)) {
                    deviceRequest.video = false
                }
            }

            return deviceRequest
        },
        joinRoom(meetingRoomId) {
            this.rtcmConnection.session = {
                ...this.meetingRulesGuest.session
            }

            this.videoList = []

            this.getMediaConstraints()

            const activeMeetingRules = this.entity.canModerate ? this.meetingRulesHost : this.meetingRulesGuest

            const deviceRequest = this.validateMediaDeviceRequest(activeMeetingRules.mediaConstraints)

            this.rtcmConnection.mediaConstraints = {
                video: deviceRequest.video ? this.videoConstraints : false,
                audio: deviceRequest.audio ? this.audioConstraints : false,
                screen: deviceRequest.screen,
            }

            if (this.pageConfigs.allowJoiningWithoutDevices && !deviceRequest.audio && !deviceRequest.video && !deviceRequest.screen) {
                this.rtcmConnection.dontCaptureUserMedia = true
            }

            this.rtcmConnection.sdpConstraints.mandatory = {
                ...activeMeetingRules.mandatory
            }

            this.rtcmConnection.autoCloseEntireSession = activeMeetingRules.autoCloseEntireSession
            this.rtcmConnection.enableScalableBroadcast = activeMeetingRules.enableScalableBroadcast
            if (this.rtcmConnection.enableScalableBroadcast) {
                this.rtcmConnection.maxRelayLimitPerUser = activeMeetingRules.maxRelayLimitPerUser
            }
            this.rtcmConnection.extra.isInitiator = this.entity.canModerate

            // console.log('mediaConstraints')
            // console.log(this.rtcmConnection.mediaConstraints)

            // console.log('sdpConstraints')
            // console.log(this.rtcmConnection.sdpConstraints)

            this.rtcmConnection.join(meetingRoomId, (isJoined, roomid, error) => {
                this.isLoading = false

                if (isJoined === false || error) {
                    this.closeConnectionAndStream()
                    if (error === 'Room full') {
                        this.$toasted.error($t('meeting.room_full'), this.$toastConfig.error)
                    } else {
                        this.$toasted.error($t('meeting.unable_to_join'), this.$toastConfig.error)
                    }
                } else {
                    this.meetingRoomNotFound = false
                    this.updatePageConfigs(this.entity.canModerate)

                    this.initSocketListener()

                    this.$toasted.success($t('meeting.meeting_joined'), this.$toastConfig)

                    // setTimeout(() => {
                    //     this.updateUsername()
                    // }, 2000)
                }
            })
        },
        applyOnStartConfigs() {
            if (!this.rtcmConnection.extra.isInitiator && this.pageConfigs.muteParticipantsOnStart) {
                window.setTimeout(() => {
                    this.toggleAudio(null, true)
                }, 1000)
            }
        },
        shareScreen() {
            try {
                this.rtcmConnection.addStream({
                    screen: true,
                    streamCallback: (stream) => {
                        this.rtcmConnection.extra.screenStreamId = stream.id
                        this.updateExtraData()
                    }
                })
            } catch (e) {
            }
        },
        stopSharingScreen() {
            this.isLoading = true
            this.rtcmConnection.extra.screenStreamId = null
            this.updateExtraData()

            let found = this.$refs.videos.find(video => {
                return video.id === this.localScreenStreamid
            })

            if (found && found.srcObject) {
                let tracks = found.srcObject.getTracks()
                tracks.forEach(track => {
                    track.removeEventListener('ended', this.stopSharingScreen)
                    track.enabled = false
                    track.stop()
                })
                this.rtcmConnection.removeStream(this.localScreenStreamid)
                this.emitSocketEvents('removedStream', found.srcObject)

                // this.videoList = this.videoList.filter(video => video.id !== this.localScreenStreamid)
                this.localScreenStreamid = null
                this.isLoading = false
            } else {
                this.localScreenStreamid = null
                this.isLoading = false
            }
        },
        getOnline() {
            this.isLoading = true
            this.showAgenda = false
            const meetingStatusEalier = this.entity.status

            this.$gaEvent('engagement', 'meeting_getOnline')

            this.initMediaAndRtcmConnection()

            this.Custom({
                url: `/${this.initUrl}/${this.uuid}/join`,
                method: 'post',
            })
                .then(response => {
                    this.meetingRoomId = response.meeting.roomId
                    response.meeting = this.updateMeetingTimezone(response.meeting)
                    this.entity = response.meeting
                    this.rtcmConnection.extra = {
                        username: this.user.username,
                        name: this.user.name,
                        uuid: this.user.uuid,
                        avatar: this.profile.avatar,
                        cover: this.profile.cover,
                        audioMuted: !this.pageConfigs.enableAudio,
                        videoMuted: !this.pageConfigs.enableVideo,
                        isHandUp: this.isHandUp,
                        isInitiator: false,
                    }

                    if (this.enableLogs) {
                        console.log('rtcmConnection', this.rtcmConnection)
                        console.log('mediaConfigurations', this.mediaConfigurations)
                        console.log('mediaDevices', this.mediaDevices)
                        console.log('pageConfigs', this.pageConfigs)
                        console.log('videoConstraints', this.videoConstraints)
                        console.log('audioConstraints', this.audioConstraints)
                        console.log('meetingRulesHost', this.meetingRulesHost)
                        console.log('meetingRulesGuest', this.meetingRulesGuest)
                        console.log('rtcmConnection-ExtraData', this.rtcmConnection.extra)
                    }

                    this.rtcmConnection.checkPresence(this.meetingRoomId, (isRoomExist, roomid) => {
                        if (isRoomExist === true) {
                            this.meetingRoomNotFound = false
                            this.joinRoom(this.meetingRoomId)
                        } else {
                            this.isLoading = false
                            this.meetingRoomNotFound = true
                            this.$toasted.error($t('meeting.room_not_found'), this.$toastConfig.error)
                        }

                        this.startMeetingTimer()
                    })
                })
                .catch(error => {
                    this.isLoading = false
                    formUtil.handleErrors(error)
                })
        },
        getOffline() {
            this.$gaEvent('engagement', 'meeting_getOffline')

            let alert = 'confirm'

            this.isLoading = true
            this.meetingAction('leave', null, {
                alert,
                sameCallbackIfError: true,
                callback: (e) => {
                    this.showAgenda = true
                    this.showWhiteboard = false
                    if (this.pageConfigs.layout === 'presentation') {
                        this.pageConfigs.layout = this.pageConfigs.lastLayout
                    }
                    this.closeConnectionAndStream(false, () => {
                        this.stopMeetingTimer()
                        this.setupGreenRoom()
                        this.initMediaAndRtcmConnection()
                    })
                }
            })
        },

        // meeting action methods
        meetingAction(action, data = {}, opts = { alert: 'confirm' }) {
            const defaultOpts = { alert: 'confirm' }
            opts = Object.assign({}, defaultOpts, opts)

            const callApi = (dataToSend) => {
                this.isLoading = true
                data = dataToSend ? dataToSend : data

                this.Custom({
                    url: `/${this.initUrl}/${this.uuid}/${action}`,
                    method: 'post',
                    data
                })
                    .then(response => {
                        response.meeting = this.updateMeetingTimezone(response.meeting)
                        this.entity = response.meeting
                        this.$toasted.success(response.message, this.$toastConfig)
                        if (opts.callback) {
                            opts.callback(response)
                        }
                        this.isLoading = false
                    })
                    .catch(error => {
                        if (opts.callback && opts.sameCallbackIfError) {
                            opts.callback(error)
                        }
                        this.isLoading = false
                        formUtil.handleErrors(error)
                    })
            }

            if (!action) {
                this.isLoading = false
                return
            }

            if (opts.alert === 'confirm' || opts.alert === true) {
                formUtil.confirmAction()
                    .then((result) => {
                        if (result.value) {
                            callApi()
                        } else {
                            this.isLoading = false
                            result.dismiss === Swal.DismissReason.cancel
                        }
                    })
            } else if (opts.alert === 'input') {
                swtAlert.fire({
                    title: opts.title,
                    input: 'text',
                    inputPlaceholder: opts.inputPlaceholder,
                    showCancelButton: true,
                    confirmButtonText: 'Proceed!',
                    cancelButtonText: 'Go Back!'
                })
                    .then((result) => {
                        if (result.value) {
                            let toSend = {}
                            toSend[opts.fieldName] = result.value
                            callApi(toSend)
                        } else {
                            this.isLoading = false
                            result.dismiss === Swal.DismissReason.cancel
                        }
                    })
            } else {
                callApi()
            }
        },


        // meeting related methods
        updateMeetingRules() {
            if (this.entity.type.uuid === 'video_conference') {
                this.meetingRulesHost = {
                    session: {
                        audio: true,
                        video: true,
                        screen: false,
                        data: true,
                        oneway: false,
                    },
                    mediaConstraints: {
                        audio: true,
                        video: true,
                        screen: false,
                    },
                    mandatory: {
                        OfferToReceiveAudio: true,
                        OfferToReceiveVideo: true,
                    },
                    autoCloseEntireSession: false,
                    enableScalableBroadcast: false,
                }
                this.meetingRulesGuest = {
                    session: {
                        audio: true,
                        video: true,
                        screen: false,
                        data: true,
                        oneway: false,
                    },
                    mediaConstraints: {
                        audio: true,
                        video: true,
                        screen: false,
                    },
                    mandatory: {
                        OfferToReceiveAudio: true,
                        OfferToReceiveVideo: true,
                    },
                    autoCloseEntireSession: false,
                    enableScalableBroadcast: false,
                }
            } else if (this.entity.type.uuid === 'audio_conference') {
                this.meetingRulesHost = {
                    session: {
                        audio: true,
                        video: false,
                        screen: false,
                        data: true,
                        oneway: false,
                    },
                    mediaConstraints: {
                        audio: true,
                        video: false,
                        screen: false,
                    },
                    mandatory: {
                        OfferToReceiveAudio: true,
                        OfferToReceiveVideo: false,
                    },
                    autoCloseEntireSession: false,
                    enableScalableBroadcast: false,
                }
                this.meetingRulesGuest = {
                    session: {
                        audio: true,
                        video: false,
                        screen: false,
                        data: true,
                        oneway: false,
                    },
                    mediaConstraints: {
                        audio: true,
                        video: false,
                        screen: false,
                    },
                    mandatory: {
                        OfferToReceiveAudio: true,
                        OfferToReceiveVideo: false,
                    },
                    autoCloseEntireSession: false,
                    enableScalableBroadcast: false,
                }
            } else if (this.entity.type.uuid === 'webinar') {
                this.meetingRulesHost = {
                    session: {
                        audio: true,
                        video: true,
                        screen: false,
                        data: true,
                        oneway: true,
                    },
                    mediaConstraints: {
                        audio: true,
                        video: true,
                        screen: false,
                    },
                    mandatory: {
                        OfferToReceiveAudio: false,
                        OfferToReceiveVideo: false,
                    },
                    autoCloseEntireSession: true,
                    enableScalableBroadcast: true,
                    maxRelayLimitPerUser: 1,
                }
                this.meetingRulesGuest = {
                    session: {
                        audio: true,
                        video: true,
                        screen: false,
                        data: true,
                        oneway: true,
                    },
                    mediaConstraints: {
                        audio: false,
                        video: false,
                        screen: false,
                    },
                    mandatory: {
                        OfferToReceiveAudio: true,
                        OfferToReceiveVideo: true,
                    },
                    autoCloseEntireSession: true,
                    enableScalableBroadcast: true,
                    maxRelayLimitPerUser: 1,
                }
            } else if (this.entity.type.uuid === 'live_class') {
                this.meetingRulesHost = {
                    session: {
                        audio: true,
                        video: true,
                        screen: false,
                        data: true,
                        oneway: false,
                    },
                    mediaConstraints: {
                        audio: true,
                        video: true,
                        screen: false,
                    },
                    mandatory: {
                        OfferToReceiveAudio: true,
                        OfferToReceiveVideo: true,
                    },
                    autoCloseEntireSession: true,
                    enableScalableBroadcast: false,
                }
                this.meetingRulesGuest = {
                    session: {
                        audio: true,
                        video: true,
                        screen: false,
                        data: true,
                        oneway: false,
                    },
                    mediaConstraints: {
                        audio: true,
                        video: true,
                        screen: false,
                    },
                    mandatory: {
                        OfferToReceiveAudio: true,
                        OfferToReceiveVideo: true,
                    },
                    autoCloseEntireSession: true,
                    enableScalableBroadcast: false,
                }
            } else if (this.entity.type.uuid === 'podcast') {
                this.meetingRulesHost = {
                    session: {
                        audio: true,
                        video: false,
                        screen: false,
                        data: false,
                        oneway: true,
                    },
                    mediaConstraints: {
                        audio: true,
                        video: false,
                        screen: false,
                    },
                    mandatory: {
                        OfferToReceiveAudio: false,
                        OfferToReceiveVideo: false,
                    },
                    autoCloseEntireSession: true,
                    enableScalableBroadcast: true,
                    maxRelayLimitPerUser: 1,
                }
                this.meetingRulesGuest = {
                    session: {
                        audio: true,
                        video: false,
                        screen: false,
                        data: false,
                        oneway: true,
                    },
                    mediaConstraints: {
                        audio: false,
                        video: false,
                        screen: false,
                    },
                    mandatory: {
                        OfferToReceiveAudio: true,
                        OfferToReceiveVideo: false,
                    },
                    autoCloseEntireSession: true,
                    enableScalableBroadcast: true,
                    maxRelayLimitPerUser: 1,
                }
            }
        },
        updateMeetingTimezone(meetingEntity) {
            const getTimezoneDateTime = (dt) => {
                return MomentTz.momentDateTimeTz(dt, this.vars.serverDateTimeFormat)
            }

            this.updateEntityBackup(meetingEntity)
            meetingEntity.startDateTime = getTimezoneDateTime(meetingEntity.startDateTime)
            if (meetingEntity.plannedStartDateTime) {
                meetingEntity.plannedStartDateTime = getTimezoneDateTime(meetingEntity.plannedStartDateTime)
            }
            if (meetingEntity.startedAt) {
                meetingEntity.startedAt = getTimezoneDateTime(meetingEntity.startedAt)
            }
            if (meetingEntity.estimatedEndTime) {
                meetingEntity.estimatedEndTime = getTimezoneDateTime(meetingEntity.estimatedEndTime)
            }
            return meetingEntity
        },


        // event callback methods
        beforeUnload(event) {
            if (this.localVideo) {
                this.emitSocketEvents('removedStream', this.localVideo)
            }
        },
        logEvent(msg, args, type = 'log') {
            if (this.enableLogs) {
                if (type === 'log') {
                    console.log(msg, args)
                } else if (type === 'error') {
                    console.error(msg, args)
                } else if (type === 'debug') {
                    console.trace(msg, args)
                }
            }
        },

        // devices modal methods
        toggleDevicesModal() {
            this.mediaConfigFormData = _.cloneDeep(this.mediaConfigurations)
            this.showDevicesModal = true
        },
        onDevicesModalOK(e) {
            e.preventDefault()

            if (!areEqual(this.mediaConfigFormData, this.mediaConfigurations)) {
                this.mediaConfigurations = _.cloneDeep(this.mediaConfigFormData)
                this.applyMediaConstraints()
            }

            this.$nextTick(() => {
                this.$bvModal.hide('devicesModal')
            })
        },
        onDevicesModalCancel(e) {
            e.preventDefault()
            this.$nextTick(() => {
                this.$bvModal.hide('devicesModal')
            })
        },


        // page methods
        updatePageConfigs(isInitiator = false) {
            const configAudioRecFormat = this.configs.meeting.recordingFormatAudio ? this.configs.meeting.recordingFormatAudio : 'audio/webm'
            const configVideoRecFormat = this.configs.meeting.recordingFormatVideo ? this.configs.meeting.recordingFormatVideo : 'video/webm'

            let configOptions = {}
            let recordingType = this.mediaConfigurations.recording.type
            let recordingFormat = this.mediaConfigurations.recording.mimeType

            if (this.entity.type.uuid === 'video_conference') {
                configOptions = {
                    enableAudio: true,
                    enableVideo: true,
                    showEnableAudioBtn: true,
                    showEnableVideoBtn: true,
                    enableWhiteboard: true,
                }
                recordingType = 'video'
                recordingFormat = configVideoRecFormat
            } else if (this.entity.type.uuid === 'audio_conference') {
                configOptions = {
                    enableAudio: true,
                    enableVideo: true,
                    showEnableAudioBtn: true,
                    showEnableVideoBtn: false,
                    enableScreenSharing: false,
                    enableWhiteboard: false,
                }
                recordingType = 'audio'
                recordingFormat = configAudioRecFormat
            } else if (this.entity.type.uuid === 'webinar') {
                configOptions = isInitiator ? {
                    enableAudio: true,
                    enableVideo: true,
                    showEnableAudioBtn: true,
                    showEnableVideoBtn: true,
                    enableHandGesture: false,
                    enableWhiteboard: true,
                } : {
                    enableAudio: true,
                    enableVideo: true,
                    showEnableAudioBtn: false,
                    showEnableVideoBtn: false,
                    enableScreenSharing: false,
                    enableFileSharing: false,
                    enableRecording: false,
                    enableHandGesture: false,
                    enableWhiteboard: false,
                }
                recordingType = 'video'
                recordingFormat = configVideoRecFormat
            } else if (this.entity.type.uuid === 'live_class') {
                configOptions = isInitiator ? {
                    enableAudio: true,
                    enableVideo: true,
                    showEnableAudioBtn: true,
                    showEnableVideoBtn: true,
                    enableWhiteboard: true,
                } : {
                    enableAudio: true,
                    enableVideo: true,
                    showEnableAudioBtn: false,
                    showEnableVideoBtn: false,
                    enableScreenSharing: false,
                    enableFileSharing: false,
                    enableRecording: false,
                    enableWhiteboard: false,
                }
                recordingType = 'video'
                recordingFormat = configVideoRecFormat
            } else if (this.entity.type.uuid === 'podcast') {
                configOptions = isInitiator ? {
                    enableAudio: true,
                    enableVideo: false,
                    showEnableAudioBtn: true,
                    showEnableVideoBtn: false,
                    enableScreenSharing: false,
                    enableHandGesture: false,
                    enableWhiteboard: false,
                } : {
                    enableAudio: true,
                    enableVideo: false,
                    showEnableAudioBtn: false,
                    showEnableVideoBtn: false,
                    enableScreenSharing: false,
                    enableFileSharing: false,
                    enableRecording: false,
                    enableHandGesture: false,
                    enableWhiteboard: false,
                }
                recordingType = 'audio'
                recordingFormat = configAudioRecFormat
            }

            configOptions.objForEach((value, key) => this.pageConfigs[key] = value)

            this.mediaConfigurations.recording.type = recordingType
            this.mediaConfigurations.recording.mimeType = recordingFormat
            this.mediaConfigurations.recording.timeSlice = this.pageConfigs.recordingTimeSlice || 5000

            this.rtcmConnection.extra.audioMuted = !this.pageConfigs.enableAudio
            this.rtcmConnection.extra.videoMuted = !this.pageConfigs.enableVideo
            this.rtcmConnection.extra.isHandUp = this.isHandUp
            this.updateExtraData()

            if (this.pageConfigs.enableWhiteboard) {
                loadScript('/js/canvas-designer/webrtc-handler.js')
                loadScript('/js/canvas-designer/canvas-designer-widget.js')
            }
            this.configs.meeting.debugMode = true
        },
        destroyPage() {
            if (window.countdownInterval) {
                clearInterval(window.countdownInterval)
            }

            this.SetUiConfig({ pageHeaderShow: true, pageFooterShow: true })

            this.closeConnectionAndStream()

            if (window.Echo) {
                if (window.meetingChannel) {
                    window.meetingChannel.stopListening('MeetingStatusChanged')
                    window.meetingChannel.stopListening('NewMessage')
                }
                window.Echo.leave(`Meeting.${this.uuid}`)
            }

            if (screenfull.isEnabled) {
                screenfull.off('change')
                screenfull.off('error')
            }
        },
        getInitialData() {
            this.isLoading = true

            if (!window.Echo) {
                this.$toasted.error($t('config.pusher.credential_required'), this.$toastConfig.error)
                this.$router.push({ name: this.fallBackRoute })
                return
            }

            return this.Custom({
                url: `/${this.initUrl}/${this.uuid}/pam`,
                method: 'get',
                params: {
                    isPam: true
                }
            })
                .then(response => {
                    if (response.isInstantMeeting) {
                        this.pageConfigs.hasAgenda = false
                    }

                    response.config.objForEach((value, key) => this.pageConfigs[key] = value)

                    this.pageConfigs.disableScroll = this.pageConfigs.layout === 'grid' ? true : (response.config && response.config.hasOwnProperty('disableScroll') ? response.config.disableScroll : this.pageConfigs.disableScroll)

                    response = this.updateMeetingTimezone(response)
                    this.entity = response
                    this.updateMeetingRules()

                    //Changes to prefer rear camera
                    if (this.pageConfigs.preferRearCameraFirst) {
                        this.mediaConfigurations.facingMode = 'environment'
                    }

                    if (response.roomId && response.status === 'live') {
                        setTimeout(() => {
                            this.initMediaAndRtcmConnection()

                            this.rtcmConnection.checkPresence(response.roomId, (isRoomExist, roomid) => {
                                this.roomIdAlive = !!isRoomExist
                                if (isRoomExist === true) {
                                    this.meetingRoomNotFound = false
                                }
                            })
                        }, 1000)
                    }

                    this.joinChannel()
                    this.setupGreenRoom()

                    if (response.isInstantMeeting && !response.isBlocked && response.status === 'live') {
                        if (!((this.rtcmConnection && this.rtcmConnection.isInitiator) || response.canModerate) && (response.type.uuid === 'live_class' || response.type.uuid === 'webinar')) { //if current user is a normal user (not an initiator or moderator), and type is live class or webinar
                            this.isLoading = false
                        } else {
                            if (this.pageConfigs.forceUpdateUsername) {
                                this.updateUsername(false, this.getOnline)
                            } else {
                                this.getOnline()
                            }
                        }
                    } else {
                        this.isLoading = false
                    }

                    return response
                })
                .catch(error => {
                    this.isLoading = false
                    formUtil.handleErrors(error)
                    this.$router.push({ name: this.fallBackRoute })
                    return error
                })
        },
        stopStream(stream) {
            if (stream && _.isFunction(stream.stop)) {
                stream.stop()
            }
            if (stream && _.isFunction(stream.getTracks)) {
                stream.getTracks().forEach(track => track.stop())
            }
        },
        toggleVideoTracks(stream, value) {
            if (!stream) {
                return
            }
            const tracks = stream.getVideoTracks()
            tracks.forEach(track => {
                track.enabled = value
            })
        },
        toggleAudioTracks(stream, value) {
            if (!stream) {
                return
            }
            const tracks = stream.getAudioTracks()
            tracks.forEach(track => {
                track.enabled = value
            })
        },
        setupGreenRoom(force = false) {

            const setupMicActivity = (stream) => {
                if (this.$refs.greenRoomAudio && this.pageConfigs.enableAudio) {
                    const audioContext = new AudioContext()
                    const analyser = audioContext.createAnalyser()
                    const microphone = audioContext.createMediaStreamSource(stream)
                    const javascriptNode = audioContext.createScriptProcessor(2048, 1, 1)

                    analyser.smoothingTimeConstant = 0.8
                    analyser.fftSize = 1024

                    microphone.connect(analyser)
                    analyser.connect(javascriptNode)
                    javascriptNode.connect(audioContext.destination)

                    VuMeter(this.$refs.greenRoomAudio, {
                        width: 'sibling',
                        boxGapFraction: 0.2,
                    })

                    javascriptNode.onaudioprocess = () => {
                        let array = new Uint8Array(analyser.frequencyBinCount)
                        analyser.getByteFrequencyData(array)
                        let values = 0

                        let length = array.length
                        for (let i = 0; i < length; i++) {
                            values += (array[i])
                        }

                        let average = values / length
                        let volumeActivity = Math.round(average)

                        // console.log(Math.round(average))
                        this.micVolumeActivity = volumeActivity < 0 ? 0 : volumeActivity
                    }
                }
            }



            if (this.$refs.videos && this.$refs.videos.length) {
                if (this.localGreenRoomStream) {
                    this.stopStream(this.localGreenRoomStream)
                }
                this.localGreenRoomStream = null

                return
            }

            if (this.pageConfigs.enableVideo && this.pageConfigs.enableAudio && !(this.$refs.greenRoomVideo && this.$refs.greenRoomVideo.srcObject)) {
                force = true
            }



            if (!this.localGreenRoomStream || force) {
                if (this.localGreenRoomStream) {
                    this.stopStream(this.localGreenRoomStream)
                }
                this.localGreenRoomStream = null

                this.getMediaConstraints()

                if ((this.videoConstraints && this.mediaConfigurations.selectedVideoInput) || (this.audioConstraints && this.mediaConfigurations.selectedAudioInput)) {

                    navigator.mediaDevices.getUserMedia({
                        video: this.videoConstraints,
                        audio: this.audioConstraints || true
                    })
                        .then((stream) => {
                            this.toggleVideoTracks(stream, this.pageConfigs.enableVideo)

                            this.toggleAudioTracks(stream, this.pageConfigs.enableAudio)

                            this.localGreenRoomStream = stream

                            if (this.$refs.greenRoomVideo && this.pageConfigs.enableVideo) {
                                this.$refs.greenRoomVideo.srcObject = stream
                            }

                            setTimeout(() => {
                                setupMicActivity(this.localGreenRoomStream)
                            }, 1000)
                        })
                        .catch(this.rtcmOnMediaError)
                }
            } else {
                if (this.pageConfigs.enableVideo || this.pageConfigs.enableAudio) {

                    this.toggleVideoTracks(this.localGreenRoomStream, this.pageConfigs.enableVideo)

                    this.toggleAudioTracks(this.localGreenRoomStream, this.pageConfigs.enableAudio)

                    if (!this.pageConfigs.enableVideo && this.$refs.greenRoomVideo) {
                        this.$refs.greenRoomVideo.srcObject = null
                    }

                    setupMicActivity(this.localGreenRoomStream)
                } else {
                    if (this.localGreenRoomStream) {
                        this.stopStream(this.localGreenRoomStream)
                    }
                    this.localGreenRoomStream = null
                    this.$refs.greenRoomVideo.srcObject = null
                }
            }
        },
        setupMediaDevices() {
            const rtcmc = new RTCMultiConnection()
            if (rtcmc.DetectRTC.isWebRTCSupported === false) {
                this.$toasted.error($t('meeting.invalid_browser_error'), this.$toastConfig.error)
            }

            this.isLoading = true

            this.mediaDeviceIssue = this.permissionRejected = false

            const loadDevices = (callbackFn) => {
                rtcmc.DetectRTC.load(() => {
                    if (this.enableLogs) {
                        console.log(rtcmc.DetectRTC)
                    }

                    if (rtcmc.DetectRTC.hasMicrophone === true) {
                        this.mediaDevices.audioInput = rtcmc.DetectRTC.audioInputDevices.map(device => {
                            return {
                                'uuid': device.deviceId || device.id,
                                'name': device.label || `microphone ${this.mediaDevices.audioInput.length + 1}`,
                            }
                        })
                    } else {
                        this.mediaDeviceIssue = true
                    }

                    if (rtcmc.DetectRTC.hasWebcam === true) {
                        this.mediaDevices.videoInput = rtcmc.DetectRTC.videoInputDevices.map(device => {
                            return {
                                'uuid': device.deviceId || device.id,
                                'name': device.label || `camera ${this.mediaDevices.videoInput.length + 1}`,
                            }
                        })
                    } else {
                        this.mediaDeviceIssue = true
                    }

                    if (rtcmc.DetectRTC.hasSpeakers === true) {
                        this.mediaDevices.audioOutput = rtcmc.DetectRTC.audioOutputDevices.map(device => {
                            return {
                                'uuid': device.deviceId || device.id,
                                'name': device.label || `speaker ${this.mediaDevices.audioOutput.length + 1}`,
                            }
                        })
                    } else {
                        this.$toasted.error($t('meeting.audio_output_device_error'), this.$toastConfig.error)
                    }

                    this.mediaConfigurations.selectedAudioInput = this.mediaDevices.audioInput ? this.mediaDevices.audioInput[0] : null
                    this.mediaConfigurations.selectedVideoInput = this.mediaDevices.videoInput ? this.mediaDevices.videoInput[0] : null

                    this.mediaConfigFormData = _.cloneDeep(this.mediaConfigurations)

                    if (callbackFn) {
                        callbackFn()
                    }

                    this.getInitialData()
                })
            }

            if (!rtcmc.DetectRTC.MediaDevices.length || (rtcmc.DetectRTC.MediaDevices[0] && rtcmc.DetectRTC.MediaDevices[0].isCustomLabel)) {

                navigator.mediaDevices.getUserMedia({ audio: true, video: true })
                    .then((stream) => {
                        loadDevices(() => {
                            // release camera
                            stream.getTracks().forEach(function (track) {
                                track.stop()
                            })
                        })
                    })
                    .catch((error) => {
                        this.rtcmOnMediaError(error)
                        this.getInitialData()
                    })
            } else {
                loadDevices()
            }
        },
        doInit() {
            this.Init({ url: this.initUrl })

            if (window.isDuplicate()) {
                this.duplicateTab = true
            }

            this.setupMediaDevices()
        },
        initNetworkListener() {
            const vm = this
            window.addEventListener('offline', (e) => {
                if (vm.rtcmConnection && vm.videoList && vm.videoList.length) {
                    vm.videoList = vm.videoList.slice(0, 1)
                    vm.autoSetVideoMaximized()
                }
            })

            window.addEventListener('online', (e) => {
                vm.closeConnectionAndStream(true)
            })
        },
        updateUsername(showCancel = true, callbackFn) {
            swtAlert.fire({
                title: $t('misc.ask_name.title'),
                showCancelButton: showCancel,
                confirmButtonText: $t('misc.ask_name.confirm_btn'),
                cancelButtonText: $t('misc.ask_name.cancel_btn_2'),
                input: 'text',
            })
                .then((result) => {
                    if (result.value) {
                        let guestUserData = getFromStorage('guestUserData', true) || {}
                        guestUserData = {
                            ...this.profile,
                            ...guestUserData
                        }
                        guestUserData.username = toSnakeCase(result.value)
                        guestUserData.name = result.value

                        this.profile = { ...guestUserData }
                        saveToStorage('guestUserData', guestUserData)

                        this.rtcmConnection.extra.username = this.profile.username
                        this.rtcmConnection.extra.name = this.profile.name
                        this.updateExtraData()

                        if (callbackFn && _.isFunction(callbackFn)) {
                            callbackFn()
                        }
                    } else {
                        result.dismiss === Swal.DismissReason.cancel
                    }
                })
        },
        setDefaultGuestUserData() {
            let guestUserData = getFromStorage('guestUserData', true)

            if (!guestUserData || !guestUserData.uuid) {
                const Uuid = uuid()
                const username = Uuid.substring(0, 8)

                guestUserData = {
                    uuid: uuid(),
                    username: username,
                    name: username
                }
            }

            this.profile = { ...guestUserData }
            saveToStorage('guestUserData', guestUserData)
        },
    },
    mounted() {
        document.body.classList.add("meeting-page")
        if (this.$route.params.uuid) {
            this.uuid = this.$route.params.uuid
        }

        if (screenfull.isEnabled) {
            screenfull.on('change', () => {
                this.SetUiConfig({ fullScreen: screenfull.isFullscreen })
            })
            screenfull.on('error', event => {
                console.error('Failed to enable fullscreen', event);
            })

            this.SetUiConfig({ fullScreen: false })
        }

        this.GetConfig({ params: { pam: true, meeting: this.uuid } })
            .then((configs) => {
                if (!(configs && configs.pusher && configs.signalServers && configs.iceServers)) {
                    this.$toasted.error($t('meeting.pam_meeting_error'), this.$toastConfig.error)
                    this.$router.push({ name: 'login', query: { ref: this.$route.fullPath } })
                } else {
                    this.isLoading = false
                    if (!window.Echo) {
                        setupPusher()
                    }
                    this.doInit()
                }
            })
            .catch(error => {
                this.isLoading = false
                formUtil.handleErrors(error)
            })

        window.addEventListener('beforeunload', this.beforeUnload)
        this.checkIfOffline()
        this.initNetworkListener()
    },
    created() {
        this.mediaConfigFormData = _.cloneDeep(this.mediaConfigurations)
        this.SetUiConfig({ pageHeaderShow: false, pageFooterShow: false })
        this.setDefaultGuestUserData()

        // detect 2G and alert
        if (navigator.connection &&
            navigator.connection.type === 'cellular' &&
            navigator.connection.downlinkMax <= 0.115) {
            alert('2G is not supported. Please use a better internet service.')
        }
    },
    beforeRouteEnter(to, from, next) {
        if (!to.params.uuid) {
            next({ name: 'joinMeetingAsGuest' })
        } else {
            next(vm => {
                vm.prevRoute = from
            })
        }
    },


    beforeDestroy() {
        if (!window.isMeetingPageDestroyed) {
            this.isLoading = true

            this.destroyPage()

            if (this.entity && this.entity.status === 'live') {
                this.Custom({
                    url: `/${this.initUrl}/${this.uuid}/leave`,
                    method: 'post',
                })
            }

            window.isMeetingPageDestroyed = true
        }
    },
    beforeRouteLeave(to, from, next) {
        const doBeforeLeaving = (leave = true) => {
            if (!leave) {
                return;
            }
            this.isLoading = true

            this.destroyPage()
            window.removeEventListener('beforeunload', this.beforeUnload)

            if (this.entity && this.entity.status === 'live') {
                this.Custom({
                    url: `/${this.initUrl}/${this.uuid}/leave`,
                    method: 'post',
                })
                    .then(response => {
                        window.isMeetingPageDestroyed = true
                        next()
                    })
                    .catch(error => {
                        window.isMeetingPageDestroyed = true
                        next()
                    })
            } else {
                window.isMeetingPageDestroyed = true
                next()
            }
        }

        if (this.hasVideos) {
            formUtil.unsavedCheckAlert({}, { unsaved: true }, doBeforeLeaving, {
                title: $t('meeting.is_live'),
            })
        } else {
            doBeforeLeaving()
        }
    },
    destroyed() {
        document.body.classList.remove("meeting-page")
    }
}
