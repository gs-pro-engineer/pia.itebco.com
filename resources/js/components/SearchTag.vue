<template>
    <div :class="['multiselect-wrapper', {'not-empty': !!tags}, {'required': required}, wrapperClasses]">
        <label class="input-group-material-label">{{ label }} <span class="required-asterix" v-if="required">*</span></label>

        <multiselect :ref="`multiselect${cbId}`" :options="options" v-model="tags" :placeholder="label" :track-by="trackBy" :label="showBy" :searchable="searchable" :show-labels="false" :allow-empty="allowEmpty" :multiple="multiple" :close-on-select="closeOnSelect" :taggable="taggable" @tag="addTag" :tag-placeholder="$t('general.enter_a_tag')" :class="['input-group-material', inputClasses]" :disabled="disabled" :loading="loading || isLoading" :internal-search="false" :options-limit="optionsLimit" @search-change="searchTags" :tag-position="position" @remove="removeTag">

            <template #clear="props">
                <div class="multiselect__clear" v-if="tags && allowEmpty" @mousedown.prevent.stop="clearSelectedTags(props.search)"></div>
            </template>

            <template #noResult>
                <span class="multiselect__no_result text-muted">{{ $t('global.could_not_find_any', { attribute: entityLabel }) }}</span>
            </template>

            <template #noOptions>
                <span class="multiselect__helper text-muted">{{ $t('general.search_helper_text') }}</span>
            </template>

        </multiselect>

        <slot name="errorBlock">
            <div class="text-danger invalid-feedback error-block" v-if="error">
                {{ error }}
            </div>
        </slot>
    </div>

</template>
<script>
    import * as FormUtil from '@core/utils/form'
    import { mapGetters, mapActions } from 'vuex'

    export default {
        name: "search-tag",
        props: {
            value: {
                type: [Object, Array, String],
            },
            label: {
                type: String,
                default: $t('general.enter_a_tag')
            },
            entityLabel: {
                type: String,
                default: $t('general.tags')
            },
            trackBy: {
                type: String,
                default: 'slug'
            },
            showBy: {
                type: String,
                default: 'name'
            },
            error: {
                type: String,
                default: null
            },
            taggable: {
                type: Boolean,
                default: true
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
                default: true
            },
            closeOnSelect: {
                type: Boolean,
                default: false
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
            position: {
                type: String,
                default: 'top'
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
            optionsLimit: {
                type: Number,
                deafult: 5
            },
            url: {
                type: String,
                default: 'tags'
            },
            type: {
                type: String,
                default: ''
            },
            method: {
                type: String,
                default: 'get'
            },
            params: {
                type: Object,
                default() {
                    return {}
                }
            },
        },
        data() {
            return {
                cbId: "",
                options: [],
                formErrors: {},
                showNewModel: false,
                isLoading: false
            }
        },
        computed: {
            ...mapGetters('config', [
                'uiConfigs',
            ]),
            ...mapGetters('user', [
                'hasPermission',
            ]),
            tags: {
                get() {
                    if (this.value && this.simple) {
                        if(this.multiple) {
                            let val = this.value
                            let toReturn = []

                            if(!_.isArray(val)) {
                                val = val.replace(/\s+/g, '').split(",")
                            }

                            if(this.options.length) {
                                toReturn = this.options.filter(o => val.indexOf(o[this.trackBy]) !== -1)
                            } else {
                                toReturn = val.map(v => {
                                    return {
                                        slug: v,
                                        name: v.replace('-', ' ')
                                    }
                                })
                            }

                            return toReturn
                        } else {
                            return this.options.find(o => o[this.trackBy] === this.value)
                        }
                    } else {
                        return this.value
                    }
                },
                set(newValue) {
                    let toReturn = null
                    if (newValue && this.simple) {
                        if(_.isArray(newValue)) {
                            toReturn = newValue.map(v => v[this.trackBy])
                            toReturn = toReturn.join(",")
                        } else {
                            toReturn = newValue[this.trackBy]
                        }
                    } else {
                        toReturn = newValue
                    }
                    this.$emit('input', toReturn)
                    this.$emit('update:error', '')
                }
            },
        },
        methods: {
            ...mapActions('common', [
                'Custom',
            ]),
            ...mapActions('config', [
                'SetUiConfig',
            ]),
            searchTags: _.debounce(function(query) {
                if(query.length < 3) return false

                this.isLoading = true

                this.Custom({
                        url: this.url + (this.type ? '?type=' + this.type : ''),
                        method: this.method,
                        params: {
                            q: query,
                            ...this.params
                        },
                    })
                    .then(response => {
                        this.options = response
                        this.isLoading = false
                    })
                    .catch(error => {
                        this.options = []
                        this.isLoading = false
                        this.formErrors = FormUtil.handleErrors(error)
                    })
            }, 500),
            addTag(newTag) {
                this.$emit('tag', newTag)
                this.focus()
            },
            removeTag(tagToBeRemove) {
                this.tags = this.tags.filter((tag) => {
                    return tag[this.trackBy] !== tagToBeRemove[this.trackBy]
                })
            },
            clearSelectedTags() {
                this.tags = null
                this.options = []
                this.focus()
            },
            focus() {
                setTimeout(() => {
                    if(this.$refs && this.cbId && this.$refs[`multiselect${this.cbId}`]) {
                        this.$refs[`multiselect${this.cbId}`].activate()
                    }
                }, 500)
            },
        },
        mounted() {
            if(this.autoFocus) {
                this.focus()
            }
        },
        created() {
            this.cbId = Math.random()
                .toString(16)
                .slice(2);
        }
    }

</script>
