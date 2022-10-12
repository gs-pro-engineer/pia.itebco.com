<template>
    <form @submit.prevent="doNothing">
        <animated-loader :is-loading="isLoading || isFetching" :loader-color="vars.loaderColor" />

        <div class="row">
            <div class="col-12 col-md-9">
                <base-container boxed>

                    <div class="row">
                        <div class="col-12 mb-3">
                            <base-input auto-focus :label="$t('site.page.props.title')" type="text" v-model="formData.title" :error.sync="formErrors.title" @blur="createSlug" required />
                        </div>

                        <div class="col-12 mt-4 mb-3">
                            <editor-wrapper :label="$t('site.page.props.body')" v-model="formData.body" :error.sync="formErrors.body" required />
                        </div>

                        <div class="col-12 mb-3">
                            <base-input :label="$t('site.page.props.slug')" type="text" v-model="formData.slug" :error.sync="formErrors.slug" @blur="createSlug" @focus="createSlug" format="kebabCase" required />
                            <div class="small text-muted" v-if="formData.slug">{{ getLocation() + '/.../' + formData.slug }}</div>
                        </div>
                    </div>


                    <fieldset class="fieldset primary mt-5">
                        <legend>{{ $t('site.seo') }}</legend>

                        <div class="search-preview-wrapper mb-4" v-if="seoTitle">
                            <h6 class="text-muted mb-3">{{ $t('site.google_preview') }}</h6>
                            <div class="title">{{ seoTitle | charLimit(50) }}</div>
                            <div class="url">{{ seoUrl | charLimit(70) }}</div>
                            <div class="description">{{ seoDescription | charLimit(145) }}</div>
                        </div>

                        <div class="row">
                            <div class="col-12 mb-3">
                                <base-input :label="$t('site.page.props.seo_title')" type="text" v-model="formData.meta.seoTitle" :error.sync="formErrors.seoTitle" />
                                <k-progress v-if="formData.meta.seoTitle" :show-text="false" :percent="getProgress(formData.meta.seoTitle, 50)" :status="seoTitleProgressStatus" />
                            </div>

                            <div class="col-12 mb-3">
                                <base-textarea rows="2" :label="$t('site.page.props.description')" v-model="formData.meta.description" :error.sync="formErrors.description" char-count />
                                <k-progress v-if="formData.meta.description" :show-text="false" :percent="getProgress(formData.meta.description, 145, 5)" :status="seoDescProgressStatus" />
                            </div>

                            <div class="col-12">
                                <base-textarea rows="2" :label="$t('site.page.props.keywords')" v-model="formData.meta.keywords" :error.sync="formErrors.keywords" />
                            </div>
                        </div>
                    </fieldset>

                </base-container>
            </div>

            <div class="col-12 col-md-3 d-flex flex-column">
                <card class="mb-4">
                    <div class="row">
                        <div class="col-12">
                            <view-single data-classes="small" :label="$t('site.page.page') + ' ' + $t('site.page.props.status')" :value="formData.status ? $t('site.published') : $t('site.draft')" />
                        </div>

                        <template v-if="editData && !duplicate">
                            <div class="col-12">
                                <view-date data-classes="small" :label="$t('general.created_at')" :value="formData.createdAt" :to-format="vars.defaultDateTimeFormat" />
                            </div>
                            <div class="col-12">
                                <view-date data-classes="small" :label="$t('general.updated_at')" :value="formData.updatedAt" :to-format="vars.defaultDateTimeFormat" />
                            </div>
                        </template>
                    </div>

                    <div v-if="formHasErrors" class="alert alert-danger my-3" role="alert">
                        <h6 class="m-0">{{ $t('general.form_has_errors') }}</h6>
                    </div>

                    <div class="form-footer mt-3">
                        <div class="both-side" key="published" v-if="formData.status">
                            <base-button type="button" design="link" @click="draft" tabindex="-1" class="text-center">{{ $t('site.unpublish') }}</base-button>
                            <base-button type="button" design="primary" @click="publish">{{ $t('general.update') }}</base-button>
                        </div>

                        <div class="both-side" key="draft" v-else>
                            <base-button type="button" design="light" @click="draft">
                                <template v-if="formData.uuid">{{ $t('general.update') }}</template>
                                <template v-else>{{ $t('general.save') }}</template>
                            </base-button>

                            <base-button type="button" design="primary" @click="publish">{{ $t('general.publish') }}</base-button>
                        </div>
                    </div>
                </card>

                <card class="mb-4" :title="$t('site.featured_image')">
                    <div class="row">
                        <div class="col-12 d-flex justify-content-center">
                            <image-uploader :url="imageUploadURL" :existing-image="formData.media ? formData.media.url : null" :existing-media="formData.media" :show-upload-button="!showKeepAdding" @uploaded="uploadedImage" @error="uploadedImageError" @noNeed="noNeedCallback" @removed="getEntityData" />
                        </div>
                    </div>
                </card>

                <card class="mb-4" :title="$t('site.attributes')">
                    <div class="row">
                        <div class="col-12 mb-3">
                            <base-select :options="preRequisite.templates" v-model="formData.template" :label="$t('site.page_template.template')" :error.sync="formErrors.template" required preselect-first />
                        </div>

                        <div class="col-12 mb-3">
                            <base-select :options="preRequisite.pages" v-model="formData.parent" :label="$t('site.page.props.parent')" :error.sync="formErrors.parent" :allow-empty="true" />
                        </div>

                    </div>
                </card>

                <card class="flex-grow" :title="$t('site.options')">
                    <div class="row">
                    </div>
                </card>

            </div>
        </div>
    </form>
