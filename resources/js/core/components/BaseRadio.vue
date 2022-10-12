<template>
    <div class="custom-control custom-radio" :class="[inlineClass, {'disabled': disabled}, {'has-image': hasImage}, type]">
        <input :id="cbId" class="custom-control-input" type="radio" :disabled="disabled" :checked="shouldBeChecked" :value="value" @change="updateInput" />
        <label :for="cbId" class="custom-control-label">
            <slot></slot>
        </label>
    </div>
</template>
<script>
    export default {
        name: "base-radio",
        model: {
            prop: 'modelValue',
            event: 'change'
        },
        props: {
            disabled: {
                type: Boolean,
                description: "Whether radio is disabled"
            },
            hasImage: {
                type: Boolean,
                default: false
            },
            value: {
                type: [String, Boolean, Object, Array],
                description: "Radio value"
            },
            type: {
                type: String,
                description: "Radio type",
                default: ''
            },
            modelValue: {
                type: [String, Boolean, Object, Array],
                description: "Radio value"
            },
            inline: {
                type: Boolean,
                description: "Whether radio is inline"
            }
        },
        data() {
            return {
                cbId: ""
            };
        },
        computed: {
            shouldBeChecked() {
                return this.modelValue == this.value
            },
            inlineClass() {
                if (this.inline) {
                    return `form-check-inline`;
                }
                return "";
            }
        },
        methods: {
            updateInput() {
                this.$emit('change', this.value)
            },
        },
        created() {
            this.cbId = Math.random()
                .toString(16)
                .slice(2);
        }
    };

</script>
