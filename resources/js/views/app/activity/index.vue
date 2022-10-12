<template>
    <div class="entity-list-container">
        <collapse-transition :group="true" :duration="300" tag="div">
            <filter-form v-if="showFilters" @close="toggleFilter" key="filters" :boxed="true" />

            <base-container boxed with-loader :is-loading="isLoading" :loader-color="vars.loaderColor" class="p-0" key="list">

                <table-wrapper v-if="isInitialized" :meta="entities.meta" :filtered="isFiltered" entity-title="activity.activity" entities-title="activity.activities" entity-description="activity.module_description">

                    <b-table v-show="entities.meta.total" ref="btable" :items="itemsProvider" :fields="fields" :busy.sync="isLoading" hover striped stacked="sm" :per-page="entities.meta.perPage" :current-page="entities.meta.currentPage" :filters="null">

                        <template #cell(createdAt)="row">
                            <view-date :value="row.item.createdAt" with-tz tag="span" class="mb-0" />
                        </template>

                        <template #cell(causer)="row">
                            <view-user v-if="row.item.causer" :value="row.item.causer" :show-sub="false" inline-sub :show-image="false" class="m-0" data-classes="m-0" />
                            <span v-else class="text-muted">-</span>
                        </template>

                        <template #cell(ip)="row">
                            <span v-if="row.item.properties && row.item.properties.ip">{{ row.item.properties.ip }}</span>
                            <span v-else class="text-muted">-</span>
                        </template>

                        <template #cell(browser)="row">
                            <span v-if="row.item.properties && row.item.properties.userAgent">{{ getAgent(row.item.properties.userAgent, 'browser', true) }}</span>
                            <span v-else class="text-muted">-</span>
                        </template>

                        <template #cell(os)="row">
                            <span v-if="row.item.properties && row.item.properties.userAgent">{{ getAgent(row.item.properties.userAgent, 'os', true) }}</span>
                            <span v-else class="text-muted">-</span>
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
    import { UAParser } from 'ua-parser-js'

    export default {
        components: {
            FilterForm,
        },
        extends: table,
        data() {
            return {
                fields: [
                    //date time, user, log name, action
                    {
                        key: 'createdAt',
                        label: $t('activity.props.created_at'),
                        sort: 'created_at',
                    },
                    {
                        key: 'causer',
                        label: $t('user.user'),
                    },
                    {
                        key: 'description',
                        label: $t('activity.props.description'),
                    },
                    {
                        key: 'ip',
                        label: $t('activity.props.ip'),
                    },
                    {
                        key: 'browser',
                        label: $t('activity.props.browser'),
                    },
                    {
                        key: 'os',
                        label: $t('activity.props.os'),
                    },
                ],
                filtersOptions: {
                    startDate: '',
                    endDate: '',
                },
                sortOptions: {
                    hasScroll: true,
                },
                columnsOptions: {
                    hasScroll: true,
                },
                exportOptions: {
                    orientation: 'l',
                },
                initUrl: 'activities',
                dataType: 'activity',
            }
        },
        methods: {
            getAgent(agentString, key, asString = false) {
                let parserObj = new UAParser(agentString)
                parserObj = parserObj.getResult()
                return asString ? `${parserObj[key]['name']} (${parserObj[key]['version']})` : parserObj[key]
            },
        },
        mounted() {
            this.updatePageMeta()
        },
    }

</script>
