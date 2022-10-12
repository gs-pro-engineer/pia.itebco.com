<template>
    <div :class="['entity-list-container', `card-layout-design-${configs.meeting.cardLayoutDesign}`]" v-infinite-scroll="getFeed" :infinite-scroll-disabled="isFetching" infinite-scroll-distance="200">
        <collapse-transition :group="true" :duration="300" tag="div">
            <filter-form v-if="showFilters" @close="toggleFilter" key="filters" :boxed="true" :pre-requisite="preRequisite" :is-loading="isLoading" />


            <animated-loader key="loader" :is-loading="isLoading" :loader-color="vars.loaderColor" overlay-color="transparent" />

            <feed-wrapper key="feed" :meta="feed.meta" :filtered="isFiltered" add-button-route="appMeetingAdd" :add-button-permissions="['create-meeting']" entity-title="meeting.meeting" entities-title="meeting.meetings" entity-description="meeting.module_description">

                <div class="meetings-feed" v-masonry transition-duration="0.3s" item-selector=".item">
                    <div class="row">
                        <template v-for="meeting in feed.data">
                            <div v-masonry-tile class="col-12 col-md-4 item" :key="meeting.uuid">
                                <meeting-card :meeting="meeting" :flex="false" :raise="true">

                                    <template #actions>
                                        <table-row-actions>

                                            <router-link class="dropdown-item" :to="{ name: 'appMeetingView', params: { uuid: meeting.uuid } }"><i class="fas fa-arrow-circle-right"></i> {{ $t('global.view', { attribute: $t('meeting.meeting')}) }}</router-link>

                                            <router-link v-if="meeting.hasSnapshots && configs.meeting && configs.meeting.enableSnapshot" class="dropdown-item" :to="{ name: 'appMeetingSnapshots', params: { uuid: meeting.uuid } }"><i class="fas fa-image"></i> {{ $t('global.view', { attribute: $t('meeting.snapshots')}) }}</router-link>

                                            <router-link v-if="(meeting.hasChunkRecordings || meeting.hasRecordings) && configs.meeting && configs.meeting.enableRecording" class="dropdown-item" :to="{ name: 'appMeetingRecordings', params: { uuid: meeting.uuid } }"><i class="fas fa-photo-video"></i> {{ $t('global.view', { attribute: $t('meeting.recordings')}) }}</router-link>

                                            <router-link v-if="meeting.status === 'scheduled' || meeting.status === 'live'" class="dropdown-item bg-primary text-white" :to="{ name: 'liveMeeting', params: { uuid: meeting.uuid } }"><i class="fas fa-sign-in-alt"></i> {{ $t('meeting.join_meeting') }}</router-link>

                                            <a v-if="meeting.status === 'scheduled' || meeting.status === 'live'" class="dropdown-item" @click.stop="shareURL(meeting)"><i class="fas fa-share-alt"></i> {{ $t('general.share_url') }}</a>

                                            <router-link v-if="meeting.status === 'scheduled' && (hasPermission('create-meeting') || meeting.canModerate)" class="dropdown-item" :to="{ name: 'appMeetingEdit', params: { uuid: meeting.uuid } }"><i class="fas fa-edit"></i> {{ $t('global.edit', { attribute: $t('meeting.meeting')}) }}</router-link>

                                            <router-link v-if="hasPermission('create-meeting')" class="dropdown-item" :to="{ name: 'appMeetingDuplicate', params: { uuid: meeting.uuid } }"><i class="fas fa-copy"></i> {{ $t('global.duplicate', { attribute: $t('meeting.meeting')}) }}</router-link>

                                            <router-link v-if="meeting.status === 'scheduled' && (hasPermission('list-meeting') && meeting.canModerate)" class="dropdown-item" :to="{ name: 'appMeetingSingleConfig', params: { subUuid: meeting.uuid } }"><i class="fas fa-cog"></i> {{ $t('global.config', { attribute: $t('meeting.meeting')}) }}</router-link>

                                            <a v-if="hasPermission('delete-meeting') && (meeting.status === 'scheduled' || (meeting.status === 'cancelled' && configs.meeting && configs.meeting.allowDeletingCancelledMeetings) || (meeting.status === 'ended' && configs.meeting && configs.meeting.allowDeletingEndedMeetings) )" class="dropdown-item" @click.stop="deleteEntity(meeting)"><i class="fas fa-trash"></i> {{ $t('global.delete', { attribute: $t('meeting.meeting')}) }}</a>
                                        </table-row-actions>
                                    </template>
                                </meeting-card>
                            </div>
                        </template>
                    </div>
                </div>

                <div class="d-flex justify-content-center" v-if="isFetching">
                    <animated-loader key="loader" :is-loading="isFetching" size="inline" :loader-color="vars.loaderColor" overlay-color="transparent" />
                </div>
                <h5 v-if="noMoreData" class="text-center my-4">{{ $t('general.thats_all_for_now') }}</h5>
            </feed-wrapper>
        </collapse-transition>
    </div>
</template>

<script>
    import Vue from 'vue'
    import infiniteScroll from 'vue-infinite-scroll'
    import {VueMasonryPlugin} from 'vue-masonry'
    Vue.use(VueMasonryPlugin)


    import table from '@mixins/table'
    import FilterForm from './filter'
    import MeetingCard from './meeting-card'
    import { share } from '@core/utils/media'

    export default {
        directives: {
            infiniteScroll,
        },
        components: {
            FilterForm,
            MeetingCard,
        },
        extends: table,
        data() {
            return {
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
                feedTable: true,
            }
        },
        methods: {
        },
        mounted() {
            this.getInitialData()
        },
        created() {
            if(! (this.configs && this.configs.meeting && this.configs.meeting.cardLayout)) {
                location.reload()
            }
        },
    }

</script>
