import EventBus from '@js/event-bus'
import { mapGetters, mapActions } from 'vuex'

export default {
    data() {
        return {
            isLoading: true,
            isFetching: true,
            uuid: null,
            subUuid: null,
            entity: null,
            duplicate: false,
            duplicateRoute: null,
            fallBackRoute: 'appDashboard',
            initUrl: '',
            initSubUrl: null,
        }
    },
    methods: {
        ...mapActions('common', [
            'Init',
            'InitSub',
            'Get',
        ]),
        getInitialData() {
            this.isLoading = true
            this.Get(this.uuid)
                .then(response => {
                    this.entity = response
                    this.isLoading = false
                    this.isFetching = false
                })
                .catch(error => {
                    this.isLoading = false
                    this.formErrors = formUtil.handleErrors(error)
                    this.$router.push({ name: this.fallBackRoute })
                })
        }
    },
    mounted() {
        if (this.$route.params.uuid) {
            this.uuid = this.$route.params.uuid
        }
        if (this.$route.params.subUuid) {
            this.subUuid = this.$route.params.subUuid
        }
        if (this.duplicateRoute && this.$route.name === this.duplicateRoute) {
            this.duplicate = true
        }
        this.Init({ url: this.initUrl })
        
        if(this.initSubUrl) {
            this.InitSub({ url: (this.subUuid ? this.subUuid + '/' : '') + this.initSubUrl })
        }
        
        this.getInitialData()
    },
    beforeRouteEnter(to, from, next) {
        if (!to.params.uuid) {
            next({ name: this.fallBackRoute })
        } else {
            next()
        }
    },
    beforeRouteLeave(to, from, next) {
        EventBus.$emit('ROUTE_LEAVING', next)
    },
}
