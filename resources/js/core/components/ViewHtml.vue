<template>
    <div class="view-html" v-html="value"></div>
</template>

<script>
    export default {
        name: "view-html",
        props: ['value'],
    }
</script>