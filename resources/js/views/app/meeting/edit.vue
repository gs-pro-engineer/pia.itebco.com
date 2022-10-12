<template>
    <base-container boxed>
        <common-form :is-fetching="isFetching" :edit-data="entity" :duplicate="duplicate" />
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
                initUrl: 'meetings',
                duplicateRoute: 'appMeetingDuplicate',
                fallBackRoute: 'appMeetingList',
            }
        },
    }

</script>
