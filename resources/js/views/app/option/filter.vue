<template>
    <filter-wrapper :boxed="boxed" @close="$emit('close')" :is-loading="isLoading">
        <div class="row">
            <div class="col-12 col-md-4 mb-3">
                <base-input auto-focus :label="$t('option.props.name')" type="text" v-model="filters.name" :disabled="isLoading" />
            </div>
            <div class="col-12 col-md-4 mb-3">
                <base-input :label="$t('option.props.description')" type="text" v-model="filters.description" :disabled="isLoading" />
            </div>
            <div class="col-12 col-md-4 mb-3">
                <base-select :options="preRequisite.options" v-model="filters.parents" :label="$t('option.props.parents')" :disabled="isLoading" :multiple="true" :simple="true" :close-on-select="false" comma-separated-multiple show-by="nameWithParents" />
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
