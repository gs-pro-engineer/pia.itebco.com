<template>
    <div class="sm-uploader file-uploader">

        <div class="file-uploader-form">
            <div :class="['file-selector d-flex', buttonWrapperClasses]">
                <h5 v-if="heading" :class="['title-desc', headingClasses]">
                    {{ heading }}
                </h5>

                <label :class="['btn', `btn-${buttonDesign}`, buttonClasses]">
                    <input name="filesInput" type="file" ref="filesInput" id="filesInput" @change="generateFilesList" class="selector-input" :multiple="multiple">
                    <span class="button-icon"><i :class="buttonIcon"></i></span> <span class="button-label" v-if="!hideButtonLabel">{{ $t(computedActionLabel, { attribute: $t(namesLabel)}) }}</span> <span class="button-label bracketed" v-if="showSelectedFilesCount && files.length">{{ files.length }}</span>
                </label>

                <button v-if="hideFileList && !hideResetButton && files.length" type="button" :class="['btn', `btn-${buttonDesign}`, buttonClasses]" @click="reset"><span class="button-icon"><i class="fas fa-times"></i></span></button>
            </div>
        </div>

        <div :class="['files-list-wrapper', {'d-none': hideFileList}]" v-if="existingFiles.length || uploadedFiles.length || files.length">
            <ul class="files-list">


                <li class="file-details-row" v-for="(fileObj, index) in existingFiles" :key="fileObj.uuid">
                    <div class="file-icon">
                        <span><i :class="['far', getFileIcon(fileObj.mime)]"></i></span>
                    </div>
                    <div class="file-details">
                        <h6>{{ fileObj.filename }}</h6>
                        <p class="text-danger" v-if="fileObj.error">
                            {{ fileObj.error }}
                        </p>
                        <p v-else>
                            <span><span class="font-weight-700">{{ $t('upload.type') }}</span>: {{ mimeTypes[fileObj.mime] || fileObj.mime || 'Unknown' }}</span>
                            <span class="ml-1"><span class="font-weight-700">{{ $t('upload.size') }}</span>: {{ (fileObj.size / 1024) | decimal(0) }} KB</span>
                        </p>
                    </div>
                    <div :class="['status-wrapper', {'actions-wrapper': !fileObj.status || fileObj.status === 'removeError'}]">

                        <transition appear tag="div" name="actions" class="transition-wrapper" mode="out-in">

                            <div class="status-removed-wrapper" v-if="fileObj.status === 'removed'">
                                <label class="status-text text-danger">Removed!</label>
                                <span class="status-icon text-danger"><i class="fas fa-trash"></i></span>
                            </div>

                            <div class="actions-buttons" v-else-if="!fileObj.status || fileObj.status === 'removeError'">

                                <label class="status-text text-danger" v-if="fileObj.status === 'removeError'">Error!</label>
                                <span class="status-icon text-danger" v-if="fileObj.status === 'removeError'"><i class="fas fa-exclamation-triangle"></i></span>

                                <a class="download-btn" :href="fileObj.fullUrl" target="_blank" v-b-tooltip.hover.left :title="$t('global.download', { attribute: $t(nameLabel)})"><i class="fas fa-download"></i></a>

                                <button type="button" class="remove-btn" @click="removeFile(fileObj, index, true)" v-b-tooltip.hover.left :title="$t('global.remove', { attribute: $t(nameLabel)})"><i class="fas fa-trash"></i></button>
                            </div>
                        </transition>
                    </div>
                </li>


                <li class="file-details-row" v-for="(fileObj, index) in uploadedFiles" :key="fileObj.uuid">
                    <div class="file-icon">
                        <span><i :class="['far', getFileIcon(fileObj.mime)]"></i></span>
                    </div>
                    <div class="file-details">
                        <h6>{{ fileObj.filename }}</h6>
                        <p class="text-danger" v-if="fileObj.error">
                            {{ fileObj.error }}
                        </p>
                        <p v-else>
                            <span><span class="font-weight-700">{{ $t('upload.type') }}</span>: {{ mimeTypes[fileObj.mime] || fileObj.mime || 'Unknown' }}</span>
                            <span class="ml-1"><span class="font-weight-700">{{ $t('upload.size') }}</span>: {{ (fileObj.size / 1024) | decimal(0) }} KB</span>
                        </p>
                    </div>
                    <div :class="['status-wrapper', {'actions-wrapper': !fileObj.status || fileObj.status === 'removeError'}]">

                        <transition appear tag="div" name="actions" class="transition-wrapper" mode="out-in">

                            <div class="status-removed-wrapper" v-if="fileObj.status === 'removed'">
                                <label class="status-text text-danger">Removed!</label>
                                <span class="status-icon text-danger"><i class="fas fa-trash"></i></span>
                            </div>

                            <div class="actions-buttons" v-else-if="!fileObj.status || fileObj.status === 'removeError'">

                                <label class="status-text text-danger" v-if="fileObj.status === 'removeError'">Error!</label>
                                <span class="status-icon text-danger" v-if="fileObj.status === 'removeError'"><i class="fas fa-exclamation-triangle"></i></span>

                                <a class="download-btn" :href="fileObj.fullUrl" target="_blank" v-b-tooltip.hover.left :title="$t('global.download', { attribute: $t(nameLabel)})"><i class="fas fa-download"></i></a>

                                <button type="button" class="remove-btn" @click="removeFile(fileObj, index, true)" v-b-tooltip.hover.left :title="$t('global.remove', { attribute: $t(nameLabel)})"><i class="fas fa-trash"></i></button>
                            </div>
                        </transition>
                    </div>
                </li>



                <li class="file-details-row" v-for="(fileObj, index) in files" :key="index">
                    <div class="file-icon">
                        <span><i :class="['far', getFileIcon(fileObj.file.type)]"></i></span>
                    </div>
                    <div class="file-details">
                        <h6>{{ fileObj.file.name }}</h6>
                        <p class="text-danger" v-if="fileObj.error">
                            {{ fileObj.error }}
                        </p>
                        <p v-else>
                            <span><span class="font-weight-700">{{ $t('upload.type') }}</span>: {{ mimeTypes[fileObj.file.type] || 'Unknown' }}</span>
                            <span class="ml-1"><span class="font-weight-700">{{ $t('upload.size') }}</span>: {{ (fileObj.file.size / 1024) | decimal(0) }} KB</span>
                        </p>
                    </div>
                    <div :class="['status-wrapper', {'actions-wrapper': fileObj.status === 'uploaded' || fileObj.status === 'removeError'}]">

                        <transition appear tag="div" name="actions" class="transition-wrapper" mode="out-in">
                            <div class="status-uploading-wrapper" v-if="fileObj.status === 'uploading'">
                                <label class="status-action" @click="fileObj.cancel">{{ $t('general.cancel') }}</label>
                                <progress-ring :value="fileObj.progress" :stroke-color="vars.loaderColor" />
                            </div>

                            <div class="status-uploaded-wrapper" v-else-if="fileObj.status === 'justUploaded'">
                                <label class="status-text text-success">Uploaded!</label>
                                <span class="status-icon text-success"><i class="fas fa-check"></i></span>
                            </div>

                            <div class="status-cancelled-wrapper" v-else-if="fileObj.status === 'cancelled'">
                                <label class="status-text text-danger">Cancelled!</label>
                                <span class="status-icon text-danger"><i class="fas fa-times"></i></span>
                            </div>

                            <div class="status-removed-wrapper" v-else-if="fileObj.status === 'removed'">
                                <label class="status-text text-danger">Removed!</label>
                                <span class="status-icon text-danger"><i class="fas fa-trash"></i></span>
                            </div>

                            <div class="status-error-wrapper" v-else-if="fileObj.status === 'error'">
                                <label class="status-text text-danger">Error!</label>
                                <span class="status-icon text-danger"><i class="fas fa-exclamation-triangle"></i></span>
                            </div>

                            <div class="actions-buttons" v-else-if="fileObj.status === 'uploaded' || fileObj.status === 'removeError'">

                                <label class="status-text text-danger" v-if="fileObj.status === 'removeError'">Error!</label>
                                <span class="status-icon text-danger" v-if="fileObj.status === 'removeError'"><i class="fas fa-exclamation-triangle"></i></span>

                                <label class="status-text text-success" v-else-if="fileObj.status === 'uploaded'">Uploaded!</label>

                                <button type="button" class="remove-btn" @click="removeFile(fileObj, index)" v-b-tooltip.hover.left :title="$t('global.remove', { attribute: $t(nameLabel)})"><i class="fas fa-trash"></i></button>
                            </div>
                        </transition>
                    </div>
                </li>


            </ul>
        </div>

    </div>
