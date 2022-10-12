<template>
    <filter-wrapper :boxed="boxed" @close="$emit('close')" :is-loading="isLoading">
        <div class="row">
            <div class="col-12 col-md-4 mb-4">
                <base-input auto-focus :label="$t('contact.props.name')" type="text" v-model="filters.name" :disabled="isLoading" />
            </div>
            <div class="col-12 col-md-4 mb-4">
                <base-input :label="$t('contact.props.email')" type="text" v-model="filters.email" :disabled="isLoading" />
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
