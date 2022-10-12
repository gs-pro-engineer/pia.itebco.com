<template>
    <div class="app-container" id="app-container"
            :data-layout="uiConfigs.layout"
            :data-color-scheme="uiConfigs.colorScheme"
            :data-app-license="isLicensed ? 'yes' : 'no'"

            :data-page-background-color="uiConfigs.pageBackgroundColor"
            :data-page-container-background-color="uiConfigs.pageContainerBackgroundColor"
            :data-page-header-background-color="uiConfigs.pageHeaderBackgroundColor"
            :data-page-header-is-boxed="uiConfigs.pageHeaderIsBoxed"

            :data-sidebar-left-height="uiConfigs.leftSidebarHeight"
            :data-sidebar-left-style="uiConfigs.leftSidebarStyle"
            :data-sidebar-left-backdrop="uiConfigs.leftSidebarBackdrop"
            :data-sidebar-left-backdrop-color="uiConfigs.leftSidebarBackdropColor"
            :data-sidebar-left-shadow="uiConfigs.leftSidebarShadow"
            :data-sidebar-left-color="uiConfigs.leftSidebarColor"
            :data-sidebar-left-show="uiConfigs.leftSidebarShow"
            :data-sidebar-left-logo-light="uiConfigs.leftSidebarLogoLight"

            :data-sidebar-right-height="uiConfigs.rightSidebarHeight"
            :data-sidebar-right-style="uiConfigs.rightSidebarStyle"
            :data-sidebar-right-backdrop="uiConfigs.rightSidebarBackdrop"
            :data-sidebar-right-backdrop-color="uiConfigs.rightSidebarBackdropColor"
            :data-sidebar-right-shadow="uiConfigs.rightSidebarShadow"
            :data-sidebar-right-color="uiConfigs.rightSidebarColor"
            :data-sidebar-right-show="uiConfigs.rightSidebarShow"

            :data-sidebar-modal-height="uiConfigs.modalSidebarHeight"
            :data-sidebar-modal-style="uiConfigs.modalSidebarStyle"
            :data-sidebar-modal-backdrop="uiConfigs.modalSidebarBackdrop"
            :data-sidebar-modal-backdrop-color="uiConfigs.modalSidebarBackdropColor"
            :data-sidebar-modal-shadow="uiConfigs.modalSidebarShadow"
            :data-sidebar-modal-color="uiConfigs.modalSidebarColor"
            :data-sidebar-modal-show="uiConfigs.modalSidebarShow"

            :data-sidebar-config-show="uiConfigs.configSidebarShow"

            :data-sidebar-special-color="uiConfigs.specialSidebarColor"
            :data-sidebar-special-show="uiConfigs.specialSidebarShow"

            :data-top-navbar-hide="uiConfigs.topNavbarHide"
            :data-top-navbar-fixed="uiConfigs.topNavbarFixed"
            :data-top-navbar-color="uiConfigs.topNavbarColor"
            :data-top-navbar-logo-light="uiConfigs.topNavbarLogoLight"

            :data-notification-position="uiConfigs.notificationPosition"

            :data-hide-secure-content="uiConfigs.hideSecureContent"

            :data-nav-menu-horizontal="uiConfigs.navMenuHorizontal"
            :data-rtl="uiConfigs.toggleRtl">

        <animated-loader :is-loading="appIsLoading" :loader-color="vars.loaderColor" size="screen" overlayColor="transparent" />

        <template v-if="!appIsLoading">
            <app-backdrop />

            <app-navbar />

            <app-search />

            <div class="container-fluid">

                <app-sidebar-left v-if="isLicensed">
                    <template #menu>
                        <app-sidebar-menu />
                    </template>

                    <template #widgets>

                    </template>
                </app-sidebar-left>

                <app-sidebar-right />

                <slot />

                <app-footer v-if="uiConfigs.pageFooterShow && configs.system" :footer-credit="configs.system.footerCredit" :version="configs.system.version" />
            </div>

            <b-modal centered lazy ref="lockinModal" v-model="showingLockinModal" @hidden="onLockinModalHidden">
                <template #modal-header>
                    <h5 class="modal-title">{{ $t('auth.lock.locking_screen') }}</h5>
                </template>
                <div>
                    {{ $t('auth.lock.will_lock_in', {attribute: lockinMessage }) }}
                </div>
                <template #modal-footer>
                    <base-button type="button" design="primary" @click.stop="onLockinModalCancel">No, Cancel!</base-button>
                </template>
            </b-modal>

            <template v-if="configs.chat && configs.chat.enabled && uiConfigs.pageChatShow">
                <div class="chat-box-container" v-if="subscriptions && subscriptions.userPrivate">
                    <div :class="['chat-button', {'hidden': isChatBoxShown}]" data-v-step="chat-button">
                        <button type="button" @click="showChatBox"><i class="far fa-comments"></i> <span>{{ $t('chat.chat') }}</span></button>

                        <span v-if="totalUnreadMessages && totalUnreadMessages > 0" class="badge badge-pill badge-success unread-count">{{ totalUnreadMessages }}</span>
                    </div>

                    <chat-box v-if="isChatBoxShown" :box-visibility="isChatBoxShown" :channel="subscriptions.userPrivate" @boxHidden="isChatBoxShown = false" @boxShown="isChatBoxShown = true" />
                </div>
            </template>

            <v-tour name="introTour" :steps="tourSteps" :options="tourOptions" :callbacks="tourCallbacks" class="km-tour"></v-tour>
        </template>
    </div>
