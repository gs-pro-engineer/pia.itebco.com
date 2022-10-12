import * as ConfigAPI from '@api/config'
import { CollapseTransition } from 'vue2-transitions'
import { mapGetters, mapActions } from 'vuex'
import initialUiConfig from '@js/store/modules/sources/initial-ui-config'

export default {
    components: {
        CollapseTransition
    },
    data() {
        return {
            formData: {
                ...initialUiConfig,
                type: 'ui'
            },
            actions: {
                'leftSidebarStyle': {
                    'push-content': {
                        leftSidebarBackdrop: false,
                        leftSidebarShadow: false,
                        leftSidebarShow: true,
                    },
                    'push': {
                        leftSidebarShow: true,
                    },
                    'over': {
                        leftSidebarBackdrop: true,
                        leftSidebarShadow: true,
                        leftSidebarShow: true,
                    },
                    'folded': {
                        leftSidebarBackdrop: true,
                        leftSidebarShow: false,
                    },
                    'off-canvas': {
                        leftSidebarShow: true,
                    },
                },
                topNavbarHide: {
                    true: {
                        leftSidebarHeight: 'full',
                    },
                },
                leftSidebarHeight: {
                    'normal': {
                        topNavbarHide: false,
                    },
                },
                pageHeaderIsBoxed: {
                    true: {
                        pageHeaderBackgroundColor: 'primary',
                        colorScheme: 'custom',
                    },
                },
                pageHeaderBackgroundColor: {
                    'transparent': {
                        pageHeaderIsBoxed: false,
                    },
                    'any': {
                        colorScheme: 'custom',
                    },
                },
                pageBackgroundColor: {
                    'any': {
                        colorScheme: 'custom',
                    },
                },
                pageContainerBackgroundColor: {
                    'any': {
                        colorScheme: 'custom',
                    },
                },
                leftSidebarColor: {
                    'any': {
                        colorScheme: 'custom',
                    },
                },
                rightSidebarColor: {
                    'any': {
                        colorScheme: 'custom',
                    },
                },
                modalSidebarColor: {
                    'any': {
                        colorScheme: 'custom',
                    },
                },
                specialSidebarColor: {
                    'any': {
                        colorScheme: 'custom',
                    },
                },
                topNavbarColor: {
                    'any': {
                        colorScheme: 'custom',
                    },
                },
                colorScheme: {
                    'default': {
                        pageBackgroundColor: 'light',
                        pageContainerBackgroundColor: 'white',
                        pageHeaderBackgroundColor: 'transparent',
                        leftSidebarColor: 'dark-primary',
                        leftSidebarLogoLight: true,
                        rightSidebarColor: 'white',
                        modalSidebarColor: 'white',
                        specialSidebarColor: 'secondary',
                        topNavbarColor: 'black',
                        topNavbarLogoLight: true,
                    },
                    'white': {
                        pageBackgroundColor: 'white',
                        pageContainerBackgroundColor: 'white',
                        pageHeaderBackgroundColor: 'transparent',
                        leftSidebarColor: 'white',
                        leftSidebarLogoLight: false,
                        rightSidebarColor: 'white',
                        modalSidebarColor: 'white',
                        specialSidebarColor: 'white',
                        topNavbarColor: 'white',
                        topNavbarLogoLight: false,
                    },
                    'light': {
                        pageBackgroundColor: 'light',
                        pageContainerBackgroundColor: 'white',
                        pageHeaderBackgroundColor: 'transparent',
                        leftSidebarColor: 'white',
                        leftSidebarLogoLight: false,
                        rightSidebarColor: 'white',
                        modalSidebarColor: 'white',
                        specialSidebarColor: 'light',
                        topNavbarColor: 'white',
                        topNavbarLogoLight: false,
                    },
                    'dark': {
                        pageBackgroundColor: 'black',
                        pageContainerBackgroundColor: 'gray-darkest',
                        pageHeaderBackgroundColor: 'transparent',
                        leftSidebarColor: 'gray-darkest',
                        leftSidebarLogoLight: true,
                        rightSidebarColor: 'gray-darkest',
                        modalSidebarColor: 'black',
                        specialSidebarColor: 'black',
                        topNavbarColor: 'gray-darkest',
                        topNavbarLogoLight: true,
                    },
                    'semi-dark': {
                        pageBackgroundColor: 'gray-darkest',
                        pageContainerBackgroundColor: 'gray-darker',
                        pageHeaderBackgroundColor: 'transparent',
                        leftSidebarColor: 'dark-primary',
                        leftSidebarLogoLight: true,
                        rightSidebarColor: 'gray-darker',
                        modalSidebarColor: 'gray-darker',
                        specialSidebarColor: 'primary',
                        topNavbarColor: 'black',
                        topNavbarLogoLight: true,
                    },
                    'casual': {
                        pageBackgroundColor: 'light',
                        pageContainerBackgroundColor: 'white',
                        pageHeaderBackgroundColor: 'transparent',
                        leftSidebarColor: 'primary',
                        leftSidebarLogoLight: true,
                        rightSidebarColor: 'white',
                        modalSidebarColor: 'white',
                        specialSidebarColor: 'success',
                        topNavbarColor: 'dark-primary',
                        topNavbarLogoLight: true,
                    },
                    'business': {
                        pageBackgroundColor: 'light',
                        pageContainerBackgroundColor: 'white',
                        pageHeaderBackgroundColor: 'transparent',
                        leftSidebarColor: 'gray-darkest',
                        leftSidebarLogoLight: true,
                        rightSidebarColor: 'white',
                        modalSidebarColor: 'white',
                        specialSidebarColor: 'white',
                        topNavbarColor: 'white',
                        topNavbarLogoLight: false,
                    },
                }
            },
            formErrors: {},
            preRequisite: {},
            colors: [
                {
                    key: 'primary',
                    title: 'Primary'
                }, {
                    key: 'dark-primary',
                    title: 'Dark Primary'
                }, {
                    key: 'secondary',
                    title: 'Secondary'
                }, {
                    key: 'success',
                    title: 'Success'
                }, {
                    key: 'info',
                    title: 'Info'
                }, {
                    key: 'warning',
                    title: 'Warning'
                }, {
                    key: 'danger',
                    title: 'Danger'
                }, {
                    key: 'white',
                    title: 'White'
                }, {
                    key: 'light',
                    title: 'Light'
                }, {
                    key: 'dark',
                    title: 'Dark'
                }, {
                    key: 'gray-darker',
                    title: 'Darker'
                }, {
                    key: 'gray-darkest',
                    title: 'Darkest'
                }, {
                    key: 'black',
                    title: 'Black'
                }
            ],
            colorSchemes: [
                {
                    key: 'default',
                    title: 'Default'
                },
                {
                    key: 'white',
                    title: 'White'
                },
                {
                    key: 'light',
                    title: 'Light'
                },
                {
                    key: 'dark',
                    title: 'Dark'
                },
                {
                    key: 'semi-dark',
                    title: 'Semi Dark'
                },
                {
                    key: 'casual',
                    title: 'Casual'
                },
                {
                    key: 'business',
                    title: 'Business'
                },
            ],
            initialFormData: null,
            emptyFormData: null,
            readyForAction: false,
            isLoading: true,
            getInitialDataCalled: false,
        }
    },
    computed: {
        ...mapGetters('config', [
            'vars',
            'uiConfigs',
        ]),
        computedFormData() {
            return _.cloneDeep(this.formData)
        }
    },
    watch: {
        computedFormData: {
            deep: true,
            handler: _.debounce(function(v, o) {
                if(this.readyForAction) {
                    v = this.processActions(v, o)
                    this.formData.objForEach((value, key) => {
                        this.formData[key] = v[key]
                    })
                
                    this.SetUiConfig(v)
                }

                if (typeof this.afterSettingConfig === "function") { 
                    this.$nextTick(() => {
                        this.afterSettingConfig()
                    })
                }

                this.readyForAction = true;
            }, 500),
        },
    },
    methods: {
        ...mapActions('config', [
            'GetConfig',
        ]),
        ...mapActions('config', [
            'SetUiConfig',
        ]),
        processActions(val, oldVal) {
            this.actions.objForEach((actions, configKey) => {
                if(val[configKey] !== oldVal[configKey]) {
                    const toSet = actions[val[configKey]]
                    if(toSet) {
                        toSet.objForEach((value, key) => {
                            val[key] = value
                        })
                    }
                    const toSetOnAny = actions['any']
                    if(toSetOnAny) {
                        toSetOnAny.objForEach((value, key) => {
                            val[key] = value
                        })
                    }
                }
            })
            return val
        },
        findActualValue(value, options, key = 'uuid') {
            return options.find(option => option[key] === value) || null
        },
        submit() {
            if (formUtil.isUnchanged(this.initialFormData, this.formData)) {
                this.$toasted.info(this.$t('general.nothing_changed'), this.$toastConfig.info)
                return false
            }

            this.isLoading = true

            ConfigAPI.update(this.formData)
                .then(response => {
                    this.GetConfig()
                        .then(() => {
                            this.isLoading = false
                            if (this.getInitialDataCalled) {
                                this.getInitialData()
                            }
                            this.$toasted.success(response.message, this.$toastConfig.success)
                            this.initialFormData = Object.assign({}, this.formData)
                        })
                        .catch(error => {
                            this.isLoading = false
                            formUtil.handleErrors(error)
                        })
                })
                .catch(error => {
                    this.isLoading = false
                    this.formErrors = formUtil.handleErrors(error)
                })
        },
        reset() {
            formUtil.confirmAction()
                .then((result) => {
                    if (result.value) {
                        this.formData = Object.assign({}, this.formData, _.cloneDeep(this.initialFormData))
                    }
                })
        },
        unsavedCheck(next) {
            formUtil.unsavedCheckAlert(this.initialFormData, this.formData, (agreed) => {
                if(agreed) {
                    this.SetUiConfig(this.initialFormData)
                    next()
                } else if(agreed !== false) {
                    next()
                }
            })
        },
        fillPreRequisite(response) {
            this.preRequisite.objForEach((value, key) => {
                this.preRequisite[key] = response.hasOwnProperty(key) ? response[key] : value
            })
            this.isLoading = false
        },
        fillFormData() {
            this.isLoading = true
            if(this.uiConfigs) {
                this.formData = formUtil.assignValues(this.formData, this.uiConfigs)
            }
            this.isLoading = false
        }, 
        async getInitialData(callbackFn) {
            this.isLoading = true
            this.getInitialDataCalled = true
            try {
                const response = await ConfigAPI.getPreRequisite(Object.keys(this.preRequisite).join(','))
                this.fillPreRequisite(response)
                
                if(callbackFn) {
                    this.$nextTick(() => {
                        callbackFn()
                    })
                }
                return response
            } catch (error) {
                this.isLoading = false
                this.formErrors = formUtil.handleErrors(error)
                throw error
            }
        },
    },
    mounted() {
        this.fillFormData()
        this.initialFormData = _.cloneDeep(this.formData)
    },
    beforeDestroy() {
        delete this.formData
        delete this.formErrors
        delete this.preRequisite
    },
    beforeRouteLeave(to, from, next) {
        this.unsavedCheck(next)
    }
}
