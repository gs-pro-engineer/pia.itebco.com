<template>
    <common-form :is-fetching="isFetching" :edit-data="entity" :duplicate="duplicate" />
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
                initUrl: 'utility/notes',
                duplicateRoute: 'appUtilityNoteDuplicate',
                fallBackRoute: 'appUtilityNoteList',
            }
        },
    }

</script>
