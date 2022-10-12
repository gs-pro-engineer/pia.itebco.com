(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app/meeting/config"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/app/meeting/config.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/app/meeting/config.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************/
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
        enableAutoRecording: false,
        autoUploadRecording: false,
        autoUploadRecorded: false,
        canStopAutoRecording: false,
        enableHandGesture: true,
        enableFileSharing: true,
        enableLinkSharing: true,
        enableWhiteboard: true,
        footerAutoHide: false,
        muteParticipantsOnStart: false,
        speechDetection: false,
        allowJoiningWithoutDevices: false,
        pamOpenJoinAsGuestPage: false,
        pamEnableScreenSharingForGuest: false,
        pamEnableLinkSharingForGuest: false,
        pamEnableWhiteboardForGuest: false,
        enableSnapshot: false,
        anyoneCanTakeSnapshot: false,
        enableSnapshotAlert: false,
        snapshotAlertToUserOnly: false,
        snapshotAlertToModerators: false,
        askHostBeforeJoining: false,
        preferRearCameraFirst: false,
        enableUserAvatar: false,
        enableFullUserAvatar: false,
        enableMeetingInfo: false,
        forceUpdateUsername: false,
        autoEndMeeting: false,
        alertBeforeAutoEnd: false,
        canSnoozeAutoEnd: false,
        canCancelAutoEnd: false,
        alertBeforeAutoEndTime: 1,
        maxParticipantCount: 'fullpage',
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
    },
    autoUploadRecordedChanged: function autoUploadRecordedChanged() {
      this.formData.autoUploadRecording = this.formData.autoUploadRecorded ? false : this.formData.autoUploadRecording;
    },
    autoUploadRecordingChanged: function autoUploadRecordingChanged() {
      this.formData.autoUploadRecorded = this.formData.autoUploadRecording ? false : this.formData.autoUploadRecorded;
    },
    beforeSubmit: function beforeSubmit() {
      return !(this.formData.autoUploadRecording && this.formData.autoUploadRecorded);
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/app/meeting/config.vue?vue&type=template&id=6dcaac83&":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/app/meeting/config.vue?vue&type=template&id=6dcaac83& ***!
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
          _vm.configs.meeting && _vm.configs.meeting.enablePam
            ? [
                _c("h5", { staticClass: "mb-4 pb-2 border-bottom" }, [
                  _vm._v(_vm._s(_vm.$t("meeting.publicly_accessible_meetings")))
                ]),
                _vm._v(" "),
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
                              "meeting.config.pam_open_join_as_guest_page"
                            )
                          }
                        },
                        [
                          _c("base-switch", {
                            model: {
                              value: _vm.formData.pamOpenJoinAsGuestPage,
                              callback: function($$v) {
                                _vm.$set(
                                  _vm.formData,
                                  "pamOpenJoinAsGuestPage",
                                  $$v
                                )
                              },
                              expression: "formData.pamOpenJoinAsGuestPage"
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
                              "meeting.config.pam_enable_screen_sharing_for_guest"
                            )
                          }
                        },
                        [
                          _c("base-switch", {
                            model: {
                              value:
                                _vm.formData.pamEnableScreenSharingForGuest,
                              callback: function($$v) {
                                _vm.$set(
                                  _vm.formData,
                                  "pamEnableScreenSharingForGuest",
                                  $$v
                                )
                              },
                              expression:
                                "formData.pamEnableScreenSharingForGuest"
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
                              "meeting.config.pam_enable_link_sharing_for_guest"
                            )
                          }
                        },
                        [
                          _c("base-switch", {
                            model: {
                              value: _vm.formData.pamEnableLinkSharingForGuest,
                              callback: function($$v) {
                                _vm.$set(
                                  _vm.formData,
                                  "pamEnableLinkSharingForGuest",
                                  $$v
                                )
                              },
                              expression:
                                "formData.pamEnableLinkSharingForGuest"
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
                              "meeting.config.pam_enable_whiteboard_for_guest"
                            )
                          }
                        },
                        [
                          _c("base-switch", {
                            model: {
                              value: _vm.formData.pamEnableWhiteboardForGuest,
                              callback: function($$v) {
                                _vm.$set(
                                  _vm.formData,
                                  "pamEnableWhiteboardForGuest",
                                  $$v
                                )
                              },
                              expression: "formData.pamEnableWhiteboardForGuest"
                            }
                          })
                        ],
                        1
                      )
                    ],
                    1
                  )
                ])
              ]
            : _vm._e(),
          _vm._v(" "),
          _c("h5", { staticClass: "mb-4 mt-5 pb-2 border-bottom" }, [
            _vm._v(_vm._s(_vm.$t("meeting.config.snapshot")))
          ]),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "row" },
            [
              _c(
                "div",
                { staticClass: "col-12 col-md-6 mb-3" },
                [
                  _c(
                    "switch-wrapper",
                    {
                      attrs: { label: _vm.$t("meeting.config.enable_snapshot") }
                    },
                    [
                      _c("base-switch", {
                        model: {
                          value: _vm.formData.enableSnapshot,
                          callback: function($$v) {
                            _vm.$set(_vm.formData, "enableSnapshot", $$v)
                          },
                          expression: "formData.enableSnapshot"
                        }
                      })
                    ],
                    1
                  )
                ],
                1
              ),
              _vm._v(" "),
              _vm.formData.enableSnapshot
                ? [
                    _c(
                      "div",
                      { staticClass: "col-12 col-md-6 mb-3" },
                      [
                        _c(
                          "switch-wrapper",
                          {
                            attrs: {
                              label: _vm.$t(
                                "meeting.config.anyone_can_take_snapshot"
                              )
                            }
                          },
                          [
                            _c("base-switch", {
                              model: {
                                value: _vm.formData.anyoneCanTakeSnapshot,
                                callback: function($$v) {
                                  _vm.$set(
                                    _vm.formData,
                                    "anyoneCanTakeSnapshot",
                                    $$v
                                  )
                                },
                                expression: "formData.anyoneCanTakeSnapshot"
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
                                "meeting.config.enable_snapshot_alert"
                              )
                            }
                          },
                          [
                            _c("base-switch", {
                              model: {
                                value: _vm.formData.enableSnapshotAlert,
                                callback: function($$v) {
                                  _vm.$set(
                                    _vm.formData,
                                    "enableSnapshotAlert",
                                    $$v
                                  )
                                },
                                expression: "formData.enableSnapshotAlert"
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
                                "meeting.config.snapshot_alert_to_user_only"
                              )
                            }
                          },
                          [
                            _c("base-switch", {
                              model: {
                                value: _vm.formData.snapshotAlertToUserOnly,
                                callback: function($$v) {
                                  _vm.$set(
                                    _vm.formData,
                                    "snapshotAlertToUserOnly",
                                    $$v
                                  )
                                },
                                expression: "formData.snapshotAlertToUserOnly"
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
                                "meeting.config.snapshot_alert_to_moderators"
                              )
                            }
                          },
                          [
                            _c("base-switch", {
                              model: {
                                value: _vm.formData.snapshotAlertToModerators,
                                callback: function($$v) {
                                  _vm.$set(
                                    _vm.formData,
                                    "snapshotAlertToModerators",
                                    $$v
                                  )
                                },
                                expression: "formData.snapshotAlertToModerators"
                              }
                            })
                          ],
                          1
                        )
                      ],
                      1
                    )
                  ]
                : _vm._e()
            ],
            2
          ),
          _vm._v(" "),
          _c("h5", { staticClass: "mb-4 mt-5 pb-2 border-bottom" }, [
            _vm._v(_vm._s(_vm.$t("meeting.config.recording")))
          ]),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "row" },
            [
              _c(
                "div",
                { staticClass: "col-12 col-md-6 mb-3" },
                [
                  _c(
                    "switch-wrapper",
                    {
                      attrs: {
                        label: _vm.$t("meeting.config.enable_recording")
                      }
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
              _vm.formData.enableRecording
                ? [
                    _c(
                      "div",
                      { staticClass: "col-12 col-md-6 mb-3" },
                      [
                        _c(
                          "switch-wrapper",
                          {
                            attrs: {
                              label: _vm.$t(
                                "meeting.config.enable_auto_recording"
                              )
                            }
                          },
                          [
                            _c("base-switch", {
                              model: {
                                value: _vm.formData.enableAutoRecording,
                                callback: function($$v) {
                                  _vm.$set(
                                    _vm.formData,
                                    "enableAutoRecording",
                                    $$v
                                  )
                                },
                                expression: "formData.enableAutoRecording"
                              }
                            })
                          ],
                          1
                        )
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _vm.formData.enableAutoRecording
                      ? _c(
                          "div",
                          { staticClass: "col-12 col-md-6 mb-3" },
                          [
                            _c(
                              "switch-wrapper",
                              {
                                attrs: {
                                  label: _vm.$t(
                                    "meeting.config.can_stop_auto_recording"
                                  )
                                }
                              },
                              [
                                _c("base-switch", {
                                  model: {
                                    value: _vm.formData.canStopAutoRecording,
                                    callback: function($$v) {
                                      _vm.$set(
                                        _vm.formData,
                                        "canStopAutoRecording",
                                        $$v
                                      )
                                    },
                                    expression: "formData.canStopAutoRecording"
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
                    _c(
                      "div",
                      { staticClass: "col-12 col-md-6 mb-3" },
                      [
                        _c(
                          "switch-wrapper",
                          {
                            attrs: {
                              label: _vm.$t(
                                "meeting.config.auto_upload_recording"
                              )
                            }
                          },
                          [
                            _c("base-switch", {
                              on: { input: _vm.autoUploadRecordingChanged },
                              model: {
                                value: _vm.formData.autoUploadRecording,
                                callback: function($$v) {
                                  _vm.$set(
                                    _vm.formData,
                                    "autoUploadRecording",
                                    $$v
                                  )
                                },
                                expression: "formData.autoUploadRecording"
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
                                "meeting.config.auto_upload_recorded"
                              )
                            }
                          },
                          [
                            _c("base-switch", {
                              on: { input: _vm.autoUploadRecordedChanged },
                              model: {
                                value: _vm.formData.autoUploadRecorded,
                                callback: function($$v) {
                                  _vm.$set(
                                    _vm.formData,
                                    "autoUploadRecorded",
                                    $$v
                                  )
                                },
                                expression: "formData.autoUploadRecorded"
                              }
                            })
                          ],
                          1
                        )
                      ],
                      1
                    )
                  ]
                : _vm._e()
            ],
            2
          ),
          _vm._v(" "),
          _c("h5", { staticClass: "mb-4 mt-5 pb-2 border-bottom" }, [
            _vm._v(_vm._s(_vm.$t("meeting.config.auto_end")))
          ]),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "row" },
            [
              _c(
                "div",
                { staticClass: "col-12 col-md-6 mb-3" },
                [
                  _c(
                    "switch-wrapper",
                    {
                      attrs: {
                        label: _vm.$t("meeting.config.auto_end_meeting")
                      }
                    },
                    [
                      _c("base-switch", {
                        model: {
                          value: _vm.formData.autoEndMeeting,
                          callback: function($$v) {
                            _vm.$set(_vm.formData, "autoEndMeeting", $$v)
                          },
                          expression: "formData.autoEndMeeting"
                        }
                      })
                    ],
                    1
                  )
                ],
                1
              ),
              _vm._v(" "),
              _vm.formData.autoEndMeeting
                ? [
                    _c(
                      "div",
                      { staticClass: "col-12 col-md-6 mb-3" },
                      [
                        _c(
                          "switch-wrapper",
                          {
                            attrs: {
                              label: _vm.$t(
                                "meeting.config.alert_before_auto_end"
                              )
                            }
                          },
                          [
                            _c("base-switch", {
                              model: {
                                value: _vm.formData.alertBeforeAutoEnd,
                                callback: function($$v) {
                                  _vm.$set(
                                    _vm.formData,
                                    "alertBeforeAutoEnd",
                                    $$v
                                  )
                                },
                                expression: "formData.alertBeforeAutoEnd"
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
                                "meeting.config.can_snooze_auto_end"
                              )
                            }
                          },
                          [
                            _c("base-switch", {
                              model: {
                                value: _vm.formData.canSnoozeAutoEnd,
                                callback: function($$v) {
                                  _vm.$set(
                                    _vm.formData,
                                    "canSnoozeAutoEnd",
                                    $$v
                                  )
                                },
                                expression: "formData.canSnoozeAutoEnd"
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
                                "meeting.config.can_cancel_auto_end"
                              )
                            }
                          },
                          [
                            _c("base-switch", {
                              model: {
                                value: _vm.formData.canCancelAutoEnd,
                                callback: function($$v) {
                                  _vm.$set(
                                    _vm.formData,
                                    "canCancelAutoEnd",
                                    $$v
                                  )
                                },
                                expression: "formData.canCancelAutoEnd"
                              }
                            })
                          ],
                          1
                        )
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-12" }),
                    _vm._v(" "),
                    _vm.formData.alertBeforeAutoEnd
                      ? _c(
                          "div",
                          { staticClass: "col-12 col-md-6 mb-3" },
                          [
                            _c("base-input", {
                              attrs: {
                                label: _vm.$t(
                                  "meeting.config.alert_before_auto_end_time"
                                ),
                                type: "number",
                                error: _vm.formErrors.alertBeforeAutoEndTime,
                                "select-on-focus": "",
                                min: 1,
                                step: 1
                              },
                              on: {
                                "update:error": function($event) {
                                  return _vm.$set(
                                    _vm.formErrors,
                                    "alertBeforeAutoEndTime",
                                    $event
                                  )
                                },
                                wheel: function($event) {
                                  $event.stopPropagation()
                                  $event.preventDefault()
                                }
                              },
                              model: {
                                value: _vm.formData.alertBeforeAutoEndTime,
                                callback: function($$v) {
                                  _vm.$set(
                                    _vm.formData,
                                    "alertBeforeAutoEndTime",
                                    $$v
                                  )
                                },
                                expression: "formData.alertBeforeAutoEndTime"
                              }
                            })
                          ],
                          1
                        )
                      : _vm._e(),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "col-12 col-md-6 mb-3" },
                      [
                        _c("base-input", {
                          attrs: {
                            label: _vm.$t(
                              "meeting.config.end_time_snooze_period"
                            ),
                            type: "number",
                            error: _vm.formErrors.endTimeSnoozePeriod,
                            "select-on-focus": "",
                            min: 1,
                            max: 120,
                            step: 1
                          },
                          on: {
                            "update:error": function($event) {
                              return _vm.$set(
                                _vm.formErrors,
                                "endTimeSnoozePeriod",
                                $event
                              )
                            },
                            wheel: function($event) {
                              $event.stopPropagation()
                              $event.preventDefault()
                            }
                          },
                          model: {
                            value: _vm.formData.endTimeSnoozePeriod,
                            callback: function($$v) {
                              _vm.$set(_vm.formData, "endTimeSnoozePeriod", $$v)
                            },
                            expression: "formData.endTimeSnoozePeriod"
                          }
                        })
                      ],
                      1
                    )
                  ]
                : _vm._e()
            ],
            2
          ),
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
            ),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "col-12 col-md-4 mb-3" },
              [
                _c(
                  "switch-wrapper",
                  {
                    attrs: { label: _vm.$t("meeting.config.auto_end_meeting") }
                  },
                  [
                    _c("base-switch", {
                      model: {
                        value: _vm.formData.autoEndMeeting,
                        callback: function($$v) {
                          _vm.$set(_vm.formData, "autoEndMeeting", $$v)
                        },
                        expression: "formData.autoEndMeeting"
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
                      label: _vm.$t("meeting.config.alert_before_auto_end")
                    }
                  },
                  [
                    _c("base-switch", {
                      model: {
                        value: _vm.formData.alertBeforeAutoEnd,
                        callback: function($$v) {
                          _vm.$set(_vm.formData, "alertBeforeAutoEnd", $$v)
                        },
                        expression: "formData.alertBeforeAutoEnd"
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
                _c("base-input", {
                  attrs: {
                    label: _vm.$t("meeting.config.alert_before_auto_end_time"),
                    type: "number",
                    error: _vm.formErrors.alertBeforeAutoEndTime,
                    "select-on-focus": "",
                    min: 1,
                    step: 1
                  },
                  on: {
                    "update:error": function($event) {
                      return _vm.$set(
                        _vm.formErrors,
                        "alertBeforeAutoEndTime",
                        $event
                      )
                    },
                    wheel: function($event) {
                      $event.stopPropagation()
                      $event.preventDefault()
                    }
                  },
                  model: {
                    value: _vm.formData.alertBeforeAutoEndTime,
                    callback: function($$v) {
                      _vm.$set(_vm.formData, "alertBeforeAutoEndTime", $$v)
                    },
                    expression: "formData.alertBeforeAutoEndTime"
                  }
                })
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
            ),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "col-12 col-md-4" },
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
        ],
        2
      )
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/views/app/meeting/config.vue":
/*!***************************************************!*\
  !*** ./resources/js/views/app/meeting/config.vue ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _config_vue_vue_type_template_id_6dcaac83___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./config.vue?vue&type=template&id=6dcaac83& */ "./resources/js/views/app/meeting/config.vue?vue&type=template&id=6dcaac83&");
/* harmony import */ var _config_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./config.vue?vue&type=script&lang=js& */ "./resources/js/views/app/meeting/config.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _config_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _config_vue_vue_type_template_id_6dcaac83___WEBPACK_IMPORTED_MODULE_0__["render"],
  _config_vue_vue_type_template_id_6dcaac83___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/app/meeting/config.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/app/meeting/config.vue?vue&type=script&lang=js&":
/*!****************************************************************************!*\
  !*** ./resources/js/views/app/meeting/config.vue?vue&type=script&lang=js& ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_config_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./config.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/app/meeting/config.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_config_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/app/meeting/config.vue?vue&type=template&id=6dcaac83&":
/*!**********************************************************************************!*\
  !*** ./resources/js/views/app/meeting/config.vue?vue&type=template&id=6dcaac83& ***!
  \**********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_config_vue_vue_type_template_id_6dcaac83___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./config.vue?vue&type=template&id=6dcaac83& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/app/meeting/config.vue?vue&type=template&id=6dcaac83&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_config_vue_vue_type_template_id_6dcaac83___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_config_vue_vue_type_template_id_6dcaac83___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=config.js.map?id=9cccc3cc4a8e5097f045