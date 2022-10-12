<template>
    <div>
        <common-form />
    </div>
</template>

<script>
    import CommonForm from './form'
    import form from '@mixins/form'
    import { mapGetters, mapActions } from 'vuex'

    export default {
        components: {
            CommonForm,
        },
        extends: form,
        data() {
            return {
                initUrl: 'membership',
                dataTitle: $t('tenant.tenant'),
                hideFilterButton: true,
            }
        },
        computed: {
            ...mapGetters('common', [
                'entity',
            ]),
        },
        methods: {
            ...mapActions('common', [
                'ResetEntity',
                'SetEntity',
            ]),
        },
        mounted() {
            this.ResetEntity()
            this.getInitialData((res) => {
                this.SetEntity(res)
            })
        },
    }

</script>
