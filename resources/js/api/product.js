import request from '@js/core/utils/request'
const apiUrl = '';

export function getProduct() {
    return request({
        url: apiUrl + '/info',
        method: 'get'
    })
}

export function checkLicense(data) {
    return request({
        url: apiUrl + '/license',
        method: 'post',
        data
    })
}

export function postSupport(data) {
    return request({
        url: apiUrl + '/support',
        method: 'post',
        data
    })
}

export function downloadApp() {
    return request({
        url: apiUrl + '/download',
        method: 'post'
    })
}

export function updateApp(data) {
    return request({
        url: apiUrl + '/update',
        method: 'post',
        data
    })
}
