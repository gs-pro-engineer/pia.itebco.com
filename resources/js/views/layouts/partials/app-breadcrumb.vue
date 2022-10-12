<template>
    <transition-group appear tag="ol" name="breadcrumb" class="breadcrumb transparent breadcrumb-icon-angle-right">
        <template v-for="(item, index) in breadcrumbItemList">
            <li v-if="index==breadcrumbItemList.length-1" :key="item.path.name || item.path" class="breadcrumb-item" :class="[ index==breadcrumbItemList.length-1 ? 'active':'' ]">
                {{ item.meta.trans ? $t(item.meta.trans, {'attribute': $t(item.meta.title)}) : $t(item.meta.title) }}
            </li>
            <li v-else :key="item.path.name || item.path + item.meta.title" class="breadcrumb-item">
                <router-link :to="item.meta.forceRedirect||item.redirect||item.path">
                    {{ item.meta.trans ? $t(item.meta.trans, {'attribute': $t(item.meta.title)}) : $t(item.meta.title) }}
                </router-link>
            </li>
        </template>
    </transition-group>
</template>

<script>
    export default {
        props: ['removeDefaultRoot'],
        components: {
        },
        data() {
            return {
                breadcrumbItemList: []
            }
        },
        watch: {
            $route() {
                this.getBreadcrumb()
            }
        },
        mounted() {
            this.getBreadcrumb()
        },
        methods: {
            getBreadcrumb() {
                if (!this.removeDefaultRoot) {
                    this.breadcrumbItemList = [{
                        path: { name: 'App' },
                        meta: {
                            title: 'general.app'
                        },
                        custom: true
                    }]
                }
                this.breadcrumbItemList = this.breadcrumbItemList.concat(this.$route.matched.filter(item => item.meta && item.meta.title && !item.meta.hideBreadcrumb))
            }
        }
    }

</script>
<style lang="scss" scoped>
    @import '~@js/core/assets/scss/imports.scss';
    @import "~@js/core/assets/scss/partials/palettes";

    .breadcrumb {
        border-radius: 0;
        white-space: nowrap;
        display: flex;
        min-height: $side-margin;
        line-height: $side-margin;
        padding: 0 $margin-common 0 0;
        margin: 0;
        margin-top: $margin-common / 2;
        margin-bottom: $margin-common / 2;
        justify-content: flex-start;
        align-items: flex-end;
        flex-direction: column;
        background-color: transparent;
        -webkit-user-select: none;
        -moz-user-select: none;
        user-select: none;
        flex-wrap: wrap;

        >li,
        .breadcrumb-item {
            padding: 0;

            &:before {
                padding: 0 $margin-common / 2;
            }

            &.active>span {
                opacity: 0.7;
            }
        }

        &.breadcrumb-icon-home {

            >li:first-child,
            .breadcrumb-item:first-child {
                a:before {
                    font-family: "Font Awesome 5 Free";
                    font-weight: 900;
                    content: "\f015";
                    padding: 0 $margin-common 0 0;
                }
            }
        }

        &.breadcrumb-icon-bars {

            >li:first-child,
            .breadcrumb-item:first-child {
                a:before {
                    font-family: "Font Awesome 5 Free";
                    font-weight: 900;
                    content: "\f0c9";
                    padding: 0 $margin-common 0 0;
                }
            }
        }

        &.breadcrumb-icon-grid {

            >li:first-child,
            .breadcrumb-item:first-child {
                a:before {
                    font-family: "Font Awesome 5 Free";
                    font-weight: 900;
                    content: "\f009";
                    padding: 0 $margin-common 0 0;
                }
            }
        }

        &.breadcrumb-icon-meter {

            >li:first-child,
            .breadcrumb-item:first-child {
                a:before {
                    font-family: "Font Awesome 5 Free";
                    font-weight: 900;
                    content: "\f3fd";
                    padding: 0 $margin-common 0 0;
                }
            }
        }

        &.breadcrumb-icon-angle-right {
            >li {
                +li:before {
                    font-family: "Font Awesome 5 Free";
                    font-weight: 900;
                    content: "\f105";
                }
            }

            >.breadcrumb-item {
                +.breadcrumb-item:before {
                    font-family: "Font Awesome 5 Free";
                    font-weight: 900;
                    content: "\f105";
                }
            }
        }

        &.breadcrumb-icon-angle-double-right {
            >li {
                +li:before {
                    font-family: "Font Awesome 5 Free";
                    font-weight: 900;
                    content: "\f101";
                }
            }

            >.breadcrumb-item {
                +.breadcrumb-item:before {
                    font-family: "Font Awesome 5 Free";
                    font-weight: 900;
                    content: "\f101";
                }
            }
        }
    }

    @each $key,
    $value in $default-palette {
        [data-page-header-background-color="#{$key}"] {
            .breadcrumb {
                color: map-get($value, "foreground-color");

                li,
                .breadcrumb-item {
                    color: map-get($value, "foreground-color");

                    a {
                        color: map-get($value, "foreground-color");
                    }

                    & + li, & + .breadcrumb-item {
                        &:before {
                            color: map-get($value, "foreground-color");
                        }
                    }
                }
            }
        }
    }

    @include media-breakpoint-up(xs) {
        .breadcrumb {
            flex-direction: row;
        }
    }

</style>
