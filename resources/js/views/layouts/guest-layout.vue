<template>
    <div :class="['guest-layout', configs.auth && configs.auth.guestLayoutDesign ? `design-${configs.auth.guestLayoutDesign}` : '', configs.auth && configs.auth.guestLayoutColor ? `color-${configs.auth.guestLayoutColor}` : '']">
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

    .guest-layout {
        width: 100%;
        min-height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        background-position: center bottom;
        background: darken(#0281d6, 15%);
        background: radial-gradient(ellipse at bottom, #0281d6 0%, #030617 80%);
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


        .guest-page {
            display: flex;
            // flex: 1 1 auto;
            flex-direction: column;
            justify-content: center;
        }

        &.design-boxed-left, &.design-boxed-right {
            flex-direction: row;
            align-items: stretch;

            .guest-page {
                background: #ffffff;
                box-shadow: 0 0.5rem 1rem rgb(0 0 0 / 15%);
                overflow-x: hidden;
                overflow-y: auto;
            }
        }

        &.design-boxed-left {
            justify-content: flex-start;
        }

        &.design-boxed-right {
            justify-content: flex-end;
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
