import Vue from 'vue'
import Vuex from 'vuex'
import CreatePersistedState from 'vuex-persistedstate'

import { vars, updateVars } from '@js/vars'
import { clearStore } from '@core/utils/auth'

// loading store for all the modules
import config from './modules/config'
import errorLog from './modules/error-log'
import navigation from './modules/navigation'
import user from './modules/user'
import search from './modules/search'
import todo from './modules/todo'
import common from './modules/common'
import chat from './modules/chat'
import product from './modules/product'
import azureSpeech from './modules/azure-speech'

// loading other getters, actions and mutations
import getters from './getters'
import actions from './actions'
import mutations from './mutations'

Vue.use(Vuex)

if(window.localStorage) {
    updateVars()
    
    const existingVersion = window.localStorage.getItem(vars.localStorageVersionKey)
    console.log('Existing Store Version: ', existingVersion)
    
    if(vars.appVersion !== existingVersion) {
        console.log('New Store Version: ', vars.appVersion)
        clearStore()
        console.log('Old Version Removed: ', existingVersion)
    }
    window.localStorage.setItem(vars.localStorageVersionKey, vars.appVersion)
}

const store = new Vuex.Store({
    state: {},
    modules: {
        config,
        errorLog,
        navigation,
        user,
        search,
        todo,
        common,
        chat,
        product,
        azureSpeech
    },
    getters,
    actions,
    mutations,
    plugins: [
        CreatePersistedState({
            key: vars.localStorageKey,
        })
    ]
})

export default store
