const errorLog = {
    state: {
        logs: []
    },
    mutations: {
        ADD_ERROR_LOG: (state, log) => {
            state.logs.push(log)
        }
    },
    actions: {
        addErrorLog({ commit }, log) {
            commit('ADD_ERROR_LOG', log)
        }
    },
    getters: {
        errorLogs: state => state.logs
    }
}
export default errorLog