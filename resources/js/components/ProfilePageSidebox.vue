<template>
    <base-container boxed :class="['profile-sidebar-wrapper', {'overflow-hidden': overflowHidden}]" :min-height="minHeight">
        <animated-loader :is-loading="isLoading" :loader-color="loaderColor" overlay-color="dark" />

        <slot />
    </base-container>
</template>

<script>
    export default {
        name: 'profile-page-sidebox',
        props: {
            isLoading: {
                type: Boolean,
                default: false
            },
            minHeight: {
                type: Boolean,
                default: true
            },
            overflowHidden: {
                type: Boolean,
                default: true
            },
            loaderColor: {
                type: String,
                default: '#000000'
            },
        },
    }

</script>
