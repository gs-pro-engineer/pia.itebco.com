<template>
    <card shadow class="calendar-widget min-height-600px" body-classes="p-0 d-flex align-items-stretch">
        <animated-loader :is-loading="isLoading || !(others && others.calendar)" :loader-color="vars.loaderColor" />

        <div class="calendar folded-calendar" v-if="others && others.calendar">

            <div class="calendar-wrapper">
                <calendar-view
                    :events="others.calendar.events"
                    :show-date="showDate"
                    :time-format-options="{hour: 'numeric', minute:'2-digit'}"
                    :disable-past="false"
                    :disable-future="false"
                    :show-event-times="true"
                    :display-period-uom="displayPeriodUom"
                    :display-period-count="1"
                    :starting-day-of-week="startingDayOfWeek"
                    :class="['theme-default' ]"
                    :date-classes="others.calendar.dateClasses"
                    :period-changed-callback="periodChanged"
                    :current-period-label="$t('general.today')"
                    eventTop="4.5em"
                    eventContentHeight="1.4em"
                    eventBorderHeight="4px"
                    @click-date="onClickDay"
                    @click-event="onClickEvent">

                    <template #header="{ headerProps }">
                        <calendar-view-header :header-props="headerProps" @input="setShowDate" />
                    </template>

                </calendar-view>
            </div>

            <div class="calendar-agenda-wrapper" :class="{'show': selectedDate && (selectedEvent || eventsOnSelectedDate.length) }">

                <div class="calendar-agenda" v-if="selectedDate && selectedEvent">
                    <div class="selected-date mb-4">
                        <h2>{{ selectedDate | moment('dddd, Do') }}</h2>
                        <h5 class="text-muted m-0">{{ selectedDate | moment('MMMM') }}, {{ selectedDate | moment('YYYY') }}</h5>
                    </div>

                    <div class="event-details">
                        <h5 class="event-title font-weight-bold text-white">{{ selectedEvent.title }}</h5>
                        <div class="event-meta-wrapper">
                            <div class="event-meta" v-if="selectedEvent.venue">
                                <span><i class="fas fa-map-marker-alt"></i> {{ selectedEvent.venue }}</span>
                            </div>
                            <div class="event-meta">
                                <span><i class="fas fa-calendar-alt"></i></span>
                                <span>{{ selectedEvent.startDate | moment(vars.defaultDateFormat) }}</span>
                                <span v-if="selectedEvent.startTime">{{ [ selectedEvent.startTime, vars.serverTimeFormat ] | moment(vars.defaultTimeFormat) }}</span>

                                <template v-if="selectedEvent.endDate || selectedEvent.endTime">
                                    <span class="mx-1"> - </span>
                                    <span v-if="selectedEvent.endDate">{{ selectedEvent.endDate | moment(vars.defaultDateFormat) }}</span>
                                    <span v-if="selectedEvent.endTime">{{ [ selectedEvent.endTime, vars.serverTimeFormat ] | moment(vars.defaultTimeFormat) }}</span>
                                </template>
                            </div>
                        </div>
                        <div class="event-description-wrapper">
                            <vue-scroll id="vuescrollCelebration" ref="vuescrollCelebration">
                                <div class="event-description" v-html="selectedEvent.description"></div>
                            </vue-scroll>
                        </div>
                    </div>
                </div>

                <div class="calendar-agenda" v-else-if="selectedDate && eventsOnSelectedDate.length">

                    <div class="selected-date mb-4">
                        <h2>{{ selectedDate | moment('dddd, Do') }}</h2>
                        <h5 class="text-muted m-0">{{ selectedDate | moment('MMMM') }}, {{ selectedDate | moment('YYYY') }}</h5>
                    </div>

                    <ul class="selected-events-list">
                        <li class="event-item" v-for="event in eventsOnSelectedDate">
                            <div :class="['event-type', 'is-' + event.type ]"></div>
                            <div class="event-details">
                                <h6 class="event-title font-weight-bold">{{ event.title }}</h6>
                                <div class="event-meta-wrapper">
                                    <div class="event-meta" v-if="event.venue">
                                        <span><i class="fas fa-map-marker-alt"></i> {{ event.venue }}</span>
                                    </div>
                                    <div class="event-meta">
                                        <span><i class="fas fa-calendar-alt"></i></span>
                                        <span>{{ event.startDate | moment(vars.defaultDateFormat) }}</span>
                                        <span v-if="event.startTime">{{ [ event.startTime, vars.serverTimeFormat ] | moment(vars.defaultTimeFormat) }}</span>

                                        <template v-if="event.endDate || event.endTime">
                                            <span class="mx-1"> - </span>
                                            <span v-if="event.endDate">{{ event.endDate | moment(vars.defaultDateFormat) }}</span>
                                            <span v-if="event.endTime">{{ [ event.endTime, vars.serverTimeFormat ] | moment(vars.defaultTimeFormat) }}</span>
                                        </template>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>

        </div>
    </card>
</template>

