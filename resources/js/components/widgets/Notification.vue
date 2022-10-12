<template>
    <card shadow class="notification-widget" body-classes="p-0">
        <div class="widget-wrapper">
            <div class="widget-header text-muted">
                <div class="text-muted"><i class="far fa-bell"></i></div>
                <div class="flex-grow-1 text-center">{{ $t('user.notification.notifications') }}</div>
                <div class="">
                    <base-button type="button" design="link" v-b-tooltip.hover.d500 :title="$t('config.notification.setting')"><i class="fas fa-cog"></i></base-button>
                </div>
            </div>
                
            <div class="widget-body">
                <div class="notification-list-wrapper" :class="{'fixed-height': notifications && notifications.length > 5}">
                    <vue-scroll id="vuescrollNotification" ref="vuescrollNotification">
                        <ul class="notification-list" v-if="notifications && notifications.meta.total">
                            <li class="notification-item" v-for="notification in notifications.data" :key="notification.uuid">
                                <div class="notification-details" :class="{'completed': notification.status}" @click="notificationClick(notification)">
                                    <h6 class="title">{{ notification.data.title }}</h6>
                                </div>
                                <div class="notification-date">
                                    {{ notification.createdAt | moment('calendar', null, { sameElse: vars.defaultDateTimeFormat })}}
                                </div>
                                <div class="notification-status" @click="toggleNotification(notification)">
                                    <i v-if="notification.status" class="fas fa-check-circle text-primary"></i>
                                    <i v-else class="far fa-circle"></i>
                                </div>
                            </li>
                        </ul>

                        <div v-else class="d-flex min-height-100px justify-content-center align-items-center">
                            <h5 class="text-muted">{{ $t('user.notification.all_caught_up') }}</h5>
                        </div>
                    </vue-scroll>
                </div>

            </div>
            <div class="widget-footer text-center" v-if="notifications && notifications.length">
                <base-button type="button" design="link" size="sm" class="text-center btn-block p-2">{{ $t('user.notification.see_all') }}</base-button>
            </div>
        </div>
    </card>
</template>

<script>
    import { mapGetters, mapActions } from 'vuex'

    export default {
        name: "notification-widget",
        props: {
            reload: {
                type: Boolean,
                default: false
            },
        },
        data() {
            return {
                isLoading: false,
            }
        },
        watch: {
            reload(newValue, oldValue) {
                if(newValue && newValue !== oldValue) {
                    this.getInitialData()
                }
            }
        },
        computed: {
            ...mapGetters('config', [
                'vars',
            ]),
            ...mapGetters('user', [
                'notifications',
            ]),
        },
        methods: {
            ...mapActions('user', [
                'GetNotifications',
            ]),
            notificationClick(notification) {
                debugger
                // tis.$router.push({  })
            },
            toggleNotification(notification) {
                this.isLoading = true
                this.Custom({
                        url: 'utility/notifications/' + notification.uuid + '/status',
                        method: 'post'
                    })
                    .then(response => {
                        notification.status = !notification.status
                        this.isLoading = false
                    })
                    .catch(error => {
                        this.isLoading = false
                        this.formErrors = formUtil.handleErrors(error)
                    })
            },
            getInitialData() {
                this.isLoading = true
                this.GetNotifications()
                    .then(response => {
                        this.resetVueScroll()
                        this.isLoading = false
                    })
                    .catch(error => {
                        this.isLoading = false
                        this.formErrors = formUtil.handleErrors(error)
                    })
            },
            resetVueScroll() {
                setTimeout(() => {
                    if(this.$refs['vuescrollNotification']) {
                        this.$refs['vuescrollNotification'].scrollTo({
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

    .notification-widget {
        .widget-wrapper {
            display: flex;
            flex-direction: column;
            align-items: stretch;

            .widget-header {
                display: flex;
                justify-content: space-between;
                padding: 1rem;
                border-bottom: $border-width solid $border-color;
            }

            .widget-body {
                overflow: hidden;
                flex-grow: 1;

                .notification-list-wrapper {
                    max-height: 300px;
                    overflow: hidden;

                    &.fixed-height {
                        height: 300px;
                    }
                }

                .notification-list{
                    display: flex;
                    flex-direction: column;
                    align-items: stretch;
                    list-style: none;
                    padding: 0;

                    & .notification-item {
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

                        .notification-details {
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

                            &.completed {
                                h6 {
                                    color: $text-muted;
                                    text-decoration: line-through;
                                }
                            }
                        }

                        .notification-date {
                            display: flex;
                            padding: 5px 1px;
                            flex-direction: column;
                            justify-content: center;
                            align-items: center;
                            font-size: $font-size-xs;
                        }

                        .notification-status {
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

                            .notification-status {
                                color: $primary;
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