import * as CommonAPI from '@api/common'

const paginationMeta = {
    data: [],
    meta: {
        total: 0,
        currentPage: 1,
        lastItemUuid: null,
        cursor: null,
        hasMorePages: true,
        perPage: 10,
    }
}

const filtersMeta = {
    sortBy: '',
    order: '',
}

const columnsMeta = {
    counter: 0,
    fields: null
}

const pageHeaderDefault = {
    hideLinks: false,
    buttons: null,
    sort: null,
    links: null,
    title: '',
    subTitle: ''
}

const list = {
    namespaced: true,
    state: {
        entities: Object.assign({}, paginationMeta),
        feed: Object.assign({}, paginationMeta),
        filters: Object.assign({}, filtersMeta),
        entity: null,
        subEntity: null,
        columns: null,
        pageHeader: Object.assign({}, pageHeaderDefault),
        others: {
        },
    },
    getters: {
        entities: state => state.entities,
        feed: state => state.feed,
        totalItems: state => state.entities.meta ? state.entities.meta.total : 0,
        filters: state => state.filters,
        entity: state => state.entity,
        subEntity: state => state.subEntity,
        columns: state => state.columns,
        pageHeader: state => state.pageHeader,
        others: state => state.others,
    },
    mutations: {
        RESET_ENTITIES: (state) => {
            state.entities = Object.assign({}, paginationMeta)
        },
        RESET_FEED: (state) => {
            state.feed = Object.assign({}, paginationMeta)
        },
        RESET_FILTERS: (state) => {
            state.filters = Object.assign({}, filtersMeta)
        },
        RESET_ENTITY: (state) => {
            state.entity = null
        },
        RESET_SUB_ENTITY: (state) => {
            state.subEntity = null
        },
        RESET_COLUMNS: (state) => {
            state.columns = Object.assign({}, columnsMeta)
        },
        RESET_PAGE_HEADER: (state) => {
            state.pageHeader = Object.assign({}, pageHeaderDefault)
        },
        RESET_OTHERS: (state) => {
            state.others = {}
        },
        SET_ENTITIES: (state, data = {}) => {
            state.entities = Object.assign({}, state.entities, data)
        },
        SET_FEED: (state, data = {}) => {
            state.feed = Object.assign({}, state.feed, data)
        },
        PUT_FEED_ITEM: (state, data = {}) => {
            state.feed.data.unshift(data)
        },
        PATCH_FEED_ITEM: (state, data = {}) => {
            let feedItemIndex = state.feed.data.findIndex(c => c.uuid === data.temporaryUuid)
            state.feed.data[feedItemIndex] = data
        },
        REMOVE_FEED_ITEM: (state, data = {}) => {
            let feedItemIndex = state.feed.data.findIndex(c => c.uuid === data.temporaryUuid)
            delete state.feed.data[feedItemIndex]
        },
        SET_ENTITY: (state, data = {}) => {
            state.entity = Object.assign({}, state.entity, data)
        },
        SET_META: (state, data = {}) => {
            state.entities.meta = Object.assign({}, state.entities.meta, data)
            state.feed.meta = Object.assign({}, state.feed.meta, data)
        },
        SET_FILTERS: (state, filters) => {
            state.filters = Object.assign({}, state.filters, filters)
        },
        SET_OTHERS: (state, data = {}) => {
            data.objForEach((value, key) => state.others[key] = value)
        },
        SET_SUB_ENTITY: (state, data = {}) => {
            state.subEntity = Object.assign({}, state.subEntity, data)
        },
        SET_COLUMNS: (state, data = []) => {
            state.columns = { counter: state.columns.counter++, fields: data }
        },
        SET_PAGE_HEADER: (state, dataObj = {}) => {
            state.pageHeader = Object.assign({}, pageHeaderDefault, dataObj)
        },
    },
    actions: {
        async Init({ commit, state, dispatch }, options = {}) {
            try {
                dispatch('SetLastActivity')

                if(options.doNotReset !== true) {
                    commit('RESET_ENTITIES')
                    commit('RESET_FEED')
                    commit('RESET_FILTERS')
                    commit('RESET_COLUMNS')
                }
                CommonAPI.setApiUrl(options.url)
                CommonAPI.setApiSubUrl('')

                if(options.filters) {
                    commit('SET_FILTERS', options.filters)
                }
                if(options.columns) {
                    commit('SET_COLUMNS', options.columns)
                }
            } catch (error) {
                throw error
            }
        },
        async InitSub({ commit, dispatch }, options = {}) {
            try {
                dispatch('SetLastActivity')

                if(options.doNotReset !== true) {
                    commit('RESET_ENTITIES')
                    commit('RESET_FEED')
                    commit('RESET_FILTERS')
                }
                CommonAPI.setApiSubUrl(options.url)
                if(options.filters) {
                    commit('SET_FILTERS', options.filters)
                }
            } catch (error) {
                throw error
            }
        },
        async GetList({ commit, dispatch }, filters) {
            try {
                dispatch('SetLastActivity')

                const response = await CommonAPI.getList(filters).catch(e => { throw e })
                commit('SET_ENTITIES', response)
                return response
            } catch (error) {
                commit('RESET_ENTITIES')
                throw error
            }
        },
        async GetFeed({ commit, getters, dispatch }, filters) {
            try {
                dispatch('SetLastActivity')

                if(filters.cursor === true) {
                    commit('RESET_FEED')
                }

                const response = await CommonAPI.getList(filters).catch(e => { throw e })

                if(response.hasOwnProperty('data') && response.hasOwnProperty('meta')) {
                    let feed = getters.feed
                    feed.data = feed.data.concat(response.data)
                    if(! response.meta.cursor) {
                        const lastItem = response.data[response.data.length-1]
                        if(lastItem) {
                            response.meta.lastItemUuid = lastItem.uuid
                        }
                    }
                    feed.meta = Object.assign({}, feed.meta, response.meta)
                    commit('SET_FEED', feed)
                }
                return response
            } catch (error) {
                commit('RESET_FEED')
                throw error
            }
        },
        async Get({ commit, dispatch }, args) {
            try {
                dispatch('SetLastActivity')

                let uuid, params
                if(args && typeof args === 'object' && args.constructor === Object) {
                    uuid = args.uuid
                    params = args.params
                } else {
                    uuid = args
                }

                commit('RESET_ENTITY')
                const response = await CommonAPI.get(uuid, params).catch(e => { throw e })
                commit('SET_ENTITY', response)
                return response
            } catch (error) {
                commit('RESET_ENTITY')
                throw error
            }
        },
        async GetSub({ commit, dispatch }, uuid) {
            try {
                dispatch('SetLastActivity')

                commit('RESET_SUB_ENTITY')
                const response = await CommonAPI.get(uuid).catch(e => { throw e })
                commit('SET_SUB_ENTITY', response)
                return response
            } catch (error) {
                commit('RESET_SUB_ENTITY')
                throw error
            }
        },
        async Store({ commit, dispatch }, data) {
            try {
                dispatch('SetLastActivity')

                const response = await CommonAPI.store(data).catch(e => { throw e })
                return response
            } catch (error) {
                throw error
            }
        },
        async Update({ commit, dispatch }, data) {
            try {
                dispatch('SetLastActivity')

                const uuid = data.uuid
                const response = await CommonAPI.update(uuid, data).catch(e => { throw e })
                return response
            } catch (error) {
                throw error
            }
        },
        async Destroy({ commit, dispatch }, data) {
            try {
                dispatch('SetLastActivity')

                const uuid = data.uuid
                const response = await CommonAPI.destroy(uuid).catch(e => { throw e })
                return response
            } catch (error) {
                throw error
            }
        },
        async GetPreRequisite({ commit, dispatch }, query) {
            try {
                dispatch('SetLastActivity')

                const response = await CommonAPI.getPreRequisite(query).catch(e => { throw e })
                return response
            } catch (error) {
                throw error
            }
        },
        async Custom({ commit, dispatch }, options) {
            try {
                dispatch('SetLastActivity')

                if(options.silent) {
                    const response = await CommonAPI.silentCustom(options).catch(e => { throw e })
                    return response
                }

                const response = await CommonAPI.custom(options).catch(e => { throw e })
                return response
            } catch (error) {
                throw error
            }
        },
        SetMeta({ commit }, data) {
            commit('SET_META', data)
        },
        SetEntity({ commit }, data) {
            commit('SET_ENTITY', data)
        },
        ResetList({ commit }) {
            commit('RESET_ENTITIES')
        },
        ResetEntity({ commit }) {
            commit('RESET_ENTITY')
        },
        ResetFeed({ commit }) {
            commit('RESET_FEED')
        },
        SetFilters({ commit }, data) {
            commit('SET_FILTERS', data)
        },
        ResetFilters({ commit }) {
            commit('RESET_FILTERS')
        },
        SetSubEntity({ commit }, data) {
            commit('SET_SUB_ENTITY', data)
        },
        ResetColumns({ commit }) {
            commit('RESET_COLUMNS')
        },
        SetColumns({ commit }, data) {
            commit('SET_COLUMNS', data)
        },
        SetOthers({ commit }, data) {
            commit('SET_OTHERS', data)
        },
        SetLastActivity({ dispatch }, data) {
            dispatch('user/SetLastActivity', null, { root: true })
        },
        PutFeedItem({ commit }, data) {
            commit('PUT_FEED_ITEM', data)
        },
        PatchFeedItem({ commit, getters }, data) {
            commit('PATCH_FEED_ITEM', data)
        },
        RemoveFeedItem({ commit, getters }, data) {
            commit('REMOVE_FEED_ITEM', data)
        },


        SetPageHeader({ commit }, data) {
            commit('SET_PAGE_HEADER', data)
        },
        SetPageTitle({ commit, state }, titleObj) {
            commit('SET_PAGE_HEADER', {
                title: titleObj.title || '',
                subTitle: titleObj.subTitle || ''
            })
        },
    },
}
export default list
