<template>
    <div class="buttons-container">
        <div class="buttons-wrapper">
            <div class="btn-group buttons" role="group">
                <router-link v-if="linkOne" tag="a" class="btn btn-sm btn-light flex-grow-2" :to="linkOne.route" tabindex="-1">
                    {{ linkOne.label}}
                </router-link>

                <router-link v-if="linkTwo" tag="a" class="btn btn-sm btn-light flex-grow-2" :to="linkTwo.route" tabindex="-1">
                    {{ linkTwo.label}}
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "popover-buttons",
        props: {
            linkOne: {
                type: Object,
                default: null
            },
            linkTwo: {
                type: Object,
                default: null
            },
        },
    }

</script>
