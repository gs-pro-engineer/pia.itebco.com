<template>
    <base-container boxed with-loader min-height="full" :is-loading="isLoading" :loader-color="vars.loaderColor">
        <div v-if="entity && entity.newMembership" class="h-100 w-100 d-flex justify-content-center align-items-center">
            <base-button type="button" design="primary" size="lg" @click="$router.push({ name: 'appMembershipExtend' })"><span class="fs-1">{{ $t('membership.start_membership') }}</span></base-button>
        </div>
        <div v-else-if="hasActiveMembership" class="h-100 w-100 d-flex flex-column justify-content-center align-items-center">
            <template v-if="hasLifetimeMembership">
                <h4>{{ $t('membership.you_have_lifetime_membership') }}</h4>
            </template>
            <template v-else>
                <div>
                    <view-date :prefix="$t('membership.membership_active_till')" :value="membershipExpiryDate" tag="h5" data-classes="text-success" class="mb-3" />
                </div>
                <base-button type="button" design="primary" size="lg" @click="$router.push({ name: 'appMembershipExtend' })"><span class="fs-1">{{ $t('membership.extend_membership') }}</span></base-button>

            </template>
        </div>
        <div v-else-if="!hasActiveMembership" class="h-100 w-100 d-flex flex-column justify-content-center align-items-center">
            <div>
                <view-date :prefix="$t('membership.membership_expired_on')" :value="membershipExpiryDate" tag="h5" data-classes="text-danger" class="mb-3" />
            </div>
            <base-button type="button" design="primary" size="lg" @click="$router.push({ name: 'appMembershipExtend' })"><span class="fs-1">{{ $t('membership.renew_membership') }}</span></base-button>
        </div>
    </base-container>
</template>

<script>
    import { mapGetters, mapActions } from 'vuex'
    import KProgress from 'k-progress'

    export default {
        components: {
            KProgress,
        },
        computed: {
            ...mapGetters('common', [
                'entity',
            ]),
            ...mapGetters('config', [
                'configs',
                'vars',
            ]),
            ...mapGetters('user', [
                'hasActiveMembership',
                'membershipExpiryDate',
                'hasLifetimeMembership',
            ]),
            isLoading() {
                return this.entity ? false : true
            }
        },
        methods: {
            getProgress(v, total, diff = 1) {
                let val = parseInt(((v / (total + diff) ) * 100).toFixed(0))
                return val > 100 ? 100 : val
            },
        },
        mounted() {
        }
    }

</script>
