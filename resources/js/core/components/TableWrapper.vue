<template>
    <div :class="['table-wrapper']">
        <div :class="[isEmpty ? '' : 'min-height-400px']" :id="tableWrapperId">
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

            <div class="mt-5" v-if="showReset || ((!addButtonPermissions || hasAllPermissions(addButtonPermissions)) && addButtonRoute && addButtonLabel)">
                <base-button v-if="showReset" type="button" design="light" @click="reset">{{ $t('general.clear') }}</base-button>

                <base-button v-if="(!addButtonPermissions || hasAllPermissions(addButtonPermissions)) && addButtonRoute && addButtonLabel" type="button" design="primary" @click="$router.push({ name: addButtonRoute, params: addButtonParams, query: addButtonQuery })"><i class="fas fa-plus"></i> {{ $t(addButtonLabel, { attribute: $t(entityTitle)}) }}</base-button>
            </div>

        </div>

        <div v-if="!isEmpty" class="my-5">
            <slot name="instructions" />
        </div>

        <div v-if="!isEmpty && showFooter" :class="['list-pagination-component', {'small-footer': smallFooter}]">

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
    import EventBus from '@js/event-bus'
    import { mapGetters } from 'vuex'
    import { BPagination } from 'bootstrap-vue'

    export default {
        name: "table-wrapper",
        props: {
            meta: {
                type: Object,
                default() {
                    return {
                        total: 0,
                        currentPage: 1,
                        perPage: 10,
                    }
                },
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
            showFooter: {
                type: Boolean,
                default: true
            },
            smallFooter: {
                type: Boolean,
                default: false
            },
            scrollTo: {
                type: String,
            },
            tableWrapperId: {
                type: String,
                default: 'printableTable'
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
            ...mapGetters('user', [
                'hasAllPermissions',
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
                return !this.meta.total
            }
        },
        methods: {
            reset() {
                EventBus.$emit('CLEAR_FILTERS')
            },
            changePerPage(opt) {
                if(this.perPage != opt) {
                    this.perPage = opt
                }
            }
        },
    }

</script>
