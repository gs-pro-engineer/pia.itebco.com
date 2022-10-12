<template>
    <div>
        <div class='backdrop backdrop-left-sidebar' @click="closeLeftSidebar" />
        <div class='backdrop backdrop-right-sidebar' @click="closeRightSidebar" />
        <div class='backdrop backdrop-config-sidebar' @click="closeConfigSidebar" />
        <div class='backdrop backdrop-modal-sidebar' @click="closeModalSidebar" />
    </div>
</template>

<script>
    import { mapActions } from 'vuex'
    export default {
        watch: {
            $route() {
                this.SetUiConfig({ rightSidebarShow: false })
                this.SetUiConfig({ configSidebarShow: false })
                this.SetUiConfig({ modalSidebarShow: false })
            }
        },
        methods: {
            ...mapActions('config', [
                'SetUiConfig',
            ]),
            closeLeftSidebar() {
                this.SetUiConfig({ leftSidebarShow: false })
            },
            closeRightSidebar() {
                this.SetUiConfig({ rightSidebarShow: false })
            },
            closeConfigSidebar() {
                this.SetUiConfig({ configSidebarShow: false })
            },
            closeModalSidebar() {
                this.SetUiConfig({ modalSidebarShow: false })
            },
        }
    }

</script>

<style lang="scss">
    @import '~@js/core/assets/scss/imports.scss';

    .backdrop {
        @include backdrop($zindex-navbar-fixed + 1);

        &.backdrop-left-sidebar {
            z-index: $zindex-navbar-fixed + 5;
        }

        &.backdrop-right-sidebar {
            z-index: $zindex-navbar-fixed + 8;
        }

        &.backdrop-config-sidebar {
            z-index: $zindex-navbar-fixed + 9;
        }

        &.backdrop-modal-sidebar {
            z-index: $zindex-navbar-fixed + 10;
        }
    }

</style>
