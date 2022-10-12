<template>
    <base-container boxed with-loader :is-loading="isLoading" :loader-color="vars.loaderColor">
        <form @submit.prevent="submit">

            <div class="row">

                <div class="col-12 col-md-4 mb-4">
                    <base-select :options="preRequisite.mailDrivers" v-model="formData.driver" :label="$t('config.mail.driver')" :allow-empty="false" simple :disabled="isLoading" required />
                </div>

                <div class="col-12 col-md-4 mb-4">
                    <base-input :label="$t('config.mail.from_name')" type="text" v-model="formData.fromName" :error.sync="formErrors.fromName" />
                </div>

                <div class="col-12 col-md-4 mb-4">
                    <base-input :label="$t('config.mail.from_address')" type="text" v-model="formData.fromAddress" :error.sync="formErrors.fromAddress" />
                </div>

            </div>

            <collapse-transition>
                <div class="row mt-5" v-if="formData.driver === 'mailgun'">

                    <div class="col-12 col-md-6 mb-4">
                        <base-input :label="$t('config.mail.mailgun_domain')" type="text" v-model="formData.mailgunDomain" :error.sync="formErrors.mailgunDomain" />
                    </div>

                    <div class="col-12 col-md-6 mb-4">
                        <base-input :label="$t('config.mail.mailgun_secret')" type="text" v-model="formData.mailgunSecret" :error.sync="formErrors.mailgunSecret" />
                    </div>

                    <div class="col-12 col-md-6 mb-4">
                        <base-input :label="$t('config.mail.mailgun_endpoint')" type="text" v-model="formData.mailgunEndpoint" :error.sync="formErrors.mailgunEndpoint" />
                    </div>

                </div>
                <div class="row mt-5" v-if="formData.driver === 'smtp'">

                    <div class="col-12 col-md-4 mb-4">
                        <base-input :label="$t('config.mail.smtp_host')" type="text" v-model="formData.smtpHost" :error.sync="formErrors.smtpHost" />
                    </div>

                    <div class="col-12 col-md-4 mb-4">
                        <base-input :label="$t('config.mail.smtp_port')" type="text" v-model="formData.smtpPort" :error.sync="formErrors.smtpPort" />
                    </div>

                    <div class="col-12 col-md-4 mb-4">
                        <base-select :options="preRequisite.mailEncryptions" v-model="formData.smtpEncryption" :label="$t('config.mail.smtp_encryption')" :allow-empty="false" simple :disabled="isLoading" required />
                    </div>

                    <div class="col-12 col-md-6 mb-4">
                        <base-input :label="$t('config.mail.smtp_username')" type="text" v-model="formData.smtpUsername" :error.sync="formErrors.smtpUsername" />
                    </div>

                    <div class="col-12 col-md-6 mb-4">
                        <base-input :label="$t('config.mail.smtp_password')" type="text" v-model="formData.smtpPassword" :error.sync="formErrors.smtpPassword" />
                    </div>

                </div>
            </collapse-transition>


            <div class="text-right mt-5">
                <base-button type="button" design="light" @click="reset">{{ $t('general.reset') }}</base-button>
                <base-button type="submit" design="primary">{{ $t('general.save') }}</base-button>
            </div>

        </form>
    </base-container>
</template>

<script>
    import form from '@mixins/config-form'
    import { CollapseTransition } from 'vue2-transitions'

    export default {
        extends: form,
        components: {
            CollapseTransition
        },
        data() {
            return {
                formData: {
                    driver : '',
                    fromName: '',
                    fromAddress: '',
                    smtpHost: '',
                    smtpPort: '',
                    smtpUsername: '',
                    smtpPassword: '',
                    smtpEncryption: '',
                    mailgunDomain: '',
                    mailgunSecret: '',
                    mailgunEndpoint: '',
                    type: 'mail'
                },
                preRequisite: {
                    mailDrivers: [],
                    mailEncryptions: [],
                },
            }
        },
        computed: {
            selectedDriver: {
                get() {
                    return this.findActualValue(this.formData.driver, this.preRequisite.mailDrivers)
                },
                set(v) {
                    this.formData.driver = v.name
                }
            },
            selectedMailgunEncryption: {
                get() {
                    return this.findActualValue(this.formData.mailgunEncryption, this.preRequisite.mailEncryptions)
                },
                set(v) {
                    this.formData.mailgunEncryption = v.name
                }
            },
            selectedSmtpEncryption: {
                get() {
                    return this.findActualValue(this.formData.smtpEncryption, this.preRequisite.mailEncryptions)
                },
                set(v) {
                    this.formData.smtpEncryption = v.name
                }
            },
        },
        mounted() {
            this.getInitialData()
        },
    }

</script>
