<template>
    <base-container boxed>
        <common-form :is-fetching="isFetching" :edit-data="entity" />
    </base-container>
</template>

<script>
    import CommonForm from './form'
    import editForm from '@mixins/edit-form'

    export default {
        components: {
            CommonForm,
        },
        extends: editForm,
        data() {
            return {
                initUrl: 'options',
                fallBackRoute: 'appOptionList',
            }
        },
        beforeMount() {
            const meta = this.$route.meta
            this.fallBackRoute = `${meta.routeNamePrefix}List`
        },
    }

</script>
