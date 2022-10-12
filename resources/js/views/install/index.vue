<template>
    <div class="general-page install-page">
        <div class="container">
            <animated-loader :is-loading="isLoading" :loader-color="vars.loaderColor" />

            <card type="white" shadow v-show="!isProcessing" header-classes="bg-white" body-classes="p-0" class="border-0 install-box">
                <form-wizard :color="vars.colors.primary" shape="square" :errorColor="vars.colors.danger" :title="name+' '+version" :subtitle="$t('product.install.sub_title')" :nextButtonText="$t('product.install.next_button_content')" :backButtonText="$t('product.install.back_button_content')" :finishButtonText="$t('product.install.finish_button_content')" ref="installWizard" @on-complete="finishInstallation" @on-change="onTabChange">



                    <tab-content :title="$t('product.install.pre_requisite')" :before-change="preRequisiteFulfill" icon="fas fa-tasks">
                        <h5 class="card-title text-center">{{ $t('product.install.server_requirements') }}</h5>
                        <div class="row server-requirements">
                            <div class="col-3" v-if="serverChecks.length" v-for="serverCheck in serverChecks">
                                <p :class="['alert','alert-'+(serverCheck.type === 'error' ? 'danger' : 'info')]"><i :class="['fa','fa-'+((serverCheck.type === 'error') ? 'times' : 'check')]"></i> {{serverCheck.message}}</p>
                            </div>
                        </div>

                        <h5 class="card-title text-center mt-3">{{ $t('product.install.folder_permissions') }}</h5>
                        <div class="row server-requirements">
                            <div class="col-3" v-if="folderChecks.length" v-for="folderCheck in folderChecks">
                                <p :class="['alert','alert-'+(folderCheck.type === 'error' ? 'danger' : 'info')]"><i :class="['fa','fa-'+((folderCheck.type === 'error') ? 'times' : 'check')]"></i> {{folderCheck.message}}</p>
                            </div>
                        </div>
                    </tab-content>

                    <tab-content :title="$t('product.install.database_setup')" :before-change="validateDatabase" icon="fas fa-database">
                        <form class="form-horizontal" @submit.prevent="$refs.installWizard.nextTab()">

                            <div class="row">
                                <div class="col-12 col-md-4">
                                    <base-input class="mb-3" :label="$t('product.install.props.db_port')" type="text" name="dbPort" v-model="formData.dbPort" :error.sync="formErrors.dbPort"></base-input>
                                </div>
                                <div class="col-12 col-md-8">
                                    <base-input class="mb-3" :label="$t('product.install.props.db_host')" type="text" name="dbHost" v-model="formData.dbHost" :error.sync="formErrors.dbHost"></base-input>
                                </div>

                                <div class="col-12 col-md-4">
                                    <base-input class="mb-3" :label="$t('product.install.props.db_database')" type="text" name="dbDatabase" v-model="formData.dbDatabase" :error.sync="formErrors.dbDatabase" ref="dbDatabase"></base-input>
                                </div>
                                <div class="col-12 col-md-4">
                                    <base-input class="mb-3" :label="$t('product.install.props.db_username')" type="text" name="dbUsername" v-model="formData.dbUsername" :error.sync="formErrors.dbUsername"></base-input>
                                </div>
                                <div class="col-12 col-md-4">
                                    <base-input class="mb-3" :label="$t('product.install.props.db_password')" type="password" name="dbPassword" v-model="formData.dbPassword" :error.sync="formErrors.dbPassword"></base-input>
                                </div>
                                <div class="col-12 col-md-6">
                                    <base-checkbox name="seed" class="my-4" v-model="formData.skipDbVersionCheck">
                                        {{ $t('product.install.skip_db_version_check') }}
                                    </base-checkbox>
                                </div>
                            </div>

                            <button type="submit" class="btn d-none">{{$t('product.install.next_button_content')}}</button>
                        </form>
                    </tab-content>

                    <tab-content :title="$t('product.install.admin_setup')" :before-change="validateAdmin" icon="fas fa-user">
                        <form class="form-horizontal" @submit.prevent="$refs.installWizard.nextTab()">

                            <div class="row">
                                <div class="col-12 col-md-4">
                                    <base-input class="mb-3" :label="$t('product.install.props.email')" type="email" name="email" v-model="formData.email" :error.sync="formErrors.email" ref="email"></base-input>
                                </div>

                                <div class="col-12 col-md-4">
                                    <base-input class="mb-3" :label="$t('product.install.props.name')" type="text" name="name" v-model="formData.name" :error.sync="formErrors.name"></base-input>
                                </div>

                                <div class="col-12 col-md-4">
                                    <base-input class="mb-3" :label="$t('product.install.props.username')" type="text" name="username" v-model="formData.username" :error.sync="formErrors.username"></base-input>
                                </div>

                                <div class="col-12 col-md-4">
                                    <base-input class="mb-3" :label="$t('product.install.props.language')" type="text" name="language" v-model="formData.language" :error.sync="formErrors.language"></base-input>
                                </div>
                                <div class="col-12 col-md-4">
                                    <base-input class="mb-3" :label="$t('product.install.props.password')" type="password" name="password" v-model="formData.password" :error.sync="formErrors.password"></base-input>
                                </div>
                                <div class="col-12 col-md-4">
                                    <base-input class="mb-3" :label="$t('product.install.props.password_confirmation')" type="password" name="passwordConfirmation" v-model="formData.passwordConfirmation" :error.sync="formErrors.passwordConfirmation"></base-input>
                                </div>
                            </div>

                            <button type="submit" class="btn d-none">{{$t('product.install.next_button_content')}}</button>
                        </form>
                    </tab-content>

                    <tab-content :title="$t('product.install.ready_to_go')" :before-change="validateAccessCode" icon="fas fa-check">

                        <p class="alert alert-info my-3"><span class="pull-left mr-2"><i class="fas fa-info-circle fa-3x"></i></span> <span class="h6 text-white">{{ $t('product.install.ready_to_go_message') }}</span></p>

                        <form class="form-horizontal" @submit.prevent="$refs.installWizard.nextTab()">
                            <div class="row">
                                <div class="col-6">
                                    <base-input class="mb-3" :label="$t('product.license.props.access_code')" type="text" name="accessCode" v-model="formData.accessCode" :error.sync="formErrors.accessCode" ref="accessCode"></base-input>

                                    <a :href="verifier" target="_blank" class="btn btn-md btn-info my-4 text-uppercase" tabindex="-1">{{ $t('product.license.get_access_code') }}</a>
                                </div>
                                <div class="col-6">
                                    <base-input class="mb-3" :label="$t('product.license.props.envato_email')" type="email" name="envatoEmail" v-model="formData.envatoEmail" :error.sync="formErrors.envatoEmail"></base-input>

                                    <div class="clearfix mb-4"></div>
                                </div>
                            </div>

                            <button type="submit" class="btn d-none">{{$t('product.install.next_button_content')}}</button>
                        </form>
                    </tab-content>

                </form-wizard>
            </card>

            <card type="white" shadow v-show="isProcessing" header-classes="bg-white pb-5" body-classes="px-lg-5 py-lg-5" class="border-0 install-box text-center">
                <h2 class="mb-4">Installation in Progress</h2>
                <hr>
                <h5>This process may take several minutes depending upon your server configuration. Meanwhile, you can read some inspirational quotes from great personalities all over the world!</h5>
                <p class="alert alert-info mt-4">Do not reload or close this page. You will be redirected to login page automatically once the installation is completed.</p>

                <animated-loader :is-loading="isProcessing" :loader-color="vars.loaderColor" size="inline" />
                <quotes />
            </card>

        </div>
    </div>
