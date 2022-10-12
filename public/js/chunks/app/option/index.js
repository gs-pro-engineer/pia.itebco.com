(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app/option/index"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/app/option/index.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/app/option/index.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _mixins_table__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @mixins/table */ "./resources/js/mixins/table.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  "extends": _mixins_table__WEBPACK_IMPORTED_MODULE_0__["default"],
  data: function data() {
    return {
      fields: [{
        key: 'name',
        label: $t('option.props.name'),
        sort: 'name'
      }, {
        key: 'slug',
        label: $t('option.props.slug'),
        sort: 'slug'
      }, {
        key: 'description',
        label: $t('option.props.description')
      }, {
        key: 'parent.name',
        label: $t('option.props.parent'),
        sort: 'parent_id'
      }, {
        key: 'createdAt',
        label: $t('general.created_at'),
        sort: 'created_at',
        transformer: 'date',
        thClass: 'd-none',
        tdClass: 'd-none'
      }, {
        key: 'updatedAt',
        label: $t('general.updated_at'),
        sort: 'updated_at',
        transformer: 'date',
        thClass: 'd-none',
        tdClass: 'd-none'
      }, {
        key: 'actions',
        label: '',
        cantHide: true,
        tdClass: 'actions-wrapper'
      }],
      preRequisite: {
        options: []
      },
      filtersOptions: {
        name: ''
      },
      permissionsRequired: 'access-config',
      routesRequired: {},
      initUrl: 'options',
      dataType: 'option',
      entityTitle: 'option.option',
      entitiesTitle: 'option.options',
      entityDescription: 'option.module_description',
      hasSlug: false,
      hasParent: false,
      hideFilterButton: true,
      routeNamePrefix: ''
    };
  },
  mounted: function mounted() {
    this.getInitialData();
  },
  beforeMount: function beforeMount() {
    var meta = this.$route.meta;
    this.customFilters.type = meta.optionType;
    this.entityTitle = meta.entityTitle;
    this.entitiesTitle = meta.entitiesTitle;
    this.entityDescription = meta.entityDescription;
    this.permissionsRequired = meta.permissionRequired;
    this.routeNamePrefix = meta.routeNamePrefix;
    this.routesRequired.add = "".concat(meta.routeNamePrefix, "Add");
    this.fields = this.fields.filter(function (f) {
      if (f.key === 'slug') {
        return meta.hasSlug;
      } else if (f.key === 'parent.name') {
        return meta.hasParent;
      }

      return true;
    });
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/app/option/index.vue?vue&type=template&id=a0ef1436&":
/*!**************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/app/option/index.vue?vue&type=template&id=a0ef1436& ***!
  \**************************************************************************************************************************************************************************************************************/
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
                "add-button-route": _vm.routesRequired.add,
                "entity-title": _vm.entityTitle,
                "entities-title": _vm.entitiesTitle,
                "entity-description": _vm.entityDescription
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
                      key: "cell(createdAt)",
                      fn: function(row) {
                        return [
                          _c("view-date", {
                            staticClass: "mb-0",
                            attrs: {
                              value: row.item.createdAt,
                              "with-tz": "",
                              tag: "span"
                            }
                          })
                        ]
                      }
                    },
                    {
                      key: "cell(updatedAt)",
                      fn: function(row) {
                        return [
                          _c("view-date", {
                            staticClass: "mb-0",
                            attrs: {
                              value: row.item.updatedAt,
                              "with-tz": "",
                              tag: "span"
                            }
                          })
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
                              _vm.hasPermission(_vm.permissionsRequired)
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
                                        title: _vm.$t("global.edit", {
                                          attribute: _vm.$t(_vm.entityTitle)
                                        })
                                      },
                                      on: {
                                        click: function($event) {
                                          $event.stopPropagation()
                                          return _vm.$router.push({
                                            name: _vm.routeNamePrefix + "Edit",
                                            params: { uuid: row.item.uuid }
                                          })
                                        }
                                      }
                                    },
                                    [_c("i", { staticClass: "fas fa-edit" })]
                                  )
                                : _vm._e(),
                              _vm._v(" "),
                              _vm.hasPermission(_vm.permissionsRequired)
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
                                          attribute: _vm.$t(_vm.entityTitle)
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
                  1766790600
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

/***/ "./resources/js/views/app/option/index.vue":
/*!*************************************************!*\
  !*** ./resources/js/views/app/option/index.vue ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_vue_vue_type_template_id_a0ef1436___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=a0ef1436& */ "./resources/js/views/app/option/index.vue?vue&type=template&id=a0ef1436&");
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ "./resources/js/views/app/option/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_a0ef1436___WEBPACK_IMPORTED_MODULE_0__["render"],
  _index_vue_vue_type_template_id_a0ef1436___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/app/option/index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/app/option/index.vue?vue&type=script&lang=js&":
/*!**************************************************************************!*\
  !*** ./resources/js/views/app/option/index.vue?vue&type=script&lang=js& ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/app/option/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/app/option/index.vue?vue&type=template&id=a0ef1436&":
/*!********************************************************************************!*\
  !*** ./resources/js/views/app/option/index.vue?vue&type=template&id=a0ef1436& ***!
  \********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_a0ef1436___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=a0ef1436& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/app/option/index.vue?vue&type=template&id=a0ef1436&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_a0ef1436___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_a0ef1436___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=index.js.map?id=d8573214db756751d3bd