<template>
    <div class="guest-page">
        <box>
            <animated-loader :is-loading="isLoading" :loader-color="vars.loaderColor" />

            <guest-header>
                <h5>{{ $t('auth.login.login_using_email_otp') }}</h5>
            </guest-header>

            <section role="main">

                <form @submit.prevent="submit">
                    <base-input :auto-focus="!otpRequested" class="mb-3" :label="$t('auth.login.props.email')" type="text" v-model="formData.email" addon-left-icon="fas fa-envelope" :error.sync="formErrors.email" :disabled="otpRequested">
                    </base-input>

                    <base-input v-if="otpRequested" :auto-focus="otpRequested" class="mb-3" :label="$t('auth.login.props.otp')" type="text" v-model="formData.otp" addon-left-icon="fas fa-key" :error.sync="formErrors.otp">
                    </base-input>

                    <div class="text-center">
                        <base-button type="submit" design="primary" block class="my-4 text-lg">
                            <span v-if="!otpRequested">{{ $t('auth.login.request_otp') }}</span>
                            <span v-else>{{ $t('auth.login.login') }}</span>
                        </base-button>
                    </div>

                    <div class="form-group m-b-0">
                        <div class="col-sm-12 text-center">
                            <template v-if="configs.meeting && configs.meeting.enablePam">
                                <p v-if="$route.query && ($route.query.identifier || $route.query.uuid) && $route.query.pam"><router-link :to="withQuery({ name: 'liveMeetingForGuest', params: { uuid: $route.query.uuid }, query: { identifier: $route.query.identifier } }, false, { removeRef: true })" class="text-primary m-l-5">
                                    <span class="font-weight-bold">{{ $t('meeting.join_meeting_as_guest') }}</span>
                                </router-link></p>
                                <!-- <p v-else><router-link :to="withQuery({ name: 'joinMeetingAsGuest' }, false, { removeRef: true })" class="text-primary m-l-5">
                                    <span class="font-weight-bold">{{ $t('meeting.join_meeting_as_guest') }}</span>
                                </router-link></p> -->
                            </template>
                            <p><router-link :to="withQuery({ name: 'login' })" class="text-primary m-l-5">
                                <span class="font-weight-bold">{{ $t('auth.login.login_using_password') }}</span>
                            </router-link></p>
                        </div>
                    </div>

                </form>

            </section>

        </box>

        <guest-footer v-if="configs.system" :footer-credit="configs.system.footerCredit" :version="configs.system.version" />

    </div>
</template>

<script>
    import form from '@mixins/auth-form'

    export default {
        extends: form,
        data() {
            return {
                formData: {
                    email: '',
                    otp: '',
                    ref: null,
                },
                otpRequested: false,
            }
        },
        methods: {
            submit() {
                this.isLoading = true
                let routeQuery = this.$route.query

                this.$gaEvent('engagement', 'login', 'EmailOTP')

                const formData = this.otpRequested ? { ...this.formData } : { email: this.formData.email, ref: this.formData.ref }
                this.LoginUsingOtp(formData)
                    .then(response => {
                        this.$toasted.success(response.message, this.$toastConfig)

                        if(this.otpRequested) {
                            this.$gaEvent('activity', 'loggedin', 'EmailOTP')

                            let routeTo = response.reload ? { name: 'appDashboard', query: { reload: 1 } } : { name: 'appDashboard' }

                            if (routeQuery && routeQuery.ref && this.$router.resolve(routeQuery.ref)) {
                                routeTo = this.$router.resolve(routeQuery.ref)
                                    .route
                            }

                            if (this.hasRole('admin') && this.configs.system && this.configs.system.setupWizard) {
                                routeTo = this.withQuery({ name: 'setup' })
                            }

                            this.ResetTwoFactorSet()
                                .then(() => {
                                    this.$router.push(routeTo)
                                })
                                .catch((error) => {
                                    this.isLoading = false
                                    this.formErrors = formUtil.handleErrors(error)
                                })
                        } else {
                            this.$gaEvent('activity', 'loginOtpRequested', 'EmailOTP')

                            this.otpRequested = true
                            this.isLoading = false
                        }
                    })
                    .catch(error => {
                        this.isLoading = false
                        this.formErrors = formUtil.handleErrors(error)
                    })
            },
        },
        mounted() {
            let routeQuery = this.$route.query
            if (routeQuery && routeQuery.ref) {
                this.formData.ref = routeQuery.ref
            }
            this.SetCSRF()
        }
    }

</script>