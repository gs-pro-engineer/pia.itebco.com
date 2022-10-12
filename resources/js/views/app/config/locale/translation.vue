<template>
    <base-container boxed with-loader :is-loading="isLoading" :loader-color="vars.loaderColor" class="p-0 flex-grow">
        <div class="d-flex justify-content-between">
            <div class="text-left p-4">
                <base-button v-if="showReloadBtn" type="button" design="light" size="md" @click="reloadPage"><i class="fas fa-sync-alt"></i> {{ $t('general.reload_page') }}</base-button>
            </div>

            <div class="text-right p-4">
                <base-dropdown tag="div" direction="down" menu-classes="show-dropdown-up" position="right">
                    <base-button slot="title" type="button" data-toggle="dropdown" role="button" design="info" size="md"><i class="fas fa-boxes"></i> {{ $t(activeModule+'.'+activeModule) }} <i class="fas fa-chevron-down"></i></base-button>

                    <a v-for="mod in preRequisite.modules" :key="mod" class="dropdown-item" @click="updateRouteQuery({module: mod})">
                        {{ $t(mod+'.'+mod) }}
                        <i v-if="mod == activeModule" class="fas fa-check pull-right"></i>
                    </a>
                </base-dropdown>
            </div>
        </div>

        <div class="table-responsive table-wrapper">
            <form @submit.prevent="submit">
                <table class="table b-table table-striped table-hover b-table-stacked-sm">
                    <thead>
                        <tr>
                            <th>{{ $t('config.locale.key') }}</th>
                            <th v-for="locale in preRequisite.locales" :key="locale.locale">{{ `${locale.name} (${locale.locale})` }}</th>
                        </tr>
                    </thead>
                    <tbody>
                        <template v-for="(value, key) in formData.words['en']">

                            <template v-if="isString(value)">
                                <tr :key="key">
                                    <td>{{ key }}</td>
                                    <td v-for="locale in preRequisite.locales" :key="locale.locale" @dblclick="toggleLocaleEditModal(locale.locale, key)">{{ getTranslation(locale.locale, key) }}</td>
                                </tr>
                            </template>

                            <template v-if="isObject(value)">

                                <template v-for="(secondValue, secondKey) in value">
                                    <template v-if="isString(secondValue)">
                                        <tr :key="`${key}${secondKey}`">
                                            <td>{{ key }} -> {{ secondKey }}</td>
                                            <td v-for="locale in preRequisite.locales" :key="locale.locale" @dblclick="toggleLocaleEditModal(locale.locale, key, secondKey)">{{ getTranslation(locale.locale, key, secondKey) }}</td>
                                        </tr>
                                    </template>

                                    <template v-if="isObject(secondValue)">

                                        <template v-for="(thirdValue, thirdKey) in secondValue">
                                            <template v-if="isString(thirdValue)">
                                                <tr :key="`${key}${secondKey}${thirdKey}`">
                                                    <td>{{ key }} -> {{ secondKey }} -> {{ thirdKey }}</td>
                                                    <td v-for="locale in preRequisite.locales" :key="locale.locale" @dblclick="toggleLocaleEditModal(locale.locale, key, secondKey, thirdKey)">{{ getTranslation(locale.locale, key, secondKey, thirdKey) }}</td>
                                                </tr>
                                            </template>

                                            <template v-if="isObject(thirdValue)">
                                                <tr v-for="(fourthValue, fourthKey) in thirdValue" :key="`${key}${secondKey}${thirdKey}${fourthKey}`">
                                                    <td>{{ key }} -> {{ secondKey }} -> {{ thirdKey }} -> {{ fourthKey }}</td>
                                                    <td v-for="locale in preRequisite.locales" :key="locale.locale" @dblclick="toggleLocaleEditModal(locale.locale, key, secondKey, thirdKey, fourthKey)">{{ getTranslation(locale.locale, key, secondKey, thirdKey, fourthKey) }}</td>
                                                </tr>
                                            </template>
                                        </template>


                                    </template>
                                </template>
                            </template>
                        </template>
                    </tbody>
                </table>

            </form>
        </div>

        <b-modal size="md" centered lazy :busy="isModalLoading" ref="localeEditModal" v-model="showLocaleEditModal" no-close-on-backdrop no-close-on-esc @ok="onLocaleEditModalOK" @hidden="onLocaleEditModalHidden" @shown="onLocaleEditModalShown">
            <template slot="modal-header">
                <h5 class="modal-title">{{ $t('config.locale.translation') }}</h5>
            </template>
            <div>
                <div class="row">
                    <div class="col-12">
                        <base-input class="mb-5" :label="`${modalData.label} (${modalData.locale})`" type="text" v-model="modalData.translation" :error.sync="formErrors.translation" name="newTranslation" ref="newTranslation" />
                    </div>
                </div>
                <p class="text-muted small m-0">In English - {{ modalData.translationInEn }}</p>
            </div>
        </b-modal>

    </base-container>
