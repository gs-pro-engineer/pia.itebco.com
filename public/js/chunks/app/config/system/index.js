(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app/config/system/index"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/app/config/system/index.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/app/config/system/index.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _mixins_config_form__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @mixins/config-form */ "./resources/js/mixins/config-form.js");
/* harmony import */ var vue2_transitions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue2-transitions */ "./node_modules/vue2-transitions/dist/vue2-transitions.m.js");
/* harmony import */ var _components_FileUploader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @components/FileUploader */ "./resources/js/components/FileUploader.vue");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  "extends": _mixins_config_form__WEBPACK_IMPORTED_MODULE_0__["default"],
  components: {
    CollapseTransition: vue2_transitions__WEBPACK_IMPORTED_MODULE_1__["CollapseTransition"],
    FileUploader: _components_FileUploader__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  data: function data() {
    return {
      now: moment(),
      formData: {
        dateFormat: "",
        timeFormat: "",
        timezone: "",
        fyStart: "",
        perPage: 10,
        locale: "",
        currency: "",
        azureApikey: "",
        googleApikey: "",
        footerCredit: "",
        https: false,
        errorDisplay: false,
        printPreview: true,
        frontendWebsite: false,
        ipFilter: false,
        emailLog: false,
        emailTemplate: false,
        todo: false,
        enableAthsAlert: false,
        backup: false,
        dateTimeAlwaysEng: false,
        maintenanceMode: false,
        allowDateInput: false,
        enableTour: false,
        enableMes: false,
        allowedFileExtensions: "",
        maintenanceModeMessage: "",
        type: "system"
      },
      preRequisite: {
        dateFormats: [],
        timeFormats: [],
        timezones: [],
        locales: [],
        currencies: [],
        paginations: []
      },
      uploaderConfig: {
        allowedExtensions: ["json"],
        maxNoOfFiles: 1
      }
    };
  },
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_3__["mapGetters"])("config", ["vars"])),
  methods: _objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_3__["mapActions"])("common", ["Store", "Init"])), {}, {
    regenerateNavigation: function regenerateNavigation() {
      var _this = this;

      this.Generate().then(function () {
        _this.isLoading = false;

        if (_this.formData.azureApikey.length > 0) {
          var asterisk_str = _this.formData.azureApikey.substr(0, _this.formData.azureApikey.length - 4); // this.formData.azureApikey;


          asterisk_str = asterisk_str.replace(/[a-z0-9-]/gi, "*");

          var nonAsterisk_str = _this.formData.azureApikey.substr(_this.formData.azureApikey.length - 4, _this.formData.azureApikey.length);

          _this.formData.azureApikey = asterisk_str + nonAsterisk_str;
        }
      });
    },
    beforeSubmit: function beforeSubmit() {
      this.formData.allowedFileExtensions = this.formData.allowedFileExtensions.replace(/\s+|\r?\n|\r/gim, "");

      if (!this.formData.allowedFileExtensions) {
        this.$toasted.error(this.$t("global.required", {
          attribute: $t("config.system.allowed_file_extensions")
        }), this.$toastConfig.error);
        return false;
      }
    },
    afterSubmit: function afterSubmit() {
      this.regenerateNavigation();
    },
    handleFileUpload: function handleFileUpload(response) {
      if (response.uuid) {
        this.formData.googleApikey = response.uuid;
      } else if (response === true) {
        this.formData.googleApikey = "";
      }
    }
  }),
  mounted: function mounted() {
    this.getInitialData();

    if (this.formData.azureApikey.length > 0) {
      var asterisk_str = this.formData.azureApikey.substr(0, this.formData.azureApikey.length - 4); // this.formData.azureApikey;

      asterisk_str = asterisk_str.replace(/[a-z0-9-]/gi, "*");
      var nonAsterisk_str = this.formData.azureApikey.substr(this.formData.azureApikey.length - 4, this.formData.azureApikey.length);
      this.formData.azureApikey = asterisk_str + nonAsterisk_str;
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/app/config/system/index.vue?vue&type=template&id=2c4ddf82&":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/app/config/system/index.vue?vue&type=template&id=2c4ddf82& ***!
  \*********************************************************************************************************************************************************************************************************************/
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
          _c("div", { staticClass: "row" }, [
            _c(
              "div",
              { staticClass: "col-12 col-md-4 mb-3" },
              [
                _c(
                  "switch-wrapper",
                  { attrs: { label: _vm.$t("config.system.enable_todo") } },
                  [
                    _c("base-switch", {
                      model: {
                        value: _vm.formData.todo,
                        callback: function($$v) {
                          _vm.$set(_vm.formData, "todo", $$v)
                        },
                        expression: "formData.todo"
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
                      label: _vm.$t("config.system.enable_maintenance_mode")
                    }
                  },
                  [
                    _c("base-switch", {
                      model: {
                        value: _vm.formData.maintenanceMode,
                        callback: function($$v) {
                          _vm.$set(_vm.formData, "maintenanceMode", $$v)
                        },
                        expression: "formData.maintenanceMode"
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
                    attrs: { label: _vm.$t("config.system.enable_aths_alert") }
                  },
                  [
                    _c("base-switch", {
                      model: {
                        value: _vm.formData.enableAthsAlert,
                        callback: function($$v) {
                          _vm.$set(_vm.formData, "enableAthsAlert", $$v)
                        },
                        expression: "formData.enableAthsAlert"
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
                    attrs: { label: _vm.$t("config.system.allow_date_input") }
                  },
                  [
                    _c("base-switch", {
                      model: {
                        value: _vm.formData.allowDateInput,
                        callback: function($$v) {
                          _vm.$set(_vm.formData, "allowDateInput", $$v)
                        },
                        expression: "formData.allowDateInput"
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
                  { attrs: { label: _vm.$t("config.system.enable_tour") } },
                  [
                    _c("base-switch", {
                      model: {
                        value: _vm.formData.enableTour,
                        callback: function($$v) {
                          _vm.$set(_vm.formData, "enableTour", $$v)
                        },
                        expression: "formData.enableTour"
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
                      label: _vm.$t("config.system.enable_print_preview")
                    }
                  },
                  [
                    _c("base-switch", {
                      model: {
                        value: _vm.formData.printPreview,
                        callback: function($$v) {
                          _vm.$set(_vm.formData, "printPreview", $$v)
                        },
                        expression: "formData.printPreview"
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
              { staticClass: "col-12 col-md-4 mb-3 secure-content" },
              [
                _c(
                  "switch-wrapper",
                  { attrs: { label: _vm.$t("config.system.enable_mes") } },
                  [
                    _c("base-switch", {
                      model: {
                        value: _vm.formData.enableMes,
                        callback: function($$v) {
                          _vm.$set(_vm.formData, "enableMes", $$v)
                        },
                        expression: "formData.enableMes"
                      }
                    })
                  ],
                  1
                )
              ],
              1
            )
          ]),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "row mt-4" },
            [
              _c(
                "div",
                { staticClass: "col-12 col-md-4 mb-4" },
                [
                  _c("base-select", {
                    attrs: {
                      options: _vm.preRequisite.dateFormats,
                      label: _vm.$t("config.system.date_format"),
                      "allow-empty": false,
                      simple: "",
                      disabled: _vm.isLoading,
                      required: ""
                    },
                    scopedSlots: _vm._u([
                      {
                        key: "selectedOption",
                        fn: function(ref) {
                          var option = ref.option
                          return [
                            _vm._v(
                              _vm._s(_vm._f("moment")(_vm.now, option.uuid)) +
                                "\n            "
                            ),
                            _c(
                              "small",
                              { staticClass: "bracketed text-muted" },
                              [_vm._v(_vm._s(option.name))]
                            )
                          ]
                        }
                      },
                      {
                        key: "listOption",
                        fn: function(ref) {
                          var option = ref.option
                          return [
                            _vm._v(
                              "\n            " +
                                _vm._s(_vm._f("moment")(_vm.now, option.uuid)) +
                                "\n            "
                            ),
                            _c(
                              "small",
                              { staticClass: "bracketed text-muted" },
                              [_vm._v(_vm._s(option.name))]
                            )
                          ]
                        }
                      }
                    ]),
                    model: {
                      value: _vm.formData.dateFormat,
                      callback: function($$v) {
                        _vm.$set(_vm.formData, "dateFormat", $$v)
                      },
                      expression: "formData.dateFormat"
                    }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "col-12 col-md-4 mb-4" },
                [
                  _c("base-select", {
                    attrs: {
                      options: _vm.preRequisite.timeFormats,
                      label: _vm.$t("config.system.time_format"),
                      "allow-empty": false,
                      simple: "",
                      disabled: _vm.isLoading,
                      required: ""
                    },
                    scopedSlots: _vm._u([
                      {
                        key: "selectedOption",
                        fn: function(ref) {
                          var option = ref.option
                          return [
                            _vm._v(
                              _vm._s(_vm._f("moment")(_vm.now, option.uuid)) +
                                "\n            "
                            ),
                            _c(
                              "small",
                              { staticClass: "bracketed text-muted" },
                              [_vm._v(_vm._s(option.name))]
                            )
                          ]
                        }
                      },
                      {
                        key: "listOption",
                        fn: function(ref) {
                          var option = ref.option
                          return [
                            _vm._v(
                              "\n            " +
                                _vm._s(_vm._f("moment")(_vm.now, option.uuid)) +
                                "\n            "
                            ),
                            _c(
                              "small",
                              { staticClass: "bracketed text-muted" },
                              [_vm._v(_vm._s(option.name))]
                            )
                          ]
                        }
                      }
                    ]),
                    model: {
                      value: _vm.formData.timeFormat,
                      callback: function($$v) {
                        _vm.$set(_vm.formData, "timeFormat", $$v)
                      },
                      expression: "formData.timeFormat"
                    }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "col-12 col-md-4 mb-4" },
                [
                  _c("base-select", {
                    attrs: {
                      options: _vm.preRequisite.timezones,
                      label: _vm.$t("config.system.timezone"),
                      "allow-empty": false,
                      simple: "",
                      disabled: _vm.isLoading,
                      required: ""
                    },
                    model: {
                      value: _vm.formData.timezone,
                      callback: function($$v) {
                        _vm.$set(_vm.formData, "timezone", $$v)
                      },
                      expression: "formData.timezone"
                    }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "col-12 col-md-4 mb-4" },
                [
                  _c("base-select", {
                    attrs: {
                      options: _vm.preRequisite.locales,
                      label: _vm.$t("config.system.locale"),
                      "allow-empty": false,
                      simple: "",
                      disabled: _vm.isLoading,
                      required: ""
                    },
                    model: {
                      value: _vm.formData.locale,
                      callback: function($$v) {
                        _vm.$set(_vm.formData, "locale", $$v)
                      },
                      expression: "formData.locale"
                    }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "col-12 col-md-4 mb-4" },
                [
                  _c("base-select", {
                    attrs: {
                      options: _vm.preRequisite.currencies,
                      "track-by": "name",
                      "show-by": "description",
                      label: _vm.$t("config.system.currency"),
                      "allow-empty": false,
                      disabled: _vm.isLoading,
                      required: ""
                    },
                    model: {
                      value: _vm.formData.currency,
                      callback: function($$v) {
                        _vm.$set(_vm.formData, "currency", $$v)
                      },
                      expression: "formData.currency"
                    }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "col-12 col-md-4 mb-4" },
                [
                  _c("base-select", {
                    attrs: {
                      options: _vm.preRequisite.paginations,
                      label: _vm.$t("config.system.page_length"),
                      "allow-empty": false,
                      simple: "",
                      disabled: _vm.isLoading,
                      required: ""
                    },
                    scopedSlots: _vm._u([
                      {
                        key: "selectedOption",
                        fn: function(ref) {
                          var option = ref.option
                          return [
                            _vm._v(
                              _vm._s(
                                _vm.$t("config.system.per_page", {
                                  attribute: option.name
                                })
                              )
                            )
                          ]
                        }
                      },
                      {
                        key: "listOption",
                        fn: function(ref) {
                          var option = ref.option
                          return [
                            _vm._v(
                              _vm._s(
                                _vm.$t("config.system.per_page", {
                                  attribute: option.name
                                })
                              )
                            )
                          ]
                        }
                      }
                    ]),
                    model: {
                      value: _vm.formData.perPage,
                      callback: function($$v) {
                        _vm.$set(_vm.formData, "perPage", $$v)
                      },
                      expression: "formData.perPage"
                    }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c("collapse-transition", [
                _c(
                  "div",
                  { staticClass: "col-12" },
                  [
                    _c("base-input", {
                      staticClass: "mb-5",
                      attrs: {
                        label: _vm.$t("config.system.azure_api_key"),
                        type: "text",
                        error: _vm.formErrors.azureApikey
                      },
                      on: {
                        "update:error": function($event) {
                          return _vm.$set(_vm.formErrors, "azureApikey", $event)
                        }
                      },
                      model: {
                        value: _vm.formData.azureApikey,
                        callback: function($$v) {
                          _vm.$set(_vm.formData, "azureApikey", $$v)
                        },
                        expression: "formData.azureApikey"
                      }
                    }),
                    _vm._v(" "),
                    _c("label", { staticClass: "input-group-material-label" }, [
                      _vm._v(
                        "\n            " +
                          _vm._s(_vm.$t("config.system.google_api_key")) +
                          "\n          "
                      )
                    ]),
                    _vm._v(" "),
                    _c("file-uploader", {
                      staticClass: "mb-5",
                      attrs: {
                        "name-label": "config.system.google_api_key",
                        options: _vm.uploaderConfig,
                        multiple: false,
                        url: "/config/system/google_api_key_json/start",
                        "button-classes": "justify-content-center",
                        hideAfterUpload: false
                      },
                      on: { updated: _vm.handleFileUpload }
                    })
                  ],
                  1
                )
              ]),
              _vm._v(" "),
              _c("collapse-transition", [
                _c(
                  "div",
                  { staticClass: "col-12" },
                  [
                    _c("base-input", {
                      staticClass: "mb-5",
                      attrs: {
                        label: _vm.$t("config.system.footer_credit"),
                        type: "text",
                        error: _vm.formErrors.footerCredit
                      },
                      on: {
                        "update:error": function($event) {
                          return _vm.$set(
                            _vm.formErrors,
                            "footerCredit",
                            $event
                          )
                        }
                      },
                      model: {
                        value: _vm.formData.footerCredit,
                        callback: function($$v) {
                          _vm.$set(_vm.formData, "footerCredit", $$v)
                        },
                        expression: "formData.footerCredit"
                      }
                    })
                  ],
                  1
                )
              ]),
              _vm._v(" "),
              _c("collapse-transition", [
                _c(
                  "div",
                  { staticClass: "col-12" },
                  [
                    _c("base-textarea", {
                      staticClass: "mb-4",
                      attrs: {
                        rows: "4",
                        label: _vm.$t("config.system.allowed_file_extensions"),
                        error: _vm.formErrors.allowedFileExtensions
                      },
                      on: {
                        "update:error": function($event) {
                          return _vm.$set(
                            _vm.formErrors,
                            "allowedFileExtensions",
                            $event
                          )
                        }
                      },
                      model: {
                        value: _vm.formData.allowedFileExtensions,
                        callback: function($$v) {
                          _vm.$set(_vm.formData, "allowedFileExtensions", $$v)
                        },
                        expression: "formData.allowedFileExtensions"
                      }
                    })
                  ],
                  1
                )
              ]),
              _vm._v(" "),
              _c("collapse-transition", [
                _vm.formData.maintenanceMode
                  ? _c(
                      "div",
                      { staticClass: "col-12" },
                      [
                        _c("base-textarea", {
                          staticClass: "mb-4",
                          attrs: {
                            rows: "4",
                            label: _vm.$t(
                              "config.system.maintenance_mode_message"
                            ),
                            error: _vm.formErrors.maintenanceModeMessage
                          },
                          on: {
                            "update:error": function($event) {
                              return _vm.$set(
                                _vm.formErrors,
                                "maintenanceModeMessage",
                                $event
                              )
                            }
                          },
                          model: {
                            value: _vm.formData.maintenanceModeMessage,
                            callback: function($$v) {
                              _vm.$set(
                                _vm.formData,
                                "maintenanceModeMessage",
                                $$v
                              )
                            },
                            expression: "formData.maintenanceModeMessage"
                          }
                        })
                      ],
                      1
                    )
                  : _vm._e()
              ])
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "text-right mt-5" },
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
                [_vm._v(_vm._s(_vm.$t("general.save")))]
              )
            ],
            1
          )
        ]
      )
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/mixins/config-form.js":
/*!********************************************!*\
  !*** ./resources/js/mixins/config-form.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _api_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @api/config */ "./resources/js/api/config.js");
/* harmony import */ var _js_core_utils_formatter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @js/core/utils/formatter */ "./resources/js/core/utils/formatter.js");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




/* harmony default export */ __webpack_exports__["default"] = ({
  components: {},
  data: function data() {
    return {
      formData: {},
      formErrors: {},
      initialFormData: null,
      initianLength: 0,
      emptyFormData: null,
      entity: null,
      preRequisite: {},
      isLoading: true,
      useUserPreference: false,
      dataType: null,
      configType: ''
    };
  },
  computed: _objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_1__["mapGetters"])('config', {
    configsWithPreference: 'configs',
    configs: 'configsOriginal',
    vars: 'vars',
    allowExtraInput: 'allowExtraInput'
  })), {}, {
    formHasErrors: function formHasErrors() {
      var ans = false;
      this.formErrors.objForEach(function (er) {
        ans = er !== '' ? true : ans;
      });
      return ans;
    }
  }),
  methods: _objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_1__["mapActions"])('config', ['GetConfig'])), Object(vuex__WEBPACK_IMPORTED_MODULE_1__["mapActions"])('user', ['GetUser'])), Object(vuex__WEBPACK_IMPORTED_MODULE_1__["mapActions"])('navigation', ['Generate'])), Object(vuex__WEBPACK_IMPORTED_MODULE_1__["mapActions"])('common', ['Custom'])), {}, {
    findActualValue: function findActualValue(value, options) {
      var key = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'uuid';
      return options.find(function (option) {
        return option[key] === value;
      }) || null;
    },
    submit: function submit() {
      var _this = this;

      var preference = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

      if (formUtil.isUnchanged(this.initialFormData, this.formData)) {
        this.$toasted.info(this.$t('general.nothing_changed'), this.$toastConfig.info);
        return false;
      }

      this.isLoading = true;

      if (this.formData.hasOwnProperty('type')) {
        this.formData.type = this.formData.type.snakeCase();
      }

      var storeFn = preference === true || this.useUserPreference ? _api_config__WEBPACK_IMPORTED_MODULE_2__["updateUserPref"] : this.configType === 'module' ? _api_config__WEBPACK_IMPORTED_MODULE_2__["updateModule"] : _api_config__WEBPACK_IMPORTED_MODULE_2__["update"];

      if (this.beforeSubmit && typeof this.beforeSubmit === "function") {
        var shouldProceed = this.beforeSubmit();

        if (shouldProceed === false) {
          this.isLoading = false;
          return;
        }
      }

      storeFn(this.formData).then(function (response) {
        var fnToCall = preference === true || _this.useUserPreference ? _this.GetUser : _this.GetConfig;
        fnToCall().then(function () {
          _this.$toasted.success(response.message, _this.$toastConfig);

          _this.initialFormData = _.cloneDeep(_this.formData);
          _this.isLoading = false;
        })["catch"](function (error) {
          _this.isLoading = false;
          _this.formErrors = formUtil.handleErrors(error);
        });

        if (typeof _this.afterSubmit === "function") {
          _this.afterSubmit();
        }

        if (typeof _this.afterSubmitSuccess === "function") {
          _this.afterSubmitSuccess();
        }
      })["catch"](function (error) {
        _this.isLoading = false;
        _this.formErrors = formUtil.handleErrors(error);

        if (typeof _this.afterSubmit === "function") {
          _this.afterSubmit();
        }

        if (typeof _this.afterSubmitError === "function") {
          _this.afterSubmitError();
        }
      });
    },
    reset: function reset() {
      var _this2 = this;

      formUtil.confirmAction().then(function (result) {
        if (result.value) {
          _this2.formData = Object.assign({}, _this2.formData, _.cloneDeep(_this2.initialFormData));
        }
      });
    },
    unsavedCheck: function unsavedCheck(next) {
      formUtil.unsavedCheckAlert(this.initialFormData, this.formData, next);
    },
    fillPreRequisite: function fillPreRequisite(response) {
      var _this3 = this;

      this.preRequisite.objForEach(function (value, key) {
        _this3.preRequisite[key] = response.hasOwnProperty(key) ? response[key] : value;
      });
      this.isLoading = false;
    },
    fillFormData: function fillFormData() {
      var _this4 = this;

      this.isLoading = true;
      var configsToUse = this.useUserPreference ? this.configsWithPreference : this.configs;

      if (this.formData.type && configsToUse[this.formData.type]) {
        this.formData = formUtil.assignValues(this.formData, configsToUse[this.formData.type]);
      }

      if (this.formData.types && Array.isArray(this.formData.types)) {
        this.formData.types.forEach(function (value) {
          _this4.formData = formUtil.assignValues(_this4.formData, configsToUse[value]);
        });
      }

      if (this.formData.override) {
        this.formData.objForEach(function (value, key) {
          if (value && _.isObject(value)) {
            _this4.formData[key] = formUtil.assignValues(_this4.formData[key], configsToUse[key]);
          } else {
            _this4.formData[key] = configsToUse[key] ? configsToUse[key] : value;
          }
        });
      }

      if (typeof this.addNewRow === "function" && typeof this.addNewRowIfNone === "function") {
        this.addNewRowIfNone();
      }

      this.isLoading = false;
    },
    getInitialData: function getInitialData(callbackFn) {
      var _this5 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _this5.isLoading = true;
                _context.prev = 1;
                _context.next = 4;
                return _api_config__WEBPACK_IMPORTED_MODULE_2__["getPreRequisite"](Object.keys(_this5.preRequisite).join(','));

              case 4:
                response = _context.sent;

                _this5.fillPreRequisite(response);

                if (callbackFn) {
                  _this5.$nextTick(function () {
                    callbackFn();
                  });
                }

                return _context.abrupt("return", response);

              case 10:
                _context.prev = 10;
                _context.t0 = _context["catch"](1);
                _this5.isLoading = false;
                _this5.formErrors = formUtil.handleErrors(_context.t0);
                throw _context.t0;

              case 15:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[1, 10]]);
      }))();
    }
  }),
  mounted: function mounted() {
    this.fillFormData();
    this.initialFormData = _.cloneDeep(this.formData);
  },
  beforeDestroy: function beforeDestroy() {
    delete this.formData;
    delete this.formErrors;
    delete this.preRequisite;
  },
  beforeRouteLeave: function beforeRouteLeave(to, from, next) {
    this.unsavedCheck(next);
  }
});

/***/ }),

/***/ "./resources/js/views/app/config/system/index.vue":
/*!********************************************************!*\
  !*** ./resources/js/views/app/config/system/index.vue ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_vue_vue_type_template_id_2c4ddf82___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=2c4ddf82& */ "./resources/js/views/app/config/system/index.vue?vue&type=template&id=2c4ddf82&");
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ "./resources/js/views/app/config/system/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_2c4ddf82___WEBPACK_IMPORTED_MODULE_0__["render"],
  _index_vue_vue_type_template_id_2c4ddf82___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/app/config/system/index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/app/config/system/index.vue?vue&type=script&lang=js&":
/*!*********************************************************************************!*\
  !*** ./resources/js/views/app/config/system/index.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/app/config/system/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/app/config/system/index.vue?vue&type=template&id=2c4ddf82&":
/*!***************************************************************************************!*\
  !*** ./resources/js/views/app/config/system/index.vue?vue&type=template&id=2c4ddf82& ***!
  \***************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_2c4ddf82___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=2c4ddf82& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/app/config/system/index.vue?vue&type=template&id=2c4ddf82&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_2c4ddf82___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_2c4ddf82___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=index.js.map?id=14a7a8ed624681efe0fa