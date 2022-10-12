const charLimit = (value, size, suffix = '...') => {
    if (!value) return ''
    value = value.toString()

    if (value.length <= size) {
        return value + suffix
    }
    return value.substr(0, size) + suffix
}

export default charLimit
