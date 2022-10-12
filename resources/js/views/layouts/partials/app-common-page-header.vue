<template>
    <app-page-header>


        <template v-for="buttonObj in pageHeaderButtons">

            <base-button v-if="buttonObj.label" :key="buttonObj.label" type="button" :design="buttonObj.design || 'white'" @click="buttonObj.action($router, eventBus)" :size="buttonObj.size || 'md'">
                <i :class="buttonObj.icon"></i> {{ buttonObj.trans ? $t(buttonObj.trans, {'attribute': buttonObj.label}) : buttonObj.label }}
            </base-button>

            <base-button v-else-if="buttonObj.tooltip" :key="buttonObj.tooltip" type="button" :design="buttonObj.design || 'white'" @click="buttonObj.action($router, eventBus)" :size="buttonObj.size || 'md'" v-b-tooltip.hover.bottom :title="buttonObj.trans ? $t(buttonObj.trans, {'attribute': buttonObj.tooltip}) : buttonObj.tooltip"><i :class="buttonObj.icon"></i></base-button>

            <base-button v-else :key="buttonObj.tooltip" type="button" :design="buttonObj.design || 'white'" @click="buttonObj.action($router, eventBus)" :size="buttonObj.size || 'md'"><i :class="buttonObj.icon"></i></base-button>

        </template>




        <base-dropdown v-if="this.totalItems && pageHeader.sort" tag="div" class="header-links-dropdown" direction="down" menu-classes="show-dropdown-up" position="right" :has-scroll="pageHeader.sort.hasScroll || false">

            <base-button slot="title" type="button" data-toggle="dropdown" role="button" :design="pageHeader.sort ? pageHeader.sort.design || 'white' : 'white'" :size="pageHeader.sort ? pageHeader.sort.size || 'md' : 'md'" v-b-tooltip.hover.bottom :title="$t('general.sort_by')"><i class="fas fa-sort"></i></base-button>

            <a class="dropdown-item" @click="updateRouteQuery({order:'asc'})">
                <i class="fas fa-sort-alpha-down"></i> {{ $t('list.general.orders.asc') }}
                <i v-if="getSortStatus(pageHeader.sort.storeName, {order:'asc'})" class="fas fa-check pull-right"></i>
            </a>

            <a class="dropdown-item" @click="updateRouteQuery({order:'desc'})">
                <i class="fas fa-sort-alpha-up"></i> {{ $t('list.general.orders.desc') }}
                <i v-if="getSortStatus(pageHeader.sort.storeName, {order:'desc'})" class="fas fa-check pull-right"></i>
            </a>

            <div role="separator" class="dropdown-divider"></div>

            <template v-for="option in pageHeaderSortOptions">
                <a :class="['dropdown-item', { 'secure-content': option.thClass && option.thClass.includes('secure-content') }]" :key="option.label" @click="updateRouteQuery({sortBy: option.sort ? option.sort : option.dispatch.sortBy})">{{ option.label }}
                    <i v-if="getSortStatus(pageHeader.sort.storeName, {sortBy: option.sort ? option.sort : option.dispatch.sortBy})" class="fas fa-check pull-right"></i>
                </a>
            </template>
        </base-dropdown>




        <base-dropdown v-if="this.totalItems && columns && columns.fields" tag="div" size="md" :toggle-on-click="false" class="header-columns-dropdown" direction="down" menu-classes="show-dropdown-up" position="right" dropdown-menu-tag="div" :has-scroll="pageHeader.columns && pageHeader.columns.hasScroll ? pageHeader.columns.hasScroll || false : false">

            <base-button slot="title" type="button" data-toggle="dropdown" role="button" :design="pageHeader.columns && pageHeader.columns.design ? pageHeader.columns.design : 'white'" :size="pageHeader.columns && pageHeader.columns.size ? pageHeader.columns.size : 'md'" v-b-tooltip.hover.bottom :title="$t('general.columns')"><i class="fas fa-columns"></i></base-button>

                <a class="dropdown-item text-right" key="uncheck-all" @click="uncheckAllColumn">{{ $t('general.uncheck_all') }}</a>
                <div role="separator" class="dropdown-divider"></div>
                <template v-for="(column, colIndex) in columns.fields">
                    <template v-if="!column.cantHide">
                        <a :class="['dropdown-item', { 'secure-content': column.thClass && column.thClass.includes('secure-content') }]" :key="column.key" @click="toggleColumn(columns.fields[colIndex])">{{ column.label ? column.label : column.headerTitle }}
                            <i v-if="!column.thClass || !column.thClass.includes('d-none')" class="fas fa-check pull-right"></i>
                        </a>
                    </template>
                </template>
        </base-dropdown>



        <base-dropdown v-if="!pageHeader.hideLinks && pageHeaderLinks && pageHeaderLinks.length" tag="div" class="header-links-dropdown" direction="down" menu-classes="show-dropdown-up" position="right">

            <base-button slot="title" type="button" data-toggle="dropdown" role="button" design="white" size="md" v-b-tooltip.hover.bottom :title="$t('general.more_option')"><i class="fas fa-ellipsis-v"></i></base-button>


            <template v-for="link in pageHeaderLinks">

                <a v-if="link.href" class="dropdown-item" :key="link.label" :href="link.href"><i v-if="link.icon" :class="link.icon"></i>  {{ link.trans ? $t(link.trans, {'attribute': link.label}) : link.label }}</a>

                <a v-else-if="link.dispatch" class="dropdown-item" :key="link.label" @click="$store.dispatch(link.dispatch.action, link.dispatch.params)"><i v-if="link.icon" :class="link.icon"></i>  {{ link.trans ? $t(link.trans, {'attribute': link.label}) : link.label }}</a>

                <a v-else-if="link.action" class="dropdown-item" :key="link.label" @click="link.action($router, eventBus)"><i v-if="link.icon" :class="link.icon"></i>  {{ link.trans ? $t(link.trans, {'attribute': link.label}) : link.label }}</a>

                <div v-else-if="link.separator" role="separator" class="dropdown-divider"></div>

                <router-link v-else-if="link.to" :key="link.label" tag="a" class="dropdown-item" :to="link.to" exact><i v-if="link.icon" :class="link.icon"></i>  {{ link.trans ? $t(link.trans, {'attribute': link.label}) : link.label }}</router-link>

                <template v-else></template>

            </template>
        </base-dropdown>

    </app-page-header>
