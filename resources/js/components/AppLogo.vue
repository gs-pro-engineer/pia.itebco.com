<template>
    <component :is="tag" :href="computedUrl" :class="['logo', `${place}-logo`, `${size}-logo`, orgLogo ? 'org-logo' : 'app-logo', inline ? 'inline-logo' : '']">
        <img class="logo-icon" v-if="orgLogo" :src="orgLogo" :alt="appTitle" />
        <template v-else>
            <span class="logo-text" :title="appTitle">{{ appLogoText }}</span>
        </template>
    </component>
</template>

<script>
    import { mapGetters } from 'vuex'
    export default {
        props: {
            tag: {
                type: String,
                default: 'a'
            },
            place: {
                type: String,
                default: 'normal'
            },
            size: {
                type: String,
                default: 'normal'
            },
            appLogo: {
                type: Boolean,
                default: false
            },
            inline: {
                type: Boolean,
                default: false
            },
            link: {
                type: String,
                default: ''
            },
            assets: {
                type: Object,
            }
        },
        data() {
            return {
                appLogoText: window.kmenv.name,
            }
        },
        computed: {
            ...mapGetters('config', [
                'configs',
                'uiConfigs',
            ]),
            computedUrl() {
                return this.tag === 'a' ? (this.link !== '' ? this.link : '/' ) : false
            },
            orgLogo() {
                if(this.appLogo || !(this.configs.assets || this.assets)) {
                    if( this.place === 'navbar' || this.place === 'sidebar' || this.place === 'dark' ) {
                        return '/images/logo-light.png'
                    }
                    return '/images/logo.png'
                }

                let finalLogo = this.assets && this.assets.logo ? this.assets.logo : (this.configs.assets.logo ? this.configs.assets.logo : '/images/logo.png')

                if((this.assets && this.assets.logoLight) || this.configs.assets.logoLight) {
                    if( (this.place === 'navbar' && this.uiConfigs.topNavbarLogoLight) || (this.place === 'sidebar' && this.uiConfigs.leftSidebarLogoLight) || this.place === 'dark' ) {
                        finalLogo = this.assets && this.assets.logoLight ? this.assets.logoLight : this.configs.assets.logoLight
                    }
                }
                return finalLogo
            },
            appTitle() {
                return this.configs.basic ? this.configs.basic.appName : window.kmenv.name
            },
        },
    }

</script>
