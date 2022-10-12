<template>
    <fieldset class="fieldset primary server-row">
        <legend>{{ $t('config.ice_server.server') }}</legend>

        <close-button @click="$emit('remove')" :title="$t('general.remove')" :style="{top: '25px', right: '5px' }" />

        <div class="row">
            <div class="col-12 mb-4">
                <base-input auto-focus :label="$t('config.ice_server.urls')" type="text" v-model="formData.urls" :error.sync="formErrorsComputed.urls" required />
            </div>
                    
            <div class="col-12 col-md-6 mb-3">
                <switch-wrapper :label="$t('config.ice_server.requires_credential')">
                    <base-switch v-model="formData.requiresCredential"></base-switch>
                </switch-wrapper>
            </div>
                    
            <div class="col-12 col-md-6 mb-3" v-if="formData.requiresCredential">
                <switch-wrapper :label="$t('config.ice_server.expirable_credential')">
                    <base-switch v-model="formData.expirableCredentials"></base-switch>
                </switch-wrapper>
            </div>

            <template v-if="formData.requiresCredential">
                <template v-if="formData.expirableCredentials">
                    <div class="col-12 mb-4">
                        <base-input :label="$t('config.ice_server.secret')" type="text" v-model="formData.secret" :error.sync="formErrorsComputed.secret" />
                    </div>

                    <div class="col-12 col-md-6 mb-4">
                        <base-input :label="$t('config.ice_server.expires_in')" type="number" v-model="formData.expiresIn" :error.sync="formErrorsComputed.expiresIn" />
                    </div>

                    <div class="col-12 col-md-6 mb-4">
                        <base-input :label="$t('config.ice_server.time_difference')" type="number" v-model="formData.timeDifference" :error.sync="formErrorsComputed.timeDifference" />
                    </div>
                </template>

                <template v-else>
                    <div class="col-12 col-md-6 mb-4">
                        <base-input :label="$t('config.ice_server.username')" type="text" v-model="formData.username" :error.sync="formErrorsComputed.username" />
                    </div>

                    <div class="col-12 col-md-6 mb-4">
                        <base-input :label="$t('config.ice_server.credential')" type="text" v-model="formData.credential" :error.sync="formErrorsComputed.credential" />
                    </div>
                </template>
            </template>
        </div>
    </fieldset>
</template>

<script>
    import { mapGetters } from 'vuex'
    import { formatKeysToCamelCase } from '@js/core/utils/formatter'
    export default {
        props: {
            index: {
                type: Number,
                required: true
            },
            formData: {
                type: Object,
                required: true
            },
            formErrors: {
                type: [String, Object],
                default: null,
            },
        },
        computed: {
            ...mapGetters('config', [
                'vars',
            ]),
            formErrorsComputed() {
                return formatKeysToCamelCase(JSON.parse(this.formErrors) || {})
            },
        },
        watch: {
            formData: {
                deep: true,
                handler(v){
                    this.$emit('updated')
                }
            },
        },
        methods: {
        },
        mounted() {
        },
    }

</script>