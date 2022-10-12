<template>
    <div :class="['vue-circular-progress', `percent-size-${percentSize}`]">
        <div class="circle">
            <svg :width="circleSize" :height="circleSize" class="circle__svg">
                <circle :cx="centralP" :cy="centralP" :r="radius" :style="{ 'stroke-width': strokeWidth, stroke: strokeColor }" class="circle__progress circle__progress--path"></circle>
                <circle :cx="centralP" :cy="centralP" :r="radius" :style="fileStyl" class="circle__progress circle__progress--fill"></circle>
            </svg>

            <div class="percent">
                <slot>
                    <span class="percent__int">{{ value }}</span>
                    <span class="percent_sign">%</span>
                </slot>
            </div>
        </div>
        <slot name="footer"></slot>
    </div>
</template>

<script>
    export default {
        name: 'ProgressRing',
        props: {
            strokeWidth: {
                type: Number,
                default: 4
            },
            radius: {
                type: Number,
                default: 38
            },
            percentSize: {
                type: String,
                default: 'fz'
            },
            transitionDuration: {
                type: Number,
                default: 1000
            },
            strokeColor: {
                type: String,
                default: "#aaff00"
            },
            value: {
                validator: function(value) {
                    // should be a number and less or equal than 100
                    return !Number.isNaN(Number(value)) && Number(value) <= 100
                },
                default: "0.0"
            }
        },
        data() {
            return {
                offset: "",
                int: 0,
                dec: "00"
            }
        },
        computed: {
            circumference() {
                return this.radius * Math.PI * 2
            },
            fileStyl() {
                return {
                    strokeDashoffset: this.offset,
                    "--initialStroke": this.circumference,
                    "--transitionDuration": `${this.transitionDuration}ms`,
                    "stroke-width": this.strokeWidth,
                    stroke: this.strokeColor
                }
            },
            circleSize() {
                return (this.radius + this.strokeWidth) * 2
            },
            centralP() {
                return this.circleSize / 2
            }
        },
        methods: {
            countNumber: _.debounce(function(v) {
                this.offset = parseInt((this.circumference * (100 - v)) / 100)
            }, 100),
        },
        watch: {
            value: {
                handler: function(v) {
                    const n = Number(v)
                    if (Number.isNaN(n) || n == 0) {
                        return
                    }
                    this.countNumber(v)
                },
                immediate: true
            }
        },
    }

</script>
<style lang="scss">
    @import '~@js/core/assets/scss/imports.scss';

    .vue-circular-progress {
        display: inline-block;

        .circle {
            position: relative;
        }

        .circle__svg {
            transform: rotate(-90deg);
        }

        .circle__progress {
            fill: none;
            stroke-opacity: 0.3;
            stroke-linecap: round;
        }

        .circle__progress--fill {
            --initialStroke: 0;
            --transitionDuration: 0;
            stroke-opacity: 1;
            stroke-dasharray: var(--initialStroke);
            stroke-dashoffset: var(--initialStroke);
            transition: stroke-dashoffset var(--transitionDuration) ease;
        }

        .percent {
            width: 100%;
            top: 50%;
            left: 50%;
            position: absolute;
            font-weight: bold;
            text-align: center;
            line-height: $circular-progress-int-fz;
            transform: translate(-50%, -50%);
        }

        .percent__int {
            font-size: $circular-progress-int-fz;
        }

        .percent__dec,
        .percent_sign {
            font-size: $circular-progress-dec-fz;
        }

        .label {
            font-size: 14px;
            text-transform: uppercase;
            margin-top: 15px;
        }

        &.percent-size-sm {
            .percent {
                line-height: $circular-progress-int-sm;
            }

            .percent__int {
                font-size: $circular-progress-int-sm;
            }

            .percent__dec,
            .percent_sign {
                font-size: $circular-progress-dec-sm;
            }
        }
    }

</style>
