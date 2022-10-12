<template>
    <div :class="['multiselect-wrapper', {'not-empty': !!user}, {'required': required}, wrapperClasses]">
        <label class="input-group-material-label">{{ label }} <span class="required-asterix" v-if="required">*</span></label>
        <slot name="addNew">
            <div class="add-new-link" v-if="addNew">
                <base-button type="button" design="link" size="sm" @click="$router.push({ name: addNew })">{{ $t('general.add_new') }}</base-button>
            </div>
        </slot>
    
        <multiselect :ref="`multiselect${cbId}`" :options="users" v-model="user" :placeholder="label" :track-by="trackBy" :label="showBy" :searchable="searchable" :show-labels="false" :allow-empty="allowEmpty" :group-values="groupValues" :group-label="groupLabel" :group-select="groupSelect" :multiple="multiple" :close-on-select="closeOnSelect" :class="['input-group-material', inputClasses]" :disabled="disabled" :loading="loading || isLoading" :preselect-first="preselectFirst" :internal-search="false" :options-limit="optionsLimit" @search-change="searchContact">
            
            <template #singleLabel="{option}">
                <div class="person-option selected">
                    <div class="person-image-wrapper">
                        <img v-if="option.image" class="person-image" :src="option.image">
                        <img v-else class="person-image" :src="computedImage(option.gender, option.age)">
                    </div>
                    <div class="person-details">
                        <span class="title">{{ option.name }}</span>
                        <span class="subtitle">{{ computedSubtitle(option) }}</span>
                    </div>
                </div>
            </template>

            <template #option="{option}">
                <div class="person-option">
                    <div class="person-image-wrapper">
                        <img v-if="option.image" class="person-image" :src="option.image">
                        <img v-else class="person-image" :src="computedImage(option.gender, option.age)">
                    </div>
                    <div class="person-details">
                        <span class="title">{{ option.name }}</span>
                        <span class="subtitle">{{ computedSubtitle(option) }}</span>
                    </div>
                </div>
            </template>

            <template #clear="props">
                <div class="multiselect__clear" v-if="user" @mousedown.prevent.stop="clearSelectedContact(props.search)"></div>
            </template>

            <template #noResult>
                <span class="text-muted">{{ $t('global.could_not_find_any', { attribute: $t('user.user') }) }}</span>
            </template>

            <template #noOptions>
                <span class="text-muted">{{ $t('general.search_helper_text') }}</span>
            </template>

        </multiselect>

        <slot name="errorBlock">
            <div class="text-danger invalid-feedback" style="display: block; margin-top: -0.5rem;" v-if="error">
                {{ error }}
            </div>
        </slot>
    </div>

</template>
<script>
    import ProfileImageMaleKid from '@images/avatars/default-profile-image-male-kid.png'
    import ProfileImageFemaleKid from '@images/avatars/default-profile-image-female-kid.png'
    import ProfileImageMaleTeen from '@images/avatars/default-profile-image-male-teen.png'
    import ProfileImageFemaleTeen from '@images/avatars/default-profile-image-female-teen.png'
    import ProfileImageMale from '@images/avatars/default-profile-image-male.png'
    import ProfileImageFemale from '@images/avatars/default-profile-image-female.png'

    import { mapGetters, mapActions } from 'vuex'
    
    export default {
        name: "search-user",
        props: {
            value: {
                type: [Object, Array, String],
            },
            label: {
                type: String,
                default: 'Select Contact'
            },
            trackBy: {
                type: String,
                default: 'uuid'
            },
            showBy: {
                type: String,
                default: 'name'
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
                default: 'mb-4'
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
                default: 'users/search'
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
                users: [],
                formErrors: {},
                isLoading: false
            }
        },
        computed: {
            user: {
                get() {
                    return this.value
                },
                set(v) {
                    this.$emit('input', v)
                }
            },
        },
        methods: {
            ...mapActions('common', [
                'Custom',
            ]),
            computedSubtitle(option) {
                let subtitle = option.vendor ? option.vendor.name : (option.brand ? option.brand.name : (option.company ? option.company : ''))
                return subtitle ? `(${subtitle})` : ''
            },
            computedImage(gender, age) {
                if(gender.uuid === 'male') {
                    if(age) {
                        if(age.years < 13) {
                            return ProfileImageMaleKid
                        } else if(age.years < 18) {
                            return ProfileImageMaleTeen
                        }
                    }
                    return ProfileImageMale
                } else {
                    if(age) {
                        if(age.years < 13) {
                            return ProfileImageFemaleKid
                        } else if(age.years < 18) {
                            return ProfileImageFemaleTeen
                        }
                    }
                    return ProfileImageFemale
                }
            },
            searchContact: _.debounce(function(query) {
                if(query.length < 3) return false

                this.isLoading = true

                this.Custom({
                        url: this.url,
                        method: this.method,
                        params: {
                            q: query,
                            ...this.params
                        },
                    })
                    .then(response => {
                        this.users = response
                        this.isLoading = false
                    })
                    .catch(error => {
                        this.users = []
                        this.isLoading = false
                        this.formErrors = formUtil.handleErrors(error)
                    })
            }, 500),
            clearSelectedContact() {
                this.user = null
                this.users = []
            },
        },
        mounted() {
            if(this.autoFocus) {
                setTimeout(() => {
                    this.$refs[`multiselect${this.cbId}`].activate()
                }, 500)
            }
        },
        created() {
            this.cbId = Math.random()
                .toString(16)
                .slice(2);
        }
    }

</script>