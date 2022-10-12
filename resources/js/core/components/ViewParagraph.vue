<template>
    <div class="base-view view-paragraph">
        <div class="view-group" :class="[
            {'has-label': label || $slots.label},
            {'has-success': valid === true},
            {'has-danger': error || valid === false},
            {'not-empty': value || value===0}
        ]">
            <slot name="label">
                <label v-if="label" :class="labelClasses">
                    {{label}}
                </label>
            </slot>
            <slot name="main">
                <template v-if="value">
                    <div v-if="html" :class="['view-data', {'is-valid': valid === true}, {'is-invalid': valid === false}, dataClasses]" v-html="value"></div>
                    <p v-else :class="['view-data', {'is-valid': valid === true}, {'is-invalid': valid === false}, dataClasses]">{{ value }}</p>
                </template>
                <template v-else>
                    <div v-if="!hideDashIfEmpty" :class="['view-data', {'is-valid': valid === true}, {'is-invalid': valid === false}, dataClasses]">-</div>
                </template>
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
    export default {
        name: "view-paragraph",
        props: {
            valid: {
                type: Boolean,
                description: "Whether is valid",
                default: undefined
            },
            label: {
                type: String,
                description: "Input label (text before input)"
            },
            error: {
                type: String,
                description: "Input error (below input)"
            },
            labelClasses: {
                type: [String, Array],
                description: "Input label css classes"
            },
            dataClasses: {
                type: [String, Array],
                description: "Input css classes"
            },
            value: {
                type: String,
                description: "Input value"
            },
            hideDashIfEmpty: {
                type: Boolean,
                default: false
            },
            html: {
                type: Boolean,
                default: false
            },
        },
    }

</script>
<style lang="scss" scoped>
    .view-data, .base-view .view-group .view-data {
        white-space: pre-line;
    }
</style>
