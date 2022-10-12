<template>
    <div class="base-textarea">
        <div class="form-group" :class="[
           {'focused': focused},
           {'input-group-alternative': alternative && !native},
           {'input-group-material': !(native || alternative)},
           {'has-label': label || $slots.label},
           {'has-placeholder': placeholder},
           {'has-success': valid === true},
           {'has-danger': error || valid === false},
           {'not-empty': slotData.taValue && slotData.taValue.length},
           {'required': required},
           wrapperClasses
           ]">
            <slot name="label">
                <label v-if="label" :class="labelClasses" :for="`base-textarea-${$attrs.name ? $attrs.name : cbId}`">
                    {{label}}
                    <span class="required-asterix" v-if="required">*</span>
                    <span class="bracketed" v-if="charCount">{{ charsCounted }} {{ charCountLabel }}</span>
                    <span class="bracketed" v-if="lineCount">{{ linesCounted }} {{ lineCountLabel }}</span>
                </label>
            </slot>

            <slot v-bind="slotData">
                <b-form-textarea :id="`base-textarea-${$attrs.name ? $attrs.name : cbId}`" v-model="slotData.taValue" v-bind="$attrs" :autofocus="autoFocus" v-auto-focus="autoFocus" :placeholder="placeholder" class="form-control" :class="[{'is-valid': valid === true}, {'is-invalid': valid === false}, inputClasses]" @input="updateValue" @focus.native="onFocus" @blur.native="onBlur">
                </b-form-textarea>
            </slot>
        </div>
        <slot name="infoBlock"></slot>
        <slot name="errorBlock">
            <div class="text-danger invalid-feedback error-block" v-if="error">
                {{ error }}
            </div>
        </slot>

    </div>
</template>
<script>
    import { BFormTextarea } from 'bootstrap-vue';
    export default {
        inheritAttrs: false,
        name: "base-textarea",
        components: {
            BFormTextarea
        },
        props: {
            required: {
                type: Boolean,
                description: "Whether input is required (adds an asterix *)"
            },
            valid: {
                type: Boolean,
                description: "Whether is valid",
                default: undefined
            },
            alternative: {
                type: Boolean,
                description: "Whether input is of alternative layout"
            },
            native: {
                type: Boolean,
                description: "Whether input is of material layout"
            },
            label: {
                type: String,
                description: "Input label (text before input)"
            },
            placeholder: {
                type: String,
                description: "Input placeholder (text on input)"
            },
            error: {
                type: String,
                description: "Input error (below input)"
            },
            wrapperClasses: {
                type: String,
                description: "Input label css classes"
            },
            labelClasses: {
                type: String,
                description: "Input label css classes"
            },
            inputClasses: {
                type: String,
                description: "Input css classes"
            },
            value: {
                type: [String, Number],
                description: "Input value"
            },
            autoFocus: {
                type: Boolean,
                description: "if autofocus is on",
                default: undefined
            },
            charCount: {
                type: Boolean,
                default: false
            },
            charCountLabel: {
                type: String,
                default: 'Characters',
            },
            lineCount: {
                type: Boolean,
                default: false,
            },
            lineCountLabel: {
                type: String,
            },
        },
        data() {
            return {
                cbId: "",
                focused: false,
                taValue: ''
            }
        },
        computed: {
            slotData() {
                return {
                    taValue: this.value,
                    focused: this.focused
                }
            },
            charsCounted() {
                return this.value ? this.value.length : 0
            },
            linesCounted() {
                return this.value ? this.value.lineCount() : 0
            },
        },
        methods: {
            updateValue(value) {
                this.$emit('update:error', '')
                this.$emit("input", value)
            },
            onFocus(value) {
                this.focused = true
                this.$emit("focus", value)
            },
            onBlur(value) {
                this.focused = false
                this.$emit("blur", value)
            }
        },
        mounted() {
            if(this.autoFocus) {
                this.$refs[`base-textarea-${this.$attrs.name ? this.$attrs.name : this.cbId}`].focus()
            }
        },
        created() {
            this.cbId = Math.random()
                .toString(16)
                .slice(2);
        }
    }

</script>
<style>


</style>
