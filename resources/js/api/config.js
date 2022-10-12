import request from '@core/utils/request'
const apiUrl = '/config';

export function get(params) {
  return request({
    url: apiUrl,
    method: 'get',
    params: params
  })
}

export function getPreRequisite(types) {
  const params = { types: types }
  return request({
    url: apiUrl + '/pre-requisite',
    method: 'get',
    params: params
  })
}

export function update(data) {
  return request({
    url: apiUrl,
    method: 'post',
    data
  })
}

export function updateModule(data) {
  return request({
    url: apiUrl + '/module',
    method: 'post',
    data
  })
}

export function updateUserPref(data) {
  return request({
    url: '/user/preference',
    method: 'post',
    data
  })
}

export function getChildList(childName, query) {
  return request({
    url: apiUrl + '/' + childName,
    method: 'get',
    params: query
  })
}

export function getChild(childName, uuid) {
  return request({
    url: apiUrl + '/' + childName + '/' + uuid,
    method: 'get'
  })
}

export function storeChild(childName, data) {
  return request({
    url: apiUrl + '/' + childName,
    method: 'post',
    data
  })
}

export function updateChild(childName, uuid, data) {
  return request({
    url: apiUrl + '/' + childName + '/' + uuid,
    method: 'patch',
    data
  })
}

export function destroyChild(childName, uuid) {
  return request({
    url: apiUrl + '/' + childName + '/' + uuid,
    method: 'delete',
  })
}

export function getTranslator(uuid) {
  const params = { uuid: uuid }
  return request({
    url: apiUrl + '/translator/',
    method: 'get',
    params: params
  })
}

export function saveAzureApiKey(azureApiKey) {
  const params = { azureApiKey: azureApiKey }
  return request({
    url: apiUrl + '/azure_api_key',
    method: 'post',
    params: params
  })
}

export function saveGoogleApiKey(googleApiKey) {
  const params = { googleApiKey: googleApiKey }
  return request({
    url: apiUrl + '/google_api_key',
    method: 'post',
    params: params
  })
}