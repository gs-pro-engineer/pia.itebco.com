<template>
    <nav class="navbar navbar-design-basic navbar-expand-sm d-flex justify-content-around align-items-center flex-nowrap">

        <!-- Left Sidebar Toggle Button for Mobile Screen -->
        <a class="nav-link toggle-left-sidebar d-lg-none pr-4" @click="toggleLeftSidebar"><i class="fas fa-bars"></i></a>

        <app-logo place="navbar" />

        <ul class="nav nav-inline d-none d-lg-flex mr-2">
            <li class="nav-item">
                <a class="nav-link toggle-left-sidebar" v-b-tooltip.hover :title="$t('config.ui.toggle_sidebar')" @click="toggleLeftSidebar"><i class="fas fa-bars"></i></a>
            </li>
            <li class="nav-item">
                <a class="nav-link toggle-full-screen" v-if="uiConfigs.fullScreen" v-b-tooltip.hover :title="$t('config.ui.toggle_fullscreen')" @click="toggleFullScreen(false)"><i class="fas fa-compress"></i></a>
                <a class="nav-link toggle-full-screen" v-else v-b-tooltip.hover :title="$t('config.ui.toggle_fullscreen')" @click="toggleFullScreen(true)"><i class="fas fa-expand"></i></a>
            </li>
        </ul>

        <ul class="nav nav-inline d-none d-md-flex mr-3">
            <li class="nav-item" v-if="configs.system && configs.system.maintenanceMode">
                <span class="warning-label badge badge-warning">{{ $t('config.system.under_maintenance') }}</span>
            </li>
            <li class="nav-item" v-if="configs.system && !configs.system.mode">
                <span class="warning-label badge badge-warning">{{ $t('config.system.test_mode') }}</span>
            </li>
            <li class="nav-item ml-2" v-if="!isOnline">
                <span class="warning-label badge badge-error"><i class="fas fa-exclamation-triangle"></i> {{ $t('general.offline') }}</span>
            </li>
        </ul>

        <div class="navbar-search-form search-button-wrapper d-none d-lg-block" @click="toggleSearchScreen" data-v-step="search">
            <div class="search-button">
                <i class="fas fa-search"></i>
                Type anywhere to <span class="font-weight-700">search</span>...
            </div>
        </div>

        <div class="separator" />


        <ul class="navbar-nav">

            <!-- Start Meeting Icon -->
            <li class="nav-item align-items-center d-md-flex" v-b-tooltip.hover v-if="hasPermission('create-meeting')">
                <router-link class="nav-link cta" :to="{ name: 'appInstantMeetingStart' }"><i class="fas fa-business-time mr-md-2"></i> <span class="d-none d-md-flex">{{ $t('meeting.start_a_meeting') }}</span></router-link>
            </li>

            <!-- Locale Quick Swithcer -->

            <base-dropdown tag="div" class="nav-item d-none d-sm-flex" position="right" v-if="configs.system.locales && configs.system.locales.length > 1">
                <a slot="title" class="nav-link" data-toggle="dropdown" role="button"><span class="mr-1">{{ selectedLocale.name }} ({{ selectedLocale.locale }})</span> <i class="fas fa-angle-down"></i></a>

                <li class="dropdown-item" v-for="locale in configs.system.locales" @click="setLocaleUserPreference(locale)" :key="locale.locale">
                    {{ locale.name }} ({{ locale.locale }})
                    <span class="pull-right" v-if="locale.locale == configs.system.locale"><i class="fas fa-check"></i></span>
                </li>
            </base-dropdown>

            <!-- Notification Icon -->
            <base-dropdown tag="li" dropdown-menu-tag="div" size="lg" :toggle-on-click="false" class="nav-item d-none d-sm-flex" menu-classes="p-0" position="right" v-if="configs.system && configs.system.notifications && hasPermission('access-notifications')">
                <a slot="title" class="nav-link" data-toggle="dropdown" role="button" v-b-tooltip.hover :title="$t('user.notifications')"><span><i class="far fa-bell"></i></span></a>

                <template #withScope="{ isOpen }">
                    <notification-widget :reload="isOpen" />
                </template>
            </base-dropdown>

            <!-- Todo Icon -->
            <base-dropdown tag="li" dropdown-menu-tag="div" size="lg" :toggle-on-click="false" class="nav-item d-none d-sm-flex" menu-classes="p-0" position="right" v-if="configs.system && configs.system.todo && hasPermission('access-todo')">
                <a slot="title" class="nav-link" data-toggle="dropdown" role="button" v-b-tooltip.hover :title="$t('utility.todo.todo')"><span><i class="far fa-check-circle"></i></span></a>

                <template #withScope="{ isOpen }">
                    <todo-widget :reload="isOpen" />
                </template>
            </base-dropdown>

            <!-- Configration Icon -->
            <li class="nav-item d-none d-md-flex" data-v-step="config-link" v-b-tooltip.hover :title="$t('config.config')" v-if="hasPermission('access-config')">
                <router-link class="nav-link" :to="{ name: 'appConfig' }"><i class="fas fa-cogs"></i></router-link>
            </li>

            <!-- User Dropdown -->
            <base-dropdown tag="li" class="nav-item d-flex" data-v-step="user-dropdown" position="right" :open.sync="userDropddownOpen">
                <a slot="title" class="nav-link nav-link-icon nav-user-avatar p-0" data-toggle="dropdown" role="button">
                    <user-avatar v-if="loggedInUser" :user="loggedInUser" :size="40" :foreground-color="uiConfigs.hideSecureContent ? vars.colors['danger'] : vars.colors['primary']" />
                </a>

                <h6 class="dropdown-header">{{ $t('general.greeting') + ', ' + loggedInUser.name }}</h6>

                <router-link v-if="loggedInUser" :to="{ name: 'appProfileView' }" class="dropdown-item">
                    <i class="fas fa-user"></i> {{ $t('user.your_profile') }}
                </router-link>

                <router-link :to="{ name: 'appUserPreference' }" class="dropdown-item">
                    <i class="fas fa-user-cog"></i> {{ $t('user.user_preference') }}
                </router-link>

                <a v-if="configs.auth.lockScreen" href="#" @click.prevent="lock" class="dropdown-item"><i class="fas fa-lock"></i> {{ $t('auth.lock.lock') }}</a>

                <router-link :to="{ name: 'appUserChangePassword' }" class="dropdown-item">
                    <i class="fas fa-key"></i> {{ $t('auth.password.change_password') }}
                </router-link>

                <template v-if="hasRole('admin')">
                    <div role="separator" class="dropdown-divider"></div>

                    <router-link :to="{ name: 'appProductUpdate' }" class="dropdown-item">
                        <i class="fas fa-download"></i> {{ $t('product.update.product_update') }}
                    </router-link>
                </template>

                <template v-if="allowExtraInput && configs.membership.enabled">
                    <div role="separator" class="dropdown-divider"></div>

                    <router-link :to="{ name: 'appMembershipList' }" class="dropdown-item">
                        <i class="far fa-id-badge"></i> {{ hasRole('admin') ? $t('membership.memberships') : $t('membership.your_membership') }}
                    </router-link>
                </template>


                <div role="separator" class="dropdown-divider"></div>
                <a href="#" @click.prevent="logout" class="dropdown-item"><i class="fas fa-power-off"></i> {{ $t('auth.logout') }}</a>
            </base-dropdown>
        </ul>

    </nav>
