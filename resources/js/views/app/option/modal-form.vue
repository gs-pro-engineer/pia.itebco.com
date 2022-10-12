<template>
    <form @submit.prevent="preSubmit" class="has-fixed-footer">

        <h5 class="text-center">{{ $t('global.add', {attribute: $t('option.option')}) }}</h5>

        <hr>

        <animated-loader :is-loading="isLoading" :loader-color="vars.loaderColor" />

        <div class="row">
            <div class="col-12 mb-4">
                <base-input auto-focus :label="formLabels.name" type="text" v-model="formData.name" :error.sync="formErrors.name" @blur="createSlug" required />
            </div>
            <div v-if="hasSlug" class="col-12 mb-4">
                <base-input :label="formLabels.slug" type="text" v-model="formData.slug" :error.sync="formErrors.slug" @focus="createSlug" @blur="createSlug" format="kebabCase" required />
            </div>
            <div v-if="hasParent" class="col-12 mb-4">
                <base-select :options="preRequisite.options" v-model="formData.parent" :label="formLabels.parent" :error.sync="formErrors.parent" :allow-empty="true" :disabled="isLoading" track-by="uuid" show-by="nameWithParents" />
            </div>
            <div class="col-12 mb-4">
                <base-input :label="formLabels.description" type="text" v-model="formData.description" :error.sync="formErrors.description" />
            </div>
        </div>

        <div class="form-footer fixed-footer mt-5">
            <div class="left-side">
                <base-button type="button" design="light" @click="close()" tabindex="-1"><i class="fas fa-chevron-left"></i> {{ $t('general.cancel') }}</base-button>
            </div>
            <div class="right-side">
                <base-button type="submit" design="primary"><i class="fas fa-save"></i> {{ $t('global.save', { attribute: $t('option.option') } ) }}</base-button>
            </div>
        </div>
    </form>
</template>

<script>
    import form from '@mixins/modal-form'

    export default {
        extends: form,
        props: {
            meta: {
                type: Object,
                required: true
            },
        },
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
                dataType: 'option',
                dataTypeArr: 'options',
                propertyToMatch: 'name',
                entityTitle: 'option.option',
            }
        },
        watch: {
            meta: {
                deep: true,
                handler(newValue, oldValue) {
                    this.formData.type = newValue.optionType
                    this.entityTitle = newValue.entityTitle
                    this.dataType = newValue.dataType
                    this.dataTypeArr = newValue.dataTypeArr
                    this.hasSlug = newValue.hasSlug
                    this.hasParent = newValue.hasParent
                }
            }
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
        created() {
            this.formData.type = this.meta.optionType
            this.entityTitle = this.meta.entityTitle
            this.dataType = this.meta.dataType
            this.dataTypeArr = this.meta.dataTypeArr
            this.hasSlug = this.meta.hasSlug
            this.hasParent = this.meta.hasParent
        },
    }

</script>
