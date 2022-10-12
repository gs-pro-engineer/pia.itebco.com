function enable() {
    const toLock = document.getElementById('app-container')
    let scrollPosition = toLock.pageYOffset;
    toLock.style.overflow = 'hidden'
    toLock.style.position = 'fixed'
    toLock.style.width = '100%'
}

function disable() {
    const toLock = document.getElementById('app-container')
    toLock.style.removeProperty('overflow')
    toLock.style.removeProperty('position')
    toLock.style.removeProperty('width')
}

function toggle(value) {
    if(value) {
        enable()
    } else {
        disable()
    }
}

export default {
    bind: function(el, binding) {
        toggle(binding.value)
    },
    update: function(el, binding) {
        toggle(binding.value)
    },
    unbind: function(el) {
        disable()
    }
}