</template>

<script>
    import AppLogo from '@components/AppLogo'
    import TodoWidget from '@components/widgets/Todo'
    import NotificationWidget from '@components/widgets/Notification'
    import { mapGetters, mapActions } from 'vuex'
    import screenfull from 'screenfull'
    import user from '@mixins/user-dropdown'
    import * as ConfigAPI from '@api/config'

    export default {
        extends: user,
        components: {
            AppLogo,
            TodoWidget,
            NotificationWidget,
        },
        data() {
            return {
                userDropddownOpen: false,
            }
        },
        computed: {
            selectedLocale() {
                return this.configs.system.locales.find(l => l.locale === this.configs.system.locale)
            },
        },
        methods: {
            ...mapActions('config', [
                'SetUiConfig',
            ]),
            ...mapActions('common', [
                'Custom',
            ]),
            ...mapActions('navigation', [
                'Generate',
            ]),
            ...mapActions('user', [
                'GetUser',
            ]),
            toggleSearchScreen() {
                this.$gaEvent('engagement', 'toggleSearchScreen', this.uiConfigs.searchScreenShow ? 'hide' : 'show')
                this.SetUiConfig({ searchScreenShow: !this.uiConfigs.searchScreenShow })
            },
            toggleLeftSidebar() {
                this.SetUiConfig({ leftSidebarShow: !this.uiConfigs.leftSidebarShow })
            },
            toggleRightSidebar() {
                this.SetUiConfig({ rightSidebarShow: !this.uiConfigs.rightSidebarShow })
            },
            toggleConfigSidebar() {
                this.SetUiConfig({ configSidebarShow: !this.uiConfigs.configSidebarShow })
            },
            toggleFullScreen(to) {
                if(screenfull.isEnabled) {
                    if(to) {
                        screenfull.request()
                    } else {
                        screenfull.exit()
                    }
                }
            },
            takeScreenshot() {
                this.userDropddownOpen = !this.userDropddownOpen
                Vue.nextTick()
                    .then(() => {
                        if(!html2canvas) {
                            return
                        }
                        // import html2canvas from 'html2canvas' before using this feature
                        html2canvas(document.querySelector(".__view"), { logging: false, }).then(canvas => {
                            document.querySelector("#screenshot").innerHTML = ''
                            document.querySelector("#screenshot").appendChild(canvas)
                            document.querySelector("#screenshotWrapper").classList.add("show")
                        })
                    })
            },
            setLocaleUserPreference(locale) {
                this.isLoading = true
                ConfigAPI.updateUserPref({
                    system: {
                        locale: locale ? locale.locale : 'en',
                    },
                })
                    .then(response => {
                        this.GetUser()
                            .then(() => {
                                location.reload()
                                this.isLoading = false
                            })
                            .catch(error => {
                                this.isLoading = false
                                formUtil.handleErrors(error)
                            })
                    })
                    .catch(error => {
                        this.isLoading = false
                        formUtil.handleErrors(error)
                    })
            }
        },
        mounted() {
            if (screenfull.isEnabled) {
                screenfull.on('change', () => {
                    this.SetUiConfig({ fullScreen: screenfull.isFullscreen })
                })
                screenfull.on('error', event => {
                    console.error('Failed to enable fullscreen', event);
                })

                this.SetUiConfig({ fullScreen: false })
            }
        },
        destroyed() {
            if(screenfull.isEnabled) {
                screenfull.off('change')
                screenfull.off('error')
            }
        }
    }

