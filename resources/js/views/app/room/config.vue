<template>
    <base-container boxed with-loader :is-loading="isLoading" :loader-color="vars.loaderColor" id="printable">
        <form @submit.prevent="submit">
            
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
                    <switch-wrapper :label="$t('meeting.config.enable_recording')">
                        <base-switch v-model="formData.enableRecording"></base-switch>
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
                    <switch-wrapper :label="$t('meeting.config.footer_auto_hide')">
                        <base-switch v-model="formData.footerAutoHide"></base-switch>
                    </switch-wrapper>
                </div>

                <div class="col-12 col-md-4">
                    <base-select :options="layouts" v-model="formData.layout" :label="$t('meeting.config.layout')" :allow-empty="false" preselect-first simple track-by="uuid" show-by="label" />
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
                    enableHandGesture: true,
                    footerAutoHide: false,
                    enableFileSharing: true,
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
            }
        },
        mounted() {
            this.getMeeting()
        },
        beforeRouteLeave(to, from, next) {
            EventBus.$emit('ROUTE_LEAVING', next)
        },
    }

</script>
