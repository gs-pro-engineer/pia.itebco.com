<template>
    <svg :height="radius * 2" :width="radius * 2">
        <circle :stroke="color" :stroke-dasharray="circumference + ' ' + circumference" :style="{ strokeDashoffset: strokeDashoffset }" :stroke-width="stroke" fill="transparent" :r="normalizedRadius" :cx="radius" :cy="radius" />
    </svg>
</template>

<script>
    export default {
        name: "progress-ring",
        props: {
            radius: {
                type: Number,
                default: 24,
            },
            stroke: {
                type: Number,
                default: 4,
            },
            color: {
                type: String,
                default: 'blue',
            },
            progress: {
                type: Number,
                required: true,
            },
        },
        data() {
            const normalizedRadius = this.radius - this.stroke * 2;
            const circumference = normalizedRadius * 2 * Math.PI;

            return {
                normalizedRadius,
                circumference
            };
        },
        computed: {
            strokeDashoffset() {
                return this.circumference - this.progress / 100 * this.circumference;
            }
        },
    }

</script>
<style>
</style>
