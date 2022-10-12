export const isMobile = function() {
    return screen.width <= 760
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(window.navigator.userAgent)) {
        return true
    } else {
        return false
    }
}

const Mobile = {
    install(Vue, options = {}) {
        const vm = new Vue({
            data: {
                isMobile: isMobile
            }
        })

        Vue.mixin({
            computed: {
                isMobile() {
                    return vm.$data.isMobile
                }
            }
        })
    }
}

if (typeof window !== 'undefined' && window.Vue) {
    window.Vue.use(Mobile)
}

export default Mobile
