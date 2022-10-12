(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["vendors~utils/export-csv"],{

/***/ "./node_modules/export-from-json/dist/esm/converters.js":
/*!**************************************************************!*\
  !*** ./node_modules/export-from-json/dist/esm/converters.js ***!
  \**************************************************************/
/*! exports provided: _createFieldsMapper, _prepareData, _createJSONData, _createTableMap, _createTableEntries, createCSVData, _renderTableHTMLText, createXLSData, createXMLData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_createFieldsMapper", function() { return _createFieldsMapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_prepareData", function() { return _prepareData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_createJSONData", function() { return _createJSONData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_createTableMap", function() { return _createTableMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_createTableEntries", function() { return _createTableEntries; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createCSVData", function() { return createCSVData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_renderTableHTMLText", function() { return _renderTableHTMLText; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createXLSData", function() { return createXLSData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createXMLData", function() { return createXMLData; });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./node_modules/export-from-json/dist/esm/utils.js");
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __read = (undefined && undefined.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};

function _createFieldsMapper(fields) {
    if (!fields
        || Object(_utils__WEBPACK_IMPORTED_MODULE_0__["isArray"])(fields) && !fields.length
        || !Object(_utils__WEBPACK_IMPORTED_MODULE_0__["isArray"])(fields) && !Object(_utils__WEBPACK_IMPORTED_MODULE_0__["getKeys"])(fields).length)
        return function (item) { return item; };
    var mapper = Object(_utils__WEBPACK_IMPORTED_MODULE_0__["isArray"])(fields)
        ? fields.reduce(function (map, key) {
            var _a;
            return (__assign(__assign({}, map), (_a = {}, _a[key] = key, _a)));
        }, Object.create(null))
        : fields;
    return function (item) {
        if (Object(_utils__WEBPACK_IMPORTED_MODULE_0__["isArray"])(item)) {
            return item
                .map(function (i) { return Object(_utils__WEBPACK_IMPORTED_MODULE_0__["getEntries"])(i).reduce(function (map, _a) {
                var _b = __read(_a, 2), key = _b[0], value = _b[1];
                if (key in mapper) {
                    map[mapper[key]] = value;
                }
                return map;
            }, Object.create(null)); })
                .filter(function (i) { return Object(_utils__WEBPACK_IMPORTED_MODULE_0__["getKeys"])(i).length; });
        }
        return Object(_utils__WEBPACK_IMPORTED_MODULE_0__["getEntries"])(item).reduce(function (map, _a) {
            var _b = __read(_a, 2), key = _b[0], value = _b[1];
            if (key in mapper) {
                map[mapper[key]] = value;
            }
            return map;
        }, Object.create(null));
    };
}
function _prepareData(data) {
    var MESSAGE_VALID_JSON_FAIL = 'Invalid export data. Please provide a valid JSON';
    try {
        return (typeof data === 'string' ? JSON.parse(data) : data);
    }
    catch (_a) {
        throw new Error(MESSAGE_VALID_JSON_FAIL);
    }
}
function _createJSONData(data, replacer, space) {
    if (replacer === void 0) { replacer = null; }
    var MESSAGE_VALID_JSON_FAIL = 'Invalid export data. Please provide valid JSON object';
    try {
        return JSON.stringify(data, replacer, space);
    }
    catch (_a) {
        throw new Error(MESSAGE_VALID_JSON_FAIL);
    }
}
function _createTableMap(data) {
    return data.map(_utils__WEBPACK_IMPORTED_MODULE_0__["getEntries"]).reduce(function (tMap, rowKVs, rowIndex) {
        return rowKVs.reduce(function (map, _a) {
            var _b = __read(_a, 2), key = _b[0], value = _b[1];
            var columnValues = map[key] || Array.from({ length: data.length }).map(function (_) { return ''; });
            columnValues[rowIndex] =
                (typeof value !== 'string' ? JSON.stringify(value) : value) || '';
            map[key] = columnValues;
            return map;
        }, tMap);
    }, Object.create(null));
}
function _createTableEntries(tableMap, beforeTableEncode) {
    if (beforeTableEncode === void 0) { beforeTableEncode = function (i) { return i; }; }
    return beforeTableEncode(Object(_utils__WEBPACK_IMPORTED_MODULE_0__["getEntries"])(tableMap).map(function (_a) {
        var _b = __read(_a, 2), fieldName = _b[0], fieldValues = _b[1];
        return ({
            fieldName: fieldName,
            fieldValues: fieldValues,
        });
    }));
}
function createCSVData(data, delimiter, beforeTableEncode) {
    if (delimiter === void 0) { delimiter = ','; }
    if (beforeTableEncode === void 0) { beforeTableEncode = function (i) { return i; }; }
    if (!data.length)
        return '';
    var tableMap = _createTableMap(data);
    var tableEntries = _createTableEntries(tableMap, beforeTableEncode);
    var head = tableEntries.map(function (_a) {
        var fieldName = _a.fieldName;
        return fieldName;
    })
        .join(delimiter) + '\r\n';
    var columns = tableEntries.map(function (_a) {
        var fieldValues = _a.fieldValues;
        return fieldValues;
    })
        .map(function (column) { return column.map(function (value) { return "\"" + value.replace(/\"/g, '""') + "\""; }); });
    var rows = columns.reduce(function (mergedColumn, column) { return mergedColumn.map(function (value, rowIndex) { return "" + value + delimiter + column[rowIndex]; }); });
    return head + rows.join('\r\n');
}
function _renderTableHTMLText(data, beforeTableEncode) {
    Object(_utils__WEBPACK_IMPORTED_MODULE_0__["assert"])(data.length > 0);
    var tableMap = _createTableMap(data);
    var tableEntries = _createTableEntries(tableMap, beforeTableEncode);
    var head = tableEntries.map(function (_a) {
        var fieldName = _a.fieldName;
        return fieldName;
    })
        .join('</b></th><th><b>');
    var columns = tableEntries.map(function (_a) {
        var fieldValues = _a.fieldValues;
        return fieldValues;
    })
        .map(function (column) { return column.map(function (value) { return "<td>" + value + "</td>"; }); });
    var rows = columns.reduce(function (mergedColumn, column) { return mergedColumn
        .map(function (value, rowIndex) { return "" + value + column[rowIndex]; }); });
    return "\n    <table>\n      <thead>\n        <tr><th><b>" + head + "</b></th></tr>\n      </thead>\n      <tbody>\n        <tr>" + rows.join("</tr>\n        <tr>") + "</tr>\n      </tbody>\n    </table>\n  ";
}
function createXLSData(data, beforeTableEncode) {
    if (beforeTableEncode === void 0) { beforeTableEncode = function (i) { return i; }; }
    if (!data.length)
        return '';
    var content = "<html>\n  <head>\n    <meta charset=\"UTF-8\" />\n  </head >\n  <body>\n    " + _renderTableHTMLText(data, beforeTableEncode) + "\n  </body>\n</html >\n";
    return content;
}
function createXMLData(data) {
    var content = "<?xml version=\"1.0\" encoding=\"utf-8\"?><!DOCTYPE base>\n" + _renderXML(data, 'base') + "\n";
    return content;
}
function _renderXML(data, tagName, arrayElementTag, spaces) {
    if (arrayElementTag === void 0) { arrayElementTag = 'element'; }
    if (spaces === void 0) { spaces = 0; }
    var tag = Object(_utils__WEBPACK_IMPORTED_MODULE_0__["normalizeXMLName"])(tagName);
    var indentSpaces = Object(_utils__WEBPACK_IMPORTED_MODULE_0__["indent"])(spaces);
    if (data === null || data === undefined) {
        return indentSpaces + "<" + tag + " />";
    }
    var content = Object(_utils__WEBPACK_IMPORTED_MODULE_0__["isArray"])(data)
        ? data.map(function (item) { return _renderXML(item, arrayElementTag, arrayElementTag, spaces + 2); }).join('\n')
        : typeof data === 'object'
            ? Object(_utils__WEBPACK_IMPORTED_MODULE_0__["getEntries"])(data)
                .map(function (_a) {
                var _b = __read(_a, 2), key = _b[0], value = _b[1];
                return _renderXML(value, key, arrayElementTag, spaces + 2);
            }).join('\n')
            : indentSpaces + '  ' + Object(_utils__WEBPACK_IMPORTED_MODULE_0__["stripHTML"])(String(data));
    var contentWithWrapper = indentSpaces + "<" + tag + ">\n" + content + "\n" + indentSpaces + "</" + tag + ">";
    return contentWithWrapper;
}


/***/ }),

