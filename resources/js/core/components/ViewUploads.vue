<template>
    <div class="base-view view-uploads" v-if="value.length">
        <div class="view-group" :class="[
            {'has-label': label || $slots.label},
            {'has-success': valid === true},
            {'has-danger': error || valid === false},
            {'not-empty': value || value===0}
        ]">
            <slot name="label">
                <label v-if="label" :class="labelClasses">
                    {{label}}
                </label>
            </slot>
            <slot>
                <div class="files-list-wrapper">
                    <ul class="files-list">

                        <li class="file-details-row" v-for="(fileObj, index) in value">
                            <div class="file-icon">
                                <span><i :class="['far', getFileIcon(fileObj.mime)]"></i></span>
                            </div>
                            <div class="file-details">
                                <h6>{{ fileObj.filename }}</h6>
                                <p class="text-danger" v-if="fileObj.error">
                                    {{ fileObj.error }}
                                </p>
                                <p v-else>
                                    <span><span class="font-weight-700">{{ $t('upload.type') }}</span>: {{ mimeTypes[fileObj.mime] || 'Unknown' }}</span>
                                    <span class="ml-1"><span class="font-weight-700">{{ $t('upload.size') }}</span>: {{ (fileObj.size / 1024) | decimal(0) }} KB</span>
                                </p>
                            </div>
                            <div :class="['actions-wrapper']">
                                <div class="actions-buttons">
                                    <a :class="['action-btn download-btn', downloadButtonClasses]" :href="`${urlPrefix}/${fileObj.uuid}?file=${fileObj.filename}`" target="_blank" v-b-tooltip.hover.left :title="$t('global.download', { attribute: nameLabel})"><i class="fas fa-download"></i></a>
                                </div>
                            </div>
                        </li>

                    </ul>
                </div>

            </slot>
        </div>
        <slot name="infoBlock"></slot>
        <slot name="errorBlock">
            <div class="text-danger invalid-feedback error-block" v-if="error">
                {{ error }}
            </div>
        </slot>

    </div>
</template>
<script>
    export default {
        name: "view-uploads",
        props: {
            valid: {
                type: Boolean,
                description: "Whether is valid",
                default: undefined
            },
            label: {
                type: String,
                description: "Upload label (text before input)"
            },
            nameLabel: {
                type: String,
                default: 'upload.file',
            },
            namesLabel: {
                type: String,
                default: 'upload.files',
            },
            error: {
                type: String,
                description: "Upload error (below input)"
            },
            labelClasses: {
                type: [String, Array],
                description: "Upload label css classes"
            },
            dataClasses: {
                type: [String, Array],
                description: "Upload css classes"
            },
            downloadButtonClasses: {
                type: [String, Array],
                default: 'text-primary'
            },
            value: {
                type: Array,
                description: "Upload value"
            },
            urlPrefix: {
                type: String,
                required: true
            },
        },
        data() {
            return {
                icons: {
                    "application/json": "fa-file-code",
                    "application/msword": "fa-file-word",
                    "application/vnd.openxmlformats-officedocument.presentationml.presentation": "fa-file-powerpoint",
                    "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet": "fa-file-excel",
                    "application/vnd.openxmlformats-officedocument.wordprocessingml.document": "fa-file-word",
                    "application/vnd.ms-excel": "fa-file-excel",
                    "application/vnd.ms-powerpoint": "fa-file-powerpoint",
                    "application/xml": "fa-file-code",
                    "application/&": "fa-file-pdf",
                    "application/pdf": "fa-file-pdf",
                    "image/jpeg": "fa-file-image",
                    "image/svg+xml": "fa-file-image",
                    "image/vnd.adobe.photoshop": "fa-file-image",
                    "image/vnd.microsoft.icon": "fa-file-image",
                    "image/png": "fa-file-image",
                    "image/&": "fa-file-image",
                    "text/plain": "fa-file-alt",
                    "video/mp4": "fa-file-video",
                    "video/ogg": "fa-file-video",
                    "video/quicktime": "fa-file-video",
                    "video/&": "fa-file-video",
                    "video/x-&": "fa-file-video"
                },
                mimeTypes: {
                    "application/json": "json",
                    "application/msword": "doc / dot",
                    "application/vnd.openxmlformats-officedocument.presentationml.presentation": "pptx",
                    "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet": "xlsx",
                    "application/vnd.openxmlformats-officedocument.wordprocessingml.document": "docx",
                    "application/vnd.ms-excel": "xla / xls / xlt",
                    "application/vnd.ms-powerpoint": "pot / ppa / pps / ppt",
                    "application/x-shockwave-flash": "swf",
                    "application/xml": "atom / rdf / rss / xml",
                    "application/&": "pdf / rtf / zip",
                    "application/pdf": "pdf",
                    "image/jpeg": "jpe / jpeg / jpg",
                    "image/svg+xml": "svg / svgz",
                    "image/vnd.adobe.photoshop": "psd",
                    "image/vnd.microsoft.icon": "ico",
                    "image/png": "png",
                    "image/&": "bmp / ief / gif / png / tif / tiff / webp",
                    "text/cache-manifest": "appcache / manifest",
                    "text/plain": "txt",
                    "text/x-component": "htc",
                    "text/x-vcard": "vcf",
                    "text/&": "css / html / php / vtt",
                    "text/x-&": "markdown / md",
                    "video/mp4": "mp4 / m4v / f4v / f4p",
                    "video/ogg": "ogv",
                    "video/quicktime": "mov / qt",
                    "video/&": "avi / mpg / vdo / viv / vivo / webm",
                    "video/x-&": "flv"
                },
            }
        },
        methods: {
            getFileIcon(type) {
                return this.icons[type] || 'fa-file-alt'
            },
            getFileNameIcon(type) {
                return this.icons[type] || 'fa-file-alt'
            },
        },
        filters: {
            decimal(value, num = 2) {
                return Number(value).toFixed(num)
            }
        }
    }

</script>
<style lang="scss" scoped>
</style>
