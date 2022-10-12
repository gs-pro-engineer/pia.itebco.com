(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app/meeting/payment"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/app/meeting/payment/index.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/app/meeting/payment/index.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _mixins_view__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @mixins/view */ "./resources/js/mixins/view.js");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      initUrl: 'meetings',
      fallBackRoute: 'appMeetingList',
      hideFilterButton: true
    };
  },
  watch: {
    $route: function $route() {
      if (this.$route.query.hasOwnProperty('reload')) {
        this.isLoading = true;
        this.ResetEntity();
        this.getInitialData();
      }
    }
  },
  methods: _objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_1__["mapActions"])('common', ['ResetEntity', 'SetEntity'])), {}, {
    afterGetInitialData: function afterGetInitialData(res) {
      if (res.status === 'cancelled') {
        this.$toasted.error(this.$t('meeting.meeting_cancelled'), this.$toastConfig.error);
      } else if (res.status === 'ended') {
        this.$toasted.error(this.$t('meeting.meeting_ended'), this.$toastConfig.error);
      }

      if (!(res && (res.status === 'scheduled' || res.status === 'live') && res.isPaid && !res.hasPaid)) {
        this.$router.push({
          name: 'appMeetingView',
          params: {
            uuid: res.uuid
          }
        });
      }

      this.SetEntity(res);
    }
  }),
  mounted: function mounted() {}
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/app/meeting/payment/index.vue?vue&type=template&id=1c23a1d8&":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/app/meeting/payment/index.vue?vue&type=template&id=1c23a1d8& ***!
  \***********************************************************************************************************************************************************************************************************************/
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
  return _c("div", [
    _c("div", { staticClass: "row" }, [
      _c(
        "div",
        { staticClass: "col-12 col-md-4" },
        [
          _c(
            "base-container",
            {
              attrs: {
                boxed: "",
                "with-loader": "",
                "min-height": "full",
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
                      { staticClass: "col-12 mb-3" },
                      [
                        _c("view-single", {
                          attrs: {
                            label: _vm.$t("meeting.props.title"),
                            value: _vm.entity.title,
                            tag: "h5",
                            "data-classes": "font-weight-600"
                          }
                        })
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "col-12 col-lg-6 mb-3" },
                      [
                        _c("view-single", {
                          attrs: { label: _vm.$t("meeting.props.type") },
                          scopedSlots: _vm._u(
                            [
                              {
                                key: "main",
                                fn: function() {
                                  return [
                                    _vm.entity.type
                                      ? _c(
                                          "badge",
                                          {
                                            staticClass: "mb-0",
                                            attrs: { type: "default" }
                                          },
                                          [_vm._v(_vm._s(_vm.entity.type.name))]
                                        )
                                      : _vm._e()
                                  ]
                                },
                                proxy: true
                              }
                            ],
                            null,
                            false,
                            380638162
                          )
                        })
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "col-12 col-lg-6 mb-3" },
                      [
                        _c("view-single", {
                          attrs: {
                            label: _vm.$t("meeting.meeting_category.category")
                          },
                          scopedSlots: _vm._u(
                            [
                              {
                                key: "main",
                                fn: function() {
                                  return [
                                    _vm.entity.category
                                      ? _c(
                                          "badge",
                                          {
                                            staticClass: "mb-0",
                                            attrs: { type: "dark" }
                                          },
                                          [
                                            _vm._v(
                                              _vm._s(_vm.entity.category.name)
                                            )
                                          ]
                                        )
                                      : _vm._e()
                                  ]
                                },
                                proxy: true
                              }
                            ],
                            null,
                            false,
                            52913093
                          )
                        })
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "col-12 col-lg-6 mb-3" },
                      [
                        _c("view-single", {
                          attrs: { label: _vm.$t("meeting.props.status") },
                          scopedSlots: _vm._u(
                            [
                              {
                                key: "main",
                                fn: function() {
                                  return [
                                    _c(
                                      "badge",
                                      {
                                        attrs: {
                                          rounded: "",
                                          type:
                                            _vm.vars.colorsForStatus[
                                              "meeting-" + _vm.entity.status
                                            ]
                                        }
                                      },
                                      [_vm._v(_vm._s(_vm.entity.status))]
                                    )
                                  ]
                                },
                                proxy: true
                              }
                            ],
                            null,
                            false,
                            582220808
                          )
                        })
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "col-12 col-lg-6 mb-3" },
                      [
                        _c("view-single", {
                          attrs: { label: _vm.$t("meeting.props.is_paid") },
                          scopedSlots: _vm._u(
                            [
                              {
                                key: "main",
                                fn: function() {
                                  return [
                                    _vm.entity.isPaid
                                      ? _c(
                                          "badge",
                                          {
                                            attrs: {
                                              rounded: "",
                                              type: "success"
                                            }
                                          },
                                          [
                                            _c("i", {
                                              staticClass: "far fa-check-circle"
                                            }),
                                            _vm._v(
                                              " " +
                                                _vm._s(_vm.$t("general.yes"))
                                            )
                                          ]
                                        )
                                      : _c(
                                          "badge",
                                          {
                                            attrs: { rounded: "", type: "dark" }
                                          },
                                          [
                                            _c("i", {
                                              staticClass: "far fa-circle"
                                            }),
                                            _vm._v(
                                              " " + _vm._s(_vm.$t("general.no"))
                                            )
                                          ]
                                        )
                                  ]
                                },
                                proxy: true
                              }
                            ],
                            null,
                            false,
                            139926035
                          )
                        })
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "col-12 col-lg-6 mb-3" },
                      [
                        _c("view-currency", {
                          attrs: {
                            label: _vm.$t("meeting.props.fee"),
                            value: _vm.entity.fee
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
                            label: _vm.$t("meeting.props.identifier"),
                            value: _vm.entity.identifier
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
                            label: _vm.$t("meeting.props.estimated_period"),
                            value: _vm.entity.period,
                            suffix: _vm.$t("list.general.durations.minutes")
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
                        _c("view-date", {
                          attrs: {
                            label: _vm.$t("meeting.props.start_date_time"),
                            value: _vm.entity.startDateTime,
                            "with-tz": ""
                          }
                        })
                      ],
                      1
                    )
                  ])
                : _vm._e()
            ]
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "col-12 col-md-8" },
        [
          _c(
            "transition-page",
            [_c("router-view", { attrs: { name: "form" } })],
            1
          )
        ],
        1
      )
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/views/app/meeting/payment/index.vue":
/*!**********************************************************!*\
  !*** ./resources/js/views/app/meeting/payment/index.vue ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_vue_vue_type_template_id_1c23a1d8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=1c23a1d8& */ "./resources/js/views/app/meeting/payment/index.vue?vue&type=template&id=1c23a1d8&");
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ "./resources/js/views/app/meeting/payment/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_1c23a1d8___WEBPACK_IMPORTED_MODULE_0__["render"],
  _index_vue_vue_type_template_id_1c23a1d8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/app/meeting/payment/index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/app/meeting/payment/index.vue?vue&type=script&lang=js&":
/*!***********************************************************************************!*\
  !*** ./resources/js/views/app/meeting/payment/index.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/app/meeting/payment/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/app/meeting/payment/index.vue?vue&type=template&id=1c23a1d8&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/views/app/meeting/payment/index.vue?vue&type=template&id=1c23a1d8& ***!
  \*****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_1c23a1d8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=1c23a1d8& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/app/meeting/payment/index.vue?vue&type=template&id=1c23a1d8&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_1c23a1d8___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_1c23a1d8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=payment.js.map?id=35e1585bd4b8679df64d