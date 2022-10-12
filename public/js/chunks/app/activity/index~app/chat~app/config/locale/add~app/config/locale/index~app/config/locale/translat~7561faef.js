(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app/activity/index~app/chat~app/config/locale/add~app/config/locale/index~app/config/locale/translat~7561faef"],{

/***/ "./resources/js/mixins/header.js":
/*!***************************************!*\
  !*** ./resources/js/mixins/header.js ***!
  \***************************************/
/*! exports provided: headerButton, headerRouteButton, headerPermittedRouteButton, headerActionButton, headerPermittedActionButton, headerEventButton, headerPermittedEventButton, addButton, editButton, filterButton, configButton, defaultSortOptions, getSortOptions, headerLink, headerRouteLink, headerPermittedRouteLink, headerActionLink, headerPermittedActionLink, headerEventLink, headerPermittedEventLink, importOption, configOption, saveDraftOption, fetchSavedDraftOption, clearSavedDraftOption, printOption, exportPdfOption, exportXlsOption, exportCsvOption, exportExcelCsvOption, getHelpOption, commonKeyBindings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "headerButton", function() { return headerButton; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "headerRouteButton", function() { return headerRouteButton; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "headerPermittedRouteButton", function() { return headerPermittedRouteButton; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "headerActionButton", function() { return headerActionButton; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "headerPermittedActionButton", function() { return headerPermittedActionButton; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "headerEventButton", function() { return headerEventButton; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "headerPermittedEventButton", function() { return headerPermittedEventButton; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addButton", function() { return addButton; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "editButton", function() { return editButton; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "filterButton", function() { return filterButton; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "configButton", function() { return configButton; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultSortOptions", function() { return defaultSortOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSortOptions", function() { return getSortOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "headerLink", function() { return headerLink; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "headerRouteLink", function() { return headerRouteLink; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "headerPermittedRouteLink", function() { return headerPermittedRouteLink; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "headerActionLink", function() { return headerActionLink; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "headerPermittedActionLink", function() { return headerPermittedActionLink; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "headerEventLink", function() { return headerEventLink; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "headerPermittedEventLink", function() { return headerPermittedEventLink; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "importOption", function() { return importOption; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "configOption", function() { return configOption; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "saveDraftOption", function() { return saveDraftOption; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchSavedDraftOption", function() { return fetchSavedDraftOption; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clearSavedDraftOption", function() { return clearSavedDraftOption; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "printOption", function() { return printOption; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "exportPdfOption", function() { return exportPdfOption; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "exportXlsOption", function() { return exportXlsOption; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "exportCsvOption", function() { return exportCsvOption; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "exportExcelCsvOption", function() { return exportExcelCsvOption; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getHelpOption", function() { return getHelpOption; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "commonKeyBindings", function() { return commonKeyBindings; });
/* harmony import */ var _js_vars__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @js/vars */ "./resources/js/vars.js");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


