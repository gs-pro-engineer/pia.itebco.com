<template>
    <div class="entity-list-container">
        <collapse-transition :group="true" :duration="300" tag="div">
            <filter-form v-if="showFilters" @close="toggleFilter" key="filters" :boxed="true" :pre-requisite="preRequisite" :is-loading="isLoading" />

            <base-container boxed with-loader :is-loading="isLoading" :loader-color="vars.loaderColor" class="p-0" key="list">

                <table-wrapper v-if="isInitialized" :meta="entities.meta" :filtered="isFiltered" entity-title="site.query.query" entities-title="site.query.queries" entity-description="site.query.module_description">

                    <b-table v-show="entities.meta.total" ref="btable" :items="itemsProvider" :fields="fields" :busy.sync="isLoading" hover striped stacked="sm" :per-page="entities.meta.perPage" :current-page="entities.meta.currentPage" :filters="null" @row-dblclicked="rowClickHandler({route: 'appSiteQueryView'}, $event)">

                        <template #cell(name)="row">
                            <router-link class="row-link" :to="{ name: 'appSiteQueryView', params: { uuid: row.item.uuid } }">
                                {{ row.item.name }}
                            </router-link>
                        </template>

                        <template #cell(createdAt)="row">
                            <view-date :value="row.item.createdAt" with-tz tag="span" class="mb-0" />
                        </template>

                        <template #cell(updatedAt)="row">
                            <view-date :value="row.item.updatedAt" with-tz tag="span" class="mb-0" />
                        </template>

                        <template #cell(actions)="row">
                            <table-row-actions>
                                <router-link class="dropdown-item" :to="{ name: 'appSiteQueryView', params: { uuid: row.item.uuid } }"><i class="fas fa-arrow-circle-right"></i> {{ $t('global.view', { attribute: $t('site.query.query')}) }}</router-link>

                                <a v-if="hasPermission('delete-query')" class="dropdown-item" @click.stop="deleteEntity(row.item)"><i class="fas fa-trash"></i> {{ $t('global.delete', { attribute: $t('site.query.query')}) }}</a>
                            </table-row-actions>
                        </template>

                    </b-table>
                </table-wrapper>
            </base-container>
        </collapse-transition>
    </div>
</template>

<script>
    import table from '@mixins/table'
    import FilterForm from './filter'

    export default {
        components: {
            FilterForm,
        },
        extends: table,
        data() {
            return {
                fields: [
                    {
                        key: 'name',
                        label: $t('site.query.props.name'),
                        sort: 'name',
                    },
                    {
                        key: 'email',
                        label: $t('site.query.props.email'),
                    },
                    {
                        key: 'contactNumber',
                        label: $t('site.query.props.contact_number'),
                    },
                    {
                        key: 'subject',
                        label: $t('site.query.props.subject'),
                        tdClass: 'td-ellipsis max-width-100',
                        transformer: 'limitWords',
                    },
                    {
                        key: 'createdAt',
                        label: $t('general.submitted_at'),
                        sort: 'created_at',
                        transformer: 'date',
                    },
                    {
                        key: 'updatedAt',
                        label: $t('general.updated_at'),
                        sort: 'updated_at',
                        transformer: 'date',
                        thClass: 'd-none',
                        tdClass: 'd-none',
                    },
                    {
                        key: 'actions',
                        label: '',
                        cantHide: true,
                        tdClass: 'actions-dropdown-wrapper'
                    },
                ],
                filtersOptions: {
                    keyword: '',
                    email: '',
                    contactNumber: '',
                },
                sortOptions: {
                    hasScroll: true,
                },
                columnsOptions: {
                    hasScroll: true,
                },
                initUrl: 'site/queries',
                dataType: 'query',
            }
        },
        mounted() {
            this.updatePageMeta()
        },
    }

</script>
