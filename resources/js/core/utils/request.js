import axios from 'axios'
import NProgress from 'nprogress'
import store from '@js/store'
import { baseURL } from '@js/router'
import { handleErrors } from './form'
import { formatKeysToCamelCase, formatKeysToSnakeCase } from './formatter'

axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
axios.defaults.withCredentials = true;

const instance = axios.create({
    baseURL: '/api',
    withCredentials: true,
})

const instanceSilent = axios.create({
    baseURL: '/api',
    withCredentials: true,
})

NProgress.configure({
    easing: 'ease',
    speed: 800
})

function setupProgress(inst) {
    function progressFn(ed) {
        const percentage = calculatePercentage(ed.loaded, ed.total)
        NProgress.set(percentage)
    }

    inst.defaults.onDownloadProgress = e => {

        // if(!e.lengthComputable) return



        progressFn(e)
    }

    inst.defaults.onUploadProgress = e => {

        // if(!e.lengthComputable) return



        progressFn(e)
    }
}

function setupRequestInterceptors(inst, silent = false) {
    inst.interceptors.request.use(
        config => {

            config.headers['X-Requested-With'] = 'XMLHttpRequest'

            // if(config.url.indexOf('?') !== -1) {
            //     let urlArr = config.url.split('?')
            //     urlArr[1] = formatKeysToSnakeCase(urlArr[1])
            //     config.url = urlArr.join('?')
            // }

            if(config.params) {
                config.params = formatKeysToSnakeCase(config.params)
            }

            if(!config.upload && config.data) {
                config.data = formatKeysToSnakeCase(config.data)
            }
            return config
        },
        error => {
            if(!silent) {
                NProgress.done(true)
            }

            handleErrors(error)
            return Promise.reject(error)
        })
}

function setupResponseInterceptors(inst, silent = false) {
    inst.interceptors.response.use(
        response => {
            if(!silent) {
                if(NProgress.status === null) {
                    NProgress.set(0.1)
                }
                setTimeout(() => {
                    NProgress.done(true)
                }, 200)
            }


            if((typeof response.data === 'object' || response.data.isArray) && response.data !== null) {
                return formatKeysToCamelCase(response.data)
            }
            return response.data
        },
        error => {
            let err = {}
            if(!silent) {
                NProgress.done(true)
            }

            err.response = error.response
            let calledUrl = err.response.config && err.response.config.url ?  err.response.config.url : null

            const errorStatus = err.response.status

            if(errorStatus === 419) {
                handleErrors(err)
                location.reload()
                return Promise.reject(err)
            } else if(errorStatus === 400 || errorStatus === 401) {

                handleErrors(err)

                logout(calledUrl, () => {
                    vueRouter.push({ name: 'login' })
                })
                // location.reload()

            } else if(errorStatus === 403 || errorStatus === 404 || errorStatus === 500) {

                // handleErrors(error)

                return Promise.reject(formatKeysToCamelCase(err))

            } else if(errorStatus === 406) {

                // handleErrors(err)


                const errorData = err.response.data
                try {
                    if(errorData.hasOwnProperty('cmd')) {
                        const command = errorData.cmd
                        if(command === 'logout') {
                            logout(calledUrl, () => {
                                vueRouter.push({ name: 'login' })
                            })
                            return Promise.reject(formatKeysToCamelCase(err))
                        } else if(command === 'reload') {
                            location.reload()
                            return Promise.reject(formatKeysToCamelCase(err))
                        } else if(command === 'logout&hardReload') {
                            logout(calledUrl, () => {
                                location.reload(true)
                            })
                            return Promise.reject(formatKeysToCamelCase(err))
                        } else if(command === 'redirectTo') {
                            if(vueRouter.currentRoute.name !== errorData.path)
                            {
                                vueRouter.push({ name: errorData.path })
                            }
                        } else {
                            return Promise.reject(formatKeysToCamelCase(err))
                        }
                    } else {
                        return Promise.reject(formatKeysToCamelCase(err))
                    }
                } catch(e){
                     return Promise.reject(e)
                }

            } else if(errorStatus === 422) {
                const errorData = err.response && err.response.data && err.response.data.errors ? err.response.data.errors : null
                if(errorData) {
                    let newObject = {}

                    errorData.objForEach((value, key) => {
                        const regexToMatch = /.*.[0-9]..*/gm
                        const regexToExtract = /.*.[0-9]./gm
                        let newKey = ''
                        let result = regexToMatch.test(key)
                        if (result) {
                            const newKeyArr = key.match(regexToExtract)
                            let newKey = newKeyArr[0]
                            newKey = newKey.replace(/\./g,'')
                            let newParentKey = newKey.replace(/[0-9]/g,'')
                            const secondaryKey = key.replace(newKeyArr[0], '')
                            newObject[secondaryKey] = (value.isArray ? value .join(",") : value).replace(key, secondaryKey)

                            if(! err.response.data.errors.hasOwnProperty(newParentKey)) {
                                err.response.data.errors[newParentKey] = {}
                            }

                            err.response.data.errors[newParentKey][newKey] = [JSON.stringify(newObject)]
                            delete err.response.data.errors[key]
                        }
                    })
                }
                return Promise.reject(formatKeysToCamelCase(err))
            } else {

                // handleErrors(error)

                return Promise.reject(formatKeysToCamelCase(err))

            }
        })
}

function logout(calledUrl, callback) {
    if(calledUrl === '/auth/logout') {
        callback()
        return
    }
    store.dispatch('user/Logout').then(() => {
        callback()
    })
}

function calculatePercentage(loaded, total) {
    return (Math.floor(loaded * 1.0) / total)
}

setupProgress(instance)

setupRequestInterceptors(instance)
setupRequestInterceptors(instanceSilent, true)

setupResponseInterceptors(instance)
setupResponseInterceptors(instanceSilent, true)

export default instance
export { axios, instance, instanceSilent }
