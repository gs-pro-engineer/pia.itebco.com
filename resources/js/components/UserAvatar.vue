<template>
    <div v-if="user">
        <avatar v-if="user.profile && user.profile.name" :username="user.profile.name" :src="user.profile.avatar" :background-color="backgroundColor" :color="foregroundColor" :size="size" :class="[{'avatar-shadow': hasShadow}]"></avatar>
        <avatar v-else-if="!user.profile && user.name" :username="user.name" :src="user.avatar" :background-color="backgroundColor" :color="foregroundColor" :size="size" :class="[{'avatar-shadow': hasShadow}]"></avatar>
    </div>
</template>

<script>
    import Avatar from 'vue-avatar'
    import vars from '@js/vars'

    export default {
        name: "user-avatar",
        components: {
            Avatar,
        },
        props: {
            user: {
                type: Object,
                required: true
            },
            backgroundColor: {
                type: String,
                default: vars.colors.white
            },
            foregroundColor: {
                type: String,
                default: vars.colors.primary
            },
            size: {
                type: Number,
                default: 40
            },
            hasShadow: {
                type: Boolean,
                default: false
            },
        }
    }
</script>
