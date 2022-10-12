<template>
    <form @submit.prevent="submit">
        <animated-loader :is-loading="isLoading || isFetching" :loader-color="vars.loaderColor" />
        <div class="row">
            <div class="col-12 col-md-6 mb-3">
                <base-input auto-focus :label="formLabels.email" type="text" v-model="formData.email" :error.sync="formErrors.email" required />
            </div>
            
            <div class="col-12 col-md-6 mb-3">
                <base-input :label="formLabels.name" type="text" v-model="formData.name" :error.sync="formErrors.name" />
            </div>
            
            <div class="col-12 mb-3">
                <base-select :options="preRequisite.segments" v-model="formData.segments" :label="formLabels.segments" :error.sync="formErrors.segments" multiple :close-on-select="false" :allow-empty="true" :add-new-modal="true" needed-permission="access-contact">
                    <template #addNewModal>
                        <segment-form @close="newModalClose" push-to-arr />
                    </template>
                </base-select>
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
                <base-button type="submit" design="primary"><i class="fas fa-save"></i> {{ $t('global.save', { attribute: $t('contact.contact') } ) }}</base-button>
            </div>
        </div>

        <template v-if="showKeepAdding && keepAdding">
            <keep-adding-form :keep-adding-fields="keepAddingFields" :keep-adding-option="keepAddingOption" @optionUpdated="keepAddingOption=$event" :keep-adding-selected-fields="keepAddingSelectedFields" @fieldsUpdated="keepAddingSelectedFields=$event" :is-loading="isLoading" />
        </template>
    </form>
</template>

<script>
    import form from '@mixins/form'
    import SegmentForm from '@views/app/segment/modal-form'

    export default {
        extends: form,
        components: {
            SegmentForm,
        },
        data() {
            return {
                formData: {
                    uuid: null,
                    name: '',
                    email: '',
                    segments: [],
                },
                preRequisite: {
                    segments: [],
                },
                formLabels: {
                    name: $t('contact.props.name'),
                    email: $t('contact.props.email'),
                    segments: $t('contact.segment.segments'),
                },
                initUrl: 'contacts',
            }
        },
        mounted() {
            this.getInitialData()
        },
    }

</script>
