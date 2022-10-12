(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app/meeting/view"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/app/meeting/view.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/app/meeting/view.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _mixins_table__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @mixins/table */ "./resources/js/mixins/table.js");
/* harmony import */ var _mixins_header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @mixins/header */ "./resources/js/mixins/header.js");
/* harmony import */ var _core_configs_sweet_alert__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/configs/sweet-alert */ "./resources/js/core/configs/sweet-alert.js");
/* harmony import */ var _components_FileUploader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @components/FileUploader */ "./resources/js/components/FileUploader.vue");
/* harmony import */ var _components_ImageUploader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @components/ImageUploader */ "./resources/js/components/ImageUploader.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    FileUploader: _components_FileUploader__WEBPACK_IMPORTED_MODULE_3__["default"],
    ImageUploader: _components_ImageUploader__WEBPACK_IMPORTED_MODULE_4__["default"]
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
        headerTitle: $t('meeting.meeting_attributes'),
        thClass: 'text-nowrap',
        tdClass: 'text-center'
      }, {
        key: 'actions',
        label: '',
        cantHide: true,
        tdClass: 'actions-dropdown-wrapper'
      }],
      initUrl: 'meetings',
      initSubUrl: 'invitees',
      dataTitle: $t('meeting.meeting'),
      fallBackRoute: 'appMeetingList',
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
  methods: {
    afterGetEntityData: function afterGetEntityData() {
      this.headerButtons = [];

      if (this.entity.status === 'scheduled' || this.entity.status === 'live') {
        this.headerButtons.push(_mixins_header__WEBPACK_IMPORTED_MODULE_1__["headerPermittedRouteButton"]($t('meeting.join'), 'fas fa-sign-in-alt', 'liveMeeting', 'list-meeting', null, {
          color: 'success'
        }, {
          subUuid: this.uuid
        }));
      }

      if (this.entity.status === 'scheduled' && this.entity.canModerate) {
        this.headerButtons.push(_mixins_header__WEBPACK_IMPORTED_MODULE_1__["headerActionButton"]($t('meeting.cancel'), 'fas fa-times', this.cancelMeeting, null, {
          color: 'danger'
        }));
        this.headerButtons.push(_mixins_header__WEBPACK_IMPORTED_MODULE_1__["headerActionButton"]($t('meeting.invite'), 'fas fa-paper-plane', this.triggerSendInvitation, null, {
          color: 'primary'
        }));
        this.headerButtons.push(_mixins_header__WEBPACK_IMPORTED_MODULE_1__["headerRouteButton"]($t('general.add'), 'fas fa-plus', 'appMeetingInviteeAdd', null, null, {
          subUuid: this.uuid
        }));
        this.headerButtons.push(_mixins_header__WEBPACK_IMPORTED_MODULE_1__["headerRouteButton"](null, 'fas fa-cog', 'appMeetingSingleConfig', null, null, {
          subUuid: this.uuid
        }));
      }

      this.applyPageHeader();
    },
    cancelMeeting: function cancelMeeting() {
      var _this = this;

      swtAlert.fire({
        title: $t('meeting.reason_for_cancellation'),
        input: 'text',
        inputPlaceholder: $t('meeting.reason_for_cancellation'),
        showCancelButton: true,
        confirmButtonText: 'Proceed!',
        cancelButtonText: 'Go Back!'
      }).then(function (result) {
        if (result.value) {
          _this.isLoading = true;

          _this.Custom({
            url: "/".concat(_this.initUrl, "/").concat(_this.uuid, "/cancel"),
            method: 'post',
            data: {
              cancellationReason: result.value
            }
          }).then(function (response) {
            _this.entity = response.meeting;

            _this.afterGetEntityData();

            _this.$toasted.success(response.message, _this.$toastConfig);

            _this.isLoading = false;
          })["catch"](function (error) {
            _this.isLoading = false;
            formUtil.handleErrors(error);
          });
        } else {
          result.dismiss === _core_configs_sweet_alert__WEBPACK_IMPORTED_MODULE_2__["default"].DismissReason.cancel;
        }
      });
    },
    sendInvitation: function sendInvitation(invitee) {
      var _this2 = this;

      formUtil.confirmAction().then(function (result) {
        if (result.value) {
          _this2.isLoading = true;
          var data = {};

          if (invitee) {
            data.invitee = invitee;
          }

          _this2.Custom({
            url: "/".concat(_this2.initUrl, "/").concat(_this2.uuid, "/invitation"),
            method: 'post',
            data: data
          }).then(function (response) {
            _this2.$toasted.success(response.message, _this2.$toastConfig.success);

            _this2.isLoading = false;
          })["catch"](function (error) {
            _this2.isLoading = false;
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
      var _this3 = this;

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
        _this3.isLoading = false;

        _this3.$nextTick(function () {
          _this3.refreshTable();
        });
      })["catch"](function (error) {
        _this3.isLoading = false;
        formUtil.handleErrors(error);
      });
    },
    toggleBlock: function toggleBlock(invitee) {
      var _this4 = this;

      this.isLoading = true;
      var data = {};
      var action = invitee.isBlocked ? 'unblock' : 'block';
      this.Custom({
        url: "/".concat(this.initUrl, "/").concat(this.uuid, "/invitees/").concat(invitee.uuid, "/").concat(action, "?type=invitee"),
        method: 'post'
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
    coverImageModified: function coverImageModified() {
      var _this5 = this;

      this.Init({
        url: this.initUrl,
        doNotReset: true
      });
      this.reloadEntityData(function () {
        _this5.InitSub({
          url: _this5.uuid + '/' + _this5.initSubUrl,
          doNotReset: true
        });
      });
    }
  },
  mounted: function mounted() {
    if (this.configs.system && this.configs.system.allowedFileExtensions) {
      this.uploaderConfig.allowedExtensions = this.configs.system.allowedFileExtensions;
    }

    this.getEntityData();
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/app/meeting/view.vue?vue&type=template&id=0579d0a6&":
/*!**************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/app/meeting/view.vue?vue&type=template&id=0579d0a6& ***!
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
                    _c(
                      "div",
                      { staticClass: "row" },
                      [
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
                                label: _vm.$t(
                                  "meeting.meeting_category.category"
                                )
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
                                                  _vm._s(
                                                    _vm.entity.category.name
                                                  )
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
                              attrs: {
                                label: _vm.$t(
                                  "meeting.props.accessible_via_link"
                                )
                              },
                              scopedSlots: _vm._u(
                                [
                                  {
                                    key: "main",
                                    fn: function() {
                                      return [
                                        _vm.entity.accessibleViaLink
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
                                                    _vm._s(
                                                      _vm.$t("general.yes")
                                                    )
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
                                3700736429
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
                              attrs: { label: _vm.$t("meeting.props.is_pam") },
                              scopedSlots: _vm._u(
                                [
                                  {
                                    key: "main",
                                    fn: function() {
                                      return [
                                        _vm.entity.isPam
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
                                                    _vm._s(
                                                      _vm.$t("general.yes")
                                                    )
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
                                3893383155
                              )
                            })
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _vm.allowExtraInput
                          ? [
                              _c(
                                "div",
                                { staticClass: "col-12 col-lg-6 mb-3" },
                                [
                                  _c("view-single", {
                                    attrs: {
                                      label: _vm.$t(
                                        "meeting.props.only_accessible_to_members"
                                      )
                                    },
                                    scopedSlots: _vm._u(
                                      [
                                        {
                                          key: "main",
                                          fn: function() {
                                            return [
                                              _vm.entity.accessibleToMembers
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
                                                          _vm._s(
                                                            _vm.$t(
                                                              "general.yes"
                                                            )
                                                          )
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
                                                        staticClass:
                                                          "far fa-circle"
                                                      }),
                                                      _vm._v(
                                                        " " +
                                                          _vm._s(
                                                            _vm.$t("general.no")
                                                          )
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
                                      464747915
                                    )
                                  })
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _vm.configs.meeting.enablePaidMeeting
                                ? [
                                    _c(
                                      "div",
                                      { staticClass: "col-12 col-lg-6 mb-3" },
                                      [
                                        _c("view-single", {
                                          attrs: {
                                            label: _vm.$t(
                                              "meeting.props.is_paid"
                                            )
                                          },
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
                                                              staticClass:
                                                                "far fa-check-circle"
                                                            }),
                                                            _vm._v(
                                                              " " +
                                                                _vm._s(
                                                                  _vm.$t(
                                                                    "general.yes"
                                                                  )
                                                                )
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
                                                              staticClass:
                                                                "far fa-circle"
                                                            }),
                                                            _vm._v(
                                                              " " +
                                                                _vm._s(
                                                                  _vm.$t(
                                                                    "general.no"
                                                                  )
                                                                )
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
                                    )
                                  ]
                                : _vm._e()
                            ]
                          : _vm._e(),
                        _vm._v(" "),
                        _vm.entity && _vm.entity.status === "cancelled"
                          ? _c(
                              "div",
                              { staticClass: "col-12 mb-3" },
                              [
                                _c("view-single", {
                                  attrs: {
                                    label: _vm.$t(
                                      "meeting.props.cancellation_reason"
                                    ),
                                    value: _vm.entity.cancellationReason
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
                                label: _vm.$t(
                                  "meeting.config.max_participant_count"
                                ),
                                value: _vm.entity.maxParticipantCount
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
                      ],
                      2
                    )
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
                    _vm.entity.status === "scheduled" &&
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
                                  name: "appMeetingEdit",
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
                                    attribute: _vm.$t("meeting.meeting")
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
                                      ? "appMeetingInviteeAdd"
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
                                                ),
                                            _vm._v(" "),
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
                                                    staticClass:
                                                      "ml-3 text-success",
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
                                                    staticClass:
                                                      "ml-3 text-light",
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
                                                ),
                                            _vm._v(" "),
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
                                                    staticClass:
                                                      "ml-3 text-danger",
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
                                                    staticClass:
                                                      "ml-3 text-success",
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
                                                ),
                                            _vm._v(" "),
                                            _vm.allowExtraInput &&
                                            _vm.configs.membership.enabled
                                              ? [
                                                  row.item.contact &&
                                                  row.item.contact.user &&
                                                  row.item.contact.user
                                                    .hasActiveMembership
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
                                                          staticClass:
                                                            "ml-3 text-success",
                                                          attrs: {
                                                            title: _vm.$t(
                                                              "membership.has_active_membership"
                                                            )
                                                          }
                                                        },
                                                        [
                                                          _c("i", {
                                                            staticClass:
                                                              "far fa-id-badge"
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
                                                          staticClass:
                                                            "ml-3 text-light",
                                                          attrs: {
                                                            title: _vm.$t(
                                                              "membership.no_active_membership"
                                                            )
                                                          }
                                                        },
                                                        [
                                                          _c("i", {
                                                            staticClass:
                                                              "far fa-id-badge"
                                                          })
                                                        ]
                                                      )
                                                ]
                                              : _vm._e()
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
                                    2302528315
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
            _c(
              "div",
              {
                class: [
                  "col-12",
                  { "col-md-8": !_vm.entity.canModerate },
                  { "mt-element": _vm.entity.canModerate }
                ]
              },
              [
                _c(
                  "base-container",
                  { attrs: { boxed: "" } },
                  [
                    _c("view-paragraph", {
                      staticClass: "mb-3",
                      attrs: {
                        label: _vm.$t("meeting.props.agenda"),
                        value: _vm.entity.agenda,
                        html: ""
                      }
                    }),
                    _vm._v(" "),
                    _c("view-paragraph", {
                      attrs: {
                        label: _vm.$t("meeting.props.description"),
                        value: _vm.entity.description,
                        html: ""
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
              { staticClass: "col-12 mt-element" },
              [
                _c("base-container", { attrs: { boxed: "" } }, [
                  _c("h5", { staticClass: "mt-0 mb-4" }, [
                    _vm._v(
                      _vm._s(_vm.$t("meeting.meeting")) +
                        " " +
                        _vm._s(_vm.$t("config.configuration"))
                    )
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "row" }, [
                    _c(
                      "div",
                      { staticClass: "col-12 col-md-3 mb-3" },
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
                            3464163950
                          )
                        })
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "col-12 col-md-3 mb-3" },
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
                            4027570740
                          )
                        })
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "col-12 col-md-3 mb-3" },
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
                            3927944253
                          )
                        })
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "col-12 col-md-3 mb-3" },
                      [
                        _c("view-single", {
                          attrs: {
                            label: _vm.$t("meeting.config.enable_hand_gesture")
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
                            1765890292
                          )
                        })
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "col-12 col-md-3 mb-3" },
                      [
                        _c("view-single", {
                          attrs: {
                            label: _vm.$t("meeting.config.enable_file_sharing")
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
                            1166980094
                          )
                        })
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "col-12 col-md-3 mb-3" },
                      [
                        _c("view-single", {
                          attrs: {
                            label: _vm.$t("meeting.config.enable_link_sharing")
                          },
                          scopedSlots: _vm._u(
                            [
                              {
                                key: "main",
                                fn: function() {
                                  return [
                                    _vm.entity.config.enableLinkSharing
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
                            320539000
                          )
                        })
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "col-12 col-md-3 mb-3" },
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
                            2368595835
                          )
                        })
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "col-12 col-md-3 mb-3" },
                      [
                        _c("view-single", {
                          attrs: {
                            label: _vm.$t("meeting.config.speech_detection")
                          },
                          scopedSlots: _vm._u(
                            [
                              {
                                key: "main",
                                fn: function() {
                                  return [
                                    _vm.entity.config.speechDetection
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
                            3431644150
                          )
                        })
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "col-12 col-md-3 mb-3" },
                      [
                        _c("view-single", {
                          attrs: {
                            label: _vm.$t(
                              "meeting.config.mute_participants_on_start"
                            )
                          },
                          scopedSlots: _vm._u(
                            [
                              {
                                key: "main",
                                fn: function() {
                                  return [
                                    _vm.entity.config.muteParticipantsOnStart
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
                            1864381237
                          )
                        })
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "col-12 col-md-3 mb-3" },
                      [
                        _c("view-single", {
                          attrs: {
                            label: _vm.$t(
                              "meeting.config.allow_joining_without_devices"
                            )
                          },
                          scopedSlots: _vm._u(
                            [
                              {
                                key: "main",
                                fn: function() {
                                  return [
                                    _vm.entity.config.allowJoiningWithoutDevices
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
                            1798108269
                          )
                        })
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "col-12 col-md-3 mb-3" },
                      [
                        _c("view-single", {
                          attrs: {
                            label: _vm.$t("meeting.config.enable_whiteboard")
                          },
                          scopedSlots: _vm._u(
                            [
                              {
                                key: "main",
                                fn: function() {
                                  return [
                                    _vm.entity.config.enableWhiteboard
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
                            1901025069
                          )
                        })
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "col-12 col-md-3 mb-3" },
                      [
                        _c("view-single", {
                          attrs: {
                            label: _vm.$t("meeting.config.enable_snapshot")
                          },
                          scopedSlots: _vm._u(
                            [
                              {
                                key: "main",
                                fn: function() {
                                  return [
                                    _vm.entity.config.enableSnapshot
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
                            3692864636
                          )
                        })
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _vm.entity.config.enableSnapshot
                      ? _c(
                          "div",
                          { staticClass: "col-12 col-md-3 mb-3" },
                          [
                            _c("view-single", {
                              attrs: {
                                label: _vm.$t(
                                  "meeting.config.anyone_can_take_snapshot"
                                )
                              },
                              scopedSlots: _vm._u(
                                [
                                  {
                                    key: "main",
                                    fn: function() {
                                      return [
                                        _vm.entity.config.anyoneCanTakeSnapshot
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
                                                    _vm._s(
                                                      _vm.$t("general.yes")
                                                    )
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
                                1075785144
                              )
                            })
                          ],
                          1
                        )
                      : _vm._e(),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "col-12 col-md-3 mb-3" },
                      [
                        _c("view-single", {
                          attrs: {
                            label: _vm.$t(
                              "meeting.config.ask_host_before_joining"
                            )
                          },
                          scopedSlots: _vm._u(
                            [
                              {
                                key: "main",
                                fn: function() {
                                  return [
                                    _vm.entity.config.askHostBeforeJoining
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
                            2319716499
                          )
                        })
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "col-12 col-md-3 mb-3" },
                      [
                        _c("view-single", {
                          attrs: {
                            label: _vm.$t(
                              "meeting.config.prefer_rear_camera_first"
                            )
                          },
                          scopedSlots: _vm._u(
                            [
                              {
                                key: "main",
                                fn: function() {
                                  return [
                                    _vm.entity.config.preferRearCameraFirst
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
                            456528992
                          )
                        })
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "col-12 col-md-3 mb-3" },
                      [
                        _c("view-single", {
                          attrs: {
                            label: _vm.$t("meeting.config.enable_user_avatar")
                          },
                          scopedSlots: _vm._u(
                            [
                              {
                                key: "main",
                                fn: function() {
                                  return [
                                    _vm.entity.config.enableUserAvatar
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
                            4294218352
                          )
                        })
                      ],
                      1
                    )
                  ])
                ])
              ],
              1
            ),
            _vm._v(" "),
            (_vm.entity.status === "scheduled" ||
              _vm.entity.status === "live") &&
            (_vm.hasPermission("edit-meeting") || _vm.entity.canModerate)
              ? [
                  _c("div", { staticClass: "col-12 mt-element" }, [
                    _c(
                      "div",
                      { staticClass: "d-flex align-items-stretch" },
                      [
                        _c(
                          "base-container",
                          {
                            staticClass: "flex-grow h-full",
                            attrs: { boxed: "" }
                          },
                          [
                            _c("file-uploader", {
                              attrs: {
                                url:
                                  "/" +
                                  this.initUrl +
                                  "/" +
                                  this.uuid +
                                  "/media",
                                "name-label": "upload.attachment",
                                "names-label": "upload.attachments",
                                options: _vm.uploaderConfig,
                                data: _vm.entity.attachments,
                                "button-wrapper-classes":
                                  "justify-content-between",
                                "heading-classes": "text-muted mb-0",
                                heading: _vm.$t("upload.attachments")
                              }
                            })
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c(
                          "base-container",
                          {
                            staticClass:
                              "h-full ml-element max-width-400px p-0",
                            attrs: { boxed: "" }
                          },
                          [
                            _c("image-uploader", {
                              staticClass: "mb-3",
                              attrs: {
                                url:
                                  "/" +
                                  this.initUrl +
                                  "/" +
                                  this.uuid +
                                  "/cover",
                                "name-label": "meeting.props.cover_image",
                                "existing-image": _vm.entity.cover,
                                "remove-from-server": ""
                              },
                              on: {
                                uploaded: _vm.coverImageModified,
                                removed: _vm.coverImageModified
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
              : _vm.entity.attachments && _vm.entity.attachments.length
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

/***/ "./resources/js/views/app/meeting/view.vue":
/*!*************************************************!*\
  !*** ./resources/js/views/app/meeting/view.vue ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _view_vue_vue_type_template_id_0579d0a6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./view.vue?vue&type=template&id=0579d0a6& */ "./resources/js/views/app/meeting/view.vue?vue&type=template&id=0579d0a6&");
/* harmony import */ var _view_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./view.vue?vue&type=script&lang=js& */ "./resources/js/views/app/meeting/view.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _view_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _view_vue_vue_type_template_id_0579d0a6___WEBPACK_IMPORTED_MODULE_0__["render"],
  _view_vue_vue_type_template_id_0579d0a6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/app/meeting/view.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/app/meeting/view.vue?vue&type=script&lang=js&":
/*!**************************************************************************!*\
  !*** ./resources/js/views/app/meeting/view.vue?vue&type=script&lang=js& ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_view_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./view.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/app/meeting/view.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_view_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/app/meeting/view.vue?vue&type=template&id=0579d0a6&":
/*!********************************************************************************!*\
  !*** ./resources/js/views/app/meeting/view.vue?vue&type=template&id=0579d0a6& ***!
  \********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_view_vue_vue_type_template_id_0579d0a6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./view.vue?vue&type=template&id=0579d0a6& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/app/meeting/view.vue?vue&type=template&id=0579d0a6&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_view_vue_vue_type_template_id_0579d0a6___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_view_vue_vue_type_template_id_0579d0a6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=view.js.map?id=bc4e60ca7da920009c63