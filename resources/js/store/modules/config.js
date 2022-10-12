import store from '@js/store'
import { vars, updateVars } from '@js/vars'
import router from '@js/router'
import uiConfigComponents from './sources/ui-config-components'
import initialUiConfig from './sources/initial-ui-config'
import * as ConfigAPI from '@api/config'
import * as UnsplashAPI from '@api/unsplash'
import moment from 'moment'

function reloadIfRequired(c) {
    window.setTimeout(() => {
        const configsOriginal = store.getters['config/configsOriginal']
        const userPreference = store.getters['user/preference']

        const configLocale = userPreference && userPreference.system && userPreference.system.locale ? userPreference.system.locale : configsOriginal.system.locale

        const googleTranslated = document.documentElement.className.match('translated') && window.google !== undefined && window.google !== null ? true : false

        if(document.documentElement.lang !== configLocale && ! googleTranslated) {
            console.error('Need to reload due to language mismatch!')
            console.error("document.documentElement.lang", document.documentElement.lang)
            console.error("configLocale", configLocale)
            console.error("googleTranslated", googleTranslated)

            debugger
        }
    }, 2000)
}

const config = {
    namespaced: true,
    state: {
        config: {},
        ui: initialUiConfig,
        uiConfigComponents: uiConfigComponents,
        vars: Object.assign({}, vars),
        loaded: false,
        appIsLoading: true,
    },
    getters: {
        configs: state => {
            const preference = store.getters['user/preference']
            let configsToReturn = _.cloneDeep(state.config)
            if(preference) {
                preference.objForEach((value, key) => {
                    if(value && _.isObject(value)) {
                        if(configsToReturn.hasOwnProperty(key)) {
                            value.objForEach((secValue, secKey) => {
                                if(secValue && _.isObject(secValue)) {
                                    configsToReturn[key][secKey] = Object.assign({}, configsToReturn[key][secKey], secValue)
                                } else {
                                    configsToReturn[key][secKey] = secValue
                                }
                            })
                        }
                    } else {
                        configsToReturn[key] = value
                    }
                })
            }
            configsToReturn['allowExtraInput'] = state.config.system && state.config.system.enableMes && state.vars && state.vars.appKmon ? true : false
            return configsToReturn
        },
        configsOriginal: state => state.config,
        config: state => args => {
            const keys = args.split('.')
            let toReturn = state.config;
            keys.forEach(key => {
                toReturn = toReturn[key]
            })
            return toReturn
        },
        uiConfigs: state => state.ui,
        uiConfig: state => args => {
            const keys = args.split('.')
            let toReturn = state.ui;
            keys.forEach(key => {
                toReturn = toReturn[key]
            })
            return toReturn
        },
        vars: state => state.vars,
        uiConfigComponents: state => state.uiConfigComponents,
        isLoaded: state => state.loaded,
        isLicensed: state => state.config && state.config.license,
        appIsLoading: state => state.appIsLoading,
        isScreenLocked: (state) => {
            const lastActivity = store.getters['user/lastActivity']
            const locked = store.getters['user/locked']
            if(locked) {
                return true
            } else if(state.config && state.config.auth && lastActivity) {
                let lastActivityAfterTimeout = moment(lastActivity)
                    .add(state.config.auth.lockScreenTimeout, 'minutes')
                    .format(moment.HTML5_FMT.DATETIME_LOCAL_SECONDS)
                return moment()
                    .format(moment.HTML5_FMT.DATETIME_LOCAL_SECONDS) > lastActivityAfterTimeout
            }
            return false
        },
        wallpaper: state => state.ui.wallpaper,
        scrollLock: state => state.ui.scrollLock,
        allowExtraInput: state => state.config.system && state.config.system.enableMes && state.vars && state.vars.appKmon
    },
    mutations: {
        ADD_CONFIG: (state, configArgs = {}) => {
            state.config = Object.assign({}, state.config, configArgs)
        },
        ADD_UI_CONFIG: (state, configArgs = {}) => {
            state.ui = Object.assign({}, state.ui, configArgs)
        },
        SET_CONFIG: (state, configArgs = {}) => {
            configArgs.objForEach((value, key) => state.config[key] = value)
        },
        SET_UI_CONFIG: (state, configArgs = {}) => {
            configArgs.objForEach((value, key) => state.ui[key] = value)
        },
        SET_VARS: (state, configArgs = {}) => {
            configArgs.objForEach((value, key) => state.vars[key] = value)
        },
        SET_LOADED: (state, value) => { state.loaded = value },
        SET_APP_IS_LOADING: (state, value) => { state.appIsLoading = value },
        RESET_CONFIG: (state) => {
            state.config = {}
        },
        RESET_UI_CONFIG: (state) => {
            state.ui = initialUiConfig
        },
    },
    actions: {
        async GetConfig({ commit, getters, dispatch }, opts = {}) {
            if (opts && opts.resetFirst) {
                commit('RESET_CONFIG')
            }

            let params = opts && opts.params ? opts.params : null

            try {
                const response = await ConfigAPI.get(params).catch(e => { throw e })
                commit('ADD_CONFIG', response)
                if(!response.failedInstall) {
                    if(response.system) {
                        dispatch('SetupVars', response.system)
                    }
                    if(response.ui) {
                        dispatch('SetUiConfig', response.ui)
                    }
                    if(response.authenticated === true && !getters.isScreenLocked) {
                        dispatch('user/SetLastActivity', null, { root: true })

                        store.dispatch('user/GetUser').then(response => {
                            reloadIfRequired()
                        }).catch((error) => {
                            store.dispatch('user/Logout').then(() => {
                                Vue.toasted.error(error || 'Authentication failed, please login again', toastConfig)
                                vueRouter.push({ name: 'login' })
                            })
                        })
                    } else {
                        reloadIfRequired()
                    }

                }
                commit('SET_LOADED', true)
                return response
            } catch (error) {
                commit('RESET_CONFIG')
                commit('SET_LOADED', false)
                throw error
            }
        },
        SetConfig({ commit, dispatch }, configArgs) {
            commit('SET_CONFIG', configArgs)
            if(configArgs.system) {
                dispatch('SetupVars', configArgs.system)
            }
            if(configArgs.ui) {
                dispatch('SetUiConfig', configArgs.ui)
            }
        },
        SetUiConfig({ commit }, configArgs) {
            commit('SET_UI_CONFIG', configArgs)
            if(configArgs.notificationPosition) {
                window.toastConfig.position = configArgs.notificationPosition
                window.toastConfig.normal.position = configArgs.notificationPosition
                window.toastConfig.info.position = configArgs.notificationPosition
                window.toastConfig.success.position = configArgs.notificationPosition
                window.toastConfig.error.position = configArgs.notificationPosition
            }
            if(configArgs.notificationDuration) {
                window.toastConfig.duration = configArgs.notificationDuration
                window.toastConfig.normal.duration = configArgs.notificationDuration
                window.toastConfig.info.duration = configArgs.notificationDuration
                window.toastConfig.success.duration = configArgs.notificationDuration
                window.toastConfig.error.duration = configArgs.notificationDuration
            }
        },
        SetLoaded({ commit }, value) {
            commit('SET_LOADED', value)
        },
        SetAppIsLoading({ commit }, value) {
            commit('SET_APP_IS_LOADING', value)
        },
        async getWallpaper({ commit }, withoutSetting) {
            try {
                const response = await UnsplashAPI.getWallpaper().catch(e => { throw e })
                if(!withoutSetting) {
                    commit('SET_UI_CONFIG', { wallpaper: response })
                }
                return response
            } catch (error) {
                throw error
            }
        },
        ScrollLock({ commit }) {
            commit('SET_UI_CONFIG', { scrollLock: true })
        },
        ScrollUnlock({ commit }) {
            commit('SET_UI_CONFIG', { scrollLock: false })
        },
        ResetConfig({ commit }) {
            commit('RESET_CONFIG')
        },
        ResetUiConfig({ commit }) {
            commit('RESET_UI_CONFIG')
        },
        SetupVars({ commit, state }, systemConfig) {
            const currency = systemConfig.currency
            if(currency) {
                if(currency.position === 'prefix') {
                    currency.prefix = currency.symbol
                } else {
                    currency.suffix = currency.symbol
                }
            }

            commit('SET_VARS', {
                appName: vars.appName,
                appEnv: vars.appEnv,
                appVersion: vars.appVersion,
                appKmon: vars.appKmon,
                appDss: vars.appDss,
                defaultDateFormat: systemConfig.dateFormat,
                defaultTimeFormat: systemConfig.timeFormat,
                defaultDateTimeFormat: systemConfig.dateFormat + ' ' + systemConfig.timeFormat,
                datepickerConfig: {
                    ...state.vars.datepickerConfig,
                    dateFormat: state.vars.momentToDatepicker[state.vars.serverDateFormat],
                    altFormat: state.vars.momentToDatepicker[systemConfig.dateFormat],
                    allowInput: systemConfig.allowDateInput,
                },
                datepickerWithMonthConfig: {
                    ...state.vars.datepickerWithMonthConfig,
                    dateFormat: state.vars.momentToDatepicker[state.vars.serverDateFormat],
                    allowInput: systemConfig.allowDateInput,
                },
                timepickerConfig: {
                    ...state.vars.timepickerConfig,
                    dateFormat: state.vars.momentToTimepicker[state.vars.serverTimeFormat],
                    altFormat: state.vars.momentToTimepicker[systemConfig.timeFormat],
                    allowInput: systemConfig.allowDateInput,
                },
                datepickerRangeConfig: {
                    ...state.vars.datepickerRangeConfig,
                    dateFormat: state.vars.momentToDatepicker[state.vars.serverDateFormat],
                    altFormat: state.vars.momentToDatepicker[systemConfig.dateFormat],
                    allowInput: systemConfig.allowDateInput,
                },
                datepickerMultipleConfig: {
                    ...state.vars.datepickerMultipleConfig,
                    dateFormat: state.vars.momentToDatepicker[state.vars.serverDateFormat],
                    altFormat: state.vars.momentToDatepicker[systemConfig.dateFormat],
                    allowInput: systemConfig.allowDateInput,
                },
                datetimepickerConfig: {
                    ...state.vars.datetimepickerConfig,
                    dateFormat: state.vars.momentToDatepicker[state.vars.serverDateFormat] + ' ' + state.vars.momentToTimepicker[state.vars.serverTimeFormat],
                    altFormat: state.vars.momentToDatepicker[systemConfig.dateFormat] + ' ' + state.vars.momentToTimepicker[systemConfig.timeFormat],
                    allowInput: systemConfig.allowDateInput,
                },
                defaultCurrency: currency,
            })
        },
    }
}
export default config