</template>

<script>
    import { mapGetters, mapActions } from 'vuex'
    import * as headerMixins from '@mixins/header'

    export default {
        components: {
        },
        data() {
            return {
                activeModule: 'auth',
                formData: {
                    words: {},
                },
                preRequisite: {
                    locales: [],
                    modules: [],
                },
                formErrors: {},
                initialFormData: null,
                emptyFormData: null,
                showLocaleEditModal: false,
                isModalLoading: true,
                modalData: {
                    locale: 'en',
                    label: null,
                    translationInEn: null,
                    translation: null,
                    firstKey: null,
                    secondKey: null,
                    thirdKey: null,
                    fourthKey: null,
                },
                initialModalData: {},
                isLoading: false,
                showReloadBtn: false,
            }
        },
        computed: {
            ...mapGetters('config', [
                'vars',
            ]),
        },
        methods: {
            ...mapActions('common', [
                'Custom',
                'SetPageHeader',
            ]),
            ...mapActions('config', [
                'SetUiConfig',
            ]),
            getInitialData() {
                this.isLoading = true
                if(this.$route.query && this.$route.query.module) {
                    this.activeModule = this.$route.query.module
                }

                this.Custom({
                        url: 'config/locales/pre-requisite',
                        params: {
                            module: this.activeModule,
                        },
                    })
                    .then(response => {
                        this.preRequisite.locales = _.cloneDeep(response.locales)
                        this.preRequisite.modules = _.cloneDeep(response.modules)

                        response.words.objForEach((words, loc) => {
                            if(_.isObject(words)) {
                                this.formData.words[loc] = Object.assign({}, words)
                            } else {
                                this.formData.words[loc] = {}
                            }
                        })

                        this.initialFormData = Object.assign({}, this.formData)
                        this.initialModalData = Object.assign({}, this.modalData)
                        this.isLoading = false
                    })
                    .catch(error => {
                        this.isLoading = false
                        this.formErrors = formUtil.handleErrors(error)
                    })
            },
            humanize(word) {
                return _.startCase(word)
            },
            getLocaleByCode(localeCode) {
                let locale = this.preRequisite.locales.find(l => l.locale === localeCode)
                return locale ? `${locale.name} (${localeCode})` : localeCode
            },
            updateRouteQuery(param){
                const newQuery = Object.assign({}, this.$route.query, param)
                this.$router.push({ path: this.$route.path, query: newQuery })
            },
            isString(myVar) {
                return _.isString(myVar)
            },
            isObject(myVar) {
                return _.isObject(myVar)
            },
            toggleLocaleEditModal(locale, firstKey, secondKey, thirdKey, fourthKey) {
                this.modalData = _.cloneDeep(this.initialModalData)
                this.modalData.locale = locale
                this.modalData.firstKey = firstKey
                this.modalData.secondKey = secondKey
                this.modalData.thirdKey = thirdKey
                this.modalData.fourthKey = fourthKey
                this.modalData.label = this.getLabel(firstKey, secondKey, thirdKey, fourthKey)
                this.modalData.translationInEn = this.getTranslation('en', firstKey, secondKey, thirdKey, fourthKey)
                this.modalData.translation = this.getTranslation(locale, firstKey, secondKey, thirdKey, fourthKey)
                this.showLocaleEditModal = true
                this.isModalLoading = false
            },
            onLocaleEditModalShown() {
                this.$nextTick(() => {
                    this.$refs[`newTranslation`].$refs[`base-input-newTranslation`].focus()
                })
            },
            getTranslation(locale, firstKey, secondKey, thirdKey, fourthKey) {
                return this.formData.words[locale][firstKey] ? (secondKey && this.formData.words[locale][firstKey][secondKey] ? (thirdKey && this.formData.words[locale][firstKey][secondKey][thirdKey] ? (fourthKey && this.formData.words[locale][firstKey][secondKey][thirdKey][fourthKey] ? this.formData.words[locale][firstKey][secondKey][thirdKey][fourthKey] : (fourthKey ? '' : this.formData.words[locale][firstKey][secondKey][thirdKey])) : (thirdKey ? '' : this.formData.words[locale][firstKey][secondKey])) : (secondKey ? '' : this.formData.words[locale][firstKey])) : ''
            },
            getLabel(firstKey, secondKey, thirdKey, fourthKey) {
                return firstKey + (secondKey ? (thirdKey ? (fourthKey ? ' -> ' + secondKey + ' -> ' + thirdKey + ' -> ' + fourthKey : ' -> ' + secondKey + ' -> ' + thirdKey) : ' -> ' + secondKey) : '')
            },
            onLocaleEditModalHidden() {
                this.isModalLoading = true
            },
            onLocaleEditModalOK(e) {
                e.preventDefault()
                this.isModalLoading = true

                if(this.modalData.firstKey && !this.formData.words[this.modalData.locale][this.modalData.firstKey]) {
                    this.formData.words[this.modalData.locale][this.modalData.firstKey] = {}
                }
                if(this.modalData.secondKey && !this.formData.words[this.modalData.locale][this.modalData.firstKey][this.modalData.secondKey]) {
                    this.formData.words[this.modalData.locale][this.modalData.firstKey][this.modalData.secondKey] = {}
                }
                if(this.modalData.thirdKey && !this.formData.words[this.modalData.locale][this.modalData.firstKey][this.modalData.secondKey][this.modalData.thirdKey]) {
                    this.formData.words[this.modalData.locale][this.modalData.firstKey][this.modalData.secondKey][this.modalData.thirdKey] = {}
                }
                if(this.modalData.fourthKey && !this.formData.words[this.modalData.locale][this.modalData.firstKey][this.modalData.secondKey][this.modalData.thirdKey][this.modalData.fourthKey]) {
                    this.formData.words[this.modalData.locale][this.modalData.firstKey][this.modalData.secondKey][this.modalData.thirdKey][this.modalData.fourthKey] = {}
                }


                if(this.modalData.firstKey && this.modalData.secondKey && this.modalData.thirdKey && this.modalData.fourthKey) {
                    this.formData.words[this.modalData.locale][this.modalData.firstKey][this.modalData.secondKey][this.modalData.thirdKey][this.modalData.fourthKey] = this.modalData.translation
                } else if(this.modalData.firstKey && this.modalData.secondKey && this.modalData.thirdKey) {
                    this.formData.words[this.modalData.locale][this.modalData.firstKey][this.modalData.secondKey][this.modalData.thirdKey] = this.modalData.translation
                } else if(this.modalData.firstKey && this.modalData.secondKey) {
                    this.formData.words[this.modalData.locale][this.modalData.firstKey][this.modalData.secondKey] = this.modalData.translation
                } else if(this.modalData.firstKey) {
                    this.formData.words[this.modalData.locale][this.modalData.firstKey] = this.modalData.translation
                }

                this.Custom({
                        url: `config/locales/${this.modalData.locale}/translate`,
                        method: 'post',
                        data: {
                            module: this.activeModule,
                            words: this.formData.words[this.modalData.locale]
                        },
                    })
                    .then(response => {
                        this.initialFormData = _.cloneDeep(this.formData)
                        this.modalData = _.cloneDeep(this.initialModalData)
                        this.$refs.localeEditModal.hide()
                        this.showReloadBtn = true
                    })
                    .catch(error => {
                        this.formData = _.cloneDeep(this.initialFormData)
                        this.isModalLoading = false
                        this.formErrors = formUtil.handleErrors(error)
                    })
            },
            applyPageHeader() {
                let pageHeaderOptions = {
                    buttons: [
                        headerMixins.addButton('appConfigLocaleAdd', 'access-config')
                    ],
                }

                this.SetPageHeader(pageHeaderOptions)
            },
            reloadPage() {
                location.reload(true)
            }
        },
        mounted() {
            this.emptyFormData = Object.assign({}, this.formData)
            this.getInitialData()
            this.applyPageHeader()
        },
        watch: {
            $route() {
                this.getInitialData()
            },
        },
    }

</script>

<style lang="scss">
    .table-wrapper.has-checkbox .custom-control-label {
        &:before {
            top: -1rem;
        }
        &:after {
            top: -1rem;
        }
    }
</style>
