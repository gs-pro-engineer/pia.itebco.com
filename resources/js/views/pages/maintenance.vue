<template>
    <error-page class="general-page">
        <div class="col-12 text-center">
            <h2>{{ $t('general.maintenance_page') }}</h2>
            <h3>{{ $t('general.maintenance_page_heading') }}</h3>
            <p>{{ $t('general.maintenance_page_message') }}</p>
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
