<template>
    <base-container boxed with-loader :is-loading="isLoading" :loader-color="vars.loaderColor">

        <h4 class="mb-4 pb-2 border-bottom">{{ $t('config.assets.logo') }}</h4>

        <div class="row">
            <div class="col-12 col-md-6 mb-4">
                <h6 class="pb-2 mb-0 text-center text-muted font-weight-bold">{{ $t('config.assets.logo') }}</h6>
                <div class="d-flex justify-content-center mb-4">
                    <image-uploader url="/config/assets?type=logo" name-label="config.assets.logo" :existing-image="logo" placeholder="/images/placeholder-logo.png" @uploaded="refreshConfig" remove-from-server @removed="refreshConfig" />
                </div>
            </div>

            <div class="col-12 col-md-6 mb-4">
                <h6 class="pb-2 mb-0 text-center text-muted font-weight-bold">{{ $t('config.assets.logo_light') }}</h6>
                <div class="d-flex justify-content-center mb-4">
                    <image-uploader url="/config/assets?type=logo_light" name-label="config.assets.logo_light" :existing-image="logoLight" placeholder="/images/placeholder-logo.png" dark-bg @uploaded="refreshConfig" remove-from-server @removed="refreshConfig" />
                </div>
            </div>
        </div>

        <h4 class="my-4 pb-2 border-bottom">{{ $t('config.assets.icons') }}</h4>

        <div class="row">
            <div class="col-12 col-md-4 mb-4">
                <h6 class="pb-2 mb-0 text-center text-muted font-weight-bold">{{ $t('config.assets.icon') }}</h6>
                <div class="d-flex justify-content-center mb-4">
                    <image-uploader url="/config/assets?type=icon" name-label="config.assets.icon" :existing-image="icon" placeholder="/images/placeholder-icon.png" @uploaded="refreshConfig" remove-from-server @removed="refreshConfig" />
                </div>
            </div>

            <div class="col-12 col-md-4 mb-4">
                <h6 class="pb-2 mb-0 text-center text-muted font-weight-bold">{{ $t('config.assets.icon_maskable') }}</h6>
                <p class="pb-2 mb-0 text-center text-muted">Ref: <a href="https://maskable.app/editor" target="_blank" rel="nofollow">Maskable Icon Editor</a></p>
                <div class="d-flex justify-content-center mb-4">
                    <image-uploader url="/config/assets?type=icon_maskable" name-label="config.assets.icon_maskable" :existing-image="iconMaskable" placeholder="/images/placeholder-icon.png" @uploaded="refreshConfig" remove-from-server @removed="refreshConfig" />
                </div>
            </div>

            <div class="col-12 col-md-4 mb-4">
                <h6 class="pb-2 mb-0 text-center text-muted font-weight-bold">{{ $t('config.assets.icon') }} 512x512</h6>
                <div class="d-flex justify-content-center mb-4">
                    <image-uploader url="/config/assets?type=icon_512" name-label="config.assets.icon_512" :existing-image="icon512" placeholder="/images/placeholder-icon.png" @uploaded="refreshConfig" remove-from-server @removed="refreshConfig" />
                </div>
            </div>
            
            <div class="col-12 col-md-4 mb-4">
                <h6 class="pb-2 mb-0 text-center text-muted font-weight-bold">{{ $t('config.assets.icon') }} 192x192</h6>
                <div class="d-flex justify-content-center mb-4">
                    <image-uploader url="/config/assets?type=icon_192" name-label="config.assets.icon_192" :existing-image="icon192" placeholder="/images/placeholder-icon.png" @uploaded="refreshConfig" remove-from-server @removed="refreshConfig" />
                </div>
            </div>
            
            <div class="col-12 col-md-4 mb-4">
                <h6 class="pb-2 mb-0 text-center text-muted font-weight-bold">{{ $t('config.assets.icon') }} 180x180</h6>
                <div class="d-flex justify-content-center mb-4">
                    <image-uploader url="/config/assets?type=icon_180" name-label="config.assets.icon_180" :existing-image="icon180" placeholder="/images/placeholder-icon.png" @uploaded="refreshConfig" remove-from-server @removed="refreshConfig" />
                </div>
            </div>
            
            <div class="col-12 col-md-4 mb-4">
                <h6 class="pb-2 mb-0 text-center text-muted font-weight-bold">{{ $t('config.assets.icon') }} 32x32</h6>
                <div class="d-flex justify-content-center mb-4">
                    <image-uploader url="/config/assets?type=icon_32" name-label="config.assets.icon_32" :existing-image="icon32" placeholder="/images/placeholder-icon.png" @uploaded="refreshConfig" remove-from-server @removed="refreshConfig" />
                </div>
            </div>
            
            <div class="col-12 col-md-4 mb-4">
                <h6 class="pb-2 mb-0 text-center text-muted font-weight-bold">{{ $t('config.assets.icon') }} 16x16</h6>
                <div class="d-flex justify-content-center mb-4">
                    <image-uploader url="/config/assets?type=icon_16" name-label="config.assets.icon_16" :existing-image="icon16" placeholder="/images/placeholder-icon.png" @uploaded="refreshConfig" remove-from-server @removed="refreshConfig" />
                </div>
            </div>

            <div class="col-12 col-md-4 mb-4">
                <h6 class="pb-2 mb-0 text-center text-muted font-weight-bold">{{ $t('config.assets.favicon') }}</h6>
                <div class="d-flex justify-content-center mb-4">
                    <image-uploader url="/config/assets?type=favicon" name-label="config.assets.favicon" :existing-image="favicon" placeholder="/images/placeholder-icon.png" @uploaded="refreshConfig" remove-from-server @removed="refreshConfig" />
                </div>
            </div>
        </div>
    </base-container>
