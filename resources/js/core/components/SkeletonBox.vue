<template>
    <div :class="['skeleton-box', 'skeleton-' + type, 'skeleton-width-' + width, 'skeleton-height-' + height]"></div>
</template>

<script>
export default {
    name: 'skeleton-box',
    props: {
        type: {
            type: String,
            default: 'square', //rectangle, square, circle, line
            required: true
        },
        width: {
            type: String,
            default: 'full-width', //xs, sm, md, lg, xl, full
        },
        height: {
            type: String,
            default: 'sm', //xs, sm, md, lg, xl, full
        },
    },
    computed: {
    },
};
</script>
