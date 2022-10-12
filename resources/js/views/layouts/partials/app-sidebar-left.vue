<template>
    <app-sidebar class="left-sidebar" :style="sidebarStyle" data-v-step="menu-sidebar">
        <div class="wrapper" v-on="uiConfigs.leftSidebarStyle === 'folded' ? { mouseenter: showSidebar, mouseleave: hideSidebar } : {}">
            <div class="content">
                <div class="logo-wrapper">

                    <app-logo place="sidebar" />

                    <div class="seperator"></div>

                    <div class="sidebar-switches">
                        <a v-if="showPin" class="unpinned" @click="pinSidebar" v-b-tooltip.hover :title="$t('config.ui.pin_sidebar')">
                            <i class="far fa-circle"></i>
                        </a>
                        <a v-else-if="showUnpin" class="pinned" @click="unpinSidebar" v-b-tooltip.hover :title="$t('config.ui.pin_sidebar')">
                            <i class="fas fa-dot-circle"></i>
                        </a>
                    </div>
                </div>


                <vue-scroll id="vuescrollSidebarLeft" ref="vuescrollSidebarLeft" @handle-scroll="handleScroll" class="vue-scroll-sidebar-left">

                    <slot name="menu"></slot>
                </vue-scroll>

                <slot name="widgets"></slot>

                <div v-if="uiConfigs.leftSidebarColor === 'wallpaper' && uiConfigs.wallpaper" class="unsplash-credit">
                    Photo by <a :href="uiConfigs.wallpaper.user.links.html">{{ uiConfigs.wallpaper.user.name }}</a> on <a href="https://unsplash.com">Unsplash</a>
                </div>

                <slot />
            </div>
        </div>
    </app-sidebar>

</template>

<script>
    import AppSidebar from '@components/AppSidebar'
    import AppLogo from '@components/AppLogo'
    import { BCollapse } from 'bootstrap-vue'
    import { mapState, mapGetters, mapActions } from 'vuex'
    export default {
        components: {
            AppSidebar,
            AppLogo,
            BCollapse,
        },
        data() {
            return {
                lastStyle: '',
                currentScrollPosition: {
                    x: 0,
                    y: 0
                },
                lastScrollPosition: {
                    x: 0,
                    y: 0
                },
                isCollapseOpen: false
            }
        },
        computed: {
            ...mapGetters('config', [
                'uiConfigs',
            ]),
            ...mapGetters('user', {
                profile: 'profile'
            }),
            ...mapState('config', {
                showPin: state => state.ui.leftSidebarHeight === 'full' &&
                    (state.ui.leftSidebarStyle === 'over' ||
                        state.ui.leftSidebarStyle === 'folded'),
                showUnpin: state => state.ui.leftSidebarHeight === 'full' &&
                    state.ui.leftSidebarStyle === 'push-content',
                thumbRight: state => state.ui.leftSidebarStyle === "folded" ||
                    state.ui.navMenuThumbOnRight,
            }),
            sidebarStyle() {
                if(this.uiConfigs.leftSidebarColor === 'wallpaper') {
                    if(this.uiConfigs.wallpaper) {
                        return {
                            '--bg-image': `url(${this.uiConfigs.wallpaper.urls.regular})`
                        }
                    } else {
                        this.$store.dispatch('config/getWallpaper')
                    }
                }
                return {
                    '--bg-image': ''
                }
            },
            sidebarOpen() {
                return this.uiConfigs.leftSidebarShow
            }
        },
        watch: {
            sidebarOpen(v) {
                setTimeout(() => {
                    this.isCollapseOpen = v
                }, 150)
            }
        },
        methods: {
            ...mapActions('config', [
                'SetUiConfig',
            ]),
            pinSidebar() {
                this.lastStyle = this.uiConfigs.leftSidebarStyle
                this.SetUiConfig({ leftSidebarStyle: 'push-content' })
                this.SetUiConfig({ leftSidebarBackdrop: false })
                this.SetUiConfig({ leftSidebarShadow: false })
            },
            unpinSidebar() {
                this.SetUiConfig({ leftSidebarStyle: this.lastStyle || 'folded' })
                this.SetUiConfig({ leftSidebarBackdrop: true })
                this.SetUiConfig({ leftSidebarShadow: true })
            },
            showSidebar() {
                this.SetUiConfig({ leftSidebarShow: true })
                setTimeout(() => {
                    if(this.$refs.vuescrollSidebarLeft) {
                        this.$refs.vuescrollSidebarLeft.scrollTo(this.lastScrollPosition, { speed: 100, easing: 'easeInOutCubic' })
                    }
                }, 100)
            },
            handleScroll(vertical, horizontal, nativeEvent) {
                this.currentScrollPosition.x = horizontal
                this.currentScrollPosition.y = vertical
            },
            hideSidebar() {
                this.SetUiConfig({ leftSidebarShow: false })
                setTimeout(() => {
                    this.lastScrollPosition.x = this.currentScrollPosition.x.scrollLeft
                    this.lastScrollPosition.y = this.currentScrollPosition.y.scrollTop
                    if(this.$refs.vuescrollSidebarLeft) {
                        this.$refs.vuescrollSidebarLeft.scrollTo({
                            x: 0,
                            y: 0
                        }, { speed: 100, easing: 'easeInOutCubic' })
                    }
                }, 100)
            },
        }
    }

