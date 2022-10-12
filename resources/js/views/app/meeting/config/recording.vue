<template>
    <base-container boxed with-loader :is-loading="isLoading" :loader-color="vars.loaderColor">
        <form @submit.prevent="submit">
            <h5 class="mb-4 pb-3 border-bottom">{{ $t('meeting.config.recording') }}</h5>

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
<!--
                    <div class="col-12"></div>

                    <div class="col-12 col-md-6 mb-3">
                        <base-select :options="mimeTypesAudio" v-model="formData.recordingFormatAudio" :label="$t('meeting.config.recording_format_audio')" :allow-empty="false" preselect-first simple track-by="uuid" show-by="label" />
                    </div>

                    <div class="col-12 col-md-6 mb-3">
                        <base-select :options="mimeTypesVideo" v-model="formData.recordingFormatVideo" :label="$t('meeting.config.recording_format_video')" :allow-empty="false" preselect-first simple track-by="uuid" show-by="label" />
                    </div> -->
                </template>
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
                    enableRecording: true,
                    enableAutoRecording: false,
                    autoUploadRecording: false,
                    autoUploadRecorded: false,
                    canStopAutoRecording: false,
                    recordingFormatAudio: 'audio/webm',
                    recordingFormatVideo: 'video/webm',
                    type: 'meeting'
                },
                mimeTypesAudio: [
                    { uuid: 'audio/webm', label: 'audio/webm' },
                    { uuid: 'audio/wav', label: 'audio/wav' },
                    { uuid: 'audio/webm;codecs=pcm', label: 'audio/webm;codecs=pcm' },
                ],
                mimeTypesVideo: [
                    { uuid: 'video/mp4', label: 'video/mp4' },
                    { uuid: 'video/webm', label: 'video/webm' },
                    { uuid: 'video/webm;codecs=vp9', label: 'video/webm;codecs=vp9' },
                    { uuid: 'video/webm;codecs=vp8', label: 'video/webm;codecs=vp8' },
                    { uuid: 'video/webm;codecs=h264', label: 'video/webm;codecs=h264' },
                    { uuid: 'video/x-matroska;codecs=avc1', label: 'video/x-matroska;codecs=avc1' },
                ],
            }
        },
        methods: {
            autoUploadRecordedChanged() {
                this.formData.autoUploadRecording = this.formData.autoUploadRecorded ? false : this.formData.autoUploadRecording
            },
            autoUploadRecordingChanged() {
                this.formData.autoUploadRecorded = this.formData.autoUploadRecording ? false : this.formData.autoUploadRecorded
            },
            beforeSubmit() {
                this.formData.autoUploadRecorded = this.formData.autoUploadRecording ? false : this.formData.autoUploadRecorded

                return true
            },
        },
        mounted() {
            this.getInitialData()
        },
    }

</script>
