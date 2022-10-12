<template>
    <div :class="['chat-box-wrapper', {'shown': isBoxShown}, {'search-shown': isSearchShown}, {'chat-box-lg': largeChatBox}, {'show-chat-options': showChatOptions}]">
        <chat-box-header :active-container="activeContainer" :configs="configs" :full-page="fullPage" @goHome="goHome" @toggleSearch="toggleSearch" @goToSettings="goToSettings" @goBack="goBack" @hideChatBox="hideChatBox" @showAddMemberScreen="showAddMemberScreen" />

        <div class="search">
            <input type="text" class="form-control" ref="searchTerm" v-model="searchTerm" @keydown.esc="toggleSearch" @input="searchTermChanged" :placeholder="$t('general.search_helper_default_text')">
            <button v-if="searchTerm" type="button" @click="hideSearch" class="clear-btn">{{ $t('general.clear') }}</button>
        </div>

        <div :class="['chat-box', {'showing-settings': activeContainer === 'settings'}, {'showing-chats': activeContainer === 'conversation'}, {'showing-chatgroup': activeContainer === 'chatgroup'}]">

            <chat-box-group v-if="configs.chat.groupChat" ref="chatBoxGroup" :active-container="activeContainer" :active-group="activeGroup" :members-to-add="activeGroupMembersToAdd" :members-to-remove="activeGroupMembersToRemove" @goToConversation="goToConversation" @goBack="goBack" @goHome="goHome">

                <template #members="{ members }">
                    <div class="rooms-wrapper">

                        <template v-if="(searchTerm && searched)">

                            <ul class="rooms" v-if="roomsSearch.rooms.length || roomsSearch.users.length">
                                <template v-for="room in roomsSearch.rooms" >

                                    <chat-room-item v-if="!room.isGroup" :room="room" :room-name="room.name" click-action="addToGroup" @addToGroup="addToGroup" :vars="vars" :key="room.uuid" :show-last-message="false" />
                                </template>

                                <chat-room-item v-for="user in roomsSearch.users" :room="user" :room-name="user.profile.name" click-action="addToGroup" @addToGroup="addToGroup" :vars="vars" :key="user.uuid" />
                            </ul>

                            <div v-else class="no-data">
                                <h5>{{ $t('chat.no_result_found') }}</h5>
                            </div>
                        </template>

                        <template v-else>
                            <ul class="rooms">

                                <chat-room-item v-for="member in members" :room="member.user" :room-name="member.user.profile.name" click-action="goToConversation" @goToConversation="goToConversation" :show-custom-action="activeGroup && activeGroup.canModerate" click-action-on-custom="removeMember" @removeMember="removeMemberFromGroup" :vars="vars" :key="member.user.uuid" />

                            </ul>
                        </template>

                    </div>
                </template>

            </chat-box-group>



            <chat-box-settings :active-container="activeContainer" @goHome="goHome" />



            <div class="cb-inner-window rooms-container">

                <vue-scroll ref="vue-scroll-rooms" id="vue-scroll-rooms" @handle-scroll="handleRoomsScroll">
                    <div class="rooms-wrapper">

                        <template v-if="(searchTerm && searched) || newChatScreen || newGroupScreen">

                            <ul class="rooms" v-if="roomsSearch.rooms.length || roomsSearch.users.length">

                                <template v-if="!newChatScreen || !newGroupScreen">
                                    <chat-room-item v-for="room in roomsSearch.rooms" :room="room" :room-name="room.name" @goToConversation="goToConversation" :vars="vars" :key="room.uuid" />

                                    <li v-if="roomsSearch.users.length" class="my-2 pl-3 font-weight-500">{{ $t('user.users') }}</li>
                                </template>

                                <chat-room-item v-for="user in roomsSearch.users" :room="user" :room-name="user.profile.name" click-action="goToConversation" @goToConversation="goToConversation" :vars="vars" :key="user.uuid" />
                            </ul>

                            <div v-else class="no-data">
                                <h5>{{ $t('chat.no_result_found') }}</h5>
                            </div>
                        </template>

                        <template v-else>
                            <ul v-if="rooms.data && rooms.data.length" class="rooms">
                                <chat-room-item v-for="room in rooms.data" :room="room" :room-name="room.name" @goToConversation="goToConversation" :vars="vars" :key="room.uuid" />
                            </ul>

                            <div v-else class="no-data">
                                <h5>{{ $t('chat.no_chats_yet') }}</h5>
                            </div>
                        </template>

                    </div>
                </vue-scroll>

                <div class="chat-option-buttons">
                    <button v-if="configs.chat.groupChat" type="button" @click="goToCreateGroup"><i class="fas fa-users"></i></button>
                    <button type="button" @click="startNewChat"><i class="fas fa-user"></i></button>
                    <button type="button"><i class="fas fa-comment-dots fa-flip-horizontal"></i></button>
                </div>
            </div>



            <div class="cb-inner-window conversation-container">
                <div class="conversation-wrapper" v-if="activeConversation">

                    <conversation-header v-if="activeConversation.chatRoom" :room="activeConversation.chatRoom" :room-name="activeConversation.chatRoom.name" :vars="vars" :configs="configs" :typingUser="typingUser" @goToGroup="goToGroup" />
                    <conversation-header v-else-if="activeConversation.user" :room="activeConversation.user" :room-name="activeConversation.user.profile.name" :vars="vars" :configs="configs" :typingUser="typingUser" />


                    <div :class="['conversation', {'no-messages': !hasMessages}, {'got-new-messages': newUnreadMessageOnFeed}, {'show-scroll-btn': showScrollToLatestBtn}]">

                        <div v-if="hasMessages" class="messages-list-container">
                            <vue-scroll ref="vue-scroll-messages" id="vue-scroll-messages" @handle-scroll="handleMessageScroll">
                                <div :class="['messages-list-wrapper', {'show-name': activeConversation.chatRoom && activeConversation.chatRoom.isGroup}]">


                                    <template v-if="searchTerm && searched">
                                        <template v-if="messagesSearch.length">
                                            <message-item v-for="(message, mIndex) in messagesSearch" :message="message" :vars="vars" :file-icons="fileIcons" :file-mime-types="fileMimeTypes" :class="[{'own-message': message.user.uuid === userUuid}, {'prev-diff-own': !messages.data[mIndex+1] || messages.data[mIndex+1].user.uuid !== message.user.uuid}, {'next-diff-own': !messages.data[mIndex-1] || messages.data[mIndex-1].user.uuid !== message.user.uuid}]" :key="message.uuid" />
                                        </template>

                                        <div v-else class="no-data">
                                            <h5>{{ $t('chat.no_result_found') }}</h5>
                                        </div>
                                    </template>


                                    <template v-else>
                                        <message-item v-for="(message, mIndex) in messages.data" :message="message" :vars="vars" :file-icons="fileIcons" :file-mime-types="fileMimeTypes" :class="[{'own-message': message.user.uuid === userUuid}, {'prev-diff-own': !messages.data[mIndex+1] || messages.data[mIndex+1].user.uuid !== message.user.uuid}, {'next-diff-own': !messages.data[mIndex-1] || messages.data[mIndex-1].user.uuid !== message.user.uuid}]" :key="message.uuid" />

                                        <div v-if="isFetching" class="d-flex justify-content-center my-2">
                                            <animated-loader :is-loading="isFetching" :loader-color="vars.colors.light" overlay-color="transparent" size="inline" loader-size="20px" loader-stroke="3px" />
                                        </div>

                                        <div v-if="noMoreMessages" class="message-item my-4 d-flex justify-content-center align-items-center">
                                            <h5 class="text-muted">
                                                {{ $t('chat.no_more_messages') }}
                                            </h5>
                                        </div>
                                    </template>

                                </div>
                            </vue-scroll>
                        </div>

                        <div v-else class="d-flex justify-content-center align-items-center min-height-300px">
                            <h5 class="text-muted">
                                {{ $t('chat.no_messages_yet') }}
                            </h5>
                        </div>

                        <div class="scroll-latest-btn" @click="scrollToLatestMessages">
                            <div class="scroll-btn-wrapper">
                                <i class="fas fa-angle-double-down"></i>
                            </div>
                        </div>

                    </div>

                    <div class="conversation-footer" v-if="(activeConversation.chatRoom && !activeConversation.chatRoom.isGroup) || (!activeConversation.chatRoom && activeConversation.user) || (activeConversation.chatRoom && activeConversation.chatRoom.isGroup && !activeConversation.chatRoom.hasLeft)">

                        <div class="new-message">
                            <at :members="computedParticipants" name-key="name" v-model="newMessage.message" @at="handleAt">
                                <template #item="s">
                                    <span class="mentioned">{{ s.item.name }} <span class="bracketed text-muted-md">{{ s.item.username }}</span></span>
                                </template>

                                <template #embeddedItem="s">
                                    <span><span class="tag mentioned bg-white text-primary mx-1 px-2 py-1 rounded" :data-uuid="s.current && s.current.user ? s.current.user.uuid : ''">{{ s.current.name }}</span> <span> </span></span>
                                </template>

                                <div class="new-message-input form-control" contenteditable :data-placeholder="$t('chat.type_a_message')" :placeholder="$t('chat.type_a_message')" ref="newMessageInput" @keydown="isTyping" @keydown.enter="enterPressedEvt(postMessage, $event)"><div></div></div>
                            </at>

                            <emoji-picker @emoji="appendEmoji" :search="searchTermEmoji" class="emoji-picker-wrapper">
                                <button type="button" class="btn-custom emoji-button" slot="emoji-invoker" slot-scope="{ events: { click: clickEvent } }" @click.stop="clickEvent"><i class="far fa-grin"></i></button>

                                <div slot="emoji-picker" slot-scope="{ emojis, insert, display }" class="emoji-picker-container">
                                    <div class="emoji-picker">
                                        <div class="emoji-picker__search">
                                            <input type="text" v-model="searchTermEmoji" v-focus>
                                        </div>
                                        <div>
                                            <div v-for="(emojiGroup, category) in emojis" :key="category" class="mt-2">
                                                <h5>{{ category }}</h5>
                                                <div class="emojis">
                                                    <span v-for="(emoji, emojiName) in emojiGroup" :key="emojiName" @click="insert(emoji)" :title="emojiName">{{ emoji }}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </emoji-picker>


                            <file-uploader v-if="!newMessage.message && configs.chat.fileSharing" url="/chat/messages" name-label="upload.attachment" names-label="upload.attachments" button-icon="fas fa-paperclip" button-classes="btn-sm" button-design="custom" hide-button-label hide-file-list :options="preRequisite.uploaderConfig" :data="newMessage.attachments" :additional-form-data="activeConversation" :request-identifier="newMessageRequestUUID" @uploading="attachmentUploadStarted" @updated="attachmentUploaded" @error="attachmentUploadError" @noNeed="noNeedCallback" />

                            <button type="button" class="btn-custom post-message-button" :title="$t('general.submit')" @click="postMessage"><i class="far fa-paper-plane"></i></button>
                        </div>

                    </div>
                </div>
            </div>

        </div>


    </div>
