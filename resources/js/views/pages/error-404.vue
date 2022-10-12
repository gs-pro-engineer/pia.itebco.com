<template>
    <error-page class="general-page">
        <div class="col-12 text-center">
            <h1>404</h1>
            <h2>{{ $t('general.page_not_found') }}</h2>
            <hr>
            <h3>{{ $t('general.page_not_found_heading') }}</h3>
            <p>{{ $t('general.page_not_found_message') }}</p>
            <a class="btn btn-success" href="#" @click="$router.back()"><i class="fas fa-chevron-left"></i> {{ $t('general.back') }}</a>
            <a class="btn btn-success" href="/app"><i class="fas fa-home"></i> {{ $t('global.back_to_link', {attribute: $t('general.home')}) }}</a>
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
    .error-page{
        .error_bg.error-404 {
            // background-image: url('~@images/errors/404-animation.gif');
            height: 340px;
        }
    }

</style>
