<template>
    <div class="base-view view-single view-date" v-if="!hideIfEmpty || ( hideIfEmpty && value !== null && value !== '')">
        <div class="view-group" :class="[
            {'has-label': label || $slots.label},
            {'is-entity': isEntity},
            {'not-empty': value || value===0},
            viewGroupClasses
        ]">
            <slot name="label">
                <label v-if="label" :class="labelClasses">
                    {{label}}
                </label>
            </slot>
            <slot name="main">
                <div class="view-data-wrapper">
                    <component v-if="value" :is="tag" :class="['view-data', {'focusable': focusable}, dataClasses]">
                        <div class="icon-wrapper" v-if="showIcon && icon">
                            <i :class="icon"></i>
                        </div>

                        <span v-if="prefix" :class="prefixClasses">{{ prefix }} </span>

                        <span v-if="withTz">
                            <template v-if="showIfExists">
                                {{ value[showIfExists] | momentDateTimeTz }}
                            </template>
                            <template v-else>{{ value | momentDateTimeTz }}</template>
                        </span>

                        <span v-else>
                            <template v-if="showIfExists">
                                {{ [value[showIfExists], parseFormat] | moment(outputFormat) }}
                            </template>
                            <template v-else>{{ [value, parseFormat] | moment(outputFormat) }}</template>
                        </span>


                        <span v-if="suffix" :class="suffixClasses"> {{ suffix }}</span>
                    </component>
                    <span v-else>-</span>
                </div>
            </slot>
        </div>
        <slot name="errorBlock">
        </slot>

    </div>
</template>
<script>
    import { mapGetters, mapActions } from 'vuex'
    export default {
        name: "view-date",
        props: {
            label: {
                type: String,
                description: "View label (text before input)"
            },
            viewGroupClasses: {
                type: [String, Array],
                description: "View Group css classes",
                default: ''
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
            prefix: {
                type: String,
                description: "Prefix"
            },
            suffix: {
                type: String,
                description: "Suffix"
            },
            prefixClasses: {
                type: [String, Array],
                description: "Prefix",
                default: 'text-muted'
            },
            icon: {
                type: [String, Array],
                description: "Prefix",
                default: 'fas fa-store-alt'
            },
            suffixClasses: {
                type: [String, Array],
                description: "Suffix",
                default: 'text-muted'
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
            showIfExists: {
                type: String,
                default: ""
            },
            focusable: {
                type: Boolean,
                default: false
            },
            hideIfEmpty: {
                type: Boolean,
                default: false
            },
            isEntity: {
                type: Boolean,
                default: false
            },
            showIcon: {
                type: Boolean,
                default: false
            },
            withTz: {
                type: Boolean,
                default: false
            },
            fromFormat: {
                type: String,
            },
            toFormat: {
                type: String,
            },
        },
        computed: {
            ...mapGetters('config', [
                'vars',
            ]),
            parseFormat() {
                return this.fromFormat ? this.fromFormat : [this.vars.serverDateFormat, this.vars.serverDateTimeFormat]
            },
            outputFormat() {
                return this.toFormat ? this.toFormat : this.vars.defaultDateFormat
            },
        },
    }

</script>
