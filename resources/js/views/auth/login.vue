<template>
    <div class="guest-page">
        <box>
            <animated-loader :is-loading="isLoading" :loader-color="vars.loaderColor" />

            <guest-header>
                <h5>{{ $t('auth.login.page_title') }}</h5>
            </guest-header>

            <section role="main">

                <form @submit.prevent="submit">
                    <base-input auto-focus class="mb-3" :label="$t('auth.login.props.email_username')" type="text" v-model="formData.email" addon-left-icon="fas fa-envelope" :error.sync="formErrors.email">
                    </base-input>

                    <base-input class="mb-3" :label="$t('auth.login.props.password')" type="password" v-model="formData.password" addon-left-icon="fas fa-key" :error.sync="formErrors.password">
                    </base-input>

                    <div class="text-center mt-4">
                        <base-button type="submit" design="primary" block class="my-4 text-lg">{{ $t('auth.login.login') }}</base-button>
                    </div>


                    <template v-if="configs && configs.auth">

                        <template v-if="configs.auth.mobileOtpLogin || configs.auth.emailOtpLogin || configs.auth.socialLogin || configs.auth.facebook || configs.auth.twitter || configs.auth.github || configs.auth.google || showLocaleSwitcher">

                            <div class="row mt-4">
                                <div class="col-3 text-left locale-switcher" v-if="showLocaleSwitcher">
                                    <base-dropdown tag="div" direction="up" menu-classes="show-dropdown-up">
                                        <base-button slot="title" type="button" design="light" block class="text-uppercase" data-toggle="dropdown" role="button" size="sm">
                                            <span class="nav-link-inner--text">{{ selectedLocale }}</span>
                                            <i class="fas fa-chevron-up m-l-5"></i>
                                        </base-button>

                                        <template>
                                            <button type="button" class="dropdown-item" v-for="lo in configs.system.locales" :key="lo.uuid" @click="switchLocale(lo)">{{ lo.name }} ({{ lo.locale }})</button>
                                        </template>
                                    </base-dropdown>
                                </div>

                                <div :class="[showLocaleSwitcher ? 'col-9' : 'col-12', 'text-right login-with-icons']">
                                    <router-link v-if="configs.auth.emailOtpLogin" :to="withQuery({ name: 'login-email-otp' })" class="btn btn-sm btn-gmail" v-b-tooltip.hover :title="$t('auth.login.login_using_email_otp')"><i class="fas fa-envelope-open-text"></i></router-link>

                                    <template v-if="configs.auth.socialLogin && configs.auth.socialLoginProviders && configs.auth.socialLoginProviders.length">
                                        <a v-for="provider in configs.auth.socialLoginProviders" :key="provider" :href="`/auth/login/${provider}`" :class="`btn btn-sm ${btns[provider]}`" v-b-tooltip.hover :title="$t('auth.login.login_with', { attribute: provider})"><i :class="icons[provider]"></i></a>
                                    </template>
                                </div>

                            </div>

                            <div class="text-center">
                                <hr class="my-4">
                            </div>
                        </template>



                        <div class="row mt-4" v-if="configs.auth.resetPassword || configs.auth.registration">
                            <div :class="['col-12 text-center', {'col-md-6 text-md-left': configs.auth.registration}]" v-if="configs.auth.resetPassword">
                                <router-link :to="withQuery({ name: 'password' })" class="text-primary m-l-5"> <span class="font-weight-bold">{{ $t('auth.password.forgot_password') }}</span> </router-link>
                            </div>
                            <div :class="['col-12 text-center', {'col-md-6 text-md-right': configs.auth.resetPassword}]" v-if="configs.auth.registration">
                                <router-link :to="withQuery({ name: 'register' })" class="text-primary m-l-5"> <span class="font-weight-bold">{{ $t('auth.register.register_here') }}</span> </router-link>
                            </div>
                        </div>

                    </template>


                    <div class="text-center my-4 pt-4" v-if="configs && (!configs.system || !configs.system.mode)">
                        <base-dropdown tag="div" direction="up" menu-classes="show-dropdown-up" :position="configs.system && configs.system.direction === 'ltr' ? 'right' : 'left'">
                            <base-button slot="title" type="button" design="success" block class="text-uppercase" data-toggle="dropdown" role="button">
                                <span class="nav-link-inner--text">Auto Login As</span>
                                <i class="fas fa-chevron-up m-l-5"></i>
                            </base-button>

                            <template>
                                <button type="button" class="dropdown-item" @click="loginAs('admin', 'admin')">Admin</button>
                                <button type="button" class="dropdown-item" @click="loginAs('user', 'user')">User</button>
                                <button type="button" class="dropdown-item" @click="loginAs('user1', 'user')">User 1</button>
                                <button type="button" class="dropdown-item" @click="loginAs('user2', 'user')">User 2</button>
                                <button type="button" class="dropdown-item" @click="loginAs('user3', 'user')">User 3</button>
                                <button type="button" class="dropdown-item" @click="loginAs('user4', 'user')">User 4</button>
                                <button type="button" class="dropdown-item" @click="loginAs('user5', 'user')">User 5</button>
                            </template>
                        </base-dropdown>
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
                    password: ''
                },
            }
        },
        methods: {
            submit() {
                this.isLoading = true
                let routeQuery = this.$route.query

                this.$gaEvent('engagement', 'login', 'Normal')

                this.Login(this.formData)
                    .then(response => {
                        this.$toasted.success(response.message, this.$toastConfig)
                        
                        this.$gaEvent('activity', 'loggedin', 'Normal')

                        if (this.configs.auth.twoFactorSecurity && this.twoFactorSet) {
                            this.$router.push({ name: 'authSecurity', query: routeQuery });
                            this.isLoading = false
                        } else {
                            let routeTo = response.reload ? { name: 'appDashboard', query: { reload: 1 } } : { name: 'appDashboard' }

                            if (routeQuery && routeQuery.ref && this.$router.resolve(routeQuery.ref)) {
                                routeTo = this.$router.resolve(routeQuery.ref)
                                    .route
                            }

                            if (this.hasRole('admin') && this.configs.system && this.configs.system.setupWizard) {
                                routeTo = { name: 'setup' }
                            }

                            routeTo = {
                                ...routeTo,
                                query: {
                                    locale: undefined
                                }
                            }

                            this.ResetTwoFactorSet()
                                .then(() => {
                                    this.$router.push(routeTo)
                                })
                                .catch((error) => {
                                    this.isLoading = false
                                    this.formErrors = formUtil.handleErrors(error)
                                })
                        }
                    })
                    .catch(error => {
                        this.isLoading = false
                        this.formErrors = formUtil.handleErrors(error)
                    })
            },

            loginAs(role, domain) {
                this.formData.email = role + '@' + domain + '.com'
                this.formData.password = 'password'
                this.submit()
            },
        },
        mounted() {
            this.SetCSRF()

            let cause = this.$route.query && this.$route.query.cause ? this.$route.query.cause : null
            if (cause) {
                if(cause === 'csrf_token_expired') {
                    this.$toasted.error($t('general.csrf_token_expired'), this.$toastConfig.error)
                    this.$router.push(this.withQuery({ name: this.$route.name, replace: true }))
                }
            }
        }
    }

</script>
<style lang="scss" scoped>
    .login-with-icons {
        .btn {
            width: 30px;
            height: 30px;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            font-size: 0.9rem;
        }
    }

</style>
