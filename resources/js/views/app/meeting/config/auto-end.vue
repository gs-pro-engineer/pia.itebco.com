<template>
    <base-container boxed with-loader :is-loading="isLoading" :loader-color="vars.loaderColor">
        <form @submit.prevent="submit">
            <h5 class="mb-4 pb-3 border-bottom">{{ $t('meeting.config.auto_end') }}</h5>

            <div class="row">
                <div class="col-12 col-md-6 mb-3">
                    <switch-wrapper :label="$t('meeting.config.auto_end_meeting')">
                        <base-switch v-model="formData.autoEndMeeting"></base-switch>
                    </switch-wrapper>
                </div>

                <template v-if="formData.autoEndMeeting">
                    <div class="col-12 col-md-6 mb-3">
                        <switch-wrapper :label="$t('meeting.config.alert_before_auto_end')">
                            <base-switch v-model="formData.alertBeforeAutoEnd"></base-switch>
                        </switch-wrapper>
                    </div>

                    <div class="col-12 col-md-6 mb-3">
                        <switch-wrapper :label="$t('meeting.config.can_snooze_auto_end')">
                            <base-switch v-model="formData.canSnoozeAutoEnd"></base-switch>
                        </switch-wrapper>
                    </div>

                    <div class="col-12 col-md-6 mb-3">
                        <switch-wrapper :label="$t('meeting.config.can_cancel_auto_end')">
                            <base-switch v-model="formData.canCancelAutoEnd"></base-switch>
                        </switch-wrapper>
                    </div>

                    <div class="col-12"></div>

                    <div class="col-12 col-md-6 mb-3" v-if="formData.alertBeforeAutoEnd">
                        <base-input :label="$t('meeting.config.alert_before_auto_end_time')" type="number" v-model="formData.alertBeforeAutoEndTime" :error.sync="formErrors.alertBeforeAutoEndTime" select-on-focus @wheel.stop.prevent :min="1" :step="1" />
                    </div>

                    <div class="col-12 col-md-6 mb-3">
                        <base-input :label="$t('meeting.config.end_time_snooze_period')" type="number" v-model="formData.endTimeSnoozePeriod" :error.sync="formErrors.endTimeSnoozePeriod" select-on-focus @wheel.stop.prevent :min="1" :max="120" :step="1" />
                    </div>
                </template>
            </div>

            <div class="form-footer mt-5">
                <div class="left-side">
                    <base-button type="button" design="light" @click="$router.back()" tabindex="-1"><i class="fas fa-chevron-left"></i> {{ $t('general.cancel') }}</base-button>
                </div>
                <div class="right-side">
                    <base-button type="button" design="light" @click="reset">{{ $t('general.reset') }}</base-button>
                    <base-button type="submit" design="primary"><i class="fas fa-save"></i> {{ $t('general.save') }}</base-button>
                </div>
            </div>
        </form>
    </base-container>
</template>

<script>
    import form from '@mixins/config-form'

    export default {
        extends: form,
        data() {
            return {
                formData: {
                    autoEndMeeting: false,
                    alertBeforeAutoEnd: false,
                    canSnoozeAutoEnd: false,
                    canCancelAutoEnd: false,
                    alertBeforeAutoEndTime: 1,
                    endTimeSnoozePeriod: 5,
                    type: 'meeting'
                },
            }
        },
        mounted() {
            this.getInitialData()
        },
    }

</script>
