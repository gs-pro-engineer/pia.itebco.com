import store from '@js/store'
import router from '@js/router'
import * as AuthAPI from '@api/auth'
import * as NotificationAPI from '@api/notification'
import * as AuthUtils from '@core/utils/auth'
import moment from 'moment';

const paginationMeta = {
    data: [],
    meta: {
        total: 0,
        currentPage: 1,
        perPage: 10,
    }
}

let activityTimer = null
let refreshConfigTimer = null

const user = {
    namespaced: true,
    state: {
        uuid: '',
        email: '',
        username: '',
        status: '',
        profile: {},
        roles: [],
        permissions: [],
        notifications: Object.assign({}, paginationMeta),
        preference: {},
        twoFactorSet: false,
        hasActiveMembership: false,
        membershipExpiryDate: null,
        hasLifetimeMembership: false,
        lastActivity: null,
        locked: false,
        lockin: null,
        liveUsers: [],
        allUsers: {},
    },
    getters: {
        get: state => key => state[key],
        isAuth: (state) => {
            const configs = store.getters['config/configs']
            return configs.authenticated === true && state.roles.length && state.permissions.length ? true : false
        },
        uuid: state => state.uuid,
        email: state => state.email,
        username: state => state.username,
        status: state => state.status,
        profile: state => state.profile || {},
        name: state => state.profile ? state.profile.name : null,
        avatar: state => state.profile ? state.profile.avatar : null,
        cover: state => state.profile ? state.profile.cover : null,
        gender: state => state.profile ? state.profile.gender : null,
        language: state => state.profile ? state.profile.language : null,
        birthDate: state => state.profile ? state.profile.birthDate : null,
        age: state => state.profile ? state.profile.age : null,
        roles: state => state.roles,
        permissions: state => state.permissions,
        notifications: state => state.notifications,
        notificationCount: state => state.notifications.meta.total,
        preference: state => state.preference,
        twoFactorSet: state => state.twoFactorSet,
        hasActiveMembership: state => state.hasActiveMembership,
        membershipExpiryDate: state => state.membershipExpiryDate,
        hasLifetimeMembership: state => state.hasLifetimeMembership,
        locked: state => state.locked,
        lockin: state => state.lockin,

        loggedInUser: state => {
            return {
                uuid: state.uuid,
                username: state.username,
                email: state.email,
                profile: state.profile,
                name: state.profile ? state.profile.name : null,
                avatar: state.profile ? state.profile.avatar : null,
                cover: state.profile ? state.profile.cover : null,
                gender: state.profile ? state.profile.gender : null,
                language: state.profile ? state.profile.language : null,
                birthDate: state.profile ? state.profile.birthDate : null,
                age: state.profile ? state.profile.age : null,
            }
        },
        liveUsers: state => state.liveUsers,
        liveLoggedInUser: state => state.liveUsers.find(u => u.uuid === state.uuid),
        loggedInUserBusy: state => {
            const loggedUser = state.liveUsers.find(u => (u.uuid === state.uuid))
            return loggedUser && !!loggedUser.busy
        },

        lastActivity: state => state.lastActivity,
        hasRole: state => role => state.roles.indexOf(role) !== -1,
        hasAnyRole: state => (roles = []) => state.roles.some(role => roles.indexOf(role) !== -1),
        hasAllRoles: state => (roles = []) => state.roles.every(role => roles.indexOf(role) !== -1),
        hasPermission: state => permission => state.permissions.indexOf(permission) !== -1,
        hasAnyPermission: state => (permissions = []) => permissions.some(permission => state.permissions.indexOf(permission) !== -1),
        hasAllPermissions: state => (permissions = []) => permissions.every(permission => state.permissions.indexOf(permission) !== -1),
        allUsers: state => state.allUsers
    },
    mutations: {
        SET_UUID: (state, uuid = '') => { state.uuid = uuid },
        SET_EMAIL: (state, email = '') => { state.email = email },
        SET_USERNAME: (state, username = '') => { state.username = username },
        SET_STATUS: (state, status = '') => { state.status = status },
        SET_PROFILE: (state, profile = {}) => { state.profile = profile },
        SET_PROFILE_DETAILS: (state, profile = {}) => {
            state.name = profile.name || null
            state.avatar = profile.avatar || null
            state.cover = profile.cover || null
            state.gender = profile.gender || null
            state.language = profile.language || null
            state.birthDate = profile.birthDate || null
            state.age = profile.age || null
        },
        SET_ROLES: (state, roles = []) => { state.roles = roles },
        SET_PERMISSIONS: (state, permissions = []) => { state.permissions = permissions },
        SET_NOTIFICATIONS: (state, data = {}) => {
            state.notifications = Object.assign({}, state.notifications, data)
        },
        SET_PREFERENCE: (state, preference = {}) => { state.preference = preference },
        SET_MEMBERSHIP: (state, data) => {
            state.hasActiveMembership = data.hasActiveMembership
            state.membershipExpiryDate = data.membershipExpiryDate
            state.hasLifetimeMembership = data.hasLifetimeMembership
        },
        SET_TWO_FACTOR_SET: (state, twoFactorSet) => { state.twoFactorSet = twoFactorSet },
        SET_LAST_ACTIVITY: (state, timestamp) => { state.lastActivity = timestamp },
        SET_LOCKED: (state, isLocked) => {
            state.locked = isLocked
            state.lockin = null
        },
        SET_LOCKIN: (state, lockin) => {
            state.lockin = lockin
        },
        SET_LIVE_USERS: (state, users) => {
            state.liveUsers = users
        },
        ADD_LIVE_USER: (state, user) => {
            state.liveUsers.push(user)
        },
        REMOVE_LIVE_USER: (state, user) => {
            let liveUserIndex = state.liveUsers.findIndex(u => u.uuid === user.uuid)
            if (liveUserIndex !== -1) {
                state.liveUsers = state.liveUsers.filter(u => u.uuid !== user.uuid)
            }
        },
        UPDATE_LIVE_USER: (state, user) => {
            const existingIndex = state.liveUsers.findIndex(u => u.uuid === user.uuid)
            if (existingIndex !== -1) {
                if (user.hasOwnProperty('timerToFalse') && user.timerToFalse) {
                    user.timerToFalse = setTimeout(() => {
                        state.liveUsers[existingIndex]['status'] = false
                    }, user.timerToFalse)
                } else {
                    if (state.liveUsers[existingIndex].timerToFalse) {
                        clearTimeout(state.liveUsers[existingIndex].timerToFalse)
                    }
                    state.liveUsers[existingIndex].timerToFalse = null
                }

                user.objForEach((value, key) => state.liveUsers[existingIndex][key] = value)
            }
        },
        RESET_LIVE_USERS: (state) => {
            state.liveUsers = []
        },
        RESET_USER: (state) => {
            state.uuid = ''
            state.email = ''
            state.username = ''
            state.status = ''
            state.profile = {}
            state.roles = []
            state.permissions = []
            state.preference = {}
            state.twoFactorSet = false
            state.lastActivity = null
            state.locked = false
        },
        RESET_NOTIFICATIONS: (state) => {
            state.notifications = Object.assign({}, paginationMeta)
        },
        SET_ALL_USERS: (state, users) => { state.allUsers = users }
    },
    actions: {
        async SetCSRF() {
            return await AuthAPI.csrf().catch(e => { throw e })
        },

        async Login({ commit, dispatch }, user) {
            try {
                commit('RESET_USER')
                let response = await AuthAPI.login(user.email, user.password).catch(e => { throw e })
                commit('SET_TWO_FACTOR_SET', response.twoFactorSet || false)
                return await dispatch('SetUser', response.user)
            } catch (error) {
                commit('RESET_USER')
                throw error
            }
        },

        async LoginUsingOtp({ commit, dispatch }, user) {
            try {
                commit('RESET_USER')
                let response = await AuthAPI.loginUsingOtp(user).catch(e => { throw e })
                if (user.otp) {
                    return await dispatch('SetUser', response.user)
                } else {
                    return response
                }
            } catch (error) {
                commit('RESET_USER')
                throw error
            }
        },

        async Register({ commit, dispatch }, formData) {
            try {
                return await AuthAPI.register(formData).catch(e => { throw e })
            } catch (error) {
                throw error
            }
        },

        async CheckTwoFactorCode({ commit, dispatch }, formData) {
            try {
                let response = await AuthAPI.verifyTwoFactorCode(formData).catch(e => { throw e })
                await dispatch('config/GetConfig', null, { root: true })
                return response
            } catch (error) {
                throw error
            }
        },

        async RequestReset({ commit }, data) {
            try {
                commit('RESET_USER')
                return await AuthAPI.requestReset(data).catch(e => { throw e })
            } catch (error) {
                commit('RESET_USER')
                throw error
            }
        },

        async ValidateResetPassword({ commit }, data) {
            try {
                return await AuthAPI.validateResetPassword(data).catch(e => { throw e })
            } catch (error) {
                throw error
            }
        },

        async VerifyToken({ commit }, token) {
            try {
                return await AuthAPI.verifyToken(token).catch(e => { throw e })
            } catch (error) {
                throw error
            }
        },

        async ResetPassword({ commit }, data) {
            try {
                commit('RESET_USER')
                return await AuthAPI.resetPassword(data).catch(e => { throw e })
            } catch (error) {
                commit('RESET_USER')
                throw error
            }
        },

        async Lock({ commit }) {
            try {
                return await commit('SET_LOCKED', true)
            } catch (error) {
                throw error
            }
        },

        async Unlock({ commit }, user) {
            try {
                return await AuthAPI.unlock(user).catch(e => { throw e })
            } catch (error) {
                throw error
            }
        },

        async GetUser({ commit, dispatch }) {
            try {
                let response = await AuthAPI.getUser().catch(e => { throw e })
                response.doNotRefetchConfig = true
                return await dispatch('SetUser', response)
            } catch (error) {
                commit('RESET_USER')
                throw error
            }
        },

        async SetUser({ commit, dispatch }, data) {
            try {
                commit('SET_UUID', data.uuid)
                commit('SET_EMAIL', data.email)
                commit('SET_USERNAME', data.username)
                commit('SET_STATUS', data.status)
                commit('SET_PROFILE', data.profile)
                commit('SET_ROLES', data.roles)
                commit('SET_PERMISSIONS', data.permissions)
                commit('SET_PREFERENCE', data.preference)
                commit('SET_MEMBERSHIP', data)
                await dispatch('SetLastActivity')
                if (!data.doNotRefetchConfig) {
                    await dispatch('config/GetConfig', null, { root: true })
                }
                // if(data.config) {
                //     await dispatch('config/SetConfig', data.config, { root: true })
                // }
                await dispatch('navigation/Generate', null, { root: true })

                return data
            } catch (error) {
                throw error
            }
        },

        async GetAllUsers({ commit, dispatch }) {
            try {
                let response = await AuthAPI.getUsers().catch(e => { throw e })
                // console.log("response===", response);
                // return await dispatch('SetUsers', response)
                return response;
            } catch (error) {
                commit('SET_ALL_USERS', {});
                throw error
            }
        },

        async SetUsers({ commit }, data) {
            try {
                commit('SET_ALL_USERS', data);
            } catch (error) {
                throw error
            }
        },

        async Logout({ commit, dispatch }) {
            try {
                dispatch('config/SetAppIsLoading', true, { root: true })
                dispatch('ResetLastActivityTimer')
                const response = await AuthAPI.logout().catch(e => { throw e })
                commit('RESET_USER')
                await dispatch('navigation/Reset', null, { root: true })
                await dispatch('config/SetLoaded', false, { root: true })
                return response
            } catch (error) {
                commit('RESET_USER')
                await dispatch('navigation/Reset', null, { root: true })
                await dispatch('config/SetLoaded', false, { root: true })
                router.push({ name: 'login', query: { logout: 'true' } })
                throw error
            }
        },

        async ResetTwoFactorSet({ commit }) {
            try {
                commit('SET_TWO_FACTOR_SET', false)
            } catch (error) {
                throw error
            }
        },

        ResetLastActivityTimer({ commit }) {
            if (refreshConfigTimer) {
                clearTimeout(refreshConfigTimer)
            }
            if (activityTimer) {
                clearTimeout(activityTimer)
                commit('SET_LOCKED', false)
            }
        },

        SetLastActivity({ commit, state, dispatch, rootGetters }) {
            function lockScreen() {
                dispatch('Lock')
            }

            function showMessage(lockIn, msg) {
                commit('SET_LOCKIN', msg)

                if (activityTimer) {
                    clearTimeout(activityTimer)
                }

                activityTimer = setTimeout(lockScreen, lockIn)
            }

            try {
                if (activityTimer) {
                    clearTimeout(activityTimer)
                    commit('SET_LOCKED', false)
                }


                // refresh config if last activity was an hour ago

                const lastActivity = state.lastActivity
                let lastActivityTimeout = moment(lastActivity)
                    .add(1, 'minutes')
                    .format(moment.HTML5_FMT.DATETIME_LOCAL_SECONDS)

                if (moment().format(moment.HTML5_FMT.DATETIME_LOCAL_SECONDS) > lastActivityTimeout) {


                    dispatch('config/GetConfig', null, { root: true })
                }
                // end


                commit('SET_LAST_ACTIVITY', moment().format(moment.HTML5_FMT.DATETIME_LOCAL_SECONDS))



                const configs = rootGetters['config/configs']
                if (configs.auth.lockScreen) {
                    const lockScreenTimeout = configs.auth.lockScreenTimeout
                    let showMessageIn = null
                    let lockScreenIn = null
                    let lockScreenInMsg = null

                    if (lockScreenTimeout > 2) {
                        showMessageIn = (lockScreenTimeout - 1) * 60 * 1000
                        lockScreenIn = 1 * 60 * 1000
                        lockScreenInMsg = { time: 60, unit: 'seconds' }
                    } else {
                        showMessageIn = ((lockScreenTimeout * 60) - 20) * 1000
                        lockScreenIn = 20 * 1000
                        lockScreenInMsg = { time: 20, unit: 'seconds' }
                    }
                    activityTimer = setTimeout(() => {
                        showMessage(lockScreenIn, lockScreenInMsg)
                    }, showMessageIn)
                }
            } catch (error) {
                throw error
            }
        },

        SetLock({ commit }, status) {
            try {
                commit('SET_LOCKED', !!status)
            } catch (error) {
                throw error
            }
        },

        SetLiveUsers({ commit }, users) {
            try {
                commit('SET_LIVE_USERS', users)
            } catch (error) {
                throw error
            }
        },

        ResetLiveUsers({ commit }) {
            try {
                commit('RESET_LIVE_USERS')
            } catch (error) {
                throw error
            }
        },

        AddLiveUser({ commit }, user) {
            try {
                commit('ADD_LIVE_USER', user)
            } catch (error) {
                throw error
            }
        },

        RemoveLiveUser({ commit }, user) {
            try {
                commit('REMOVE_LIVE_USER', user)
            } catch (error) {
                throw error
            }
        },

        UpdateLiveUser({ commit }, user) {
            try {
                commit('UPDATE_LIVE_USER', user)
            } catch (error) {
                throw error
            }
        },

        async GetNotifications({ commit }, filters) {
            try {
                const response = await NotificationAPI.getList(filters).catch(e => { throw e })
                commit('SET_NOTIFICATIONS', response)
                return response
            } catch (error) {
                commit('RESET_NOTIFICATIONS')
                throw error
            }
        },
    }
}
export default user
