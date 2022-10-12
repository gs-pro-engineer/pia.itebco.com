import { instance as request, instanceSilent as silentRequest } from '@core/utils/request'
let apiUrl = ''
let apiSubUrl = ''

export function setApiUrl(newApiUrl) {
    apiUrl = newApiUrl
}

export function setApiSubUrl(newApiUrl) {
    apiSubUrl = newApiUrl ? '/' + newApiUrl : ''
}

export function getUrl() {
    return apiUrl + apiSubUrl
}

export function getList(query) {
    let tempApiUrl = apiUrl + apiSubUrl
    if(query.hasOwnProperty('apiWithAbsUrl')) {
        tempApiUrl = query.apiWithAbsUrl
        delete query.apiWithAbsUrl
    } else if(query.hasOwnProperty('apiWithUrl')) {
        tempApiUrl = apiUrl + apiSubUrl + '/' + query.apiWithAbsUrl
        delete query.apiWithUrl
    }

    return request({
        url: tempApiUrl,
        method: 'get',
        params: query
    })
}

export function getPreRequisite(query) {
    return request({
        url: apiUrl + apiSubUrl + '/pre-requisite',
        method: 'get',
        params: query
    })
}

export function get(uuid, params) {
    return request({
        url: apiUrl + apiSubUrl + '/' + uuid,
        method: 'get',
        params: params || {}
    })
}

export function store(data) {
    return request({
        url: apiUrl + apiSubUrl,
        method: 'post',
        data
    })
}

export function update(uuid, data) {
    return request({
        url: apiUrl + apiSubUrl + '/' + uuid,
        method: 'patch',
        data
    })
}

export function destroy(uuid) {
    return request({
        url: apiUrl + apiSubUrl + '/' + uuid,
        method: 'delete',
    })
}

export function custom(options) {
    return request(options)
}

export function silentCustom(options) {
    return silentRequest(options)
}

export function print(filter) {
    return request({
        url: apiUrl + apiSubUrl + '/print',
        method: 'post',
        data: {
            filter
        }
    })
}

export function exportFile(type, filter) {
    return request({
        url: apiUrl + apiSubUrl + '/' + type,
        method: 'post',
        data: {
            filter
        }
    })
}
