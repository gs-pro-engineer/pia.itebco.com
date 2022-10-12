<template>
    <div class="entity-list-container">
        <collapse-transition :group="true" :duration="300" tag="div">
            <filter-form v-if="showFilters" @close="toggleFilter" key="filters" :boxed="true" :pre-requisite="preRequisite" :is-loading="isLoading" />
            
            <base-container boxed with-loader :is-loading="isLoading" :loader-color="vars.loaderColor" class="p-0  zoom-print-85" key="list">

                <table-wrapper v-if="isInitialized" :meta="entities.meta" :filtered="isFiltered" add-button-route="appRoomAdd" :add-button-permissions="['create-meeting']" entity-title="room.room" entities-title="room.rooms" entity-description="meeting.module_description">

                    <b-table v-show="entities.meta.total" ref="btable" :items="itemsProvider" :fields="fields" :busy.sync="isLoading" hover striped stacked="sm" :per-page.number="entities.meta.perPage" :current-page="entities.meta.currentPage" :filters="null" @row-dblclicked="rowClickHandler({route: 'appRoomView'}, $event)">

                        <template #cell(title)="row">
                            <router-link class="row-link" :to="{ name: 'appRoomView', params: { uuid: row.item.uuid } }">
                                {{ row.item.title }}
                            </router-link>
                        </template>

                        <template #cell(user)="row">
                            <view-user :value="row.item.user" inline-sub :show-image="false" class="m-0" data-classes="m-0" />
                        </template>

                        <template #cell(createdAt)="row">
                            <view-date :value="row.item.createdAt" with-tz tag="span" class="mb-0" />
                        </template>

                        <template #cell(updatedAt)="row">
                            <view-date :value="row.item.updatedAt" with-tz tag="span" class="mb-0" />
                        </template>

                        <template #cell(startDateTime)="row">
                            <view-date :value="row.item.startDateTime" with-tz tag="span" class="mb-0" />
                        </template>

                        <template #cell(endedAt)="row">
                            <view-date :value="row.item.endedAt" with-tz tag="span" class="mb-0" />
                        </template>

                        <template #cell(period)="row">
                            <view-single :value="row.item.period" tag="span" class="mb-0" />
                        </template>

                        <template #cell(type)="row">
                            <badge v-if="row.item.type" type="default" class="mb-0">{{ row.item.type.name }}</badge>
                        </template>

                        <template #cell(category)="row">
                            <badge v-if="row.item.category" type="dark" class="mb-0">{{ row.item.category.name }}</badge>
                        </template>

                        <template #cell(status)="row">
                            <badge v-if="row.item.status" rounded :type="vars.colorsForStatus['meeting-'+row.item.status]">{{ row.item.status }}</badge>
                        </template>

                        <template #cell(actions)="row">
                            <table-row-actions>

                                <router-link class="dropdown-item" :to="{ name: 'appRoomView', params: { uuid: row.item.uuid } }"><i class="fas fa-arrow-circle-right"></i> {{ $t('global.view', { attribute: $t('room.room')}) }}</router-link>

                                <router-link v-if="row.item.status === 'scheduled' || row.item.status === 'live'" class="dropdown-item bg-primary text-white" :to="{ name: 'liveMeeting', params: { uuid: row.item.uuid } }"><i class="fas fa-sign-in-alt"></i> {{ $t('meeting.join_meeting') }}</router-link>

                                <router-link v-if="row.item.status === 'scheduled' && (hasPermission('create-meeting') || row.item.canModerate)" class="dropdown-item" :to="{ name: 'appRoomEdit', params: { uuid: row.item.uuid } }"><i class="fas fa-edit"></i> {{ $t('global.edit', { attribute: $t('room.room')}) }}</router-link>

                                <router-link v-if="hasPermission('create-meeting')" class="dropdown-item" :to="{ name: 'appRoomDuplicate', params: { uuid: row.item.uuid } }"><i class="fas fa-copy"></i> {{ $t('global.duplicate', { attribute: $t('room.room')}) }}</router-link>

                                <router-link v-if="row.item.status === 'scheduled' && (hasPermission('list-meeting') && row.item.canModerate)" class="dropdown-item" :to="{ name: 'appRoomSingleConfig', params: { subUuid: row.item.uuid } }"><i class="fas fa-cog"></i> {{ $t('global.config', { attribute: $t('room.room')}) }}</router-link>

                                <a v-if="hasPermission('delete-meeting') && (row.item.status === 'scheduled' || (row.item.status === 'cancelled' && configs.meeting && configs.meeting.allowDeletingCancelledMeetings) || (row.item.status === 'ended' && configs.meeting && configs.meeting.allowDeletingEndedMeetings) )" class="dropdown-item" @click.stop="deleteEntity(row.item)"><i class="fas fa-trash"></i> {{ $t('global.delete', { attribute: $t('room.room')}) }}</a>
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
    import { getRegion, getCurrencyDescription } from '@js/helpers/transformers'

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
                        label: $t('meeting.props.title'),
                        sort: 'title',
                        transformer: 'limitWords',
                        tdClass: 'td-ellipsis max-width-250px',
                    },
                    {
                        key: 'user',
                        label: $t('meeting.host'),
                    },
                    {
                        key: 'agenda',
                        label: $t('meeting.props.agenda'),
                        transformer: 'limitWords',
                        tdClass: 'd-none td-ellipsis max-width-100px',
                        thClass: 'd-none',
                    },
                    {
                        key: 'type',
                        label: $t('meeting.props.type'),
                        transformer: 'objectWithName'
                    },
                    {
                        key: 'category',
                        label: $t('room.room_category.category'),
                        transformer: 'objectWithName'
                    },
                    {
                        key: 'status',
                        label: $t('meeting.props.status'),
                    },
                    {
                        key: 'startDateTime',
                        label: $t('meeting.props.scheduled_on'),
                        sort: 'start_date_time',
                        transformer: 'datetime',
                    },
                    {
                        key: 'endedAt',
                        label: $t('meeting.ended_at'),
                        transformer: 'datetime',
                        thClass: 'd-none',
                        tdClass: 'd-none',
                    },
                    {
                        key: 'period',
                        label: $t('meeting.props.estimated_period'),
                        thClass: 'd-none',
                        tdClass: 'd-none',
                    },
                    {
                        key: 'createdAt',
                        label: $t('general.created_at'),
                        sort: 'created_at',
                        transformer: 'datetime',
                        thClass: 'd-none',
                        tdClass: 'd-none',
                    },
                    {
                        key: 'updatedAt',
                        label: $t('general.updated_at'),
                        sort: 'updated_at',
                        transformer: 'datetime',
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
                preRequisite: {
                    types: [],
                    categories: [],
                    statuses: [],
                },
                filtersOptions: {
                    keyword: '',
                    type: '',
                    category: '',
                    status: '',
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
                permissionsRequired: {
                    add: 'create-meeting',
                },
                routesRequired: {
                    add: 'appRoomAdd',
                },
                initUrl: 'meetings',
                appendToQuery: {
                    room: true,
                },
                dataType: 'meeting',
            }
        },
        methods: {
        },
        mounted() {
            this.getInitialData()
        },
    }

</script>
