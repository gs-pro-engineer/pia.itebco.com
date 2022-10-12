<template>
    <base-container boxed with-loader :is-loading="isLoading" :loader-color="vars.loaderColor">
        <form @submit.prevent="submit">

            <div class="row">

                <div class="col-12 col-md-4 mb-4">
                    <base-input :label="$t('config.sms.max_per_chunk')" type="text" v-model="formData.maxPerChunk" :error.sync="formErrors.maxPerChunk" />
                </div>

                <div class="col-12 col-md-4 mb-4">
                    <base-input :label="$t('config.sms.custom_api_get_url')" type="text" v-model="formData.customApiGetUrl" :error.sync="formErrors.customApiGetUrl" />
                </div>

                <div class="col-12 col-md-4 mb-4">
                    <base-input :label="$t('config.sms.custom_api_number_prefix')" type="text" v-model="formData.customApiNumberPrefix" :error.sync="formErrors.customApiNumberPrefix" />
                </div>

                <div class="col-12 col-md-4 mb-4">
                    <base-input :label="$t('config.sms.custom_api_sender_id_param')" type="text" v-model="formData.customApiSenderIdParam" :error.sync="formErrors.customApiSenderIdParam" />
                </div>

                <div class="col-12 col-md-4 mb-4">
                    <base-input :label="$t('config.sms.custom_api_sender_id')" type="text" v-model="formData.customApiSenderId" :error.sync="formErrors.customApiSenderId" />
                </div>

                <div class="col-12 col-md-4 mb-4">
                    <base-input :label="$t('config.sms.custom_api_receiver_param')" type="text" v-model="formData.customApiReceiverParam" :error.sync="formErrors.customApiReceiverParam" />
                </div>

                <div class="col-12 col-md-4 mb-4">
                    <base-input :label="$t('config.sms.custom_api_message_param')" type="text" v-model="formData.customApiMessageParam" :error.sync="formErrors.customApiMessageParam" />
                </div>

                <div class="col-12 col-md-4 mb-4">
                    <div class="d-flex align-items-center">
                        <base-checkbox class="ml-0 mt-2" v-model="formData.customApiAcceptsMultipleReceiver">
                            {{ $t('config.sms.custom_api_accepts_multiple_receiver') }}
                        </base-checkbox>
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
    import form from '@mixins/config-form'
    import { CollapseTransition } from 'vue2-transitions'

    export default {
        extends: form,
        components: {
            CollapseTransition
        },
        data() {
            return {
                formData: {
                    maxPerChunk : '',
                    customApiGetUrl: '',
                    customApiNumberPrefix: '',
                    customApiSenderIdParam: '',
                    customApiSenderId: '',
                    customApiReceiverParam: '',
                    customApiMessageParam: '',
                    customApiAcceptsMultipleReceiver: false,
                    type: 'sms'
                },
            }
        },
    }

</script>
