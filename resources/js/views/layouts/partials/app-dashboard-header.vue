<template>
    <app-page-header-wrapper>
        <slot />
    </app-page-header-wrapper>
</template>

<script>
    import AppPageHeaderWrapper from './app-page-header-wrapper'
    export default {
        components: {
            AppPageHeaderWrapper,
        },
        computed: {
        },
    }
</script>
