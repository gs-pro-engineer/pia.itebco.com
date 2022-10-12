<template>
    <div class="entity-list-container">
        <collapse-transition :group="true" :duration="300" tag="div">
            <filter-form v-if="showFilters" @close="toggleFilter" key="filters" :boxed="true" :pre-requisite="preRequisite" :is-loading="isLoading" />
            
            <base-container boxed with-loader :is-loading="isLoading" :loader-color="vars.loaderColor" class="p-0" key="list">

                <table-wrapper v-if="isInitialized" :meta="entities.meta" :filtered="isFiltered" add-button-route="appContactAdd" :add-button-permissions="['access-contact']" entity-title="contact.contact" entities-title="contact.contacts" entity-description="contact.module_description">

                    <b-table v-show="entities.meta.total" ref="btable" :items="itemsProvider" :fields="fields" :busy.sync="isLoading" hover striped stacked="sm" :per-page.number="entities.meta.perPage" :current-page="entities.meta.currentPage" :filters="null">

                        <template #cell(createdAt)="row">
                            <view-date :value="row.item.createdAt" with-tz tag="span" class="mb-0" />
                        </template>

                        <template #cell(updatedAt)="row">
                            <view-date :value="row.item.updatedAt" with-tz tag="span" class="mb-0" />
                        </template>

                        <template #cell(segments)="row">
                            <view-list v-if="row.item.segments.length < 3" :value="row.item.segments" type="badge" badge-type="dark" class="mb-0" />

                            <template v-else>
                                <view-list :value="row.item.segments" type="badge" badge-type="dark" class="mb-0" :limit="2">
                                    <template #addOnRight>
                                        <badge type="light" class="mb-0">+ {{ row.item.segments.length - 2 }} {{ $t('contact.segment.segments') }}</badge>
                                    </template>
                                </view-list>
                            </template>
                        </template>

                        <template #cell(user)="row">
                            <router-link v-if="row.item.user" :to="{ name: 'appUserView', params: { uuid: row.item.user.uuid } }" class="btn btn-sm btn-light" v-b-tooltip.hover.d500 :title="$t('global.view', { attribute: $t('user.user')})"><i class="fas fa-user"></i></router-link>
                        </template>

                        <template #cell(actions)="row">
                            <table-row-actions>
                                <router-link v-if="hasPermission('access-contact')" class="dropdown-item" :to="{ name: 'appContactEdit', params: { uuid: row.item.uuid } }"><i class="fas fa-edit"></i> {{ $t('global.edit', { attribute: $t('contact.contact')}) }}</router-link>

                                <a v-if="hasPermission('access-contact')" class="dropdown-item" @click.stop="deleteEntity(row.item)"><i class="fas fa-trash"></i> {{ $t('global.delete', { attribute: $t('contact.contact')}) }}</a>
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
                        key: 'email',
                        label: $t('contact.props.email'),
                    },
                    {
                        key: 'name',
                        label: $t('contact.props.name'),
                        sort: 'name',
                    },
                    {
                        key: 'user',
                        label: $t('user.user'),
                    },
                    {
                        key: 'segments',
                        label: $t('contact.segment.segments'),
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
                    email: '',
                },
                permissionsRequired: 'access-contact',
                routesRequired: {
                    add: 'appContactAdd',
                    import: 'appContactImport',
                },
                initUrl: 'contacts',
                dataType: 'contact',
            }
        },
        mounted() {
            this.updatePageMeta()
        },
    }

</script>
