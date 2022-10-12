<template>
    <transition appear name="fade" mode="out-in">
        <vue-scroll id="vuescrollAppLayout" ref="vuescrollAppLayout">
            <app-container ref="appContainer">
                <router-view />
            </app-container>
        </vue-scroll>
    </transition>
</template>

<script>
    import { mapGetters, mapActions } from 'vuex'
    import '@js/app-components'
    import AppContainer from './partials/app-container'

    export default {
        name: 'AppLayout',
        components: {
            AppContainer,
        },
        data() {
            return {
                scrollTopPosition: 0,
            }
        },
        computed: {
            ...mapGetters('config', [
                'scrollLock',
            ]),
        },
        watch: {
            $route(to, from) {
                setTimeout(() => {
                    this.$refs['vuescrollAppLayout'].scrollTo({
                        x: 0,
                        y: 0
                    }, true)
                }, 100)
            },
            scrollLock(val, oldVal) {
                if (val) {
                    this.scrollLockEnable()
                } else {
                    this.scrollLockDisable()
                }
            },
        },
        methods: {
            ...mapActions('config', [
                'ScrollLock',
                'ScrollUnlock',
            ]),
            scrollLockEnable() {
                const toLock = this.$refs.appContainer.$el
                const scrollPosition = this.$refs["vuescrollAppLayout"].getPosition()
                this.scrollTopPosition = scrollPosition.scrollTop
                toLock.style.overflow = 'hidden'
                toLock.style.position = 'fixed'
                toLock.style.top = `-${this.scrollTopPosition}px`
            },
            scrollLockDisable() {
                const toLock = this.$refs.appContainer.$el
                toLock.style.removeProperty('overflow')
                toLock.style.removeProperty('position')
                toLock.style.removeProperty('top')
                this.$refs["vuescrollAppLayout"].scrollBy({
                        y: this.scrollTopPosition
                    }, 0);
            },
        },
    }

</script>

<style lang="scss" scoped>
</style>
