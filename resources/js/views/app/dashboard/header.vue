<template>
    <app-dashboard-header>
        <div class="header-body min-height-150px">
            <animated-loader :is-loading="isLoading && !(others.stats && others.stats.length)" :loader-color="vars.colors.white" overlay-color="transparent" />

            <div class="row dashboard-alerts" v-if="others.alerts">
                <div class="col-12" v-for="alert in others.alerts">
                    <div :class="['alert fade show mb-element', `alert-${alert.type}`, {'alert-dismissible': alert.dismissible}]" role="alert">
                        <div class="alert-content">
                            <h4 v-if="alert.title">{{ alert.title }}</h4>
                            <p class="mb-0" v-if="alert.description">{{ alert.description }}</p>
                        </div>

                        <template v-if="alert.link">
                            <router-link v-if="alert.link.route" :to="{ name: alert.link.route }" class="btn btn-lg alert-btn">{{ alert.link.text }}</router-link>
                            <a v-else-if="alert.link.href" :href="alert.link.href" :target="alert.link.target ? alert.link.target : '_self'">{{ alert.link.text }}</a>
                        </template>

                        <button v-if="alert.dismissible" type="button" class="close" data-dismiss="alert" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                </div>
            </div>

            <!-- Card stats -->

            <div class="row" v-if="others.stats && others.stats.length">
                <div class="col-12 col-sm-6 col-md-3" v-for="stat in others.stats" :key="stat.label">
                    <stat-box :is-fetching="isLoading" :stat="stat" />
                </div>
            </div>

            <div class="dashboard-alerts mt-element" v-if="configs.membership.dashboardAlertStartMembership && !hasActiveMembership && !membershipExpiryDate">
                <div class="alert fade show mb-element alert-info" role="alert">
                    <div class="alert-content">
                        <h4>{{ $t('membership.dashboard_alert_start.title') }}</h4>
                        <p class="mb-0">{{ $t('membership.dashboard_alert_start.description') }}</p>
                    </div>

                    <router-link :to="{ name: 'appMembershipList' }" class="btn btn-lg alert-btn">{{ $t('membership.start_membership') }}</router-link>
                </div>
            </div>

            <div class="dashboard-alerts mt-element" v-else-if="configs.membership.dashboardAlertMembershipExpired && !hasActiveMembership && membershipExpiryDate">
                <div class="alert fade show mb-element alert-danger" role="alert">
                    <div class="alert-content">
                        <h4>{{ $t('membership.dashboard_alert_expired.title') }}</h4>
                        <p class="mb-0">{{ $t('membership.dashboard_alert_expired.description') }}</p>
                    </div>

                    <router-link :to="{ name: 'appMembershipList' }" class="btn btn-lg alert-btn">{{ $t('membership.renew_membership') }}</router-link>
                </div>
            </div>
        </div>

    </app-dashboard-header>
</template>

<script>
    import AppDashboardHeader from '@views/layouts/partials/app-dashboard-header'
    import { mapGetters, mapActions } from 'vuex'
    import StatBox from './widgets/StatBox'

    export default {
        components: {
            AppDashboardHeader,
            StatBox,
        },
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
            ...mapGetters('common', [
                'others',
            ]),
            ...mapGetters('user', [
                'hasActiveMembership',
                'membershipExpiryDate',
            ]),
        },
        methods: {
            ...mapActions('common', [
                'Custom',
                'SetOthers',
            ]),
            getInitialData() {
                this.isLoading = true
                this.Custom({
                        url: 'dashboard/stats',
                        method: 'get'
                    })
                    .then(response => {
                        this.SetOthers({
                            stats: response
                        })
                        this.isLoading = false
                    })
                    .catch(error => {
                        this.isLoading = false
                        formUtil.handleErrors(error)
                    })
            },
        },
        mounted() {
            this.getInitialData()
        },
        beforeRouteEnter(to, from, next) {
            next(vm => {
                vm.$store.state.config.ui.appIsLoading = false
            })
        },
    };

</script>

<style lang="scss" scoped>
    @import '~@js/core/assets/scss/imports.scss';
    @import "~@js/core/assets/scss/partials/palettes";

    .header-body {
        margin-left: -$margin-common;
        margin-right: -$margin-common;
        margin-bottom: 90px;
        margin-top: 0px;
    }

    .dashboard-alerts {
        .alert {
            display: flex;
            flex-direction: column;
            justify-content: center;
            text-align: center;

            a, .alert-btn {
                margin-top: 1rem;
            }
        }
    }

    @include media-breakpoint-up(md) {
        .dashboard-alerts {
            .alert {
                flex-direction: row;
                justify-content: space-between;
                text-align: left;
                align-items: center;

                .alert-btn {
                    margin-top: 0rem;
                    margin-right: 2rem;
                }
            }
        }
    }

    @each $key,
    $value in $default-palette {
        [data-top-navbar-color="#{$key}"] {
            & .page-header {
                background-color: map-get($value, "background-color") !important;
                color: map-get($value, "foreground-color") !important;
            }
        }
    }

</style>
