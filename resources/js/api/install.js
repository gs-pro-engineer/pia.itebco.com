import request from '@js/core/utils/request'
const apiUrl = '/install';

export function getPreRequisite() {
    return request({
        url: apiUrl + '/pre-requisite',
        method: 'get'
    })
}

export function validate(option, data) {
    return request({
        url: apiUrl + '/validate?option=' + option,
        method: 'post',
        data
    })
}

export function install(data) {
    return request({
        url: apiUrl,
        method: 'post',
        data
    })
}
