<template>
    <base-container boxed with-loader :is-loading="isLoading" :loader-color="vars.loaderColor">
        <form @submit.prevent="submit">
            <h4>{{ $t('config.ui.color_scheme') }}</h4>
            <hr class="mt-3 mb-4">

            <div class="row">
                <div class="col-12 mb-5">
                    <div class="d-flex align-items-center flex-wrap">
                        <base-radio v-for="scheme in colorSchemes" :key="scheme.key" :value="scheme.key" v-model="formData.colorScheme" inline has-image class="scheme-item-class">

                            <img src="@images/config/nav_icon_alignment_left.jpg">

                            <swatch class="mt-3" :colors="actions.colorScheme[scheme.key]" />

                            <div class="mt-2 text-center text-muted">{{ scheme.title }}</div>
                        </base-radio>

                        <base-radio value="custom" v-model="formData.colorScheme" inline has-image class="scheme-item-class">

                            <img src="@images/config/nav_icon_alignment_left.jpg">

                            <swatch class="mt-3" :colors="currentColors" />

                            <div class="mt-2 text-center text-muted">Custom</div>
                        </base-radio>
                    </div>
                </div>
            </div>


            <div class="text-right mt-5">
                <base-button type="button" design="light" @click="reset">{{ $t('general.reset') }}</base-button>
                <base-button type="submit" design="primary">{{ $t('general.save') }}</base-button>
            </div>

        </form>
    </base-container>
</template>

<script>
    import form from '@mixins/ui-config-form'
    import Swatch from './swatch'

    export default {
        extends: form,
        components: {
            Swatch,
        },
        computed: {
            currentColors() {
                return  {
                    pageBackgroundColor: this.formData.pageBackgroundColor,
                    pageContainerBackgroundColor: this.formData.pageContainerBackgroundColor,
                    pageHeaderBackgroundColor: this.formData.pageHeaderBackgroundColor,
                    leftSidebarColor: this.formData.leftSidebarColor,
                    rightSidebarColor: this.formData.rightSidebarColor,
                    modalSidebarColor: this.formData.modalSidebarColor,
                    specialSidebarColor: this.formData.specialSidebarColor,
                    topNavbarColor: this.formData.topNavbarColor
                }
            }
        },
    }

</script>
<style lang="scss" scoped>
    .color-item {
        width: 100%;
    }

    .color-list {
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex-wrap: wrap;

        > .color-item {
            flex: 0 50%;
        }
    }

    .scheme-item-class {
         flex-basis: 23%;
         flex-grow: 1;
    }

</style>
