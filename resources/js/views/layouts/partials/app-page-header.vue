<template>
    <app-page-header-wrapper v-if="uiConfigs.pageHeaderShow">
        <div class="page-header-content">
            <div class="header-breadcrumb-wrapper">
                <transition-group appear tag="h4" name="title" class="page-header-title">
                    <span key="Just"></span><span :key="pageTitle">{{ pageTitle }} <span class="text-muted text-sm">{{ pageSubTitle }}</span></span>
                </transition-group>
                <template v-if="!hideBreadcrumbs">
                    <app-breadcrumb class="breadcrumb-icon-bars" />
                </template>
            </div>

            <div class="action-buttons-wrapper">
                <div class="action-buttons">
                    <slot />
                </div>
            </div>
        </div>
    </app-page-header-wrapper>
</template>

<script>
    import { mapGetters } from 'vuex'
    import AppPageHeaderWrapper from './app-page-header-wrapper'
    import AppBreadcrumb from './app-breadcrumb'

    export default {
        props: ['hideBreadcrumbs'],
        components: {
            AppPageHeaderWrapper,
            AppBreadcrumb,
        },
        computed: {
            ...mapGetters('common', [
                'pageHeader',
            ]),
            ...mapGetters('config', [
                'uiConfigs',
            ]),
            pageTitle() {
                if(this.pageHeader && this.pageHeader.title) {
                    return this.pageHeader.title
                }
                return this.$route.meta.trans ? ( this.$t(this.$route.meta.trans, {'attribute': this.$t(this.$route.meta.midTitle) + ' ' + this.$t(this.$route.meta.title)}) ) : this.$t(this.$route.meta.midTitle) + ' ' + this.$t(this.$route.meta.title)
            },
            pageSubTitle() {
                return this.pageHeader && this.pageHeader.subTitle ? this.pageHeader.subTitle : ''
            }
        },
    }
</script>
