<template>
    <div class="guest-page">
        <box>
            <animated-loader :is-loading="isLoading" :loader-color="vars.loaderColor" />

            <guest-header>
                <div v-if="profile && profile.name" class="d-flex flex-column justify-content-start align-items-center">
                    <avatar :username="profile.name ? profile.name : null" :src="profile.userThumb ? profile.userThumb : (profile.name ? null : ProfileImageMale)" :background-color="vars.colors.primary" :color="vars.colors.white" :size="100" has-shadow></avatar>

                    <h4 class="username mt-4">
                        {{ $t('general.greeting') + ', ' + profile.name }}
                    </h4>
                </div>
            </guest-header>

            <section role="main">

                <form @submit.prevent="submit">
                    <base-input auto-focus class="mb-3" :label="$t('auth.lock.props.password')" type="password" name="password" v-model="formData.password" addon-left-icon="fas fa-key" :error.sync="formErrors.password">
                    </base-input>

                    <div class="text-center">
                        <base-button type="submit" design="primary" block class="my-4 text-lg">{{ $t('general.unlock') }}</base-button>
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
    import Box from './partials/box'
    import GuestHeader from '@views/layouts/partials/guest-header'
    import GuestFooter from '@views/layouts/partials/guest-footer'
    import { mapGetters, mapActions } from 'vuex'
    import ProfileImageMale from '@images/avatars/default-profile-image-male.png'
    import Avatar from 'vue-avatar'

    export default {
        components: {
            Box,
            GuestHeader,
            GuestFooter,
            Avatar,
        },
        data() {
            return {
                formData: {
                    password: '',
                },
                ProfileImageMale: ProfileImageMale,
                formErrors: {},
                isLoading: false
            }
        },
        computed: {
            ...mapGetters('config', [
                'configs',
                'uiConfigs',
                'vars',
            ]),
            ...mapGetters('user', [
                'profile',
            ]),
        },
        methods: {
            ...mapActions('user', [
                'Logout',
                'Unlock',
                'SetLock',
                'SetLastActivity'
            ]),
            submit() {
                this.isLoading = true
                let routeQuery = this.$route.query

                this.$gaEvent('engagement', 'unlock')

                this.Unlock(this.formData)
                    .then(response => {
                        this.SetLastActivity()
                        this.SetLock(false)

                        this.$gaEvent('activity', 'unlocked')

                        let routeTo = { name: 'appDashboard' }

                        if(routeQuery && routeQuery.ref && this.$router.resolve(routeQuery.ref)) {
                            routeTo = this.$router.resolve(routeQuery.ref).route
                        }
                        this.$router.push(routeTo)
                    })
                    .catch(error => {
                        this.isLoading = false
                        // console.error(error)
                        this.formErrors = formUtil.handleErrors(error)
                    })
            },

            logout() {
                this.isLoading = true
                let routeQuery = this.$route.query

                this.$ga.event('engagement', 'logout', 'LockScreen')

                this.Logout()
                    .then(() => {
                        this.$ga.event('activity', 'loggedout')
                        let routeTo = { name: 'login' }

                        if(routeQuery && routeQuery.ref && this.$router.resolve(routeQuery.ref)) {
                            routeTo = this.$router.resolve(routeQuery.ref).route
                        }
                        this.$router.push(routeTo)
                    })
            },
        },
    }

</script>
