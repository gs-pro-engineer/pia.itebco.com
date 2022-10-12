<template>
    <div :class="['multiselect-wrapper', {'not-empty': isSelected}, {'required': required}]">
        <label class="input-group-material-label">{{ label }} <span class="required-asterix" v-if="required">*</span></label>
        <slot name="addNew">
            <div class="add-new-link" v-if="addNew && hasPermission(neededPermission)">
                <base-button type="button" design="link" size="sm" @click="$router.push({ name: addNew })">{{ $t('general.add_new') }}</base-button>
            </div>
        </slot>
        <slot />
        <slot name="errorBlock">
            <div class="text-danger invalid-feedback error-block" v-if="error">
                {{ error }}
            </div>
        </slot>
    </div>
</template>

<script>
    export default {
        name: "multiselect-wrapper",
        props: {
            required: {
                type: Boolean,
                description: "Whether input is required (adds an asterix *)"
            },
            isSelected: {
                type: Boolean,
                default: false,
            },
            label: {
                type: String,
                default: 'Select a value',
            },
            value: {
                type: [Object, Array, String, Number, Boolean],
                description: "Selected value"
            },
            error: {
                type: String,
                description: "Select error (below select)"
            },
            addNew: {
                type: String,
            },
        },
        watch: {
            value: {
                deep: true,
                handler(newValue, oldValue) {
                    this.$emit('update:error', '')
                }
            }
        },
    }

</script>
