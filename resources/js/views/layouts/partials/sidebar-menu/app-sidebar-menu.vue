<template>
    <div class="navigation-menus">
        <template v-for="(navGroup, i) in permittedNavigations">

            <div v-for="(nav, i) in navGroup.children" :key="nav.name||nav.path" class="section">

                <div v-if="!nav.meta.isHiddenNav" class="section-title">{{ $t(nav.meta.title) }}</div>

                <ul :class="['navigation-menu list-unstyled', thumbOnRight ? 'thumb-align-right' : '']">
                    <template v-for="(navItem, j) in nav.children" v-if="!(navItem.meta.isHiddenNav && navItem.meta.hideChildren)">
                        <menu-item :key="navItem.name" :menu-id="`collapse-${navItem.name}-${j}`" :item="navItem" :base-path="resolvePath(navGroup.path, nav.path)" :thumb-on-right="thumbOnRight" :menu-letter-icon="uiConfigs.navMenuLetterIcon" :sidebar-open="uiConfigs.leftSidebarShow" />
                    </template>
                </ul>

            </div>

        </template>
    </div>
</template>

<script>
    import MenuItem from './app-sidebar-menu-item'
    import path from 'path'
    import { mapState, mapGetters } from 'vuex'

    export default {
        components: {
            MenuItem,
        },
        computed: {
            ...mapGetters('navigation', [
                'permittedNavigations'
            ]),
            ...mapGetters('config', [
                'uiConfigs'
            ]),
            ...mapState('config', {
                thumbOnRight: state => state.ui.leftSidebarStyle === "folded" || state.ui.navMenuThumbOnRight,
            }),
        },
        methods: {
            resolvePath(parentPath, itemPath) {
                return path.resolve(parentPath, itemPath)
            },
        },
    }

</script>

<style lang="scss" scoped>


</style>
