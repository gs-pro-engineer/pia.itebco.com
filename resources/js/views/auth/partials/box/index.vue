<template>
    <component :is="name" :width="width">
        <slot></slot>
    </component>
</template>

<script>
    import CenteredBox from './centered-box';
    export default {
        props: {
            name: {
                type: String,
                default: 'CenteredBox'
            },
            width: {
                type: String,
                default: 'normal'
            },
        },
        components: {
            CenteredBox
        },
    };

</script>
<style lang="scss" scoped>


</style>
