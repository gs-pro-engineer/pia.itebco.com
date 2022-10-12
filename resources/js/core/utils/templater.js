import moment from 'moment'

export const templateStrings = {
    'DAY_OF_MONTH': {
        code: '%DAY_OF_MONTH%',
        example: 'Ex. 1-31',
        outputFormat: 'moment',
        output: 'DD',
    },
    'DAY_OF_YEAR': {
        code: '%DAY_OF_YEAR%',
        example: 'Ex. 1-365',
        outputFormat: 'moment',
        output: 'DDDD',
    },
    'YEAR': { 
        code: '%YEAR%',
        example: 'Ex. 2020',
        outputFormat: 'moment',
        output: 'YYYY',
    },
    'YEAR_SHORT': { 
        code: '%YEAR_SHORT%',
        example: 'Ex. 20',
        outputFormat: 'moment',
        output: 'YY',
    },
    'MONTH': { 
        code: '%MONTH%',
        example: 'Ex. JANUARY',
        outputFormat: 'moment',
        output: 'MMMM',
    },
    'MONTH_SHORT': { 
        code: '%MONTH_SHORT%',
        example: 'Ex. JAN',
        outputFormat: 'moment',
        output: 'MMM',
    },
    'MONTH_NUMBER': { 
        code: '%MONTH_NUMBER%',
        example: 'Ex. 1 - 12',
        outputFormat: 'moment',
        output: 'MM',
    },
    'DAY': { 
        code: '%DAY%',
        example: 'Ex. MONDAY',
        outputFormat: 'moment',
        output: 'dddd',
    },
    'DAY_SHORT': { 
        code: '%DAY_SHORT%',
        example: 'Ex. MON',
        outputFormat: 'moment',
        output: 'ddd',
    },
    'DAY_NUMBER': { 
        code: '%DAY_NUMBER%',
        example: 'Ex. 1 - 7',
        outputFormat: 'moment',
        output: 'E',
    },
    'DATE': { 
        code: '%DATE%',
        example: 'Ex. 31-08-1987',
        outputFormat: 'moment',
        output: 'YYYY',
    },
    'TIME': { 
        code: '%DATE%',
        example: 'Ex. 23:59',
        outputFormat: 'moment',
        output: 'mm',
    },
}

const allTagRegex = /%(.*?)%/g;

export function build(content) {
    const placeholders = content.match(allTagRegex)
    templateStrings.objForEach((placeholder, key) => {
        const regex = new RegExp(placeholder.code, 'g')

        if(placeholder.outputFormat === 'moment') {
            const toReplaceWith = moment().format(placeholder.output)
            content = content.replace(regex, toReplaceWith)
        }
    })
    return content
}
