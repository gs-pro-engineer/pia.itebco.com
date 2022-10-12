import { mapGetters, mapActions } from 'vuex'
import * as ConfigAPI from '@api/config'
import { formatKeysToSnakeCase } from '@js/core/utils/formatter'

export default {
    components: {},
    data() {
        return {
            formData: {},
            formErrors: {},
            initialFormData: null,
            initianLength: 0,
            emptyFormData: null,
            entity: null,
            preRequisite: {},
            isLoading: true,
            useUserPreference: false,
            dataType: null,
            configType: '',
        }
    },
    computed: {
        ...mapGetters('config', {
            configsWithPreference: 'configs',
            configs: 'configsOriginal',
            vars: 'vars',
            allowExtraInput: 'allowExtraInput',
        }),
        formHasErrors() {
            let ans = false
            this.formErrors.objForEach(er => {
                ans = er !== '' ? true : ans
            })
            return ans
        },
    },
    methods: {
        ...mapActions('config', [
            'GetConfig',
        ]),
        ...mapActions('user', [
            'GetUser',
        ]),
        ...mapActions('navigation', [
            'Generate',
        ]),
        ...mapActions('common', [
            'Custom',
        ]),
        findActualValue(value, options, key = 'uuid') {
            return options.find(option => option[key] === value) || null
        },
        submit(preference = false) {
            if(formUtil.isUnchanged(this.initialFormData, this.formData)) {
                this.$toasted.info(this.$t('general.nothing_changed'), this.$toastConfig.info)
                return false
            }

            this.isLoading = true

            if(this.formData.hasOwnProperty('type')) {
                this.formData.type = this.formData.type.snakeCase()
            }

            const storeFn = preference === true || this.useUserPreference ? ConfigAPI.updateUserPref : (this.configType === 'module' ? ConfigAPI.updateModule : ConfigAPI.update)

            if (this.beforeSubmit && typeof this.beforeSubmit === "function") {
                const shouldProceed = this.beforeSubmit()
                if(shouldProceed === false) {
                    this.isLoading = false
                    return
                }
            }

            storeFn(this.formData)
                .then(response => {
                    const fnToCall = preference === true || this.useUserPreference ? this.GetUser : this.GetConfig
                    fnToCall()
                        .then(() => {
                            this.$toasted.success(response.message, this.$toastConfig)
                            this.initialFormData = _.cloneDeep(this.formData)
                            this.isLoading = false
                        })
                        .catch(error => {
                            this.isLoading = false
                            this.formErrors = formUtil.handleErrors(error)
                        })

                    if (typeof this.afterSubmit === "function") {
                        this.afterSubmit()
                    }
                    if (typeof this.afterSubmitSuccess === "function") {
                        this.afterSubmitSuccess()
                    }
                })
                .catch(error => {
                    this.isLoading = false
                    this.formErrors = formUtil.handleErrors(error)

                    if (typeof this.afterSubmit === "function") {
                        this.afterSubmit()
                    }
                    if (typeof this.afterSubmitError === "function") {
                        this.afterSubmitError()
                    }
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
            formUtil.unsavedCheckAlert(this.initialFormData, this.formData, next)
        },
        fillPreRequisite(response) {
            this.preRequisite.objForEach((value, key) => {
                this.preRequisite[key] = response.hasOwnProperty(key) ? response[key] : value
            })

            this.isLoading = false
        },
        fillFormData() {
            this.isLoading = true
            const configsToUse = this.useUserPreference ? this.configsWithPreference : this.configs
            if(this.formData.type && configsToUse[this.formData.type]) {
                this.formData = formUtil.assignValues(this.formData, configsToUse[this.formData.type])
            }

            if(this.formData.types && Array.isArray(this.formData.types)) {
                this.formData.types.forEach((value) => {
                    this.formData = formUtil.assignValues(this.formData, configsToUse[value])
                })
            }

            if(this.formData.override) {
                this.formData.objForEach((value, key) => {
                    if(value && _.isObject(value)) {
                        this.formData[key] = formUtil.assignValues(this.formData[key], configsToUse[key])
                    } else {
                        this.formData[key] = configsToUse[key] ? configsToUse[key] : value
                    }
                })
            }

            if (typeof this.addNewRow === "function" && typeof this.addNewRowIfNone === "function") {
                this.addNewRowIfNone()
            }

            this.isLoading = false
        },
        async getInitialData(callbackFn) {
            this.isLoading = true
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
    beforeDestroy () {
        delete this.formData
        delete this.formErrors
        delete this.preRequisite
    },
    beforeRouteLeave(to, from, next) {
        this.unsavedCheck(next)
    }
}
