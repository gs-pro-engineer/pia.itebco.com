<template>
    <div :class="['menu-item-content', itemClasses()]">
        <span v-if="!thumbOnRight" class="menu-thumbnail">
            <span v-if="menuLetterIcon && !item.meta.icon" class="letter-icon">{{ iconLetter() }}</span>
            <i v-else-if="item.meta.icon" :class="item.meta.icon"></i>
            <i v-else class="fas fa-caret-right text-muted-sm"></i>
        </span>

        <span class="detailed">
            <span class="title">{{ $t(item.meta.title) }}</span>
            <span class="description">{{ $t(item.meta.description) }}</span>
        </span>

        <span v-if="item.meta.badge" :data-badge="item.meta.badge.class" :class="['ml-auto', item.meta.badge.class]">{{ $t(item.meta.badge.title) }}</span>
        <span v-if="thumbOnRight" class="menu-thumbnail">
            <span v-if="menuLetterIcon && !item.meta.icon" class="letter-icon">{{ iconLetter() }}</span>
            <i v-else-if="item.meta.icon" :class="item.meta.icon"></i>
            <i v-else class="fas fa-caret-right text-muted-sm"></i>
        </span>
    </div class="menu-item-content">
</template>

<script>
export default {
    name: 'MenuItemContent',
    props: {
        item: {
          type: Object,
          required: true
        },
        thumbOnRight: {
          type: Boolean,
          default: false
        },
        menuLetterIcon: {
          type: Boolean,
          default: false
        },
    },
    methods: {
        iconLetter(){
            const title = this.item.meta.trans ? this.$t(this.item.meta.trans, {'attribute': this.$t(this.item.meta.title)}) : this.$t(this.item.meta.title)
            return title.split(' ').map(word => {
                return word.charAt(0).toUpperCase()
            }).join('')
        },
        itemClasses() {
            return this.item.meta.class ? this.item.meta.class : ''
        }
    }
}

</script>

<style lang="scss" scoped>
</style>
