<template>
    <footer :class="['guest-footer mt-2', configs.auth && configs.auth.guestLayoutDesign ? `parent-design-${configs.auth.guestLayoutDesign}` : '', configs.auth && configs.auth.guestLayoutColor ? `parent-color-${configs.auth.guestLayoutColor}` : '']">
        <p class="text-center mb-0 py-3">{{ footerCredit }} {{ $t('product.version') }} {{ version }}</p>
    </footer>
</template>

<script>
    import { mapGetters } from 'vuex'
    export default {
        props: ['footerCredit', 'version'],
        computed: {
            ...mapGetters('config', [
                'configs',
            ]),
        }
    }
</script>
<style lang="scss" scoped>
    .guest-footer {
        p {
            color: #ffffff;
            opacity: 0.3;
        }

        &.parent-color-light p{
            color: #000000;
        }

        &.parent-color-dark p{
            color: #ffffff;
        }

        &.parent-design-boxed-left p, &.parent-design-boxed-right p{
            color: #000000;
        }
    }
</style>