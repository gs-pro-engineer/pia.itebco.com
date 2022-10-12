<template>
    <common-form />
</template>

<script>
    import CommonForm from './form'
    import EventBus from '@js/event-bus'

    export default {
        components: {
            CommonForm,
        },
        beforeRouteLeave(to, from, next) {
            EventBus.$emit('ROUTE_LEAVING', next)
        },
    }

</script>
