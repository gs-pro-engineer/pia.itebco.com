<template>
    <transition :name="transition">
        <div v-show="isActive" ref="animatedLoader" class="al-container" :class="['al-size-' + size, { 'al-overlay': withOverlay }, 'al-overlay-' + overlayColor]">
            <div class="al-loader" :style="loaderContainerStyles">
                <slot name="default">
                    <component :is="loaderType" :background="loaderBackground" :color="loaderColor" :size="loaderSize" :width="loaderWidth" :height="loaderHeight" :stroke="loaderStroke" :speed="loaderSpeed"></component>
                </slot>
            </div>
        </div>
    </transition>
</template>

<script>
    import Loaders from './loaders'

    export default {
        name: 'animated-loader',
        props: {
            isLoading: {
                type: Boolean,
                default: true
            },
            transition: {
                type: String,
                default: 'fade' // fade
            },
            size: {
                type: String,
                default: 'parent' // parent, screen, inline
            },
            background: {
                type: String,
                default: 'transparent'
            },
            withOverlay: {
                type: Boolean,
                default: true
            },
            hideOverflow: {
                type: Boolean,
                default: true
            },
            overlayColor: {
                type: String,
                default: 'light' // transparent, light, dark, grey
            },
            loaderType: {
                type: String,
                default: 'Spinner'
            },
            loaderBackground: String,
            loaderColor: {
                type: String,
                default: '#000000'
            },
            loaderSize: String,
            loaderWidth: String,
            loaderHeight: String,
            loaderStroke: String,
            loaderSpeed: String,
        },
        mounted() {
            if (this.size === "parent") {
                this.$refs.animatedLoader.parentNode.classList.add('al-parent');
            }
        },
        computed: {
            loaderContainerStyles() {
                return {
                    backgroundColor: this.background,
                }
            },
            isActive() {
                return this.isLoading;
            }
        },
        watch: {
            isLoading(v) {
                if(v && this.hideOverflow) {
                    this.$refs.animatedLoader.parentNode.classList.add('al-overflow-hidden');
                } else {
                    this.$refs.animatedLoader.parentNode.classList.remove('al-overflow-hidden');
                }
            }
        },
        components: Loaders
    }

</script>

<style lang="scss">
    .al-parent {
        position: relative !important;
        &.al-overflow-hidden {
            overflow: hidden;
        }
    }

</style>

<style lang="scss">
    .fade-enter-active,
    .fade-leave-active {
        transition: opacity .3s;
    }

    .fade-enter,
    .fade-leave-to {
        opacity: 0;
    }

    .al-container {
        margin: 0;
        display: inline-block;
        transition: opacity .3s;
    }

    .al-size-screen {
        position: fixed;
    }

    .al-size-parent {
        position: absolute;
    }

    .al-size-screen,
    .al-size-parent {
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 1080;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
    }

    .al-size-parent {
        z-index: 10;
    }

    .al-overlay {
        background-color: transparent;

        &.al-overlay-light {
            background-color: rgba(255, 255, 255, .8);
        }

        &.al-overlay-grey {
            background-color: rgba(0, 0, 0, .3);
        }

        &.al-overlay-dark {
            background-color: rgba(0, 0, 0, .8);
        }
    }

    .al-size-screen.al-overlay {
        height: 100vh;
    }

    .al-size-parent.al-overlay {
        height: 100%;
    }

    .al-loader {
        transform: translate(0%, 0%);
        background: transparent;
        padding: 10px;
        border-radius: 10px;
    }

</style>
