<template>
    <base-container boxed with-loader :is-loading="isLoading" :loader-color="vars.loaderColor">
        <form @submit.prevent="submit">
            <div class="row">
                <div class="col-12 col-md-6 mb-3">
                    <switch-wrapper :label="$t('meeting.config.allow_deleting_ended_meetings')">
                        <base-switch v-model="formData.allowDeletingEndedMeetings"></base-switch>
                    </switch-wrapper>
                </div>
                <div class="col-12 col-md-6 mb-3">
                    <switch-wrapper :label="$t('meeting.config.allow_deleting_cancelled_meetings')">
                        <base-switch v-model="formData.allowDeletingCancelledMeetings"></base-switch>
                    </switch-wrapper>
                </div>

                <div class="col-12 col-md-6 mb-3">
                    <switch-wrapper :label="$t('global.need_reload', {attribute: $t('general.card_layout')})">
                        <base-switch v-model="formData.cardLayout"></base-switch>
                    </switch-wrapper>
                </div>
                <div class="col-12 col-md-6 mb-3" v-if="allowExtraInput">
                    <switch-wrapper :label="$t('meeting.config.enable_paid_meeting')">
                        <base-switch v-model="formData.enablePaidMeeting"></base-switch>
                    </switch-wrapper>
                </div>

                <div class="col-12"></div>

                <div class="col-12 col-md-6 mb-3">
                    <base-input :label="$t('meeting.config.instant_meeting_auto_ended')" type="number" v-model="formData.instantMeetingAutoEnded" :error.sync="formErrors.instantMeetingAutoEnded" select-on-focus @wheel.stop.prevent :addon-right-text="$t('list.general.durations.minutes')" />
                </div>
                <div class="col-12 col-md-6 mb-3">
                    <base-input :label="$t('meeting.config.max_participant_count')" type="number" v-model="formData.maxParticipantCount" :error.sync="formErrors.maxParticipantCount" select-on-focus @wheel.stop.prevent />
                </div>

                <div class="col-12 col-md-6 mb-3" v-if="formData.cardLayout">
                    <base-select :options="cardLayoutDesigns" v-model="formData.cardLayoutDesign" :label="$t('meeting.config.card_layout_design')" :allow-empty="false" preselect-first simple track-by="uuid" show-by="label" />
                </div>
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
                    <switch-wrapper :label="$t('meeting.config.mirrored_video')">
                        <base-switch v-model="formData.mirroredVideo"></base-switch>
                    </switch-wrapper>
                </div>

                <div class="col-12 col-md-4 mb-3">
                    <switch-wrapper :label="$t('meeting.config.disable_scroll')">
                        <base-switch v-model="formData.disableScroll"></base-switch>
                    </switch-wrapper>
                </div>

                <div class="col-12 col-md-4 mb-3">
                    <switch-wrapper :label="$t('meeting.config.speech_detection')">
                        <base-switch v-model="formData.speechDetection"></base-switch>
                    </switch-wrapper>
                </div>

                <div class="col-12 col-md-4 mb-3">
                    <switch-wrapper :label="$t('meeting.config.mute_participants_on_start')">
                        <base-switch v-model="formData.muteParticipantsOnStart"></base-switch>
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
            </div>

            <div class="row">
                <div class="col-12 col-md-4">
                    <base-select :options="layouts" v-model="formData.layout" :label="$t('meeting.config.layout')" :allow-empty="false" preselect-first simple track-by="uuid" show-by="label" />
                </div>
            </div>

            <h5 class="mb-4 mt-5 pb-2 border-bottom">{{ $t('meeting.config.for_debugging') }}</h5>

            <div class="row">
                <div class="col-12 col-md-4 mb-3">
                    <switch-wrapper :label="$t('meeting.config.debug_mode')">
                        <base-switch v-model="formData.debugMode"></base-switch>
                    </switch-wrapper>
                </div>

                <div class="col-12 col-md-4 mb-3">
                    <switch-wrapper :label="$t('meeting.config.force_turn')">
                        <base-switch v-model="formData.forceTurn"></base-switch>
                    </switch-wrapper>
                </div>
            </div>


            <div class="form-footer mt-5">
                <div class="left-side">
                    <base-button type="button" design="light" @click="$router.back()" tabindex="-1"><i class="fas fa-chevron-left"></i> {{ $t('general.cancel') }}</base-button>
                </div>
                <div class="right-side">
                    <base-button type="button" design="light" @click="reset">{{ $t('general.reset') }}</base-button>
                    <base-button type="submit" design="primary"><i class="fas fa-save"></i> {{ $t('general.save') }}</base-button>
                </div>
            </div>
        </form>
    </base-container>
</template>

<script>
    import form from '@mixins/config-form'

    export default {
        extends: form,
        data() {
            return {
                formData: {
                    allowDeletingEndedMeetings: false,
                    allowDeletingCancelledMeetings: false,
                    cardLayout: false,
                    enablePaidMeeting: false,
                    cardLayoutDesign: 'default',
                    instantMeetingAutoEnded: 180,
                    maxParticipantCount: 1000,
                    enableChat: true,
                    enableScreenSharing: true,
                    enableHandGesture: true,
                    enableFileSharing: true,
                    enableLinkSharing: true,
                    enableWhiteboard: true,
                    footerAutoHide: false,
                    mirroredVideo: false,
                    disableScroll: false,
                    speechDetection: true,
                    muteParticipantsOnStart: false,
                    allowJoiningWithoutDevices: true,
                    askHostBeforeJoining: false,
                    preferRearCameraFirst: false,
                    enableUserAvatar: false,
                    enableFullUserAvatar: false,
                    enableMeetingInfo: false,
                    forceUpdateUsername: false,
                    layout: 'fullpage',
                    debugMode: false,
                    forceTurn: false,
                    type: 'meeting'
                },
                cardLayoutDesigns: [
                    { uuid: 'default', label: $t('meeting.config.card_layout_design_default') },
                    { uuid: 'design1', label: $t('meeting.config.card_layout_design_design1') },
                ],
                layouts: [
                    { uuid: 'grid', label: $t('meeting.config.layout_grid') },
                    { uuid: 'gallery', label: $t('meeting.config.layout_gallery') },
                    { uuid: 'fullpage', label: $t('meeting.config.layout_fullpage') },
                ],
            }
        },
        methods: {
            regenerateNavigation() {
                this.Generate()
                    .then(() => {
                        this.isLoading = false
                    })
            },
            afterSubmit() {
                this.regenerateNavigation()
            },
        },
        mounted() {
            this.getInitialData()
        },
    }

</script>
