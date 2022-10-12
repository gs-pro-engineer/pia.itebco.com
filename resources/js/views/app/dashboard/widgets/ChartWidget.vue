<template>
    <card shadow class="chart-widget min-height-150px">
        <animated-loader :is-loading="isLoading || !(others && others.chart)" :loader-color="vars.loaderColor" />
        
        <template #title v-if="!isLoading && others && others.chart">
            <h5>{{ others.chart.title }}</h5>
        </template>

        <template #actions v-if="!isLoading && others && others.chart">
            <base-dropdown tag="div" dropdown-menu-tag="ul" position="right" v-if="others.chart.actions">
                <a v-if="selectedFilter" class="dropdown-toggle no-caret" data-toggle="dropdown" role="button"><span v-if="selectedFilter.length === 1">{{ selectedFilter[0].label }}</span> <span v-else>{{ $t('general.filtered') }}</span> <i class="fas fa-angle-down ml-2"></i></a>

                <li class="dropdown-item pointer" v-for="filter in others.chart.actions.options" @click="toggleFilter(filter)">
                    {{ filter.label }}
                    <span class="pull-right" v-if="filter.active"><i class="fas fa-check"></i></span>
                </li>
            </base-dropdown>

            <button type="button" class="btn action" @click="getInitialData"><i :class="['fas fa-sync-alt', {'fa-spin': isLoading}]"></i></button>
            
        </template>

        <template v-if="!isLoading && others && others.chart">
            <bar-chart v-if="others.chart.type === 'bar'" :chart-data="others.chart.chartData" :styles="customStyles" />
            <line-chart v-else-if="others.chart.type === 'line'" :chart-data="others.chart.chartData" :styles="customStyles" />
            <pie-chart v-else-if="others.chart.type === 'pie'" :chart-data="others.chart.chartData" :styles="customStyles" />
        </template>
    </card>
</template>

<script>
    import { mapGetters, mapActions } from 'vuex'
    import BarChart from '@components/charts/BarChart'
    import LineChart from '@components/charts/LineChart'

    export default {
        name: "chart-widget",
        components: {
            BarChart,
            LineChart,
        },
        props: {
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
            customStyles() {
                return {
                    minHeight: '465px',
                    position: 'relative'
                }
            },
            selectedFilter() {
                return this.others.chart.actions.options.filter(f => f.active)
            },
        },
        methods: {
            ...mapActions('common', [
                'Custom',
                'SetOthers',
            ]),
            toggleFilter(filter) {
                if(this.others.chart.actions.multiple) {
                    filter.active = !filter.active
                } else {
                    this.others.chart.actions.options.forEach(f => {
                        f.active = f.label === filter.label ? true : false
                    })
                }
                this.getInitialData()
            },
            getInitialData() {
                this.isLoading = true

                let params = {}
                if(this.others && this.others.chart && this.others.chart.actions) {
                    this.others.chart.actions.options.forEach(filter => {
                        if(filter.active) {
                            params[filter.param] = filter.value
                        }
                    })
                }

                this.Custom({
                        url: 'dashboard/chart',
                        method: 'get',
                        params: params
                    })
                    .then(response => {
                        this.SetOthers({
                            chart: response
                        })
                        this.isLoading = false
                    })
                    .catch(error => {
                        this.isLoading = false
                        formUtil.handleErrors(error)
                    })
            },
        },
        mounted() {
            this.getInitialData()
        },
    }

</script>
<style lang="scss" scoped>
    @import '~@js/core/assets/scss/imports.scss';
    
    .dropdown .dropdown-toggle {
        display: flex;
        height: 100%;
        width: 100%;
        justify-content: flex-end;
        align-items: center;
        padding: 0 1rem;
    }
</style>
