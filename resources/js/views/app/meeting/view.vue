<template>
    <div class="row">
        <div class="col-12 col-md-4">
            <base-container boxed with-loader min-height="full" has-footer :is-loading="isLoading" :loader-color="vars.loaderColor" id="printable">

                <template v-if="entity">
                    <div class="row">
                        <div class="col-12 mb-3">
                            <view-single :label="$t('meeting.props.title')" :value="entity.title" tag="h5" data-classes="font-weight-600" />
                        </div>

                        <div class="col-12 col-lg-6 mb-3">
                            <view-single :label="$t('meeting.props.type')">
                                <template #main>
                                    <badge v-if="entity.type" type="default" class="mb-0">{{ entity.type.name }}</badge>
                                </template>
                            </view-single>
                        </div>

                        <div class="col-12 col-lg-6 mb-3">
                            <view-single :label="$t('meeting.meeting_category.category')">
                                <template #main>
                                    <badge v-if="entity.category" type="dark" class="mb-0">{{ entity.category.name }}</badge>
                                </template>
                            </view-single>
                        </div>

                        <div class="col-12 col-lg-6 mb-3">
                            <view-single :label="$t('meeting.props.status')">
                                <template #main>
                                    <badge rounded :type="vars.colorsForStatus['meeting-'+entity.status]">{{ entity.status }}</badge>
                                </template>
                            </view-single>
                        </div>

                        <div class="col-12 col-lg-6 mb-3">
                            <view-single :label="$t('meeting.props.accessible_via_link')">
                                <template #main>
                                    <badge v-if="entity.accessibleViaLink" rounded type="success"><i class="far fa-check-circle"></i> {{ $t('general.yes') }}</badge>
                                    <badge v-else rounded type="dark"><i class="far fa-circle"></i> {{ $t('general.no') }}</badge>
                                </template>
                            </view-single>
                        </div>

                        <div class="col-12 col-lg-6 mb-3">
                            <view-single :label="$t('meeting.props.is_pam')">
                                <template #main>
                                    <badge v-if="entity.isPam" rounded type="success"><i class="far fa-check-circle"></i> {{ $t('general.yes') }}</badge>
                                    <badge v-else rounded type="dark"><i class="far fa-circle"></i> {{ $t('general.no') }}</badge>
                                </template>
                            </view-single>
                        </div>

                        <template v-if="allowExtraInput">
                            <div class="col-12 col-lg-6 mb-3">
                                <view-single :label="$t('meeting.props.only_accessible_to_members')">
                                    <template #main>
                                        <badge v-if="entity.accessibleToMembers" rounded type="success"><i class="far fa-check-circle"></i> {{ $t('general.yes') }}</badge>
                                        <badge v-else rounded type="dark"><i class="far fa-circle"></i> {{ $t('general.no') }}</badge>
                                    </template>
                                </view-single>
                            </div>

                            <template v-if="configs.meeting.enablePaidMeeting">
                                <div class="col-12 col-lg-6 mb-3">
                                    <view-single :label="$t('meeting.props.is_paid')">
                                        <template #main>
                                            <badge v-if="entity.isPaid" rounded type="success"><i class="far fa-check-circle"></i> {{ $t('general.yes') }}</badge>
                                            <badge v-else rounded type="dark"><i class="far fa-circle"></i> {{ $t('general.no') }}</badge>
                                        </template>
                                    </view-single>
                                </div>

                                <div class="col-12 col-lg-6 mb-3">
                                    <view-currency :label="$t('meeting.props.fee')" :value="entity.fee" />
                                </div>
                            </template>
                        </template>

                        <div v-if="entity && entity.status === 'cancelled'" class="col-12 mb-3">
                            <view-single :label="$t('meeting.props.cancellation_reason')"  :value="entity.cancellationReason"/>
                        </div>

                        <div class="col-12 col-md-6 mb-3">
                            <view-single :label="$t('meeting.props.identifier')" :value="entity.identifier" />
                        </div>

                        <div class="col-12 col-md-6 mb-3">
                            <view-single :label="$t('meeting.config.max_participant_count')" :value="entity.maxParticipantCount" />
                        </div>

                        <div class="col-12 col-md-6 mb-3">
                            <view-single :label="$t('meeting.props.estimated_period')" :value="entity.period" :suffix="$t('list.general.durations.minutes')" />
                        </div>

                        <div class="col-12 mb-3">
                            <view-date :label="$t('meeting.props.start_date_time')" :value="entity.startDateTime" with-tz />
                        </div>

                    </div>
                </template>

                <div class="form-footer mt-3">
                    <div class="left-side">
                        <base-button type="button" design="light" @click="$router.back()" tabindex="-1"><i class="fas fa-chevron-left"></i> {{ $t('general.back') }}</base-button>
                    </div>
                    <div class="right-side">
                        <base-button v-if="entity && entity.status === 'scheduled' && (hasPermission('edit-meeting') || entity.canModerate)" type="button" design="primary" @click.stop="$router.push({ name: 'appMeetingEdit', params: { uuid: entity.uuid } })"><i class="fas fa-edit"></i> {{ $t('global.edit', { attribute: $t('meeting.meeting') } ) }}</base-button>
                    </div>
                </div>
            </base-container>
        </div>

        <template v-if="entity">

            <div v-if="entity.canModerate" class="col-12 col-md-8">

                <base-container boxed with-loader min-height="full" :is-loading="isLoading" :loader-color="vars.loaderColor" class="p-0">

                    <table-wrapper v-if="isInitialized" :meta="entities.meta" :add-button-route="entity.status === 'scheduled' && entity.canModerate ? 'appMeetingInviteeAdd' : ''" :add-button-params="{ 'subUuid': uuid }" :add-button-permissions="['create-meeting']" entity-title="meeting.invitee.invitee" entities-title="meeting.invitee.invitees" entity-description="meeting.invitee.module_description" small-footer>

                        <b-table v-show="entities.meta.total" ref="btable" :items="itemsProvider" :fields="fields" :busy.sync="isLoading" hover striped stacked="sm" :per-page.number="entities.meta.perPage" :current-page="entities.meta.currentPage" :filters="null">

                            <template #cell(isModerator)="row">
                                <span v-if="row.item.isModerator" class="text-info" v-b-tooltip.hover.left :title="$t('meeting.is_moderator')"><i class="fas fa-user-shield"></i></span>
                                <span v-else class="text-light" v-b-tooltip.hover.left :title="$t('meeting.not_a_moderator')"><i class="far fa-user"></i></span>

                                <span v-if="row.item.isAttendee" class="ml-3 text-success" v-b-tooltip.hover.left :title="$t('meeting.attendee')"><i class="fas fa-check-circle"></i></span>
                                <span v-else class="ml-3 text-light" v-b-tooltip.hover.left :title="$t('meeting.not_an_attendee')"><i class="far fa-circle"></i></span>

                                <span v-if="row.item.isBlocked" class="ml-3 text-danger" v-b-tooltip.hover.left :title="$t('meeting.is_blocked')"><i class="fas fa-ban"></i></span>
                                <span v-else class="ml-3 text-success" v-b-tooltip.hover.left :title="$t('meeting.is_allowed')"><i class="fas fa-circle"></i></span>

                                <template v-if="allowExtraInput && configs.membership.enabled">
                                    <span v-if="row.item.contact && row.item.contact.user && row.item.contact.user.hasActiveMembership" class="ml-3 text-success" v-b-tooltip.hover.left :title="$t('membership.has_active_membership')"><i class="far fa-id-badge"></i></span>
                                    <span v-else class="ml-3 text-light" v-b-tooltip.hover.left :title="$t('membership.no_active_membership')"><i class="far fa-id-badge"></i></span>
                                </template>
                            </template>

                            <template #cell(actions)="row">
                                <table-row-actions>
                                    <a v-if="hasPermission('create-meeting')" class="dropdown-item" @click.stop="toggleModerator(row.item)"><i v-if="row.item.isModerator" class="fas fa-user-shield"></i><i v-else class="far fa-user"></i> {{ $t('global.toggle', { attribute: $t('meeting.moderator')}) }}</a>

                                    <a v-if="hasPermission('create-meeting')" class="dropdown-item" @click.stop="toggleBlock(row.item)">
                                        <span v-if="row.item.isBlocked"><i class="fas fa-check-circle"></i> {{ $t('global.unblock', { attribute: $t('meeting.invitee.invitee')}) }}</span>
                                        <span v-else><i class="fas fa-ban"></i> {{ $t('global.block', { attribute: $t('meeting.invitee.invitee')}) }}</span>
                                    </a>

                                    <a v-if="hasPermission('create-meeting')" class="dropdown-item" @click.stop="deleteEntity(row.item)"><i class="fas fa-trash"></i> {{ $t('global.delete', { attribute: $t('meeting.invitee.invitee')}) }}</a>

                                    <a v-if="entity.canModerate" class="dropdown-item" @click.stop="sendInvitation(row.item)"><i class="fas fa-paper-plane"></i> {{ $t('meeting.send_invitation') }}</a>
                                </table-row-actions>
                            </template>

                        </b-table>
                    </table-wrapper>

                </base-container>
            </div>

            <div :class="['col-12', {'col-md-8': !entity.canModerate}, {'mt-element': entity.canModerate}]">
                <base-container boxed>
                    <view-paragraph class="mb-3" :label="$t('meeting.props.agenda')" :value="entity.agenda" html />

                    <view-paragraph :label="$t('meeting.props.description')" :value="entity.description" html />
                </base-container>
            </div>

            <div class="col-12 mt-element" >
                <base-container boxed>
                    <h5 class="mt-0 mb-4">{{ $t('meeting.meeting') }} {{ $t('config.configuration') }}</h5>
                    <div class="row">
                        <div class="col-12 col-md-3 mb-3">
                            <view-single :label="$t('meeting.config.enable_chat')">
                                <template #main>
                                    <badge v-if="entity.config.enableChat" rounded type="success"><i class="far fa-check-circle"></i> {{ $t('general.yes') }}</badge>
                                    <badge v-else rounded type="dark"><i class="far fa-circle"></i> {{ $t('general.no') }}</badge>
                                </template>
                            </view-single>
                        </div>

                        <div class="col-12 col-md-3 mb-3">
                            <view-single :label="$t('meeting.config.enable_screen_sharing')">
                                <template #main>
                                    <badge v-if="entity.config.enableScreenSharing" rounded type="success"><i class="far fa-check-circle"></i> {{ $t('general.yes') }}</badge>
                                    <badge v-else rounded type="dark"><i class="far fa-circle"></i> {{ $t('general.no') }}</badge>
                                </template>
                            </view-single>
                        </div>

                        <div class="col-12 col-md-3 mb-3">
                            <view-single :label="$t('meeting.config.enable_recording')">
                                <template #main>
                                    <badge v-if="entity.config.enableRecording" rounded type="success"><i class="far fa-check-circle"></i> {{ $t('general.yes') }}</badge>
                                    <badge v-else rounded type="dark"><i class="far fa-circle"></i> {{ $t('general.no') }}</badge>
                                </template>
                            </view-single>
                        </div>

                        <div class="col-12 col-md-3 mb-3">
                            <view-single :label="$t('meeting.config.enable_hand_gesture')">
                                <template #main>
                                    <badge v-if="entity.config.enableHandGesture" rounded type="success"><i class="far fa-check-circle"></i> {{ $t('general.yes') }}</badge>
                                    <badge v-else rounded type="dark"><i class="far fa-circle"></i> {{ $t('general.no') }}</badge>
                                </template>
                            </view-single>
                        </div>

                        <div class="col-12 col-md-3 mb-3">
                            <view-single :label="$t('meeting.config.enable_file_sharing')">
                                <template #main>
                                    <badge v-if="entity.config.enableFileSharing" rounded type="success"><i class="far fa-check-circle"></i> {{ $t('general.yes') }}</badge>
                                    <badge v-else rounded type="dark"><i class="far fa-circle"></i> {{ $t('general.no') }}</badge>
                                </template>
                            </view-single>
                        </div>

                        <div class="col-12 col-md-3 mb-3">
                            <view-single :label="$t('meeting.config.enable_link_sharing')">
                                <template #main>
                                    <badge v-if="entity.config.enableLinkSharing" rounded type="success"><i class="far fa-check-circle"></i> {{ $t('general.yes') }}</badge>
                                    <badge v-else rounded type="dark"><i class="far fa-circle"></i> {{ $t('general.no') }}</badge>
                                </template>
                            </view-single>
                        </div>

                        <div class="col-12 col-md-3 mb-3">
                            <view-single :label="$t('meeting.config.footer_auto_hide')">
                                <template #main>
                                    <badge v-if="entity.config.footerAutoHide" rounded type="success"><i class="far fa-check-circle"></i> {{ $t('general.yes') }}</badge>
                                    <badge v-else rounded type="dark"><i class="far fa-circle"></i> {{ $t('general.no') }}</badge>
                                </template>
                            </view-single>
                        </div>

                        <div class="col-12 col-md-3 mb-3">
                            <view-single :label="$t('meeting.config.speech_detection')">
                                <template #main>
                                    <badge v-if="entity.config.speechDetection" rounded type="success"><i class="far fa-check-circle"></i> {{ $t('general.yes') }}</badge>
                                    <badge v-else rounded type="dark"><i class="far fa-circle"></i> {{ $t('general.no') }}</badge>
                                </template>
                            </view-single>
                        </div>

                        <div class="col-12 col-md-3 mb-3">
                            <view-single :label="$t('meeting.config.mute_participants_on_start')">
                                <template #main>
                                    <badge v-if="entity.config.muteParticipantsOnStart" rounded type="success"><i class="far fa-check-circle"></i> {{ $t('general.yes') }}</badge>
                                    <badge v-else rounded type="dark"><i class="far fa-circle"></i> {{ $t('general.no') }}</badge>
                                </template>
                            </view-single>
                        </div>


                        <div class="col-12 col-md-3 mb-3">
                            <view-single :label="$t('meeting.config.allow_joining_without_devices')">
                                <template #main>
                                    <badge v-if="entity.config.allowJoiningWithoutDevices" rounded type="success"><i class="far fa-check-circle"></i> {{ $t('general.yes') }}</badge>
                                    <badge v-else rounded type="dark"><i class="far fa-circle"></i> {{ $t('general.no') }}</badge>
                                </template>
                            </view-single>
                        </div>

                        <div class="col-12 col-md-3 mb-3">
                            <view-single :label="$t('meeting.config.enable_whiteboard')">
                                <template #main>
                                    <badge v-if="entity.config.enableWhiteboard" rounded type="success"><i class="far fa-check-circle"></i> {{ $t('general.yes') }}</badge>
                                    <badge v-else rounded type="dark"><i class="far fa-circle"></i> {{ $t('general.no') }}</badge>
                                </template>
                            </view-single>
                        </div>

                        <div class="col-12 col-md-3 mb-3">
                            <view-single :label="$t('meeting.config.enable_snapshot')">
                                <template #main>
                                    <badge v-if="entity.config.enableSnapshot" rounded type="success"><i class="far fa-check-circle"></i> {{ $t('general.yes') }}</badge>
                                    <badge v-else rounded type="dark"><i class="far fa-circle"></i> {{ $t('general.no') }}</badge>
                                </template>
                            </view-single>
                        </div>

                        <div class="col-12 col-md-3 mb-3" v-if="entity.config.enableSnapshot">
                            <view-single :label="$t('meeting.config.anyone_can_take_snapshot')">
                                <template #main>
                                    <badge v-if="entity.config.anyoneCanTakeSnapshot" rounded type="success"><i class="far fa-check-circle"></i> {{ $t('general.yes') }}</badge>
                                    <badge v-else rounded type="dark"><i class="far fa-circle"></i> {{ $t('general.no') }}</badge>
                                </template>
                            </view-single>
                        </div>

                        <div class="col-12 col-md-3 mb-3">
                            <view-single :label="$t('meeting.config.ask_host_before_joining')">
                                <template #main>
                                    <badge v-if="entity.config.askHostBeforeJoining" rounded type="success"><i class="far fa-check-circle"></i> {{ $t('general.yes') }}</badge>
                                    <badge v-else rounded type="dark"><i class="far fa-circle"></i> {{ $t('general.no') }}</badge>
                                </template>
                            </view-single>
                        </div>

                        <div class="col-12 col-md-3 mb-3">
                            <view-single :label="$t('meeting.config.prefer_rear_camera_first')">
                                <template #main>
                                    <badge v-if="entity.config.preferRearCameraFirst" rounded type="success"><i class="far fa-check-circle"></i> {{ $t('general.yes') }}</badge>
                                    <badge v-else rounded type="dark"><i class="far fa-circle"></i> {{ $t('general.no') }}</badge>
                                </template>
                            </view-single>
                        </div>

                        <div class="col-12 col-md-3 mb-3">
                            <view-single :label="$t('meeting.config.enable_user_avatar')">
                                <template #main>
                                    <badge v-if="entity.config.enableUserAvatar" rounded type="success"><i class="far fa-check-circle"></i> {{ $t('general.yes') }}</badge>
                                    <badge v-else rounded type="dark"><i class="far fa-circle"></i> {{ $t('general.no') }}</badge>
                                </template>
                            </view-single>
                        </div>
                    </div>
                </base-container>
            </div>

            <template v-if="(entity.status === 'scheduled' || entity.status === 'live') && (hasPermission('edit-meeting') || entity.canModerate)">
                <div class="col-12 mt-element">
                    <div class="d-flex align-items-stretch">
                        <base-container boxed class="flex-grow h-full">
                            <file-uploader :url="`/${this.initUrl}/${this.uuid}/media`" name-label="upload.attachment" names-label="upload.attachments" :options="uploaderConfig" :data="entity.attachments" button-wrapper-classes="justify-content-between" heading-classes="text-muted mb-0" :heading="$t('upload.attachments')" />
                        </base-container>
                        <base-container boxed class="h-full ml-element max-width-400px p-0">
                            <image-uploader :url="`/${this.initUrl}/${this.uuid}/cover`" name-label="meeting.props.cover_image" :existing-image="entity.cover" @uploaded="coverImageModified" remove-from-server @removed="coverImageModified" class="mb-3" />
                        </base-container>
                    </div>
                </div>
            </template>

            <div class="col-12 mt-element" v-else-if="entity.attachments && entity.attachments.length">
                <base-container boxed>
                    <view-uploads class="mt-3" :label="$t('upload.attachments')" :name-label="$t('upload.attachment')" :value="entity.attachments" :url-prefix="`/meetings/${uuid}/downloads`" />
                </base-container>
            </div>
        </template>
    </div>
