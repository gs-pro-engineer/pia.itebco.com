(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app/utility/todo/add~app/utility/todo/edit"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/app/utility/todo/form.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/app/utility/todo/form.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _mixins_form__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @mixins/form */ "./resources/js/mixins/form.js");
/* harmony import */ var _js_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @js/store */ "./resources/js/store/index.js");
/* harmony import */ var _core_filters_momentz__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/filters/momentz */ "./resources/js/core/filters/momentz.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



var vars = _js_store__WEBPACK_IMPORTED_MODULE_1__["default"].getters['config/vars'];
/* harmony default export */ __webpack_exports__["default"] = ({
  "extends": _mixins_form__WEBPACK_IMPORTED_MODULE_0__["default"],
  data: function data() {
    return {
      formData: {
        uuid: null,
        title: '',
        date: _core_filters_momentz__WEBPACK_IMPORTED_MODULE_2__["now"](vars.serverDateFormat),
        time: null,
        description: ''
      },
      formLabels: {
        title: $t('utility.todo.props.title'),
        description: $t('utility.todo.props.description'),
        date: $t('utility.todo.props.date'),
        time: $t('utility.todo.props.time')
      },
      initUrl: 'utility/todos',
      timeFields: ['time']
    };
  },
  mounted: function mounted() {
    this.isLoading = false;
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/app/utility/todo/form.vue?vue&type=template&id=3ca88e2d&":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/app/utility/todo/form.vue?vue&type=template&id=3ca88e2d& ***!
  \*******************************************************************************************************************************************************************************************************************/
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
          return _vm.submit.apply(null, arguments)
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
          { staticClass: "col-12 mb-4" },
          [
            _c("base-input", {
              attrs: {
                "auto-focus": "",
                label: _vm.formLabels.title,
                type: "text",
                error: _vm.formErrors.title,
                required: ""
              },
              on: {
                "update:error": function($event) {
                  return _vm.$set(_vm.formErrors, "title", $event)
                }
              },
              model: {
                value: _vm.formData.title,
                callback: function($$v) {
                  _vm.$set(_vm.formData, "title", $$v)
                },
                expression: "formData.title"
              }
            })
          ],
          1
        ),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "col-12 col-md-6 mb-4" },
          [
            _c(
              "base-input",
              {
                attrs: {
                  label: _vm.formLabels.date,
                  "addon-right-icon": "far fa-calendar-alt",
                  type: "text",
                  error: _vm.formErrors.date,
                  "is-wrapper": true,
                  required: ""
                },
                on: {
                  "update:error": function($event) {
                    return _vm.$set(_vm.formErrors, "date", $event)
                  }
                },
                model: {
                  value: _vm.formData.date,
                  callback: function($$v) {
                    _vm.$set(_vm.formData, "date", $$v)
                  },
                  expression: "formData.date"
                }
              },
              [
                _c("date-picker", {
                  staticClass: "form-control datepicker",
                  attrs: { config: _vm.vars.datepickerConfig },
                  model: {
                    value: _vm.formData.date,
                    callback: function($$v) {
                      _vm.$set(_vm.formData, "date", $$v)
                    },
                    expression: "formData.date"
                  }
                })
              ],
              1
            )
          ],
          1
        ),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "col-12 col-md-6 mb-4" },
          [
            _c(
              "base-input",
              {
                attrs: {
                  label: _vm.formLabels.time,
                  "addon-right-icon": "far fa-calendar-alt",
                  type: "text",
                  error: _vm.formErrors.time,
                  "is-wrapper": true
                },
                on: {
                  "update:error": function($event) {
                    return _vm.$set(_vm.formErrors, "time", $event)
                  }
                },
                model: {
                  value: _vm.formData.time,
                  callback: function($$v) {
                    _vm.$set(_vm.formData, "time", $$v)
                  },
                  expression: "formData.time"
                }
              },
              [
                _c("date-picker", {
                  staticClass: "form-control datepicker",
                  attrs: { config: _vm.vars.timepickerConfig },
                  model: {
                    value: _vm.formData.time,
                    callback: function($$v) {
                      _vm.$set(_vm.formData, "time", $$v)
                    },
                    expression: "formData.time"
                  }
                })
              ],
              1
            )
          ],
          1
        ),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "col-12 col-md-12 mb-4" },
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
                _vm._v(
                  _vm._s(
                    _vm.$t("global.save", {
                      attribute: _vm.$t("utility.todo.todo")
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

/***/ "./resources/js/views/app/utility/todo/form.vue":
/*!******************************************************!*\
  !*** ./resources/js/views/app/utility/todo/form.vue ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _form_vue_vue_type_template_id_3ca88e2d___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./form.vue?vue&type=template&id=3ca88e2d& */ "./resources/js/views/app/utility/todo/form.vue?vue&type=template&id=3ca88e2d&");
/* harmony import */ var _form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./form.vue?vue&type=script&lang=js& */ "./resources/js/views/app/utility/todo/form.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _form_vue_vue_type_template_id_3ca88e2d___WEBPACK_IMPORTED_MODULE_0__["render"],
  _form_vue_vue_type_template_id_3ca88e2d___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/app/utility/todo/form.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/app/utility/todo/form.vue?vue&type=script&lang=js&":
/*!*******************************************************************************!*\
  !*** ./resources/js/views/app/utility/todo/form.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./form.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/app/utility/todo/form.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/app/utility/todo/form.vue?vue&type=template&id=3ca88e2d&":
/*!*************************************************************************************!*\
  !*** ./resources/js/views/app/utility/todo/form.vue?vue&type=template&id=3ca88e2d& ***!
  \*************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_form_vue_vue_type_template_id_3ca88e2d___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./form.vue?vue&type=template&id=3ca88e2d& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/app/utility/todo/form.vue?vue&type=template&id=3ca88e2d&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_form_vue_vue_type_template_id_3ca88e2d___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_form_vue_vue_type_template_id_3ca88e2d___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=edit.js.map?id=4316cbaad12c55586093