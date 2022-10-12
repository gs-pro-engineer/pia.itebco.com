(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["auth/login-sms-otp"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/auth/login-sms-otp.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/auth/login-sms-otp.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _mixins_auth_form__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @mixins/auth-form */ "./resources/js/mixins/auth-form.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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
  "extends": _mixins_auth_form__WEBPACK_IMPORTED_MODULE_0__["default"],
  data: function data() {
    return {
      formData: {
        mobile: '',
        otp: ''
      },
      otpRequested: false
    };
  },
  methods: {
    submit: function submit() {
      var _this = this;

      this.isLoading = true;
      var routeQuery = this.$route.query;
      var formData = this.otpRequested ? _objectSpread({}, this.formData) : {
        mobile: this.formData.mobile
      };
      this.LoginUsingOtp(formData).then(function (response) {
        _this.$toasted.success(response.message, _this.$toastConfig);

        if (_this.otpRequested) {
          _this.$gaEvent('activity', 'loggedin', 'SMSOTP');

          var routeTo = response.reload ? {
            name: 'appDashboard',
            query: {
              reload: 1
            }
          } : {
            name: 'appDashboard'
          };

          if (routeQuery && routeQuery.ref && _this.$router.resolve(routeQuery.ref)) {
            routeTo = _this.$router.resolve(routeQuery.ref).route;
          }

          if (_this.hasRole('admin') && _this.configs.system && _this.configs.system.setupWizard) {
            routeTo = {
              name: 'setup'
            };
          }

          _this.ResetTwoFactorSet().then(function () {
            _this.$router.push(routeTo);
          })["catch"](function (error) {
            _this.isLoading = false;
            _this.formErrors = formUtil.handleErrors(error);
          });
        } else {
          _this.$gaEvent('activity', 'loginOtpRequested', 'SMSOTP');

          _this.otpRequested = true;
          _this.isLoading = false;
        }
      })["catch"](function (error) {
        _this.isLoading = false;
        _this.formErrors = formUtil.handleErrors(error);
      });
    }
  },
  mounted: function mounted() {
    this.SetCSRF();
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/auth/login-sms-otp.vue?vue&type=template&id=28bd276b&scoped=true&":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/auth/login-sms-otp.vue?vue&type=template&id=28bd276b&scoped=true& ***!
  \****************************************************************************************************************************************************************************************************************************/
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
    "div",
    { staticClass: "guest-page" },
    [
      _c(
        "box",
        [
          _c("animated-loader", {
            attrs: {
              "is-loading": _vm.isLoading,
              "loader-color": _vm.vars.loaderColor
            }
          }),
          _vm._v(" "),
          _c("guest-header", [
            _c("h5", [_vm._v(_vm._s(_vm.$t("auth.login.login_using_sms_otp")))])
          ]),
          _vm._v(" "),
          _c("section", { attrs: { role: "main" } }, [
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
                _c("base-input", {
                  staticClass: "mb-3",
                  attrs: {
                    "auto-focus": !_vm.otpRequested,
                    label: _vm.$t("auth.login.props.mobile"),
                    type: "text",
                    "addon-left-icon": "fas fa-mobile",
                    error: _vm.formErrors.mobile,
                    disabled: _vm.otpRequested
                  },
                  on: {
                    "update:error": function($event) {
                      return _vm.$set(_vm.formErrors, "mobile", $event)
                    }
                  },
                  model: {
                    value: _vm.formData.mobile,
                    callback: function($$v) {
                      _vm.$set(_vm.formData, "mobile", $$v)
                    },
                    expression: "formData.mobile"
                  }
                }),
                _vm._v(" "),
                _vm.otpRequested
                  ? _c("base-input", {
                      staticClass: "mb-3",
                      attrs: {
                        "auto-focus": _vm.otpRequested,
                        label: _vm.$t("auth.login.props.otp"),
                        type: "text",
                        "addon-left-icon": "fas fa-key",
                        error: _vm.formErrors.otp
                      },
                      on: {
                        "update:error": function($event) {
                          return _vm.$set(_vm.formErrors, "otp", $event)
                        }
                      },
                      model: {
                        value: _vm.formData.otp,
                        callback: function($$v) {
                          _vm.$set(_vm.formData, "otp", $$v)
                        },
                        expression: "formData.otp"
                      }
                    })
                  : _vm._e(),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "text-center" },
                  [
                    _c(
                      "base-button",
                      {
                        staticClass: "my-4 text-lg",
                        attrs: { type: "submit", design: "primary", block: "" }
                      },
                      [
                        !_vm.otpRequested
                          ? _c("span", [
                              _vm._v(_vm._s(_vm.$t("auth.login.request_otp")))
                            ])
                          : _c("span", [
                              _vm._v(_vm._s(_vm.$t("auth.login.login")))
                            ])
                      ]
                    )
                  ],
                  1
                ),
                _vm._v(" "),
                _c("div", { staticClass: "form-group m-b-0" }, [
                  _c("div", { staticClass: "col-sm-12 text-center" }, [
                    _c(
                      "p",
                      [
                        _c(
                          "router-link",
                          {
                            staticClass: "text-primary m-l-5",
                            attrs: { to: _vm.withQuery({ name: "login" }) }
                          },
                          [
                            _c("span", { staticClass: "font-weight-bold" }, [
                              _vm._v(
                                _vm._s(
                                  _vm.$t("auth.login.login_using_password")
                                )
                              )
                            ])
                          ]
                        )
                      ],
                      1
                    )
                  ])
                ])
              ],
              1
            )
          ])
        ],
        1
      ),
      _vm._v(" "),
      _vm.configs.system
        ? _c("guest-footer", {
            attrs: {
              "footer-credit": _vm.configs.system.footerCredit,
              version: _vm.configs.system.version
            }
          })
        : _vm._e()
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/mixins/auth-form.js":
/*!******************************************!*\
  !*** ./resources/js/mixins/auth-form.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _js_views_auth_partials_box__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @js/views/auth/partials/box */ "./resources/js/views/auth/partials/box/index.vue");
