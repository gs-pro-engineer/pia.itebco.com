<template>
    <transition appear :name="transitionName" :mode="transitionMode" :enter-active-class="transitionEnterActiveClass">
        <slot />
    </transition>
</template>

<script>
    const DEFAULT_TRANSITION = 'fade-transform'
    const DEFAULT_TRANSITION_MODE = 'out-in'

    export default {
        name: 'TransitionPage',
        props: {
            transName: {
                type: String,
                default: DEFAULT_TRANSITION
            },
            transMode: {
                type: String,
                default: DEFAULT_TRANSITION_MODE
            }
        },
        data() {
            return {
                prevHeight: 0,
                transitionName: DEFAULT_TRANSITION,
                transitionMode: DEFAULT_TRANSITION_MODE,
                transitionEnterActiveClass: '',
            }
        },
        created() {
            this.$router.beforeEach((to, from, next) => {
                let transitionName = to.meta.transitionName || from.meta.transitionName || this.transName

                let toDepth = to.matched.length
                let fromDepth = from.matched.length

                if(toDepth === fromDepth) {
                    toDepth = to.path.replace(/\/+$/, "").split('/')
                        .length
                    fromDepth = from.path.replace(/\/+$/, "").split('/')
                        .length
                }
                if (transitionName === 'slide') {
                    transitionName = toDepth < fromDepth ? 'slide-right' : 'slide-left'
                } else if (transitionName === 'fade-transform') {
                    transitionName = toDepth < fromDepth ? 'fade-transform-right' : 'fade-transform-left'
                }

                this.transitionMode = this.transMode
                this.transitionEnterActiveClass = `${transitionName}-enter-active`

                if (to.meta.transitionName === 'zoom') {
                    this.transitionMode = 'in-out'
                    this.transitionEnterActiveClass = 'zoom-enter-active'
                    document.body.style.overflow = 'hidden'
                }

                if (from.meta.transitionName === 'zoom') {
                    this.transitionMode = null
                    this.transitionEnterActiveClass = null
                    document.body.style.overflow = null
                }

                this.transitionName = transitionName

                next()
            })
        },
        methods: {
        },
    }

</script>
