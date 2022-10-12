<template>
    <transition v-if="searchScreenShow" name="fade" mode="out-in">
        <div class='app-search-screen'>
            <close-button @click="close" :title="$t('general.close')" parent-class="" />

            <div class="app-search-wrapper">

                <div class="search-input-wrapper">
                    <form @submit.prevent="submit">
                        <div class="search-input">
                            <input type="text" ref="searchTermElement" v-model="searchTerm" placeholder="Search..." spellcheck="false" autocomplete="false" class="form-control pause-keyuplistener focusable" @input="searchTermChanged" />
                        </div>
                        <button type="submit" class="d-none">Search</button>
                    </form>

                    <div class="helper-message text-muted">
                        <span v-if="!foundHotTerm">{{ $t('general.search_helper_default_text') }}</span>
                        <span v-else>{{ foundHotTerm.message }} {{ foundHotTerm.term }}</span>
                    </div>
                </div>

                <div v-if="searchTerm && suggestions.length" class="search-suggestions">
                    <span class="font-weight-700 title">suggestions: </span>
                    <ul class="suggestions-list list-inline">
                        <li v-for="suggestion in suggestions" :key="suggestion">{{ suggestion }}</li>
                    </ul>
                </div>

                <div class="search-results-wrapper" v-scroll-lock="searchScreenShow">
                    <vue-scroll id="vuescrollSearch" ref="vuescrollSearch">
                        <animated-loader :is-loading="isLoading" :loader-color="vars.loaderColor" overlay-color="transparent" />

                        <div class="search-results-sections">
                            <div class="search-results-section" v-if="foundHotTerm && results.routes.length">
                                <h4 class="section-title text-muted font-weight-600 text-center border-bottom mb-0 pb-2">Navigate to</h4>
                                <ul class="search-results-list">
                                    <li class="search-result-item" v-for="(route, index) in results.routes" :key="route.name">
                                        <router-link :to="{ name: route.name }">
                                            {{ route.meta.trans ? ( $t(route.meta.trans, {'attribute': $t(route.meta.midTitle) + ' ' + $t(route.meta.title)}) ) : $t(route.meta.midTitle) + ' ' + $t(route.meta.title) }}
                                        </router-link>
                                    </li>
                                </ul>
                            </div>

                            <template v-else-if="gotResults">
                                <div class="search-results-section" v-if="results.users && results.users.length">
                                    <h4 class="section-title text-muted font-weight-600 text-center border-bottom mb-2 pb-2">{{ $t('user.users') }}</h4>
                                    <ul class="search-results-list">
                                        <li class="search-result-item" v-for="(user, index) in results.users" :key="user.uuid">
                                            <view-user :value="user" focusable hide-popover show-buttons class="m-0" data-classes="m-0" />
                                        </li>
                                    </ul>
                                </div>

                                <div class="search-results-section" v-if="results.meetings && results.meetings.length">
                                    <h4 class="section-title text-muted font-weight-600 text-center border-bottom mb-2 pb-2">{{ $t('meeting.meetings') }}</h4>
                                    <ul class="search-results-list">
                                        <li class="search-result-item" v-for="(meeting, index) in results.meetings" :key="meeting.uuid">
                                            <view-single :value="meeting" show-if-exists="title" :description="[(meeting.startedAt ? meeting.startedAt : meeting.startDateTime), vars.serverDateTimeFormat] | moment('calendar', null, { sameElse: vars.defaultDateTimeFormat })" show-icon :icon="meetingIcons[meeting.status]" :icon-classes="meetingIconColors[meeting.status]" focusable is-entity :link="{ name: 'appMeetingView', params: { uuid: meeting.uuid }}" class="m-0" data-classes="m-0" />
                                        </li>
                                    </ul>
                                </div>

                                <div class="search-results-section" v-if="results.contacts && results.contacts.length">
                                    <h4 class="section-title text-muted font-weight-600 text-center border-bottom mb-2 pb-2">{{ $t('contact.contacts') }}</h4>
                                    <ul class="search-results-list">
                                        <li class="search-result-item" v-for="(contact, index) in results.contacts" :key="contact.uuid">
                                            <view-single :value="contact" show-if-exists="name" show-icon icon="fas fa-user" focusable is-entity class="m-0" data-classes="m-0" />
                                        </li>
                                    </ul>
                                </div>
                            </template>

                            <template v-else>
                                <div v-if="searchTerm && searchResults && !isLoading" class="search-results-section">
                                    <h2 class="text-muted" v-text="$t('general.no_search_result_found')"></h2>
                                </div>
                            </template>
                        </div>
                    </vue-scroll>
                </div>

            </div>

        </div>
    </transition>
