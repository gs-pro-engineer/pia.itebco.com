<template>
    <base-container boxed with-loader :is-loading="isLoading" :loader-color="vars.loaderColor">
        <form @submit.prevent="submit">

            <h5 class="mb-4 pb-2 border-bottom">{{ $t('config.basic.org_information') }}</h5>

            <div class="row">

                <div class="col-12 col-md-4 mb-4">
                    <base-input auto-focus :label="$t('config.basic.org_name')" type="text" v-model="formData.orgName" :error.sync="formErrors.orgName" />
                </div>

                <div class="col-12 col-md-4 mb-4">
                    <base-input :label="$t('config.basic.org_foundation_date')" addon-right-icon="far fa-calendar-alt" type="text" v-model="formData.orgFoundationDate" :error.sync="formErrors.orgFoundationDate" :is-wrapper="true">
                        <date-picker v-model="formData.orgFoundationDate" :config="vars.datepickerConfig" class="form-control datepicker">
                        </date-picker>
                    </base-input>
                </div>

                <div class="col-12 col-md-4 mb-4">
                    <base-input :label="$t('config.basic.org_tax_number')" type="text" v-model="formData.orgTaxNumber" :error.sync="formErrors.orgTaxNumber" />
                </div>

                <div class="col-12 col-md-4 mb-4">
                    <base-input :label="$t('config.basic.org_running_body')" type="text" v-model="formData.orgRunningBody" :error.sync="formErrors.orgRunningBody" />
                </div>

                <div class="col-12 col-md-4 mb-4">
                    <base-input :label="$t('config.basic.org_recognition_body')" type="text" v-model="formData.orgRecognitionBody" :error.sync="formErrors.orgRecognitionBody" />
                </div>

                <div class="col-12 col-md-4 mb-4">
                    <base-input :label="$t('config.basic.org_recognition_number')" type="text" v-model="formData.orgRecognitionNumber" :error.sync="formErrors.orgRecognitionNumber" />
                </div>
            </div>


            <h5 class="mb-4 mt-5 pb-2 border-bottom">{{ $t('config.basic.app_information') }}</h5>

            <div class="row">
                <div class="col-12 col-md-4 mb-4">
                    <base-input :label="$t('config.basic.app_name')" type="text" v-model="formData.appName" :error.sync="formErrors.appName" />
                </div>
                <div class="col-12 col-md-4 mb-4">
                    <base-input :label="$t('config.basic.app_short_name')" type="text" v-model="formData.appShortName" :error.sync="formErrors.appShortName" />
                </div>
                <div class="col-12 col-md-4 mb-4">
                    <base-input :label="$t('config.basic.app_desc')" type="text" v-model="formData.appDesc" :error.sync="formErrors.appDesc" />
                </div>
                <div class="col-12 col-md-4 mb-4">
                    <base-input :label="$t('config.basic.app_theme_color')" type="text" v-model="formData.appThemeColor" :error.sync="formErrors.appThemeColor" />
                </div>
                <div class="col-12 col-md-4 mb-4">
                    <base-input :label="$t('config.basic.app_background_color')" type="text" v-model="formData.appBackgroundColor" :error.sync="formErrors.appBackgroundColor" />
                </div>
                <div class="col-12 col-md-4 mb-4">
                    <base-input :label="$t('config.basic.app_start_url')" type="text" v-model="formData.appStartUrl" :error.sync="formErrors.appStartUrl" />
                </div>
                <div class="col-12 col-md-4 mb-4">
                    <base-input :label="$t('config.basic.app_scope')" type="text" v-model="formData.appScope" :error.sync="formErrors.appScope" />
                </div>
            </div>


            <h5 class="mb-4 mt-5 pb-2 border-bottom">{{ $t('config.basic.seo_information') }}</h5>

            <div class="row">
                <div class="col-12 col-md-4 mb-4">
                    <base-input :label="$t('config.basic.seo_title')" type="text" v-model="formData.seoTitle" :error.sync="formErrors.seoTitle" />
                </div>
                <div class="col-12 col-md-4 mb-4">
                    <base-input :label="$t('config.basic.seo_desc')" type="text" v-model="formData.seoDesc" :error.sync="formErrors.seoDesc" />
                </div>
                <div class="col-12 col-md-4 mb-4">
                    <base-input :label="$t('config.basic.seo_author')" type="text" v-model="formData.seoAuthor" :error.sync="formErrors.seoAuthor" />
                </div>
                <div class="col-12 mb-4">
                    <base-input :label="$t('config.basic.seo_keywords')" type="text" v-model="formData.seoKeywords" :error.sync="formErrors.seoKeywords" />
                </div>
            </div>

            <h5 class="mb-4 mt-5 pb-2 border-bottom">{{ $t('config.basic.contact_information') }}</h5>

            <div class="row">

                <div class="col-12 col-sm-6 mb-4">
                    <base-input :label="$t('config.basic.org_address_line1')" type="text" v-model="formData.orgAddressLine1" :error.sync="formErrors.orgAddressLine1" />
                </div>

                <div class="col-12 col-sm-6 mb-4">
                    <base-input :label="$t('config.basic.org_address_line2')" type="text" v-model="formData.orgAddressLine2" :error.sync="formErrors.orgAddressLine2" />
                </div>

                <div class="col-12 col-sm-3 mb-4">
                    <base-input :label="$t('config.basic.org_city')" type="text" v-model="formData.orgCity" :error.sync="formErrors.orgCity" />
                </div>

                <div class="col-12 col-sm-3 mb-4">
                    <base-input :label="$t('config.basic.org_state')" type="text" v-model="formData.orgState" :error.sync="formErrors.orgState" />
                </div>

                <div class="col-12 col-sm-3 mb-4">
                    <base-input :label="$t('config.basic.org_zipcode')" type="text" v-model="formData.orgZipcode" :error.sync="formErrors.orgZipcode" />
                </div>

                <div class="col-12 col-sm-3 mb-4">
                    <base-input :label="$t('config.basic.org_country')" type="text" v-model="formData.orgCountry" :error.sync="formErrors.orgCountry" />
                </div>

                <div class="col-12 col-sm-3 mb-4">
                    <base-input :label="$t('config.basic.org_phone')" type="text" v-model="formData.orgPhone" :error.sync="formErrors.orgPhone" />
                </div>

                <div class="col-12 col-sm-3 mb-4">
                    <base-input :label="$t('config.basic.org_fax')" type="text" v-model="formData.orgFax" :error.sync="formErrors.orgFax" />
                </div>

                <div class="col-12 col-sm-3 mb-4">
                    <base-input :label="$t('config.basic.org_email')" type="text" v-model="formData.orgEmail" :error.sync="formErrors.orgEmail" />
                </div>

                <div class="col-12 col-sm-3 mb-4">
                    <base-input :label="$t('config.basic.org_website')" type="text" v-model="formData.orgWebsite" :error.sync="formErrors.orgWebsite" />
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
                    orgName: '',
                    orgFoundationDate: '',
                    orgTaxNumber: '',
                    orgRunningBody: '',
                    orgRecognitionNumber: '',
                    orgRecognitionBody: '',
                    orgAddressLine1: '',
                    orgAddressLine2: '',
                    orgCity: '',
                    orgState: '',
                    orgZipcode: '',
                    orgCountry: '',
                    orgPhone: '',
                    orgFax: '',
                    orgEmail: '',
                    orgWebsite: '',
                    appName: '',
                    appDesc: '',
                    appThemeColor: '',
                    appBackgroundColor: '',
                    appStartUrl: '',
                    appScope: '',
                    seoTitle: '',
                    seoDesc: '',
                    seoAuthor: '',
                    seoKeywords: '',
                    type: 'basic'
                },
            }
        },
    }

</script>