</template>

<script>
    import table from '@mixins/table'
    import * as headerMixins from '@mixins/header'
    import Swal from '@core/configs/sweet-alert'
    import FileUploader from '@components/FileUploader'
    import ImageUploader from '@components/ImageUploader'

    export default {
        extends: table,
        components: {
            FileUploader,
            ImageUploader,
        },
        data() {
            return {
                fields: [{
                        key: 'contact.email',
                        label: $t('contact.props.email'),
                    },
                    {
                        key: 'contact.name',
                        label: $t('contact.props.name'),
                        tdClass: 'td-ellipsis max-width-200px'
                    },
                    {
                        key: 'isModerator',
                        label: '',
                        headerTitle: $t('meeting.meeting_attributes'),
                        thClass: 'text-nowrap',
                        tdClass: 'text-center'
                    },
                    {
                        key: 'actions',
                        label: '',
                        cantHide: true,
                        tdClass: 'actions-dropdown-wrapper'
                    },
                ],
                initUrl: 'meetings',
                initSubUrl: 'invitees',
                dataTitle: $t('meeting.meeting'),
                fallBackRoute: 'appMeetingList',
                dataType: 'meeting',
                hideFilterButton: true,
                uploaderConfig: {
                    module: '',
                    token: '',
                    allowedExtensions: '',
                    maxNoOfFiles: 5,
                    uuid: uuid(),
                },
            }
        },
        methods: {
            afterGetEntityData() {
                this.headerButtons = []

                if(this.entity.status === 'scheduled' || this.entity.status === 'live') {

                    this.headerButtons.push(headerMixins.headerPermittedRouteButton($t('meeting.join'), 'fas fa-sign-in-alt', 'liveMeeting', 'list-meeting', null, { color: 'success' }, { subUuid: this.uuid }))
                }

                if(this.entity.status === 'scheduled' && this.entity.canModerate) {

                    this.headerButtons.push(headerMixins.headerActionButton($t('meeting.cancel'), 'fas fa-times', this.cancelMeeting, null, { color: 'danger' }))

                    this.headerButtons.push(headerMixins.headerActionButton($t('meeting.invite'), 'fas fa-paper-plane', this.triggerSendInvitation, null, { color: 'primary' }))

                    this.headerButtons.push(headerMixins.headerRouteButton($t('general.add'), 'fas fa-plus', 'appMeetingInviteeAdd', null, null, { subUuid: this.uuid }))

                    this.headerButtons.push(headerMixins.headerRouteButton(null, 'fas fa-cog', 'appMeetingSingleConfig', null, null, { subUuid: this.uuid }))
                }

                this.applyPageHeader()
            },
            cancelMeeting() {
                swtAlert.fire({
                        title: $t('meeting.reason_for_cancellation'),
                        input: 'text',
                        inputPlaceholder: $t('meeting.reason_for_cancellation'),
                        showCancelButton: true,
                        confirmButtonText: 'Proceed!',
                        cancelButtonText: 'Go Back!'
                    })
                    .then((result) => {
                        if (result.value) {
                            this.isLoading = true

                            this.Custom({
                                    url: `/${this.initUrl}/${this.uuid}/cancel`,
                                    method: 'post',
                                    data: {
                                        cancellationReason: result.value
                                    }
                                })
                                .then(response => {
                                    this.entity = response.meeting
                                    this.afterGetEntityData()
                                    this.$toasted.success(response.message, this.$toastConfig)
                                    this.isLoading = false
                                })
                                .catch(error => {
                                    this.isLoading = false
                                    formUtil.handleErrors(error)
                                })
                        } else {
                            result.dismiss === Swal.DismissReason.cancel
                        }
                    })
            },
            sendInvitation(invitee) {
                formUtil.confirmAction()
                    .then((result) => {
                        if (result.value) {
                            this.isLoading = true
                            let data = {}

                            if (invitee) {
                                data.invitee = invitee
                            }

                            this.Custom({
                                    url: `/${this.initUrl}/${this.uuid}/invitation`,
                                    method: 'post',
                                    data
                                })
                                .then(response => {
                                    this.$toasted.success(response.message, this.$toastConfig.success)
                                    this.isLoading = false
                                })
                                .catch(error => {
                                    this.isLoading = false
                                    formUtil.handleErrors(error)
                                })
                        } else {
                            result.dismiss === Swal.DismissReason.cancel
                        }
                    })
            },
            triggerSendInvitation() {
                this.sendInvitation()
            },
            toggleModerator(invitee) {
                this.isLoading = true
                let data = {}

                if (invitee) {
                    data.invitee = invitee
                }
                this.Custom({
                        url: `/${this.initUrl}/${this.uuid}/moderator`,
                        method: 'post',
                        data
                    })
                    .then(response => {
                        this.isLoading = false
                        this.$nextTick(() => {
                            this.refreshTable()
                        });
                    })
                    .catch(error => {
                        this.isLoading = false
                        formUtil.handleErrors(error)
                    })
            },
            toggleBlock(invitee) {
                this.isLoading = true
                let data = {}
                const action = invitee.isBlocked ? 'unblock' : 'block'

                this.Custom({
                        url: `/${this.initUrl}/${this.uuid}/invitees/${invitee.uuid}/${action}?type=invitee`,
                        method: 'post',
                    })
                    .then(response => {
                        this.isLoading = false
                        this.$nextTick(() => {
                            this.refreshTable()
                        });
                    })
                    .catch(error => {
                        this.isLoading = false
                        formUtil.handleErrors(error)
                    })
            },
            coverImageModified() {
                this.Init({
                    url: this.initUrl,
                    doNotReset: true,
                })
                this.reloadEntityData(() => {
                    this.InitSub({
                        url: this.uuid + '/' + this.initSubUrl,
                        doNotReset: true,
                    })
                })
            },
        },
        mounted() {
            if(this.configs.system && this.configs.system.allowedFileExtensions) {
                this.uploaderConfig.allowedExtensions = this.configs.system.allowedFileExtensions
            }
            this.getEntityData()
        },
    }

</script>
