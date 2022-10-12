import * as SearchAPI from '@api/search'
import store from '@js/store'
import router from '@js/router'

function filterRoutes(term) {
    let filteredRoutesHighPriority = []
    let filteredRoutesLowPriority = []
    let possibleSearchPatterns = []
    const allRoutes = router.options.routes.find(route => route.name === "App")

    term = term.trim().replace(/\s+/g, '.*').replace(/[^\w.*]+/g,'')
    const searchPattern = new RegExp(term, 'igm')
    const termsArr = term.split('.*')
    if(termsArr.length > 1) {
        possibleSearchPatterns.push(new RegExp(termsArr.reverse().join('.*'), 'ig'))
    }

    function testRouteForPattern(route, pattern) {
        if(route.meta && route.meta.title) {
            return pattern.test($t(route.meta.title)) || pattern.test(route.meta.title)
        }
        return pattern.test(route.name) || pattern.test(route.path)
    }

    function getRoutes(routes, pattern, possiblePatterns) {
        routes.forEach(route => {
            if(route.path.indexOf(':') === -1 ) {
                if (route.children && route.children.length) {
                    getRoutes(route.children, pattern, possiblePatterns)
                } else {
                    if(testRouteForPattern(route, pattern)) {
                        if(route.meta.hasOwnProperty('permissions') && route.meta.permissions.length) {
                            const permittedToAccess = route.meta.allPermissions ?
                                                store.getters['user/hasAllPermissions'](route.meta.permissions) :
                                                store.getters['user/hasAnyPermission'](route.meta.permissions)
                            if(permittedToAccess) {
                                filteredRoutesHighPriority.push(route)
                            }
                        } else {
                            filteredRoutesHighPriority.push(route)
                        }
                    } else {
                        possiblePatterns.forEach(possiblePattern => {
                            if(testRouteForPattern(route, possiblePattern)) {
                                if(route.meta.hasOwnProperty('permissions') && route.meta.permissions.length) {
                                    const permittedToAccess = route.meta.allPermissions ?
                                                        store.getters['user/hasAllPermissions'](route.meta.permissions) :
                                                        store.getters['user/hasAnyPermission'](route.meta.permissions)
                                    if(permittedToAccess) {
                                        filteredRoutesLowPriority.push(route)
                                    }
                                } else {
                                    filteredRoutesLowPriority.push(route)
                                }
                            }
                        })
                    }
                }
            }
        })
    }

    getRoutes(allRoutes.children, searchPattern, possibleSearchPatterns)
    return filteredRoutesHighPriority.concat(filteredRoutesLowPriority)
}



const search = {
    namespaced: true,
    state: {
        hotTerms: [
            { code: 'do ', message: 'Executing Command:', description: 'to execute commands such as logout etc.', type: 'command' },
            { code: 'to ', message: 'Navigating to:', description: 'to navigate to route quickly', type: 'redirect' },
            { code: 'go ', message: 'Navigating to:', description: 'to navigate to route quickly', type: 'redirect' },
            { code: 'open ', message: 'Navigating to:', description: 'to navigate to route quickly', type: 'redirect' },
        ],
        results: {
            routes: [],
            contacts: [],
            users: [],
            meetings: [],
        },
        suggestions: [],
    },
    getters: {
        hotTerms: state => state.hotTerms,
        results: state => state.results,
        suggestions: state => state.suggestions,
    },
    mutations: {
        SET_RESULTS: (state, results = {}) => {
            results.objForEach((value, key) => state.results[key] = value)
        },
        RESET_RESULTS: (state) => {
            state.results = {
                routes: [],
                contacts: [],
                users: [],
                meetings: [],
            }
        },
        SET_SUGGESTIONS: (state, suggestions) => {
            state.suggestions = suggestions
        },
        RESET_SUGGESTIONS: (state) => {
            state.suggestions = []
        }
    },
    actions: {
        async SearchRoutes({ commit, dispatch }, term) {
            try {
                dispatch('SetLastActivity')
                const searchedRoutes = filterRoutes(term)
                if(searchedRoutes.length) {
                    commit('SET_RESULTS', { routes: searchedRoutes })
                }
            } catch (error) {
                throw error
            }
        },
        async Search({ commit, dispatch }, term) {
            try {
                dispatch('SetLastActivity')
                const response = await SearchAPI.search(term).catch(e => { throw e })
                commit('SET_RESULTS', response)
                return response
            } catch (error) {
                commit('RESET_RESULTS')
                throw error
            }
        },
        ResetResults({ commit }) {
            commit('RESET_RESULTS')
        },
        ResetSuggestions({ commit }) {
            commit('RESET_SUGGESTIONS')
        },
        SetLastActivity({ dispatch }, data) {
            dispatch('user/SetLastActivity', null, { root: true })
        },
    },
}
export default search