<script>
    import { mapGetters, mapActions } from 'vuex'
    import 'vue-simple-calendar/static/css/default.css'
    import './folded-calendar.scss'

    import {
        CalendarView,
        CalendarViewHeader,
        CalendarMathMixin,
    } from 'vue-simple-calendar'

    export default {
        name: "calendar-widget",
        components: {
            CalendarView,
            CalendarViewHeader,
        },
        mixins: [ CalendarMathMixin ],
        props: {
        },
        data() {
            return {
                showDate: new Date(),
                startingDayOfWeek: 1,
                displayPeriodUom: "month",
                selectedDate: null,
                selectedEvent: null,
                useTodayIcons: false,
                eventsOnSelectedDate: [],
                isLoading: false,
            }
        },
        watch: {
        },
        computed: {
            ...mapGetters('config', [
                'vars',
            ]),
            ...mapGetters('common', [
                'others',
            ]),
            userLocale() {
                return this.getDefaultBrowserLocale
            },
            dayNames() {
                return this.getFormattedWeekdayNames(this.userLocale, "long", 0)
            },
        },
        methods: {
            ...mapActions('common', [
                'Custom',
                'SetOthers',
            ]),
            getInitialData(range) {
                this.isLoading = true

                let params = {}
                if(range && range.displayFirstDate && range.displayLastDate) {
                    params.startDate = moment(range.displayFirstDate).format(this.vars.serverDateFormat)
                    params.endDate = moment(range.displayLastDate).format(this.vars.serverDateFormat)
                }

                if(this.others && this.others.calendar && this.others.calendar.filters) {
                    this.others.calendar.filters.options.forEach(filter => {
                        if(filter.active) {
                            params[filter.param] = filter.value
                        }
                    })
                }

                this.Custom({
                        url: 'dashboard/calendar',
                        method: 'get',
                        params: params
                    })
                    .then(response => {
                        let dateClasses = {}
                        response.holidays.forEach(h => {
                            dateClasses[h.startDate] = ['holiday']
                        })

                        this.SetOthers({
                            calendar: {
                                events: _.cloneDeep(response.holidays.concat(response.events)),
                                dateClasses: _.cloneDeep(dateClasses)
                            }
                        })

                        this.isLoading = false
                    })
                    .catch(error => {
                        this.isLoading = false
                        this.formErrors = formUtil.handleErrors(error)
                    })
            },
            periodChanged(range, eventSource) {
                this.getInitialData(range)
            },
            thisMonth(d, h, m) {
                const t = new Date()
                return new Date(t.getFullYear(), t.getMonth(), d, h || 0, m || 0)
            },
            clearSelected() {
                let calendar = this.others.calendar
                if(this.selectedDate && calendar.dateClasses[this.selectedDate] && calendar.dateClasses[this.selectedDate].indexOf('selected') !== -1) {
                    let selectedDateClasses = calendar.dateClasses[this.selectedDate]
                    if(selectedDateClasses.isArray) {
                        selectedDateClasses.splice(selectedDateClasses.indexOf('selected'), 1)
                    } else {
                        selectedDateClasses.replace('selected', '')
                    }
                    calendar.dateClasses[this.selectedDate] = selectedDateClasses
                }
                this.selectedEvent = null
                this.selectedDate = null
                this.eventsOnSelectedDate = []
            },
            onClickDay(d) {
                let calendar = this.others.calendar
                this.clearSelected()
                this.selectedDate = moment(d).format(this.vars.serverDateFormat)
                let selectedDateClasses = calendar.dateClasses[this.selectedDate]
                if(selectedDateClasses) {
                    if(!selectedDateClasses.isArray) {
                        selectedDateClasses = selectedDateClasses.split(' ')
                    }
                    selectedDateClasses.push('selected')
                } else {
                    selectedDateClasses = ['selected']
                }
                calendar.dateClasses[this.selectedDate] = selectedDateClasses

                this.findEventsOnDate(moment(this.selectedDate, this.vars.serverDateFormat))
                this.SetOthers({
                    calendar: calendar
                })
            },
            onClickEvent(e) {
                this.clearSelected()
                this.selectedDate = moment(e.startDate).format(this.vars.serverDateFormat)
                this.selectedEvent = e.originalEvent
            },
            setShowDate(d) {
                this.showDate = d
            },
            findEventsOnDate(date) {
                let calendar = this.others.calendar
                this.eventsOnSelectedDate = calendar.events.filter(event => this.isEventOnDate(event, date))
            },
            isEventOnDate(event, date) {
                let eventStartDateMoment, eventEndDateMoment

                if(event.startDate) {
                    eventStartDateMoment = eventEndDateMoment = event.startDate.length === 10 ? moment(event.startDate, this.vars.serverDateFormat) : moment(event.startDate, this.vars.serverDateFormat + ' ' + 'HH:mm')

                    if(event.endDate) {
                        eventEndDateMoment = event.endDate.length === 10 ? moment(event.endDate, this.vars.serverDateFormat) : moment(event.endDate, this.vars.serverDateFormat + ' ' + 'HH:mm')
                    }

                    return moment(date).isBetween(eventStartDateMoment, eventEndDateMoment, null, '[]');
                }
                return false
            },
        },
        mounted() {
            this.getInitialData()
        },
    }

</script>
