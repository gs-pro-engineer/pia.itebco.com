<template>
    <base-container :boxed="boxed" with-loader :is-loading="isLoading" :loader-color="vars.loaderColor" class="mb-element">

        <close-button v-if="showCloseBtn" @click="$emit('close')" :title="$t('general.close')" />

        <form @submit.prevent="submit">

            <slot />

            <slot name="footer">
                <div v-if="showFooter" class="form-footer mt-3">
                    <div class="left-side">
                        <base-button type="button" design="light" @click="$emit('close')" :disabled="isLoading">{{ $t('general.close') }}</base-button>
                    </div>
                    <div class="right-side">
                        <base-button type="button" design="light" @click="reset" :disabled="isLoading">{{ $t('general.clear') }}</base-button>
                        <base-button type="submit" design="primary" :disabled="isLoading">{{ $t('general.filter') }}</base-button>
                    </div>
                </div>
            </slot>
        </form>
    </base-container>
</template>

<script>
    import EventBus from '@js/event-bus'
    import { mapGetters } from 'vuex'

    export default {
        props: {
            boxed: {
                type: Boolean,
                default: false
            },
            showCloseBtn: {
                type: Boolean,
                default: true
            },
            showFooter: {
                type: Boolean,
                default: true
            },
            isLoading: {
                type: Boolean,
                default: false
            },
            filterRouteFn: {
                type: Function,
            },
        },
        computed: {
            ...mapGetters('common', [
                'filters',
            ]),
            ...mapGetters('config', [
                'vars',
            ]),
        },
        methods: {
            submit() {
                const filterQuery = {
                    ...this.$route.query,
                    ...this.filters,
                    filtered: true,
                    filtered_at: moment().unix()
                }

                if(this.filterRouteFn && _.isFunction(this.filterRouteFn)) {
                    this.filterRouteFn(filterQuery)
                } else {
                    this.$router.push({ path: this.$route.path, query: filterQuery }).catch(err => {})
                }
            },
            reset() {
                EventBus.$emit('CLEAR_FILTERS')
            }
        },
    }

</script>
