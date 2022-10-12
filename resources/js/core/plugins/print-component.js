const defaults = {
    url: '',
    name: '_blank',
    title: 'Printing',
    specs: {
        fullscreen: true,
        titlebar: true,
        scrollbars: true,
    },
    autoPrint: true,
    autoCloseAfterPrint: true,
    replace: true,
    styles: [],
    scripts: [],
    mergeStyles: true,
    mergeScripts: true,
    textColorFlat: true,
    bodyClasses: '',
}

function addStyles(windowRef, styles) {
    styles.forEach(style => {
        let link = windowRef.document.createElement('link')
        link.setAttribute('rel', 'stylesheet')
        link.setAttribute('type', 'text/css')
        link.setAttribute('href', style);
        windowRef.document.getElementsByTagName('head')[0].appendChild(link);
    });
}

function addScripts(windowRef, scripts) {
    scripts.forEach(script => {
        let link = windowRef.document.createElement('script')
        link.type = 'text/javascript'
        link.src = script
        windowRef.document.getElementsByTagName('head')[0].appendChild(link);
    });
}

function printElement(element, options, cb = () => true) {
    try {
        const windowRef = window.open(options.url, options.name, options.specs)

        if(!windowRef) {
            alert($t('misc.popup_blocker_alert'))
            return false
        }
        windowRef.document.write(`
            <html>
              <head>
                <title>${options.title}</title>
                <style>
                    html {}
                </style>
              </head>
              <body class="print-component ${options.bodyClasses ? options.bodyClasses : ''}">
                ${element.innerHTML}
              </body>
            </html>
          `)

        addStyles(windowRef, options.styles)
        addScripts(windowRef, options.scripts)

        setTimeout(() => {
            windowRef.document.close()
            windowRef.focus()
            if (options.autoPrint) {
                windowRef.print()
                if (options.autoCloseAfterPrint) {
                    windowRef.close()
                }
            }
            cb()
        }, 1000)
    } catch (e) {
        console.error(e)
        return e
    }
}

const PrintComponent = {
    install(Vue, installOptions = {}) {
        Vue.prototype.$printComponent = function(ele, localOptions = {}, cb = () => true) {
            const element = document.getElementById(ele);

            if (!element) {
                alert(`Element to print #${ele} is not found!`);
                return;
            }

            let options = Object.assign({}, defaults, installOptions)
            options = Object.assign({}, options, localOptions)

            if(options.mergeStyles && localOptions.styles) {
                options.styles = installOptions.styles.concat(localOptions.styles)
            }

            if(options.mergeScripts && localOptions.scripts) {
                options.scripts = installOptions.scripts.concat(localOptions.scripts)
            }

            if(options.textColorFlat) {
                options.bodyClasses = 'print-black-color'
            }

            let specs = 'fullscreen=yes,titlebar=yes,scrollbars=yes'

            if (options.specs) {
                if (typeof options.specs === 'object') {
                    specs = ''
                    Object.keys(options.specs)
                        .forEach(function(key) {
                            if (options.specs[key]) {
                                specs = specs ? ',' : ''
                                specs = `${specs}${key}=yes`
                            }
                        });
                } else if (Array.isArray(options.specs)) {
                    specs = !!options.specs.length ? options.specs.join(',') : '';
                }
            }

            options.specs = specs

            return printElement(element, options, cb)
        }
    }
}

if (typeof window !== 'undefined' && window.Vue) {
    window.Vue.use(PrintComponent)
}

export default PrintComponent
