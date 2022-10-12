<template>
    <form @submit.prevent="submit">
        <animated-loader :is-loading="isLoading || isFetching" :loader-color="vars.loaderColor" />

        <div class="row">
            <div class="col-12 col-md-5">

                <div class="row">
                    <div class="col-12 mb-3">
                        <base-input auto-focus :label="formLabels.title" type="text" v-model="formData.title" :error.sync="formErrors.title" required />
                    </div>

                    <div class="col-12 mb-3">
                        <base-textarea rows="10" :label="formLabels.agenda" v-model="formData.agenda" :error.sync="formErrors.agenda" required />
                    </div>
                </div>

            </div>

            <div class="col-12 col-md-7">
                <fieldset class="fieldset primary">
                    <div class="row">
                        <div class="col-12 col-md-6 mb-3">
                            <base-select :options="preRequisite.types" v-model="formData.type" :label="formLabels.type" :error.sync="formErrors.type" required :allow-empty="false" preselect-first />
                        </div>

                        <div class="col-12 col-md-6 mb-3">
                            <base-select :options="preRequisite.categories" v-model="formData.category" :label="formLabels.category" :error.sync="formErrors.category" required :allow-empty="false" preselect-first :add-new-modal="true" needed-permission="access-meeting-config">
                                <template #addNewModal>
                                    <option-form :meta="{optionType: 'meeting_category', dataType: 'category', dataTypeArr: 'categories', entityTitle: 'meeting.meeting_category.category'}" @close="newModalClose" />
                                </template>
                            </base-select>
                        </div>

                        <div class="col-12 col-md-6 mb-3">
                            <base-input class="mb-3" :label="formLabels.startDateTime" addon-right-icon="far fa-calendar-alt" type="text" v-model="formData.startDateTime" :error.sync="formErrors.startDateTime" :is-wrapper="true" required>
                                <date-picker v-model="formData.startDateTime" :config="vars.datetimepickerConfig" class="form-control datepicker">
                                </date-picker>
                            </base-input>
                        </div>

                        <div class="col-12 col-md-6 mb-3">
                            <base-input class="mb-3" :label="formLabels.period" type="number" v-model="formData.period" :error.sync="formErrors.period" required select-on-focus @wheel.stop.prevent :addon-right-text="$t('list.general.durations.minutes')" />
                        </div>

                        <div class="col-12 col-md-6 mb-3">
                            <base-input :label="formLabels.identifier" type="text" v-model="formData.identifier" :error.sync="formErrors.identifier" />
                        </div>

                        <div class="col-12 col-md-6 mb-3">
                            <base-input :label="formLabels.maxParticipantCount" type="number" v-model="formData.maxParticipantCount" :error.sync="formErrors.maxParticipantCount" :min="2" :max="maxParticipantAllowed" :step="1" />
                        </div>

                        <div class="col-12 col-md-6 mb-3">
                            <base-select 
                                :options="autoTranslates" 
                                v-model="selectTranslator"
                                :label="formLabels.autoTranslate"
                                :allow-empty="false"
                                preselect-first
                                simple 
                                track-by="uuid" 
                                show-by="label" 
                                required
                            />
                        </div>

                        <div class="col-12 col-md-6 mb-3">
                            <base-checkbox class="ml-3 mt-2" v-model="formData.accessibleViaLink">
                                {{ formLabels.accessibleViaLink }}
                            </base-checkbox>
                        </div>

                        <div class="col-12 col-md-6 mb-3" v-if="configs.meeting && configs.meeting.enablePam && !formData.accessibleToMembers && !formData.isPaid">
                            <base-checkbox class="ml-3 mt-2" v-model="formData.isPam" @change="isPamChanged">
                                {{ formLabels.isPam }}
                            </base-checkbox>
                        </div>
                    </div>

                    <template v-if="allowExtraInput && !formData.isPam">
                        <div class="row" v-if="!formData.isPaid">
                            <div class="col-12 mb-3">
                                <base-checkbox class="ml-3 mt-2" v-model="formData.accessibleToMembers" @change="accessibleToMembersChanged">
                                    {{ formLabels.accessibleToMembers }}
                                </base-checkbox>
                            </div>
                        </div>

                        <div class="row" v-if="configs.meeting.enablePaidMeeting && !formData.accessibleToMembers">
                            <div class="col-12 col-md-6 mb-3">
                                <base-checkbox class="ml-3 mt-2" v-model="formData.isPaid" @change="isPaidChanged">
                                    {{ formLabels.isPaid }}
                                </base-checkbox>
                            </div>

                            <div class="col-12 col-md-6 mb-3" v-if="formData.isPaid">
                                <base-input :label="formLabels.fee" type="number" v-model="formData.fee" :error.sync="formErrors.fee" :min="0.01" :step="0.01" format="currency" />
                            </div>
                        </div>
                    </template>
                </fieldset>
            </div>
        </div>

        <div class="mt-element">
            <editor-wrapper :label="formLabels.description" v-model="formData.description" :error.sync="formErrors.description" />
        </div>

        <div v-if="formHasErrors" class="alert alert-danger" role="alert">
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
                <base-button type="submit" design="primary">{{ $t('global.save', { attribute: $t('meeting.meeting') } ) }}</base-button>
            </div>
        </div>

        <template v-if="showKeepAdding && keepAdding">
            <keep-adding-form :keep-adding-fields="keepAddingFields" :keep-adding-option="keepAddingOption" @optionUpdated="keepAddingOption=$event" :keep-adding-selected-fields="keepAddingSelectedFields" @fieldsUpdated="keepAddingSelectedFields=$event" :is-loading="isLoading" />
        </template>
        <template>
            <SlideYUpTransition :duration="this.props.animationDuration">
                <div class="modal fade"
                    @click.self="closeModal"
                    :class="[{'show d-block': this.props.show}, {'d-none': !this.props.show}, {'modal-mini': this.props.type === 'mini'}]"
                    v-show="this.props.show"
                    tabindex="-1"
                    role="dialog"
                    :aria-hidden="!this.props.show">

                    <div class="modal-dialog modal-dialog-centered" :class="[{'modal-notice': this.props.type === 'notice'}, this.props.modalClasses]">
                        <div class="modal-content" :class="[this.props.gradient ? `bg-gradient-${this.props.gradient}` : '', this.props.modalContentClasses]">

                            <div class="modal-body" :class="this.props.bodyClasses">
                                <slot>
                                    <div class="col-12">
                                        <h5>Please Input the Microsoft Azure API Key!</h5>
                                        <base-input
                                            :label="formLabels.azure_api_key"
                                            type="text"
                                            v-model="modalFormData.azureApikey"
                                            :error.sync="formErrors.azureApikey"
                                            @change="isChangedAzureApiKey"
                                        />
                                    </div>
                                </slot>
                            </div>

                            <div class="modal-footer" :class="this.props.footerClasses">
                                <slot name="footer">
                                    <div class="text-right">
                                        <base-button type="button" design="light" @click="closeModal">
                                            {{$t("general.cancel")}}
                                        </base-button>
                                        <base-button type="button" design="primary" @click="saveAzureApiKey">
                                            {{$t("general.save")}}
                                        </base-button>
                                    </div>
                                </slot>
                            </div>
                        </div>
                    </div>
                </div>
            </SlideYUpTransition>
        </template>
        <template>
            <SlideYUpTransition :duration="this.props.animationDuration">
                <div class="modal fade"
                    @click.self="closeGoogleModal"
                    :class="[{'show d-block': this.props.showGoogleModal}, {'d-none': !this.props.showGoogleModal}, {'modal-mini': this.props.type === 'mini'}]"
                    v-show="this.props.showGoogleModal"
                    tabindex="-1"
                    role="dialog"
                    :aria-hidden="!this.props.showGoogleModal">

                    <div class="modal-dialog modal-dialog-centered" :class="[{'modal-notice': this.props.type === 'notice'}, this.props.modalClasses]">
                        <div class="modal-content" :class="[this.props.gradient ? `bg-gradient-${this.props.gradient}` : '', this.props.modalContentClasses]">

                            <div class="modal-body" :class="this.props.bodyClasses">
                                <slot>
                                    <div class="col-12">
                                        <label class="input-group-material-label">
                                            Please Upload the Google API Key file!
                                        </label>
                                        <file-uploader
                                            class="mb-5"
                                            name-label="config.system.google_api_key"
                                            :options="uploaderConfig"
                                            @updated="handleFileUpload"
                                            :multiple="false"
                                            url="/config/system/google_api_key_json/start"
                                            button-classes="justify-content-center"
                                            :hideAfterUpload="false"
                                        />
                                    </div>
                                </slot>
                            </div>

                            <div class="modal-footer" :class="this.props.footerClasses">
                                <slot name="footer">
                                    <div class="text-right">
                                        <base-button type="button" design="light" @click="closeGoogleModal">
                                            {{$t("general.cancel")}}
                                        </base-button>
                                        <base-button type="button" design="primary" @click="saveGoogleApiKey">
                                            {{$t("general.save")}}
                                        </base-button>
                                    </div>
                                </slot>
                            </div>
                        </div>
                    </div>
                </div>
            </SlideYUpTransition>
        </template>
    </form>
