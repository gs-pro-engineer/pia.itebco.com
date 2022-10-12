export default {
    bind: function(el, binding, vnode) {
        if (binding.value) {
            var options = {
                sourceLanguage: google.elements.transliteration.LanguageCode.ENGLISH,
                destinationLanguage: [google.elements.transliteration.LanguageCode.HINDI],
                shortcutKey: 'ctrl+g',
                transliterationEnabled: true
            }

            var control = new google.elements.transliteration.TransliterationControl(options)
            // a getter for each property google transliterate reads and a setter for each it modifies
            var inputOrTextareaProxy = {
                get getAttribute() { return el.getAttribute.bind(el) },
                get addEventListener() { return el.addEventListener.bind(el) },
                get blur() { return el.blur.bind(el) },
                get focus() { return el.focus.bind(el) },
                get tagName() { return el.tagName },
                get type() { return el.type },
                get id() { return el.id },
                get style() { return el.style },
                get selectionStart() { return el.selectionStart },
                get selectionEnd() { return el.selectionEnd },
                get value() {
                    el.valueBackup = el.value
                    return el.value
                },
                set value(v) {
                    el.value = v
                    el.dispatchEvent(new CustomEvent('input'))
                },
                get nodeType() { return el.nodeType },
                get ownerDocument() { return el.ownerDocument },
                get scrollTop() { return el.scrollTop },
                set scrollTop(v) { el.scrollTop = v }
            }

            control.makeTransliteratable([inputOrTextareaProxy])
        }
    },
}
