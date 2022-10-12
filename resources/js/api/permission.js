import request from '@core/utils/request'
const apiUrl = '/config/permissions';

export function getPreRequisite(module) {
    return request({
        url: apiUrl + '/pre-requisite',
        method: 'get',
        params: {
            module
        }
    })
}

export function assign(data) {
    return request({
        url: apiUrl + '/assign',
        method: 'post',
        data
    })
}
