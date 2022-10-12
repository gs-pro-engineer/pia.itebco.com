<template>
    <div class="inner-sidebar-layout-wrapper" id="printable">
        <div class="inner-sidebar-layout">
            <div class="inner-sidebar">
                <profile-page-sidebox :is-loading="isLoading" :loader-color="vars.colors.white" :class="['p-0', innerSidebarBoxClasses]">
                    <slot name="sidebarMainContent" />
                </profile-page-sidebox>

                <slot name="sidebarSubContent" />
            </div>

            <div class="inner-content-wrapper">
                <slot name="mainContent" />
            </div>
        </div>

        <slot name="subContent" />
    </div>
</template>

<script>
    import { mapGetters } from 'vuex'
    import ProfilePageSidebox from '@components/ProfilePageSidebox'
    export default {
        components: {
            ProfilePageSidebox,
        },
        props: {
            isLoading: {
                type: Boolean,
                default: false
            },
            loaderColor: {
                type: String,
                default: '#000000'
            },
            innerSidebarBoxClasses: {
                type: String,
                default: 'p-0'
            },
        },
        computed: {
            ...mapGetters('config', [
                'vars',
            ]),
        },
    }

</script>
