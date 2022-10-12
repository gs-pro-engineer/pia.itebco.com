<template>
    <base-container boxed with-loader :is-loading="isLoading" :loader-color="vars.loaderColor">
        <form @submit.prevent="submit">
            
            <div class="row">
                <div class="col-12 col-md-6 mb-5">
                    <h6 class="font-weight-700">{{ $t('config.ui.icon_alignment') }}</h6>
                    <div class="d-flex align-items-center">
                        <base-radio :value="false" v-model="formData.navMenuThumbOnRight" inline has-image>
                            <img src="@images/config/nav_icon_alignment_left.jpg">
                            <div class="mt-2 text-center text-muted">{{ $t('config.ui.left') }}</div>
                        </base-radio>
                        <base-radio :value="true" v-model="formData.navMenuThumbOnRight" inline has-image>
                            <img src="@images/config/nav_icon_alignment_right.jpg">
                            <div class="mt-2 text-center text-muted">{{ $t('config.ui.right') }}</div>
                        </base-radio>
                    </div>

                    <div class="alert alert-outline-info text-center">{{ $t('config.ui.icon_alignment_helper') }}</div>
                </div>

                <div class="col-12 col-md-6 mb-5">
                    <h6 class="font-weight-700">{{ $t('config.ui.letter_icon') }}</h6>
                    <div class="d-flex align-items-center">
                        <base-radio :value="false" v-model="formData.navMenuLetterIcon" inline has-image>
                            <img src="@images/config/nav_letter_icon_disable.jpg">
                            <div class="mt-2 text-center text-muted">{{ $t('config.ui.disable') }}</div>
                        </base-radio>
                        <base-radio :value="true" v-model="formData.navMenuLetterIcon" inline has-image>
                            <img src="@images/config/nav_letter_icon_enable.jpg">
                            <div class="mt-2 text-center text-muted">{{ $t('config.ui.enable') }}</div>
                        </base-radio>
                    </div>

                    <div class="alert alert-outline-info text-center">{{ $t('config.ui.letter_icon_helper') }}</div>
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
    import form from '@mixins/ui-config-form'

    export default {
        extends: form,
    }

</script>
