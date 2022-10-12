<template>
    <card :shadow="shadow" :type="background" :border="border" class="greeting-widget min-height-250px" body-classes="d-flex flex-column">
        <slot name="greeting">
            <div class="greeting-details" v-if="showGreeting && profile">
                <h5 class="text-muted mb-1">{{ $t('dashboard.hello') }}, {{ profile.name }}!</h5>
                <div class="today-date">
                    <h2 class="mb-1">{{ date }}</h2>
                    <h5 class="text-muted m-0">{{ month }}, {{ year }}</h5>
                </div>
            </div>
        </slot>
        
        <div v-if="showGreeting && profile">
            <hr class="mt-4 mb-3">
        </div>

        <div class="item-list-wrapper flex-grow" :class="{'fixed-height': heightShouldBeFixed}">
            <vue-scroll id="vuescrollMeetings" ref="vuescrollMeetings">
                <div class="min-height-200px">
                    <animated-loader :is-loading="isLoading" :loader-color="vars.loaderColor" />

                    <ul class="item-list" v-if="others.meetings && others.meetings.length">
                        <li v-for="item in others.meetings" :key="item.uuid" class="item-item">
                            <router-link :to="{ name: 'appMeetingView', params: { uuid: item.uuid} }">
                                <div :class="['item-type', meetingIconColors[item.status]]" v-b-tooltip.hover.d500 :title="item.status.capitalize()">
                                    <i :class="meetingIcons[item.status]"></i>
                                </div>
                                <div class="item-details">
                                    <h6 class="item-title">{{ item.title }}</h6>
                                    <div class="item-schedule text-muted">

                                        <template v-if="item.startedAt !== null && validDate(item.startedAt)">{{ item.startedAt | momentCalendarTz({ sameElse: vars.defaultDateTimeFormat }) }}</template>
                                        <template v-else>{{ item.startDateTime | momentCalendarTz({ sameElse: vars.defaultDateTimeFormat }) }}</template>
                                    </div>
                                </div>
                            </router-link>
                        </li>

                    </ul>

                    <div v-else-if="!isLoading" class="d-flex align-items-center justify-content-center min-height-200px">
                        <h5 class="text-muted">
                            {{ $t('dashboard.nothing_to_show') }}
                        </h5>
                    </div>
                </div>
            </vue-scroll>
        </div>


    </card>
</template>

<script>
    import { mapGetters, mapActions } from 'vuex'
    import { momentDateTz } from '@core/filters/momentz'

    export default {
        name: "greeting-widget",
        props: {
            background: {
                type: String,
                default: null
            },
            border: {
                type: String,
            },
            shadow: {
                type: Boolean,
                default: false
            },
            showGreeting: {
                type: Boolean,
                default: true
            },
        },
        data() {
            return {
                isLoading: true,
                date: momentDateTz('NOW', 'dddd, Do'),
                month: momentDateTz('NOW', 'MMMM'),
                year: momentDateTz('NOW', 'YYYY'),
                meetingIcons: {
                    'scheduled': 'far fa-calendar-alt',
                    'live': 'fas fa-video',
                    'ended': 'far fa-calendar-check',
                    'cancelled': 'far fa-calendar-times',
                },
                meetingIconColors: {
                    'scheduled': 'bg-primary text-white no-border',
                    'live': 'bg-warning text-white no-border',
                    'ended': 'bg-success text-white no-border',
                    'cancelled': 'bg-danger text-white no-border',
                },
            }
        },
        computed: {
            ...mapGetters('config', [
                'vars',
            ]),
            ...mapGetters('user', [
                'profile',
            ]),
            ...mapGetters('common', [
                'others',
            ]),
            heightShouldBeFixed() {
                let total = 0
                total = total + (this.others.meetings ? this.others.meetings.length : 0)
                return total > 4
            },
        },
        methods: {
            ...mapActions('common', [
                'Custom',
                'SetOthers',
            ]),
            moment(args) {
                return moment(args)
            },
            resetVueScroll() {
                setTimeout(() => {
                    if(this.$refs['vuescrollMeetings']) {
                        this.$refs['vuescrollMeetings'].scrollTo({
                            x: 0,
                            y: 0
                        }, true)
                    }
                }, 100)
            },
            getInitialData() {
                this.isLoading = true

                this.Custom({
                        url: 'dashboard',
                        method: 'get',
                    })
                    .then(response => {
                        this.SetOthers({
                            meetings: response.meetings,
                            alerts: response.alerts,
                        })
                        this.resetVueScroll()
                        this.isLoading = false
                    })
                    .catch(error => {
                        this.isLoading = false
                        formUtil.handleErrors(error)
                    })
            },
            validDate(dt) {
                return moment(dt, this.vars.serverDateTimeFormat).isValid()
            },
        },
        mounted() {
            this.getInitialData()
        },
    }

</script>

<style lang="scss" scoped>
    @import '~@js/core/assets/scss/imports.scss';

    .greeting-widget {
        .item-list-wrapper {
            max-height: 400px;
            overflow: hidden;
            margin-left: -$card-spacer-x;
            margin-right: -$card-spacer-x;

            &.fixed-height {
                height: 380px;
            }

            .item-list {
                list-style: none;
                padding: 0;


                .item-item {
                    position: relative;
                    opacity: 0.85;
                    transition: $transition-all-easeinout;

                    > a {
                        height: 60px;
                        display: flex;
                        align-items: center;
                        padding: 10px $card-spacer-x;
                        color: $gray-800;
                        background: transparent;

                        &:hover {
                            background: $gray-light;
                        }
                    }

                    .item-type {
                        min-width: 40px;
                        width: 40px;
                        height: 40px;
                        border-radius: 50%;
                        font-size: $font-size-lg;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        color: $white;
                    }

                    .item-details {
                        margin-left: $margin-common;
                        overflow: hidden;

                        .item-title {
                            font-size: 90%;
                            white-space: nowrap;
                            overflow: hidden;
                            text-overflow: ellipsis;
                            margin: 0;
                        }
                        .item-schedule {
                            font-size: 75%;
                        }
                    }

                    &:nth-child(even) {
                        > a {
                            background: $gray-lighter;

                            &:hover {
                                background: $gray-light;
                            }
                        }
                    }


                }

                &:hover {
                    .item-item {
                        opacity: 0.3;
                        &:hover {
                            opacity: 1;
                        }
                    }
                }
            }
        }
    }
</style>