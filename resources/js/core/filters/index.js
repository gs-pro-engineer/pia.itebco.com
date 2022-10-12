import stripHtml from "./strip-html.js"
import charLimit from "./char-limit.js"

/**
 * You can register global directives here and use them as a plugin in your main Vue instance
 */

const Filters = {
  install(Vue) {
    Vue.filter("stripHtml", stripHtml)
    Vue.filter("charLimit", charLimit)
  }
}

export default Filters
