<template>
    <base-container boxed with-loader :is-loading="isLoading" :loader-color="vars.loaderColor" id="printable">
        <form @submit.prevent="submit">

            <div class="row">
                <div class="col-12 col-md-6">
                    <base-select class="mb-3" :options="preRequisite.segments" v-model="formData.segments" :label="formLabels.segments" :error.sync="formErrors.segments" multiple :close-on-select="false" :allow-empty="true" />

                    <base-select class="mb-3" :options="preRequisite.contacts" v-model="formData.contacts" :label="formLabels.contacts" :error.sync="formErrors.contacts" multiple :close-on-select="false" :allow-empty="true" />

                    <multiselect-wrapper :label="formLabels.emails" :value="formData.emails" :error.sync="formErrors.emails">
                        <b-form-tags input-id="tags-email" v-model="formData.emails" class="input-group-material mb-4" :placeholder="formLabels.emails" input-type="email" tag-variant="light" />
                    </multiselect-wrapper>
                </div>

                <div class="col-12 col-md-6">
                    <base-textarea rows="7" :label="formLabels.emailList" v-model="formData.emailList" :error.sync="formErrors.emailList" />
                </div>
            </div>

            <div v-if="formHasErrors" class="alert alert-danger" role="alert">
                <h6 class="m-0">{{ $t('general.form_has_errors') }}</h6>
            </div>

            <div class="form-footer mt-5">
                <div class="left-side">
                    <base-button type="button" design="light" @click="$router.back()" tabindex="-1"><i class="fas fa-chevron-left"></i> {{ $t('general.cancel') }}</base-button>
                </div>
                <div class="right-side">
                    <base-button type="button" design="light" @click="reset">{{ $t('general.reset') }}</base-button>
                    <base-button type="submit" design="primary">{{ $t('global.save', { attribute: $t('meeting.invitee.invitees') } ) }}</base-button>
                </div>
            </div>
        </form>
    </base-container>
</template>

<script>
    import form from '@mixins/form'
    import EventBus from '@js/event-bus'
    import { BFormTags } from 'bootstrap-vue'

    export default {
        extends: form,
        components: {
            BFormTags,
        },
        data() {
            return {
                formData: {
                    uuid: null,
                    segments: [],
                    contacts: [],
                    emails: [],
                    emailList: '',
                },
                preRequisite: {
                    segments: [],
                    contacts: [],
                },
                formLabels: {
                    segments: $t('contact.segment.segments'),
                    contacts: $t('contact.contacts'),
                    emails: $t('contact.emails'),
                    emailList: $t('contact.props.email_list'),
                },
                initUrl: 'meetings',
                initSubUrl: 'invitees',
            }
        },
        mounted() {
            this.getInitialData()
        },
        beforeRouteLeave(to, from, next) {
            EventBus.$emit('ROUTE_LEAVING', next)
        },
    }

</script>
