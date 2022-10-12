(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app/option/add~app/option/edit"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/app/option/form.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/app/option/form.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _mixins_form__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @mixins/form */ "./resources/js/mixins/form.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  "extends": _mixins_form__WEBPACK_IMPORTED_MODULE_0__["default"],
  data: function data() {
    return {
      formData: {
        uuid: null,
        name: '',
        slug: '',
        description: '',
        parent: null,
        type: null
      },
      hasSlug: false,
      hasParent: false,
      preRequisite: {
        options: []
      },
      formLabels: {
        name: $t('option.props.name'),
        slug: $t('option.props.slug'),
        description: $t('option.props.description'),
        parent: $t('option.props.parent'),
        type: $t('option.props.type')
      },
      initUrl: 'options',
      entityTitle: 'option.option'
    };
  },
  computed: {
    computedClass: function computedClass() {
      return this.hasSlug && this.hasParent ? 'col-md-4' : this.hasSlug || this.hasParent ? 'col-md-6' : '';
    }
  },
  methods: {
    createSlug: function createSlug() {
      if (this.showKeepAdding && this.formData.name != this.initialFormData.name) {
        this.formData.slug = this.formData.name.kebabCase();
      } else {
        this.formData.slug = this.formData.slug ? this.formData.slug : this.formData.name.kebabCase();
      }
    },
    preSubmit: function preSubmit() {
      this.createSlug();

      if (this.hasParent && !this.formData.parent) {
        this.$toasted.error($t('global.invalid', {
          attribute: $t('option.props.parent')
        }), this.$toastConfig.error);
        return;
      }

      this.submit();
    }
  },
  mounted: function mounted() {
    this.getInitialData();
  },
  beforeMount: function beforeMount() {
    var meta = this.$route.meta;
    this.customFilters.type = meta.optionType;
    this.formData.type = meta.optionType;
    this.entityTitle = meta.entityTitle;
    this.hasSlug = meta.hasSlug;
    this.hasParent = meta.hasParent;
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/app/option/form.vue?vue&type=template&id=7f6ce2fe&":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/app/option/form.vue?vue&type=template&id=7f6ce2fe& ***!
  \*************************************************************************************************************************************************************************************************************/
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
    "form",
    {
      on: {
        submit: function($event) {
          $event.preventDefault()
          return _vm.preSubmit.apply(null, arguments)
        }
      }
    },
    [
      _c("animated-loader", {
        attrs: {
          "is-loading": _vm.isLoading || _vm.isFetching,
          "loader-color": _vm.vars.loaderColor
        }
      }),
      _vm._v(" "),
      _c("div", { staticClass: "row" }, [
        _c(
          "div",
          { class: ["col-12 mb-4", _vm.computedClass] },
          [
            _c("base-input", {
              attrs: {
                "auto-focus": "",
                label: _vm.formLabels.name,
                type: "text",
                error: _vm.formErrors.name,
                required: ""
              },
              on: {
                "update:error": function($event) {
                  return _vm.$set(_vm.formErrors, "name", $event)
                },
                blur: _vm.createSlug
              },
              model: {
                value: _vm.formData.name,
                callback: function($$v) {
                  _vm.$set(_vm.formData, "name", $$v)
                },
                expression: "formData.name"
              }
            })
          ],
          1
        ),
        _vm._v(" "),
        _vm.hasSlug
          ? _c(
              "div",
              { class: ["col-12 mb-4", _vm.computedClass] },
              [
                _c("base-input", {
                  attrs: {
                    label: _vm.formLabels.slug,
                    type: "text",
                    error: _vm.formErrors.slug,
                    format: "kebabCase",
                    required: ""
                  },
                  on: {
                    "update:error": function($event) {
                      return _vm.$set(_vm.formErrors, "slug", $event)
                    },
                    focus: _vm.createSlug,
                    blur: _vm.createSlug
                  },
                  model: {
                    value: _vm.formData.slug,
                    callback: function($$v) {
                      _vm.$set(_vm.formData, "slug", $$v)
                    },
                    expression: "formData.slug"
                  }
                })
              ],
              1
            )
          : _vm._e(),
        _vm._v(" "),
        _vm.hasParent
          ? _c(
              "div",
              { class: ["col-12 mb-4", _vm.computedClass] },
              [
                _c("base-select", {
                  attrs: {
                    options: _vm.preRequisite.options,
                    label: _vm.formLabels.parent,
                    error: _vm.formErrors.parent,
                    "allow-empty": true,
                    disabled: _vm.isLoading,
                    "track-by": "uuid",
                    "show-by": "nameWithParents"
                  },
                  on: {
                    "update:error": function($event) {
                      return _vm.$set(_vm.formErrors, "parent", $event)
                    }
                  },
                  model: {
                    value: _vm.formData.parent,
                    callback: function($$v) {
                      _vm.$set(_vm.formData, "parent", $$v)
                    },
                    expression: "formData.parent"
                  }
                })
              ],
              1
            )
          : _vm._e(),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "col-12 mb-4" },
          [
            _c("base-input", {
              attrs: {
                label: _vm.formLabels.description,
                type: "text",
                error: _vm.formErrors.description
              },
              on: {
                "update:error": function($event) {
                  return _vm.$set(_vm.formErrors, "description", $event)
                }
              },
              model: {
                value: _vm.formData.description,
                callback: function($$v) {
                  _vm.$set(_vm.formData, "description", $$v)
                },
                expression: "formData.description"
              }
            })
          ],
          1
        )
      ]),
      _vm._v(" "),
      _vm.formHasErrors
        ? _c(
            "div",
            {
              staticClass: "alert alert-danger my-3",
              attrs: { role: "alert" }
            },
            [
              _c("h6", { staticClass: "m-0" }, [
                _vm._v(_vm._s(_vm.$t("general.form_has_errors")))
              ])
            ]
          )
        : _vm._e(),
      _vm._v(" "),
      _c("div", { staticClass: "form-footer mt-5" }, [
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
                _vm._v(" " + _vm._s(_vm.$t("general.cancel")))
              ]
            ),
            _vm._v(" "),
            _vm.showKeepAdding
              ? _c(
                  "base-checkbox",
                  {
                    staticClass: "ml-3 mt-2",
                    model: {
                      value: _vm.keepAdding,
                      callback: function($$v) {
                        _vm.keepAdding = $$v
                      },
                      expression: "keepAdding"
                    }
                  },
                  [
                    _vm._v(
                      "\n                " +
                        _vm._s(_vm.$t("general.keep_adding")) +
                        "\n            "
                    )
                  ]
                )
              : _vm._e()
          ],
          1
        ),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "right-side" },
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
              [
                _c("i", { staticClass: "fas fa-save" }),
                _vm._v(
                  " " +
                    _vm._s(
                      _vm.$t("global.save", {
                        attribute: _vm.$t(_vm.entityTitle)
                      })
                    )
                )
              ]
            )
          ],
          1
        )
      ]),
      _vm._v(" "),
      _vm.showKeepAdding && _vm.keepAdding
        ? [
            _c("keep-adding-form", {
              attrs: {
                "keep-adding-fields": _vm.keepAddingFields,
                "keep-adding-option": _vm.keepAddingOption,
                "keep-adding-selected-fields": _vm.keepAddingSelectedFields,
                "is-loading": _vm.isLoading
              },
              on: {
                optionUpdated: function($event) {
                  _vm.keepAddingOption = $event
                },
                fieldsUpdated: function($event) {
                  _vm.keepAddingSelectedFields = $event
                }
              }
            })
          ]
        : _vm._e()
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/views/app/option/form.vue":
/*!************************************************!*\
  !*** ./resources/js/views/app/option/form.vue ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _form_vue_vue_type_template_id_7f6ce2fe___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./form.vue?vue&type=template&id=7f6ce2fe& */ "./resources/js/views/app/option/form.vue?vue&type=template&id=7f6ce2fe&");
/* harmony import */ var _form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./form.vue?vue&type=script&lang=js& */ "./resources/js/views/app/option/form.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _form_vue_vue_type_template_id_7f6ce2fe___WEBPACK_IMPORTED_MODULE_0__["render"],
  _form_vue_vue_type_template_id_7f6ce2fe___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/app/option/form.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/app/option/form.vue?vue&type=script&lang=js&":
/*!*************************************************************************!*\
  !*** ./resources/js/views/app/option/form.vue?vue&type=script&lang=js& ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./form.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/app/option/form.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/app/option/form.vue?vue&type=template&id=7f6ce2fe&":
/*!*******************************************************************************!*\
  !*** ./resources/js/views/app/option/form.vue?vue&type=template&id=7f6ce2fe& ***!
  \*******************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_form_vue_vue_type_template_id_7f6ce2fe___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./form.vue?vue&type=template&id=7f6ce2fe& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/app/option/form.vue?vue&type=template&id=7f6ce2fe&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_form_vue_vue_type_template_id_7f6ce2fe___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_form_vue_vue_type_template_id_7f6ce2fe___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=edit.js.map?id=4810fd5f3deafa2305af