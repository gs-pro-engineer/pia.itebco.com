<template>
    <base-dropdown tag="div" direction="down" menu-classes="show-dropdown-up" position="right" class="table-row-actions">

        <base-button slot="title" type="button" data-toggle="dropdown" role="button" size="md"><i :class="btnIcon"></i></base-button>

        <slot />
    </base-dropdown>
</template>

<script>
    export default {
        name: "table-row-actions",
        props: {
            btnIcon: {
                type: String,
                default: 'fas fa-ellipsis-v'
            },
        },
        data() {
            return {}
        },
        computed: {
        },
    };

</script>
