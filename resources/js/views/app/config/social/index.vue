<template>
    <base-container boxed with-loader :is-loading="isLoading" :loader-color="vars.loaderColor">
        <form @submit.prevent="submit">

            <div class="row">

                <div class="col-12 mb-4">
                    <base-input auto-focus :label="$t('config.social.url', {attribute: $t('config.social.facebook')})" type="text" v-model="formData.facebookLink" :error.sync="formErrors.facebookLink" addon-left-icon="fab fa-facebook" />
                </div>

                <div class="col-12 mb-4">
                    <base-input :label="$t('config.social.url', {attribute: $t('config.social.twitter')})" type="text" v-model="formData.twitterLink" :error.sync="formErrors.twitterLink" addon-left-icon="fab fa-twitter" />
                </div>

                <div class="col-12 mb-4">
                    <base-input :label="$t('config.social.url', {attribute: $t('config.social.linkedin')})" type="text" v-model="formData.linkedinLink" :error.sync="formErrors.linkedinLink" addon-left-icon="fab fa-linkedin" />
                </div>

                <div class="col-12 mb-4">
                    <base-input :label="$t('config.social.url', {attribute: $t('config.social.youtube')})" type="text" v-model="formData.youtubeLink" :error.sync="formErrors.youtubeLink" addon-left-icon="fab fa-youtube" />
                </div>

                <div class="col-12 mb-4">
                    <base-input :label="$t('config.social.url', {attribute: $t('config.social.instagram')})" type="text" v-model="formData.instagramLink" :error.sync="formErrors.instagramLink" addon-left-icon="fab fa-instagram" />
                </div>

                <div class="col-12 mb-4">
                    <base-input :label="$t('config.social.url', {attribute: $t('config.social.skype')})" type="text" v-model="formData.skypeLink" :error.sync="formErrors.skypeLink" addon-left-icon="fab fa-skype" />
                </div>

            </div>

            <div class="text-right mt-5">
                <base-button type="button" design="light" click="reset">{{ $t('general.reset') }}</base-button>
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
                    facebookLink: '',
                    twitterLink: '',
                    linkedinLink: '',
                    youtubeLink: '',
                    instagramLink: '',
                    skypeLink: '',
                    type: 'social'
                },
            }
        },
    }

</script>
