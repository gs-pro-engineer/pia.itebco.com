<template>
    <div class="entity-list-container">
        <collapse-transition :group="true" :duration="300" tag="div">
            <filter-form v-if="showFilters" @close="toggleFilter" key="filters" :boxed="true" :pre-requisite="preRequisite" :is-loading="isLoading" />

            <base-container boxed with-loader :is-loading="isLoading" :loader-color="vars.loaderColor" class="p-0" key="list">

                <table-wrapper v-if="isInitialized" :meta="entities.meta" :filtered="isFiltered" add-button-route="appSitePageAdd" :add-button-permissions="['access-page']" entity-title="site.page.page" entities-title="site.page.pages" entity-description="site.page.module_description">

                    <b-table v-show="entities.meta.total" ref="btable" :items="itemsProvider" :fields="fields" :busy.sync="isLoading" hover striped stacked="sm" :per-page="entities.meta.perPage" :current-page="entities.meta.currentPage" :filters="null">

                        <template #cell(createdAt)="row">
                            <view-date :value="row.item.createdAt" :to-format="vars.defaultDateTimeFormat" tag="span" class="mb-0" />
                        </template>

                        <template #cell(status)="row">
                            <badge v-if="row.item.status" rounded type="primary"><i class="far fa-check-circle"></i> {{ $t('general.yes') }}</badge>
                            <badge v-else rounded type="dark"><i class="far fa-circle"></i> {{ $t('general.no') }}</badge>
                        </template>

                        <template #cell(actions)="row">
                            <table-row-actions>
                                <a class="dropdown-item" :href="`/pages/${row.item.slug}`" target="_blank"><i class="fas fa-arrow-circle-right"></i> {{ $t('global.view', { attribute: $t('site.page.page')}) }}</a>

                                <router-link class="dropdown-item" :to="{ name: 'appSitePageEdit', params: { uuid: row.item.uuid } }"><i class="fas fa-edit"></i> {{ $t('global.edit', { attribute: $t('site.page.page')}) }}</router-link>

                                <router-link class="dropdown-item" :to="{ name: 'appSitePageDuplicate', params: { uuid: row.item.uuid } }"><i class="fas fa-copy"></i> {{ $t('global.duplicate', { attribute: $t('site.page.page')}) }}</router-link>

                                <a class="dropdown-item" @click.stop="deleteEntity(row.item)"><i class="fas fa-trash"></i> {{ $t('global.delete', { attribute: $t('site.page.page')}) }}</a>
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
                        key: 'title',
                        label: $t('site.page.props.title'),
                        sort: 'title',
                    },
                    {
                        key: 'template.name',
                        label: $t('site.page_template.template'),
                    },
                    {
                        key: 'parent.title',
                        label: $t('site.page.props.parent'),
                        thClass: 'd-none',
                        tdClass: 'd-none',
                    },
                    {
                        key: 'slug',
                        label: $t('site.page.props.slug'),
                        thClass: 'd-none',
                        tdClass: 'd-none',
                    },
                    {
                        key: 'status',
                        label: $t('site.is_published'),
                        sort: 'status',
                        transformer: 'badgeStatusYesNo',
                    },
                    {
                        key: 'createdAt',
                        label: $t('general.created_at'),
                        sort: 'created_at',
                        transformer: 'date',
                        thClass: 'd-none',
                        tdClass: 'd-none',
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
                    title: '',
                    code: '',
                    status: '',
                },
                permissionsRequired: {
                    add: 'access-page',
                    config: 'access-page-config',
                },
                routesRequired: {
                    add: 'appSitePageAdd',
                    config: 'appSitePageConfigTemplate',
                },
                initUrl: 'site/pages',
                dataType: 'page',
            }
        },
        mounted() {
            this.updatePageMeta()
        },
    }

</script>
