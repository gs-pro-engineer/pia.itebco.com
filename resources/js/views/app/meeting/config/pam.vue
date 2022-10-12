<template>
    <base-container boxed with-loader :is-loading="isLoading" :loader-color="vars.loaderColor">
        <form @submit.prevent="submit">
            <h5 class="mb-4 pb-3 border-bottom">{{ $t('meeting.publicly_accessible_meetings') }}</h5>

            <div class="row">
                <div class="col-12 col-md-6 mb-3">
                    <switch-wrapper :label="$t('meeting.config.enable_pam')">
                        <base-switch v-model="formData.enablePam"></base-switch>
                    </switch-wrapper>
                </div>

                <template v-if="formData.enablePam">

                    <div class="col-12 col-md-6 mb-3">
                        <switch-wrapper :label="$t('meeting.config.pam_open_join_as_guest_page')">
                            <base-switch v-model="formData.pamOpenJoinAsGuestPage"></base-switch>
                        </switch-wrapper>
                    </div>

                    <div class="col-12 col-md-6 mb-3">
                        <switch-wrapper :label="$t('meeting.config.pam_enable_screen_sharing_for_guest')">
                            <base-switch v-model="formData.pamEnableScreenSharingForGuest"></base-switch>
                        </switch-wrapper>
                    </div>

                    <div class="col-12 col-md-6 mb-3">
                        <switch-wrapper :label="$t('meeting.config.pam_enable_link_sharing_for_guest')">
                            <base-switch v-model="formData.pamEnableLinkSharingForGuest"></base-switch>
                        </switch-wrapper>
                    </div>

                    <div class="col-12 col-md-6 mb-3">
                        <switch-wrapper :label="$t('meeting.config.pam_enable_whiteboard_for_guest')">
                            <base-switch v-model="formData.pamEnableWhiteboardForGuest"></base-switch>
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
                    enablePam: false,
                    pamOpenJoinAsGuestPage: false,
                    pamEnableScreenSharingForGuest: false,
                    pamEnableLinkSharingForGuest: false,
                    pamEnableWhiteboardForGuest: false,
                    type: 'meeting'
                },
            }
        },
        mounted() {
            this.getInitialData()
        },
    }

</script>
