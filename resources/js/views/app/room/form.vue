<template>
    <form @submit.prevent="submit">
        <animated-loader :is-loading="isLoading || isFetching" :loader-color="vars.loaderColor" />

        <div class="row">
            <div class="col-12 col-md-4 mb-3">
                <base-input auto-focus :label="formLabels.title" type="text" v-model="formData.title" :error.sync="formErrors.title" @blur="createSlug" required />
            </div>

            <div class="col-12 col-md-4 mb-3">
                <base-select :options="preRequisite.types" v-model="formData.type" :label="formLabels.type" :error.sync="formErrors.type" required :allow-empty="false" preselect-first />
            </div>

            <div class="col-12 col-md-4 mb-3">
                <base-select :options="preRequisite.categories" v-model="formData.category" :label="formLabels.category" :error.sync="formErrors.category" required :allow-empty="false" preselect-first :add-new-modal="true" needed-permission="access-meeting-config">
                    <template #addNewModal>
                        <option-form :meta="{optionType: 'meeting_category', dataType: 'category', dataTypeArr: 'categories', entityTitle: 'meeting.meeting_category.category'}" @close="newModalClose" />
                    </template>
                </base-select>
            </div>

            <div class="col-12 mb-3">
                <base-input :label="formLabels.identifier" type="text" v-model="formData.identifier" :error.sync="formErrors.identifier" @blur="createSlug" @focus="createSlug" required />
            </div>
        </div>

        <div class="form-footer mt-5">
            <div class="left-side">
                <base-button type="button" design="light" @click="$router.back()" tabindex="-1"><i class="fas fa-chevron-left"></i> {{ $t('general.cancel') }}</base-button>

                <base-checkbox class="ml-3 mt-2" v-model="keepAdding" v-if="showKeepAdding">
                    {{ $t('general.keep_adding') }}
                </base-checkbox>
            </div>
            <div class="right-side">
                <base-button type="button" design="light" @click="reset">{{ $t('general.reset') }}</base-button>
                <base-button type="submit" design="primary">{{ $t('global.save', { attribute: $t('room.room') } ) }}</base-button>
            </div>
        </div>

        <template v-if="showKeepAdding && keepAdding">
            <keep-adding-form :keep-adding-fields="keepAddingFields" :keep-adding-option="keepAddingOption" @optionUpdated="keepAddingOption=$event" :keep-adding-selected-fields="keepAddingSelectedFields" @fieldsUpdated="keepAddingSelectedFields=$event" :is-loading="isLoading" />
        </template>
    </form>
</template>

<script>
    import form from '@mixins/form'
    import OptionForm from '@views/app/option/modal-form'

    export default {
        extends: form,
        components: {
            OptionForm,
        },
        data() {
            return {
                formData: {
                    uuid: null,
                    title: '',
                    identifier: '',
                    type: null,
                    category: null,
                    room: true,
                },
                preRequisite: {
                    types: [],
                    categories: [],
                },
                formLabels: {
                    title: $t('meeting.props.title'),
                    type: $t('meeting.props.type'),
                    identifier: $t('meeting.props.identifier'),
                    category: $t('meeting.meeting_category.category'),
                },
                initUrl: 'meetings',
            }
        },
        methods: {
            createSlug() {
                if(this.showKeepAdding && this.formData.title != this.initialFormData.title) {
                    this.formData.identifier = this.formData.title.kebabCase()
                } else {
                    this.formData.identifier = this.formData.identifier ? this.formData.identifier : this.formData.title.kebabCase()
                }
            },
        },
        mounted() {
            this.getInitialData()
        }
    }

</script>
