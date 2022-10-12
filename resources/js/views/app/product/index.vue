<template>
    <div class="row">
        <div class="col-12 col-md-6">
            <base-container boxed with-loader min-height="full" :is-loading="isLoading" :loader-color="vars.loaderColor">
                <div class="label-group">
                    <label class="text-muted">Product Name</label>
                    <h4 class="font-weight-bold">{{ product.name }}</h4>
                </div>

                <hr class="my-2">
                
                <div class="row mt-4">
                    <div class="col-12 col-md-4">
                        <div class="label-group">
                            <label class="text-muted">Current Version</label>
                            <p>{{ product.currentVersion }}</p>
                        </div>
                    </div>
                    <div class="col-12 col-md-4 text-md-center">
                        <div class="label-group">
                            <label class="text-muted">Latest Version</label>
                            <p>
                                {{ product.latestVersion }}
                                <router-link v-if="product.currentVersion != product.latestVersion && !hideUpdateLink" :to="{ name: 'appProductUpdate' }" class="badge badge-info badge-sm">Update Available</router-link>

                                <span v-if="product.currentVersion === product.latestVersion" class="badge badge-sm badge-success">Up-to-date</span>
                            </p>
                        </div>
                    </div>
                    <div class="col-12 col-md-4 text-md-right">
                        <div class="label-group">
                            <label class="text-muted">Latest Version Release</label>
                            <p>{{ product.latestVersionRelease | moment(vars.defaultDateFormat) }}</p>
                        </div>
                    </div>
                </div>

                <hr class="my-2">

                <div class="row mt-4">
                    <div class="col-12 col-md-6">
                        <div class="label-group">
                            <label class="text-muted">Date of Purchase</label>
                            <p>{{ product.dateOfPurchase | moment(vars.defaultDateFormat) }}</p>
                        </div>
                    </div>
                    <div class="col-12 col-md-6 text-md-right">
                        <div class="label-group">
                            <label class="text-muted">Support Validity</label>
                            <p>
                                {{ product.dateOfSupportExpiry | moment(vars.defaultDateFormat) }} 
                                <span v-if="isSupportValid" class="badge badge-sm badge-success">Supported</span>
                                <span v-else class="badge badge-sm badge-danger">Expired</span>
                            </p>
                        </div>
                    </div>
                </div>

                <hr class="my-2">

                <div class="row mt-4">
                    <div class="col-12 col-md-6">
                        <div class="label-group">
                            <label class="text-muted">License Type</label>
                            <p>{{ product.licenseType }}</p>
                        </div>
                    </div>
                    <div class="col-12 col-md-6 text-md-right">
                        <div class="label-group">
                            <label class="text-muted">Registered Email ID</label>
                            <p>{{ product.email }}</p>
                        </div>
                    </div>
                </div>

                <hr class="my-2">

                <div class="row mt-4">
                    <div class="col-12 col-md-4">
                        <div class="label-group">
                            <label class="text-muted">Purchase Code</label>
                            <p>{{ product.purchaseCode }}</p>
                        </div>
                    </div>
                    <div class="col-12 col-md-4 text-md-center">
                        <div class="label-group">
                            <label class="text-muted">Access Code</label>
                            <p>{{ product.accessCode }}</p>
                        </div>
                    </div>
                    <div class="col-12 col-md-4 text-md-right">
                        <div class="label-group">
                            <label class="text-muted">Checksum</label>
                            <p>{{ product.checksum }}</p>
                        </div>
                    </div>
                </div>
            </base-container>
        </div>

        <div class="col-12 col-md-6">
            <router-view />
        </div>
    </div>
</template>

<script>
    import { mapGetters, mapActions } from 'vuex'
    import * as ProductAPI from '@api/product'

    export default {
        data() {
            return {
                isLoading: false,
            }
        },
        computed: {
            ...mapGetters('config', [
                'configs',
                'vars',
            ]),
            ...mapGetters('product', [
                'product',
                'isSupportValid',
            ]),
            hideUpdateLink() {
                return this.$route.name === 'appProductUpdate'   
            }
        },
        mounted() {
            this.getInitialData();
        },
        methods: {
            ...mapActions('product', {
                getProductDetails: 'Get',
            }),
            getInitialData() {
                this.isLoading = true
                this.getProductDetails()
                    .then(() => {
                        this.isLoading = false
                    })
                    .catch(error => {
                        this.isLoading = false
                        this.formErrors = formUtil.handleErrors(error)
                    })
            },
        }
    }

</script>
