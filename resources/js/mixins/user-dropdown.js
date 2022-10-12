import { mapGetters, mapActions } from 'vuex'
import Avatar from 'vue-avatar'

export default {
    components: {
        Avatar,
    },
    computed: {
        ...mapGetters('config', [
            'configs',
            'uiConfigs',
            'vars',
            'allowExtraInput',
        ]),
        ...mapGetters('user', {
            getUserDetails: 'get',
            hasRole: 'hasRole',
            hasPermission: 'hasPermission',
            loggedInUser: 'loggedInUser',
            userUuid: 'uuid',
            profile: 'profile',
            username: 'username',
            locked: 'locked',
        }),
    },
    methods: {
        ...mapActions('user', [
            'Logout',
            'Lock',
        ]),
        lock() {
            this.$gaEvent('engagement', 'lockScreen', 'Navbar')
            this.Lock()
        },
        logout() {
            this.$gaEvent('engagement', 'logout', 'Navbar')
            this.Logout()
                .then(response => {
                    this.$gaEvent('activity', 'loggedout')
                    this.$router.push({ name: 'login', query: { logout: 'true' } })
                })
        },
    },
}
