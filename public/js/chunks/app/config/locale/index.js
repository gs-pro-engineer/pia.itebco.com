(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app/config/locale/index"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/app/config/locale/index.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/app/config/locale/index.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _mixins_table__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @mixins/table */ "./resources/js/mixins/table.js");
/* harmony import */ var _mixins_header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @mixins/header */ "./resources/js/mixins/header.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  "extends": _mixins_table__WEBPACK_IMPORTED_MODULE_0__["default"],
  data: function data() {
    return {
      fields: [{
        key: 'name',
        label: $t('config.locale.props.name'),
        sort: 'name'
      }, {
        key: 'isDefault',
        label: $t('config.locale.props.is_default')
      }, {
        key: 'actions',
        label: '',
        cantHide: true,
        tdClass: 'actions-wrapper'
      }],
      permissionsRequired: 'access-config',
      routesRequired: {
        add: 'appConfigLocaleAdd'
      },
      initUrl: 'config/locales',
      dataType: 'locale',
      hideFilterButton: true,
      headerButtons: [_mixins_header__WEBPACK_IMPORTED_MODULE_1__["headerRouteButton"]($t('config.locale.translation'), 'fas fa-language', 'appConfigLocaleTranslation', $t('config.locale.translation'))]
    };
  },
  mounted: function mounted() {
    this.updatePageMeta();
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/app/config/locale/index.vue?vue&type=template&id=3bde81ed&":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/app/config/locale/index.vue?vue&type=template&id=3bde81ed& ***!
  \*********************************************************************************************************************************************************************************************************************/
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
      staticClass: "p-0 flex-grow",
      attrs: {
        boxed: "",
        "with-loader": "",
        "is-loading": _vm.isLoading,
        "loader-color": _vm.vars.loaderColor
      }
    },
    [
      _vm.isInitialized
        ? _c(
            "table-wrapper",
            {
              attrs: {
                meta: _vm.entities.meta,
                filtered: _vm.isFiltered,
                "add-button-route": "appConfigLocaleAdd",
                "entity-title": "config.locale.locales",
                "entities-title": "config.locale.locales",
                "entity-description": "config.locale.module_description"
              }
            },
            [
              _c("b-table", {
                directives: [
                  {
                    name: "show",
                    rawName: "v-show",
                    value: _vm.entities.meta.total,
                    expression: "entities.meta.total"
                  }
                ],
                ref: "btable",
                attrs: {
                  items: _vm.itemsProvider,
                  fields: _vm.fields,
                  busy: _vm.isLoading,
                  hover: "",
                  striped: "",
                  stacked: "sm",
                  "per-page": _vm.entities.meta.perPage,
                  "current-page": _vm.entities.meta.currentPage,
                  filters: null
                },
                on: {
                  "update:busy": function($event) {
                    _vm.isLoading = $event
                  }
                },
                scopedSlots: _vm._u(
                  [
                    {
                      key: "cell(isDefault)",
                      fn: function(row) {
                        return [
                          row.item.isDefault
                            ? _c(
                                "badge",
                                { attrs: { rounded: "", type: "dark" } },
                                [
                                  _c("i", { staticClass: "fas fa-check" }),
                                  _vm._v(
                                    " " +
                                      _vm._s(
                                        _vm.$t("config.locale.props.default")
                                      )
                                  )
                                ]
                              )
                            : _vm._e()
                        ]
                      }
                    },
                    {
                      key: "cell(actions)",
                      fn: function(row) {
                        return [
                          _c(
                            "div",
                            {
                              staticClass: "btn-group",
                              attrs: {
                                role: "group",
                                "aria-label": "Actions Buttons"
                              }
                            },
                            [
                              !row.item.isDefault
                                ? _c(
                                    "base-button",
                                    {
                                      directives: [
                                        {
                                          name: "b-tooltip",
                                          rawName: "v-b-tooltip.hover.d500",
                                          modifiers: { hover: true, d500: true }
                                        }
                                      ],
                                      attrs: {
                                        type: "button",
                                        size: "sm",
                                        design: "dark",
                                        title: _vm.$t("global.delete", {
                                          attribute: _vm.$t(
                                            "config.locale.locale"
                                          )
                                        })
                                      },
                                      on: {
                                        click: function($event) {
                                          $event.stopPropagation()
                                          return _vm.deleteEntity(row.item)
                                        }
                                      }
                                    },
                                    [_c("i", { staticClass: "fas fa-trash" })]
                                  )
                                : _vm._e()
                            ],
                            1
                          )
                        ]
                      }
                    }
                  ],
                  null,
                  false,
                  1257740704
                )
              })
            ],
            1
          )
        : _vm._e()
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/views/app/config/locale/index.vue":
/*!********************************************************!*\
  !*** ./resources/js/views/app/config/locale/index.vue ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_vue_vue_type_template_id_3bde81ed___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=3bde81ed& */ "./resources/js/views/app/config/locale/index.vue?vue&type=template&id=3bde81ed&");
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ "./resources/js/views/app/config/locale/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_3bde81ed___WEBPACK_IMPORTED_MODULE_0__["render"],
  _index_vue_vue_type_template_id_3bde81ed___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/app/config/locale/index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/app/config/locale/index.vue?vue&type=script&lang=js&":
/*!*********************************************************************************!*\
  !*** ./resources/js/views/app/config/locale/index.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/app/config/locale/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/app/config/locale/index.vue?vue&type=template&id=3bde81ed&":
/*!***************************************************************************************!*\
  !*** ./resources/js/views/app/config/locale/index.vue?vue&type=template&id=3bde81ed& ***!
  \***************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_3bde81ed___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=3bde81ed& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/app/config/locale/index.vue?vue&type=template&id=3bde81ed&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_3bde81ed___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_3bde81ed___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=index.js.map?id=f15acdb9dec4b44cf8ef