/* harmony import */ var _views_layouts_partials_guest_header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @views/layouts/partials/guest-header */ "./resources/js/views/layouts/partials/guest-header.vue");
/* harmony import */ var _views_layouts_partials_guest_footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @views/layouts/partials/guest-footer */ "./resources/js/views/layouts/partials/guest-footer.vue");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    Box: _js_views_auth_partials_box__WEBPACK_IMPORTED_MODULE_1__["default"],
    GuestHeader: _views_layouts_partials_guest_header__WEBPACK_IMPORTED_MODULE_2__["default"],
    GuestFooter: _views_layouts_partials_guest_footer__WEBPACK_IMPORTED_MODULE_3__["default"]
  },
  data: function data() {
    return {
      formData: {},
      formErrors: {},
      initialFormData: null,
      initianLength: 0,
      emptyFormData: null,
      preRequisite: {},
      isLoading: true,
      icons: {
        'facebook': 'fab fa-facebook-f',
        'twitter': 'fab fa-twitter',
        'github': 'fab fa-github',
        'google': 'fab fa-google'
      },
      btns: {
        'facebook': 'btn-facebook',
        'twitter': 'btn-twitter',
        'github': 'btn-github',
        'google': 'btn-google-plus'
      }
    };
  },
  computed: _objectSpread(_objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])('config', ['configs', 'vars'])), Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])('user', ['twoFactorSet', 'hasRole'])), {}, {
    selectedLocale: function selectedLocale() {
      var locale = getQueryStringByParam('locale');
      return locale ? locale : this.configs.system.locale;
    },
    showLocaleSwitcher: function showLocaleSwitcher() {
      return this.configs.system.locales && this.configs.system.locales.length > 1;
    }
  }),
  methods: _objectSpread(_objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapActions"])('config', ['GetConfig'])), Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapActions"])('user', ['Register', 'SetCSRF', 'Logout', 'Login', 'LoginUsingOtp', 'ResetTwoFactorSet', 'RequestReset', 'ValidateResetPassword', 'ResetPassword', 'CheckTwoFactorCode'])), {}, {
    withQuery: function withQuery(toRoute) {
      var aTag = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      var routeQuery = this.$route.query;
      var href = '';

      if (!toRoute.hasOwnProperty('query')) {
        toRoute['query'] = {};
      }

      toRoute.query.locale = routeQuery && routeQuery.locale ? routeQuery.locale : undefined;

      if (routeQuery && routeQuery.locale) {
        href = "".concat(href, "?locale=").concat(routeQuery.locale);
      }

      if (routeQuery && routeQuery.ref && !(options && options.hasOwnProperty('removeRef') && options.removeRef)) {
        toRoute.query.ref = routeQuery.ref;

        if (href) {
          href = "?".concat(href, "&ref=").concat(routeQuery.ref);
        } else {
          href = "?".concat(href, "&ref=").concat(routeQuery.ref);
        }

        if (href) {
          href = "?".concat(href, "&ref=").concat(routeQuery.ref);
        } else {
          href = "?".concat(href, "&ref=").concat(routeQuery.ref);
        }
      }

      href = "".concat(toRoute.name).concat(href);

      if (aTag) {
        return href;
      }

      return toRoute;
    },
    switchLocale: function switchLocale(locale) {
      var url = window.location.href;
      window.location.href = updateQueryStringParam(url, 'locale', locale.locale);
    }
  }),
  mounted: function mounted() {
    this.initialFormData = _.cloneDeep(this.formData);
    this.isLoading = false;
  },
  beforeDestroy: function beforeDestroy() {
    delete this.formData;
    delete this.formErrors;
    delete this.preRequisite;
  }
});