/***/ "./node_modules/export-from-json/dist/esm/exportFromJSON.js":
/*!******************************************************************!*\
  !*** ./node_modules/export-from-json/dist/esm/exportFromJSON.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./node_modules/export-from-json/dist/esm/utils.js");
/* harmony import */ var _processors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./processors */ "./node_modules/export-from-json/dist/esm/processors.js");
/* harmony import */ var _converters__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./converters */ "./node_modules/export-from-json/dist/esm/converters.js");



function exportFromJSON(_a) {
    var data = _a.data, _b = _a.fileName, fileName = _b === void 0 ? 'download' : _b, extension = _a.extension, _c = _a.fileNameFormatter, fileNameFormatter = _c === void 0 ? function (name) { return name.replace(/\s+/, '_'); } : _c, fields = _a.fields, _d = _a.exportType, exportType = _d === void 0 ? 'txt' : _d, _e = _a.replacer, replacer = _e === void 0 ? null : _e, _f = _a.space, space = _f === void 0 ? 4 : _f, _g = _a.processor, processor = _g === void 0 ? _processors__WEBPACK_IMPORTED_MODULE_1__["downloadFile"] : _g, _h = _a.withBOM, withBOM = _h === void 0 ? false : _h, _j = _a.delimiter, delimiter = _j === void 0 ? ',' : _j, _k = _a.beforeTableEncode, beforeTableEncode = _k === void 0 ? function (i) { return i; } : _k;
    var MESSAGE_IS_ARRAY_FAIL = 'Invalid export data. Please provide an array of object';
    var MESSAGE_UNKNOWN_EXPORT_TYPE = "Can't export unknown data type " + exportType + ".";
    var MESSAGE_FIELD_INVALID = "Can't export string data to " + exportType + ".";
    if (typeof data === 'string') {
        switch (exportType) {
            case 'txt':
            case 'css':
            case 'html': {
                return processor(data, exportType, Object(_utils__WEBPACK_IMPORTED_MODULE_0__["normalizeFileName"])(fileName, extension !== null && extension !== void 0 ? extension : exportType, fileNameFormatter));
            }
            default:
                throw new Error(MESSAGE_FIELD_INVALID);
        }
    }
    var fieldsMapper = Object(_converters__WEBPACK_IMPORTED_MODULE_2__["_createFieldsMapper"])(fields);
    var safeData = fieldsMapper(Object(_converters__WEBPACK_IMPORTED_MODULE_2__["_prepareData"])(data));
    var JSONData = Object(_converters__WEBPACK_IMPORTED_MODULE_2__["_createJSONData"])(safeData, replacer, space);
    switch (exportType) {
        case 'txt':
        case 'css':
        case 'html': {
            return processor(JSONData, exportType, Object(_utils__WEBPACK_IMPORTED_MODULE_0__["normalizeFileName"])(fileName, extension !== null && extension !== void 0 ? extension : exportType, fileNameFormatter));
        }
        case 'json': {
            return processor(JSONData, exportType, Object(_utils__WEBPACK_IMPORTED_MODULE_0__["normalizeFileName"])(fileName, extension !== null && extension !== void 0 ? extension : 'json', fileNameFormatter));
        }
        case 'csv': {
            Object(_utils__WEBPACK_IMPORTED_MODULE_0__["assert"])(Object(_utils__WEBPACK_IMPORTED_MODULE_0__["isArray"])(safeData), MESSAGE_IS_ARRAY_FAIL);
            var BOM = '\ufeff';
            var CSVData = Object(_converters__WEBPACK_IMPORTED_MODULE_2__["createCSVData"])(safeData, delimiter, beforeTableEncode);
            var content = withBOM ? BOM + CSVData : CSVData;
            return processor(content, exportType, Object(_utils__WEBPACK_IMPORTED_MODULE_0__["normalizeFileName"])(fileName, extension !== null && extension !== void 0 ? extension : 'csv', fileNameFormatter));
        }
        case 'xls': {
            Object(_utils__WEBPACK_IMPORTED_MODULE_0__["assert"])(Object(_utils__WEBPACK_IMPORTED_MODULE_0__["isArray"])(safeData), MESSAGE_IS_ARRAY_FAIL);
            var content = Object(_converters__WEBPACK_IMPORTED_MODULE_2__["createXLSData"])(safeData, beforeTableEncode);
            return processor(content, exportType, Object(_utils__WEBPACK_IMPORTED_MODULE_0__["normalizeFileName"])(fileName, extension !== null && extension !== void 0 ? extension : 'xls', fileNameFormatter));
        }
        case 'xml': {
            var content = Object(_converters__WEBPACK_IMPORTED_MODULE_2__["createXMLData"])(safeData);
            return processor(content, exportType, Object(_utils__WEBPACK_IMPORTED_MODULE_0__["normalizeFileName"])(fileName, extension !== null && extension !== void 0 ? extension : 'xml', fileNameFormatter));
        }
        default:
            throw new Error(MESSAGE_UNKNOWN_EXPORT_TYPE);
    }
}
(function (exportFromJSON) {
    exportFromJSON.types = {
        txt: 'txt',
        css: 'css',
        html: 'html',
        json: 'json',
        csv: 'csv',
        xls: 'xls',
        xml: 'xml',
    };
    exportFromJSON.processors = { downloadFile: _processors__WEBPACK_IMPORTED_MODULE_1__["downloadFile"] };
})(exportFromJSON || (exportFromJSON = {}));
/* harmony default export */ __webpack_exports__["default"] = (exportFromJSON);


