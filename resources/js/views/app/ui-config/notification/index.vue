<template>
    <base-container boxed with-loader :is-loading="isLoading" :loader-color="vars.loaderColor">
        <form @submit.prevent="submit">
            <h4>{{ $t('config.ui.notification') }}</h4>
            <hr class="mt-3 mb-4">

            <div class="row">
                <div class="col-12 mb-5">
                    <h6 class="font-weight-700">{{ $t('config.ui.position') }}</h6>
                    <div class="d-flex align-items-center">
                        <base-radio value="top-left" v-model="formData.notificationPosition" inline has-image @change="showNotification('top-left')">
                            <img src="@images/config/notification_position_top_left.jpg">
                            <div class="mt-2 text-center text-muted">{{ $t('config.ui.top_left') }}</div>
                        </base-radio>
                        <base-radio value="top-center" v-model="formData.notificationPosition" inline has-image @change="showNotification('top-center')">
                            <img src="@images/config/notification_position_top_center.jpg">
                            <div class="mt-2 text-center text-muted">{{ $t('config.ui.top_center') }}</div>
                        </base-radio>
                        <base-radio value="top-right" v-model="formData.notificationPosition" inline has-image @change="showNotification('top-right')">
                            <img src="@images/config/notification_position_top_right.jpg">
                            <div class="mt-2 text-center text-muted">{{ $t('config.ui.top_right') }}</div>
                        </base-radio>
                    </div>
                    <div class="d-flex align-items-center">
                        <base-radio value="bottom-left" v-model="formData.notificationPosition" inline has-image @change="showNotification('bottom-left')">
                            <img src="@images/config/notification_position_bottom_left.jpg">
                            <div class="mt-2 text-center text-muted">{{ $t('config.ui.bottom_left') }}</div>
                        </base-radio>
                        <base-radio value="bottom-center" v-model="formData.notificationPosition" inline has-image @change="showNotification('bottom-center')">
                            <img src="@images/config/notification_position_bottom_center.jpg">
                            <div class="mt-2 text-center text-muted">{{ $t('config.ui.bottom_center') }}</div>
                        </base-radio>
                        <base-radio value="bottom-right" v-model="formData.notificationPosition" inline has-image @change="showNotification('bottom-right')">
                            <img src="@images/config/notification_position_bottom_right.jpg">
                            <div class="mt-2 text-center text-muted">{{ $t('config.ui.bottom_right') }}</div>
                        </base-radio>
                    </div>
                </div>

                <div class="col-12 col-md-6 mb-5">
                    <div class="row">

                        <div class="col-12 mb-5">
                            <h6 class="font-weight-700">{{ $t('config.ui.duration') }}</h6>

                            <base-input type="number" v-model="formData.notificationDuration" :error.sync="formErrors.notificationDuration" min="0" step="500" select-on-focus @wheel.stop.prevent :addon-right-text="$t('config.ui.seconds')" />
                        </div>

                    </div>
                </div>
            </div>


            <div class="text-right mt-5">
                <base-button type="button" design="light" @click="reset">{{ $t('general.reset') }}</base-button>
                <base-button type="submit" design="primary">{{ $t('general.save') }}</base-button>
            </div>

        </form>
    </base-container>
</template>

<script>
    import form from '@mixins/ui-config-form'

    export default {
        extends: form,
        methods: {
            showNotification(pos) {
                this.$toasted.clear()
                this.$toasted.show(this.$t('config.ui.notification_demo'), { ...this.$toastConfig.normal, position: pos })
            }
        },
    }

</script>
<style lang="scss" scoped>
    .color-item {
        width: 100%;
    }

    .color-list {
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex-wrap: wrap;

        > .color-item {
            flex: 0 50%;
        }
    }

</style>
