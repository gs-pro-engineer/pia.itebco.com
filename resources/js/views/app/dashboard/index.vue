<template>
    <div class="dashboard-wrapper">
        <animated-loader :is-loading="isLoading && !others.dashboard" :loader-color="vars.loaderColor" />

        <div class="row overlap-header">
            <div class="col-12 col-lg-4 d-flex">
                <greeting-widget class="flex-grow" shadow />
            </div>

            <div class="col-12 col-lg-8 d-flex">
                <chart-widget class="flex-grow" shadow />
            </div>
        </div>

    </div>
</template>

<script>
    import { mapGetters, mapActions } from 'vuex'
    import GreetingWidget from './widgets/GreetingWidget'
    import ChartWidget from './widgets/ChartWidget'

    export default {
        components: {
            GreetingWidget,
            ChartWidget,
        },
        data() {
            return {
                isLoading: false,
            }
        },
        computed: {
            ...mapGetters('config', [
                'vars',
            ]),
            ...mapGetters('common', [
                'others',
            ]),
        },
        methods: {
            ...mapActions('common', [
                'Custom',
                'SetOthers',
            ]),
        },
        mounted() {
        },
    };

</script>

<style lang="scss" scoped>
    @import '~@js/core/assets/scss/imports.scss';

    .overlap-header {
        margin-top: -$side-margin * 3 !important;
    }
</style>
