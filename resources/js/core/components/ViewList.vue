<template>
    <div class="base-view view-single view-list" v-if="!hideIfEmpty || ( hideIfEmpty && value !== null && value !== '')">
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
            <slot>
                <template v-if="type!=='badge'">
                    <component :is="tag" v-if="value && value.length" :class="['view-data',{'is-valid': valid === true}, {'is-invalid': valid === false}, dataClasses, computedClasses]">
                        <template v-if="limit">
                            <span v-for="v in value.slice(0, limit)" :key="v[id]" :class="itemClasses">{{ v[name] }}</span>
                        </template>

                        <template v-else>
                            <span v-for="v in value" :key="v[id]" :class="itemClasses">{{ v[name] }}</span>
                        </template>

                        <slot name="addOnRight" />
                    </component>
                    <span v-else>-</span>
                </template>

                <template v-else>
                    <component :is="tag" v-if="value && value.length" :class="['view-data',{'is-valid': valid === true}, {'is-invalid': valid === false}, dataClasses, computedClasses]">
                        <template v-if="limit">
                            <badge :type="badgeType" v-for="v in value.slice(0, limit)" :key="v[id]" :class="itemClasses">{{ v[name] }}</badge>
                        </template>

                        <template v-else>
                            <badge :type="badgeType" v-for="v in value" :key="v[id]" :class="itemClasses">{{ v[name] }}</badge>
                        </template>

                        <slot name="addOnRight" />
                    </component>
                    <span v-else>-</span>
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
        name: "view-list",
        props: {
            valid: {
                type: Boolean,
                default: undefined
            },
            label: {
                type: String,
            },
            error: {
                type: String,
            },
            labelClasses: {
                type: [String, Array],
                default: 'd-block'
            },
            itemClasses: {
                type: [String, Array],
                default: ''
            },
            dataClasses: {
                type: [String, Array],
            },
            value: {
                type: Array,
            },
            tag: {
                type: String,
                default: "h6"
            },
            type: {
                type: String,
                default: "comma"
            },
            badgeType: {
                type: String,
                default: "light"
            },
            id: {
                type: String,
                default: "uuid"
            },
            name: {
                type: String,
                default: "name"
            },
            hideIfEmpty: {
                type: Boolean,
                default: false
            },
            limit: {
                type: Number,
            },
        },
        computed: {
            computedClasses() {
                let classes = []
                classes.push(this.type + '-list')
                return classes.join(' ')
            }
        }
    }

</script>
<style lang="scss" scoped>
</style>
