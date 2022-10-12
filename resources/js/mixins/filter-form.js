import { mapGetters, mapActions } from 'vuex'
import FilterWrapper from '@components/FilterWrapper'

export default {
    components: {
        FilterWrapper,
    },
    props: {
        preRequisite: {
            type: Object,
            default() {
                return {}
            }
        },
        boxed: {
            type: Boolean,
            default: false
        },
        isLoading: {
            type: Boolean,
            default: false
        },
    },
    computed: {
        ...mapGetters('common', [
            'filters',
        ]),
        ...mapGetters('config', [
            'vars',
        ]),
    },
}
