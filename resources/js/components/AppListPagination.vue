<template>
    <div class="list-pagination-component">
        <div class="per-page-component">
            <b-dropdown id="perPageLimitDropdown" 
                        :text="limit + ' per page'" 
                        variant="primary" 
                        size="sm" 
                        class="mr-md-3 mb-md-3"
                        menu-class="show-dropdown-up"
                        toggle-class="btn-outline">
                <b-dropdown-item v-for="(option, index) in options" :key="option.value" @click="limitChanged(option.value)">{{ option.text }}</b-dropdown-item>
            </b-dropdown>
        </div>
        <div>
            <b-pagination :align="align || 'right'" :size="size || 'md'" :total-rows="total" v-model="currentPage" :per-page="limit" @input="pageChanged"></b-pagination>
        </div>
    </div>
</template>

<script>
import { BCarousel, BPagination, BDropdown, BDropdownItem, BDropdownItemButton } from 'bootstrap-vue'
export default {
    props: ['total', 'align', 'size', 'defaultLimit'],
    components: {
        BCarousel,
        BDropdown,
        BDropdownItem,
        BDropdownItemButton,
    },
    data() {
        return {
            currentPage: 1,
            limit: 5,
            options: [
                { value: 5, text: '5 per page' },
                { value: 10, text: '10 per page' },
                { value: 25, text: '25 per page' },
                { value: 50, text: '50 per page' },
                { value: 100, text: '100 per page' },
            ]
        }
    },
    mounted() {
        this.updateCurrentPageAndLimit()
    },
    watch: {
        $route() {
            this.updateCurrentPageAndLimit();
        }
    },
    methods: {
        updateCurrentPageAndLimit() {
            this.currentPage = parseInt(this.$route.query.page) || 1;
            this.limit = parseInt(this.$route.query.limit) || this.defaultLimit || 5;
            this.$emit('currentPageUpdated', { page: this.currentPage, per_page: this.limit });
        },
        pageChanged() {
            this.$router.push({ path: this.$route.path, query: { page: this.currentPage, limit: this.limit } })
        },
        limitChanged(value) {
            this.limit = value;
            this.$router.push({ path: this.$route.path, query: { page: this.currentPage, limit: this.limit } })
        }
    }
};

</script>

<style lang="scss" scoped>
.list-pagination-component {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: flex-end;
    .per-page-component {
        display: flex;
        justify-content: flex-end;
    }
}

</style>
