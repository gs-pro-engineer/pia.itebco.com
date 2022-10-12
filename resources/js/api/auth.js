import axios from 'axios'
import request from '@core/utils/request'

const apiUrl = '/auth'

axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
axios.defaults.withCredentials = true;

function getAdditionQueryParams() {
    const locale = getQueryStringByParam('locale')
    if (locale) {
        return `?locale=${locale}`
    }
    return ''
}

export function csrf() {
    return axios.get('/sanctum/csrf-cookie')
}

export function login(email, password) {
    const additionalQueryParams = getAdditionQueryParams()
    const data = {
        email,
        password,
    }

    return request({
        url: apiUrl + '/login' + additionalQueryParams,
        method: 'post',
        data
    })
}

export function loginUsingOtp(user) {
    const additionalQueryParams = getAdditionQueryParams()
    let data = {}
    if (user.email) {
        data.email = user.email
    }
    if (user.ref) {
        data.ref = user.ref
    }
    if (user.mobile) {
        data.mobile = user.mobile
    }
    if (user.otp) {
        data.otp = user.otp
    }
    return request({
        url: apiUrl + '/login/otp' + additionalQueryParams,
        method: 'post',
        data
    })
}

export function register(params) {
    const additionalQueryParams = getAdditionQueryParams()
    let data = {
        ...params,
    }
    return request({
        url: apiUrl + '/register' + additionalQueryParams,
        method: 'post',
        data
    })
}

export function requestReset({ email }) {
    const additionalQueryParams = getAdditionQueryParams()
    const data = {
        email
    }
    return request({
        url: apiUrl + '/password' + additionalQueryParams,
        method: 'post',
        data
    })
}

export function validateResetPassword({ email, code }) {
    const additionalQueryParams = getAdditionQueryParams()
    const data = {
        email,
        code,
    }
    return request({
        url: apiUrl + '/validate-reset-password' + additionalQueryParams,
        method: 'post',
        data
    })
}

export function verifyTwoFactorCode(params) {
    const additionalQueryParams = getAdditionQueryParams()
    let data = {
        ...params,
    }
    return request({
        url: apiUrl + '/security' + additionalQueryParams,
        method: 'post',
        data
    })
}

export function verifyToken(token) {
    const additionalQueryParams = getAdditionQueryParams()
    const data = {
        token
    }
    return request({
        url: apiUrl + '/verify' + additionalQueryParams,
        method: 'post',
        data
    })
}

export function resetPassword(params) {
    const additionalQueryParams = getAdditionQueryParams()
    let data = {
        ...params,
    }
    return request({
        url: apiUrl + '/reset' + additionalQueryParams,
        method: 'post',
        data
    })
}

export function unlock(user) {
    const additionalQueryParams = getAdditionQueryParams()
    const data = {
        password: user.password,
    }
    return request({
        url: apiUrl + '/lock' + additionalQueryParams,
        method: 'post',
        data
    })
}

export function logout() {
    const additionalQueryParams = getAdditionQueryParams()
    return request({
        url: apiUrl + '/logout' + additionalQueryParams,
        method: 'post',
    })
}

export function getUser() {
    return request({
        url: apiUrl + '/user',
        method: 'get',
    })
}

export function getUsers() {
    return request({
        url: apiUrl + '/users',
        method: 'get'
    })
}

export function changePassword(params) {
    const additionalQueryParams = getAdditionQueryParams()
    let data = {
        ...params,
    }
    return request({
        url: apiUrl + '/change-password' + additionalQueryParams,
        method: 'post',
        data
    })
}
