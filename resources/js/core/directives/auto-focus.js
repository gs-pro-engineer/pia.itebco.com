export default {
    // When the bound element is inserted into the DOM...
    inserted: function(el, binding) {
        // Focus the element
        if(binding.value) {
            setTimeout(() => {
                el.focus()
            }, 400)
        }
    },
};