var headerButton = function headerButton(_ref) {
  var label = _ref.label,
      icon = _ref.icon,
      tooltip = _ref.tooltip,
      _ref$design = _ref.design,
      design = _ref$design === void 0 ? {
    color: 'white',
    size: 'md'
  } : _ref$design;
  return {
    label: label,
    icon: icon,
    tooltip: tooltip,
    design: design ? design.color || 'white' : 'white',
    size: design ? design.size || 'md' : 'md'
  };
};
var headerRouteButton = function headerRouteButton(label, icon, route) {
  var tooltip = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
  var design = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : null;
  var params = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : {};
  var query = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : {};
  return _objectSpread(_objectSpread({}, headerButton({
    label: label,
    icon: icon,
    tooltip: tooltip,
    design: design
  })), {}, {
    action: function action(router) {
      router.push({
        name: route,
        params: params,
        query: query
      });
    }
  });
};
var headerPermittedRouteButton = function headerPermittedRouteButton(label, icon, route, permission) {
  var tooltip = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : null;
  var design = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : null;
  var params = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : {};
  var query = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : {};
  return _objectSpread(_objectSpread({}, headerRouteButton(label, icon, route, tooltip, design, params, query)), {}, {
    permissions: [permission]
  });
};
var headerActionButton = function headerActionButton(label, icon, action) {
  var tooltip = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
  var design = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : null;
  return _objectSpread(_objectSpread({}, headerButton({
    label: label,
    icon: icon,
    tooltip: tooltip,
    design: design
  })), {}, {
    action: action
  });
};
var headerPermittedActionButton = function headerPermittedActionButton(label, icon, action, permission) {
  var tooltip = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : null;
  var design = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : null;
  return _objectSpread(_objectSpread({}, headerActionButton(label, icon, action, tooltip, design)), {}, {
    permissions: [permission]
  });
};
var headerEventButton = function headerEventButton(label, icon, eventOpts) {
  var tooltip = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
  var design = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : null;
  return headerActionButton(label, icon, function (router, eventBus) {
    eventBus.$emit(eventOpts.event, eventOpts.options);
  }, tooltip, design);
};
var headerPermittedEventButton = function headerPermittedEventButton(label, icon, eventOpts, permission) {
  var tooltip = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : null;
  var design = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : null;
  return _objectSpread(_objectSpread({}, headerEventButton(label, icon, eventOpts, tooltip, design)), {}, {
    permissions: [permission]
  });
};
var addButton = function addButton(route, permission) {
  return headerPermittedRouteButton($t('general.add_new'), 'fas fa-plus', route, permission);
};
var editButton = function editButton(route, permission) {
  return headerPermittedRouteButton($t('general.edit'), 'fas fa-edit', route, permission);
};
var filterButton = function filterButton() {
  return headerEventButton('', 'fas fa-filter', {
    event: 'TOGGLE_FILTER'
  }, $t('general.filter'));
};
var configButton = function configButton(route, permission) {
  return headerPermittedRouteButton('', 'fas fa-cog', route, permission, $t('general.config'));
};
var defaultSortOptions = {
  storeName: 'common',
  design: 'white'
};
var getSortOptions = function getSortOptions() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var optionsArray = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  return _objectSpread(_objectSpread(_objectSpread({}, defaultSortOptions), options), {}, {
    options: [{
      label: $t('general.default'),
      dispatch: {
        sortBy: ''
      }
    }].concat(_toConsumableArray(optionsArray))
  });
};
var headerLink = function headerLink(_ref2) {
  var label = _ref2.label,
      icon = _ref2.icon;
  return {
    label: label,
    icon: icon
  };
};
var headerRouteLink = function headerRouteLink(label, icon, route) {
  var params = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
  var query = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : {};
  return _objectSpread(_objectSpread({}, headerLink({
    label: label,
    icon: icon
  })), {}, {
    to: {
      name: route,
      params: params,
      query: query
    }
  });
};
var headerPermittedRouteLink = function headerPermittedRouteLink(label, icon, route, permission) {
  var params = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : {};
  var query = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : {};
  return _objectSpread(_objectSpread({}, headerRouteLink(label, icon, route, params, query)), {}, {
    permissions: [permission]
  });
};
var headerActionLink = function headerActionLink(label, icon, action) {
  return _objectSpread(_objectSpread({}, headerLink({
    label: label,
    icon: icon
  })), {}, {
    action: action
  });
};
var headerPermittedActionLink = function headerPermittedActionLink(label, icon, action, permission) {
  return _objectSpread(_objectSpread({}, headerActionLink(label, icon, action)), {}, {
    permissions: [permission]
  });
};
var headerEventLink = function headerEventLink(label, icon, eventOpts) {
  return headerActionLink(label, icon, function (router, eventBus) {
    eventBus.$emit(eventOpts.event, eventOpts.options);
  });
};
var headerPermittedEventLink = function headerPermittedEventLink(label, icon, eventOpts, permission) {
  return _objectSpread(_objectSpread({}, headerEventLink(label, icon, eventOpts)), {}, {
    permissions: [permission]
  });
};
var importOption = function importOption(route, permission) {
  return headerPermittedRouteLink($t('general.import'), 'fas fa-file-import', route, permission);
};
var configOption = function configOption(route, permission) {
  return headerPermittedRouteLink($t('general.config'), 'fas fa-cog', route, permission);
};
var saveDraftOption = function saveDraftOption() {
  return headerEventLink($t('general.save_draft'), 'fas fa-file-upload', {
    event: 'SAVE_DRAFT'
  });
};
var fetchSavedDraftOption = function fetchSavedDraftOption() {
  return headerEventLink($t('general.fetch_saved_draft'), 'fas fa-file-download', {
    event: 'FETCH_SAVED_DRAFT'
  });
};
var clearSavedDraftOption = function clearSavedDraftOption() {
  return headerEventLink($t('general.clear_saved_draft'), 'far fa-minus-square', {
    event: 'CLEAR_SAVED_DRAFT'
  });
};
var printOption = function printOption() {
  return headerEventLink($t('general.print'), 'fas fa-print', {
    event: 'EXPORT',
    options: {
      type: 'print'
    }
  });
};
var exportPdfOption = function exportPdfOption() {
  return headerEventLink($t('general.export_pdf'), 'fas fa-file-pdf', {
    event: 'EXPORT',
    options: {
      type: 'pdf'
    }
  });
};
var exportXlsOption = function exportXlsOption() {
  return headerEventLink($t('general.export_xls'), 'fas fa-file-excel', {
    event: 'EXPORT',
    options: {
      type: 'xls'
    }
  });
};
var exportCsvOption = function exportCsvOption() {
  return headerEventLink($t('general.export_csv'), 'fas fa-file-csv', {
    event: 'EXPORT',
    options: {
      type: 'csv'
    }
  });
};
var exportExcelCsvOption = function exportExcelCsvOption() {
  return headerEventLink($t('general.export_excel_csv'), 'fas fa-file-csv', {
    event: 'EXPORT',
    options: {
      type: 'xls-csv'
    }
  });
};
var getHelpOption = function getHelpOption(topic) {
  return headerEventLink($t('general.help'), 'fas fa-info', {
    event: 'TOGGLE_HELP',
    options: topic
  });
};
var keyBindings = {
  filter: {
    key_f: {
      type: 'event',
      emit: 'TOGGLE_FILTER'
    }
  },
  print: {
    key_p: {
      type: 'event',
      emit: 'EXPORT',
      payload: {
        type: 'print'
      }
    }
  },
  "export": {
    key_e: {
      type: 'event',
      emit: 'EXPORT',
      payload: {
        type: 'pdf'
      }
    }
  }
};
var commonKeyBindings = _objectSpread(_objectSpread(_objectSpread({}, keyBindings.filter), keyBindings.print), keyBindings["export"]);

/***/ })

}]);
//# sourceMappingURL=translat~7561faef.js.map?id=1de9cb22d29afc2cf49c