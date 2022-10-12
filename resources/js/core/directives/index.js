import { VBPopover, VBTooltip } from 'bootstrap-vue'
import clickOutside from "./click-outside.js"
import autoFocus from "./auto-focus.js"
import scrollLock from "./scroll-lock.js"
import selectOnFocus from "./select-on-focus.js"
import scrollIfFocused from "./scroll-if-focused.js"
import translateOnBlur from "./translate-on-blur.js"
import blurOnWheel from "./blur-on-wheel.js"
import printable from "./printable.js"

/**
 * You can register global directives here and use them as a plugin in your main Vue instance
 */

const Directives = {
  install(Vue) {
    Vue.directive('b-popover', VBPopover)
    Vue.directive('b-tooltip', VBTooltip)
    Vue.directive("click-outside", clickOutside)
    Vue.directive("auto-focus", autoFocus)
    Vue.directive("scroll-lock", scrollLock)
    Vue.directive("select-on-focus", selectOnFocus)
    Vue.directive("scroll-if-focused", scrollIfFocused)
    Vue.directive("translate-on-blur", translateOnBlur)
    Vue.directive("blur-on-wheel", blurOnWheel)
    Vue.directive("printable", printable)
  }
}

export default Directives
