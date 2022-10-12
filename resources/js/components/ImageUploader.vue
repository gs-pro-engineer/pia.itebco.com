<template>
    <div :class="['sm-uploader image-uploader', size]">
        <animated-loader :is-loading="isLoading || (!showProgress && showWhileUploading)" :loader-color="vars.loaderColor" />
        <div class="progress-ring-wrapper" v-if="showProgress && showWhileUploading">
            <progress-ring :value="files[0].progress" :stroke-color="vars.loaderColor" />
        </div>

        <div :class="['image-display-wrapper', {'dark-bg': darkBg}]" v-if="imageSource">
            <div :class="['image-display', {'image-profile' : profile}]">
                <img v-if="imageToUpload" :src="imageToUpload" class="img-responsive" />
                <img v-else :src="imageSource" class="img-responsive" />
            </div>

            <div class="submit-actions" v-if="imageToUpload">
                <base-button type="button" design="light" size="sm" @click="cancelUpload"><i class="fas fa-times"></i> {{ $t('general.cancel') }}</base-button>

                <base-button v-if="showUploadButton" type="button" design="success" size="sm" @click="uploadImage"><i class="fas fa-arrow-circle-right"></i> {{ $t('general.upload') }}</base-button>
                <base-button v-else type="button" :design="buttonColor" size="sm"><i class="far fa-image"></i> {{ $t('global.change', { attribute: $t(nameLabel)}) }}</base-button>
            </div>
        </div>

        <div class="image-uploader-form" v-if="!imageToUpload">

            <div class="existing-image-actions" v-if="existingImage && removeButton">
                <base-button type="button" design="danger" size="sm" @click="removeImage"><i class="fas fa-trash"></i> {{ $t('general.remove') }}</base-button>
            </div>

            <div class="file-selector">
                <label :class="`btn btn-${buttonColor} btn-sm`">
                    <input name="file" type="file" ref="file" id="file" @change="generateImagePreview" accept="image/*" class="selector-input">
                    <span class="button-icon"><i class="fas fa-upload"></i></span> <span class="button-label">{{ $t(computedActionLabel, { attribute: $t(nameLabel)}) }}</span>
                </label>
            </div>
        </div>
    </div>
</template>

