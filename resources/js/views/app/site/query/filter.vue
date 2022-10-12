<template>
    <filter-wrapper :boxed="boxed" @close="$emit('close')" :is-loading="isLoading">
        <div class="row">
            <div class="col-12 col-md-4 mb-3">
                <base-input auto-focus :label="$t('general.keyword')" type="text" v-model="filters.keyword" :disabled="isLoading" />
            </div>
            <div class="col-12 col-md-4 mb-3">
                <base-input :label="$t('site.query.props.email')" type="text" v-model="filters.email" :disabled="isLoading" />
            </div>
            <div class="col-12 col-md-4 mb-3">
                <base-input :label="$t('site.query.props.contact_number')" type="text" v-model="filters.contactNumber" :disabled="isLoading" />
            </div>
        </div>
    </filter-wrapper>
</template>

<script>
    import filterForm from '@mixins/filter-form'

    export default {
        extends: filterForm,
    }

</script>
