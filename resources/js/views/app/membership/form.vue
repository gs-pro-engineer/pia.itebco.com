<template>
    <base-container boxed min-height="full" has-form has-footer>
        <form @submit.prevent="proceed">
            <animated-loader :is-loading="isBusy" :loader-color="vars.loaderColor" />

            <template v-if="entity">
                <div class="row">
                    <div class="col-12 col-md-4 mb-4">
                        <label class="d-block text-muted">{{ formLabels.currency }}</label>
                        <div>
                            {{ computedCurrency }}
                        </div>
                    </div>

                    <div class="col-12 col-md-4 mb-4 text-md-center">
                        <label class="d-block text-muted">{{ formLabels.frequency }}</label>

                        <div class="d-flex align-items-center justify-content-md-center flex-wrap">
                            <template v-for="frequency in preRequisiteEntity.frequencies">
                                <base-radio class="mr-3 ml-0 mt-2" :value="frequency.name" v-model="computedFrequency" inline :key="frequency.name">
                                    {{ frequency.name }}
                                </base-radio>
                            </template>
                        </div>
                    </div>

                    <div class="col-12 col-md-4 mb-4 mt-2 text-md-right">
                        <view-date :label="formLabels.expiryDate" :value="formData.oldExpiryDate" />
                    </div>

                    <div class="col-12 col-md-4 mb-4 mt-2 d-none d-lg-block">
                    </div>

                    <div class="col-12 col-md-4 mb-4 mt-2 text-md-center">
                        <view-date :label="formLabels.applicableDate" :value="formData.applicableDate" />
                    </div>

                    <div class="col-12 col-md-4 mb-4 mt-2 text-md-right">
                        <view-date :label="formLabels.newExpiryDate" :value="formData.expiryDate" />
                    </div>
                </div>

                <div class="mb-4 mt-2" v-if="formData.currency && formData.frequency">

                    <div class="text-md-right">
                        <view-currency :label="formLabels.amount" :value="formData.amount" :currency="formData.currency" tag="h5" data-classes="text-success" />
                    </div>

                    <div class="text-md-right">
                        <view-currency :label="formLabels.payableAmount" :value="payableAmount" :currency="formData.currency" tag="h2" data-classes="text-success font-weight-600" />
                    </div>
                </div>

                <h5 class="mb-2 mt-1 pb-2 border-bottom">{{ $t('membership.props.billing_address') }}</h5>

                <div class="row">
                    <div class="col-12">
                        <base-input :label="formLabels.orgName" type="text" v-model="formData.orgName" :error.sync="formErrors.orgName" />
                    </div>
                    <div class="col-12 col-md-4">
                        <base-input :label="formLabels.addressLine1" type="text" v-model="formData.addressLine1" :error.sync="formErrors.addressLine1" />
                    </div>
                    <div class="col-12 col-md-4">
                        <base-input :label="formLabels.addressLine2" type="text" v-model="formData.addressLine2" :error.sync="formErrors.addressLine2" />
                    </div>
                    <div class="col-12 col-md-4">
                        <base-input :label="formLabels.city" type="text" v-model="formData.city" :error.sync="formErrors.city" />
                    </div>
                    <div class="col-12 col-md-4">
                        <base-input :label="formLabels.state" type="text" v-model="formData.state" :error.sync="formErrors.state" />
                    </div>
                    <div class="col-12 col-md-4">
                        <base-input :label="formLabels.country" type="text" v-model="formData.country" :error.sync="formErrors.country" />
                    </div>
                    <div class="col-12 col-md-4">
                        <base-input :label="formLabels.zipcode" type="text" v-model="formData.zipcode" :error.sync="formErrors.zipcode" />
                    </div>
                </div>

                <br>

                <div v-if="showPaymentOptions">
                    <b-card no-body>
                        <b-tabs pills card vertical lazy active-nav-item-class="font-weight-bold py-2" nav-wrapper-class="col-12 col-md-4 col-lg-3 border-right" v-model="computedActiveTab">
                            <b-tab v-for="gateway in entity.paymentGateways" :title="gateway.label" :key="gateway.name" title-item-class="p-0">

                                <stripe-element-card v-if="gateway.name === 'stripe'" ref="stripeRef" :pk="stripeConfig.key" :amount="payableAmount*100" :locale="configs.system.locale" @token="stripeTokenCreated" @loading="loading = $event" :style-object="stripeStyle" />

                                <div v-if="gateway.name === 'paypal'" ref="paypalRef">
                                    <animated-loader :is-loading="!paypalConfig.loaded && computedActiveTab === 1 && !isBusy" :loader-color="vars.loaderColor" />
                                </div>

                                <div v-if="gateway.name === 'paddle'" class="paddle-container">
                                    <animated-loader :is-loading="!paddleConfig.loaded && computedActiveTab === 2 && !isBusy" :loader-color="vars.loaderColor" />
                                </div>

                            </b-tab>
                        </b-tabs>
                    </b-card>
                </div>
            </template>

            <div class="form-footer mt-3">
                <div class="left-side">
                    <base-button type="button" design="light" @click="$router.push({ name: 'appMembershipList', query: { reload: true }})" tabindex="-1"><i class="fas fa-chevron-left"></i> {{ $t('general.cancel') }}</base-button>
                </div>
                <div class="right-side">
                    <base-button v-if="computedActiveTab === 0" type="submit" design="primary">{{ $t('general.proceed') }} <i class="fas fa-chevron-right"></i></base-button>
                    <span v-else class="text-muted">{{ $t('membership.pay_to_proceed') }}</span>
                </div>
            </div>
        </form>
    </base-container>
