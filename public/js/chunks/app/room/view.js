(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app/room/view"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/app/room/view.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/app/room/view.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _mixins_table__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @mixins/table */ "./resources/js/mixins/table.js");
/* harmony import */ var _mixins_header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @mixins/header */ "./resources/js/mixins/header.js");
/* harmony import */ var _core_configs_sweet_alert__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/configs/sweet-alert */ "./resources/js/core/configs/sweet-alert.js");
/* harmony import */ var _components_FileUploader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @components/FileUploader */ "./resources/js/components/FileUploader.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  "extends": _mixins_table__WEBPACK_IMPORTED_MODULE_0__["default"],
  components: {
    FileUploader: _components_FileUploader__WEBPACK_IMPORTED_MODULE_3__["default"]
  },
  data: function data() {
    return {
      fields: [{
        key: 'contact.email',
        label: $t('contact.props.email')
      }, {
        key: 'contact.name',
        label: $t('contact.props.name'),
        tdClass: 'td-ellipsis max-width-200px'
      }, {
        key: 'isModerator',
        label: '',
        thClass: 'text-nowrap'
      }, {
        key: 'isAttendee',
        label: '',
        thClass: 'text-nowrap'
      }, {
        key: 'isBlocked',
        label: '',
        thClass: 'text-nowrap'
      }, {
        key: 'actions',
        label: '',
        cantHide: true,
        tdClass: 'actions-dropdown-wrapper'
      }],
      initUrl: 'meetings',
      initSubUrl: 'invitees',
      dataTitle: $t('room.room'),
      fallBackRoute: 'appRoomList',
      dataType: 'meeting',
      hideFilterButton: true,
      uploaderConfig: {
        module: '',
        token: '',
        allowedExtensions: '',
        maxNoOfFiles: 5,
        uuid: uuid()
      }
    };
  },
  computed: {
    computedStatus: function computedStatus() {
      if (!this.entity) {
        return 'closed';
      }

      return this.entity.status === 'live' ? 'open' : this.entity.status === 'ended' ? 'closed' : this.entity.status;
    }
  },
  methods: {
    afterGetEntityData: function afterGetEntityData() {
      this.headerButtons = [];

      if (this.entity.canModerate) {
        if (this.entity.status === 'scheduled' || this.entity.status === 'ended') {
          this.headerButtons.push(_mixins_header__WEBPACK_IMPORTED_MODULE_1__["headerActionButton"]($t('room.open'), 'fas fas fa-sign-in-alt', this.setMeetingLive, null, {
            color: 'success'
          })); // this.headerButtons.push(headerMixins.headerPermittedRouteButton($t('room.open'), 'fas fa-sign-in-alt', 'liveMeeting', 'list-meeting', null, { color: 'success' }, { subUuid: this.uuid }))
        } else {
          this.headerButtons.push(_mixins_header__WEBPACK_IMPORTED_MODULE_1__["headerPermittedRouteButton"]($t('room.open'), 'fas fa-sign-in-alt', 'liveMeeting', 'list-meeting', null, {
            color: 'success'
          }, {
            subUuid: this.uuid
          }));
          this.headerButtons.push(_mixins_header__WEBPACK_IMPORTED_MODULE_1__["headerActionButton"]($t('room.close'), 'fas fas fa-sign-out-alt', this.setMeetingEnded, null, {
            color: 'danger'
          }));
        }

        this.headerButtons.push(_mixins_header__WEBPACK_IMPORTED_MODULE_1__["headerActionButton"]($t('meeting.invite'), 'fas fa-paper-plane', this.triggerSendInvitation, null, {
          color: 'primary'
        }));
        this.headerButtons.push(_mixins_header__WEBPACK_IMPORTED_MODULE_1__["headerRouteButton"]($t('general.add'), 'fas fa-plus', 'appRoomInviteeAdd', null, null, {
          subUuid: this.uuid
        }));
        this.headerButtons.push(_mixins_header__WEBPACK_IMPORTED_MODULE_1__["headerRouteButton"](null, 'fas fa-cog', 'appRoomSingleConfig', null, null, {
          subUuid: this.uuid
        }));
      } else {
        this.headerButtons.push(_mixins_header__WEBPACK_IMPORTED_MODULE_1__["headerPermittedRouteButton"]($t('room.open'), 'fas fa-sign-in-alt', 'liveMeeting', 'list-meeting', null, {
          color: 'success'
        }, {
          subUuid: this.uuid
        }));
      }

      this.applyPageHeader();
    },
    setMeetingLive: function setMeetingLive() {
      var _this = this;

      this.isLoading = true;
      this.Custom({
        url: "/".concat(this.initUrl, "/").concat(this.uuid, "/schedule"),
        method: 'post'
      }).then(function (response) {
        _this.entity = response.meeting;

        _this.afterGetEntityData();

        _this.$toasted.success(response.message, _this.$toastConfig);

        _this.$router.push({
          name: 'liveMeeting',
          params: {
            uuid: response.meeting.uuid
          }
        }); // this.isLoading = false

      })["catch"](function (error) {
        _this.isLoading = false;
        formUtil.handleErrors(error);
      });
    },
    setMeetingEnded: function setMeetingEnded() {
      var _this2 = this;

      this.isLoading = true;
      this.Custom({
        url: "/".concat(this.initUrl, "/").concat(this.uuid, "/end"),
        method: 'post'
      }).then(function (response) {
        _this2.entity = response.meeting;

        _this2.afterGetEntityData();

        _this2.$toasted.success(response.message, _this2.$toastConfig);

        _this2.isLoading = false;
      })["catch"](function (error) {
        _this2.isLoading = false;
        formUtil.handleErrors(error);
      });
    },
    sendInvitation: function sendInvitation(invitee) {
      var _this3 = this;

      formUtil.confirmAction().then(function (result) {
        if (result.value) {
          _this3.isLoading = true;
          var data = {};

          if (invitee) {
            data.invitee = invitee;
          }

          _this3.Custom({
            url: "/".concat(_this3.initUrl, "/").concat(_this3.uuid, "/invitation"),
            method: 'post',
            data: data
          }).then(function (response) {
            _this3.$toasted.success(response.message, _this3.$toastConfig.success);

            _this3.isLoading = false;
          })["catch"](function (error) {
            _this3.isLoading = false;
            formUtil.handleErrors(error);
          });
        } else {
          result.dismiss === _core_configs_sweet_alert__WEBPACK_IMPORTED_MODULE_2__["default"].DismissReason.cancel;
        }
      });
    },
    triggerSendInvitation: function triggerSendInvitation() {
      this.sendInvitation();
    },
    toggleModerator: function toggleModerator(invitee) {
      var _this4 = this;

      this.isLoading = true;
      var data = {};

      if (invitee) {
        data.invitee = invitee;
      }

      this.Custom({
        url: "/".concat(this.initUrl, "/").concat(this.uuid, "/moderator"),
        method: 'post',
        data: data
      }).then(function (response) {
        _this4.isLoading = false;

        _this4.$nextTick(function () {
          _this4.refreshTable();
        });
      })["catch"](function (error) {
        _this4.isLoading = false;
        formUtil.handleErrors(error);
      });
    },
    toggleBlock: function toggleBlock(invitee) {
      var _this5 = this;

      this.isLoading = true;
      var data = {};
      var action = invitee.isBlocked ? 'unblock' : 'block';
      this.Custom({
        url: "/".concat(this.initUrl, "/").concat(this.uuid, "/invitees/").concat(invitee.uuid, "/").concat(action, "?type=invitee"),
        method: 'post'
      }).then(function (response) {
        _this5.isLoading = false;

        _this5.$nextTick(function () {
          _this5.refreshTable();
        });
      })["catch"](function (error) {
        _this5.isLoading = false;
        formUtil.handleErrors(error);
      });
    }
  },
  mounted: function mounted() {
    this.getEntityData();
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/app/room/view.vue?vue&type=template&id=2114b4fc&":
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/app/room/view.vue?vue&type=template&id=2114b4fc& ***!
  \***********************************************************************************************************************************************************************************************************/
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
    { staticClass: "row" },
    [
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
                "has-footer": "",
                "is-loading": _vm.isLoading,
                "loader-color": _vm.vars.loaderColor,
                id: "printable"
              }
            },
            [
              _vm.entity
                ? [
                    _c("div", { staticClass: "row" }, [
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
                                            [
                                              _vm._v(
                                                _vm._s(_vm.entity.type.name)
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
                                                "room-" + _vm.computedStatus
                                              ]
                                          }
                                        },
                                        [_vm._v(_vm._s(_vm.computedStatus))]
                                      )
                                    ]
                                  },
                                  proxy: true
                                }
                              ],
                              null,
                              false,
                              3308535822
                            )
                          })
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _vm.entity.status === "scheduled"
                        ? _c(
                            "div",
                            { staticClass: "col-12 mb-3" },
                            [
                              _c("view-date", {
                                attrs: {
                                  label: _vm.$t(
                                    "meeting.props.start_date_time"
                                  ),
                                  value: _vm.entity.startDateTime,
                                  "with-tz": ""
                                }
                              })
                            ],
                            1
                          )
                        : _vm._e(),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "col-12 col-lg-6 mb-3" },
                        [
                          _c("view-single", {
                            attrs: {
                              label: _vm.$t("meeting.config.enable_chat")
                            },
                            scopedSlots: _vm._u(
                              [
                                {
                                  key: "main",
                                  fn: function() {
                                    return [
                                      _vm.entity.config.enableChat
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
                                                staticClass:
                                                  "far fa-check-circle"
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
                                              attrs: {
                                                rounded: "",
                                                type: "dark"
                                              }
                                            },
                                            [
                                              _c("i", {
                                                staticClass: "far fa-circle"
                                              }),
                                              _vm._v(
                                                " " +
                                                  _vm._s(_vm.$t("general.no"))
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
                              3464163950
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
                              label: _vm.$t(
                                "meeting.config.enable_screen_sharing"
                              )
                            },
                            scopedSlots: _vm._u(
                              [
                                {
                                  key: "main",
                                  fn: function() {
                                    return [
                                      _vm.entity.config.enableScreenSharing
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
                                                staticClass:
                                                  "far fa-check-circle"
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
                                              attrs: {
                                                rounded: "",
                                                type: "dark"
                                              }
                                            },
                                            [
                                              _c("i", {
                                                staticClass: "far fa-circle"
                                              }),
                                              _vm._v(
                                                " " +
                                                  _vm._s(_vm.$t("general.no"))
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
                              4027570740
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
                              label: _vm.$t("meeting.config.enable_recording")
                            },
                            scopedSlots: _vm._u(
                              [
                                {
                                  key: "main",
                                  fn: function() {
                                    return [
                                      _vm.entity.config.enableRecording
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
                                                staticClass:
                                                  "far fa-check-circle"
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
                                              attrs: {
                                                rounded: "",
                                                type: "dark"
                                              }
                                            },
                                            [
                                              _c("i", {
                                                staticClass: "far fa-circle"
                                              }),
                                              _vm._v(
                                                " " +
                                                  _vm._s(_vm.$t("general.no"))
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
                              3927944253
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
                              label: _vm.$t(
                                "meeting.config.enable_hand_gesture"
                              )
                            },
                            scopedSlots: _vm._u(
                              [
                                {
                                  key: "main",
                                  fn: function() {
                                    return [
                                      _vm.entity.config.enableHandGesture
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
                                                staticClass:
                                                  "far fa-check-circle"
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
                                              attrs: {
                                                rounded: "",
                                                type: "dark"
                                              }
                                            },
                                            [
                                              _c("i", {
                                                staticClass: "far fa-circle"
                                              }),
                                              _vm._v(
                                                " " +
                                                  _vm._s(_vm.$t("general.no"))
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
                              1765890292
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
                              label: _vm.$t(
                                "meeting.config.enable_file_sharing"
                              )
                            },
                            scopedSlots: _vm._u(
                              [
                                {
                                  key: "main",
                                  fn: function() {
                                    return [
                                      _vm.entity.config.enableFileSharing
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
                                                staticClass:
                                                  "far fa-check-circle"
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
                                              attrs: {
                                                rounded: "",
                                                type: "dark"
                                              }
                                            },
                                            [
                                              _c("i", {
                                                staticClass: "far fa-circle"
                                              }),
                                              _vm._v(
                                                " " +
                                                  _vm._s(_vm.$t("general.no"))
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
                              1166980094
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
                              label: _vm.$t("meeting.config.footer_auto_hide")
                            },
                            scopedSlots: _vm._u(
                              [
                                {
                                  key: "main",
                                  fn: function() {
                                    return [
                                      _vm.entity.config.footerAutoHide
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
                                                staticClass:
                                                  "far fa-check-circle"
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
                                              attrs: {
                                                rounded: "",
                                                type: "dark"
                                              }
                                            },
                                            [
                                              _c("i", {
                                                staticClass: "far fa-circle"
                                              }),
                                              _vm._v(
                                                " " +
                                                  _vm._s(_vm.$t("general.no"))
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
                              2368595835
                            )
                          })
                        ],
                        1
                      )
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
                        attrs: {
                          type: "button",
                          design: "light",
                          tabindex: "-1"
                        },
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
                ),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "right-side" },
                  [
                    _vm.entity &&
                    (_vm.hasPermission("edit-meeting") ||
                      _vm.entity.canModerate)
                      ? _c(
                          "base-button",
                          {
                            attrs: { type: "button", design: "primary" },
                            on: {
                              click: function($event) {
                                $event.stopPropagation()
                                return _vm.$router.push({
                                  name: "appRoomEdit",
                                  params: { uuid: _vm.entity.uuid }
                                })
                              }
                            }
                          },
                          [
                            _c("i", { staticClass: "fas fa-edit" }),
                            _vm._v(
                              " " +
                                _vm._s(
                                  _vm.$t("global.edit", {
                                    attribute: _vm.$t("room.room")
                                  })
                                )
                            )
                          ]
                        )
                      : _vm._e()
                  ],
                  1
                )
              ])
            ],
            2
          )
        ],
        1
      ),
      _vm._v(" "),
      _vm.entity
        ? [
            _vm.entity.canModerate
              ? _c(
                  "div",
                  { staticClass: "col-12 col-md-8" },
                  [
                    _c(
                      "base-container",
                      {
                        staticClass: "p-0",
                        attrs: {
                          boxed: "",
                          "with-loader": "",
                          "min-height": "full",
                          "is-loading": _vm.isLoading,
                          "loader-color": _vm.vars.loaderColor
                        }
                      },
                      [
                        _vm.isInitialized
                          ? _c(
                              "table-wrapper",
                              {
                                attrs: {
                                  meta: _vm.entities.meta,
                                  "add-button-route":
                                    _vm.entity.status === "scheduled" &&
                                    _vm.entity.canModerate
                                      ? "appRoomInviteeAdd"
                                      : "",
                                  "add-button-params": { subUuid: _vm.uuid },
                                  "add-button-permissions": ["create-meeting"],
                                  "entity-title": "meeting.invitee.invitee",
                                  "entities-title": "meeting.invitee.invitees",
                                  "entity-description":
                                    "meeting.invitee.module_description",
                                  "small-footer": ""
                                }
                              },
                              [
                                _c("b-table", {
                                  directives: [
                                    {
                                      name: "show",
                                      rawName: "v-show",
                                      value: _vm.entities.meta.total,
                                      expression: "entities.meta.total"
                                    }
                                  ],
                                  ref: "btable",
                                  attrs: {
                                    items: _vm.itemsProvider,
                                    fields: _vm.fields,
                                    busy: _vm.isLoading,
                                    hover: "",
                                    striped: "",
                                    stacked: "sm",
                                    "per-page": _vm.entities.meta.perPage,
                                    "current-page":
                                      _vm.entities.meta.currentPage,
                                    filters: null
                                  },
                                  on: {
                                    "update:busy": function($event) {
                                      _vm.isLoading = $event
                                    }
                                  },
                                  scopedSlots: _vm._u(
                                    [
                                      {
                                        key: "cell(isModerator)",
                                        fn: function(row) {
                                          return [
                                            row.item.isModerator
                                              ? _c(
                                                  "span",
                                                  {
                                                    directives: [
                                                      {
                                                        name: "b-tooltip",
                                                        rawName:
                                                          "v-b-tooltip.hover.left",
                                                        modifiers: {
                                                          hover: true,
                                                          left: true
                                                        }
                                                      }
                                                    ],
                                                    staticClass: "text-info",
                                                    attrs: {
                                                      title: _vm.$t(
                                                        "meeting.is_moderator"
                                                      )
                                                    }
                                                  },
                                                  [
                                                    _c("i", {
                                                      staticClass:
                                                        "fas fa-user-shield"
                                                    })
                                                  ]
                                                )
                                              : _c(
                                                  "span",
                                                  {
                                                    directives: [
                                                      {
                                                        name: "b-tooltip",
                                                        rawName:
                                                          "v-b-tooltip.hover.left",
                                                        modifiers: {
                                                          hover: true,
                                                          left: true
                                                        }
                                                      }
                                                    ],
                                                    staticClass: "text-light",
                                                    attrs: {
                                                      title: _vm.$t(
                                                        "meeting.not_a_moderator"
                                                      )
                                                    }
                                                  },
                                                  [
                                                    _c("i", {
                                                      staticClass: "far fa-user"
                                                    })
                                                  ]
                                                )
                                          ]
                                        }
                                      },
                                      {
                                        key: "cell(isAttendee)",
                                        fn: function(row) {
                                          return [
                                            row.item.isAttendee
                                              ? _c(
                                                  "span",
                                                  {
                                                    directives: [
                                                      {
                                                        name: "b-tooltip",
                                                        rawName:
                                                          "v-b-tooltip.hover.left",
                                                        modifiers: {
                                                          hover: true,
                                                          left: true
                                                        }
                                                      }
                                                    ],
                                                    staticClass: "text-success",
                                                    attrs: {
                                                      title: _vm.$t(
                                                        "meeting.attendee"
                                                      )
                                                    }
                                                  },
                                                  [
                                                    _c("i", {
                                                      staticClass:
                                                        "fas fa-check-circle"
                                                    })
                                                  ]
                                                )
                                              : _c(
                                                  "span",
                                                  {
                                                    directives: [
                                                      {
                                                        name: "b-tooltip",
                                                        rawName:
                                                          "v-b-tooltip.hover.left",
                                                        modifiers: {
                                                          hover: true,
                                                          left: true
                                                        }
                                                      }
                                                    ],
                                                    staticClass: "text-light",
                                                    attrs: {
                                                      title: _vm.$t(
                                                        "meeting.not_an_attendee"
                                                      )
                                                    }
                                                  },
                                                  [
                                                    _c("i", {
                                                      staticClass:
                                                        "far fa-circle"
                                                    })
                                                  ]
                                                )
                                          ]
                                        }
                                      },
                                      {
                                        key: "cell(isBlocked)",
                                        fn: function(row) {
                                          return [
                                            row.item.isBlocked
                                              ? _c(
                                                  "span",
                                                  {
                                                    directives: [
                                                      {
                                                        name: "b-tooltip",
                                                        rawName:
                                                          "v-b-tooltip.hover.left",
                                                        modifiers: {
                                                          hover: true,
                                                          left: true
                                                        }
                                                      }
                                                    ],
                                                    staticClass: "text-danger",
                                                    attrs: {
                                                      title: _vm.$t(
                                                        "meeting.is_blocked"
                                                      )
                                                    }
                                                  },
                                                  [
                                                    _c("i", {
                                                      staticClass: "fas fa-ban"
                                                    })
                                                  ]
                                                )
                                              : _c(
                                                  "span",
                                                  {
                                                    directives: [
                                                      {
                                                        name: "b-tooltip",
                                                        rawName:
                                                          "v-b-tooltip.hover.left",
                                                        modifiers: {
                                                          hover: true,
                                                          left: true
                                                        }
                                                      }
                                                    ],
                                                    staticClass: "text-success",
                                                    attrs: {
                                                      title: _vm.$t(
                                                        "meeting.is_allowed"
                                                      )
                                                    }
                                                  },
                                                  [
                                                    _c("i", {
                                                      staticClass:
                                                        "fas fa-circle"
                                                    })
                                                  ]
                                                )
                                          ]
                                        }
                                      },
                                      {
                                        key: "cell(actions)",
                                        fn: function(row) {
                                          return [
                                            _c("table-row-actions", [
                                              _vm.hasPermission(
                                                "create-meeting"
                                              )
                                                ? _c(
                                                    "a",
                                                    {
                                                      staticClass:
                                                        "dropdown-item",
                                                      on: {
                                                        click: function(
                                                          $event
                                                        ) {
                                                          $event.stopPropagation()
                                                          return _vm.toggleModerator(
                                                            row.item
                                                          )
                                                        }
                                                      }
                                                    },
                                                    [
                                                      row.item.isModerator
                                                        ? _c("i", {
                                                            staticClass:
                                                              "fas fa-user-shield"
                                                          })
                                                        : _c("i", {
                                                            staticClass:
                                                              "far fa-user"
                                                          }),
                                                      _vm._v(
                                                        " " +
                                                          _vm._s(
                                                            _vm.$t(
                                                              "global.toggle",
                                                              {
                                                                attribute: _vm.$t(
                                                                  "meeting.moderator"
                                                                )
                                                              }
                                                            )
                                                          )
                                                      )
                                                    ]
                                                  )
                                                : _vm._e(),
                                              _vm._v(" "),
                                              _vm.hasPermission(
                                                "create-meeting"
                                              )
                                                ? _c(
                                                    "a",
                                                    {
                                                      staticClass:
                                                        "dropdown-item",
                                                      on: {
                                                        click: function(
                                                          $event
                                                        ) {
                                                          $event.stopPropagation()
                                                          return _vm.toggleBlock(
                                                            row.item
                                                          )
                                                        }
                                                      }
                                                    },
                                                    [
                                                      row.item.isBlocked
                                                        ? _c("span", [
                                                            _c("i", {
                                                              staticClass:
                                                                "fas fa-check-circle"
                                                            }),
                                                            _vm._v(
                                                              " " +
                                                                _vm._s(
                                                                  _vm.$t(
                                                                    "global.unblock",
                                                                    {
                                                                      attribute: _vm.$t(
                                                                        "meeting.invitee.invitee"
                                                                      )
                                                                    }
                                                                  )
                                                                )
                                                            )
                                                          ])
                                                        : _c("span", [
                                                            _c("i", {
                                                              staticClass:
                                                                "fas fa-ban"
                                                            }),
                                                            _vm._v(
                                                              " " +
                                                                _vm._s(
                                                                  _vm.$t(
                                                                    "global.block",
                                                                    {
                                                                      attribute: _vm.$t(
                                                                        "meeting.invitee.invitee"
                                                                      )
                                                                    }
                                                                  )
                                                                )
                                                            )
                                                          ])
                                                    ]
                                                  )
                                                : _vm._e(),
                                              _vm._v(" "),
                                              _vm.hasPermission(
                                                "create-meeting"
                                              )
                                                ? _c(
                                                    "a",
                                                    {
                                                      staticClass:
                                                        "dropdown-item",
                                                      on: {
                                                        click: function(
                                                          $event
                                                        ) {
                                                          $event.stopPropagation()
                                                          return _vm.deleteEntity(
                                                            row.item
                                                          )
                                                        }
                                                      }
                                                    },
                                                    [
                                                      _c("i", {
                                                        staticClass:
                                                          "fas fa-trash"
                                                      }),
                                                      _vm._v(
                                                        " " +
                                                          _vm._s(
                                                            _vm.$t(
                                                              "global.delete",
                                                              {
                                                                attribute: _vm.$t(
                                                                  "meeting.invitee.invitee"
                                                                )
                                                              }
                                                            )
                                                          )
                                                      )
                                                    ]
                                                  )
                                                : _vm._e(),
                                              _vm._v(" "),
                                              _vm.entity.canModerate
                                                ? _c(
                                                    "a",
                                                    {
                                                      staticClass:
                                                        "dropdown-item",
                                                      on: {
                                                        click: function(
                                                          $event
                                                        ) {
                                                          $event.stopPropagation()
                                                          return _vm.sendInvitation(
                                                            row.item
                                                          )
                                                        }
                                                      }
                                                    },
                                                    [
                                                      _c("i", {
                                                        staticClass:
                                                          "fas fa-paper-plane"
                                                      }),
                                                      _vm._v(
                                                        " " +
                                                          _vm._s(
                                                            _vm.$t(
                                                              "meeting.send_invitation"
                                                            )
                                                          )
                                                      )
                                                    ]
                                                  )
                                                : _vm._e()
                                            ])
                                          ]
                                        }
                                      }
                                    ],
                                    null,
                                    false,
                                    2613688320
                                  )
                                })
                              ],
                              1
                            )
                          : _vm._e()
                      ],
                      1
                    )
                  ],
                  1
                )
              : _vm._e(),
            _vm._v(" "),
            _vm.entity &&
            (_vm.hasPermission("edit-meeting") || _vm.entity.canModerate)
              ? _c(
                  "div",
                  { staticClass: "col-12 mt-element" },
                  [
                    _c(
                      "base-container",
                      { attrs: { boxed: "" } },
                      [
                        _c("file-uploader", {
                          attrs: {
                            url:
                              "/" + this.initUrl + "/" + this.uuid + "/media",
                            "name-label": "upload.attachment",
                            "names-label": "upload.attachments",
                            options: _vm.uploaderConfig,
                            data: _vm.entity.attachments,
                            "button-wrapper-classes": "justify-content-between",
                            "heading-classes": "text-muted mb-0",
                            heading: _vm.$t("upload.attachments")
                          }
                        })
                      ],
                      1
                    )
                  ],
                  1
                )
              : _vm.entity &&
                _vm.entity.attachments &&
                _vm.entity.attachments.length
              ? _c(
                  "div",
                  { staticClass: "col-12 mt-element" },
                  [
                    _c(
                      "base-container",
                      { attrs: { boxed: "" } },
                      [
                        _c("view-uploads", {
                          staticClass: "mt-3",
                          attrs: {
                            label: _vm.$t("upload.attachments"),
                            "name-label": _vm.$t("upload.attachment"),
                            value: _vm.entity.attachments,
                            "url-prefix": "/meetings/" + _vm.uuid + "/downloads"
                          }
                        })
                      ],
                      1
                    )
                  ],
                  1
                )
              : _vm._e()
          ]
        : _vm._e()
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/views/app/room/view.vue":
/*!**********************************************!*\
  !*** ./resources/js/views/app/room/view.vue ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _view_vue_vue_type_template_id_2114b4fc___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./view.vue?vue&type=template&id=2114b4fc& */ "./resources/js/views/app/room/view.vue?vue&type=template&id=2114b4fc&");
/* harmony import */ var _view_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./view.vue?vue&type=script&lang=js& */ "./resources/js/views/app/room/view.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _view_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _view_vue_vue_type_template_id_2114b4fc___WEBPACK_IMPORTED_MODULE_0__["render"],
  _view_vue_vue_type_template_id_2114b4fc___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/app/room/view.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/app/room/view.vue?vue&type=script&lang=js&":
/*!***********************************************************************!*\
  !*** ./resources/js/views/app/room/view.vue?vue&type=script&lang=js& ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_view_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./view.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/app/room/view.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_view_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/app/room/view.vue?vue&type=template&id=2114b4fc&":
/*!*****************************************************************************!*\
  !*** ./resources/js/views/app/room/view.vue?vue&type=template&id=2114b4fc& ***!
  \*****************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_view_vue_vue_type_template_id_2114b4fc___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./view.vue?vue&type=template&id=2114b4fc& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/app/room/view.vue?vue&type=template&id=2114b4fc&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_view_vue_vue_type_template_id_2114b4fc___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_view_vue_vue_type_template_id_2114b4fc___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=view.js.map?id=4421f0302c830bd87840