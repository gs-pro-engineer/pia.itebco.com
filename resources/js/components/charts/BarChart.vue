<script>
    import { Bar } from 'vue-chartjs'

    export default {
        extends: Bar,
        props: ['chartData'],
        data: () => ({
            options: {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    yAxes: [{
                        ticks: {}
                    }]
                }
            }
        }),
        watch: {
            chartData(newValue, oldValue) {
                if(newValue && newValue !== oldValue) {
                    this.renderChart(_.cloneDeep(newValue), this.options)
                }
            }
        },
        mounted() {
            if(this.chartData) {
                this.renderChart(_.cloneDeep(this.chartData), this.options)
            }
        },
    }

</script>
