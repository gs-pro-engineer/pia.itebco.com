<template>
    <div class="sm-uploader file-uploader file-sharer">

        <div :class="['files-list-wrapper']">
            <div class="file-incoming-request" v-if="incomingRequest.show">
                <div class="alert fade show alert-white">
                    <div class="alert-content">
                        <h6><strong>{{ incomingRequest.sender.name }}</strong><span class="text-muted mx-1">{{ $t('upload.wants_to_share_file') }}</span><strong>{{ incomingRequest.fileId }}</strong></h6>
                    </div>

                    <div class="d-flex justify-content-start mt-3">
                        <button type="button" class="btn btn-sm btn-danger flex-grow" @click="rejectIncomingFile">{{ $t('upload.reject') }}</button>
                        <button type="button" class="btn btn-sm btn-success flex-grow" @click="acceptIncomingFile">{{ $t('upload.accept') }}</button>
                    </div>
                </div>
            </div>

            <ul class="files-list" v-if="sharingFiles.length">

                <li class="file-details-row" v-for="(fileObj, index) in sharingFiles" :key="fileObj.fileId">
                    <div class="file-details-wrapper">
                        <div class="file-icon">
                            <span><i :class="['far', getFileIcon(fileObj.type)]"></i></span>
                        </div>
                        <div class="file-details">
                            <h6>{{ fileObj.name }}</h6>
                            <p>
                                <span><span class="font-weight-700">{{ $t('upload.type') }}</span>: {{ mimeTypes[fileObj.type] || 'Unknown' }}</span>
                                <span class="ml-1"><span class="font-weight-700">{{ $t('upload.size') }}</span>: {{ fileObj.humanSize }}</span>
                            </p>


                            <div class="sharing-details-wrapper" v-if="fileObj.sendingTo">
                                <div class="sharing-row mt-2" v-for="to in fileObj.sendingTo" :key="to.userid">
                                    <div class="sharing-details small">
                                        <div class="flex-grow text-muted">
                                            Sending to: {{ to.userid }}
                                        </div>
                                        <div>
                                            <span :class="['badge badge-sm badge-pill', {'badge-success': to.progress.status === 'sent'}, {'badge-info': to.progress.status !== 'sent'}]">{{ to.progress.status }}</span>
                                        </div>
                                    </div>
                                    <b-progress :value="to.progress.percent" :max="100" class="mt-2 mb-0"></b-progress>
                                </div>
                            </div>
                            <div class="sharing-row mt-2" v-else-if="fileObj.receivingFrom">
                                <div class="sharing-details small">
                                    <div class="flex-grow text-muted">
                                        Receiving From: {{ fileObj.receivingFrom }}
                                    </div>
                                    <div>
                                        <span :class="['badge badge-sm badge-pill', {'badge-success': fileObj.progress.status === 'received'}, {'badge-info': fileObj.progress.status !== 'received'}]">{{ fileObj.progress.status }}</span>
                                    </div>
                                </div>
                                <b-progress :value="fileObj.progress.percent" :max="100" class="mt-2 mb-0"></b-progress>
                            </div>
                        </div>
                        <div class="status-wrapper">
                            <a v-if="!fileObj.receivingFrom || fileObj.progress.status === 'received'" :href="fileObj.url" target="_blank" :download="fileObj.name" class="status-action"><span><i class="fas fa-download"></i></span></a>
                        </div>
                    </div>
                </li>


            </ul>
        </div>


        <div class="file-uploader-form">
            <div :class="['file-selector d-flex', buttonWrapperClasses]">
                <button v-if="showCloseButton" type="button" :class="['btn', closeButtonClasses]" @click="$emit('hide')"> <span class="button-icon"><i class="fas fa-times"></i></span> <span class="button-label">{{ $t(closeButtonLabel) }}</span></button>

                <template v-if="allowSharing">
                    <label :class="['btn', `btn-${buttonDesign}`, buttonClasses]">
                        <input name="filesInput" type="file" ref="filesInput" id="filesInput" @change="generateFilesList" class="selector-input" :multiple="multiple">
                        <span class="button-icon"><i :class="buttonIcon"></i></span> <span class="button-label" v-if="!hideButtonLabel">{{ $t(actionLabel, { attribute: $t(namesLabel)}) }}</span>
                    </label>
                </template>
            </div>
        </div>

    </div>
