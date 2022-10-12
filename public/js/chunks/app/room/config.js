(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app/room/config"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/app/room/config.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/app/room/config.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _mixins_form__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @mixins/form */ "./resources/js/mixins/form.js");
/* harmony import */ var _js_event_bus__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @js/event-bus */ "./resources/js/event-bus.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
        enableChat: true,
        enableScreenSharing: true,
        enableRecording: true,
        enableHandGesture: true,
        footerAutoHide: false,
        enableFileSharing: true,
        layout: 'fullpage'
      },
      layouts: [{
        uuid: 'grid',
        label: $t('meeting.config.layout_grid')
      }, {
        uuid: 'gallery',
        label: $t('meeting.config.layout_gallery')
      }, {
        uuid: 'fullpage',
        label: $t('meeting.config.layout_fullpage')
      }],
      initUrl: 'meetings',
      initSubUrl: 'config'
    };
  },
  methods: {
    getMeeting: function getMeeting() {
      var _this = this;

      this.isLoading = true;
      this.doInit();
      this.Get(this.subUuid).then(function (response) {
        _this.doInitSub();

        if (response.config) {
          _this.formData.objForEach(function (value, key) {
            _this.formData[key] = response.config.hasOwnProperty(key) ? response.config[key] : _this.formData[key];
          });
        }

        _this.initialFormData = _.cloneDeep(_this.formData);
        _this.isLoading = false;
      })["catch"](function (error) {
        _this.isLoading = false;
        formUtil.handleErrors(error);
      });
    }
  },
  mounted: function mounted() {
    this.getMeeting();
  },
  beforeRouteLeave: function beforeRouteLeave(to, from, next) {
    _js_event_bus__WEBPACK_IMPORTED_MODULE_1__["default"].$emit('ROUTE_LEAVING', next);
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/app/room/config.vue?vue&type=template&id=0e3dd359&":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/app/room/config.vue?vue&type=template&id=0e3dd359& ***!
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
          _c("div", { staticClass: "row" }, [
            _c(
              "div",
              { staticClass: "col-12 col-md-4 mb-3" },
              [
                _c(
                  "switch-wrapper",
                  { attrs: { label: _vm.$t("meeting.config.enable_chat") } },
                  [
                    _c("base-switch", {
                      model: {
                        value: _vm.formData.enableChat,
                        callback: function($$v) {
                          _vm.$set(_vm.formData, "enableChat", $$v)
                        },
                        expression: "formData.enableChat"
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
              { staticClass: "col-12 col-md-4 mb-3" },
              [
                _c(
                  "switch-wrapper",
                  {
                    attrs: {
                      label: _vm.$t("meeting.config.enable_screen_sharing")
                    }
                  },
                  [
                    _c("base-switch", {
                      model: {
                        value: _vm.formData.enableScreenSharing,
                        callback: function($$v) {
                          _vm.$set(_vm.formData, "enableScreenSharing", $$v)
                        },
                        expression: "formData.enableScreenSharing"
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
              { staticClass: "col-12 col-md-4 mb-3" },
              [
                _c(
                  "switch-wrapper",
                  {
                    attrs: { label: _vm.$t("meeting.config.enable_recording") }
                  },
                  [
                    _c("base-switch", {
                      model: {
                        value: _vm.formData.enableRecording,
                        callback: function($$v) {
                          _vm.$set(_vm.formData, "enableRecording", $$v)
                        },
                        expression: "formData.enableRecording"
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
              { staticClass: "col-12 col-md-4 mb-3" },
              [
                _c(
                  "switch-wrapper",
                  {
                    attrs: {
                      label: _vm.$t("meeting.config.enable_hand_gesture")
                    }
                  },
                  [
                    _c("base-switch", {
                      model: {
                        value: _vm.formData.enableHandGesture,
                        callback: function($$v) {
                          _vm.$set(_vm.formData, "enableHandGesture", $$v)
                        },
                        expression: "formData.enableHandGesture"
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
              { staticClass: "col-12 col-md-4 mb-3" },
              [
                _c(
                  "switch-wrapper",
                  {
                    attrs: {
                      label: _vm.$t("meeting.config.enable_file_sharing")
                    }
                  },
                  [
                    _c("base-switch", {
                      model: {
                        value: _vm.formData.enableFileSharing,
                        callback: function($$v) {
                          _vm.$set(_vm.formData, "enableFileSharing", $$v)
                        },
                        expression: "formData.enableFileSharing"
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
              { staticClass: "col-12 col-md-4 mb-3" },
              [
                _c(
                  "switch-wrapper",
                  {
                    attrs: { label: _vm.$t("meeting.config.footer_auto_hide") }
                  },
                  [
                    _c("base-switch", {
                      model: {
                        value: _vm.formData.footerAutoHide,
                        callback: function($$v) {
                          _vm.$set(_vm.formData, "footerAutoHide", $$v)
                        },
                        expression: "formData.footerAutoHide"
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
              { staticClass: "col-12 col-md-4" },
              [
                _c("base-select", {
                  attrs: {
                    options: _vm.layouts,
                    label: _vm.$t("meeting.config.layout"),
                    "allow-empty": false,
                    "preselect-first": "",
                    simple: "",
                    "track-by": "uuid",
                    "show-by": "label"
                  },
                  model: {
                    value: _vm.formData.layout,
                    callback: function($$v) {
                      _vm.$set(_vm.formData, "layout", $$v)
                    },
                    expression: "formData.layout"
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
                          attribute: _vm.$t("config.config")
                        })
                      )
                    )
                  ]
                )
              ],
              1
            )
          ])
        ]
      )
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/views/app/room/config.vue":
/*!************************************************!*\
  !*** ./resources/js/views/app/room/config.vue ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _config_vue_vue_type_template_id_0e3dd359___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./config.vue?vue&type=template&id=0e3dd359& */ "./resources/js/views/app/room/config.vue?vue&type=template&id=0e3dd359&");
/* harmony import */ var _config_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./config.vue?vue&type=script&lang=js& */ "./resources/js/views/app/room/config.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _config_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _config_vue_vue_type_template_id_0e3dd359___WEBPACK_IMPORTED_MODULE_0__["render"],
  _config_vue_vue_type_template_id_0e3dd359___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/app/room/config.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/app/room/config.vue?vue&type=script&lang=js&":
/*!*************************************************************************!*\
  !*** ./resources/js/views/app/room/config.vue?vue&type=script&lang=js& ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_config_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./config.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/app/room/config.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_config_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/app/room/config.vue?vue&type=template&id=0e3dd359&":
/*!*******************************************************************************!*\
  !*** ./resources/js/views/app/room/config.vue?vue&type=template&id=0e3dd359& ***!
  \*******************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_config_vue_vue_type_template_id_0e3dd359___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./config.vue?vue&type=template&id=0e3dd359& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/app/room/config.vue?vue&type=template&id=0e3dd359&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_config_vue_vue_type_template_id_0e3dd359___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_config_vue_vue_type_template_id_0e3dd359___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=config.js.map?id=b41ffbb29749123f6653