<template>
    <app-sidebar class="modal-sidebar">
        <div class="modal-sidebar-inner">
            <div class="modal-sidebar-content">
                <slot name="heading" />

                <vue-scroll id="vuescrollSidebarRight" ref="vuescrollSidebarRight">
                    <div class="content-wrapper p-4">
                        <slot />
                    </div>
                </vue-scroll>
            </div>
        </div>
    </app-sidebar>

</template>

<script>
    import AppSidebar from '@components/AppSidebar';
    import { mapGetters, mapActions } from 'vuex'
    import EventBus from '@js/event-bus'

    export default {
        components: {
            AppSidebar,
        },
        data() {
            return {
            };
        },
        computed: {
            ...mapGetters('config', [
                'uiConfigs',
            ]),
        },
        methods: {
            ...mapActions('config', [
                'SetUiConfig',
            ]),
            toggleSidebar() {
                this.SetUiConfig({
                    modalSidebarShow: !this.uiConfigs.modalSidebarShow
                })
            }
        },
    };

</script>

<style lang="scss">
    @import '~@js/core/assets/scss/imports.scss';
    @import '~@js/core/assets/scss/partials/_palettes.scss';

    .sidebar {
        &.modal-sidebar {
            display: block;
            left: auto;
            right: 0;
            width: $sidebar-width;
            transform: translate3d($sidebar-width, 0, 0);

            &.shown {
                transform: translate3d(0, 0, 0);
            }

            .modal-sidebar-inner {
                position: absolute;
                top: 0;
                left: 0;
                overflow: hidden;
                width: $sidebar-width + 20px;
                height: 92%;
                background: #ffffff;
            }
        }
    }

    .show-from-right {
        transform: translate3d($sidebar-width, 0, 0);
    }

    @include media-breakpoint-up(lg) {

        .sidebar {
            &.modal-sidebar {
                width: $sidebar-width-xl;
                transform: translate3d($sidebar-width-xl, 0, 0);

                .modal-sidebar-inner {
                    width: $sidebar-width-xl;
                    background: #ffffff;
                }

                .modal-sidebar-content {
                    width: 100%;
                    height: 100%;
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


                .fixed-footer {
                    min-height: 8%;
                    max-height: 35%;
                }
            }
        }

        [data-sidebar-modal-shadow="true"] {
            .modal-sidebar {
                @include box-shadow($box-shadow);
            }
        }

        [data-sidebar-modal-height="full"] {
            .modal-sidebar {
                top: 0;
                height: 100%;
                z-index: $zindex-navbar-fixed + 10;
            }
        }

        [data-sidebar-modal-height="normal"] {
            .modal-sidebar {
                top: $navbar-height;
                height: calc(100%);
                z-index: $zindex-navbar-fixed + 10;
            }

            .backdrop-modal-sidebar {
                top: $navbar-height;
            }
        }

        [data-sidebar-modal-backdrop-color="transparent"] {
            .backdrop-modal-sidebar {
                background: transparent !important;
            }
        }

        [data-sidebar-modal-backdrop-color="dark"] {
            .backdrop-modal-sidebar {
                background: rgba(0, 0, 0, 0.3) !important;
            }
        }

        [data-sidebar-modal-backdrop-color="light"] {
            .backdrop-modal-sidebar {
                background: rgba(255, 255, 255, 0.7) !important;
            }
        }

        [data-sidebar-modal-show="true"] {
            .modal-sidebar {
                transform: translate3d(0, 0, 0);
            }

            &[data-sidebar-modal-height="normal"] {

                &[data-sidebar-modal-style="push"] {
                    .main {
                        padding-right: $sidebar-width + $side-margin;
                    }
                }

                &[data-sidebar-modal-style="off-canvas"] {
                    .main {
                        transform: translate3d(-$sidebar-width, 0, 0);
                        width: 100%;
                    }

                    .left-sidebar {
                        transform: translate3d(-$sidebar-width, 0, 0);
                    }

                    .backdrop-modal-sidebar {
                        opacity: 1;
                        transform: translate3d(0, 0px, 0px);
                        transition: opacity 0.3s;
                    }
                }
            }

            &[data-sidebar-modal-height="full"] {
                &[data-sidebar-modal-style="push"] {

                    .navbar,
                    .main {
                        padding-right: $sidebar-width + $side-margin;
                    }
                }

                &[data-sidebar-modal-style="off-canvas"] {

                    .navbar,
                    .main {
                        transform: translate3d(-$sidebar-width, 0, 0);
                        width: 100%;
                    }

                    .left-sidebar {
                        transform: translate3d(-$sidebar-width, 0, 0);
                    }

                    .backdrop-modal-sidebar {
                        opacity: 1;
                        transform: translate3d(0, 0px, 0px);
                        transition: opacity 0.3s;
                    }
                }
            }

            &[data-sidebar-modal-style="over"] {
                .navbar {
                    left: 0;
                    width: 100%;
                }

                .backdrop-modal-sidebar {
                    opacity: 1;
                    transform: translate3d(0, 0px, 0px);
                    transition: opacity 0.3s;
                }
            }
        }
    }

    @each $key,
    $value in $default-palette {
        [data-sidebar-modal-color="#{$key}"] {
            .modal-sidebar-content {
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
