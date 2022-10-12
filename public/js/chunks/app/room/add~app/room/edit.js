(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app/room/add~app/room/edit"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/app/room/form.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/app/room/form.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _mixins_form__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @mixins/form */ "./resources/js/mixins/form.js");
/* harmony import */ var _views_app_option_modal_form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @views/app/option/modal-form */ "./resources/js/views/app/option/modal-form.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  components: {
    OptionForm: _views_app_option_modal_form__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  data: function data() {
    return {
      formData: {
        uuid: null,
        title: '',
        identifier: '',
        type: null,
        category: null,
        room: true
      },
      preRequisite: {
        types: [],
        categories: []
      },
      formLabels: {
        title: $t('meeting.props.title'),
        type: $t('meeting.props.type'),
        identifier: $t('meeting.props.identifier'),
        category: $t('meeting.meeting_category.category')
      },
      initUrl: 'meetings'
    };
  },
  methods: {
    createSlug: function createSlug() {
      if (this.showKeepAdding && this.formData.title != this.initialFormData.title) {
        this.formData.identifier = this.formData.title.kebabCase();
      } else {
        this.formData.identifier = this.formData.identifier ? this.formData.identifier : this.formData.title.kebabCase();
      }
    }
  },
  mounted: function mounted() {
    this.getInitialData();
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/app/room/form.vue?vue&type=template&id=13ed40ca&":
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/app/room/form.vue?vue&type=template&id=13ed40ca& ***!
  \***********************************************************************************************************************************************************************************************************/
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
          { staticClass: "col-12 col-md-4 mb-3" },
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
                },
                blur: _vm.createSlug
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
          { staticClass: "col-12 col-md-4 mb-3" },
          [
            _c("base-select", {
              attrs: {
                options: _vm.preRequisite.types,
                label: _vm.formLabels.type,
                error: _vm.formErrors.type,
                required: "",
                "allow-empty": false,
                "preselect-first": ""
              },
              on: {
                "update:error": function($event) {
                  return _vm.$set(_vm.formErrors, "type", $event)
                }
              },
              model: {
                value: _vm.formData.type,
                callback: function($$v) {
                  _vm.$set(_vm.formData, "type", $$v)
                },
                expression: "formData.type"
              }
            })
          ],
          1
        ),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "col-12 col-md-4 mb-3" },
          [
            _c("base-select", {
              attrs: {
                options: _vm.preRequisite.categories,
                label: _vm.formLabels.category,
                error: _vm.formErrors.category,
                required: "",
                "allow-empty": false,
                "preselect-first": "",
                "add-new-modal": true,
                "needed-permission": "access-meeting-config"
              },
              on: {
                "update:error": function($event) {
                  return _vm.$set(_vm.formErrors, "category", $event)
                }
              },
              scopedSlots: _vm._u([
                {
                  key: "addNewModal",
                  fn: function() {
                    return [
                      _c("option-form", {
                        attrs: {
                          meta: {
                            optionType: "meeting_category",
                            dataType: "category",
                            dataTypeArr: "categories",
                            entityTitle: "meeting.meeting_category.category"
                          }
                        },
                        on: { close: _vm.newModalClose }
                      })
                    ]
                  },
                  proxy: true
                }
              ]),
              model: {
                value: _vm.formData.category,
                callback: function($$v) {
                  _vm.$set(_vm.formData, "category", $$v)
                },
                expression: "formData.category"
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
            _c("base-input", {
              attrs: {
                label: _vm.formLabels.identifier,
                type: "text",
                error: _vm.formErrors.identifier,
                required: ""
              },
              on: {
                "update:error": function($event) {
                  return _vm.$set(_vm.formErrors, "identifier", $event)
                },
                blur: _vm.createSlug,
                focus: _vm.createSlug
              },
              model: {
                value: _vm.formData.identifier,
                callback: function($$v) {
                  _vm.$set(_vm.formData, "identifier", $$v)
                },
                expression: "formData.identifier"
              }
            })
          ],
          1
        )
      ]),
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
                _vm._v(
                  _vm._s(
                    _vm.$t("global.save", { attribute: _vm.$t("room.room") })
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

/***/ "./resources/js/views/app/room/form.vue":
/*!**********************************************!*\
  !*** ./resources/js/views/app/room/form.vue ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _form_vue_vue_type_template_id_13ed40ca___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./form.vue?vue&type=template&id=13ed40ca& */ "./resources/js/views/app/room/form.vue?vue&type=template&id=13ed40ca&");
/* harmony import */ var _form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./form.vue?vue&type=script&lang=js& */ "./resources/js/views/app/room/form.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _form_vue_vue_type_template_id_13ed40ca___WEBPACK_IMPORTED_MODULE_0__["render"],
  _form_vue_vue_type_template_id_13ed40ca___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/app/room/form.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/app/room/form.vue?vue&type=script&lang=js&":
/*!***********************************************************************!*\
  !*** ./resources/js/views/app/room/form.vue?vue&type=script&lang=js& ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./form.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/app/room/form.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/app/room/form.vue?vue&type=template&id=13ed40ca&":
/*!*****************************************************************************!*\
  !*** ./resources/js/views/app/room/form.vue?vue&type=template&id=13ed40ca& ***!
  \*****************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_form_vue_vue_type_template_id_13ed40ca___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./form.vue?vue&type=template&id=13ed40ca& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/app/room/form.vue?vue&type=template&id=13ed40ca&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_form_vue_vue_type_template_id_13ed40ca___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_form_vue_vue_type_template_id_13ed40ca___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=edit.js.map?id=35eb6244aea6f7a7ca4e