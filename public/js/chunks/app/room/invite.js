(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app/room/invite"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/app/room/invite.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/app/room/invite.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _mixins_form__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @mixins/form */ "./resources/js/mixins/form.js");
/* harmony import */ var _js_event_bus__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @js/event-bus */ "./resources/js/event-bus.js");
/* harmony import */ var bootstrap_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! bootstrap-vue */ "./node_modules/bootstrap-vue/esm/index.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    BFormTags: bootstrap_vue__WEBPACK_IMPORTED_MODULE_2__["BFormTags"]
  },
  data: function data() {
    return {
      formData: {
        uuid: null,
        segments: [],
        contacts: [],
        emails: [],
        emailsArray: []
      },
      preRequisite: {
        segments: [],
        contacts: [],
        emails: []
      },
      formLabels: {
        segments: $t('contact.segment.segments'),
        contacts: $t('contact.contacts'),
        emails: $t('contact.emails')
      },
      initUrl: 'meetings',
      initSubUrl: 'invitees'
    };
  },
  methods: {
    addEmails: function addEmails(email) {
      var tag = {
        name: email,
        slug: email.toLowerCase()
      };
      var already = this.preRequisite.emails.find(function (e) {
        return e.slug === tag.slug;
      });

      if (already) {
        return;
      }

      this.preRequisite.emails.push(tag);

      if (!this.formData.emailsArray) {
        this.formData.emailsArray = [];
      }

      this.formData.emailsArray.push(tag);
    },
    beforeSubmit: function beforeSubmit() {
      if (this.formData.emailsArray && this.formData.emailsArray.length > 0) {
        this.formData.emails = this.formData.emailsArray.map(function (e) {
          return e.slug;
        });
      }
    }
  },
  mounted: function mounted() {
    this.getInitialData();
  },
  beforeRouteLeave: function beforeRouteLeave(to, from, next) {
    _js_event_bus__WEBPACK_IMPORTED_MODULE_1__["default"].$emit('ROUTE_LEAVING', next);
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/app/room/invite.vue?vue&type=template&id=241743a0&":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/app/room/invite.vue?vue&type=template&id=241743a0& ***!
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
          _c("base-select", {
            staticClass: "mb-3",
            attrs: {
              options: _vm.preRequisite.segments,
              label: _vm.formLabels.segments,
              error: _vm.formErrors.segments,
              multiple: "",
              "close-on-select": false,
              "allow-empty": true
            },
            on: {
              "update:error": function($event) {
                return _vm.$set(_vm.formErrors, "segments", $event)
              }
            },
            model: {
              value: _vm.formData.segments,
              callback: function($$v) {
                _vm.$set(_vm.formData, "segments", $$v)
              },
              expression: "formData.segments"
            }
          }),
          _vm._v(" "),
          _c("base-select", {
            staticClass: "mb-3",
            attrs: {
              options: _vm.preRequisite.contacts,
              label: _vm.formLabels.contacts,
              error: _vm.formErrors.contacts,
              multiple: "",
              "close-on-select": false,
              "allow-empty": true
            },
            on: {
              "update:error": function($event) {
                return _vm.$set(_vm.formErrors, "contacts", $event)
              }
            },
            model: {
              value: _vm.formData.contacts,
              callback: function($$v) {
                _vm.$set(_vm.formData, "contacts", $$v)
              },
              expression: "formData.contacts"
            }
          }),
          _vm._v(" "),
          _c("search-tag", {
            attrs: {
              label: _vm.formLabels.emails,
              options: _vm.preRequisite.emails,
              error: _vm.formErrors.emails,
              "input-classes": "mb-0"
            },
            on: {
              tag: _vm.addEmails,
              "update:error": function($event) {
                return _vm.$set(_vm.formErrors, "emails", $event)
              }
            },
            model: {
              value: _vm.formData.emailsArray,
              callback: function($$v) {
                _vm.$set(_vm.formData, "emailsArray", $$v)
              },
              expression: "formData.emailsArray"
            }
          }),
          _vm._v(" "),
          _c(
            "multiselect-wrapper",
            {
              attrs: {
                label: _vm.formLabels.emails,
                value: _vm.formData.emails,
                error: _vm.formErrors.emails
              },
              on: {
                "update:error": function($event) {
                  return _vm.$set(_vm.formErrors, "emails", $event)
                }
              }
            },
            [
              _c("b-form-tags", {
                staticClass: "input-group-material mb-4",
                attrs: {
                  "input-id": "tags-email",
                  placeholder: _vm.formLabels.emails,
                  "input-type": "email",
                  "tag-variant": "light"
                },
                model: {
                  value: _vm.formData.emails,
                  callback: function($$v) {
                    _vm.$set(_vm.formData, "emails", $$v)
                  },
                  expression: "formData.emails"
                }
              })
            ],
            1
          ),
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
                )
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
                          attribute: _vm.$t("meeting.invitee.invitees")
                        })
                      )
                    )
                  ]
                )
              ],
              1
            )
          ])
        ],
        1
      )
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/views/app/room/invite.vue":
/*!************************************************!*\
  !*** ./resources/js/views/app/room/invite.vue ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _invite_vue_vue_type_template_id_241743a0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./invite.vue?vue&type=template&id=241743a0& */ "./resources/js/views/app/room/invite.vue?vue&type=template&id=241743a0&");
/* harmony import */ var _invite_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./invite.vue?vue&type=script&lang=js& */ "./resources/js/views/app/room/invite.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _invite_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _invite_vue_vue_type_template_id_241743a0___WEBPACK_IMPORTED_MODULE_0__["render"],
  _invite_vue_vue_type_template_id_241743a0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/app/room/invite.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/app/room/invite.vue?vue&type=script&lang=js&":
/*!*************************************************************************!*\
  !*** ./resources/js/views/app/room/invite.vue?vue&type=script&lang=js& ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_invite_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./invite.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/app/room/invite.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_invite_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/app/room/invite.vue?vue&type=template&id=241743a0&":
/*!*******************************************************************************!*\
  !*** ./resources/js/views/app/room/invite.vue?vue&type=template&id=241743a0& ***!
  \*******************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_invite_vue_vue_type_template_id_241743a0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./invite.vue?vue&type=template&id=241743a0& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/app/room/invite.vue?vue&type=template&id=241743a0&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_invite_vue_vue_type_template_id_241743a0___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_invite_vue_vue_type_template_id_241743a0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=invite.js.map?id=19be937d87a89e7619e0