</template>

<script>
    import axios from 'axios'
    import * as UploaderAPI from '@api/uploader'
    import { mapGetters, mapActions } from 'vuex'
    import { v4 as uuid } from 'uuid'
    import EventBus from '@js/event-bus'
    import { fileIcons, fileMimeTypes } from '@js/vars'

    // file.status   v-if="fileObj.status === 'uploading'"
    // 0 = uploaded false
    // 1 = uploaded
    // 2 = uploading
    // 3 = existing
    // 4 = removed
    //
    //
    // handle error in ui
    // remove File
    // handle existing uploaded files
    // check uuid

    export default {
        name: "file-uploader",
        components: {
        },
        props: {
            data: {
                type: Array,
                default () {
                    return []
                }
            },
            additionalFormData: {
                type: Object,
                default () {
                    return {}
                }
            },
            requestIdentifier: {
                type: String,
                default: uuid(),
            },
            url: {
                type: String,
                default: '/uploads',
            },
            heading: {
                type: String,
                default: null,
            },
            actionLabel: {
                type: String,
                default: 'global.choose',
            },
            nameLabel: {
                type: String,
                default: 'upload.file',
            },
            namesLabel: {
                type: String,
                default: 'upload.files',
            },
            buttonWrapperClasses: {
                type: String,
                default: 'justify-content-start',
            },
            headingClasses: {
                type: String,
                default: 'mb-0',
            },
            buttonClasses: {
                type: String,
                default: '',
            },
            buttonIcon: {
                type: String,
                default: 'fas fa-upload',
            },
            buttonDesign: {
                type: String,
                default: 'primary',
            },
            options: {
                type: Object,
                required: true,
            },
            autoUpload: {
                type: Boolean,
                default: true,
            },
            multiple: {
                type: Boolean,
                default: true,
            },
            hideButtonLabel: {
                type: Boolean,
                default: false,
            },
            hideFileList: {
                type: Boolean,
                default: false,
            },
            hideResetButton: {
                type: Boolean,
                default: false,
            },
            hideAfterUpload: {
                type: Boolean,
                default: true,
            },
            showSelectedFilesCount: {
                type: Boolean,
                default: false,
            },
        },
        data() {
            return {
                isLoading: false,
                fileRemoved: false,
                actionLabelUpdated: '',
                files: [],
                uploadedFiles: [],
                existingFiles: [],
                icons: fileIcons,
                mimeTypes: fileMimeTypes,
            }
        },
        computed: {
            ...mapGetters('config', [
                'configs',
                'vars',
            ]),
            computedActionLabel() {
                return this.existingFile ? 'global.change' : this.actionLabel
            },
        },
        watch: {
            data(v) {
                this.existingFiles = v.map(f => {
                    return { ...f, status: null }
                })
            },
            'options.uuid': {
                deep: true,
                handler(val, oldVal) {
                    if(val && val !== oldVal) {
                        this.reset()
                    }
                }
            }
        },
        methods: {
            getFileIcon(type) {
                return this.icons[type] || 'fa-file-alt'
            },
            getFileNameIcon(type) {
                return this.icons[type] || 'fa-file-alt'
            },
            generateFilesList(e) {
                this.isLoading = true
                let allowedExtensions = null
                const selectedFiles = this.$refs.filesInput.files

                if (this.options.allowedExtensions) {
                    if(! _.isArray(this.options.allowedExtensions)) {
                        this.options.allowedExtensions = this.options.allowedExtensions.split(",");
                        this.options.allowedExtensions.push('json');
                    }
                    allowedExtensions = new RegExp('(\.' + this.options.allowedExtensions.join('|\.') + ')$')
                }

                if(this.options.maxNoOfFiles && (selectedFiles.length + this.existingFiles.length) > this.options.maxNoOfFiles) {
                    this.$toasted.error(this.$t('upload.max_file_limit_crossed', { number: this.options.maxNoOfFiles }), this.$toastConfig.error)
                    return
                }

                for (let i = 0; i < selectedFiles.length; i++) {

                    if (allowedExtensions && !allowedExtensions.test(selectedFiles[i].name)) {

                        this.isLoading = false
                        this.$toasted.error(this.$t('global.file_not_supported', { attribute: selectedFiles[i].name.split('.').pop() }), this.$toastConfig.error)

                    } else if (selectedFiles[i].size > this.configs.system.postMaxSize) {

                        this.isLoading = false
                        this.$toasted.error(this.$t('global.file_too_large', { attribute: selectedFiles[i].name }), this.$toastConfig.error)

                    } else {
                        this.files.push({
                            uuid: uuid(),
                            file: selectedFiles[i],
                            status: 'waiting',
                            progress: 0,
                        })
                    }
                }

                this.isLoading = false

                this.$emit('selected', this.files.length)

                if(this.autoUpload) {
                    this.startUploading()
                }
            },
            startUploading() {
                const filesToUpload = this.files.filter(fileObj => fileObj.status === 'waiting')

                if (filesToUpload.length) {
                    let onUploadProgressArr = []
                    const CancelToken = axios.CancelToken

                    this.$emit('uploading', this.files.length)

                    for (let i = 0; i < this.files.length; i++) {
                        const uploadObj = this.files[i]
                        onUploadProgressArr[i] = (progressEvent) => {
                            uploadObj.progress = Math.round((progressEvent.loaded * 100) / progressEvent.total)
                        }

                        if (uploadObj.status === 'waiting') {
                            let formData = new FormData()
                            formData.append('file', uploadObj.file)
                            formData.append('mime', uploadObj.file.type)
                            formData.append('token', this.options.token)
                            formData.append('module', this.options.module)
                            formData.append('request_uuid', this.requestIdentifier)

                            formData.append('first_attachment', i === 0)
                            formData.append('last_attachment', i === (this.files.length-1))

                            this.additionalFormData.objForEach((value, key) => {
                                if(value) {
                                    if(_.isObject(value)) {
                                        formData.append(key.snakeCase(), JSON.stringify(value))
                                    } else {
                                        formData.append(key.snakeCase(), value)
                                    }
                                }
                            })

                            uploadObj.status = 'uploading'

                            let cancelToken = new CancelToken(c => {
                                uploadObj.cancel = c;
                            })

                            UploaderAPI.uploadFile({
                                    url: this.url,
                                    data: formData
                                }, onUploadProgressArr[i], cancelToken)
                                .then(response => {
                                    if(response.upload) {
                                        this.uploadedFiles.push(response.upload)
                                    } else if(response.attachments) {
                                        this.uploadedFiles.push(response.attachments)
                                    }
                                    uploadObj.uuid = response.upload ? response.upload.uuid : response.uuid
                                    uploadObj.status = 'justUploaded'
                                    delete uploadObj.cancel


                                    setTimeout(() => {
                                        uploadObj.status = 'uploaded'
                                        if(this.hideAfterUpload) {
                                            delete this.files.splice(this.files.findIndex(f => f.uuid === uploadObj.uuid), 1);
                                        }
                                    }, 2000)
                                    this.$emit('updated', response)
                                    this.checkUploadStatus(response)
                                })
                                .catch(thrown => {
                                    this.$emit('error', {
                                        ...thrown,
                                        requestUuid: this.requestIdentifier
                                    })
                                    if (thrown.response && thrown.response.data) {
                                        const data = thrown.response.data || {}
                                        const errors = data.errors ? formUtil.assignErrors(data.errors) : {}
                                        uploadObj.error = errors.message
                                        this.$toasted.error(errors.message, this.$toastConfig.error)
                                        uploadObj.status = 'error'
                                        setTimeout(() => {
                                            delete this.files.splice(this.files.findIndex(f => f.uuid === uploadObj.uuid), 1);
                                        }, 3000)
                                        this.$emit('updated', {
                                            ...thrown,
                                            requestUuid: this.requestIdentifier
                                        })
                                        this.checkUploadStatus()
                                    } else {
                                        uploadObj.status = 'cancelled'
                                        setTimeout(() => {
                                            delete this.files.splice(this.files.findIndex(f => f.uuid === uploadObj.uuid), 1);
                                        }, 3000)
                                    }
                                })
                        }
                    }
                }
            },
            removeFile(fileObj, index, existing = false) {
                formUtil.confirmAction()
                    .then((result) => {
                        if (result.value) {
                            this.isLoading = true
                            UploaderAPI.removeFile({
                                    url: this.url + '/' + fileObj.uuid,
                                    data: {
                                        token: this.options.token,
                                        module: this.options.module,
                                    }
                                })
                                .then(response => {
                                    fileObj.status = 'removed'
                                    setTimeout(() => {
                                        if(existing) {
                                            delete this.existingFiles.splice(this.existingFiles.findIndex(f => f.uuid === fileObj.uuid), 1)
                                        } else {
                                            delete this.files.splice(this.files.findIndex(f => f.uuid === fileObj.uuid), 1)
                                        }
                                    }, 3000)
                                    this.isLoading = false
                                    this.$toasted.success(response.message, this.$toastConfig.success)
                                    this.$emit('selected', this.files.length)
                                    this.$emit('updated', response)
                                    this.checkUploadStatus()
                                })
                                .catch(thrown => {
                                    const data = thrown.response.data || {}
                                    const errors = data.errors ? formUtil.assignErrors(data.errors) : {}
                                    this.$toasted.error(errors.message, this.$toastConfig.error)
                                    fileObj.error = errors.message
                                    fileObj.status = 'removeError'
                                })
                        }
                    })
            },
            checkUploadStatus(response) {
                let status = true
                for (let i = 0; i < this.files.length; i++) {
                    if(this.files[i].status !== 'justUploaded' && this.files[i].status !== 'uploaded') {
                        status = false
                    }
                }
                if(status) {
                    this.$emit('uploaded', this.uploadedFiles)
                } else {
                    this.$emit('error', {
                                        requestUuid: this.requestIdentifier
                                    })
                }
            },
            reset() {
                this.isLoading = false
                this.fileRemoved = false
                this.actionLabelUpdated = ''
                this.files = []
                this.uploadedFiles = []
                const input = this.$refs.filesInput
                input.type = 'text'
                input.type = 'file'
                this.$emit('selected', this.files.length)
            },
            startUpload() {
                if(this.files.length) {
                    this.startUploading()
                } else {
                    this.$emit('noNeed')
                }
            },
        },
        mounted() {
            EventBus.$off('START_UPLOAD', this.startUpload)
            EventBus.$on('START_UPLOAD', this.startUpload)
            EventBus.$off('RESET_UPLOAD', this.reset)
            EventBus.$on('RESET_UPLOAD', this.reset)
            this.existingFiles = this.data.map(f => {
                return { ...f, status: null }
            })
        },
        filters: {
            decimal(value, num = 2) {
                return Number(value).toFixed(num)
            }
        },
        destroyed() {
            EventBus.$off('START_UPLOAD', this.startUpload)
            EventBus.$off('RESET_UPLOAD', this.reset)
        },
    }

</script>
