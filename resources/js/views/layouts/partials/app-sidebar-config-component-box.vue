<template>
  <div class="config-box">
    <a :class="['box-heading', isOpen? 'opened' : '']" @click="isOpen = !isOpen">{{ heading }}</a>

    <b-collapse v-model="isOpen" :id="heading" class="box-content">
        <slot></slot>
    </b-collapse>
  </div>
</template>

<script>
import { BCollapse } from 'bootstrap-vue'
export default {
    props: ["heading"],
    components: {
        BCollapse,
    },
    data() {
        return {
            isOpen: false,
        }
    },
    methods: {
    }
}

</script>

<style lang="scss">
</style>
