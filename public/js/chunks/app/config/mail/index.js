(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app/config/mail/index"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/app/config/mail/index.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/app/config/mail/index.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _mixins_config_form__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @mixins/config-form */ "./resources/js/mixins/config-form.js");
/* harmony import */ var vue2_transitions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue2-transitions */ "./node_modules/vue2-transitions/dist/vue2-transitions.m.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
  "extends": _mixins_config_form__WEBPACK_IMPORTED_MODULE_0__["default"],
  components: {
    CollapseTransition: vue2_transitions__WEBPACK_IMPORTED_MODULE_1__["CollapseTransition"]
  },
  data: function data() {
    return {
      formData: {
        driver: '',
        fromName: '',
        fromAddress: '',
        smtpHost: '',
        smtpPort: '',
        smtpUsername: '',
        smtpPassword: '',
        smtpEncryption: '',
        mailgunDomain: '',
        mailgunSecret: '',
        mailgunEndpoint: '',
        type: 'mail'
      },
      preRequisite: {
        mailDrivers: [],
        mailEncryptions: []
      }
    };
  },
  computed: {
    selectedDriver: {
      get: function get() {
        return this.findActualValue(this.formData.driver, this.preRequisite.mailDrivers);
      },
      set: function set(v) {
        this.formData.driver = v.name;
      }
    },
    selectedMailgunEncryption: {
      get: function get() {
        return this.findActualValue(this.formData.mailgunEncryption, this.preRequisite.mailEncryptions);
      },
      set: function set(v) {
        this.formData.mailgunEncryption = v.name;
      }
    },
    selectedSmtpEncryption: {
      get: function get() {
        return this.findActualValue(this.formData.smtpEncryption, this.preRequisite.mailEncryptions);
      },
      set: function set(v) {
        this.formData.smtpEncryption = v.name;
      }
    }
  },
  mounted: function mounted() {
    this.getInitialData();
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/app/config/mail/index.vue?vue&type=template&id=9efef1ec&":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/app/config/mail/index.vue?vue&type=template&id=9efef1ec& ***!
  \*******************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "base-container",
    {
      attrs: {
        boxed: "",
        "with-loader": "",
        "is-loading": _vm.isLoading,
        "loader-color": _vm.vars.loaderColor
      }
    },
    [
      _c(
        "form",
        {
          on: {
            submit: function($event) {
              $event.preventDefault()
              return _vm.submit.apply(null, arguments)
            }
          }
        },
        [
          _c("div", { staticClass: "row" }, [
            _c(
              "div",
              { staticClass: "col-12 col-md-4 mb-4" },
              [
                _c("base-select", {
                  attrs: {
                    options: _vm.preRequisite.mailDrivers,
                    label: _vm.$t("config.mail.driver"),
                    "allow-empty": false,
                    simple: "",
                    disabled: _vm.isLoading,
                    required: ""
                  },
                  model: {
                    value: _vm.formData.driver,
                    callback: function($$v) {
                      _vm.$set(_vm.formData, "driver", $$v)
                    },
                    expression: "formData.driver"
                  }
                })
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "col-12 col-md-4 mb-4" },
              [
                _c("base-input", {
                  attrs: {
                    label: _vm.$t("config.mail.from_name"),
                    type: "text",
                    error: _vm.formErrors.fromName
                  },
                  on: {
                    "update:error": function($event) {
                      return _vm.$set(_vm.formErrors, "fromName", $event)
                    }
                  },
                  model: {
                    value: _vm.formData.fromName,
                    callback: function($$v) {
                      _vm.$set(_vm.formData, "fromName", $$v)
                    },
                    expression: "formData.fromName"
                  }
                })
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "col-12 col-md-4 mb-4" },
              [
                _c("base-input", {
                  attrs: {
                    label: _vm.$t("config.mail.from_address"),
                    type: "text",
                    error: _vm.formErrors.fromAddress
                  },
                  on: {
                    "update:error": function($event) {
                      return _vm.$set(_vm.formErrors, "fromAddress", $event)
                    }
                  },
                  model: {
                    value: _vm.formData.fromAddress,
                    callback: function($$v) {
                      _vm.$set(_vm.formData, "fromAddress", $$v)
                    },
                    expression: "formData.fromAddress"
                  }
                })
              ],
              1
            )
          ]),
          _vm._v(" "),
          _c("collapse-transition", [
            _vm.formData.driver === "mailgun"
              ? _c("div", { staticClass: "row mt-5" }, [
                  _c(
                    "div",
                    { staticClass: "col-12 col-md-6 mb-4" },
                    [
                      _c("base-input", {
                        attrs: {
                          label: _vm.$t("config.mail.mailgun_domain"),
                          type: "text",
                          error: _vm.formErrors.mailgunDomain
                        },
                        on: {
                          "update:error": function($event) {
                            return _vm.$set(
                              _vm.formErrors,
                              "mailgunDomain",
                              $event
                            )
                          }
                        },
                        model: {
                          value: _vm.formData.mailgunDomain,
                          callback: function($$v) {
                            _vm.$set(_vm.formData, "mailgunDomain", $$v)
                          },
                          expression: "formData.mailgunDomain"
                        }
                      })
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "col-12 col-md-6 mb-4" },
                    [
                      _c("base-input", {
                        attrs: {
                          label: _vm.$t("config.mail.mailgun_secret"),
                          type: "text",
                          error: _vm.formErrors.mailgunSecret
                        },
                        on: {
                          "update:error": function($event) {
                            return _vm.$set(
                              _vm.formErrors,
                              "mailgunSecret",
                              $event
                            )
                          }
                        },
                        model: {
                          value: _vm.formData.mailgunSecret,
                          callback: function($$v) {
                            _vm.$set(_vm.formData, "mailgunSecret", $$v)
                          },
                          expression: "formData.mailgunSecret"
                        }
                      })
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "col-12 col-md-6 mb-4" },
                    [
                      _c("base-input", {
                        attrs: {
                          label: _vm.$t("config.mail.mailgun_endpoint"),
                          type: "text",
                          error: _vm.formErrors.mailgunEndpoint
                        },
                        on: {
                          "update:error": function($event) {
                            return _vm.$set(
                              _vm.formErrors,
                              "mailgunEndpoint",
                              $event
                            )
                          }
                        },
                        model: {
                          value: _vm.formData.mailgunEndpoint,
                          callback: function($$v) {
                            _vm.$set(_vm.formData, "mailgunEndpoint", $$v)
                          },
                          expression: "formData.mailgunEndpoint"
                        }
                      })
                    ],
                    1
                  )
                ])
              : _vm._e(),
            _vm._v(" "),
            _vm.formData.driver === "smtp"
              ? _c("div", { staticClass: "row mt-5" }, [
                  _c(
                    "div",
                    { staticClass: "col-12 col-md-4 mb-4" },
                    [
                      _c("base-input", {
                        attrs: {
                          label: _vm.$t("config.mail.smtp_host"),
                          type: "text",
                          error: _vm.formErrors.smtpHost
                        },
                        on: {
                          "update:error": function($event) {
                            return _vm.$set(_vm.formErrors, "smtpHost", $event)
                          }
                        },
                        model: {
                          value: _vm.formData.smtpHost,
                          callback: function($$v) {
                            _vm.$set(_vm.formData, "smtpHost", $$v)
                          },
                          expression: "formData.smtpHost"
                        }
                      })
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "col-12 col-md-4 mb-4" },
                    [
                      _c("base-input", {
                        attrs: {
                          label: _vm.$t("config.mail.smtp_port"),
                          type: "text",
                          error: _vm.formErrors.smtpPort
                        },
                        on: {
                          "update:error": function($event) {
                            return _vm.$set(_vm.formErrors, "smtpPort", $event)
                          }
                        },
                        model: {
                          value: _vm.formData.smtpPort,
                          callback: function($$v) {
                            _vm.$set(_vm.formData, "smtpPort", $$v)
                          },
                          expression: "formData.smtpPort"
                        }
                      })
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "col-12 col-md-4 mb-4" },
                    [
                      _c("base-select", {
                        attrs: {
                          options: _vm.preRequisite.mailEncryptions,
                          label: _vm.$t("config.mail.smtp_encryption"),
                          "allow-empty": false,
                          simple: "",
                          disabled: _vm.isLoading,
                          required: ""
                        },
                        model: {
                          value: _vm.formData.smtpEncryption,
                          callback: function($$v) {
                            _vm.$set(_vm.formData, "smtpEncryption", $$v)
                          },
                          expression: "formData.smtpEncryption"
                        }
                      })
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "col-12 col-md-6 mb-4" },
                    [
                      _c("base-input", {
                        attrs: {
                          label: _vm.$t("config.mail.smtp_username"),
                          type: "text",
                          error: _vm.formErrors.smtpUsername
                        },
                        on: {
                          "update:error": function($event) {
                            return _vm.$set(
                              _vm.formErrors,
                              "smtpUsername",
                              $event
                            )
                          }
                        },
                        model: {
                          value: _vm.formData.smtpUsername,
                          callback: function($$v) {
                            _vm.$set(_vm.formData, "smtpUsername", $$v)
                          },
                          expression: "formData.smtpUsername"
                        }
                      })
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "col-12 col-md-6 mb-4" },
                    [
                      _c("base-input", {
                        attrs: {
                          label: _vm.$t("config.mail.smtp_password"),
                          type: "text",
                          error: _vm.formErrors.smtpPassword
                        },
                        on: {
                          "update:error": function($event) {
                            return _vm.$set(
                              _vm.formErrors,
                              "smtpPassword",
                              $event
                            )
                          }
                        },
                        model: {
                          value: _vm.formData.smtpPassword,
                          callback: function($$v) {
                            _vm.$set(_vm.formData, "smtpPassword", $$v)
                          },
                          expression: "formData.smtpPassword"
                        }
                      })
                    ],
                    1
                  )
                ])
              : _vm._e()
          ]),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "text-right mt-5" },
            [
              _c(
                "base-button",
                {
                  attrs: { type: "button", design: "light" },
                  on: { click: _vm.reset }
                },
                [_vm._v(_vm._s(_vm.$t("general.reset")))]
              ),
              _vm._v(" "),
              _c(
                "base-button",
                { attrs: { type: "submit", design: "primary" } },
                [_vm._v(_vm._s(_vm.$t("general.save")))]
              )
            ],
            1
          )
        ],
        1
      )
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/mixins/config-form.js":
/*!********************************************!*\
  !*** ./resources/js/mixins/config-form.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _api_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @api/config */ "./resources/js/api/config.js");
