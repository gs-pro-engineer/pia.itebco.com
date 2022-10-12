export default {
    bind: function(el, binding, vnode) {
        el.blurOnWheel = function(event) {
            event.target.blur()
        }

        if(binding.value) {
            el.addEventListener("wheel", el.blurOnWheel)
        }
    },
    unbind: function(el) {
        el.removeEventListener("wheel", el.blurOnWheel)
    }
}
