<template>
    <div :class="['editor-wrapper', {'not-empty': !!value}, {'required': required}, height ? `height-${height}` : '']">
        <label class="input-group-material-label">{{ label }} <span class="required-asterix" v-if="required">*</span></label>

        <slot>
            <trumbowyg v-model="content" :config="computedConfig" class="form-control" name="content" />
        </slot>

        <slot name="errorBlock">
            <div class="text-danger invalid-feedback error-block" v-if="error">
                {{ error }}
            </div>
        </slot>
    </div>
</template>

<script>
    import 'jquery/dist/jquery.min.js'
    import Trumbowyg from 'vue-trumbowyg'
    import 'trumbowyg/dist/ui/trumbowyg.css'
    import SvgFile from '@images/icons/trumbowyg-icons.svg'

    import 'jquery-resizable-dom/dist/jquery-resizable.min.js'

    import 'trumbowyg/dist/plugins/cleanpaste/trumbowyg.cleanpaste.min.js'
    import 'trumbowyg/dist/plugins/allowtagsfrompaste/trumbowyg.allowtagsfrompaste.min.js'
    import 'trumbowyg/dist/plugins/colors/ui/trumbowyg.colors.css'
    import 'trumbowyg/dist/plugins/colors/trumbowyg.colors.min.js'
    import 'trumbowyg/dist/plugins/table/ui/trumbowyg.table.min.css'
    import 'trumbowyg/dist/plugins/table/trumbowyg.table.min.js'
    import 'trumbowyg/dist/plugins/emoji/ui/trumbowyg.emoji.css'
    import 'trumbowyg/dist/plugins/emoji/trumbowyg.emoji.min.js'
    import 'trumbowyg/dist/plugins/fontsize/trumbowyg.fontsize.min.js'
    import 'trumbowyg/dist/plugins/history/trumbowyg.history.min.js'
    import 'trumbowyg/dist/plugins/lineheight/trumbowyg.lineheight.min.js'
    import 'trumbowyg/dist/plugins/noembed/trumbowyg.noembed.min.js'
    import 'trumbowyg/dist/plugins/pasteembed/trumbowyg.pasteembed.min.js'
    import 'trumbowyg/dist/plugins/preformatted/trumbowyg.preformatted.min.js'
    import 'trumbowyg/dist/plugins/resizimg/trumbowyg.resizimg.js'
    import 'trumbowyg/dist/plugins/specialchars/ui/trumbowyg.specialchars.css'
    import 'trumbowyg/dist/plugins/specialchars/trumbowyg.specialchars.min.js'
    import 'trumbowyg/dist/plugins/upload/trumbowyg.upload.min.js'

    import { getToken } from '@core/utils/auth'
    const token = getToken()

    const btnsDefObj = {
        image: {
            dropdown: ['insertImage', 'upload'],
            ico: 'insertImage'
        },
        textAlign: {
            dropdown: ['justifyLeft', 'justifyCenter', 'justifyRight', 'justifyFull'],
            ico: 'justifyFull'
        },
        textDecoration: {
            dropdown: ['underline', 'del', 'superscript', 'subscript'],
            ico: 'underline'
        },
        lists: {
            dropdown: ['unorderedList', 'orderedList'],
            ico: 'unorderedList'
        },
        extras: {
            dropdown: ['removeformat', 'undo', 'redo', 'horizontalRule', 'preformatted'],
            ico: 'removeformat'
        },
    }

    export default {
        name: "editor-wrapper",
        components: {
            Trumbowyg,
        },
        props: {
            disabled: {
                type: Boolean,
                default: false,
                description: "Whether input is required (adds an asterix *)"
            },
            required: {
                type: Boolean,
                default: false,
                description: "Whether input is required (adds an asterix *)"
            },
            config: {
                type: [String, Object],
            },
            autogrow: {
                type: Boolean,
                default: false,
            },
            height: {
                type: String,
                default: '',
            },
            label: {
                type: String,
                default: 'Enter content',
            },
            value: {
                type: String,
                description: "Selected value"
            },
            error: {
                type: String,
                description: "Select error (below select)"
            },
        },
        data() {
            return {
                configObj: {
                    btnsDef: {
                        image: btnsDefObj.image,
                        textAlign: btnsDefObj.textAlign,
                        textDecoration: btnsDefObj.textDecoration,
                        lists: btnsDefObj.lists,
                    },
                    btns: [
                        ['undo', 'redo'],
                        ['formatting', 'strong', 'em', 'textDecoration'],
                        ['foreColor', 'backColor'],
                        ['textAlign', 'lists'],
                        ['horizontalRule', 'link', 'image', 'table', 'specialChars', 'emoji'],
                        ['preformatted'],
                        ['removeformat'],
                        ['fullscreen']
                    ],
                    plugins: {
                        resizimg: {
                            minSize: 64,
                            step: 16,
                        },
                        table: {
                            rows: 8,
                            columns: 8,
                        },
                        upload: {
                            serverPath: '/api/uploads/image',
                            fileFieldName: 'image',
                            headers: {
                                'X-Requested-With': 'XMLHttpRequest',
                                'withCredentials': true,
                                'x-xsrf-token': `${token}`
                            },
                            urlPropertyName: 'url',
                            error(error) {
                                debugger
                            }
                        }
                    },
                    autogrow: false,
                    imageWidthModalEdit: true,
                    tagsToRemove: ['script', 'link', 'iframe', 'input'],
                    tagsToKeep: ['hr', 'img', 'embed'],
                    svgPath: SvgFile
                },
                minConfigObj: {
                    btnsDef: {
                        image: btnsDefObj.image,
                        textAlign: btnsDefObj.textAlign,
                        textDecoration: btnsDefObj.textDecoration,
                        lists: btnsDefObj.lists,
                        extras: btnsDefObj.extras,
                    },
                    btns: [
                        ['formatting', 'strong', 'em', 'textDecoration'],
                        ['foreColor', 'backColor'],
                        ['textAlign', 'lists'],
                        ['image', 'extras'],
                        ['fullscreen']
                    ],
                    plugins: {
                        resizimg: {
                            minSize: 64,
                            step: 16,
                        },
                        table: {
                            rows: 8,
                            columns: 8,
                        },
                        upload: {
                            serverPath: '/api/uploads/image',
                            fileFieldName: 'image',
                            headers: {
                                'X-Requested-With': 'XMLHttpRequest',
                                'Authorization': `Bearer ${token}`
                            },
                            urlPropertyName: 'url',
                            error(error) {
                                debugger
                            }
                        }
                    },
                    autogrow: false,
                    imageWidthModalEdit: true,
                    tagsToRemove: ['script', 'link', 'iframe', 'input'],
                    tagsToKeep: ['hr', 'img', 'embed'],
                    svgPath: SvgFile
                },
                leastConfigObj: {
                    btnsDef: {
                        image: btnsDefObj.image,
                        textAlign: btnsDefObj.textAlign,
                        textDecoration: btnsDefObj.textDecoration,
                        lists: btnsDefObj.lists,
                        extras: btnsDefObj.extras,
                    },
                    btns: [
                        ['formatting', 'strong', 'em', 'textDecoration'],
                        ['foreColor', 'backColor'],
                        ['textAlign'],
                        ['extras']
                    ],
                    plugins: {
                        resizimg: {
                            minSize: 64,
                            step: 16,
                        },
                    },
                    autogrow: false,
                    imageWidthModalEdit: true,
                    tagsToRemove: ['script', 'link', 'iframe', 'input'],
                    tagsToKeep: ['hr', 'img', 'embed'],
                    svgPath: SvgFile
                },
            }
        },
        computed: {
            content: {
                get() {
                    return this.value
                },
                set(value) {
                    value = value.replace(/<[^>]+/gmi, (match) => match.replace(/ on\w+="[^"]*"/gmi, ''))
                    this.$emit('input', value)
                    this.$emit('update:error', '')
                },
            },
            computedConfig() {
                return this.config ? (this.config === 'minimal' ? this.minConfigObj : (this.config === 'least' ? this.leastConfigObj : (this.config.hasOwnProperty('btnsDef') ? this.config : this.configObj) ) ) : this.configObj
            }
        },
        methods: {},
        mounted() {
            this.configObj.autogrow = this.autogrow
            this.minConfigObj.autogrow = this.autogrow
            this.leastConfigObj.autogrow = this.autogrow
        }
    }

</script>
<style lang="scss">
    @import '../assets/scss/imports.scss';
    .trumbowyg-box, .trumbowyg-editor {
        margin-top: 0;
    }
    .trumbowyg-box {
        border-radius: $input-border-radius;
        border: $input-border-width solid $input-border-color;
        transition: box-shadow .15s ease;
        box-shadow: $input-alternative-box-shadow;

        .trumbowyg-button-pane {
            // background: $input-bg;
            background: #f5f6f7;
            border-radius: $input-border-radius $input-border-radius 0 0;
            border-bottom: $input-border-width solid $input-border-color;
            z-index: auto;

            &::after, .trumbowyg-button-group::after {
                background: $input-border-color;
            }
        }
    }
    .trumbowyg-editor {
    }

    .editor-wrapper {
        &.height-xs {
            .trumbowyg-box, .trumbowyg-editor {
                min-height: 100px;
            }
        }
        &.height-sm {
            .trumbowyg-box, .trumbowyg-editor {
                min-height: 150px;
            }
        }
        &.height-md {
            .trumbowyg-box, .trumbowyg-editor {
                min-height: 300px;
            }
        }
        &.height-lg {
            .trumbowyg-box, .trumbowyg-editor {
                min-height: 450px;
            }
        }
        &.height-xl {
            .trumbowyg-box, .trumbowyg-editor {
                min-height: 600px;
            }
        }
        &.height-xxl {
            .trumbowyg-box, .trumbowyg-editor {
                min-height: 750px;
            }
        }
    }
</style>
