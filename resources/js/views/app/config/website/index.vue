<template>
    <base-container boxed with-loader :is-loading="isLoading" :loader-color="vars.loaderColor">
        <form @submit.prevent="submit">

            <div class="row">
                <div class="col-12 col-md-4">
                    <switch-wrapper :label="$t('general.enabled')">
                        <base-switch v-model="formData.enabled"></base-switch>
                    </switch-wrapper>
                </div>

                <template v-if="formData.enabled">
                </template>
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

    export default {
        extends: form,
        data() {
            return {
                formData: {
                    enabled : true,
                    type: 'website'
                },
            }
        },
    }

</script>
