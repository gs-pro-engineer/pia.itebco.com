import camelcaseKeys from 'camelcase-keys'
import snakecaseKeys from 'snakecase-keys'

export function formatKeysToCamelCase(obj = {}) {
    return camelcaseKeys(obj, { deep: true })
}

export function formatKeysToSnakeCase(obj = {}) {
    return snakecaseKeys(obj, { deep: true })
}

export function bytesToFileSize(bytes) {
    var sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
    if (bytes == 0) return '0 Byte';
    var i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)));
    return Math.round(bytes / Math.pow(1024, i), 2) + ' ' + sizes[i];
}
