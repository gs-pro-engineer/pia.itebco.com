import store from '@js/store'
const configs = store.getters['config/configs']
const vars = store.getters['config/vars']

const getActiveConfigs = () => {
    return {
        timezone: configs.authenticated ? configs.system.timezone : moment.tz.guess(),
        defaultDateFormat: vars.defaultDateFormat,
        defaultDateTimeFormat: vars.defaultDateTimeFormat,
        serverDateFormat: vars.serverDateFormat,
        serverDateTimeFormat: vars.serverDateTimeFormat,
        calendarLocale: {
            // lastDay: '[Yesterday]',
            lastDay: vars.defaultDateFormat,
            sameDay: vars.defaultTimeFormat,
            lastWeek: vars.defaultDateFormat,
            sameElse: vars.defaultDateFormat
        }
    }
}

export const now = (formatOption, timezoneOption) => {
    const activeConfigs = getActiveConfigs()
    let momentObj = moment.utc().tz(timezoneOption || activeConfigs.timezone)

    if(formatOption && formatOption.hasOwnProperty('moment') && formatOption.moment) {
        return momentObj
    }

    return momentObj.format(formatOption || activeConfigs.defaultDateTimeFormat)
}

export const momentDate = (value, formatOption) => {
    const activeConfigs = getActiveConfigs()
    let momentObj = moment(value, activeConfigs.serverDateFormat)

    if(!value) {
        return 'INVALID DATE STRING'
    }

    if(Array.isArray(value)) {
        momentObj = moment(value[0], value[1])
    }

    if(formatOption && formatOption.hasOwnProperty('moment') && formatOption.moment) {
        return momentObj
    }

    return momentObj.format(formatOption || activeConfigs.defaultDateFormat)
}

export const momentTime = (value, formatOption) => {
    const activeConfigs = getActiveConfigs()
    let momentObj = moment(value, activeConfigs.serverTimeFormat)

    if(!value) {
        return 'INVALID TIME STRING'
    }

    if(Array.isArray(value)) {
        momentObj = moment(value[0], value[1])
    }

    if(formatOption && formatOption.hasOwnProperty('moment') && formatOption.moment) {
        return momentObj
    }

    return momentObj.format(formatOption || activeConfigs.defaultTimeFormat)
}

export const momentDateTime = (value, formatOption) => {
    const activeConfigs = getActiveConfigs()
    let momentObj = moment(value, activeConfigs.serverDateTimeFormat)

    if(!value) {
        return 'INVALID DATE TIME STRING'
    }

    if(Array.isArray(value)) {
        momentObj = moment(value[0], value[1])
    }

    if(formatOption && formatOption.hasOwnProperty('moment') && formatOption.moment) {
        return momentObj
    }

    return momentObj.format(formatOption || activeConfigs.defaultDateTimeFormat)
}

export const momentCalendar = (value, calendarOption) => {
    const activeConfigs = getActiveConfigs()
    let momentObj = moment(value, activeConfigs.serverDateTimeFormat)

    if(!value) {
        return 'INVALID DATE TIME STRING'
    }

    if(Array.isArray(value)) {
        momentObj = moment(value[0], value[1])
    }

    if(calendarOption && calendarOption.hasOwnProperty('moment') && calendarOption.moment) {
        return momentObj
    }

    return momentObj.calendar(calendarOption ? calendarOption : activeConfigs.calendarLocale)
}

export const momentDateTz = (value, formatOption, timezoneOption) => {
    const activeConfigs = getActiveConfigs()

    if(!value) {
        return 'INVALID DATE STRING'
    }

    let momentObj = moment.utc(value, activeConfigs.serverDateFormat)

    if(value === 'NOW') {
        momentObj = moment.utc()
    }

    if(Array.isArray(value)) {
        momentObj = moment.utc(value[0], value[1])
    }

    if(formatOption && formatOption.hasOwnProperty('moment') && formatOption.moment) {
        return momentObj.tz(timezoneOption || activeConfigs.timezone)
    }

    return momentObj.tz(timezoneOption || activeConfigs.timezone).format(formatOption || activeConfigs.defaultDateFormat)
}

export const momentTimeTz = (value, formatOption, timezoneOption) => {
    const activeConfigs = getActiveConfigs()
    let momentObj = moment.utc(`${moment().format(activeConfigs.serverDateFormat)} ${value}`, activeConfigs.serverTimeFormat)

    if(!value) {
        return 'INVALID TIME STRING'
    }

    if(Array.isArray(value)) {
        momentObj = moment.utc(value[0], value[1])
    }

    if(formatOption && formatOption.hasOwnProperty('moment') && formatOption.moment) {
        return momentObj.tz(timezoneOption || activeConfigs.timezone)
    }

    return momentObj.tz(timezoneOption || activeConfigs.timezone).format(formatOption || activeConfigs.defaultTimeFormat)
}

export const momentDateTimeTz = (value, formatOption, timezoneOption) => {
    const activeConfigs = getActiveConfigs()

    if(!value) {
        return 'INVALID DATE TIME STRING'
    }

    let momentObj

    if(value === 'NOW') {
        momentObj = moment.utc()
    } else if(Array.isArray(value)) {
        momentObj = moment.utc(value[0], value[1])
    } else {
        momentObj = moment.utc(value, activeConfigs.serverDateTimeFormat)
    }

    if(formatOption && formatOption.hasOwnProperty('moment') && formatOption.moment) {
        return momentObj.tz(timezoneOption || activeConfigs.timezone)
    }

    return momentObj.tz(timezoneOption || activeConfigs.timezone).format(formatOption || activeConfigs.defaultDateTimeFormat)
}

export const momentCalendarTz = (value, calendarOption = null, timezoneOption = null) => {
    const activeConfigs = getActiveConfigs()
    let momentObj = moment.utc(value, activeConfigs.serverDateTimeFormat)

    if(!value) {
        return 'INVALID DATE TIME STRING'
    }

    if(Array.isArray(value)) {
        momentObj = moment.utc(value[0], value[1])
    }

    let result = momentObj.tz(timezoneOption || activeConfigs.timezone)

    if(calendarOption && calendarOption.hasOwnProperty('moment') && calendarOption.moment) {
        return result
    }

    result = result.calendar(calendarOption ? calendarOption : activeConfigs.calendarLocale)
    return result
}

export default { momentDate, momentTime, momentDateTime, momentCalendar, momentDateTz, momentTimeTz, momentDateTimeTz, momentCalendarTz }