</template>

<script>
    import { FormWizard, TabContent } from 'vue-form-wizard'
    import Quotes from './partials/quotes'
    import * as InstallAPI from '@api/install'
    import { mapGetters } from 'vuex'
    import { saveToStorage, getFromStorage, removeFromStorage } from '@js/core/utils'

    export default {
        components: {
            FormWizard,
            TabContent,
            Quotes,
        },
        data() {
            return {
                name: '',
                version: '',
                serverChecks: [],
                folderChecks: [],
                formData: {
                    dbHost: 'localhost',
                    dbPort: 3306,
                    dbDatabase: '',
                    dbUsername: '',
                    dbPassword: '',
                    name: '',
                    email: '',
                    username: '',
                    language: 'Japanese',
                    password: '',
                    passwordConfirmation: '',
                    accessCode: '',
                    envatoEmail: '',
                    seed: false,
                    skipDbVersionCheck: false,
                },
                verifier: '',
                formErrors: {},
                quotes: [],
                isProcessing: false,
                isLoading: false,
                helpTopic: ''
            }
        },
        computed: {
            ...mapGetters('config', [
                'vars',
            ]),
        },
        mounted() {
            this.getPreRequisite()
        },
        methods: {
            getPreRequisite() {
                this.isLoading = true
                InstallAPI.getPreRequisite(this.formData)
                    .then(response => {
                        this.isLoading = false
                        this.name = response.app.name
                        this.serverChecks = response.preRequisite.server
                        this.folderChecks = response.preRequisite.folder
                        this.verifier = response.app.verifier
                        this.version = response.app.version
                        this.quotes = response.quotes

                        const savedFormData = getFromStorage('KMInstallWizFormData', true)
                        formUtil.assignValues(this.formData, savedFormData)
                    })
                    .catch(error => {
                        this.isLoading = false
                        this.formErrors = formUtil.handleErrors(error)
                    })
            },
            preRequisiteFulfill() {
                const serverErrors = this.serverChecks.filter(serverCheck => serverCheck.type === 'error')
                const folderErrors = this.folderChecks.filter(folderCheck => folderCheck.type === 'error')
                if (serverErrors.length) {
                    this.$toasted.error(this.$t('product.install.fix_server_error'), this.$toastConfig)
                    return false
                } else if (folderErrors.length) {
                    this.$toasted.error(this.$t('product.install.fix_folder_error'), this.$toastConfig)
                    return false
                }
                return true
            },
            validateDatabase() {
                return this.validate('database')
            },
            validateAdmin() {
                return this.validate('admin')
            },
            validateAccessCode() {
                return this.validate('access_code')
            },
            validate(option) {
                this.isLoading = true

                saveToStorage('KMInstallWizFormData', this.formData)

                return InstallAPI.validate(option, this.formData)
                    .then(() => {
                        this.isLoading = false
                        return true
                    })
                    .catch(error => {
                        this.isLoading = false
                        this.formErrors = formUtil.handleErrors(error)
                        return false
                    })
            },
            finishInstallation() {
                this.isProcessing = true
                this.$toasted.success(this.$t('product.install.installation_processing'), this.$toastConfig)
                InstallAPI.install(this.formData)
                    .then(response => {
                        removeFromStorage('KMInstallWizFormData')

                        this.$store.dispatch('config/SetLoaded', false)
                        this.$toasted.success(response.message, this.$toastConfig)
                        this.$router.push({ name: 'login' })
                    })
                    .catch(error => {
                        this.isProcessing = false
                        this.formErrors = formUtil.handleErrors(error)
                    })
            },
            onTabChange(prevIndex, nextIndex) {
                const that = this
                this.$nextTick(() => {
                    if(that) {
                            if(nextIndex === 1 && that.$refs[`dbDatabase`]) {
                                that.$refs[`dbDatabase`].$refs[`base-input-dbDatabase`].focus()
                            } else if(nextIndex === 2 && that.$refs[`email`]) {
                                that.$refs[`email`].$refs[`base-input-email`].focus()
                            } else if(nextIndex === 3 && that.$refs[`accessCode`]) {
                                that.$refs[`accessCode`].$refs[`base-input-accessCode`].focus()
                            }
                    }
                })
            }
        }
    }

</script>

<style lang="scss">
    @import '~@js/core/assets/scss/imports.scss';
    @import '~vue-form-wizard/dist/vue-form-wizard.min.css';

    @include media-breakpoint-up(lg) {
        .container {
            width: 80vw;
            max-width: 80vw;
            margin: 1rem;
        }
    }

    .install-box .vue-form-wizard {
        .wizard-icon-circle.square_shape {
            border-radius: 1rem;
        }
        .wizard-icon-circle .wizard-icon-container.square_shape {
            border-radius: 0.5rem;
        }

        .wizard-header {
            padding: 1.5rem 1.5rem 1rem;
        }

        .wizard-tab-content {
            padding: 1.5rem 1.5rem 1.5rem;

            .alert {
                padding: 0.5rem 0.875rem;
            }

            .server-requirements {

                .alert {
                    padding: 0.5rem 0.875rem;
                    margin-bottom: 0.5rem;
                    font-size: 0.75rem;
                }
            }
        }

        .wizard-card-footer {
            padding: 1.5rem 1.5rem 0rem;

            .wizard-btn {
                font-size: 22px;
                font-weight: 700;
                padding: 0.5rem 1rem;
            }
        }
    }

</style>
