<template>
    <div class="base-input">
        <div class="form-group" :class="[
           {'input-group': hasIcon},
           sizeClass,
           {'focused': focused},
           {'input-group-alternative': alternative && !native},
           {'input-group-material': !(native || alternative)},
           {'is-naked': naked},
           {'has-label': label || $slots.label},
           {'has-success': valid === true},
           {'has-danger': error || valid === false},
           {'not-empty': value || value===0},
           {'required': required},
           wrapperClasses
           ]">

            <div v-if="(computedCurrency || addonLeftText || addonLeftIcon || $slots.addonLeft) && !hidePrefixSuffix" class="input-group-prepend">
                <span class="input-group-text">
                    <slot name="addonLeft">
                        <span v-if="computedCurrency && !hidePrefixSuffix">{{ computedCurrency.prefix }}</span>
                        <span v-else-if="addonLeftText">{{ addonLeftText }}</span>
                        <i v-else :class="addonLeftIcon"></i>
                    </slot>
                </span>
            </div>
            <slot name="label">
                <label v-if="label || label === ' '" :class="labelClasses" :for="`base-input-${$attrs.name ? $attrs.name : cbId}`">
                    {{label}}
                    <span class="required-asterix" v-if="required">*</span>
                </label>
            </slot>
            <slot v-bind="slotData">
                <template v-if="$attrs.type === 'number'">
                    <input :value="value" :ref="`base-input-${$attrs.name ? $attrs.name : cbId}`" :id="`base-input-${$attrs.name ? $attrs.name : cbId}`" v-on="listeners" v-bind="$attrs" :autofocus="autoFocus" v-auto-focus="autoFocus" v-select-on-focus="selectOnFocus" v-translate-on-blur="translateOnBlur" :class="['form-control', {'is-valid': ! error && valid === true}, {'is-invalid': error || valid === false}, inputClasses]" aria-describedby="addon-right addon-left" :min="$attrs.min ? $attrs.min : (format === 'currency' ? 0 : null)" :step="computedStep">
                </template>

                <template v-else>
                    <input :value="value" :ref="`base-input-${$attrs.name ? $attrs.name : cbId}`" :id="`base-input-${$attrs.name ? $attrs.name : cbId}`" v-on="listeners" v-bind="$attrs" :autofocus="autoFocus" v-auto-focus="autoFocus" v-select-on-focus="selectOnFocus" v-translate-on-blur="translateOnBlur" :class="['form-control', {'is-valid': ! error && valid === true}, {'is-invalid': error || valid === false}, inputClasses]" aria-describedby="addon-right addon-left">
                </template>
            </slot>
            <div v-if="(computedCurrency || addonRightText || addonRightIcon || $slots.addonRight) && !hidePrefixSuffix" class="input-group-append">
                <span class="input-group-text">
                    <slot name="addonRight">
                        <a v-if="addonRightIcon === 'far fa-calendar-alt' && value && allowEmpty" class="clear-date" v-b-tooltip.hover :title="$t('general.clear')" @click.prevent="$emit('input', '')">
                            <i class="fas fa-times"></i>
                        </a>
                        <span v-if="computedCurrency && !hidePrefixSuffix">{{ computedCurrency.suffix }}</span>
                        <span v-else-if="addonRightText">{{ addonRightText }}</span>
                        <i v-else :class="addonRightIcon"></i>
                    </slot>
                </span>
            </div>
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
    import { mapGetters } from 'vuex'
    import { formatCurrency } from '@core/utils'

    export default {
        inheritAttrs: false,
        name: "base-input",
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
            size: {
                type: String,
                default: "",
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
                type: [Object, Array, String, Number, Boolean],
                description: "Input value"
            },
            addonRightIcon: {
                type: String,
                description: "Addon right icon"
            },
            addonLeftIcon: {
                type: String,
                description: "Addont left icon"
            },
            addonRightText: {
                type: String,
                description: "Addon right text"
            },
            addonLeftText: {
                type: String,
                description: "Addont left text"
            },
            format: {
                type: String,
                description: "lowercase/uppercase/capitalize/sentence",
                default: ''
            },
            formatOn: {
                type: String,
                default: 'blur'
            },
            autoFocus: {
                type: Boolean,
                description: "if autofocus is on",
                default: undefined
            },
            selectOnFocus: {
                type: Boolean,
                description: "if select on focus is on",
                default: undefined
            },
            scrollIfFocused: {
                type: Boolean,
                description: "if scroll if focused is on",
                default: true
            },
            translateOnBlur: {
                type: Boolean,
                description: "if translate on blur is on",
                default: undefined
            },
            isWrapper: {
                type: Boolean,
                default: false
            },
            allowEmpty: {
                type: Boolean,
                default: true
            },
            naked: {
                type: Boolean,
                default: false
            },
            hidePrefixSuffix: {
                type: Boolean,
                default: false
            },
            currency: {
                type: Object,
                default: null
            },
        },
        data() {
            return {
                cbId: "",
                focused: false
            }
        },
        computed: {
            ...mapGetters('config', [
                'vars',
            ]),
            listeners() {
                return {
                    ...this.$listeners,
                    input: this.updateValue,
                    focus: this.onFocus,
                    blur: this.onBlur
                }
            },
            slotData() {
                return {
                    focused: this.focused,
                    ...this.listeners
                }
            },
            hasIcon() {
                const { addonRight, addonLeft } = this.$slots
                return (
                    addonRight !== undefined ||
                    addonLeft !== undefined ||
                    this.addonRightIcon !== undefined ||
                    this.addonLeftIcon !== undefined ||
                    this.addonRightText !== undefined ||
                    this.addonLeftText !== undefined ||
                    this.computedCurrency
                )
            },
            sizeClass() {
                return this.size ? 'input-' + this.size : ''
            },
            computedCurrency() {
                if(this.format !== 'currency') {
                    return null
                }
                return this.currency ? this.currency : this.vars.defaultCurrency
            },
            computedStep() {
                return this.$attrs.step ? this.$attrs.step : (this.computedCurrency && this.computedCurrency.decimal ? (1/Math.pow(10, this.computedCurrency.decimal)) : 0.01 )
            },
        },
        watch: {
            value: {
                deep: true,
                handler(newValue, oldValue) {
                    if (this.isWrapper) {
                        this.updateError(newValue)
                    }
                }
            }
        },
        methods: {
            formatInput(value) {
                switch(this.format) {
                    case 'uppercase':
                        value = value.toUpperCase()
                        break
                    case 'lowercase':
                        value = value.toLowerCase()
                        break
                    case 'capitalize':
                        value = value.capitalize()
                        break
                    case 'sentence':
                        value = value.toSentenceCase()
                        break
                    case 'startCase':
                        value = value.startCase()
                        break
                    case 'camelCase':
                        value = value.camelCase()
                        break
                    case 'snakeCase':
                        value = value.snakeCase()
                        break
                    case 'kebabCase':
                        value = value.kebabCase()
                        break
                    case 'trimSpace':
                        value = value.trim()
                        break
                    case 'removeSpace':
                        value = value.replace(' ', '')
                        break
                    case 'currency':
                        value = formatCurrency.to(value, this.computedCurrency, false, false, true, false)
                        break
                    default:
                        break
                }
                this.$emit("input", value)
            },
            formatInputDebounced: _.debounce(function(value) {
                this.formatInput(value)
            }, 300),
            updateValue(event) {
                let value = event.target.value
                this.updateError(value)
                this.$emit("input", value)
                if(this.value && this.format && this.formatOn === 'input') {
                    this.formatInputDebounced(value)
                }
            },
            onFocus(event) {
                this.focused = true
                if(this.value && this.format && this.formatOn === 'focus') {
                    this.formatInput(event.target.value)
                }
                this.$emit("focus", event)
            },
            onBlur(event) {
                this.focused = false
                if(this.value && this.format && this.formatOn === 'blur') {
                    this.formatInput(event.target.value)
                }
                this.updateError(this.value)
                this.$emit("blur", event)
            },
            focus() {
                setTimeout(() => {
                    this.$refs[`base-input-${this.$attrs.name ? this.$attrs.name : this.cbId}`].focus()
                }, 300)
            },
            updateError(val, error = '') {
                if(val) {
                    this.$emit('update:error', error)
                }
            },
        },
        mounted() {
            if(this.autoFocus) {
                this.$refs[`base-input-${this.$attrs.name ? this.$attrs.name : this.cbId}`].focus()
            }
        },
        created() {
            this.cbId = Math.random()
                .toString(16)
                .slice(2);
        }
    }

</script>
<style lang="scss" scoped>
</style>
