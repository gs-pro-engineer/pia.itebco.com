(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app/contact/import"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/app/contact/import.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/app/contact/import.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _js_event_bus__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @js/event-bus */ "./resources/js/event-bus.js");
/* harmony import */ var _components_FileUploader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @components/FileUploader */ "./resources/js/components/FileUploader.vue");
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



/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    FileUploader: _components_FileUploader__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  data: function data() {
    return {
      formData: {
        uuid: null,
        columns: [],
        updated: false,
        uploaded: false
      },
      formErrors: {},
      preRequisite: {
        items: [],
        options: []
      },
      uploaderConfig: {
        allowedExtensions: ["csv"],
        maxNoOfFiles: 1
      },
      initialFormData: null,
      isLoading: false
    };
  },
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])("config", ["vars"])),
  methods: _objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapActions"])("common", ["Store", "Init"])), {}, {
    submit: function submit() {
      var _this = this;

      if (formUtil.isUnchanged(this.initialFormData, this.formData)) {
        this.$toasted.info(this.$t("general.nothing_changed"), this.$toastConfig.info);
        return false;
      }

      formUtil.confirmAction().then(function (result) {
        if (result.value) {
          _this.isLoading = true;

          _this.Store(_this.formData).then(function (response) {
            _this.$toasted.success(response.message, _this.$toastConfig);

            _this.clear();

            _this.isLoading = false;
          })["catch"](function (error) {
            _this.isLoading = false;
            _this.formErrors = formUtil.handleErrors(error);
          });
        }
      });
    },
    unsavedCheck: function unsavedCheck(next) {
      formUtil.unsavedCheckAlert(this.initialFormData, this.formData, next);
    },
    clear: function clear() {
      this.formData.uuid = null;
      this.preRequisite.items = [];
      this.preRequisite.options = [];
      this.formData.columns = [];
      this.formData.uploaded = false;
      this.formData.updated = false;
    },
    handleFileUpload: function handleFileUpload(response) {
      console.log("Contact Import CSV File response==========", response);

      if (response.uuid) {
        this.formData.uuid = response.uuid;
        this.preRequisite.items = response.items;
        this.preRequisite.options = response.options;
        var itemsObj = response.items[0];
        var items = Array.from(Object.keys(itemsObj), function (k) {
          return itemsObj[k];
        });
        this.formData.columns = items.map(function (val, index) {
          return {
            selected: response.options[index]
          };
        });
        this.formData.uploaded = true;
        this.formData.updated = true;
      }
    }
  }),
  mounted: function mounted() {
    _js_event_bus__WEBPACK_IMPORTED_MODULE_1__["default"].$off("ROUTE_LEAVING", this.unsavedCheck);
    _js_event_bus__WEBPACK_IMPORTED_MODULE_1__["default"].$on("ROUTE_LEAVING", this.unsavedCheck);
    this.Init({
      url: "contacts/import/finish"
    });
  },
  destroyed: function destroyed() {
    _js_event_bus__WEBPACK_IMPORTED_MODULE_1__["default"].$off("ROUTE_LEAVING", this.unsavedCheck);
  },
  beforeRouteLeave: function beforeRouteLeave(to, from, next) {
    _js_event_bus__WEBPACK_IMPORTED_MODULE_1__["default"].$emit("ROUTE_LEAVING", next);
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/app/contact/import.vue?vue&type=template&id=376e2861&":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/app/contact/import.vue?vue&type=template&id=376e2861& ***!
  \****************************************************************************************************************************************************************************************************************/
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
        "loader-color": _vm.vars.loaderColor
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
          !_vm.formData.uploaded
            ? _c(
                "div",
                { staticClass: "py-5" },
                [
                  _c("file-uploader", {
                    attrs: {
                      "name-label": "upload.file",
                      options: _vm.uploaderConfig,
                      multiple: false,
                      url: "/contacts/import/start",
                      "button-classes": "justify-content-center"
                    },
                    on: { updated: _vm.handleFileUpload }
                  })
                ],
                1
              )
            : _c("div", { staticClass: "mt-3" }, [
                _c("h5", { staticClass: "pb-4" }, [
                  _vm._v(_vm._s(_vm.$t("general.choose_columns")))
                ]),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "row" },
                  _vm._l(_vm.formData.columns, function(column, index) {
                    return _c(
                      "div",
                      { staticClass: "col-12 col-md-3 mb-5" },
                      [
                        _c("base-select", {
                          attrs: {
                            options: _vm.preRequisite.options,
                            label: _vm.$t("general.column", {
                              number: index + 1
                            }),
                            error: _vm.formErrors["column" + index],
                            "allow-empty": false,
                            disabled: _vm.isLoading
                          },
                          on: {
                            "update:error": function($event) {
                              return _vm.$set(
                                _vm.formErrors,
                                "column" + index,
                                $event
                              )
                            }
                          },
                          model: {
                            value: column.selected,
                            callback: function($$v) {
                              _vm.$set(column, "selected", $$v)
                            },
                            expression: "column.selected"
                          }
                        }),
                        _vm._v(" "),
                        _c(
                          "h6",
                          {
                            staticClass:
                              "small text-muted px-2 font-weight-bold"
                          },
                          [
                            _vm._v(
                              "\n            " +
                                _vm._s(_vm.$t("general.sample")) +
                                ":\n\n            "
                            ),
                            _c(
                              "span",
                              { staticClass: "text-muted px-2 comma-list" },
                              [
                                _vm._l(_vm.preRequisite.items, function(item) {
                                  return [
                                    item[index]
                                      ? _c("span", [
                                          _vm._v(_vm._s(item[index]))
                                        ])
                                      : _vm._e()
                                  ]
                                })
                              ],
                              2
                            )
                          ]
                        )
                      ],
                      1
                    )
                  }),
                  0
                ),
                _vm._v(" "),
                _c("div", { staticClass: "form-footer" }, [
                  _c(
                    "div",
                    { staticClass: "right-side" },
                    [
                      _c(
                        "base-button",
                        { attrs: { type: "submit", design: "primary" } },
                        [
                          _vm._v(
                            _vm._s(
                              _vm.$t("global.import", {
                                attribute: _vm.$t("contact.contacts")
                              })
                            )
                          )
                        ]
                      )
                    ],
                    1
                  )
                ])
              ])
        ]
      )
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/views/app/contact/import.vue":
/*!***************************************************!*\
  !*** ./resources/js/views/app/contact/import.vue ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _import_vue_vue_type_template_id_376e2861___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./import.vue?vue&type=template&id=376e2861& */ "./resources/js/views/app/contact/import.vue?vue&type=template&id=376e2861&");
/* harmony import */ var _import_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./import.vue?vue&type=script&lang=js& */ "./resources/js/views/app/contact/import.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _import_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _import_vue_vue_type_template_id_376e2861___WEBPACK_IMPORTED_MODULE_0__["render"],
  _import_vue_vue_type_template_id_376e2861___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/app/contact/import.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/app/contact/import.vue?vue&type=script&lang=js&":
/*!****************************************************************************!*\
  !*** ./resources/js/views/app/contact/import.vue?vue&type=script&lang=js& ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_import_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./import.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/app/contact/import.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_import_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/app/contact/import.vue?vue&type=template&id=376e2861&":
/*!**********************************************************************************!*\
  !*** ./resources/js/views/app/contact/import.vue?vue&type=template&id=376e2861& ***!
  \**********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_import_vue_vue_type_template_id_376e2861___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./import.vue?vue&type=template&id=376e2861& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/app/contact/import.vue?vue&type=template&id=376e2861&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_import_vue_vue_type_template_id_376e2861___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_import_vue_vue_type_template_id_376e2861___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=import.js.map?id=a4f9fc72a21edb26ec48