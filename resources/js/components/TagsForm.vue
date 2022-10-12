<template>
    <base-container :boxed="boxed" with-loader :is-loading="isLoading" :loader-color="vars.loaderColor" :class="['mb-4', { 'mt-element': boxed }]">

        <close-button @click="cancel" :title="$t('general.close')" small-corner-padding />

        <h5 class="text-muted font-weight-bold mb-4">{{ heading }}</h5>

        <form @submit.prevent="submit">
            <div class="row">
                <div class="col-12 col-md-6">
                    <search-tag auto-focus v-model="formData.tags" :label="$t('general.enter_a_tag')" @tag="addTag" :error.sync="errors.tags" :type="tagType" />
                </div>

                <div class="col-12 col-md-3 d-flex align-items-center">
                    <base-radio class="mt-2" value="add" v-model="formData.action" inline>
                        {{ $t('general.add') }}
                    </base-radio>
                    <base-radio class="ml-3 mt-2" value="remove" v-model="formData.action" inline>
                        {{ $t('general.remove') }}
                    </base-radio>
                </div>

                <div class="col-12 col-md-3 d-flex justify-content-end align-items-center">
                    <base-button type="button" design="light" @click="cancel" :disabled="isLoading">{{ $t('general.cancel') }}</base-button>
                    <base-button type="submit" design="primary" :disabled="isLoading">{{ $t('general.apply') }}</base-button>
                </div>
            </div>
        </form>
    </base-container>
</template>

<script>
    import { generateSlug } from '@core/utils/form'
    import { mapGetters } from 'vuex'
    export default {
        name: "tags-form",
        props: {
            selectedRows: {
                type: Array,
                default() {
                    return []
                },
            },
            preRequisite: {
                type: Object,
                default() {
                    return {}
                },
                required: true
            },
            errors: {
                type: Object,
                default() {
                    return {}
                },
            },
            isLoading: {
                type: Boolean,
                default: false
            },
            heading: {
                type: String,
                default: `${$t('general.apply')} ${$t('general.tags')}`
            },
            boxed: {
                type: Boolean,
                default: true
            },
            tagType: {
                type: String,
                default: ''
            }
        },
        data() {
            return {
                formData: {
                    tags: null,
                    action: 'add',
                }
            }
        },
        computed: {
            ...mapGetters('config', [
                'vars',
            ]),
        },
        watch: {
            selectedRows(newValue, oldValue) {
                if(!newValue.length) {
                    this.formData.tags = null
                    this.formData.action = 'add'
                }
            }
        },
        methods: {
            addTag(newTag) {
                const tag = {
                    name: newTag,
                    slug: generateSlug(newTag)
                }
                if(!this.formData.tags) {
                    this.formData.tags = []
                }
                this.formData.tags.push(tag)
            },
            cancel() {
                this.$emit('cancel')
            },
            submit() {
                this.$emit('submit', this.formData)
            },
        },
    }

</script>
