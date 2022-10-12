<template>
    <error-page class="general-page">
        <div class="col-12 text-center">
            <h1>401</h1>
            <h2>{{ $t('general.page_unauthorized') }}</h2>
            <hr>
            <h3>{{ $t('general.page_unauthorized_heading') }}</h3>
            <p>{{ $t('general.page_unauthorized_message') }}</p>
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
    .error-page .error_bg.error-401 {
        // background-image: url('~@images/errors/401-animation.gif') !important;
        background-size: 95%;
    }

</style>