/* harmony import */ var _js_core_utils_formatter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @js/core/utils/formatter */ "./resources/js/core/utils/formatter.js");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




/* harmony default export */ __webpack_exports__["default"] = ({
  components: {},
  data: function data() {
    return {
      formData: {},
      formErrors: {},
      initialFormData: null,
      initianLength: 0,
      emptyFormData: null,
      entity: null,
      preRequisite: {},
      isLoading: true,
      useUserPreference: false,
      dataType: null,
      configType: ''
    };
  },
  computed: _objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_1__["mapGetters"])('config', {
    configsWithPreference: 'configs',
    configs: 'configsOriginal',
    vars: 'vars',
    allowExtraInput: 'allowExtraInput'
  })), {}, {
    formHasErrors: function formHasErrors() {
      var ans = false;
      this.formErrors.objForEach(function (er) {
        ans = er !== '' ? true : ans;
      });
      return ans;
    }
  }),
  methods: _objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_1__["mapActions"])('config', ['GetConfig'])), Object(vuex__WEBPACK_IMPORTED_MODULE_1__["mapActions"])('user', ['GetUser'])), Object(vuex__WEBPACK_IMPORTED_MODULE_1__["mapActions"])('navigation', ['Generate'])), Object(vuex__WEBPACK_IMPORTED_MODULE_1__["mapActions"])('common', ['Custom'])), {}, {
    findActualValue: function findActualValue(value, options) {
      var key = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'uuid';
      return options.find(function (option) {
        return option[key] === value;
      }) || null;
    },
    submit: function submit() {
      var _this = this;

      var preference = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

      if (formUtil.isUnchanged(this.initialFormData, this.formData)) {
        this.$toasted.info(this.$t('general.nothing_changed'), this.$toastConfig.info);
        return false;
      }

      this.isLoading = true;

      if (this.formData.hasOwnProperty('type')) {
        this.formData.type = this.formData.type.snakeCase();
      }

      var storeFn = preference === true || this.useUserPreference ? _api_config__WEBPACK_IMPORTED_MODULE_2__["updateUserPref"] : this.configType === 'module' ? _api_config__WEBPACK_IMPORTED_MODULE_2__["updateModule"] : _api_config__WEBPACK_IMPORTED_MODULE_2__["update"];

      if (this.beforeSubmit && typeof this.beforeSubmit === "function") {
        var shouldProceed = this.beforeSubmit();

        if (shouldProceed === false) {
          this.isLoading = false;
          return;
        }
      }

      storeFn(this.formData).then(function (response) {
        var fnToCall = preference === true || _this.useUserPreference ? _this.GetUser : _this.GetConfig;
        fnToCall().then(function () {
          _this.$toasted.success(response.message, _this.$toastConfig);

          _this.initialFormData = _.cloneDeep(_this.formData);
          _this.isLoading = false;
        })["catch"](function (error) {
          _this.isLoading = false;
          _this.formErrors = formUtil.handleErrors(error);
        });

        if (typeof _this.afterSubmit === "function") {
          _this.afterSubmit();
        }

        if (typeof _this.afterSubmitSuccess === "function") {
          _this.afterSubmitSuccess();
        }
      })["catch"](function (error) {
        _this.isLoading = false;
        _this.formErrors = formUtil.handleErrors(error);

        if (typeof _this.afterSubmit === "function") {
          _this.afterSubmit();
        }

        if (typeof _this.afterSubmitError === "function") {
          _this.afterSubmitError();
        }
      });
    },
    reset: function reset() {
      var _this2 = this;

      formUtil.confirmAction().then(function (result) {
        if (result.value) {
          _this2.formData = Object.assign({}, _this2.formData, _.cloneDeep(_this2.initialFormData));
        }
      });
    },
    unsavedCheck: function unsavedCheck(next) {
      formUtil.unsavedCheckAlert(this.initialFormData, this.formData, next);
    },
    fillPreRequisite: function fillPreRequisite(response) {
      var _this3 = this;

      this.preRequisite.objForEach(function (value, key) {
        _this3.preRequisite[key] = response.hasOwnProperty(key) ? response[key] : value;
      });
      this.isLoading = false;
    },
    fillFormData: function fillFormData() {
      var _this4 = this;

      this.isLoading = true;
      var configsToUse = this.useUserPreference ? this.configsWithPreference : this.configs;

      if (this.formData.type && configsToUse[this.formData.type]) {
        this.formData = formUtil.assignValues(this.formData, configsToUse[this.formData.type]);
      }

      if (this.formData.types && Array.isArray(this.formData.types)) {
        this.formData.types.forEach(function (value) {
          _this4.formData = formUtil.assignValues(_this4.formData, configsToUse[value]);
        });
      }

      if (this.formData.override) {
        this.formData.objForEach(function (value, key) {
          if (value && _.isObject(value)) {
            _this4.formData[key] = formUtil.assignValues(_this4.formData[key], configsToUse[key]);
          } else {
            _this4.formData[key] = configsToUse[key] ? configsToUse[key] : value;
          }
        });
      }

      if (typeof this.addNewRow === "function" && typeof this.addNewRowIfNone === "function") {
        this.addNewRowIfNone();
      }

      this.isLoading = false;
    },
    getInitialData: function getInitialData(callbackFn) {
      var _this5 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _this5.isLoading = true;
                _context.prev = 1;
                _context.next = 4;
                return _api_config__WEBPACK_IMPORTED_MODULE_2__["getPreRequisite"](Object.keys(_this5.preRequisite).join(','));

              case 4:
                response = _context.sent;

                _this5.fillPreRequisite(response);

                if (callbackFn) {
                  _this5.$nextTick(function () {
                    callbackFn();
                  });
                }

                return _context.abrupt("return", response);

              case 10:
                _context.prev = 10;
                _context.t0 = _context["catch"](1);
                _this5.isLoading = false;
                _this5.formErrors = formUtil.handleErrors(_context.t0);
                throw _context.t0;

              case 15:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[1, 10]]);
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

/***/ }),

/***/ "./resources/js/views/app/config/mail/index.vue":
/*!******************************************************!*\
  !*** ./resources/js/views/app/config/mail/index.vue ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_vue_vue_type_template_id_9efef1ec___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=9efef1ec& */ "./resources/js/views/app/config/mail/index.vue?vue&type=template&id=9efef1ec&");
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ "./resources/js/views/app/config/mail/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_9efef1ec___WEBPACK_IMPORTED_MODULE_0__["render"],
  _index_vue_vue_type_template_id_9efef1ec___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/app/config/mail/index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/app/config/mail/index.vue?vue&type=script&lang=js&":
/*!*******************************************************************************!*\
  !*** ./resources/js/views/app/config/mail/index.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/app/config/mail/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/app/config/mail/index.vue?vue&type=template&id=9efef1ec&":
/*!*************************************************************************************!*\
  !*** ./resources/js/views/app/config/mail/index.vue?vue&type=template&id=9efef1ec& ***!
  \*************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_9efef1ec___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=9efef1ec& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/app/config/mail/index.vue?vue&type=template&id=9efef1ec&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_9efef1ec___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_9efef1ec___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=index.js.map?id=dfd860478986db88fb97