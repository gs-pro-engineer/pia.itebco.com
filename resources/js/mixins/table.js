import * as headerMixins from './header'
import { mapGetters, mapActions } from 'vuex'
import Swal from '@core/configs/sweet-alert'
import EventBus from '@js/event-bus'

export default {
    data() {
        return {
            uuid: null,
            entity: null,
            fields: [],
            preRequisite: {},
            preRequisiteFetchList: [],
            showFilters: false,
            isInitialized: false,
            isLoading: false,
            isFetching: false,
            noMoreData: false,
            getInitialDataCalled: false,
            gotError: false,
            selectedRows: [],
            formErrors: {},
            customFilters: {},
            filtersCastBoolean: [],
            appendToQuery: {},
            filtersOptions: {
                name: '',
            },
            sortOptions: {
                hasScroll: false,
            },
            columnsOptions: {
                hasScroll: false,
            },
            exportOptions: {},
            initUrl: '',
            initSubUrl: null,
            dataType: null,
            printOptions: null,
            headerButtons: null,
            headerFloaters: null,
            headerLinks: null,
            hideHeaderLinks: false,
            hideSortOptions: false,
            hideColumnOptions: false,
            hideFilterButton: false,
            feedTable: false,
        }
    },
    computed: {
        ...mapGetters('common', [
            'entities',
            'feed',
            'filters',
            'columns',
            'others',
        ]),
        ...mapGetters('config', [
            'configs',
            'uiConfigs',
            'vars',
            'allowExtraInput',
        ]),
        ...mapGetters('user', [
            'hasRole',
            'hasPermission',
            'hasAnyPermission',
            'profile',
        ]),
        isFiltered() {
            const query = this.$route.query
            return query.filtered === 'true' ? true : query.filtered === 'false' ? false : query.filtered
        },
        selectAllRows: {
            get: function() {
                return this.entities && this.entities.data.every(({ uuid }) => this.selectedRows.indexOf(uuid) !== -1)
            },
            set: function(value) {
                let selected = this.selectedRows
                if (value) {
                    this.entities.data.forEach(ent => {
                        if (selected.indexOf(ent.uuid) === -1) {
                            selected.push(ent.uuid)
                        }
                    })
                } else {
                    this.entities.data.forEach(ent => {
                        const index = selected.indexOf(ent.uuid)
                        if (index !== -1) {
                            selected.splice(index, 1)
                        }
                    })
                }
                this.selectedRows = selected
            }
        },
        showTagsForm() {
            return !!this.selectedRows.length
        },
        tableMeta() {
            if(this.uiConfigs.hideSecureContent && this.filterFn && _.isFunction(this.filterFn)) {
                let arrayOfSecuredContent = this.entities.data.filter(this.filterFn)
                arrayOfSecuredContent = arrayOfSecuredContent.length

                return {
                    ...this.entities.meta,
                    to: (this.entities.meta.to-arrayOfSecuredContent),
                    total: (this.entities.meta.total-arrayOfSecuredContent),
                }
            }
            return this.entities.meta
        },
    },
    watch: {
        $route(val, oldVal) {
            if(this.initSubUrl && this.$route.params.uuid && val.params.uuid !== oldVal.params.uuid) {
                this.doInit()
                this.getEntityData()
            } else {
                this.updatePageMeta()
                this.applyPageHeader()
            }
        },
        columns(val, oldVal) {
            if (val.fields) {
                this.fields = val.fields
                this.refreshTable()
            }
        },
    },
    methods: {
        ...mapActions('common', [
            'Init',
            'InitSub',
            'Get',
            'GetList',
            'GetFeed',
            'Destroy',
            'Update',
            'SetMeta',
            'SetFilters',
            'Custom',
            'GetPreRequisite',
            'ResetFilters',
            'SetPageHeader',
        ]),
        ...mapActions('config', [
            'SetUiConfig',
            'SetConfig',
        ]),
        itemsProvider(context) {
            this.isLoading = true

            const query = {
                ...this.filters,
                currentPage: this.entities.meta.currentPage,
                perPage: this.entities.meta.perPage,
                ...this.appendToQuery,
                sortBy: this.filters.sortBy ? this.filters.sortBy.snakeCase() : this.filters.sortBy,
            }

            this.gotError = false
            return this.GetList(query)
                .then(response => {
                    return (response.data)
                })
                .catch(error => {
                    this.isLoading = false
                    formUtil.handleErrors(error)
                    this.gotError = true
                    return []
                })
        },
        getFeed: _.debounce(function() {
            if(!this.feedTable || this.noMoreData) {
                return
            }

            this.isFetching = true

            const query = {
                ...this.filters,
                perPage: this.feed.meta.perPage,
                cursor: this.feed.meta.cursor || true,
                ...this.appendToQuery,
                sortBy: this.filters.sortBy ? this.filters.sortBy.snakeCase() : this.filters.sortBy,
            }

            this.gotError = false
            return this.GetFeed(query)
                .then(response => {
                    if(response.meta && response.meta.hasMorePages && response.data && response.data.length) {
                        this.noMoreData = false
                    } else {
                        this.noMoreData = true
                    }

                    this.isInitialized = true
                    this.isFetching = false
                    this.isLoading = false
                    return (response.data)
                })
                .catch(error => {
                    this.noMoreData = false
                    this.isInitialized = true
                    this.isFetching = false
                    this.isLoading = false
                    formUtil.handleErrors(error)
                    this.gotError = true
                    return []
                })
        }, 1000),
        updatePageMeta(initTable = true, forceRefresh = false) {
            const query = this.$route.query
            const paginationMeta = {
                currentPage: parseInt(query.currentPage || 1),
                perPage: parseInt(query.perPage || this.configs.system.perPage) ,
                cursor: query.cursor || this.entities.meta.cursor || true,
            }

            let filtersMeta = this.filters

            query.objForEach((value, key) => {
                filtersMeta[key] = value
            })

            if(this.filtersCastBoolean && this.filtersCastBoolean.length) {
                this.filtersCastBoolean.objForEach((value) => {
                    filtersMeta[value] = filtersMeta[value] === 'true' ? true : (filtersMeta[value] === 'false' ? false : filtersMeta[value])
                })
            }

            if(this.customFilters) {
                this.customFilters.objForEach((value, key) => {
                    filtersMeta[key] = value
                })
            }

            this.SetMeta(paginationMeta)
            this.SetFilters(filtersMeta)

            if (initTable) {
                if (this.isInitialized) {
                    this.refreshTable()
                    this.isInitialized = true
                } else {
                    this.isInitialized = true
                }
            } else if(forceRefresh) {
                this.refreshTable()
            }
        },
        refreshTable() {
            if (this.$refs && this.$refs.hasOwnProperty('btable') && this.$refs.btable) {
                this.$refs.btable.refresh()
            }
            this.getFeed()
        },
        refreshTableIfRoute(route) {
            if(this.$route.name === route) {
                this.refreshTable()
            }
            this.getFeed()
        },
        toggleFilter() {
            this.showFilters = !this.showFilters
        },
        deleteEntity(entity) {
            formUtil.confirmAction()
                .then((result) => {
                    if (result.value) {
                        this.isLoading = true
                        this.Destroy(entity)
                            .then(response => {
                                this.isLoading = false
                                this.$toasted.success(response.message, this.$toastConfig)
                                this.$nextTick(() => {
                                    this.refreshTable()

                                    if (typeof this.getInitialData === "function" && this.getInitialDataCalled && this.getInitialDataCalledAfterDeleting) {
                                        this.getInitialData()
                                    }
                                })
                            })
                            .catch(error => {
                                this.isLoading = false
                                this.isInitialized = true
                                this.formErrors = formUtil.handleErrors(error)
                            })
                    } else {
                        result.dismiss === Swal.DismissReason.cancel
                    }
                })
        },
        fillFilterPreRequisite() {
            if(! (this.isFiltered && this.filters && this.preRequisiteFetchList && this.preRequisiteFetchList.length)) {
                return
            }
            this.preRequisiteFetchList.forEach(obj => {
                if(obj.filterKey && obj.preRequisiteKey && obj.url) {
                    this.Custom({
                            url: obj.url + this.filters[obj.filterKey],
                            method: 'get',
                        })
                        .then(response => {
                            if(response) {
                                this.preRequisite[obj.preRequisiteKey].push(response)
                            }
                        })
                }
            })
        },
        fillPreRequisite(response) {
            this.preRequisite.objForEach((value, key) => {
                this.preRequisite[key] = response.hasOwnProperty(key) ? response[key] : value
            })
            this.isLoading = false
        },
        async getInitialData() {
            this.isLoading = true
            this.getInitialDataCalled = true
            try {
                const query = this.$route.query
                let preRequisiteQuery = {}
                if(this.isFiltered && query && this.preRequisiteFetchList && this.preRequisiteFetchList.length) {
                    this.preRequisiteFetchList.forEach(obj => {
                        if(obj.filterKey && query[obj.filterKey]) {
                            preRequisiteQuery[obj.filterKey] = query[obj.filterKey]
                        }
                    })
                }
                const response = await this.GetPreRequisite({
                    ...this.customFilters,
                    ...preRequisiteQuery,
                })
                this.fillPreRequisite(response)
                this.updatePageMeta()
                this.fillFilterPreRequisite()

                if (typeof this.afterGetInitialData === "function") {
                    this.afterGetInitialData()
                }

                return response
            } catch (error) {
                this.isLoading = false
                this.formErrors = formUtil.handleErrors(error)
                throw error
            }
        },
        getEntityData(callbackFn) {
            this.isLoading = true

            if(this.initSubUrl && this.$route.params.uuid) {
                this.uuid = this.$route.params.uuid

                return this.Get({ uuid: this.uuid })
                    .then(response => {
                        this.entity = response

                        if(response.name) {
                            this.pageTitle = response.name
                            this.subTitle = response.name ? this.subTitle : ''
                            this.applyPageHeader()
                        }

                        this.doInitSub()
                        this.updatePageMeta()
                        this.isLoading = false

                        if (this.afterGetEntityData && typeof this.afterGetEntityData === "function") {
                            this.afterGetEntityData()
                        }

                        if (callbackFn && typeof callbackFn === "function") {
                            callbackFn()
                        }
                    })
                    .catch(error => {
                        this.isLoading = false
                        formUtil.handleErrors(error)
                        this.$router.back()
                    })
            } else {
                this.isLoading = false
                this.$router.back()
            }
        },
        reloadEntityData(callbackFn) {
            this.isLoading = true

            if(this.initSubUrl && this.$route.params.uuid) {
                this.uuid = this.$route.params.uuid

                return this.Get({ uuid: this.uuid })
                    .then(response => {
                        this.entity = response

                        if(response.name) {
                            this.pageTitle = response.name
                            this.subTitle = response.name ? this.subTitle : ''
                            this.applyPageHeader()
                        }

                        this.isLoading = false

                        if (callbackFn && typeof callbackFn === "function") {
                            callbackFn()
                        }
                    })
                    .catch(error => {
                        this.isLoading = false
                        formUtil.handleErrors(error)
                        this.$router.back()
                    })
            } else {
                this.isLoading = false
                this.$router.back()
            }
        },
        applyTags(formData) {
            this.Custom({
                    url: `/tags`,
                    method: 'post',
                    data: {
                        ...formData,
                        type: (this.tagType || this.dataType).kebabCase(),
                        uuids: this.selectedRows
                    }
                })
                .then(response => {
                    this.selectedRows = []
                    this.$toasted.success(response.message, this.$toastConfig)

                    if(this.refreshAfterTagsApplied) {
                        this.$nextTick(() => {
                            this.refreshTable()
                        })
                    }
                    this.isLoading = false
                })
                .catch(error => {
                    this.isLoading = false
                    this.formErrors = formUtil.handleErrors(error)
                })
        },
        getSortOptionsArray() {
            return this.fields.filter(f => f.sort)
                .map(f => {
                    return {
                        label: f.label,
                        sort: f.sort,
                        thClass: f.thClass,
                        tdClass: f.tdClass,
                    }
                })
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

            if(!this.hideFilterButton) {
                buttons.push(headerMixins.filterButton())
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


            let floaters = []

            if (this.headerFloaters) {
                headerFloaters = headerFloaters.concat(this.headerFloaters)
            }

            let links = []
            if (this.routesRequired && this.routesRequired.import) {
                if (typeof this.permissionsRequired === 'object' && this.permissionsRequired !== null && this.permissionsRequired.import) {
                    links.push(headerMixins.importOption(this.routesRequired.import, this.permissionsRequired.import))
                } else if (this.permissionsRequired) {
                    links.push(headerMixins.importOption(this.routesRequired.import, this.permissionsRequired))
                }
            }

            if (this.routesRequired && this.routesRequired.config) {
                if (typeof this.permissionsRequired === 'object' && this.permissionsRequired !== null && this.permissionsRequired.config) {
                    links.push(headerMixins.configOption(this.routesRequired.config, this.permissionsRequired.config))
                } else if (this.permissionsRequired) {
                    links.push(headerMixins.configOption(this.routesRequired.config, this.permissionsRequired))
                }
            }

            links.push(headerMixins.printOption())
            links.push(headerMixins.exportPdfOption())
            links.push(headerMixins.exportCsvOption())
            // links.push(headerMixins.exportExcelCsvOption())
            links.push(headerMixins.exportXlsOption())

            if (this.headerLinks) {
                links = links.concat(this.headerLinks)
            }

            return {
                hideLinks: this.hideHeaderLinks || false,
                buttons,
                floaters,
                sort: this.hideSortOptions ? false : headerMixins.getSortOptions(this.sortOptions || {}, this.getSortOptionsArray()),
                links,
                columns: this.hideColumnOptions ? false : this.columnsOptions,
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
            return opts
        },
        applyPageHeader() {
            let pageHeaderOptions = Object.assign({}, this.getHeaderOptions(), this.header || {})
            let keyBindings = Object.assign({}, this.getKeyBindingOptions(), this.keyBindings || {})

            this.SetPageHeader(pageHeaderOptions)
            this.SetConfig({
                keyBindings: keyBindings,
            })
        },
        async export (options) {
            this.isLoading = true
            const transformers = await import('@js/helpers/transformers' /* webpackChunkName: "helpers/transformers" */ )
            const getFinalValue = (item, key) => {
                let finalVal
                const keys = key.split('.')
                if(keys && keys.length) {
                    keys.forEach((k, i) => {
                        finalVal = finalVal ? finalVal[k] : (i === 0 ? item[k] : null)
                    })
                } else {
                    finalVal = item[key]
                }
                return finalVal
            }

            let exportUtil
            let exportOptions = this.exportOptions || {}
            let fields = this.exportPdfFields || this.fields.filter(f => (f.label || f.headerTitle) && !f.cantExport)

            if(this.uiConfigs.hideSecureContent) {
                const secureContentPattern = new RegExp('secure-content', 'igm')
                fields = fields.filter(f => !secureContentPattern.test(f.thClass) && !secureContentPattern.test(f.tdClass))
            }

            let content = []
            let excelStrings = false
            let fileTitle = ''
            let fileName = moment()
                .unix()

            if (this.$route.meta.title) {
                fileTitle = this.$route.meta.trans ? $t(this.$route.meta.trans, { attribute: $t(this.$route.meta.title) }) : $t(this.$route.meta.title)
                fileName = fileTitle.toLowerCase()
                    .replace(/\s+/g, '-') + '-' + fileName
            }

            if (options.type === 'xls-csv') {
                options.type = 'csv'
                excelStrings = true
            }

            if (options.type === 'pdf' || options.type === 'print') {
                exportUtil = await import('@core/utils/export/pdf' /* webpackChunkName: "utils/export-pdf" */ )
                const columns = fields.map(f => {
                    return {
                        header: f.label || f.headerTitle,
                        dataKey: f.key,
                    }
                })

                content = this.entities.data.map(item => {
                    let row = {}
                    fields.forEach(field => {
                        let ft = field.transformer
                        let value = getFinalValue(item, field.key)
                        if(ft && (value || value === false)) {
                            ft = _.isArray(ft) ? ft : [ft]
                            ft.forEach(ftrans => {
                                const func = _.isFunction(ftrans) ? ftrans : transformers[ftrans]
                                value = field.transformerOpts ? func(value, field.transformerOpts) : func(value, item)
                            })
                        }

                        row[field.key] = value || ""
                    })
                    return row
                })

                if(options.type === 'pdf') {
                    exportUtil.downloadPdfFile(fileName, fileTitle, columns, content, exportOptions)
                } else {
                    exportUtil.printTable(fileTitle, columns, content, exportOptions)
                }

            } else {
                exportUtil = await import('@core/utils/export/csv' /* webpackChunkName: "utils/export-csv" */ )
                content = this.entities.data.map(item => {
                    let row = {}
                    fields.forEach(field => {
                        let ft = field.transformer
                        let value = getFinalValue(item, field.key)
                        if(ft && (value || value === false)) {
                            ft = _.isArray(ft) ? ft : [ft]
                            ft.forEach(ftrans => {
                                const func = _.isFunction(ftrans) ? ftrans : transformers[ftrans]
                                value = field.transformerOpts ? func(value, field.transformerOpts) : func(value, item)
                            })
                        }

                        row[field.label] = value || ""
                    })
                    return row
                })

                exportUtil.downloadFile(content, options.type, fileName)
            }

            this.isLoading = false
        },
        doInitSub() {
            this.uuid = this.$route.params.uuid
            if(!this.uuid) {
                this.isLoading = false
                this.$router.back()
            }
            this.InitSub({
                url: this.uuid + '/' + this.initSubUrl,
                filters: this.filtersOptions,
                columns: this.fields,
            })
        },
        doInit() {
            this.Init({
                url: this.initUrl,
                filters: this.filtersOptions,
                columns: this.fields,
            })

            this.applyPageHeader()
        },
        clearFilters() {
            let filterOptionsHasDefaultValues = false

            this.filtersOptions.objForEach((value, key) => {
                if(value !== '') {
                    filterOptionsHasDefaultValues = true
                }
            })

            if(filterOptionsHasDefaultValues) {
                this.ResetFilters()
                this.SetFilters({
                    ...this.filters,
                    ...this.filtersOptions,
                })
            } else {
                this.ResetFilters()
            }

            if(this.$route.query && this.$route.query.filtered) {
                this.$router.push({ path: this.$route.path }).catch(err => {})
            }

            if(this.afterClearFilters && _.isFunction(this.afterClearFilters)) {
                this.afterClearFilters()
            }
        },
        rowClickHandler(opts, item) {
            if(opts.action && typeof opts.action === "function") {
                opts.action(opts, item)
            } else if(opts.route) {
                this.$router.push({ name: opts.route, params: { uuid: item.uuid } })
            } else if(opts.getRoute && _.isFunction(opts.getRoute)) {
                const route = opts.getRoute(item)
                if(route) {
                    this.$router.push({ name: route, params: { uuid: item.uuid } })
                }
            }
        },
        getBalanceClass(balance) {
            let classText = balance > 0 ? 'text-success' : 'text-danger'
            classText = balance && Number(balance) != 0  ? classText : 'text-muted'
            classText = classText + ' font-weight-600'
            return classText
        },
        getPopoverContent(rowItem, type = 'list', entityKey, entityProperty = 'name', customContentFn) {
            if (type === 'list' && entityKey && entityProperty) {
                let content = this.getDetailsList(rowItem[entityKey], entityProperty)
                content = `<ul>${content.join()}</ul>`
                return content
            } else if (type === 'custom' && customContentFn && typeof customContentFn === "function") {
                return customContentFn(rowItem)
            }
        },
        getDetailsList(entities, key) {
            return entities.map(entity => {
                return `<li>${entity[key]}</li>`
            })
        },
        momentFn(date, inFormat, outFormat) {
            return moment(date, inFormat || this.vars.serverDateFormat).format(outFormat || this.vars.defaultDateFormat)
        },
    },
    mounted() {
        EventBus.$off('REFRESH_TABLE', this.refreshTableIfRoute)
        EventBus.$on('REFRESH_TABLE', this.refreshTableIfRoute)
        EventBus.$off('TOGGLE_FILTER', this.toggleFilter)
        EventBus.$on('TOGGLE_FILTER', this.toggleFilter)
        EventBus.$off('CLEAR_FILTERS', this.clearFilters)
        EventBus.$on('CLEAR_FILTERS', this.clearFilters)
        EventBus.$off('EXPORT', this.export)
        EventBus.$on('EXPORT', this.export)

        if(this.isFiltered) {
            this.showFilters = true
        }

        this.doInit()
    },
    destroyed() {
        EventBus.$off('REFRESH_TABLE', this.refreshTableIfRoute)
        EventBus.$off('TOGGLE_FILTER', this.toggleFilter)
        EventBus.$off('CLEAR_FILTERS', this.clearFilters)
        EventBus.$off('EXPORT', this.export)
    },
}