/***/ }),

/***/ "./node_modules/export-from-json/dist/esm/index.js":
/*!*********************************************************!*\
  !*** ./node_modules/export-from-json/dist/esm/index.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _exportFromJSON__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./exportFromJSON */ "./node_modules/export-from-json/dist/esm/exportFromJSON.js");

/* harmony default export */ __webpack_exports__["default"] = (_exportFromJSON__WEBPACK_IMPORTED_MODULE_0__["default"]);


/***/ }),

/***/ "./node_modules/export-from-json/dist/esm/processors.js":
/*!**************************************************************!*\
  !*** ./node_modules/export-from-json/dist/esm/processors.js ***!
  \**************************************************************/
/*! exports provided: generateDataURI, downloadFile */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateDataURI", function() { return generateDataURI; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "downloadFile", function() { return downloadFile; });
function generateDataURI(content, type, byBlob) {
    switch (type) {
        case 'txt': {
            var blobType = 'text/plain;charset=utf-8';
            if (byBlob)
                return URL.createObjectURL(new Blob([content], { type: blobType }));
            return "data:," + blobType + encodeURIComponent(content);
        }
        case 'css': {
            var blobType = 'text/css;charset=utf-8';
            if (byBlob)
                return URL.createObjectURL(new Blob([content], { type: blobType }));
            return "data:," + blobType + encodeURIComponent(content);
        }
        case 'html': {
            var blobType = 'text/html;charset=utf-8';
            if (byBlob)
                return URL.createObjectURL(new Blob([content], { type: blobType }));
            return "data:," + blobType + encodeURIComponent(content);
        }
        case 'json': {
            var blobType = 'text/json;charset=utf-8';
            if (byBlob)
                return URL.createObjectURL(new Blob([content], { type: blobType }));
            return "data:," + blobType + encodeURIComponent(content);
        }
        case 'csv': {
            var blobType = 'text/csv;charset=utf-8';
            if (byBlob)
                return URL.createObjectURL(new Blob([content], { type: blobType }));
            return "data:," + blobType + encodeURIComponent(content);
        }
        case 'xls': {
            var blobType = 'text/application/vnd.ms-excel;charset=utf-8';
            if (byBlob)
                return URL.createObjectURL(new Blob([content], { type: blobType }));
            return "data:," + blobType + encodeURIComponent(content);
        }
        case 'xml': {
            var blobType = 'text/application/xml;charset=utf-8';
            if (byBlob)
                return URL.createObjectURL(new Blob([content], { type: blobType }));
            return "data:," + blobType + encodeURIComponent(content);
        }
        default: {
            return '';
        }
    }
}
function downloadFile(content, type, fileName, byBlob) {
    if (fileName === void 0) { fileName = 'download'; }
    if (byBlob === void 0) { byBlob = true; }
    var dataURI = generateDataURI(content, type, byBlob);
    var anchor = document.createElement('a');
    anchor.href = dataURI;
    anchor.download = fileName;
    anchor.setAttribute('style', 'visibility:hidden');
    document.body.appendChild(anchor);
    anchor.dispatchEvent(new MouseEvent('click', {
        bubbles: false,
        cancelable: false,
        view: window,
    }));
    document.body.removeChild(anchor);
}


