import store from '@js/store'
import { formatCurrency } from '@core/utils'
const vars = store.getters['config/vars']


export function arrayOfObjects(value, opts) {
    let toReturn = ''

    if(value && value.length && opts) {
        value.forEach(detail => {
            if(toReturn) {
                toReturn += ', '
            }
            toReturn += `${detail[opts.firstAttr][opts.firstAttr2]} (${formatCurrency.to(detail[opts.secondAttr], vars.defaultCurrency, true, false, true, false)})`
        })
    }

    return toReturn
}

export function uppercase(val) {
    return val.toUpperCase()
}

export function capitalize(val) {
    return val.capitalize()
}

export function lowercase(val) {
    return val.toLowerCase()
}

export function objectWithName({name}) {
    return name
}

export function contact({name}) {
    return name
}

export function contactWithAlias({name, alias}) {
    return `${name} (${alias})`
}

export function contactWithAssociation({name, designation}) {
    return `${name} (${designation})`
}

export function user(user) {
    return user.profile ? user.profile.name || user.username : user.username
}

export function employee({name}) {
    return name
}

export function employeeWithAlias({name, alias}) {
    return `${name} (${alias})`
}

export function getRegion(value, item = {}) {
    let region = item ? item.city : ''
    region = region ? (item.zipcode ? `${region} - ${item.zipcode}` : region) : ''
    region = item.state ? (region ? `${region}, ${item.state}` : item.state) : region
    region = item.country ? (region ? `${region}, ${item.country.name}` : item.country.name) : region
    return region
}

export function percent(content) {
    return `${content} %`
}

export function date(content) {
    return moment(content, vars.serverDateFormat).format(vars.defaultDateFormat)
}

export function datetime(content) {
    return moment(content, vars.serverDateTimeFormat).format(vars.defaultDateTimeFormat)
}

export function truncateString(content, opts) {
    const max = opts.max || 30
    const suffix = content.length > max ? (opts.suffix || '...') : ''
    return content.slice(0, max) + suffix
}

export function limitWords(content, opts) {
    const contentArr = content.split(' ')
    const max = opts.max || 3
    const suffix = contentArr.length > max ? (opts.suffix || '...') : ''
    return contentArr.slice(0, max).join(' ') + suffix
}

export function badgeStatus(status) {
    return status ? 'true' : 'false'
}

export function badgeStatusYesNo(status) {
    return status ? $t('general.yes') : $t('general.no')
}

export function badgeStatusLabel(status, opts) {
    return status ? $t('general.yes') : $t('general.no')
}

export function badgeStatusCompleted(status) {
    return status ? $t('utility.todo.completed') : $t('utility.todo.incomplete')
}

export function currency(value, opts) {
    const currency = opts && opts.currency ? opts.currency : vars.defaultCurrency
    return formatCurrency.to(value, currency, true)
}

export function getCurrencyDescription(value, item = {}) {
    return `${item.currency.name} - ${item.currency.description} (${item.currency.symbol})`
}
