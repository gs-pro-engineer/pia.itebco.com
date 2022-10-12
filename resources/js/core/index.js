import './extend-js'

// Importing third party libraries
import moment from 'moment-timezone'
import vueMoment from 'vue-moment'

import Toasted from 'vue-toasted'
import vuescroll from 'vuescroll/dist/vuescroll-native'
import VueLazyload from 'vue-lazyload'
import VueTour from 'vue-tour'
import { ModalPlugin } from 'bootstrap-vue'
import fullscreen from 'vue-fullscreen'

// Importing configs of third party libraries
import toastConfig from './configs/toast'
import { swtAlert } from './configs/sweet-alert'
import vuescrollConfig from './configs/vuescroll'

// Importing third party stylesheets
import '@fortawesome/fontawesome-free/css/all.css'
import 'nprogress/nprogress.css'
import 'animate.css/animate.min.css'
import 'vue-multiselect/dist/vue-multiselect.min.css'
import 'flatpickr/dist/flatpickr.css'
import 'vuescroll/dist/vuescroll.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'vue-tour/dist/vue-tour.css'

// Importing required image assets
import lazyloadError from '@images/plugin/lazyload-error.png'
import lazyload from '@images/plugin/lazyload.svg'

// Importing stylesheets
import './assets/scss/core.scss'

import * as formUtil from './utils/form'
import components from './components'
import directives from './directives'
import plugins from './plugins'
import filters from './filters'


// Few settings to be done
moment.defaultFormat = 'YYYY-MM-DD'
moment.updateLocale('en', {
    months : [
        window.trans('list.general.months.jan'),
        window.trans('list.general.months.feb'),
        window.trans('list.general.months.mar'),
        window.trans('list.general.months.apr'),
        window.trans('list.general.months.may'),
        window.trans('list.general.months.jun'),
        window.trans('list.general.months.jul'),
        window.trans('list.general.months.aug'),
        window.trans('list.general.months.sep'),
        window.trans('list.general.months.oct'),
        window.trans('list.general.months.nov'),
        window.trans('list.general.months.dec')
    ],
    monthsShort : [
        window.trans('list.general.months_short.jan'),
        window.trans('list.general.months_short.feb'),
        window.trans('list.general.months_short.mar'),
        window.trans('list.general.months_short.apr'),
        window.trans('list.general.months_short.may'),
        window.trans('list.general.months_short.jun'),
        window.trans('list.general.months_short.jul'),
        window.trans('list.general.months_short.aug'),
        window.trans('list.general.months_short.sep'),
        window.trans('list.general.months_short.oct'),
        window.trans('list.general.months_short.nov'),
        window.trans('list.general.months_short.dec')
    ],
    weekdays : [
        window.trans('list.general.days.sunday'),
        window.trans('list.general.days.monday'),
        window.trans('list.general.days.tuesday'),
        window.trans('list.general.days.wednesday'),
        window.trans('list.general.days.thursday'),
        window.trans('list.general.days.friday'),
        window.trans('list.general.days.saturday')
    ],
    weekdaysShort : [
        window.trans('list.general.days_short.sunday'),
        window.trans('list.general.days_short.monday'),
        window.trans('list.general.days_short.tuesday'),
        window.trans('list.general.days_short.wednesday'),
        window.trans('list.general.days_short.thursday'),
        window.trans('list.general.days_short.friday'),
        window.trans('list.general.days_short.saturday')
    ],
})

window.moment = moment
window.toastConfig = toastConfig
window.swtAlert = swtAlert
window.formUtil = formUtil


export default {
  install(Vue) {
    Vue.prototype.trans = window.trans
    Vue.prototype.$t = window.trans
    // Register third party libraries
    Vue.use(vueMoment, { moment })
    // Vue.use(Notifications)
    Vue.use(Toasted)
    Vue.use(fullscreen)
    Vue.use(vuescroll, { ops: vuescrollConfig })
    Vue.use(VueLazyload, {
        preLoad: 1.4,
        error: lazyloadError,
        loading: lazyload,
        attempt: 1
    })
    Vue.use(VueTour)
    Vue.use(ModalPlugin)

    Vue.use(components)
    Vue.use(directives)
    Vue.use(plugins)
    Vue.use(filters)

    Vue.prototype.$toastConfig = window.toastConfig
  }
}
