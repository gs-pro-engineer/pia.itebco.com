import { mapGetters, mapActions } from 'vuex'
import { numberPadding } from '@core/utils'

export default {
    components: {},
    props: {
        pushToArr: {
            type: Boolean,
            default: false
        },
    },
    data() {
        return {
            formData: {},
            formErrors: {},
            initialFormData: null,
            emptyFormData: null,
            entity: null,
            preRequisite: {},
            isLoading: true,
            initUrl: '',
            dataType: null,
            dataTypeArr: null,
            propertyToMatch: null,
        }
    },
    computed: {
        ...mapGetters('config', [
            'configs',
            'vars',
        ]),
        codePrefix() {
            return this.formData.codePrefix
        },
        formHasErrors() {
            let ans = false
            this.formErrors.objForEach(er => {
                ans = er !== '' ? true : ans
            })
            return ans
        },
    },
    watch: {
        codePrefix: function(val) {
            if(this.preRequisite.codes) {
                const codeObj = this.preRequisite.codes.find(v => v.codePrefix === val)
                const codeDigit = this.configs[this.dataType].codeDigit

                if (codeObj) {
                    this.formData.codeNumber = numberPadding(codeObj.codeNumber + 1, codeDigit)
                } else {
                    this.formData.codeNumber = numberPadding(1, codeDigit)
                }
            }
        }
    },
    methods: {
        ...mapActions('common', [
            'Init',
            'Store',
            'GetPreRequisite',
            'Custom',
        ]),
        ...mapActions('config', [
            'SetUiConfig',
        ]),
        submit() {
            if(formUtil.isUnchanged(this.initialFormData, this.formData)) {
                this.$toasted.info(this.$t('general.nothing_changed'), this.$toastConfig.info)
                return false
            }

            this.isLoading = true
            this.Store(this.formData)
                .then(response => {
                    this.$toasted.success(response.message, this.$toastConfig)
                    this.initialFormData = _.cloneDeep(this.formData)
                    if(response.hasOwnProperty(this.dataType)) {
                        this.entity = response[this.dataType]
                    }
                    this.close(true)
                    this.isLoading = false
                })
                .catch(error => {
                    this.isLoading = false
                    this.formErrors = Object.assign(this.formErrors, formUtil.handleErrors(error))
                })
        },
        fillPreRequisite(response) {
            this.preRequisite.objForEach((value, key) => {
                this.preRequisite[key] = response.hasOwnProperty(key) ? response[key] : value
            })
            this.isLoading = false
        },
        async getInitialData(callbackFn) {
            this.isLoading = true
            try {
                const response = await this.GetPreRequisite()
                this.fillPreRequisite(response)

                if(this.configs[this.dataType]) {
                    this.$nextTick(() => {
                        this.formData.codePrefix = this.configs[this.dataType].codePrefix
                    })
                }

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
        close(stored) {
            if(stored === true) {
                this.$emit('close', Object.assign({}, (this.entity ? this.entity : this.formData), { dataType: this.dataType, dataTypeArr: this.dataTypeArr, propertyToMatch: this.propertyToMatch, dontMatch: this.entity ? true : false, push: this.pushToArr }))
            } else {
                this.$emit('close')
            }
            this.SetUiConfig({ modalSidebarShow: false })
        },
        addTag(newTag) {
            const tag = {
                name: newTag,
                slug: formUtil.generateSlug(newTag)
            }
            this.preRequisite.tags.push(tag)
            this.formData.tags.push(tag)
        },
    },
    mounted() {
        this.Init({ url: this.initUrl })
        this.initialFormData = _.cloneDeep(this.formData)
    },
    beforeDestroy () {
        delete this.formData
        delete this.formErrors
        delete this.preRequisite
    },
}
