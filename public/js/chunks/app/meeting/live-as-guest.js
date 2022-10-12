(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app/meeting/live-as-guest"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/app/meeting/live-as-guest.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/app/meeting/live-as-guest.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _mixins_meeting_for_guest__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @mixins/meeting-for-guest */ "./resources/js/mixins/meeting-for-guest.js");
/* harmony import */ var _mixins_live_for_guest__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @mixins/live-for-guest */ "./resources/js/mixins/live-for-guest.js");
/* harmony import */ var _components_AppLogo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @components/AppLogo */ "./resources/js/components/AppLogo.vue");
/* harmony import */ var _core_components_AnimatedNumber__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @core/components/AnimatedNumber */ "./resources/js/core/components/AnimatedNumber.vue");
/* harmony import */ var vue2_flip_countdown__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vue2-flip-countdown */ "./node_modules/vue2-flip-countdown/dist/vue2-flip-countdown.js");
/* harmony import */ var vue2_flip_countdown__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(vue2_flip_countdown__WEBPACK_IMPORTED_MODULE_4__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  mixins: [_mixins_live_for_guest__WEBPACK_IMPORTED_MODULE_1__["default"], _mixins_meeting_for_guest__WEBPACK_IMPORTED_MODULE_0__["default"]],
  components: {
    AppLogo: _components_AppLogo__WEBPACK_IMPORTED_MODULE_2__["default"],
    AnimatedNumber: _core_components_AnimatedNumber__WEBPACK_IMPORTED_MODULE_3__["default"],
    FlipCountdown: vue2_flip_countdown__WEBPACK_IMPORTED_MODULE_4___default.a
  },
  watch: {
    locked: function locked(newVal, oldVal) {
      if (newVal) {
        var toPath = this.$route.fullPath;
        this.$router.push({
          name: 'authLock',
          query: {
            ref: toPath
          }
        });
      }
    }
  },
  methods: {},
  mounted: function mounted() {}
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/app/meeting/live-as-guest.vue?vue&type=template&id=92d58fe6&":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/app/meeting/live-as-guest.vue?vue&type=template&id=92d58fe6& ***!
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
  return _c(
    "base-container",
    {
      class: [
        "meeting-page",
        { "auto-hide-footer": _vm.pageConfigs.footerAutoHide && _vm.hasVideos },
        { pulse: _vm.recording },
        {
          "mirrored-video":
            _vm.configs.meeting && _vm.configs.meeting.mirroredVideo
        }
      ],
      attrs: {
        "with-loader": "",
        "is-loading": _vm.isLoading,
        "loader-color": _vm.vars.loaderColor,
        "overlay-color": _vm.uiConfigs.pageColorSchemeType,
        "loader-size": "screen",
        "data-page-background-color": _vm.uiConfigs.pageBackgroundColor,
        "data-card-background-color": _vm.uiConfigs.pageContainerBackgroundColor
      }
    },
    [
      !_vm.duplicateTab
        ? [
            _c(
              "div",
              {
                class: ["meeting-footer", { "has-videos": _vm.hasVideos }],
                attrs: {
                  "data-footer-background-color": _vm.uiConfigs.leftSidebarColor
                }
              },
              [
                _c(
                  "div",
                  { staticClass: "logo-wrapper" },
                  [
                    _c("app-logo", {
                      attrs: { place: "sidebar", size: "sm", tag: "span" }
                    })
                  ],
                  1
                ),
                _vm._v(" "),
                _vm.entity && _vm.entity.status
                  ? _c(
                      "div",
                      { staticClass: "meeting-actions meeting-actions-center" },
                      [
                        _vm.pageConfigs.showEnableAudioBtn
                          ? [
                              _vm.pageConfigs.enableAudio
                                ? _c(
                                    "button",
                                    {
                                      directives: [
                                        {
                                          name: "b-tooltip",
                                          rawName: "v-b-tooltip.hover.d500",
                                          modifiers: { hover: true, d500: true }
                                        }
                                      ],
                                      staticClass: "btn action",
                                      attrs: {
                                        type: "button",
                                        title: _vm.$t("meeting.mute_audio")
                                      },
                                      on: { click: _vm.toggleAudio }
                                    },
                                    [
                                      _c("i", {
                                        staticClass: "fas fa-microphone"
                                      })
                                    ]
                                  )
                                : _c(
                                    "button",
                                    {
                                      directives: [
                                        {
                                          name: "b-tooltip",
                                          rawName: "v-b-tooltip.hover.d500",
                                          modifiers: { hover: true, d500: true }
                                        }
                                      ],
                                      staticClass: "btn action disabled-text",
                                      attrs: {
                                        type: "button",
                                        title: _vm.$t("meeting.unmute_audio")
                                      },
                                      on: { click: _vm.toggleAudio }
                                    },
                                    [
                                      _c("i", {
                                        staticClass: "fas fa-microphone-slash"
                                      })
                                    ]
                                  )
                            ]
                          : _vm._e(),
                        _vm._v(" "),
                        _vm.pageConfigs.showEnableVideoBtn
                          ? [
                              _vm.pageConfigs.enableVideo
                                ? _c(
                                    "button",
                                    {
                                      directives: [
                                        {
                                          name: "b-tooltip",
                                          rawName: "v-b-tooltip.hover.d500",
                                          modifiers: { hover: true, d500: true }
                                        }
                                      ],
                                      staticClass: "btn action",
                                      attrs: {
                                        type: "button",
                                        title: _vm.$t("meeting.mute_video")
                                      },
                                      on: { click: _vm.toggleVideo }
                                    },
                                    [_c("i", { staticClass: "fas fa-video" })]
                                  )
                                : _c(
                                    "button",
                                    {
                                      directives: [
                                        {
                                          name: "b-tooltip",
                                          rawName: "v-b-tooltip.hover.d500",
                                          modifiers: { hover: true, d500: true }
                                        }
                                      ],
                                      staticClass: "btn action disabled-text",
                                      attrs: {
                                        type: "button",
                                        title: _vm.$t("meeting.unmute_video")
                                      },
                                      on: { click: _vm.toggleVideo }
                                    },
                                    [
                                      _c("i", {
                                        staticClass: "fas fa-video-slash"
                                      })
                                    ]
                                  )
                            ]
                          : _vm._e(),
                        _vm._v(" "),
                        _vm.pageConfigs.showDeviceConfig
                          ? _c(
                              "button",
                              {
                                directives: [
                                  {
                                    name: "b-tooltip",
                                    rawName: "v-b-tooltip.hover.d500",
                                    modifiers: { hover: true, d500: true }
                                  }
                                ],
                                staticClass:
                                  "btn action d-sm-none d-md-inline-block",
                                attrs: {
                                  type: "button",
                                  title: _vm.$t("meeting.media_devices.setup")
                                },
                                on: { click: _vm.toggleDevicesModal }
                              },
                              [_c("i", { staticClass: "fas fa-cogs" })]
                            )
                          : _vm._e(),
                        _vm._v(" "),
                        _vm.videoList.length
                          ? [
                              _c(
                                "button",
                                {
                                  directives: [
                                    {
                                      name: "b-tooltip",
                                      rawName: "v-b-tooltip.hover.d500",
                                      modifiers: { hover: true, d500: true }
                                    }
                                  ],
                                  staticClass: "btn action danger-text",
                                  attrs: {
                                    type: "button",
                                    title: _vm.$t("meeting.leave_meeting")
                                  },
                                  on: { click: _vm.getOffline }
                                },
                                [_c("i", { staticClass: "fas fa-phone-slash" })]
                              ),
                              _vm._v(" "),
                              _vm.pageConfigs.enableScreenSharing &&
                              _vm.pageConfigs.pamEnableScreenSharingForGuest
                                ? [
                                    _vm.localScreenStreamid
                                      ? _c(
                                          "button",
                                          {
                                            directives: [
                                              {
                                                name: "b-tooltip",
                                                rawName:
                                                  "v-b-tooltip.hover.d500",
                                                modifiers: {
                                                  hover: true,
                                                  d500: true
                                                }
                                              }
                                            ],
                                            staticClass:
                                              "btn action disabled-text d-none d-lg-inline-block",
                                            attrs: {
                                              type: "button",
                                              title: _vm.$t(
                                                "meeting.stop_sharing_screen"
                                              )
                                            },
                                            on: { click: _vm.stopSharingScreen }
                                          },
                                          [
                                            _c("i", {
                                              staticClass: "fas fa-minus-square"
                                            })
                                          ]
                                        )
                                      : _c(
                                          "button",
                                          {
                                            directives: [
                                              {
                                                name: "b-tooltip",
                                                rawName:
                                                  "v-b-tooltip.hover.d500",
                                                modifiers: {
                                                  hover: true,
                                                  d500: true
                                                }
                                              }
                                            ],
                                            staticClass:
                                              "btn action d-none d-lg-inline-block",
                                            attrs: {
                                              type: "button",
                                              title: _vm.$t(
                                                "meeting.share_screen"
                                              )
                                            },
                                            on: { click: _vm.shareScreen }
                                          },
                                          [
                                            _c("i", {
                                              staticClass: "fas fa-desktop"
                                            })
                                          ]
                                        )
                                  ]
                                : _vm._e(),
                              _vm._v(" "),
                              _vm.pageConfigs.enableWhiteboard &&
                              _vm.pageConfigs.pamEnableWhiteboardForGuest
                                ? [
                                    _vm.showWhiteboard
                                      ? _c(
                                          "button",
                                          {
                                            directives: [
                                              {
                                                name: "b-tooltip",
                                                rawName:
                                                  "v-b-tooltip.hover.d500",
                                                modifiers: {
                                                  hover: true,
                                                  d500: true
                                                }
                                              }
                                            ],
                                            staticClass:
                                              "btn action danger-text d-none d-md-inline-block",
                                            attrs: {
                                              type: "button",
                                              title: _vm.$t(
                                                "meeting.hide_whiteboard"
                                              )
                                            },
                                            on: { click: _vm.toggleWhiteboard }
                                          },
                                          [
                                            _c("i", {
                                              staticClass:
                                                "fas fa-chalkboard-teacher"
                                            })
                                          ]
                                        )
                                      : _vm._e(),
                                    _vm._v(" "),
                                    _vm.showWhiteboard
                                      ? _c(
                                          "button",
                                          {
                                            directives: [
                                              {
                                                name: "b-tooltip",
                                                rawName:
                                                  "v-b-tooltip.hover.d500",
                                                modifiers: {
                                                  hover: true,
                                                  d500: true
                                                }
                                              }
                                            ],
                                            staticClass:
                                              "btn action danger-text d-none d-md-inline-block",
                                            attrs: {
                                              type: "button",
                                              title: _vm.$t(
                                                "meeting.clear_hide_whiteboard"
                                              )
                                            },
                                            on: {
                                              click:
                                                _vm.hideAndDestroyWhiteboard
                                            }
                                          },
                                          [
                                            _c("i", {
                                              staticClass:
                                                "fas fa-chalkboard-teacher mr-0"
                                            }),
                                            _c("i", {
                                              staticClass:
                                                "fas fa-times font-size-xs ml-1 font-size-xs text-danger"
                                            })
                                          ]
                                        )
                                      : _c(
                                          "button",
                                          {
                                            directives: [
                                              {
                                                name: "b-tooltip",
                                                rawName:
                                                  "v-b-tooltip.hover.d500",
                                                modifiers: {
                                                  hover: true,
                                                  d500: true
                                                }
                                              }
                                            ],
                                            staticClass:
                                              "btn action d-none d-md-inline-block",
                                            attrs: {
                                              type: "button",
                                              title: _vm.$t(
                                                "meeting.show_whiteboard"
                                              )
                                            },
                                            on: { click: _vm.toggleWhiteboard }
                                          },
                                          [
                                            _c("i", {
                                              staticClass:
                                                "fas fa-chalkboard-teacher"
                                            })
                                          ]
                                        )
                                  ]
                                : _vm._e(),
                              _vm._v(" "),
                              _vm.pageConfigs.enableHandGesture
                                ? [
                                    _vm.isHandUp
                                      ? _c(
                                          "button",
                                          {
                                            directives: [
                                              {
                                                name: "b-tooltip",
                                                rawName:
                                                  "v-b-tooltip.hover.d500",
                                                modifiers: {
                                                  hover: true,
                                                  d500: true
                                                }
                                              }
                                            ],
                                            staticClass:
                                              "btn action success-text",
                                            attrs: {
                                              type: "button",
                                              title: _vm.$t(
                                                "meeting.lower_hand"
                                              )
                                            },
                                            on: { click: _vm.toggleHandUp }
                                          },
                                          [
                                            _c("i", {
                                              staticClass: "far fa-hand-paper"
                                            })
                                          ]
                                        )
                                      : _c(
                                          "button",
                                          {
                                            directives: [
                                              {
                                                name: "b-tooltip",
                                                rawName:
                                                  "v-b-tooltip.hover.d500",
                                                modifiers: {
                                                  hover: true,
                                                  d500: true
                                                }
                                              }
                                            ],
                                            staticClass: "btn action",
                                            attrs: {
                                              type: "button",
                                              title: _vm.$t(
                                                "meeting.raise_hand"
                                              )
                                            },
                                            on: { click: _vm.toggleHandUp }
                                          },
                                          [
                                            _c("i", {
                                              staticClass: "fas fa-hand-paper"
                                            })
                                          ]
                                        )
                                  ]
                                : _vm._e()
                            ]
                          : _vm._e()
                      ],
                      2
                    )
                  : _vm._e(),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "meeting-actions meeting-actions-right" },
                  [
                    _vm.entity
                      ? [
                          _vm.entity.status &&
                          _vm.videoList.length &&
                          !(
                            _vm.pageConfigs.enableWhiteboard &&
                            _vm.showWhiteboard
                          )
                            ? _c(
                                "base-dropdown",
                                {
                                  staticClass:
                                    "more-actions d-none d-md-inline-block",
                                  attrs: {
                                    tag: "div",
                                    direction: "up",
                                    "menu-classes": "show-dropdown-up",
                                    position: "right"
                                  }
                                },
                                [
                                  _c(
                                    "button",
                                    {
                                      directives: [
                                        {
                                          name: "b-tooltip",
                                          rawName: "v-b-tooltip.hover.d500",
                                          modifiers: { hover: true, d500: true }
                                        }
                                      ],
                                      staticClass:
                                        "btn action grid-toggle-btn d-none d-md-inline-block",
                                      attrs: {
                                        slot: "title",
                                        type: "button",
                                        title: _vm.$t("meeting.change_layout")
                                      },
                                      slot: "title"
                                    },
                                    [
                                      _c("i", {
                                        staticClass: "fas fa-th-large"
                                      })
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "button",
                                    {
                                      staticClass:
                                        "dropdown-item d-flex justify-content-between align-items-center",
                                      attrs: { type: "button" },
                                      on: {
                                        click: function($event) {
                                          return _vm.toggleLayout("grid")
                                        }
                                      }
                                    },
                                    [
                                      _vm._v(
                                        _vm._s(_vm.$t("meeting.grid_layout")) +
                                          " "
                                      ),
                                      _c("i", {
                                        staticClass:
                                          "fas fa-check min-width-auto text-light",
                                        class: {
                                          "text-dark":
                                            _vm.pageConfigs.layout === "grid"
                                        }
                                      })
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "button",
                                    {
                                      staticClass:
                                        "dropdown-item d-flex justify-content-between align-items-center",
                                      attrs: { type: "button" },
                                      on: {
                                        click: function($event) {
                                          return _vm.toggleLayout("gallery")
                                        }
                                      }
                                    },
                                    [
                                      _vm._v(
                                        _vm._s(
                                          _vm.$t("meeting.gallery_layout")
                                        ) + " "
                                      ),
                                      _c("i", {
                                        staticClass:
                                          "fas fa-check min-width-auto text-light",
                                        class: {
                                          "text-dark":
                                            _vm.pageConfigs.layout === "gallery"
                                        }
                                      })
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _vm.pageConfigs.hasAgenda ||
                                  (_vm.pageConfigs.enableWhiteboard &&
                                    _vm.showWhiteboard)
                                    ? _c(
                                        "button",
                                        {
                                          staticClass:
                                            "dropdown-item d-flex justify-content-between align-items-center",
                                          attrs: { type: "button" },
                                          on: {
                                            click: function($event) {
                                              return _vm.toggleLayout(
                                                "presentation"
                                              )
                                            }
                                          }
                                        },
                                        [
                                          _vm._v(
                                            _vm._s(
                                              _vm.$t(
                                                "meeting.presentation_layout"
                                              )
                                            ) + " "
                                          ),
                                          _c("i", {
                                            staticClass:
                                              "fas fa-check min-width-auto text-light",
                                            class: {
                                              "text-dark":
                                                _vm.pageConfigs.layout ===
                                                "presentation"
                                            }
                                          })
                                        ]
                                      )
                                    : _vm._e(),
                                  _vm._v(" "),
                                  _c(
                                    "button",
                                    {
                                      staticClass:
                                        "dropdown-item d-flex justify-content-between align-items-center",
                                      attrs: { type: "button" },
                                      on: {
                                        click: function($event) {
                                          return _vm.toggleLayout("fullpage")
                                        }
                                      }
                                    },
                                    [
                                      _vm._v(
                                        _vm._s(
                                          _vm.$t("meeting.fullpage_layout")
                                        ) + " "
                                      ),
                                      _vm.pageConfigs.layout === "fullpage"
                                        ? _c("i", {
                                            staticClass:
                                              "fas fa-check min-width-auto text-light",
                                            class: {
                                              "text-dark":
                                                _vm.pageConfigs.layout ===
                                                "fullpage"
                                            }
                                          })
                                        : _vm._e()
                                    ]
                                  )
                                ]
                              )
                            : _vm._e(),
                          _vm._v(" "),
                          _vm.pageConfigs.enableChat &&
                          _vm.configs.chat &&
                          _vm.configs.chat.enabled &&
                          _vm.subscriptions &&
                          _vm.subscriptions.userPrivate &&
                          !_vm.entity.isBlocked
                            ? _c(
                                "button",
                                {
                                  directives: [
                                    {
                                      name: "b-tooltip",
                                      rawName: "v-b-tooltip.hover.d500",
                                      modifiers: { hover: true, d500: true }
                                    }
                                  ],
                                  class: [
                                    "btn action chats-toggle-btn",
                                    {
                                      pulse:
                                        _vm.totalUnreadMessages &&
                                        _vm.totalUnreadMessages > 0 &&
                                        !_vm.isChatBoxShown
                                    }
                                  ],
                                  attrs: {
                                    type: "button",
                                    title: _vm.$t(
                                      _vm.isChatBoxShown
                                        ? "global.hide"
                                        : "global.show",
                                      { attribute: _vm.$t("chat.chats") }
                                    )
                                  },
                                  on: { click: _vm.toggleChatBox }
                                },
                                [
                                  _c("i", {
                                    class: [
                                      _vm.isChatBoxShown
                                        ? "fas fa-comment-slash"
                                        : "far fa-comment"
                                    ]
                                  }),
                                  _vm._v(" "),
                                  _vm.totalUnreadMessages &&
                                  _vm.totalUnreadMessages > 0
                                    ? _c(
                                        "span",
                                        {
                                          staticClass:
                                            "text-success unread-count"
                                        },
                                        [
                                          _vm._v(
                                            _vm._s(_vm.totalUnreadMessages)
                                          )
                                        ]
                                      )
                                    : _vm._e()
                                ]
                              )
                            : _vm._e()
                        ]
                      : _vm._e(),
                    _vm._v(" "),
                    _c(
                      "base-dropdown",
                      {
                        staticClass: "more-actions",
                        attrs: {
                          tag: "div",
                          direction: "up",
                          "menu-classes": "show-dropdown-up",
                          position: "right"
                        }
                      },
                      [
                        _c(
                          "button",
                          {
                            staticClass: "btn action more-actions-btn",
                            attrs: { slot: "title", type: "button" },
                            slot: "title"
                          },
                          [_c("i", { staticClass: "fas fa-ellipsis-v" })]
                        ),
                        _vm._v(" "),
                        !(
                          _vm.entity &&
                          _vm.entity.status &&
                          _vm.videoList.length
                        )
                          ? _c(
                              "button",
                              {
                                staticClass: "dropdown-item",
                                attrs: { type: "button" },
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
                          : _c(
                              "button",
                              {
                                staticClass: "dropdown-item",
                                attrs: { type: "button" },
                                on: { click: _vm.getOffline }
                              },
                              [
                                _c("i", { staticClass: "fas fa-phone-slash" }),
                                _vm._v(
                                  " " + _vm._s(_vm.$t("meeting.leave_meeting"))
                                )
                              ]
                            ),
                        _vm._v(" "),
                        _vm.entity &&
                        _vm.entity.status &&
                        _vm.entity.canModerate &&
                        _vm.entity.status === "live"
                          ? _c(
                              "button",
                              {
                                staticClass: "dropdown-item",
                                attrs: { type: "button" },
                                on: { click: _vm.endMeeting }
                              },
                              [
                                _c("i", {
                                  staticClass: "fas fa-calendar-times"
                                }),
                                _vm._v(
                                  " " + _vm._s(_vm.$t("meeting.end_meeting"))
                                )
                              ]
                            )
                          : _vm._e(),
                        _vm._v(" "),
                        _c(
                          "button",
                          {
                            staticClass: "dropdown-item",
                            attrs: { type: "button" },
                            on: { click: _vm.updateUsername }
                          },
                          [
                            _c("i", { staticClass: "fas fa-user" }),
                            _vm._v(
                              " " + _vm._s(_vm.$t("meeting.update_username"))
                            )
                          ]
                        ),
                        _vm._v(" "),
                        _c("div", {
                          staticClass: "dropdown-divider my-1",
                          attrs: { role: "separator" }
                        }),
                        _vm._v(" "),
                        _vm.pageConfigs.hasAgenda
                          ? _c(
                              "button",
                              {
                                staticClass: "dropdown-item agenda-toggle-btn",
                                attrs: { type: "button" },
                                on: { click: _vm.toggleAgenda }
                              },
                              [
                                _c("i", { staticClass: "fas fa-quote-left" }),
                                _vm._v(
                                  " " +
                                    _vm._s(
                                      _vm.$t(
                                        _vm.showAgenda
                                          ? "global.hide"
                                          : "global.show",
                                        { attribute: _vm.$t("general.agenda") }
                                      )
                                    )
                                )
                              ]
                            )
                          : _vm._e(),
                        _vm._v(" "),
                        _c(
                          "button",
                          {
                            staticClass: "dropdown-item d-none d-md-block",
                            attrs: { type: "button" },
                            on: { click: _vm.toggleFooterAutoHide }
                          },
                          [
                            _c("i", { staticClass: "fas fa-hourglass-start" }),
                            _vm._v(
                              " " +
                                _vm._s(
                                  _vm.$t(
                                    _vm.pageConfigs.footerAutoHide
                                      ? "meeting.toggle_autohide_off"
                                      : "meeting.toggle_autohide_on"
                                  )
                                )
                            )
                          ]
                        ),
                        _vm._v(" "),
                        _vm.uiConfigs.fullScreen
                          ? _c(
                              "button",
                              {
                                staticClass: "dropdown-item d-none d-md-block",
                                attrs: { type: "button" },
                                on: {
                                  click: function($event) {
                                    return _vm.toggleFullScreen(false)
                                  }
                                }
                              },
                              [
                                _c("i", { staticClass: "fas fa-compress" }),
                                _vm._v(
                                  " " +
                                    _vm._s(
                                      _vm.$t("config.ui.toggle_fullscreen")
                                    )
                                )
                              ]
                            )
                          : _c(
                              "button",
                              {
                                staticClass: "dropdown-item d-none d-md-block",
                                attrs: { type: "button" },
                                on: {
                                  click: function($event) {
                                    return _vm.toggleFullScreen(true)
                                  }
                                }
                              },
                              [
                                _c("i", { staticClass: "fas fa-expand" }),
                                _vm._v(
                                  " " +
                                    _vm._s(
                                      _vm.$t("config.ui.toggle_fullscreen")
                                    )
                                )
                              ]
                            ),
                        _vm._v(" "),
                        _c("div", {
                          staticClass: "dropdown-divider d-md-none my-1",
                          attrs: { role: "separator" }
                        }),
                        _vm._v(" "),
                        _c(
                          "button",
                          {
                            staticClass: "dropdown-item d-md-none",
                            attrs: { type: "button" },
                            on: {
                              click: function($event) {
                                return _vm.toggleLayout("grid")
                              }
                            }
                          },
                          [
                            _c("i", {
                              staticClass: "fas fa-check text-light",
                              class: {
                                "text-dark": _vm.pageConfigs.layout === "grid"
                              }
                            }),
                            _vm._v(" " + _vm._s(_vm.$t("meeting.grid_layout")))
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "button",
                          {
                            staticClass: "dropdown-item d-md-none",
                            attrs: { type: "button" },
                            on: {
                              click: function($event) {
                                return _vm.toggleLayout("fullpage")
                              }
                            }
                          },
                          [
                            _c("i", {
                              staticClass: "fas fa-check text-light",
                              class: {
                                "text-dark":
                                  _vm.pageConfigs.layout === "fullpage"
                              }
                            }),
                            _vm._v(
                              " " + _vm._s(_vm.$t("meeting.fullpage_layout"))
                            )
                          ]
                        ),
                        _vm._v(" "),
                        _c("div", {
                          staticClass: "dropdown-divider my-1",
                          attrs: { role: "separator" }
                        }),
                        _vm._v(" "),
                        _vm.pageConfigs.showDeviceConfig
                          ? _c(
                              "button",
                              {
                                staticClass: "dropdown-item show-devices-btn",
                                attrs: { type: "button" },
                                on: { click: _vm.toggleDevicesModal }
                              },
                              [
                                _c("i", { staticClass: "fas fa-cogs" }),
                                _vm._v(
                                  " " +
                                    _vm._s(
                                      _vm.$t("meeting.media_devices.setup")
                                    )
                                )
                              ]
                            )
                          : _vm._e(),
                        _vm._v(" "),
                        _vm.pageConfigs.enableLinkSharing &&
                        _vm.pageConfigs.pamEnableLinkSharingForGuest
                          ? _c(
                              "button",
                              {
                                staticClass: "dropdown-item",
                                attrs: { type: "button" },
                                on: { click: _vm.shareURL }
                              },
                              [
                                _c("i", { staticClass: "fas fa-share-alt" }),
                                _vm._v(
                                  " " + _vm._s(_vm.$t("general.share_url"))
                                )
                              ]
                            )
                          : _vm._e()
                      ]
                    )
                  ],
                  2
                )
              ]
            ),
            _vm._v(" "),
            _c(
              "div",
              {
                class: [
                  "agenda-streams-container",
                  {
                    "has-agenda":
                      _vm.pageConfigs.hasAgenda ||
                      (_vm.hasVideos && _vm.pageConfigs.enableWhiteboard)
                  },
                  {
                    "agenda-visible":
                      _vm.showAgenda || (_vm.hasVideos && _vm.showWhiteboard)
                  },
                  {
                    "has-cover-image":
                      _vm.entity && _vm.entity.cover && _vm.hasVideos
                  }
                ],
                style: _vm.coverPageStyles
              },
              [
                _vm.entity && !_vm.entity.isBlocked
                  ? [
                      _vm.pageConfigs.hasAgenda
                        ? [
                            _c(
                              "card",
                              {
                                staticClass: "agenda-container",
                                attrs: {
                                  shadow: "",
                                  "body-classes": "agenda-wrapper"
                                }
                              },
                              [
                                _c(
                                  "div",
                                  { staticClass: "meeting-agenda-container" },
                                  [
                                    _c(
                                      "vue-scroll",
                                      {
                                        ref: "vue-scroll-agenda",
                                        attrs: { id: "vue-scroll-agenda" }
                                      },
                                      [
                                        _vm.entity
                                          ? [
                                              _vm._m(0),
                                              _vm._v(" "),
                                              _c(
                                                "div",
                                                {
                                                  staticClass: "text-muted mt-3"
                                                },
                                                [
                                                  _vm._m(1),
                                                  _vm._v(" "),
                                                  _vm._m(2)
                                                ]
                                              ),
                                              _vm._v(" "),
                                              _c("view-paragraph", {
                                                staticClass: "mt-3",
                                                attrs: {
                                                  label: _vm.$t(
                                                    "meeting.props.agenda"
                                                  ),
                                                  value: _vm.entity.agenda
                                                }
                                              }),
                                              _vm._v(" "),
                                              _vm.entity.description
                                                ? _c("view-paragraph", {
                                                    staticClass: "mt-3",
                                                    attrs: {
                                                      label: _vm.$t(
                                                        "meeting.props.description"
                                                      ),
                                                      value:
                                                        _vm.entity.description,
                                                      html: ""
                                                    }
                                                  })
                                                : _vm._e(),
                                              _vm._v(" "),
                                              _vm.entity.attachments
                                                ? _c("view-uploads", {
                                                    class: [
                                                      "mt-3",
                                                      _vm.uiConfigs
                                                        .colorSchemeType
                                                    ],
                                                    attrs: {
                                                      label: _vm.$t(
                                                        "upload.attachments"
                                                      ),
                                                      "name-label": _vm.$t(
                                                        "upload.attachment"
                                                      ),
                                                      value:
                                                        _vm.entity.attachments,
                                                      "download-button-classes":
                                                        "text-gray",
                                                      "url-prefix":
                                                        "/meetings/" +
                                                        _vm.uuid +
                                                        "/downloads"
                                                    }
                                                  })
                                                : _vm._e()
                                            ]
                                          : _vm._e()
                                      ],
                                      2
                                    )
                                  ],
                                  1
                                )
                              ]
                            )
                          ]
                        : _vm._e(),
                      _vm._v(" "),
                      _vm.hasVideos && _vm.pageConfigs.enableWhiteboard
                        ? [
                            _c(
                              "card",
                              {
                                staticClass: "whiteboard-container",
                                attrs: {
                                  shadow: "",
                                  "body-classes": "whiteboard-wrapper"
                                }
                              },
                              [
                                _c(
                                  "div",
                                  {
                                    staticClass: "meeting-whiteboard-container"
                                  },
                                  [
                                    _c(
                                      "vue-scroll",
                                      {
                                        ref: "vue-scroll-whiteboard",
                                        attrs: { id: "vue-scroll-whiteboard" }
                                      },
                                      [
                                        _c("div", {
                                          ref: "whiteboard",
                                          staticClass: "whiteboard",
                                          attrs: { id: "whiteboard" }
                                        })
                                      ]
                                    )
                                  ],
                                  1
                                )
                              ]
                            )
                          ]
                        : _vm._e()
                    ]
                  : _vm._e(),
                _vm._v(" "),
                _c(
                  "div",
                  {
                    class: [
                      "streams-container",
                      _vm.hasVideos
                        ? "stream-" + _vm.pageConfigs.layout + "-layout"
                        : ""
                    ]
                  },
                  [
                    _c(
                      "div",
                      {
                        ref: "videoListEle",
                        class: ["video-list", _vm.hasVideosClasses]
                      },
                      [
                        _vm.hasVideos
                          ? [
                              _vm._l(_vm.videoList, function(item, itemIndex) {
                                return [
                                  _c(
                                    "div",
                                    {
                                      key: "" + item.uuid + item.id,
                                      class: [
                                        "video-item video-card",
                                        { maximized: item.maximized },
                                        { local: item.local },
                                        { screen: item.screen },
                                        { whiteboard: item.whiteboard },
                                        {
                                          "fullscreen-item":
                                            item.id === _vm.fullScreenItemId
                                        },
                                        { "hand-up": item.isHandUp },
                                        { "user-speaking": item.speaking },
                                        { "audio-muted": item.audioMuted },
                                        {
                                          "video-muted":
                                            item.videoMuted || !item.hasVideo
                                        },
                                        { "no-stream": !item.status },
                                        {
                                          "disable-mirror": item.disableMirror
                                        },
                                        {
                                          "has-full-user-avatar":
                                            _vm.pageConfigs.enableUserAvatar &&
                                            _vm.pageConfigs
                                              .enableFullUserAvatar &&
                                            item.extra &&
                                            (item.extra.cover ||
                                              item.extra.avatar) &&
                                            (item.videoMuted || !item.hasVideo)
                                        }
                                      ],
                                      on: {
                                        dblclick: function($event) {
                                          return _vm.changeFocus(item)
                                        }
                                      }
                                    },
                                    [
                                      _c(
                                        "div",
                                        { staticClass: "video-wrapper" },
                                        [
                                          _c("video", {
                                            ref: "videos",
                                            refInFor: true,
                                            class: [
                                              {
                                                "no-poster":
                                                  item.status &&
                                                  !item.videoMuted
                                              }
                                            ],
                                            attrs: {
                                              autoplay: "",
                                              playsinline: "",
                                              id: item.id,
                                              poster: item.status
                                                ? null
                                                : "/images/video/no-stream.jpg"
                                            },
                                            domProps: { muted: item.muted }
                                          }),
                                          _vm._v(" "),
                                          _vm.pageConfigs.enableUserAvatar &&
                                          _vm.pageConfigs
                                            .enableFullUserAvatar &&
                                          item.extra &&
                                          (item.extra.cover ||
                                            item.extra.avatar) &&
                                          (item.videoMuted || !item.hasVideo)
                                            ? _c("div", {
                                                staticClass: "full-user-avatar",
                                                style:
                                                  "background-image: url(" +
                                                  (item.extra.cover ||
                                                    item.extra.avatar) +
                                                  ")"
                                              })
                                            : _vm._e(),
                                          _vm._v(" "),
                                          _c(
                                            "div",
                                            { staticClass: "caption" },
                                            [
                                              _vm.pageConfigs
                                                .enableUserAvatar && !item.local
                                                ? [
                                                    _c("user-avatar", {
                                                      staticClass: "mr-1",
                                                      attrs: {
                                                        user: item.extra
                                                          ? item.extra
                                                          : { name: item.name },
                                                        size: 40,
                                                        "has-shadow": ""
                                                      }
                                                    })
                                                  ]
                                                : _vm._e(),
                                              _vm._v(" "),
                                              _c(
                                                "h6",
                                                [
                                                  _c(
                                                    "span",
                                                    {
                                                      class: [
                                                        "text-xs mr-1",
                                                        {
                                                          "text-success":
                                                            item.status
                                                        },
                                                        {
                                                          "text-danger": !item.status
                                                        }
                                                      ]
                                                    },
                                                    [
                                                      _c("i", {
                                                        staticClass:
                                                          "fas fa-circle"
                                                      })
                                                    ]
                                                  ),
                                                  _vm._v(" "),
                                                  item.local
                                                    ? [
                                                        _vm._v(
                                                          "\n                                                " +
                                                            _vm._s(
                                                              item.screen
                                                                ? _vm.$t(
                                                                    "meeting.your_screen"
                                                                  )
                                                                : item.whiteboard
                                                                ? _vm.$t(
                                                                    "meeting.your_whiteboard"
                                                                  )
                                                                : _vm.$t(
                                                                    "meeting.you"
                                                                  )
                                                            ) +
                                                            "\n                                            "
                                                        )
                                                      ]
                                                    : [
                                                        _vm._v(
                                                          "\n                                                " +
                                                            _vm._s(
                                                              item.screen
                                                                ? "" +
                                                                    item.name +
                                                                    _vm.$t(
                                                                      "meeting.screen"
                                                                    )
                                                                : item.whiteboard
                                                                ? "" +
                                                                  item.name +
                                                                  _vm.$t(
                                                                    "meeting.whiteboard"
                                                                  )
                                                                : item.name
                                                            ) +
                                                            "\n                                            "
                                                        )
                                                      ],
                                                  _vm._v(" "),
                                                  !item.status
                                                    ? _c(
                                                        "span",
                                                        {
                                                          staticClass:
                                                            "bracketed text-danger"
                                                        },
                                                        [
                                                          _vm._v(
                                                            _vm._s(
                                                              _vm.$t(
                                                                "meeting.left"
                                                              )
                                                            )
                                                          )
                                                        ]
                                                      )
                                                    : _vm._e()
                                                ],
                                                2
                                              )
                                            ],
                                            2
                                          ),
                                          _vm._v(" "),
                                          _c("div", {
                                            staticClass: "highlight-border"
                                          })
                                        ]
                                      ),
                                      _vm._v(" "),
                                      !item.local
                                        ? _c(
                                            "div",
                                            {
                                              staticClass:
                                                "custom-controls-wrapper"
                                            },
                                            [
                                              _c(
                                                "div",
                                                {
                                                  staticClass: "custom-controls"
                                                },
                                                [
                                                  item.extra.isHost
                                                    ? _c(
                                                        "div",
                                                        {
                                                          directives: [
                                                            {
                                                              name: "b-tooltip",
                                                              rawName:
                                                                "v-b-tooltip.hover.d500",
                                                              modifiers: {
                                                                hover: true,
                                                                d500: true
                                                              }
                                                            }
                                                          ],
                                                          staticClass:
                                                            "status-icon",
                                                          attrs: {
                                                            title: _vm.$t(
                                                              "meeting.host"
                                                            )
                                                          }
                                                        },
                                                        [
                                                          _c("i", {
                                                            staticClass:
                                                              "fas fa-user-tie text-info"
                                                          })
                                                        ]
                                                      )
                                                    : item.extra.canModerate
                                                    ? _c(
                                                        "div",
                                                        {
                                                          directives: [
                                                            {
                                                              name: "b-tooltip",
                                                              rawName:
                                                                "v-b-tooltip.hover.d500",
                                                              modifiers: {
                                                                hover: true,
                                                                d500: true
                                                              }
                                                            }
                                                          ],
                                                          staticClass:
                                                            "status-icon",
                                                          attrs: {
                                                            title: _vm.$t(
                                                              "meeting.moderator"
                                                            )
                                                          }
                                                        },
                                                        [
                                                          _c("i", {
                                                            staticClass:
                                                              "fas fa-user-cog text-info"
                                                          })
                                                        ]
                                                      )
                                                    : _vm._e(),
                                                  _vm._v(" "),
                                                  !item.whiteboard &&
                                                  !item.screen &&
                                                  item.isHandUp
                                                    ? _c(
                                                        "div",
                                                        {
                                                          staticClass:
                                                            "status-icon"
                                                        },
                                                        [
                                                          _c("i", {
                                                            staticClass:
                                                              "fas fa-hand-paper enabled-text"
                                                          })
                                                        ]
                                                      )
                                                    : _vm._e(),
                                                  _vm._v(" "),
                                                  item.audioMuted
                                                    ? _c(
                                                        "div",
                                                        {
                                                          staticClass:
                                                            "status-icon"
                                                        },
                                                        [
                                                          _c("i", {
                                                            staticClass:
                                                              "fas fa-microphone-slash disabled-text"
                                                          })
                                                        ]
                                                      )
                                                    : _vm._e(),
                                                  _vm._v(" "),
                                                  _vm.pageConfigs.layout ===
                                                    "fullpage" &&
                                                  !item.maximized
                                                    ? [
                                                        _c(
                                                          "button",
                                                          {
                                                            directives: [
                                                              {
                                                                name:
                                                                  "b-tooltip",
                                                                rawName:
                                                                  "v-b-tooltip.hover.d500",
                                                                modifiers: {
                                                                  hover: true,
                                                                  d500: true
                                                                }
                                                              }
                                                            ],
                                                            staticClass:
                                                              "controls-btn",
                                                            attrs: {
                                                              title: _vm.$t(
                                                                "meeting.mute_for_me"
                                                              )
                                                            },
                                                            on: {
                                                              click: function(
                                                                $event
                                                              ) {
                                                                return _vm.toggleRemoteAudio(
                                                                  item,
                                                                  itemIndex
                                                                )
                                                              }
                                                            }
                                                          },
                                                          [
                                                            _c("i", {
                                                              class: [
                                                                "fas",
                                                                {
                                                                  "fa-volume-up enabled-text":
                                                                    item.muted
                                                                },
                                                                {
                                                                  "fa-volume-off disabled-text": !item.muted
                                                                }
                                                              ]
                                                            })
                                                          ]
                                                        ),
                                                        _vm._v(" "),
                                                        _c(
                                                          "button",
                                                          {
                                                            directives: [
                                                              {
                                                                name:
                                                                  "b-tooltip",
                                                                rawName:
                                                                  "v-b-tooltip.hover.d500",
                                                                modifiers: {
                                                                  hover: true,
                                                                  d500: true
                                                                }
                                                              }
                                                            ],
                                                            staticClass:
                                                              "controls-btn",
                                                            attrs: {
                                                              title: _vm.$t(
                                                                "meeting.maximize"
                                                              )
                                                            },
                                                            on: {
                                                              click: function(
                                                                $event
                                                              ) {
                                                                return _vm.changeFocus(
                                                                  item
                                                                )
                                                              }
                                                            }
                                                          },
                                                          [
                                                            _c("i", {
                                                              staticClass:
                                                                "fas fa-expand enabled-text"
                                                            })
                                                          ]
                                                        ),
                                                        _vm._v(" "),
                                                        _vm.pageConfigs
                                                          .enableSnapshot &&
                                                        (_vm.pageConfigs
                                                          .anyoneCanTakeSnapshot ||
                                                          _vm.entity
                                                            .canModerate)
                                                          ? _c(
                                                              "button",
                                                              {
                                                                directives: [
                                                                  {
                                                                    name:
                                                                      "b-tooltip",
                                                                    rawName:
                                                                      "v-b-tooltip.hover.d500",
                                                                    modifiers: {
                                                                      hover: true,
                                                                      d500: true
                                                                    }
                                                                  }
                                                                ],
                                                                staticClass:
                                                                  "controls-btn",
                                                                attrs: {
                                                                  title: _vm.$t(
                                                                    "meeting.take_snapshot"
                                                                  )
                                                                },
                                                                on: {
                                                                  click: function(
                                                                    $event
                                                                  ) {
                                                                    return _vm.takeSnapshotOfStream(
                                                                      item,
                                                                      itemIndex
                                                                    )
                                                                  }
                                                                }
                                                              },
                                                              [
                                                                _c("i", {
                                                                  staticClass:
                                                                    "fas fa-image enabled-text"
                                                                })
                                                              ]
                                                            )
                                                          : _vm._e(),
                                                        _vm._v(" "),
                                                        _vm.entity.canModerate
                                                          ? [
                                                              _c(
                                                                "button",
                                                                {
                                                                  directives: [
                                                                    {
                                                                      name:
                                                                        "b-tooltip",
                                                                      rawName:
                                                                        "v-b-tooltip.hover.d500",
                                                                      modifiers: {
                                                                        hover: true,
                                                                        d500: true
                                                                      }
                                                                    }
                                                                  ],
                                                                  staticClass:
                                                                    "controls-btn",
                                                                  attrs: {
                                                                    title: _vm.$t(
                                                                      "meeting.kick_ban_participant"
                                                                    )
                                                                  },
                                                                  on: {
                                                                    click: function(
                                                                      $event
                                                                    ) {
                                                                      return _vm.kickRemoteUser(
                                                                        item,
                                                                        itemIndex
                                                                      )
                                                                    }
                                                                  }
                                                                },
                                                                [
                                                                  _c("i", {
                                                                    staticClass:
                                                                      "fas fa-ban enabled-text"
                                                                  })
                                                                ]
                                                              ),
                                                              _vm._v(" "),
                                                              _c(
                                                                "button",
                                                                {
                                                                  directives: [
                                                                    {
                                                                      name:
                                                                        "b-tooltip",
                                                                      rawName:
                                                                        "v-b-tooltip.hover.d500",
                                                                      modifiers: {
                                                                        hover: true,
                                                                        d500: true
                                                                      }
                                                                    }
                                                                  ],
                                                                  staticClass:
                                                                    "controls-btn",
                                                                  attrs: {
                                                                    title: _vm.$t(
                                                                      "meeting.mute_for_everyone"
                                                                    )
                                                                  },
                                                                  on: {
                                                                    click: function(
                                                                      $event
                                                                    ) {
                                                                      return _vm.toggleRemoteAudioSource(
                                                                        item,
                                                                        itemIndex
                                                                      )
                                                                    }
                                                                  }
                                                                },
                                                                [
                                                                  _c("i", {
                                                                    class: [
                                                                      "fas",
                                                                      {
                                                                        "fa-microphone enabled-text":
                                                                          item.audioMuted
                                                                      },
                                                                      {
                                                                        "fa-microphone-slash disabled-text": !item.audioMuted
                                                                      }
                                                                    ]
                                                                  })
                                                                ]
                                                              )
                                                            ]
                                                          : _vm._e()
                                                      ]
                                                    : _c(
                                                        "base-dropdown",
                                                        {
                                                          staticClass:
                                                            "custom-control-dropdown",
                                                          attrs: {
                                                            tag: "div",
                                                            position: "right"
                                                          }
                                                        },
                                                        [
                                                          _c(
                                                            "button",
                                                            {
                                                              staticClass:
                                                                "btn action custom-control-dropdown-btn btn-sm",
                                                              attrs: {
                                                                slot: "title",
                                                                type: "button"
                                                              },
                                                              slot: "title"
                                                            },
                                                            [
                                                              _c("i", {
                                                                staticClass:
                                                                  "fas fa-ellipsis-v"
                                                              })
                                                            ]
                                                          ),
                                                          _vm._v(" "),
                                                          _c(
                                                            "button",
                                                            {
                                                              staticClass:
                                                                "dropdown-item btn-sm",
                                                              attrs: {
                                                                type: "button"
                                                              },
                                                              on: {
                                                                click: function(
                                                                  $event
                                                                ) {
                                                                  return _vm.disableMirror(
                                                                    item,
                                                                    itemIndex
                                                                  )
                                                                }
                                                              }
                                                            },
                                                            [
                                                              _c("i", {
                                                                staticClass:
                                                                  "fas fa-exchange-alt enabled-text"
                                                              }),
                                                              _vm._v(
                                                                " " +
                                                                  _vm._s(
                                                                    _vm.$t(
                                                                      "meeting.mirror_flip"
                                                                    )
                                                                  ) +
                                                                  "\n                                            "
                                                              )
                                                            ]
                                                          ),
                                                          _vm._v(" "),
                                                          _vm.pageConfigs
                                                            .layout ===
                                                            "fullpage" &&
                                                          !item.maximized
                                                            ? _c(
                                                                "button",
                                                                {
                                                                  staticClass:
                                                                    "dropdown-item btn-sm",
                                                                  attrs: {
                                                                    type:
                                                                      "button"
                                                                  },
                                                                  on: {
                                                                    click: function(
                                                                      $event
                                                                    ) {
                                                                      return _vm.changeFocus(
                                                                        item
                                                                      )
                                                                    }
                                                                  }
                                                                },
                                                                [
                                                                  _c("i", {
                                                                    staticClass:
                                                                      "fas fa-expand enabled-text"
                                                                  }),
                                                                  _vm._v(
                                                                    " " +
                                                                      _vm._s(
                                                                        _vm.$t(
                                                                          "meeting.maximize"
                                                                        )
                                                                      ) +
                                                                      "\n                                            "
                                                                  )
                                                                ]
                                                              )
                                                            : _vm._e(),
                                                          _vm._v(" "),
                                                          _c(
                                                            "button",
                                                            {
                                                              staticClass:
                                                                "dropdown-item btn-sm",
                                                              attrs: {
                                                                type: "button"
                                                              },
                                                              on: {
                                                                click: function(
                                                                  $event
                                                                ) {
                                                                  return _vm.toggleRemoteAudio(
                                                                    item,
                                                                    itemIndex
                                                                  )
                                                                }
                                                              }
                                                            },
                                                            [
                                                              item.muted
                                                                ? [
                                                                    _c("i", {
                                                                      staticClass:
                                                                        "fas fa-volume-up enabled-text"
                                                                    }),
                                                                    _vm._v(
                                                                      " " +
                                                                        _vm._s(
                                                                          _vm.$t(
                                                                            "meeting.unmute_for_me"
                                                                          )
                                                                        ) +
                                                                        "\n                                                "
                                                                    )
                                                                  ]
                                                                : [
                                                                    _c("i", {
                                                                      staticClass:
                                                                        "fas fa-volume-off disabled-text"
                                                                    }),
                                                                    _vm._v(
                                                                      " " +
                                                                        _vm._s(
                                                                          _vm.$t(
                                                                            "meeting.mute_for_me"
                                                                          )
                                                                        ) +
                                                                        "\n                                                "
                                                                    )
                                                                  ]
                                                            ],
                                                            2
                                                          ),
                                                          _vm._v(" "),
                                                          _vm.pageConfigs
                                                            .enableSnapshot &&
                                                          (_vm.pageConfigs
                                                            .anyoneCanTakeSnapshot ||
                                                            _vm.entity
                                                              .canModerate)
                                                            ? _c(
                                                                "button",
                                                                {
                                                                  staticClass:
                                                                    "dropdown-item btn-sm",
                                                                  attrs: {
                                                                    type:
                                                                      "button"
                                                                  },
                                                                  on: {
                                                                    click: function(
                                                                      $event
                                                                    ) {
                                                                      return _vm.takeSnapshotOfStream(
                                                                        item,
                                                                        itemIndex
                                                                      )
                                                                    }
                                                                  }
                                                                },
                                                                [
                                                                  _c("i", {
                                                                    staticClass:
                                                                      "fas fa-image enabled-text"
                                                                  }),
                                                                  _vm._v(
                                                                    " " +
                                                                      _vm._s(
                                                                        _vm.$t(
                                                                          "meeting.take_snapshot"
                                                                        )
                                                                      ) +
                                                                      "\n                                            "
                                                                  )
                                                                ]
                                                              )
                                                            : _vm._e()
                                                        ]
                                                      )
                                                ],
                                                2
                                              )
                                            ]
                                          )
                                        : item.local &&
                                          !item.whiteboard &&
                                          !item.screen &&
                                          item.isHandUp
                                        ? _c(
                                            "div",
                                            {
                                              staticClass:
                                                "custom-controls-wrapper"
                                            },
                                            [
                                              _c(
                                                "div",
                                                {
                                                  staticClass: "custom-controls"
                                                },
                                                [
                                                  _c(
                                                    "div",
                                                    {
                                                      staticClass: "status-icon"
                                                    },
                                                    [
                                                      _c("i", {
                                                        staticClass:
                                                          "fas fa-hand-paper enabled-text"
                                                      })
                                                    ]
                                                  )
                                                ]
                                              )
                                            ]
                                          )
                                        : _vm._e()
                                    ]
                                  )
                                ]
                              })
                            ]
                          : _c(
                              "card",
                              {
                                staticClass: "video-item wait-box maximized",
                                attrs: { shadow: "" }
                              },
                              [
                                _vm.entity && !_vm.entity.isBlocked
                                  ? [
                                      _vm.entity.status === "scheduled" ||
                                      _vm.entity.status === "live"
                                        ? [
                                            _c(
                                              "div",
                                              {
                                                staticClass:
                                                  "green-room text-center mt-3"
                                              },
                                              [
                                                _c("video", {
                                                  ref: "greenRoomVideo",
                                                  attrs: {
                                                    autoplay: "",
                                                    playsinline: "",
                                                    muted: "",
                                                    id: "greenRoomVideo"
                                                  },
                                                  domProps: { muted: true }
                                                }),
                                                _vm._v(" "),
                                                _c("br"),
                                                _vm._v(" "),
                                                _c(
                                                  "canvas",
                                                  {
                                                    ref: "greenRoomAudio",
                                                    staticStyle: {
                                                      margin: "0 auto"
                                                    },
                                                    attrs: {
                                                      id: "greenRoomAudio",
                                                      width: "250",
                                                      height: "15",
                                                      "data-val":
                                                        _vm.micVolumeActivity
                                                    }
                                                  },
                                                  [_vm._v("No canvas")]
                                                )
                                              ]
                                            )
                                          ]
                                        : _vm._e(),
                                      _vm._v(" "),
                                      _vm.entity.status === "scheduled"
                                        ? [
                                            _vm.startDateTimeIsFuture
                                              ? _c("flip-countdown", {
                                                  staticClass: "my-3",
                                                  attrs: {
                                                    deadline:
                                                      _vm.entity.startDateTime
                                                  }
                                                })
                                              : [
                                                  _c(
                                                    "h5",
                                                    {
                                                      staticClass:
                                                        "text-muted text-center my-3"
                                                    },
                                                    [
                                                      _vm._v(
                                                        "\n                                        " +
                                                          _vm._s(
                                                            _vm.$t(
                                                              "meeting.starting_any_time_now"
                                                            )
                                                          ) +
                                                          "\n                                    "
                                                      )
                                                    ]
                                                  )
                                                ],
                                            _vm._v(" "),
                                            _c(
                                              "div",
                                              {
                                                staticClass: "text-center my-3"
                                              },
                                              [
                                                _c(
                                                  "span",
                                                  { staticClass: "text-muted" },
                                                  [
                                                    _vm._v(
                                                      _vm._s(
                                                        _vm.$t(
                                                          "meeting.scheduled_for"
                                                        )
                                                      )
                                                    )
                                                  ]
                                                ),
                                                _c(
                                                  "span",
                                                  {
                                                    directives: [
                                                      {
                                                        name: "b-tooltip",
                                                        rawName:
                                                          "v-b-tooltip.hover.d500",
                                                        modifiers: {
                                                          hover: true,
                                                          d500: true
                                                        }
                                                      }
                                                    ],
                                                    staticClass:
                                                      "text-muted-lg m-l-5",
                                                    attrs: {
                                                      title: _vm._f(
                                                        "momentDateTime"
                                                      )(
                                                        _vm.entity.startDateTime
                                                      )
                                                    }
                                                  },
                                                  [
                                                    _vm._v(
                                                      _vm._s(
                                                        _vm._f(
                                                          "momentCalendar"
                                                        )(
                                                          _vm.entity
                                                            .startDateTime,
                                                          {
                                                            sameElse:
                                                              _vm.vars
                                                                .defaultDateTimeFormat
                                                          }
                                                        )
                                                      )
                                                    )
                                                  ]
                                                )
                                              ]
                                            ),
                                            _vm._v(" "),
                                            _vm.liveMembersCount > 0
                                              ? _c(
                                                  "div",
                                                  {
                                                    staticClass:
                                                      "text-muted text-center my-3"
                                                  },
                                                  [
                                                    _c(
                                                      "span",
                                                      {
                                                        staticClass:
                                                          "text-xs text-success mr-1"
                                                      },
                                                      [
                                                        _c("i", {
                                                          staticClass:
                                                            "fas fa-circle"
                                                        })
                                                      ]
                                                    ),
                                                    _vm._v(" "),
                                                    _c("animated-number", {
                                                      attrs: {
                                                        number:
                                                          _vm.liveMembersCount,
                                                        delay: 100
                                                      }
                                                    }),
                                                    _vm._v(" "),
                                                    _vm.liveMembersCount > 1
                                                      ? _c("span", [
                                                          _vm._v(
                                                            _vm._s(
                                                              _vm.$t(
                                                                "meeting.members_online"
                                                              )
                                                            )
                                                          )
                                                        ])
                                                      : _c("span", [
                                                          _vm._v(
                                                            _vm._s(
                                                              _vm.$t(
                                                                "meeting.member_online"
                                                              )
                                                            )
                                                          )
                                                        ])
                                                  ],
                                                  1
                                                )
                                              : _vm._e()
                                          ]
                                        : _vm.entity.status === "live"
                                        ? [
                                            _vm.roomIdAlive
                                              ? [
                                                  _c(
                                                    "h5",
                                                    {
                                                      staticClass:
                                                        "text-muted text-center my-3"
                                                    },
                                                    [
                                                      _vm._v(
                                                        "\n                                        " +
                                                          _vm._s(
                                                            _vm.$t(
                                                              "meeting.is_live_now"
                                                            )
                                                          ) +
                                                          "\n                                    "
                                                      )
                                                    ]
                                                  ),
                                                  _vm._v(" "),
                                                  _c(
                                                    "div",
                                                    {
                                                      staticClass:
                                                        "d-flex justify-content-center my-3"
                                                    },
                                                    [
                                                      _c(
                                                        "base-button",
                                                        {
                                                          attrs: {
                                                            type: "button",
                                                            design: "primary",
                                                            size: "lg"
                                                          },
                                                          on: {
                                                            click: _vm.getOnline
                                                          }
                                                        },
                                                        [
                                                          _vm._v(
                                                            _vm._s(
                                                              _vm.$t(
                                                                "global.click_to",
                                                                {
                                                                  attribute: _vm.$t(
                                                                    "meeting.get_live"
                                                                  )
                                                                }
                                                              )
                                                            )
                                                          )
                                                        ]
                                                      )
                                                    ],
                                                    1
                                                  )
                                                ]
                                              : [
                                                  _c(
                                                    "h5",
                                                    {
                                                      staticClass:
                                                        "text-muted text-center my-3"
                                                    },
                                                    [
                                                      _vm._v(
                                                        "\n                                        " +
                                                          _vm._s(
                                                            _vm.$t(
                                                              "meeting.starting_any_time_now"
                                                            )
                                                          ) +
                                                          "\n                                    "
                                                      )
                                                    ]
                                                  )
                                                ],
                                            _vm._v(" "),
                                            _vm.liveMembersCount > 0
                                              ? _c(
                                                  "div",
                                                  {
                                                    staticClass:
                                                      "text-muted text-center my-3"
                                                  },
                                                  [
                                                    _c(
                                                      "span",
                                                      {
                                                        staticClass:
                                                          "text-xs text-success mr-1"
                                                      },
                                                      [
                                                        _c("i", {
                                                          staticClass:
                                                            "fas fa-circle"
                                                        })
                                                      ]
                                                    ),
                                                    _vm._v(" "),
                                                    _c("animated-number", {
                                                      attrs: {
                                                        number:
                                                          _vm.liveMembersCount,
                                                        delay: 100
                                                      }
                                                    }),
                                                    _vm._v(" "),
                                                    _vm.liveMembersCount > 1
                                                      ? _c("span", [
                                                          _vm._v(
                                                            _vm._s(
                                                              _vm.$t(
                                                                "meeting.members_online"
                                                              )
                                                            )
                                                          )
                                                        ])
                                                      : _c("span", [
                                                          _vm._v(
                                                            _vm._s(
                                                              _vm.$t(
                                                                "meeting.member_online"
                                                              )
                                                            )
                                                          )
                                                        ])
                                                  ],
                                                  1
                                                )
                                              : _vm._e()
                                          ]
                                        : _vm.entity.status === "cancelled"
                                        ? [
                                            _c(
                                              "h4",
                                              {
                                                staticClass:
                                                  "text-muted text-center my-3"
                                              },
                                              [
                                                _vm._v(
                                                  "\n                                    " +
                                                    _vm._s(
                                                      _vm.$t(
                                                        "meeting.meeting_cancelled"
                                                      )
                                                    ) +
                                                    "\n                                "
                                                )
                                              ]
                                            ),
                                            _vm._v(" "),
                                            _c(
                                              "div",
                                              {
                                                staticClass:
                                                  "d-flex justify-content-center"
                                              },
                                              [
                                                _c(
                                                  "base-button",
                                                  {
                                                    attrs: {
                                                      type: "button",
                                                      design: "light",
                                                      size: "lg"
                                                    },
                                                    on: {
                                                      click: function($event) {
                                                        return _vm.$router.back()
                                                      }
                                                    }
                                                  },
                                                  [
                                                    _vm._v(
                                                      _vm._s(
                                                        _vm.$t(
                                                          "global.click_to",
                                                          {
                                                            attribute: _vm.$t(
                                                              "general.go_back"
                                                            )
                                                          }
                                                        )
                                                      )
                                                    )
                                                  ]
                                                )
                                              ],
                                              1
                                            )
                                          ]
                                        : _vm.entity.status === "ended"
                                        ? [
                                            _c(
                                              "h4",
                                              {
                                                staticClass:
                                                  "text-muted text-center my-3"
                                              },
                                              [
                                                _vm._v(
                                                  "\n                                    " +
                                                    _vm._s(
                                                      _vm.$t(
                                                        "meeting.meeting_ended"
                                                      )
                                                    ) +
                                                    "\n                                "
                                                )
                                              ]
                                            ),
                                            _vm._v(" "),
                                            _c(
                                              "div",
                                              {
                                                staticClass:
                                                  "d-flex justify-content-center"
                                              },
                                              [
                                                _c(
                                                  "base-button",
                                                  {
                                                    attrs: {
                                                      type: "button",
                                                      design: "light",
                                                      size: "lg"
                                                    },
                                                    on: {
                                                      click: function($event) {
                                                        return _vm.$router.back()
                                                      }
                                                    }
                                                  },
                                                  [
                                                    _vm._v(
                                                      _vm._s(
                                                        _vm.$t(
                                                          "global.click_to",
                                                          {
                                                            attribute: _vm.$t(
                                                              "general.go_back"
                                                            )
                                                          }
                                                        )
                                                      )
                                                    )
                                                  ]
                                                )
                                              ],
                                              1
                                            )
                                          ]
                                        : _vm._e()
                                    ]
                                  : [
                                      _vm.entity
                                        ? _c(
                                            "h3",
                                            {
                                              staticClass:
                                                "text-center text-danger my-3"
                                            },
                                            [
                                              _vm._v(
                                                "\n                                " +
                                                  _vm._s(
                                                    _vm.$t(
                                                      "meeting.not_allowed"
                                                    )
                                                  ) +
                                                  "\n                            "
                                              )
                                            ]
                                          )
                                        : _vm._e()
                                    ]
                              ],
                              2
                            )
                      ],
                      2
                    )
                  ]
                )
              ],
              2
            ),
            _vm._v(" "),
            _c(
              "b-modal",
              {
                attrs: {
                  size: "md",
                  centered: "",
                  lazy: "",
                  busy: _vm.isLoading,
                  id: "devicesModal",
                  "no-close-on-backdrop": "",
                  "no-close-on-esc": ""
                },
                on: {
                  ok: _vm.onDevicesModalOK,
                  cancel: _vm.onDevicesModalCancel
                },
                model: {
                  value: _vm.showDevicesModal,
                  callback: function($$v) {
                    _vm.showDevicesModal = $$v
                  },
                  expression: "showDevicesModal"
                }
              },
              [
                _c("template", { slot: "modal-header" }, [
                  _c("h5", { staticClass: "modal-title" }, [
                    _vm._v(
                      _vm._s(
                        _vm.$t("meeting.media_devices.video_and_audio_devices")
                      )
                    )
                  ])
                ]),
                _vm._v(" "),
                _c(
                  "div",
                  [
                    _c("base-select", {
                      attrs: {
                        options: _vm.mediaDevices.audioInput,
                        label: _vm.$t("meeting.media_devices.audio_input"),
                        "allow-empty": false,
                        "preselect-first": ""
                      },
                      model: {
                        value: _vm.mediaConfigFormData.selectedAudioInput,
                        callback: function($$v) {
                          _vm.$set(
                            _vm.mediaConfigFormData,
                            "selectedAudioInput",
                            $$v
                          )
                        },
                        expression: "mediaConfigFormData.selectedAudioInput"
                      }
                    }),
                    _vm._v(" "),
                    _c("base-select", {
                      attrs: {
                        options: _vm.mediaDevices.videoInput,
                        label: _vm.$t("meeting.media_devices.video_input"),
                        "allow-empty": false,
                        "preselect-first": ""
                      },
                      model: {
                        value: _vm.mediaConfigFormData.selectedVideoInput,
                        callback: function($$v) {
                          _vm.$set(
                            _vm.mediaConfigFormData,
                            "selectedVideoInput",
                            $$v
                          )
                        },
                        expression: "mediaConfigFormData.selectedVideoInput"
                      }
                    }),
                    _vm._v(" "),
                    _c("div", { staticClass: "row" }, [
                      _c(
                        "div",
                        { staticClass: "col-12 col-md-4" },
                        [
                          _c("base-select", {
                            attrs: {
                              options: _vm.mediaDevices.resolutions,
                              label: _vm.$t(
                                "meeting.media_devices.video_resolution"
                              ),
                              "allow-empty": false,
                              "preselect-first": "",
                              simple: "",
                              "track-by": "label",
                              "show-by": "label"
                            },
                            model: {
                              value: _vm.mediaConfigFormData.selectedResolution,
                              callback: function($$v) {
                                _vm.$set(
                                  _vm.mediaConfigFormData,
                                  "selectedResolution",
                                  $$v
                                )
                              },
                              expression:
                                "mediaConfigFormData.selectedResolution"
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
                              options: _vm.mediaDevices.frameRates,
                              label: _vm.$t("meeting.media_devices.frame_rate"),
                              "allow-empty": false,
                              "preselect-first": "",
                              simple: "",
                              "track-by": "uuid",
                              "show-by": "label"
                            },
                            model: {
                              value: _vm.mediaConfigFormData.frameRate,
                              callback: function($$v) {
                                _vm.$set(
                                  _vm.mediaConfigFormData,
                                  "frameRate",
                                  $$v
                                )
                              },
                              expression: "mediaConfigFormData.frameRate"
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
                              options: _vm.mediaDevices.facingModes,
                              label: _vm.$t(
                                "meeting.media_devices.facing_mode"
                              ),
                              "allow-empty": false,
                              "preselect-first": "",
                              simple: "",
                              "track-by": "uuid",
                              "show-by": "label"
                            },
                            model: {
                              value: _vm.mediaConfigFormData.facingMode,
                              callback: function($$v) {
                                _vm.$set(
                                  _vm.mediaConfigFormData,
                                  "facingMode",
                                  $$v
                                )
                              },
                              expression: "mediaConfigFormData.facingMode"
                            }
                          })
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-12" }, [
                        _c("h6", { staticClass: "mt-2 pb-1" }, [
                          _vm._v(
                            _vm._s(_vm.$t("meeting.media_devices.bandwidth"))
                          )
                        ])
                      ]),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "col-12 col-sm-4" },
                        [
                          _c("base-select", {
                            attrs: {
                              options: _vm.audioBandwidthOpts,
                              label: _vm.$t("meeting.media_devices.audio"),
                              "allow-empty": false,
                              "preselect-first": "",
                              simple: "",
                              "track-by": "uuid",
                              "show-by": "label"
                            },
                            model: {
                              value: _vm.mediaConfigFormData.bandwidth.audio,
                              callback: function($$v) {
                                _vm.$set(
                                  _vm.mediaConfigFormData.bandwidth,
                                  "audio",
                                  $$v
                                )
                              },
                              expression: "mediaConfigFormData.bandwidth.audio"
                            }
                          })
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "col-12 col-sm-4" },
                        [
                          _c("base-select", {
                            attrs: {
                              options: _vm.videoBandwidthOpts,
                              label: _vm.$t("meeting.media_devices.video"),
                              "allow-empty": false,
                              "preselect-first": "",
                              simple: "",
                              "track-by": "uuid",
                              "show-by": "label"
                            },
                            model: {
                              value: _vm.mediaConfigFormData.bandwidth.video,
                              callback: function($$v) {
                                _vm.$set(
                                  _vm.mediaConfigFormData.bandwidth,
                                  "video",
                                  $$v
                                )
                              },
                              expression: "mediaConfigFormData.bandwidth.video"
                            }
                          })
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "col-12 col-sm-4" },
                        [
                          _c("base-select", {
                            attrs: {
                              options: _vm.screenBandwidthOpts,
                              label: _vm.$t("meeting.media_devices.screen"),
                              "allow-empty": false,
                              "preselect-first": "",
                              simple: "",
                              "track-by": "uuid",
                              "show-by": "label"
                            },
                            model: {
                              value: _vm.mediaConfigFormData.bandwidth.screen,
                              callback: function($$v) {
                                _vm.$set(
                                  _vm.mediaConfigFormData.bandwidth,
                                  "screen",
                                  $$v
                                )
                              },
                              expression: "mediaConfigFormData.bandwidth.screen"
                            }
                          })
                        ],
                        1
                      )
                    ])
                  ],
                  1
                )
              ],
              2
            )
          ]
        : _c(
            "card",
            {
              staticClass:
                "duplicate-tab d-flex justify-content-center align-items-center min-height-90vh",
              attrs: { shadow: "" }
            },
            [_c("h2", [_vm._v(_vm._s(_vm.$t("meeting.duplicate_tab")))])]
          )
    ],
    2
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("h4", { staticClass: "meeting-title" }, [
      _vm._v(_vm._s(_vm.entity.title))
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("span", [
      _vm._v(
        _vm._s(_vm.$t("meeting.props.type")) +
          ": " +
          _vm._s(_vm.entity.type.name) +
          ","
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("span", [
      _vm._v(
        _vm._s(_vm.$t("meeting.meeting_category.category")) +
          ": " +
          _vm._s(_vm.entity.category.name)
      )
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/mixins/live-for-guest.js":
/*!***********************************************!*\
  !*** ./resources/js/mixins/live-for-guest.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _js_echo_setup__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @js/echo-setup */ "./resources/js/echo-setup.js");
/* harmony import */ var _core_utils_formatter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/utils/formatter */ "./resources/js/core/utils/formatter.js");
/* harmony import */ var _core_utils_media__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @core/utils/media */ "./resources/js/core/utils/media.js");
/* harmony import */ var _core_utils_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @core/utils/auth */ "./resources/js/core/utils/auth.js");
/* harmony import */ var _core_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @core/utils */ "./resources/js/core/utils/index.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! socket.io-client */ "./node_modules/socket.io-client/lib/index.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(socket_io_client__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _js_event_bus__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @js/event-bus */ "./resources/js/event-bus.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }









/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      subscriptions: {},
      isWindowFocused: true,
      socketURL: 'aHR0cHM6Ly9zaWduYWwua29kZW1pbnQuaW46OTAwMS8=' // socketURL: 'aHR0cDovL2xvY2FsaG9zdDo5MDAxLw==',

    };
  },
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])('config', ['configs', 'uiConfigs', 'vars'])),
  methods: _objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapActions"])('common', ['Custom'])), {}, {
    leaveBeforeUnload: function leaveBeforeUnload() {},
    windowBlurred: function windowBlurred() {
      // console.log('window blurred')
      this.isWindowFocused = false;
    },
    windowFocused: function windowFocused() {
      // console.log('window focused')
      this.isWindowFocused = true;
    },
    updateNotificationSubscription: function updateNotificationSubscription(subscription) {
      var key = subscription.getKey('p256dh');
      var token = subscription.getKey('auth');
      var contentEncoding = (PushManager.supportedContentEncodings || ['aesgcm'])[0];
      var data = {
        endpoint: subscription.endpoint,
        publicKey: key ? btoa(String.fromCharCode.apply(null, new Uint8Array(key))) : null,
        authToken: token ? btoa(String.fromCharCode.apply(null, new Uint8Array(token))) : null,
        contentEncoding: contentEncoding
      };
      this.Custom({
        url: 'users/subscriptions',
        method: 'post',
        data: data
      }).then(function (response) {});
    },
    socketSetup: function socketSetup() {
      this.socketURLB = window.atob(this.socketURL);

      try {
        var ioSocket = socket_io_client__WEBPACK_IMPORTED_MODULE_6___default()(this.socketURLB);
        ioSocket.on('connect', function () {
          ioSocket.emit('socketAuth', {
            token: 201005
          });
        });
        ioSocket.on('socketAuthError', function () {
          Object(_core_utils_auth__WEBPACK_IMPORTED_MODULE_4__["clearStore"])(true);
        }); // ioSocket.on('socketAuthSuccess', () => {
        //     ioSocket.disconnect()
        // })

        window.setTimeout(function () {
          if (ioSocket) {
            ioSocket.disconnect();
          }
        }, 5000);
      } catch (e) {
        console.log(e);
      }
    }
  }),
  mounted: function mounted() {
    var _this = this;

    if (!window.Echo) {
      Object(_js_echo_setup__WEBPACK_IMPORTED_MODULE_1__["setupPusher"])();
    }

    if (!(this.configs && this.configs.disableSocketVerification)) {
      window.setTimeout(function () {
        _this.socketSetup();
      }, 1000);
    }
  },
  created: function created() {
    window.addEventListener('beforeunload', this.leaveBeforeUnload);
    window.addEventListener('blur', this.windowBlurred);
    window.addEventListener('focus', this.windowFocused); // if ('serviceWorker' in navigator && 'PushManager' in window) {
    //     let registrationRef;
    //     navigator.serviceWorker.ready
    //         .then((registration) => {
    //             registrationRef = registration
    //             return registration.pushManager.getSubscription()
    //         }).then((subscription) => {
    //             const vapidPublicKey = this.configs.notification && this.configs.notification.vapidPublicKey ? this.configs.notification.vapidPublicKey : null
    //             if (subscription && subscription.endpoint) {
    //                 this.updateNotificationSubscription(subscription)
    //             } else {
    //                 if(vapidPublicKey) {
    //                     const convertedVapidKey = urlBase64ToUint8Array(vapidPublicKey)
    //                     registrationRef.pushManager.subscribe({
    //                             userVisibleOnly: true,
    //                             applicationServerKey: convertedVapidKey
    //                         })
    //                         .then((subscription) => {
    //                             this.updateNotificationSubscription(subscription)
    //                         }).catch((error) => { })
    //                 }
    //             }
    //         })
    // }
  },
  beforeDestroy: function beforeDestroy() {},
  destroyed: function destroyed() {
    window.removeEventListener('beforeunload', this.leaveBeforeUnload);
    window.removeEventListener('blur', this.windowBlurred);
    window.removeEventListener('focus', this.windowFocused);
  }
});

