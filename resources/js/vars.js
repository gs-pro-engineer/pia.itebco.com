const colors = {
    'white': '#ffffff',
    'whitish': '#fafbfd',
    'blackish': '#131517',
    'black': '#000000',
    'gray100': '#f8f9fd',
    'gray200': '#e9ecf1',
    'gray300': '#dee2e9',
    'gray400': '#ced4dd',
    'gray500': '#adb5c0',
    'gray600': '#6c7580',
    'gray700': '#495060',
    'gray800': '#343a43',
    'gray900': '#212532',
    'blue': '#5e72e4',
    'indigo': '#0281d6',
    'purple': '#7a22a5',
    'pink': '#f3a4b5',
    'red': '#f5365c',
    'redish': '#e00c51',
    'orange': '#fb6340',
    'yellow': '#ffd600',
    'green': '#2dce89',
    'teal': '#2bffc6',
    'cyan': '#11cdef',
    'primary': '#0281d6',
    'dark-primary': '#0281d6',
    'light-primary': '#7e27d9',
    'secondary': '#e00c51',
    'dark-secondary': '#970837',
    'success': '#2dce89',
    'info': '#11cdef',
    'warning': '#fb6340',
    'danger': '#f5365c',
    'default': '#0a346d',
    'gray-lightest': '#f8f9fd',
    'gray-lighter': '#e9ecf1',
    'gray-light': '#dee2e9',
    'light': '#dee2e9',
    'gray-chalk': '#ced4dd',
    'gray': '#adb5c0',
    'dark': '#6c7580',
    'gray-dark': '#6c7580',
    'gray-darker': '#495060',
    'gray-charcoal': '#343a43',
    'gray-darkest': '#212532'
}

const momentToDatepicker = {
    "D-MM-YY": "j-m-y",
    "D-MM-YYYY": "j-m-Y",
    "DD-MM-YYYY": "d-m-Y",
    "MM-DD-YYYY": "m-d-Y",
    "YYYY-MM-DD": "Y-m-d",
    "MMM D, YYYY": "M j, Y",
    "MMMM D, YYYY": "F j, Y",
    "dddd, MMM D, YYYY": "l, M j, Y",
    "dddd, MMMM D, YYYY": "l, F j, Y",
    "D MMM YYYY": "j M Y",
    "D MMMM YYYY": "j F Y",
    "dddd, D MMM YYYY": "l, j M Y",
    "dddd, D MMMM YYYY": "l, j F Y",
}

const momentToTimepicker = {
    "H:m": "H:i",
    "H:m a": "H:i K",
    "H:m A": "H:i K",
    "H:mm": "H:i K",
    "H:mm a": "H:i K",
    "H:mm A": "H:i K",
    "HH:mm": "H:i K",
    "HH:mm a": "H:i K",
    "HH:mm A": "H:i K",
    "h:m": "h:i K",
    "h:m a": "h:i K",
    "h:m A": "h:i K",
    "h:mm": "h:i K",
    "h:mm a": "h:i K",
    "h:mm A": "h:i K",
    "hh:mm": "h:i K",
    "hh:mm a": "h:i K",
    "hh:mm A": "h:i K",
    "H:m:ss": "H:i:S",
    "H:m:ss a": "H:i:S K",
    "H:m:ss A": "H:i:S K",
    "H:mm:ss": "H:i:S K",
    "H:mm:ss a": "H:i:S K",
    "H:mm:ss A": "H:i:S K",
    "HH:mm:ss": "H:i:S",
    "HH:mm:ss a": "H:i:S K",
    "HH:mm:ss A": "H:i:S K",
    "h:m:ss": "h:i:S K",
    "h:m:ss a": "h:i:S K",
    "h:m:ss A": "h:i:S K",
    "h:mm:ss": "h:i:S K",
    "h:mm:ss a": "h:i:S K",
    "h:mm:ss A": "h:i:S K",
    "hh:mm:ss": "h:i:S K",
    "hh:mm:ss a": "h:i:S K",
    "hh:mm:ss A": "h:i:S K",
}

const momentToMonthpicker = {
    "MMM YYYY": "M Y",
    "MMMM YYYY": "F Y",
}

const datepickerConfig = {
    wrap: true,
    allowInput: false,
    dateFormat: "Y-m-d",
    altInput: true,
    altFormat: "F j, Y",
    locale: {
        firstDayOfWeek: 1
    },
}

