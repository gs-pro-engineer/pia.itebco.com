import { mapGetters, mapActions } from 'vuex'
import defaultVars from '@js/vars'

export default {
    data() {
        return {
            entitiesArray: [],
            entitiesGrouped: [],
            filters: {},
            initialFiltersData: {},
            showFilters: true,
            isLoading: true,
            initUrl: '',
            dataType: null,
        }
    },
    computed: {
        ...mapGetters('config', [
            'vars',
        ]),
    },
    watch: {
        $route() {
            this.updatePageMeta()
        },
    },
    methods: {
        ...mapActions('common', [
            'Init',
            'GetPreRequisite',
            'Custom',
        ]),
        getInitialData() {
            this.isLoading = true
            const query = {
                ...this.filters,
            }

            this.Custom({
                    url: `/${this.initUrl}?type=list`,
                    method: 'get',
                    params: query,
                })
                .then(response => {
                    if (typeof this.assignEntities === "function") { 
                        this.assignEntities()
                    } else {
                        this.entitiesArray = response
                        this.entitiesGrouped = _.groupBy(response, (e) => e[this.entitiesGroupBy])
                    }

                    this.isLoading = false
                })
                .catch(error => {
                    this.isLoading = false
                    formUtil.handleErrors(error)
                })
        },
        submit() {
            const filterQuery = {
                ...this.$route.query,
                ...this.filters,
                filtered: true,
                filteredAt: moment().unix()
            }

            this.$router.push({ path: this.$route.path, query: filterQuery }).catch(err => {})
        },
        reset() {
            this.filters = _.cloneDeep(this.initialFiltersData)
            if(this.$route.query && this.$route.query.filtered) {
                this.$router.push({ path: this.$route.path })
            }
        },
        updatePageMeta() {
            const query = this.$route.query
            let filtersMeta = this.filters
            query.objForEach((value, key) => {
                filtersMeta[key] = value
            })

            this.isFiltered = query.filtered === 'true' ? true : query.filtered === 'false' ? false : query.filtered
            this.getInitialData()
        },
    },
    mounted() {
        this.Init({ url: this.initUrl })
        this.initialFiltersData = _.cloneDeep(this.filters)
    },
}
