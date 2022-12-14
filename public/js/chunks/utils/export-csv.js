(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["utils/export-csv"],{

/***/ "./resources/js/core/utils/export/csv.js":
/*!***********************************************!*\
  !*** ./resources/js/core/utils/export/csv.js ***!
  \***********************************************/
/*! exports provided: downloadFile */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "downloadFile", function() { return downloadFile; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var export_from_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! export-from-json */ "./node_modules/export-from-json/dist/esm/index.js");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }


function downloadFile(_x, _x2) {
  return _downloadFile.apply(this, arguments);
}

function _downloadFile() {
  _downloadFile = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(data, exportType) {
    var fileName,
        _args = arguments;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            fileName = _args.length > 2 && _args[2] !== undefined ? _args[2] : 'download';
            Object(export_from_json__WEBPACK_IMPORTED_MODULE_1__["default"])({
              data: data,
              fileName: fileName,
              exportType: exportType
            });

          case 2:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _downloadFile.apply(this, arguments);
}

/***/ })

}]);
//# sourceMappingURL=export-csv.js.map?id=3246350edb92dca30a5d