</template>

<script>
    import { mapGetters, mapActions } from 'vuex'
    import { fileIcons, fileMimeTypes } from '@js/vars'
    import { BProgress } from 'bootstrap-vue'
    import { bytesToSize } from '@core/utils'

    export default {
        name: "file-sharer",
        components: {
            BProgress,
        },
        props: {
            connection: {
                default: null,
            },
            allowSharing: {
                default: true,
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
            closeButtonLabel: {
                type: String,
                default: 'upload.close',
            },
            buttonWrapperClasses: {
                type: String,
                default: 'justify-content-between',
            },
            buttonClasses: {
                type: String,
                default: '',
            },
            closeButtonClasses: {
                type: String,
                default: 'btn-light',
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
                default () {
                    return {
                        allowedExtensions: ["jpg","png","jpeg","pdf","doc","docx","xls","xlsx","txt"],
                        maxNoOfFiles: 20,
                        allowedMaxFileSize: null,
                    }
                }
            },
            multiple: {
                type: Boolean,
                default: false,
            },
            hideButtonLabel: {
                type: Boolean,
                default: false,
            },
            showCloseButton: {
                type: Boolean,
                default: true,
            },
            autoSend: {
                type: Boolean,
                default: true,
            },
        },
        data() {
            return {
                icons: fileIcons,
                mimeTypes: fileMimeTypes,
                sharingFiles: [],
                lastSelectedFile: null,
                incomingRequest: {
                    show: false,
                    sender: null,
                    fileId: null,
                }
            }
        },
        computed: {
            ...mapGetters('config', [
                'configs',
                'vars',
            ]),
        },
        watch: {
            connection(newVal, oldVal) {
                if(newVal && oldVal === null) {
                    this.setupConnection()
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
                let allowedExtensions = null
                const selectedFiles = this.$refs.filesInput.files

                if (this.options.allowedExtensions) {
                    if(! _.isArray(this.options.allowedExtensions)) {
                        this.options.allowedExtensions = this.options.allowedExtensions.split(",")
                    }
                    allowedExtensions = new RegExp('(\.' + this.options.allowedExtensions.join('|\.') + ')$')
                }

                if(this.options.maxNoOfFiles && selectedFiles.length > this.options.maxNoOfFiles) {
                    this.$toasted.error(this.$t('upload.max_file_limit_crossed', { number: this.options.maxNoOfFiles }), this.$toastConfig.error)
                    return
                }

                for (let i = 0; i < selectedFiles.length; i++) {
                    const fileId = `${selectedFiles[i].size}-${selectedFiles[i].name}`
                    const existingFileIndex = this.sharingFiles.findIndex(f => f.fileId === fileId)

                    if (allowedExtensions && !allowedExtensions.test(selectedFiles[i].name)) {

                        this.$toasted.error(this.$t('global.file_not_supported', { attribute: selectedFiles[i].name.split('.').pop() }), this.$toastConfig.error)

                    } else if (this.options.allowedMaxFileSize && selectedFiles[i].size > this.options.allowedMaxFileSize) {

                        this.$toasted.error(this.$t('global.file_too_large', { attribute: selectedFiles[i].name }), this.$toastConfig.error)

                    } else if(existingFileIndex === -1) {
                        const fileObj = {
                            uuid: '',
                            name: selectedFiles[i].name,
                            size: selectedFiles[i].size,
                            type: selectedFiles[i].type,
                            humanSize: bytesToSize(selectedFiles[i].size),
                            fileId: fileId,
                            url: '',
                            sendingTo: [],
                            progress: {
                                value: 0,
                                max: 0,
                                percent: 0,
                                status: 'starting'
                            }
                        }

                        this.sharingFiles.unshift(fileObj)
                        this.lastSelectedFile = selectedFiles[i]
                    }
                }

                if(this.autoSend && this.connection) {
                    this.connection.send({
                        doYouWannaReceiveThisFile: true,
                        sender: this.connection.extra,
                        fileId: `${this.lastSelectedFile.size}-${this.lastSelectedFile.name}`
                    })
                }
            },

            rejectIncomingFile() {
                this.incomingRequest.show = false
                this.connection.send({
                    noIDoNotWannaReceive: true,
                    sender: this.connection.extra,
                    fileId: this.incomingRequest.fileId
                })
                this.incomingRequest.sender = null
                this.incomingRequest.fileId = null
            },
            acceptIncomingFile() {
                this.incomingRequest.show = false
                this.connection.send({
                    yesIWannaReceive: true,
                    sender: this.connection.extra,
                    fileId: this.incomingRequest.fileId
                })
                this.incomingRequest.sender = null
                this.incomingRequest.fileId = null
            },
            rtcmOnOpen(e) {
                try {
                    chrome.power.requestKeepAwake('display')
                } catch (e) {}

                if (this.connection.connectedWith[e.userid]) {
                    return
                }

                this.connection.connectedWith[e.userid] = true

                if (!this.lastSelectedFile) {
                    return
                }

                window.setTimeout(() => {
                    if(this.autoSend && this.connection) {
                        this.connection.send({
                            doYouWannaReceiveThisFile: true,
                            sender: this.connection.extra,
                            fileId: `${this.lastSelectedFile.size}-${this.lastSelectedFile.name}`
                        })
                    }
                }, 500)
            },
            rtcmOnClose(e) {
            },
            rtcmOnLeave(e) {
            },
            rtcmOnMessage(event) {
                if (event.data.doYouWannaReceiveThisFile) {
                    if (!this.connection.fileReceived[event.data.fileId]) {
                        this.incomingRequest.fileId = event.data.fileId
                        this.incomingRequest.sender = event.data.sender
                        this.incomingRequest.show = true
                        this.$emit('show')
                    }
                } else if (event.data.yesIWannaReceive && !!this.lastSelectedFile) {
                    this.connection.shareFile(this.lastSelectedFile, event.userid)
                } else if (event.data.noIDoNotWannaReceive && !!this.lastSelectedFile) {
                }
            },
            rtcmOnFileStart(file) {
                const fileId = `${file.size}-${file.name}`

                if (this.connection.fileReceived[fileId]) {
                    return
                }

                //receiving new file
                if (file.userid !== this.connection.userid) {
                    this.sharingFiles.unshift({
                        uuid: '',
                        name: file.name,
                        size: file.size,
                        type: file.type,
                        humanSize: bytesToSize(file.size),
                        fileId: fileId,
                        url: '',
                        receivingFrom: null,
                        progress: {
                            value: 0,
                            max: 0,
                            percent: 0,
                            status: 'starting'
                        }
                    })
                    this.$emit('show')
                }

                const selectedFileIndex = this.sharingFiles.findIndex(f => f.fileId === fileId)
                if (selectedFileIndex === -1) {
                    return
                }
                let selectedFile = this.sharingFiles[selectedFileIndex]

                selectedFile.uuid = file.uuid
                selectedFile.userid = file.userid

                if (file.userid === this.connection.userid) {
                    if(!selectedFile.sendingTo) {
                        selectedFile.sendingTo = []
                    }

                    if(selectedFile.sendingTo.length > 0) {
                        if(selectedFile.sendingTo.findIndex(u => u.userid === file.remoteUserId) !== -1) {
                            return
                        }
                    }

                    selectedFile.sendingTo.unshift({
                        userid: file.remoteUserId,
                        progress: {
                            value: 0,
                            percent: 0,
                            max: file.maxChunks,
                            status: 'starting'
                        }
                    })


                } else {
                    selectedFile.receiveAgain = true
                    selectedFile.receivingFrom = file.userid

                    selectedFile.progress.max = file.maxChunks
                    selectedFile.progress.status = 'starting'

                }
            },
            rtcmOnFileProgress(chunk) {
                const fileId = `${chunk.size}-${chunk.name}`

                if (this.connection.fileReceived[fileId]) {
                    return
                }

                const selectedFileIndex = this.sharingFiles.findIndex(f => f.uuid === chunk.uuid)

                if (selectedFileIndex === -1) {
                    return
                }

                let selectedFile = this.sharingFiles[selectedFileIndex]

                if (chunk.remoteUserId && selectedFile.sendingTo) {
                    const remoteUserIndex = selectedFile.sendingTo.findIndex(u => u.userid === chunk.remoteUserId)
                    const helperInnerObj = selectedFile.sendingTo[remoteUserIndex]

                    if (!helperInnerObj) {
                        return
                    }

                    helperInnerObj.progress.value = chunk.currentPosition
                    helperInnerObj.progress = this.updateProgress(helperInnerObj.progress, true)
                } else {
                    selectedFile.progress.value = chunk.currentPosition
                    selectedFile.progress = this.updateProgress(selectedFile.progress, false)
                }
            },
            rtcmOnFileEnd(file) {
                const fileId = `${file.size}-${file.name}`

                if (this.connection.fileReceived[fileId]) {
                    return
                }

                //received file ?
                if (file.remoteUserId === this.connection.userid) {
                    this.connection.fileReceived[fileId] = file
                }

                const selectedFileIndex = this.sharingFiles.findIndex(f => f.fileId === fileId)
                if (selectedFileIndex === -1) {
                    return
                }

                let selectedFile = this.sharingFiles[selectedFileIndex]
                selectedFile.url = file.url

                if (file.remoteUserId && selectedFile.sendingTo) {
                    const remoteUserIndex = selectedFile.sendingTo.findIndex(u => u.userid === file.remoteUserId)

                    selectedFile.sendingTo[remoteUserIndex].progress.status = 'sent'
                } else  {
                    selectedFile.progress.status = 'received'
                }
            },
            rtcmOnError(e) {
            },
            updateProgress(progress, sending = true) {
                if (!progress.value || progress.value === -1) {
                    progress.percent = 0
                    return progress
                }

                const percent = parseInt(((progress.value / progress.max ) * 100).toFixed(0))

                if(sending) {
                    progress.status = percent > 100 ? 'sent' : 'sending - ' + percent + '%'
                } else {
                    progress.status = percent > 100 ? 'received' : 'receiving - ' + percent + '%'
                }

                progress.percent = percent > 100 ? 100 : percent
                return progress
            },

            setupConnection() {
                this.connection.enableFileSharing = true
                this.connection.fileReceived = {}
                this.connection.connectedWith = {}
                this.connection.chunkSize = 15 * 1000

                this.connection.onopen = this.rtcmOnOpen
                this.connection.onclose = this.rtcmOnClose
                this.connection.onleave = this.rtcmOnLeave
                this.connection.onmessage = this.rtcmOnMessage
                this.connection.onerror = this.rtcmOnError
                this.connection.onFileStart = this.rtcmOnFileStart
                this.connection.onFileProgress = this.rtcmOnFileProgress
                this.connection.onFileEnd = this.rtcmOnFileEnd
            },
        },
        mounted() {
            this.options.allowedMaxFileSize = this.options.allowedMaxFileSize ? this.options.allowedMaxFileSize : (this.configs.system && this.configs.system.postMaxSize ? this.configs.system.postMaxSize : null)

            this.options.allowedExtensions = this.options.allowedExtensions ? this.options.allowedExtensions : (this.configs.system && this.configs.system.allowedFileExtensions ? this.configs.system.allowedFileExtensions : null)

            if(this.connection) {
                this.setupConnection()
            }
        },
        destroyed() {
        },
    }

</script>
