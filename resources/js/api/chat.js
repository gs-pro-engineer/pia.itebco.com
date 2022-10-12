import { instanceSilent as request } from '@core/utils/request'
let apiUrl = '/chat'

export function getRooms(query) {
    return request({
        url: apiUrl + '/rooms',
        method: 'get',
        params: query
    })
}

export function getRoom(query) {
    return request({
        url: apiUrl + '/rooms/' + query.uuid,
        method: 'get',
    })
}

export function createRoom(data) {
    return request({
        url: apiUrl + '/rooms',
        method: 'post',
        data
    })
}

export function updateRoom(data) {
    return request({
        url: apiUrl + '/rooms/' + data.uuid,
        method: 'patch',
        data
    })
}

export function addMemberToRoom(data) {
    return request({
        url: apiUrl + '/rooms/' + data.uuid + '/members',
        method: 'post',
        data
    })
}

export function removeMemberFromRoom(data) {
    return request({
        url: apiUrl + '/rooms/' + data.uuid + '/members',
        method: 'delete',
        data
    })
}

export function searchRooms(term) {
    return request({
        url: apiUrl + '/rooms/search',
        method: 'get',
        params: { q: term }
    })
}

export function getRoomMembers(query, roomUuid) {
    return request({
        url: apiUrl + '/rooms/' + roomUuid + '/members',
        method: 'get',
        params: query
    })
}

export function searchRoomMembers(data) {
    return request({
        url: apiUrl + '/rooms/' + data.uuid + '/members',
        method: 'get',
        params: { q: data.term, mention: true }
    })
}

export function searchMessages(params) {
    return request({
        url: apiUrl + '/messages/search',
        method: 'get',
        params
    })
}

export function getMessages(query) {
    return request({
        url: apiUrl + '/messages',
        method: 'get',
        params: query
    })
}

export function sendMessage(data) {
    return request({
        url: apiUrl + '/messages',
        method: 'post',
        data
    })
}
