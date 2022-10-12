<template>
    <app-sidebar class="right-sidebar">
        <div class="right-sidebar-inner">
            <div class="right-sidebar-content">
                <h4 class="sidebar-heading font-weight-bold text-center border-bottom">{{ $t('general.help') }}</h4>

                <vue-scroll id="vuescrollSidebarRight" ref="vuescrollSidebarRight">
                    <animated-loader :is-loading="isLoading" :loader-color="vars.loaderColor" />
                    <div class="content-wrapper p-4" v-html="content"></div>
                </vue-scroll>
            </div>
        </div>
    </app-sidebar>

</template>

<script>
    import AppSidebar from '@components/AppSidebar'
    import { mapGetters, mapActions } from 'vuex'
    import EventBus from '@js/event-bus'

    export default {
        components: {
            AppSidebar,
        },
        data() {
            return {
                topic: null,
                content: '',
                isLoading: false,
            }
        },
        computed: {
            ...mapGetters('config', [
                'uiConfigs',
                'vars',
            ]),
        },
        watch: {
            topic(value, oldValue) {
                this.getHelpContent()
            }
        },
        methods: {
            ...mapActions('config', [
                'SetUiConfig',
            ]),
            toggleSidebar(topic) {
                this.SetUiConfig({
                    rightSidebarShow: !this.uiConfigs.rightSidebarShow
                })

                if(topic) {
                    this.topic = topic
                    this.content = ''
                }
            }
        },
        mounted() {
            this.SetUiConfig({
                rightSidebarShow: false
            })
            EventBus.$off('TOGGLE_HELP', this.toggleSidebar)
            EventBus.$on('TOGGLE_HELP', this.toggleSidebar)
        },
        destroyed() {
            EventBus.$off('TOGGLE_HELP', this.toggleSidebar)
        }
    }

</script>

<style lang="scss">
    @import '~@js/core/assets/scss/imports.scss';
    @import '~@js/core/assets/scss/partials/_palettes.scss';

    .sidebar {
        &.right-sidebar {
            display: block;
            left: auto;
            right: 0;
            width: $sidebar-width;
            transform: translate3d($sidebar-width, 0, 0);

            .right-sidebar-inner {
                position: absolute;
                top: 0;
                left: 0;
                height: 100%;
                overflow: auto;
                width: $sidebar-width + 20px;
                background: #ffffff;
            }
        }
    }

    .show-from-right {
        transform: translate3d($sidebar-width, 0, 0);
    }

    @include media-breakpoint-up(lg) {

        .sidebar {
            &.right-sidebar {
                width: $sidebar-width-lg;
                transform: translate3d($sidebar-width-lg, 0, 0);

                .right-sidebar-inner {
                    width: $sidebar-width-lg + 20px;
                    background: #ffffff;
                }

                .right-sidebar-content {
                    width: 100%;
                    text-align: left;

                    .sidebar-heading {
                        padding: 20px;
                        margin-bottom: 0;
                    }

                    .tab-content {
                        text-align: left;
                        padding: 10px;
                    }

                    .color-block {
                        display: block;
                        height: 30px;
                        width: 30px;
                        float: left;
                        margin: 0 10px 5px 0;
                        cursor: pointer;
                    }

                    .list-group-item-title {
                        @include font-size(13px);
                        font-weight: 400;
                    }

                    .list-group-item-colors {
                        padding: 20px 15px;
                    }
                }
            }
        }

        [data-sidebar-right-shadow="true"] {
            .right-sidebar {
                @include box-shadow($box-shadow);
            }
        }

        [data-sidebar-right-height="full"] {
            .right-sidebar {
                top: 0;
                height: 100%;
                z-index: $zindex-navbar-fixed + 8;
            }
        }

        [data-sidebar-right-height="normal"] {
            .right-sidebar {
                top: $navbar-height;
                height: calc(100%);
                z-index: $zindex-navbar-fixed + 8;
            }

            .backdrop-right-sidebar {
                top: $navbar-height;
            }
        }

        [data-sidebar-right-backdrop-color="transparent"] {
            .backdrop-right-sidebar {
                background: transparent !important;
            }
        }

        [data-sidebar-right-backdrop-color="dark"] {
            .backdrop-right-sidebar {
                background: rgba(0, 0, 0, 0.3) !important;
            }
        }

        [data-sidebar-right-backdrop-color="light"] {
            .backdrop-right-sidebar {
                background: rgba(255, 255, 255, 0.7) !important;
            }
        }

        [data-sidebar-right-show="true"] {
            .right-sidebar {
                transform: translate3d(0, 0, 0);
            }

            &[data-sidebar-right-height="normal"] {

                &[data-sidebar-right-style="push"] {
                    .main {
                        padding-right: $sidebar-width + $side-margin;
                    }
                }

                &[data-sidebar-right-style="off-canvas"] {
                    .main {
                        transform: translate3d(-$sidebar-width, 0, 0);
                        width: 100%;
                    }

                    .left-sidebar {
                        transform: translate3d(-$sidebar-width, 0, 0);
                    }

                    .backdrop-right-sidebar {
                        opacity: 1;
                        transform: translate3d(0, 0px, 0px);
                        transition: opacity 0.3s;
                    }
                }
            }

            &[data-sidebar-right-height="full"] {
                &[data-sidebar-right-style="push"] {

                    .navbar,
                    .main {
                        padding-right: $sidebar-width + $side-margin;
                    }
                }

                &[data-sidebar-right-style="off-canvas"] {

                    .navbar,
                    .main {
                        transform: translate3d(-$sidebar-width, 0, 0);
                        width: 100%;
                    }

                    .left-sidebar {
                        transform: translate3d(-$sidebar-width, 0, 0);
                    }

                    .backdrop-right-sidebar {
                        opacity: 1;
                        transform: translate3d(0, 0px, 0px);
                        transition: opacity 0.3s;
                    }
                }
            }

            &[data-sidebar-right-style="over"] {
                .navbar {
                    left: 0;
                    width: 100%;
                }

                .backdrop-right-sidebar {
                    opacity: 1;
                    transform: translate3d(0, 0px, 0px);
                    transition: opacity 0.3s;
                }
            }
        }
    }

    @each $key,
    $value in $default-palette {
        [data-sidebar-right-color="#{$key}"] {
            .right-sidebar-content {
                background: map-get($value, "background-color");
                color: map-get($value, "foreground-color");

                a {
                    color: map-get($value, "foreground-color");
                }
            }
        }
    }

    .content-wrapper {
        min-height: 200px;
    }

</style>
