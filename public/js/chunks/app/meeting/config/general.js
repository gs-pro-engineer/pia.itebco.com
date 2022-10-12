(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app/meeting/config/general"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/app/meeting/config/general.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/app/meeting/config/general.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _mixins_config_form__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @mixins/config-form */ "./resources/js/mixins/config-form.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  data: function data() {
    return {
      formData: {
        allowDeletingEndedMeetings: false,
        allowDeletingCancelledMeetings: false,
        cardLayout: false,
        enablePaidMeeting: false,
        cardLayoutDesign: 'default',
        instantMeetingAutoEnded: 180,
        maxParticipantCount: 1000,
        enableChat: true,
        enableScreenSharing: true,
        enableHandGesture: true,
        enableFileSharing: true,
        enableLinkSharing: true,
        enableWhiteboard: true,
        footerAutoHide: false,
        mirroredVideo: false,
        disableScroll: false,
        speechDetection: true,
        muteParticipantsOnStart: false,
        allowJoiningWithoutDevices: true,
        askHostBeforeJoining: false,
        preferRearCameraFirst: false,
        enableUserAvatar: false,
        enableFullUserAvatar: false,
        enableMeetingInfo: false,
        forceUpdateUsername: false,
        layout: 'fullpage',
        debugMode: false,
        forceTurn: false,
        type: 'meeting'
      },
      cardLayoutDesigns: [{
        uuid: 'default',
        label: $t('meeting.config.card_layout_design_default')
      }, {
        uuid: 'design1',
        label: $t('meeting.config.card_layout_design_design1')
      }],
      layouts: [{
        uuid: 'grid',
        label: $t('meeting.config.layout_grid')
      }, {
        uuid: 'gallery',
        label: $t('meeting.config.layout_gallery')
      }, {
        uuid: 'fullpage',
        label: $t('meeting.config.layout_fullpage')
      }]
    };
  },
  methods: {
    regenerateNavigation: function regenerateNavigation() {
      var _this = this;

      this.Generate().then(function () {
        _this.isLoading = false;
      });
    },
    afterSubmit: function afterSubmit() {
      this.regenerateNavigation();
    }
  },
  mounted: function mounted() {
    this.getInitialData();
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/app/meeting/config/general.vue?vue&type=template&id=536b42dc&":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/app/meeting/config/general.vue?vue&type=template&id=536b42dc& ***!
  \************************************************************************************************************************************************************************************************************************/
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
              { staticClass: "col-12 col-md-6 mb-3" },
              [
                _c(
                  "switch-wrapper",
                  {
                    attrs: {
                      label: _vm.$t(
                        "meeting.config.allow_deleting_ended_meetings"
                      )
                    }
                  },
                  [
                    _c("base-switch", {
                      model: {
                        value: _vm.formData.allowDeletingEndedMeetings,
                        callback: function($$v) {
                          _vm.$set(
                            _vm.formData,
                            "allowDeletingEndedMeetings",
                            $$v
                          )
                        },
                        expression: "formData.allowDeletingEndedMeetings"
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
                _c(
                  "switch-wrapper",
                  {
                    attrs: {
                      label: _vm.$t(
                        "meeting.config.allow_deleting_cancelled_meetings"
                      )
                    }
                  },
                  [
                    _c("base-switch", {
                      model: {
                        value: _vm.formData.allowDeletingCancelledMeetings,
                        callback: function($$v) {
                          _vm.$set(
                            _vm.formData,
                            "allowDeletingCancelledMeetings",
                            $$v
                          )
                        },
                        expression: "formData.allowDeletingCancelledMeetings"
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
                _c(
                  "switch-wrapper",
                  {
                    attrs: {
                      label: _vm.$t("global.need_reload", {
                        attribute: _vm.$t("general.card_layout")
                      })
                    }
                  },
                  [
                    _c("base-switch", {
                      model: {
                        value: _vm.formData.cardLayout,
                        callback: function($$v) {
                          _vm.$set(_vm.formData, "cardLayout", $$v)
                        },
                        expression: "formData.cardLayout"
                      }
                    })
                  ],
                  1
                )
              ],
              1
            ),
            _vm._v(" "),
            _vm.allowExtraInput
              ? _c(
                  "div",
                  { staticClass: "col-12 col-md-6 mb-3" },
                  [
                    _c(
                      "switch-wrapper",
                      {
                        attrs: {
                          label: _vm.$t("meeting.config.enable_paid_meeting")
                        }
                      },
                      [
                        _c("base-switch", {
                          model: {
                            value: _vm.formData.enablePaidMeeting,
                            callback: function($$v) {
                              _vm.$set(_vm.formData, "enablePaidMeeting", $$v)
                            },
                            expression: "formData.enablePaidMeeting"
                          }
                        })
                      ],
                      1
                    )
                  ],
                  1
                )
              : _vm._e(),
            _vm._v(" "),
            _c("div", { staticClass: "col-12" }),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "col-12 col-md-6 mb-3" },
              [
                _c("base-input", {
                  attrs: {
                    label: _vm.$t("meeting.config.instant_meeting_auto_ended"),
                    type: "number",
                    error: _vm.formErrors.instantMeetingAutoEnded,
                    "select-on-focus": "",
                    "addon-right-text": _vm.$t("list.general.durations.minutes")
                  },
                  on: {
                    "update:error": function($event) {
                      return _vm.$set(
                        _vm.formErrors,
                        "instantMeetingAutoEnded",
                        $event
                      )
                    },
                    wheel: function($event) {
                      $event.stopPropagation()
                      $event.preventDefault()
                    }
                  },
                  model: {
                    value: _vm.formData.instantMeetingAutoEnded,
                    callback: function($$v) {
                      _vm.$set(_vm.formData, "instantMeetingAutoEnded", $$v)
                    },
                    expression: "formData.instantMeetingAutoEnded"
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
                    label: _vm.$t("meeting.config.max_participant_count"),
                    type: "number",
                    error: _vm.formErrors.maxParticipantCount,
                    "select-on-focus": ""
                  },
                  on: {
                    "update:error": function($event) {
                      return _vm.$set(
                        _vm.formErrors,
                        "maxParticipantCount",
                        $event
                      )
                    },
                    wheel: function($event) {
                      $event.stopPropagation()
                      $event.preventDefault()
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
            _vm.formData.cardLayout
              ? _c(
                  "div",
                  { staticClass: "col-12 col-md-6 mb-3" },
                  [
                    _c("base-select", {
                      attrs: {
                        options: _vm.cardLayoutDesigns,
                        label: _vm.$t("meeting.config.card_layout_design"),
                        "allow-empty": false,
                        "preselect-first": "",
                        simple: "",
                        "track-by": "uuid",
                        "show-by": "label"
                      },
                      model: {
                        value: _vm.formData.cardLayoutDesign,
                        callback: function($$v) {
                          _vm.$set(_vm.formData, "cardLayoutDesign", $$v)
                        },
                        expression: "formData.cardLayoutDesign"
                      }
                    })
                  ],
                  1
                )
              : _vm._e()
          ]),
          _vm._v(" "),
          _c("h5", { staticClass: "mb-4 mt-5 pb-2 border-bottom" }, [
            _vm._v(_vm._s(_vm.$t("meeting.config.miscellaneous")))
          ]),
          _vm._v(" "),
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
                    attrs: {
                      label: _vm.$t("meeting.config.enable_link_sharing")
                    }
                  },
                  [
                    _c("base-switch", {
                      model: {
                        value: _vm.formData.enableLinkSharing,
                        callback: function($$v) {
                          _vm.$set(_vm.formData, "enableLinkSharing", $$v)
                        },
                        expression: "formData.enableLinkSharing"
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
                    attrs: { label: _vm.$t("meeting.config.enable_whiteboard") }
                  },
                  [
                    _c("base-switch", {
                      model: {
                        value: _vm.formData.enableWhiteboard,
                        callback: function($$v) {
                          _vm.$set(_vm.formData, "enableWhiteboard", $$v)
                        },
                        expression: "formData.enableWhiteboard"
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
              { staticClass: "col-12 col-md-4 mb-3" },
              [
                _c(
                  "switch-wrapper",
                  { attrs: { label: _vm.$t("meeting.config.mirrored_video") } },
                  [
                    _c("base-switch", {
                      model: {
                        value: _vm.formData.mirroredVideo,
                        callback: function($$v) {
                          _vm.$set(_vm.formData, "mirroredVideo", $$v)
                        },
                        expression: "formData.mirroredVideo"
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
                  { attrs: { label: _vm.$t("meeting.config.disable_scroll") } },
                  [
                    _c("base-switch", {
                      model: {
                        value: _vm.formData.disableScroll,
                        callback: function($$v) {
                          _vm.$set(_vm.formData, "disableScroll", $$v)
                        },
                        expression: "formData.disableScroll"
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
                    attrs: { label: _vm.$t("meeting.config.speech_detection") }
                  },
                  [
                    _c("base-switch", {
                      model: {
                        value: _vm.formData.speechDetection,
                        callback: function($$v) {
                          _vm.$set(_vm.formData, "speechDetection", $$v)
                        },
                        expression: "formData.speechDetection"
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
                      label: _vm.$t("meeting.config.mute_participants_on_start")
                    }
                  },
                  [
                    _c("base-switch", {
                      model: {
                        value: _vm.formData.muteParticipantsOnStart,
                        callback: function($$v) {
                          _vm.$set(_vm.formData, "muteParticipantsOnStart", $$v)
                        },
                        expression: "formData.muteParticipantsOnStart"
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
                      label: _vm.$t(
                        "meeting.config.allow_joining_without_devices"
                      )
                    }
                  },
                  [
                    _c("base-switch", {
                      model: {
                        value: _vm.formData.allowJoiningWithoutDevices,
                        callback: function($$v) {
                          _vm.$set(
                            _vm.formData,
                            "allowJoiningWithoutDevices",
                            $$v
                          )
                        },
                        expression: "formData.allowJoiningWithoutDevices"
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
                      label: _vm.$t("meeting.config.ask_host_before_joining")
                    }
                  },
                  [
                    _c("base-switch", {
                      model: {
                        value: _vm.formData.askHostBeforeJoining,
                        callback: function($$v) {
                          _vm.$set(_vm.formData, "askHostBeforeJoining", $$v)
                        },
                        expression: "formData.askHostBeforeJoining"
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
                      label: _vm.$t("meeting.config.prefer_rear_camera_first")
                    }
                  },
                  [
                    _c("base-switch", {
                      model: {
                        value: _vm.formData.preferRearCameraFirst,
                        callback: function($$v) {
                          _vm.$set(_vm.formData, "preferRearCameraFirst", $$v)
                        },
                        expression: "formData.preferRearCameraFirst"
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
                      label: _vm.$t("meeting.config.enable_user_avatar")
                    }
                  },
                  [
                    _c("base-switch", {
                      model: {
                        value: _vm.formData.enableUserAvatar,
                        callback: function($$v) {
                          _vm.$set(_vm.formData, "enableUserAvatar", $$v)
                        },
                        expression: "formData.enableUserAvatar"
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
                      label: _vm.$t("meeting.config.enable_full_user_avatar")
                    }
                  },
                  [
                    _c("base-switch", {
                      model: {
                        value: _vm.formData.enableFullUserAvatar,
                        callback: function($$v) {
                          _vm.$set(_vm.formData, "enableFullUserAvatar", $$v)
                        },
                        expression: "formData.enableFullUserAvatar"
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
                      label: _vm.$t("meeting.config.enable_meeting_info")
                    }
                  },
                  [
                    _c("base-switch", {
                      model: {
                        value: _vm.formData.enableMeetingInfo,
                        callback: function($$v) {
                          _vm.$set(_vm.formData, "enableMeetingInfo", $$v)
                        },
                        expression: "formData.enableMeetingInfo"
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
                      label: _vm.$t("meeting.config.force_update_username")
                    }
                  },
                  [
                    _c("base-switch", {
                      model: {
                        value: _vm.formData.forceUpdateUsername,
                        callback: function($$v) {
                          _vm.$set(_vm.formData, "forceUpdateUsername", $$v)
                        },
                        expression: "formData.forceUpdateUsername"
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
          _c("div", { staticClass: "row" }, [
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
          _c("h5", { staticClass: "mb-4 mt-5 pb-2 border-bottom" }, [
            _vm._v(_vm._s(_vm.$t("meeting.config.for_debugging")))
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "row" }, [
            _c(
              "div",
              { staticClass: "col-12 col-md-4 mb-3" },
              [
                _c(
                  "switch-wrapper",
                  { attrs: { label: _vm.$t("meeting.config.debug_mode") } },
                  [
                    _c("base-switch", {
                      model: {
                        value: _vm.formData.debugMode,
                        callback: function($$v) {
                          _vm.$set(_vm.formData, "debugMode", $$v)
                        },
                        expression: "formData.debugMode"
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
                  { attrs: { label: _vm.$t("meeting.config.force_turn") } },
                  [
                    _c("base-switch", {
                      model: {
                        value: _vm.formData.forceTurn,
                        callback: function($$v) {
                          _vm.$set(_vm.formData, "forceTurn", $$v)
                        },
                        expression: "formData.forceTurn"
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
                    _c("i", { staticClass: "fas fa-save" }),
                    _vm._v(" " + _vm._s(_vm.$t("general.save")))
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

/***/ "./resources/js/views/app/meeting/config/general.vue":
/*!***********************************************************!*\
  !*** ./resources/js/views/app/meeting/config/general.vue ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _general_vue_vue_type_template_id_536b42dc___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./general.vue?vue&type=template&id=536b42dc& */ "./resources/js/views/app/meeting/config/general.vue?vue&type=template&id=536b42dc&");
/* harmony import */ var _general_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./general.vue?vue&type=script&lang=js& */ "./resources/js/views/app/meeting/config/general.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _general_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _general_vue_vue_type_template_id_536b42dc___WEBPACK_IMPORTED_MODULE_0__["render"],
  _general_vue_vue_type_template_id_536b42dc___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/app/meeting/config/general.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/app/meeting/config/general.vue?vue&type=script&lang=js&":
/*!************************************************************************************!*\
  !*** ./resources/js/views/app/meeting/config/general.vue?vue&type=script&lang=js& ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_general_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./general.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/app/meeting/config/general.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_general_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/app/meeting/config/general.vue?vue&type=template&id=536b42dc&":
/*!******************************************************************************************!*\
  !*** ./resources/js/views/app/meeting/config/general.vue?vue&type=template&id=536b42dc& ***!
  \******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_general_vue_vue_type_template_id_536b42dc___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./general.vue?vue&type=template&id=536b42dc& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/app/meeting/config/general.vue?vue&type=template&id=536b42dc&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_general_vue_vue_type_template_id_536b42dc___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_general_vue_vue_type_template_id_536b42dc___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=general.js.map?id=e3031eb5cfe482142c67