<template>
    <base-container boxed with-loader :is-loading="isLoading" :loader-color="vars.loaderColor" class="p-0 flex-grow">

        <table-wrapper v-if="isInitialized" :meta="entities.meta" :filtered="isFiltered" add-button-route="appConfigRoleAdd" entity-title="config.role.roles" entities-title="config.role.roles" entity-description="config.role.module_description">

            <b-table v-show="entities.meta.total" ref="btable" :items="itemsProvider" :fields="fields" :busy.sync="isLoading" hover striped stacked="sm" :per-page="entities.meta.perPage" :current-page="entities.meta.currentPage" :filters="null">

                    <template #cell(isDefault)="row">
                        <badge v-if="row.item.isDefault" rounded type="primary"><i class="fas fa-check"></i> {{ $t('config.role.props.default') }}</badge>
                    </template>

                <template #cell(actions)="row">
                    <!-- We use @click.stop here to prevent a 'row-clicked' event from also happening -->
                    <div class="btn-group" role="group" aria-label="Actions Buttons">
                        <base-button type="button" size="sm" design="dark" v-if="! row.item.isDefault" v-b-tooltip.hover.d500 :title="$t('global.delete', { attribute: $t('config.role.role')})" @click.stop="deleteEntity(row.item)"><i class="fas fa-trash"></i></base-button>
                    </div>
                </template>

            </b-table>
        </table-wrapper>
    </base-container>
</template>

<script>
    import table from '@mixins/table'

    export default {
        extends: table,
        data() {
            return {
                fields: [
                    {
                        key: 'name',
                        label: $t('config.role.props.name'),
                        sort: 'name'
                    },
                    {
                        key: 'isDefault',
                        label: $t('config.role.props.is_default'),
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
                    add: 'appConfigRoleAdd',
                },
                initUrl: 'config/roles',
                dataType: 'role',
                hideFilterButton: true,
            }
        },
        mounted() {
            this.updatePageMeta()
        },
    }

</script>
