import jsPDF from 'jspdf'
import 'jspdf-autotable'
import NotoSansRegular from '@resources/fonts/NotoSans-Regular-normal.js'
import NotoSansBold from '@resources/fonts/NotoSans-Bold-bold.js'

const jsPdfOpts = {
    orientation: 'p',
    unit: 'mm',
    format: 'a4',
    putOnlyUsedFonts: true,
}

export async function downloadPdfFile(fileName = 'download', title, columns, body, opts = {}) {
    const doc = createTableContent(title, columns, body, opts)
    doc.save(fileName)
}

export async function printTable(title, columns, body, opts = {}) {
    const doc = createTableContent(title, columns, body, opts)
    doc.autoPrint()
    doc.output('dataurlnewwindow')
}

export function createTableContent(title, columns, body, opts = {}) {
    let doc = new jsPDF({ ...jsPdfOpts, ...opts })

    doc.addFileToVFS('NotoSans-Regular-normal.ttf', NotoSansRegular)
    doc.addFileToVFS('NotoSans-Bold-bold.ttf', NotoSansBold)
    doc.addFont('NotoSans-Regular-normal.ttf', 'NotoSans-Regular', 'normal')
    doc.addFont('NotoSans-Bold-bold.ttf', 'NotoSans-Bold', 'bold')

    const calcXOffset = (text) => {
        return (doc.internal.pageSize.width / 2) - (doc.getStringUnitWidth(text) * doc.internal.getFontSize() / 2)
    }
    const centerOffsetX = doc.internal.pageSize.width / 2

    doc.setFont('NotoSans-Bold', 'bold')
    doc.setFontSize(18)
    doc.text(title, centerOffsetX, 22, { align: 'center' })
    doc.setFontSize(11)
    doc.setTextColor(100)

    doc.autoTable({
        columns,
        body,
        // theme: 'grid',
        tableLineColor: [222, 226, 233],
        tableLineWidth: 0.4,
        headStyles: {
            font: 'NotoSans-Bold',
            fillColor: [255, 255, 255],
            textColor: [73, 80, 96],
            lineColor: [222, 226, 233],
            lineWidth: 0.4,
            // halign: 'center',
            // fontSize: 15,
        },
        alternateRowStyles: {
            fillColor: [242, 242, 242],
        },
        styles: { 
            font: 'NotoSans-Regular',
            cellWidth: 'wrap' ,
        },
        columnStyles: {
            // email: {
            //     fontStyle: 'bold',
            // },
            // city: {
            //     font: 'mitubachi',
            // },
            // id: {
            //     halign: 'right',
            // },
        },
        startY: 30,
        didParseCell: data => {
            // if(data.row.section === 'body' && data.column.dataKey === 'expenses') {
                
            // }
            // if (data.section === 'body' && data.column.index === 0) {
            //     var base64Img = 'data:image/jpegbase64,iVBORw0KGgoAAAANS...'
            //     doc.addImage(base64Img, 'JPEG', data.cell.x + 2, data.cell.y + 2, 10, 10)
            // }
        },
    })

    return doc
}