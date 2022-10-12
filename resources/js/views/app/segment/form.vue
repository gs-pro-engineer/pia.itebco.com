<template>
    <form @submit.prevent="submit">
        <animated-loader :is-loading="isLoading || isFetching" :loader-color="vars.loaderColor" />
        <div class="row">
            <div class="col-12 col-md-6 mb-3">
                <base-input auto-focus :label="formLabels.name" type="text" v-model="formData.name" :error.sync="formErrors.name" required />
            </div>

            <div class="col-12 col-md-6 mb-3">
                <base-input :label="formLabels.description" type="text" v-model="formData.description" :error.sync="formErrors.description" />
            </div>
        </div>

        <div v-if="formHasErrors" class="alert alert-danger" role="alert">
            <h6 class="m-0">{{ $t('general.form_has_errors') }}</h6>
        </div>

        <div class="form-footer mt-3">
            <div class="left-side">
                <base-button type="button" design="light" @click="$router.back()" tabindex="-1"><i class="fas fa-chevron-left"></i> {{ $t('general.cancel') }}</base-button>

                <base-checkbox class="ml-3 mt-2" v-model="keepAdding" v-if="showKeepAdding">
                    {{ $t('general.keep_adding') }}
                </base-checkbox>
            </div>
            <div class="right-side">
                <base-button type="button" design="light" @click="reset">{{ $t('general.reset') }}</base-button>
                <base-button type="submit" design="primary"><i class="fas fa-save"></i> {{ $t('global.save', { attribute: $t('contact.segment.segment') } ) }}</base-button>
            </div>
        </div>

        <template v-if="showKeepAdding && keepAdding">
            <keep-adding-form :keep-adding-fields="keepAddingFields" :keep-adding-option="keepAddingOption" @optionUpdated="keepAddingOption=$event" :keep-adding-selected-fields="keepAddingSelectedFields" @fieldsUpdated="keepAddingSelectedFields=$event" :is-loading="isLoading" />
        </template>
    </form>
</template>

<script>
    import form from '@mixins/form'

    export default {
        extends: form,
        data() {
            return {
                formData: {
                    uuid: null,
                    name: '',
                    description: '',
                },
                formLabels: {
                    name: $t('contact.segment.props.name'),
                    description: $t('contact.segment.props.description'),
                },
                initUrl: 'segments',
            }
        },
        mounted() {
            this.isLoading = false
        },
    }

</script>
