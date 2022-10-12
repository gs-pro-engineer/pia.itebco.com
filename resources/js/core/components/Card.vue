<template>
    <div class="card" :class="[
         {'card-lift--hover': lift},
         {'shadow': shadow},
         {[`shadow-${shadowSize}`]: shadowSize},
         {[`shadow${shadowSize ? '-' + shadowSize : ''}--hover`]: raise},
         {[`bg-gradient-${gradient}`]: gradient},
         {[`bg-${type}`]: type},
         {[`border-color-${border}`]: border}
       ]">
        <slot name="topImage">
            <img class="card-img-top" v-lazy="image" :alt="imageAlt" v-if="image && imageOnTop">
        </slot>

        <div class="card-header" :class="headerClasses" v-if="!($slots.topImage || (image && imageOnTop)) && ($slots.header || $slots.title || $slots.actions || title)">
            <slot name="header">
                <div :class="['card-title', cardTitleClasses]">
                    <slot name="title">
                        <h5>{{ title }}</h5>
                    </slot>
                </div>
                <div class="card-actions">
                    <slot name="actions">
                        <button v-if="canRefresh" type="button" class="btn action" @click="actionRefresh"><i :class="['fas fa-sync-alt', {'fa-spin': refreshing}]"></i></button>
                        <button v-if="canMaximize" type="button" class="btn action" @click="actionMaximize"><i class="fas fa-expand"></i></button>
                        <button v-if="canMinimize" type="button" class="btn action" @click="actionMinimize"><i class="fas fa-window-minimize"></i></button>
                    </slot>
                </div>
            </slot>
        </div>

        <div class="card-body" :class="bodyClasses" v-if="!noBody">
            <slot></slot>
        </div>

        <slot v-if="noBody"></slot>

        <slot name="bottomImage">
            <img class="card-img-bottom" v-lazy="image" :alt="imageAlt" v-if="image && !imageOnTop" >
        </slot>

        <div class="card-footer" :class="footerClasses" v-if="(!($slots.bottomImage || (image && !imageOnTop)) && $slots.footer) || showFooter">
            <slot name="footer"></slot>
        </div>

    </div>
</template>
<script>
    export default {
        name: "card",
        props: {
            type: {
                type: String,
                description: "Card type"
            },
            border: {
                type: String,
                description: "Border"
            },
            title: {
                type: String,
                description: "Card title"
            },
            image: {
                type: String,
                description: "Card Image"
            },
            imageOnTop: {
                type: Boolean,
                default: true,
            },
            imageAlt: {
                type: String,
                default: '',
                description: "Image alt text"
            },
            gradient: {
                type: String,
                description: "Card background gradient type (warning,danger etc)"
            },
            lift: {
                type: Boolean,
                description: "Whether card should move on hover"
            },
            raise: {
                type: Boolean,
                description: "Whether card should get raised on hover"
            },
            canMinimize: {
                type: Boolean,
                default: false,
            },
            canMaximize: {
                type: Boolean,
                default: false,
            },
            canRefresh: {
                type: Boolean,
                default: false,
            },
            refreshing: {
                type: Boolean,
                default: false,
            },
            showFooter: {
                type: Boolean,
                default: false,
            },
            shadow: {
                type: Boolean,
                description: "Whether card has shadow"
            },
            shadowSize: {
                type: String,
                description: "Card shadow size"
            },
            noBody: {
                type: Boolean,
                default: false,
                description: "Whether card should have wrapper body class"
            },
            bodyClasses: {
                type: [String, Object, Array],
                description: "Card body css classes"
            },
            headerClasses: {
                type: [String, Object, Array],
                description: "Card header css classes"
            },
            cardTitleClasses: {
                type: [String, Object, Array],
                description: "Card header css classes"
            },
            footerClasses: {
                type: [String, Object, Array],
                description: "Card footer css classes"
            }
        },
        methods: {
            actionMinimize() {
                this.$emit('minimized')
            },
            actionMaximize() {
                this.$emit('maximized')
            },
            actionRefresh() {
                this.$emit('refresh')
            },
        }
    };

</script>
<style>
</style>
