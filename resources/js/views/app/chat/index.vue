<template>
    <base-container boxed class="mt-element p-0 bg-transparent" v-if="configs.chat && configs.chat.enabled">
        <div class="chat-box-container full-page" v-if="subscriptions && subscriptions.userPrivate">
            <chat-box :box-visibility="true" :full-page="true" :channel="subscriptions.userPrivate" />
        </div>
    </base-container>
</template>

<script>
    import { mapGetters, mapActions } from 'vuex'
    import form from '@mixins/form'
    import ChatBox from '@components/chat-box/index.vue'

    export default {
        extends: form,
        components: {
            ChatBox,
        },
        data() {
            return {
                subscriptions: {},
            }
        },
        computed: {
            ...mapGetters('config', [
                'configs',
            ]),
        },
        methods: {
            ...mapActions('config', [
                'SetUiConfig',
            ]),
        },
        mounted() {
            this.$nextTick(() => {
                this.SetUiConfig({ pageHeaderShow: false, pageChatShow: false })

                if(window.Echo && window.EchoOpts) {
                    this.subscriptions = {
                        users: window.EchoOpts.subscriptions.users,
                        userPrivate: window.EchoOpts.subscriptions.userPrivate,
                    }
                }
            })
        },
        destroyed() {
            this.SetUiConfig({ pageHeaderShow: true, pageChatShow: true })
        },
    }

</script>
<style lang="scss">
    @import '~@js/core/assets/scss/imports.scss';
</style>

