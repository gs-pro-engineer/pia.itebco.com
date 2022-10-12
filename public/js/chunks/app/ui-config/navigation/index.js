(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app/ui-config/navigation/index"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/app/ui-config/navigation/index.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/app/ui-config/navigation/index.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _mixins_ui_config_form__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @mixins/ui-config-form */ "./resources/js/mixins/ui-config-form.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  "extends": _mixins_ui_config_form__WEBPACK_IMPORTED_MODULE_0__["default"]
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/app/ui-config/navigation/index.vue?vue&type=template&id=699094f8&":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/app/ui-config/navigation/index.vue?vue&type=template&id=699094f8& ***!
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
            _c("div", { staticClass: "col-12 col-md-6 mb-5" }, [
              _c("h6", { staticClass: "font-weight-700" }, [
                _vm._v(_vm._s(_vm.$t("config.ui.icon_alignment")))
              ]),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "d-flex align-items-center" },
                [
                  _c(
                    "base-radio",
                    {
                      attrs: { value: false, inline: "", "has-image": "" },
                      model: {
                        value: _vm.formData.navMenuThumbOnRight,
                        callback: function($$v) {
                          _vm.$set(_vm.formData, "navMenuThumbOnRight", $$v)
                        },
                        expression: "formData.navMenuThumbOnRight"
                      }
                    },
                    [
                      _c("img", {
                        attrs: {
                          src: __webpack_require__(/*! @images/config/nav_icon_alignment_left.jpg */ "./resources/images/config/nav_icon_alignment_left.jpg")
                        }
                      }),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "mt-2 text-center text-muted" },
                        [_vm._v(_vm._s(_vm.$t("config.ui.left")))]
                      )
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "base-radio",
                    {
                      attrs: { value: true, inline: "", "has-image": "" },
                      model: {
                        value: _vm.formData.navMenuThumbOnRight,
                        callback: function($$v) {
                          _vm.$set(_vm.formData, "navMenuThumbOnRight", $$v)
                        },
                        expression: "formData.navMenuThumbOnRight"
                      }
                    },
                    [
                      _c("img", {
                        attrs: {
                          src: __webpack_require__(/*! @images/config/nav_icon_alignment_right.jpg */ "./resources/images/config/nav_icon_alignment_right.jpg")
                        }
                      }),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "mt-2 text-center text-muted" },
                        [_vm._v(_vm._s(_vm.$t("config.ui.right")))]
                      )
                    ]
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "alert alert-outline-info text-center" },
                [_vm._v(_vm._s(_vm.$t("config.ui.icon_alignment_helper")))]
              )
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "col-12 col-md-6 mb-5" }, [
              _c("h6", { staticClass: "font-weight-700" }, [
                _vm._v(_vm._s(_vm.$t("config.ui.letter_icon")))
              ]),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "d-flex align-items-center" },
                [
                  _c(
                    "base-radio",
                    {
                      attrs: { value: false, inline: "", "has-image": "" },
                      model: {
                        value: _vm.formData.navMenuLetterIcon,
                        callback: function($$v) {
                          _vm.$set(_vm.formData, "navMenuLetterIcon", $$v)
                        },
                        expression: "formData.navMenuLetterIcon"
                      }
                    },
                    [
                      _c("img", {
                        attrs: {
                          src: __webpack_require__(/*! @images/config/nav_letter_icon_disable.jpg */ "./resources/images/config/nav_letter_icon_disable.jpg")
                        }
                      }),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "mt-2 text-center text-muted" },
                        [_vm._v(_vm._s(_vm.$t("config.ui.disable")))]
                      )
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "base-radio",
                    {
                      attrs: { value: true, inline: "", "has-image": "" },
                      model: {
                        value: _vm.formData.navMenuLetterIcon,
                        callback: function($$v) {
                          _vm.$set(_vm.formData, "navMenuLetterIcon", $$v)
                        },
                        expression: "formData.navMenuLetterIcon"
                      }
                    },
                    [
                      _c("img", {
                        attrs: {
                          src: __webpack_require__(/*! @images/config/nav_letter_icon_enable.jpg */ "./resources/images/config/nav_letter_icon_enable.jpg")
                        }
                      }),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "mt-2 text-center text-muted" },
                        [_vm._v(_vm._s(_vm.$t("config.ui.enable")))]
                      )
                    ]
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "alert alert-outline-info text-center" },
                [_vm._v(_vm._s(_vm.$t("config.ui.letter_icon_helper")))]
              )
            ])
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
        ]
      )
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/images/config/nav_icon_alignment_left.jpg":
/*!*************************************************************!*\
  !*** ./resources/images/config/nav_icon_alignment_left.jpg ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/nav_icon_alignment_left.jpg?fcf8cc2f7b70deaa2e010b7609f13986";

/***/ }),

/***/ "./resources/images/config/nav_icon_alignment_right.jpg":
/*!**************************************************************!*\
  !*** ./resources/images/config/nav_icon_alignment_right.jpg ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/nav_icon_alignment_right.jpg?da351febbd988256edac66de1e82a326";

/***/ }),

/***/ "./resources/images/config/nav_letter_icon_disable.jpg":
/*!*************************************************************!*\
  !*** ./resources/images/config/nav_letter_icon_disable.jpg ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/nav_letter_icon_disable.jpg?3eb4f24058f2278fb4fe9b31b50b91c2";

/***/ }),

/***/ "./resources/images/config/nav_letter_icon_enable.jpg":
/*!************************************************************!*\
  !*** ./resources/images/config/nav_letter_icon_enable.jpg ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/nav_letter_icon_enable.jpg?fc1af96156cdafe8ccbb1e50dae07faf";

/***/ }),

/***/ "./resources/js/views/app/ui-config/navigation/index.vue":
/*!***************************************************************!*\
  !*** ./resources/js/views/app/ui-config/navigation/index.vue ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_vue_vue_type_template_id_699094f8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=699094f8& */ "./resources/js/views/app/ui-config/navigation/index.vue?vue&type=template&id=699094f8&");
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ "./resources/js/views/app/ui-config/navigation/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_699094f8___WEBPACK_IMPORTED_MODULE_0__["render"],
  _index_vue_vue_type_template_id_699094f8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/app/ui-config/navigation/index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/app/ui-config/navigation/index.vue?vue&type=script&lang=js&":
/*!****************************************************************************************!*\
  !*** ./resources/js/views/app/ui-config/navigation/index.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/app/ui-config/navigation/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/app/ui-config/navigation/index.vue?vue&type=template&id=699094f8&":
/*!**********************************************************************************************!*\
  !*** ./resources/js/views/app/ui-config/navigation/index.vue?vue&type=template&id=699094f8& ***!
  \**********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_699094f8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=699094f8& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/app/ui-config/navigation/index.vue?vue&type=template&id=699094f8&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_699094f8___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_699094f8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=index.js.map?id=ae8ad5df93b7bb63b358