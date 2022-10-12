<template>
    <div class="inner-sidebar-layout">
        <div class="inner-sidebar">
            <base-container boxed with-loader :is-loading="isLoading" :loader-color="vars.loaderColor" class="p-0">
                <sub-navigation-menu :navigation="navigation" :base-route="baseRoute" :menuLetterIcon="uiConfigs.navMenuLetterIcon" />
            </base-container>
        </div>

        <div class="inner-content-wrapper">
            <transition appear name="fade-transform" mode="out-in">
                <router-view />
            </transition>
        </div>
    </div>
</template>

<script>
    import SubNavigationMenu from '@components/SubNavigationMenu'
    import { mapState, mapGetters, mapActions } from 'vuex'

    export default {
        components: {
            SubNavigationMenu,
        },
        data() {
            return {
                isLoading: true,
                navigation: [],
            }
        },
        computed: {
            ...mapGetters('config', [
                'vars',
                'uiConfigs',
            ]),
            baseRoute() {
                const configRouteMatch = this.$router.match({ name: 'appMeetingConfig' })
                return configRouteMatch ? (configRouteMatch.redirectedFrom ? configRouteMatch.redirectedFrom : configRouteMatch.path) : ''
            }
        },
        methods: {
            ...mapActions('navigation', [
                'GetNavigationForRoute'
            ]),
        },
        mounted() {
            this.GetNavigationForRoute('appMeetingConfig').then(routes => {
                this.navigation = routes
                this.isLoading = false
            })
        }
    }

</script>

<style lang="scss" scoped>
</style>
