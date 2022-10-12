<template>
    <div class="entity-list-container">
        <base-container boxed with-loader :is-loading="isLoading" :loader-color="vars.loaderColor" class="p-0" key="list">

            <table-wrapper v-if="isInitialized" :meta="entities.meta" :filtered="isFiltered" entity-title="membership.membership" entities-title="membership.membership_history" entity-description="membership.module_description">

                <b-table v-show="entities.meta.total" ref="btable" :items="itemsProvider" :fields="fields" :busy.sync="isLoading" hover striped stacked="sm" :per-page.number="entities.meta.perPage" :current-page="entities.meta.currentPage" :filters="null">

                    <template #cell(createdAt)="row">
                        <view-date :value="row.item.createdAt" with-tz tag="span" class="mb-0" />
                    </template>

                    <template #cell(updatedAt)="row">
                        <view-date :value="row.item.updatedAt" with-tz tag="span" class="mb-0" />
                    </template>

                    <template #cell(number)="row">
                        <span v-if="hasRole('admin')">{{ row.item.user.profile.name }} <span class="text-muted text-sm">({{ row.item.user.username }})</span> - <span class="">{{ row.item.number }}</span></span>
                        <span v-else>{{ row.item.number }}</span>
                    </template>

                    <template #cell(expiryDate)="row">
                        <view-date :value="row.item.expiryDate" tag="span" class="mb-0" />
                    </template>

                    <template #cell(paymentGateway)="row">
                        <badge v-if="row.item.paymentGateway" rounded :type="vars.colorsForStatus[row.item.paymentGateway.source]">{{ row.item.paymentGateway.source }}</badge>
                    </template>

                    <template #cell(amount)="row">
                        <view-currency :value="row.item.amount" :currency="row.item.currency" tag="span" class="mb-0" data-classes="text-success" />
                    </template>

                    <template #cell(actions)="row">
                        <table-row-actions>
                            <router-link class="dropdown-item" :to="{ name: 'appMembershipPrint', params: { uuid: row.item.uuid } }"><i class="fas fa-print"></i> {{ $t('global.print', { attribute: $t('membership.membership')}) }}</router-link>
                        </table-row-actions>
                    </template>

                </b-table>
            </table-wrapper>
        </base-container>
    </div>
</template>

<script>
    import table from '@mixins/table'

    export default {
        extends: table,
        data() {
            return {
                fields: [
                    {
                        key: 'number',
                        label: $t('membership.props.invoice_number'),
                        sort: 'number',
                    },
                    {
                        key: 'createdAt',
                        label: $t('membership.props.subscribed_at'),
                        sort: 'created_at',
                        transformer: 'date',
                    },
                    {
                        key: 'amount',
                        label: $t('membership.props.amount'),
                    },
                    {
                        key: 'paymentGateway',
                        label: $t('membership.props.method'),
                    },
                    {
                        key: 'expiryDate',
                        label: $t('membership.props.expiry_date'),
                        sort: 'expiry_date',
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
                sortOptions: {
                    hasScroll: true,
                },
                columnsOptions: {
                    hasScroll: true,
                },
                initUrl: 'membership',
                hideFilterButton: true,
            }
        },
        mounted() {
            this.updatePageMeta()
        },
    }

</script>
