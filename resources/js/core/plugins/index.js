import IsMobile from "./is-mobile"
import IsOnline from "./is-online"
import PrintComponent from "./print-component"
import GoogleAnalytics from "./google-analytics"

/**
 * You can register global directives here and use them as a plugin in your main Vue instance
 */

const printComponentOptions = {
    styles: [
        '/css/vendor.css',
        '/css/style.css',
        '/css/print.css',
    ],
    scripts: [
        '/js/before-print.js',
    ]
}

const Plugins = {
    install(Vue) {
        Vue.use(IsMobile)
        Vue.use(IsOnline)
        Vue.use(PrintComponent, printComponentOptions)
        Vue.use(GoogleAnalytics)
    }
}

export default Plugins
