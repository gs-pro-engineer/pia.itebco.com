<template>
    <base-input :label="label" addon-right-icon="far fa-calendar-alt" type="text" :name="name" v-model="bdbValue" :is-wrapper="true" :required="required">
        <date-picker v-model="bdbValue" :config="vars.datepickerRangeConfig" :class="['form-control datepicker', inputClasses]" :disabled="disabled" />
    </base-input>
</template>
<script>
    import { mapGetters } from 'vuex'
    export default {
        name: "date-between",
        props: {
            start: {
                type: String,
            },
            end: {
                type: String,
            },
            label: {
                type: String,
                default: 'Date Between'
            },
            name: {
                type: String,
                default: 'betweenDates'
            },
            disabled: {
                type: Boolean,
                default: false
            },
            required: {
                type: Boolean,
                default: false
            },
            inputClasses: {
                type: String,
                default: ''
            },
        },
        data() {
            return {
                value: '',
            }
        },
        computed: {
            ...mapGetters('config', [
                'vars',
            ]),
            bdbValue: {
                get() {
                    if(this.start) {
                        this.value = this.start

                        if(this.end) {
                            this.value = this.value + ' to ' + this.end
                        }
                    } else {
                        this.value = ''
                    }
                    return this.value
                },
                set(newValue) {
                    if(newValue) {
                        const dates = newValue.split(' to ')
                        if(dates.length > 1) {
                            this.$emit('update:start', dates[0])
                            this.$emit('update:end', dates[1])
                        } else {
                            this.$emit('update:start', newValue)
                            this.$emit('update:end', '')
                        }
                    } else {
                        this.value = ''
                        this.$emit('update:start', '')
                        this.$emit('update:end', '')
                    }
                }
            },
        },
    }

</script>