</template>

<script>
    import form from '@mixins/form'
    import EditorWrapper from '@core/components/EditorWrapper'
    import ImageUploader from '@components/ImageUploader'
    import EventBus from '@js/event-bus'
    import KProgress from 'k-progress'

    export default {
        extends: form,
        components: {
            EditorWrapper,
            ImageUploader,
            KProgress,
        },
        data() {
            return {
                formData: {
                    uuid: null,
                    title: '',
                    body: '',
                    slug: '',
                    status: false,
                    template: null,
                    parent: null,
                    media: null,
                    meta: {
                        seoTitle: '',
                        keywords: '',
                        description: '',
                        showFooter: false,
                    }
                },
                preRequisite: {
                    templates: [],
                    parents: [],
                },
                initUrl: 'site/pages',
                seoRecommendedMinChars: 180,
                seoRecommendedMaxChars: 220,
                progressBarColors: [
                    '#f5365c',
                    '#fb6340',
                    '#ffd600',
                    '#5e72e4',
                    '#2dce89',
                ]
            }
        },
        computed: {
            imageUploadURL() {
                return `site/pages/${this.formData.uuid}/media`
            },
            seoTitleProgressStatus() {
                let val = this.getProgress(this.formData.meta.seoTitle, 50)
                return val < 50 ? 'error' : ( val < 99 ? 'success' : 'warning' )
            },
            seoDescProgressStatus() {
                let val = this.getProgress(this.formData.meta.description, 145, 5)
                return val < 50 ? 'error' : ( val < 99 ? 'success' : 'warning' )
            },
            formStatus() {
                if(!this.formData.uuid) {
                    return 'creating'
                } else if(this.editData && !this.duplicate){
                    return 'editing'
                } else {
                    return 'saved'
                }
            },
            seoTitle: {
                get() {
                    return this.formData.meta.seoTitle || this.formData.title
                },
                set(v) {
                    this.formData.meta.seoTitle = v
                }
            },
            seoDescription: {
                get() {
                    return this.formData.meta.description ? this.formData.meta.description : this.getExcerpt(this.formData.body)
                },
                set(v) {
                    this.formData.meta.description = v
                }
            },
            seoUrl() {
                return this.getLocation() + '/.../' + this.formData.slug
            }
        },
        methods: {
            getProgress(str, total, diff = 1) {
                let val = parseInt(((str.length / (total + diff) ) * 100).toFixed(0))
                return val > 100 ? 100 : val
            },
            publish() {
                this.formData.status = true
                this.submit()
            },
            draft() {
                this.formData.status = false
                this.submit()
            },
            createSlug() {
                if(this.showKeepAdding && this.formData.title != this.initialFormData.title) {
                    this.formData.slug = this.formData.title.kebabCase()
                } else {
                    this.formData.slug = this.formData.slug ? this.formData.slug : this.formData.title.kebabCase()
                }
            },
            getLocation() {
                return document.location.origin
            },
            uploadedImage() {
                if(this.formStatus === 'editing') {
                    this.getEntityData()
                } else {
                    this.$router.back()
                }
            },
            uploadedImageError() {
                if(this.formStatus === 'saved') {
                    this.$router.back()
                } else {
                    EventBus.$emit('CANCEL_UPLOAD')
                }
            },
            noNeedCallback() {
                if(this.formStatus === 'saved') {
                    this.$router.back()
                } else {
                    this.getEntityData()
                }
            },
            afterEditData() {
                if(this.duplicate) {
                    this.formData.uuid = null
                    this.formData.status = false
                    this.formData.media = null
                }
            },
            afterSubmit(response) {
                if(!this.formData.uuid) {
                    this.formData.uuid = response.page.uuid
                }
                this.initialFormData = _.cloneDeep(this.formData)

                if(this.formData.uuid) {
                    this.$nextTick(() => {
                        EventBus.$emit('START_UPLOAD')
                    })
                }
            },
            getExcerpt(str) {
                return formUtil.getExcerpt(formUtil.stripHtml(str), 300)
            }
        },
        mounted() {
            this.getInitialData()
        }
    }

</script>