</template>

<script>
    import live from '@mixins/live'

    import { setupPusher } from '@js/echo-setup'
    import { playIncomingCall } from '@core/utils/media'
    import { callAlert, Swal } from '@core/configs/sweet-alert'
    import { popupBlockerChecker } from '@core/utils'

    import keyBindings from '@core/utils/keyBindings'
    import { nRoutes, nActions } from '@js/helpers/notification'
    import { formatKeysToCamelCase } from '@core/utils/formatter'
    import { saveToStorage, getFromStorage } from '@core/utils'

    import AppNavbar from './app-navbar'
    import AppSidebarConfig from './app-sidebar-config'
    import AppSidebarSpecial from './app-sidebar-special'
    import AppSidebarLeft from './app-sidebar-left'
    import AppSidebarRight from './app-sidebar-right'
    import AppFooter from './app-footer'
    import AppSidebarMenu from './sidebar-menu/app-sidebar-menu'
    import AppBackdrop from '@components/AppBackdrop'
    import AppSearch from '@components/AppSearch'

    import { mapGetters, mapActions } from 'vuex'
    import EventBus from '@js/event-bus'

    export default {
        extends: live,
        components: {
            AppBackdrop,
            AppSearch,
            AppNavbar,
            AppSidebarConfig,
            AppSidebarSpecial,
            AppSidebarLeft,
            AppSidebarRight,
            AppSidebarMenu,
            AppFooter,
        },
        data() {
            return {
                lockinMessage: null,
                lockinTime: null,
                showingLockinModal: false,
                shortcuts: {
                    routes: {
                        // key83: 'appProductAbout', // 83 = s => Student
                        // key68: 'appDashboard', // 68 = d => Dashboard
                    },
                    methods: {
                        key190: 'toggleSecureContent', // 190 = . => toggleSecureContent
                    },
                },
                tourOptions: {
                    debug: false,
                    highlight: true,
                    labels: {
                        buttonSkip: $t('misc.tour.skip'),
                        buttonPrevious: $t('misc.tour.previous'),
                        buttonNext: $t('misc.tour.next'),
                        buttonStop: $t('misc.tour.stop'),
                    }
                },
                tourCallbacks: {
                    onSkip: this.disableTour,
                    onFinish: this.disableTour,
                },
                tourSteps: []
            }
        },
        computed: {
            ...mapGetters('config', [
                'configs',
                'uiConfigs',
                'vars',
                'appIsLoading',
                'isLicensed',
            ]),
            ...mapGetters('user', [
                'locked',
                'lockin',
                'uuid',
                'loggedInUser',
                'liveUsers',
                'hasPermission',
            ]),
        },
        watch: {
            locked(newVal, oldVal) {
                if(newVal) {
                    this.$refs.lockinModal.hide()
                    this.lockinTime = null
                    this.lockinMessage = null
                    const toPath = this.$route.fullPath
                    this.$router.push({ name: 'authLock', query: { ref: toPath } })
                }
            },
            lockin(newVal, oldVal) {
                if(newVal) {
                    this.lockinTime = newVal.time
                    this.lockinMessage = newVal.unit
                    this.lockinMessage = newVal.time + ' ' + newVal.unit
                    this.showLockinModal(newVal)
                }
            },
        },
        methods: {
            ...mapActions('config', [
                'SetUiConfig',
                'SetAppIsLoading',
            ]),
            doShortcutMethod(method) {
                switch (method) {
                    case 'toggleSecureContent':
                        this.SetUiConfig({ hideSecureContent: !this.uiConfigs.hideSecureContent })
                        saveToStorage(`${this.vars.localStorageKey}_show_sc`, !this.uiConfigs.hideSecureContent)
                        break;
                    default:

                }
            },
            handleNotificationClick(linkTo) {
                if(linkTo) {
                    this.$notify({
                      group: 'app',
                      clean: true
                    })
                    this.$router.push(linkTo)
                }
            },
            showSearchScreen() {
                this.SetUiConfig({ searchScreenShow: !this.uiConfigs.searchScreenShow })
            },
            handleHotKeyPressed(key) {
                const actionName = 'key' + key
                if(this.shortcuts.routes.hasOwnProperty(actionName)){
                    this.$router.push({ name: this.shortcuts.routes[actionName] })
                } else if(this.shortcuts.methods.hasOwnProperty(actionName)){
                    this.doShortcutMethod(this.shortcuts.methods[actionName])
                }
            },
            showLockinModal(lockin) {
                let timer
                const vm = this
                vm.lockinTime = lockin.time

                timer = setInterval(() => {
                    vm.lockinTime--;
                    if (vm.lockinTime < 1 && timer) {
                        clearInterval(timer);
                    }
                    vm.lockinMessage = vm ? vm.lockinTime + ' ' + lockin.unit : ''
                }, 1000)
                vm.showingLockinModal = true
                this.$gaEvent('activity', 'lockingScreen', 'Timer')
            },
            onLockinModalCancel(e) {
                this.SetLastActivity()
                this.showingLockinModal = false
                this.$gaEvent('engagement', 'lockingScreen', 'Cancelled')
            },
            onLockinModalHidden() {
                this.SetLastActivity()
                this.showingLockinModal = false
                this.$gaEvent('engagement', 'lockingScreen', 'Cancelled')
            },
            socketSubscriptionCallback(notification) {
                notification = formatKeysToCamelCase(notification)
                let toastObj = { ...this.$toastConfig.info }
                let onActionClick = (toastObject) => {
                    this.$toasted.clear()
                }


                if(notification.action === 'navigate') {
                    const routeName = nRoutes[notification.module][notification.event] ? nRoutes[notification.module][notification.event] : 'appDashboard'

                    onActionClick = (toastObject) => {
                        this.$toasted.clear()
                        this.$router.push({ name: routeName }).catch(err => {})
                    }

                } else {
                    if(nActions[notification.command]) {
                        onActionClick = (toastObject) => {
                            this.$toasted.clear()
                            nActions[notification.command](this.$router)
                        }
                    }
                }

                toastObj.action = {
                    text: notification.actionLabel || 'OK!',
                    onClick : (e, toastObject) => {
                        onActionClick(toastObject)
                    }
                }

                this.$toasted.clear()
                if(!notification.autoAction || (notification.autoAction && !notification.hideToast)) {
                    this.$toasted.info(notification.title, toastObj)
                }

                if(notification.autoAction) {
                    const toastdInstance =
                    setTimeout(() => {
                        onActionClick()
                    }, notification.autoDelay || 1000)
                }

            },
            disableTour() {
                saveToStorage(`${this.vars.localStorageKey}_intro_tour`, true)
            },
        },
        mounted() {
            this.SetAppIsLoading(false)

            let hideSecureContent = true
            const showSecureContent = getFromStorage(`${this.vars.localStorageKey}_show_sc`)
            hideSecureContent = showSecureContent === true ? false : true

            this.SetUiConfig({ pageHeaderShow: true, pageFooterShow: true, hideSecureContent: hideSecureContent })

            document.body.classList.add("body-bg-" + this.uiConfigs.pageBackgroundColor)



            if(this.configs.chat && this.configs.chat.enabled) {
                document.body.classList.add("has-chat-button")

                if(this.configs.chat.enableAutoOpen) {
                    window.setTimeout(() => {
                        this.isChatBoxShown = true
                    }, 1500)
                }
            }

            this.checkIfOffline()

            const introTourFinished = getFromStorage(`${this.vars.localStorageKey}_intro_tour`)
            if(this.configs.system.enableTour && !introTourFinished) {
                this.tourSteps.push({
                    target: '[data-v-step="menu-sidebar"]',
                    params: { placement: 'right' },
                    header: { title: $t('misc.tour.intro.menu_sidebar_title') || 'Menu Sidebar' },
                    content: $t('misc.tour.intro.menu_sidebar_content') || 'Customization Fix / Foldable Menu'
                },
                {
                    target: '[data-v-step="search"]',
                    params: { placement: 'bottom' },
                    header: { title: $t('misc.tour.intro.search_title') || 'Search' },
                    content: $t('misc.tour.intro.search_content') || 'Type anywhere to search and press Escape key to hide search overlay.'
                })

                if(this.hasPermission('access-config')) {
                    this.tourSteps.push({
                        target: '[data-v-step="config-link"]',
                        params: { placement: 'bottom' },
                        header: { title: $t('misc.tour.intro.config_link_title') || 'Configuration' },
                        content: $t('misc.tour.intro.config_link_content') || 'Configurations to customize the application & it\'s experience.'
                    })
                }

                this.tourSteps.push({
                    target: '[data-v-step="user-dropdown"]',
                    params: { placement: 'bottom' },
                    header: { title: $t('misc.tour.intro.user_dropdown_title') || 'User Options' },
                    content: $t('misc.tour.intro.user_dropdown_content') || 'User profile related options and actions.'
                })

                if(this.configs.chat && this.configs.chat.enabled && this.uiConfigs.pageChatShow && this.subscriptions && this.subscriptions.userPrivate) {
                    this.tourSteps.push({
                        target: '[data-v-step="chat-button"]',
                        params: { placement: 'bottom' },
                        header: { title: $t('misc.tour.intro.chat_button_title') || 'Live Chat' },
                        content: $t('misc.tour.intro.chat_button_content') || 'Open live chat messaging box!'
                    })
                }

                this.$nextTick(() => {
                    setTimeout(() => {
                        this.$tours['introTour'].start()
                    }, 1000)
                })
            }
        },
        created() {
            EventBus.$off('HOTKEY_PRESSED', this.handleHotKeyPressed)
            EventBus.$on('HOTKEY_PRESSED', this.handleHotKeyPressed)
            const listener = keyBindings.keyupListener.bind(this)
            document.removeEventListener('keyup', listener, true)
            document.addEventListener('keyup', listener, true)

            //START :: CLEARING MEETING LIVE PAGE RELATED VARIABLES
            if(window.countdownInterval) {
                clearInterval(window.countdownInterval)
                window.countdownInterval = null
            }
            if(window.meetingKeepAliveTimer) {
                clearInterval(window.meetingKeepAliveTimer)
                window.meetingKeepAliveTimer = null
            }
            if(window.recordingDurationInterval) {
                clearInterval(window.recordingDurationInterval)
                window.recordingDurationInterval = null
            }
            if(window.meetingDurationInterval) {
                clearInterval(window.meetingDurationInterval)
                window.meetingDurationInterval = null
            }
            if(window.autoEndMeetingTimeout) {
                clearTimeout(window.autoEndMeetingTimeout)
                window.autoEndMeetingTimeout = null
            }
            if (window.lowerHandTimer) {
                clearTimeout(window.lowerHandTimer)
                window.lowerHandTimer = null
            }

            if (window.Echo) {
                if (window.meetingChannel) {
                    window.meetingChannel.stopListening('MeetingStatusChanged')
                    window.meetingChannel.stopListening('NewMessage')
                    window.meetingChannel = null
                }
                window.Echo.leave(`Meeting.${this.uuid}`)
            }

            window.isMeetingPageDestroyed = true
            //END :: CLEARING MEETING LIVE PAGE RELATED VARIABLES
        },
        beforeDestroy() {
            const listener = keyBindings.keyupListener.bind(this)
            document.removeEventListener('keyup', listener, true)
        },
        destroyed() {
            EventBus.$off('HOTKEY_PRESSED', this.handleHotKeyPressed)
            document.body.classList.remove("body-bg-" + this.uiConfigs.pageBackgroundColor)
            document.body.classList.remove("has-chat-button")
        },
    }

</script>

<style lang="scss">
    @import '~@js/core/assets/scss/imports.scss';
    @import "~@js/core/assets/scss/partials/palettes";

    .app-container {
        min-height: 100%;
    }

    .app-footer {
        padding-left: $side-margin;
        padding-right: $side-margin;
        transition: #{$transition-all-ease};
    }

    .screenshot-wrapper {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 999999;
        background: rgba(0,0,0,0.8);
        opacity: 0.5;
        transform: scale(0.5);
        transition: $transition-all-easeinout;
        transition-delay: 0.5s;
        display: none;
        justify-content: center;
        align-items: center;

        .screenshot {
            width: 100%;
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 2rem 1rem;

            canvas {
                width: 85vw !important;
                height: auto !important;
                box-shadow: $box-shadow-lg;
            }
        }

        &.show {
            display: block;
            transform: scale(1);
            opacity: 1;
        }
    }

    @each $key,
    $value in $default-palette {
        body.body-bg-#{$key}, [data-page-background-color="#{$key}"] {
            background-color: map-get($value, "background-color");
            color: map-get($value, "foreground-color");
        }
    }
</style>
