<template>
    <base-container boxed with-loader :is-loading="isLoading" :loader-color="vars.loaderColor">
        <form @submit.prevent="submit">

            <div class="row">
                <div class="col-12 col-md-4">
                    <switch-wrapper :label="$t('config.auth.reset_password')">
                        <base-switch v-model="formData.resetPassword"></base-switch>
                    </switch-wrapper>
                </div>

                <div class="col-12 col-md-4">
                    <switch-wrapper :label="$t('config.auth.two_factor_security')">
                        <base-switch v-model="formData.twoFactorSecurity"></base-switch>
                    </switch-wrapper>
                </div>

                <div class="col-12 col-md-4">
                    <switch-wrapper :label="$t('config.auth.lock_screen')">
                        <base-switch v-model="formData.lockScreen"></base-switch>
                    </switch-wrapper>
                </div>

                <div class="col-12 col-md-4">
                    <switch-wrapper :label="$t('config.auth.login_throttle')">
                        <base-switch v-model="formData.loginThrottle"></base-switch>
                    </switch-wrapper>
                </div>

                <div class="col-12 col-md-4">
                    <switch-wrapper :label="$t('config.auth.social_login')">
                        <base-switch v-model="formData.socialLogin"></base-switch>
                    </switch-wrapper>
                </div>

                <div class="col-12 col-md-4">
                    <switch-wrapper :label="$t('config.auth.email_otp_login')">
                        <base-switch v-model="formData.emailOtpLogin"></base-switch>
                    </switch-wrapper>
                </div>

                <div class="col-12 col-md-4">
                    <switch-wrapper :label="$t('config.auth.registration')">
                        <base-switch v-model="formData.registration"></base-switch>
                    </switch-wrapper>
                </div>


                <template v-if="formData.registration">

                    <div class="col-12 col-md-4">
                        <switch-wrapper :label="$t('config.auth.email_verification')">
                            <base-switch v-model="formData.emailVerification"></base-switch>
                        </switch-wrapper>
                    </div>

                    <div class="col-12 col-md-4">
                        <switch-wrapper :label="$t('config.auth.account_approval')">
                            <base-switch v-model="formData.accountApproval"></base-switch>
                        </switch-wrapper>
                    </div>

                    <div class="col-12 col-md-4">
                        <switch-wrapper :label="$t('config.auth.registration_terms')">
                            <base-switch v-model="formData.registrationTerms"></base-switch>
                        </switch-wrapper>
                    </div>

                </template>

            </div>

            <div class="row mt-4">
                <div class="col-12 col-md-4 mb-4">
                    <base-select :options="preRequisite.guestLayoutDesigns" v-model="formData.guestLayoutDesign" :label="$t('config.auth.guest_layout_design')" :allow-empty="false" simple :disabled="isLoading" />
                </div>

                <div class="col-12 col-md-4 mb-4">
                    <base-select :options="preRequisite.guestLayoutColors" v-model="formData.guestLayoutColor" :label="$t('config.auth.guest_layout_color')" :allow-empty="false" simple :disabled="isLoading" />
                </div>

                <div class="col-12 col-md-4 mb-4">
                    <base-input :label="$t('config.auth.session_lifetime')+' ('+$t('list.general.durations.m')+')'" type="text" v-model="formData.sessionLifetime" :error.sync="formErrors.sessionLifetime" />
                </div>

                <div class="col-12 col-md-4 mb-4">
                    <base-input :label="$t('config.auth.reset_password_token_lifetime')+' ('+$t('list.general.durations.m')+')'" type="text" v-model="formData.resetPasswordTokenLifetime" :error.sync="formErrors.resetPasswordTokenLifetime" />
                </div>

                <collapse-transition>
                    <div class="col-12 col-md-4 mb-4" v-if="formData.lockScreen">
                        <base-input :label="$t('config.auth.lock_screen_timeout')+' ('+$t('list.general.durations.m')+')'" type="text" v-model="formData.lockScreenTimeout" :error.sync="formErrors.lockScreenTimeout" />
                    </div>
                </collapse-transition>

                <collapse-transition>
                        <div v-if="formData.loginThrottle" class="col-12 col-md-4 mb-4" key="login_throttle_attempt">
                            <base-input :label="$t('config.auth.login_throttle_attempt')" type="text" v-model="formData.loginThrottleAttempt" :error.sync="formErrors.loginThrottleAttempt" />
                        </div>
                </collapse-transition>

                <collapse-transition>
                        <div v-if="formData.loginThrottle" class="col-12 col-md-4 mb-4" key="login_throttle_timeout">
                            <base-input :label="$t('config.auth.login_throttle_timeout')" type="text" v-model="formData.loginThrottleTimeout" :error.sync="formErrors.loginThrottleTimeout" />
                        </div>
                </collapse-transition>

                <collapse-transition>
                    <table v-if="formData.socialLogin" class="table table-striped">
                        <tr v-for="method in preRequisite.socialLoginProviders" :key="method.uuid">
                            <td class="va-bottom">
                                <switch-wrapper :label="`${$t('config.auth.login_with')} ${method.name}`">
                                    <base-switch v-model="formData[method.uuid]"></base-switch>
                                </switch-wrapper>
                            </td>
                            <td>
                                <base-input :disabled="!formData[method.uuid]" :label="$t('config.auth.client_id')" type="text" v-model="formData[`${method.uuid}ClientId`]" :error.sync="formErrors[`${method.uuid}ClientId`]" />
                            </td>
                            <td>
                                <base-input :disabled="!formData[method.uuid]" :label="$t('config.auth.client_secret')" type="text" v-model="formData[`${method.uuid}ClientSecret`]" :error.sync="formErrors[`${method.uuid}ClientSecret`]" />
                            </td>
                        </tr>
                    </table>
                </collapse-transition>

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
    import { CollapseTransition } from 'vue2-transitions'

    export default {
        extends: form,
        components: {
            CollapseTransition
        },
        data() {
            return {
                formData: {
                    sessionLifetime: '',
                    resetPasswordTokenLifetime: '',
                    resetPassword: false,
                    twoFactorSecurity: false,
                    registration: false,
                    lockScreen: false,
                    lockScreenTimeout: '',
                    loginThrottle: false,
                    loginThrottleAttempt: '',
                    loginThrottleTimeout: '',
                    emailVerification: false,
                    accountApproval: false,
                    emailOtpLogin: false,
                    smsOtpLogin: false,
                    socialLogin: false,
                    google: false,
                    facebook: false,
                    twitter: false,
                    github: false,
                    googleClientId: '',
                    googleClientSecret: '',
                    facebookClientId: '',
                    facebookClientSecret: '',
                    twitterClientId: '',
                    twitterClientSecret: '',
                    githubClientId: '',
                    githubClientSecret: '',
                    guestLayoutDesign: '',
                    guestLayoutColor: '',
                    type: 'auth'
                },
                preRequisite: {
                    socialLoginProviders: [],
                    guestLayoutDesigns: [
                        {
                            uuid: 'default',
                            name: 'Default'
                        },
                        {
                            uuid: 'boxed-left',
                            name: 'Boxed Left '
                        },
                        {
                            uuid: 'boxed-right',
                            name: 'Boxed Right '
                        },
                    ],
                    guestLayoutColors: [
                        {
                            uuid: 'default',
                            name: 'Default'
                        },
                        {
                            uuid: 'light',
                            name: 'Light'
                        },
                        {
                            uuid: 'dark',
                            name: 'Dark'
                        },
                    ]
                },
                systemVariables: {
                },
            }
        },
        mounted() {
            this.getInitialData()
        },
    }

</script>
