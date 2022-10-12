<template>
    <div :class="['notification-outer-wrapper']">
        <div :class="['notification-inner-wrapper', innerClasses]">

            <div :class="['notification', notificationClasses]">

                <div :class="['notification-icon', iconClasses]">
                    <i :class="icons[type]"></i>
                </div>

                <div :class="['notification-details', detailClasses]">
                    <h5 v-if="title" :class="['title', titleClasses]">{{ title }}</h5>
                    <div v-if="description" :class="['description', descClasses]">{{ description }}</div>
                </div>

            </div>


            <div :class="['notification-actions', notificationClasses]">
            </div>


        </div>
    </div>
</template>

<script>
export default {
    name: 'notification',
    props: {
        type: {
            type: String,
            default: 'info',
        },
        design: {
            type: String,
            default: 'normal',
        },
        opts: {
            type: Object,
            default() {
                return {}
            },
        },
        title: {
            type: String,
            default: null,
        },
        description: {
            type: String,
            default: null,
        },
        innerClasses: {
            type: String,
            default: '',
        },
        notificationClasses: {
            type: String,
            default: '',
        },
        iconClasses: {
            type: String,
            default: '',
        },
        detailClasses: {
            type: String,
            default: '',
        },
        titleClasses: {
            type: String,
            default: '',
        },
        descClasses: {
            type: String,
            default: '',
        },
    },
    data() {
        return {
            options: {

            },
            isLoading: false,
            icons: {
                'default': 'fas fa-bell',
                'info': 'fas fa-info-circle',
                'success': 'fas fa-check-circle',
                'error': 'fas fa-exclamation-triangle',
                'call': 'fas fa-phone-alt',
            }
        }
    },
    computed: {

    },
    watch: {
        opts(oldVal, newVal) {
            newVal.objForEach((value, key) => this.options[key] = value)
        },
    },
    methods: {

    },
    mounted() {

    },
    created() {

    },
    beforeDestroy() {

    },
    destroyed() {

    },
};
</script>