</template>

<script>
    import form from '@mixins/form'
    import EditorWrapper from '@core/components/EditorWrapper'
    import OptionForm from '@views/app/option/modal-form'
    import * as MomentTz from '@core/filters/momentz'
    import * as ConfigAPI from '@api/config'
    import { SlideYUpTransition } from "vue2-transitions";

    import store from '@js/store'
    const vars = store.getters['config/vars']

    export default {
        extends: form,
        components: {
            EditorWrapper,
            OptionForm,
            SlideYUpTransition,
        },
        data() {
            return {
                formData: {
                    uuid: null,
                    title: '',
                    agenda: '',
                    description: '',
                    startDateTime: MomentTz.now(vars.serverDateTimeFormat),
                    period: 60,
                    type: null,
                    category: ["Default"],
                    autoTranslate: null,
                    identifier: '',
                    maxParticipantCount: 1000,
                    accessibleViaLink: false,
                    accessibleToMembers: false,
                    isPam: false,
                    isPaid: false,
                    fee: 0,
                },
                autoTranslates: [
                    { uuid: 'none',                label: 'NONE' },
                    { uuid: 'microsoft_azure',     label: 'Microsoft Azure' },
                    { uuid: 'google_translate',    label: 'Google Translate' }
                ],
                modalFormData: {
                    azureApikey: "",
                    googleApikey: "",
                },
                preRequisite: {
                    types: [],
                    segments: [],
                    categories: [],
                },
                uploaderConfig: {
                    allowedExtensions: ["json"],
                    maxNoOfFiles: 1,
                },
                formLabels: {
                    title: $t('meeting.props.title'),
                    agenda: $t('meeting.props.agenda'),
                    identifier: $t('meeting.enter_meeting_code'),
                    maxParticipantCount: $t('meeting.config.max_participant_count'),
                    description: $t('meeting.props.description'),
                    startDateTime: $t('meeting.props.start_date_time'),
                    period: $t('meeting.props.estimated_period'),
                    type: $t('meeting.props.type'),
                    category: $t('meeting.meeting_category.category'),
                    autoTranslate: $t('meeting.props.auto_translate'),
                    accessibleViaLink: $t('meeting.props.accessible_via_link'),
                    accessibleToMembers: $t('meeting.props.only_accessible_to_members'),
                    isPam: $t('meeting.props.is_pam'),
                    isPaid: $t('meeting.props.is_paid'),
                    fee: $t('meeting.props.fee'),
                    azure_api_key: $t('config.system.azure_api_key'),
                    google_api_key: $t("config.system.google_api_key")
                },
                azure_modal_state: false,
                google_modal_state: false,
                initUrl: 'meetings',
                dateTimeFields: ['startDateTime'],
                modalVisible: false,
                props: {
                    show: false,
                    showGoogleModal: false,
                    showClose: true,
                    type: "",
                    modalClasses: {
                        type: [Object, String],
                        description: "Modal dialog css classes"
                    },
                    modalContentClasses: {
                        type: [Object, String],
                        description: "Modal dialog content css classes"
                    },
                    gradient: {
                        type: String,
                        description: "Modal gradient type (danger, primary etc)"
                    },
                    headerClasses: {
                        type: [Object, String],
                        description: "Modal Header css classes"
                    },
                    bodyClasses: {
                        type: [Object, String],
                        description: "Modal Body css classes"
                    },
                    footerClasses: {
                        type: [Object, String],
                        description: "Modal Footer css classes"
                    },
                    animationDuration: 500
                },
                selectedLanguage: ""
            }
        },
        computed: {
            maxParticipantAllowed() {
                return this.configs.meeting.maxParticipantCount ? this.configs.meeting.maxParticipantCount : 999999
            },
            selectTranslator: {
                get() {
                    if (this.autoTranslate) {
                        return this.formData.autoTranslate;
                    } else {
                        return this.selectedLanguage;
                    }
                },
                set(value) {
                    if (value === "none") {
                        this.formData.autoTranslate = "NONE";
                    } else {
                        ConfigAPI.getTranslator(value).then(response => {
                            if (value === "microsoft_azure") {
                                this.formData.autoTranslate = "Microsoft Azure";
                                this.props.show = (response === false) ? true : false;
                            }
                            if (value === "google_translate") {
                                this.formData.autoTranslate = "Google Translate";
                                this.props.showGoogleModal = (response === false) ? true : false;
                            }
                        })
                    }
                    this.selectedLanguage = value;
                }
            }
        },
        methods: {
            afterEditData() {
                if(this.duplicate) {
                    this.formData.identifier = ''
                    this.formData.startDateTime = moment().format(vars.serverDateTimeFormat)
                }
            },
            isPamChanged() {
                if(this.formData.isPam) {
                    this.formData.accessibleToMembers = false
                    this.formData.isPaid = false
                    this.formData.fee = 0
                }
            },
            accessibleToMembersChanged() {
                if(this.formData.accessibleToMembers) {
                    this.formData.isPam = false
                    this.formData.isPaid = false
                    this.formData.fee = 0
                }
            },
            isPaidChanged() {
                if(this.formData.isPaid) {
                    this.formData.isPam = false
                    this.formData.accessibleToMembers = false
                }
            },
            isChangedAzureApiKey(e) {
                this.modalFormData.azureApikey = e.target.value;
            },
            closeModal() {
                this.props.show = false;
            },
            saveAzureApiKey() {
                ConfigAPI.saveAzureApiKey(this.modalFormData.azureApikey).then(response => {
                    this.props.show = response.status === "success" ? false : true;
                })
            },
            closeGoogleModal() {
                this.props.showGoogleModal = false;
            },
            handleFileUpload(response) {
                if (response.uuid) {
                    this.modalFormData.googleApikey = response.uuid;
                }
            },
            saveGoogleApiKey() {
                ConfigAPI.saveGoogleApiKey(this.modalFormData.googleApikey).then(response => {
                    this.props.showGoogleModal = response.status === "success" ? false : true;
                })
            },
        },
        mounted() {
            this.getInitialData();
        }
    }

</script>
<style>
    .modal.show {
        background-color: rgba(0, 0, 0, 0.3);
    }
    .modal-body h5 {
        font-weight: bold;
    }
</style>