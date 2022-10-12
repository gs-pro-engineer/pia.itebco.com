<template>
    <div class="entity-list-container">
        <collapse-transition :group="true" :duration="300" tag="div">
            <filter-form v-if="showFilters" @close="toggleFilter" key="filters" :boxed="true" :pre-requisite="preRequisite" :is-loading="isLoading" />

            <base-container boxed with-loader :is-loading="isLoading" :loader-color="vars.loaderColor" class="p-0" key="list">

                <table-wrapper v-if="isInitialized" :meta="entities.meta" :filtered="isFiltered" entity-title="site.subscriber.subscriber" entities-title="site.subscriber.subscribers" entity-description="site.subscriber.module_description">

                    <b-table v-show="entities.meta.total" ref="btable" :items="itemsProvider" :fields="fields" :busy.sync="isLoading" hover striped stacked="sm" :per-page="entities.meta.perPage" :current-page="entities.meta.currentPage" :filters="null">

                        <template #cell(createdAt)="row">
                            <view-date :value="row.item.createdAt" with-tz tag="span" class="mb-0" />
                        </template>

                        <template #cell(updatedAt)="row">
                            <view-date :value="row.item.updatedAt" with-tz tag="span" class="mb-0" />
                        </template>

                        <template #cell(unsubscribedAt)="row">
                            <view-date :value="row.item.unsubscribedAt" with-tz tag="span" class="mb-0" />
                        </template>

                        <template #cell(isSubscribed)="row">
                            <badge v-if="row.value" rounded type="success"><i class="fas fa-circle"></i> {{ $t('general.yes') }}</badge>
                            <badge v-else rounded type="dark"><i class="far fa-circle"></i> {{ $t('general.no') }}</badge>
                        </template>

                        <template #cell(actions)="row">
                            <table-row-actions>
                                <a v-if="hasPermission('delete-subscriber')" class="dropdown-item" @click.stop="deleteEntity(row.item)"><i class="fas fa-trash"></i> {{ $t('global.delete', { attribute: $t('site.subscriber.subscriber')}) }}</a>
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
                        key: 'email',
                        label: $t('site.subscriber.props.email'),
                    },
                    {
                        key: 'createdAt',
                        label: $t('site.subscriber.props.subscribed_at'),
                        sort: 'created_at',
                        transformer: 'date',
                    },
                    {
                        key: 'isSubscribed',
                        label: $t('site.subscriber.props.is_subscribed'),
                        transformer: 'badgeStatusCompleted',
                        formatter: (value, key, item) => {
                            return item.unsubscribedAt ? false : true
                        },
                    },
                    {
                        key: 'unsubscribedAt',
                        label: $t('site.subscriber.props.unsubscribed_at'),
                        sort: 'unsubscribed_at',
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
                    email: '',
                },
                initUrl: 'site/subscribers',
                dataType: 'subscriber',
            }
        },
        mounted() {
            this.updatePageMeta()
        },
    }

</script>
