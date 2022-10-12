<template>
    <div class="base-view view-currency" v-if="!hideIfEmpty || ( hideIfEmpty && value !== null && value !== '')">
        <div class="view-group" :class="[
            {'has-label': label || $slots.label},
            {'not-empty': value || value===0}
        ]">
            <slot name="label">
                <label v-if="label" :class="labelClasses">
                    {{label}}
                </label>
            </slot>
            <slot name="main">
                <component :is="tag" v-if="value || value===0" :class="['view-data no-wrap', dataClasses]">
                    <span v-if="prefix" :class="prefixOuterClasses">{{ prefix }}</span>
                    <span :class="[prefixClasses]">{{ hidePrefixSuffix ? '' : (computedCurrency.prefix ? computedCurrency.prefix : (computedCurrency.position === 'prefix' ? computedCurrency.symbol : '')) }}</span>
                    <template>{{ getValue() }}</template>
                    <span :class="[suffixClasses]">{{ hidePrefixSuffix ? '' : (computedCurrency.suffix ? computedCurrency.suffix : (computedCurrency.position === 'suffix' ? computedCurrency.symbol : '')) }}</span>
                    <span v-if="suffix" :class="suffixOuterClasses">{{ suffix }}</span>
                    <slot name="badge"></slot>
                </component>
                <span v-else :class="['view-data no-wrap', dataClasses]">-</span>
            </slot>
        </div>
        <slot name="errorBlock">
        </slot>

    </div>
</template>
<script>
    import { mapGetters } from 'vuex'
    import { formatCurrency } from '@core/utils'

    export default {
        name: "view-currency",
        props: {
            label: {
                type: String,
                description: "View label (text before input)"
            },
            labelClasses: {
                type: [String, Array],
                description: "View label css classes",
                default: 'd-block'
            },
            dataClasses: {
                type: [String, Array],
                description: "View css classes"
            },
            prefixClasses: {
                type: [String, Array],
                description: "Prefix",
                default: ''
            },
            suffixClasses: {
                type: [String, Array],
                description: "Suffix",
                default: ''
            },
            prefixOuterClasses: {
                type: [String, Array],
                description: "Prefix",
                default: ''
            },
            suffixOuterClasses: {
                type: [String, Array],
                description: "Suffix",
                default: ''
            },
            value: {
                type: [String, Number, Boolean, Object],
                description: "View value"
            },
            tag: {
                type: String,
                description: "Tag value",
                default: "h6"
            },
            hideIfEmpty: {
                type: Boolean,
                default: false
            },
            hidePrefixSuffix: {
                type: Boolean,
                default: false
            },
            round: {
                type: Boolean,
                default: false
            },
            delimeter: {
                type: Boolean,
                default: false
            },
            suffix: {
                type: String,
                description: "Right text"
            },
            prefix: {
                type: String,
                description: "Left text"
            },
            currency: {
                type: Object,
            },
        },
        computed: {
            ...mapGetters('config', [
                'vars',
            ]),
            computedCurrency() {
                return this.currency ? this.currency : this.vars.defaultCurrency
            }
        },
        methods: {
            getValue() {
                return this.computedCurrency ? formatCurrency.to(this.value, this.computedCurrency, false, this.delimeter, true, this.round) : this.value
            }
        }
    }
</script>
