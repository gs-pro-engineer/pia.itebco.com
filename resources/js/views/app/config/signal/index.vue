<template>
    <base-container boxed with-loader :is-loading="isLoading" :loader-color="vars.loaderColor">
        <form @submit.prevent="submit">

            <div class="row">
                <div class="col-12 mb-4">
                    <base-input :label="$t('config.signal.url')" type="text" v-model="formData.url" :error.sync="formErrors.url" />
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
                    url : '',
                    type: 'signal'
                },
            }
        },
    }

</script>