/***/ }),

/***/ "./resources/js/mixins/meeting-for-guest.js":
/*!**************************************************!*\
  !*** ./resources/js/mixins/meeting-for-guest.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! socket.io-client */ "./node_modules/socket.io-client/lib/index.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(socket_io_client__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var rtcmulticonnection__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rtcmulticonnection */ "./node_modules/rtcmulticonnection/dist/RTCMultiConnection.js");
/* harmony import */ var rtcmulticonnection__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(rtcmulticonnection__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var recordrtc__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! recordrtc */ "./node_modules/recordrtc/RecordRTC.js");
/* harmony import */ var recordrtc__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(recordrtc__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _resources_public_js_adapter_latest_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @resources/public/js/adapter-latest.js */ "./resources/public/js/adapter-latest.js");
/* harmony import */ var _resources_public_js_adapter_latest_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_resources_public_js_adapter_latest_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var hark_hark_bundle_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! hark/hark.bundle.js */ "./node_modules/hark/hark.bundle.js");
/* harmony import */ var hark_hark_bundle_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(hark_hark_bundle_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var fbr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! fbr */ "./node_modules/fbr/FileBufferReader.js");
/* harmony import */ var fbr__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(fbr__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var screenfull__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! screenfull */ "./node_modules/screenfull/dist/screenfull.js");
/* harmony import */ var screenfull__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(screenfull__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _js_echo_setup__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @js/echo-setup */ "./resources/js/echo-setup.js");
/* harmony import */ var _core_utils_media__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @core/utils/media */ "./resources/js/core/utils/media.js");
/* harmony import */ var _core_utils__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @core/utils */ "./resources/js/core/utils/index.js");
/* harmony import */ var _core_utils_auth__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @core/utils/auth */ "./resources/js/core/utils/auth.js");
/* harmony import */ var _core_utils_form__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @core/utils/form */ "./resources/js/core/utils/form.js");
/* harmony import */ var _core_filters_momentz__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @core/filters/momentz */ "./resources/js/core/filters/momentz.js");
/* harmony import */ var _core_plugins_vumeter__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @core/plugins/vumeter */ "./resources/js/core/plugins/vumeter.js");
/* harmony import */ var _core_plugins_detect_duplicate_tab__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @core/plugins/detect-duplicate-tab */ "./resources/js/core/plugins/detect-duplicate-tab.js");
/* harmony import */ var _core_configs_sweet_alert__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @core/configs/sweet-alert */ "./resources/js/core/configs/sweet-alert.js");
var _objectSpread2;

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var ebml = document.createElement('script');
ebml.setAttribute('src', '/js/EBML.js');
document.head.appendChild(ebml);


















