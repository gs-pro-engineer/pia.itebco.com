(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app/ui-config/navbar/index~app/ui-config/navigation/index~app/ui-config/notification/index~app/ui-co~3fa1e52a"],{

/***/ "./resources/js/mixins/ui-config-form.js":
/*!***********************************************!*\
  !*** ./resources/js/mixins/ui-config-form.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _api_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @api/config */ "./resources/js/api/config.js");
/* harmony import */ var vue2_transitions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue2-transitions */ "./node_modules/vue2-transitions/dist/vue2-transitions.m.js");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _js_store_modules_sources_initial_ui_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @js/store/modules/sources/initial-ui-config */ "./resources/js/store/modules/sources/initial-ui-config.js");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    CollapseTransition: vue2_transitions__WEBPACK_IMPORTED_MODULE_2__["CollapseTransition"]
  },
  data: function data() {
    return {
      formData: _objectSpread(_objectSpread({}, _js_store_modules_sources_initial_ui_config__WEBPACK_IMPORTED_MODULE_4__["default"]), {}, {
        type: 'ui'
      }),
      actions: {
        'leftSidebarStyle': {
          'push-content': {
            leftSidebarBackdrop: false,
            leftSidebarShadow: false,
            leftSidebarShow: true
          },
          'push': {
            leftSidebarShow: true
          },
          'over': {
            leftSidebarBackdrop: true,
            leftSidebarShadow: true,
            leftSidebarShow: true
          },
          'folded': {
            leftSidebarBackdrop: true,
            leftSidebarShow: false
          },
          'off-canvas': {
            leftSidebarShow: true
          }
        },
        topNavbarHide: {
          "true": {
            leftSidebarHeight: 'full'
          }
        },
        leftSidebarHeight: {
          'normal': {
            topNavbarHide: false
          }
        },
        pageHeaderIsBoxed: {
          "true": {
            pageHeaderBackgroundColor: 'primary',
            colorScheme: 'custom'
          }
        },
        pageHeaderBackgroundColor: {
          'transparent': {
            pageHeaderIsBoxed: false
          },
          'any': {
            colorScheme: 'custom'
          }
        },
        pageBackgroundColor: {
          'any': {
            colorScheme: 'custom'
          }
        },
        pageContainerBackgroundColor: {
          'any': {
            colorScheme: 'custom'
          }
        },
        leftSidebarColor: {
          'any': {
            colorScheme: 'custom'
          }
        },
        rightSidebarColor: {
          'any': {
            colorScheme: 'custom'
          }
        },
        modalSidebarColor: {
          'any': {
            colorScheme: 'custom'
          }
        },
        specialSidebarColor: {
          'any': {
            colorScheme: 'custom'
          }
        },
        topNavbarColor: {
          'any': {
            colorScheme: 'custom'
          }
        },
        colorScheme: {
          'default': {
            pageBackgroundColor: 'light',
            pageContainerBackgroundColor: 'white',
            pageHeaderBackgroundColor: 'transparent',
            leftSidebarColor: 'dark-primary',
            leftSidebarLogoLight: true,
            rightSidebarColor: 'white',
            modalSidebarColor: 'white',
            specialSidebarColor: 'secondary',
            topNavbarColor: 'black',
            topNavbarLogoLight: true
          },
          'white': {
            pageBackgroundColor: 'white',
            pageContainerBackgroundColor: 'white',
            pageHeaderBackgroundColor: 'transparent',
            leftSidebarColor: 'white',
            leftSidebarLogoLight: false,
            rightSidebarColor: 'white',
            modalSidebarColor: 'white',
            specialSidebarColor: 'white',
            topNavbarColor: 'white',
            topNavbarLogoLight: false
          },
          'light': {
            pageBackgroundColor: 'light',
            pageContainerBackgroundColor: 'white',
            pageHeaderBackgroundColor: 'transparent',
            leftSidebarColor: 'white',
            leftSidebarLogoLight: false,
            rightSidebarColor: 'white',
            modalSidebarColor: 'white',
            specialSidebarColor: 'light',
            topNavbarColor: 'white',
            topNavbarLogoLight: false
          },
          'dark': {
            pageBackgroundColor: 'black',
            pageContainerBackgroundColor: 'gray-darkest',
            pageHeaderBackgroundColor: 'transparent',
            leftSidebarColor: 'gray-darkest',
            leftSidebarLogoLight: true,
            rightSidebarColor: 'gray-darkest',
            modalSidebarColor: 'black',
            specialSidebarColor: 'black',
            topNavbarColor: 'gray-darkest',
            topNavbarLogoLight: true
          },
          'semi-dark': {
            pageBackgroundColor: 'gray-darkest',
            pageContainerBackgroundColor: 'gray-darker',
            pageHeaderBackgroundColor: 'transparent',
            leftSidebarColor: 'dark-primary',
            leftSidebarLogoLight: true,
            rightSidebarColor: 'gray-darker',
            modalSidebarColor: 'gray-darker',
            specialSidebarColor: 'primary',
            topNavbarColor: 'black',
            topNavbarLogoLight: true
          },
          'casual': {
            pageBackgroundColor: 'light',
            pageContainerBackgroundColor: 'white',
            pageHeaderBackgroundColor: 'transparent',
            leftSidebarColor: 'primary',
            leftSidebarLogoLight: true,
            rightSidebarColor: 'white',
            modalSidebarColor: 'white',
            specialSidebarColor: 'success',
            topNavbarColor: 'dark-primary',
            topNavbarLogoLight: true
          },
          'business': {
            pageBackgroundColor: 'light',
            pageContainerBackgroundColor: 'white',
            pageHeaderBackgroundColor: 'transparent',
            leftSidebarColor: 'gray-darkest',
            leftSidebarLogoLight: true,
            rightSidebarColor: 'white',
            modalSidebarColor: 'white',
            specialSidebarColor: 'white',
            topNavbarColor: 'white',
            topNavbarLogoLight: false
          }
        }
      },
      formErrors: {},
      preRequisite: {},
      colors: [{
        key: 'primary',
        title: 'Primary'
      }, {
        key: 'dark-primary',
        title: 'Dark Primary'
      }, {
        key: 'secondary',
        title: 'Secondary'
      }, {
        key: 'success',
        title: 'Success'
      }, {
        key: 'info',
        title: 'Info'
      }, {
        key: 'warning',
        title: 'Warning'
      }, {
        key: 'danger',
        title: 'Danger'
      }, {
        key: 'white',
        title: 'White'
      }, {
        key: 'light',
        title: 'Light'
      }, {
        key: 'dark',
        title: 'Dark'
      }, {
        key: 'gray-darker',
        title: 'Darker'
      }, {
        key: 'gray-darkest',
        title: 'Darkest'
      }, {
        key: 'black',
        title: 'Black'
      }],
      colorSchemes: [{
        key: 'default',
        title: 'Default'
      }, {
        key: 'white',
        title: 'White'
      }, {
        key: 'light',
        title: 'Light'
      }, {
        key: 'dark',
        title: 'Dark'
      }, {
        key: 'semi-dark',
        title: 'Semi Dark'
      }, {
        key: 'casual',
        title: 'Casual'
      }, {
        key: 'business',
        title: 'Business'
      }],
      initialFormData: null,
      emptyFormData: null,
      readyForAction: false,
      isLoading: true,
      getInitialDataCalled: false
    };
  },
  computed: _objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_3__["mapGetters"])('config', ['vars', 'uiConfigs'])), {}, {
    computedFormData: function computedFormData() {
      return _.cloneDeep(this.formData);
    }
  }),
  watch: {
    computedFormData: {
      deep: true,
      handler: _.debounce(function (v, o) {
        var _this = this;

        if (this.readyForAction) {
          v = this.processActions(v, o);
          this.formData.objForEach(function (value, key) {
            _this.formData[key] = v[key];
          });
          this.SetUiConfig(v);
        }

        if (typeof this.afterSettingConfig === "function") {
          this.$nextTick(function () {
            _this.afterSettingConfig();
          });
        }

        this.readyForAction = true;
      }, 500)
    }
  },
  methods: _objectSpread(_objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_3__["mapActions"])('config', ['GetConfig'])), Object(vuex__WEBPACK_IMPORTED_MODULE_3__["mapActions"])('config', ['SetUiConfig'])), {}, {
    processActions: function processActions(val, oldVal) {
      this.actions.objForEach(function (actions, configKey) {
        if (val[configKey] !== oldVal[configKey]) {
          var toSet = actions[val[configKey]];

          if (toSet) {
            toSet.objForEach(function (value, key) {
              val[key] = value;
            });
          }

          var toSetOnAny = actions['any'];

          if (toSetOnAny) {
            toSetOnAny.objForEach(function (value, key) {
              val[key] = value;
            });
          }
        }
      });
      return val;
    },
    findActualValue: function findActualValue(value, options) {
      var key = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'uuid';
      return options.find(function (option) {
        return option[key] === value;
      }) || null;
    },
    submit: function submit() {
      var _this2 = this;

      if (formUtil.isUnchanged(this.initialFormData, this.formData)) {
        this.$toasted.info(this.$t('general.nothing_changed'), this.$toastConfig.info);
        return false;
      }

      this.isLoading = true;
      _api_config__WEBPACK_IMPORTED_MODULE_1__["update"](this.formData).then(function (response) {
        _this2.GetConfig().then(function () {
          _this2.isLoading = false;

          if (_this2.getInitialDataCalled) {
            _this2.getInitialData();
          }

          _this2.$toasted.success(response.message, _this2.$toastConfig.success);

          _this2.initialFormData = Object.assign({}, _this2.formData);
        })["catch"](function (error) {
          _this2.isLoading = false;
          formUtil.handleErrors(error);
        });
      })["catch"](function (error) {
        _this2.isLoading = false;
        _this2.formErrors = formUtil.handleErrors(error);
      });
    },
    reset: function reset() {
      var _this3 = this;

      formUtil.confirmAction().then(function (result) {
        if (result.value) {
          _this3.formData = Object.assign({}, _this3.formData, _.cloneDeep(_this3.initialFormData));
        }
      });
    },
    unsavedCheck: function unsavedCheck(next) {
      var _this4 = this;

      formUtil.unsavedCheckAlert(this.initialFormData, this.formData, function (agreed) {
        if (agreed) {
          _this4.SetUiConfig(_this4.initialFormData);

          next();
        } else if (agreed !== false) {
          next();
        }
      });
    },
    fillPreRequisite: function fillPreRequisite(response) {
      var _this5 = this;

      this.preRequisite.objForEach(function (value, key) {
        _this5.preRequisite[key] = response.hasOwnProperty(key) ? response[key] : value;
      });
      this.isLoading = false;
    },
    fillFormData: function fillFormData() {
      this.isLoading = true;

      if (this.uiConfigs) {
        this.formData = formUtil.assignValues(this.formData, this.uiConfigs);
      }

      this.isLoading = false;
    },
    getInitialData: function getInitialData(callbackFn) {
      var _this6 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _this6.isLoading = true;
                _this6.getInitialDataCalled = true;
                _context.prev = 2;
                _context.next = 5;
                return _api_config__WEBPACK_IMPORTED_MODULE_1__["getPreRequisite"](Object.keys(_this6.preRequisite).join(','));

              case 5:
                response = _context.sent;

                _this6.fillPreRequisite(response);

                if (callbackFn) {
                  _this6.$nextTick(function () {
                    callbackFn();
                  });
                }

                return _context.abrupt("return", response);

              case 11:
                _context.prev = 11;
                _context.t0 = _context["catch"](2);
                _this6.isLoading = false;
                _this6.formErrors = formUtil.handleErrors(_context.t0);
                throw _context.t0;

              case 16:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[2, 11]]);
      }))();
    }
  }),
  mounted: function mounted() {
    this.fillFormData();
    this.initialFormData = _.cloneDeep(this.formData);
  },
  beforeDestroy: function beforeDestroy() {
    delete this.formData;
    delete this.formErrors;
    delete this.preRequisite;
  },
  beforeRouteLeave: function beforeRouteLeave(to, from, next) {
    this.unsavedCheck(next);
  }
});

/***/ })

}]);
//# sourceMappingURL=ui-co~3fa1e52a.js.map?id=b9e9b1c5f23f456613ec