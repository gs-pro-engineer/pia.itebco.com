<template>
    <li @click="onClickRoomItem" :class="['room-item']">
        <div class="item-thumb">
            <user-avatar :user="computedAvatar" :size="40" />
        </div>

        <div class="item-details">
            <div class="title-row">
                <h6 class="item-title">{{ roomName }}</h6>
                <small class="item-meta" v-if="showLastMessage && room.lastConversationAt">{{ room.lastConversationAt | momentCalendarTz }}</small>
            </div>

            <template v-if="showLastMessage && room.lastConversationAt">
                <div v-if="room.message" class="meta-row text-ellipsis">
                    <span v-if="room.message === '%%chat_attachment_%%'">{{ $t('upload.attachment') }}</span>
                    <span v-else>{{ removeHtmlTags(room.message) }}</span>
                </div>
                <div v-else-if="room.isGroup" class="meta-row text-ellipsis">
                    <span>{{ room.memberCount }} {{ $t('chat.members') }}</span>
                </div>
            </template>


            <div v-if="room.unreadMessages" class="unread-messages">
                <span class="badge badge-sm badge-pill badge-light">{{ room.unreadMessages }}</span>
            </div>
        </div>

        <slot name="actions">
            <div v-if="showCustomAction" class="item-actions action-buttons floating-action-buttons">
                <button type="button" @click.stop="doCustomAction"><i :class="customActionIcon"></i></button>
            </div>
        </slot>
    </li>
</template>

<script>
    import { mapGetters, mapActions } from 'vuex'
    export default {
        props: {
            room: {
                type: Object,
                required: true
            },
            roomName: {
                type: String,
                required: true
            },
            showLastMessage: {
                type: Boolean,
                default: true
            },
            clickAction: {
                type: String,
                default: 'goToConversation'
            },
            showCustomAction: {
                type: Boolean,
                default: false
            },
            clickActionOnCustom: {
                type: String,
                default: 'removeMember'
            },
            customActionIcon: {
                type: String,
                default: 'fas fa-times'
            },
            vars: {
                type: Object,
                default() {
                    return {}
                }
            }
        },
        computed: {
            ...mapGetters('user', {
                'userUuid': 'uuid'
            }),
            computedAvatar() {
                return this.room.isGroup || !this.room.member ? this.room : this.room.member
            },
        },
        methods: {
            removeHtmlTags(content) {
                if(!content) {
                    return content
                }
                content = content.replace(/<(?!\/?>)[^>]+>/gmi, ' ').replace(/\s+/gmi, ' ')
                let tmp = document.createElement("DIV")
                tmp.innerHTML = content
                return tmp.textContent || tmp.innerText || ""
            },
            onClickRoomItem() {
                if(this.computedAvatar.uuid === this.userUuid) {
                    return
                }

                if(this.clickAction === 'addToGroup') {
                    this.$emit(this.clickAction, {
                        room: null,
                        user: this.room.member ? this.room.member : this.room
                    })
                } else {
                    if(this.room.isGroup || this.room.member) {
                        this.$emit(this.clickAction, {
                            room: this.room,
                            user: null
                        })
                    } else {
                        this.$emit(this.clickAction, {
                            room: null,
                            user: this.room
                        })
                    }
                }
            },
            doCustomAction() {
                this.$emit(this.clickActionOnCustom, {
                    room: this.room,
                    user: this.room.member ? this.room.member : this.room
                })
            },
        }
    }
</script>
