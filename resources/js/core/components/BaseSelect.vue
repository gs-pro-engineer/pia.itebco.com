<template>
    <div :class="['multiselect-wrapper', {'not-empty': !!bsValue}, required ? 'required' : '', wrapperClasses]">
        <label class="input-group-material-label">{{ label }} <span class="required-asterix" v-if="required">*</span></label>
        <slot name="addNew">
            <div class="add-new-link" v-if="addNew && hasPermission(neededPermission)">
                <base-button type="button" design="link" size="sm" @click="$router.push({ name: addNew })">{{ $t('general.add_new') }}</base-button>
            </div>
        </slot>

        <div class="add-new-link" v-if="addNewModal && hasPermission(neededPermission)">
            <base-button type="button" design="link" size="sm" @click="toggleNewModal">{{ $t('general.add_new') }}</base-button>
        </div>


        <app-sidebar-modal v-if="addNewModal && hasPermission(neededPermission) && showNewModel" @close="toggleNewModal(true)">
            <slot name="addNewModal" />
        </app-sidebar-modal>


        <template v-if="$scopedSlots.selectedOption && $scopedSlots.listOption">
            <multiselect :ref="`multiselect${cbId}`" :options="options" v-model="bsValue" :placeholder="label" :track-by="trackBy" :label="showBy" :custom-label="customShowBy" :searchable="searchable" :show-labels="false" :allow-empty="allowEmpty" :group-values="groupValues" :group-label="groupLabel" :group-select="groupSelect" :multiple="multiple" :close-on-select="closeOnSelect" :class="['input-group-material', inputClasses]" :disabled="disabled" :loading="loading" :limit="limit" :max="multiple ? max : false">

                <template #singleLabel="{ option }">
                    <slot name="selectedOption" :option="option" />
                </template>

                <template #option="{ option }">
                    <slot name="listOption" :option="option" />
                </template>

            </multiselect>

        </template>

        <template v-else>
            <multiselect :ref="`multiselect${cbId}`" :options="options" v-model="bsValue" :placeholder="label" :track-by="trackBy" :label="showBy" :custom-label="callCustomShowBy" :searchable="searchable" :show-labels="false" :allow-empty="allowEmpty" :group-values="groupValues" :group-label="groupLabel" :group-select="groupSelect" :multiple="multiple" :close-on-select="closeOnSelect" :class="['input-group-material', inputClasses]" :disabled="disabled" :loading="loading" :limit="limit" :max="multiple ? max : false" />
        </template>

        <slot name="errorBlock">
            <div class="text-danger invalid-feedback error-block" v-if="error">
                {{ error }}
            </div>
        </slot>
    </div>
