(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app/license/index"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/app/license/index.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/app/license/index.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _api_product__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @api/product */ "./resources/js/api/product.js");
/* harmony import */ var _api_install__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @api/install */ "./resources/js/api/install.js");
/* harmony import */ var _js_core_utils_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @js/core/utils/form */ "./resources/js/core/utils/form.js");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
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





/* harmony default export */ __webpack_exports__["default"] = ({
  components: {},
  data: function data() {
    return {
      formData: {
        accessCode: '',
        envatoEmail: ''
      },
      verifier: '',
      formErrors: {},
      isLoading: false
    };
  },
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_3__["mapGetters"])('config', ['vars'])),
  methods: _objectSpread(_objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_3__["mapActions"])('product', ['CheckLicense'])), Object(vuex__WEBPACK_IMPORTED_MODULE_3__["mapActions"])('config', ['SetConfig'])), {}, {
    submit: function submit() {
      var _this = this;

      this.isLoading = true;
      this.CheckLicense(this.formData).then(function (response) {
        _this.SetConfig({
          license: 1
        });

        _this.$toasted.success(response.message, _this.$toastConfig.success);

        _this.isLoading = false;

        _this.$router.push({
          name: 'appDashboard'
        });
      })["catch"](function (error) {
        _this.isLoading = false;
        _this.formErrors = _js_core_utils_form__WEBPACK_IMPORTED_MODULE_2__["handleErrors"](error);
      });
    },
    getPreRequisite: function getPreRequisite() {
      var _this2 = this;

      this.isLoading = true;
      _api_install__WEBPACK_IMPORTED_MODULE_1__["getPreRequisite"](this.formData).then(function (response) {
        _this2.isLoading = false;
        _this2.verifier = response.app.verifier;
      })["catch"](function (error) {
        _this2.isLoading = false;
        _this2.formErrors = formUtil.handleErrors(error);
      });
    }
  }),
  mounted: function mounted() {
    this.getPreRequisite();
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/app/license/index.vue?vue&type=template&id=75b1e7b2&":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/app/license/index.vue?vue&type=template&id=75b1e7b2& ***!
  \***************************************************************************************************************************************************************************************************************/
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
                  label: _vm.$t("setup.license.props.access_code"),
                  type: "text",
                  "addon-left-icon": "fas fa-key",
                  error: _vm.formErrors.accessCode
                },
                on: {
                  "update:error": function($event) {
                    return _vm.$set(_vm.formErrors, "accessCode", $event)
                  }
                },
                model: {
                  value: _vm.formData.accessCode,
                  callback: function($$v) {
                    _vm.$set(_vm.formData, "accessCode", $$v)
                  },
                  expression: "formData.accessCode"
                }
              }),
              _vm._v(" "),
              _c("base-input", {
                staticClass: "mb-3",
                attrs: {
                  label: _vm.$t("setup.license.props.envato_email"),
                  type: "text",
                  "addon-left-icon": "fas fa-envelope",
                  error: _vm.formErrors.envatoEmail
                },
                on: {
                  "update:error": function($event) {
                    return _vm.$set(_vm.formErrors, "envatoEmail", $event)
                  }
                },
                model: {
                  value: _vm.formData.envatoEmail,
                  callback: function($$v) {
                    _vm.$set(_vm.formData, "envatoEmail", $$v)
                  },
                  expression: "formData.envatoEmail"
                }
              }),
              _vm._v(" "),
              _c(
                "a",
                {
                  staticClass: "btn btn-md btn-info my-4 text-uppercase",
                  attrs: { href: _vm.verifier, target: "_blank" }
                },
                [_vm._v(_vm._s(_vm.$t("product.license.get_access_code")))]
              ),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "text-center mt-5" },
                [
                  _c(
                    "base-button",
                    { attrs: { type: "submit", design: "success", block: "" } },
                    [_vm._v(_vm._s(_vm.$t("setup.license.verify")))]
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

/***/ "./resources/js/api/install.js":
/*!*************************************!*\
  !*** ./resources/js/api/install.js ***!
  \*************************************/
/*! exports provided: getPreRequisite, validate, install */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPreRequisite", function() { return getPreRequisite; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "validate", function() { return validate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "install", function() { return install; });
/* harmony import */ var _js_core_utils_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @js/core/utils/request */ "./resources/js/core/utils/request.js");

var apiUrl = '/install';
function getPreRequisite() {
  return Object(_js_core_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: apiUrl + '/pre-requisite',
    method: 'get'
  });
}
function validate(option, data) {
  return Object(_js_core_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: apiUrl + '/validate?option=' + option,
    method: 'post',
    data: data
  });
}
function install(data) {
  return Object(_js_core_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: apiUrl,
    method: 'post',
    data: data
  });
}

/***/ }),

/***/ "./resources/js/views/app/license/index.vue":
/*!**************************************************!*\
  !*** ./resources/js/views/app/license/index.vue ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_vue_vue_type_template_id_75b1e7b2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=75b1e7b2& */ "./resources/js/views/app/license/index.vue?vue&type=template&id=75b1e7b2&");
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ "./resources/js/views/app/license/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_75b1e7b2___WEBPACK_IMPORTED_MODULE_0__["render"],
  _index_vue_vue_type_template_id_75b1e7b2___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/app/license/index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/app/license/index.vue?vue&type=script&lang=js&":
/*!***************************************************************************!*\
  !*** ./resources/js/views/app/license/index.vue?vue&type=script&lang=js& ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/app/license/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/app/license/index.vue?vue&type=template&id=75b1e7b2&":
/*!*********************************************************************************!*\
  !*** ./resources/js/views/app/license/index.vue?vue&type=template&id=75b1e7b2& ***!
  \*********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_75b1e7b2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=75b1e7b2& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/app/license/index.vue?vue&type=template&id=75b1e7b2&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_75b1e7b2___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_75b1e7b2___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=index.js.map?id=0c917eabddfc800a07c4