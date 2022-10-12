<template>
    <li :class="item.meta.classes">
        <template v-if="item.meta.prefixTitle">
            <div class="section-title">{{ $t(item.meta.prefixTitle) }}</div>
        </template>

        <template v-if="!item.children || item.children.length === 0 || item.meta.hideChildren">
            <a v-if="item.meta && item.meta.link" target="_blank" :href="item.redirect">
                <menu-item-content :item="item" :thumb-on-right="thumbOnRight" :menu-letter-icon="menuLetterIcon" ></menu-item-content>
            </a>
            <router-link :to="resolvePath(item)">
                <menu-item-content :item="item" :thumb-on-right="thumbOnRight" :menu-letter-icon="menuLetterIcon"></menu-item-content>
            </router-link>
        </template>

        <template v-else-if="item.meta.hideChildren && !showChildren">
            <router-link :to="resolvePath(item)">
                <menu-item-content :item="item" :thumb-on-right="thumbOnRight" :menu-letter-icon="menuLetterIcon"></menu-item-content>
            </router-link>
        </template>

        <template v-else-if="item.meta.isHiddenNav && item.children.length">
            <template v-for="(navItem, k) in item.children" v-if="!(navItem.meta.isHiddenNav && navItem.meta.hideChildren)">
                <menu-item :menu-id="`${menuId}-${navItem.name}-${k}`" :item="navItem" :base-path="resolvePath(item)" :thumb-on-right="thumbOnRight" :menu-letter-icon="menuLetterIcon" :sidebar-open="sidebarOpen" />
            </template>
        </template>

        <template v-else>
            <a :class="['has-children', isCollapseOpen ? 'is-open' : '']" @click="isCollapseOpen = !isCollapseOpen">
                <menu-item-content :item="item" :thumb-on-right="thumbOnRight" :menu-letter-icon="menuLetterIcon" ></menu-item-content>
            </a>

            <b-collapse v-model="isCollapseOpen" :id="menuId" :accordion="parent?`sub-menu-accordion-${parent.title.length}`:'menu-accordion'">
                <ul class="list-unstyled">
                    <template v-for="(navItem, k) in item.children" v-if="!(navItem.meta.isHiddenNav && navItem.meta.hideChildren)">
                        <menu-item :key="navItem.name||navItem.path" :menu-id="`${menuId}-${navItem.name}-${k}`" :item="navItem" :base-path="resolvePath(item)" :thumb-on-right="thumbOnRight" :menu-letter-icon="menuLetterIcon" :show-children="showChildren" :sidebar-open="sidebarOpen" :parent="item.meta" />
                    </template>
                </ul>
            </b-collapse>
        </template>
    </li>
</template>

<script>
    import MenuItem from './app-sidebar-menu-item'
    import MenuItemContent from './app-sidebar-menu-item-content'
    import path from 'path'
    import { BCollapse } from 'bootstrap-vue'

    export default {
        name: 'MenuItem',
        props: {
            menuId: {
                type: String,
                required: true
            },
            item: {
                type: Object,
                required: true
            },
            parent: {
                type: Object,
            },
            basePath: {
                type: String,
                default: ''
            },
            thumbOnRight: {
                type: Boolean,
                default: false
            },
            showChildren: {
                type: Boolean,
                default: false
            },
            menuLetterIcon: {
                type: Boolean,
                default: false
            },
            sidebarOpen: {
                type: Boolean,
                default: false
            },
        },
        components: {
            BCollapse,
            MenuItem,
            MenuItemContent,
        },
        data() {
            return {
                isCollapseOpen: false,
                wasCollapseOpen: false
            }
        },
        watch: {
            sidebarOpen(v) {
                if(v) {
                    this.isCollapseOpen = this.wasCollapseOpen
                } else {
                    this.wasCollapseOpen = this.isCollapseOpen
                    this.isCollapseOpen = false
                }
            }
        },
        methods: {
            resolvePath(item) {
                return item.meta && item.meta.link ?
                    item.redirect :
                    path.resolve(this.basePath, item.path)
            },
        },
    }

</script>

<style lang="scss" scoped>
</style>
