<template>
    <filter-wrapper :boxed="boxed" @close="$emit('close')" :is-loading="isLoading">
        <div class="row">
            <div class="col-12 col-md-4 mb-3">
                <base-input auto-focus :label="$t('general.search_keyword')" type="text" v-model="filters.keyword" :disabled="isLoading" />
            </div>
            <div class="col-12 col-md-4 mb-3">
                <base-select :options="preRequisite.statuses" v-model="filters.status" :label="$t('utility.todo.props.status')" :disabled="isLoading" :simple="true" />
            </div>
            <div class="col-12 col-md-4 mb-3">
                <date-between :label="$t('global.between', {attribute: $t('utility.todo.todo') })" :start.sync="filters.startDate" :end.sync="filters.endDate" :disabled="isLoading" />
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
