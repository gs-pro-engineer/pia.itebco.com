<template>
    <form @submit.prevent="preSubmit">
        <animated-loader :is-loading="isLoading || isFetching" :loader-color="vars.loaderColor" />
        <div class="row">
            <div :class="['col-12 mb-4', computedClass]">
                <base-input auto-focus :label="formLabels.name" type="text" v-model="formData.name" :error.sync="formErrors.name" @blur="createSlug" required />
            </div>
            <div v-if="hasSlug" :class="['col-12 mb-4', computedClass]">
                <base-input :label="formLabels.slug" type="text" v-model="formData.slug" :error.sync="formErrors.slug" @focus="createSlug" @blur="createSlug" format="kebabCase" required />
            </div>
            <div v-if="hasParent" :class="['col-12 mb-4', computedClass]">
                <base-select :options="preRequisite.options" v-model="formData.parent" :label="formLabels.parent" :error.sync="formErrors.parent" :allow-empty="true" :disabled="isLoading" track-by="uuid" show-by="nameWithParents" />
            </div>
            <div class="col-12 mb-4">
                <base-input :label="formLabels.description" type="text" v-model="formData.description" :error.sync="formErrors.description" />
            </div>
        </div>

        <div v-if="formHasErrors" class="alert alert-danger my-3" role="alert">
            <h6 class="m-0">{{ $t('general.form_has_errors') }}</h6>
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
                <base-button type="submit" design="primary"><i class="fas fa-save"></i> {{ $t('global.save', { attribute: $t(entityTitle) } ) }}</base-button>
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
                    slug: '',
                    description: '',
                    parent: null,
                    type: null,
                },
                hasSlug: false,
                hasParent: false,
                preRequisite: {
                    options: [],
                },
                formLabels: {
                    name: $t('option.props.name'),
                    slug: $t('option.props.slug'),
                    description: $t('option.props.description'),
                    parent: $t('option.props.parent'),
                    type: $t('option.props.type'),
                },
                initUrl: 'options',
                entityTitle: 'option.option',
            }
        },
        computed: {
            computedClass() {
                return this.hasSlug && this.hasParent ? 'col-md-4' : (this.hasSlug || this.hasParent ? 'col-md-6' : '')
            },
        },
        methods: {
            createSlug() {
                if(this.showKeepAdding && this.formData.name != this.initialFormData.name) {
                    this.formData.slug = this.formData.name.kebabCase()
                } else {
                    this.formData.slug = this.formData.slug ? this.formData.slug : this.formData.name.kebabCase()
                }
            },
            preSubmit() {
                this.createSlug()

                if(this.hasParent && ! this.formData.parent) {
                    this.$toasted.error($t('global.invalid', { attribute: $t('option.props.parent') }), this.$toastConfig.error)
                    return
                }

                this.submit()
            }
        },
        mounted() {
            this.getInitialData()
        },
        beforeMount() {
            const meta = this.$route.meta
            this.customFilters.type = meta.optionType
            this.formData.type = meta.optionType
            this.entityTitle = meta.entityTitle
            this.hasSlug = meta.hasSlug
            this.hasParent = meta.hasParent
        },
    }

</script>
