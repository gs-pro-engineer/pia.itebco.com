(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app/product/index"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/app/product/index.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/app/product/index.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _api_product__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @api/product */ "./resources/js/api/product.js");
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
  data: function data() {
    return {
      isLoading: false
    };
  },
  computed: _objectSpread(_objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])('config', ['configs', 'vars'])), Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])('product', ['product', 'isSupportValid'])), {}, {
    hideUpdateLink: function hideUpdateLink() {
      return this.$route.name === 'appProductUpdate';
    }
  }),
  mounted: function mounted() {
    this.getInitialData();
  },
  methods: _objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapActions"])('product', {
    getProductDetails: 'Get'
  })), {}, {
    getInitialData: function getInitialData() {
      var _this = this;

      this.isLoading = true;
      this.getProductDetails().then(function () {
        _this.isLoading = false;
      })["catch"](function (error) {
        _this.isLoading = false;
        _this.formErrors = formUtil.handleErrors(error);
      });
    }
  })
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/app/product/index.vue?vue&type=template&id=0e3bd355&":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/app/product/index.vue?vue&type=template&id=0e3bd355& ***!
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
  return _c("div", { staticClass: "row" }, [
    _c(
      "div",
      { staticClass: "col-12 col-md-6" },
      [
        _c(
          "base-container",
          {
            attrs: {
              boxed: "",
              "with-loader": "",
              "min-height": "full",
              "is-loading": _vm.isLoading,
              "loader-color": _vm.vars.loaderColor
            }
          },
          [
            _c("div", { staticClass: "label-group" }, [
              _c("label", { staticClass: "text-muted" }, [
                _vm._v("Product Name")
              ]),
              _vm._v(" "),
              _c("h4", { staticClass: "font-weight-bold" }, [
                _vm._v(_vm._s(_vm.product.name))
              ])
            ]),
            _vm._v(" "),
            _c("hr", { staticClass: "my-2" }),
            _vm._v(" "),
            _c("div", { staticClass: "row mt-4" }, [
              _c("div", { staticClass: "col-12 col-md-4" }, [
                _c("div", { staticClass: "label-group" }, [
                  _c("label", { staticClass: "text-muted" }, [
                    _vm._v("Current Version")
                  ]),
                  _vm._v(" "),
                  _c("p", [_vm._v(_vm._s(_vm.product.currentVersion))])
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "col-12 col-md-4 text-md-center" }, [
                _c("div", { staticClass: "label-group" }, [
                  _c("label", { staticClass: "text-muted" }, [
                    _vm._v("Latest Version")
                  ]),
                  _vm._v(" "),
                  _c(
                    "p",
                    [
                      _vm._v(
                        "\n                            " +
                          _vm._s(_vm.product.latestVersion) +
                          "\n                            "
                      ),
                      _vm.product.currentVersion != _vm.product.latestVersion &&
                      !_vm.hideUpdateLink
                        ? _c(
                            "router-link",
                            {
                              staticClass: "badge badge-info badge-sm",
                              attrs: { to: { name: "appProductUpdate" } }
                            },
                            [_vm._v("Update Available")]
                          )
                        : _vm._e(),
                      _vm._v(" "),
                      _vm.product.currentVersion === _vm.product.latestVersion
                        ? _c(
                            "span",
                            { staticClass: "badge badge-sm badge-success" },
                            [_vm._v("Up-to-date")]
                          )
                        : _vm._e()
                    ],
                    1
                  )
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "col-12 col-md-4 text-md-right" }, [
                _c("div", { staticClass: "label-group" }, [
                  _c("label", { staticClass: "text-muted" }, [
                    _vm._v("Latest Version Release")
                  ]),
                  _vm._v(" "),
                  _c("p", [
                    _vm._v(
                      _vm._s(
                        _vm._f("moment")(
                          _vm.product.latestVersionRelease,
                          _vm.vars.defaultDateFormat
                        )
                      )
                    )
                  ])
                ])
              ])
            ]),
            _vm._v(" "),
            _c("hr", { staticClass: "my-2" }),
            _vm._v(" "),
            _c("div", { staticClass: "row mt-4" }, [
              _c("div", { staticClass: "col-12 col-md-6" }, [
                _c("div", { staticClass: "label-group" }, [
                  _c("label", { staticClass: "text-muted" }, [
                    _vm._v("Date of Purchase")
                  ]),
                  _vm._v(" "),
                  _c("p", [
                    _vm._v(
                      _vm._s(
                        _vm._f("moment")(
                          _vm.product.dateOfPurchase,
                          _vm.vars.defaultDateFormat
                        )
                      )
                    )
                  ])
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "col-12 col-md-6 text-md-right" }, [
                _c("div", { staticClass: "label-group" }, [
                  _c("label", { staticClass: "text-muted" }, [
                    _vm._v("Support Validity")
                  ]),
                  _vm._v(" "),
                  _c("p", [
                    _vm._v(
                      "\n                            " +
                        _vm._s(
                          _vm._f("moment")(
                            _vm.product.dateOfSupportExpiry,
                            _vm.vars.defaultDateFormat
                          )
                        ) +
                        " \n                            "
                    ),
                    _vm.isSupportValid
                      ? _c(
                          "span",
                          { staticClass: "badge badge-sm badge-success" },
                          [_vm._v("Supported")]
                        )
                      : _c(
                          "span",
                          { staticClass: "badge badge-sm badge-danger" },
                          [_vm._v("Expired")]
                        )
                  ])
                ])
              ])
            ]),
            _vm._v(" "),
            _c("hr", { staticClass: "my-2" }),
            _vm._v(" "),
            _c("div", { staticClass: "row mt-4" }, [
              _c("div", { staticClass: "col-12 col-md-6" }, [
                _c("div", { staticClass: "label-group" }, [
                  _c("label", { staticClass: "text-muted" }, [
                    _vm._v("License Type")
                  ]),
                  _vm._v(" "),
                  _c("p", [_vm._v(_vm._s(_vm.product.licenseType))])
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "col-12 col-md-6 text-md-right" }, [
                _c("div", { staticClass: "label-group" }, [
                  _c("label", { staticClass: "text-muted" }, [
                    _vm._v("Registered Email ID")
                  ]),
                  _vm._v(" "),
                  _c("p", [_vm._v(_vm._s(_vm.product.email))])
                ])
              ])
            ]),
            _vm._v(" "),
            _c("hr", { staticClass: "my-2" }),
            _vm._v(" "),
            _c("div", { staticClass: "row mt-4" }, [
              _c("div", { staticClass: "col-12 col-md-4" }, [
                _c("div", { staticClass: "label-group" }, [
                  _c("label", { staticClass: "text-muted" }, [
                    _vm._v("Purchase Code")
                  ]),
                  _vm._v(" "),
                  _c("p", [_vm._v(_vm._s(_vm.product.purchaseCode))])
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "col-12 col-md-4 text-md-center" }, [
                _c("div", { staticClass: "label-group" }, [
                  _c("label", { staticClass: "text-muted" }, [
                    _vm._v("Access Code")
                  ]),
                  _vm._v(" "),
                  _c("p", [_vm._v(_vm._s(_vm.product.accessCode))])
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "col-12 col-md-4 text-md-right" }, [
                _c("div", { staticClass: "label-group" }, [
                  _c("label", { staticClass: "text-muted" }, [
                    _vm._v("Checksum")
                  ]),
                  _vm._v(" "),
                  _c("p", [_vm._v(_vm._s(_vm.product.checksum))])
                ])
              ])
            ])
          ]
        )
      ],
      1
    ),
    _vm._v(" "),
    _c("div", { staticClass: "col-12 col-md-6" }, [_c("router-view")], 1)
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/views/app/product/index.vue":
/*!**************************************************!*\
  !*** ./resources/js/views/app/product/index.vue ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_vue_vue_type_template_id_0e3bd355___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=0e3bd355& */ "./resources/js/views/app/product/index.vue?vue&type=template&id=0e3bd355&");
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ "./resources/js/views/app/product/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_0e3bd355___WEBPACK_IMPORTED_MODULE_0__["render"],
  _index_vue_vue_type_template_id_0e3bd355___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/app/product/index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/app/product/index.vue?vue&type=script&lang=js&":
/*!***************************************************************************!*\
  !*** ./resources/js/views/app/product/index.vue?vue&type=script&lang=js& ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/app/product/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/app/product/index.vue?vue&type=template&id=0e3bd355&":
/*!*********************************************************************************!*\
  !*** ./resources/js/views/app/product/index.vue?vue&type=template&id=0e3bd355& ***!
  \*********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_0e3bd355___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=0e3bd355& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/app/product/index.vue?vue&type=template&id=0e3bd355&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_0e3bd355___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_0e3bd355___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=index.js.map?id=dd256f25e9c6a8141603