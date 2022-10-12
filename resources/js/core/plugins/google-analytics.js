const GoogleAnalytics = {
    install(Vue, options = {}) {
        const vm = new Vue({})

        Vue.prototype.$gaEvent = (category, action, label, value) => {
            if(! (window.kmenv && window.kmenv.gaid) || !category || !action) {
                return 
            }

            let opts = {
                eventCategory: category,
                eventAction: action,
            }

            if(label) {
                opts.eventLabel = label
            }

            if(value) {
                opts.eventValue = value
            }

            vm.$ga.event(opts)
        }
    }
}

if (typeof window !== 'undefined' && window.Vue) {
    window.Vue.use(GoogleAnalytics)
}

export default GoogleAnalytics
