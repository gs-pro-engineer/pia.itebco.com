<template>
    <div class="sidebar">
        <slot></slot>
    </div>
</template>

<script>
    export default {}

</script>

<style lang="scss">
    @import '~@js/core/assets/scss/imports.scss';

    .sidebar {
        position: fixed;
        top: $navbar-height;
        bottom: 0;
        left: 0;
        width: $sidebar-width-md;
        height: calc(100%);
        display: block;
        overflow: hidden;
        z-index: $zindex-navbar-fixed + 5;
        transition: #{$transition-transform-ease};
        transform: translate3d(-$sidebar-width-md, 0, 0);

        -webkit-user-select: none;
        /* Chrome all / Safari all */
        -moz-user-select: none;
        /* Firefox all */
        -ms-user-select: none;
        /* IE 10+ */
        user-select: none;
        /* Likely future */
        @include box-shadow($box-shadow);

        .wrapper {
            position: absolute;
            top: 0;
            left: 0;
            bottom: 0;
            height: calc(100%);
            width: $sidebar-width-md + $side-margin;

            .content {
                height: calc(100%);
                width: $sidebar-width-md;
                margin-bottom: $navbar-height + $side-margin;
                position: relative;
            }
        }
    }

    @include media-breakpoint-up(lg) {
        .sidebar {
            top: $navbar-height;
            width: $sidebar-width;
            height: calc(100%);
            transform: translate3d(-$sidebar-width, 0, 0);
            box-shadow: none;

            .wrapper {
                width: $sidebar-width + $side-margin;

                .content {
                    width: $sidebar-width;
                }
            }
        }
    }

</style>
