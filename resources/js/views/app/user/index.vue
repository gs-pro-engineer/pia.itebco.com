<template>
    <div class="entity-list-container">
        <collapse-transition :group="true" :duration="300" tag="div">
            <filter-form v-if="showFilters" @close="toggleFilter" key="filters" :boxed="true" :pre-requisite="preRequisite" :is-loading="isLoading" />

            <base-container boxed with-loader :is-loading="isLoading" :loader-color="vars.loaderColor" class="p-0" key="list">

                <table-wrapper v-if="isInitialized" :meta="entities.meta" :filtered="isFiltered" add-button-route="appUserAdd" :add-button-permissions="['create-user']" entity-title="user.user" entities-title="user.users" entity-description="user.module_description">

                    <b-table v-show="entities.meta.total" ref="btable" :items="itemsProvider" :fields="fields" :busy.sync="isLoading" hover striped stacked="sm" :per-page="entities.meta.perPage" :current-page="entities.meta.currentPage" :filters="null" @row-dblclicked="rowClickHandler({route: 'appUserView'}, $event)">

                        <template #cell(createdAt)="row">
                            <view-date :value="row.item.createdAt" with-tz tag="span" class="mb-0" />
                        </template>

                        <template #cell(updatedAt)="row">
                            <view-date :value="row.item.updatedAt" with-tz tag="span" class="mb-0" />
                        </template>

                        <template #cell(profile)="row">
                            <view-user :value="row.item" :show-sub="false" inline-sub :show-image="false" class="m-0" data-classes="m-0" />
                        </template>

                        <template #cell(status)="row">
                            <badge v-if="row.item.status" rounded :type="vars.colorsForStatus[row.item.status]">{{ getStatusText(row.item.status) }}</badge>
                        </template>

                        <template #cell(hasActiveMembership)="row">
                            <span v-if="row.item.hasActiveMembership" class="text-success" v-b-tooltip.hover.left :title="$t('membership.has_active_membership')"><i class="far fa-id-badge"></i></span>
                            <span v-else class="text-light" v-b-tooltip.hover.left :title="$t('membership.no_active_membership')"><i class="far fa-id-badge"></i></span>
                        </template>

                        <template #cell(role)="row">
                            <badge rounded type="dark">{{ row.item.role.name }}</badge>
                        </template>

                        <template #cell(actions)="row">
                            <table-row-actions>
                                <router-link class="dropdown-item" :to="{ name: 'appUserView', params: { uuid: row.item.uuid } }"><i class="fas fa-arrow-circle-right"></i> {{ $t('global.view', { attribute: $t('user.user')}) }}</router-link>

                                <router-link v-if="hasPermission('edit-user')" class="dropdown-item" :to="{ name: 'appUserEdit', params: { uuid: row.item.uuid } }"><i class="fas fa-edit"></i> {{ $t('global.edit', { attribute: $t('user.user')}) }}</router-link>

                                <a v-if="hasPermission('delete-user')" class="dropdown-item" @click.stop="deleteEntity(row.item)"><i class="fas fa-trash"></i> {{ $t('global.delete', { attribute: $t('user.user')}) }}</a>
                            </table-row-actions>
                        </template>

                    </b-table>
                </table-wrapper>
            </base-container>
        </collapse-transition>
    </div>
</template>

<script>
    import table from '@mixins/table'
    import FilterForm from './filter'

    export default {
        components: {
            FilterForm,
        },
        extends: table,
        data() {
            return {
                fields: [
                    {
                        key: 'profile',
                        label: $t('user.props.name'),
                        sort: 'name',
                    },
                    {
                        key: 'email',
                        label: $t('user.props.email'),
                    },
                    {
                        key: 'username',
                        label: $t('user.props.username'),
                        sort: 'username',
                    },
                    {
                        key: 'role',
                        label: $t('config.role.role'),
                    },
                    {
                        key: 'status',
                        label: $t('user.props.status'),
                        sort: 'status',
                        transformer: 'badgeStatusYesNo',
                    },
                    {
                        key: 'hasActiveMembership',
                        label: '',
                        headerTitle: $t('membership.membership'),
                        tdClass: 'text-center',
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
                        tdClass: 'actions-dropdown-wrapper'
                    },
                ],
                filtersOptions: {
                    name: '',
                    username: '',
                    email: '',
                },
                sortOptions: {
                    hasScroll: true,
                },
                columnsOptions: {
                    hasScroll: true,
                },
                permissionsRequired: 'create-user',
                routesRequired: {
                    add: 'appUserAdd',
                },
                initUrl: 'users',
                dataType: 'user',
            }
        },
        methods: {
            getStatusText(str) {
                return str.replace('_', ' ')
            },
        },
        mounted() {
            this.updatePageMeta()
        },
    }

</script>
