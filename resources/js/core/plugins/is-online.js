const Online = {
    install(Vue, options = {}) {
        const vm = new Vue({
            data: {
                online: window.navigator.onLine,
                offlineToast: null
            },
            watch: {
                online: _.throttle(function(newVal, oldVal) {
                    if(newVal !== oldVal) {
                        if(newVal) {
                            vm.$toasted.clear()
                            vm.$toasted.success($t('general.online_message'), vm.$toastConfig.success)
                        } else {
                            vm.$data.offlineToast = vm.$toasted.error($t('general.offline_message'), { ...vm.$toastConfig.error, duration: null })
                        }
                    }
                }, 1000, {
                    'leading': true,
                    'trailing': false
                }),
            }
        })

        window.addEventListener('online', function handleOnline(e) {
            vm.$data.online = true
        })

        window.addEventListener('offline', function handleOffline(e) {
            vm.$data.online = false
        })

        Vue.mixin({
            computed: {
                isOnline() {
                    return vm.$data.online
                }
            },
            methods: {
                checkIfOffline: _.throttle(function() {
                    if(! vm.$data.online) {
                        vm.$data.offlineToast = vm.$toasted.error($t('general.offline_message'), { ...vm.$toastConfig.error, duration: null })
                    }
                }, 1000, {
                    'leading': true,
                    'trailing': false
                }),
            }
        })
    }
}

if (typeof window !== 'undefined' && window.Vue) {
    window.Vue.use(Online)
}

export default Online