/***/ }),

/***/ "./node_modules/export-from-json/dist/esm/utils.js":
/*!*********************************************************!*\
  !*** ./node_modules/export-from-json/dist/esm/utils.js ***!
  \*********************************************************/
/*! exports provided: isArray, assert, getValues, getKeys, getEntries, normalizeFileName, normalizeXMLName, indent, stripHTML */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isArray", function() { return isArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "assert", function() { return assert; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getValues", function() { return getValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getKeys", function() { return getKeys; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getEntries", function() { return getEntries; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "normalizeFileName", function() { return normalizeFileName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "normalizeXMLName", function() { return normalizeXMLName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "indent", function() { return indent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stripHTML", function() { return stripHTML; });
function isArray(data) {
    return Object.prototype.toString.call(data) === '[object Array]';
}
function assert(condition, msg) {
    if (!condition)
        throw new Error(msg);
}
function getValues(data) {
    return Object.keys(data).map(function (key) { return data[key]; });
}
function getKeys(data) {
    return Object.keys(data);
}
function getEntries(data) {
    return Object.keys(data).map(function (key) { return [key, data[key]]; });
}
function normalizeFileName(fileName, extension, fileNameFormatter) {
    var suffix = '.' + extension;
    var extensionPattern = new RegExp("(\\" + extension + ")?$");
    return fileNameFormatter(fileName).replace(extensionPattern, suffix);
}
function normalizeXMLName(name) {
    '555xmlHello .  world!'.trim().replace(/^([0-9,;]|(xml))+/, '');
    return name.replace(/[^_a-zA-Z 0-9:\-\.]/g, '').replace(/^([ 0-9-:\-\.]|(xml))+/i, '').replace(/ +/g, '-');
}
function indent(spaces) {
    return Array(spaces + 1).join(' ');
}
function stripHTML(text) {
    return text.replace(/([<>&])/g, function (_, $1) {
        switch ($1) {
            case '<': return '&lt;';
            case '>': return '&gt;';
            case '&': return '&amp;';
            default: return '';
        }
    });
}


/***/ })

}]);
//# sourceMappingURL=export-csv.js.map?id=945a3b2ccd8eec82f4a6