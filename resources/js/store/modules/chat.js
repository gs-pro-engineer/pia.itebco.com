import * as ChatAPI from '@api/chat'

const paginationMeta = {
    data: [],
    meta: {
        total: 0,
        lastItemUuid: null,
        perPage: 10,
    }
}
const roomsSearchDefault = {
    rooms: [],
    users: [],
}

const pageMeta = {
    lastItemUuid: null,
    perPage: 10,
}

const chat = {
    namespaced: true,
    state: {
        rooms: Object.assign({}, paginationMeta),
        roomsPageMeta: Object.assign({}, pageMeta),
        roomsSearch: Object.assign({}, roomsSearchDefault),
        messages: Object.assign({}, paginationMeta),
        messagesPageMeta: Object.assign({}, pageMeta),
        messagesSearch: [],
        totalUnreadMessages: 0,
        chatBoxLoaded: false,
        activeChatUser: null,
        activeChatRoom: null,
    },
    getters: {
        rooms: state => state.rooms,
        roomsPageMeta: state => state.roomsPageMeta,
        roomsSearch: state => state.roomsSearch,
        messages: state => state.messages,
        messagesPageMeta: state => state.messagesPageMeta,
        messagesSearch: state => state.messagesSearch,
        totalUnreadMessages: state => state.totalUnreadMessages,
        chatBoxLoaded: state => state.chatBoxLoaded,
        activeChatUser: state => state.activeChatUser,
        activeChatRoom: state => state.activeChatRoom,
    },
    mutations: {
        RESET_CHAT_BOX_LOADED: (state) => {
            state.chatBoxLoaded = false
        },
        SET_CHAT_BOX_LOADED: (state, data = false) => {
            state.chatBoxLoaded = data
        },
        SET_ACTIVE_CHAT_USER: (state, data = null) => {
            state.activeChatUser = data
        },
        RESET_ACTIVE_CHAT_USER: (state) => {
            state.activeChatUser = null
        },
        SET_ACTIVE_CHAT_ROOM: (state, data = null) => {
            state.activeChatRoom = data
        },
        RESET_ACTIVE_CHAT_ROOM: (state) => {
            state.activeChatRoom = null
        },
        RESET_TOTAL_UNREAD_COUNT: (state) => {
            state.totalUnreadMessages = 0
        },
        SET_TOTAL_UNREAD_COUNT: (state, data = 0) => {
            state.totalUnreadMessages = data
        },
        ADD_TOTAL_UNREAD_COUNT: (state, amt = 1) => {
            state.totalUnreadMessages = state.totalUnreadMessages + amt
        },
        RESET_ROOMS: (state) => {
            state.rooms = Object.assign({}, paginationMeta)
        },
        RESET_ROOMS_PAGE_META: (state) => {
            state.roomsPageMeta = Object.assign({}, pageMeta)
        },
        RESET_ROOMS_SEARCH: (state) => {
            state.roomsSearch = Object.assign({}, roomsSearchDefault)
        },
        SET_ROOMS: (state, data = {}) => {
            state.rooms = Object.assign({}, state.rooms, data)
        },
        SET_ROOMS_SEARCH: (state, data = {}) => {
            state.roomsSearch = Object.assign({}, state.roomsSearch, data)
        },
        PUSH_ROOMS: (state, data = []) => {
            state.rooms.data = state.rooms.data.concat(data)
        },
        PUT_ROOM: (state, data = {}) => {
            state.rooms.data = [data, ...state.rooms.data]
        },
        PATCH_ROOM: (state, data = {}) => {
            state.rooms.data = state.rooms.data.map(c => {
                if(c.uuid === data.old.uuid) {
                    return Object.assign({}, c, data.new)
                }
                return c
            })
        },
        REMOVE_PUT_ROOM: (state, data = {}) => {
            const rooms = state.rooms.data.filter(c => c.uuid !== data.old.uuid)
            state.rooms.data = [data.new, ...rooms]
        },
        REMOVE_ROOM: (state, data = {}) => {
            state.rooms.data = state.rooms.data.filter(c => c.uuid !== data.uuid)
        },
        SET_ROOMS_META: (state, data = {}) => {
            state.rooms.meta = Object.assign({}, state.rooms.meta, data)
        },
        SET_ROOMS_PAGE_META: (state, roomsPageMeta) => {
            state.roomsPageMeta = Object.assign({}, state.roomsPageMeta, roomsPageMeta)
        },
        RESET_MESSAGES: (state) => {
            state.messages = Object.assign({}, paginationMeta)
        },
        RESET_MESSAGES_PAGE_META: (state) => {
            state.messagesPageMeta = Object.assign({}, pageMeta)
        },
        RESET_MESSAGES_SEARCH: (state) => {
            state.messagesSearch = []
        },
        SET_MESSAGES: (state, data = {}) => {
            state.messages = Object.assign({}, state.messages, data)
        },
        SET_MESSAGES_SEARCH: (state, data = []) => {
            state.messagesSearch = data || []
        },
        PUSH_MESSAGES: (state, data = []) => {
            state.messages.data = state.messages.data.concat(data)
        },
        PUT_MESSAGE: (state, data = {}) => {
            state.messages.data = [data, ...state.messages.data]
        },
        PATCH_MESSAGE: (state, data = {}) => {
            state.messages.data = state.messages.data.map(c => {
                if(c.uuid === data.old.uuid) {
                    return Object.assign({}, c, data.new)
                }
                return c
            })
        },
        REMOVE_MESSAGE: (state, data = {}) => {
            state.messages.data = state.messages.data.filter(c => c.uuid !== data.uuid)
        },
        SET_MESSAGES_META: (state, data = {}) => {
            state.messages.meta = Object.assign({}, state.messages.meta, data)
        },
        SET_MESSAGES_PAGE_META: (state, messagesPageMeta) => {
            state.messagesPageMeta = Object.assign({}, state.messagesPageMeta, messagesPageMeta)
        },
    },
    actions: {
        async GetRooms({ commit, getters, dispatch }, pageMetaOpts) {
            try {
                dispatch('SetLastActivity')
                commit('SET_CHAT_BOX_LOADED', true)

                const response = await ChatAPI.getRooms(pageMetaOpts).catch(e => { throw e })

                if(response.hasOwnProperty('data') && response.hasOwnProperty('meta')) {

                    if(pageMetaOpts.lastItemUuid === null) {
                        commit('RESET_ROOMS')
                        commit('RESET_ROOMS_PAGE_META')
                    }

                    response.meta.lastItemUuid = pageMetaOpts.lastItemUuid

                    if(response.data.length) {
                        const lastItem = response.data[response.data.length-1]
                        if(lastItem) {
                            response.meta.lastItemUuid = lastItem.uuid
                        }
                    }

                    commit('PUSH_ROOMS', response.data)
                    commit('SET_ROOMS_META', response.meta)
                    commit('SET_ROOMS_PAGE_META', pageMetaOpts)
                }
                return response
            } catch (error) {
                commit('RESET_ROOMS')
                commit('RESET_ROOMS_PAGE_META')
                throw error
            }
        },
        async GetRoom({ commit, getters, dispatch }, data) {
            try {
                dispatch('SetLastActivity')

                const response = await ChatAPI.getRoom(data).catch(e => { throw e })
                return response
            } catch (error) {
                throw error
            }
        },
        async CreateRoom({ commit, getters, dispatch }, data) {
            try {
                dispatch('SetLastActivity')

                const response = await ChatAPI.createRoom(data).catch(e => { throw e })
                return response
            } catch (error) {
                throw error
            }
        },
        async UpdateRoom({ commit, getters, dispatch }, data) {
            try {
                dispatch('SetLastActivity')

                const response = await ChatAPI.updateRoom(data).catch(e => { throw e })
                return response
            } catch (error) {
                throw error
            }
        },
        async AddMemberToRoom({ commit, getters, dispatch }, data) {
            try {
                dispatch('SetLastActivity')

                const response = await ChatAPI.addMemberToRoom(data).catch(e => { throw e })
                return response
            } catch (error) {
                throw error
            }
        },
        async RemoveMemberFromRoom({ commit, getters, dispatch }, data) {
            try {
                dispatch('SetLastActivity')

                const response = await ChatAPI.removeMemberFromRoom(data).catch(e => { throw e })
                return response
            } catch (error) {
                throw error
            }
        },
        async SearchRooms({ commit, getters, dispatch }, term) {
            try {
                dispatch('SetLastActivity')

                const response = await ChatAPI.searchRooms(term).catch(e => { throw e })

                if(response) {
                    response.users = response.users.filter(u => {
                        const userHasRoom = response.rooms.findIndex(r => r.member && r.member.uuid === u.uuid)
                        return userHasRoom === -1
                    })
                    commit('SET_ROOMS_SEARCH', response)
                }
                return response
            } catch (error) {
                commit('RESET_ROOMS_SEARCH')
                throw error
            }
        },
        async SearchRoomMembers({ commit, getters, dispatch }, data) {
            try {
                dispatch('SetLastActivity')

                const response = await ChatAPI.searchRoomMembers(data).catch(e => { throw e })

                return response
            } catch (error) {
                throw error
            }
        },
        async GetRoomMembers({ commit, getters, dispatch }, data) {
            try {
                dispatch('SetLastActivity')

                const response = await ChatAPI.getRoomMembers({
                    ...data
                }, data.uuid).catch(e => { throw e })

                return response
            } catch (error) {
                throw error
            }
        },
        async SearchMessages({ commit, getters, dispatch }, data) {
            try {
                dispatch('SetLastActivity')

                const response = await ChatAPI.searchMessages(data).catch(e => { throw e })

                if(response) {
                    commit('SET_MESSAGES_SEARCH', response)
                }
                return response
            } catch (error) {
                commit('RESET_MESSAGES_SEARCH')
                throw error
            }
        },
        async GetMessages({ commit, getters, dispatch }, pageMetaOpts) {
            try {
                dispatch('SetLastActivity')

                const response = await ChatAPI.getMessages(pageMetaOpts).catch(e => { throw e })

                if(response.hasOwnProperty('data') && response.hasOwnProperty('meta')) {

                    if(pageMetaOpts.lastItemUuid === null) {
                        commit('RESET_MESSAGES')
                        commit('RESET_MESSAGES_PAGE_META')
                    }

                    response.meta.lastItemUuid = pageMetaOpts.lastItemUuid

                    if(response.data.length) {
                        const lastItem = response.data[response.data.length-1]
                        if(lastItem) {
                            response.meta.lastItemUuid = lastItem.uuid
                        }
                    }

                    commit('PUSH_MESSAGES', response.data)
                    commit('SET_MESSAGES_META', response.meta)
                    commit('SET_MESSAGES_PAGE_META', pageMetaOpts)
                }
                return response
            } catch (error) {
                commit('RESET_MESSAGES')
                commit('RESET_MESSAGES_PAGE_META')
                throw error
            }
        },
        async SendMessage({ commit, dispatch }, data) {
            try {
                dispatch('SetLastActivity')

                const response = await ChatAPI.sendMessage(data).catch(e => { throw e })
                return response
            } catch (error) {
                throw error
            }
        },
        async MessageReceived({ commit, getters, dispatch }, socketData) {
            try {
                const chatRoom = socketData.chatRoom
                const room = getters.rooms.data.find(c => c.uuid === chatRoom.uuid)

                commit('ADD_TOTAL_UNREAD_COUNT')

                if(room) {
                    const unreadMessagesCount = room.unreadMessages ? (room.unreadMessages + 1) : 1
                    commit('REMOVE_PUT_ROOM', {
                        old: room,
                        new: {
                            ...room,
                            message: socketData.message,
                            unreadMessages: unreadMessagesCount
                        }
                    })
                } else {
                    commit('PUT_ROOM', {
                        ...chatRoom,
                        message: socketData.message,
                        unreadMessages: 1
                    })
                }
            } catch (error) {
                throw error
            }
        },
        ResetTotalUnreadCount({ commit }) {
            commit('RESET_TOTAL_UNREAD_COUNT')
        },
        ResetMessage({ commit }) {
            commit('RESET_MESSAGES')
        },
        SetMessage({ commit }, data) {
            commit('SET_MESSAGES', data)
        },
        PutMessageToFeed({ commit }, data) {
            commit('PUT_MESSAGE', data)
        },
        PatchMessageInFeed({ commit }, data) {
            commit('PATCH_MESSAGE', data)
        },
        ResetActiveChatRoomAndUser({ commit }) {
            commit('RESET_ACTIVE_CHAT_ROOM')
            commit('RESET_ACTIVE_CHAT_USER')
        },
        SetActiveChatUser({ commit }, data) {
            commit('RESET_ACTIVE_CHAT_ROOM')
            commit('SET_ACTIVE_CHAT_USER', data)
        },
        SetActiveChatRoom({ commit }, data) {
            commit('RESET_ACTIVE_CHAT_USER')
            commit('SET_ACTIVE_CHAT_ROOM', data)
        },
        SetLastActivity({ dispatch }, data) {
            dispatch('user/SetLastActivity', null, { root: true })
        },
    },
}
export default chat
