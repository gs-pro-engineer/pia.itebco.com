<template>
    <app-sidebar class="config-sidebar">
        <button type="button" class="btn btn-default toggle-config-sidebar d-none" @click="toggleConfigSidebar">
            <i class="fas fa-cog fa-spin"></i>
        </button>

        <div class="config-sidebar-inner">
            <div class="config-sidebar-content">
                <h4 class="font-weight-bold text-center">Component's Configuration</h4>

                <ul class="list">

                    <li v-for="(component, i) in uiConfigComponents" class="list-item" :key="i">
                        <app-sidebar-config-component-box :heading="component.heading">
                            <ul class="list">

                                <li v-for="(configProperty, j) in component.configurations" class="list-item" :key="configProperty.key">
                                    <div class="label">{{ configProperty.title }}</div>
                                    <div class="options">
                                        <div class="row">

                                            <div v-for="(option, k) in configProperty.options" class="col-6" :key="option.key">
                                                <a :class="['config-link ', uiConfigs[configProperty.key]===option.key ? 'active' : '']" @click="setConfiguration(configProperty.key, option.key, option.actions, option.dispatches)">
                                                  {{ option.title }}
                                                </a>
                                            </div>

                                        </div>
                                    </div>
                                    <div v-if="configProperty.message" class="message">{{ configProperty.message }}</div>
                                </li>

                            </ul>
                        </app-sidebar-config-component-box>
                    </li>

                </ul>
            </div>
        </div>
    </app-sidebar>

</template>

<script>
import AppSidebar from '@components/AppSidebar'
import AppSidebarConfigComponentBox from './app-sidebar-config-component-box'
import { mapGetters, mapActions } from 'vuex'
export default {
    components: {
        AppSidebar,
        AppSidebarConfigComponentBox,
    },
    data() {
        return {}
    },
    computed: {
        ...mapGetters('config', [
            'uiConfigs',
            'uiConfigComponents'
        ]),
    },
    methods: {
        ...mapActions('config', [
            'SetUiConfig',
        ]),
        setConfiguration(key, value, actions, dispatches) {
            let tempObj = {}
            tempObj[key] = value
            this.SetUiConfig(tempObj)
            if (actions) {
                for (let actionKey in actions) {
                    let tempObj = {}
                    tempObj[actionKey] = actions[actionKey]
                    this.SetUiConfig(tempObj)
                }
            }
            if(dispatches) {
                dispatches.forEach(dispatchName => {
                    this.$store.dispatch(dispatchName)
                })
            }
        },
        toggleConfigSidebar() {
            this.SetUiConfig({ configSidebarShow: !this.uiConfigs.configSidebarShow })
        },
    }
}

</script>

<style lang="scss">
@import '~@js/core/assets/scss/imports.scss';

.show-from-right {
    transform: translate3d(-$sidebar-width, 0, 0);
}

.sidebar {
    &.config-sidebar {
        display: none;
        overflow: visible;
        .btn.toggle-config-sidebar {
            &,
            &:focus,
            &:active,
            &:hover {
                position: absolute;
                top: 100px;
                left: -40px;
                width: 45px;
                height: 50px;
                font-size: 16px;
                border-radius: 0.25rem 0 0 0.25rem;
                border: 1px solid #d6d6d6;
                background: #ffffff;
                border-color: #d6d6d6;
                color: #656565;
                box-shadow: -2px 1px 7px -3px rgba(0, 0, 0, 0.5) !important;
            }
        }
        .config-sidebar-inner {
            position: absolute;
            top: 0;
            left: 0;
            height: calc(100%);
            overflow: auto;
            width: $sidebar-width + 20;
            background: #ffffff;
            margin-bottom: 50px;
            padding-bottom: 50px;
        }
        .config-sidebar-content {
            width: $sidebar-width;
            text-align: left;
            padding-bottom: 30px;

            h4 {
                padding: 20px;
                @include font-size(15px);
                margin-bottom: 0;
            }

            ul.list {
                list-style: none;
                padding: 0;

                .config-box {
                    .box-heading {
                        display: block;
                        padding: 8px 20px;
                        border-bottom: 1px solid #e7eaed;
                        color: #a1a2a3;
                        background: #f2f3f5;
                        font-weight: 600;

                        &:after {
                            font-family: "Font Awesome 5 Free";
                            font-weight: 900;
                            content: "\f105";
                            display: inline-block;
                            float: right;
                            padding-right: 3px;
                            vertical-align: middle;
                            transition: #{$transition-all-ease};
                            transform: rotate(0deg);
                        }

                        &.opened {
                            &:after {
                                transform: rotate(90deg);
                            }
                        }
                    }

                    .box-content {
                        background: #fafafa;
                        border-bottom: 1px solid #e9ecef;
                        padding: 10px 20px;

                        ul.list>li+li {
                            margin-top: 10px;
                            padding-top: 10px;
                            border-top: 1px solid #f1f2f3;
                        }

                        .label {
                            color: #727476;
                            font-weight: 500;
                        }
                        .options {
                            padding-top: 5px;
                            font-size: 90%;
                            .config-link {
                                color: #929496;
                                transition: #{$transition-all-ease};
                                white-space: nowrap;
                                padding: 5px 0;
                                display: inline-block;
                                cursor: pointer;
                                &:before {
                                    font-family: "Font Awesome 5 Free";
                                    font-weight: 400;
                                    content: "\f111";
                                    display: inline-block;
                                    padding-right: 5px;
                                }

                                &.active {
                                    color: #2e7d32;
                                    &:before {
                                        content: "\f058";
                                    }
                                }
                            }
                        }
                        .message {
                            border-radius: 3px;
                            border: 1px solid #1976d2;
                            margin: 10px 0 5px;
                            font-size: 12px;
                            opacity: 0.6;
                            padding: 5px 10px;
                            color: #1976d2
                        }
                    }
                }
                li:nth-child(even) .config-box .box-heading {
                    background: #e9ecef;
                }
            }
        }
    }
}

@include media-breakpoint-up(lg) {
    .sidebar {
        &.config-sidebar {
            display: block;
            left: auto;
            right: 0;
            height: calc(100%);
            width: $sidebar-width;
            transform: translate3d($sidebar-width, 0, 0);
            z-index: $zindex-navbar-fixed + 9;
            @include box-shadow($box-shadow);
        }
    }

    [data-sidebar-config-show="true"] {
        .config-sidebar {
            transform: translate3d(0, 0, 0);
        }
        .backdrop-config-sidebar {
            opacity: 1;
            transform: translate3d(0, 0px, 0px);
            transition: opacity 0.3s;
        }
    }
}
</style>