/***/ }),

/***/ "./resources/js/views/auth/login-sms-otp.vue":
/*!***************************************************!*\
  !*** ./resources/js/views/auth/login-sms-otp.vue ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _login_sms_otp_vue_vue_type_template_id_28bd276b_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login-sms-otp.vue?vue&type=template&id=28bd276b&scoped=true& */ "./resources/js/views/auth/login-sms-otp.vue?vue&type=template&id=28bd276b&scoped=true&");
/* harmony import */ var _login_sms_otp_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login-sms-otp.vue?vue&type=script&lang=js& */ "./resources/js/views/auth/login-sms-otp.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _login_sms_otp_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _login_sms_otp_vue_vue_type_template_id_28bd276b_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _login_sms_otp_vue_vue_type_template_id_28bd276b_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "28bd276b",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/auth/login-sms-otp.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/auth/login-sms-otp.vue?vue&type=script&lang=js&":
/*!****************************************************************************!*\
  !*** ./resources/js/views/auth/login-sms-otp.vue?vue&type=script&lang=js& ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_login_sms_otp_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./login-sms-otp.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/auth/login-sms-otp.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_login_sms_otp_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/auth/login-sms-otp.vue?vue&type=template&id=28bd276b&scoped=true&":
/*!**********************************************************************************************!*\
  !*** ./resources/js/views/auth/login-sms-otp.vue?vue&type=template&id=28bd276b&scoped=true& ***!
  \**********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_login_sms_otp_vue_vue_type_template_id_28bd276b_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./login-sms-otp.vue?vue&type=template&id=28bd276b&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/auth/login-sms-otp.vue?vue&type=template&id=28bd276b&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_login_sms_otp_vue_vue_type_template_id_28bd276b_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_login_sms_otp_vue_vue_type_template_id_28bd276b_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=login-sms-otp.js.map?id=5a907bf630cf0c83e35b