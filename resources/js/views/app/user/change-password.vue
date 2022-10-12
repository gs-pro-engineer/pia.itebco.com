<template>
    <base-container boxed with-loader :is-loading="isLoading" :loader-color="vars.loaderColor">
        <div class="row">
            <div class="col-12 col-sm-8 col-md-6 col-lg-4">

                <form @submit.prevent="submit">
                    <base-input auto-focus class="mb-3" :label="$t('auth.password.props.current_password')" type="password" name="currentPassword" v-model="formData.currentPassword" addon-left-icon="fas fa-key" :error.sync="formErrors.currentPassword">
                    </base-input>

                    <base-input class="mb-3" :label="$t('auth.password.props.new_password')" type="password" name="newPassword" v-model="formData.newPassword" addon-left-icon="fas fa-key" :error.sync="formErrors.newPassword">
                    </base-input>

                    <base-input class="mb-3" :label="$t('auth.password.props.new_password_confirmation')" type="password" name="newPasswordConfirmation" v-model="formData.newPasswordConfirmation" addon-left-icon="fas fa-key" :error.sync="formErrors.newPasswordConfirmation">
                    </base-input>

                    <div class="text-center">
                        <base-button type="submit" design="success" block class="my-4">{{ $t('auth.password.change_password') }}</base-button>
                    </div>

                </form>

            </div>
        </div>

    </base-container>
</template>

<script>
    import { mapGetters } from 'vuex'
    import * as AuthAPI from '@api/auth'
    export default {
        components: {
        },
        data() {
            return {
                formData: {
                    currentPassword: '',
                    newPassword: '',
                    newPasswordConfirmation: '',
                },
                formErrors: {},
                isLoading: false
            }
        },
        computed: {
            ...mapGetters('config', [
                'vars',
            ]),
        },
        methods: {
            submit() {
                this.isLoading = true
                AuthAPI.changePassword(this.formData)
                .then(response => {
                    this.isLoading = false
                    this.formData = formUtil.clearForm(this.formData)
                    this.$toasted.success(response.message, this.$toastConfig)
                })
                .catch(error => {
                    this.isLoading = false
                    this.formErrors = formUtil.handleErrors(error)
                })
            }
        }
    }

</script>
