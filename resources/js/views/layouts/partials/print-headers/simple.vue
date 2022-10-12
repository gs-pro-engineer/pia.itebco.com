<template>
    <header :class="['print-header print-header-simple', `layout-${computedConfig.printHeaderLayout}`]">
        <div class="row">
            <div class="col-6">
                <app-logo v-if="computedConfig.printHeaderLogo" place="print-header" :assets="computedConfig && computedConfig.assets ? computedConfig.assets : null" />
                <h3 v-else-if="computedBasic.orgName" class="font-weight-700">{{ computedBasic.orgName }}</h3>
            </div>

            <div class="col-6 text-right contact-details" v-if="computedBasic && computedConfig.printHeaderSellerInfo">
                <h4 v-if="computedConfig.printHeaderLogo && computedBasic.orgName" class="font-weight-700">{{ computedBasic.orgName }}</h4>
                <p v-if="address">{{ address }}</p>
                <p v-if="region">{{ region }}</p>
                <h6 v-if="computedBasic.phone || computedBasic.email">
                    <span v-if="computedBasic.phone" class="">{{ $t('config.basic.phone') }}: <span class="font-weight-700">{{ computedBasic.phone }}</span></span><span v-if="computedBasic.email" class="pre-comma">{{ $t('config.basic.email') }}: <span class="font-weight-700">{{ computedBasic.email }}</span></span>
                </h6>
            </div>
        </div>
    </header>
</template>

<script>
    import AppLogo from '@components/AppLogo'
    import { mapGetters } from 'vuex'

    export default {
        components: {
            AppLogo,
        },
        props: ['customConfigs'],
        computed: {
            ...mapGetters('config', [
                'configs',
            ]),
            computedConfig() {
                return this.customConfigs ? this.customConfigs : {}
            },
            computedBasic() {
                return this.customConfigs && this.customConfigs.basic ? this.customConfigs.basic : this.configs.basic
            },
            address() {
                let address = this.computedBasic.orgAddressLine1
                address = this.computedBasic.orgAddressLine2 ? (address ? `${address}, ${this.computedBasic.orgAddressLine2}` : this.computedBasic.orgAddressLine2) : address
                return address
            },
            region() {
                let region = this.computedBasic.orgCity
                region = region ? (this.computedBasic.orgZipcode ? `${region} - ${this.computedBasic.orgZipcode}` : region) : ''
                region = this.computedBasic.orgState ? (region ? `${region}, ${this.computedBasic.orgState}` : this.computedBasic.orgState) : region
                region = this.computedBasic.orgCountry ? (region ? `${region}, ${this.computedBasic.orgCountry}` : this.computedBasic.orgCountry) : region
                return region
            },
        }
    }
</script>