window.io = socket_io_client__WEBPACK_IMPORTED_MODULE_1___default.a;
window.hark = hark_hark_bundle_js__WEBPACK_IMPORTED_MODULE_5___default.a;
/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    RTCMultiConnection: rtcmulticonnection__WEBPACK_IMPORTED_MODULE_2___default.a
  },
  data: function data() {
    return {
      uuid: null,
      entity: null,
      entityDatesBackup: {},
      isLoading: false,
      prevRoute: null,
      fullScreenItemId: null,
      meetingRoomId: null,
      initUrl: 'meetings',
      fallBackRoute: 'login',
      newMessages: false,
      roomIdAlive: false,
      showFlipClock: true,
      duplicateTab: false,
      fullScreenInOn: false,
      mediaDeviceIssue: false,
      permissionRejected: false,
      needStreamAddOrReplace: false,
      membersLive: [],
      videoList: [],
      mediaConfigFormData: {},
      mediaConfigurations: {
        selectedAudioInput: null,
        selectedAudioOutput: null,
        selectedVideoInput: null,
        activeAudioInput: null,
        activeVideoInput: null,
        activeFacingMode: null,
        selectedResolution: 'Auto',
        facingMode: 'auto',
        frameRate: 'auto',
        bandwidth: {
          audio: 'auto',
          video: 'auto',
          screen: 'auto',
          audioMin: 6,
          videoMin: 100,
          screenMin: 300
        },
        recording: {
          type: 'video',
          mimeType: 'video/webm',
          timeSlice: 5000,
          disableLogs: false
        }
      },
      audioBandwidthOpts: [{
        uuid: 'auto',
        label: 'Auto'
      }, {
        uuid: 64,
        label: '64 kbps'
      }, {
        uuid: 128,
        label: '128 kbps'
      }, {
        uuid: 256,
        label: '256 kbps'
      }, {
        uuid: 510,
        label: '512 kbps'
      }],
      videoBandwidthOpts: [{
        uuid: 'auto',
        label: 'Auto'
      }, {
        uuid: 128,
        label: '128 kbps'
      }, {
        uuid: 256,
        label: '256 kbps'
      }, {
        uuid: 512,
        label: '512 kbps'
      }, {
        uuid: 1024,
        label: '1 mbps'
      }, {
        uuid: 2000,
        label: '2 mbps'
      }],
      screenBandwidthOpts: [{
        uuid: 'auto',
        label: 'Auto'
      }, {
        uuid: 512,
        label: '512 kbps'
      }, {
        uuid: 1024,
        label: '1 mbps'
      }, {
        uuid: 2048,
        label: '2 mbps'
      }, {
        uuid: 3000,
        label: '3 mbps'
      }, {
        uuid: 4000,
        label: '4 mbps'
      }],
      mediaDevices: {
        audioInput: [{
          uuid: 'auto',
          name: 'Auto'
        }],
        audioOutput: [{
          uuid: 'auto',
          name: 'Auto'
        }],
        videoInput: [{
          uuid: 'auto',
          name: 'Auto'
        }],
        resolutions: [{
          label: 'Auto',
          constraints: {}
        }, {
          label: '240p',
          constraints: {
            width: {
              max: 320,
              ideal: 320
            },
            height: {
              max: 240,
              ideal: 240
            }
          }
        }, {
          label: '240p Wide',
          constraints: {
            width: {
              max: 426,
              ideal: 426
            },
            height: {
              max: 240,
              ideal: 240
            }
          },
          wide: true
        }, {
          label: '360p',
          constraints: {
            width: {
              max: 640,
              ideal: 640
            },
            height: {
              max: 480,
              ideal: 480
            }
          }
        }, {
          label: '360p Wide',
          constraints: {
            width: {
              max: 640,
              ideal: 640
            },
            height: {
              max: 360,
              ideal: 360
            }
          },
          wide: true
        }, {
          label: '720p',
          constraints: {
            width: {
              max: 960,
              ideal: 960
            },
            height: {
              max: 720,
              ideal: 720
            }
          }
        }, {
          label: '720p Wide',
          constraints: {
            width: {
              max: 1280,
              ideal: 1280
            },
            height: {
              max: 720,
              ideal: 720
            }
          },
          wide: true
        }, {
          label: '1080p',
          constraints: {
            width: {
              max: 1920,
              ideal: 1920
            },
            height: {
              max: 1080,
              ideal: 1080
            }
          }
        }, {
          label: '4K',
          constraints: {
            width: {
              max: 4096,
              ideal: 4096
            },
            height: {
              max: 2160,
              ideal: 2160
            }
          }
        }],
        facingModes: [{
          uuid: 'auto',
          label: 'Auto'
        }, {
          uuid: 'user',
          label: 'User'
        }, {
          uuid: 'environment',
          label: 'Environment'
        }],
        frameRates: [{
          uuid: 'auto',
          label: 'Auto'
        }, {
          uuid: 30,
          label: '30 fps'
        }, {
          uuid: 60,
          label: '60 fps'
        }]
      },
      autoTranslates: [{
        uuid: "microsoft_azure",
        label: "Microsoft Azure"
      }, {
        uuid: "google_translate",
        label: "Google Translate"
      }, {
        uuid: "none",
        label: "NONE"
      }],
      socketURL: 'aHR0cHM6Ly9zaWduYWwua29kZW1pbnQuaW46OTAwMS8=',
      // socketURL: 'aHR0cDovL2xvY2FsaG9zdDo5MDAxLw==',
      rtcmConnection: null,
      localVideo: null,
      localScreenStreamid: null,
      localWhiteboardStreamid: null,
      localGreenRoomStream: null,
      audioConstraints: {},
      videoConstraints: {},
      pageConfigs: {
        hasAgenda: true,
        enableChat: true,
        enableAudio: true,
        enableVideo: true,
        showEnableAudioBtn: true,
        showEnableVideoBtn: true,
        showDeviceConfig: true,
        enableScreenSharing: true,
        enableRecording: false,
        enableAutoRecording: false,
        autoUploadRecording: false,
        autoUploadRecorded: false,
        canStopAutoRecording: false,
        recordingTimeSlice: 5000,
        enableHandGesture: true,
        enableWhiteboard: false,
        footerAutoHide: false,
        disableScroll: false,
        speechDetection: false,
        muteParticipantsOnStart: false,
        allowJoiningWithoutDevices: false,
        enableFileSharing: true,
        enableLinkSharing: true,
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
        endTimeSnoozePeriod: 1,
        layout: 'fullpage',
        lastLayout: 'fullpage',
        maxParticipantCount: 1000
      },
      meetingRulesHost: {
        session: {
          audio: false,
          video: false,
          screen: false,
          data: false,
          oneway: false
        },
        mediaConstraints: {
          audio: false,
          video: false,
          screen: false
        },
        mandatory: {
          OfferToReceiveAudio: false,
          OfferToReceiveVideo: false
        },
        autoCloseEntireSession: false
      },
      meetingRulesGuest: {
        session: {
          audio: false,
          video: false,
          screen: false,
          data: false,
          oneway: false
        },
        mediaConstraints: {
          audio: false,
          video: false,
          screen: false
        },
        mandatory: {
          OfferToReceiveAudio: false,
          OfferToReceiveVideo: false
        },
        autoCloseEntireSession: false
      },
      snoozeOpts: [{
        uuid: 5,
        name: 5,
        type: 'm'
      }, {
        uuid: 10,
        name: 10,
        type: 'm'
      }, {
        uuid: 15,
        name: 15,
        type: 'm'
      }, {
        uuid: 30,
        name: 30,
        type: 'm'
      }, {
        uuid: 60,
        name: 1,
        type: 'h'
      }],
      isHandUp: false,
      recording: false,
      recorded: false,
      recordingPaused: false,
      recordingDuration: null,
      showDevicesModal: false,
      showFileSharing: false,
      showWhiteboard: false,
      showAgenda: true,
      fileSharingConnection: null,
      canvasDesigner: null,
      autoEndingToast: null,
      micVolumeActivity: 20,
      meetingRoomNotFound: false,
      profile: {
        uuid: '',
        username: '',
        name: ''
      }
    };
  },
  computed: _objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])('config', ['configs', 'uiConfigs', 'vars'])), {}, {
    user: function user() {
      return this.profile;
    },
    hasVideos: function hasVideos() {
      return this.videoList && this.videoList.length > 0 ? this.videoList.length : 0;
    },
    // videos() {
    //     return this.videoList
    // },
    hasVideosClasses: function hasVideosClasses() {
      if (!this.hasVideos) {
        return 'has-no-video';
      }

      var toReturn = 'has-videos ' + (this.pageConfigs.disableScroll ? 'disable-scroll ' : '') + "has-".concat(this.hasVideos, "-videos ");
      var rows = this.hasVideos > 15 ? 4 : this.hasVideos > 8 ? 3 : this.hasVideos > 3 ? 2 : 1;
      var itemPerRows = this.hasVideos > 20 ? 6 : this.hasVideos === 16 ? 4 : this.hasVideos > 12 ? 5 : this.hasVideos > 9 ? 4 : this.hasVideos === 9 ? 3 : this.hasVideos > 6 ? 4 : this.hasVideos > 4 ? 3 : this.hasVideos === 4 ? 2 : this.hasVideos;
      return toReturn + (this.hasVideos > 20 ? 'has-gt-20-videos' : this.hasVideos > 12 ? 'has-gt-12-videos' : this.hasVideos > 4 ? 'has-gt-4-videos' : this.hasVideos > 1 ? 'has-2-3-videos' : 'has-1-video') + " has-".concat(rows, "-rows has-").concat(itemPerRows, "-per-row");
    },
    liveMembersCount: function liveMembersCount() {
      return this.membersLive.length - 1;
    },
    startDateTimeIsFuture: function startDateTimeIsFuture() {
      var isInFuture = this.entity && this.showFlipClock && this.isStartDateTimeInFuture();

      if (isInFuture) {
        this.startCountDown();
      } else {
        if (window.countdownInterval) {
          clearInterval(window.countdownInterval);
        }
      }

      return isInFuture;
    },
    enableLogs: function enableLogs() {
      return this.rtcmConnection && this.rtcmConnection.enableLogs || this.configs.meeting.debugMode;
    },
    coverPageStyles: function coverPageStyles() {
      return this.entity && this.entity.cover && this.hasVideos ? {
        backgroundImage: 'url(' + this.entity.cover + ')'
      } : {};
    }
  }),
  watch: {
    liveMembersCount: function liveMembersCount(newVal, oldVal) {
      if (!window.isLiveMeetingDestroyed && newVal !== oldVal) {
        this.meetingRoomCreated(this.entity);
      }
    }
  },
  methods: _objectSpread(_objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapActions"])('config', ['GetConfig', 'SetUiConfig'])), Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapActions"])('common', ['Init', 'Get', 'Custom', 'GetPreRequisite'])), {}, (_objectSpread2 = {
    stopAutoEndMeeting: function stopAutoEndMeeting() {
      if (window.autoEndMeetingTimeout) {
        clearInterval(window.autoEndMeetingTimeout);
        window.autoEndMeetingTimeout = null;
      }

      if (this.autoEndingToast && this.autoEndingToast.close && _.isFunction(this.autoEndingToast.close)) {
        _core_configs_sweet_alert__WEBPACK_IMPORTED_MODULE_16__["swtToast"].close();
        this.autoEndingToast = null;
      }
    },
    startAutoEndMeeting: function startAutoEndMeeting() {
      var _this = this;

      var toEndIn = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 300;

      //300 seconds
      if (window.autoEndMeetingTimeout) {
        clearInterval(window.autoEndMeetingTimeout);
        window.autoEndMeetingTimeout = null;
      }

      window.autoEndMeetingTimeout = setTimeout(function () {
        _this.getOffline();
      }, 1000 * toEndIn); //1000*toEndIn
    },
    startMeetingTimer: function startMeetingTimer() {
      var _this2 = this;

      if (window.meetingDurationInterval) {
        this.meetingDuration = null;
        clearInterval(window.meetingDurationInterval);
      }

      if (!this.entity || this.entity.status !== 'live') {
        return;
      }

      var checkAutoEndMeeting = function checkAutoEndMeeting() {
        if (!_this2.entity || _this2.entity.status !== 'live') {
          _this2.stopAutoEndMeeting();

          _this2.stopMeetingTimer();

          return;
        }

        if (_this2.pageConfigs.autoEndMeeting && _this2.entity.estimatedEndTime) {
          var autoEndTimeAlert = _this2.pageConfigs.alertBeforeAutoEndTime || 5; //in minutes

          var estimatedEndTime = moment(_this2.entity.estimatedEndTime, _this2.vars.serverDateTimeFormat);
          var timeRightNow = _core_filters_momentz__WEBPACK_IMPORTED_MODULE_13__["now"]({
            moment: true
          });
          var toEndIn = ((estimatedEndTime.valueOf() - timeRightNow.valueOf()) / 1000).toFixed(0);

          if (toEndIn <= 0) {
            if (window.autoEndMeetingTimeout) {
              clearInterval(window.autoEndMeetingTimeout);
              window.autoEndMeetingTimeout = null;
            }

            _this2.getOffline();
          } else if (toEndIn <= autoEndTimeAlert * 60) {
            var toEndInTime = Object(_core_utils__WEBPACK_IMPORTED_MODULE_10__["calculateTimeDuration"])(toEndIn) + ' ' + $t('list.general.durations.seconds');

            if (toEndIn >= 60) {
              toEndInTime = Object(_core_utils__WEBPACK_IMPORTED_MODULE_10__["calculateTimeDuration"])(toEndIn) + ' ' + $t('list.general.durations.minutes');
            } else if (toEndIn >= 3600) {
              toEndInTime = Object(_core_utils__WEBPACK_IMPORTED_MODULE_10__["calculateTimeDuration"])(toEndIn) + ' ' + $t('list.general.durations.hours');
            }

            if (_this2.pageConfigs.alertBeforeAutoEnd) {
              if (window.autoEndMeetingTimeout && _this2.autoEndingToast && _core_configs_sweet_alert__WEBPACK_IMPORTED_MODULE_16__["Swal"].isVisible() && _core_configs_sweet_alert__WEBPACK_IMPORTED_MODULE_16__["Swal"].isTimerRunning()) {
                _core_configs_sweet_alert__WEBPACK_IMPORTED_MODULE_16__["swtToast"].update({
                  title: $t('meeting.auto_ending_msg', {
                    attribute: toEndInTime
                  })
                });
              } else {
                if (!_this2.autoEndingToast && _core_configs_sweet_alert__WEBPACK_IMPORTED_MODULE_16__["Swal"].isVisible()) {
                  return;
                }

                if (_this2.autoEndingToast && _this2.autoEndingToast.close && _.isFunction(_this2.autoEndingToast.close)) {
                  _core_configs_sweet_alert__WEBPACK_IMPORTED_MODULE_16__["swtToast"].close();
                  _this2.autoEndingToast = null;
                }

                _this2.autoEndingToast = _core_configs_sweet_alert__WEBPACK_IMPORTED_MODULE_16__["swtToast"].fire({
                  iconHtml: '<i class="far fa-clock"></i>',
                  title: $t('meeting.auto_ending_msg', {
                    attribute: toEndInTime
                  }),
                  timer: toEndIn * 1000,
                  showConfirmButton: false,
                  position: 'bottom'
                });
              }
            }

            if (!(window.autoEndMeetingTimeout && _this2.autoEndingToast)) {
              _this2.stopAutoEndMeeting();

              _this2.startAutoEndMeeting(toEndIn);
            }
          } else if (toEndIn > autoEndTimeAlert * 60) {
            if (_this2.autoEndingToast && _this2.autoEndingToast.close && _.isFunction(_this2.autoEndingToast.close)) {
              _core_configs_sweet_alert__WEBPACK_IMPORTED_MODULE_16__["swtToast"].close();
              _this2.autoEndingToast = null;
            }
          } else {
            _this2.stopAutoEndMeeting();
          }
        }
      };

      var meetingStartedAt = moment(this.entity.startedAt, this.vars.serverDateTimeFormat).valueOf();
      window.meetingDurationInterval = window.setInterval(function () {
        var timeNow = _core_filters_momentz__WEBPACK_IMPORTED_MODULE_13__["now"]({
          moment: true
        }).valueOf();
        _this2.meetingDuration = Object(_core_utils__WEBPACK_IMPORTED_MODULE_10__["calculateTimeDuration"])((timeNow - meetingStartedAt) / 1000);
        checkAutoEndMeeting();
      }, 1000);
    },
    stopMeetingTimer: function stopMeetingTimer() {
      if (window.meetingDurationInterval) {
        this.meetingDuration = null;
        clearInterval(window.meetingDurationInterval);
      }
    },
    shareURL: function shareURL() {
      var _this3 = this;

      if (!this.entity) {
        return;
      }

      this.$gaEvent('engagement', 'shareURL', 'Shown');
      var url = window.location.protocol + '//' + window.location.hostname + (window.location.port ? ':' + window.location.port : '');
      url = url + (this.entity.identifier ? "/m/".concat(this.entity.identifier) : "/app/live/meetings/".concat(this.entity.uuid));
      var alertTitle = this.entity.identifier ? "".concat($t('meeting.meeting_code'), ": <strong class=\"ml-2\"> ").concat(this.entity.identifier, "</strong>") : null;
      Object(_core_utils_media__WEBPACK_IMPORTED_MODULE_9__["share"])({
        title: $t('meeting.user_inviting_msg', {
          attribute: this.user.name
        }),
        alertTitle: alertTitle,
        alertHtml: "".concat($t('misc.share_alert.text'), "<br>") + "<small class='text-muted'>".concat(url, "</small><br>"),
        url: url
      }, function () {
        _this3.$gaEvent('engagement', 'shareURL', 'Copied');

        _this3.$toasted.success($t('meeting.url_has_been_copied'), _this3.$toastConfig);
      });
    },
    // query / countdown / timer methods
    isStartDateTimeInFuture: function isStartDateTimeInFuture() {
      return this.entity && this.entity.startDateTime && moment(this.entity.startDateTime, this.vars.serverDateTimeFormat).isAfter(_core_filters_momentz__WEBPACK_IMPORTED_MODULE_13__["now"]({
        moment: true
      }));
    },
    startCountDown: function startCountDown() {
      var _this4 = this;

      if (window.countdownInterval) {
        clearInterval(window.countdownInterval);
      }

      window.countdownInterval = window.setInterval(function () {
        if (_this4.isStartDateTimeInFuture()) {
          _this4.showFlipClock = true;
        } else {
          if (_this4.showFlipClock && !document.hasFocus()) {
            Object(_core_utils_media__WEBPACK_IMPORTED_MODULE_9__["playIncomingMessage"])();
          }

          _this4.showFlipClock = false;
        }
      }, 1000);
    },
    takeSnapshotOfStream: function takeSnapshotOfStream(item, itemIndex) {
      var _this5 = this;

      if (!(this.pageConfigs.enableSnapshot && this.pageConfigs.anyoneCanTakeSnapshot)) {
        return;
      }

      this.$gaEvent('engagement', 'takeSnapshot');
      var image = this.takeSnapshot(this.$refs.videos[itemIndex], !item.disableMirror);
      var name = "".concat(item.extra.username, " stream by ").concat(this.username);
      this.Custom({
        url: "/".concat(this.initUrl, "/").concat(this.uuid, "/snapshots"),
        method: 'post',
        data: {
          image: image,
          name: name
        }
      }).then(function (response) {
        _this5.$toasted.info($t('meeting.snapshot_taken'), _objectSpread(_objectSpread({}, _this5.$toastConfig.info), {}, {
          duration: 10000,
          icon: {
            name: 'fa-download'
          },
          action: {
            text: 'View / Download',
            href: response.fullUrl,
            target: '_blank'
          }
        }));
      })["catch"](function (error) {
        _this5.isLoading = false;
        formUtil.handleErrors(error);
      });
      this.informAboutSnapshot(item);
      Object(_core_utils_media__WEBPACK_IMPORTED_MODULE_9__["playScreenshot"])();
    },
    takeSnapshot: function takeSnapshot(video, enableMirror) {
      var canvas = document.createElement('canvas');
      canvas.width = (video.videoWidth || video.clientWidth) * 2;
      canvas.height = (video.videoHeight || video.clientHeight) * 2;
      var context = canvas.getContext('2d');

      if (this.configs.meeting && this.configs.meeting.mirroredVideo && enableMirror) {
        context.translate(canvas.width, 0);
        context.scale(-1, 1);
      }

      context.drawImage(video, 0, 0, canvas.width, canvas.height);
      return canvas.toDataURL('image/png');
    },
    informAboutSnapshot: function informAboutSnapshot(item) {
      if (this.pageConfigs.enableSnapshotAlert) {
        this.emitSocketEvents('snapshotTaken', {
          byUser: this.user,
          ofUser: item.extra,
          item: item
        });
      }
    },
    // toggle methods
    toggleHandUp: function toggleHandUp() {
      var _this6 = this;

      this.$gaEvent('engagement', 'toggleHandUp');

      if (window.lowerHandTimer) {
        clearTimeout(window.lowerHandTimer);
      }

      var found = this.$refs.videos.find(function (video) {
        return video.id === _this6.localVideo.id;
      });
      var videoIndex = this.videoList.findIndex(function (video) {
        return video.id === _this6.localVideo.id;
      });

      if (found && found.srcObject) {
        var stream = found.srcObject;
        this.isHandUp = !this.isHandUp;
        this.videoList[videoIndex].isHandUp = this.isHandUp;
        this.emitSocketEvents('remoteHandToggled', {
          isHandUp: this.isHandUp,
          streamid: stream.streamid
        });

        if (this.isHandUp) {
          window.lowerHandTimer = setTimeout(function () {
            _this6.toggleHandUp();
          }, 30000);
        }

        this.rtcmConnection.extra.isHandUp = this.isHandUp;
        this.updateExtraData();
      } else {
        this.localVideo = null;
      }
    },
    toggleAudio: function toggleAudio(event) {
      var _this7 = this;

      var forceMute = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      this.pageConfigs.enableAudio = forceMute ? false : !this.pageConfigs.enableAudio;

      if (this.rtcmConnection) {
        this.rtcmConnection.extra.audioMuted = !this.pageConfigs.enableAudio;
        this.updateExtraData();
      }

      if (!(this.$refs.videos && this.$refs.videos.length)) {
        this.setupGreenRoom();
        return;
      }

      var found = this.$refs.videos.find(function (video) {
        return video.id === _this7.localVideo.id;
      });
      var videoIndex = this.videoList.findIndex(function (video) {
        return video.id === _this7.localVideo.id;
      });

      if (found && found.srcObject) {
        var stream = found.srcObject;
        var tracks = stream.getAudioTracks();
        tracks.forEach(function (track) {
          if (_this7.pageConfigs.enableAudio) {
            track.enabled = true;
            _this7.videoList[videoIndex].audioMuted = false;
          } else {
            track.enabled = false;
            _this7.videoList[videoIndex].audioMuted = true;
          }
        });
        this.emitSocketEvents('remoteMutedUnmuted', {
          audioEnabled: this.pageConfigs.enableAudio,
          streamid: stream.streamid
        });
      } else {
        this.localVideo = null;
      }
    },
    toggleVideo: function toggleVideo() {
      var _this8 = this;

      this.pageConfigs.enableVideo = !this.pageConfigs.enableVideo;

      if (this.rtcmConnection) {
        this.rtcmConnection.extra.videoMuted = !this.pageConfigs.enableVideo;
        this.updateExtraData();
      }

      if (!(this.$refs.videos && this.$refs.videos.length)) {
        this.setupGreenRoom();
        return;
      }

      var found = this.$refs.videos.find(function (video) {
        return video.id === _this8.localVideo.id;
      });
      var videoIndex = this.videoList.findIndex(function (video) {
        return video.id === _this8.localVideo.id;
      });

      if (found && found.srcObject) {
        var stream = found.srcObject;
        var tracks = stream.getVideoTracks();
        tracks.forEach(function (track) {
          if (_this8.pageConfigs.enableVideo) {
            track.enabled = true;
            _this8.videoList[videoIndex].videoMuted = false;
          } else {
            track.enabled = false;
            _this8.videoList[videoIndex].videoMuted = true;
          }
        });
        this.emitSocketEvents('remoteMutedUnmuted', {
          videoEnabled: this.pageConfigs.enableVideo,
          streamid: stream.streamid
        });
      } else {
        this.localVideo = null;
      }
    },
    toggleRemoteAudio: function toggleRemoteAudio(videoItem, itemIndex) {
      if (videoItem.muted) {
        this.videoList[itemIndex].muted = false;
        this.$refs.videos[itemIndex].muted = false;
      } else {
        this.videoList[itemIndex].muted = true;
        this.$refs.videos[itemIndex].muted = true;
      }
    },
    toggleRemoteAudioSource: function toggleRemoteAudioSource(item, itemIndex) {
      this.emitSocketEvents('muteUnmuteRemote', item);
    },
    toggleEleFullScreen: function toggleEleFullScreen(videoItem, itemIndex) {
      var _this9 = this;

      var targetParentEl = this.$refs['videoListEle'];
      this.fullScreenItemId = videoItem.id;
      this.$fullscreen.toggle(targetParentEl, {
        wrap: false,
        callback: function callback(fullscreen) {
          _this9.fullScreenInOn = fullscreen;
        }
      });
    },
    toggleFullScreen: function toggleFullScreen(to) {
      if (screenfull__WEBPACK_IMPORTED_MODULE_7___default.a.isEnabled) {
        if (to) {
          screenfull__WEBPACK_IMPORTED_MODULE_7___default.a.request();
        } else {
          screenfull__WEBPACK_IMPORTED_MODULE_7___default.a.exit();
        }
      }
    },
    toggleFooterAutoHide: function toggleFooterAutoHide() {
      this.pageConfigs.footerAutoHide = !this.pageConfigs.footerAutoHide;
      this.$gaEvent('engagement', 'toggleFooterAutoHide');
    },
    toggleLayout: function toggleLayout(layout) {
      this.pageConfigs.layout = layout ? layout : this.pageConfigs.layout;
      this.pageConfigs.disableScroll = this.pageConfigs.layout === 'grid' ? true : this.entity.config && this.entity.config.hasOwnProperty('disableScroll') ? this.entity.config.disableScroll : this.pageConfigs.disableScroll;
      this.$gaEvent('engagement', 'toggleLayout', layout);
    },
    toggleFileSharing: function toggleFileSharing() {
      this.showFileSharing = !this.showFileSharing;
      this.$gaEvent('engagement', 'toggleFileSharing');
    },
    toggleAgenda: function toggleAgenda() {
      this.showAgenda = !this.showAgenda;
      this.$gaEvent('engagement', 'toggleAgenda');
    },
    toggleWhiteboard: function toggleWhiteboard() {
      this.$gaEvent('engagement', 'toggleWhiteboard');

      if (!this.showWhiteboard) {
        if (!this.canvasDesigner) {
          this.initWhiteboard();
        }

        this.pageConfigs.lastLayout = this.pageConfigs.layout;
        this.pageConfigs.layout = 'presentation';
        this.showWhiteboard = true;
      } else {
        this.pageConfigs.layout = this.pageConfigs.lastLayout;
        this.showWhiteboard = false;
      }
    },
    changeFocus: function changeFocus(item) {
      // if(item.local) {
      //     return
      // }
      this.videoList.forEach(function (v) {
        v.maximized = v.id === item.id;
      });
    },
    disableMirror: function disableMirror(item, itemIndex) {
      this.videoList[itemIndex].disableMirror = this.videoList[itemIndex].disableMirror ? false : true;
    },
    kickRemoteUser: function kickRemoteUser(item, itemIndex) {
      var _this10 = this;

      formUtil.confirmAction().then(function (result) {
        if (result.value) {
          var found = _this10.$refs.videos.find(function (video) {
            return video.id === item.id;
          });

          if (found && found.srcObject) {
            var stream = found.srcObject;

            _this10.rtcmConnection.removeStream(stream.streamid);

            _this10.emitSocketEvents('banAttendee', item);

            _this10.Custom({
              url: "/".concat(_this10.initUrl, "/").concat(_this10.uuid, "/invitees/").concat(item.extra.uuid, "/block"),
              method: 'post'
            }).then(function (response) {
              _this10.$toasted.success(response.message, _this10.$toastConfig);
            })["catch"](function (error) {
              formUtil.handleErrors(error);
            });
          }
        } else {
          result.dismiss === _core_configs_sweet_alert__WEBPACK_IMPORTED_MODULE_16__["Swal"].DismissReason.cancel;
        }
      });
    },
    switchCamera: function switchCamera() {
      this.mediaConfigurations.facingMode = this.mediaConfigurations.facingMode === 'user' ? 'environment' : 'user';
      this.applyMediaConstraints();
    },
    stopStream: function stopStream(localVideo) {
      var found = this.$refs.videos.find(function (video) {
        return video.id === localVideo.id;
      });

      if (found && found.srcObject) {
        var stream = found.srcObject;
        this.stopStream(stream);
      }
    },
    // channel event callback methods
    afterJoiningChannel: function afterJoiningChannel(members) {
      this.membersLive = members;
    },
    newMemberJoining: function newMemberJoining(member) {
      this.membersLive.push(member);
    },
    memberLeaving: function memberLeaving(member) {
      this.membersLive = this.membersLive.filter(function (u) {
        return u.uuid !== member.uuid;
      });
    },
    updateEntityBackup: function updateEntityBackup(data) {
      this.entityDatesBackup.status = data.status;
      this.entityDatesBackup.startDateTime = data.startDateTime;
      this.entityDatesBackup.plannedStartDateTime = data.plannedStartDateTime;
      this.entityDatesBackup.startedAt = data.startedAt;
      this.entityDatesBackup.estimatedEndTime = data.estimatedEndTime;
      this.entityDatesBackup.endedAt = data.endedAt;
    },
    meetingStatusChanged: function meetingStatusChanged(e) {
      var _this11 = this;

      var getTimezoneDateTime = function getTimezoneDateTime(dt) {
        return _core_filters_momentz__WEBPACK_IMPORTED_MODULE_13__["momentDateTimeTz"](dt, _this11.vars.serverDateTimeFormat);
      };

      if (e.uuid === this.entity.uuid) {
        if (this.entity.status === e.status && !e.delayed && !e.updated) {
          return;
        } else if (e.updated) {
          this.stopAutoEndMeeting();
        }

        this.updateEntityBackup(e);
        this.entity.status = e.status;
        this.entity.startDateTime = getTimezoneDateTime(e.startDateTime);

        if (this.entity.plannedStartDateTime) {
          this.entity.plannedStartDateTime = getTimezoneDateTime(e.plannedStartDateTime);
        }

        if (this.entity.startedAt) {
          this.entity.startedAt = getTimezoneDateTime(e.startedAt);
        }

        if (this.entity.estimatedEndTime) {
          this.entity.estimatedEndTime = getTimezoneDateTime(e.estimatedEndTime);
        }

        if (this.entity.status === e.status && !e.delayed) {
          return;
        }

        var meetingStatus = e.status;

        if (meetingStatus === 'scheduled' && e.delayed) {
          meetingStatus = 'delayed';
        }

        var statusUpdateMessages = {
          'live': 'meeting.is_live_now',
          'delayed': 'meeting.meeting_delayed',
          'cancelled': 'meeting.meeting_cancelled',
          'ended': 'meeting.meeting_ended'
        };
        this.$toasted.success($t(statusUpdateMessages[meetingStatus]), this.$toastConfig);
      }
    },
    gotNewMessage: function gotNewMessage() {
      if (!(this.pageConfigs.enableChat && this.configs.chat && this.configs.chat.enabled)) {
        return;
      }

      if (!this.pageConfigs.showChat || this.fullScreenInOn) {
        this.newMessages = true;
        Object(_core_utils_media__WEBPACK_IMPORTED_MODULE_9__["playIncomingMessage"])();
      }
    },
    meetingRoomCreated: function meetingRoomCreated(e) {
      var _this12 = this;

      var data = e.hasOwnProperty('data') && e.data ? e.data : e;
      this.entity.roomId = data.roomId;
      this.initMediaAndRtcmConnection();
      this.rtcmConnection.checkPresence(this.entity.roomId, function (isRoomExist, roomid) {
        _this12.roomIdAlive = !!isRoomExist;

        if (isRoomExist === true && _this12.meetingRoomNotFound === true) {
          _this12.meetingRoomNotFound = false;

          _this12.getOnline();
        }
      });
    },
    banAttendee: function banAttendee(e) {
      var data = e.hasOwnProperty('data') && e.data ? e.data : e;

      if (this.enableLogs) {
        console.log(data);
      }

      var found = this.$refs.videos.find(function (video) {
        return video.id === data.id;
      });

      if (found && found.srcObject) {
        var stream = found.srcObject;
        this.rtcmConnection.removeStream(stream.streamid);
      }

      if (e.uuid === this.userUuid) {
        this.closeConnectionAndStream();
        this.getInitialData();
      }

      this.$toasted.info($t('meeting.ban_notification'), this.$toastConfig.info);
    },
    streamRemoved: function streamRemoved(e) {
      var data = e.hasOwnProperty('data') && e.data ? e.data : e;

      if (this.rtcmConnection && data.id) {
        this.rtcmConnection.removeStream(data.id);
      }

      this.rtcmOnStreamEnded(data);
    },
    meetingEnded: function meetingEnded(e) {
      var data = e.hasOwnProperty('data') && e.data ? e.data : e;
      this.closeConnectionAndStream();
      this.getInitialData();
    },
    // channel action methods
    joinChannel: function joinChannel() {
      if (!window.Echo) {
        return;
      }

      if (this.entity.isPam) {
        window.meetingChannel = window.Echo.channel("MeetingGuest.".concat(this.uuid));
      } else {
        window.meetingChannel = window.Echo.join("Meeting.".concat(this.uuid));
        window.meetingChannel.here(this.afterJoiningChannel).joining(this.newMemberJoining).leaving(this.memberLeaving);
      }

      window.meetingChannel.listen('MeetingStatusChanged', this.meetingStatusChanged).listen('NewMessage', this.gotNewMessage).listen('MeetingRoomCreated', this.meetingRoomCreated).listen('PublicMeetingRoomCreated', this.meetingRoomCreated);
    },
    emitSocketEvents: function emitSocketEvents(event) {
      var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      if (!(this.rtcmConnection && this.rtcmConnection.socket && event)) {
        return;
      }

      if (this.enableLogs) {
        console.log('Emitting on Socket: ', event);
      }

      try {
        this.rtcmConnection.socket.emit('Whisper', {
          event: event,
          data: data
        });
      } catch (e) {}
    },
    // rtcm event callback methods
    rtcmOnOpen: function rtcmOnOpen(e) {
      var _this13 = this;

      if (this.canvasDesigner && this.canvasDesigner.pointsLength <= 0) {
        setTimeout(function () {
          _this13.rtcmConnection.send('sync-canvas-points');
        }, 1000);
      }

      if (this.canvasDesigner && this.rtcmConnection.isInitiator) {
        setTimeout(function () {
          this.canvasDesigner.renderStream();
        }, 1000);
      }
    },
    rtcmOnClose: function rtcmOnClose(e) {},
    rtcmOnMessage: function rtcmOnMessage(e) {// if (e.data === 'sync-canvas-points') {
      //     this.canvasDesigner.sync()
      //     return
      // }
      // this.canvasDesigner.syncData(e.data)
    },
    rtcmOnUserStatusChanged: function rtcmOnUserStatusChanged(event) {
      var _this14 = this;

      var localUserId = this.rtcmConnection.userid;

      if (this.enableLogs) {
        console.log("On rtcmOnUserStatusChanged - event : ", event); // console.log("On rtcmOnUserStatusChanged - rtcmConnection : ", this.rtcmConnection)

        console.log("On rtcmOnUserStatusChanged - localUserId : ", localUserId);
      }

      var newUserAdded = function newUserAdded(stream) {
        // debugger
        var streamId = stream.userid;
        var streamType = stream.userid === localUserId ? 'local' : 'remote';

        if (!(_this14.rtcmConnection.isInitiator || _this14.entity.canModerate) && streamType !== 'local' && (_this14.entity.type.uuid === 'live_class' || _this14.entity.type.uuid === 'webinar')) {
          //if current user is a normal user (not an initiator or moderator), and stream type is from remote, and type is live class
          return;
        }

        var found = _this14.videoList.find(function (video) {
          return video.id === stream.streamid;
        });

        if (_this14.videoList.length > 1) {
          _this14.recheckLiveParticipants(null);
        }

        if (found === undefined) {
          var video = _objectSpread(_objectSpread({
            id: streamId,
            streamUserId: stream.userid,
            muted: true
          }, stream.extra), {}, {
            extra: stream.extra,
            maximized: false,
            local: streamType === 'local' ? true : false,
            //bad me dekhenge
            screen: false,
            status: true,
            hasAudio: false,
            hasVideo: false,
            hasStream: false,
            speaking: false
          });

          _this14.videoList.push(video);
        }

        _this14.isLoading = false;
      };

      var foundVideos = this.videoList.filter(function (video) {
        return video.id === event.userid || video.streamUserId === event.userid || event.extra && video.uuid === event.extra.uuid;
      });

      if (event && event.status === "online") {
        if (foundVideos && foundVideos.length) {
          foundVideos.forEach(function (foundVideo) {
            if (foundVideo.username !== event.extra.username) {
              var tempIndex = _this14.videoList.findIndex(function (video) {
                return video.uuid === foundVideo.uuid;
              });

              _this14.videoList[tempIndex].username = event.extra.username;
              _this14.videoList[tempIndex].name = event.extra.name;

              if (_this14.videoList[tempIndex].extra) {
                _this14.videoList[tempIndex].extra['username'] = event.extra.username;
                _this14.videoList[tempIndex].extra['name'] = event.extra.name;
              }
            }
          });
        } else if (event.extra && event.extra.hasOwnProperty('username') && event.extra.username) {
          newUserAdded(event);
        }
      } else {
        if (foundVideos && foundVideos.length) {
          foundVideos.forEach(function (foundVideo) {
            _this14.rtcmConnection.removeStream(foundVideo.id);

            _this14.recheckLiveParticipants(_objectSpread(_objectSpread({}, foundVideo), {}, {
              streamid: foundVideo.id
            }));

            _this14.autoSetVideoMaximized();
          });
        }
      }
    },
    rtcmOnLeave: function rtcmOnLeave(event) {
      if (this.enableLogs) {
        console.log("On rtcmOnLeave - event : ", event);
      }
    },
    rtcmOnSpeaking: function rtcmOnSpeaking(event) {
      var _this15 = this;

      // if (this.enableLogs) {
      // console.log("On rtcmOnSpeaking - event : ", event)
      // }
      var videoIndex = this.videoList.findIndex(function (v) {
        return v.id === event.streamid;
      });

      if (window.onSilenceTimeoutObj['index' + videoIndex]) {
        clearTimeout(window.onSilenceTimeoutObj['index' + videoIndex]);
      }

      if (this.videoList[videoIndex]) {
        this.videoList[videoIndex].speaking = true;
      }

      window.onSilenceTimeoutObj['index' + videoIndex] = setTimeout(function () {
        if (_this15.videoList[videoIndex]) {
          _this15.videoList[videoIndex].speaking = false;
        }
      }, 5000);
    },
    rtcmOnSilence: function rtcmOnSilence(event) {
      var _this16 = this;

      // if (this.enableLogs) {
      // console.log("On rtcmOnSilence - event : ", event)
      // }
      var videoIndex = this.videoList.findIndex(function (v) {
        return v.id === event.streamid;
      });

      if (window.onSilenceTimeoutObj['index' + videoIndex]) {
        clearTimeout(window.onSilenceTimeoutObj['index' + videoIndex]);
      }

      window.onSilenceTimeoutObj['index' + videoIndex] = setTimeout(function () {
        if (_this16.videoList[videoIndex]) {
          _this16.videoList[videoIndex].speaking = false;
        }
      }, 2000);
    },
    rtcmOnVolumeChange: function rtcmOnVolumeChange(event) {// if (this.enableLogs) {
      //     console.log("On rtcmOnVolumeChange - event : ", event)
      // }
    },
    rtcmOnStream: function rtcmOnStream(stream) {
      var _this17 = this;

      if (this.enableLogs) {
        console.log('On Stream: ', stream);
      }

      if (!(this.rtcmConnection.isInitiator || this.entity.canModerate) && stream.type !== 'local' && (this.entity.type.uuid === 'live_class' || this.entity.type.uuid === 'webinar')) {
        //if current user is a normal user (not an initiator or moderator), and stream type is from remote, and type is live class
        if (!stream.extra.isInitiator) {
          // if remove stream is from a user who is not an initiator, then dont show
          return;
        }
      }

      var streamId = stream.streamid;
      var foundIndex = this.videoList.findIndex(function (video) {
        return video.id === stream.streamid || video.id === stream.userid;
      });
      var streamInstance = stream.stream.idInstance ? JSON.parse(stream.stream.idInstance) : stream.stream;
      var isWhiteboard = !(streamInstance.isAudio || streamInstance.audio || streamInstance.isVideo || streamInstance.video || streamInstance.isScreen || streamInstance.screen) && stream.extra.hasWhiteboard;

      if (streamInstance.isScreen && stream.type === 'local') {
        this.localScreenStreamid = stream.streamid;
        var tracks = stream.stream.getTracks();
        tracks.forEach(function (track) {
          track.addEventListener('ended', _this17.stopSharingScreen);
        });
      } else if (isWhiteboard && stream.type === 'local') {
        this.localWhiteboardStreamid = stream.streamid;
      }

      if (this.videoList.length > 1) {
        this.recheckLiveParticipants(null);
      }

      var video = _objectSpread(_objectSpread({
        id: streamId,
        streamUserId: stream.userid,
        muted: stream.type === 'local'
      }, stream.extra), {}, {
        extra: stream.extra,
        maximized: stream.type === 'local' && !streamInstance.isScreen && !isWhiteboard,
        local: stream.type === 'local',
        screen: stream.extra.screenStreamId && streamId === stream.extra.screenStreamId || this.localScreenStreamid === streamId || streamInstance.isScreen,
        whiteboard: stream.extra.whiteboardStreamId && streamId === stream.extra.whiteboardStreamId || isWhiteboard,
        status: true,
        hasAudio: streamInstance.isAudio || streamInstance.audio,
        hasVideo: streamInstance.isVideo || streamInstance.video || streamInstance.isScreen || isWhiteboard || streamInstance.screen,
        hasStream: true,
        speaking: false,
        disableMirror: false
      });

      if (video.screen || video.whiteboard) {
        video.videoMuted = false;
      }

      if (foundIndex === -1) {
        // let foundUserIndex = this.videoList.findIndex(item => item.uuid === stream.extra.uuid)
        // if (foundUserIndex >= 0) {
        //     const foundUserVideo = this.videoList[foundUserIndex]
        //     if (!foundUserVideo.status) {
        //         let newList = this.videoList.map(item => item.uuid !== foundUserVideo.uuid)
        //         this.videoList = newList
        //     }
        // }
        if (stream.type === 'local' && this.localScreenStreamid !== video.id && this.localWhiteboardStreamid !== video.id) {
          if (this.localVideo && this.needStreamAddOrReplace) {
            video.id = streamId = this.localVideo.id;
          } else {
            this.localVideo = video;
            this.videoList.push(video);
          }
        } else {
          this.videoList.push(video);
        } //just for testing -start
        // let video2 = {
        //     ...video,
        //     maximized: false,
        //     uuid: uuid(),
        // }
        // this.videoList.push(video)
        // this.videoList.push(video2)
        //just for testing -ended

      } else if (foundIndex !== -1 && !this.videoList[foundIndex].hasStream) {
        if (stream.type === 'local' && this.localScreenStreamid !== video.id && this.localWhiteboardStreamid !== video.id) {
          if (this.localVideo && this.needStreamAddOrReplace) {
            video.id = streamId = this.localVideo.id;
          } else {
            this.localVideo = video;
            this.videoList[foundIndex] = Object.assign({}, this.videoList[foundIndex], video);
          }
        } else {
          this.videoList[foundIndex] = Object.assign({}, this.videoList[foundIndex], video);
        }
      }

      this.autoSetVideoMaximized();

      if (this.pageConfigs.enableRecording) {
        var recorderInstance = this.rtcmConnection.recorder;

        if (recorderInstance) {
          var internalRecorder = recorderInstance.getInternalRecorder();

          if (this.recording && internalRecorder) {
            internalRecorder.addStreams(stream.stream);
          }
        } // if(!this.rtcmConnection.recorder.streams) {
        //     this.rtcmConnection.recorder.streams = []
        // }
        // if(this.recording) {
        //     this.rtcmConnection.recorder.streams.push(stream.stream)
        // }

      }

      setTimeout(function () {
        if (_this17.enableLogs) {
          console.log("$refs : ", _this17.$refs);
          console.log("$refs.videos : ", _this17.$refs.videos);
        }

        for (var i = 0, len = _this17.$refs.videos.length; i < len; i++) {
          if (_this17.$refs.videos[i].id === streamId || _this17.$refs.videos[i].id === stream.userid) {
            _this17.$refs.videos[i].srcObject = stream.stream;
            break;
          }
        } // this.rtcmConnection.streamEvents.selectAll({
        //     isScreen: true
        // }).forEach(function(screenEvent) {
        //     this.videoList.forEach((item, index) => {
        //         if (item.id !== screenEvent.stream.streamid) {
        //             this.videoList[index].screen = true
        //         } else {
        //             this.videoList[index].screen = false
        //         }
        //     })
        // })


        if (stream.type === 'local') {
          _this17.applyOnStartConfigs();
        }

        setTimeout(function () {
          if (_this17.pageConfigs.speechDetection && !isWhiteboard && !streamInstance.isScreen) {
            _this17.initHark({
              stream: stream.stream,
              streamedObject: stream,
              connection: _this17.rtcmConnection
            });
          }
        }, 1000);
      }, 500);
      this.isLoading = false;
    },
    rtcmOnStreamEnded: function rtcmOnStreamEnded(stream) {
      this.recheckLiveParticipants(stream);
      this.autoSetVideoMaximized();
    },
    rtcmOnError: function rtcmOnError(error) {
      this.isLoading = false; // if(window.currentUserMediaRequest) {
      //     window.currentUserMediaRequest.mutex = false
      // }
    },
    rtcmOnMediaError: function rtcmOnMediaError(error) {
      var _this18 = this;

      this.isLoading = false;

      if (window.currentUserMediaRequest) {
        window.currentUserMediaRequest.mutex = false;
      }

      if (this.enableLogs) {
        console.log("onMediaError : ", error);
      }

      this.mediaDeviceIssue = true;
      var msgObj = Object(_core_utils_media__WEBPACK_IMPORTED_MODULE_9__["showMediaPermissionError"])(error);
      msgObj.alert.then(function (result) {
        if (error.name === 'NotFoundError' || error.name === 'NotReadableError' || error.name === 'OverconstrainedError') {
          _this18.applyMediaConstraints(true);

          _this18.$toasted.info($t('meeting.media_devices.setup_reset_try_again'), _this18.$toastConfig.info);
        } else if (error.name === 'NotAllowedError' || error.name === 'PermissionDeniedError') {
          _this18.permissionRejected = true;
        }

        if (!result.value) {
          _this18.isLoading = false;
          result.dismiss === _core_configs_sweet_alert__WEBPACK_IMPORTED_MODULE_16__["Swal"].DismissReason.cancel;
        }
      }); // this.meetingAction('leave', { error: { name: error.name, title: msg.title } }, { alert: false })
    },
    rtcmOnMute: function rtcmOnMute(stream) {
      if (this.enableLogs) {
        console.log("On rtcmOnMute: ", stream);
      }

      var videoIndex = this.videoList.findIndex(function (v) {
        return v.id === stream.streamid;
      });
      var videoEle = this.$refs.videos.find(function (video) {
        return video.id === stream.streamid;
      });

      if (stream.muteType === 'video') {
        this.videoList[videoIndex].videoMuted = true;
      } else if (stream.muteType === 'audio') {
        this.videoList[videoIndex].muted = true;
      } else {
        this.videoList[videoIndex].videoMuted = true;
        this.videoList[videoIndex].muted = true;
        videoEle.srcObject = null;
      }
    },
    rtcmOnUnmute: function rtcmOnUnmute(stream) {
      if (this.enableLogs) {
        console.log(stream);
      }

      var videoIndex = this.videoList.findIndex(function (v) {
        return v.id === stream.streamid;
      });
      var videoEle = this.$refs.videos.find(function (video) {
        return video.id === stream.streamid;
      });

      if (stream.unmuteType === 'video') {
        this.videoList[videoIndex].videoMuted = false;
      } else if (stream.unmuteType === 'audio') {
        this.videoList[videoIndex].muted = false;
      } else {
        this.videoList[videoIndex].videoMuted = false;
        this.videoList[videoIndex].muted = false;
        videoEle.srcObject = stream;
      }
    },
    rtcmOnRemoteMuteUnmuted: function rtcmOnRemoteMuteUnmuted(e) {
      var data = e.hasOwnProperty('data') && e.data ? e.data : e;

      if (this.enableLogs) {
        console.log(data);
      }

      var videoIndex = this.videoList.findIndex(function (video) {
        return video.id === data.streamid;
      });

      if (videoIndex === -1 || !this.videoList[videoIndex]) {
        return;
      }

      if (data.hasOwnProperty('audioEnabled')) {
        if (data.audioEnabled) {
          this.videoList[videoIndex].audioMuted = false;
        } else {
          this.videoList[videoIndex].audioMuted = true;
        }
      } else if (data.hasOwnProperty('videoEnabled')) {
        // const videoEle = this.$refs.videos.find(video => {
        //     return video.id === data.streamid
        // })
        if (data.videoEnabled) {
          this.videoList[videoIndex].videoMuted = false;
        } else {
          this.videoList[videoIndex].videoMuted = true;
        }
      }
    },
    rtcmOnSnapshotTaken: function rtcmOnSnapshotTaken(e) {
      var data = e.hasOwnProperty('data') && e.data ? e.data : e;

      if (this.enableLogs) {
        console.log('rtcmOnSnapshotTaken', data);
      }

      if (!(this.pageConfigs.enableSnapshotAlert && data && data.byUser && data.ofUser)) {
        return;
      }

      if (this.pageConfigs.snapshotAlertToUserOnly) {
        if (this.userUuid === data.ofUser.uuid) {
          this.$toasted.info($t('meeting.snapshot_taken_notification_your', {
            by_user: data.byUser.name
          }), this.$toastConfig.info);
          Object(_core_utils_media__WEBPACK_IMPORTED_MODULE_9__["playScreenshot"])();
        }
      } else {
        if (this.userUuid === data.ofUser.uuid) {
          this.$toasted.info($t('meeting.snapshot_taken_notification_your', {
            by_user: data.byUser.name
          }), this.$toastConfig.info);
        } else {
          this.$toasted.info($t('meeting.snapshot_taken_notification_user', {
            by_user: data.byUser.name,
            of_user: data.ofUser.name
          }), this.$toastConfig.info);
        }

        Object(_core_utils_media__WEBPACK_IMPORTED_MODULE_9__["playScreenshot"])();
      }
    },
    rtcmOnMeetingUpdated: function rtcmOnMeetingUpdated(e) {
      var _this19 = this;

      var data = {};

      if (e.data) {
        data = e.data;
      }

      if (this.enableLogs) {
        console.log('rtcmOnMeetingUpdated', data);
      }

      if (data.dateUpdated) {
        var getTimezoneDateTime = function getTimezoneDateTime(dt) {
          return _core_filters_momentz__WEBPACK_IMPORTED_MODULE_13__["momentDateTimeTz"](dt, _this19.vars.serverDateTimeFormat);
        };

        console.log('rtcmOnMeetingUpdated', this.entity);
        this.updateEntityBackup(data);
        this.entity.status = data.status;
        this.entity.startDateTime = getTimezoneDateTime(data.startDateTime);

        if (data.plannedStartDateTime) {
          this.entity.plannedStartDateTime = getTimezoneDateTime(data.plannedStartDateTime);
        }

        if (data.startedAt) {
          this.entity.startedAt = getTimezoneDateTime(data.startedAt);
        }

        if (data.estimatedEndTime) {
          this.entity.estimatedEndTime = getTimezoneDateTime(data.estimatedEndTime);
        }

        if (data.endedAt) {
          this.entity.endedAt = getTimezoneDateTime(data.endedAt);
        }

        console.log('rtcmOnMeetingUpdated', this.entity);
      }

      if (data.endTimeSnoozed && this.autoEndingToast && this.autoEndingToast.close && _.isFunction(this.autoEndingToast.close)) {
        this.stopAutoEndMeeting();
        _core_configs_sweet_alert__WEBPACK_IMPORTED_MODULE_16__["swtToast"].close();
        this.autoEndingToast = null;
      }

      if (data.autoEndCancelled && this.autoEndingToast && this.autoEndingToast.close && _.isFunction(this.autoEndingToast.close)) {
        this.stopAutoEndMeeting();
        this.pageConfigs.autoEndMeeting = false;
        _core_configs_sweet_alert__WEBPACK_IMPORTED_MODULE_16__["swtToast"].close();
        this.autoEndingToast = null;
      }
    },
    rtcmOnRemoteHandToggled: function rtcmOnRemoteHandToggled(e) {
      var data = e.hasOwnProperty('data') && e.data ? e.data : e;

      if (this.enableLogs) {
        console.log(data);
      }

      if (!(data && data.streamid && this.rtcmConnection.streamEvents[data.streamid])) {
        return;
      }

      var videoIndex = this.videoList.findIndex(function (video) {
        return video.id === data.streamid;
      });

      if (data.hasOwnProperty('isHandUp')) {
        if (data.isHandUp) {
          this.videoList[videoIndex].isHandUp = true;
          this.$toasted.info($t('meeting.handup_notification', {
            attribute: this.videoList[videoIndex].name
          }), this.$toastConfig.info);
        } else {
          this.videoList[videoIndex].isHandUp = false;
        }
      }
    },
    rtcmOnMuteUnmuteRemote: function rtcmOnMuteUnmuteRemote(e) {
      var data = e.hasOwnProperty('data') && e.data ? e.data : e;

      if (this.enableLogs) {
        console.log(data);
      }

      var found = this.$refs.videos.find(function (video) {
        return video.id === data.id;
      });

      if (found && found.srcObject) {
        this.toggleAudio();
      }
    },
    rtcmOnUserIdAlreadyTaken: function rtcmOnUserIdAlreadyTaken(useridAlreadyTaken, yourNewUserId) {
      this.rtcmConnection.userid = yourNewUserId;
    },
    // rtc action methods
    initMediaAndRtcmConnection: function initMediaAndRtcmConnection() {
      if (!this.rtcmConnection) {
        this.rtcmConnection = new rtcmulticonnection__WEBPACK_IMPORTED_MODULE_2___default.a();
        this.rtcmConnection.socketURL = window.atob(this.socketURL);

        if (this.configs.signalServers && this.configs.signalServers.url) {
          this.rtcmConnection.socketURL = this.configs.signalServers.url;
        }

        this.rtcmConnection.autoCreateMediaElement = false; // this.rtcmConnection.autoCloseEntireSession = true // set this line to close room as soon as room creator leaves

        if (this.configs.meeting) {
          if (this.configs.meeting.debugMode) {
            this.rtcmConnection.enableLogs = true;
          } else {
            this.rtcmConnection.enableLogs = true;
          }

          if (this.configs.meeting.forceTurn) {
            this.rtcmConnection.candidates = {
              turn: true,
              stun: false,
              host: false
            };
          }
        }

        this.rtcmConnection.onopen = this.rtcmOnOpen;
        this.rtcmConnection.onclose = this.rtcmOnClose;
        this.rtcmConnection.onleave = this.rtcmOnLeave;
        this.rtcmConnection.onmessage = this.rtcmOnMessage; // this.rtcmConnection.onNewParticipant = this.rtcmOnNewParticipant
        // this.rtcmConnection.onReadyForOffer = this.rtcmOnReadyForOffer

        this.rtcmConnection.onUserStatusChanged = this.rtcmOnUserStatusChanged;
        this.rtcmConnection.onstream = this.rtcmOnStream;
        this.rtcmConnection.onstreamended = this.rtcmOnStreamEnded;
        this.rtcmConnection.onmute = this.rtcmOnMute;
        this.rtcmConnection.onunmute = this.rtcmOnUnmute;
        this.rtcmConnection.onMediaError = this.rtcmOnMediaError;
        this.rtcmConnection.onerror = this.rtcmOnError;
        this.rtcmConnection.onUserIdAlreadyTaken = this.rtcmOnUserIdAlreadyTaken;

        if (this.pageConfigs.speechDetection) {
          this.rtcmConnection.onspeaking = this.rtcmOnSpeaking;
          this.rtcmConnection.onsilence = this.rtcmOnSilence;
          this.rtcmConnection.onvolumechange = this.rtcmOnVolumeChange;
          window.onSilenceTimeoutObj = {};
        }

        this.rtcmConnection.setCustomSocketEvent('Whisper');
        this.fileSharingConnection = this.rtcmConnection;
      }

      this.getMediaConstraints(); //Bandwidth and bitrate setup

      var BandwidthHandler = this.rtcmConnection.BandwidthHandler;
      this.rtcmConnection.bandwidth = {
        audio: this.mediaConfigurations.bandwidth.audio === 'auto' ? false : this.mediaConfigurations.bandwidth.audio,
        video: this.mediaConfigurations.bandwidth.video === 'auto' ? false : this.mediaConfigurations.bandwidth.video,
        screen: this.mediaConfigurations.bandwidth.screen === 'auto' ? false : this.mediaConfigurations.bandwidth.screen
      }; // this.rtcmConnection.processSdp = (sdp) => {
      //     if (this.rtcmConnection.DetectRTC.browser.name === 'Safari') {
      //         return sdp
      //     }
      //     if (this.rtcmConnection.codecs.video.toUpperCase() === 'VP8') {
      //         sdp = BandwidthHandler.preferCodec(sdp, 'vp8')
      //     }
      //     if (this.rtcmConnection.codecs.video.toUpperCase() === 'VP9') {
      //         sdp = BandwidthHandler.preferCodec(sdp, 'vp9')
      //     }
      //     if (this.rtcmConnection.codecs.video.toUpperCase() === 'H264') {
      //         sdp = BandwidthHandler.preferCodec(sdp, 'h264')
      //     }
      //     if (this.rtcmConnection.codecs.audio === 'G722') {
      //         sdp = BandwidthHandler.removeNonG722(sdp)
      //     }
      //     if (this.rtcmConnection.DetectRTC.browser.name === 'Firefox') {
      //         return sdp
      //     }
      //     if (this.rtcmConnection.bandwidth.video || this.rtcmConnection.bandwidth.screen) {
      //         sdp = BandwidthHandler.setApplicationSpecificBandwidth(sdp, this.rtcmConnection.bandwidth, !!this.rtcmConnection.session.screen)
      //     }
      //     if (this.rtcmConnection.bandwidth.video) {
      //         sdp = BandwidthHandler.setVideoBitrates(sdp, {
      //             min: this.mediaConfigurations.bandwidth.videoMin * 8 * 1024,
      //             max: this.rtcmConnection.bandwidth.video * 8 * 1024
      //         })
      //     }
      //     if (this.rtcmConnection.bandwidth.audio) {
      //         sdp = BandwidthHandler.setOpusAttributes(sdp, {
      //             maxaveragebitrate: this.rtcmConnection.bandwidth.audio * 8 * 1024,
      //             maxplaybackrate: this.rtcmConnection.bandwidth.audio * 8 * 1024,
      //             stereo: 1,
      //             maxptime: 3
      //         })
      //     }
      //     return sdp
      // }

      this.rtcmConnection.iceServers = [{
        urls: ["stun.l.google.com:19302", "stun1.l.google.com:19302", "stun2.l.google.com:19302", "stun3.l.google.com:19302", "stun4.l.google.com:19302"]
      }];

      if (this.pageConfigs.maxParticipantCount) {
        this.rtcmConnection.maxParticipantsAllowed = this.pageConfigs.maxParticipantCount;
      }

      if (this.configs.iceServers.length) {
        this.rtcmConnection.iceServers = _toConsumableArray(this.configs.iceServers);
      }

      this.rtcmConnection.session = _objectSpread({}, this.meetingRulesHost.session);
      this.rtcmConnection.sdpConstraints.mandatory = _objectSpread({}, this.meetingRulesHost.mandatory);
      this.rtcmConnection.mediaConstraints = {
        video: this.meetingRulesHost.mediaConstraints.video ? this.videoConstraints : false,
        audio: this.meetingRulesHost.mediaConstraints.audio ? this.audioConstraints : false,
        screen: this.meetingRulesHost.mediaConstraints.screen
      };
    },
    initSocketListener: function initSocketListener() {
      if (!(this.rtcmConnection && this.rtcmConnection.socket)) {
        return;
      }

      var callbackList = {
        'removedStream': this.streamRemoved,
        'banAttendee': this.banAttendee,
        'muteUnmuteRemote': this.rtcmOnMuteUnmuteRemote,
        'remoteMutedUnmuted': this.rtcmOnRemoteMuteUnmuted,
        'remoteHandToggled': this.rtcmOnRemoteHandToggled,
        'meetingEnded': this.meetingEnded,
        'snapshotTaken': this.rtcmOnSnapshotTaken,
        'meetingUpdated': this.rtcmOnMeetingUpdated
      };
      this.rtcmConnection.socket.on('Whisper', function (e) {
        if (e && callbackList.hasOwnProperty(e.event)) {
          callbackList[e.event](e.data);
        }
      });
    },
    initCanvasDesigner: function initCanvasDesigner() {
      // here goes canvas designer
      this.canvasDesigner = new CanvasDesigner(); // you can place widget.html anywhere

      this.canvasDesigner.widgetHtmlURL = '/js/canvas-designer/widget.html';
      this.canvasDesigner.widgetJsURL = '/js/canvas-designer/widget.min.js';
    },
    initWhiteboard: function initWhiteboard() {
      var _this20 = this;

      if (this.videoList.length < 1 || !this.$refs.whiteboard || !CanvasDesigner) {
        return;
      }

      if (!this.canvasDesigner) {
        this.initCanvasDesigner();
      }

      this.canvasDesigner.addSyncListener(function (data) {
        _this20.rtcmConnection.send(data);
      });
      this.canvasDesigner.setSelected('pencil');
      this.canvasDesigner.setTools({
        pencil: true,
        text: true,
        image: true,
        pdf: true,
        eraser: true,
        line: true,
        arrow: true,
        dragSingle: true,
        dragMultiple: true,
        arc: true,
        rectangle: true,
        quadratic: true,
        bezier: false,
        marker: true,
        zoom: false,
        lineWidth: true,
        colorsPicker: true,
        extraOptions: true,
        code: false,
        undo: true
      });

      if (!this.canvasDesigner.iframe) {
        this.canvasDesigner.appendTo(this.$refs.whiteboard, function () {
          _this20.rtcmConnection.extra.hasWhiteboard = true;

          _this20.updateExtraData();

          _this20.canvasDesigner.captureStream(function (stream) {
            _this20.rtcmConnection.addStream(stream);

            _this20.rtcmConnection.onstream({
              streamid: stream.id,
              stream: stream,
              userid: _this20.rtcmConnection.userid,
              type: 'local',
              extra: _this20.rtcmConnection.extra
            });
          });
        });
      }
    },
    updateExtraData: function updateExtraData() {
      if (this.rtcmConnection && this.rtcmConnection.socket) {
        this.rtcmConnection.updateExtraData();
      }
    },
    destroyWhiteboard: function destroyWhiteboard() {
      var _this21 = this;

      if (this.canvasDesigner) {
        this.canvasDesigner.destroy();
        this.canvasDesigner = null;
        var found = this.$refs.videos.find(function (video) {
          return video.id === _this21.localWhiteboardStreamid;
        });

        if (found && found.srcObject) {
          if (this.rtcmConnection && this.localWhiteboardStreamid) {
            this.rtcmConnection.removeStream(this.localWhiteboardStreamid);
            this.rtcmOnStreamEnded({
              id: this.localWhiteboardStreamid
            });

            if (this.videoList.length > 1) {
              this.recheckLiveParticipants({
                streamid: this.localWhiteboardStreamid
              });
            }

            this.autoSetVideoMaximized();
          }

          this.emitSocketEvents('removedStream', found.srcObject); // this.videoList = this.videoList.filter(video => video.id !== this.localScreenStreamid)

          this.localWhiteboardStreamid = null;
        } else {
          this.localWhiteboardStreamid = null;
        }
      }

      this.rtcmConnection.extra.hasWhiteboard = false;
      this.updateExtraData();
    },
    hideAndDestroyWhiteboard: function hideAndDestroyWhiteboard() {
      var _this22 = this;

      formUtil.confirmAction().then(function (result) {
        if (result.value) {
          _this22.pageConfigs.layout = _this22.pageConfigs.lastLayout;
          _this22.showWhiteboard = false;

          _this22.destroyWhiteboard();
        } else {
          result.dismiss === _core_configs_sweet_alert__WEBPACK_IMPORTED_MODULE_16__["Swal"].DismissReason.cancel;
        }
      });
    },
    getMediaConstraints: function getMediaConstraints() {
      var _this23 = this;

      var setDefaults = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      this.needStreamAddOrReplace = false;

      if (setDefaults) {
        this.audioConstraints = {
          "sampleSize": 16,
          "channelCount": 2,
          "echoCancellation": false
        };
        this.videoConstraints = {
          width: {
            min: 426,
            ideal: 1280,
            max: 4096
          },
          height: {
            min: 240,
            ideal: 720,
            max: 2160
          }
        };
        return;
      }

      if (this.pageConfigs.enableAudio) {
        if (this.mediaConfigurations.selectedAudioInput && this.mediaConfigurations.selectedAudioInput.uuid && this.mediaConfigurations.selectedAudioInput.uuid !== 'auto') {
          this.audioConstraints = {
            deviceId: {
              ideal: this.mediaConfigurations.selectedAudioInput.uuid
            }
          };

          if (this.audioConstraints.hasOwnProperty('deviceId') && this.mediaConfigurations.activeAudioInput !== this.audioConstraints.deviceId.ideal) {
            this.needStreamAddOrReplace = true;
          }
        } else {
          this.audioConstraints = true;
        }
      } else {
        this.audioConstraints = false;
      }

      if (this.pageConfigs.enableVideo) {
        if (this.mediaConfigurations.selectedVideoInput && this.mediaConfigurations.selectedVideoInput.uuid && this.mediaConfigurations.selectedVideoInput.uuid !== 'auto') {
          this.videoConstraints = {
            deviceId: {
              ideal: this.mediaConfigurations.selectedVideoInput.uuid
            }
          };

          if (this.videoConstraints.hasOwnProperty('deviceId') && this.mediaConfigurations.activeVideoInput !== this.videoConstraints.deviceId.ideal) {
            this.needStreamAddOrReplace = true;
          }
        } else {
          delete this.videoConstraints.deviceId;
        }

        if (this.mediaConfigurations.facingMode !== 'auto') {
          this.videoConstraints.facingMode = this.mediaConfigurations.facingMode;

          if (this.mediaConfigurations.activeFacingMode !== this.videoConstraints.facingMode) {
            this.needStreamAddOrReplace = true;
          }
        } else {
          if (this.videoConstraints.hasOwnProperty('facingMode')) {
            if (this.mediaConfigurations.activeFacingMode !== this.videoConstraints.facingMode) {
              this.needStreamAddOrReplace = true;
            }

            delete this.videoConstraints.facingMode;
          }
        }

        if (this.mediaConfigurations.frameRate !== 'auto') {
          this.videoConstraints.frameRate = this.mediaConfigurations.frameRate;
        } else {
          if (this.videoConstraints.hasOwnProperty('frameRate')) {
            delete this.videoConstraints.frameRate;
          }
        }

        var selectedResolution = this.mediaDevices.resolutions.find(function (r) {
          return r.label === _this23.mediaConfigurations.selectedResolution;
        });

        if (selectedResolution && selectedResolution.label !== 'Auto') {
          this.videoConstraints.width = selectedResolution.constraints.width;
          this.videoConstraints.height = selectedResolution.constraints.height;
        } else {
          if (this.videoConstraints.hasOwnProperty('width')) {
            delete this.videoConstraints.width;
          }

          if (this.videoConstraints.hasOwnProperty('height')) {
            delete this.videoConstraints.height;
          }
        }
      } else {
        this.videoConstraints = false;
      }
    },
    applyMediaConstraints: function applyMediaConstraints() {
      var setDefaults = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

      if (!(this.rtcmConnection && this.localVideo)) {
        return;
      }

      this.getMediaConstraints(setDefaults);
      this.rtcmConnection.mediaConstraints = {
        video: this.meetingRulesHost.mediaConstraints.video ? this.videoConstraints : false,
        audio: this.meetingRulesHost.mediaConstraints.audio ? this.audioConstraints : false,
        screen: this.meetingRulesHost.mediaConstraints.screen
      };
      this.rtcmConnection.bandwidth = {
        audio: this.mediaConfigurations.bandwidth.audio === 'auto' ? false : this.mediaConfigurations.bandwidth.audio,
        video: this.mediaConfigurations.bandwidth.video === 'auto' ? false : this.mediaConfigurations.bandwidth.video,
        screen: this.mediaConfigurations.bandwidth.screen === 'auto' ? false : this.mediaConfigurations.bandwidth.screen
      };
      this.mediaConfigurations.activeAudioInput = this.audioConstraints && this.audioConstraints.hasOwnProperty('deviceId') ? this.audioConstraints.deviceId.ideal : null;
      this.mediaConfigurations.activeVideoInput = this.videoConstraints && this.videoConstraints.hasOwnProperty('deviceId') ? this.videoConstraints.deviceId.ideal : null;
      this.mediaConfigurations.activeFacingMode = this.mediaConfigurations.facingMode;

      if (!this.needStreamAddOrReplace) {
        this.rtcmConnection.applyConstraints(this.rtcmConnection.mediaConstraints);
        return;
      }

      this.closeConnectionAndStream(true);
    },
    closeConnectionAndStream: function closeConnectionAndStream() {
      var _this24 = this;

      var reopen = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      var callbackFn = arguments.length > 1 ? arguments[1] : undefined;
      this.stopAutoEndMeeting();

      if (this.autoEndingToast && _.isEmpty(this.autoEndingToast)) {
        _core_configs_sweet_alert__WEBPACK_IMPORTED_MODULE_16__["swtToast"].close();
        this.autoEndingToast = null;
      }

      if (this.rtcmConnection) {
        try {
          this.destroyWhiteboard();
          this.rtcmConnection.attachStreams.forEach(function (localStream) {
            localStream.stop();
          });

          if (this.$refs.greenRoomVideo && this.$refs.greenRoomVideo.srcObject) {
            var stream = this.$refs.greenRoomVideo.srcObject;
            stream.stop();
            this.localGreenRoomStream = null;
          } else if (this.localGreenRoomStream) {
            var _stream = this.localGreenRoomStream;

            _stream.stop();

            this.localGreenRoomStream = null;
          }

          if (this.localVideo) {
            // this.rtcmConnection.removeStream(this.localVideo.id)
            this.emitSocketEvents('removedStream', this.localVideo);
          }

          this.rtcmConnection.getAllParticipants().forEach(function (pid) {
            _this24.rtcmConnection.disconnectWith(pid);
          });
          this.rtcmConnection.leave();
          this.rtcmConnection.closeSocket();
          window.setTimeout(function () {
            _this24.localVideo = null;
            _this24.localScreenStreamid = null;
            _this24.localWhiteboardStreamid = null;
            _this24.localGreenRoomStream = null;

            if (_this24.rtcmConnection) {
              _this24.rtcmConnection.recorder = null;
            }

            _this24.rtcmConnection = null;

            if (reopen) {
              _this24.getOnline();
            }

            if (callbackFn && _.isFunction(callbackFn)) {
              callbackFn();
            }
          }, 500);
          this.stopKeepAlivePolling();
          this.stopAutoEndMeeting();
        } catch (e) {}
      }

      this.videoList = [];
    },
    initHark: function initHark(args) {
      if (!window.hark || !this.pageConfigs.speechDetection) {
        return;
      }

      var streamedObject = args.streamedObject;
      var stream = args.stream;
      var connection = args.connection;
      var options = {};
      var speechEvents = hark_hark_bundle_js__WEBPACK_IMPORTED_MODULE_5___default()(stream, options);
      speechEvents.on('speaking', function () {
        // console.log('speaking')
        connection.onspeaking(streamedObject);
      });
      speechEvents.on('stopped_speaking', function () {
        // console.log('silence')
        connection.onsilence(streamedObject);
      }); // speechEvents.on('volume_change', function(volume, threshold) {
      //     streamedObject.volume = volume
      //     streamedObject.threshold = threshold
      // connection.onvolumechange(streamedObject)
      // })

      window.harkInitiated = true; // console.log('hark initiated - ', streamedObject.extra.name)
    },
    recheckLiveParticipants: function recheckLiveParticipants(stream) {
      var _this25 = this;

      var newList = [];
      var liveParticipants = this.rtcmConnection ? this.rtcmConnection.getAllParticipants() : [];
      this.videoList.forEach(function (item, index) {
        var userIndex = liveParticipants.findIndex(function (m) {
          return m === item.streamUserId;
        });

        if ((!stream || stream && item.id !== stream.streamid) && (item.local || !item.local && userIndex !== -1)) {
          newList.push(item);
        } else {
          item.status = false;
          newList.push(item);
        }
      });
      this.videoList = newList;
      setTimeout(function () {
        _this25.videoList = _this25.videoList.filter(function (v) {
          return v.status;
        });

        _this25.autoSetVideoMaximized();
      }, 3000);
    },
    autoSetVideoMaximized: function autoSetVideoMaximized() {
      var _this26 = this;

      var setMaximized = function setMaximized(maximizedIndex) {
        _this26.videoList[maximizedIndex].maximized = true;
        _this26.videoList = _this26.videoList.map(function (v, index) {
          v.maximized = false;

          if (index === maximizedIndex) {
            v.maximized = true;
          }

          return v;
        });
      };

      if (this.videoList.length > 1) {
        var maximizedRemoteVideoIndex = this.videoList.findIndex(function (v) {
          return !v.local && v.maximized && v.status;
        });

        if (maximizedRemoteVideoIndex === -1) {
          var remoteVideoIndex = this.videoList.findIndex(function (v) {
            return !v.local && v.hasStream;
          });

          if (remoteVideoIndex !== -1) {
            setMaximized(remoteVideoIndex);
          } else {
            setMaximized(0);
          }
        } else {
          var whiteboardRemoteVideoIndex = this.videoList.findIndex(function (v) {
            return !v.local && v.whiteboard && v.status;
          });

          if (whiteboardRemoteVideoIndex !== -1 && this.videoList[whiteboardRemoteVideoIndex].whiteboard) {
            setMaximized(whiteboardRemoteVideoIndex);
          }
        }
      } else if (this.videoList.length) {
        setMaximized(0);
      }
    },
    validateMediaDeviceRequest: function validateMediaDeviceRequest(mediaConstraints) {
      var deviceRequest = {
        video: mediaConstraints.video ? true : false,
        audio: mediaConstraints.audio ? true : false,
        screen: mediaConstraints.screen ? true : false
      };

      if (this.pageConfigs.allowJoiningWithoutDevices) {
        if (deviceRequest.audio && !(this.mediaDevices.audioInput && this.mediaDevices.audioInput.length)) {
          deviceRequest.audio = false;
        }

        if (deviceRequest.video && !(this.mediaDevices.videoInput && this.mediaDevices.videoInput.length)) {
          deviceRequest.video = false;
        }
      }

      return deviceRequest;
    },
    joinRoom: function joinRoom(meetingRoomId) {
      var _this27 = this;

      this.rtcmConnection.session = _objectSpread({}, this.meetingRulesGuest.session);
      this.videoList = [];
      this.getMediaConstraints();
      var activeMeetingRules = this.entity.canModerate ? this.meetingRulesHost : this.meetingRulesGuest;
      var deviceRequest = this.validateMediaDeviceRequest(activeMeetingRules.mediaConstraints);
      this.rtcmConnection.mediaConstraints = {
        video: deviceRequest.video ? this.videoConstraints : false,
        audio: deviceRequest.audio ? this.audioConstraints : false,
        screen: deviceRequest.screen
      };

      if (this.pageConfigs.allowJoiningWithoutDevices && !deviceRequest.audio && !deviceRequest.video && !deviceRequest.screen) {
        this.rtcmConnection.dontCaptureUserMedia = true;
      }

      this.rtcmConnection.sdpConstraints.mandatory = _objectSpread({}, activeMeetingRules.mandatory);
      this.rtcmConnection.autoCloseEntireSession = activeMeetingRules.autoCloseEntireSession;
      this.rtcmConnection.enableScalableBroadcast = activeMeetingRules.enableScalableBroadcast;

      if (this.rtcmConnection.enableScalableBroadcast) {
        this.rtcmConnection.maxRelayLimitPerUser = activeMeetingRules.maxRelayLimitPerUser;
      }

      this.rtcmConnection.extra.isInitiator = this.entity.canModerate; // console.log('mediaConstraints')
      // console.log(this.rtcmConnection.mediaConstraints)
      // console.log('sdpConstraints')
      // console.log(this.rtcmConnection.sdpConstraints)

      this.rtcmConnection.join(meetingRoomId, function (isJoined, roomid, error) {
        _this27.isLoading = false;

        if (isJoined === false || error) {
          _this27.closeConnectionAndStream();

          if (error === 'Room full') {
            _this27.$toasted.error($t('meeting.room_full'), _this27.$toastConfig.error);
          } else {
            _this27.$toasted.error($t('meeting.unable_to_join'), _this27.$toastConfig.error);
          }
        } else {
          _this27.meetingRoomNotFound = false;

          _this27.updatePageConfigs(_this27.entity.canModerate);

          _this27.initSocketListener();

          _this27.$toasted.success($t('meeting.meeting_joined'), _this27.$toastConfig); // setTimeout(() => {
          //     this.updateUsername()
          // }, 2000)

        }
      });
    },
    applyOnStartConfigs: function applyOnStartConfigs() {
      var _this28 = this;

      if (!this.rtcmConnection.extra.isInitiator && this.pageConfigs.muteParticipantsOnStart) {
        window.setTimeout(function () {
          _this28.toggleAudio(null, true);
        }, 1000);
      }
    },
    shareScreen: function shareScreen() {
      var _this29 = this;

      try {
        this.rtcmConnection.addStream({
          screen: true,
          streamCallback: function streamCallback(stream) {
            _this29.rtcmConnection.extra.screenStreamId = stream.id;

            _this29.updateExtraData();
          }
        });
      } catch (e) {}
    },
    stopSharingScreen: function stopSharingScreen() {
      var _this30 = this;

      this.isLoading = true;
      this.rtcmConnection.extra.screenStreamId = null;
      this.updateExtraData();
      var found = this.$refs.videos.find(function (video) {
        return video.id === _this30.localScreenStreamid;
      });

      if (found && found.srcObject) {
        var tracks = found.srcObject.getTracks();
        tracks.forEach(function (track) {
          track.removeEventListener('ended', _this30.stopSharingScreen);
          track.enabled = false;
          track.stop();
        });
        this.rtcmConnection.removeStream(this.localScreenStreamid);
        this.emitSocketEvents('removedStream', found.srcObject); // this.videoList = this.videoList.filter(video => video.id !== this.localScreenStreamid)

        this.localScreenStreamid = null;
        this.isLoading = false;
      } else {
        this.localScreenStreamid = null;
        this.isLoading = false;
      }
    },
    getOnline: function getOnline() {
      var _this31 = this;

      this.isLoading = true;
      this.showAgenda = false;
      var meetingStatusEalier = this.entity.status;
      this.$gaEvent('engagement', 'meeting_getOnline');
      this.initMediaAndRtcmConnection();
      this.Custom({
        url: "/".concat(this.initUrl, "/").concat(this.uuid, "/join"),
        method: 'post'
      }).then(function (response) {
        _this31.meetingRoomId = response.meeting.roomId;
        response.meeting = _this31.updateMeetingTimezone(response.meeting);
        _this31.entity = response.meeting;
        _this31.rtcmConnection.extra = {
          username: _this31.user.username,
          name: _this31.user.name,
          uuid: _this31.user.uuid,
          avatar: _this31.profile.avatar,
          cover: _this31.profile.cover,
          audioMuted: !_this31.pageConfigs.enableAudio,
          videoMuted: !_this31.pageConfigs.enableVideo,
          isHandUp: _this31.isHandUp,
          isInitiator: false
        };

        if (_this31.enableLogs) {
          console.log('rtcmConnection', _this31.rtcmConnection);
          console.log('mediaConfigurations', _this31.mediaConfigurations);
          console.log('mediaDevices', _this31.mediaDevices);
          console.log('pageConfigs', _this31.pageConfigs);
          console.log('videoConstraints', _this31.videoConstraints);
          console.log('audioConstraints', _this31.audioConstraints);
          console.log('meetingRulesHost', _this31.meetingRulesHost);
          console.log('meetingRulesGuest', _this31.meetingRulesGuest);
          console.log('rtcmConnection-ExtraData', _this31.rtcmConnection.extra);
        }

        _this31.rtcmConnection.checkPresence(_this31.meetingRoomId, function (isRoomExist, roomid) {
          if (isRoomExist === true) {
            _this31.meetingRoomNotFound = false;

            _this31.joinRoom(_this31.meetingRoomId);
          } else {
            _this31.isLoading = false;
            _this31.meetingRoomNotFound = true;

            _this31.$toasted.error($t('meeting.room_not_found'), _this31.$toastConfig.error);
          }

          _this31.startMeetingTimer();
        });
      })["catch"](function (error) {
        _this31.isLoading = false;
        formUtil.handleErrors(error);
      });
    },
    getOffline: function getOffline() {
      var _this32 = this;

      this.$gaEvent('engagement', 'meeting_getOffline');
      var alert = 'confirm';
      this.isLoading = true;
      this.meetingAction('leave', null, {
        alert: alert,
        sameCallbackIfError: true,
        callback: function callback(e) {
          _this32.showAgenda = true;
          _this32.showWhiteboard = false;

          if (_this32.pageConfigs.layout === 'presentation') {
            _this32.pageConfigs.layout = _this32.pageConfigs.lastLayout;
          }

          _this32.closeConnectionAndStream(false, function () {
            _this32.stopMeetingTimer();

            _this32.setupGreenRoom();

            _this32.initMediaAndRtcmConnection();
          });
        }
      });
    },
    // meeting action methods
    meetingAction: function meetingAction(action) {
      var _this33 = this;

      var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var opts = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {
        alert: 'confirm'
      };
      var defaultOpts = {
        alert: 'confirm'
      };
      opts = Object.assign({}, defaultOpts, opts);

      var callApi = function callApi(dataToSend) {
        _this33.isLoading = true;
        data = dataToSend ? dataToSend : data;

        _this33.Custom({
          url: "/".concat(_this33.initUrl, "/").concat(_this33.uuid, "/").concat(action),
          method: 'post',
          data: data
        }).then(function (response) {
          response.meeting = _this33.updateMeetingTimezone(response.meeting);
          _this33.entity = response.meeting;

          _this33.$toasted.success(response.message, _this33.$toastConfig);

          if (opts.callback) {
            opts.callback(response);
          }

          _this33.isLoading = false;
        })["catch"](function (error) {
          if (opts.callback && opts.sameCallbackIfError) {
            opts.callback(error);
          }

          _this33.isLoading = false;
          formUtil.handleErrors(error);
        });
      };

      if (!action) {
        this.isLoading = false;
        return;
      }

      if (opts.alert === 'confirm' || opts.alert === true) {
        formUtil.confirmAction().then(function (result) {
          if (result.value) {
            callApi();
          } else {
            _this33.isLoading = false;
            result.dismiss === _core_configs_sweet_alert__WEBPACK_IMPORTED_MODULE_16__["Swal"].DismissReason.cancel;
          }
        });
      } else if (opts.alert === 'input') {
        swtAlert.fire({
          title: opts.title,
          input: 'text',
          inputPlaceholder: opts.inputPlaceholder,
          showCancelButton: true,
          confirmButtonText: 'Proceed!',
          cancelButtonText: 'Go Back!'
        }).then(function (result) {
          if (result.value) {
            var toSend = {};
            toSend[opts.fieldName] = result.value;
            callApi(toSend);
          } else {
            _this33.isLoading = false;
            result.dismiss === _core_configs_sweet_alert__WEBPACK_IMPORTED_MODULE_16__["Swal"].DismissReason.cancel;
          }
        });
      } else {
        callApi();
      }
    },
    // meeting related methods
    updateMeetingRules: function updateMeetingRules() {
      if (this.entity.type.uuid === 'video_conference') {
        this.meetingRulesHost = {
          session: {
            audio: true,
            video: true,
            screen: false,
            data: true,
            oneway: false
          },
          mediaConstraints: {
            audio: true,
            video: true,
            screen: false
          },
          mandatory: {
            OfferToReceiveAudio: true,
            OfferToReceiveVideo: true
          },
          autoCloseEntireSession: false,
          enableScalableBroadcast: false
        };
        this.meetingRulesGuest = {
          session: {
            audio: true,
            video: true,
            screen: false,
            data: true,
            oneway: false
          },
          mediaConstraints: {
            audio: true,
            video: true,
            screen: false
          },
          mandatory: {
            OfferToReceiveAudio: true,
            OfferToReceiveVideo: true
          },
          autoCloseEntireSession: false,
          enableScalableBroadcast: false
        };
      } else if (this.entity.type.uuid === 'audio_conference') {
        this.meetingRulesHost = {
          session: {
            audio: true,
            video: false,
            screen: false,
            data: true,
            oneway: false
          },
          mediaConstraints: {
            audio: true,
            video: false,
            screen: false
          },
          mandatory: {
            OfferToReceiveAudio: true,
            OfferToReceiveVideo: false
          },
          autoCloseEntireSession: false,
          enableScalableBroadcast: false
        };
        this.meetingRulesGuest = {
          session: {
            audio: true,
            video: false,
            screen: false,
            data: true,
            oneway: false
          },
          mediaConstraints: {
            audio: true,
            video: false,
            screen: false
          },
          mandatory: {
            OfferToReceiveAudio: true,
            OfferToReceiveVideo: false
          },
          autoCloseEntireSession: false,
          enableScalableBroadcast: false
        };
      } else if (this.entity.type.uuid === 'webinar') {
        this.meetingRulesHost = {
          session: {
            audio: true,
            video: true,
            screen: false,
            data: true,
            oneway: true
          },
          mediaConstraints: {
            audio: true,
            video: true,
            screen: false
          },
          mandatory: {
            OfferToReceiveAudio: false,
            OfferToReceiveVideo: false
          },
          autoCloseEntireSession: true,
          enableScalableBroadcast: true,
          maxRelayLimitPerUser: 1
        };
        this.meetingRulesGuest = {
          session: {
            audio: true,
            video: true,
            screen: false,
            data: true,
            oneway: true
          },
          mediaConstraints: {
            audio: false,
            video: false,
            screen: false
          },
          mandatory: {
            OfferToReceiveAudio: true,
            OfferToReceiveVideo: true
          },
          autoCloseEntireSession: true,
          enableScalableBroadcast: true,
          maxRelayLimitPerUser: 1
        };
      } else if (this.entity.type.uuid === 'live_class') {
        this.meetingRulesHost = {
          session: {
            audio: true,
            video: true,
            screen: false,
            data: true,
            oneway: false
          },
          mediaConstraints: {
            audio: true,
            video: true,
            screen: false
          },
          mandatory: {
            OfferToReceiveAudio: true,
            OfferToReceiveVideo: true
          },
          autoCloseEntireSession: true,
          enableScalableBroadcast: false
        };
        this.meetingRulesGuest = {
          session: {
            audio: true,
            video: true,
            screen: false,
            data: true,
            oneway: false
          },
          mediaConstraints: {
            audio: true,
            video: true,
            screen: false
          },
          mandatory: {
            OfferToReceiveAudio: true,
            OfferToReceiveVideo: true
          },
          autoCloseEntireSession: true,
          enableScalableBroadcast: false
        };
      } else if (this.entity.type.uuid === 'podcast') {
        this.meetingRulesHost = {
          session: {
            audio: true,
            video: false,
            screen: false,
            data: false,
            oneway: true
          },
          mediaConstraints: {
            audio: true,
            video: false,
            screen: false
          },
          mandatory: {
            OfferToReceiveAudio: false,
            OfferToReceiveVideo: false
          },
          autoCloseEntireSession: true,
          enableScalableBroadcast: true,
          maxRelayLimitPerUser: 1
        };
        this.meetingRulesGuest = {
          session: {
            audio: true,
            video: false,
            screen: false,
            data: false,
            oneway: true
          },
          mediaConstraints: {
            audio: false,
            video: false,
            screen: false
          },
          mandatory: {
            OfferToReceiveAudio: true,
            OfferToReceiveVideo: false
          },
          autoCloseEntireSession: true,
          enableScalableBroadcast: true,
          maxRelayLimitPerUser: 1
        };
      }
    },
    updateMeetingTimezone: function updateMeetingTimezone(meetingEntity) {
      var _this34 = this;

      var getTimezoneDateTime = function getTimezoneDateTime(dt) {
        return _core_filters_momentz__WEBPACK_IMPORTED_MODULE_13__["momentDateTimeTz"](dt, _this34.vars.serverDateTimeFormat);
      };

      this.updateEntityBackup(meetingEntity);
      meetingEntity.startDateTime = getTimezoneDateTime(meetingEntity.startDateTime);

      if (meetingEntity.plannedStartDateTime) {
        meetingEntity.plannedStartDateTime = getTimezoneDateTime(meetingEntity.plannedStartDateTime);
      }

      if (meetingEntity.startedAt) {
        meetingEntity.startedAt = getTimezoneDateTime(meetingEntity.startedAt);
      }

      if (meetingEntity.estimatedEndTime) {
        meetingEntity.estimatedEndTime = getTimezoneDateTime(meetingEntity.estimatedEndTime);
      }

      return meetingEntity;
    },
    // event callback methods
    beforeUnload: function beforeUnload(event) {
      if (this.localVideo) {
        this.emitSocketEvents('removedStream', this.localVideo);
      }
    },
    logEvent: function logEvent(msg, args) {
      var type = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'log';

      if (this.enableLogs) {
        if (type === 'log') {
          console.log(msg, args);
        } else if (type === 'error') {
          console.error(msg, args);
        } else if (type === 'debug') {
          console.trace(msg, args);
        }
      }
    },
    // devices modal methods
    toggleDevicesModal: function toggleDevicesModal() {
      this.mediaConfigFormData = _.cloneDeep(this.mediaConfigurations);
      this.showDevicesModal = true;
    },
    onDevicesModalOK: function onDevicesModalOK(e) {
      var _this35 = this;

      e.preventDefault();

      if (!Object(_core_utils_form__WEBPACK_IMPORTED_MODULE_12__["areEqual"])(this.mediaConfigFormData, this.mediaConfigurations)) {
        this.mediaConfigurations = _.cloneDeep(this.mediaConfigFormData);
        this.applyMediaConstraints();
      }

      this.$nextTick(function () {
        _this35.$bvModal.hide('devicesModal');
      });
    },
    onDevicesModalCancel: function onDevicesModalCancel(e) {
      var _this36 = this;

      e.preventDefault();
      this.$nextTick(function () {
        _this36.$bvModal.hide('devicesModal');
      });
    },
    // page methods
    updatePageConfigs: function updatePageConfigs() {
      var _this37 = this;

      var isInitiator = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      var configAudioRecFormat = this.configs.meeting.recordingFormatAudio ? this.configs.meeting.recordingFormatAudio : 'audio/webm';
      var configVideoRecFormat = this.configs.meeting.recordingFormatVideo ? this.configs.meeting.recordingFormatVideo : 'video/webm';
      var configOptions = {};
      var recordingType = this.mediaConfigurations.recording.type;
      var recordingFormat = this.mediaConfigurations.recording.mimeType;

      if (this.entity.type.uuid === 'video_conference') {
        configOptions = {
          enableAudio: true,
          enableVideo: true,
          showEnableAudioBtn: true,
          showEnableVideoBtn: true,
          enableWhiteboard: true
        };
        recordingType = 'video';
        recordingFormat = configVideoRecFormat;
      } else if (this.entity.type.uuid === 'audio_conference') {
        configOptions = {
          enableAudio: true,
          enableVideo: true,
          showEnableAudioBtn: true,
          showEnableVideoBtn: false,
          enableScreenSharing: false,
          enableWhiteboard: false
        };
        recordingType = 'audio';
        recordingFormat = configAudioRecFormat;
      } else if (this.entity.type.uuid === 'webinar') {
        configOptions = isInitiator ? {
          enableAudio: true,
          enableVideo: true,
          showEnableAudioBtn: true,
          showEnableVideoBtn: true,
          enableHandGesture: false,
          enableWhiteboard: true
        } : {
          enableAudio: true,
          enableVideo: true,
          showEnableAudioBtn: false,
          showEnableVideoBtn: false,
          enableScreenSharing: false,
          enableFileSharing: false,
          enableRecording: false,
          enableHandGesture: false,
          enableWhiteboard: false
        };
        recordingType = 'video';
        recordingFormat = configVideoRecFormat;
      } else if (this.entity.type.uuid === 'live_class') {
        configOptions = isInitiator ? {
          enableAudio: true,
          enableVideo: true,
          showEnableAudioBtn: true,
          showEnableVideoBtn: true,
          enableWhiteboard: true
        } : {
          enableAudio: true,
          enableVideo: true,
          showEnableAudioBtn: false,
          showEnableVideoBtn: false,
          enableScreenSharing: false,
          enableFileSharing: false,
          enableRecording: false,
          enableWhiteboard: false
        };
        recordingType = 'video';
        recordingFormat = configVideoRecFormat;
      } else if (this.entity.type.uuid === 'podcast') {
        configOptions = isInitiator ? {
          enableAudio: true,
          enableVideo: false,
          showEnableAudioBtn: true,
          showEnableVideoBtn: false,
          enableScreenSharing: false,
          enableHandGesture: false,
          enableWhiteboard: false
        } : {
          enableAudio: true,
          enableVideo: false,
          showEnableAudioBtn: false,
          showEnableVideoBtn: false,
          enableScreenSharing: false,
          enableFileSharing: false,
          enableRecording: false,
          enableHandGesture: false,
          enableWhiteboard: false
        };
        recordingType = 'audio';
        recordingFormat = configAudioRecFormat;
      }

      configOptions.objForEach(function (value, key) {
        return _this37.pageConfigs[key] = value;
      });
      this.mediaConfigurations.recording.type = recordingType;
      this.mediaConfigurations.recording.mimeType = recordingFormat;
      this.mediaConfigurations.recording.timeSlice = this.pageConfigs.recordingTimeSlice || 5000;
      this.rtcmConnection.extra.audioMuted = !this.pageConfigs.enableAudio;
      this.rtcmConnection.extra.videoMuted = !this.pageConfigs.enableVideo;
      this.rtcmConnection.extra.isHandUp = this.isHandUp;
      this.updateExtraData();

      if (this.pageConfigs.enableWhiteboard) {
        Object(_core_utils__WEBPACK_IMPORTED_MODULE_10__["loadScript"])('/js/canvas-designer/webrtc-handler.js');
        Object(_core_utils__WEBPACK_IMPORTED_MODULE_10__["loadScript"])('/js/canvas-designer/canvas-designer-widget.js');
      }

      this.configs.meeting.debugMode = true;
    },
    destroyPage: function destroyPage() {
      if (window.countdownInterval) {
        clearInterval(window.countdownInterval);
      }

      this.SetUiConfig({
        pageHeaderShow: true,
        pageFooterShow: true
      });
      this.closeConnectionAndStream();

      if (window.Echo) {
        if (window.meetingChannel) {
          window.meetingChannel.stopListening('MeetingStatusChanged');
          window.meetingChannel.stopListening('NewMessage');
        }

        window.Echo.leave("Meeting.".concat(this.uuid));
      }

      if (screenfull__WEBPACK_IMPORTED_MODULE_7___default.a.isEnabled) {
        screenfull__WEBPACK_IMPORTED_MODULE_7___default.a.off('change');
        screenfull__WEBPACK_IMPORTED_MODULE_7___default.a.off('error');
      }
    },
    getInitialData: function getInitialData() {
      var _this38 = this;

      this.isLoading = true;

      if (!window.Echo) {
        this.$toasted.error($t('config.pusher.credential_required'), this.$toastConfig.error);
        this.$router.push({
          name: this.fallBackRoute
        });
        return;
      }

      return this.Custom({
        url: "/".concat(this.initUrl, "/").concat(this.uuid, "/pam"),
        method: 'get',
        params: {
          isPam: true
        }
      }).then(function (response) {
        if (response.isInstantMeeting) {
          _this38.pageConfigs.hasAgenda = false;
        }

        response.config.objForEach(function (value, key) {
          return _this38.pageConfigs[key] = value;
        });
        _this38.pageConfigs.disableScroll = _this38.pageConfigs.layout === 'grid' ? true : response.config && response.config.hasOwnProperty('disableScroll') ? response.config.disableScroll : _this38.pageConfigs.disableScroll;
        response = _this38.updateMeetingTimezone(response);
        _this38.entity = response;

        _this38.updateMeetingRules(); //Changes to prefer rear camera


        if (_this38.pageConfigs.preferRearCameraFirst) {
          _this38.mediaConfigurations.facingMode = 'environment';
        }

        if (response.roomId && response.status === 'live') {
          setTimeout(function () {
            _this38.initMediaAndRtcmConnection();

            _this38.rtcmConnection.checkPresence(response.roomId, function (isRoomExist, roomid) {
              _this38.roomIdAlive = !!isRoomExist;

              if (isRoomExist === true) {
                _this38.meetingRoomNotFound = false;
              }
            });
          }, 1000);
        }

        _this38.joinChannel();

        _this38.setupGreenRoom();

        if (response.isInstantMeeting && !response.isBlocked && response.status === 'live') {
          if (!(_this38.rtcmConnection && _this38.rtcmConnection.isInitiator || response.canModerate) && (response.type.uuid === 'live_class' || response.type.uuid === 'webinar')) {
            //if current user is a normal user (not an initiator or moderator), and type is live class or webinar
            _this38.isLoading = false;
          } else {
            if (_this38.pageConfigs.forceUpdateUsername) {
              _this38.updateUsername(false, _this38.getOnline);
            } else {
              _this38.getOnline();
            }
          }
        } else {
          _this38.isLoading = false;
        }

        return response;
      })["catch"](function (error) {
        _this38.isLoading = false;
        formUtil.handleErrors(error);

        _this38.$router.push({
          name: _this38.fallBackRoute
        });

        return error;
      });
    }
  }, _defineProperty(_objectSpread2, "stopStream", function stopStream(stream) {
    if (stream && _.isFunction(stream.stop)) {
      stream.stop();
    }

    if (stream && _.isFunction(stream.getTracks)) {
      stream.getTracks().forEach(function (track) {
        return track.stop();
      });
    }
  }), _defineProperty(_objectSpread2, "toggleVideoTracks", function toggleVideoTracks(stream, value) {
    if (!stream) {
      return;
    }

    var tracks = stream.getVideoTracks();
    tracks.forEach(function (track) {
      track.enabled = value;
    });
  }), _defineProperty(_objectSpread2, "toggleAudioTracks", function toggleAudioTracks(stream, value) {
    if (!stream) {
      return;
    }

    var tracks = stream.getAudioTracks();
    tracks.forEach(function (track) {
      track.enabled = value;
    });
  }), _defineProperty(_objectSpread2, "setupGreenRoom", function setupGreenRoom() {
    var _this39 = this;

    var force = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

    var setupMicActivity = function setupMicActivity(stream) {
      if (_this39.$refs.greenRoomAudio && _this39.pageConfigs.enableAudio) {
        var audioContext = new AudioContext();
        var analyser = audioContext.createAnalyser();
        var microphone = audioContext.createMediaStreamSource(stream);
        var javascriptNode = audioContext.createScriptProcessor(2048, 1, 1);
        analyser.smoothingTimeConstant = 0.8;
        analyser.fftSize = 1024;
        microphone.connect(analyser);
        analyser.connect(javascriptNode);
        javascriptNode.connect(audioContext.destination);
        Object(_core_plugins_vumeter__WEBPACK_IMPORTED_MODULE_14__["default"])(_this39.$refs.greenRoomAudio, {
          width: 'sibling',
          boxGapFraction: 0.2
        });

        javascriptNode.onaudioprocess = function () {
          var array = new Uint8Array(analyser.frequencyBinCount);
          analyser.getByteFrequencyData(array);
          var values = 0;
          var length = array.length;

          for (var i = 0; i < length; i++) {
            values += array[i];
          }

          var average = values / length;
          var volumeActivity = Math.round(average); // console.log(Math.round(average))

          _this39.micVolumeActivity = volumeActivity < 0 ? 0 : volumeActivity;
        };
      }
    };

    if (this.$refs.videos && this.$refs.videos.length) {
      if (this.localGreenRoomStream) {
        this.stopStream(this.localGreenRoomStream);
      }

      this.localGreenRoomStream = null;
      return;
    }

    if (this.pageConfigs.enableVideo && this.pageConfigs.enableAudio && !(this.$refs.greenRoomVideo && this.$refs.greenRoomVideo.srcObject)) {
      force = true;
    }

    if (!this.localGreenRoomStream || force) {
      if (this.localGreenRoomStream) {
        this.stopStream(this.localGreenRoomStream);
      }

      this.localGreenRoomStream = null;
      this.getMediaConstraints();

      if (this.videoConstraints && this.mediaConfigurations.selectedVideoInput || this.audioConstraints && this.mediaConfigurations.selectedAudioInput) {
        navigator.mediaDevices.getUserMedia({
          video: this.videoConstraints,
          audio: this.audioConstraints || true
        }).then(function (stream) {
          _this39.toggleVideoTracks(stream, _this39.pageConfigs.enableVideo);

          _this39.toggleAudioTracks(stream, _this39.pageConfigs.enableAudio);

          _this39.localGreenRoomStream = stream;

          if (_this39.$refs.greenRoomVideo && _this39.pageConfigs.enableVideo) {
            _this39.$refs.greenRoomVideo.srcObject = stream;
          }

          setTimeout(function () {
            setupMicActivity(_this39.localGreenRoomStream);
          }, 1000);
        })["catch"](this.rtcmOnMediaError);
      }
    } else {
      if (this.pageConfigs.enableVideo || this.pageConfigs.enableAudio) {
        this.toggleVideoTracks(this.localGreenRoomStream, this.pageConfigs.enableVideo);
        this.toggleAudioTracks(this.localGreenRoomStream, this.pageConfigs.enableAudio);

        if (!this.pageConfigs.enableVideo && this.$refs.greenRoomVideo) {
          this.$refs.greenRoomVideo.srcObject = null;
        }

        setupMicActivity(this.localGreenRoomStream);
      } else {
        if (this.localGreenRoomStream) {
          this.stopStream(this.localGreenRoomStream);
        }

        this.localGreenRoomStream = null;
        this.$refs.greenRoomVideo.srcObject = null;
      }
    }
  }), _defineProperty(_objectSpread2, "setupMediaDevices", function setupMediaDevices() {
    var _this40 = this;

    var rtcmc = new rtcmulticonnection__WEBPACK_IMPORTED_MODULE_2___default.a();

    if (rtcmc.DetectRTC.isWebRTCSupported === false) {
      this.$toasted.error($t('meeting.invalid_browser_error'), this.$toastConfig.error);
    }

    this.isLoading = true;
    this.mediaDeviceIssue = this.permissionRejected = false;

    var loadDevices = function loadDevices(callbackFn) {
      rtcmc.DetectRTC.load(function () {
        if (_this40.enableLogs) {
          console.log(rtcmc.DetectRTC);
        }

        if (rtcmc.DetectRTC.hasMicrophone === true) {
          _this40.mediaDevices.audioInput = rtcmc.DetectRTC.audioInputDevices.map(function (device) {
            return {
              'uuid': device.deviceId || device.id,
              'name': device.label || "microphone ".concat(_this40.mediaDevices.audioInput.length + 1)
            };
          });
        } else {
          _this40.mediaDeviceIssue = true;
        }

        if (rtcmc.DetectRTC.hasWebcam === true) {
          _this40.mediaDevices.videoInput = rtcmc.DetectRTC.videoInputDevices.map(function (device) {
            return {
              'uuid': device.deviceId || device.id,
              'name': device.label || "camera ".concat(_this40.mediaDevices.videoInput.length + 1)
            };
          });
        } else {
          _this40.mediaDeviceIssue = true;
        }

        if (rtcmc.DetectRTC.hasSpeakers === true) {
          _this40.mediaDevices.audioOutput = rtcmc.DetectRTC.audioOutputDevices.map(function (device) {
            return {
              'uuid': device.deviceId || device.id,
              'name': device.label || "speaker ".concat(_this40.mediaDevices.audioOutput.length + 1)
            };
          });
        } else {
          _this40.$toasted.error($t('meeting.audio_output_device_error'), _this40.$toastConfig.error);
        }

        _this40.mediaConfigurations.selectedAudioInput = _this40.mediaDevices.audioInput ? _this40.mediaDevices.audioInput[0] : null;
        _this40.mediaConfigurations.selectedVideoInput = _this40.mediaDevices.videoInput ? _this40.mediaDevices.videoInput[0] : null;
        _this40.mediaConfigFormData = _.cloneDeep(_this40.mediaConfigurations);

        if (callbackFn) {
          callbackFn();
        }

        _this40.getInitialData();
      });
    };

    if (!rtcmc.DetectRTC.MediaDevices.length || rtcmc.DetectRTC.MediaDevices[0] && rtcmc.DetectRTC.MediaDevices[0].isCustomLabel) {
      navigator.mediaDevices.getUserMedia({
        audio: true,
        video: true
      }).then(function (stream) {
        loadDevices(function () {
          // release camera
          stream.getTracks().forEach(function (track) {
            track.stop();
          });
        });
      })["catch"](function (error) {
        _this40.rtcmOnMediaError(error);

        _this40.getInitialData();
      });
    } else {
      loadDevices();
    }
  }), _defineProperty(_objectSpread2, "doInit", function doInit() {
    this.Init({
      url: this.initUrl
    });

    if (window.isDuplicate()) {
      this.duplicateTab = true;
    }

    this.setupMediaDevices();
  }), _defineProperty(_objectSpread2, "initNetworkListener", function initNetworkListener() {
    var vm = this;
    window.addEventListener('offline', function (e) {
      if (vm.rtcmConnection && vm.videoList && vm.videoList.length) {
        vm.videoList = vm.videoList.slice(0, 1);
        vm.autoSetVideoMaximized();
      }
    });
    window.addEventListener('online', function (e) {
      vm.closeConnectionAndStream(true);
    });
  }), _defineProperty(_objectSpread2, "updateUsername", function updateUsername() {
    var _this41 = this;

    var showCancel = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
    var callbackFn = arguments.length > 1 ? arguments[1] : undefined;
    swtAlert.fire({
      title: $t('misc.ask_name.title'),
      showCancelButton: showCancel,
      confirmButtonText: $t('misc.ask_name.confirm_btn'),
      cancelButtonText: $t('misc.ask_name.cancel_btn_2'),
      input: 'text'
    }).then(function (result) {
      if (result.value) {
        var guestUserData = Object(_core_utils__WEBPACK_IMPORTED_MODULE_10__["getFromStorage"])('guestUserData', true) || {};
        guestUserData = _objectSpread(_objectSpread({}, _this41.profile), guestUserData);
        guestUserData.username = Object(_core_utils_form__WEBPACK_IMPORTED_MODULE_12__["toSnakeCase"])(result.value);
        guestUserData.name = result.value;
        _this41.profile = _objectSpread({}, guestUserData);
        Object(_core_utils__WEBPACK_IMPORTED_MODULE_10__["saveToStorage"])('guestUserData', guestUserData);
        _this41.rtcmConnection.extra.username = _this41.profile.username;
        _this41.rtcmConnection.extra.name = _this41.profile.name;

        _this41.updateExtraData();

        if (callbackFn && _.isFunction(callbackFn)) {
          callbackFn();
        }
      } else {
        result.dismiss === _core_configs_sweet_alert__WEBPACK_IMPORTED_MODULE_16__["Swal"].DismissReason.cancel;
      }
    });
  }), _defineProperty(_objectSpread2, "setDefaultGuestUserData", function setDefaultGuestUserData() {
    var guestUserData = Object(_core_utils__WEBPACK_IMPORTED_MODULE_10__["getFromStorage"])('guestUserData', true);

    if (!guestUserData || !guestUserData.uuid) {
      var Uuid = uuid();
      var username = Uuid.substring(0, 8);
      guestUserData = {
        uuid: uuid(),
        username: username,
        name: username
      };
    }

    this.profile = _objectSpread({}, guestUserData);
    Object(_core_utils__WEBPACK_IMPORTED_MODULE_10__["saveToStorage"])('guestUserData', guestUserData);
  }), _objectSpread2)),
  mounted: function mounted() {
    var _this42 = this;

    document.body.classList.add("meeting-page");

    if (this.$route.params.uuid) {
      this.uuid = this.$route.params.uuid;
    }

    if (screenfull__WEBPACK_IMPORTED_MODULE_7___default.a.isEnabled) {
      screenfull__WEBPACK_IMPORTED_MODULE_7___default.a.on('change', function () {
        _this42.SetUiConfig({
          fullScreen: screenfull__WEBPACK_IMPORTED_MODULE_7___default.a.isFullscreen
        });
      });
      screenfull__WEBPACK_IMPORTED_MODULE_7___default.a.on('error', function (event) {
        console.error('Failed to enable fullscreen', event);
      });
      this.SetUiConfig({
        fullScreen: false
      });
    }

    this.GetConfig({
      params: {
        pam: true,
        meeting: this.uuid
      }
    }).then(function (configs) {
      if (!(configs && configs.pusher && configs.signalServers && configs.iceServers)) {
        _this42.$toasted.error($t('meeting.pam_meeting_error'), _this42.$toastConfig.error);

        _this42.$router.push({
          name: 'login',
          query: {
            ref: _this42.$route.fullPath
          }
        });
      } else {
        _this42.isLoading = false;

        if (!window.Echo) {
          Object(_js_echo_setup__WEBPACK_IMPORTED_MODULE_8__["setupPusher"])();
        }

        _this42.doInit();
      }
    })["catch"](function (error) {
      _this42.isLoading = false;
      formUtil.handleErrors(error);
    });
    window.addEventListener('beforeunload', this.beforeUnload);
    this.checkIfOffline();
    this.initNetworkListener();
  },
  created: function created() {
    this.mediaConfigFormData = _.cloneDeep(this.mediaConfigurations);
    this.SetUiConfig({
      pageHeaderShow: false,
      pageFooterShow: false
    });
    this.setDefaultGuestUserData(); // detect 2G and alert

    if (navigator.connection && navigator.connection.type === 'cellular' && navigator.connection.downlinkMax <= 0.115) {
      alert('2G is not supported. Please use a better internet service.');
    }
  },
  beforeRouteEnter: function beforeRouteEnter(to, from, next) {
    if (!to.params.uuid) {
      next({
        name: 'joinMeetingAsGuest'
      });
    } else {
      next(function (vm) {
        vm.prevRoute = from;
      });
    }
  },
  beforeDestroy: function beforeDestroy() {
    if (!window.isMeetingPageDestroyed) {
      this.isLoading = true;
      this.destroyPage();

      if (this.entity && this.entity.status === 'live') {
        this.Custom({
          url: "/".concat(this.initUrl, "/").concat(this.uuid, "/leave"),
          method: 'post'
        });
      }

      window.isMeetingPageDestroyed = true;
    }
  },
  beforeRouteLeave: function beforeRouteLeave(to, from, next) {
    var _this43 = this;

    var doBeforeLeaving = function doBeforeLeaving() {
      var leave = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

      if (!leave) {
        return;
      }

      _this43.isLoading = true;

      _this43.destroyPage();

      window.removeEventListener('beforeunload', _this43.beforeUnload);

      if (_this43.entity && _this43.entity.status === 'live') {
        _this43.Custom({
          url: "/".concat(_this43.initUrl, "/").concat(_this43.uuid, "/leave"),
          method: 'post'
        }).then(function (response) {
          window.isMeetingPageDestroyed = true;
          next();
        })["catch"](function (error) {
          window.isMeetingPageDestroyed = true;
          next();
        });
      } else {
        window.isMeetingPageDestroyed = true;
        next();
      }
    };

    if (this.hasVideos) {
      formUtil.unsavedCheckAlert({}, {
        unsaved: true
      }, doBeforeLeaving, {
        title: $t('meeting.is_live')
      });
    } else {
      doBeforeLeaving();
    }
  },
  destroyed: function destroyed() {
    document.body.classList.remove("meeting-page");
  }
});

