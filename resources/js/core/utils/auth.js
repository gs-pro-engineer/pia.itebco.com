import Cookies from 'js-cookie'
import vars from '@js/vars'
const TokenKey = 'XSRF-TOKEN'

export function getToken() {
    return Cookies.get(TokenKey)
}

export function setToken(token, ttl = 1440) {
    return Cookies.set(TokenKey, token, {
        expires: new Date(new Date().getTime() + ttl * 60 * 1000)
    })
}

export function removeToken() {
    return Cookies.remove(TokenKey)
}

export function clearStore(reload = false) {
    window.localStorage.removeItem(vars.localStorageKey)
    window.localStorage.removeItem(vars.localStorageVersionKey)
    window.localStorage.clear()

    if(reload) {
        window.location.reload(true)
    }
}
