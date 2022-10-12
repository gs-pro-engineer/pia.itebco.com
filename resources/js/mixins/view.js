import * as headerMixins from './header'
import * as transformers from '@js/helpers/transformers'
import { mapGetters, mapActions } from 'vuex'
import EventBus from '@js/event-bus'
import _ from 'lodash'

export default {
    components: {
    },
    data() {
        return {
            uuid: null,
            subUuid: null,
            entity: null,
            preRequisite: {},
            formData: {},
            formErrors: {},
            editing : false,
            isLoading : false,
            initialFormData: null,
            getInitialDataCalled: false,
            autoExport: null,
            initUrl: '',
            fallBackRoute: 'appDashboard',
            headerButtons: null,
            headerLinks: null,
            uploaderConfig: {
                module: '',
                token: '',
                allowedExtensions: '',
                allowedMaxFileSize: null,
                maxNoOfFiles: 5,
                uuid: uuid(),
            },
        }
    },
    watch: {
        $route(val, oldVal) {
            if(oldVal.params.uuid !== val.params.uuid) {
                this.isLoading = true
                this.uuid = val.params.uuid
                if(this.getInitialDataCalled) {
                    this.getInitialData()
                }
            }
        },
    },
    computed: {
        ...mapGetters('config', [
            'vars',
            'configs',
            'allowExtraInput',
        ]),
        ...mapGetters('user', [
            'hasPermission',
        ]),
    },
    methods: {
        ...mapActions('common', [
            'Init',
            'InitSub',
            'Get',
            'GetList',
            'Destroy',
            'SetMeta',
            'SetFilters',
            'Custom',
            'GetPreRequisite',
            'ResetFilters',
            'Update',
            'SetPageHeader',
        ]),
        ...mapActions('config', [
            'SetUiConfig',
            'SetConfig',
        ]),
        fillPreRequisite(response) {
            this.preRequisite.objForEach((value, key) => {
                this.preRequisite[key] = response.hasOwnProperty(key) ? response[key] : value
            })
        },
        setEntityData(response) {
            if(this.entityKey && response.hasOwnProperty(this.entityKey)) {
                this.entity = response[this.entityKey]
            } else {
                this.entity = response
            }
        },
        setUploaderConfig(uploadConfig) {
            this.uploaderConfig.objForEach((value, key) => {
                this.uploaderConfig[key] = uploadConfig.hasOwnProperty(key) ? uploadConfig[key] : value
            })
        },
        async getPreRequisite(callbackFn) {
            this.isLoading = true
            try {
                let response = await this.GetPreRequisite()
                this.fillPreRequisite(response)

                if(_.isObject(response) && response.hasOwnProperty('uploadConfig')) {
                    this.setUploaderConfig(response.uploadConfig)
                }

                if (typeof this.afterGetPreRequisite === "function") {
                    this.afterGetPreRequisite()
                }

                if(callbackFn) {
                    this.$nextTick(() => {
                        callbackFn()
                    })
                }

                this.isLoading = false
                return response
            } catch (error) {
                this.isLoading = false
                formUtil.handleErrors(error)
            }
        },
        async getInitialData(callbackFn) {
            this.isLoading = true
            this.getInitialDataCalled = true
            try {
                let response = await this.Get({ uuid: this.uuid })
                this.setEntityData(response)

                if (this.pageTitleProperty) {
                    this.pageTitle = this.entity[this.pageTitleProperty] + ' - ' + this.$t(this.$route.meta.title)
                }
                if (this.subTitleProperty) {
                    this.subTitle = this.entity[this.subTitleProperty]
                }

                if (this.afterGetInitialData && typeof this.afterGetInitialData === "function") {
                    this.afterGetInitialData(response)
                }

                if(callbackFn) {
                    this.$nextTick(() => {
                        callbackFn(response)
                    })
                }

                if(this.autoExport) {
                    setTimeout(() => {
                        this.$nextTick(() => {
                            if(!this.formData || !this.formData.hasOwnProperty('loaded') || this.formData.loaded) {
                                this.export()
                            }
                        })
                    }, 2000)
                }

                this.isLoading = false
                return response
            } catch (error) {
                this.isLoading = false
                formUtil.handleErrors(error)
                this.$router.push({ name: this.fallBackRoute })
            }
        },
        getHeaderOptions() {
            let buttons = []
            if (this.routesRequired && this.routesRequired.add) {
                if (typeof this.permissionsRequired === 'object' && this.permissionsRequired !== null && this.permissionsRequired.add) {
                    buttons.push(headerMixins.addButton(this.routesRequired.add, this.permissionsRequired.add))
                } else if (this.permissionsRequired) {
                    buttons.push(headerMixins.addButton(this.routesRequired.add, this.permissionsRequired))
                } else {
                    buttons.push(headerMixins.addButton(this.routesRequired.add))
                }
            }
            if (this.routesRequired && this.routesRequired.edit) {
                if (typeof this.permissionsRequired === 'object' && this.permissionsRequired !== null && this.permissionsRequired.edit) {
                    buttons.push(headerMixins.editButton(this.routesRequired.edit, this.permissionsRequired.edit))
                } else if (this.permissionsRequired) {
                    buttons.push(headerMixins.editButton(this.routesRequired.edit, this.permissionsRequired))
                } else {
                    buttons.push(headerMixins.editButton(this.routesRequired.edit))
                }
            }

            if (this.routesRequired && this.routesRequired.config) {
                if (typeof this.permissionsRequired === 'object' && this.permissionsRequired !== null && this.permissionsRequired.config) {
                    buttons.push(headerMixins.configButton(this.routesRequired.config, this.permissionsRequired.config))
                } else if (this.permissionsRequired) {
                    buttons.push(headerMixins.configButton(this.routesRequired.config, this.permissionsRequired))
                } else {
                    buttons.push(headerMixins.configButton(this.routesRequired.config))
                }
            }

            if (this.headerButtons) {
                buttons = buttons.concat(this.headerButtons)
            }

            let links = []
            links.push(headerMixins.printOption())
            links.push(headerMixins.exportPdfOption())

            if (this.headerLinks) {
                links = links.concat(this.headerLinks)
            }

            return {
                hideLinks: this.hideHeaderLinks || false,
                buttons,
                links,
                title: this.pageTitle || '',
                subTitle: this.pageTitle ? this.subTitle || '' : '',
            }
        },
        getKeyBindingOptions() {
            let opts = {
                ...headerMixins.commonKeyBindings
            }
            if (this.routesRequired && this.routesRequired.add) {
                opts['key_a'] = this.routesRequired.add
            }
            if (this.routesRequired && this.routesRequired.edit) {
                opts['key_e'] = this.routesRequired.edit
            }
            return opts
        },
        applyPageHeader() {
            let pageHeaderOptions = Object.assign({}, this.getHeaderOptions(), this.header || {})
            let keyBindings = Object.assign({}, this.getKeyBindingOptions(), this.keyBindings || {})

            this.SetPageHeader(pageHeaderOptions)
            this.SetConfig({
                keyBindings: keyBindings,
            })

            this.updatePageTitle()
        },
        updatePageTitle() {
            if (!this.pageTitle || this.pageTitle.length < 1) {
                return
            }
            let appName = window.kmenv.name
            appName = this.configs && this.configs.basic && this.configs.basic.appName ? this.configs.basic.appName : appName

            document.title = this.pageTitle + ' - ' + appName
        },
        async export (options) {
            this.isLoading = true
            try {
                let printTitle = `Printing ${this.dataTitle || ''}`
                if(this.printTitle) {
                    printTitle = this.printTitle
                }
                const printPreview = this.configs.system.printPreview
                this.$printComponent('printable', { title: printTitle, autoPrint: !printPreview, autoCloseAfterPrint: !printPreview })
            } catch (e) { }
            this.isLoading = false
        },
        doInit() {
            this.Init({ url: this.initUrl })

            if(this.initSubUrl) {
                this.InitSub({ url: (this.subUuid ? this.subUuid + '/' : '') + this.initSubUrl })
            }

            this.getInitialData(this.applyPageHeader)
        },
        getBalanceClass(balance) {
            let classText = balance > 0 ? 'text-success' : 'text-danger'
            classText = balance && Number(balance) != 0  ? classText : ''
            classText = classText + ' font-weight-600'
            return classText
        },
        momentFn(date, inFormat, outFormat) {
            return moment(date, inFormat || this.vars.serverDateFormat).format(outFormat || this.vars.defaultDateFormat)
        },
    },
    mounted() {
        EventBus.$off('EXPORT', this.export)
        EventBus.$on('EXPORT', this.export)

        if (this.$route.params.uuid) {
            this.uuid = this.$route.params.uuid
        }
        if (this.$route.params.subUuid) {
            this.subUuid = this.$route.params.subUuid
        }

        if(this.configs.system && this.configs.system.allowedFileExtensions) {
            this.uploaderConfig.allowedExtensions = this.configs.system.allowedFileExtensions
        }
        if(this.configs.system && this.configs.system.postMaxSize) {
            this.uploaderConfig.allowedMaxFileSize = this.configs.system.postMaxSize
        }

        if(this.$route.query && this.$route.query.hasOwnProperty('print')) {
            this.autoExport = true
        }

        this.doInit()
    },
    destroyed() {
        EventBus.$off('EXPORT', this.export)
    },
    beforeRouteEnter(to, from, next) {
        if (!to.params.uuid) {
            next({ name: from })
        } else {
            next()
        }
    },
}
