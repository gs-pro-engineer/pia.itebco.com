<template>
    <app-sidebar class="special-sidebar">
        <div class="wrapper">
            <div class="content">
            </div>
        </div>
    </app-sidebar>

</template>

<script>
import AppSidebar from '@components/AppSidebar'
export default {
    components: {
        AppSidebar,
    },
}

</script>

<style lang="scss">
@import '~@js/core/assets/scss/imports.scss';
@import '~@js/core/assets/scss/partials/palettes/_left-sidebar.scss';

.sidebar {
    &.special-sidebar {
        left: 0;
        top: 0;
        height: 100%;
        width: $sidebar-width-xxs;
        transform: translate3d(-$sidebar-width-xxs, 0, 0);
        z-index: $zindex-navbar-fixed + 6;

        .wrapper {
            width: $sidebar-width-xxs + $side-margin;
            .content {
                width: $sidebar-width-xxs;
            }
        }
    }
}

[data-sidebar-special-show="true"] {
    .special-sidebar {
        transform: translate3d(0, 0, 0);
    }
}

@include media-breakpoint-up(lg) {
    .sidebar {
        &.special-sidebar {
            left: 0;
            width: $sidebar-width-xxs;
            transform: translate3d(-$sidebar-width-xxs, 0, 0);
        }
    }

    [data-sidebar-special-show="true"] {
        .special-sidebar {
            transform: translate3d(0, 0, 0);
        }
        .navbar,
        .main {
            padding-left: $sidebar-width-xxs + $side-margin;
        }
    }
}

@each $key,
$value in $default-palette {
    [data-sidebar-special-color="#{$key}"] {
        .special-sidebar {
            background: map-get($value, "background-color");
            color: map-get($value, "foreground-color");
            @if($key=='light') {
                border-right: 1px solid map-get($value, "border-color");
            }
        }
    }
}

</style>