</template>

<script>
    import { mapGetters, mapActions } from 'vuex'

    import FileUploader from '@components/FileUploader'
    import EmojiPicker from 'vue-emoji-picker'
    import ChatBoxHeader from './header'
    import ChatBoxSettings from './settings'
    import ChatBoxGroup from './group'
    import ChatRoomItem from './room-item'
    import ConversationHeader from './conversation-header'
    import MessageItem from './message-item'
    import At from 'vue-at'
    import EventBus from '@js/event-bus'

    import { enterPressed } from '@core/utils/form'
    import { formatKeysToCamelCase } from '@core/utils/formatter'
    import { fileIcons, fileMimeTypes } from '@js/vars'
    import * as MomentTz from '@core/filters/momentz'

    export default {
        name: "ChatBox",
        components: {
            FileUploader,
            EmojiPicker,
            At,
            ChatBoxHeader,
            ChatBoxSettings,
            ChatBoxGroup,
            ChatRoomItem,
            ConversationHeader,
            MessageItem,
        },
        props: {
            channel: {
                default: null
            },
            boxVisibility: {
                type: Boolean,
                default: false,
            },
            fullPage: {
                type: Boolean,
                default: false,
            },
            meeting: {
                type: Object,
                default () {
                    return {}
                }
            },
        },
        data() {
            return {
                isBoxShown: false,
                isSearchShown: false,
                showChatOptions: false,
                largeChatBox: false,
                searched: false,
                newChatScreen: false,
                newGroupScreen: false,
                cbHeaderTitle: $t('chat.live_chat'),
                searchTerm: '',
                searchTermEmoji: '',
                activeContainer: 'home',
                members: [],
                newMessage: {
                    message: '',
                    attachments: [],
                    updated: false,
                },
                newMessageRequestUUID: uuid(),
                activeConversation: null,
                activeGroup: null,
                activeGroupMembersToAdd: [],
                activeGroupMembersToRemove: [],
                uploadURL: '',
                formErrors: {},
                preRequisite: {
                    uploaderConfig: {
                        module: '',
                        token: '',
                        allowedExtensions: '',
                        allowedMaxFileSize: null,
                        maxNoOfFiles: 1,
                        uuid: uuid(),
                    },
                },
                goingToConversation: false,
                isFetching: false,
                noMoreMessages: false,
                newUnreadMessageOnFeed: false,
                showScrollToLatestBtn: false,
                chatRoomChannel: null,
                typingUser: null,
                typingUserTimeout: null,
                initialNewMessage: null,
                firstFetch: true,
                fileIcons: fileIcons,
                fileMimeTypes: fileMimeTypes,
            }
        },
        watch: {
            boxVisibility(newVal, oldVal) {
                this.isBoxShown = newVal

                if(this.isBoxShown) {
                    document.body.classList.add("chat-box-shown")
                }
            },
            activeChatUser(newVal, oldVal) {
                if(newVal !== null && (!oldVal || (oldVal !== null && newVal.uuid !== oldVal.uuid))) {
                    this.goToConversation({ user: newVal })
                }
            },
            activeChatRoom(newVal, oldVal) {
                if(this.goingToConversation === false && newVal !== null && (!oldVal || (oldVal !== null && newVal.uuid !== oldVal.uuid))) {
                    this.goToConversation({ room: newVal })
                }
            },
        },
        computed: {
            ...mapGetters('config', [
                'vars',
                'configs',
                'uiConfigs',
            ]),
            ...mapGetters('user', {
                'userUuid': 'uuid'
            }),
            ...mapGetters('user', [
                'profile',
                'username',
            ]),
            ...mapGetters('chat', [
                'rooms',
                'roomsPageMeta',
                'roomsSearch',
                'messages',
                'messagesPageMeta',
                'messagesSearch',
                'activeChatRoom',
                'activeChatUser',
            ]),
            user() {
                return {
                    uuid: this.userUuid,
                    username: this.username,
                    name: this.profile.name,
                    profile: this.profile,
                }
            },
            hasMessages() {
                return this.activeConversation && this.messages.data
            },
            computedParticipants() {
                if (this.activeConversation) {
                    return this.activeConversation.members
                }
                return []
            },
            enterToSubmit() {
                return this.configs.chat && this.configs.chat.enterToSubmit
            }
        },
        methods: {
            ...mapActions('chat', [
                'GetRooms',
                'GetRoom',
                'AddMemberToRoom',
                'RemoveMemberFromRoom',
                'SearchRooms',
                'SearchMessages',
                'GetMessages',
                'SendMessage',
                'PutMessageToFeed',
                'PatchMessageInFeed',
                'ResetMessage',
                'SetMessage',
                'ResetTotalUnreadCount',
                'SetActiveChatRoom',
                'SetActiveChatUser',
                'ResetActiveChatRoomAndUser',
                'SearchRoomMembers',
            ]),

            // TOGGLE & HIDE SHOW METHODS
            hideChatBox() {
                this.isBoxShown = false
                this.ResetActiveChatRoomAndUser()
                setTimeout(() => {
                    this.$emit('boxHidden')
                }, 200)
            },
            showChatBox() {
                this.isBoxShown = true
                this.$emit('boxShown')
            },
            hideSearch() {
                this.searchTerm = ''
                this.searched = false
                this.isSearchShown = false
                this.showChatOptions = true
                this.newChatScreen = false
                this.newGroupScreen = false

                if (this.activeContainer === 'home') {
                    this.fetchRooms(true)
                    this.scrollTo("vue-scroll-rooms", 0)
                } else if (this.activeContainer === 'conversation') {
                    this.fetchMessages(true)
                }
            },
            toggleSearch(startNewChat = false, startNewGroup = false) {
                this.searchTerm = ''
                this.searched = false
                this.isSearchShown = !this.isSearchShown

                if (this.isSearchShown) {
                    this.newChatScreen = startNewChat
                    this.newGroupScreen = startNewGroup
                    this.showChatOptions = !(startNewChat || startNewGroup)
                    this.$nextTick(() => {
                        this.$refs[`searchTerm`].focus()
                    })
                } else {
                    this.newChatScreen = false
                    this.newGroupScreen = false
                    this.showChatOptions = true
                    if (this.activeContainer === 'home') {
                        this.fetchRooms(true)
                        this.scrollTo("vue-scroll-rooms", 0)
                    } else if (this.activeContainer === 'conversation') {
                        this.fetchMessages(true)
                    }
                }
            },
            startNewChat() {
                this.toggleSearch(true)
            },

            // SWITCH TO VIEW METHODS
            goHome() {
                this.lastActiveContainer = this.activeContainer
                this.activeContainer = 'home'
                this.ResetActiveChatRoomAndUser()

                if (this.lastActiveContainer === 'conversation') {
                    this.leaveChatRoomChannel(this.activeConversation.chatRoom)
                    this.hideSearch()
                    if (this.searchRoomObj && this.searchRoomObj.searched) {
                        this.searchTerm = this.searchRoomObj.searchTerm
                        this.searched = this.searchRoomObj.searched
                        this.isSearchShown = true
                        this.showChatOptions = false
                    } else {
                        this.fetchRooms()
                    }
                } else {
                    this.fetchRooms()
                }

                this.scrollTo("vue-scroll-rooms", 0)
                setTimeout(() => {
                    this.activeConversation = null
                }, 100)
            },
            goToConversation({ room, user }, fetchRoomForUser = false) {
                this.goingToConversation = true
                const swtichToConversationTab = () => {
                    setTimeout(() => {
                        this.activeContainer = 'conversation'

                        if (this.isSearchShown) {
                            this.searchRoomObj = {
                                searchTerm: this.searchTerm,
                                searched: this.searched
                            }
                            this.hideSearch()
                        } else {
                            this.searchRoomObj = {
                                searchTerm: null,
                                searched: null
                            }
                        }
                        this.goingToConversation = false

                        window.setTimeout(() => {
                            this.scrollToLatestMessages()
                            this.focusNewMessage()
                            this.showScrollToLatestBtn = false
                            this.newUnreadMessageOnFeed = false
                        }, 300)
                    }, 100)
                }

                this.activeConversation = {
                    chatRoom: room || null,
                    user: room && room.isGroup ? null : (user || null),
                    members: room && room.isGroup ? room.members : (user ? [user] : []),
                }

                this.ResetMessage()

                if (room) {
                    if(!room.hasLeft) {
                        this.joinChatRoomChannel(room)
                    }

                    this.GetRoom({
                            uuid: room.uuid
                        })
                        .then(response => {
                            const newChatRoomInfo = response.chatRoom
                            const newChats = response.chats
                            this.activeConversation.chatRoom = newChatRoomInfo

                            if(room.hasLeft && !newChatRoomInfo.hasLeft) {
                                this.joinChatRoomChannel(newChatRoomInfo)
                            }

                            if(newChatRoomInfo.hasLeft) {
                                this.leaveChatRoomChannel(newChatRoomInfo)
                            }

                            this.SetMessage({
                                data: [...newChats],
                                meta: {
                                    ...this.messages.meta,
                                    total: newChats.length,
                                    lastItemUuid: newChats.length ? newChats[newChats.length - 1].uuid : null,
                                }
                            })

                            if (this.activeConversation.chatRoom && this.activeConversation.chatRoom.hasOwnProperty('chats')) {
                                delete this.activeConversation.chatRoom.chats
                            }
                            this.noMoreMessages = false

                            this.SetActiveChatRoom(this.activeConversation.chatRoom)
                            swtichToConversationTab()
                        })
                        .catch(error => {
                            this.goingToConversation = false
                            formUtil.handleErrors(error)
                        })
                } else {
                    this.SetActiveChatUser(this.activeConversation.user)
                    this.fetchMessages(true)
                    swtichToConversationTab()
                }

            },
            goToSettings() {
                this.lastActiveContainer = this.activeContainer
                this.activeContainer = 'settings'

                this.scrollTo("vue-scroll-rooms", 0)
                setTimeout(() => {
                    if (this.lastActiveContainer === 'conversation') {
                        this.ResetActiveChatRoomAndUser()
                        this.leaveChatRoomChannel(this.activeConversation.chatRoom)
                    }

                    if (this.isSearchShown) {
                        this.hideSearch()
                    }

                    this.activeConversation = null
                }, 100)
            },
            goToCreateGroup() {
                this.activeGroup = null
                this.goToGroup()
            },
            goToGroup(activeGroup = null) {
                this.activeGroupMembersToAdd = []
                this.activeGroupMembersToRemove = []
                this.lastActiveContainer = this.activeContainer
                this.activeContainer = 'chatgroup'
                this.activeGroup = activeGroup

                this.scrollTo("vue-scroll-rooms", 0)
                if (this.isSearchShown) {
                    this.hideSearch()
                }

                if(!activeGroup) {
                    this.$nextTick(() => {
                        window.setTimeout(() => {
                            this.$refs[`chatBoxGroup`].$refs[`groupName`].focus()
                        }, 300)
                    })
                }
            },
            showAddMemberScreen() {
                this.activeGroupMembersToAdd = []
                this.activeGroupMembersToRemove = []
                this.toggleSearch(false, true)
            },
            addToGroup(data) {
                if(data && data.user) {
                    if(this.activeGroup) {
                        this.isLoading = true
                        this.AddMemberToRoom({
                            uuid: this.activeGroup.uuid,
                            members: [data.user]
                        })
                            .then(response => {
                                this.isLoading = false
                                this.activeGroup = response
                                this.activeConversation.chatRoom = response
                                this.activeConversation.chatRoom.members = response.members
                            })
                            .catch(error => {
                                this.isLoading = false
                                formUtil.handleErrors(error)
                            })
                    } else {
                        this.activeGroupMembersToAdd.push(data)
                    }
                }
                this.toggleSearch()
            },
            removeMemberFromGroup(data) {
                this.activeGroupMembersToAdd = []
                this.activeGroupMembersToRemove = []
                if(data && data.user) {
                    if(this.activeGroup) {
                        this.isLoading = true
                        this.RemoveMemberFromRoom({
                            uuid: this.activeGroup.uuid,
                            members: [data.user]
                        })
                            .then(response => {
                                this.isLoading = false
                                this.activeGroup = response
                                this.activeConversation.chatRoom = response
                            })
                            .catch(error => {
                                this.isLoading = false
                                formUtil.handleErrors(error)
                            })
                    } else {
                        this.activeGroupMembersToRemove.push(data)
                    }
                }
            },
            goBack() {
                if(this.lastActiveContainer) {
                    this.activeContainer = this.lastActiveContainer
                } else {
                    this.goHome()
                }
            },

            // FETCH DATA METHODS
            searchTermChanged: _.debounce(function() {
                if (!this.searchTerm || this.searchTerm.length < 2) {
                    return
                }

                if (this.activeContainer === 'home' || this.activeContainer === 'chatgroup') {
                    this.searchRooms()
                    this.scrollTo("vue-scroll-rooms", 0)
                } else if (this.activeContainer === 'conversation') {
                    this.searchMessages()
                }
            }, 500),
            handleAt(chunk) {
                if (!chunk || chunk.length < 2) {
                    if (this.activeConversation) {
                        this.activeConversation.members = []
                    }
                    return
                }

                if(!this.activeConversation.chatRoom)
                {
                    this.activeConversation.members = []
                    return
                }

                this.SearchRoomMembers({ uuid: this.activeConversation.chatRoom.uuid, term: chunk })
                    .then(response => {
                        this.activeConversation.members = response
                    })
                    .catch(error => {
                        formUtil.handleErrors(error)
                        if (this.activeConversation) {
                            this.activeConversation.members = []
                        }
                        return
                    })
            },
            fetchRooms(reset = true) {
                this.isFetching = true
                const query = {
                    ...this.roomsPageMeta,
                    lastItemUuid: reset ? null : this.rooms.meta.lastItemUuid,
                    perPage: this.rooms.meta.perPage,
                }

                this.GetRooms(query)
                    .then(response => {
                        this.isFetching = false
                    })
                    .catch(error => {
                        this.isFetching = false
                        formUtil.handleErrors(error)
                    })
            },
            searchRooms() {
                this.isFetching = true
                this.SearchRooms(this.searchTerm)
                    .then(response => {
                        this.searched = true
                        this.showChatOptions = false
                        this.isFetching = false
                    })
                    .catch(error => {
                        this.isFetching = false
                        formUtil.handleErrors(error)
                    })
            },
            searchMessages() {
                if(!this.activeConversation.chatRoom) {
                    return
                }
                this.isFetching = true
                this.SearchMessages({
                        q: this.searchTerm,
                        chatRoom: this.activeConversation.chatRoom.uuid,
                    })
                    .then(response => {
                        this.searched = true
                        this.isFetching = false

                        window.setTimeout(() => {
                            this.scrollToLatestMessages()
                            this.showScrollToLatestBtn = false
                            this.newUnreadMessageOnFeed = false
                        }, 300)
                    })
                    .catch(error => {
                        this.isFetching = false
                        formUtil.handleErrors(error)
                    })
            },
            fetchMessages(reset = false) {
                if(!this.activeConversation.chatRoom && !this.activeConversation.user) {
                    return
                }

                this.isFetching = true
                this.noMoreMessages = false
                this.newUnreadMessageOnFeed = false

                const query = {
                    ...this.messagesPageMeta,
                    lastItemUuid: reset ? null : this.messages.meta.lastItemUuid,
                    perPage: this.messages.meta.perPage,
                    chatRoom: this.activeConversation.chatRoom ? this.activeConversation.chatRoom.uuid : null,
                    user: this.activeConversation.user ? this.activeConversation.user.uuid : null,
                }

                this.GetMessages(query)
                    .then(response => {
                        this.isFetching = false
                        if (!response.data.length) {
                            this.noMoreMessages = true
                        }

                        if(reset) {
                            window.setTimeout(() => {
                                this.scrollToLatestMessages()
                                this.showScrollToLatestBtn = false
                                this.newUnreadMessageOnFeed = false
                            }, 300)
                        }

                        if(!this.searched) {
                            this.focusNewMessage()
                        }
                    })
                    .catch(error => {
                        this.isFetching = false
                        formUtil.handleErrors(error)
                    })
            },
            chatRoomUpdated() {
                this.GetRoom({
                        uuid: this.activeConversation.chatRoom.uuid
                    })
                    .then(response => {
                        const newChatRoomInfo = response.chatRoom
                        this.activeConversation.chatRoom = newChatRoomInfo

                        if(response.hasLeft) {
                            this.leaveChatRoomChannel(newChatRoomInfo)
                        }
                    })
                    .catch(error => {
                        formUtil.handleErrors(error)
                    })
            },

            // POST DATA & JOIN LEAVE METHODS
            postMessage() {
                if (!this.newMessage.message) {
                    return
                }

                this.newMessage.message = this.removeHtmlTags(this.newMessage.message.trim())

                const messageObj = {
                    uuid: this.newMessageRequestUUID,
                    message: this.newMessage.message,
                    user: this.user,
                    sentAt: MomentTz.now(this.vars.serverDateTimeFormat),
                    status: 'sending',
                }
                this.newMessageRequestUUID = uuid()

                this.newMessage = _.cloneDeep(this.initialNewMessage)
                this.noMoreMessages = false
                this.putMessageToFeed(messageObj)

                window.setTimeout(() => {
                    this.scrollTo("vue-scroll-messages", 100)
                    this.focusNewMessage()
                }, 300)

                this.SendMessage({
                        message: messageObj.message,
                        chatRoom: this.activeConversation.chatRoom,
                        user: this.activeConversation.user,
                    })
                    .then(response => {
                        this.messageSentSuccess(messageObj, response)
                    })
                    .catch(error => {
                        this.messageSendingFailed(messageObj, error)
                    })
            },
            attachmentUploadStarted(count) {
                if (!this.newMessage.attachments || this.newMessage.attachments.length) {
                    return
                }

                const messageObj = {
                    uuid: this.newMessageRequestUUID,
                    message: null,
                    user: this.user,
                    sentAt: moment.utc().format(this.vars.serverDateTimeFormat),
                    status: 'sending',
                }
                this.newMessageRequestUUID = uuid()

                this.newMessage = _.cloneDeep(this.initialNewMessage)
                this.putMessageToFeed(messageObj)

                window.setTimeout(() => {
                    this.scrollTo("vue-scroll-messages", 100)
                    this.focusNewMessage()
                }, 300)
            },
            attachmentUploaded(response) {
                if(! (response && response.meta && response.meta.requestUuid)) {
                    this.$toasted.error($t('misc.error_unknown'), this.$toastConfig.error)
                    return
                }
                EventBus.$emit('RESET_UPLOAD')
                this.messageSentSuccess({
                    uuid: response.meta.requestUuid
                }, response)
            },
            attachmentUploadError(error) {
                if(! (error && error.meta && error.meta.requestUuid)) {
                    this.$toasted.error($t('misc.error_unknown'), this.$toastConfig.error)
                    return
                }
                EventBus.$emit('RESET_UPLOAD')
                if (error) {
                    this.messageSendingFailed({
                        uuid: error.meta.requestUuid
                    }, error)
                }
            },
            messageSentSuccess(oldMessage, newMessageResponse) {

                const newMessage = newMessageResponse.data
                this.PatchMessageInFeed({
                    old: oldMessage,
                    new: {
                        ...newMessage,
                        newUuid: newMessage.uuid,
                        uuid: oldMessage.uuid
                    },
                })




                if (!this.activeConversation.chatRoom) {
                    this.joinChatRoomChannel(newMessage.chatRoom)

                    this.GetRoom({
                            uuid: newMessage.chatRoom.uuid
                        })
                        .then(response => {
                            this.activeConversation.chatRoom = response.chatRoom

                            if (this.activeConversation.chatRoom && this.activeConversation.chatRoom.hasOwnProperty('chats')) {
                                delete this.activeConversation.chatRoom.chats
                            }
                        })
                        .catch(error => {
                            formUtil.handleErrors(error)
                        })
                }
            },
            messageSendingFailed(oldMessage, error) {
                this.PatchMessageInFeed({
                    old: oldMessage,
                    new: {
                        ...oldMessage,
                        status: 'error',
                        error: formUtil.getError(error)
                    },
                })
            },
            noNeedCallback() {
                this.afterUploadComplete()
            },
            joinChatRoomChannel(chatRoom) {
                window.EchoOpts.subscriptions.chatRoom = window.Echo.join(`ChatRoom.${chatRoom.uuid}`)
                this.chatRoomChannel = window.EchoOpts.subscriptions.chatRoom
                this.chatRoomChannel.listen('ChatMessageSentToRoom', this.newMessageReceived)
                this.chatRoomChannel.listen('ChatRoomUpdated', this.chatRoomUpdated)
                this.chatRoomChannel.listenForWhisper('typing', this.anotherUserTyping)
            },
            leaveChatRoomChannel(chatRoom) {
                if (this.chatRoomChannel) {
                    this.chatRoomChannel.stopListening('ChatMessageSentToRoom')
                    this.chatRoomChannel = null
                }

                if (chatRoom) {
                    window.Echo.leave(`ChatRoom.${chatRoom.uuid}`)
                }

                if(window.EchoOpts && window.EchoOpts.subscriptions) {
                    window.EchoOpts.subscriptions.chatRoom = null
                }
            },

            // HELPER METHODS OR EVENT CALLBACKS
            enterPressedEvt(fnCallback, event) {
                if (this.enterToSubmit) {
                    return enterPressed(fnCallback, event)
                }
                return false
            },
            putMessageToFeed(message) {
                if (this.messages.data.findIndex(c => c.uuid === message.uuid) !== -1) {
                    return
                }
                this.PutMessageToFeed(message)
            },
            focusNewMessage() {
                if (this.$refs["newMessageInput"]) {
                    this.$refs['newMessageInput'].focus()
                }
            },
            scrollTo(refId, pos) {
                if (this.$refs[refId]) {
                    this.$refs[refId].scrollTo({
                            y: `${pos}%`
                        },
                        300
                    )
                }
            },
            scrollToLatestMessages() {
                this.scrollTo("vue-scroll-messages", 100)
            },
            handleMessageScroll: _.debounce(function(vertical, horizontal) {
                if (vertical.process > 0.95) {
                    this.showScrollToLatestBtn = false
                    this.newUnreadMessageOnFeed = false
                } else {
                    if(!this.searched || (this.searched && vertical.process !== 0)) {
                        this.showScrollToLatestBtn = true
                    }
                }

                if (vertical.process < 0.5 && !this.isFetching && !this.noMoreMessages) {
                    this.fetchMessages()
                }
            }, 500),
            handleRoomsScroll: _.debounce(function(vertical, horizontal) {
                if (vertical.process > 0.5 && !this.isFetching) {
                    this.fetchRooms()
                }
            }, 500),
            isTyping: _.throttle(function() {
                if (this.chatRoomChannel) {
                    this.chatRoomChannel.whisper('typing', {
                        user: this.user,
                    })
                }
            }, 500, {
                'leading': true,
                'trailing': false
            }),
            anotherUserTyping({ user }) {
                this.typingUser = user.name

                if (this.typingUserTimeout) {
                    clearTimeout(this.typingUserTimeout)
                }
                this.typingUserTimeout = setTimeout(() => {
                    this.typingUser = null
                }, 1500)
            },
            newMessageReceived(message) {
                if (!message) {
                    return
                }
                message = formatKeysToCamelCase(message)
                if (message && message.user && message.user.uuid !== this.userUuid) {
                    this.putMessageToFeed(message)
                    // playIncomingMessage()

                    window.setTimeout(() => {
                        const { v, h } = this.$refs["vue-scroll-messages"].getScrollProcess()
                        if (v > 0.5) {
                            this.scrollToLatestMessages()
                        } else {
                            this.showScrollToLatestBtn = true
                            this.newUnreadMessageOnFeed = true
                        }
                    }, 300)

                }
            },
            appendEmoji(emoji) {


                this.newMessage.message += emoji
            },

            removeHtmlTags(content) {
                content = content ? content.replace(/<[^>]+/gmi, (match) => match.replace(/ on\w+="[^"]*"/gmi, '')).replace(/<(?!\/?b>|\/?p>|\/?strong>|\/?div>|\/?br>|\/?span>|\/?em>|\/?i>)[^>]+>/gmi, '') : content
                return content
            },

            doInit() {
                this.initialNewMessage = _.cloneDeep(this.newMessage)

                if (this.activeChatRoom) {
                    this.goToConversation({ room: this.activeChatRoom })
                } else if(this.activeChatUser) {
                    this.goToConversation({ user: this.activeChatUser })
                } else {
                    this.fetchRooms()
                }

                if(this.isBoxShown) {
                    document.body.classList.add("chat-box-shown")
                }

                setTimeout(() => {
                    this.showChatOptions = this.boxVisibility
                }, 1000)
            }
        },
        directives: {
            focus: {
                inserted(el) {
                    el.focus()
                },
            },
        },
        mounted() {
            setTimeout(() => {
                this.isBoxShown = this.boxVisibility
            }, 100)

            setTimeout(() => {
                this.doInit()
            }, 200)
        },
        created() {
            if(this.configs.system && this.configs.system.allowedFileExtensions) {
                this.preRequisite.uploaderConfig.allowedExtensions = this.configs.system.allowedFileExtensions
            }
            if(this.configs.system && this.configs.system.postMaxSize) {
                this.preRequisite.uploaderConfig.allowedMaxFileSize = this.configs.system.postMaxSize
            }
        },
        beforeDestroy() {
            document.body.classList.remove("chat-box-shown")
            if(window.Echo && window.EchoOpts) {
                if(window.EchoOpts.subscriptions && window.EchoOpts.subscriptions.chatRoom) {
                    window.EchoOpts.subscriptions.chatRoom.stopListening('ChatMessageSentToRoom')
                    window.EchoOpts.subscriptions.chatRoom = null
                }
            }
        },

    }

</script>

<style lang="scss">

</style>