const datepickerWithMonthConfig = {
    wrap: true,
    allowInput: false,
    dateFormat: "Y-m-d",
    altInput: true,
    altFormat: "F j, Y, l",
    locale: {
        firstDayOfWeek: 1
    },
}

const datepickerRangeConfig = {
    ...datepickerConfig,
    mode: 'range',
}

const datepickerMultipleConfig = {
    ...datepickerConfig,
    mode: 'multiple',
}

const timepickerConfig = {
    enableTime: true,
    noCalendar: true,
    altFormat: "h:i K",
    dateFormat: "H:i:S",
    time_24hr: false,
    wrap: true,
    allowInput: false,
    altInput: true,
}

const datetimepickerConfig = {
    enableTime: true,
    wrap: true,
    allowInput: false,
    altFormat: "F j, Y h:i K",
    dateFormat: "Y-m-d H:i:S",
    time_24hr: false,
    altInput: true,
    locale: {
        firstDayOfWeek: 1
    },
}

const onMonthOrYearChange = function(dObj, dStr, fp) {
    fp.setDate(new Date(fp.currentYear, fp.currentMonth), true)
}

const monthpickerConfig = {
    wrap: true,
    allowInput: false,
    dateFormat: "Y-m",
    altInput: true,
    altFormat: "F Y",
    locale: {
        firstDayOfWeek: 1
    },
}

const daymonthpickerConfig = {
    wrap: true,
    allowInput: false,
    dateFormat: "m-d",
    altInput: true,
    altFormat: "F j",
    locale: {
        firstDayOfWeek: 1
    },
}

const currencyIcons = {
    'INR': 'rupee-sign',
    'USD': 'dollar-sign',
}

const colorsForStatus = {
    'activated': 'success',
    'PENDING_APPROVAL': 'info',
    'disapproved': 'warning',
    'pending_activation': 'primary',
    'banned': 'dark',

    'pending': 'primary',
    'approved': 'success',
    'allotted': 'success',
    'rejected': 'danger',
    'cancelled': 'danger',

    'unpaid': 'danger',
    'paid': 'success',
    'partially_paid': 'warning',
    'not_applicable': 'dark',

    'open': 'info',
    'closed': 'success',
    'partially_closed': 'primary',
    'missed': 'dark',

    'meeting-scheduled': 'primary',
    'meeting-cancelled': 'danger',
    'meeting-live': 'success',

    'room-scheduled': 'primary',
    'room-close': 'danger',
    'room-open': 'success',
}

const defaultCurrency = {
    "description": "United States Dollar",
    "name": "USD",
    "symbol": "$",
    "icon": "dollar-sign",
    "position": "prefix",
    "decimal": 2,
    "thousand": 3,
    "decimal_delimeter": ".",
    "thousand_delimeter": ","
}

const keepAddingOptions = [
    { uuid: 'clear_all', name: 'clear_all' },
    { uuid: 'clear_all_but_selected', name: 'clear_all_but_selected' },
    { uuid: 'clear_only_selected', name: 'clear_only_selected' },
]

const momentCalendarShortLocale = {
    lastDay : 'Yesterday',
    sameDay : 'LT',
    lastWeek : 'll',
    sameElse : 'll'
}

let APP_NAME = 'KodeMint'
let APP_ENV = 'production'
let APP_VERSION = '1.0.0'

export const vars = {
    appName: APP_NAME,
    appEnv: APP_ENV,
    appVersion: APP_VERSION,
    appKmon: false,
    localStorageKey: APP_NAME + '_' + APP_ENV,
    localStorageVersionKey: APP_NAME + '_' + APP_ENV + '_version',
    serviceWorkerKey: APP_NAME + '_' + APP_ENV,
    serviceWorkerVersion: 'v1.12.0',
    defaultDateTimeFormat: 'lll',
    defaultDateFormat: 'll',
    defaultTimeFormat: 'LT',
    serverTimeFormat: 'HH:mm:ss',
    serverDateFormat: 'YYYY-MM-DD',
    serverDateTimeFormat: 'YYYY-MM-DD HH:mm:ss',
    monthYearFormat: 'MMM YYYY',
    datepickerConfig: datepickerConfig,
    datepickerWithMonthConfig: datepickerWithMonthConfig,
    timepickerConfig: timepickerConfig,
    datepickerRangeConfig: datepickerRangeConfig,
    datepickerMultipleConfig: datepickerMultipleConfig,
    datetimepickerConfig: datetimepickerConfig,
    monthpickerConfig: monthpickerConfig,
    onMonthOrYearChange: onMonthOrYearChange,
    daymonthpickerConfig: daymonthpickerConfig,
    momentToDatepicker: momentToDatepicker,
    momentToTimepicker: momentToTimepicker,
    momentToMonthpicker: momentToMonthpicker,
    loaderColor: colors.primary,
    colors: colors,
    colorsForStatus: colorsForStatus,
    currencyIcons: currencyIcons,
    keepAddingOptions: keepAddingOptions,
    defaultCurrency: defaultCurrency,
    momentCalendarShortLocale: momentCalendarShortLocale,
}

