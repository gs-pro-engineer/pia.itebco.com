<template>
    <div>
        <div class="row" v-if="!hasRole('admin')">
            <div class="col-12 col-md-4">
                <base-container boxed with-loader min-height="full" :is-loading="isLoading" :loader-color="vars.loaderColor" id="printable">

                    <div class="row">
                        <div class="col-12 mb-3">
                            <view-single :label="$t('user.props.name')" :value="profile.name" tag="h5" data-classes="font-weight-600" />
                        </div>

                        <div class="col-12 mb-3">
                            <view-single :label="$t('user.props.email')" :value="email" />
                        </div>

                        <div class="col-12 mb-3">
                            <view-single :label="$t('user.props.username')" :value="username" />
                        </div>

                    </div>
                </base-container>
            </div>

            <div class="col-12 col-md-8">
                <transition-page>
                    <router-view name="plan" />
                </transition-page>
            </div>
        </div>

        <div :class="{'mt-element': !hasRole('admin')}" v-if="entity && (!entity.newMembership || hasRole('admin'))">
            <transition-page>
                <router-view name="history" />
            </transition-page>
        </div>
    </div>
</template>

<script>
    import form from '@mixins/form'
    import { mapGetters, mapActions } from 'vuex'

    export default {
        extends: form,
        data() {
            return {
                initUrl: 'membership',
                hideFilterButton: true,
            }
        },
        computed: {
            ...mapGetters('common', [
                'entity',
            ]),
            ...mapGetters('user', [
                'profile',
                'username',
                'email',
            ]),
        },
        watch: {
            $route() {
                if(this.$route.query.hasOwnProperty('reload')) {
                    this.isLoading = true
                    this.ResetEntity()
                    this.getInitialData()
                }
            }
        },
        methods: {
            ...mapActions('common', [
                'ResetEntity',
                'SetEntity',
            ]),
            afterGetInitialData(res) {
                this.SetEntity(res)
            }
        },
        mounted() {
            this.ResetEntity()
            this.getInitialData()
        },
    }

</script>
