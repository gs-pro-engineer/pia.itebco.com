(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["helpers/transformers"],{

/***/ "./resources/js/helpers/transformers.js":
/*!**********************************************!*\
  !*** ./resources/js/helpers/transformers.js ***!
  \**********************************************/
/*! exports provided: arrayOfObjects, uppercase, capitalize, lowercase, objectWithName, contact, contactWithAlias, contactWithAssociation, user, employee, employeeWithAlias, getRegion, percent, date, datetime, truncateString, limitWords, badgeStatus, badgeStatusYesNo, badgeStatusLabel, badgeStatusCompleted, currency, getCurrencyDescription */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "arrayOfObjects", function() { return arrayOfObjects; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "uppercase", function() { return uppercase; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "capitalize", function() { return capitalize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lowercase", function() { return lowercase; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "objectWithName", function() { return objectWithName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "contact", function() { return contact; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "contactWithAlias", function() { return contactWithAlias; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "contactWithAssociation", function() { return contactWithAssociation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "user", function() { return user; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "employee", function() { return employee; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "employeeWithAlias", function() { return employeeWithAlias; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRegion", function() { return getRegion; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "percent", function() { return percent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "date", function() { return date; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "datetime", function() { return datetime; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "truncateString", function() { return truncateString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "limitWords", function() { return limitWords; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "badgeStatus", function() { return badgeStatus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "badgeStatusYesNo", function() { return badgeStatusYesNo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "badgeStatusLabel", function() { return badgeStatusLabel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "badgeStatusCompleted", function() { return badgeStatusCompleted; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "currency", function() { return currency; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCurrencyDescription", function() { return getCurrencyDescription; });
/* harmony import */ var _js_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @js/store */ "./resources/js/store/index.js");
/* harmony import */ var _core_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @core/utils */ "./resources/js/core/utils/index.js");


var vars = _js_store__WEBPACK_IMPORTED_MODULE_0__["default"].getters['config/vars'];
function arrayOfObjects(value, opts) {
  var toReturn = '';

  if (value && value.length && opts) {
    value.forEach(function (detail) {
      if (toReturn) {
        toReturn += ', ';
      }

      toReturn += "".concat(detail[opts.firstAttr][opts.firstAttr2], " (").concat(_core_utils__WEBPACK_IMPORTED_MODULE_1__["formatCurrency"].to(detail[opts.secondAttr], vars.defaultCurrency, true, false, true, false), ")");
    });
  }

  return toReturn;
}
function uppercase(val) {
  return val.toUpperCase();
}
function capitalize(val) {
  return val.capitalize();
}
function lowercase(val) {
  return val.toLowerCase();
}
function objectWithName(_ref) {
  var name = _ref.name;
  return name;
}
function contact(_ref2) {
  var name = _ref2.name;
  return name;
}
function contactWithAlias(_ref3) {
  var name = _ref3.name,
      alias = _ref3.alias;
  return "".concat(name, " (").concat(alias, ")");
}
function contactWithAssociation(_ref4) {
  var name = _ref4.name,
      designation = _ref4.designation;
  return "".concat(name, " (").concat(designation, ")");
}
function user(user) {
  return user.profile ? user.profile.name || user.username : user.username;
}
function employee(_ref5) {
  var name = _ref5.name;
  return name;
}
function employeeWithAlias(_ref6) {
  var name = _ref6.name,
      alias = _ref6.alias;
  return "".concat(name, " (").concat(alias, ")");
}
function getRegion(value) {
  var item = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var region = item ? item.city : '';
  region = region ? item.zipcode ? "".concat(region, " - ").concat(item.zipcode) : region : '';
  region = item.state ? region ? "".concat(region, ", ").concat(item.state) : item.state : region;
  region = item.country ? region ? "".concat(region, ", ").concat(item.country.name) : item.country.name : region;
  return region;
}
function percent(content) {
  return "".concat(content, " %");
}
function date(content) {
  return moment(content, vars.serverDateFormat).format(vars.defaultDateFormat);
}
function datetime(content) {
  return moment(content, vars.serverDateTimeFormat).format(vars.defaultDateTimeFormat);
}
function truncateString(content, opts) {
  var max = opts.max || 30;
  var suffix = content.length > max ? opts.suffix || '...' : '';
  return content.slice(0, max) + suffix;
}
function limitWords(content, opts) {
  var contentArr = content.split(' ');
  var max = opts.max || 3;
  var suffix = contentArr.length > max ? opts.suffix || '...' : '';
  return contentArr.slice(0, max).join(' ') + suffix;
}
function badgeStatus(status) {
  return status ? 'true' : 'false';
}
function badgeStatusYesNo(status) {
  return status ? $t('general.yes') : $t('general.no');
}
function badgeStatusLabel(status, opts) {
  return status ? $t('general.yes') : $t('general.no');
}
function badgeStatusCompleted(status) {
  return status ? $t('utility.todo.completed') : $t('utility.todo.incomplete');
}
function currency(value, opts) {
  var currency = opts && opts.currency ? opts.currency : vars.defaultCurrency;
  return _core_utils__WEBPACK_IMPORTED_MODULE_1__["formatCurrency"].to(value, currency, true);
}
function getCurrencyDescription(value) {
  var item = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  return "".concat(item.currency.name, " - ").concat(item.currency.description, " (").concat(item.currency.symbol, ")");
}

/***/ })

}]);
//# sourceMappingURL=transformers.js.map?id=1357b673cc9e39194a8b