<template>
    <base-container boxed with-loader :is-loading="isLoading" :loader-color="vars.loaderColor" id="printable" class="print-black-color">

        <print-header-simple v-if="showPrintHeader" :custom-configs="providerConfigs" />
        <div v-else class="header-margin" :style="{ height: headerMargin + 'px' }"></div>

        <template v-if="entity">
            <div class="row">
                <div class="col-5 pt-1">
                    <h5 v-if="configs.basic.orgName" class="font-weight-700 mb-1">{{ configs.basic.orgName }}</h5>
                    <p v-if="address" class="mb-0">{{ address }}</p>
                    <p v-if="region" class="mb-0">{{ region }}</p>
                </div>

                <div class="col-7">
                    <h1 class="text-uppercase text-right fs-3 font-weight-800 mt-0">{{ $t('membership.membership') }}</h1>
                </div>
            </div>

            <div class="row mt-5">
                <div class="col-4">
                    <view-single :label="$t('membership.props.invoice_number')" :value="entity.number" data-classes="font-weight-600" />
                </div>
                <div class="col-4">
                    <view-date :label="$t('membership.props.date')" :value="entity.createdAt" view-group-classes="border-left border-right" class="text-center" data-classes="font-weight-600"  />
                </div>
                <div class="col-4">
                    <view-single :label="$t('membership.props.method')" :value="entity.paymentGateway.source" class="text-right"  data-classes="font-weight-600" />
                </div>
            </div>


            <table class="table table-bordered table-sm mt-4 mb-4">
                <thead class="thead-light">
                    <tr>
                        <th class="min-width-40px">#</th>
                        <th class="text-left min-width-100px">{{ $t('membership.props.frequency') }}</th>
                        <th class="text-left min-width-100px">{{ $t('membership.props.transaction_id') }}</th>
                        <th class="text-right min-width-100px">{{ $t('membership.props.expiry_date') }}</th>
                        <th class="text-right min-width-100px">{{ $t('membership.props.amount') }}</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td class="">1</td>
                        <td class="">{{ entity.frequency.name }}</td>
                        <td class="">
                            <p class="text-wrap-pre-line">{{ entity.paymentGateway.referenceNumber }}</p>
                        </td>
                        <td class="text-right">
                            <view-date :value="entity.expiryDate" class="mb-0 text-right" />
                        </td>
                        <td class="text-right">
                            <view-currency :value="entity.planCharge" :currency="entity.currency" class="mb-0" data-classes="font-weight-600" />
                        </td>
                    </tr>
                </tbody>
                <tfoot v-if="entity">
                    <tr>
                        <td class="text-right fs-2 font-weight-600" colspan="4">{{ $t('general.total') }}</td>
                        <td class="text-right">
                            <view-currency :value="entity.amount" :currency="entity.currency" class="mb-0" data-classes="font-weight-600 text-success fs-2" />
                        </td>
                    </tr>
                </tfoot>
            </table>

            <!-- <view-paragraph v-if="entity.remarks" :value="entity.remarks" /> -->
            <!-- <p class="small">{{ $t('misc.invoice_print.disclaimer_head') }}: {{ $t('misc.invoice_print.disclaimer_text') }}</p> -->

        </template>

        <div class="form-footer mt-5">
            <div class="left-side">
                <base-button type="button" design="light" @click="$router.back()" tabindex="-1"><i class="fas fa-chevron-left"></i> {{ $t('general.back') }}</base-button>
            </div>
        </div>

    </base-container>
</template>

<script>
    import view from '@mixins/view'
    import * as headerMixins from '@mixins/header'
    import PrintHeaderSimple from '@views/layouts/partials/print-headers/simple'

    export default {
        extends: view,
        components: {
            PrintHeaderSimple,
        },
        data() {
            return {
                showPrintHeader: true,
                headerMargin: 150,
                initUrl: 'membership',
                dataTitle: $t('membership.membership'),
                fallBackRoute: 'appMembershipList',
                headerButtons: [
                    headerMixins.headerEventButton($t('general.print'), 'fas fa-print', { event: 'EXPORT', options: { type: 'print' } })
                ],
                providerConfigs: null,
            }
        },
        computed: {
            membershipItems() {
                return this.entity ? [ this.entity ] : []
            },
            computedBasic() {
                return this.entity && this.entity.billingAddress ? this.entity.billingAddress : {}
            },
            address() {
                let address = this.computedBasic.addressLine1
                address = this.computedBasic.addressLine2 ? (address ? `${address}, ${this.computedBasic.addressLine2}` : this.computedBasic.addressLine2) : address
                return address
            },
            region() {
                let region = this.computedBasic.city
                region = region ? (this.computedBasic.zipcode ? `${region} - ${this.computedBasic.zipcode}` : region) : ''
                region = this.computedBasic.state ? (region ? `${region}, ${this.computedBasic.state}` : this.computedBasic.state) : region
                region = this.computedBasic.country ? (region ? `${region}, ${this.computedBasic.country}` : this.computedBasic.country) : region
                return region
            },
        },
        methods: {
            getProviderConfig() {
                this.isLoading = true
                this.Custom({
                        url: 'config?provider=true',
                        method: 'get'
                    })
                    .then(response => {
                        if(response && response.assets && response.domain && response.domain.app) {
                            response.assets.objForEach((value, key) => {
                                response.assets[key] = response.domain.app + value
                            })
                        }
                        this.providerConfigs = response

                        this.autoPrint()
                        this.isLoading = false
                    })
                    .catch(error => {
                        this.isLoading = false
                        formUtil.handleErrors(error)
                    })
            },
            autoPrint() {
                window.setTimeout(() => {
                    this.export()
                }, 1000)
            }
        },
        mounted() {
            this.getInitialData().then((res) => {
                this.getProviderConfig()
            })
        },
    }

</script>

<style lang="scss" scoped>
    .header-margin {
        display: block;
    }
</style>