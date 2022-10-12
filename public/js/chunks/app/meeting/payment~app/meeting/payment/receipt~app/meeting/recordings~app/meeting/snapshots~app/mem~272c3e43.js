(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app/meeting/payment~app/meeting/payment/receipt~app/meeting/recordings~app/meeting/snapshots~app/mem~272c3e43"],{

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

/***/ }),

/***/ "./resources/js/mixins/view.js":
/*!*************************************!*\
  !*** ./resources/js/mixins/view.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header */ "./resources/js/mixins/header.js");
/* harmony import */ var _js_helpers_transformers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @js/helpers/transformers */ "./resources/js/helpers/transformers.js");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _js_event_bus__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @js/event-bus */ "./resources/js/event-bus.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_5__);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }



function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






/* harmony default export */ __webpack_exports__["default"] = ({
  components: {},
  data: function data() {
    return {
      uuid: null,
      subUuid: null,
      entity: null,
      preRequisite: {},
      formData: {},
      formErrors: {},
      editing: false,
      isLoading: false,
      initialFormData: null,
      getInitialDataCalled: false,
      autoExport: null,
      initUrl: '',
      fallBackRoute: 'appDashboard',
      headerButtons: null,
      headerLinks: null,
      uploaderConfig: {
        module: '',
        token: '',
        allowedExtensions: '',
        allowedMaxFileSize: null,
        maxNoOfFiles: 5,
        uuid: uuid()
      }
    };
  },
  watch: {
    $route: function $route(val, oldVal) {
      if (oldVal.params.uuid !== val.params.uuid) {
        this.isLoading = true;
        this.uuid = val.params.uuid;

        if (this.getInitialDataCalled) {
          this.getInitialData();
        }
      }
    }
  },
  computed: _objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_3__["mapGetters"])('config', ['vars', 'configs', 'allowExtraInput'])), Object(vuex__WEBPACK_IMPORTED_MODULE_3__["mapGetters"])('user', ['hasPermission'])),
  methods: _objectSpread(_objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_3__["mapActions"])('common', ['Init', 'InitSub', 'Get', 'GetList', 'Destroy', 'SetMeta', 'SetFilters', 'Custom', 'GetPreRequisite', 'ResetFilters', 'Update', 'SetPageHeader'])), Object(vuex__WEBPACK_IMPORTED_MODULE_3__["mapActions"])('config', ['SetUiConfig', 'SetConfig'])), {}, {
    fillPreRequisite: function fillPreRequisite(response) {
      var _this = this;

      this.preRequisite.objForEach(function (value, key) {
        _this.preRequisite[key] = response.hasOwnProperty(key) ? response[key] : value;
      });
    },
    setEntityData: function setEntityData(response) {
      if (this.entityKey && response.hasOwnProperty(this.entityKey)) {
        this.entity = response[this.entityKey];
      } else {
        this.entity = response;
      }
    },
    setUploaderConfig: function setUploaderConfig(uploadConfig) {
      var _this2 = this;

      this.uploaderConfig.objForEach(function (value, key) {
        _this2.uploaderConfig[key] = uploadConfig.hasOwnProperty(key) ? uploadConfig[key] : value;
      });
    },
    getPreRequisite: function getPreRequisite(callbackFn) {
      var _this3 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _this3.isLoading = true;
                _context.prev = 1;
                _context.next = 4;
                return _this3.GetPreRequisite();

              case 4:
                response = _context.sent;

                _this3.fillPreRequisite(response);

                if (lodash__WEBPACK_IMPORTED_MODULE_5___default.a.isObject(response) && response.hasOwnProperty('uploadConfig')) {
                  _this3.setUploaderConfig(response.uploadConfig);
                }

                if (typeof _this3.afterGetPreRequisite === "function") {
                  _this3.afterGetPreRequisite();
                }

                if (callbackFn) {
                  _this3.$nextTick(function () {
                    callbackFn();
                  });
                }

                _this3.isLoading = false;
                return _context.abrupt("return", response);

              case 13:
                _context.prev = 13;
                _context.t0 = _context["catch"](1);
                _this3.isLoading = false;
                formUtil.handleErrors(_context.t0);

              case 17:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[1, 13]]);
      }))();
    },
    getInitialData: function getInitialData(callbackFn) {
      var _this4 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
        var response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _this4.isLoading = true;
                _this4.getInitialDataCalled = true;
                _context2.prev = 2;
                _context2.next = 5;
                return _this4.Get({
                  uuid: _this4.uuid
                });

              case 5:
                response = _context2.sent;

                _this4.setEntityData(response);

                if (_this4.pageTitleProperty) {
                  _this4.pageTitle = _this4.entity[_this4.pageTitleProperty] + ' - ' + _this4.$t(_this4.$route.meta.title);
                }

                if (_this4.subTitleProperty) {
                  _this4.subTitle = _this4.entity[_this4.subTitleProperty];
                }

                if (_this4.afterGetInitialData && typeof _this4.afterGetInitialData === "function") {
                  _this4.afterGetInitialData(response);
                }

                if (callbackFn) {
                  _this4.$nextTick(function () {
                    callbackFn(response);
                  });
                }

                if (_this4.autoExport) {
                  setTimeout(function () {
                    _this4.$nextTick(function () {
                      if (!_this4.formData || !_this4.formData.hasOwnProperty('loaded') || _this4.formData.loaded) {
                        _this4["export"]();
                      }
                    });
                  }, 2000);
                }

                _this4.isLoading = false;
                return _context2.abrupt("return", response);

              case 16:
                _context2.prev = 16;
                _context2.t0 = _context2["catch"](2);
                _this4.isLoading = false;
                formUtil.handleErrors(_context2.t0);

                _this4.$router.push({
                  name: _this4.fallBackRoute
                });

              case 21:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, null, [[2, 16]]);
      }))();
    },
    getHeaderOptions: function getHeaderOptions() {
      var buttons = [];

      if (this.routesRequired && this.routesRequired.add) {
        if (_typeof(this.permissionsRequired) === 'object' && this.permissionsRequired !== null && this.permissionsRequired.add) {
          buttons.push(_header__WEBPACK_IMPORTED_MODULE_1__["addButton"](this.routesRequired.add, this.permissionsRequired.add));
        } else if (this.permissionsRequired) {
          buttons.push(_header__WEBPACK_IMPORTED_MODULE_1__["addButton"](this.routesRequired.add, this.permissionsRequired));
        } else {
          buttons.push(_header__WEBPACK_IMPORTED_MODULE_1__["addButton"](this.routesRequired.add));
        }
      }

      if (this.routesRequired && this.routesRequired.edit) {
        if (_typeof(this.permissionsRequired) === 'object' && this.permissionsRequired !== null && this.permissionsRequired.edit) {
          buttons.push(_header__WEBPACK_IMPORTED_MODULE_1__["editButton"](this.routesRequired.edit, this.permissionsRequired.edit));
        } else if (this.permissionsRequired) {
          buttons.push(_header__WEBPACK_IMPORTED_MODULE_1__["editButton"](this.routesRequired.edit, this.permissionsRequired));
        } else {
          buttons.push(_header__WEBPACK_IMPORTED_MODULE_1__["editButton"](this.routesRequired.edit));
        }
      }

      if (this.routesRequired && this.routesRequired.config) {
        if (_typeof(this.permissionsRequired) === 'object' && this.permissionsRequired !== null && this.permissionsRequired.config) {
          buttons.push(_header__WEBPACK_IMPORTED_MODULE_1__["configButton"](this.routesRequired.config, this.permissionsRequired.config));
        } else if (this.permissionsRequired) {
          buttons.push(_header__WEBPACK_IMPORTED_MODULE_1__["configButton"](this.routesRequired.config, this.permissionsRequired));
        } else {
          buttons.push(_header__WEBPACK_IMPORTED_MODULE_1__["configButton"](this.routesRequired.config));
        }
      }

      if (this.headerButtons) {
        buttons = buttons.concat(this.headerButtons);
      }

      var links = [];
      links.push(_header__WEBPACK_IMPORTED_MODULE_1__["printOption"]());
      links.push(_header__WEBPACK_IMPORTED_MODULE_1__["exportPdfOption"]());

      if (this.headerLinks) {
        links = links.concat(this.headerLinks);
      }

      return {
        hideLinks: this.hideHeaderLinks || false,
        buttons: buttons,
        links: links,
        title: this.pageTitle || '',
        subTitle: this.pageTitle ? this.subTitle || '' : ''
      };
    },
    getKeyBindingOptions: function getKeyBindingOptions() {
      var opts = _objectSpread({}, _header__WEBPACK_IMPORTED_MODULE_1__["commonKeyBindings"]);

      if (this.routesRequired && this.routesRequired.add) {
        opts['key_a'] = this.routesRequired.add;
      }

      if (this.routesRequired && this.routesRequired.edit) {
        opts['key_e'] = this.routesRequired.edit;
      }

      return opts;
    },
    applyPageHeader: function applyPageHeader() {
      var pageHeaderOptions = Object.assign({}, this.getHeaderOptions(), this.header || {});
      var keyBindings = Object.assign({}, this.getKeyBindingOptions(), this.keyBindings || {});
      this.SetPageHeader(pageHeaderOptions);
      this.SetConfig({
        keyBindings: keyBindings
      });
      this.updatePageTitle();
    },
    updatePageTitle: function updatePageTitle() {
      if (!this.pageTitle || this.pageTitle.length < 1) {
        return;
      }

      var appName = window.kmenv.name;
      appName = this.configs && this.configs.basic && this.configs.basic.appName ? this.configs.basic.appName : appName;
      document.title = this.pageTitle + ' - ' + appName;
    },
    "export": function _export(options) {
      var _this5 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3() {
        var printTitle, printPreview;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _this5.isLoading = true;

                try {
                  printTitle = "Printing ".concat(_this5.dataTitle || '');

                  if (_this5.printTitle) {
                    printTitle = _this5.printTitle;
                  }

                  printPreview = _this5.configs.system.printPreview;

                  _this5.$printComponent('printable', {
                    title: printTitle,
                    autoPrint: !printPreview,
                    autoCloseAfterPrint: !printPreview
                  });
                } catch (e) {}

                _this5.isLoading = false;

              case 3:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }))();
    },
    doInit: function doInit() {
      this.Init({
        url: this.initUrl
      });

      if (this.initSubUrl) {
        this.InitSub({
          url: (this.subUuid ? this.subUuid + '/' : '') + this.initSubUrl
        });
      }

      this.getInitialData(this.applyPageHeader);
    },
    getBalanceClass: function getBalanceClass(balance) {
      var classText = balance > 0 ? 'text-success' : 'text-danger';
      classText = balance && Number(balance) != 0 ? classText : '';
      classText = classText + ' font-weight-600';
      return classText;
    },
    momentFn: function momentFn(date, inFormat, outFormat) {
      return moment(date, inFormat || this.vars.serverDateFormat).format(outFormat || this.vars.defaultDateFormat);
    }
  }),
  mounted: function mounted() {
    _js_event_bus__WEBPACK_IMPORTED_MODULE_4__["default"].$off('EXPORT', this["export"]);
    _js_event_bus__WEBPACK_IMPORTED_MODULE_4__["default"].$on('EXPORT', this["export"]);

    if (this.$route.params.uuid) {
      this.uuid = this.$route.params.uuid;
    }

    if (this.$route.params.subUuid) {
      this.subUuid = this.$route.params.subUuid;
    }

    if (this.configs.system && this.configs.system.allowedFileExtensions) {
      this.uploaderConfig.allowedExtensions = this.configs.system.allowedFileExtensions;
    }

    if (this.configs.system && this.configs.system.postMaxSize) {
      this.uploaderConfig.allowedMaxFileSize = this.configs.system.postMaxSize;
    }

    if (this.$route.query && this.$route.query.hasOwnProperty('print')) {
      this.autoExport = true;
    }

    this.doInit();
  },
  destroyed: function destroyed() {
    _js_event_bus__WEBPACK_IMPORTED_MODULE_4__["default"].$off('EXPORT', this["export"]);
  },
  beforeRouteEnter: function beforeRouteEnter(to, from, next) {
    if (!to.params.uuid) {
      next({
        name: from
      });
    } else {
      next();
    }
  }
});

/***/ })

}]);
//# sourceMappingURL=mem~272c3e43.js.map?id=ae7d76ce9c6a0fd31bbe