</template>

<script>
    import { mapGetters, mapActions } from 'vuex'
    import { clearStore } from '@core/utils/auth'
    import EventBus from '@js/event-bus'

    export default {
        components: {
        },
        data() {
            return {
                shown: false,
                searchTerm: '',
                foundHotTerm: null,
                searchResults: null,
                isLoading: false,
                meetingIcons: {
                    'scheduled': 'far fa-calendar-alt',
                    'live': 'fas fa-video',
                    'ended': 'far fa-calendar-check',
                    'cancelled': 'far fa-calendar-times',
                },
                meetingIconColors: {
                    'scheduled': 'bg-primary text-white no-border',
                    'live': 'bg-warning text-white no-border',
                    'ended': 'bg-success text-white no-border',
                    'cancelled': 'bg-danger text-white no-border',
                },
            }
        },
        computed: {
            ...mapGetters('config', [
                'uiConfigs',
                'vars',
            ]),
            ...mapGetters('search', [
                'hotTerms',
                'results',
                'suggestions',
            ]),
            searchScreenShow() {
                return this.uiConfigs.searchScreenShow
            },
            gotResults() {
                return this.results && ((this.results.contacts && this.results.contacts.length) || (this.results.users && this.results.users.length) || (this.results.meetings && this.results.meetings.length))
            }
        },
        updated() {
            if (this.$refs.searchTermElement) {
                this.$refs.searchTermElement.focus()
            }
        },
        watch: {
            searchScreenShow(newVal, oldVal) {
                if (newVal !== oldVal) {
                    if (newVal) {
                        EventBus.$off('KEY_PRESSED', this.handleKeyPressed)
                        EventBus.$on('ESCAPE_PRESSED', this.close)
                        this.resetVueScroll()
                        this.ResetResults()
                        this.ResetSuggestions()
                        this.searchTermChanged()
                        this.shown = true

                        document.removeEventListener('keyup', this.keyPressed, true)
                        document.addEventListener('keyup', this.keyPressed, true)

                    } else {
                        document.removeEventListener('keyup', this.keyPressed, true)

                        this.searchTerm = ''
                        EventBus.$off('ESCAPE_PRESSED', this.close)
                        EventBus.$off('KEY_PRESSED', this.handleKeyPressed)
                        EventBus.$on('KEY_PRESSED', this.handleKeyPressed)
                        this.shown = false
                    }
                }
            },
            $route(val) {
                this.close()
            },
        },
        methods: {
            ...mapActions('config', [
                'SetUiConfig',
            ]),
            ...mapActions('search', [
                'SearchRoutes',
                'Search',
                'ResetResults',
                'ResetSuggestions',
            ]),
            ...mapActions('user', [
                'Lock',
                'Logout',
            ]),
            ...mapActions('navigation', [
                'Generate',
            ]),
            searchTermChanged: _.debounce(function() {
                if(this.searchTerm === '') {
                    this.searchResults = null
                    this.ResetResults()
                    this.ResetSuggestions()
                }

                this.findHotTerm()
            }, 500),
            findHotTerm() {
                this.foundHotTerm = null
                this.hotTerms.forEach(command => {
                    if (!this.foundHotTerm) {
                        const pattern = new RegExp(command.code, 'i')
                        if (pattern.test(this.searchTerm)) {
                            this.foundHotTerm = _.cloneDeep(command)
                            this.foundHotTerm.term = this.searchTerm.replace(pattern, '')
                        }
                    }
                })
                this.processSubmit()
            },
            submit: _.debounce(function() {
                this.isLoading = true
                this.resetVueScroll()
                this.findHotTerm()
                this.processSubmit()
            }, 500),
            processSubmit: _.debounce(function() {
                this.isLoading = true
                this.resetVueScroll()
                const foundHotTerm = this.foundHotTerm
                if (foundHotTerm) {
                    if (foundHotTerm.type === 'command') {
                        if (RegExp('logout', 'i')
                            .test(foundHotTerm.term)) {
                            this.logout()
                        } else if (RegExp('lock', 'i')
                            .test(foundHotTerm.term)) {
                            this.lock()
                        } else if (RegExp('menu', 'i')
                            .test(foundHotTerm.term)) {
                            this.regenerateNavigation()
                        } else if (RegExp('clear', 'i')
                            .test(foundHotTerm.term)) {
                            this.clearStoreAndReload()
                        } else if (RegExp('reload', 'i')
                            .test(foundHotTerm.term)) {
                            window.location.reload()
                        }  else if (RegExp('freload', 'i')
                            .test(foundHotTerm.term)) {
                            window.location.reload(true)
                        }
                        this.isLoading = false
                    } else if (foundHotTerm.type === 'redirect') {
                        this.ResetResults()
                        this.ResetSuggestions()
                        if(foundHotTerm.term) {
                            this.SearchRoutes(foundHotTerm.term)
                                .then(response => {
                                    this.isLoading = false
                                })
                        } else {
                            this.isLoading = false
                        }
                    } else {
                        this.search()
                    }
                } else {
                    this.search()
                }
            }, 500),
            resetVueScroll() {
                setTimeout(() => {
                    if(this.$refs['vuescrollSearch']) {
                        this.$refs['vuescrollSearch'].scrollTo({
                            x: 0,
                            y: 0
                        }, true)
                    }
                }, 100)
            },
            search() {
                this.ResetResults()
                this.ResetSuggestions()
                if(this.searchTerm.length < 3) {
                    this.isLoading = false
                } else {
                    this.Search(this.searchTerm)
                    .then(response => {
                        this.searchResults = response
                        this.isLoading = false
                    })
                    .catch(error => {
                        this.isLoading = false
                        formUtil.handleErrors(error)
                    })
                }
            },
            logout() {
                this.Logout()
                    .then(response => {
                        this.$toasted.success(response.message, this.$toastConfig)
                        this.$router.push({ name: 'login', query: { logout: 'true' } })
                    })
            },
            lock() {
                this.Lock()
            },
            close() {
                this.SetUiConfig({ searchScreenShow: false })
            },
            handleKeyPressed(event) {
                let char = event.which || event.keyCode
                let character = event.key || String.fromCharCode(char)

                if (!this.searchScreenShow) {
                    this.SetUiConfig({ searchScreenShow: true })
                }
                this.searchTerm = character
            },
            regenerateNavigation() {
                this.Generate()
                    .then(() => {
                        this.isLoading = false
                        this.searchTerm = ''
                        this.close()
                    })
            },
            clearStoreAndReload() {
                this.isLoading = true
                if ('serviceWorker' in navigator) {
                    caches.keys().then((cacheNames) => {
                        this.isLoading = true
                        cacheNames.forEach((cacheName) => {
                            caches.delete(cacheName)
                        })
                        clearStore(true)
                    })
                } else {
                    clearStore(true)
                }
            },
            keyPressed(event) {
                const key = event.which || event.keyCode

                if (key === 37 || key === 38 || key === 39 || key === 40) {
                    const focusableElements = document.getElementsByClassName("focusable")
                    const activeElement = document.activeElement
                    let nextElement = 0

                    if(focusableElements && focusableElements.length) {
                        focusableElements.forEach((ele, index) => {
                            if(activeElement === ele) {
                                nextElement = index
                            }
                        })

                        if(nextElement == -1) {
                            nextElement = 0
                        } else {
                            if(key === 37 || key === 38) {
                                nextElement -= 1
                            } else {
                                nextElement += 1
                            }

                            if(nextElement < 0 && nextElement >= focusableElements.length) {
                                nextElement = 0
                            }
                        }

                        focusableElements[nextElement].focus()
                    }
                }
                return false
            },
        },
        created: function() {
            this.close()
            EventBus.$off('ESCAPE_PRESSED', this.close)
            EventBus.$off('KEY_PRESSED', this.handleKeyPressed)
            EventBus.$on('ESCAPE_PRESSED', this.close)
            EventBus.$on('KEY_PRESSED', this.handleKeyPressed)
        },
        beforeDestroy() {
            document.removeEventListener('keyup', this.keyPressed, true)
        },
    }

