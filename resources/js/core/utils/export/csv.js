import exportFromJSON from 'export-from-json'

export async function downloadFile(data, exportType, fileName = 'download') {
    exportFromJSON({ data, fileName, exportType })
}