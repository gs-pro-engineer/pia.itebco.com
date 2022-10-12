<template>
    <div :class="['switch-wrapper']">
        <label class="input-group-material-label">{{ label }}</label>
        <div class="filler"></div>
        <slot />
    </div>
</template>

<script>
export default {
    name: "switch-wrapper",
    props: {
        label: {
            type: String,
            default: 'Select a value',
        },
    }
}
</script>