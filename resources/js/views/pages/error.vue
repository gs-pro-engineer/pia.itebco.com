<template>
    <error-page class="general-page">
        <div class="col-12 text-center">
            <h2>{{ $t('general.error_page') }}</h2>
            <h3>{{ $t('general.error_page_heading') }}</h3>
            <p>{{ $t('general.error_page_message') }}</p>
            <a class="btn btn-success" href="#" @click="$router.back()"><i class="fas fa-chevron-left"></i> {{ $t('global.back_to_link', {attribute: $t('general.home')}) }}</a>
        </div>
    </error-page>
</template>

<script>
    import ErrorPage from './partials/error-page'
    export default {
        components: {
            ErrorPage,
        }
    }

</script>

<style lang="scss" scoped>


</style>
