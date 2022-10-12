<template>
    <div class="entity-list-container">
        <collapse-transition :group="true" :duration="300" tag="div">
            <filter-form v-if="showFilters" @close="toggleFilter" key="filters" :boxed="true" :pre-requisite="preRequisite" :is-loading="isLoading" />
            
            <base-container boxed with-loader :is-loading="isLoading" :loader-color="vars.loaderColor" class="p-0" key="list">

                <table-wrapper v-if="isInitialized" :meta="entities.meta" :filtered="isFiltered" add-button-route="appSegmentAdd" :add-button-permissions="['access-contact']" entity-title="contact.segment.segment" entities-title="contact.segment.segments" entity-description="segment.module_description">

                    <b-table v-show="entities.meta.total" ref="btable" :items="itemsProvider" :fields="fields" :busy.sync="isLoading" hover striped stacked="sm" :per-page.number="entities.meta.perPage" :current-page="entities.meta.currentPage" :filters="null">

                        <template #cell(createdAt)="row">
                            <view-date :value="row.item.createdAt" with-tz tag="span" class="mb-0" />
                        </template>

                        <template #cell(updatedAt)="row">
                            <view-date :value="row.item.updatedAt" with-tz tag="span" class="mb-0" />
                        </template>

                        <template #cell(actions)="row">
                            <table-row-actions>
                                <router-link v-if="hasPermission('access-contact')" class="dropdown-item" :to="{ name: 'appSegmentEdit', params: { uuid: row.item.uuid } }"><i class="fas fa-edit"></i> {{ $t('global.edit', { attribute: $t('contact.segment.segment')}) }}</router-link>

                                <a v-if="hasPermission('access-contact')" class="dropdown-item" @click.stop="deleteEntity(row.item)"><i class="fas fa-trash"></i> {{ $t('global.delete', { attribute: $t('contact.segment.segment')}) }}</a>
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
                        label: $t('contact.segment.props.name'),
                        sort: 'name',
                    },
                    {
                        key: 'description',
                        label: $t('contact.segment.props.description'),
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
                    name: '',
                },
                permissionsRequired: 'access-contact',
                routesRequired: {
                    add: 'appSegmentAdd',
                },
                initUrl: 'segments',
                dataType: 'segment',
            }
        },
        mounted() {
            this.updatePageMeta()
        },
    }

</script>