</script>

<style lang="scss" scoped>
    @import '~@js/core/assets/scss/imports.scss';

    .app-search-screen {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        width: 100%;
        height: 100%;
        background: rgba(255, 255, 255, 0.9);
        z-index: 1050;
        padding: $side-margin $side-margin*2;

        .app-search-wrapper {
            position: relative;
            display: flex;
            flex-direction: column;
            justify-content: top;
            align-items: left;

            .search-input-wrapper {
                margin-bottom: $side-margin;

                .search-input {
                    margin-bottom: $margin-common;

                    .input-group-prepend {
                        margin-right: 1rem;
                    }

                    .form-control,
                    .input-group-prepend>.input-group-text {
                        font-size: $font-size-xxl;
                        font-weight: $font-weight-bold;
                        background-color: transparent;
                        border: none;
                        outline: none;
                    }

                    .form-control {
                        display: block;
                        padding: 0;

                        &:hover,
                        &:focus,
                        &:active {
                            outline: none;
                        }
                    }
                }
            }

            .search-suggestions {
                margin-bottom: $margin-common;

                .title {}

                ul.suggestions-list {
                    display: inline-block;

                    &>li {
                        display: inline-block;
                        cursor: pointer;

                        &:after {
                            content: ", "
                        }

                        &:last-child:after {
                            content: ""
                        }

                        &:hover {
                            color: map-get($theme-colors, 'darkest');
                        }
                    }
                }
            }

            .search-results-wrapper {
                display: flex;
                flex-wrap: nowrap;
                justify-content: flex-start;
                align-items: stretch;
                height: 75vh;
                max-height: 75vh;


                .search-results-sections {
                    display: flex;
                    flex-wrap: wrap;
                    justify-content: space-between;
                    align-items: stretch;
                    padding-bottom: 100px;
                }

                .search-results-section {
                    flex: 1;
                    margin-right: 1.5rem;
                    margin-bottom: 3rem;
                    flex-basis: 22%;
                    max-width: 32%;

                    h3.section-title {
                        margin-bottom: $margin-common;
                    }

                    .search-results-list {
                        list-style: none;
                        padding: 0;

                        .search-result-item {
                            a {
                                display: block;
                                padding: 0.5rem 0;
                                padding-left: 0.5rem;

                                &:before {
                                    content: "\00BB";
                                    margin-right: 0.2rem;
                                }

                                &:hover, &:focus, &:active {
                                    background: rgba(0,20,40,0.08);
                                }

                                &:active, &:focus {
                                    padding-left: 1.5rem;
                                }
                            }

                            & + .search-result-item {
                                border-top: $border-width solid $border-color;
                            }
                        }
                    }
                }
            }
        }

    }

</style>
