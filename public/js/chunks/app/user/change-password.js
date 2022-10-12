(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app/user/change-password"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/app/user/change-password.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/app/user/change-password.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _api_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @api/auth */ "./resources/js/api/auth.js");
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


/* harmony default export */ __webpack_exports__["default"] = ({
  components: {},
  data: function data() {
    return {
      formData: {
        currentPassword: '',
        newPassword: '',
        newPasswordConfirmation: ''
      },
      formErrors: {},
      isLoading: false
    };
  },
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])('config', ['vars'])),
  methods: {
    submit: function submit() {
      var _this = this;

      this.isLoading = true;
      _api_auth__WEBPACK_IMPORTED_MODULE_1__["changePassword"](this.formData).then(function (response) {
        _this.isLoading = false;
        _this.formData = formUtil.clearForm(_this.formData);

        _this.$toasted.success(response.message, _this.$toastConfig);
      })["catch"](function (error) {
        _this.isLoading = false;
        _this.formErrors = formUtil.handleErrors(error);
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/app/user/change-password.vue?vue&type=template&id=e5e6cbfe&":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/app/user/change-password.vue?vue&type=template&id=e5e6cbfe& ***!
  \**********************************************************************************************************************************************************************************************************************/
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
      _c("div", { staticClass: "row" }, [
        _c("div", { staticClass: "col-12 col-sm-8 col-md-6 col-lg-4" }, [
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
                  "auto-focus": "",
                  label: _vm.$t("auth.password.props.current_password"),
                  type: "password",
                  name: "currentPassword",
                  "addon-left-icon": "fas fa-key",
                  error: _vm.formErrors.currentPassword
                },
                on: {
                  "update:error": function($event) {
                    return _vm.$set(_vm.formErrors, "currentPassword", $event)
                  }
                },
                model: {
                  value: _vm.formData.currentPassword,
                  callback: function($$v) {
                    _vm.$set(_vm.formData, "currentPassword", $$v)
                  },
                  expression: "formData.currentPassword"
                }
              }),
              _vm._v(" "),
              _c("base-input", {
                staticClass: "mb-3",
                attrs: {
                  label: _vm.$t("auth.password.props.new_password"),
                  type: "password",
                  name: "newPassword",
                  "addon-left-icon": "fas fa-key",
                  error: _vm.formErrors.newPassword
                },
                on: {
                  "update:error": function($event) {
                    return _vm.$set(_vm.formErrors, "newPassword", $event)
                  }
                },
                model: {
                  value: _vm.formData.newPassword,
                  callback: function($$v) {
                    _vm.$set(_vm.formData, "newPassword", $$v)
                  },
                  expression: "formData.newPassword"
                }
              }),
              _vm._v(" "),
              _c("base-input", {
                staticClass: "mb-3",
                attrs: {
                  label: _vm.$t(
                    "auth.password.props.new_password_confirmation"
                  ),
                  type: "password",
                  name: "newPasswordConfirmation",
                  "addon-left-icon": "fas fa-key",
                  error: _vm.formErrors.newPasswordConfirmation
                },
                on: {
                  "update:error": function($event) {
                    return _vm.$set(
                      _vm.formErrors,
                      "newPasswordConfirmation",
                      $event
                    )
                  }
                },
                model: {
                  value: _vm.formData.newPasswordConfirmation,
                  callback: function($$v) {
                    _vm.$set(_vm.formData, "newPasswordConfirmation", $$v)
                  },
                  expression: "formData.newPasswordConfirmation"
                }
              }),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "text-center" },
                [
                  _c(
                    "base-button",
                    {
                      staticClass: "my-4",
                      attrs: { type: "submit", design: "success", block: "" }
                    },
                    [_vm._v(_vm._s(_vm.$t("auth.password.change_password")))]
                  )
                ],
                1
              )
            ],
            1
          )
        ])
      ])
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/views/app/user/change-password.vue":
/*!*********************************************************!*\
  !*** ./resources/js/views/app/user/change-password.vue ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _change_password_vue_vue_type_template_id_e5e6cbfe___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./change-password.vue?vue&type=template&id=e5e6cbfe& */ "./resources/js/views/app/user/change-password.vue?vue&type=template&id=e5e6cbfe&");
/* harmony import */ var _change_password_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./change-password.vue?vue&type=script&lang=js& */ "./resources/js/views/app/user/change-password.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _change_password_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _change_password_vue_vue_type_template_id_e5e6cbfe___WEBPACK_IMPORTED_MODULE_0__["render"],
  _change_password_vue_vue_type_template_id_e5e6cbfe___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/app/user/change-password.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/app/user/change-password.vue?vue&type=script&lang=js&":
/*!**********************************************************************************!*\
  !*** ./resources/js/views/app/user/change-password.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_change_password_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./change-password.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/app/user/change-password.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_change_password_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/app/user/change-password.vue?vue&type=template&id=e5e6cbfe&":
/*!****************************************************************************************!*\
  !*** ./resources/js/views/app/user/change-password.vue?vue&type=template&id=e5e6cbfe& ***!
  \****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_change_password_vue_vue_type_template_id_e5e6cbfe___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./change-password.vue?vue&type=template&id=e5e6cbfe& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/app/user/change-password.vue?vue&type=template&id=e5e6cbfe&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_change_password_vue_vue_type_template_id_e5e6cbfe___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_change_password_vue_vue_type_template_id_e5e6cbfe___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=change-password.js.map?id=491774df97b8344729d0