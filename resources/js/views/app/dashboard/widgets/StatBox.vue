<template>
    <card shadow class="stat-widget min-height-150px">
        <slot>
            <div class="stat-details">
                <h5 class="card-title text-uppercase mb-2 nowrap">{{ stat.label }}</h5>
                <div class="row">
                    <div class="col d-flex align-items-center">
                        <span class="h3 font-weight-bold mb-0">{{ stat.value }}</span>
                    </div>
                    <div class="col-auto">
                        <div class="icon icon-shape text-white rounded-circle shadow" :class="stat.color">
                            <animated-loader :is-loading="isFetching" :loader-color="vars.colors.white" overlay-color="transparent" />
                            <i v-if="!isFetching" :class="stat.icon"></i>
                        </div>
                    </div>
                </div>
                <p class="mt-2 mb-0 text-muted text-sm  nowrap" v-if="stat.extra && stat.extra.today">
                    <span :class="['mr-1', stat.extra.today.color]"><i :class="stat.extra.today.icon"></i> </span>
                    <span :class="['d-inline-block mb-0 mr-1', stat.extra.today.color]">{{ stat.extra.today.value }} {{ stat.extra.today.label }}</span>
                </p>
            </div>
        </slot>
    </card>
</template>

<script>
    import { mapGetters } from 'vuex'

    export default {
        name: "stat-box",
        props: {
            stat: {
                type: Object,
            },
            isFetching: {
                type: Boolean,
                default: true
            },
        },
        data() {
            return {
                // isLoading: true,
            }
        },
        computed: {
            ...mapGetters('config', [
                'vars',
            ]),
        },
        methods: {
        },
        mounted() {
        },
    }

</script>
<style lang="scss" scoped>
    @import "~@js/core/assets/scss/imports.scss";

    .stat-widget {
        .card-title {
            font-size: 0.85rem;
            font-weight: 600;
            color: $gray-dark;
        }   
    }
</style>