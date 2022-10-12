<template>
    <section class="error-page">
        <slot></slot>
    </section>
</template>

<script>
    export default {}

</script>
<style lang="scss" scoped>
    @import '~@js/core/assets/scss/imports.scss';
    .error-page {
        color: white;
        padding: 2rem 0;

        .error_bg {
            // background-image: url('~@images/errors/error-animation.gif');
            height: 340px;
            background-size: 95%;
            background-position: center;
            background-repeat: no-repeat;
        }

        h1 {
            font-size: 8em;
            font-weight: 900;
            color: inherit;
            margin: 0;
            line-height: 7rem;
            letter-spacing: 1.5rem;
        }
        h2 {
            font-size: 4rem;
            color: inherit;
            font-weight: 300;
            margin-bottom: 1rem;
        }
        h3 {
            font-size: 36px;
            color: inherit;
            margin-top: 1.5rem;
            font-weight: 300;
        }
        p {
            font-size: 18px;
            font-weight: 500;
        }
        
        hr {
            border-color: white;
            border-width: 2px;
        }
    }

    @include media-breakpoint-down(sm) {
        .error-page {
            .error_bg {
                height: 40vh;
            }
            h1 {
                font-size: 5em;
                font-weight: 800;
                line-height: 5rem;
                letter-spacing: 0.5rem;
            }
            h2 {
                font-size: 2rem;
                margin-bottom: 1rem;
            }
            h3 {
                font-size: 1.5rem;
                margin-top: 1.5rem;
                font-weight: 400;
            }
            p {
                font-size: 14px;
                font-weight: 400;
            }
            
            hr {
                border-width: 1px;
                margin: 1rem 0;
            }

            a.btn {
                position: fixed;
                bottom: 0;
                left: 0;
                width: 100%;
                border-radius: 0;
                box-shadow: none;
                &:hover {
                    box-shadow: none;
                    transform: translateY(0px);
                }
            }
        }
    }

</style>
