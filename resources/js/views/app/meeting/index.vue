<template>
    <div class="entity-list-container">
        <collapse-transition :group="true" :duration="300" tag="div">
            <filter-form v-if="showFilters" @close="toggleFilter" key="filters" :boxed="true" :pre-requisite="preRequisite" :is-loading="isLoading" />

            <base-container boxed with-loader :is-loading="isLoading" :loader-color="vars.loaderColor" class="p-0  zoom-print-85" key="list">

                <table-wrapper v-if="isInitialized" :meta="entities.meta" :filtered="isFiltered" add-button-route="appMeetingAdd" :add-button-permissions="['create-meeting']" entity-title="meeting.meeting" entities-title="meeting.meetings" entity-description="meeting.module_description">

                    <b-table v-show="entities.meta.total" ref="btable" :items="itemsProvider" :fields="fields" :busy.sync="isLoading" hover striped stacked="sm" :per-page.number="entities.meta.perPage" :current-page="entities.meta.currentPage" :filters="null" @row-dblclicked="rowClickHandler({route: 'appMeetingView'}, $event)">

                        <template #cell(title)="row">
                            <router-link class="row-link" :to="{ name: 'appMeetingView', params: { uuid: row.item.uuid } }">
                                {{ row.item.title }}
                            </router-link>
                        </template>

                        <template #cell(user)="row">
                            <view-user :value="row.item.user" inline-sub :show-image="false" class="m-0" data-classes="m-0" />
                        </template>

                        <template #cell(createdAt)="row">
                            <view-date :value="row.item.createdAt" with-tz tag="span" class="mb-0" data-classes="text-sm" />
                        </template>

                        <template #cell(updatedAt)="row">
                            <view-date :value="row.item.updatedAt" with-tz tag="span" class="mb-0" data-classes="text-sm" />
                        </template>

                        <template #cell(startDateTime)="row">
                            <view-date :value="row.item.startDateTime" with-tz tag="span" class="mb-0" data-classes="text-sm" />
                        </template>

                        <template #cell(endedAt)="row">
                            <view-date :value="row.item.endedAt" with-tz tag="span" class="mb-0" data-classes="text-sm" />
                        </template>

                        <template #cell(period)="row">
                            <view-single :value="row.item.period" tag="span" class="mb-0" data-classes="text-sm" />
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

                        <template #cell(accessibleViaLink)="row">
                            <span v-if="row.item.accessibleViaLink" class="text-success" v-b-tooltip.hover.left :title="$t('meeting.props.accessible_via_link')"><i class="fas fa-link"></i></span>
                            <span v-else class="text-light" v-b-tooltip.hover.left :title="$t('meeting.props.not_accessible_via_link')"><i class="fas fa-link"></i></span>

                            <span v-if="row.item.isPam" class="ml-3 text-success" v-b-tooltip.hover.left :title="$t('meeting.props.is_pam')"><i class="fas fa-users"></i></span>
                            <span v-else class="ml-3 text-light" v-b-tooltip.hover.left :title="$t('meeting.props.not_is_pam')"><i class="fas fa-users"></i></span>

                            <template v-if="allowExtraInput && configs.meeting.enablePaidMeeting">
                                <span v-if="row.item.isPaid" class="ml-3 text-success" v-b-tooltip.hover.left :title="$t('meeting.props.is_paid')"><i class="fas fa-dollar-sign"></i></span>
                                <span v-else class="ml-3 text-light" v-b-tooltip.hover.left :title="$t('meeting.props.not_is_paid')"><i class="fas fa-dollar-sign"></i></span>
                            </template>

                            <template v-if="allowExtraInput && configs.membership.enabled">
                                <span v-if="row.item.accessibleToMembers" class="ml-3 text-success" v-b-tooltip.hover.left :title="$t('meeting.props.only_accessible_to_members')"><i class="far fa-id-badge"></i></span>
                                <span v-else class="ml-3 text-light" v-b-tooltip.hover.left :title="$t('meeting.props.not_only_accessible_to_members')"><i class="far fa-id-badge"></i></span>
                            </template>
                        </template>

                        <!-- <template #cell(accessibleViaLink)="row">
                            <badge rounded type="dark" class="popover-link" v-b-popover.hover.html="{title:$t('meeting.meeting_attributes'), content: getPopoverContent(row.item, 'custom', null, null, generateMeetingAttributesPopover)}"><i class="fas fa-info"></i></badge>
                        </template> -->

                        <template #cell(actions)="row">
                            <table-row-actions>

                                <router-link class="dropdown-item" :to="{ name: 'appMeetingView', params: { uuid: row.item.uuid } }"><i class="fas fa-arrow-circle-right"></i> {{ $t('global.view', { attribute: $t('meeting.meeting')}) }}</router-link>

                                <router-link v-if="row.item.isPaid && !row.item.hasPaid" class="dropdown-item" :to="{ name: 'appMeetingPayment', params: { uuid: row.item.uuid } }"><i class="far fa-credit-card"></i> {{ $t('meeting.payment.pay_fee') }}</router-link>

                                <router-link v-if="row.item.isPaid && row.item.hasPaid" class="dropdown-item" :to="{ name: 'appMeetingPaymentReceipt', params: { uuid: row.item.uuid } }"><i class="fas fa-receipt"></i> {{ $t('meeting.payment.receipt') }}</router-link>

                                <router-link v-if="row.item.hasSnapshots && configs.meeting && configs.meeting.enableSnapshot" class="dropdown-item" :to="{ name: 'appMeetingSnapshots', params: { uuid: row.item.uuid } }"><i class="fas fa-image"></i> {{ $t('global.view', { attribute: $t('meeting.snapshots')}) }}</router-link>

                                <router-link v-if="(row.item.hasChunkRecordings || row.item.hasRecordings) && configs.meeting && configs.meeting.enableRecording" class="dropdown-item" :to="{ name: 'appMeetingRecordings', params: { uuid: row.item.uuid } }"><i class="fas fa-photo-video"></i> {{ $t('global.view', { attribute: $t('meeting.recordings')}) }}</router-link>

                                <router-link v-if="row.item.status === 'scheduled' || row.item.status === 'live'" class="dropdown-item bg-primary text-white" :to="{ name: 'liveMeeting', params: { uuid: row.item.uuid } }"><i class="fas fa-sign-in-alt"></i> {{ $t('meeting.join_meeting') }}</router-link>

                                <a v-if="row.item.status === 'scheduled' || row.item.status === 'live'" class="dropdown-item" @click.stop="shareURL(row.item)"><i class="fas fa-share-alt"></i> {{ $t('general.share_url') }}</a>

                                <router-link v-if="row.item.status === 'scheduled' && (hasPermission('create-meeting') || row.item.canModerate)" class="dropdown-item" :to="{ name: 'appMeetingEdit', params: { uuid: row.item.uuid } }"><i class="fas fa-edit"></i> {{ $t('global.edit', { attribute: $t('meeting.meeting')}) }}</router-link>

                                <router-link v-if="hasPermission('create-meeting')" class="dropdown-item" :to="{ name: 'appMeetingDuplicate', params: { uuid: row.item.uuid } }"><i class="fas fa-copy"></i> {{ $t('global.duplicate', { attribute: $t('meeting.meeting')}) }}</router-link>

                                <router-link v-if="row.item.status === 'scheduled' && (hasPermission('list-meeting') && row.item.canModerate)" class="dropdown-item" :to="{ name: 'appMeetingSingleConfig', params: { subUuid: row.item.uuid } }"><i class="fas fa-cog"></i> {{ $t('global.config', { attribute: $t('meeting.meeting')}) }}</router-link>

                                <a v-if="hasPermission('delete-meeting') && (row.item.status === 'scheduled' || (row.item.status === 'cancelled' && configs.meeting && configs.meeting.allowDeletingCancelledMeetings) || (row.item.status === 'ended' && configs.meeting && configs.meeting.allowDeletingEndedMeetings) )" class="dropdown-item" @click.stop="deleteEntity(row.item)"><i class="fas fa-trash"></i> {{ $t('global.delete', { attribute: $t('meeting.meeting')}) }}</a>
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
                        label: $t('meeting.meeting_category.category'),
                        transformer: 'objectWithName'
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
                    autoTranslates: []
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
                    config: 'access-meeting-config',
                },
                routesRequired: {
                    add: 'appMeetingAdd',
                    config: 'appMeetingConfigGeneral',
                },
                initUrl: 'meetings',
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
            // generateMeetingAttributesPopover(rowItem) {
            //     let content = '<ul class="list-group pl-0">'
            //     if(rowItem.accessibleViaLink) {
            //         content += `<li class="list-group-item text-success"><i class="far fa-check-circle fs-1"></i> <span class="ml-2">${$t('meeting.props.accessible_via_link')}</span></li>`
            //     } else {
            //         content += `<li class="list-group-item text-muted"><i class="far fa-times-circle fs-1"></i> <span class="ml-2">${$t('meeting.props.accessible_via_link')}</span></li>`
            //     }

            //     if(rowItem.isPam) {
            //         content += `<li class="list-group-item text-success"><i class="far fa-check-circle fs-1"></i> <span class="ml-2">${$t('meeting.props.is_pam')}</span></li>`
            //     } else {
            //         content += `<li class="list-group-item text-muted"><i class="far fa-times-circle fs-1"></i> <span class="ml-2">${$t('meeting.props.is_pam')}</span></li>`
            //     }

            //     if(rowItem.accessibleToMembers) {
            //         content += `<li class="list-group-item text-success"><i class="far fa-check-circle fs-1"></i> <span class="ml-2">${$t('meeting.props.only_accessible_to_members')}</span></li>`
            //     } else {
            //         content += `<li class="list-group-item text-muted"><i class="far fa-times-circle fs-1"></i> <span class="ml-2">${$t('meeting.props.only_accessible_to_members')}</span></li>`
            //     }
            //     return content
            // }
        },
        mounted() {
            this.getInitialData()
        },
        created() {
            if(this.configs && this.configs.meeting && this.configs.meeting.cardLayout) {
                location.reload()
            }
        },
    }

</script>
