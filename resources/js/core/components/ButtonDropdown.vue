<template>
    <div class="btn-group" :class="[{'show': isOpen}, {'dropup': direction ==='up'}]">

        <slot name="button">
            <base-button type="button" :size="size" :design="design" :text-color="textColor" :icon="icon" :text="text" :outline="outline" :rounded="rounded" :iconOnly="iconOnly" :block="block" @click="handleClick">
                <slot name="text"></slot>
            </base-button>
        </slot>

        <base-button type="button" :size="size" :design="design" :text-color="textColor" :icon="icon" :text="text" :outline="outline" :rounded="rounded" :iconOnly="iconOnly" :block="block" aria-haspopup="true" :aria-expanded="isOpen" @click="toggleDropDown" v-click-outside="closeDropDown" class="dropdown-toggle dropdown-toggle-split">
            <span class="sr-only">Toggle Dropdown</span>
        </base-button>

        <div class="dropdown-menu" :class="[{'dropdown-menu-right': position === 'right'}, {'show': isOpen}, menuClasses]">
            <slot></slot>
        </div>

    </div>
</template>
<script>
    export default {
        name: "button-dropdown",
        props: {
            direction: {
                type: String,
                default: "down"
            },
            design: {
              type: String,
              default: "default",
              description: "Button design (e,g primary, danger etc)"
            },
            size: {
              type: String,
              default: "",
              description: "Button size lg|sm"
            },
            textColor: {
              type: String,
              default: "",
              description: "Button text color (e.g primary, danger etc)"
            },
            icon: {
              type: String,
              default: "",
              description: "Button icon"
            },
            text: {
              type: String,
              default: "",
              description: "Button text in case not provided via default slot"
            },
            outline: {
              type: Boolean,
              default: false,
              description: "Whether button style is outline"
            },
            rounded: {
              type: Boolean,
              default: false,
              description: "Whether button style is rounded"
            },
            iconOnly: {
              type: Boolean,
              default: false,
              description: "Whether button contains only an icon"
            },
            block: {
              type: Boolean,
              default: false,
              description: "Whether button is of block type"
            },
            position: {
                type: String,
                description: "Position of dropdown menu (e.g right|left)"
            },
            menuClasses: {
                type: [String, Object],
                description: "Dropdown menu classes"
            },
            open: {
                type: [Boolean, String],
            },
        },
        data() {
            return {
                isOpen: false
            }
        },
        watch: {
            open(val, oldVal) {
                if (val !== oldVal) {
                    this.isOpen = val
                }
            }
        },
        methods: {
            toggleDropDown() {
                this.isOpen = !this.isOpen
                this.$emit("change", this.isOpen)
                this.$emit('update:open', this.isOpen)
            },
            closeDropDown() {
                this.isOpen = false
                this.$emit("change", this.isOpen)
                this.$emit('update:open', this.isOpen)
            },
            handleClick(evt) {
                this.$emit("click", evt);
            }
        }
    }

</script>
<style>
    .dropdown .dropdown-toggle {
        cursor: pointer;
    }

</style>
