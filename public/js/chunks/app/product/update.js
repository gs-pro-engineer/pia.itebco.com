(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app/product/update"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/app/product/update.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/app/product/update.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _js_core_utils_formatter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @js/core/utils/formatter */ "./resources/js/core/utils/formatter.js");
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


/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      isLoading: false,
      isProcessing: false,
      isDownloading: false,
      isUpdating: false
    };
  },
  computed: _objectSpread(_objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])('config', ['configs', 'vars'])), Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])('product', ['product', 'updateTips', 'isDownloaded'])), {}, {
    formData: function formData() {
      return {
        build: this.product.nextReleaseBuild,
        version: this.product.nextReleaseVersion
      };
    }
  }),
  methods: _objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapActions"])('product', ['PostSupport', 'DownloadApp', 'UpdateApp'])), {}, {
    getFileSize: function getFileSize(size) {
      return Object(_js_core_utils_formatter__WEBPACK_IMPORTED_MODULE_1__["bytesToFileSize"])(size);
    },
    confirmUpdate: function confirmUpdate() {
      var _this = this;

      swtAlert.fire({
        title: 'Are you sure?',
        text: "This will update this application to the latest version.",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Yes, update!',
        cancelButtonText: 'No, cancel!'
      }).then(function (result) {
        if (result.value) {
          _this.update();
        }
      });
    },
    confirmDownload: function confirmDownload(action) {
      var _this2 = this;

      var message = action === 0 ? "This will download the latest version of the application." : "This will download and update the application to the latest version.";
      swtAlert.fire({
        title: 'Are you sure?',
        text: message,
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: action === 0 ? 'Yes, download!' : 'Yes, update!',
        cancelButtonText: 'No, cancel!'
      }).then(function (result) {
        if (result.value) {
          _this2.download(action);
        }
      });
    },
    download: function download(action) {
      var _this3 = this;

      this.isProcessing = true;
      this.isDownloading = true;
      this.isUpdating = false;
      this.DownloadApp().then(function (response) {
        _this3.isDownloading = false;
        _this3.isUpdating = false;

        _this3.$toasted.success(response.message, _this3.$toastConfig.success);

        if (action) {
          _this3.update();
        } else {
          _this3.isProcessing = false;
        }
      })["catch"](function (error) {
        _this3.isLoading = false;
        formUtil.handleErrors(error);
        _this3.isProcessing = false;
        _this3.isDownloading = false;
        _this3.isUpdating = false;
      });
    },
    update: function update() {
      var _this4 = this;

      this.isProcessing = true;
      this.isDownloading = false;
      this.isUpdating = true;
      this.UpdateApp(this.formData).then(function (response) {
        _this4.$toasted.success(response.message, _this4.$toastConfig.success);

        setTimeout(function () {
          location.reload();
        }, 2000);
      })["catch"](function (error) {
        _this4.isLoading = false;
        formUtil.handleErrors(error);
        _this4.isProcessing = false;
        _this4.isDownloading = false;
        _this4.isUpdating = false;
      });
    }
  })
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/app/product/update.vue?vue&type=template&id=7db2cb56&":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/app/product/update.vue?vue&type=template&id=7db2cb56& ***!
  \****************************************************************************************************************************************************************************************************************/
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
      staticClass: "d-flex align-items-center",
      attrs: {
        boxed: "",
        "with-loader": "",
        "min-height": "full",
        "is-loading": _vm.isLoading || !_vm.product.currentVersion,
        "loader-color": _vm.vars.loaderColor
      }
    },
    [
      _vm.product.currentVersion === _vm.product.latestVersion
        ? _c("div", { staticClass: "text-center mt-2" }, [
            _c("h3", { staticClass: "text-muted mb-3" }, [
              _vm._v("No update available!")
            ]),
            _vm._v(" "),
            _c("p", { staticClass: "text-muted" }, [
              _vm._v(
                "We are constantly working on new features and fixes. We release new update after completing the development and thorough testing. Kindly check later for new updates."
              )
            ]),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "mt-5 mt-2" },
              [
                _c(
                  "router-link",
                  {
                    staticClass: "btn btn-primary",
                    attrs: { to: { name: "appDashboard" } }
                  },
                  [_vm._v(_vm._s(_vm.$t("general.go_to_dashboard")))]
                )
              ],
              1
            )
          ])
        : !_vm.isProcessing
        ? _c("div", { staticClass: "w-100" }, [
            _c("div", { domProps: { innerHTML: _vm._s(_vm.updateTips) } }),
            _vm._v(" "),
            _c("div", { staticClass: "row mt-4" }, [
              _c("div", { staticClass: "col-12 col-md-4" }, [
                _c("div", { staticClass: "label-group" }, [
                  _c("label", { staticClass: "text-muted" }, [
                    _vm._v("Version Available")
                  ]),
                  _vm._v(" "),
                  _c("p", { staticClass: "font-weight-bold" }, [
                    _vm._v(_vm._s(_vm.product.nextReleaseVersion))
                  ])
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "col-12 col-md-4" }, [
                _c("div", { staticClass: "label-group" }, [
                  _c("label", { staticClass: "text-muted" }, [
                    _vm._v("Date of Release")
                  ]),
                  _vm._v(" "),
                  _c("p", { staticClass: "font-weight-bold" }, [
                    _vm._v(
                      _vm._s(
                        _vm._f("moment")(
                          _vm.product.nextReleaseDate,
                          _vm.vars.defaultDateFormat
                        )
                      )
                    )
                  ])
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "col-12 col-md-4" }, [
                _c("div", { staticClass: "label-group" }, [
                  _c("label", { staticClass: "text-muted" }, [
                    _vm._v("Update Size")
                  ]),
                  _vm._v(" "),
                  _c("p", { staticClass: "font-weight-bold" }, [
                    _vm._v(_vm._s(_vm.getFileSize(_vm.product.nextReleaseSize)))
                  ])
                ])
              ])
            ]),
            _vm._v(" "),
            _c("hr", { staticClass: "my-4" }),
            _vm._v(" "),
            _c("div", {
              domProps: { innerHTML: _vm._s(_vm.product.nextReleaseChangeLog) }
            }),
            _vm._v(" "),
            _c("hr", { staticClass: "my-4" }),
            _vm._v(" "),
            _vm.isDownloaded
              ? _c("p", { staticClass: "text-info my-2" }, [
                  _vm._v(_vm._s(_vm.$t("product.update_downloaded")))
                ])
              : _vm._e(),
            _vm._v(" "),
            _c("div", { staticClass: "row" }, [
              !_vm.isDownloaded
                ? _c(
                    "div",
                    { staticClass: "col-12 col-md-6" },
                    [
                      _c(
                        "base-button",
                        {
                          key: "download",
                          staticClass: "my-4",
                          attrs: {
                            type: "button",
                            design: "success",
                            block: ""
                          },
                          on: {
                            click: function($event) {
                              return _vm.confirmDownload(0)
                            }
                          }
                        },
                        [_vm._v(_vm._s(_vm.$t("product.download")))]
                      )
                    ],
                    1
                  )
                : _c(
                    "div",
                    { staticClass: "col-12 col-md-6" },
                    [
                      _c(
                        "base-button",
                        {
                          key: "directupdate",
                          staticClass: "my-4",
                          attrs: {
                            type: "button",
                            design: "primary",
                            block: ""
                          },
                          on: {
                            click: function($event) {
                              return _vm.confirmUpdate()
                            }
                          }
                        },
                        [_vm._v(_vm._s(_vm.$t("product.apply_updates")))]
                      )
                    ],
                    1
                  )
            ])
          ])
        : _c("div", { staticClass: "w-100 text-center" }, [
            _c("h5", { staticClass: "text-warning" }, [
              _vm._v(_vm._s(_vm.$t("product.dont_do_anything")))
            ]),
            _vm._v(" "),
            _vm.isDownloading
              ? _c("h4", { staticClass: "my-4" }, [
                  _vm._v(
                    _vm._s(_vm.$t("product.update_size")) +
                      " (" +
                      _vm._s(_vm.getFileSize(_vm.product.nextReleaseSize)) +
                      ") - " +
                      _vm._s(_vm.$t("product.downloading")) +
                      "..."
                  )
                ])
              : _vm._e(),
            _vm._v(" "),
            _vm.isUpdating
              ? _c("h4", { staticClass: "my-4" }, [
                  _vm._v(_vm._s(_vm.$t("product.applying_updates")) + "...")
                ])
              : _vm._e(),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "d-flex justify-content-center" },
              [
                _c("animated-loader", {
                  attrs: {
                    "is-loading": _vm.isProcessing,
                    "loader-color": _vm.vars.loaderColor,
                    "overlay-color": "transparent",
                    size: "inline"
                  }
                })
              ],
              1
            )
          ])
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/views/app/product/update.vue":
/*!***************************************************!*\
  !*** ./resources/js/views/app/product/update.vue ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _update_vue_vue_type_template_id_7db2cb56___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./update.vue?vue&type=template&id=7db2cb56& */ "./resources/js/views/app/product/update.vue?vue&type=template&id=7db2cb56&");
/* harmony import */ var _update_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./update.vue?vue&type=script&lang=js& */ "./resources/js/views/app/product/update.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _update_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _update_vue_vue_type_template_id_7db2cb56___WEBPACK_IMPORTED_MODULE_0__["render"],
  _update_vue_vue_type_template_id_7db2cb56___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/app/product/update.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/app/product/update.vue?vue&type=script&lang=js&":
/*!****************************************************************************!*\
  !*** ./resources/js/views/app/product/update.vue?vue&type=script&lang=js& ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_update_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./update.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/app/product/update.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_update_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/app/product/update.vue?vue&type=template&id=7db2cb56&":
/*!**********************************************************************************!*\
  !*** ./resources/js/views/app/product/update.vue?vue&type=template&id=7db2cb56& ***!
  \**********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_update_vue_vue_type_template_id_7db2cb56___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./update.vue?vue&type=template&id=7db2cb56& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/app/product/update.vue?vue&type=template&id=7db2cb56&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_update_vue_vue_type_template_id_7db2cb56___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_update_vue_vue_type_template_id_7db2cb56___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=update.js.map?id=33670acbf54df2afa2d8