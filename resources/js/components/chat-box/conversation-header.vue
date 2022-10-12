<template>
    <div class="conversation-header">
        <div class="room-thumb">
            <user-avatar :user="computedUser" :size="40" />
        </div>
        <div class="room-details">
            <div class="title-row">
                <h6 class="room-title">{{ roomName }}</h6>
            </div>
            <div class="meta-row">
                <template v-if="!room.isGroup && !typingUser">
                    <span v-if="isLiveOnline(computedUser)">{{ $t('general.online') }}</span>
                    <span v-else>{{ $t('general.offline') }}</span>
                </template>
                <template v-else-if="room.isGroup">
                    <template v-if="typingUser"><span class="typing-indicator">{{ typingUser }} {{ $t('general.is_typing') }}</span> <span> &nbsp;</span></template>
                    <span v-else-if="roomMembers">{{ roomMembers }}</span>
                    <span v-else>{{ room.memberCount }} {{ $t('chat.members') }}</span>
                </template>
                <template v-else>
                    <span class="typing-indicator" v-show="typingUser">{{ $t('general.is_typing') }}</span> <span> &nbsp;</span>
                </template>
            </div>
        </div>
        <div class="room-btns action-buttons">
            <button v-if="room.isGroup && !room.hasLeft && configs && configs.chat.groupChat" type="button" @click="goToGroup"><i class="fas fa-info-circle"></i></button>
        </div>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex'

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
            vars: {
                type: Object,
                required: true,
            },
            configs: {
                type: Object,
                required: true,
            },
            typingUser: {
                type: String,
            },
        },
        computed: {
            ...mapGetters('user', [
                'liveUsers',
            ]),
            computedUser() {
                return this.room.isGroup || !this.room.member ? this.room : this.room.member
            },
            roomMembers() {
                if(this.room.memberCount <= 1) {
                    return this.$t('chat.only_you_are_member')
                }

                if(this.room.members && this.room.members.length > 1) {
                    return this.room.members[1].user.profile.name + this.$t('chat.and_n_other_members', {attribute: this.room.memberCount - 1})
                }
                return ''
            },
        },
        methods: {
            isLiveOnline(user) {
                return user && this.liveUsers.find(u => u.uuid === user.uuid) ? true : false
            },
            goToGroup() {
                this.$emit('goToGroup', this.room)
            },
        }
    }
</script>
