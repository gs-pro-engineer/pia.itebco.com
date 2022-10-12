<template>
    <base-container boxed with-loader :is-loading="isLoading" :loader-color="vars.loaderColor">

        <div class="row">
            <div class="col-12 col-sm-8 col-md-6 col-lg-4">
                <form @submit.prevent="submit">
                </form>
            </div>
        </div>

    </base-container>
</template>

<script>
    import { assignErrors } from '@js/core/utils/form'
    import { mapGetters, mapActions } from 'vuex'
    export default {
        components: {
        },
        data() {
            return {
                formData: {
                },
                formErrors: {},
                isLoading: false
            }
        },
        computed: {
            ...mapGetters('config', [
                'vars'
            ]),
        },
        methods: {
            ...mapActions('config', [
                'SetAppConfig',
            ]),
            submit() {
                this.isLoading = true
            },
        }
    }

</script>