<script>
    import EventBus from '@js/event-bus'
    import * as UploaderAPI from '@api/uploader'
    import { mapGetters, mapActions } from 'vuex'

    export default {
        name: "image-uploader",
        props: {
            existingImage: {
                type: String,
                default: '',
            },
            existingMedia: {
                type: Object,
                default: null,
            },
            placeholder: {
                type: String,
                default: 'https://via.placeholder.com/200/e1e2e4/b1b2b4/?text=Upload%20Image',
            },
            url: {
                type: String,
                required: true,
            },
            buttonColor: {
                type: String,
                default: 'primary',
            },
            actionLabel: {
                type: String,
                default: 'global.choose',
            },
            nameLabel: {
                type: String,
                default: 'upload.image',
            },
            darkBg: {
                type: Boolean,
                default: false,
            },
            profile: {
                type: Boolean,
                default: false,
            },
            showUploadButton: {
                type: Boolean,
                default: true,
            },
            removeButton: {
                type: Boolean,
                default: true,
            },
            removeFromServer: {
                type: Boolean,
                default: true,
            },
            showProgress: {
                type: Boolean,
                default: true,
            },
            size: {
                type: String,
                default: '',
            },
            fieldName: {
                type: String,
                default: 'file',
            },
        },
        data() {
            return {
                isLoading: false,
                imageRemoved: false,
                uploadedImage: '',
                imageToUpload: '',
                actionLabelUpdated: '',
                files: [],
            }
        },
        computed: {
            ...mapGetters('config', [
                'configs',
                'vars',
            ]),
            imageSource() {
                const image = this.imageToUpload ? this.imageToUpload : (this.uploadedImage ? this.uploadedImage : (this.existingImage ? this.existingImage : ''))
                if(image) {
                    return image
                }
                return this.placeholder
            },
            computedActionLabel() {
                return (this.existingImage || this.uploadedImage) ? 'global.change' : this.actionLabel
            },
            showWhileUploading() {
                return this.imageToUpload && this.files[0] &&  this.files[0].status === 'uploading' ? true : false
            }
        },
        methods: {
            generateImagePreview(e) {
                this.isLoading = true
                const vm = this

                setTimeout(() => {
                    const uploadedFiles = this.$refs.file.files
                    const allowedExtensions = /(\.jpg|\.jpeg|\.png|\.gif|\.bmp)$/i

                    for (let i = 0; i < uploadedFiles.length; i++) {

                        if (!allowedExtensions.test(uploadedFiles[i].name)) {

                            this.isLoading = false
                            this.$toasted.error(this.$t('global.file_not_supported', { attribute: uploadedFiles[i].name.split('.').pop() }), this.$toastConfig.error)

                        } else if (this.configs.system && this.configs.system.postMaxSize && uploadedFiles[i].size > this.configs.system.postMaxSize) {

                            this.isLoading = false
                            this.$toasted.error(this.$t('global.file_too_large', { attribute: uploadedFiles[i].name }), this.$toastConfig.error)

                        } else {
                            this.files.push({
                                uuid: uuid(),
                                file: uploadedFiles[i],
                                status: 'waiting',
                                progress: 0,
                            })
                        }
                    }

                    if (!this.files.length) {
                        this.isLoading = false
                    } else {
                        this.createImage(this.files[0].file)
                    }
                }, 1000)
            },
            createImage(file) {
                let reader = new FileReader()
                reader.onload = (e) => {
                    this.imageToUpload = e.target.result
                }
                reader.onerror = (e) => {
                    console.error("File could not be read! Code " + e.target.error.code);
                }
                reader.readAsDataURL(file)
                this.isLoading = false
            },
            cancelUpload() {
                this.files = []
                this.imageToUpload = ''
            },
            uploadImage() {
                const uploadObj = this.files[0]
                uploadObj.status = 'waiting'
                const onUploadProgress = (progressEvent) => {
                    uploadObj.progress = Math.round((progressEvent.loaded * 100) / progressEvent.total)
                }

                let formData = new FormData()

                if (this.files[0].file && this.files[0].file.size > this.configs.system.postMaxSize) {
                    this.$toasted.error(this.t('upload.file_too_large'), this.$toastConfig.error)
                    return
                }

                formData.append(this.fieldName, this.files[0].file)
                uploadObj.status = 'uploading'

                UploaderAPI.uploadImage({
                        url: this.url,
                        data: formData
                    }, onUploadProgress)
                    .then(response => {
                        uploadObj.status = 'uploaded'
                        delete uploadObj.cancel
                        this.$toasted.success(response.message, this.$toastConfig.success)
                        this.imageToUpload = ''
                        this.files = []
                        this.uploadedImage = response.image
                        this.$emit('uploaded', response.image)
                    })
                    .catch(error => {
                        uploadObj.status = 'error'
                        this.$emit('error', error)
                        formUtil.handleErrors(error)
                    })
            },
            removeImage() {
                if(this.removeFromServer) {
                    formUtil.confirmAction()
                        .then((result) => {
                            if (result.value) {
                                this.isLoading = true
                                UploaderAPI.removeImage({
                                        url: this.url,
                                    })
                                    .then(response => {
                                        this.$toasted.success(response.message, this.$toastConfig.success)
                                        this.imageRemoved = true
                                        this.uploadedImage = ''
                                        this.$emit('removed')
                                        this.isLoading = false
                                    })
                                    .catch(error => {
                                        this.isLoading = false
                                        this.formErrors = formUtil.handleErrors(error)
                                    })
                            }
                        })
                } else {
                    this.imageRemoved = true
                    this.uploadedImage = ''
                    this.$emit('removed')
                }
            },
            startUpload() {
                if(this.files.length) {
                    this.uploadImage()
                } else {
                    this.$emit('noNeed')
                }
            },
        },
        mounted() {
            EventBus.$off('START_UPLOAD', this.startUpload)
            EventBus.$on('START_UPLOAD', this.startUpload)
            EventBus.$off('CANCEL_UPLOAD', this.cancelUpload)
            EventBus.$on('CANCEL_UPLOAD', this.cancelUpload)
            this.uploadButtonText = this.label
        },
        destroyed() {
            EventBus.$off('START_UPLOAD', this.startUpload)
            EventBus.$off('CANCEL_UPLOAD', this.cancelUpload)
        },
    }

</script>
<style lang="scss">
    .progress-ring-wrapper {
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        width: 100%;
        height: 100%;
        background: rgba(255,255,255,0.7);
        display: flex;
        justify-content: center;
        align-items: center;
        padding-bottom: 2.5rem;
        z-index: 1;
    }
</style>
