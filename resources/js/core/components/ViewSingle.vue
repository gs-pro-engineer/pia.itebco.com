<template>
    <div class="base-view view-single" v-if="!hideIfEmpty || ( hideIfEmpty && value !== null && value !== '')">
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
                    <template v-if="value || value===0">
                        <router-link v-if="link" :to="link" :tag="linkTag" :class="['view-data has-link', {'focusable': focusable}, dataClasses]">
                            <div :class="['icon-wrapper', iconClasses]" v-if="showIcon && icon">
                                <i :class="icon"></i>
                            </div>

                            <div>
                                <span v-if="prefix" :class="prefixClasses">{{ prefix }}</span>

                                <div v-if="html" v-html="value"></div>
                                <template v-else-if="showIfExists">
                                    {{ value[showIfExists] }}
                                </template>
                                <template v-else>{{ value }}</template>

                                <span v-if="suffix" :class="suffixClasses">{{ suffix }}</span>
                                <div v-if="description" :class="['description', descriptionClasses]">{{ description }}</div>
                            </div>
                        </router-link>

                        <component v-else :is="tag" :class="['view-data', {'focusable': focusable}, dataClasses]">
                            <div class="icon-wrapper" v-if="showIcon && icon">
                                <i :class="icon"></i>
                            </div>

                            <div>
                                <span v-if="prefix" :class="prefixClasses">{{ prefix }}</span>

                                <div v-if="html" v-html="value"></div>
                                <template v-else-if="showIfExists">
                                    {{ value[showIfExists] }}
                                </template>
                                <template v-else>{{ value }}</template>

                                <span v-if="suffix" :class="suffixClasses">{{ suffix }}</span>
                                <div v-if="description" :class="['description', descriptionClasses]">{{ description }}</div>
                            </div>
                        </component>
                    </template>
                    <span v-else>-</span>
                </div>
            </slot>
        </div>
        <slot name="errorBlock">
        </slot>

    </div>
</template>
<script>
    export default {
        name: "view-single",
        props: {
            label: {
                type: String,
            },
            description: {
                type: String,
                default: null
            },
            viewGroupClasses: {
                type: [String, Array],
                default: ''
            },
            labelClasses: {
                type: [String, Array],
                default: 'd-block'
            },
            dataClasses: {
                type: [String, Array],
                default: ''
            },
            descriptionClasses: {
                type: [String, Array],
                default: 'text-muted'
            },
            iconClasses: {
                type: [String, Array],
                default: ''
            },
            prefix: {
                type: String,
            },
            suffix: {
                type: String,
            },
            prefixClasses: {
                type: [String, Array],
                default: 'text-muted mr-1'
            },
            icon: {
                type: [String, Array],
                default: 'fas fa-store-alt'
            },
            suffixClasses: {
                type: [String, Array],
                default: 'text-muted ml-1'
            },
            value: {
                type: [String, Number, Boolean, Object],
            },
            tag: {
                type: String,
                default: "h6"
            },
            linkTag: {
                type: String,
                default: "a"
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
            html: {
                type: Boolean,
                default: false
            },
            strippedHtml: {
                type: Boolean,
                default: false
            },
            link: {
                type: Object,
                default: null
            },
        },
    }

</script>