</template>

<script>
    import form from '@mixins/form'
    import { mapGetters, mapActions } from 'vuex'
    import { StripeElementCard } from '@vue-stripe/vue-stripe';
    import { BCard, BTabs, BTab } from 'bootstrap-vue'

    export default {
        extends: form,
        components: {
            StripeElementCard,
            BCard,
            BTabs,
            BTab,
        },
        data() {
            return {
                formData: {
                    frequency: null,
                    currency: null,
                    amount: 0,
                    payableAmount: 0,
                    creditBalance: 0,
                    applicableDate: null,
                    oldExpiryDate: null,
                    expiryDate: null,
                    source: null,
                    token: null,
                    charge: null,
                    orgName: '',
                    addressLine1: '',
                    addressLine2: '',
                    city: '',
                    state: '',
                    country: '',
                    zipcode: '',
                },
                formLabels: {
                    frequency: $t('membership.props.frequency'),
                    currency: $t('config.system.currency'),
                    amount: $t('membership.props.amount'),
                    payableAmount: $t('membership.props.payable_amount'),
                    creditBalance: $t('membership.props.credit_balance'),
                    expiryDate: $t('membership.props.expiry_date'),
                    newExpiryDate: $t('membership.props.new_expiry_date'),
                    applicableDate: $t('membership.props.applicable_date'),
                    orgName: $t('membership.props.org_name'),
                    addressLine1: $t('membership.props.address_line_1'),
                    addressLine2: $t('membership.props.address_line_2'),
                    city: $t('membership.props.city'),
                    state: $t('membership.props.state'),
                    country: $t('membership.props.country'),
                    zipcode: $t('membership.props.zipcode'),
                },
                showPaymentOptions: true,
                initialSetupCompleted: false,
                paypalConfig: {},
                paypalButtons: null,
                paypalButtonsHasRendered: false,
                paddleConfig: {},
                activePGTab: 0,
                loading: false,
                pageTitle: $t('membership.start_membership'),
                initUrl: 'membership',
            }
        },
        computed: {
            ...mapGetters('common', [
                'entity',
            ]),
            ...mapGetters('user', [
                'hasActiveMembership',
                'membershipExpiryDate',
                'hasLifetimeMembership',
                'email',
            ]),
            preRequisiteEntity() {
                return this.entity
            },
            isBusy() {
                return !this.entity || this.isLoading ? true : false
            },
            computedFrequency: {
                get() {
                    return this.formData.frequency ? this.formData.frequency.name : null
                },
                set(v) {
                    this.formData.frequency = this.preRequisiteEntity.frequencies.find(c => c.name === v)
                    this.getCalculatedAmount()
                }
            },
            computedCurrency: {
                get() {
                    return this.formData.currency ? this.formData.currency.name : null
                },
                set(v) {
                    this.formData.currency = this.preRequisiteEntity.currencies.find(c => c.name === v)
                    this.getCalculatedAmount()

                    if(this.preRequisiteEntity.paymentGateways.length && this.preRequisiteEntity.paymentGateways[this.computedActiveTab].name === 'paypal') {
                        if(this.paypalConfig.loaded === true) {
                            this.paypalScriptLoaded()
                        } else {
                            this.loadPaypal()
                        }
                    }

                    if(this.preRequisiteEntity.paymentGateways.length && this.preRequisiteEntity.paymentGateways[this.computedActiveTab].name === 'paddle') {
                        if(this.paddleConfig.loaded === true) {
                            this.paddleScriptLoaded()
                        } else {
                            this.loadPaddle()
                        }
                    }
                }
            },
            computedPricingForPaddle() {
                return [ this.computedCurrency ? `${this.computedCurrency}:${this.payableAmount}` : `USD:${this.payableAmount}` ]
            },
            stripeConfig() {
                return this.entity && this.entity.paymentGateways.length ? this.entity.paymentGateways[0] : {}
            },
            stripeStyle() {
                return {
                    empty: {
                        '::placeholder': {
                            color: '#adb5c0'
                        },
                        ':focus': {
                            '::placeholder': {
                                color: '#ced4dd'
                            }
                        }
                    },
                }
            },
            payableAmount() {
                return this.formData.amount
            },
            computedActiveTab: {
                get() {
                    return this.activePGTab
                },
                set(v) {
                    this.activePGTab = v

                    if(this.preRequisiteEntity.paymentGateways.length && this.preRequisiteEntity.paymentGateways[v].name === 'paypal') {
                        if(this.paypalConfig.loaded === false) {
                            this.loadPaypal()
                        } else {
                            this.paypalScriptLoaded()
                        }
                    } else {
                        if(this.paypalConfig.loaded && this.paypalButtons && this.paypalButtons.close) {
                            this.paypalButtons.close()
                            this.paypalButtonsHasRendered = false
                        }

                        if(this.preRequisiteEntity.paymentGateways.length && this.preRequisiteEntity.paymentGateways[v].name === 'paddle') {
                            if(this.paddleConfig.loaded === false) {
                                this.loadPaddle()
                            } else {
                                this.paddleScriptLoaded()
                            }
                        }
                    }
                }
            },
        },
        watch: {
            preRequisiteEntity(val) {
                if (val) {
                    this.formData.frequency = val.frequencies ? val.frequencies[0] : null
                }
            }
        },
        methods: {
            ...mapActions('user', [
                'GetUser',
            ]),
            getCalculatedAmount(cbFunction) {
                if(! this.initialSetupCompleted) {
                    return
                }

                this.isLoading = true
                this.formData.method = this.preRequisiteEntity && this.preRequisiteEntity.paymentGateways && this.preRequisiteEntity.paymentGateways.length ? this.preRequisiteEntity.paymentGateways[this.computedActiveTab].name : null

                this.Custom({
                        url: 'membership/calculate',
                        method: 'post',
                        data: this.formData
                    })
                    .then(response => {
                        this.formData.amount = response.amount || 0
                        this.formData.applicableDate = response.applicableDate
                        this.formData.oldExpiryDate = response.expiryDate
                        this.formData.expiryDate = response.newExpiryDate
                        this.formData.paddleUrl = response.paddleUrl
                        // this.showPaymentOptions = this.formData.payable ? true : false
                        this.isLoading = false

                        if(cbFunction && _.isFunction(cbFunction)) {
                            cbFunction()
                        } else {
                            if(this.preRequisiteEntity && this.preRequisiteEntity.paymentGateways.length && this.preRequisiteEntity.paymentGateways[this.computedActiveTab].name === 'paddle') {
                                if(this.paddleConfig.loaded === true) {
                                    if(Paddle && Paddle.Checkout) {
                                        // Paddle.Checkout.close()
                                        // this.paddleConfig.loaded = false
                                    }

                                    this.paddleScriptLoaded()
                                } else {
                                    this.loadPaddle()
                                }
                            }
                        }
                    })
                    .catch(error => {
                        this.isLoading = false
                        formUtil.handleErrors(error)
                    })
            },
            updateMembership() {
                this.isLoading = true
                this.Custom({
                        url: 'membership',
                        method: 'post',
                        data: this.formData
                    })
                    .then(response => {
                        this.$toasted.success(response.message, this.$toastConfig)
                        this.GetUser()
                            .then(response => {
                                this.$router.push({ name: 'appMembershipList', query: { reload: true } })
                                this.isLoading = false
                            })
                            .catch(error => {
                                formUtil.handleErrors(error)
                                this.$router.push({ name: 'appMembershipList', query: { reload: true } })
                                this.isLoading = false
                                // location.reload()
                            })
                        // this.isLoading = false
                    })
                    .catch(error => {
                        this.isLoading = false
                        formUtil.handleErrors(error)
                    })
            },
            proceed() {
                if (this.formData.amount) {
                    this.isLoading = true
                    if (this.$refs && this.$refs.stripeRef && this.preRequisiteEntity.paymentGateways.length && this.preRequisiteEntity.paymentGateways[this.computedActiveTab].name === 'stripe') {
                        this.$refs.stripeRef[0].submit()
                    } else {
                        this.isLoading = false
                    }
                } else {
                    this.updateMembership()
                }
            },
            stripeTokenCreated(token) {
                this.formData.token = token
                this.formData.method = this.preRequisiteEntity.paymentGateways.length && this.preRequisiteEntity.paymentGateways[this.computedActiveTab].name

                // for additional charge objects go to https://stripe.com/docs/api/charges/object
                this.formData.charge = {
                    source: token.id,
                    amount: this.payableAmount * 100, // the amount you want to charge the customer in cents. $100 is 1000 (it is strongly recommended you use a product id and quantity and get calculate this on the backend to avoid people manipulating the cost)
                }
                this.formData.payableAmount = this.formData.charge.amount

                this.updateMembership()
            },
            paypalScriptLoaded() {
                this.loading = true
                this.isLoading = true

                if (this.paypalButtons && this.paypalButtons.close && this.paypalButtonsHasRendered) {
                    this.paypalButtons.close()
                    this.paypalButtonsHasRendered = false
                }

                this.paypalButtons = window.paypal.Buttons({
                    createOrder: (data, actions) => {
                        this.isLoading = true
                        const orderObj = {
                            purchase_units: [
                                {
                                    description: `${window.kmenv.name} - ${this.computedFrequency.name} ${$t('membership.membership')}`,
                                    amount: {
                                        currency_code: this.computedCurrency,
                                        value: this.payableAmount
                                    }
                                }
                            ]
                        }

                        // console.log(orderObj)
                        return actions.order.create(orderObj)
                    },
                    onApprove: async (data, actions) => {
                        const token = await actions.order.capture()
                        // console.log(token)
                        this.formData.token = token
                        this.formData.method = this.preRequisiteEntity.paymentGateways.length ? this.preRequisiteEntity.paymentGateways[this.computedActiveTab].name : null

                        // for additional charge objects go to https://stripe.com/docs/api/charges/object
                        this.formData.charge = {
                            source: token.id,
                            amount: this.payableAmount, // the amount you want to charge the customer in cents. $100 is 1000 (it is strongly recommended you use a product id and quantity and get calculate this on the backend to avoid people manipulating the cost)
                        }
                        this.formData.payableAmount = this.formData.charge.amount
                        this.isLoading = false
                        this.updateMembership()
                    },
                    onError: err => {
                        this.isLoading = false
                        this.$toasted.error(this.$t('membership.paypal_create_order_error'), this.$toastConfig.error)
                    }
                })

                this.paypalButtons.render(this.$refs.paypalRef[0])
                .then(() => {
                    this.paypalButtonsHasRendered = true
                })
                .catch((err) => {
                    let selector = this.$refs.paypalRef[0]

                    // button failed to render, possibly because it was closed or destroyed.
                    if (selector && selector.children.length > 0) {
                        // still mounted so throw an error
                        throw new Error(err)
                    }

                    this.$toasted.info($t('general.kindly_reload_page'), this.$toastConfig.info)

                    // not mounted anymore, we can safely ignore the error
                    return
                })

                this.paypalConfig.loaded = true
                this.loading = false
                this.isLoading = false
            },
            paddleScriptLoaded() {
                if(Paddle) {
                    if(!this.paddleConfig.mode) {
                        Paddle.Environment.set('sandbox')
                    }

                    Paddle.Setup({
                        vendor: this.paddleConfig.key,
                    })

                    this.getCalculatedAmount(() => {
                        Paddle.Checkout.open({
                            method: 'inline',
                            email: this.email,
                            country: this.formData.country,
                            postcode: this.formData.zipcode,
                            allowQuantity: false,
                            disableLogout: true,
                            frameTarget: 'paddle-container',
                            frameInitialHeight: 416,
                            frameStyle: 'width:100%; min-width:312px; background-color: transparent; border: none;',
                            override: this.formData.paddleUrl,
                            successCallback: (data) => {
                                this.formData.token = data.checkout
                                this.formData.method = this.preRequisiteEntity.paymentGateways.length && this.preRequisiteEntity.paymentGateways[this.computedActiveTab].name

                                this.formData.charge = {
                                    source: data.checkout.id,
                                    amount: this.payableAmount
                                }
                                this.formData.payableAmount = this.formData.charge.amount

                                this.updateMembership()
                            },
                            // closeCallback: (data) => {
                            //     console.log(data)
                            // }
                        })
                        this.paddleConfig.loaded = true
                    })
                }
            },
            loadPaypal() {
                const script = document.createElement("script")
                script.src =
                "https://www.paypal.com/sdk/js?client-id=" + this.paypalConfig.key + "&currency=" + this.computedCurrency
                script.addEventListener("load", this.paypalScriptLoaded)
                document.body.appendChild(script)
            },
            loadPaddle() {
                const script = document.createElement("script")
                script.src =
                "https://cdn.paddle.com/paddle/paddle.js"
                script.addEventListener("load", this.paddleScriptLoaded)
                document.body.appendChild(script)
            },
        },
        mounted() {
            if(this.hasActiveMembership) {
                this.pageTitle = $t('membership.extend_membership')
            } else {
                this.pageTitle = this.membershipExpiryDate ? $t('membership.renew_membership') : $t('membership.start_membership')
            }
            this.applyPageHeader()

            this.formData.currency = this.configs.system.currency
            this.formData.orgName = this.configs.basic.orgName || ''
            this.formData.addressLine1 = this.configs.basic.orgAddressLine1 || ''
            this.formData.addressLine2 = this.configs.basic.orgAddressLine2 || ''
            this.formData.city = this.configs.basic.orgCity || ''
            this.formData.state = this.configs.basic.orgState || ''
            this.formData.country = this.configs.basic.orgCountry || ''
            this.formData.zipcode = this.configs.basic.orgZipcode || ''

            if (this.preRequisiteEntity) {
                this.formData.frequency = this.preRequisiteEntity.selectedFrequency ? this.preRequisiteEntity.selectedFrequency : (this.preRequisiteEntity.frequencies ? this.preRequisiteEntity.frequencies[0] : null)
                this.formData.currency = this.preRequisiteEntity.selectedCurrency ? this.preRequisiteEntity.selectedCurrency : (this.preRequisiteEntity.currencies ? this.preRequisiteEntity.currencies[0] : null)

                if (this.preRequisiteEntity.paymentGateways.length) {
                    this.paypalConfig = this.preRequisiteEntity.paymentGateways.find(pg => pg.name === 'paypal')
                    if(this.paypalConfig) {
                        this.paypalConfig.loaded = false

                        if(this.preRequisiteEntity.paymentGateways[this.computedActiveTab].name === 'paypal') {
                            this.loadPaypal()
                        }
                    }

                    this.paddleConfig = this.preRequisiteEntity.paymentGateways.find(pg => pg.name === 'paddle')
                    if(this.paddleConfig) {
                        this.paddleConfig.loaded = false

                        if(this.preRequisiteEntity.paymentGateways[this.computedActiveTab].name === 'paddle') {
                            this.loadPaddle()
                        }
                    }
                }

                this.initialSetupCompleted = true

                window.setTimeout(() => {
                    this.getCalculatedAmount()
                }, 1000)
            } else {
                this.initialSetupCompleted = true
            }
        },

    }

</script>

<style lang="scss">
    @import '~@js/core/assets/scss/imports.scss';
    .base-container {
        .StripeElement {
            border: 1px solid $light !important;
        }
    }
</style>
