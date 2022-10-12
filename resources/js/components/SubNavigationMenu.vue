<template>
    <div class="component-navigation-menu-wrapper">
        <ul :class="['component-navigation-menu list-unstyled']">
            <template v-for="(navItem, j) in navigation" v-if="!navItem.meta.isHiddenNav">
                <menu-item :key="navItem.name||navItem.path" :menu-id="`collapse-${navItem.name}-${j}`" :item="navItem" :base-path="baseRoute" :menu-letter-icon="menuLetterIcon" :show-children="true" :sidebar-open="true" />
            </template>
        </ul>
    </div>
</template>

<script>
    import MenuItem from '@views/layouts/partials/sidebar-menu/app-sidebar-menu-item'
    export default {
        name: "sub-navigation-menu",
        components: {
            MenuItem,
        },
        props: {
            navigation: {
                type: Array,
                required: true
            },
            baseRoute: {
                type: String,
                required: true
            },
            menuLetterIcon: {
                type: Boolean,
                required: true
            },
        },
    }

</script>

<style lang="scss">
    @import '~@js/core/assets/scss/imports.scss';
    @import "~@js/core/assets/scss/partials/palettes";
    
    $backgroundColor: map-get($colors, 'gray-darker');
    $foregroundColor: map-get($colors, 'light');
    $highlightColor: $primary;

    .boxed {
        .component-navigation-menu-wrapper {
            border-radius: $border-radius;
        }
    }

    .component-navigation-menu-wrapper {
        ul.component-navigation-menu {
            margin-top: 0;
            margin-bottom: 0;
            -webkit-user-select: none;
            -moz-user-select: none;
            user-select: none;

            > li {
                position: relative;

                &:after,
                &:before {
                    display: table;
                    content: " ";
                    clear: both;
                }

                a {
                    position: relative;
                    display: block;
                    color: inherit;
                    cursor: pointer;

                    &:hover {
                        background: darken($backgroundColor, 6);
                        color: darken($foregroundColor, 90);
                        fill: darken($foregroundColor, 90);
                         i {
                            color: darken($foregroundColor, 90);
                         }
                        .menu-thumbnail {
                            color: inherit;
                            fill: inherit;
                        }
                    }

                    &.router-link-exact-active {
                        color: lighten($highlightColor, 10);
                        font-weight: $font-weight-bold !important;

                        &:hover {
                            color: $highlightColor;
                            fill: $highlightColor;
                             i {
                                color: $highlightColor;
                             }
                        }
                    }

                    &>div {
                        position: relative;
                        display: flex;
                        justify-content: flex-start;
                        align-items: center;
                        flex-direction: row;
                        flex-wrap: nowrap;
                        padding: 5px 20px;
                        min-height: 40px;
                        line-height: 40px;
                        clear: both;
                        overflow: hidden;
                        text-overflow: ellipsis;
                    }

                    .menu-thumbnail {
                        display: inline-block;
                        height: 40px;
                        line-height: 40px;
                        margin-right: 20px;
                        text-align: left;
                        vertical-align: middle;
                        position: relative;
                        min-width: 18px;
                        color: inherit;
                        fill: inherit;

                        i {
                            @include font-size(16px);
                        }
                    }

                    .detailed {
                        display: inline-block;
                        vertical-align: middle;
                        white-space: nowrap;
                        overflow: hidden;
                        text-overflow: ellipsis;

                        .title {
                            display: block;
                            text-transform: capitalize;
                            @include font-size(14px);
                            font-weight: 400;
                            line-height: 24px;
                            overflow: hidden;
                            text-overflow: ellipsis;
                        }

                        .description {
                            display: block;
                            clear: both;
                            @include font-size(12px);
                            line-height: 16px;
                            opacity: 0.5;
                        }
                    }

                    .badge {
                        margin-right: 25px;
                    }

                    &.has-children {
                        &:before {
                            font-family: "Font Awesome 5 Free";
                            font-weight: 900;
                            content: "\f0da";
                            position: absolute;
                            top: 20px;
                            right: $side-margin;
                            @include font-size(18px);
                            line-height: 10px;
                            transition: #{$transition-transform-ease};
                            transform: rotate(0deg);
                        }

                        &.is-open {
                            background: darken($backgroundColor, 10);
                            &:before {
                                transform: rotate(90deg);
                            }
                        }
                    }
                }

                ul {
                    background: darken($backgroundColor, 10);
                    >li {
                        a {
                            padding: 0 20px;

                            .menu-thumbnail {
                                min-width: 22px;
                                i {
                                    @include font-size(14px);
                                }
                            }

                            &:hover {
                                background: darken($backgroundColor, 15);
                                .menu-thumbnail {
                                    color: inherit;
                                    fill: inherit;
                                }
                            }

                            .detailed {
                                .title {
                                    @include font-size(13px);
                                    font-weight: 400;
                                    line-height: 24px;
                                }

                                .description {
                                    display: none;
                                }
                            }

                            .badge {
                                display: none;
                            }

                            &.has-children {
                                &:before {
                                    top: 15px;
                                    @include font-size(14px);
                                    line-height: 10px;
                                }
                            }
                        }

                        ul {
                            li {
                                > a {
                                    padding: 0 40px;
                                    min-height: 30px;
                                    line-height: 30px;

                                    .menu-thumbnail {
                                        i {
                                            visibility: hidden;
                                        }
                                    }

                                    .detailed {
                                        .title {
                                            @include font-size(13px);
                                            font-weight: 400;
                                            line-height: 24px;
                                        }
                                    }

                                    & + div {
                                        ul > li > a {
                                            padding: 0 60px;
                                        }
                                    }
                                }
                            }
                        }
                    }
                }

                .collapse,
                .collapsing {
                    border-style: solid;
                    border-color: darken($backgroundColor, 11);
                    border-width: 0px;
                    border-top-width: 1px;
                    border-bottom-width: 1px;
                }

                &:first-child > a:hover, &:first-child > a.has-children.is-open {
                    border-radius: $border-radius $border-radius 0 0;
                }

                &:last-child > a:hover, &:last-child > a.has-children.is-open {
                    border-radius: 0 0 $border-radius $border-radius;
                }
            }

            &.thumb-align-right {

                a {

                    .menu-thumbnail {
                        width: 40px;
                        margin-right: 0px;
                        text-align: center;
                        margin-left: auto;
                        background: darken($backgroundColor, 20);
                    }

                    .badge {
                        margin-right: 10px;
                    }

                    &.has-children {
                        &:before {
                            right: $side-margin + 60;
                            transform: rotate(180deg);
                        }
                    }
                }

                ul {
                    >li {
                        a {
                            .menu-thumbnail {
                                background: transparent;
                            }
                        }
                    }
                }
            }

            &.no-sub-menu-thumbnail {
                >li ul>li a {
                    .menu-thumbnail {
                        display: none;
                    }
                }
            }
        }
    }


    @each $key,
    $value in $default-palette {
        [data-top-navbar-color="#{$key}"] {

            $backgroundColor: map-get($value, "background-color");
            $foregroundColor: map-get($value, "foreground-color");
            $highlightColor: map-get($value, "highlight-color");

            .component-navigation-menu-wrapper {
                background: map-get($value, "background-color");
                color: map-get($value, "foreground-color");
                fill: map-get($value, "foreground-color");
                max-width: 100%;

                a{
                    color: inherit;
                    fill: inherit;
                    &:hover {
                        color: map-get($value, "second-foreground-color");
                        fill: map-get($value, "second-foreground-color");
                    }
                }

                ul.component-navigation-menu {
                    >li {
                        a {
                            color: inherit;
                            fill: inherit;
                            cursor: pointer;

                            &:hover {
                                background: darken($backgroundColor, 6);
                                color: map-get($value, "second-foreground-color");
                                fill: map-get($value, "second-foreground-color");
                                 i {
                                    color: map-get($value, "second-foreground-color");
                                 }
                                .menu-thumbnail {
                                    color: inherit;
                                    fill: inherit;
                                }
                            }

                            &.router-link-exact-active {
                                color: lighten($highlightColor, 10);
                                font-weight: $font-weight-bold !important;

                                &:hover {
                                    color: $highlightColor;
                                    fill: $highlightColor;
                                     i {
                                        color: $highlightColor;
                                     }
                                }
                            }

                            .menu-thumbnail {
                                color: inherit;
                                fill: inherit;
                            }

                            &.has-children {
                                &.is-open {
                                    background: darken($backgroundColor, 10);
                                }
                            }
                        }

                        ul {
                            background: darken($backgroundColor, 10);
                            >li {
                                a {
                                    &:hover {
                                        background: darken($backgroundColor, 15);
                                        .menu-thumbnail {
                                            color: inherit;
                                            fill: inherit;
                                        }
                                    }
                                }
                            }
                        }

                        .collapse,
                        .collapsing {
                            border-color: darken($backgroundColor, 11);
                        }
                    }
                }
            }
        }
    }
</style>