</template>
<script>
    import { mapGetters, mapActions } from 'vuex'

    export default {
        name: "base-select",
        components: {
            'AppSidebarModal': () => import('@components/AppSidebarModal' /* webpackChunkName: "app/components/app-sidebar-modal" */ ),
        },
        props: {
            value: {
                type: [Object, Array, String, Number, Boolean],
            },
            label: {
                type: String,
                default: 'Enter a tag'
            },
            trackBy: {
                type: String,
                default: 'uuid'
            },
            showBy: {
                type: String,
                default: 'name'
            },
            customShowBy: {
                type: Function,
            },
            options: {
                type: Array,
                default () {
                    return []
                }
            },
            error: {
                type: String,
                default: null
            },
            searchable: {
                type: Boolean,
                default: true
            },
            allowEmpty: {
                type: Boolean,
                default: true
            },
            disabled: {
                type: Boolean,
                default: false
            },
            required: {
                type: Boolean,
                default: false
            },
            multiple: {
                type: Boolean,
                default: false
            },
            closeOnSelect: {
                type: Boolean,
                default: true
            },
            loading: {
                type: Boolean,
                default: false
            },
            wrapperClasses: {
                type: String,
            },
            inputClasses: {
                type: String,
                default: ''
            },
            groupValues: {
                type: String,
                default: null
            },
            groupLabel: {
                type: String,
                default: null
            },
            groupSelect: {
                type: Boolean,
                default: false
            },
            preselectFirst: {
                type: Boolean,
                default: false
            },
            simple: {
                type: Boolean,
                default: false
            },
            commaSeparatedMultiple: {
                type: Boolean,
                default: false
            },
            addNew: {
                type: String,
            },
            addNewModal: {
                type: Boolean,
                default: false
            },
            neededPermission: {
                type: String,
            },
            autoFocus: {
                type: Boolean,
                default: false
            },
            alwaysAutoFocus: {
                type: Boolean,
                default: false
            },
            limit: {
                type: Number,
                default: 99999
            },
            max: {
                type: Number,
                default: 99999
            },
        },
        data() {
            return {
                cbId: "",
                showNewModel: false,
            }
        },
        watch: {
            computedModalSidebarShow(val, oldVal) {
                if(val === false) {
                    setTimeout(() => {
                        this.showNewModel = false
                    }, 1000)
                }
            },
            options(val, oldVal) {
                if(this.preselectFirst && ! this.bsValue && val && val.length) {
                    this.bsValue = val[0]
                }
            }
        },
        computed: {
            ...mapGetters('config', [
                'uiConfigs',
            ]),
            ...mapGetters('user', [
                'hasPermission',
            ]),
            computedModalSidebarShow() {
                return this.uiConfigs.modalSidebarShow
            },
            allOptions() {
                if (this.groupValues) {
                    let toReturn = []
                    this.options.forEach(o => {
                        toReturn = toReturn.concat(o[this.groupValues])
                    })
                    return toReturn
                }
                return this.options
            },
            bsValue: {
                get() {
                    if (this.value && this.simple) {
                        if (this.multiple) {
                            if (this.commaSeparatedMultiple) {
                                const toSelect = this.value.split(',')
                                return this.allOptions.filter(o => toSelect.indexOf(o[this.trackBy]) !== -1)
                            }
                            return this.allOptions.filter(o => this.value.indexOf(o[this.trackBy]) !== -1)
                        } else {
                            return this.allOptions.find(o => o[this.trackBy] === this.value)
                        }
                    } else {
                        return this.value
                    }
                },
                set(newValue) {
                    let toReturn = null
                    if (newValue && this.simple) {
                        if (this.multiple) {
                            if (this.commaSeparatedMultiple) {
                                toReturn = newValue.map(v => v[this.trackBy])
                                    .join(',')
                            } else {
                                toReturn = newValue.map(v => v[this.trackBy])
                            }
                        } else {
                            toReturn = newValue[this.trackBy]
                        }
                    } else {
                        toReturn = newValue
                    }
                    this.$emit('input', toReturn)
                    if(toReturn) {
                        this.$emit('update:error', '')
                    }
                }
            },
        },
        methods: {
            ...mapActions('config', [
                'SetUiConfig',
            ]),
            callCustomShowBy(obj) {
                if (this.customShowBy) {
                    this.customShowBy(obj)
                } else {
                    return obj ? obj[this.showBy ? this.showBy : 'name'] : ''
                }
            },
            toggleNewModal: _.debounce(function(closeIt) {
                this.showNewModel = closeIt === true ? false : true
                this.$nextTick(() => {
                    this.SetUiConfig({ modalSidebarShow: this.showNewModel })
                })
            }, 300),
            focus() {
                setTimeout(() => {
                    this.$refs[`multiselect${this.cbId}`].activate()
                }, 300)
            },
        },
        mounted() {
            if(this.preselectFirst && ! this.bsValue && this.options && this.options.length) {
                this.bsValue = this.options[0]
            }
            if (this.autoFocus && (this.alwaysAutoFocus || (this.alwaysAutoFocus && !this.bsValue) )) {
                const vm = this
                this.$nextTick(() => {
                    setTimeout(() => {
                        vm.$refs[`multiselect${vm.cbId}`].activate()
                    }, 500)
                })
            }
        },
        created() {
            this.cbId = Math.random()
                .toString(16)
                .slice(2);
        },
        destroyed() {
        },
    }

</script>
