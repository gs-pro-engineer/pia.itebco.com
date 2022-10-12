<template>
    <base-container boxed with-loader :is-loading="isLoading" :loader-color="vars.loaderColor">
        <form @submit.prevent="submit">

            <div class="row">
                <div class="col-12 mb-4">
                    <view-single :label="$t('config.notification.vapid_public_key')" :value="formData.vapidPublicKey" data-classes="small" />
                </div>
            </div>

            <div class="text-right mt-5">
                <base-button v-if="!formData.vapidPublicKey" type="button" design="primary" @click="generate">{{ $t('config.notification.generate_vapid_keys') }}</base-button>
                <base-button v-else type="button" design="info" @click="showNotification">{{ $t('config.notification.show_notification') }}</base-button>
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
                    vapidPublicKey : '',
                    type: 'notification'
                },
            }
        },
        methods: {
            generate() {
                this.isLoading = true
                this.Custom({
                        url: 'config/notification',
                        method: 'post',
                    })
                    .then(response => {
                        this.GetConfig()
                            .then(() => {
                                this.fillFormData()
                                this.isLoading = false
                            })
                            .catch(error => {
                                this.isLoading = false
                                formUtil.handleErrors(error)
                            })
                    })
                    .catch(error => {
                        this.isLoading = false
                        formUtil.handleErrors(error)
                    })
            },
            showNotification() {
                this.isLoading = true
                this.Custom({
                        url: 'config/notification',
                    })
                    .then(response => {
                        this.isLoading = false
                    })
                    .catch(error => {
                        this.isLoading = false
                        formUtil.handleErrors(error)
                    })
            }
        }
    }

</script>