</template>

<script>
    import EventBus from '@js/event-bus'
    import AppPageHeader from './app-page-header'
    import { mapGetters, mapActions } from 'vuex'

    export default {
        components: {
            AppPageHeader,
        },
        data() {
            return {
                eventBus: EventBus,
                pageHeaderButtons: [],
                pageHeaderLinks: [],
                pageHeaderSortOptions: [],
            }
        },
        computed: {
            ...mapGetters('config', [
                'uiConfigs',
            ]),
            ...mapGetters('common', [
                'columns',
                'filters',
                'pageHeader',
            ]),
            ...mapGetters('common', {
                totalItems: 'totalItems',
            }),
            ...mapGetters('user', [
                'hasAllPermissions',
            ]),
        },
        watch: {
            'pageHeader': {
                deep: true,
                immediate: true,
                handler(newValue, oldValue) {
                    if (newValue) {
                        if(newValue.buttons) {
                            this.pageHeaderButtons = newValue.buttons.filter(b => (!b.permissions || this.hasAllPermissions(b.permissions)))
                        } else {
                            this.pageHeaderButtons = []
                        }
                        if(newValue.links) {
                            this.pageHeaderLinks = newValue.links.filter(b => (!b.permissions || this.hasAllPermissions(b.permissions)))
                        } else {
                            this.pageHeaderLinks = []
                        }
                        if(newValue.sort && newValue.sort.options) {
                            this.pageHeaderSortOptions = [...newValue.sort.options]
                        } else {
                            this.pageHeaderSortOptions = []
                        }
                    } else {
                        this.pageHeaderButtons = []
                        this.pageHeaderLinks = []
                        this.pageHeaderSortOptions = []
                    }
                }
            }
        },
        methods: {
            ...mapActions('common', [
                'SetColumns',
            ]),
            updateRouteQuery(param){
                const newQuery = Object.assign({}, this.$route.query, param)
                this.$router.push({ path: this.$route.path, query: newQuery })
            },
            dispatchSortAction(storeName, params = {}){
                this.$store.dispatch(`${storeName}/SetFilters`, params)
            },
            getSortStatus(storeName, conditions) {
                const getter = this.$store.getters[`${storeName}/filters`]
                let toReturn = true
                conditions.objForEach((value, key) => {
                    toReturn = getter[key] === value
                })
                return toReturn
            },
            toggleColumn(column) {
                let columns = []
                this.columns.fields.objForEach(field => {
                    if(field.cantHide || !(field.thClass && field.thClass.includes('d-none'))) {
                        columns.push(field.key)
                    }
                })

                if(!column.thClass || !column.thClass.includes('d-none')) {
                    column.thClass = column.thClass + ' d-none'
                    column.tdClass = column.thClass + ' d-none'
                } else {
                    if(columns.length >= 15) {
                        this.$toasted.error(this.$t('global.max_num_allowed', {attribute: 15}), this.$toastConfig.error)
                    } else {
                        if(column.thClass && column.tdClass) {
                            column.thClass = column.thClass.replace('d-none', '')
                            column.tdClass = column.tdClass.replace('d-none', '')
                        }
                    }
                }
                this.SetColumns(this.columns.fields)

            },
            uncheckAllColumn() {
                this.columns.fields.objForEach(field => {
                    if(!field.cantHide && !field.thClass.includes('d-none')) {
                        field.thClass = field.thClass + ' d-none'
                        field.tdClass = field.thClass + ' d-none'
                    }
                })
                this.SetColumns(this.columns.fields)
            },
            toggleHelp() {
                if(this.$route.name) {
                    EventBus.$emit('TOGGLE_HELP', this.$route.name)
                }
            },
            toSnakeCase(from) {
                return from.replace(/([A-Z])/g, function($1){return "_"+$1.toLowerCase();});
            }
        },
        created: function() {
            EventBus.$off('OPEN_PRINT', this.handleOpenPrint)
            EventBus.$on('OPEN_PRINT', this.handleOpenPrint)
        },
        destroyed() {
            EventBus.$off('OPEN_PRINT', this.handleOpenPrint)
        }
    }
</script>

<style lang="scss" scoped>
    @import '~@js/core/assets/scss/imports.scss';

    .dropdown-menu .dropdown-item {
        & > i {
            min-width: 18px;
            margin-right: 0.5rem;
            text-align: center;
        }
    }

    .action-buttons {
        .btn:last-child {
            margin-right: 0;
        }
        .dropdown:last-child > .btn{
            margin-right: 0;
        }
    }

    .columns-list-wrapper {
        max-height: 300px;
        overflow: hidden;
        height: 300px;
    }

    [data-hide-secure-content="true"] {
        .dropdown-menu .dropdown-item {
            &.secure-content {
                display: none !important;
            }
        }
    }
</style>
