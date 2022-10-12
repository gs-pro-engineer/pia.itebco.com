<template>
    <div class="guest-page">
        <box>
            <animated-loader :is-loading="isLoading" :loader-color="vars.loaderColor" />

            <guest-header>
                <h5>{{ $t('auth.login.login_using_sms_otp') }}</h5>
            </guest-header>

            <section role="main">

                <form @submit.prevent="submit">
                    <base-input :auto-focus="!otpRequested" class="mb-3" :label="$t('auth.login.props.mobile')" type="text" v-model="formData.mobile" addon-left-icon="fas fa-mobile" :error.sync="formErrors.mobile" :disabled="otpRequested">
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
                    mobile: '',
                    otp: '',
                },
                otpRequested: false,
            }
        },
        methods: {
            submit() {
                this.isLoading = true
                let routeQuery = this.$route.query

                const formData = this.otpRequested ? { ...this.formData } : { mobile: this.formData.mobile }
                this.LoginUsingOtp(formData)
                    .then(response => {
                        this.$toasted.success(response.message, this.$toastConfig)
                        
                        if(this.otpRequested) {
                            this.$gaEvent('activity', 'loggedin', 'SMSOTP')

                            let routeTo = response.reload ? { name: 'appDashboard', query: { reload: 1 } } : { name: 'appDashboard' }

                            if (routeQuery && routeQuery.ref && this.$router.resolve(routeQuery.ref)) {
                                routeTo = this.$router.resolve(routeQuery.ref)
                                    .route
                            }

                            if (this.hasRole('admin') && this.configs.system && this.configs.system.setupWizard) {
                                routeTo = { name: 'setup' }
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
                            this.$gaEvent('activity', 'loginOtpRequested', 'SMSOTP')
                            
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
            this.SetCSRF()
        }
    }

</script>
<style lang="scss" scoped>


</style>
