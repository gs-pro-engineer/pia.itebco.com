import vars from '@js/vars'

export const headerButton = function({ label, icon, tooltip, design = { color: 'white', size: 'md' } }) {
    return {
        label: label,
        icon: icon,
        tooltip: tooltip,
        design: design ? design.color || 'white' : 'white',
        size: design ? design.size || 'md' : 'md',
    }
}

export const headerRouteButton = function(label, icon, route, tooltip = null, design = null, params = {}, query = {}) {
    return {
        ...headerButton({ label, icon, tooltip, design }),
        action: function(router){
            router.push({ name: route, params: params, query: query })
        }
    }
}

export const headerPermittedRouteButton = function(label, icon, route, permission, tooltip = null, design = null, params = {}, query = {}) {
    return {
        ...headerRouteButton(label, icon, route, tooltip, design, params, query),
        permissions: [permission],
    }
}

export const headerActionButton = function(label, icon, action, tooltip = null, design = null) {
    return {
        ...headerButton({ label, icon, tooltip, design }),
        action: action
    }
}

export const headerPermittedActionButton = function(label, icon, action, permission, tooltip = null, design = null) {
    return {
        ...headerActionButton(label, icon, action, tooltip, design),
        permissions: [permission],
    }
}

export const headerEventButton = function(label, icon, eventOpts, tooltip = null, design = null) {
    return headerActionButton(label, icon, (router, eventBus) => {
        eventBus.$emit(eventOpts.event, eventOpts.options)
    }, tooltip, design)
}

export const headerPermittedEventButton = function(label, icon, eventOpts, permission, tooltip = null, design = null) {
    return {
        ...headerEventButton(label, icon, eventOpts, tooltip, design),
        permissions: [permission],
    }
}

export const addButton = function(route, permission) {
    return headerPermittedRouteButton($t('general.add_new'), 'fas fa-plus', route, permission)
}

export const editButton = function(route, permission) {
    return headerPermittedRouteButton($t('general.edit'), 'fas fa-edit', route, permission)
}

export const filterButton = function() {
    return headerEventButton('', 'fas fa-filter', { event: 'TOGGLE_FILTER' }, $t('general.filter'))
}

export const configButton = function(route, permission) {
    return headerPermittedRouteButton('', 'fas fa-cog', route, permission, $t('general.config'))
}

export const defaultSortOptions = {
    storeName: 'common',
    design: 'white',
}

export const getSortOptions = function(options = {}, optionsArray = []) {
    return {
        ...defaultSortOptions,
        ...options,
        options: [{
                label: $t('general.default'),
                dispatch: {
                    sortBy: ''
                }
            },
            ...optionsArray,
        ],
    }
}


export const headerLink = function({ label, icon }) {
    return {
        label: label,
        icon: icon,
    }
}

export const headerRouteLink = function(label, icon, route, params = {}, query = {}) {
    return {
        ...headerLink({ label, icon }),
        to: { name: route, params: params, query: query }
    }
}

export const headerPermittedRouteLink = function(label, icon, route, permission, params = {}, query = {}) {
    return {
        ...headerRouteLink(label, icon, route, params, query),
        permissions: [permission],
    }
}

export const headerActionLink = function(label, icon, action) {
    return {
        ...headerLink({ label, icon }),
        action: action
    }
}

export const headerPermittedActionLink = function(label, icon, action, permission) {
    return {
        ...headerActionLink(label, icon, action),
        permissions: [permission],
    }
}

export const headerEventLink = function(label, icon, eventOpts) {
    return headerActionLink(label, icon, (router, eventBus) => {
        eventBus.$emit(eventOpts.event, eventOpts.options)
    })
}

export const headerPermittedEventLink = function(label, icon, eventOpts, permission) {
    return {
        ...headerEventLink(label, icon, eventOpts),
        permissions: [permission],
    }
}


export const importOption = function(route, permission) {
    return headerPermittedRouteLink($t('general.import'), 'fas fa-file-import', route, permission)
}

export const configOption = function(route, permission) {
    return headerPermittedRouteLink($t('general.config'), 'fas fa-cog', route, permission)
}

export const saveDraftOption = function() {
    return headerEventLink($t('general.save_draft'), 'fas fa-file-upload', { event: 'SAVE_DRAFT' })
}

export const fetchSavedDraftOption = function() {
    return headerEventLink($t('general.fetch_saved_draft'), 'fas fa-file-download', { event: 'FETCH_SAVED_DRAFT' })
}

export const clearSavedDraftOption = function() {
    return headerEventLink($t('general.clear_saved_draft'), 'far fa-minus-square', { event: 'CLEAR_SAVED_DRAFT' })
}

export const printOption = function() {
    return headerEventLink($t('general.print'), 'fas fa-print', { event: 'EXPORT', options: { type: 'print' } })
}

export const exportPdfOption = function() {
    return headerEventLink($t('general.export_pdf'), 'fas fa-file-pdf', { event: 'EXPORT', options: { type: 'pdf' } })
}

export const exportXlsOption = function() {
    return headerEventLink($t('general.export_xls'), 'fas fa-file-excel', { event: 'EXPORT', options: { type: 'xls' } })
}

export const exportCsvOption = function() {
    return headerEventLink($t('general.export_csv'), 'fas fa-file-csv', { event: 'EXPORT', options: { type: 'csv' } })
}

export const exportExcelCsvOption = function() {
    return headerEventLink($t('general.export_excel_csv'), 'fas fa-file-csv', { event: 'EXPORT', options: { type: 'xls-csv' } })
}

export const getHelpOption = function(topic) {
    return headerEventLink($t('general.help'), 'fas fa-info', { event: 'TOGGLE_HELP', options: topic })
}

const keyBindings = {
    filter: {
        key_f: { type: 'event', emit: 'TOGGLE_FILTER'},
    },
    print: {
        key_p: { type: 'event', emit: 'EXPORT', payload: { type: 'print' }},
    },
    export: {
        key_e: { type: 'event', emit: 'EXPORT', payload: { type: 'pdf' }},
    },
}

export const commonKeyBindings = {
    ...keyBindings.filter,
    ...keyBindings.print,
    ...keyBindings.export,
}
