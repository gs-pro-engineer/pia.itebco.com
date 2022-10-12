<template>
    <div class="custom-control custom-checkbox" :class="[classes, {disabled: disabled}]">
        <input :id="cbId" class="custom-control-input" type="checkbox" :disabled="disabled" :checked="shouldBeChecked" :value="value" @change="updateInput" />

        <template v-if="clickStop">
            <label :for="cbId" class="custom-control-label" @click.stop.prevent="toggleInput">
                <slot>
                    <span v-if="inline">&nbsp;</span>
                </slot>
            </label>
        </template>

        <template v-else>
            <label :for="cbId" class="custom-control-label">
                <slot>
                    <span v-if="inline">&nbsp;</span>
                </slot>
            </label>
        </template>
    </div>
</template>
<script>
    export default {
        name: "base-checkbox",
        model: {
            prop: "modelValue",
            event: 'change'
        },
        props: {
            modelValue: {
                type: [Array, String, Number, Boolean],
                default: false,
                description: "Whether checkbox is checked"
            },
            disabled: {
                type: Boolean,
                description: "Whether checkbox is disabled"
            },
            inline: {
                type: Boolean,
                description: "Whether checkbox is inline"
            },
            clickStop: {
                type: Boolean,
                default: false
            },
            design: {
                type: String,
                default: "default",
                description: "Button design (e,g primary, danger etc)"
            },
            value: {
                type: [Array, String, Number, Boolean],
                default: true,
                description: "Value to check in an array"
            },
        },
        data() {
            return {
                cbId: "",
                touched: false,
                checkedProxy: false
            };
        },
        computed: {
            shouldBeChecked() {
                if (this.modelValue instanceof Array) {
                    this.checkedProxy = this.modelValue.includes(this.value)
                } else {
                    this.checkedProxy = this.modelValue === this.value
                }
                return this.checkedProxy
            },
            classes() {
                let classes = [
                    { "form-check-inline": this.inline },
                    this.design && !this.disabled ? `control-${this.design}` : "",
                ];
                return classes;
            }
        },
        methods: {
            doUpdate(isChecked = false) {
                if (!this.touched) {
                    this.touched = true
                }

                if (this.modelValue instanceof Array) {
                    let newValue = [...this.modelValue]

                    if (isChecked) {
                        newValue.push(this.value)
                    } else {
                        newValue.splice(newValue.indexOf(this.value), 1)
                    }

                    this.$emit('change', newValue)
                } else {
                    this.$emit('change', isChecked ? this.value : false)
                }
            },
            toggleInput() {
                let isChecked = !this.checkedProxy
                this.doUpdate(isChecked)
            },
            updateInput(event) {
                let isChecked = event.target.checked
                this.doUpdate(isChecked)
            }
        },
        created() {
            this.cbId = Math.random()
                .toString(16)
                .slice(2);
        }
    };

</script>
