<template>
    <button ref="smCloseButton" type="button" :class="['close-button', {'small-corner-padding': smallCornerPadding}, {'no-corner-padding': noCornerPadding}]" @click="handleClick" v-b-tooltip.hover="!!title" :title="title">
        <slot><i class="fas fa-times"></i></slot>
    </button>
</template>
<script>
    export default {
        name: "close-button",
        props: {
            title: {
                type: String,
                default: ''
            },
            parentClass: {
                type: String,
                default: 'position-relative'
            },
            smallCornerPadding: {
                type: Boolean,
                default: false
            },
            noCornerPadding: {
                type: Boolean,
                default: false
            },
        },
        methods: {
            handleClick(evt) {
                this.$emit("click", evt);
            }
        },
        mounted() {
            if(this.parentClass) {
                this.$refs.smCloseButton.parentNode.classList.add(this.parentClass);
            }
        },
    };

</script>
<style lang="scss" scoped>
    @import '../assets/scss/imports.scss';

    .close-button {
        position: absolute;
        top: 5px;
        right: 5px;
        border: none;
        background: none;
        cursor: pointer;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 50%;
        width: 50px;
        height: 50px;
        text-align: center;
        font-size: 26px;
        opacity: 0.5;
        transition: #{$transition-all-ease};
        z-index: 1;

        &:hover {
            background: rgba(0, 0, 0, 0.1);
            opacity: 0.9;
        }

        &.small-corner-padding {
            top: $margin-common - 8px;
            right: $margin-common - 8px;
        }

        &.no-corner-padding {
            top: 0;
            right: 0;
        }
    }
</style>
