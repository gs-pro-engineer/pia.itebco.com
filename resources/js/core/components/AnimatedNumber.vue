<template>
    <span>{{ displayNumber }}</span>
</template>

<script>
    export default {
        name: "animated-number",
        props: {
            number: {
                type: Number,
                default: 0,
            },
            delay: {
                type: Number,
                default: 20,
            },
        },
        data() {
            return {
                displayNumber: 0,
                interval: false,
                initialInterval: false,
            }
        },
        methods: {
            changeNumberFn() {
                if (this.displayNumber != this.number) {
                    let change = (this.number - this.displayNumber) / 10

                    change = change >= 0 ? Math.ceil(change) : Math.floor(change)

                    this.displayNumber = this.displayNumber + change
                }
            }
        },
        watch: {
            number: function() {
                clearInterval(this.interval)

                if (this.number == this.displayNumber) {
                    return
                }

                this.interval = window.setInterval(this.changeNumberFn, this.delay)
            }
        },
        mounted() {
            this.displayNumber = 0
            clearInterval(this.initialInterval)

            if (this.number == this.displayNumber) {
                return
            }

            this.initialInterval = window.setInterval(this.changeNumberFn, this.delay)

        },
    }

</script>
