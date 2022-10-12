<template>
    <div class="page-header">
        <div class="container-fluid">
            <slot />
        </div>
    </div>
</template>

<script>
    export default {}

</script>
<style lang="scss" scoped>
    @import '~@js/core/assets/scss/imports.scss';
    @import "~@js/core/assets/scss/partials/palettes";

    .page-header {
        margin: -$side-margin;
        padding: $side-margin;
        margin-bottom: 0;
        margin-top: 0;

        .page-header-content {
            display: flex;
            flex-wrap: nowrap;
            margin-left: -$margin-common;
            margin-right: -$margin-common;

            .header-breadcrumb-wrapper {
                flex-grow: 1;

                .page-header-title {
                    @include font-size(24px);
                    font-weight: 500;
                    margin-bottom: 0;
                    letter-spacing: 0.5px;
                    color: inherit;
                }
            }

            .action-buttons-wrapper {
                flex-grow: 1;
                display: flex;
                flex-direction: column;
                justify-content: center;
                margin-left: $margin-common;

                .action-buttons {
                    display: flex;
                    justify-content: flex-end;
                    align-items: baseline;
                    flex-wrap: nowrap;

                    .btn + .btn, .dropdown {
                        margin-bottom: 0.5rem;
                        // margin-left: $margin-common;
                    }
                }
            }

        }
    }

    [data-page-header-is-boxed="true"] {
        .page-header {
            margin: 0;
            margin-top: $side-margin;
            // margin-bottom: $side-margin;
            border-radius: $border-radius;
        }
    }

    [data-top-navbar-fixed="true"] {
    }

    [data-top-navbar-hide="true"] {
    }

    [data-page-header-background-color=transparent] {
        .page-header {
            margin-top: 0;
        }
    }

    @each $key,
    $value in $default-palette {
        [data-page-header-background-color="#{$key}"] {
            .page-header {
                background-color: map-get($value, "background-color");
                color: map-get($value, "foreground-color");
            }
        }
    }

    @include media-breakpoint-down(md) {
        .page-header .page-header-content {
            flex-direction: column;

            .action-buttons-wrapper {
                margin-top: 1rem;
                .action-buttons {
                    flex-wrap: wrap;
                }
            }
        }
    }

</style>

<style lang="scss">
    .page-header {
        .page-header-content {
            .action-buttons-wrapper {
                .action-buttons {
                    .dropdown .btn {
                        vertical-align: baseline;
                    }
                }
            }

        }
    }
</style>
