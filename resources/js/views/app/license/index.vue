<template>
    <base-container boxed with-loader :is-loading="isLoading" :loader-color="vars.loaderColor">

        <div class="row">
            <div class="col-12 col-sm-8 col-md-6 col-lg-4">
                <form @submit.prevent="submit">

                    <base-input auto-focus class="mb-3" :label="$t('setup.license.props.access_code')" type="text" v-model="formData.accessCode" addon-left-icon="fas fa-key" :error.sync="formErrors.accessCode">
                    </base-input>

                    <base-input class="mb-3" :label="$t('setup.license.props.envato_email')" type="text" v-model="formData.envatoEmail" addon-left-icon="fas fa-envelope" :error.sync="formErrors.envatoEmail">
                    </base-input>

                    <a :href="verifier" target="_blank" class="btn btn-md btn-info my-4 text-uppercase">{{ $t('product.license.get_access_code') }}</a>

                    <div class="text-center mt-5">
                        <base-button type="submit" design="success" block>{{ $t('setup.license.verify') }}</base-button>
                    </div>

                </form>
            </div>
        </div>

    </base-container>
</template>

<script>
    import * as ProductAPI from '@api/product'
    import * as InstallAPI from '@api/install'
    import { assignErrors } from '@js/core/utils/form'
    import { mapGetters, mapActions } from 'vuex'
    import * as FormUtil from '@js/core/utils/form'
    export default {
        components: {
        },
        data() {
            return {
                formData: {
                    accessCode: '',
                    envatoEmail: ''
                },
                verifier: '',
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
            ...mapActions('product', [
                'CheckLicense',
            ]),
            ...mapActions('config', [
                'SetConfig',
            ]),
            submit() {
                this.isLoading = true
                this.CheckLicense(this.formData)
                    .then(response => {
                        this.SetConfig({ license: 1 });
                        this.$toasted.success(response.message, this.$toastConfig.success)
                        this.isLoading = false
                        this.$router.push({ name: 'appDashboard' });
                    })
                    .catch(error => {
                        this.isLoading = false
                        this.formErrors = FormUtil.handleErrors(error)
                    })
            },
            getPreRequisite() {
                this.isLoading = true
                InstallAPI.getPreRequisite(this.formData)
                    .then(response => {
                        this.isLoading = false
                        this.verifier = response.app.verifier
                    })
                    .catch(error => {
                        this.isLoading = false
                        this.formErrors = formUtil.handleErrors(error)
                    })
            },
        },
        mounted() {
            this.getPreRequisite()
        },
    }

</script>
