<template>
    <div class="entity-list-container">
        <collapse-transition :group="true" :duration="300" tag="div">
            <filter-form v-if="showFilters" @close="toggleFilter" key="filters" :boxed="true" :pre-requisite="preRequisite" :is-loading="isLoading" />

            <base-container boxed with-loader :is-loading="isLoading" :loader-color="vars.loaderColor" class="p-0" key="list">

                <table-wrapper v-if="isInitialized" :meta="entities.meta" :filtered="isFiltered" add-button-route="appUtilityNoteAdd" :add-button-permissions="['manage-note']" entity-title="utility.note.note" entities-title="utility.note.notes" entity-description="utility.note.module_description">

                    <b-table v-show="entities.meta.total" ref="btable" :items="itemsProvider" :fields="fields" :busy.sync="isLoading" hover striped stacked="sm" :per-page="entities.meta.perPage" :current-page="entities.meta.currentPage" :filters="null">

                        <template #cell(createdAt)="row">
                            <view-date :value="row.item.createdAt" :to-format="vars.defaultDateTimeFormat" tag="span" class="mb-0" />
                        </template>

                        <template #cell(uploads)="row">
                            <badge rounded type="primary"><i class="fas fa-paperclip"></i> {{ row.item.uploads.length }}</badge>
                        </template>

                        <template #cell(status)="row">
                            <badge v-if="row.item.status" rounded type="primary"><i class="far fa-check-circle"></i> {{ $t('general.yes') }}</badge>
                            <badge v-else rounded type="dark"><i class="far fa-circle"></i> {{ $t('general.no') }}</badge>
                        </template>

                        <template #cell(user)="row">
                            <view-user :value="row.item.user" :show-sub="false" inline-sub :show-image="false" class="m-0" data-classes="m-0" />
                        </template>

                        <template #cell(actions)="row">
                            <table-row-actions>
                                <router-link class="dropdown-item" :to="{ name: 'appUtilityNoteView', params: { uuid: row.item.uuid } }"><i class="fas fa-arrow-circle-right"></i> {{ $t('global.view', { attribute: $t('utility.note.note')}) }}</router-link>

                                <router-link class="dropdown-item" :to="{ name: 'appUtilityNoteEdit', params: { uuid: row.item.uuid } }"><i class="fas fa-edit"></i> {{ $t('global.edit', { attribute: $t('utility.note.note')}) }}</router-link>

                                <router-link class="dropdown-item" :to="{ name: 'appUtilityNoteDuplicate', params: { uuid: row.item.uuid } }"><i class="fas fa-copy"></i> {{ $t('global.duplicate', { attribute: $t('utility.note.note')}) }}</router-link>

                                <a class="dropdown-item" @click.stop="deleteEntity(row.item)"><i class="fas fa-trash"></i> {{ $t('global.delete', { attribute: $t('utility.note.note')}) }}</a>
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
                        key: 'title',
                        label: $t('utility.note.props.title'),
                        sort: 'title',
                    },
                    {
                        key: 'uploads',
                        label: $t('upload.attachments'),
                        cantExport: true,
                    },
                    {
                        key: 'createdAt',
                        label: $t('general.created_at'),
                        sort: 'created_at',
                        transformer: 'date',
                    },
                    {
                        key: 'visibility',
                        label: $t('utility.note.props.visibility'),
                        sort: 'visibility',
                    },
                    {
                        key: 'status',
                        label: $t('utility.note.props.status'),
                        sort: 'status',
                        transformer: 'badgeStatusYesNo',
                    },
                    {
                        key: 'user',
                        label: $t('user.user'),
                        transformer: 'user',
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
                    title: '',
                    code: '',
                    status: '',
                },
                permissionsRequired: {
                    add: 'manage-note',
                    config: 'manage-note-config',
                },
                routesRequired: {
                    add: 'appUtilityNoteAdd',
                    config: 'appUtilityNoteConfig',
                },
                initUrl: 'utility/notes',
                dataType: 'note',
            }
        },
        mounted() {
            this.updatePageMeta()
        },
    }

</script>
