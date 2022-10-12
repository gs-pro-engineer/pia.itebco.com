(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app/site/query/view"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/app/site/query/view.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/app/site/query/view.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _mixins_view__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @mixins/view */ "./resources/js/mixins/view.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  "extends": _mixins_view__WEBPACK_IMPORTED_MODULE_0__["default"],
  data: function data() {
    return {
      initUrl: 'site/queries',
      dataTitle: $t('site.query.query'),
      fallBackRoute: 'appSiteQueryList'
    };
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/app/site/query/view.vue?vue&type=template&id=268c2192&":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/app/site/query/view.vue?vue&type=template&id=268c2192& ***!
  \*****************************************************************************************************************************************************************************************************************/
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
        "loader-color": _vm.vars.loaderColor,
        id: "printable"
      }
    },
    [
      _vm.entity
        ? _c("div", { staticClass: "row" }, [
            _c(
              "div",
              { staticClass: "col-12 col-md-6 mb-3" },
              [
                _c("view-single", {
                  attrs: {
                    label: _vm.$t("site.query.props.name"),
                    value: _vm.entity.name
                  }
                })
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "col-12 col-md-6 mb-3" },
              [
                _c("view-single", {
                  attrs: {
                    label: _vm.$t("site.query.props.email"),
                    value: _vm.entity.email
                  }
                })
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "col-12 col-md-6 mb-3" },
              [
                _c("view-single", {
                  attrs: {
                    label: _vm.$t("site.query.props.contact_number"),
                    value: _vm.entity.contactNumber
                  }
                })
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "col-12 col-md-6 mb-3" },
              [
                _c("view-single", {
                  attrs: {
                    label: _vm.$t("site.query.props.subject"),
                    value: _vm.entity.subject
                  }
                })
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "col-12 mb-3" },
              [
                _c("view-paragraph", {
                  attrs: {
                    label: _vm.$t("site.query.props.message"),
                    value: _vm.entity.message
                  }
                })
              ],
              1
            )
          ])
        : _vm._e(),
      _vm._v(" "),
      _c("div", { staticClass: "form-footer mt-3" }, [
        _c(
          "div",
          { staticClass: "left-side" },
          [
            _c(
              "base-button",
              {
                attrs: { type: "button", design: "light", tabindex: "-1" },
                on: {
                  click: function($event) {
                    return _vm.$router.back()
                  }
                }
              },
              [
                _c("i", { staticClass: "fas fa-chevron-left" }),
                _vm._v(" " + _vm._s(_vm.$t("general.back")))
              ]
            )
          ],
          1
        ),
        _vm._v(" "),
        _c("div", { staticClass: "right-side" })
      ])
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/views/app/site/query/view.vue":
/*!****************************************************!*\
  !*** ./resources/js/views/app/site/query/view.vue ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _view_vue_vue_type_template_id_268c2192___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./view.vue?vue&type=template&id=268c2192& */ "./resources/js/views/app/site/query/view.vue?vue&type=template&id=268c2192&");
/* harmony import */ var _view_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./view.vue?vue&type=script&lang=js& */ "./resources/js/views/app/site/query/view.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _view_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _view_vue_vue_type_template_id_268c2192___WEBPACK_IMPORTED_MODULE_0__["render"],
  _view_vue_vue_type_template_id_268c2192___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/app/site/query/view.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/app/site/query/view.vue?vue&type=script&lang=js&":
/*!*****************************************************************************!*\
  !*** ./resources/js/views/app/site/query/view.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_view_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./view.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/app/site/query/view.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_view_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/app/site/query/view.vue?vue&type=template&id=268c2192&":
/*!***********************************************************************************!*\
  !*** ./resources/js/views/app/site/query/view.vue?vue&type=template&id=268c2192& ***!
  \***********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_view_vue_vue_type_template_id_268c2192___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./view.vue?vue&type=template&id=268c2192& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/app/site/query/view.vue?vue&type=template&id=268c2192&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_view_vue_vue_type_template_id_268c2192___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_view_vue_vue_type_template_id_268c2192___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=view.js.map?id=5ac80aabf7d048c54ba1