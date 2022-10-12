<template>
    <base-container boxed with-loader :is-loading="isLoading" :loader-color="vars.loaderColor" id="printable">

        <div class="row" v-if="entity">
            <div class="col-12 mb-3">
                <view-single :label="$t('utility.todo.props.title')" :value="entity.title" />
            </div>

            <div class="col-12 col-md-4 mb-3">
                <view-date v-if="entity.time" :label="$t('utility.todo.props.due_on')" :value="`${entity.date} ${entity.time}`" with-tz />
                <view-date v-else :label="$t('utility.todo.props.due_on')" :value="entity.date" />
            </div>

            <div class="col-12 col-md-4 mb-3">
                <view-single :label="$t('utility.todo.props.status')">
                    <template #main>
                        <div class="pointer" @click.stop="toggleTodo(entity)">
                            <badge v-if="entity.status" rounded type="primary"><i class="far fa-check-circle"></i> {{ $t('utility.todo.completed') }}</badge>
                            <badge v-else rounded type="dark"><i class="far fa-circle"></i> {{ $t('utility.todo.incomplete') }}</badge>
                        </div>
                    </template>
                </view-single>
            </div>

            <div class="col-12 col-md-4 mb-3">
                <view-date :label="$t('utility.todo.completed_at')" :value="entity.completedAt" with-tz />
            </div>

            <div class="col-12 mb-3">
                <view-paragraph :label="$t('utility.todo.props.description')" :value="entity.description" />
            </div>

        </div>

        <div class="form-footer mt-3">
            <div class="left-side">
                <base-button type="button" design="light" @click="$router.back()" tabindex="-1"><i class="fas fa-chevron-left"></i> {{ $t('general.back') }}</base-button>
            </div>
            <div class="right-side">
                <base-button type="button" design="primary" @click.stop="$router.push({ name: 'appUtilityTodoEdit', params: { uuid: entity.uuid } })"><i class="fas fa-edit"></i> {{ $t('global.edit', { attribute: $t('utility.todo.todo') } ) }}</base-button>
            </div>
        </div>
    </base-container>
</template>

<script>
    import view from '@mixins/view'

    export default {
        extends: view,
        data() {
            return {
                initUrl: 'utility/todos',
                dataTitle: $t('utility.todo.todo'),
                fallBackRoute: 'appUtilityTodoList',
            }
        },
        watch: {
            $route(value) {
                if(value.name === 'appUtilityTodoView'){
                    this.uuid = value.params.uuid
                    this.getInitialData()
                }
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
                            this.getInitialData()
                        });
                    })
                    .catch(error => {
                        this.isLoading = false
                        formUtil.handleErrors(error)
                    })
            },
        },
    }

</script>
