<template>
    <base-container boxed with-loader :is-loading="isLoading" :loader-color="vars.loaderColor" id="printable">

        <div class="row" v-if="entity">
            <div class="col-12 col-md-6 mb-3">
                <view-single :label="$t('site.query.props.name')" :value="entity.name" />
            </div>
            <div class="col-12 col-md-6 mb-3">
                <view-single :label="$t('site.query.props.email')" :value="entity.email" />
            </div>
            <div class="col-12 col-md-6 mb-3">
                <view-single :label="$t('site.query.props.contact_number')" :value="entity.contactNumber" />
            </div>
            <div class="col-12 col-md-6 mb-3">
                <view-single :label="$t('site.query.props.subject')" :value="entity.subject" />
            </div>

            <div class="col-12 mb-3">
                <view-paragraph :label="$t('site.query.props.message')" :value="entity.message" />
            </div>
        </div>

        <div class="form-footer mt-3">
            <div class="left-side">
                <base-button type="button" design="light" @click="$router.back()" tabindex="-1"><i class="fas fa-chevron-left"></i> {{ $t('general.back') }}</base-button>
            </div>
            <div class="right-side">
            </div>
        </div>
    </base-container>
</template>

<script>
    import view from '@mixins/view'

    export default {
        extends: view,
        data() {
            return {
                initUrl: 'site/queries',
                dataTitle: $t('site.query.query'),
                fallBackRoute: 'appSiteQueryList',
            }
        },
    }

</script>