</script>

<style lang="scss">
    @import '~@js/core/assets/scss/imports.scss';
    @import "~@js/core/assets/scss/partials/palettes";

    $backgroundColor: map-get($colors, 'white');
    $foregroundColor: map-get($colors, 'gray-700');

    .navigation-menus {
        margin-bottom: calc(30%);
    }

    .sidebar {
        &.left-sidebar {
            left: 0;
            top: 0;
            height: 100%;
            width: $sidebar-width-md;
            transform: translate3d(-$sidebar-width-md, 0, 0);
            background: $backgroundColor;
            color: $foregroundColor;
            fill: $foregroundColor;

            .section {
                padding-top: 1rem;
                padding-bottom: 1rem;

                .section-title {
                    display: flex;
                    margin-left: $margin-common;
                    justify-content: flex-start;
                    align-items: center;
                    flex-direction: row;
                    flex-wrap: wrap;
                    text-transform: uppercase;
                    font-weight: 500;
                    margin-top: 20px;
                    margin-bottom: 10px;
                    opacity: 0.5;
                    font-weight: 600;
                    letter-spacing: 0.8px;
                }

                ul.navigation-menu {
                    margin-top: 0;
                    margin-bottom: 0;

                    >li {
                        position: relative;

                        &:after,
                        &:before {
                            display: table;
                            content: " ";
                            clear: both;
                        }

                        a {
                            position: relative;
                            display: block;
                            color: inherit;
                            cursor: pointer;
                            @include font-size(14px);
                            font-weight: $font-weight-normal;

                            &.router-link-exact-active,
                            &.active {
                                @include font-size(15px);
                                font-weight: $font-weight-extra-bold;
                            }

                            &>div {
                                position: relative;
                                display: flex;
                                justify-content: flex-start;
                                align-items: center;
                                flex-direction: row;
                                flex-wrap: nowrap;
                                padding: 5px 20px;
                                min-height: 40px;
                                line-height: 40px;
                                clear: both;
                                overflow: hidden;
                                text-overflow: ellipsis;
                            }

                            &:hover {
                                background: darken($backgroundColor, 6);
                                color: darken($foregroundColor, 90);
                                fill: darken($foregroundColor, 90);

                                i {
                                    color: darken($foregroundColor, 90);
                                }

                                .menu-thumbnail {
                                    color: inherit;
                                    fill: inherit;
                                }
                            }

                            .menu-thumbnail {
                                display: inline-block;
                                height: 40px;
                                line-height: 40px;
                                margin-right: 10px;
                                text-align: left;
                                vertical-align: middle;
                                position: relative;
                                min-width: 24px;
                                color: inherit;
                                fill: inherit;

                                i {
                                    @include font-size(16px);
                                }
                            }

                            .detailed {
                                display: inline-block;
                                vertical-align: middle;
                                white-space: nowrap;
                                overflow: hidden;
                                text-overflow: ellipsis;

                                .title {
                                    display: block;
                                    text-transform: capitalize;
                                    font-size: inherit;
                                    font-weight: inherit;
                                    line-height: 24px;
                                }

                                .description {
                                    display: block;
                                    clear: both;
                                    @include font-size(12px);
                                    line-height: 16px;
                                    opacity: 0.5;
                                }
                            }



                            &>div {
                                &.cta-button {
                                    background: $primary;
                                    opacity: 1;
                                    transition: $transition-all-ease;

                                    .detailed .title{
                                        font-weight: bold !important;
                                        letter-spacing: 0.8px;
                                        font-size: 0.9rem !important;
                                        text-transform: uppercase !important;
                                    }
                                    .menu-thumbnail {
                                        background: transparent;
                                    }
                                }
                            }

                            &:hover {
                                &>div {
                                    &.cta-button {
                                        opacity: 0.9;
                                        padding-left: 30px;
                                    }
                                }
                            }

                            .badge {
                                margin-right: 25px;
                            }

                            &.has-children {
                                &:before {
                                    font-family: "Font Awesome 5 Free";
                                    font-weight: 900;
                                    content: "\f105";
                                    position: absolute;
                                    top: 20px;
                                    right: $side-margin;
                                    font-size: 1rem;
                                    line-height: 10px;
                                    transition: #{$transition-transform-ease};
                                    transform: rotate(0deg);
                                }

                                &.is-open {
                                    background: darken($backgroundColor, 10);

                                    &:before {
                                        transform: rotate(90deg);
                                    }
                                }
                            }
                        }

                        ul {
                            background: darken($backgroundColor, 10);

                            >li {
                                a {
                                    padding: 0 20px;
                                    @include font-size(13px);

                                    .menu-thumbnail {
                                        i {
                                            @include font-size(14px);
                                        }
                                    }

                                    &:hover {
                                        background: darken($backgroundColor, 15);

                                        .menu-thumbnail {
                                            color: inherit;
                                            fill: inherit;
                                        }
                                    }

                                    .detailed {
                                        .title {
                                            font-size: inherit;
                                            font-weight: inherit;
                                            line-height: 24px;
                                        }

                                        .description {
                                            display: none;
                                        }
                                    }

                                    .badge {
                                        display: none;
                                    }

                                    &.has-children {
                                        &:before {
                                            top: 15px;
                                            font-size: 12px;
                                            line-height: 10px;
                                        }
                                    }
                                }

                                ul {
                                    >li {
                                        >a {
                                            padding: 0 20px 0 30px;
                                            min-height: 30px;
                                            line-height: 30px;
                                            @include font-size(13px);

                                            .menu-thumbnail {
                                                i {
                                                    visibility: hidden;
                                                }
                                            }

                                            .detailed {
                                                .title {
                                                    font-size: inherit;
                                                    font-weight: inherit;
                                                    line-height: 24px;
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }

                        .collapse,
                        .collapsing {
                            border-style: solid;
                            border-color: darken($backgroundColor, 11);
                            border-width: 0px;
                            border-top-width: 1px;
                            border-bottom-width: 1px;
                        }
                    }

                    &.thumb-align-right {

                        a {

                            .menu-thumbnail {
                                width: 40px;
                                margin-right: 0px;
                                text-align: center;
                                margin-left: auto;
                                background: darken($backgroundColor, 20);
                            }

                            .badge {
                                margin-right: 10px;
                            }

                            &.has-children {
                                &:before {
                                    right: $side-margin + 60;
                                    transform: rotate(180deg);
                                }
                            }
                        }

                        ul {
                            >li {
                                a {
                                    .menu-thumbnail {
                                        background: transparent;
                                    }
                                }
                            }
                        }
                    }

                    &.no-sub-menu-thumbnail {
                        >li ul>li a {
                            .menu-thumbnail {
                                display: none;
                            }
                        }
                    }
                }
            }

            .sidebar-switches {
                display: none;
            }
        }
    }

    [data-sidebar-left-show="true"] {
        .left-sidebar {
            transform: translate3d(0, 0, 0);
        }

        .backdrop-left-sidebar {
            opacity: 1;
            transform: translate3d(0, 0px, 0px);
            transition: opacity 0.3s;
        }
    }

    [data-sidebar-left-color="wallpaper"] {
        $wallBackgroundColor: map-get($colors, 'gray-darkest');
        $wallBackgroundColorRgba: rgba($wallBackgroundColor, 0.5);
        $wallForegroundColor: map-get($colors, 'light');
        $wallSecondForegroundColor: map-get($colors, 'white');

        .sidebar {
            &.left-sidebar {
                background: $wallBackgroundColor;
                color: $wallForegroundColor;
                fill: $wallForegroundColor;

                &:before {
                    background-image: var(--bg-image);
                    background-position: center center;
                    background-repeat: no-repeat;
                    background-size: cover;
                    filter: blur(2px);
                    -webkit-filter: blur(2px);
                    content: '';
                    position: absolute;
                    top: 0;
                    bottom: 0;
                    height: 100%;
                    width: 100%;
                    left: 0;
                    right: 0;
                    opacity: 0.8;
                }

                .wrapper {
                    .content {
                        background: rgba(0,0,0,0.5);
                    }
                }

                a {
                    color: inherit;
                    fill: inherit;

                    &:hover {
                        color: $wallSecondForegroundColor;
                        fill: $wallSecondForegroundColor;
                    }
                }

                .navigation-menus {
                    margin-bottom: calc(10%);
                }

                .section {
                    ul.navigation-menu {
                        -webkit-user-select: none;
                        -moz-user-select: none;
                        user-select: none;

                        >li {
                            a {
                                color: inherit;
                                fill: inherit;
                                cursor: pointer;

                                &:hover {
                                    background: darken($wallBackgroundColorRgba, 6);
                                    color: $wallSecondForegroundColor;
                                    fill: $wallSecondForegroundColor;

                                    i {
                                        color: $wallSecondForegroundColor;
                                    }

                                    .menu-thumbnail {
                                        color: inherit;
                                        fill: inherit;
                                    }
                                }

                                .menu-thumbnail {
                                    color: inherit;
                                    fill: inherit;
                                }

                                &.has-children {
                                    &.is-open {
                                        background: darken($wallBackgroundColorRgba, 10);
                                    }
                                }
                            }

                            ul {
                                background: darken($wallBackgroundColorRgba, 10);

                                >li {
                                    a {
                                        &:hover {
                                            background: darken($wallBackgroundColorRgba, 15);

                                            .menu-thumbnail {
                                                color: inherit;
                                                fill: inherit;
                                            }
                                        }
                                    }
                                }
                            }

                            .collapse,
                            .collapsing {
                                border-color: darken($wallBackgroundColorRgba, 11);
                            }
                        }

                        &.thumb-align-right {
                            a {
                                .menu-thumbnail {
                                    background: darken($wallBackgroundColorRgba, 10);
                                }
                            }

                            ul {
                                >li {
                                    a {
                                        .menu-thumbnail {
                                            background: transparent;
                                        }
                                    }
                                }
                            }
                        }
                    }
                }

                .sidebar-switches {
                    a {
                        color: $wallSecondForegroundColor;
                    }
                }

                .vue-scroll-sidebar-left {
                    max-height: 85vh;
                }

                .unsplash-credit {
                    position: absolute;
                    bottom: 0;
                    opacity: 0.4;
                    width: 100%;
                    padding: 1rem 0.5rem;
                    font-size: 0.775rem;
                    text-align: center;
                }
            }
        }
    }

    @include media-breakpoint-up(lg) {
        .sidebar {
            &.left-sidebar {
                left: 0;
                width: $sidebar-width;
                transform: translate3d(-$sidebar-width, 0, 0);

                .sidebar-switches {
                    padding-right: 20px;
                    display: block;

                    a {
                        display: inline-block;
                        padding: 3px 8px;
                        opacity: 0.5;
                        cursor: pointer;
                        font-size: 16px;

                        &:hover {
                            opacity: 0.8
                        }

                        &.pinned {
                            cursor: pointer;
                            opacity: 0.4;

                            &:hover {
                                opacity: 0.7;
                            }
                        }
                    }
                }
            }
        }


        [data-sidebar-special-show="true"] {
            .sidebar {
                &.left-sidebar {
                    left: $sidebar-width-xxs;
                }
            }
        }

        [data-sidebar-left-shadow="true"] {
            .left-sidebar {
                @include box-shadow($box-shadow);
            }
        }

        [data-sidebar-left-height="full"] {
            .left-sidebar {
                top: 0;
                height: 100%;
            }
        }

        [data-sidebar-left-height="normal"] {
            .left-sidebar {
                top: $navbar-height;
                height: calc(100%);

                .logo-wrapper {
                    display: none;
                }
            }

            .backdrop-left-sidebar {
                top: $navbar-height;
            }
        }

        [data-sidebar-left-backdrop-color="transparent"] {
            .backdrop-left-sidebar {
                background: transparent !important;
            }
        }

        [data-sidebar-left-backdrop-color="dark"] {
            .backdrop-left-sidebar {
                background: rgba(0, 0, 0, 0.3) !important;
            }
        }

        [data-sidebar-left-backdrop-color="light"] {
            .backdrop-left-sidebar {
                background: rgba(255, 255, 255, 0.7) !important;
            }
        }

        [data-sidebar-left-style="folded"] {
            .left-sidebar {
                box-shadow: none;
                transform: translate3d(-$sidebar-width-md + $sidebar-width-xxs, 0, 0);
                width: $sidebar-width-md;


                .wrapper {
                    width: $sidebar-width-md + $side-margin;

                    .content {
                        width: $sidebar-width-md;
                    }
                }

                .sidebar-switches .unpinned {
                    transition: #{$transition-transform-ease};
                    transition-delay: 0.15s;
                    transform: translate3d(-$sidebar-width-xxs, 0, 0);
                }

                .section ul.navigation-menu.thumb-align-right a .menu-thumbnail {
                    margin-right: -10px;
                }

                .section .section-title {
                    display: none;
                }
            }

            .navbar .toggle-left-sidebar {
                display: none;
            }

            .main,
            .guest-footer {
                padding-left: $sidebar-width-xxs + $side-margin;
            }

            &[data-sidebar-left-height="full"] {
                .navbar {
                    padding-left: $sidebar-width-xxs + $side-margin;
                }
            }

            &[data-sidebar-special-show="true"] {

                .main,
                .guest-footer {
                    padding-left: $sidebar-width-xxs + $side-margin + $sidebar-width-xxs;
                }

                &[data-sidebar-left-height="full"] {
                    .navbar {
                        padding-left: $sidebar-width-xxs + $sidebar-width-xxs;
                    }
                }
            }
        }

        [data-sidebar-left-show="true"] {
            .left-sidebar {
                transform: translate3d(0, 0, 0);
            }

            .backdrop-left-sidebar {
                opacity: 0;
                transition: opacity 0.25s, transform 0s 0.25s;
                transform: translate3d(100%, 0px, 0px);
            }

            &[data-sidebar-left-height="normal"] {

                &[data-sidebar-left-style="push"],
                &[data-sidebar-left-style="push-content"] {

                    .main,
                    .guest-footer {
                        padding-left: $sidebar-width + $side-margin;
                    }

                    &[data-sidebar-special-show="true"] {

                        .main,
                        .guest-footer {
                            padding-left: $sidebar-width + $side-margin + $sidebar-width-xxs;
                        }
                    }
                }

                &[data-sidebar-left-style="off-canvas"] {

                    .main,
                    .guest-footer {
                        transform: translate3d($sidebar-width, 0, 0);
                        width: 100%;
                    }
                }
            }

            &[data-sidebar-left-height="full"] {
                &[data-sidebar-left-style="push"] {

                    .navbar,
                    .main,
                    .guest-footer {
                        padding-left: $sidebar-width + $side-margin;
                    }
                }

                &[data-sidebar-left-style="push-content"] {

                    .main,
                    .guest-footer {
                        padding-left: $sidebar-width + $side-margin;
                    }
                }

                &[data-sidebar-left-style="off-canvas"] {

                    .navbar,
                    .main,
                    .guest-footer {
                        transform: translate3d($sidebar-width, 0, 0);
                        width: 100%;
                    }
                }

                &[data-sidebar-special-show="true"] {
                    &[data-sidebar-left-style="push"] {

                        .navbar,
                        .main,
                        .guest-footer {
                            padding-left: $sidebar-width + $side-margin + $sidebar-width-xxs
                        }
                    }

                    &[data-sidebar-left-style="push-content"] {
                        .main {
                            padding-left: $sidebar-width + $side-margin + $sidebar-width-xxs
                        }
                    }
                }
            }

            &[data-sidebar-left-style="over"] {
                .navbar {
                    left: 0;
                    width: 100%;
                }

                &[data-sidebar-left-style="push-content"] {
                    .navbar {
                        left: $sidebar-width-xxs;
                    }
                }
            }

            &[data-sidebar-left-style="folded"] {
                .navbar {
                    left: 0;
                    width: 100%;
                }

                &[data-sidebar-left-style="push-content"] {
                    .navbar {
                        left: $sidebar-width-xxs;
                    }
                }

                .sidebar-switches .unpinned {
                    transform: translate3d(0, 0, 0);
                }

                .left-sidebar .section {
                    ul.navigation-menu.thumb-align-right a .menu-thumbnail {
                        margin-right: 0px;
                    }

                    .section-title {
                        display: flex;
                    }
                }
            }

            &[data-sidebar-left-backdrop="true"] {
                .backdrop-left-sidebar {
                    opacity: 1;
                    transform: translate3d(0, 0px, 0px);
                    transition: opacity 0.3s;
                }
            }
        }


        [data-app-license="no"] {
            .main,
            .guest-footer {
                padding-left: $side-margin !important;
            }

            .navbar {
                padding-left: $side-margin !important;
            }
        }
    }

    @each $key,
    $value in $default-palette {
        [data-sidebar-left-color="#{$key}"] {

            $backgroundColor: map-get($value, "background-color");
            $foregroundColor: map-get($value, "foreground-color");

            .left-sidebar {
                background: map-get($value, "background-color");
                color: map-get($value, "foreground-color");
                fill: map-get($value, "foreground-color");

                a {
                    color: inherit;
                    fill: inherit;

                    &:hover {
                        color: map-get($value, "second-foreground-color");
                        fill: map-get($value, "second-foreground-color");
                    }
                }

                .section {
                    ul.navigation-menu {
                        >li {
                            a {
                                color: inherit;
                                fill: inherit;
                                cursor: pointer;

                                &:hover {
                                    background: darken($backgroundColor, 6);
                                    color: map-get($value, "second-foreground-color");
                                    fill: map-get($value, "second-foreground-color");

                                    i {
                                        color: map-get($value, "second-foreground-color");
                                    }

                                    .menu-thumbnail {
                                        color: inherit;
                                        fill: inherit;
                                    }
                                }

                                .menu-thumbnail {
                                    color: inherit;
                                    fill: inherit;
                                }

                                &.has-children {
                                    &.is-open {
                                        background: darken($backgroundColor, 10);
                                    }
                                }

                                &>div {
                                    &.cta-button {
                                        background: map-get($value, "highlight-color");
                                    }
                                }
                            }

                            ul {
                                background: darken($backgroundColor, 10);

                                >li {
                                    a {
                                        &:hover {
                                            background: darken($backgroundColor, 15);

                                            .menu-thumbnail {
                                                color: inherit;
                                                fill: inherit;
                                            }
                                        }
                                    }
                                }
                            }

                            .collapse,
                            .collapsing {
                                border-color: darken($backgroundColor, 11);
                            }
                        }

                        &.thumb-align-right {
                            a {
                                .menu-thumbnail {
                                    background: darken($backgroundColor, 10);
                                }
                            }

                            ul {
                                >li {
                                    a {
                                        .menu-thumbnail {
                                            background: transparent;
                                        }
                                    }
                                }
                            }
                        }
                    }
                }

                .sidebar-switches {
                    a {
                        color: map-get($value, "second-foreground-color");
                    }
                }
            }
        }
    }

</style>
