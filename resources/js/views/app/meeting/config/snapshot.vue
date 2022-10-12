<template>
    <base-container boxed with-loader :is-loading="isLoading" :loader-color="vars.loaderColor">
        <form @submit.prevent="submit">
            <h5 class="mb-4 pb-3 border-bottom">{{ $t('meeting.config.snapshot') }}</h5>

            <div class="row">
                <div class="col-12 col-md-6 mb-3">
                    <switch-wrapper :label="$t('meeting.config.enable_snapshot')">
                        <base-switch v-model="formData.enableSnapshot"></base-switch>
                    </switch-wrapper>
                </div>

                <template v-if="formData.enableSnapshot">

                    <div class="col-12 col-md-6 mb-3">
                        <switch-wrapper :label="$t('meeting.config.anyone_can_take_snapshot')">
                            <base-switch v-model="formData.anyoneCanTakeSnapshot"></base-switch>
                        </switch-wrapper>
                    </div>

                    <div class="col-12 col-md-6 mb-3">
                        <switch-wrapper :label="$t('meeting.config.enable_snapshot_alert')">
                            <base-switch v-model="formData.enableSnapshotAlert"></base-switch>
                        </switch-wrapper>
                    </div>

                    <div class="col-12 col-md-6 mb-3" v-if="formData.enableSnapshotAlert">
                        <switch-wrapper :label="$t('meeting.config.snapshot_alert_to_user_only')">
                            <base-switch v-model="formData.snapshotAlertToUserOnly"></base-switch>
                        </switch-wrapper>
                    </div>

                    <div class="col-12 col-md-6 mb-3" v-if="formData.enableSnapshotAlert">
                        <switch-wrapper :label="$t('meeting.config.snapshot_alert_to_moderators')">
                            <base-switch v-model="formData.snapshotAlertToModerators"></base-switch>
                        </switch-wrapper>
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
                    enableSnapshot: false,
                    anyoneCanTakeSnapshot: false,
                    enableSnapshotAlert: false,
                    snapshotAlertToUserOnly: false,
                    snapshotAlertToModerators: false,
                    type: 'meeting'
                },
            }
        },
        mounted() {
            this.getInitialData()
        },
    }

</script>
