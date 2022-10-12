export default {
    bind: function(el, binding, vnode) {
        el.selectOnFocus = function(event) {
            event.target.select()
        }

        if(binding.value) {
            el.addEventListener("focus", el.selectOnFocus)
        }
    },
    unbind: function(el) {
        el.removeEventListener("focus", el.selectOnFocus)
    }
}