</script>

<style lang="scss">
    @import '~@js/core/assets/scss/imports.scss';
    @import "~@js/core/assets/scss/partials/palettes";

    [data-top-navbar-fixed="true"] {
        .navbar {
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            z-index: $zindex-navbar-fixed + 1;
            width: 100%;
            padding-left: 10;
            padding-right: $side-margin-less;
            transition: #{$transition-all-ease};
            transform: translate3d(0, 0, 0);
        }
    }

    .navbar {
        -webkit-user-select: none;
        /* Chrome all / Safari all */
        -moz-user-select: none;
        /* Firefox all */
        -ms-user-select: none;
        /* IE 10+ */
        user-select: none;
        /* Likely future */

        &.navbar-design-basic {
            min-height: 0;
            height: $navbar-height;

            .logo {
                width: $logo-width;
            }

            .nav {
                .nav-item {

                    .warning-label {
                        font-size: 0.75rem;
                        font-weight: 700;
                        background-color: theme-color("danger");
                        color: theme-color("light");
                    }

                    .nav-link {
                        padding-left: $side-margin / 2;
                        padding-right: $side-margin / 2;
                        cursor: pointer;
                        display: flex;
                        align-items: center;
                        border-radius: 0;

                        &:active {
                            opacity: 0.6;
                        }
                    }
                }

                [data-toggle="dropdown"] {
                    padding-left: $side-margin;
                    padding-right: $side-margin;

                    &:active {
                        opacity: 0.6;
                    }
                }

                .dropdown {
                    &.show {
                        .dropdown-menu {
                            margin-top: 0;
                            top: 46px;
                        }
                    }
                }

                button>i,
                .btn>i,
                .dropdown-item i {
                    margin: 0;
                }
            }

            .navbar-nav {
                .nav-user-avatar {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                }

                .nav-link {
                    padding-left: $side-margin / 2;
                    padding-right: $side-margin / 2;
                    display: flex;
                    align-items: center;
                    border-radius: 0;

                    i {
                        margin-right: 0;
                    }

                    &.cta {
                        font-weight: bold !important;
                        letter-spacing: 0.8px;
                        font-size: 0.9rem !important;
                        text-transform: uppercase !important;
                        border-radius: 0.25rem;
                        padding: 0.5rem 0.75rem;
                    }
                }
            }

            .navbar-search-form {
                flex: 0 0 200px;
                margin-right: $margin-common;

                .form-group,
                .input-group {
                    margin: 0;

                    .input-group-prepend {
                        position: absolute;
                        top: 0;
                        left: 0;
                        z-index: 9;
                        height: 100%;
                    }
                }

                .search-input {
                    .input-group-text {
                        background-color: transparent;
                    }

                    .form-control {
                        padding-left: 40px;
                        border-radius: $border-radius;
                        transition: #{$transition-all-ease};
                    }
                }

                &.search-button-wrapper {
                    padding: 18px;
                    padding-left: 15px;
                    transition: #{$transition-all-ease};
                    opacity: 0.4;
                    cursor: text;

                    .search-button {
                        border-left-style: solid;
                        border-left-width: 1px;
                        padding-left: 10px;
                    }
                }
            }
        }
    }

    @each $key,
    $value in $default-palette {
        [data-top-navbar-color="#{$key}"] {
            .navbar {
                &.navbar-design-basic {
                    background: map-get($value, "background-color");
                    color: map-get($value, "foreground-color");

                    @if $key=='light' {
                        border-bottom: 1px solid map-get($value, "border-color");
                    }

                    .nav-link {
                        color: map-get($value, "foreground-color");
                    }

                    .dropdown {
                        .dropdown-item {
                            a {
                                color: map-get($value, "foreground-color") !important;
                            }
                        }
                    }

                    .input-group {

                        .input-group-addon,
                        .input-group-text {
                            padding: 0.5rem 0.75rem;
                            margin-bottom: 0;
                            font-size: 1rem;
                            font-weight: normal;
                            line-height: 1.25;
                            text-align: center;
                            background-clip: padding-box;
                        }

                        .form-control {
                            color: map-get($value, "foreground-color");
                            background-color: map-get($value, "even-color");
                            border-color: map-get($value, "even-color");
                        }
                    }
                }
            }

            .navbar-design-basic {
                .navbar-nav, .nav {
                    .nav-link {
                        &:hover {
                            color: map-get($value, "second-foreground-color");
                        }


                        &.cta {
                            background: map-get($value, "highlight-color");
                            color: lighten(map-get($value, "highlight-color"), 55);

                            &:hover, &:focus {
                                background: darken(map-get($value, "highlight-color"), 5);
                                color: $white;
                            }
                            &:active {
                                background: darken(map-get($value, "highlight-color"), 10);
                                color: $white;
                            }
                        }
                    }
                }
            }

            .navbar-search-form {
                .search-input .input-group {
                    .input-group-text {
                        color: map-get($value, "foreground-color");
                    }

                    .form-control {
                        @include placeholder {
                            color: map-get($value, "foreground-color");
                        }
                    }

                    &.focused {

                        .form-control {
                            background-color: darken(map-get($value, "even-color"), 3);
                        }
                    }
                }

                &.search-button-wrapper {
                    &:hover {
                        background-color: darken(map-get($value, "even-color"), 15);
                    }
                }
            }

            .dropdown-grid,
            .dropdown-tasks,
            .dropdown-flags,
            .dropdown-notifications,
            .dropdown-mega-menu,
            .dropdown-user {
                .btn.btn-default {
                    border: none;
                    background: map-get($value, "background-color");
                    color: map-get($value, "foreground-color");

                    &:hover,
                    &:active,
                    &:focus,
                    &:visited,
                    &.focus {
                        border: none;
                        background: map-get($value, "background-color");
                        color: map-get($value, "foreground-color");
                    }
                }

                .dropdown-menu {
                    background: map-get($value, "background-color");
                    color: map-get($value, "foreground-color");

                    .dropdown-title {
                        background: map-get($value, "border-color");
                        color: map-get($value, "foreground-color");
                    }

                    .dropdown-item {
                        background: map-get($value, "background-color");
                        color: map-get($value, "foreground-color");

                        &:hover {
                            background: map-get($value, "odd-color");
                            color: map-get($value, "foreground-color");
                        }
                    }
                }
            }
        }
    }

    @include media-breakpoint-up(lg) {
        .navbar {
            padding-left: $side-margin;
            padding-right: $side-margin / 2;

            &.navbar-design-basic {
                .logo {
                    width: $sidebar-width;
                }

                .nav-inline {
                    .nav-item {
                        .toggle-left-sidebar {
                            padding-left: 0px;
                        }
                    }
                }
            }
        }

        .col.main {
            padding-right: $side-margin;
        }

        [data-top-navbar-fixed="true"] {
            .navbar {
                padding-left: $side-margin;
                padding-right: $side-margin / 2;
            }

            .main {
                padding-top: $navbar-height;
            }
        }
    }

    @include media-breakpoint-up(xl) {
        .navbar {
            &.navbar-design-basic {
                .navbar-search-form {
                    flex: 0 0 320px;
                }
            }
        }
    }

    @include media-breakpoint-down(md) {
        .navbar {
            &.navbar-design-basic {
                .dropdown {
                    &.show {
                        .dropdown-menu {
                            position: fixed;
                            top: 65px;
                            right: 0;
                            left: 0;
                            width: 94%;
                            margin: 0 auto;

                            &::before {
                                left: auto;
                                right: 30px;
                            }
                        }
                    }
                }
            }
        }
    }

    @include media-breakpoint-down(sm) {
        .navbar.navbar-design-basic .navbar-nav .nav-link.cta {
            height: 100%;
            align-items: center;
            border-radius: 100% !important;
        }
        .navbar.navbar-design-basic .navbar-nav .nav-item + .nav-item {
            margin-left: 0.4rem;
        }
    }

    [data-top-navbar-hide="true"] {
        .navbar {
            display: none !important;
        }

        .main {
            padding-top: 0;
        }
    }

</style>
