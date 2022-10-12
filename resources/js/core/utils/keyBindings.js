import store from '@js/store'
import router from '@js/router'
import EventBus from '@js/event-bus'

let hotkeyArray = store.getters['config/config']('hotKey') || ['ctrlKey','shiftKey']
let secondaryHotkeyArray = store.getters['config/config']('secondaryHotKey') || ['altKey','shiftKey']

let goBackHotKey = secondaryHotkeyArray || ['altKey']

const hotkeyClicked = function(event, combination) {
    let needCtrl = combination.indexOf('ctrlKey') !== -1
    let needAlt = combination.indexOf('altKey') !== -1
    let needShift = combination.indexOf('shiftKey') !== -1

    if(needCtrl && !event.ctrlKey && event.key && event.key.toLowerCase() !== 'control' && event.key.toLowerCase() !== 'ctrl') {
        return false
    }

    if(needAlt && !event.altKey && event.key && event.key.toLowerCase() !== 'alt' && event.key.toLowerCase() !== 'option') {
        return false
    }

    if(needShift && !event.shiftKey && event.key && event.key.toLowerCase() !== 'shift') {
        return false
    }

    return true
}

const keyupListener = function(event) {
    const key = event.which || event.keyCode
    const target = event.target
    const shouldExit = event.target.classList.contains('pause-keyuplistener')

    if ((key === 27 || key === "Escape" || key === 66 || key === 8 || key === 46 || key === "Backspace") && hotkeyClicked(event, goBackHotKey)) {
        // 66 = b = back
        router.go(-1)

    } else if (hotkeyClicked(event, hotkeyArray)) {
        EventBus.$emit('HOTKEY_PRESSED', key) // USER DEFINED SHORTCUTS

    } else if (hotkeyClicked(event, secondaryHotkeyArray)) {
        EventBus.$emit('SECONDARY_HOTKEY_PRESSED', key) // SYSTEM SHORTCUTS

        const moduleKeyBindings = store.getters['config/config']('keyBindings') || {}
        const char = 'key_' + String.fromCharCode(key).toLowerCase()

        if(moduleKeyBindings.hasOwnProperty(char)) {
            if(typeof moduleKeyBindings[char] === 'object' && moduleKeyBindings[char] !== null) {
                if(moduleKeyBindings[char].type === 'event') {
                    let payload = moduleKeyBindings[char].payload || null
                    EventBus.$emit(moduleKeyBindings[char].emit, payload)
                }
            } else {
                router.push({ name: moduleKeyBindings[char] })
            }
        }

    } else if (event.ctrlKey || event.altKey || event.shiftKey) {

    } else if ((target.localName === 'body' || target.localName === 'document') && ((key >= 48 && key <= 90) || (key >= 96 && key <= 105))) {

        if (shouldExit) return;
        EventBus.$emit('KEY_PRESSED', event)

    } else if ((key === 27)) {

        EventBus.$emit('ESCAPE_PRESSED', event)

    }
}

const keyBindings = {
    keyupListener,
}

export default keyBindings
