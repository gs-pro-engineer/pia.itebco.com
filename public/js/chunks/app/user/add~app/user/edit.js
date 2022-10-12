(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app/user/add~app/user/edit"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/app/user/form.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/app/user/form.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************/
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
        username: "",
        email: "",
        profile: {
          name: "",
          gender: null,
          language: null,
          birthDate: null
        },
        password: "",
        passwordConfirmation: "",
        forcePassword: false,
        role: null
      },
      formErrors: {},
      preRequisite: {
        genders: [],
        languages: [],
        roles: []
      },
      formLabels: {
        name: $t("user.props.name"),
        email: $t("user.props.email"),
        gender: $t("user.props.gender"),
        language: $t("user.props.language"),
        role: $t("config.role.role"),
        birthDate: $t("user.props.birth_date"),
        username: $t("user.props.username"),
        password: $t("user.props.password"),
        passwordConfirmation: $t("user.props.password_confirmation")
      },
      initUrl: "users"
    };
  },
  mounted: function mounted() {
    this.getInitialData();
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/app/user/form.vue?vue&type=template&id=564d7aaa&":
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/app/user/form.vue?vue&type=template&id=564d7aaa& ***!
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
      _c(
        "div",
        { staticClass: "row" },
        [
          _c(
            "div",
            { staticClass: "col-12 col-md-6 mb-3" },
            [
              _c("base-input", {
                attrs: {
                  "auto-focus": "",
                  label: _vm.formLabels.name,
                  type: "text",
                  error: _vm.formErrors.profileName,
                  required: "",
                  format: "startCase"
                },
                on: {
                  "update:error": function($event) {
                    return _vm.$set(_vm.formErrors, "profileName", $event)
                  }
                },
                model: {
                  value: _vm.formData.profile.name,
                  callback: function($$v) {
                    _vm.$set(_vm.formData.profile, "name", $$v)
                  },
                  expression: "formData.profile.name"
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
              _c("base-select", {
                attrs: {
                  options: _vm.preRequisite.roles,
                  label: _vm.formLabels.role,
                  error: _vm.formErrors.role,
                  required: "",
                  "preselect-first": ""
                },
                on: {
                  "update:error": function($event) {
                    return _vm.$set(_vm.formErrors, "role", $event)
                  }
                },
                model: {
                  value: _vm.formData.role,
                  callback: function($$v) {
                    _vm.$set(_vm.formData, "role", $$v)
                  },
                  expression: "formData.role"
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
              _c("base-input", {
                attrs: {
                  label: _vm.formLabels.email,
                  type: "text",
                  error: _vm.formErrors.email,
                  required: "",
                  format: "lowercase"
                },
                on: {
                  "update:error": function($event) {
                    return _vm.$set(_vm.formErrors, "email", $event)
                  }
                },
                model: {
                  value: _vm.formData.email,
                  callback: function($$v) {
                    _vm.$set(_vm.formData, "email", $$v)
                  },
                  expression: "formData.email"
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
              _c("base-input", {
                attrs: {
                  label: _vm.formLabels.username,
                  type: "text",
                  error: _vm.formErrors.username,
                  required: ""
                },
                on: {
                  "update:error": function($event) {
                    return _vm.$set(_vm.formErrors, "username", $event)
                  }
                },
                model: {
                  value: _vm.formData.username,
                  callback: function($$v) {
                    _vm.$set(_vm.formData, "username", $$v)
                  },
                  expression: "formData.username"
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
              _c("base-select", {
                attrs: {
                  options: _vm.preRequisite.genders,
                  label: _vm.formLabels.gender,
                  error: _vm.formErrors.profileGender,
                  required: "",
                  "preselect-first": ""
                },
                on: {
                  "update:error": function($event) {
                    return _vm.$set(_vm.formErrors, "profileGender", $event)
                  }
                },
                model: {
                  value: _vm.formData.profile.gender,
                  callback: function($$v) {
                    _vm.$set(_vm.formData.profile, "gender", $$v)
                  },
                  expression: "formData.profile.gender"
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
              _c(
                "base-input",
                {
                  attrs: {
                    label: _vm.formLabels.birthDate,
                    "addon-right-icon": "far fa-calendar-alt",
                    type: "text",
                    error: _vm.formErrors.profileBirthDate,
                    "is-wrapper": true
                  },
                  on: {
                    "update:error": function($event) {
                      return _vm.$set(
                        _vm.formErrors,
                        "profileBirthDate",
                        $event
                      )
                    }
                  },
                  model: {
                    value: _vm.formData.profile.birthDate,
                    callback: function($$v) {
                      _vm.$set(_vm.formData.profile, "birthDate", $$v)
                    },
                    expression: "formData.profile.birthDate"
                  }
                },
                [
                  _c("date-picker", {
                    staticClass: "form-control datepicker",
                    attrs: { config: _vm.vars.datepickerConfig },
                    model: {
                      value: _vm.formData.profile.birthDate,
                      callback: function($$v) {
                        _vm.$set(_vm.formData.profile, "birthDate", $$v)
                      },
                      expression: "formData.profile.birthDate"
                    }
                  })
                ],
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _vm.editData
            ? [
                _c(
                  "div",
                  { staticClass: "col-12 mt-4 mb-3" },
                  [
                    _c(
                      "base-checkbox",
                      {
                        staticClass: "ml-3 mt-2",
                        model: {
                          value: _vm.formData.forcePassword,
                          callback: function($$v) {
                            _vm.$set(_vm.formData, "forcePassword", $$v)
                          },
                          expression: "formData.forcePassword"
                        }
                      },
                      [
                        _vm._v(
                          "\n          " +
                            _vm._s(_vm.$t("user.force_password")) +
                            "\n        "
                        )
                      ]
                    )
                  ],
                  1
                )
              ]
            : _vm._e(),
          _vm._v(" "),
          !_vm.editData || _vm.formData.forcePassword
            ? [
                _c(
                  "div",
                  { staticClass: "col-12 col-md-6 mb-3" },
                  [
                    _c("base-input", {
                      attrs: {
                        label: _vm.formLabels.password,
                        type: "password",
                        error: _vm.formErrors.password,
                        required: ""
                      },
                      on: {
                        "update:error": function($event) {
                          return _vm.$set(_vm.formErrors, "password", $event)
                        }
                      },
                      model: {
                        value: _vm.formData.password,
                        callback: function($$v) {
                          _vm.$set(_vm.formData, "password", $$v)
                        },
                        expression: "formData.password"
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
                    _c("base-input", {
                      attrs: {
                        label: _vm.formLabels.passwordConfirmation,
                        type: "password",
                        error: _vm.formErrors.passwordConfirmation,
                        required: ""
                      },
                      on: {
                        "update:error": function($event) {
                          return _vm.$set(
                            _vm.formErrors,
                            "passwordConfirmation",
                            $event
                          )
                        }
                      },
                      model: {
                        value: _vm.formData.passwordConfirmation,
                        callback: function($$v) {
                          _vm.$set(_vm.formData, "passwordConfirmation", $$v)
                        },
                        expression: "formData.passwordConfirmation"
                      }
                    })
                  ],
                  1
                )
              ]
            : _vm._e(),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "col-12 col-md-6 mb-3" },
            [
              _c("base-select", {
                attrs: {
                  options: _vm.preRequisite.languages,
                  label: _vm.formLabels.language,
                  error: _vm.formErrors.profileLanguage,
                  required: ""
                },
                on: {
                  "update:error": function($event) {
                    return _vm.$set(_vm.formErrors, "profileLanguage", $event)
                  }
                },
                model: {
                  value: _vm.formData.profile.language,
                  callback: function($$v) {
                    _vm.$set(_vm.formData.profile, "language", $$v)
                  },
                  expression: "formData.profile.language"
                }
              })
            ],
            1
          )
        ],
        2
      ),
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
                _vm._v("\n        " + _vm._s(_vm.$t("general.cancel")))
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
                      "\n        " +
                        _vm._s(_vm.$t("general.keep_adding")) +
                        "\n      "
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
                  "\n        " +
                    _vm._s(
                      _vm.$t("global.save", { attribute: _vm.$t("user.user") })
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

/***/ "./resources/js/views/app/user/form.vue":
/*!**********************************************!*\
  !*** ./resources/js/views/app/user/form.vue ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _form_vue_vue_type_template_id_564d7aaa___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./form.vue?vue&type=template&id=564d7aaa& */ "./resources/js/views/app/user/form.vue?vue&type=template&id=564d7aaa&");
/* harmony import */ var _form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./form.vue?vue&type=script&lang=js& */ "./resources/js/views/app/user/form.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _form_vue_vue_type_template_id_564d7aaa___WEBPACK_IMPORTED_MODULE_0__["render"],
  _form_vue_vue_type_template_id_564d7aaa___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/app/user/form.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/app/user/form.vue?vue&type=script&lang=js&":
/*!***********************************************************************!*\
  !*** ./resources/js/views/app/user/form.vue?vue&type=script&lang=js& ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./form.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/app/user/form.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/app/user/form.vue?vue&type=template&id=564d7aaa&":
/*!*****************************************************************************!*\
  !*** ./resources/js/views/app/user/form.vue?vue&type=template&id=564d7aaa& ***!
  \*****************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_form_vue_vue_type_template_id_564d7aaa___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./form.vue?vue&type=template&id=564d7aaa& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/app/user/form.vue?vue&type=template&id=564d7aaa&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_form_vue_vue_type_template_id_564d7aaa___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_form_vue_vue_type_template_id_564d7aaa___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=edit.js.map?id=82bf71855a9ed221aaa5