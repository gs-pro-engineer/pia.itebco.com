<template>
    <div class="guest-page">
        <box>
            <animated-loader :is-loading="isLoading" :loader-color="vars.loaderColor" />

            <guest-header>
                <h5>{{ $t('auth.security.page_title') }}</h5>
            </guest-header>

            <section role="main">

                <form @submit.prevent="submit">
                    <base-input auto-focus class="mb-3" :label="$t('auth.security.props.two_factor_code')" type="text" name="twoFactorCode" v-model="formData.twoFactorCode" addon-left-icon="fas fa-key" :error.sync="formErrors.twoFactorCode">
                    </base-input>

                    <div class="text-center">
                        <base-button type="submit" design="primary" block class="my-4 text-lg">{{ $t('general.proceed') }}</base-button>
                    </div>

                    <div class="form-group m-b-0">
                        <div class="col-sm-12 text-center">
                            <h6 class="text-uppercase">{{ $t('general.or') }}</h6>
                            <p>
                                <base-button type="button" @click="logout" design="link"><i class="fas fa-power-off"></i><span class="font-weight-bold">{{ $t('auth.logout') }}</span></base-button>
                            </p>
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
                    twoFactorCode: '',
                },
            }
        },
        methods: {
            submit() {
                this.isLoading = true
                let routeQuery = this.$route.query

                this.CheckTwoFactorCode({
                        twoFactorCode: this.formData.twoFactorCode
                    })
                    .then(response => {
                        let routeTo = response.reload ? { name: 'appDashboard', query: { reload: 1 } } : { name: 'appDashboard' }

                        if(routeQuery && routeQuery.ref && this.$router.resolve(routeQuery.ref)) {
                            routeTo = this.$router.resolve(routeQuery.ref).route
                        }

                        this.ResetTwoFactorSet()
                            .then(() => {
                                this.$router.push(routeTo)
                            })
                            .catch((error) => {
                                this.isLoading = false
                                this.formErrors = formUtil.handleErrors(error)
                            })
                    })
                    .catch(error => {
                        this.isLoading = false
                        this.formErrors = formUtil.handleErrors(error)
                    })
            },

            logout() {
                this.isLoading = true
                this.Logout()
                    .then(() => {
                        this.$router.push({ name: 'login' })
                    })
            },
        },
    }

</script>
<style lang="scss" scoped>


</style>
