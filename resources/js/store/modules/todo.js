import * as TodoAPI from '@api/todo'

const todo = {
    namespaced: true,
    state: {
        todos: {
            total: 0,
            data: [],
            current_page: 1,
            per_page: 10,
        },
        todosLoadStatus: 0,
        todo: {},
        todoLoadStatus: 0,
    },
    getters: {
        todos: state => state.todos,
        todosLoadStatus: state => state.todosLoadStatus,
        todo: state => state.todo,
        todoLoadStatus: state => state.todoLoadStatus,
    },
    mutations: {
        RESET_TODOS: (state) => {
            state.todos = {
                    total: 0,
                    data: [],
                    current_page: 1,
                    per_page: 10,
                }
        },
        SET_TODOS: (state, todos) => {
            state.todos = todos
        },
        SET_TODO: (state, todo) => {
            state.todo = todo
        },
        SET_TODOS_LOAD_STATUS: (state, status) => {
            state.todosLoadStatus = status
        },
        SET_TODO_LOAD_STATUS: (state, status) => {
            state.todoLoadStatus = status
        },
    },
    actions: {
        GetList({ commit, dispatch }, filters) {
            dispatch('SetLastActivity')
            commit( 'SET_TODOS_LOAD_STATUS', 1 )
            return new Promise((resolve, reject) => {
                TodoAPI.getList(filters).then(response => {
                    setTimeout(() => { 
                        commit('SET_TODOS', response)
                        commit('SET_TODOS_LOAD_STATUS', 2)
                        resolve(response) 
                    }, 5000)
                    
                }).catch(error => {
                    commit('RESET_TODOS')
                    commit('SET_TODOS_LOAD_STATUS', 3)
                    reject(error)
                })
            })
        },
        ResetList({ commit }) {
            commit( 'SET_TODOS_LOAD_STATUS', 0 )
            commit('RESET_TODOS')
        },
        Get({ commit, dispatch }, id) {
            dispatch('SetLastActivity')
            commit( 'SET_TODO_LOAD_STATUS', 1 )
            return new Promise((resolve, reject) => {
                TodoAPI.get(id).then(response => {
                    commit('SET_TODO', response)
                    commit('SET_TODO_LOAD_STATUS', 2)
                    resolve(response)
                }).catch(error => {
                    commit('SET_TODO', {})
                    commit('SET_TODO_LOAD_STATUS', 3)
                    reject(error)
                })
            })
        },
        Store({ commit, dispatch }, data) {
            dispatch('SetLastActivity')
            return new Promise((resolve, reject) => {
                TodoAPI.store(data).then(response => {
                    commit('SET_TODO', {})
                    resolve(response)
                }).catch(error => {
                    reject(error)
                    //todo - Call and display toastr notification
                })
            })
        },
        Update({ commit, dispatch }, data) {
            dispatch('SetLastActivity')
            return new Promise((resolve, reject) => {
                TodoAPI.update(data.uuid, data).then(response => {
                    commit('SET_TODO', response)
                    resolve(response)
                }).catch(error => {
                    reject(error)
                    //todo - Call and display toastr notification
                })
            })
        },
        Destroy({ commit, dispatch }, data) {
            dispatch('SetLastActivity')
            return new Promise((resolve, reject) => {
                TodoAPI.destroy(id).then(response => {
                    commit('SET_TODO', {})
                    resolve(response)
                }).catch(error => {
                    reject(error)
                    //todo - Call and display toastr notification
                })
            })
        },
        SetLastActivity({ dispatch }, data) {
            dispatch('user/SetLastActivity', null, { root: true })
        },
    },
}
export default todo
