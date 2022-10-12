<template>
    <div>
        <base-container v-if="entity && currentMedia" boxed with-loader :is-loading="isLoading" :loader-color="vars.loaderColor" class="p-0 mb-element d-flex justify-content-stretch align-items-stretch max-height-500px">
            <close-button @click="closePlayer" :title="$t('general.close')" class="text-white" />

            <video autoplay controls class="flex-grow bg-black">
                <source :src="currentMedia.fullUrl" type="video/webm">
            </video>
        </base-container>

        <base-container boxed with-loader has-footer min-height="full" :is-loading="isLoading" :loader-color="vars.loaderColor" id="printable">

            <template v-if="entity">
                <div class="row" v-if="recordings && recordings.length">
                    <div v-for="recording in recordings" :key="recording.uuid" class="col-12 col-md-4 col-lg-3 mb-3 text-center">
                        <a @click="playRecording(recording)" :class="['d-flex flex-column min-height-150px justify-content-center align-items-center border border-gray mb-2 pointer', {'bg-gray': currentMedia && recording.uuid === currentMedia.uuid}]">
                            <i class="fas fa-play fs-2 text-muted"></i>
                            <div class="text-word-break-all mt-3">{{ recording.name }}</div>
                        </a>

                        <div class="d-flex justify-content-stretch">
                            <a :href="recording.fullUrl" target="_blank" class="btn btn-light btn-sm flex-grow"><i class="fas fa-download"></i> {{ $t('general.download') }}</a>

                            <base-button type="button" design="light" size="sm" @click="deleteRecording(recording)" class="flex-grow"><i class="fas fa-trash"></i> {{ $t('general.delete') }}</base-button>
                        </div>
                    </div>
                </div>
                <div class="text-center my-5" v-else>
                    <h3 class="text-muted mb-3">{{ $t('global.could_not_find_any', {attribute: $t('meeting.recordings')}) }}</h3>
                </div>
            </template>

            <div class="form-footer mt-3">
                <div class="left-side">
                    <base-button type="button" design="light" @click="$router.back()" tabindex="-1"><i class="fas fa-chevron-left"></i> {{ $t('general.back') }}</base-button>
                </div>
            </div>
        </base-container>
    </div>
</template>

<script>
    import view from '@mixins/view'
    import { mapGetters, mapActions } from 'vuex'

    export default {
        extends: view,
        data() {
            return {
                currentMedia: null,
                initUrl: 'meetings',
                recordings: [],
                fallBackRoute: 'appMeetingList',
            }
        },
        computed: {
            ...mapGetters('config', [
                'vars',
            ]),
        },
        methods: {
            ...mapActions('common', [
                'Custom',
            ]),
            getData() {
                this.isLoading = true

                this.Custom({
                        url: `/${this.initUrl}/${this.uuid}/recordings`,
                        method: 'get',
                    })
                    .then(response => {
                        this.recordings = response
                        this.isLoading = false
                    })
                    .catch(error => {
                        this.isLoading = false
                        formUtil.handleErrors(error)
                    })
            },
            deleteRecording(recording) {
                formUtil.confirmAction()
                    .then((result) => {
                        if (result.value) {
                            this.isLoading = true

                            this.Custom({
                                    url: `/${this.initUrl}/${this.uuid}/recordings/${recording.uuid}`,
                                    method: 'delete',
                                })
                                .then(response => {
                                    this.isLoading = false
                                    this.$toasted.success(response.message, this.$toastConfig)
                                    this.getData()
                                })
                                .catch(error => {
                                    this.isLoading = false
                                    formUtil.handleErrors(error)
                                })
                        } else {
                            result.dismiss === Swal.DismissReason.cancel
                        }
                    })
            },
            playRecording(recording) {
                this.isLoading = true
                this.currentMedia = null
                setTimeout(() => {
                    this.currentMedia = recording
                    this.isLoading = false
                }, 1000)
            },
            closePlayer() {
                this.currentMedia = null
            },
        },
        mounted() {
            this.getData()
        },
    }

</script>
