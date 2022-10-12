import { mapGetters, mapActions } from 'vuex'

import Box from '@js/views/auth/partials/box'
import GuestHeader from '@views/layouts/partials/guest-header'
import GuestFooter from '@views/layouts/partials/guest-footer'

export default {
    components: {
        Box,
        GuestHeader,
        GuestFooter,
    },
    data() {
        return {
            formData: {},
            formErrors: {},
            initialFormData: null,
            initianLength: 0,
            emptyFormData: null,
            preRequisite: {},
            isLoading: true,
            icons: {
                'facebook': 'fab fa-facebook-f',
                'twitter': 'fab fa-twitter',
                'github': 'fab fa-github',
                'google': 'fab fa-google',
            },
            btns: {
                'facebook': 'btn-facebook',
                'twitter': 'btn-twitter',
                'github': 'btn-github',
                'google': 'btn-google-plus',
            },
        }
    },
    computed: {
        ...mapGetters('config', [
            'configs',
            'vars',
        ]),
        ...mapGetters('user', [
            'twoFactorSet',
            'hasRole',
        ]),
        selectedLocale() {
            const locale = getQueryStringByParam('locale')
            return locale ? locale : this.configs.system.locale
        },
        showLocaleSwitcher() {
            return this.configs.system.locales && this.configs.system.locales.length > 1
        }
    },
    methods: {
        ...mapActions('config', [
            'GetConfig',
        ]),
        ...mapActions('user', [
            'Register',
            'SetCSRF',
            'Logout',
            'Login',
            'LoginUsingOtp',
            'ResetTwoFactorSet',
            'RequestReset',
            'ValidateResetPassword',
            'ResetPassword',
            'CheckTwoFactorCode',
        ]),

        withQuery(toRoute, aTag = false, options = {}) {
            let routeQuery = this.$route.query
            let href = ''

            if(!toRoute.hasOwnProperty('query')) {
                toRoute['query'] = {}
            }


            toRoute.query.locale = routeQuery && routeQuery.locale ? routeQuery.locale : undefined

            if(routeQuery && routeQuery.locale) {
                href = `${href}?locale=${routeQuery.locale}`
            }

            if (routeQuery && routeQuery.ref && !(options && options.hasOwnProperty('removeRef') && options.removeRef)) {
                toRoute.query.ref = routeQuery.ref

                if(href) {
                    href = `?${href}&ref=${routeQuery.ref}`
                } else {
                    href = `?${href}&ref=${routeQuery.ref}`
                }

                if(href) {
                    href = `?${href}&ref=${routeQuery.ref}`
                } else {
                    href = `?${href}&ref=${routeQuery.ref}`
                }
            }

            href = `${toRoute.name}${href}`

            if(aTag) {
                return href
            }

            return toRoute
        },

        switchLocale(locale) {
            let url = window.location.href
            window.location.href = updateQueryStringParam(url, 'locale', locale.locale)
        },
    },
    mounted() {
        this.initialFormData = _.cloneDeep(this.formData)
        this.isLoading = false
    },
    beforeDestroy () {
        delete this.formData
        delete this.formErrors
        delete this.preRequisite
    },
}
