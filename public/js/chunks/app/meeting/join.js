(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app/meeting/join"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/app/meeting/join.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/app/meeting/join.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _mixins_form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @mixins/form */ "./resources/js/mixins/form.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  "extends": _mixins_form__WEBPACK_IMPORTED_MODULE_1__["default"],
  data: function data() {
    return {
      formData: {
        identifier: ''
      },
      initUrl: 'meetings'
    };
  },
  methods: _objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapActions"])('config', ['SetUiConfig'])), {}, {
    submit: function submit() {
      var _this = this;

      if (formUtil.isUnchanged(this.initialFormData, this.formData)) {
        this.$toasted.info(this.$t('general.nothing_changed'), this.$toastConfig.info);
        return false;
      }

      this.isLoading = true;
      this.Custom({
        url: "/meetings/m/".concat(this.formData.identifier),
        method: 'get'
      }).then(function (response) {
        if (response.uuid) {
          _this.$router.push({
            name: 'liveMeeting',
            params: {
              uuid: response.uuid
            }
          });
        }
      })["catch"](function (error) {
        _this.isLoading = false;
        _this.formErrors = formUtil.handleErrors(error);
      });
    }
  }),
  mounted: function mounted() {
    var _this2 = this;

    this.isLoading = false;
    this.$nextTick(function () {
      _this2.SetUiConfig({
        pageHeaderShow: false
      });
    });
  },
  destroyed: function destroyed() {
    this.SetUiConfig({
      pageHeaderShow: true
    });
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/app/meeting/join.vue?vue&type=template&id=6aa5a8ab&":
/*!**************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/app/meeting/join.vue?vue&type=template&id=6aa5a8ab& ***!
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
    { staticClass: "mt-element", attrs: { boxed: "" } },
    [
      _vm.isLoading
        ? [
            _c(
              "div",
              { staticClass: "pt-150 pb-150 text-center" },
              [
                _c("animated-loader", {
                  attrs: {
                    "is-loading": _vm.isLoading,
                    "loader-color": _vm.vars.loaderColor,
                    size: "inline",
                    "with-overlay": false
                  }
                }),
                _vm._v(" "),
                _c("br"),
                _vm._v(" "),
                _c("br"),
                _vm._v(" "),
                _c("h5", [_vm._v(_vm._s(_vm.$t("meeting.joining_a_meeting")))])
              ],
              1
            )
          ]
        : [
            _c("div", { staticClass: "row pt-15 pb-15" }, [
              _c("div", { staticClass: "col-12 col-md-5 pt-50 pb-50" }, [
                _c("h1", { staticClass: "text-left" }, [
                  _vm._v(_vm._s(_vm.$t("meeting.join_a_meeting")))
                ]),
                _vm._v(" "),
                _c("p", { staticClass: "text-muted" }, [
                  _vm._v(_vm._s(_vm.$t("meeting.join_a_meeting_desc")))
                ]),
                _vm._v(" "),
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
                    _c("base-input", {
                      attrs: {
                        "auto-focus": "",
                        label: _vm.$t("meeting.enter_meeting_code"),
                        type: "text",
                        error: _vm.formErrors.identifier,
                        required: ""
                      },
                      on: {
                        "update:error": function($event) {
                          return _vm.$set(_vm.formErrors, "identifier", $event)
                        }
                      },
                      model: {
                        value: _vm.formData.identifier,
                        callback: function($$v) {
                          _vm.$set(_vm.formData, "identifier", $$v)
                        },
                        expression: "formData.identifier"
                      }
                    }),
                    _vm._v(" "),
                    _c("div", { staticClass: "form-footer mt-5" }, [
                      _vm.hasPermission("create-meeting")
                        ? _c(
                            "div",
                            { staticClass: "left-side" },
                            [
                              _c(
                                "base-button",
                                {
                                  attrs: { type: "button", design: "light" },
                                  on: {
                                    click: function($event) {
                                      return _vm.$router.push({
                                        name: "appInstantMeetingStart"
                                      })
                                    }
                                  }
                                },
                                [_vm._v(_vm._s(_vm.$t("meeting.new_meeting")))]
                              )
                            ],
                            1
                          )
                        : _vm._e(),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "right-side" },
                        [
                          _c(
                            "base-button",
                            { attrs: { type: "submit", design: "primary" } },
                            [_vm._v(_vm._s(_vm.$t("meeting.join")))]
                          )
                        ],
                        1
                      )
                    ])
                  ],
                  1
                )
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "col-12 col-md-6 offset-md-1" }, [
                _c("img", {
                  staticClass: "img-fluid img-thumbnail",
                  attrs: { src: "/images/DemoScreenshot.png" }
                })
              ])
            ])
          ]
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/views/app/meeting/join.vue":
/*!*************************************************!*\
  !*** ./resources/js/views/app/meeting/join.vue ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _join_vue_vue_type_template_id_6aa5a8ab___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./join.vue?vue&type=template&id=6aa5a8ab& */ "./resources/js/views/app/meeting/join.vue?vue&type=template&id=6aa5a8ab&");
/* harmony import */ var _join_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./join.vue?vue&type=script&lang=js& */ "./resources/js/views/app/meeting/join.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _join_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _join_vue_vue_type_template_id_6aa5a8ab___WEBPACK_IMPORTED_MODULE_0__["render"],
  _join_vue_vue_type_template_id_6aa5a8ab___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/app/meeting/join.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/app/meeting/join.vue?vue&type=script&lang=js&":
/*!**************************************************************************!*\
  !*** ./resources/js/views/app/meeting/join.vue?vue&type=script&lang=js& ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_join_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./join.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/app/meeting/join.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_join_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/app/meeting/join.vue?vue&type=template&id=6aa5a8ab&":
/*!********************************************************************************!*\
  !*** ./resources/js/views/app/meeting/join.vue?vue&type=template&id=6aa5a8ab& ***!
  \********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_join_vue_vue_type_template_id_6aa5a8ab___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./join.vue?vue&type=template&id=6aa5a8ab& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/app/meeting/join.vue?vue&type=template&id=6aa5a8ab&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_join_vue_vue_type_template_id_6aa5a8ab___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_join_vue_vue_type_template_id_6aa5a8ab___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=join.js.map?id=1bc3348651f153ad1ebe