<template>
    <div class="swatch-box">
        <template v-for="color in colors">
            <div v-if="color !== true && color !== false" :class="['swatch-color', `bg-${color}`]"></div>
        </template>
    </div>
</template>

<script>
    export default {
        props: {
            colors: {
                type: [Object],
                required: true,
                default() {
                    return {
                        pageBackgroundColor: 'light',
                        pageContainerBackgroundColor: 'white',
                        pageHeaderBackgroundColor: 'transparent',
                        leftSidebarColor: 'dark-primary',
                        rightSidebarColor: 'white',
                        modalSidebarColor: 'white',
                        specialSidebarColor: 'secondary',
                        topNavbarColor: 'black',
                    }
                }
            },
        },
    }

</script>
<style lang="scss">
    @import '~@js/core/assets/scss/imports.scss';

    .swatch-box {
        display: flex;
        align-items: stretch;
        align-content: stretch;
        width: 100%;
        border: 1px solid $light;

        > .swatch-color {
            flex: 0 50%;
            height: 30px;
            min-height: 30px;

            & + .swatch-color {
                border-left: 1px solid $light;
            }
        }
    }

</style>

