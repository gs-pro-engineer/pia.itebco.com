<template>
    <base-container boxed with-loader :is-loading="isLoading" :loader-color="vars.loaderColor" id="printable">
        <form @submit.prevent="submit">

            <template v-if="configs.meeting && configs.meeting.enablePam">
                <h5 class="mb-4 pb-2 border-bottom">{{ $t('meeting.publicly_accessible_meetings') }}</h5>

                <div class="row">
                    <div class="col-12 col-md-6 mb-3">
                        <switch-wrapper :label="$t('meeting.config.pam_open_join_as_guest_page')">
                            <base-switch v-model="formData.pamOpenJoinAsGuestPage"></base-switch>
                        </switch-wrapper>
                    </div>
                    <div class="col-12 col-md-6 mb-3">
                        <switch-wrapper :label="$t('meeting.config.pam_enable_screen_sharing_for_guest')">
                            <base-switch v-model="formData.pamEnableScreenSharingForGuest"></base-switch>
                        </switch-wrapper>
                    </div>
                    <div class="col-12 col-md-6 mb-3">
                        <switch-wrapper :label="$t('meeting.config.pam_enable_link_sharing_for_guest')">
                            <base-switch v-model="formData.pamEnableLinkSharingForGuest"></base-switch>
                        </switch-wrapper>
                    </div>
                    <div class="col-12 col-md-6 mb-3">
                        <switch-wrapper :label="$t('meeting.config.pam_enable_whiteboard_for_guest')">
                            <base-switch v-model="formData.pamEnableWhiteboardForGuest"></base-switch>
                        </switch-wrapper>
                    </div>
                </div>
            </template>




            <h5 class="mb-4 mt-5 pb-2 border-bottom">{{ $t('meeting.config.snapshot') }}</h5>

            <div class="row">
                <div class="col-12 col-md-6 mb-3">
                    <switch-wrapper :label="$t('meeting.config.enable_snapshot')">
                        <base-switch v-model="formData.enableSnapshot"></base-switch>
                    </switch-wrapper>
                </div>

                <template v-if="formData.enableSnapshot">
                    <div class="col-12 col-md-6 mb-3">
                        <switch-wrapper :label="$t('meeting.config.anyone_can_take_snapshot')">
                            <base-switch v-model="formData.anyoneCanTakeSnapshot"></base-switch>
                        </switch-wrapper>
                    </div>

                    <div class="col-12 col-md-6 mb-3">
                        <switch-wrapper :label="$t('meeting.config.enable_snapshot_alert')">
                            <base-switch v-model="formData.enableSnapshotAlert"></base-switch>
                        </switch-wrapper>
                    </div>

                    <div class="col-12 col-md-6 mb-3">
                        <switch-wrapper :label="$t('meeting.config.snapshot_alert_to_user_only')">
                            <base-switch v-model="formData.snapshotAlertToUserOnly"></base-switch>
                        </switch-wrapper>
                    </div>

                    <div class="col-12 col-md-6 mb-3">
                        <switch-wrapper :label="$t('meeting.config.snapshot_alert_to_moderators')">
                            <base-switch v-model="formData.snapshotAlertToModerators"></base-switch>
                        </switch-wrapper>
                    </div>
                </template>
            </div>




            <h5 class="mb-4 mt-5 pb-2 border-bottom">{{ $t('meeting.config.recording') }}</h5>

            <div class="row">
                <div class="col-12 col-md-6 mb-3">
                    <switch-wrapper :label="$t('meeting.config.enable_recording')">
                        <base-switch v-model="formData.enableRecording"></base-switch>
                    </switch-wrapper>
                </div>

                <template v-if="formData.enableRecording">
                    <div class="col-12 col-md-6 mb-3">
                        <switch-wrapper :label="$t('meeting.config.enable_auto_recording')">
                            <base-switch v-model="formData.enableAutoRecording"></base-switch>
                        </switch-wrapper>
                    </div>

                    <div class="col-12 col-md-6 mb-3" v-if="formData.enableAutoRecording">
                        <switch-wrapper :label="$t('meeting.config.can_stop_auto_recording')">
                            <base-switch v-model="formData.canStopAutoRecording"></base-switch>
                        </switch-wrapper>
                    </div>

                    <div class="col-12 col-md-6 mb-3">
                        <switch-wrapper :label="$t('meeting.config.auto_upload_recording')">
                            <base-switch v-model="formData.autoUploadRecording" @input="autoUploadRecordingChanged"></base-switch>
                        </switch-wrapper>
                    </div>

                    <div class="col-12 col-md-6 mb-3">
                        <switch-wrapper :label="$t('meeting.config.auto_upload_recorded')">
                            <base-switch v-model="formData.autoUploadRecorded" @input="autoUploadRecordedChanged"></base-switch>
                        </switch-wrapper>
                    </div>
                </template>
            </div>




            <h5 class="mb-4 mt-5 pb-2 border-bottom">{{ $t('meeting.config.auto_end') }}</h5>

            <div class="row">
                <div class="col-12 col-md-6 mb-3">
                    <switch-wrapper :label="$t('meeting.config.auto_end_meeting')">
                        <base-switch v-model="formData.autoEndMeeting"></base-switch>
                    </switch-wrapper>
                </div>

                <template v-if="formData.autoEndMeeting">
                    <div class="col-12 col-md-6 mb-3">
                        <switch-wrapper :label="$t('meeting.config.alert_before_auto_end')">
                            <base-switch v-model="formData.alertBeforeAutoEnd"></base-switch>
                        </switch-wrapper>
                    </div>

                    <div class="col-12 col-md-6 mb-3">
                        <switch-wrapper :label="$t('meeting.config.can_snooze_auto_end')">
                            <base-switch v-model="formData.canSnoozeAutoEnd"></base-switch>
                        </switch-wrapper>
                    </div>

                    <div class="col-12 col-md-6 mb-3">
                        <switch-wrapper :label="$t('meeting.config.can_cancel_auto_end')">
                            <base-switch v-model="formData.canCancelAutoEnd"></base-switch>
                        </switch-wrapper>
                    </div>

                    <div class="col-12"></div>

                    <div class="col-12 col-md-6 mb-3" v-if="formData.alertBeforeAutoEnd">
                        <base-input :label="$t('meeting.config.alert_before_auto_end_time')" type="number" v-model="formData.alertBeforeAutoEndTime" :error.sync="formErrors.alertBeforeAutoEndTime" select-on-focus @wheel.stop.prevent :min="1" :step="1" />
                    </div>

                    <div class="col-12 col-md-6 mb-3">
                        <base-input :label="$t('meeting.config.end_time_snooze_period')" type="number" v-model="formData.endTimeSnoozePeriod" :error.sync="formErrors.endTimeSnoozePeriod" select-on-focus @wheel.stop.prevent :min="1" :max="120" :step="1" />
                    </div>
                </template>
            </div>



            <h5 class="mb-4 mt-5 pb-2 border-bottom">{{ $t('meeting.config.miscellaneous') }}</h5>

            <div class="row">
                <div class="col-12 col-md-4 mb-3">
                    <switch-wrapper :label="$t('meeting.config.enable_chat')">
                        <base-switch v-model="formData.enableChat"></base-switch>
                    </switch-wrapper>
                </div>

                <div class="col-12 col-md-4 mb-3">
                    <switch-wrapper :label="$t('meeting.config.enable_screen_sharing')">
                        <base-switch v-model="formData.enableScreenSharing"></base-switch>
                    </switch-wrapper>
                </div>

                <div class="col-12 col-md-4 mb-3">
                    <switch-wrapper :label="$t('meeting.config.enable_hand_gesture')">
                        <base-switch v-model="formData.enableHandGesture"></base-switch>
                    </switch-wrapper>
                </div>

                <div class="col-12 col-md-4 mb-3">
                    <switch-wrapper :label="$t('meeting.config.enable_file_sharing')">
                        <base-switch v-model="formData.enableFileSharing"></base-switch>
                    </switch-wrapper>
                </div>

                <div class="col-12 col-md-4 mb-3">
                    <switch-wrapper :label="$t('meeting.config.enable_link_sharing')">
                        <base-switch v-model="formData.enableLinkSharing"></base-switch>
                    </switch-wrapper>
                </div>

                <div class="col-12 col-md-4 mb-3">
                    <switch-wrapper :label="$t('meeting.config.enable_whiteboard')">
                        <base-switch v-model="formData.enableWhiteboard"></base-switch>
                    </switch-wrapper>
                </div>

                <div class="col-12 col-md-4 mb-3">
                    <switch-wrapper :label="$t('meeting.config.footer_auto_hide')">
                        <base-switch v-model="formData.footerAutoHide"></base-switch>
                    </switch-wrapper>
                </div>

                <div class="col-12 col-md-4 mb-3">
                    <switch-wrapper :label="$t('meeting.config.mute_participants_on_start')">
                        <base-switch v-model="formData.muteParticipantsOnStart"></base-switch>
                    </switch-wrapper>
                </div>

                <div class="col-12 col-md-4 mb-3">
                    <switch-wrapper :label="$t('meeting.config.speech_detection')">
                        <base-switch v-model="formData.speechDetection"></base-switch>
                    </switch-wrapper>
                </div>

                <div class="col-12 col-md-4 mb-3">
                    <switch-wrapper :label="$t('meeting.config.allow_joining_without_devices')">
                        <base-switch v-model="formData.allowJoiningWithoutDevices"></base-switch>
                    </switch-wrapper>
                </div>

                <div class="col-12 col-md-4 mb-3">
                    <switch-wrapper :label="$t('meeting.config.ask_host_before_joining')">
                        <base-switch v-model="formData.askHostBeforeJoining"></base-switch>
                    </switch-wrapper>
                </div>

                <div class="col-12 col-md-4 mb-3">
                    <switch-wrapper :label="$t('meeting.config.prefer_rear_camera_first')">
                        <base-switch v-model="formData.preferRearCameraFirst"></base-switch>
                    </switch-wrapper>
                </div>

                <div class="col-12 col-md-4 mb-3">
                    <switch-wrapper :label="$t('meeting.config.enable_user_avatar')">
                        <base-switch v-model="formData.enableUserAvatar"></base-switch>
                    </switch-wrapper>
                </div>

                <div class="col-12 col-md-4 mb-3">
                    <switch-wrapper :label="$t('meeting.config.enable_full_user_avatar')">
                        <base-switch v-model="formData.enableFullUserAvatar"></base-switch>
                    </switch-wrapper>
                </div>

                <div class="col-12 col-md-4 mb-3">
                    <switch-wrapper :label="$t('meeting.config.enable_meeting_info')">
                        <base-switch v-model="formData.enableMeetingInfo"></base-switch>
                    </switch-wrapper>
                </div>

                <div class="col-12 col-md-4 mb-3">
                    <switch-wrapper :label="$t('meeting.config.force_update_username')">
                        <base-switch v-model="formData.forceUpdateUsername"></base-switch>
                    </switch-wrapper>
                </div>

                <div class="col-12 col-md-4 mb-3">
                    <switch-wrapper :label="$t('meeting.config.auto_end_meeting')">
                        <base-switch v-model="formData.autoEndMeeting"></base-switch>
                    </switch-wrapper>
                </div>

                <div class="col-12 col-md-4 mb-3">
                    <switch-wrapper :label="$t('meeting.config.alert_before_auto_end')">
                        <base-switch v-model="formData.alertBeforeAutoEnd"></base-switch>
                    </switch-wrapper>
                </div>

                <div class="col-12 col-md-4 mb-3">
                    <base-input :label="$t('meeting.config.alert_before_auto_end_time')" type="number" v-model="formData.alertBeforeAutoEndTime" :error.sync="formErrors.alertBeforeAutoEndTime" select-on-focus @wheel.stop.prevent :min="1" :step="1" />
                </div>

                <div class="col-12 col-md-4">
                    <base-select :options="layouts" v-model="formData.layout" :label="$t('meeting.config.layout')" :allow-empty="false" preselect-first simple track-by="uuid" show-by="label" />
                </div>

                <div class="col-12 col-md-4">
                    <base-input :label="$t('meeting.config.max_participant_count')" type="number" v-model="formData.maxParticipantCount" :error.sync="formErrors.maxParticipantCount" select-on-focus @wheel.stop.prevent />
                </div>
            </div>


            <div class="form-footer mt-5">
                <div class="left-side">
                    <base-button type="button" design="light" @click="$router.back()" tabindex="-1"><i class="fas fa-chevron-left"></i> {{ $t('general.cancel') }}</base-button>
                </div>
                <div class="right-side">
                    <base-button type="button" design="light" @click="reset">{{ $t('general.reset') }}</base-button>
                    <base-button type="submit" design="primary">{{ $t('global.save', { attribute: $t('config.config') } ) }}</base-button>
                </div>
            </div>
        </form>
    </base-container>
