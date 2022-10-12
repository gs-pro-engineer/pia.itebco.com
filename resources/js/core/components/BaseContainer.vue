<template>
    <div :class="['base-container page-container', {'boxed': boxed, 'boxed-right': boxed === 'right', 'boxed-left': boxed === 'left', 'min-height': minHeight, 'min-height-sm': minHeight === 'sm', 'min-height-md': minHeight === 'md', 'min-height-lg': minHeight === 'lg', 'h-100': minHeight === 'full', 'has-form': hasForm, 'has-footer': hasFooter }]">
        <animated-loader v-if="withLoader" :is-loading="isLoading" :loader-color="loaderColor" :overlay-color="overlayColor" :size="loaderSize" />

        <slot />
    </div>
</template>

<script>
    export default {
        name: "base-container",
        props: {
            boxed: {
                type: [Boolean, String],
                default: false
            },
            minHeight: {
                type: [Boolean, String],
                default: false
            },
            withLoader: {
                type: Boolean,
                default: false
            },
            hasForm: {
                type: Boolean,
                default: false
            },
            hasFooter: {
                type: Boolean,
                default: false
            },
            isLoading: {
                type: Boolean,
                default: false
            },
            loaderColor: {
                type: String,
                default: '#000000'
            },
            loaderSize: {
                type: String,
                default: 'parent'
            },
            overlayColor: {
                type: String,
                default: 'light' // transparent, light, dark, grey
            },
        },
    }

</script>
<style lang="scss">
    @import '../assets/scss/imports.scss';
    @import "../assets/scss/partials/palettes";

    .base-container {
        position: relative;
        padding: $side-margin;
        margin-left: -$side-margin;
        margin-right: -$side-margin;
        // min-height: 80vh;

        &.boxed {
            margin-left: 0;
            margin-right: 0;
            margin-top: $side-margin;
            // margin-bottom: $side-margin * 2;
            border-radius: $border-radius;

            &.boxed-right {
                border-top-left-radius: 0;
                border-bottom-left-radius: 0;
                margin-left: -$side-margin;
            }

            &.boxed-left {
                border-top-right-radius: 0;
                border-bottom-right-radius: 0;
                margin-right: -$side-margin;
            }
        }

        &.min-height {
            min-height: 250px;
        }

        &.h-100 {
            &.has-footer {
                padding-bottom: $side-margin * 3;

                .form-footer {
                    position: absolute;
                    bottom: 0;
                    left: 0;
                    width: 100%;
                    padding: $side-margin;
                }

                &.has-form {
                    padding-bottom: $side-margin;

                    form {
                        .form-footer {
                            position: relative;
                            bottom: auto;
                            left: auto;
                            width: auto;
                            padding: 0;
                        }
                    }

                    form:only-child {
                        min-height: 100%;
                        position: relative;
                        padding-bottom: $side-margin * 2;

                        .form-footer {
                            position: absolute;
                            bottom: 0;
                            left: 0;
                            width: 100%;
                            padding: $side-margin 0 0;
                        }
                    }
                }
            }
        }

        .table.b-table {
            tr {
                & > th:first-child, & > td:first-child {
                    padding-left: $side-margin;
                }
                & > th:last-child, & > td:last-child {
                    padding-right: $side-margin;
                }
            }
        }

        & + .page-container {
            margin-top: $side-margin;
        }
    }
    [data-page-header-background-color="transparent"] {
        .page-container.boxed {
            margin-top: 0;
        }
    }

    @each $key,
    $value in $default-palette {
        [data-page-container-background-color="#{$key}"] {
            .page-container, .card {
                background-color: map-get($value, "background-color");
                color: map-get($value, "foreground-color");
            }
            .multiselect-wrapper, .multiselect__input, .multiselect__single, .multiselect__input:focus, .multiselect__single:focus, .multiselect__input:active, .multiselect__single:active, .form-group.input-group-material .input-group-text {
                background-color: map-get($value, "background-color");
            }

            .multiselect__content-wrapper {
                background-color: map-get($value, "background-color");
                border-color: darken(map-get($value, "background-color"), 2);
            }

            .dropdown-menu {
                background-color: map-get($value, "even-color");
                color: map-get($value, "foreground-color");

                &:before {
                    background-color: map-get($value, "even-color");
                }

                .dropdown-item {
                    color: map-get($value, "foreground-color");

                    &:active,
                    &:focus,
                    &:hover {
                        color: map-get($value, "second-foreground-color");
                        background: darken(map-get($value, "even-color"), 3);
                    }

                    &.active {
                        color: lighten(map-get($value, "foreground-color"), 5);
                        background: darken(map-get($value, "even-color"), 2);
                    }
                }
                .dropdown-divider {
                    border-top-color: rgba(map-get($value, "foreground-color"), 0.1);
                }
            }
        }
    }

</style>