/***/ }),

/***/ "./resources/js/views/app/meeting/live-as-guest.vue":
/*!**********************************************************!*\
  !*** ./resources/js/views/app/meeting/live-as-guest.vue ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _live_as_guest_vue_vue_type_template_id_92d58fe6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./live-as-guest.vue?vue&type=template&id=92d58fe6& */ "./resources/js/views/app/meeting/live-as-guest.vue?vue&type=template&id=92d58fe6&");
/* harmony import */ var _live_as_guest_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./live-as-guest.vue?vue&type=script&lang=js& */ "./resources/js/views/app/meeting/live-as-guest.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _live_as_guest_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _live_as_guest_vue_vue_type_template_id_92d58fe6___WEBPACK_IMPORTED_MODULE_0__["render"],
  _live_as_guest_vue_vue_type_template_id_92d58fe6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/app/meeting/live-as-guest.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/app/meeting/live-as-guest.vue?vue&type=script&lang=js&":
/*!***********************************************************************************!*\
  !*** ./resources/js/views/app/meeting/live-as-guest.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_live_as_guest_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./live-as-guest.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/app/meeting/live-as-guest.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_live_as_guest_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/app/meeting/live-as-guest.vue?vue&type=template&id=92d58fe6&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/views/app/meeting/live-as-guest.vue?vue&type=template&id=92d58fe6& ***!
  \*****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_live_as_guest_vue_vue_type_template_id_92d58fe6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./live-as-guest.vue?vue&type=template&id=92d58fe6& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/app/meeting/live-as-guest.vue?vue&type=template&id=92d58fe6&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_live_as_guest_vue_vue_type_template_id_92d58fe6___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_live_as_guest_vue_vue_type_template_id_92d58fe6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=live-as-guest.js.map?id=4cb92ffe48a02ce7b97e