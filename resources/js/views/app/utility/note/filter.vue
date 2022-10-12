<template>
    <filter-wrapper :boxed="boxed" @close="$emit('close')" :is-loading="isLoading">
        <div class="row">
            <div class="col-12 col-md-4 mb-3">
                <base-input auto-focus :label="$t('utility.note.props.title')" type="text" v-model="filters.title" :disabled="isLoading" />
            </div>
            <div class="col-12 col-md-4 mb-3">
                <base-input :label="$t('utility.note.props.code')" type="text" v-model="filters.code" :disabled="isLoading" />
            </div>
            <div class="col-12 col-md-4 mb-3 d-flex justify-content-start align-items-end">
                <base-checkbox class="ml-3 mb-3" v-model="filters.status">
                    {{ $t('utility.note.props.is_published') }}
                </base-checkbox>
            </div>
        </div>
    </filter-wrapper>
</template>

<script>
    import filterForm from '@mixins/filter-form'

    export default {
        extends: filterForm,
        mounted() {
            this.filters.status = this.filters.status === true || this.filters.status === 'true' ? true : false
        }
    }

</script>
