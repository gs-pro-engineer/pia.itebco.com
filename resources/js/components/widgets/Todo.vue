<template>
    <card shadow class="todo-widget" body-classes="p-0">
        <div class="widget-wrapper">
            <div class="widget-header">
                <div class="todo-date">
                    <h4>{{ date }}</h4>
                    <h6>{{ month }}</h6>
                </div>
                <div class="todo-meta">
                    <div class="todo-nav">
                        <base-button type="button" design="link" v-b-tooltip.hover.d500 :title="$t('general.previous_day')" @click="getPreviousTodo"><i class="fas fa-arrow-left"></i></base-button>
                        <base-button type="button" design="link" v-b-tooltip.hover.d500 :title="$t('general.next_day')" @click="getNextTodo"><i class="fas fa-arrow-right"></i></base-button>
                    </div>
                    <span v-if="others.todos">{{ incompletedTasksCount }} {{ $t('utility.todo.tasks') }}</span>
                </div>
            </div>

            <div class="widget-body">
                <div class="todo-form mt-2">
                    <form @submit.prevent="submit">
                        <div class="d-flex">
                            <base-input class="flex-grow" :placeholder="$t('utility.todo.type_task')" type="text" name="title" v-model="formData.title" :error.sync="formErrors.title" format="sentence" wrapper-classes="pt-0" />
                        </div>
                        <button type="submit" class="d-none"></button>
                    </form>
                </div>

                <div class="todo-list-wrapper" :class="{'fixed-height': others.todos && others.todos.length > 5}">
                    <vue-scroll id="vuescrollTodo" ref="vuescrollTodo">
                        <ul class="todo-list" v-if="others.todos && others.todos.length">
                            <li v-for="todo in others.todos" :key="todo.uuid" :class="['todo-item', {'completed': todo.status}]">
                                <div class="todo-details" @click="$router.push({ name: 'appUtilityTodoView', params: { uuid: todo.uuid } })">
                                    <h6 class="title">{{ todo.title }}</h6>
                                </div>
                                <div class="todo-date" v-if="todo.time">
                                    {{ [`${todo.date} ${todo.time}`, vars.serverDateTimeFormat] | moment('from')}}
                                </div>
                                <div class="todo-date" v-else>
                                    {{ [todo.date, vars.serverDateFormat] | moment('from')}}
                                </div>
                                <div class="todo-status" @click="toggleTodo(todo)">
                                    <i v-if="todo.status" class="fas fa-check-circle text-primary"></i>
                                    <i v-else class="far fa-circle"></i>
                                </div>
                            </li>
                        </ul>

                        <div v-else class="d-flex min-height-100px justify-content-center align-items-center">
                            <h5 class="text-muted">{{ $t('utility.todo.all_caught_up') }}</h5>
                        </div>
                    </vue-scroll>
                </div>

            </div>
            <div class="widget-footer">

            </div>
        </div>
    </card>
</template>

<script>
    import EventBus from '@js/event-bus'
    import { mapGetters, mapActions } from 'vuex'
    import * as MomentTz from '@core/filters/momentz'

    import store from '@js/store'
    const vars = store.getters['config/vars']

    export default {
        name: "todo-widget",
        props: {
            reload: {
                type: Boolean,
                default: false
            },
        },
        data() {
            return {
                todos: [],
                formData: {
                    title: '',
                    date: MomentTz.now(vars.serverDateFormat),
                },
                formErrors : {},
                isLoading: false,
            }
        },
        watch: {
            reload(newValue, oldValue) {
                if(newValue && newValue !== oldValue) {
                    this.getInitialData()
                }
            },
        },
        computed: {
            ...mapGetters('config', [
                'vars',
            ]),
            ...mapGetters('common', [
                'others',
            ]),
            incompletedTasksCount() {
                return this.others ? this.others.todos.filter(t => !t.status).length : 0
            },
            date() {
                return moment(this.formData.date, this.vars.serverDateFormat).format('dddd, Do')
            },
            month() {
                return moment(this.formData.date, this.vars.serverDateFormat).format('MMMM')
            },
        },
        methods: {
            ...mapActions('common', [
                'Custom',
                'SetOthers',
            ]),
            submit() {
                if(!this.formData.title) {
                    this.$toasted.info(this.$t('general.nothing_changed'), this.$toastConfig.info)
                    return false
                }

                this.isLoading = true

                this.Custom({
                        url: 'utility/todos',
                        method: 'post',
                        data: this.formData
                    })
                    .then(response => {
                        let todos = this.others.todos
                        todos.unshift(response.todo)
                        this.SetOthers({
                            todos: todos
                        })
                        this.resetVueScroll()
                        this.$toasted.success(response.message, this.$toastConfig)
                        this.formData.title = ''
                        this.isLoading = false
                        EventBus.$emit('REFRESH_TABLE', 'appUtilityTodoList')
                    })
                    .catch(error => {
                        this.isLoading = false
                        this.formErrors = formUtil.handleErrors(error)
                    })
            },
            toggleTodo(todo) {
                this.isLoading = true
                this.Custom({
                        url: 'utility/todos/' + todo.uuid + '/status',
                        method: 'post'
                    })
                    .then(response => {
                        todo.status = !todo.status
                        let todos = this.others.todos
                        this.SetOthers({
                            todos: todos
                        })
                        this.$toasted.success(response.message, this.$toastConfig)
                        this.isLoading = false
                        EventBus.$emit('REFRESH_TABLE', 'appUtilityTodoList')
                    })
                    .catch(error => {
                        this.isLoading = false
                        this.formErrors = formUtil.handleErrors(error)
                    })
            },
            getInitialData() {
                this.isLoading = true
                this.Custom({
                        url: 'utility/todos?type=list&sort_by=due_date,status&order=desc,asc&date=' + this.formData.date,
                        method: 'get'
                    })
                    .then(response => {
                        this.SetOthers({
                            todos: response
                        })
                        this.resetVueScroll()
                        this.isLoading = false
                    })
                    .catch(error => {
                        this.isLoading = false
                        this.formErrors = formUtil.handleErrors(error)
                    })
            },
            getNextTodo(){
                this.formData.date = moment(this.formData.date, this.vars.serverDateFormat).add(1, 'days').format(this.vars.serverDateFormat)
                this.getInitialData()
            },
            getPreviousTodo(){
                this.formData.date = moment(this.formData.date, this.vars.serverDateFormat).subtract(1, 'days').format(this.vars.serverDateFormat)
                this.getInitialData()
            },
            resetVueScroll() {
                setTimeout(() => {
                    if(this.$refs['vuescrollTodo']) {
                        this.$refs['vuescrollTodo'].scrollTo({
                            x: 0,
                            y: 0
                        }, true)
                    }
                }, 100)
            },
        },
        mounted() {
            this.getInitialData()
        },
    }

