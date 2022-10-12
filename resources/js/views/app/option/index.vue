<template>
    <base-container boxed with-loader :is-loading="isLoading" :loader-color="vars.loaderColor" class="p-0 flex-grow">

        <table-wrapper v-if="isInitialized" :meta="entities.meta" :filtered="isFiltered" :add-button-route="routesRequired.add" :entity-title="entityTitle" :entities-title="entitiesTitle" :entity-description="entityDescription">

            <b-table v-show="entities.meta.total" ref="btable" :items="itemsProvider" :fields="fields" :busy.sync="isLoading" hover striped stacked="sm" :per-page="entities.meta.perPage" :current-page="entities.meta.currentPage" :filters="null">

                <template #cell(createdAt)="row">
                    <view-date :value="row.item.createdAt" with-tz tag="span" class="mb-0" />
                </template>

                <template #cell(updatedAt)="row">
                    <view-date :value="row.item.updatedAt" with-tz tag="span" class="mb-0" />
                </template>

                <template #cell(actions)="row">
                    <div class="btn-group" role="group" aria-label="Actions Buttons">
                        <base-button v-if="hasPermission(permissionsRequired)" type="button" size="sm" design="dark" v-b-tooltip.hover.d500 :title="$t('global.edit', { attribute: $t(entityTitle)})" @click.stop="$router.push({ name: `${routeNamePrefix}Edit`, params: { uuid: row.item.uuid } })"><i class="fas fa-edit"></i></base-button>
                        <base-button v-if="hasPermission(permissionsRequired)" type="button" size="sm" design="dark" v-b-tooltip.hover.d500 :title="$t('global.delete', { attribute: $t(entityTitle)})" @click.stop="deleteEntity(row.item)"><i class="fas fa-trash"></i></base-button>
                    </div>
                </template>

            </b-table>
        </table-wrapper>
    </base-container>
</template>

<script>
    import table from '@mixins/table'

    export default {
        components: {},
        extends: table,
        data() {
            return {
                fields: [{
                        key: 'name',
                        label: $t('option.props.name'),
                        sort: 'name',
                    },
                    {
                        key: 'slug',
                        label: $t('option.props.slug'),
                        sort: 'slug',
                    },
                    {
                        key: 'description',
                        label: $t('option.props.description'),
                    },
                    {
                        key: 'parent.name',
                        label: $t('option.props.parent'),
                        sort: 'parent_id',
                    },
                    {
                        key: 'createdAt',
                        label: $t('general.created_at'),
                        sort: 'created_at',
                        transformer: 'date',
                        thClass: 'd-none',
                        tdClass: 'd-none',
                    },
                    {
                        key: 'updatedAt',
                        label: $t('general.updated_at'),
                        sort: 'updated_at',
                        transformer: 'date',
                        thClass: 'd-none',
                        tdClass: 'd-none',
                    },
                    {
                        key: 'actions',
                        label: '',
                        cantHide: true,
                        tdClass: 'actions-wrapper'
                    },
                ],
                preRequisite: {
                    options: [],
                },
                filtersOptions: {
                    name: '',
                },
                permissionsRequired: 'access-config',
                routesRequired: {},
                initUrl: 'options',
                dataType: 'option',
                entityTitle: 'option.option',
                entitiesTitle: 'option.options',
                entityDescription: 'option.module_description',
                hasSlug: false,
                hasParent: false,
                hideFilterButton: true,
                routeNamePrefix: '',
            }
        },
        mounted() {
            this.getInitialData()
        },
        beforeMount() {
            const meta = this.$route.meta
            this.customFilters.type = meta.optionType
            this.entityTitle = meta.entityTitle
            this.entitiesTitle = meta.entitiesTitle
            this.entityDescription = meta.entityDescription
            this.permissionsRequired = meta.permissionRequired
            this.routeNamePrefix = meta.routeNamePrefix
            this.routesRequired.add = `${meta.routeNamePrefix}Add`
            this.fields = this.fields.filter(f => {
                if(f.key === 'slug') {
                    return meta.hasSlug
                } else if(f.key === 'parent.name') {
                    return meta.hasParent
                }
                return true
            })
        },
    }

</script>
