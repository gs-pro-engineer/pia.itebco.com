import request from '@core/utils/request'
const apiUrl = '/search';

export function search(term) {
    return request({
        url: apiUrl,
        method: 'get',
        params: {
            q: term
        }
    })
}
