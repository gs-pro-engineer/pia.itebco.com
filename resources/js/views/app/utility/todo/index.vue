<template>
    <div class="entity-list-container">
        <collapse-transition :group="true" :duration="300" tag="div">
            <filter-form v-if="showFilters" @close="toggleFilter" key="filters" :boxed="true" :pre-requisite="preRequisite" :is-loading="isLoading" />

            <base-container boxed with-loader :is-loading="isLoading" :loader-color="vars.loaderColor" class="p-0" key="list">

                <table-wrapper v-if="isInitialized" :meta="entities.meta" :filtered="isFiltered" add-button-route="appUtilityTodoAdd" :add-button-permissions="['access-todo']" entity-title="utility.todo.todo" entities-title="utility.todo.todos" entity-description="utility.todo.module_description">

                    <b-table v-show="entities.meta.total" ref="btable" :items="itemsProvider" :fields="fields" :busy.sync="isLoading" hover striped stacked="sm" :per-page="entities.meta.perPage" :current-page="entities.meta.currentPage" :filters="null" @row-dblclicked="rowClickHandler({route: 'appUtilityTodoView'}, $event)">

                        <template #cell(date)="row">
                            <view-date v-if="row.item.time" :value="`${row.item.date} ${row.item.time}`" with-tz tag="span" class="mb-0" />
                            <view-date v-else :value="row.item.date" tag="span" class="mb-0" />
                        </template>

                        <template #cell(completedAt)="row">
                            <view-date :value="row.item.completedAt" with-tz tag="span" class="mb-0" />
                        </template>

                        <template #cell(status)="row">
                            <div class="pointer" @click.stop="toggleTodo(row.item)">
                                <badge v-if="row.item.status" rounded type="primary"><i class="far fa-check-circle"></i> {{ $t('utility.todo.completed') }}</badge>
                                <badge v-else rounded type="dark"><i class="far fa-circle"></i> {{ $t('utility.todo.incomplete') }}</badge>
                            </div>
                        </template>

                        <template #cell(actions)="row">
                            <base-button type="button" size="sm" design="" :class="row.item.status ? 'text-success' : 'text-dark'" v-b-tooltip.hover.d500 :title="$t('global.toggle', { attribute: $t('utility.todo.todo')})" @click.stop="toggleTodo(row.item)">
                                <i v-if="row.item.status" class="fas fa-check-circle"></i>
                                <i v-else class="fas fa-times-circle"></i>
                            </base-button>

                            <table-row-actions>
                                <router-link class="dropdown-item" :to="{ name: 'appUtilityTodoView', params: { uuid: row.item.uuid } }"><i class="fas fa-arrow-circle-right"></i> {{ $t('global.view', { attribute: $t('utility.todo.todo')}) }}</router-link>

                                <router-link v-if="hasPermission('edit-user')" class="dropdown-item" :to="{ name: 'appUtilityTodoEdit', params: { uuid: row.item.uuid } }"><i class="fas fa-edit"></i> {{ $t('global.edit', { attribute: $t('utility.todo.todo')}) }}</router-link>

                                <a v-if="hasPermission('delete-user')" class="dropdown-item" @click.stop="deleteEntity(row.item)"><i class="fas fa-trash"></i> {{ $t('global.delete', { attribute: $t('utility.todo.todo')}) }}</a>
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
                        label: $t('utility.todo.props.title'),
                        sort: 'title',
                        transformer: 'limitWords',
                        tdClass: 'td-ellipsis max-width-250px',
                    },
                    {
                        key: 'date',
                        label: $t('utility.todo.due_on'),
                        sort: 'date',
                        transformer: 'date',
                    },
                    {
                        key: 'status',
                        label: $t('utility.todo.props.status'),
                        sort: 'status',
                        transformer: 'badgeStatusCompleted',
                    },
                    {
                        key: 'completedAt',
                        label: $t('utility.todo.completed_at'),
                        sort: 'completed_at',
                        transformer: 'date',
                    },
                    {
                        key: 'actions',
                        label: '',
                        cantHide: true,
                        tdClass: 'actions-dropdown-wrapper'
                    },
                ],
                filtersOptions: {
                    keyword: '',
                    status: '',
                    startDate: '',
                    endDate: '',
                },
                permissionsRequired: 'access-todo',
                routesRequired: {
                    add: 'appUtilityTodoAdd',
                },
                initUrl: 'utility/todos',
                dataType: 'todo',
            }
        },
        methods: {
            toggleTodo(todo) {
                this.isLoading = true
                this.Custom({
                        url: 'utility/todos/' + todo.uuid + '/status',
                        method: 'post'
                    })
                    .then(response => {
                        this.isLoading = false
                        this.$nextTick(() => {
                            this.refreshTable()
                        });
                    })
                    .catch(error => {
                        this.isLoading = false
                        formUtil.handleErrors(error)
                    })
            },
        },
        mounted() {
            this.updatePageMeta()
        },
    }

</script>
