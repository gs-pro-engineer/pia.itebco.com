<template>
    <div class="landing-layout">
        <transition-page>
            <router-view />
        </transition-page>
    </div>
</template>

<script>
    import '@js/app-components'

    export default {}
</script>

<style lang="scss">
    .landing-layout {
        width: 100%;
        min-height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        position: relative;
    }

</style>
