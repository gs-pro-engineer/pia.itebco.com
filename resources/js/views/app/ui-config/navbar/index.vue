<template>
    <base-container boxed with-loader :is-loading="isLoading" :loader-color="vars.loaderColor">
        <form @submit.prevent="submit">
            <h4>{{ $t('config.ui.top_navbar') }}</h4>
            <hr class="mt-3 mb-4">

            <div class="row">
                <div class="col-12 col-md-6 mb-5">
                    <h6 class="font-weight-700">{{ $t('config.ui.color') }}</h6>
                    <div class="color-list mt-3">
                        <base-radio v-for="color in colors" :key="color.key" :value="color.key" v-model="formData.topNavbarColor" class="color-item mb-2" :type="color.key">
                            {{ color.title }}
                        </base-radio>
                    </div>
                </div>

                <div class="col-12 col-md-6 mb-5">
                    <div class="row">

                        <div class="col-12 mb-5">
                            <h6 class="font-weight-700">{{ $t('config.ui.fixed_on_top') }}</h6>
                            <div class="d-flex align-items-center mt-3">
                                <base-radio :value="false" v-model="formData.topNavbarFixed" inline>
                                    {{ $t('config.ui.disable') }}
                                </base-radio>
                                <base-radio :value="true" v-model="formData.topNavbarFixed" inline>
                                    {{ $t('config.ui.enable') }}
                                </base-radio>
                            </div>
                        </div>

                        <div class="col-12 mb-5">
                            <h6 class="font-weight-700">{{ $t('config.ui.light_logo') }}</h6>
                            <div class="d-flex align-items-center mt-3">
                                <base-radio :value="false" v-model="formData.topNavbarLogoLight" inline>
                                    {{ $t('config.ui.disable') }}
                                </base-radio>
                                <base-radio :value="true" v-model="formData.topNavbarLogoLight" inline>
                                    {{ $t('config.ui.enable') }}
                                </base-radio>
                            </div>
                        </div>

                        <div class="col-12 mb-5">
                            <h6 class="font-weight-700">{{ $t('config.ui.hide_navbar') }}</h6>
                            <div class="d-flex align-items-center mt-3">
                                <base-radio :value="false" v-model="formData.topNavbarHide" inline>
                                    {{ $t('config.ui.disable') }}
                                </base-radio>
                                <base-radio :value="true" v-model="formData.topNavbarHide" inline>
                                    {{ $t('config.ui.enable') }}
                                </base-radio>
                            </div>
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
