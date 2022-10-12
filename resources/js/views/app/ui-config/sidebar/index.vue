<template>
    <base-container boxed with-loader :is-loading="isLoading" :loader-color="vars.loaderColor">
        <form @submit.prevent="submit">
            <h4>{{ $t('config.ui.left_sidebar') }}</h4>
            <hr class="mt-3 mb-4">


            <div class="row">
                <div class="col-12 col-md-6 mb-5">
                    <h6 class="font-weight-700">{{ $t('config.ui.height') }}</h6>
                    <div class="d-flex align-items-center">
                        <base-radio value="normal" v-model="formData.leftSidebarHeight" inline has-image>
                            <img src="@images/config/sidebar_left_height_normal.jpg">
                            <div class="mt-2 text-center text-muted">{{ $t('config.ui.normal') }}</div>
                        </base-radio>
                        <base-radio value="full" v-model="formData.leftSidebarHeight" inline has-image>
                            <img src="@images/config/sidebar_left_height_full.jpg">
                            <div class="mt-2 text-center text-muted">{{ $t('config.ui.full') }}</div>
                        </base-radio>
                    </div>
                </div>

                <div class="col-12 col-md-6">
                    <div class="row">
                        <div class="col-12 mb-5">
                            <h6 class="font-weight-700">{{ $t('config.ui.backdrop') }}</h6>
                            <div class="d-flex align-items-center mt-3">
                                <base-radio :value="false" v-model="formData.leftSidebarBackdrop" inline>
                                    {{ $t('config.ui.disable') }}
                                </base-radio>
                                <base-radio :value="true" v-model="formData.leftSidebarBackdrop" inline>
                                    {{ $t('config.ui.enable') }}
                                </base-radio>
                            </div>
                        </div>

                        <div class="col-12 mb-5">
                            <h6 class="font-weight-700">{{ $t('config.ui.shadow') }}</h6>
                            <div class="d-flex align-items-center mt-3">
                                <base-radio :value="false" v-model="formData.leftSidebarShadow" inline>
                                    {{ $t('config.ui.disable') }}
                                </base-radio>
                                <base-radio :value="true" v-model="formData.leftSidebarShadow" inline>
                                    {{ $t('config.ui.enable') }}
                                </base-radio>
                            </div>
                        </div>
                    </div>

                    <div class="alert alert-outline-info text-center">{{ $t('config.ui.backdrop_helper') }}</div>
                </div>


                <div class="col-12 mb-5">
                    <h6 class="font-weight-700">{{ $t('config.ui.style') }}</h6>
                    <div class="d-flex align-items-center">
                        <base-radio value="push-content" v-model="formData.leftSidebarStyle" inline has-image>
                            <img src="@images/config/sidebar_left_style_push_content.jpg">
                            <div class="mt-2 text-center text-muted">{{ $t('config.ui.push_content') }}</div>
                        </base-radio>
                        <base-radio value="push" v-model="formData.leftSidebarStyle" inline has-image>
                            <img src="@images/config/sidebar_left_style_push.jpg">
                            <div class="mt-2 text-center text-muted">{{ $t('config.ui.push') }}</div>
                        </base-radio>
                    </div>
                    <div class="d-flex align-items-center">
                        <base-radio value="over" v-model="formData.leftSidebarStyle" inline has-image>
                            <img src="@images/config/sidebar_left_style_over.jpg">
                            <div class="mt-2 text-center text-muted">{{ $t('config.ui.over') }}</div>
                        </base-radio>
                        <base-radio value="folded" v-model="formData.leftSidebarStyle" inline has-image>
                            <img src="@images/config/sidebar_left_style_folded.jpg">
                            <div class="mt-2 text-center text-muted">{{ $t('config.ui.folded') }}</div>
                        </base-radio>
                    </div>
                    <div class="d-flex align-items-center">
                        <base-radio value="off-canvas" v-model="formData.leftSidebarStyle" inline has-image>
                            <img src="@images/config/sidebar_left_style_off_canvas.jpg">
                            <div class="mt-2 text-center text-muted">{{ $t('config.ui.off_canvas') }}</div>
                        </base-radio>
                    </div>
                </div>

                <div class="col-12 col-md-6 mb-5">
                    <h6 class="font-weight-700">{{ $t('config.ui.color') }}</h6>
                    <div class="color-list mt-3">
                        <base-radio v-for="color in colors" :key="color.key" :value="color.key" v-model="formData.leftSidebarColor" class="color-item mb-2" :type="color.key">
                            {{ color.title }}
                        </base-radio>
                        <base-radio value="wallpaper" v-model="formData.leftSidebarColor" @change="getWallpaper" class="color-item mb-2">
                            {{ $t('config.ui.wallpaper') }}
                        </base-radio>
                    </div>
                </div>

                <div class="col-12 col-md-6 mb-5">
                    <div class="row">

                        <div class="col-12 mb-5">
                            <h6 class="font-weight-700">{{ $t('config.ui.light_logo') }}</h6>
                            <div class="d-flex align-items-center mt-3">
                                <base-radio :value="false" v-model="formData.leftSidebarLogoLight" inline>
                                    {{ $t('config.ui.disable') }}
                                </base-radio>
                                <base-radio :value="true" v-model="formData.leftSidebarLogoLight" inline>
                                    {{ $t('config.ui.enable') }}
                                </base-radio>
                            </div>
                        </div>

                        <div class="col-12 mb-5">
                            <h6 class="font-weight-700">{{ $t('config.ui.backdrop_color') }}</h6>
                            <div class="d-flex align-items-center mt-3">
                                <base-radio value="transparent" v-model="formData.leftSidebarBackdropColor" inline>
                                    {{ $t('config.ui.transparent') }}
                                </base-radio>
                                <base-radio value="light" v-model="formData.leftSidebarBackdropColor" inline>
                                    {{ $t('config.ui.light') }}
                                </base-radio>
                                <base-radio value="dark" v-model="formData.leftSidebarBackdropColor" inline>
                                    {{ $t('config.ui.dark') }}
                                </base-radio>
                            </div>
                        </div>

                    </div>
                </div>

            </div>



            <h4>{{ $t('config.ui.right_sidebar') }}</h4>
            <hr class="mt-3 mb-4">


            <div class="row">
                <div class="col-12 col-md-6 mb-5">
                    <h6 class="font-weight-700">{{ $t('config.ui.height') }}</h6>
                    <div class="d-flex align-items-center">
                        <base-radio value="normal" v-model="formData.rightSidebarHeight" inline has-image>
                            <img src="@images/config/sidebar_right_height_normal.jpg">
                            <div class="mt-2 text-center text-muted">{{ $t('config.ui.normal') }}</div>
                        </base-radio>
                        <base-radio value="full" v-model="formData.rightSidebarHeight" inline has-image>
                            <img src="@images/config/sidebar_right_height_full.jpg">
                            <div class="mt-2 text-center text-muted">{{ $t('config.ui.full') }}</div>
                        </base-radio>
                    </div>
                </div>

                <div class="col-12 col-md-6">
                    <div class="row">
                        <div class="col-12 mb-5">
                            <h6 class="font-weight-700">{{ $t('config.ui.backdrop') }}</h6>
                            <div class="d-flex align-items-center mt-3">
                                <base-radio :value="false" v-model="formData.rightSidebarBackdrop" inline>
                                    {{ $t('config.ui.disable') }}
                                </base-radio>
                                <base-radio :value="true" v-model="formData.rightSidebarBackdrop" inline>
                                    {{ $t('config.ui.enable') }}
                                </base-radio>
                            </div>
                        </div>

                        <div class="col-12 mb-5">
                            <h6 class="font-weight-700">{{ $t('config.ui.shadow') }}</h6>
                            <div class="d-flex align-items-center mt-3">
                                <base-radio :value="false" v-model="formData.rightSidebarShadow" inline>
                                    {{ $t('config.ui.disable') }}
                                </base-radio>
                                <base-radio :value="true" v-model="formData.rightSidebarShadow" inline>
                                    {{ $t('config.ui.enable') }}
                                </base-radio>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-12 col-md-6 mb-5">
                    <h6 class="font-weight-700">{{ $t('config.ui.color') }}</h6>
                    <div class="color-list mt-3">
                        <base-radio v-for="color in colors" :key="color.key" :value="color.key" v-model="formData.rightSidebarColor" class="color-item mb-2" :type="color.key">
                            {{ color.title }}
                        </base-radio>
                    </div>
                </div>

                <div class="col-12 col-md-6 mb-5">
                    <div class="row">

                        <div class="col-12 mb-5">
                            <h6 class="font-weight-700">{{ $t('config.ui.backdrop_color') }}</h6>
                            <div class="d-flex align-items-center mt-3">
                                <base-radio value="transparent" v-model="formData.rightSidebarBackdropColor" inline>
                                    {{ $t('config.ui.transparent') }}
                                </base-radio>
                                <base-radio value="light" v-model="formData.rightSidebarBackdropColor" inline>
                                    {{ $t('config.ui.light') }}
                                </base-radio>
                                <base-radio value="dark" v-model="formData.rightSidebarBackdropColor" inline>
                                    {{ $t('config.ui.dark') }}
                                </base-radio>
                            </div>
                        </div>

                    </div>
                </div>

            </div>



            <h4>{{ $t('config.ui.modal_sidebar') }}</h4>
            <hr class="mt-3 mb-4">


            <div class="row">
                <div class="col-12 col-md-6 mb-5">
                    <h6 class="font-weight-700">{{ $t('config.ui.height') }}</h6>
                    <div class="d-flex align-items-center">
                        <base-radio value="normal" v-model="formData.modalSidebarHeight" inline has-image>
                            <img src="@images/config/sidebar_right_height_normal.jpg">
                            <div class="mt-2 text-center text-muted">{{ $t('config.ui.normal') }}</div>
                        </base-radio>
                        <base-radio value="full" v-model="formData.modalSidebarHeight" inline has-image>
                            <img src="@images/config/sidebar_right_height_full.jpg">
                            <div class="mt-2 text-center text-muted">{{ $t('config.ui.full') }}</div>
                        </base-radio>
                    </div>
                </div>

                <div class="col-12 col-md-6">
                    <div class="row">
                        <div class="col-12 mb-5">
                            <h6 class="font-weight-700">{{ $t('config.ui.backdrop') }}</h6>
                            <div class="d-flex align-items-center mt-3">
                                <base-radio :value="false" v-model="formData.modalSidebarBackdrop" inline>
                                    {{ $t('config.ui.disable') }}
                                </base-radio>
                                <base-radio :value="true" v-model="formData.modalSidebarBackdrop" inline>
                                    {{ $t('config.ui.enable') }}
                                </base-radio>
                            </div>
                        </div>

                        <div class="col-12 mb-5">
                            <h6 class="font-weight-700">{{ $t('config.ui.shadow') }}</h6>
                            <div class="d-flex align-items-center mt-3">
                                <base-radio :value="false" v-model="formData.modalSidebarShadow" inline>
                                    {{ $t('config.ui.disable') }}
                                </base-radio>
                                <base-radio :value="true" v-model="formData.modalSidebarShadow" inline>
                                    {{ $t('config.ui.enable') }}
                                </base-radio>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-12 col-md-6 mb-5">
                    <h6 class="font-weight-700">{{ $t('config.ui.color') }}</h6>
                    <div class="color-list mt-3">
                        <base-radio v-for="color in colors" :key="color.key" :value="color.key" v-model="formData.modalSidebarColor" class="color-item mb-2" :type="color.key">
                            {{ color.title }}
                        </base-radio>
                    </div>
                </div>

                <div class="col-12 col-md-6 mb-5">
                    <div class="row">

                        <div class="col-12 mb-5">
                            <h6 class="font-weight-700">{{ $t('config.ui.backdrop_color') }}</h6>
                            <div class="d-flex align-items-center mt-3">
                                <base-radio value="transparent" v-model="formData.modalSidebarBackdropColor" inline>
                                    {{ $t('config.ui.transparent') }}
                                </base-radio>
                                <base-radio value="light" v-model="formData.modalSidebarBackdropColor" inline>
                                    {{ $t('config.ui.light') }}
                                </base-radio>
                                <base-radio value="dark" v-model="formData.modalSidebarBackdropColor" inline>
                                    {{ $t('config.ui.dark') }}
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
        methods: {
            getWallpaper() {
                this.$store.dispatch('config/getWallpaper')
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
