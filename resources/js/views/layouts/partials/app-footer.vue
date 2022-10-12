<template>
    <footer class="app-footer guest-footer mt-2">
        <p class="text-center mb-0 py-3"><span class="font-weight-700">{{ footerCredit }}</span> {{ $t('product.version') }} {{ version }}</p>
    </footer>
</template>

<script>
    export default { 
        props: ['footerCredit', 'version']
    }
</script>