<template>
    <div class="row mt-5">
        <div class="col-12 col-md-3">
            <base-select :options="vars.keepAddingOptions" v-model="localKeepAddingOption" :label="$t('general.select_keep_adding_option')" :allow-empty="false" track-by="uuid" :simple="true" :disabled="isLoading" @input="$emit('fieldsUpdated')">
                <template slot="selectedOption" slot-scope="{ option }">
                    <span class="title">{{ $t(`general.${option.name}`) }}</span>
                </template>

                <template slot="listOption" slot-scope="{ option }">
                    <span class="title">{{ $t(`general.${option.name}`) }}</span>
                </template>
            </base-select>
        </div>
        <div class="col-12 col-md-9">
            <base-select :options="keepAddingFields" v-model="localKeepAddingSelectedFields" :label="$t('general.select_keep_adding_fields')" :allow-empty="true" :multiple="true" track-by="uuid" show-by="value" :close-on-select="false" :disabled="isLoading" />
        </div>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex'

    export default {
        name: "keep-adding-form",
        props: {
            isLoading: {
                type: Boolean,
                default: false,
            },
            keepAddingOption: {
                type: String,
            },
            keepAddingSelectedFields: {
                type: Array,
                default() {
                    return []
                }
            },
            keepAddingFields: {
                type: Array,
                default() {
                    return []
                }
            },
        },
        data() {
            return {}
        },
        computed: {
            ...mapGetters('config', [
                'vars',
            ]),
            localKeepAddingOption: {
                get() {
                    return this.keepAddingOption
                },
                set(val) {
                    this.$emit('optionUpdated', val)
                }
            },
            localKeepAddingSelectedFields: {
                get() {
                    return this.keepAddingSelectedFields
                },
                set(val) {
                    this.$emit('fieldsUpdated', val)
                }
            },
        },
    };

</script>
