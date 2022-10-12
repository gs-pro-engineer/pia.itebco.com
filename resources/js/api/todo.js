import request from '@core/utils/request';
const apiUrl = '/todo';

export function getList(query) {
    return request({
        url: apiUrl,
        method: 'get',
        params: query
    })
}

export function get(uuid) {
    return request({
        url: apiUrl + '/' + uuid,
        method: 'get'
    })
}

export function store(data) {
    return request({
        url: apiUrl,
        method: 'post',
        data
    })
}

export function update(uuid, data) {
    return request({
        url: apiUrl + '/' + uuid,
        method: 'patch',
        data
    })
}

export function destroy(uuid) {
    return request({
        url: apiUrl + '/' + uuid,
        method: 'delete',
    })
}
