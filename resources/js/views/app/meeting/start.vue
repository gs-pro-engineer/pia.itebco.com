<template>
    <base-container boxed class="mt-element">
        <template v-if="type && isLoading">
            <div class="pt-150 pb-150 text-center">
                <animated-loader :is-loading="isLoading" :loader-color="vars.loaderColor" size="inline" :with-overlay="false" />
                <br>
                <br>
                <h5>{{ $t('meeting.creating_a_meeting') }}</h5>
            </div>
        </template>

        <template v-else>
            <div class="d-flex">
                <div class="">

                    <fieldset class="fieldset mb-5">
                        <legend>
                            <div class="d-inline-flex align-items-center">
                                {{ $t('meeting.optional_advance_configurations') }}
                            </div>
                        </legend>


                        <div class="row">
                            <div class="col-12 col-md-6 mb-3">
                                <base-input :label="$t('meeting.enter_meeting_code')" type="text" v-model="identifier" :error.sync="formErrors.identifier" />
                            </div>


                            <div class="col-12 col-md-6 mb-3">
                                <base-input :label="$t('meeting.config.max_participant_count')" type="number" v-model="maxParticipantCount" :error.sync="formErrors.maxParticipantCount" :min="2" :max="maxParticipantAllowed" :step="1" />
                            </div>

                            <div class="col-12 col-md-6">
                                <base-checkbox class="ml-3 mb-4" v-model="keepAlive">
                                    {{ $t('meeting.keep_meeting_live') }}
                                </base-checkbox>
                            </div>

                            <div class="col-12 col-md-6" v-if="configs.meeting && configs.meeting.enablePam && !accessibleToMembers && !isPaid">
                                <base-checkbox class="ml-3 mb-4" v-model="isPam" @change="isPamChanged">
                                    {{ $t('meeting.props.is_pam') }}
                                </base-checkbox>
                            </div>

                            <template v-if="allowExtraInput && !isPam">
                                <div class="col-12 col-md-6" v-if="!isPaid">
                                    <base-checkbox class="ml-3 mb-4" v-model="accessibleToMembers" @change="accessibleToMembersChanged">
                                        {{ $t('meeting.props.only_accessible_to_members') }}
                                    </base-checkbox>
                                </div>

                                <template v-if="configs.meeting.enablePaidMeeting && !accessibleToMembers">
                                    <div class="col-12 col-md-6 mb-3">
                                        <base-checkbox class="ml-3 mb-4" v-model="isPaid" @change="isPaidChanged">
                                            {{ $t('meeting.props.is_paid') }}
                                        </base-checkbox>
                                    </div>

                                    <div class="col-12 col-md-6 mb-3" v-if="isPaid">
                                        <base-input :label="$t('meeting.props.fee')" type="number" v-model="fee" :error.sync="formErrors.fee" :min="0.01" :step="0.01" format="currency" />
                                    </div>
                                </template>
                            </template>
                        </div>
                    </fieldset>

                    <h4 class="mb-4 font-weight-bold">{{ $t('meeting.select_meeting_type') }}</h4>

                    <div class="btn-group btn-group-vertical btn-group-lg" role="group">
                        <button type="button" class="btn btn-light" v-for="type in preRequisite.types" :key="type.uuid" @click="startInstantMeeting(type.uuid)">{{ type.name }}</button>
                    </div>
                    
                </div>

                <div class="d-flex flex-direction-column align-items-center ml-4">
                    <img v-lazy="demoImage" class="img-fluid img-thumbnail d-none d-lg-block">
                </div>
            </div>
        </template>
    </base-container>
</template>

<script>
    import { mapActions } from 'vuex'
    import form from '@mixins/form'

    export default {
        extends: form,
        data() {
            return {
                type: null,
                identifier: '',
                maxParticipantCount: 1000,
                keepAlive: false,
                isPam: false,
                accessibleToMembers: false,
                isPaid: false,
                fee: 0,
                showAdvance: false,
                preRequisite: {
                    types: [],
                },
                demoImage: '/images/DemoScreenshot.jpg',
                initUrl: 'meetings',
            }
        },
        computed: {
            maxParticipantAllowed() {
                return this.configs.meeting.maxParticipantCount ? this.configs.meeting.maxParticipantCount : 999999
            },
        },
        methods: {
            ...mapActions('config', [
                'SetUiConfig',
            ]),
            startInstantMeeting(type = null) {
                this.isLoading = true
                if(type) {
                    this.type = type
                }

                let meetingType = this.preRequisite.types[0]

                if(this.type) {
                    meetingType = this.preRequisite.types.find(t => t.uuid === this.type)
                }

                this.Store({
                        instant: true,
                        type: meetingType,
                        maxParticipantCount: this.maxParticipantCount,
                        accessibleToMembers: this.accessibleToMembers,
                        identifier: this.identifier,
                        keepAlive: this.keepAlive,
                        isPam: this.isPam,
                        isPaid: this.isPaid,
                        fee: this.fee,
                    })
                    .then(response => {
                        if(response.meeting) {
                            this.$router.replace({ name: 'liveMeeting', params: { uuid: response.meeting.uuid }})
                        }
                    })
                    .catch(error => {
                        this.formErrors = formUtil.handleErrors(error)
                        this.isLoading = false
                        // this.$router.back()
                    })
            },
            isPamChanged() {
                if(this.isPam) {
                    this.accessibleToMembers = false
                    this.isPaid = false
                    this.fee = 0
                }
            },
            accessibleToMembersChanged() {
                if(this.accessibleToMembers) {
                    this.isPam = false
                    this.isPaid = false
                    this.fee = 0
                }
            },
            isPaidChanged() {
                if(this.isPaid) {
                    this.isPam = false
                    this.accessibleToMembers = false
                }
            },
        },
        mounted() {
            if (this.$route.params.type) {
                this.type = this.$route.params.type
            }

            this.getInitialData(() => {
                if(this.preRequisite.types.includes(this.type)) {
                    this.startInstantMeeting()
                }
            })

            this.$nextTick(() => {
                this.SetUiConfig({ pageHeaderShow: false })
            })
        },
        destroyed() {
            this.SetUiConfig({ pageHeaderShow: true })
        },
    }

</script>
<style lang="scss">
    @import '~@js/core/assets/scss/imports.scss';

    .btn-group-vertical {
        width: 100%;
    }

    @include media-breakpoint-up(lg) {
        .btn-group-vertical {
            width: 100%;
            display: flex;
            flex-direction: row;
            align-items: stretch;
            // flex-wrap: wrap;

            .btn {
                flex: 1 1;
                border-bottom: 2px solid rgba(0,0,0,0.3);
                margin-bottom: 1px;
            }
        }
    }
</style>

