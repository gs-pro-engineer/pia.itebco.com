<template>
    <form @submit.prevent="submit">
        <animated-loader :is-loading="isLoading || isFetching" :loader-color="vars.loaderColor" />

        <div class="row">
            <div class="col-12 col-md-6 mb-4">
                <base-input auto-focus :label="$t('config.locale.props.name')" type="text" v-model="formData.name" :error.sync="formErrors.name" />
            </div>
            <div class="col-12 col-md-6 mb-4">
                <base-input :label="$t('config.locale.locale')" type="text" v-model="formData.locale" :error.sync="formErrors.locale" />
            </div>
        </div>


        <div class="form-footer mt-3">
            <div class="left-side">
                <base-button type="button" design="light" @click="$router.back()" tabindex="-1"><i class="fas fa-chevron-left"></i> {{ $t('general.cancel') }}</base-button>

                <base-checkbox class="ml-3 mt-2" v-model="keepAdding" v-if="!editData">
                    {{ $t('general.keep_adding') }}
                </base-checkbox>
            </div>
            <div class="right-side">
                <base-button type="button" design="light" @click="reset">{{ $t('general.reset') }}</base-button>
                <base-button type="submit" design="primary">{{ $t('global.save', { attribute: $t('config.locale.locale') } ) }}</base-button>
            </div>
        </div>
    </form>
</template>

<script>
    import form from '@mixins/form'

    export default {
        extends: form,
        data() {
            return {
                formData: {
                    name: '',
                    locale: '',
                },
                initUrl: 'config/locales',
            }
        },
        mounted() {
            this.isLoading = false
        },
    }

</script>
