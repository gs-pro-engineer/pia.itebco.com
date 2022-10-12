<template>
    <base-container boxed with-loader :is-loading="isLoading" :loader-color="vars.loaderColor">
        <form @submit.prevent="submit">

            <div class="row">
                <div class="col-12 col-md-6 mb-4">
                    <base-input :label="$t('config.pusher.app_id')" type="text" v-model="formData.pusherAppId" :error.sync="formErrors.pusherAppId" />
                </div>
                <div class="col-12 col-md-6 mb-4">
                    <base-input :label="$t('config.pusher.app_key')" type="text" v-model="formData.pusherAppKey" :error.sync="formErrors.pusherAppKey" />
                </div>
                <div class="col-12 col-md-6 mb-4">
                    <base-input :label="$t('config.pusher.app_secret')" type="text" v-model="formData.pusherAppSecret" :error.sync="formErrors.pusherAppSecret" />
                </div>
                <div class="col-12 col-md-6 mb-4">
                    <base-input :label="$t('config.pusher.app_cluster')" type="text" v-model="formData.pusherAppCluster" :error.sync="formErrors.pusherAppCluster" />
                </div>
                
                <div class="col-12 col-md-4">
                    <switch-wrapper :label="$t('config.pusher.debug_mode')">
                        <base-switch v-model="formData.debugMode"></base-switch>
                    </switch-wrapper>
                </div>

            </div>

            <div class="text-right mt-5">
                <base-button type="button" design="light" @click="reset">{{ $t('general.reset') }}</base-button>
                <base-button type="submit" design="primary">{{ $t('general.save') }}</base-button>
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
                    pusherAppKey : '',
                    pusherAppId : '',
                    pusherAppCluster : '',
                    pusherAppSecret : '',
                    debugMode : false,
                    type: 'pusher'
                },
            }
        },
    }

</script>
