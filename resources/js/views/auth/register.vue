<template>
    <div class="guest-page">
        <box width="xxl">
            <animated-loader :is-loading="isLoading" :loader-color="vars.loaderColor" />

            <template v-if="!registrationPending">
                <guest-header>
                    <h5>{{ $t('auth.register.page_title') }}</h5>
                </guest-header>

                <section role="main">

                    <form @submit.prevent="submit">
                        <div class="row">
                            <div class="col-md-6">
                                <base-input auto-focus class="mb-3" :label="$t('auth.register.props.name')" type="text" name="name" v-model="formData.name" addon-left-icon="far fa-id-badge" :error.sync="formErrors.name"></base-input>
                            </div>
                            <div class="col-md-6">
                                <base-input class="mb-3" :label="$t('auth.register.props.email')" type="text" name="email" v-model="formData.email" addon-left-icon="fas fa-envelope" :error.sync="formErrors.email"></base-input>
                            </div>
                            <div class="col-md-6">
                                <base-input class="mb-3" :label="$t('auth.register.props.username')" type="text" name="username" v-model="formData.username" addon-left-icon="fas fa-user" :error.sync="formErrors.username"></base-input>
                            </div>
                            <div class="col-md-6">
                                <base-select class="mb-3" :label="$t('auth.register.props.language')" :options="preRequisite.languages" v-model="selectLanguage" :error.sync="formErrors.language" :allow-empty="false" preselect-first simple track-by="uuid" show-by="label" required />
                            </div>
                            <div class="col-md-6">
                                <base-input class="mb-3" :label="$t('auth.register.props.password')" type="password" name="password" v-model="formData.password" addon-left-icon="fas fa-key" :error.sync="formErrors.password"></base-input>
                            </div>
                            <div class="col-md-6">
                                <base-input class="mb-3" :label="$t('auth.register.props.confirm_password')" type="password" name="passwordConfirmation" v-model="formData.passwordConfirmation" addon-left-icon="fas fa-key" :error.sync="formErrors.passwordConfirmation"></base-input>
                            </div>
                        </div>

                        <div class="pt-4 pb-2 text-muted text-center" v-if="configs && configs.auth && configs.auth.registrationTerms">
                            {{ $t('auth.register.registration_terms_label') }} <a href="/pages/terms" target="_blank">{{ $t('auth.register.registration_terms_label_tos') }}</a> {{ $t('auth.register.registration_terms_label_and') }} <a href="/pages/privacy" target="_blank">{{ $t('auth.register.registration_terms_label_privacy') }}</a>.
                        </div>

                        <div class="text-center mt-4">
                            <base-button type="submit" design="primary" block class="my-4 text-lg">{{ $t('auth.register.register') }}</base-button>
                        </div>


                        <div class="row mt-4">
                            <div class="col-md-12 text-center">
                                <router-link :to="withQuery({ name: 'login' })" class="text-primary m-l-5"> <span class="font-weight-bold">{{ $t('auth.register.already_have_account') }}</span> </router-link>
                            </div>
                        </div>

                        <div class="row mt-4" v-if="showLocaleSwitcher">
                            <div class="col-md-12 text-center">
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
                        </div>

                    </form>

                </section>
            </template>

            <template v-else>
                <guest-header>
                    <h4 class="text-primary">{{ $t('auth.register.completed') }}</h4>
                </guest-header>

                <div class="text-muted">
                    <h6 class="text-muted text-center">{{ registrationPendingMessage }}</h6>
                </div>

                <div class="row mt-4">
                    <div class="col-md-12 text-center">
                        <router-link :to="withQuery({ name: 'login' })" class="text-primary m-l-5"> <span class="font-weight-bold">{{ $t('auth.login.page_title') }}</span> </router-link>
                    </div>
                </div>
            </template>

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
                    name: '',
                    email: '',
                    username: '',
                    language: '',
                    password: '',
                    passwordConfirmation: '',
                },
                preRequisite: {
                    languages: [
                        { uuid: "japanese",     label: "Japanese" }, 
                        { uuid: "english",      label: "English" }, 
                        { uuid: "vietnamese",   label: "Vietnamese" }, 
                        { uuid: "chinese",      label: "Chinese" }
                    ],
                },
                selectedLanguage: "",
                registrationPending: false,
                registrationPendingMessage: $t('auth.register.pending_activation_message')
            }
        },
        methods: {
            submit() {
                this.isLoading = true
                let routeQuery = this.$route.query

                this.$gaEvent('engagement', 'register', 'Normal')

                this.Register(this.formData)
                    .then(response => {
                        this.$toasted.success(response.message, this.$toastConfig)

                        if (response.registrationStatus === 'activated') {
                            this.$router.push(this.withQuery({ name: 'login' }));
                        } else {
                            this.registrationPending = true
                            this.registrationPendingMessage = response.message
                        }
                        this.isLoading = false
                    })
                    .catch(error => {
                        this.isLoading = false
                        this.formErrors = formUtil.handleErrors(error)
                    })
            },
        },
        computed: {
            selectLanguage: {
                get() {
                    if (this.language) {
                        return this.formData.language;
                    } else {
                        return this.selectedLanguage;
                    }
                },
                set(value) {
                    if (value === "japanese") {
                        this.formData.language = "Japanese";
                    } else if (value === "english") {
                        this.formData.language = "English";
                    } else if (value === "vietnamese") {
                        this.formData.language = "Vietnamese";
                    } else if (value === "chinese") {
                        this.formData.language = "Chinese";
                    }
                    this.selectedLanguage = value;
                }
            }
        },
        created() {
            if (this.$route.query.hasOwnProperty('registered')) {
                this.registrationPending = this.$route.query.hasOwnProperty('registered') ? true : false
            }
        }
    }

</script>
<style lang="scss" scoped>


</style>
