<template>
    <base-container boxed with-loader :is-loading="isLoading" :loader-color="vars.loaderColor">
        <form @submit.prevent="submit">

            <fieldset class="fieldset pt-4">
                <legend>
                    Stripe
                    <div class="d-inline-flex align-items-center">
                        <base-checkbox class="ml-3 mt-1 mb-1" v-model="formData.enableStripe" inline>
                            {{ $t('general.enabled') }}
                        </base-checkbox>
                    </div>
                </legend>

                <collapse-transition>
                    <div class="row" v-if="formData.enableStripe">
                        <div class="col-12 col-md-6 mb-4">
                            <switch-wrapper :label="$t('config.payment_gateway.live_mode', {attribute: 'Stripe'})">
                                <base-switch v-model="formData.stripeMode"></base-switch>
                            </switch-wrapper>
                        </div>
                        <div class="col-12 col-md-6 mb-4">
                        </div>

                        <div class="col-12 col-md-6 mb-4">
                            <base-input :label="$t('config.payment_gateway.key', {attribute: 'Stripe'})" type="text" v-model="formData.stripeKey" :error.sync="formErrors.stripeKey" :disabled="isLoading" />
                        </div>
                        <div class="col-12 col-md-6 mb-4">
                            <base-input :label="$t('config.payment_gateway.secret', {attribute: 'Stripe'})" type="text" v-model="formData.stripeSecret" :error.sync="formErrors.stripeSecret" :disabled="isLoading" />
                        </div>
                    </div>
                    <h5 class="text-muted" v-else>{{ $t('config.payment_gateway.disabled') }}</h5>
                </collapse-transition>
            </fieldset>

            <fieldset class="fieldset mt-4 pt-4">
                <legend>
                    Paypal
                    <div class="d-inline-flex align-items-center">
                        <base-checkbox class="ml-3 mt-1 mb-1" v-model="formData.enablePaypal" inline>
                            {{ $t('general.enabled') }}
                        </base-checkbox>
                    </div>
                </legend>

                <collapse-transition>
                    <div class="row" v-if="formData.enablePaypal">
                        <div class="col-12 col-md-6 mb-4">
                            <switch-wrapper :label="$t('config.payment_gateway.live_mode', {attribute: 'Paypal'})">
                                <base-switch v-model="formData.paypalMode"></base-switch>
                            </switch-wrapper>
                        </div>
                        <div class="col-12 col-md-6 mb-4">
                        </div>

                        <div class="col-12 col-md-6 mb-4">
                            <base-input :label="$t('config.payment_gateway.key', {attribute: 'Paypal'})" type="text" v-model="formData.paypalKey" :error.sync="formErrors.paypalKey" :disabled="isLoading" />
                        </div>
                        <div class="col-12 col-md-6 mb-4">
                            <base-input :label="$t('config.payment_gateway.secret', {attribute: 'Paypal'})" type="text" v-model="formData.paypalSecret" :error.sync="formErrors.paypalSecret" :disabled="isLoading" />
                        </div>
                    </div>
                    <h5 class="text-muted" v-else>{{ $t('config.payment_gateway.disabled') }}</h5>
                </collapse-transition>
            </fieldset>

            <fieldset class="fieldset mt-4 pt-4">
                <legend>
                    Paddle
                    <div class="d-inline-flex align-items-center">
                        <base-checkbox class="ml-3 mt-1 mb-1" v-model="formData.enablePaddle" inline>
                            {{ $t('general.enabled') }}
                        </base-checkbox>
                    </div>
                </legend>

                <collapse-transition>
                    <div class="row" v-if="formData.enablePaddle">
                        <div class="col-12 col-md-6 mb-4">
                            <switch-wrapper :label="$t('config.payment_gateway.live_mode', {attribute: 'Paddle'})">
                                <base-switch v-model="formData.paddleMode"></base-switch>
                            </switch-wrapper>
                        </div>
                        <div class="col-12 col-md-6 mb-4">
                        </div>
                        <div class="col-12 col-md-6 mb-4">
                            <base-input :label="$t('config.payment_gateway.vendor_id')" type="text" v-model="formData.paddleKey" :error.sync="formErrors.paddleKey" :disabled="isLoading" />
                        </div>
                        <div class="col-12 col-md-6 mb-4">
                            <base-input :label="$t('config.payment_gateway.auth_code')" type="text" v-model="formData.paddleSecret" :error.sync="formErrors.paddleSecret" :disabled="isLoading" />
                        </div>
                    </div>
                    <h5 class="text-muted" v-else>{{ $t('config.payment_gateway.disabled') }}</h5>
                </collapse-transition>
            </fieldset>

            <div class="text-right mt-5">
                <base-button type="button" design="light" @click="reset">{{ $t('general.reset') }}</base-button>
                <base-button type="submit" design="primary">{{ $t('general.save') }}</base-button>
            </div>

        </form>
    </base-container>
</template>

<script>
    import form from '@mixins/config-form'
    import { CollapseTransition } from 'vue2-transitions'
    import vars from '@js/vars'

    export default {
        extends: form,
        components: {
            CollapseTransition
        },
        data() {
            return {
                formData: {
                    enableStripe: false,
                    stripeMode: false,
                    stripeKey: "",
                    stripeSecret: "",
                    enablePaypal: false,
                    paypalMode: false,
                    paypalKey: "",
                    paypalSecret: "",
                    enablePaddle: false,
                    paddleMode: false,
                    paddleKey: "",
                    paddleSecret: "",
                    type: 'paymentGateway',
                },
            }
        },
        mounted() {
            this.getInitialData()
        },
        beforeRouteEnter(to, from, next) {
            if (!vars.appKmon) {
                next({ name: 'appDashboard'})
            } else {
                next()
            }
        },
    }

</script>
