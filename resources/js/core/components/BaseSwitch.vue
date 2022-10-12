<template>
    <label class="custom-toggle" :class="[classes, {disabled: disabled}]">
        <input :id="cbId" type="checkbox" :disabled="disabled" :value="value" v-model="model" @change="onChange">
        <span class="custom-toggle-slider rounded-circle"></span>
    </label>
</template>
<script>
    export default {
        name: "base-switch",
        model: {
            prop: "checked"
        },
        props: {
            checked: {
                type: [Array, Boolean, String],
                description: "Whether checkbox is checked"
            },
            disabled: {
                type: Boolean,
                description: "Whether checkbox is disabled"
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
                type: Boolean,
                default: false,
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
            model: {
                get() {
                    return this.checked === 'false' || this.checked === '' ? false : this.checked
                },
                set(v) {
                    if (!this.touched) {
                        this.touched = true
                    }
                    this.checkedProxy = v
                    if(this.clickStop) {
                        this.$emit('input', this.checkedProxy)
                    }
                }
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
            onChange: function(e) {
                this.$emit('input', this.checkedProxy)
            }
        },
        created() {
            this.cbId = Math.random()
                .toString(16)
                .slice(2);
        }
    };

</script>
<style>
</style>
