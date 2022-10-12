<template>
    <div class="inner-sidebar-layout">
        <div class="inner-sidebar">
            <base-container boxed class="p-0">
                <sub-navigation-menu :navigation="navigation" :base-route="baseRoute" :menuLetterIcon="uiConfigs.navMenuLetterIcon" />
            </base-container>
        </div>

        <div class="inner-content-wrapper">
            <transition-page>
                <router-view />
            </transition-page>
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
        computed: {
            ...mapGetters('config', [
                'uiConfigs',
            ]),
            ...mapGetters('navigation', [
                'uiConfigNavigations'
            ]),
            navigation() {
                return this.uiConfigNavigations
            },
            baseRoute() {
                const configRouteMatch = this.$router.match({ name: 'appUiConfig' })
                return configRouteMatch ? (configRouteMatch.redirectedFrom ? configRouteMatch.redirectedFrom : configRouteMatch.path) : ''
            }
        },
    }

</script>

<style lang="scss" scoped>
</style>