</template>

<script>
    import ImageUploader from '@components/ImageUploader'
    import { mapGetters, mapActions } from 'vuex'

    export default {
        components: {
            ImageUploader,
        },
        data() {
            return {
                logo: '',
                logoLight: '',
                icon: '',
                iconMaskable: '',
                icon512: '',
                icon192: '',
                icon180: '',
                icon32: '',
                icon16: '',
                favicon: '',
                isLoading: false
            }
        },
        computed: {
            ...mapGetters('config', [
                'configs',
                'vars',
            ]),
        },
        methods: {
            ...mapActions('config', [
                'GetConfig',
            ]),
            handleUploadError(errorMessage) {
                this.$toasted.error(errorMessage, this.$toastConfig.error)
            },
            getInitialData() {
                const imageObj = this.configs.assets

                if(imageObj) {
                    this.logo         = imageObj.logo || ''
                    this.logoLight    = imageObj.logoLight || ''
                    this.icon         = imageObj.icon || ''
                    this.iconMaskable = imageObj.iconMaskable || ''
                    this.icon512      = imageObj.icon512 || ''
                    this.icon192      = imageObj.icon192 || ''
                    this.icon180      = imageObj.icon180 || ''
                    this.icon32       = imageObj.icon32 || ''
                    this.icon16       = imageObj.icon16 || ''
                    this.favicon      = imageObj.favicon || ''
                }
            },
            refreshConfig() {
                this.isLoading = true
                this.GetConfig()
                    .then((response) => {
                        const imageObj = this.configs.assets

                        if(imageObj) {
                            this.logo         = imageObj.logo || ''
                            this.logoLight    = imageObj.logoLight || ''
                            this.icon         = imageObj.icon || ''
                            this.iconMaskable = imageObj.iconMaskable || ''
                            this.icon512      = imageObj.icon512 || ''
                            this.icon192      = imageObj.icon192 || ''
                            this.icon180      = imageObj.icon180 || ''
                            this.icon32       = imageObj.icon32 || ''
                            this.icon16       = imageObj.icon16 || ''
                            this.favicon      = imageObj.favicon || ''
                        }
                        this.isLoading = false
                        this.$toasted.success(response.message, this.$toastConfig.success)
                    })
                    .catch(error => {
                        this.isLoading = false
                        this.formErrors = formUtil.handleErrors(error)
                    })
            },
        },
        mounted() {
            this.getInitialData()
        },
    }

</script>
