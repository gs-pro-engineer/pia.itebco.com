<template>
    <div class="cb-inner-window settings-container">
        <div class="settings-wrapper" v-if="activeContainer === 'settings'">
            <div class="settings">
                <vue-scroll ref="vue-scroll-settings" id="vue-scroll-settings">
                    <div class="settings-list">

                        <switch-wrapper :label="$t('config.chat.enable_auto_open')" class="text-light">
                            <base-switch v-model="formData.chat.enableAutoOpen" design="success"></base-switch>
                        </switch-wrapper>

                        <switch-wrapper :label="$t('config.chat.enter_to_submit')" class="text-light">
                            <base-switch v-model="formData.chat.enterToSubmit" design="success"></base-switch>
                        </switch-wrapper>


                        <switch-wrapper :label="$t('config.chat.mute_sound_notification')" class="text-light">
                            <base-switch v-model="formData.chat.muteSoundNotification" design="success"></base-switch>
                        </switch-wrapper>
                    </div>
                </vue-scroll>
            </div>

            <div class="settings-footer">
                <base-button type="button" design="primary" size="block" @click="submit">{{ $t('general.save') }}</base-button>
            </div>
        </div>
    </div>
</template>

<script>
    import form from '@mixins/config-form'
    import * as MomentTz from '@core/filters/momentz'

    export default {
        extends: form,
        props: {
            activeContainer: {
                type: String,
                default: 'home',
                required: true
            },
        },
        watch: {
            activeContainer(newVal, oldVal) {
                if(newVal === 'settings' && newVal !== oldVal) {
                    this.formData = Object.assign({}, this.formData, _.cloneDeep(this.initialFormData))
                }
            },
        },
        data() {
            return {
                now: MomentTz.now({moment: true}),
                formData: {
                    chat: {
                        enableAutoOpen: false,
                        enterToSubmit: false,
                        muteSoundNotification: false,
                    },
                    override: true
                },
                useUserPreference: true,
            }
        },
        methods: {
            afterSubmitSuccess() {
                this.$emit('goHome')
            }
        }
    }
</script>

<style lang="scss">
    .settings-wrapper {
        display: flex;
        flex-direction: column;
        height: 100%;
        max-height: 100%;
        overflow: hidden;

        .settings {
            display: flex;
            flex-grow: 1;
            justify-content: stretch;
            align-items: stretch;
            height: 100%;
            max-height: 100%;
            overflow: hidden;
            position: relative;

            padding: 0.85rem;
            display: flex;
            flex-direction: row;

            .switch-wrapper > .input-group-material-label {
                padding-left: 0;
            }
        }

        .settings-footer {
            box-shadow: 0 -2px 6px 0 rgba(0, 0, 0, 0.4);
            z-index: 1;
        }
    }
</style>
