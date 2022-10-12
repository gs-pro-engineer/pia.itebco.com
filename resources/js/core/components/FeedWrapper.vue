<template>
    <div :class="['feed-wrapper']">
        <div :class="[isEmpty ? '' : 'min-height-400px']" :id="feedWrapperId">
            <slot />
        </div>

        <div v-if="!filtered && isEmpty" class="empty-table text-muted">
            <div class="mb-5">
                <i class="fas fa-list fa-5x"></i>
            </div>

            <h2 class="text-muted" v-text="$t('global.list', { attribute: $t(entitiesTitle) })"></h2>

            <p v-text="$t(entityDescription)"></p>

            <div class="mt-5">
                <slot name="button">
                    <base-button v-if="(!addButtonPermissions || hasAllPermissions(addButtonPermissions)) && addButtonRoute && addButtonLabel" type="button" design="primary" @click="$router.push({ name: addButtonRoute, params: addButtonParams, query: addButtonQuery })"><i class="fas fa-plus"></i> {{ $t(addButtonLabel, { attribute: $t(entityTitle)}) }}</base-button>
                </slot>
            </div>

        </div>

        <div v-if="filtered && isEmpty" class="empty-table text-muted">
            <div class="mb-5">
                <i class="far fa-frown fa-5x"></i>
            </div>

            <h2 class="text-muted" v-text="$t('global.could_not_find', { attribute: $t(entityTitle) })"></h2>

            <div class="mt-5" v-if="showReset">
                <base-button type="button" design="primary" @click="reset">{{ $t('general.clear') }}</base-button>
            </div>

        </div>

        <div v-if="!isEmpty" class="my-5">
            <slot name="instructions" />
        </div>

        <div v-if="!isEmpty && showPagination" :class="['list-pagination-component', {'small-footer': smallFooter}]">

            <div class="pagination-status-component flex-grow text-muted small">
                <div>
                    <p>{{ $t('global.total_result_found_with_record', { attribute: meta.total, from: meta.from, to: meta.to }) }}</p>
                    <template v-if="filtered">
                        <p>{{ $t('general.filtered_data') }} -
                        <base-button type="button" design="link" size="sm" @click="reset" class="ml-1 inline">{{ $t('general.clear_filter') }}</base-button></p>
                    </template>
                </div>
            </div>

            <base-dropdown tag="div" class="per-page-component" direction="up" menu-classes="show-dropdown-up" position="right">
                <base-button slot="title" type="button" :size="pagination.size" design="primary" data-toggle="dropdown" role="button" class="mr-3">{{ meta.perPage }} per page <i class="fas fa-chevron-up"></i></base-button>

                <a class="dropdown-item" v-for="option in configs.system.paginations" :key="option" @click="changePerPage(option)"><span class="font-weight-700">{{ option }}</span> per page</a>
            </base-dropdown>

            <div class="pagination-buttons-component">
                <b-pagination :align="pagination.align" :size="pagination.size" :total-rows="meta.total" v-model="currentPage" :per-page="meta.perPage"></b-pagination>
            </div>
        </div>
    </div>
</template>

<script>
    import { mapGetters, mapActions } from 'vuex'
    import { BPagination } from 'bootstrap-vue'

    export default {
        name: "feed-wrapper",
        props: {
            meta: {
                type: Object,
                default() {
                    return {
                        total: 0,
                        currentPage: 1,
                        perPage: 9,
                    }
                },
                required: true
            },
            pagination: {
                type: Object,
                default() {
                    return {
                        align: 'align',
                        size: '',
                    }
                },
            },
            entityTitle: {
                type: String,
                required: true
            },
            entitiesTitle: {
                type: String,
                required: true
            },
            entityDescription: {
                type: String,
                required: true
            },
            addButtonRoute: {
                type: String,
            },
            addButtonLabel: {
                type: String,
                default: 'global.add'
            },
            addButtonParams: {
                type: Object,
                default() {
                    return {}
                }
            },
            addButtonQuery: {
                type: Object,
                default() {
                    return {}
                }
            },
            addButtonPermissions: {
                type: Array,
            },
            filtered: {
                type: Boolean,
                default: false
            },
            showReset: {
                type: Boolean,
                default: true
            },
            showPagination: {
                type: Boolean,
                default: false
            },
            smallFooter: {
                type: Boolean,
                default: false
            },
            scrollTo: {
                type: String,
            },
            feedWrapperId: {
                type: String,
                default: 'printableFeed'
            },
        },
        components: {
            BPagination,
        },
        data() {
            return {
            }
        },
        computed: {
            ...mapGetters('config', [
                'configs',
            ]),
            currentPage: {
                get() {
                    return this.meta.currentPage
                },
                set(v) {
                    let query = {
                        ...this.$route.query,
                        currentPage: v,
                        perPage: this.perPage
                    }
                    if(this.scrollTo) {
                        query.scroll = this.scrollTo
                    }
                    this.$router.push({ path: this.$route.path, query: query })
                }
            },
            perPage: {
                get() {
                    return this.meta.perPage
                },
                set(v) {
                    let query = {
                        ...this.$route.query,
                        currentPage: this.currentPage,
                        perPage: v
                    }
                    if(this.scrollTo) {
                        query.scroll = this.scrollTo
                    }
                    this.$router.push({ path: this.$route.path, query: query })
                }
            },
            isEmpty() {
                return false
            }
        },
        methods: {
            ...mapActions('common', [
                'ResetFilters',
            ]),
            reset() {
                this.ResetFilters()
                this.$router.push({ path: this.$route.path })
            }
        },
    }

</script>

<style lang="scss" scoped>
    @import '../assets/scss/imports.scss';

    .list-pagination-component {
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        justify-content: flex-end;
        padding: $side-margin;

        .per-page-component {
            display: flex;
            justify-content: flex-end;
        }

        .pagination {
            margin-bottom: 0;
        }
    }

    .empty-feed {
        text-align: center;
        padding: $side-margin*3 $side-margin;
    }


    @include media-breakpoint-down(sm) {
        .list-pagination-component {
            flex-direction: column;
            justify-content: space-around;
            padding: $margin-common;
            margin-top: $margin-common;
            text-align: center;

            > div {
                justify-content: center !important;
                & + div {
                    margin-top: $side-margin;
                }
            }
        }
    }

</style>
