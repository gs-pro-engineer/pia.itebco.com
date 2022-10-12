<template>
    <div :class="['general-layout', configs.auth && configs.auth.guestLayoutDesign ? `design-${configs.auth.guestLayoutDesign}` : '', configs.auth && configs.auth.guestLayoutColor ? `color-${configs.auth.guestLayoutColor}` : '']">
        <transition-page>
            <router-view></router-view>
        </transition-page>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex'

    export default {
        computed: {
            ...mapGetters('config', [
                'configs',
            ]),
        }
    }
</script>

<style lang="scss">
    @import '~@js/core/assets/scss/imports.scss';

    .general-layout {
        width: 100%;
        min-height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        background-position: center bottom;
        background: darken($primary, 15%);
        background: radial-gradient(ellipse at bottom, $primary 0%, #030617 80%);
        position: relative;

        &:before {
            content: "";
            position: absolute;
            width: 100%;
            height: 100%;
            top: 0;
            left: 0;

            background: linear-gradient(135deg, #ff005d 12px, darken($primary, 15%) 22px, darken($primary, 15%) 22px, transparent 22px, transparent 62px, darken($primary, 15%) 64px, darken($primary, 15%) 69px, transparent 69px), linear-gradient(225deg, #ff005d 22px, darken($primary, 15%) 22px, darken($primary, 15%) 24px, transparent 24px, transparent 67px, darken($primary, 15%) 67px, darken($primary, 15%) 69px, transparent 69px) 0 65px;
            background-color: #ff005d;
            background-size: 64px 128px;
            opacity: 0.05;
        }


        .error-page, .general-page {
            display: flex;
            // flex: 1 1 auto;
            flex-direction: column;
            justify-content: center;
        }

        &.color-light {
            background: #bababa;
            background: radial-gradient(ellipse at bottom, #bababa 0%, #ffffff 90%);

            &:before {
                background: linear-gradient(135deg, #ffffff 12px, #949597 22px, #949597 22px, transparent 22px, transparent 62px, #949597 64px, #949597 69px, transparent 69px), linear-gradient(225deg, #ffffff 22px, #949597 22px, #949597 24px, transparent 24px, transparent 67px, #949597 67px, #949597 69px, transparent 69px) 0 65px;
                background-color: #ffffff;
                background-size: 64px 128px;
                opacity: 0.05;
            }
        }

        &.color-dark {
            background: #000000;
            background: radial-gradient(ellipse at bottom, #000000 0%, #212224 90%);

            &:before {
                background: linear-gradient(135deg, #f1f2f4 12px, #717274 22px, #717274 22px, transparent 22px, transparent 62px, #717274 64px, #717274 69px, transparent 69px), linear-gradient(225deg, #f1f2f4 22px, #717274 22px, #717274 24px, transparent 24px, transparent 67px, #717274 67px, #717274 69px, transparent 69px) 0 65px;
                background-color: #f1f2f4;
                background-size: 64px 128px;
                opacity: 0.05;
            }
        }
    }

</style>
