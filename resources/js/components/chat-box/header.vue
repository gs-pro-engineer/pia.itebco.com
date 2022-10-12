<template>
    <div class="chat-box-header">
        <h6 class="cb-header-title">{{ computedTitle }}</h6>

        <div class="cb-header-buttons action-buttons">
            <template v-if="activeContainer === 'chatgroup'">
                <button type="button" @click="$emit('goBack')"><i :class="['fas', {'fa-chevron-left': activeContainer === 'chatgroup'}]"></i></button>
                <button type="button" @click="$emit('showAddMemberScreen')" class="auto-width"><i class="fas fa-plus"></i> <span class="px-2">{{ $t('chat.add') }}</span></button>
            </template>

            <template v-else>
                <button v-if="activeContainer !== 'home'" type="button" @click="$emit('goHome')"><i :class="['fas', {'fa-chevron-left': activeContainer === 'conversation'}, {'fa-chevron-right': activeContainer === 'settings'}]"></i></button>

                <template v-if="activeContainer !== 'settings'">
                    <button type="button" @click="$emit('toggleSearch')"><i class="fas fa-search"></i></button>
                    <button type="button" @click="$emit('goToSettings')"><i class="fas fa-cog"></i></button>
                </template>

                <router-link v-if="activeContainer === 'home' && !fullPage && configs.chat.seaparateWindow" class="button" :to="{ name: 'appChat' }"><i class="fas fa-external-link-alt"></i></router-link>
            </template>

            <button v-if="!fullPage" type="button" @click="$emit('hideChatBox')"><i class="fas fa-times"></i></button>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            activeContainer: {
                type: String,
                default: 'home',
                required: true
            },
            configs: {
                type: Object,
                required: true
            },
            fullPage: {
                type: Boolean,
                default: false
            },
        },
        computed: {
            computedTitle() {
                return this.activeContainer === 'settings' ? $t('config.chat.chat_config') : (this.activeContainer === 'chatgroup' ? $t('chat.chat_group') : $t('chat.live_chat'))
            }
        }
    }
</script>