<template>
    <div>
        <div class="row">
            <div class="col-12 col-md-4">
                <base-container boxed with-loader min-height="full" :is-loading="isLoading" :loader-color="vars.loaderColor" id="printable">

                    <div class="row" v-if="entity">
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

                        <div class="col-12 col-md-6 mb-3">
                            <view-single :label="$t('meeting.props.identifier')" :value="entity.identifier" />
                        </div>

                        <div class="col-12 col-md-6 mb-3">
                            <view-single :label="$t('meeting.props.estimated_period')" :value="entity.period" :suffix="$t('list.general.durations.minutes')" />
                        </div>

                        <div class="col-12 mb-3">
                            <view-date :label="$t('meeting.props.start_date_time')" :value="entity.startDateTime" with-tz />
                        </div>
                    </div>
                </base-container>
            </div>

            <div class="col-12 col-md-8">
                <transition-page>
                    <router-view name="form" />
                </transition-page>
            </div>
        </div>
    </div>
</template>

<script>
    import view from '@mixins/view'
    import { mapGetters, mapActions } from 'vuex'

    export default {
        extends: view,
        data() {
            return {
                initUrl: 'meetings',
                fallBackRoute: 'appMeetingList',
                hideFilterButton: true,
            }
        },
        watch: {
            $route() {
                if(this.$route.query.hasOwnProperty('reload')) {
                    this.isLoading = true
                    this.ResetEntity()
                    this.getInitialData()
                }
            }
        },
        methods: {
            ...mapActions('common', [
                'ResetEntity',
                'SetEntity',
            ]),
            afterGetInitialData(res) {
                if(res.status === 'cancelled') {
                    this.$toasted.error(this.$t('meeting.meeting_cancelled'), this.$toastConfig.error)
                } else if(res.status === 'ended') {
                    this.$toasted.error(this.$t('meeting.meeting_ended'), this.$toastConfig.error)
                }

                if(!(res && (res.status === 'scheduled' || res.status === 'live') && res.isPaid && !res.hasPaid)) {
                    this.$router.push({ name: 'appMeetingView', params: { uuid: res.uuid } })
                }
                this.SetEntity(res)
            },
        },
        mounted() {
        },
    }

</script>
