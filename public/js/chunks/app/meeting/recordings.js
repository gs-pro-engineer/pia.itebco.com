(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app/meeting/recordings"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/app/meeting/recordings.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/app/meeting/recordings.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************/
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


/* harmony default export */ __webpack_exports__["default"] = ({
  "extends": _mixins_view__WEBPACK_IMPORTED_MODULE_0__["default"],
  data: function data() {
    return {
      currentMedia: null,
      initUrl: 'meetings',
      recordings: [],
      fallBackRoute: 'appMeetingList'
    };
  },
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_1__["mapGetters"])('config', ['vars'])),
  methods: _objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_1__["mapActions"])('common', ['Custom'])), {}, {
    getData: function getData() {
      var _this = this;

      this.isLoading = true;
      this.Custom({
        url: "/".concat(this.initUrl, "/").concat(this.uuid, "/recordings"),
        method: 'get'
      }).then(function (response) {
        _this.recordings = response;
        _this.isLoading = false;
      })["catch"](function (error) {
        _this.isLoading = false;
        formUtil.handleErrors(error);
      });
    },
    deleteRecording: function deleteRecording(recording) {
      var _this2 = this;

      formUtil.confirmAction().then(function (result) {
        if (result.value) {
          _this2.isLoading = true;

          _this2.Custom({
            url: "/".concat(_this2.initUrl, "/").concat(_this2.uuid, "/recordings/").concat(recording.uuid),
            method: 'delete'
          }).then(function (response) {
            _this2.isLoading = false;

            _this2.$toasted.success(response.message, _this2.$toastConfig);

            _this2.getData();
          })["catch"](function (error) {
            _this2.isLoading = false;
            formUtil.handleErrors(error);
          });
        } else {
          result.dismiss === Swal.DismissReason.cancel;
        }
      });
    },
    playRecording: function playRecording(recording) {
      var _this3 = this;

      this.isLoading = true;
      this.currentMedia = null;
      setTimeout(function () {
        _this3.currentMedia = recording;
        _this3.isLoading = false;
      }, 1000);
    },
    closePlayer: function closePlayer() {
      this.currentMedia = null;
    }
  }),
  mounted: function mounted() {
    this.getData();
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/app/meeting/recordings.vue?vue&type=template&id=52f2853a&":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/app/meeting/recordings.vue?vue&type=template&id=52f2853a& ***!
  \********************************************************************************************************************************************************************************************************************/
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
    "div",
    [
      _vm.entity && _vm.currentMedia
        ? _c(
            "base-container",
            {
              staticClass:
                "p-0 mb-element d-flex justify-content-stretch align-items-stretch max-height-500px",
              attrs: {
                boxed: "",
                "with-loader": "",
                "is-loading": _vm.isLoading,
                "loader-color": _vm.vars.loaderColor
              }
            },
            [
              _c("close-button", {
                staticClass: "text-white",
                attrs: { title: _vm.$t("general.close") },
                on: { click: _vm.closePlayer }
              }),
              _vm._v(" "),
              _c(
                "video",
                {
                  staticClass: "flex-grow bg-black",
                  attrs: { autoplay: "", controls: "" }
                },
                [
                  _c("source", {
                    attrs: { src: _vm.currentMedia.fullUrl, type: "video/webm" }
                  })
                ]
              )
            ],
            1
          )
        : _vm._e(),
      _vm._v(" "),
      _c(
        "base-container",
        {
          attrs: {
            boxed: "",
            "with-loader": "",
            "has-footer": "",
            "min-height": "full",
            "is-loading": _vm.isLoading,
            "loader-color": _vm.vars.loaderColor,
            id: "printable"
          }
        },
        [
          _vm.entity
            ? [
                _vm.recordings && _vm.recordings.length
                  ? _c(
                      "div",
                      { staticClass: "row" },
                      _vm._l(_vm.recordings, function(recording) {
                        return _c(
                          "div",
                          {
                            key: recording.uuid,
                            staticClass:
                              "col-12 col-md-4 col-lg-3 mb-3 text-center"
                          },
                          [
                            _c(
                              "a",
                              {
                                class: [
                                  "d-flex flex-column min-height-150px justify-content-center align-items-center border border-gray mb-2 pointer",
                                  {
                                    "bg-gray":
                                      _vm.currentMedia &&
                                      recording.uuid === _vm.currentMedia.uuid
                                  }
                                ],
                                on: {
                                  click: function($event) {
                                    return _vm.playRecording(recording)
                                  }
                                }
                              },
                              [
                                _c("i", {
                                  staticClass: "fas fa-play fs-2 text-muted"
                                }),
                                _vm._v(" "),
                                _c(
                                  "div",
                                  { staticClass: "text-word-break-all mt-3" },
                                  [_vm._v(_vm._s(recording.name))]
                                )
                              ]
                            ),
                            _vm._v(" "),
                            _c(
                              "div",
                              { staticClass: "d-flex justify-content-stretch" },
                              [
                                _c(
                                  "a",
                                  {
                                    staticClass:
                                      "btn btn-light btn-sm flex-grow",
                                    attrs: {
                                      href: recording.fullUrl,
                                      target: "_blank"
                                    }
                                  },
                                  [
                                    _c("i", { staticClass: "fas fa-download" }),
                                    _vm._v(
                                      " " + _vm._s(_vm.$t("general.download"))
                                    )
                                  ]
                                ),
                                _vm._v(" "),
                                _c(
                                  "base-button",
                                  {
                                    staticClass: "flex-grow",
                                    attrs: {
                                      type: "button",
                                      design: "light",
                                      size: "sm"
                                    },
                                    on: {
                                      click: function($event) {
                                        return _vm.deleteRecording(recording)
                                      }
                                    }
                                  },
                                  [
                                    _c("i", { staticClass: "fas fa-trash" }),
                                    _vm._v(
                                      " " + _vm._s(_vm.$t("general.delete"))
                                    )
                                  ]
                                )
                              ],
                              1
                            )
                          ]
                        )
                      }),
                      0
                    )
                  : _c("div", { staticClass: "text-center my-5" }, [
                      _c("h3", { staticClass: "text-muted mb-3" }, [
                        _vm._v(
                          _vm._s(
                            _vm.$t("global.could_not_find_any", {
                              attribute: _vm.$t("meeting.recordings")
                            })
                          )
                        )
                      ])
                    ])
              ]
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
                    _vm._v(" " + _vm._s(_vm.$t("general.back")))
                  ]
                )
              ],
              1
            )
          ])
        ],
        2
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/views/app/meeting/recordings.vue":
/*!*******************************************************!*\
  !*** ./resources/js/views/app/meeting/recordings.vue ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _recordings_vue_vue_type_template_id_52f2853a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./recordings.vue?vue&type=template&id=52f2853a& */ "./resources/js/views/app/meeting/recordings.vue?vue&type=template&id=52f2853a&");
/* harmony import */ var _recordings_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./recordings.vue?vue&type=script&lang=js& */ "./resources/js/views/app/meeting/recordings.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _recordings_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _recordings_vue_vue_type_template_id_52f2853a___WEBPACK_IMPORTED_MODULE_0__["render"],
  _recordings_vue_vue_type_template_id_52f2853a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/app/meeting/recordings.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/app/meeting/recordings.vue?vue&type=script&lang=js&":
/*!********************************************************************************!*\
  !*** ./resources/js/views/app/meeting/recordings.vue?vue&type=script&lang=js& ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_recordings_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./recordings.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/app/meeting/recordings.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_recordings_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/app/meeting/recordings.vue?vue&type=template&id=52f2853a&":
/*!**************************************************************************************!*\
  !*** ./resources/js/views/app/meeting/recordings.vue?vue&type=template&id=52f2853a& ***!
  \**************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_recordings_vue_vue_type_template_id_52f2853a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./recordings.vue?vue&type=template&id=52f2853a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/app/meeting/recordings.vue?vue&type=template&id=52f2853a&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_recordings_vue_vue_type_template_id_52f2853a___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_recordings_vue_vue_type_template_id_52f2853a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=recordings.js.map?id=ec379b4f0ef1e254ae9b