</script>
<style lang="scss" scoped>
    @import '~@js/core/assets/scss/imports.scss';

    .todo-widget {
        .widget-wrapper {
            display: flex;
            flex-direction: column;
            align-items: stretch;

            .widget-header {
                display: flex;
                justify-content: space-between;
                padding: 1rem;
                border-bottom: $border-width solid $border-color;

                .todo-date {
                    display: flex;
                    flex-direction: column;
                    justify-content: center;

                    h4 {
                        margin: 0;
                    }
                    h6 {
                        margin: 0;
                        color: $text-muted;
                    }
                }
                .todo-meta {
                    display: flex;
                    flex-direction: column;
                    justify-content: space-between;
                    align-items: flex-end;
                    color: $text-muted;

                    .todo-nav {
                        .btn-link {
                            padding: 0.5rem;
                            color: $gray-dark;

                            &:last-child {
                                padding-right: 0;
                            }

                            &:hover {
                                color: $gray-darker;
                            }
                        }
                    }
                }
            }

            .widget-body {
                overflow: hidden;
                flex-grow: 1;

                .todo-list-wrapper {
                    max-height: 300px;
                    overflow: hidden;

                    &.fixed-height {
                        height: 300px;
                    }
                }

                .todo-list{
                    display: flex;
                    flex-direction: column;
                    align-items: stretch;
                    list-style: none;
                    padding: 0;

                    & .todo-item {
                        display: flex;
                        position: relative;
                        padding-left: 5px;
                        transition: $transition-all-easeinout;
                        min-height: 50px;

                        &:before {
                            position: absolute;
                            top: 0;
                            left: 0;
                            width: 5px;
                            height: 100%;
                            content: '';
                            background: rgba(0,20,40,0.05);
                            transition: $transition-all-easeinout;
                        }

                        &:nth-child(even) {
                            background: rgba(0,20,40,0.05);
                        }

                        .todo-details {
                            flex-grow: 1;
                            display: flex;
                            flex-direction: column;
                            justify-content: center;
                            align-items: stretch;
                            padding: 5px 10px;
                            cursor: pointer;

                            h6 {
                                margin: 0;
                            }

                            p {
                                margin: 0;
                                margin-top: 0.5rem;
                            }
                        }

                        .todo-date {
                            display: flex;
                            padding: 5px 1px;
                            flex-direction: column;
                            justify-content: center;
                            align-items: center;
                            font-size: $font-size-xs;
                        }

                        .todo-status {
                            display: flex;
                            padding: 5px 10px;
                            flex-direction: column;
                            justify-content: center;
                            align-items: center;
                            font-size: $font-size-lg;
                            transition: $transition-all-easeinout;
                            cursor: pointer;
                            color: $light;
                        }


                        &:hover {
                            background: rgba(0,20,40,0.1);
                            &:before {
                                background: $primary;
                            }

                            .todo-status {
                                color: $primary;
                            }
                        }

                        &.completed {
                            opacity: 0.5;

                            .todo-details {
                                h6 {
                                    color: $text-muted;
                                    text-decoration: line-through;
                                }
                            }

                            &:hover {
                                opacity: 1;
                            }
                        }
                    }
                }
            }

            .widget-footer {
                display: flex;
            }
        }
    }
</style>