export const updateVars = () => {
    let domainUrl = window.location.hostname
    domainUrl = domainUrl.replace('www.', '').replace(/\./g, '')

    let keyName = domainUrl + '_' + APP_NAME + '_' + APP_ENV
    keyName = keyName.toLowerCase()

    vars.appName = APP_NAME = window.kmenv.name || APP_NAME
    vars.appEnv = APP_ENV = window.kmenv.env || APP_ENV
    vars.appVersion = APP_VERSION = window.kmenv.version || APP_VERSION
    vars.appKmon = window.kmenv.kmon || false
    vars.appDss = window.kmenv.dss || false
    vars.localStorageKey = keyName
    vars.localStorageVersionKey = keyName + '_version'
    vars.serviceWorkerKey = keyName
}

if(typeof window !== 'undefined'){
    updateVars()
}

export const fileIcons = {
    "application/json": "fa-file-code",
    "application/msword": "fa-file-word",
    "application/vnd.openxmlformats-officedocument.presentationml.presentation": "fa-file-powerpoint",
    "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet": "fa-file-excel",
    "application/vnd.openxmlformats-officedocument.wordprocessingml.document": "fa-file-word",
    "application/vnd.ms-excel": "fa-file-excel",
    "application/vnd.ms-powerpoint": "fa-file-powerpoint",
    "application/xml": "fa-file-code",
    "application/&": "fa-file-pdf",
    "application/pdf": "fa-file-pdf",
    "image/jpeg": "fa-file-image",
    "image/svg+xml": "fa-file-image",
    "image/vnd.adobe.photoshop": "fa-file-image",
    "image/vnd.microsoft.icon": "fa-file-image",
    "image/png": "fa-file-image",
    "image/&": "fa-file-image",
    "text/plain": "fa-file-alt",
    "video/mp4": "fa-file-video",
    "video/ogg": "fa-file-video",
    "video/quicktime": "fa-file-video",
    "video/&": "fa-file-video",
    "video/x-&": "fa-file-video"
}

export const fileMimeTypes = {
    "application/json": "json",
    "application/msword": "doc / dot",
    "application/vnd.openxmlformats-officedocument.presentationml.presentation": "pptx",
    "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet": "xlsx",
    "application/vnd.openxmlformats-officedocument.wordprocessingml.document": "docx",
    "application/vnd.ms-excel": "xla / xls / xlt",
    "application/vnd.ms-powerpoint": "pot / ppa / pps / ppt",
    "application/x-shockwave-flash": "swf",
    "application/xml": "atom / rdf / rss / xml",
    "application/&": "pdf / rtf / zip",
    "application/pdf": "pdf",
    "image/jpeg": "jpe / jpeg / jpg",
    "image/png": "png",
    "image/svg+xml": "svg / svgz",
    "image/vnd.adobe.photoshop": "psd",
    "image/vnd.microsoft.icon": "ico",
    "image/&": "bmp / ief / gif / png / tif / tiff / webp",
    "text/cache-manifest": "appcache / manifest",
    "text/plain": "txt",
    "text/x-component": "htc",
    "text/x-vcard": "vcf",
    "text/&": "css / html / php / vtt",
    "text/x-&": "markdown / md",
    "video/mp4": "mp4 / m4v / f4v / f4p",
    "video/ogg": "ogv",
    "video/quicktime": "mov / qt",
    "video/&": "avi / mpg / vdo / viv / vivo / webm",
    "video/x-&": "flv"
}

export default vars
