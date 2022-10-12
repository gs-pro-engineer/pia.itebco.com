(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app/meeting/add~app/meeting/edit"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/app/meeting/form.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/app/meeting/form.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _mixins_form__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @mixins/form */ "./resources/js/mixins/form.js");
/* harmony import */ var _core_components_EditorWrapper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @core/components/EditorWrapper */ "./resources/js/core/components/EditorWrapper.vue");
/* harmony import */ var _views_app_option_modal_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @views/app/option/modal-form */ "./resources/js/views/app/option/modal-form.vue");
/* harmony import */ var _core_filters_momentz__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @core/filters/momentz */ "./resources/js/core/filters/momentz.js");
/* harmony import */ var _api_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @api/config */ "./resources/js/api/config.js");
/* harmony import */ var vue2_transitions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vue2-transitions */ "./node_modules/vue2-transitions/dist/vue2-transitions.m.js");
/* harmony import */ var _js_store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @js/store */ "./resources/js/store/index.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//







var vars = _js_store__WEBPACK_IMPORTED_MODULE_6__["default"].getters['config/vars'];
/* harmony default export */ __webpack_exports__["default"] = ({
  "extends": _mixins_form__WEBPACK_IMPORTED_MODULE_0__["default"],
  components: {
    EditorWrapper: _core_components_EditorWrapper__WEBPACK_IMPORTED_MODULE_1__["default"],
    OptionForm: _views_app_option_modal_form__WEBPACK_IMPORTED_MODULE_2__["default"],
    SlideYUpTransition: vue2_transitions__WEBPACK_IMPORTED_MODULE_5__["SlideYUpTransition"]
  },
  data: function data() {
    return {
      formData: {
        uuid: null,
        title: '',
        agenda: '',
        description: '',
        startDateTime: _core_filters_momentz__WEBPACK_IMPORTED_MODULE_3__["now"](vars.serverDateTimeFormat),
        period: 60,
        type: null,
        category: ["Default"],
        autoTranslate: null,
        identifier: '',
        maxParticipantCount: 1000,
        accessibleViaLink: false,
        accessibleToMembers: false,
        isPam: false,
        isPaid: false,
        fee: 0
      },
      autoTranslates: [{
        uuid: 'none',
        label: 'NONE'
      }, {
        uuid: 'microsoft_azure',
        label: 'Microsoft Azure'
      }, {
        uuid: 'google_translate',
        label: 'Google Translate'
      }],
      modalFormData: {
        azureApikey: "",
        googleApikey: ""
      },
      preRequisite: {
        types: [],
        segments: [],
        categories: []
      },
      uploaderConfig: {
        allowedExtensions: ["json"],
        maxNoOfFiles: 1
      },
      formLabels: {
        title: $t('meeting.props.title'),
        agenda: $t('meeting.props.agenda'),
        identifier: $t('meeting.enter_meeting_code'),
        maxParticipantCount: $t('meeting.config.max_participant_count'),
        description: $t('meeting.props.description'),
        startDateTime: $t('meeting.props.start_date_time'),
        period: $t('meeting.props.estimated_period'),
        type: $t('meeting.props.type'),
        category: $t('meeting.meeting_category.category'),
        autoTranslate: $t('meeting.props.auto_translate'),
        accessibleViaLink: $t('meeting.props.accessible_via_link'),
        accessibleToMembers: $t('meeting.props.only_accessible_to_members'),
        isPam: $t('meeting.props.is_pam'),
        isPaid: $t('meeting.props.is_paid'),
        fee: $t('meeting.props.fee'),
        azure_api_key: $t('config.system.azure_api_key'),
        google_api_key: $t("config.system.google_api_key")
      },
      azure_modal_state: false,
      google_modal_state: false,
      initUrl: 'meetings',
      dateTimeFields: ['startDateTime'],
      modalVisible: false,
      props: {
        show: false,
        showGoogleModal: false,
        showClose: true,
        type: "",
        modalClasses: {
          type: [Object, String],
          description: "Modal dialog css classes"
        },
        modalContentClasses: {
          type: [Object, String],
          description: "Modal dialog content css classes"
        },
        gradient: {
          type: String,
          description: "Modal gradient type (danger, primary etc)"
        },
        headerClasses: {
          type: [Object, String],
          description: "Modal Header css classes"
        },
        bodyClasses: {
          type: [Object, String],
          description: "Modal Body css classes"
        },
        footerClasses: {
          type: [Object, String],
          description: "Modal Footer css classes"
        },
        animationDuration: 500
      },
      selectedLanguage: ""
    };
  },
  computed: {
    maxParticipantAllowed: function maxParticipantAllowed() {
      return this.configs.meeting.maxParticipantCount ? this.configs.meeting.maxParticipantCount : 999999;
    },
    selectTranslator: {
      get: function get() {
        if (this.autoTranslate) {
          return this.formData.autoTranslate;
        } else {
          return this.selectedLanguage;
        }
      },
      set: function set(value) {
        var _this = this;

        if (value === "none") {
          this.formData.autoTranslate = "NONE";
        } else {
          _api_config__WEBPACK_IMPORTED_MODULE_4__["getTranslator"](value).then(function (response) {
            if (value === "microsoft_azure") {
              _this.formData.autoTranslate = "Microsoft Azure";
              _this.props.show = response === false ? true : false;
            }

            if (value === "google_translate") {
              _this.formData.autoTranslate = "Google Translate";
              _this.props.showGoogleModal = response === false ? true : false;
            }
          });
        }

        this.selectedLanguage = value;
      }
    }
  },
  methods: {
    afterEditData: function afterEditData() {
      if (this.duplicate) {
        this.formData.identifier = '';
        this.formData.startDateTime = moment().format(vars.serverDateTimeFormat);
      }
    },
    isPamChanged: function isPamChanged() {
      if (this.formData.isPam) {
        this.formData.accessibleToMembers = false;
        this.formData.isPaid = false;
        this.formData.fee = 0;
      }
    },
    accessibleToMembersChanged: function accessibleToMembersChanged() {
      if (this.formData.accessibleToMembers) {
        this.formData.isPam = false;
        this.formData.isPaid = false;
        this.formData.fee = 0;
      }
    },
    isPaidChanged: function isPaidChanged() {
      if (this.formData.isPaid) {
        this.formData.isPam = false;
        this.formData.accessibleToMembers = false;
      }
    },
    isChangedAzureApiKey: function isChangedAzureApiKey(e) {
      this.modalFormData.azureApikey = e.target.value;
    },
    closeModal: function closeModal() {
      this.props.show = false;
    },
    saveAzureApiKey: function saveAzureApiKey() {
      var _this2 = this;

      _api_config__WEBPACK_IMPORTED_MODULE_4__["saveAzureApiKey"](this.modalFormData.azureApikey).then(function (response) {
        _this2.props.show = response.status === "success" ? false : true;
      });
    },
    closeGoogleModal: function closeGoogleModal() {
      this.props.showGoogleModal = false;
    },
    handleFileUpload: function handleFileUpload(response) {
      if (response.uuid) {
        this.modalFormData.googleApikey = response.uuid;
      }
    },
    saveGoogleApiKey: function saveGoogleApiKey() {
      var _this3 = this;

      _api_config__WEBPACK_IMPORTED_MODULE_4__["saveGoogleApiKey"](this.modalFormData.googleApikey).then(function (response) {
        _this3.props.showGoogleModal = response.status === "success" ? false : true;
      });
    }
  },
  mounted: function mounted() {
    this.getInitialData();
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/app/meeting/form.vue?vue&type=style&index=0&lang=css&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--8-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/app/meeting/form.vue?vue&type=style&index=0&lang=css& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.modal.show {\n    background-color: rgba(0, 0, 0, 0.3);\n}\n.modal-body h5 {\n    font-weight: bold;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/app/meeting/form.vue?vue&type=style&index=0&lang=css&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--8-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/app/meeting/form.vue?vue&type=style&index=0&lang=css& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader??ref--8-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--8-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./form.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/app/meeting/form.vue?vue&type=style&index=0&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/app/meeting/form.vue?vue&type=template&id=4b230976&":
/*!**************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/app/meeting/form.vue?vue&type=template&id=4b230976& ***!
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
        _c("div", { staticClass: "col-12 col-md-5" }, [
          _c("div", { staticClass: "row" }, [
            _c(
              "div",
              { staticClass: "col-12 mb-3" },
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
              { staticClass: "col-12 mb-3" },
              [
                _c("base-textarea", {
                  attrs: {
                    rows: "10",
                    label: _vm.formLabels.agenda,
                    error: _vm.formErrors.agenda,
                    required: ""
                  },
                  on: {
                    "update:error": function($event) {
                      return _vm.$set(_vm.formErrors, "agenda", $event)
                    }
                  },
                  model: {
                    value: _vm.formData.agenda,
                    callback: function($$v) {
                      _vm.$set(_vm.formData, "agenda", $$v)
                    },
                    expression: "formData.agenda"
                  }
                })
              ],
              1
            )
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "col-12 col-md-7" }, [
          _c(
            "fieldset",
            { staticClass: "fieldset primary" },
            [
              _c("div", { staticClass: "row" }, [
                _c(
                  "div",
                  { staticClass: "col-12 col-md-6 mb-3" },
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
                  { staticClass: "col-12 col-md-6 mb-3" },
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
                                    entityTitle:
                                      "meeting.meeting_category.category"
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
                  { staticClass: "col-12 col-md-6 mb-3" },
                  [
                    _c(
                      "base-input",
                      {
                        staticClass: "mb-3",
                        attrs: {
                          label: _vm.formLabels.startDateTime,
                          "addon-right-icon": "far fa-calendar-alt",
                          type: "text",
                          error: _vm.formErrors.startDateTime,
                          "is-wrapper": true,
                          required: ""
                        },
                        on: {
                          "update:error": function($event) {
                            return _vm.$set(
                              _vm.formErrors,
                              "startDateTime",
                              $event
                            )
                          }
                        },
                        model: {
                          value: _vm.formData.startDateTime,
                          callback: function($$v) {
                            _vm.$set(_vm.formData, "startDateTime", $$v)
                          },
                          expression: "formData.startDateTime"
                        }
                      },
                      [
                        _c("date-picker", {
                          staticClass: "form-control datepicker",
                          attrs: { config: _vm.vars.datetimepickerConfig },
                          model: {
                            value: _vm.formData.startDateTime,
                            callback: function($$v) {
                              _vm.$set(_vm.formData, "startDateTime", $$v)
                            },
                            expression: "formData.startDateTime"
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
                  { staticClass: "col-12 col-md-6 mb-3" },
                  [
                    _c("base-input", {
                      staticClass: "mb-3",
                      attrs: {
                        label: _vm.formLabels.period,
                        type: "number",
                        error: _vm.formErrors.period,
                        required: "",
                        "select-on-focus": "",
                        "addon-right-text": _vm.$t(
                          "list.general.durations.minutes"
                        )
                      },
                      on: {
                        "update:error": function($event) {
                          return _vm.$set(_vm.formErrors, "period", $event)
                        },
                        wheel: function($event) {
                          $event.stopPropagation()
                          $event.preventDefault()
                        }
                      },
                      model: {
                        value: _vm.formData.period,
                        callback: function($$v) {
                          _vm.$set(_vm.formData, "period", $$v)
                        },
                        expression: "formData.period"
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
                        label: _vm.formLabels.identifier,
                        type: "text",
                        error: _vm.formErrors.identifier
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
                        label: _vm.formLabels.maxParticipantCount,
                        type: "number",
                        error: _vm.formErrors.maxParticipantCount,
                        min: 2,
                        max: _vm.maxParticipantAllowed,
                        step: 1
                      },
                      on: {
                        "update:error": function($event) {
                          return _vm.$set(
                            _vm.formErrors,
                            "maxParticipantCount",
                            $event
                          )
                        }
                      },
                      model: {
                        value: _vm.formData.maxParticipantCount,
                        callback: function($$v) {
                          _vm.$set(_vm.formData, "maxParticipantCount", $$v)
                        },
                        expression: "formData.maxParticipantCount"
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
                        options: _vm.autoTranslates,
                        label: _vm.formLabels.autoTranslate,
                        "allow-empty": false,
                        "preselect-first": "",
                        simple: "",
                        "track-by": "uuid",
                        "show-by": "label",
                        required: ""
                      },
                      model: {
                        value: _vm.selectTranslator,
                        callback: function($$v) {
                          _vm.selectTranslator = $$v
                        },
                        expression: "selectTranslator"
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
                      "base-checkbox",
                      {
                        staticClass: "ml-3 mt-2",
                        model: {
                          value: _vm.formData.accessibleViaLink,
                          callback: function($$v) {
                            _vm.$set(_vm.formData, "accessibleViaLink", $$v)
                          },
                          expression: "formData.accessibleViaLink"
                        }
                      },
                      [
                        _vm._v(
                          "\n                            " +
                            _vm._s(_vm.formLabels.accessibleViaLink) +
                            "\n                        "
                        )
                      ]
                    )
                  ],
                  1
                ),
                _vm._v(" "),
                _vm.configs.meeting &&
                _vm.configs.meeting.enablePam &&
                !_vm.formData.accessibleToMembers &&
                !_vm.formData.isPaid
                  ? _c(
                      "div",
                      { staticClass: "col-12 col-md-6 mb-3" },
                      [
                        _c(
                          "base-checkbox",
                          {
                            staticClass: "ml-3 mt-2",
                            on: { change: _vm.isPamChanged },
                            model: {
                              value: _vm.formData.isPam,
                              callback: function($$v) {
                                _vm.$set(_vm.formData, "isPam", $$v)
                              },
                              expression: "formData.isPam"
                            }
                          },
                          [
                            _vm._v(
                              "\n                            " +
                                _vm._s(_vm.formLabels.isPam) +
                                "\n                        "
                            )
                          ]
                        )
                      ],
                      1
                    )
                  : _vm._e()
              ]),
              _vm._v(" "),
              _vm.allowExtraInput && !_vm.formData.isPam
                ? [
                    !_vm.formData.isPaid
                      ? _c("div", { staticClass: "row" }, [
                          _c(
                            "div",
                            { staticClass: "col-12 mb-3" },
                            [
                              _c(
                                "base-checkbox",
                                {
                                  staticClass: "ml-3 mt-2",
                                  on: {
                                    change: _vm.accessibleToMembersChanged
                                  },
                                  model: {
                                    value: _vm.formData.accessibleToMembers,
                                    callback: function($$v) {
                                      _vm.$set(
                                        _vm.formData,
                                        "accessibleToMembers",
                                        $$v
                                      )
                                    },
                                    expression: "formData.accessibleToMembers"
                                  }
                                },
                                [
                                  _vm._v(
                                    "\n                                " +
                                      _vm._s(
                                        _vm.formLabels.accessibleToMembers
                                      ) +
                                      "\n                            "
                                  )
                                ]
                              )
                            ],
                            1
                          )
                        ])
                      : _vm._e(),
                    _vm._v(" "),
                    _vm.configs.meeting.enablePaidMeeting &&
                    !_vm.formData.accessibleToMembers
                      ? _c("div", { staticClass: "row" }, [
                          _c(
                            "div",
                            { staticClass: "col-12 col-md-6 mb-3" },
                            [
                              _c(
                                "base-checkbox",
                                {
                                  staticClass: "ml-3 mt-2",
                                  on: { change: _vm.isPaidChanged },
                                  model: {
                                    value: _vm.formData.isPaid,
                                    callback: function($$v) {
                                      _vm.$set(_vm.formData, "isPaid", $$v)
                                    },
                                    expression: "formData.isPaid"
                                  }
                                },
                                [
                                  _vm._v(
                                    "\n                                " +
                                      _vm._s(_vm.formLabels.isPaid) +
                                      "\n                            "
                                  )
                                ]
                              )
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _vm.formData.isPaid
                            ? _c(
                                "div",
                                { staticClass: "col-12 col-md-6 mb-3" },
                                [
                                  _c("base-input", {
                                    attrs: {
                                      label: _vm.formLabels.fee,
                                      type: "number",
                                      error: _vm.formErrors.fee,
                                      min: 0.01,
                                      step: 0.01,
                                      format: "currency"
                                    },
                                    on: {
                                      "update:error": function($event) {
                                        return _vm.$set(
                                          _vm.formErrors,
                                          "fee",
                                          $event
                                        )
                                      }
                                    },
                                    model: {
                                      value: _vm.formData.fee,
                                      callback: function($$v) {
                                        _vm.$set(_vm.formData, "fee", $$v)
                                      },
                                      expression: "formData.fee"
                                    }
                                  })
                                ],
                                1
                              )
                            : _vm._e()
                        ])
                      : _vm._e()
                  ]
                : _vm._e()
            ],
            2
          )
        ])
      ]),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "mt-element" },
        [
          _c("editor-wrapper", {
            attrs: {
              label: _vm.formLabels.description,
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
      ),
      _vm._v(" "),
      _vm.formHasErrors
        ? _c(
            "div",
            { staticClass: "alert alert-danger", attrs: { role: "alert" } },
            [
              _c("h6", { staticClass: "m-0" }, [
                _vm._v(_vm._s(_vm.$t("general.form_has_errors")))
              ])
            ]
          )
        : _vm._e(),
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
                    _vm.$t("global.save", {
                      attribute: _vm.$t("meeting.meeting")
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
        : _vm._e(),
      _vm._v(" "),
      [
        _c(
          "SlideYUpTransition",
          { attrs: { duration: this.props.animationDuration } },
          [
            _c(
              "div",
              {
                directives: [
                  {
                    name: "show",
                    rawName: "v-show",
                    value: this.props.show,
                    expression: "this.props.show"
                  }
                ],
                staticClass: "modal fade",
                class: [
                  { "show d-block": this.props.show },
                  { "d-none": !this.props.show },
                  { "modal-mini": this.props.type === "mini" }
                ],
                attrs: {
                  tabindex: "-1",
                  role: "dialog",
                  "aria-hidden": !this.props.show
                },
                on: {
                  click: function($event) {
                    if ($event.target !== $event.currentTarget) {
                      return null
                    }
                    return _vm.closeModal.apply(null, arguments)
                  }
                }
              },
              [
                _c(
                  "div",
                  {
                    staticClass: "modal-dialog modal-dialog-centered",
                    class: [
                      { "modal-notice": this.props.type === "notice" },
                      this.props.modalClasses
                    ]
                  },
                  [
                    _c(
                      "div",
                      {
                        staticClass: "modal-content",
                        class: [
                          this.props.gradient
                            ? "bg-gradient-" + this.props.gradient
                            : "",
                          this.props.modalContentClasses
                        ]
                      },
                      [
                        _c(
                          "div",
                          {
                            staticClass: "modal-body",
                            class: this.props.bodyClasses
                          },
                          [
                            _vm._t("default", function() {
                              return [
                                _c(
                                  "div",
                                  { staticClass: "col-12" },
                                  [
                                    _c("h5", [
                                      _vm._v(
                                        "Please Input the Microsoft Azure API Key!"
                                      )
                                    ]),
                                    _vm._v(" "),
                                    _c("base-input", {
                                      attrs: {
                                        label: _vm.formLabels.azure_api_key,
                                        type: "text",
                                        error: _vm.formErrors.azureApikey
                                      },
                                      on: {
                                        "update:error": function($event) {
                                          return _vm.$set(
                                            _vm.formErrors,
                                            "azureApikey",
                                            $event
                                          )
                                        },
                                        change: _vm.isChangedAzureApiKey
                                      },
                                      model: {
                                        value: _vm.modalFormData.azureApikey,
                                        callback: function($$v) {
                                          _vm.$set(
                                            _vm.modalFormData,
                                            "azureApikey",
                                            $$v
                                          )
                                        },
                                        expression: "modalFormData.azureApikey"
                                      }
                                    })
                                  ],
                                  1
                                )
                              ]
                            })
                          ],
                          2
                        ),
                        _vm._v(" "),
                        _c(
                          "div",
                          {
                            staticClass: "modal-footer",
                            class: this.props.footerClasses
                          },
                          [
                            _vm._t("footer", function() {
                              return [
                                _c(
                                  "div",
                                  { staticClass: "text-right" },
                                  [
                                    _c(
                                      "base-button",
                                      {
                                        attrs: {
                                          type: "button",
                                          design: "light"
                                        },
                                        on: { click: _vm.closeModal }
                                      },
                                      [
                                        _vm._v(
                                          "\n                                        " +
                                            _vm._s(_vm.$t("general.cancel")) +
                                            "\n                                    "
                                        )
                                      ]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "base-button",
                                      {
                                        attrs: {
                                          type: "button",
                                          design: "primary"
                                        },
                                        on: { click: _vm.saveAzureApiKey }
                                      },
                                      [
                                        _vm._v(
                                          "\n                                        " +
                                            _vm._s(_vm.$t("general.save")) +
                                            "\n                                    "
                                        )
                                      ]
                                    )
                                  ],
                                  1
                                )
                              ]
                            })
                          ],
                          2
                        )
                      ]
                    )
                  ]
                )
              ]
            )
          ]
        )
      ],
      _vm._v(" "),
      [
        _c(
          "SlideYUpTransition",
          { attrs: { duration: this.props.animationDuration } },
          [
            _c(
              "div",
              {
                directives: [
                  {
                    name: "show",
                    rawName: "v-show",
                    value: this.props.showGoogleModal,
                    expression: "this.props.showGoogleModal"
                  }
                ],
                staticClass: "modal fade",
                class: [
                  { "show d-block": this.props.showGoogleModal },
                  { "d-none": !this.props.showGoogleModal },
                  { "modal-mini": this.props.type === "mini" }
                ],
                attrs: {
                  tabindex: "-1",
                  role: "dialog",
                  "aria-hidden": !this.props.showGoogleModal
                },
                on: {
                  click: function($event) {
                    if ($event.target !== $event.currentTarget) {
                      return null
                    }
                    return _vm.closeGoogleModal.apply(null, arguments)
                  }
                }
              },
              [
                _c(
                  "div",
                  {
                    staticClass: "modal-dialog modal-dialog-centered",
                    class: [
                      { "modal-notice": this.props.type === "notice" },
                      this.props.modalClasses
                    ]
                  },
                  [
                    _c(
                      "div",
                      {
                        staticClass: "modal-content",
                        class: [
                          this.props.gradient
                            ? "bg-gradient-" + this.props.gradient
                            : "",
                          this.props.modalContentClasses
                        ]
                      },
                      [
                        _c(
                          "div",
                          {
                            staticClass: "modal-body",
                            class: this.props.bodyClasses
                          },
                          [
                            _vm._t("default", function() {
                              return [
                                _c(
                                  "div",
                                  { staticClass: "col-12" },
                                  [
                                    _c(
                                      "label",
                                      {
                                        staticClass:
                                          "input-group-material-label"
                                      },
                                      [
                                        _vm._v(
                                          "\n                                        Please Upload the Google API Key file!\n                                    "
                                        )
                                      ]
                                    ),
                                    _vm._v(" "),
                                    _c("file-uploader", {
                                      staticClass: "mb-5",
                                      attrs: {
                                        "name-label":
                                          "config.system.google_api_key",
                                        options: _vm.uploaderConfig,
                                        multiple: false,
                                        url:
                                          "/config/system/google_api_key_json/start",
                                        "button-classes":
                                          "justify-content-center",
                                        hideAfterUpload: false
                                      },
                                      on: { updated: _vm.handleFileUpload }
                                    })
                                  ],
                                  1
                                )
                              ]
                            })
                          ],
                          2
                        ),
                        _vm._v(" "),
                        _c(
                          "div",
                          {
                            staticClass: "modal-footer",
                            class: this.props.footerClasses
                          },
                          [
                            _vm._t("footer", function() {
                              return [
                                _c(
                                  "div",
                                  { staticClass: "text-right" },
                                  [
                                    _c(
                                      "base-button",
                                      {
                                        attrs: {
                                          type: "button",
                                          design: "light"
                                        },
                                        on: { click: _vm.closeGoogleModal }
                                      },
                                      [
                                        _vm._v(
                                          "\n                                        " +
                                            _vm._s(_vm.$t("general.cancel")) +
                                            "\n                                    "
                                        )
                                      ]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "base-button",
                                      {
                                        attrs: {
                                          type: "button",
                                          design: "primary"
                                        },
                                        on: { click: _vm.saveGoogleApiKey }
                                      },
                                      [
                                        _vm._v(
                                          "\n                                        " +
                                            _vm._s(_vm.$t("general.save")) +
                                            "\n                                    "
                                        )
                                      ]
                                    )
                                  ],
                                  1
                                )
                              ]
                            })
                          ],
                          2
                        )
                      ]
                    )
                  ]
                )
              ]
            )
          ]
        )
      ]
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/views/app/meeting/form.vue":
/*!*************************************************!*\
  !*** ./resources/js/views/app/meeting/form.vue ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _form_vue_vue_type_template_id_4b230976___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./form.vue?vue&type=template&id=4b230976& */ "./resources/js/views/app/meeting/form.vue?vue&type=template&id=4b230976&");
/* harmony import */ var _form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./form.vue?vue&type=script&lang=js& */ "./resources/js/views/app/meeting/form.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _form_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./form.vue?vue&type=style&index=0&lang=css& */ "./resources/js/views/app/meeting/form.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _form_vue_vue_type_template_id_4b230976___WEBPACK_IMPORTED_MODULE_0__["render"],
  _form_vue_vue_type_template_id_4b230976___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/app/meeting/form.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/app/meeting/form.vue?vue&type=script&lang=js&":
/*!**************************************************************************!*\
  !*** ./resources/js/views/app/meeting/form.vue?vue&type=script&lang=js& ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./form.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/app/meeting/form.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/app/meeting/form.vue?vue&type=style&index=0&lang=css&":
/*!**********************************************************************************!*\
  !*** ./resources/js/views/app/meeting/form.vue?vue&type=style&index=0&lang=css& ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_8_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_vue_loader_lib_index_js_vue_loader_options_form_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader??ref--8-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--8-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./form.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/app/meeting/form.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_8_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_vue_loader_lib_index_js_vue_loader_options_form_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_8_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_vue_loader_lib_index_js_vue_loader_options_form_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_8_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_vue_loader_lib_index_js_vue_loader_options_form_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_8_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_vue_loader_lib_index_js_vue_loader_options_form_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/views/app/meeting/form.vue?vue&type=template&id=4b230976&":
/*!********************************************************************************!*\
  !*** ./resources/js/views/app/meeting/form.vue?vue&type=template&id=4b230976& ***!
  \********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_form_vue_vue_type_template_id_4b230976___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./form.vue?vue&type=template&id=4b230976& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/app/meeting/form.vue?vue&type=template&id=4b230976&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_form_vue_vue_type_template_id_4b230976___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_form_vue_vue_type_template_id_4b230976___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=edit.js.map?id=5a65b3bc4bebcf40c879