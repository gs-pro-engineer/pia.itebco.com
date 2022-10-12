<template>
    <header class="guest-header text-center mb-4">

        <div class="logo-wrapper text-center mb-4 pb-2">
            <app-logo />
        </div>

        <slot></slot>
    </header>
</template>

<script>
    import AppLogo from '@components/AppLogo'
    import { mapGetters } from 'vuex'

    export default {
        components: {
            AppLogo,
        },
        data() {
            return {
            }
        },
        computed: {
            ...mapGetters('config', [
                'configs',
            ]),
        }
    }

</script>
