<template>
    <div class="row">
        <div class="col main">
            <div class="page">
                <router-view name="header" />

                <router-view name="special" />

                <transition-page>
                    <router-view />
                </transition-page>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'AppContentContainer',
        beforeRouteEnter(to, from, next) {
            next(vm => {
                vm.$store.state.config.appIsLoading = false
            })
        },
    }

</script>

<style lang="scss" scoped>
    @import '~@js/core/assets/scss/imports.scss';

    @include media-breakpoint-down(md) {
        .main {
            margin-top: $side-margin * 2;
        }
    }
</style>
