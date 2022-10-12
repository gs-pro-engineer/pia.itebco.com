<template>
    <base-container boxed with-loader :is-loading="isLoading" :loader-color="vars.loaderColor" class="p-0 flex-grow">

        <table-wrapper v-if="isInitialized" :meta="entities.meta" :filtered="isFiltered" add-button-route="appConfigLocaleAdd" entity-title="config.locale.locales" entities-title="config.locale.locales" entity-description="config.locale.module_description">

            <b-table v-show="entities.meta.total" ref="btable" :items="itemsProvider" :fields="fields" :busy.sync="isLoading" hover striped stacked="sm" :per-page="entities.meta.perPage" :current-page="entities.meta.currentPage" :filters="null">

                    <template #cell(isDefault)="row">
                        <badge v-if="row.item.isDefault" rounded type="dark"><i class="fas fa-check"></i> {{ $t('config.locale.props.default') }}</badge>
                    </template>

                <template #cell(actions)="row">
                    <!-- We use @click.stop here to prevent a 'row-clicked' event from also happening -->
                    <div class="btn-group" role="group" aria-label="Actions Buttons">
                        <base-button type="button" size="sm" design="dark" v-if="! row.item.isDefault" v-b-tooltip.hover.d500 :title="$t('global.delete', { attribute: $t('config.locale.locale')})" @click.stop="deleteEntity(row.item)"><i class="fas fa-trash"></i></base-button>
                    </div>
                </template>

            </b-table>
        </table-wrapper>
    </base-container>
</template>

<script>
    import table from '@mixins/table'
    import * as headerMixins from '@mixins/header'

    export default {
        extends: table,
        data() {
            return {
                fields: [
                    {
                        key: 'name',
                        label: $t('config.locale.props.name'),
                        sort: 'name'
                    },
                    {
                        key: 'isDefault',
                        label: $t('config.locale.props.is_default'),
                    },
                    {
                        key: 'actions',
                        label: '',
                        cantHide: true,
                        tdClass: 'actions-wrapper'
                    },
                ],
                permissionsRequired: 'access-config',
                routesRequired: {
                    add: 'appConfigLocaleAdd',
                },
                initUrl: 'config/locales',
                dataType: 'locale',
                hideFilterButton: true,
                headerButtons: [
                    headerMixins.headerRouteButton($t('config.locale.translation'), 'fas fa-language', 'appConfigLocaleTranslation', $t('config.locale.translation'))
                ],
            }
        },
        mounted() {
            this.updatePageMeta()
        },
    }

</script>