</template>

<script>
    import form from '@mixins/form'
    import EventBus from '@js/event-bus'

    export default {
        extends: form,
        data() {
            return {
                formData: {
                    enableChat: true,
                    enableScreenSharing: true,
                    enableRecording: true,
                    enableAutoRecording: false,
                    autoUploadRecording: false,
                    autoUploadRecorded: false,
                    canStopAutoRecording: false,
                    enableHandGesture: true,
                    enableFileSharing: true,
                    enableLinkSharing: true,
                    enableWhiteboard: true,
                    footerAutoHide: false,
                    muteParticipantsOnStart: false,
                    speechDetection: false,
                    allowJoiningWithoutDevices: false,
                    pamOpenJoinAsGuestPage: false,
                    pamEnableScreenSharingForGuest: false,
                    pamEnableLinkSharingForGuest: false,
                    pamEnableWhiteboardForGuest: false,
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
                    maxParticipantCount: 'fullpage',
                    layout: 'fullpage',
                },
                layouts: [
                    { uuid: 'grid', label: $t('meeting.config.layout_grid') },
                    { uuid: 'gallery', label: $t('meeting.config.layout_gallery') },
                    { uuid: 'fullpage', label: $t('meeting.config.layout_fullpage') },
                ],
                initUrl: 'meetings',
                initSubUrl: 'config',
            }
        },
        methods: {
            getMeeting() {
                this.isLoading = true
                this.doInit()
                this.Get(this.subUuid)
                    .then(response => {
                        this.doInitSub()
                        if(response.config) {
                            this.formData.objForEach((value, key) => {
                                this.formData[key] = response.config.hasOwnProperty(key) ? response.config[key] : this.formData[key]
                            })
                        }
                        this.initialFormData = _.cloneDeep(this.formData)
                        this.isLoading = false
                    })
                    .catch(error => {
                        this.isLoading = false
                        formUtil.handleErrors(error)
                    })
            },
            autoUploadRecordedChanged() {
                this.formData.autoUploadRecording = this.formData.autoUploadRecorded ? false : this.formData.autoUploadRecording
            },
            autoUploadRecordingChanged() {
                this.formData.autoUploadRecorded = this.formData.autoUploadRecording ? false : this.formData.autoUploadRecorded
            },
            beforeSubmit() {
                return !(this.formData.autoUploadRecording && this.formData.autoUploadRecorded)
            },
        },
        mounted() {
            this.getMeeting()
        },
        beforeRouteLeave(to, from, next) {
            EventBus.$emit('ROUTE_LEAVING', next)
        },
    }

</script>
