<template>
    <base-container boxed with-loader :is-loading="isLoading" :loader-color="vars.loaderColor">
        <form @submit.prevent="submit">

            <div class="row">
                <div class="col-12 col-md-6">
                    <switch-wrapper :label="`${$t('membership.membership')} ${$t('general.enabled')}`">
                        <base-switch v-model="formData.enabled"></base-switch>
                    </switch-wrapper>
                </div>
            </div>

            <template v-if="formData.enabled">
                <div class="row mt-3">
                    <div class="col-12 col-md-6 mb-3">
                        <switch-wrapper :label="$t('config.membership.dashboard_alert_start_membership')">
                            <base-switch v-model="formData.dashboardAlertStartMembership"></base-switch>
                        </switch-wrapper>
                    </div>
                    <div class="col-12 col-md-6 mb-3">
                        <switch-wrapper :label="$t('config.membership.dashboard_alert_membership_expired')">
                            <base-switch v-model="formData.dashboardAlertMembershipExpired"></base-switch>
                        </switch-wrapper>
                    </div>

                    <div class="col-12 col-md-6 mb-3">
                        <switch-wrapper :label="`${$t('membership.enable_lifetime_membership')}`">
                            <base-switch v-model="formData.enableLifetimeMembership"></base-switch>
                        </switch-wrapper>
                    </div>
                </div>

                <div class="row mt-3">
                    <div class="col-12 col-md-6 mb-3">
                        <base-input :label="$t('config.membership.monthly_charge')" type="number" v-model="formData.monthlyCharge" :error.sync="formErrors.monthlyCharge" min="0" input-classes="hide-spinner" format="currency" />
                    </div>
                    <div class="col-12 col-md-6 mb-3">
                        <base-input :label="$t('config.membership.annually_charge')" type="number" v-model="formData.annuallyCharge" :error.sync="formErrors.annuallyCharge" min="0" input-classes="hide-spinner" format="currency" />
                    </div>
                    <div class="col-12 col-md-6 mb-3" v-if="formData.enableLifetimeMembership">
                        <base-input :label="$t('config.membership.lifetime_charge')" type="number" v-model="formData.lifetimeCharge" :error.sync="formErrors.lifetimeCharge" min="0" input-classes="hide-spinner" format="currency" />
                    </div>
                </div>
            </template>

            <div class="text-right mt-5">
                <base-button type="button" design="light" @click="reset">{{ $t('general.reset') }}</base-button>
                <base-button type="submit" design="primary">{{ $t('general.save') }}</base-button>
            </div>

        </form>
    </base-container>
</template>

<script>
    import form from '@mixins/config-form'
    import vars from '@js/vars'

    export default {
        extends: form,
        data() {
            return {
                formData: {
                    enabled : false,
                    enableLifetimeMembership : false,
                    dashboardAlertStartMembership : false,
                    dashboardAlertMembershipExpired : false,
                    monthlyCharge : '',
                    annuallyCharge : '',
                    lifetimeCharge : '',
                    type: 'membership'
                },
            }
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
