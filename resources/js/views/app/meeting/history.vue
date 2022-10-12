<template>
    <div class="entity-list-container">
        <collapse-transition :group="true" :duration="300" tag="div">
            <filter-form v-if="showFilters" @close="toggleFilter" key="filters" :boxed="true" :pre-requisite="preRequisite" :is-loading="isLoading" />

            <base-container boxed with-loader :is-loading="isLoading" :loader-color="vars.loaderColor" class="p-0  zoom-print-85" key="list">

                <table-wrapper v-if="isInitialized" :meta="entities.meta" :filtered="isFiltered" add-button-route="appMeetingAdd" :add-button-permissions="['create-meeting']" entity-title="meeting.meeting" entities-title="meeting.meetings" entity-description="meeting.module_description">

                    <b-table v-show="entities.meta.total" ref="btable" :items="itemsProvider" :fields="fields" :busy.sync="isLoading" hover striped stacked="sm" :per-page.number="entities.meta.perPage" :current-page="entities.meta.currentPage" :filters="null">

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

                        <template #cell(type)="row">
                            <badge v-if="row.item.type" type="default" class="mb-0">{{ row.item.type.name }}</badge>
                        </template>

                        <template #cell(status)="row">
                            <badge v-if="row.item.status" rounded :type="vars.colorsForStatus['meeting-'+row.item.status]">{{ row.item.status }}</badge>
                        </template>

                        <template #cell(accessibleViaLink)="row">
                            <span v-if="row.item.accessibleViaLink" class="text-success" v-b-tooltip.hover.left :title="$t('meeting.props.accessible_via_link')"><i class="fas fa-link"></i></span>
                            <span v-else class="text-light" v-b-tooltip.hover.left :title="$t('meeting.props.not_accessible_via_link')"><i class="fas fa-link"></i></span>

                            <span v-if="row.item.isPam" class="ml-3 text-success" v-b-tooltip.hover.left :title="$t('meeting.props.is_pam')"><i class="fas fa-users"></i></span>
                            <span v-else class="ml-3 text-light" v-b-tooltip.hover.left :title="$t('meeting.props.not_is_pam')"><i class="fas fa-users"></i></span>

                            <template v-if="allowExtraInput && configs.membership.enabled">
                                <span v-if="row.item.accessibleToMembers" class="ml-3 text-success" v-b-tooltip.hover.left :title="$t('meeting.props.only_accessible_to_members')"><i class="far fa-id-badge"></i></span>
                                <span v-else class="ml-3 text-light" v-b-tooltip.hover.left :title="$t('meeting.props.not_only_accessible_to_members')"><i class="far fa-id-badge"></i></span>
                            </template>
                        </template>

                        <template #cell(actions)="row">
                            <table-row-actions>
                                <router-link v-if="row.item.hasSnapshots && configs.meeting && configs.meeting.enableSnapshot" class="dropdown-item" :to="{ name: 'appMeetingSnapshots', params: { uuid: row.item.uuid } }"><i class="fas fa-image"></i> {{ $t('global.view', { attribute: $t('meeting.snapshots')}) }}</router-link>

                                <router-link v-if="(row.item.hasChunkRecordings || row.item.hasRecordings) && configs.meeting && configs.meeting.enableRecording" class="dropdown-item" :to="{ name: 'appMeetingRecordings', params: { uuid: row.item.uuid } }"><i class="fas fa-photo-video"></i> {{ $t('global.view', { attribute: $t('meeting.recordings')}) }}</router-link>

                                <router-link v-if="row.item.status === 'live'" class="dropdown-item" :to="{ name: 'liveMeeting', params: { uuid: row.item.uuid } }"><i class="fas fa-sign-in-alt"></i> {{ $t('meeting.join_meeting') }}</router-link>

                                <a v-if="row.item.status === 'live'" class="dropdown-item" @click.stop="shareURL(row.item)"><i class="fas fa-share-alt"></i> {{ $t('general.share_url') }}</a>

                                <router-link v-if="row.item.status === 'live' && hasPermission('list-meeting') && row.item.canModerate" class="dropdown-item" :to="{ name: 'appMeetingSingleConfig', params: { subUuid: row.item.uuid } }"><i class="fas fa-cog"></i> {{ $t('global.config', { attribute: $t('meeting.meeting')}) }}</router-link>

                                <a v-if="hasPermission('delete-meeting') && ((row.item.status === 'cancelled' && configs.meeting && configs.meeting.allowDeletingCancelledMeetings) || (row.item.status === 'ended' && configs.meeting && configs.meeting.allowDeletingEndedMeetings) )" class="dropdown-item" @click.stop="deleteEntity(row.item)"><i class="fas fa-trash"></i> {{ $t('global.delete', { attribute: $t('meeting.meeting')}) }}</a>
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
    import { share } from '@core/utils/media'

    export default {
        components: {
            FilterForm,
        },
        extends: table,
        data() {
            return {
                fields: [
                    {
                        key: 'user',
                        label: $t('meeting.host'),
                    },
                    {
                        key: 'type',
                        label: $t('meeting.props.type'),
                        transformer: 'objectWithName'
                    },
                    {
                        key: 'identifier',
                        label: $t('meeting.props.identifier'),
                    },
                    {
                        key: 'accessibleViaLink',
                        label: '',
                        headerTitle: $t('meeting.meeting_attributes'),
                        tdClass: 'text-center'
                    },
                    {
                        key: 'status',
                        label: $t('meeting.props.status'),
                    },
                    {
                        key: 'startDateTime',
                        label: $t('meeting.started_at'),
                        sort: 'start_date_time',
                        transformer: 'datetime',
                    },
                    {
                        key: 'endedAt',
                        label: $t('meeting.ended_at'),
                        transformer: 'datetime',
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
                    autoTranslates: [],
                    statuses: [],
                },
                filtersOptions: {
                    type: '',
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
                    config: 'access-meeting-config',
                },
                routesRequired: {
                    config: 'appMeetingConfigGeneral',
                },
                initUrl: 'meetings',
                appendToQuery: {
                    instant: true,
                },
                dataType: 'meeting',
            }
        },
        methods: {
            sameDate({startDateTime, endDateTime}) {
                return moment(startDateTime, this.vars.serverDateTimeFormat).format(this.vars.defaultDateFormat) === moment(endDateTime, this.vars.serverDateTimeFormat).format(this.vars.defaultDateFormat)
            },
            shareURL(item) {
                let url = window.location.protocol+'//'+window.location.hostname+(window.location.port ? ':'+window.location.port: '')

                url = url + (item.identifier ? `/m/${item.identifier}` : `/app/live/meetings/${item.uuid}`)

                const alertTitle = item.identifier ? `<span class="text-nowrap">${$t('meeting.meeting_code')}:</span> <strong class="ml-2 text-wrap-pre-line text-word-break-all"> ${item.identifier}</strong>` : null

                share({
                    title: $t('meeting.user_inviting_msg', {attribute: this.profile ? this.profile.name : 'User' }),
                    alertTitle: alertTitle,
                    alertHtml:
                        `${$t('misc.share_alert.text')}<br>` +
                        `<small class='text-muted'>${url}</small><br>`,
                    url: url
                }, () => {
                    this.$toasted.success($t('meeting.url_has_been_copied'), this.$toastConfig)
                })
            },
        },
        mounted() {
            this.getInitialData()
        },
    }

</script>
