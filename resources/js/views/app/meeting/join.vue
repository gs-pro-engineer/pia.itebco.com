<template>
    <base-container boxed class="mt-element">
        <template v-if="isLoading">
            <div class="pt-150 pb-150 text-center">  
                <animated-loader :is-loading="isLoading" :loader-color="vars.loaderColor" size="inline" :with-overlay="false" />
                <br>
                <br>
                <h5>{{ $t('meeting.joining_a_meeting') }}</h5>
            </div>
        </template>

        <template v-else>
            <div class="row pt-15 pb-15">
                <div class="col-12 col-md-5 pt-50 pb-50">
                            
                    <h1 class="text-left">{{ $t('meeting.join_a_meeting') }}</h1>
                    <p class="text-muted">{{ $t('meeting.join_a_meeting_desc') }}</p>

                    <form @submit.prevent="submit">
                        <base-input auto-focus :label="$t('meeting.enter_meeting_code')" type="text" v-model="formData.identifier" :error.sync="formErrors.identifier" required />

                        <div class="form-footer mt-5">
                            <div class="left-side" v-if="hasPermission('create-meeting')">
                                <base-button type="button" design="light" @click="$router.push({ name: 'appInstantMeetingStart' })">{{ $t('meeting.new_meeting')}}</base-button>
                            </div>
                            <div class="right-side">
                                <base-button type="submit" design="primary">{{ $t('meeting.join')}}</base-button>
                            </div>
                        </div>
                    </form>

                </div>

                <div class="col-12 col-md-6 offset-md-1">
                    <img src="/images/DemoScreenshot.png" class="img-fluid img-thumbnail">
                </div>
            </div>
        </template>
    </base-container>
</template>

<script>
    import { mapActions } from 'vuex'
    import form from '@mixins/form'

    export default {
        extends: form,
        data() {
            return {
                formData: {
                    identifier: '',
                },
                initUrl: 'meetings',
            }
        },
        methods: {
            ...mapActions('config', [
                'SetUiConfig',
            ]),
            submit() {
                if(formUtil.isUnchanged(this.initialFormData, this.formData)) {
                    this.$toasted.info(this.$t('general.nothing_changed'), this.$toastConfig.info)
                    return false
                }

                this.isLoading = true
                this.Custom({
                        url: `/meetings/m/${this.formData.identifier}`,
                        method: 'get',
                    })
                    .then(response => {
                        if(response.uuid) {
                            this.$router.push({ name: 'liveMeeting', params: { uuid: response.uuid } })
                        }
                    })
                    .catch(error => {
                        this.isLoading = false
                        this.formErrors = formUtil.handleErrors(error)
                    })
            },
        },
        mounted() {
            this.isLoading = false

            this.$nextTick(() => {
                this.SetUiConfig({ pageHeaderShow: false })
            })
        },
        destroyed() {
            this.SetUiConfig({ pageHeaderShow: true })
        },
    }

</script>
