export const normal = {
    theme: "primary",
    position: "bottom-right",
    duration: 5000,
    type: 'default',
    containerClass: "animated",
    icon: { name: 'fa-bell' },
    iconPack: "fontawesome",
}

export const info = Object.assign({}, normal, {
    icon: { name: 'fa-info-circle' }
})

export const success = Object.assign({}, normal, {
    icon: { name: 'fa-check-circle' }
})

export const error = Object.assign({}, normal, {
    icon: { name: 'fa-exclamation-triangle' }
})

export default {
    ...normal,
    normal,
    info,
    success,
    error,
}
