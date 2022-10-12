(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app/meeting/index"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/app/meeting/index.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/app/meeting/index.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _mixins_table__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @mixins/table */ "./resources/js/mixins/table.js");
/* harmony import */ var _filter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./filter */ "./resources/js/views/app/meeting/filter.vue");
/* harmony import */ var _core_utils_media__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/utils/media */ "./resources/js/core/utils/media.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    FilterForm: _filter__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  "extends": _mixins_table__WEBPACK_IMPORTED_MODULE_0__["default"],
  data: function data() {
    return {
      fields: [{
        key: 'title',
        label: $t('meeting.props.title'),
        sort: 'title',
        transformer: 'limitWords',
        tdClass: 'td-ellipsis max-width-250px'
      }, {
        key: 'user',
        label: $t('meeting.host')
      }, {
        key: 'agenda',
        label: $t('meeting.props.agenda'),
        transformer: 'limitWords',
        tdClass: 'd-none td-ellipsis max-width-100px',
        thClass: 'd-none'
      }, {
        key: 'type',
        label: $t('meeting.props.type'),
        transformer: 'objectWithName'
      }, {
        key: 'category',
        label: $t('meeting.meeting_category.category'),
        transformer: 'objectWithName'
      }, {
        key: 'accessibleViaLink',
        label: '',
        headerTitle: $t('meeting.meeting_attributes'),
        tdClass: 'text-center'
      }, {
        key: 'status',
        label: $t('meeting.props.status')
      }, {
        key: 'startDateTime',
        label: $t('meeting.props.scheduled_on'),
        sort: 'start_date_time',
        transformer: 'datetime'
      }, {
        key: 'endedAt',
        label: $t('meeting.ended_at'),
        transformer: 'datetime',
        thClass: 'd-none',
        tdClass: 'd-none'
      }, {
        key: 'period',
        label: $t('meeting.props.estimated_period'),
        thClass: 'd-none',
        tdClass: 'd-none'
      }, {
        key: 'createdAt',
        label: $t('general.created_at'),
        sort: 'created_at',
        transformer: 'datetime',
        thClass: 'd-none',
        tdClass: 'd-none'
      }, {
        key: 'updatedAt',
        label: $t('general.updated_at'),
        sort: 'updated_at',
        transformer: 'datetime',
        thClass: 'd-none',
        tdClass: 'd-none'
      }, {
        key: 'actions',
        label: '',
        cantHide: true,
        tdClass: 'actions-dropdown-wrapper'
      }],
      preRequisite: {
        types: [],
        categories: [],
        statuses: [],
        autoTranslates: []
      },
      filtersOptions: {
        keyword: '',
        type: '',
        category: '',
        status: '',
        startDate: '',
        endDate: ''
      },
      sortOptions: {
        hasScroll: true
      },
      columnsOptions: {
        hasScroll: true
      },
      exportOptions: {
        orientation: 'l'
      },
      permissionsRequired: {
        add: 'create-meeting',
        config: 'access-meeting-config'
      },
      routesRequired: {
        add: 'appMeetingAdd',
        config: 'appMeetingConfigGeneral'
      },
      initUrl: 'meetings',
      dataType: 'meeting'
    };
  },
  methods: {
    sameDate: function sameDate(_ref) {
      var startDateTime = _ref.startDateTime,
          endDateTime = _ref.endDateTime;
      return moment(startDateTime, this.vars.serverDateTimeFormat).format(this.vars.defaultDateFormat) === moment(endDateTime, this.vars.serverDateTimeFormat).format(this.vars.defaultDateFormat);
    },
    shareURL: function shareURL(item) {
      var _this = this;

      var url = window.location.protocol + '//' + window.location.hostname + (window.location.port ? ':' + window.location.port : '');
      url = url + (item.identifier ? "/m/".concat(item.identifier) : "/app/live/meetings/".concat(item.uuid));
      var alertTitle = item.identifier ? "<span class=\"text-nowrap\">".concat($t('meeting.meeting_code'), ":</span> <strong class=\"ml-2 text-wrap-pre-line text-word-break-all\"> ").concat(item.identifier, "</strong>") : null;
      Object(_core_utils_media__WEBPACK_IMPORTED_MODULE_2__["share"])({
        title: $t('meeting.user_inviting_msg', {
          attribute: this.profile ? this.profile.name : 'User'
        }),
        alertTitle: alertTitle,
        alertHtml: "".concat($t('misc.share_alert.text'), "<br>") + "<small class='text-muted'>".concat(url, "</small><br>"),
        url: url
      }, function () {
        _this.$toasted.success($t('meeting.url_has_been_copied'), _this.$toastConfig);
      });
    } // generateMeetingAttributesPopover(rowItem) {
    //     let content = '<ul class="list-group pl-0">'
    //     if(rowItem.accessibleViaLink) {
    //         content += `<li class="list-group-item text-success"><i class="far fa-check-circle fs-1"></i> <span class="ml-2">${$t('meeting.props.accessible_via_link')}</span></li>`
    //     } else {
    //         content += `<li class="list-group-item text-muted"><i class="far fa-times-circle fs-1"></i> <span class="ml-2">${$t('meeting.props.accessible_via_link')}</span></li>`
    //     }
    //     if(rowItem.isPam) {
    //         content += `<li class="list-group-item text-success"><i class="far fa-check-circle fs-1"></i> <span class="ml-2">${$t('meeting.props.is_pam')}</span></li>`
    //     } else {
    //         content += `<li class="list-group-item text-muted"><i class="far fa-times-circle fs-1"></i> <span class="ml-2">${$t('meeting.props.is_pam')}</span></li>`
    //     }
    //     if(rowItem.accessibleToMembers) {
    //         content += `<li class="list-group-item text-success"><i class="far fa-check-circle fs-1"></i> <span class="ml-2">${$t('meeting.props.only_accessible_to_members')}</span></li>`
    //     } else {
    //         content += `<li class="list-group-item text-muted"><i class="far fa-times-circle fs-1"></i> <span class="ml-2">${$t('meeting.props.only_accessible_to_members')}</span></li>`
    //     }
    //     return content
    // }

  },
  mounted: function mounted() {
    this.getInitialData();
  },
  created: function created() {
    if (this.configs && this.configs.meeting && this.configs.meeting.cardLayout) {
      location.reload();
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/app/meeting/index.vue?vue&type=template&id=4bfdbcbe&":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/app/meeting/index.vue?vue&type=template&id=4bfdbcbe& ***!
  \***************************************************************************************************************************************************************************************************************/
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
    { staticClass: "entity-list-container" },
    [
      _c(
        "collapse-transition",
        { attrs: { group: true, duration: 300, tag: "div" } },
        [
          _vm.showFilters
            ? _c("filter-form", {
                key: "filters",
                attrs: {
                  boxed: true,
                  "pre-requisite": _vm.preRequisite,
                  "is-loading": _vm.isLoading
                },
                on: { close: _vm.toggleFilter }
              })
            : _vm._e(),
          _vm._v(" "),
          _c(
            "base-container",
            {
              key: "list",
              staticClass: "p-0  zoom-print-85",
              attrs: {
                boxed: "",
                "with-loader": "",
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
                        filtered: _vm.isFiltered,
                        "add-button-route": "appMeetingAdd",
                        "add-button-permissions": ["create-meeting"],
                        "entity-title": "meeting.meeting",
                        "entities-title": "meeting.meetings",
                        "entity-description": "meeting.module_description"
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
                          "current-page": _vm.entities.meta.currentPage,
                          filters: null
                        },
                        on: {
                          "update:busy": function($event) {
                            _vm.isLoading = $event
                          },
                          "row-dblclicked": function($event) {
                            return _vm.rowClickHandler(
                              { route: "appMeetingView" },
                              $event
                            )
                          }
                        },
                        scopedSlots: _vm._u(
                          [
                            {
                              key: "cell(title)",
                              fn: function(row) {
                                return [
                                  _c(
                                    "router-link",
                                    {
                                      staticClass: "row-link",
                                      attrs: {
                                        to: {
                                          name: "appMeetingView",
                                          params: { uuid: row.item.uuid }
                                        }
                                      }
                                    },
                                    [
                                      _vm._v(
                                        "\n                            " +
                                          _vm._s(row.item.title) +
                                          "\n                        "
                                      )
                                    ]
                                  )
                                ]
                              }
                            },
                            {
                              key: "cell(user)",
                              fn: function(row) {
                                return [
                                  _c("view-user", {
                                    staticClass: "m-0",
                                    attrs: {
                                      value: row.item.user,
                                      "inline-sub": "",
                                      "show-image": false,
                                      "data-classes": "m-0"
                                    }
                                  })
                                ]
                              }
                            },
                            {
                              key: "cell(createdAt)",
                              fn: function(row) {
                                return [
                                  _c("view-date", {
                                    staticClass: "mb-0",
                                    attrs: {
                                      value: row.item.createdAt,
                                      "with-tz": "",
                                      tag: "span",
                                      "data-classes": "text-sm"
                                    }
                                  })
                                ]
                              }
                            },
                            {
                              key: "cell(updatedAt)",
                              fn: function(row) {
                                return [
                                  _c("view-date", {
                                    staticClass: "mb-0",
                                    attrs: {
                                      value: row.item.updatedAt,
                                      "with-tz": "",
                                      tag: "span",
                                      "data-classes": "text-sm"
                                    }
                                  })
                                ]
                              }
                            },
                            {
                              key: "cell(startDateTime)",
                              fn: function(row) {
                                return [
                                  _c("view-date", {
                                    staticClass: "mb-0",
                                    attrs: {
                                      value: row.item.startDateTime,
                                      "with-tz": "",
                                      tag: "span",
                                      "data-classes": "text-sm"
                                    }
                                  })
                                ]
                              }
                            },
                            {
                              key: "cell(endedAt)",
                              fn: function(row) {
                                return [
                                  _c("view-date", {
                                    staticClass: "mb-0",
                                    attrs: {
                                      value: row.item.endedAt,
                                      "with-tz": "",
                                      tag: "span",
                                      "data-classes": "text-sm"
                                    }
                                  })
                                ]
                              }
                            },
                            {
                              key: "cell(period)",
                              fn: function(row) {
                                return [
                                  _c("view-single", {
                                    staticClass: "mb-0",
                                    attrs: {
                                      value: row.item.period,
                                      tag: "span",
                                      "data-classes": "text-sm"
                                    }
                                  })
                                ]
                              }
                            },
                            {
                              key: "cell(type)",
                              fn: function(row) {
                                return [
                                  row.item.type
                                    ? _c(
                                        "badge",
                                        {
                                          staticClass: "mb-0",
                                          attrs: { type: "default" }
                                        },
                                        [_vm._v(_vm._s(row.item.type.name))]
                                      )
                                    : _vm._e()
                                ]
                              }
                            },
                            {
                              key: "cell(category)",
                              fn: function(row) {
                                return [
                                  row.item.category
                                    ? _c(
                                        "badge",
                                        {
                                          staticClass: "mb-0",
                                          attrs: { type: "dark" }
                                        },
                                        [_vm._v(_vm._s(row.item.category.name))]
                                      )
                                    : _vm._e()
                                ]
                              }
                            },
                            {
                              key: "cell(status)",
                              fn: function(row) {
                                return [
                                  row.item.status
                                    ? _c(
                                        "badge",
                                        {
                                          attrs: {
                                            rounded: "",
                                            type:
                                              _vm.vars.colorsForStatus[
                                                "meeting-" + row.item.status
                                              ]
                                          }
                                        },
                                        [_vm._v(_vm._s(row.item.status))]
                                      )
                                    : _vm._e()
                                ]
                              }
                            },
                            {
                              key: "cell(accessibleViaLink)",
                              fn: function(row) {
                                return [
                                  row.item.accessibleViaLink
                                    ? _c(
                                        "span",
                                        {
                                          directives: [
                                            {
                                              name: "b-tooltip",
                                              rawName: "v-b-tooltip.hover.left",
                                              modifiers: {
                                                hover: true,
                                                left: true
                                              }
                                            }
                                          ],
                                          staticClass: "text-success",
                                          attrs: {
                                            title: _vm.$t(
                                              "meeting.props.accessible_via_link"
                                            )
                                          }
                                        },
                                        [
                                          _c("i", {
                                            staticClass: "fas fa-link"
                                          })
                                        ]
                                      )
                                    : _c(
                                        "span",
                                        {
                                          directives: [
                                            {
                                              name: "b-tooltip",
                                              rawName: "v-b-tooltip.hover.left",
                                              modifiers: {
                                                hover: true,
                                                left: true
                                              }
                                            }
                                          ],
                                          staticClass: "text-light",
                                          attrs: {
                                            title: _vm.$t(
                                              "meeting.props.not_accessible_via_link"
                                            )
                                          }
                                        },
                                        [
                                          _c("i", {
                                            staticClass: "fas fa-link"
                                          })
                                        ]
                                      ),
                                  _vm._v(" "),
                                  row.item.isPam
                                    ? _c(
                                        "span",
                                        {
                                          directives: [
                                            {
                                              name: "b-tooltip",
                                              rawName: "v-b-tooltip.hover.left",
                                              modifiers: {
                                                hover: true,
                                                left: true
                                              }
                                            }
                                          ],
                                          staticClass: "ml-3 text-success",
                                          attrs: {
                                            title: _vm.$t(
                                              "meeting.props.is_pam"
                                            )
                                          }
                                        },
                                        [
                                          _c("i", {
                                            staticClass: "fas fa-users"
                                          })
                                        ]
                                      )
                                    : _c(
                                        "span",
                                        {
                                          directives: [
                                            {
                                              name: "b-tooltip",
                                              rawName: "v-b-tooltip.hover.left",
                                              modifiers: {
                                                hover: true,
                                                left: true
                                              }
                                            }
                                          ],
                                          staticClass: "ml-3 text-light",
                                          attrs: {
                                            title: _vm.$t(
                                              "meeting.props.not_is_pam"
                                            )
                                          }
                                        },
                                        [
                                          _c("i", {
                                            staticClass: "fas fa-users"
                                          })
                                        ]
                                      ),
                                  _vm._v(" "),
                                  _vm.allowExtraInput &&
                                  _vm.configs.meeting.enablePaidMeeting
                                    ? [
                                        row.item.isPaid
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
                                                    "meeting.props.is_paid"
                                                  )
                                                }
                                              },
                                              [
                                                _c("i", {
                                                  staticClass:
                                                    "fas fa-dollar-sign"
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
                                                staticClass: "ml-3 text-light",
                                                attrs: {
                                                  title: _vm.$t(
                                                    "meeting.props.not_is_paid"
                                                  )
                                                }
                                              },
                                              [
                                                _c("i", {
                                                  staticClass:
                                                    "fas fa-dollar-sign"
                                                })
                                              ]
                                            )
                                      ]
                                    : _vm._e(),
                                  _vm._v(" "),
                                  _vm.allowExtraInput &&
                                  _vm.configs.membership.enabled
                                    ? [
                                        row.item.accessibleToMembers
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
                                                    "meeting.props.only_accessible_to_members"
                                                  )
                                                }
                                              },
                                              [
                                                _c("i", {
                                                  staticClass: "far fa-id-badge"
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
                                                staticClass: "ml-3 text-light",
                                                attrs: {
                                                  title: _vm.$t(
                                                    "meeting.props.not_only_accessible_to_members"
                                                  )
                                                }
                                              },
                                              [
                                                _c("i", {
                                                  staticClass: "far fa-id-badge"
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
                                  _c(
                                    "table-row-actions",
                                    [
                                      _c(
                                        "router-link",
                                        {
                                          staticClass: "dropdown-item",
                                          attrs: {
                                            to: {
                                              name: "appMeetingView",
                                              params: { uuid: row.item.uuid }
                                            }
                                          }
                                        },
                                        [
                                          _c("i", {
                                            staticClass:
                                              "fas fa-arrow-circle-right"
                                          }),
                                          _vm._v(
                                            " " +
                                              _vm._s(
                                                _vm.$t("global.view", {
                                                  attribute: _vm.$t(
                                                    "meeting.meeting"
                                                  )
                                                })
                                              )
                                          )
                                        ]
                                      ),
                                      _vm._v(" "),
                                      row.item.isPaid && !row.item.hasPaid
                                        ? _c(
                                            "router-link",
                                            {
                                              staticClass: "dropdown-item",
                                              attrs: {
                                                to: {
                                                  name: "appMeetingPayment",
                                                  params: {
                                                    uuid: row.item.uuid
                                                  }
                                                }
                                              }
                                            },
                                            [
                                              _c("i", {
                                                staticClass:
                                                  "far fa-credit-card"
                                              }),
                                              _vm._v(
                                                " " +
                                                  _vm._s(
                                                    _vm.$t(
                                                      "meeting.payment.pay_fee"
                                                    )
                                                  )
                                              )
                                            ]
                                          )
                                        : _vm._e(),
                                      _vm._v(" "),
                                      row.item.isPaid && row.item.hasPaid
                                        ? _c(
                                            "router-link",
                                            {
                                              staticClass: "dropdown-item",
                                              attrs: {
                                                to: {
                                                  name:
                                                    "appMeetingPaymentReceipt",
                                                  params: {
                                                    uuid: row.item.uuid
                                                  }
                                                }
                                              }
                                            },
                                            [
                                              _c("i", {
                                                staticClass: "fas fa-receipt"
                                              }),
                                              _vm._v(
                                                " " +
                                                  _vm._s(
                                                    _vm.$t(
                                                      "meeting.payment.receipt"
                                                    )
                                                  )
                                              )
                                            ]
                                          )
                                        : _vm._e(),
                                      _vm._v(" "),
                                      row.item.hasSnapshots &&
                                      _vm.configs.meeting &&
                                      _vm.configs.meeting.enableSnapshot
                                        ? _c(
                                            "router-link",
                                            {
                                              staticClass: "dropdown-item",
                                              attrs: {
                                                to: {
                                                  name: "appMeetingSnapshots",
                                                  params: {
                                                    uuid: row.item.uuid
                                                  }
                                                }
                                              }
                                            },
                                            [
                                              _c("i", {
                                                staticClass: "fas fa-image"
                                              }),
                                              _vm._v(
                                                " " +
                                                  _vm._s(
                                                    _vm.$t("global.view", {
                                                      attribute: _vm.$t(
                                                        "meeting.snapshots"
                                                      )
                                                    })
                                                  )
                                              )
                                            ]
                                          )
                                        : _vm._e(),
                                      _vm._v(" "),
                                      (row.item.hasChunkRecordings ||
                                        row.item.hasRecordings) &&
                                      _vm.configs.meeting &&
                                      _vm.configs.meeting.enableRecording
                                        ? _c(
                                            "router-link",
                                            {
                                              staticClass: "dropdown-item",
                                              attrs: {
                                                to: {
                                                  name: "appMeetingRecordings",
                                                  params: {
                                                    uuid: row.item.uuid
                                                  }
                                                }
                                              }
                                            },
                                            [
                                              _c("i", {
                                                staticClass:
                                                  "fas fa-photo-video"
                                              }),
                                              _vm._v(
                                                " " +
                                                  _vm._s(
                                                    _vm.$t("global.view", {
                                                      attribute: _vm.$t(
                                                        "meeting.recordings"
                                                      )
                                                    })
                                                  )
                                              )
                                            ]
                                          )
                                        : _vm._e(),
                                      _vm._v(" "),
                                      row.item.status === "scheduled" ||
                                      row.item.status === "live"
                                        ? _c(
                                            "router-link",
                                            {
                                              staticClass:
                                                "dropdown-item bg-primary text-white",
                                              attrs: {
                                                to: {
                                                  name: "liveMeeting",
                                                  params: {
                                                    uuid: row.item.uuid
                                                  }
                                                }
                                              }
                                            },
                                            [
                                              _c("i", {
                                                staticClass:
                                                  "fas fa-sign-in-alt"
                                              }),
                                              _vm._v(
                                                " " +
                                                  _vm._s(
                                                    _vm.$t(
                                                      "meeting.join_meeting"
                                                    )
                                                  )
                                              )
                                            ]
                                          )
                                        : _vm._e(),
                                      _vm._v(" "),
                                      row.item.status === "scheduled" ||
                                      row.item.status === "live"
                                        ? _c(
                                            "a",
                                            {
                                              staticClass: "dropdown-item",
                                              on: {
                                                click: function($event) {
                                                  $event.stopPropagation()
                                                  return _vm.shareURL(row.item)
                                                }
                                              }
                                            },
                                            [
                                              _c("i", {
                                                staticClass: "fas fa-share-alt"
                                              }),
                                              _vm._v(
                                                " " +
                                                  _vm._s(
                                                    _vm.$t("general.share_url")
                                                  )
                                              )
                                            ]
                                          )
                                        : _vm._e(),
                                      _vm._v(" "),
                                      row.item.status === "scheduled" &&
                                      (_vm.hasPermission("create-meeting") ||
                                        row.item.canModerate)
                                        ? _c(
                                            "router-link",
                                            {
                                              staticClass: "dropdown-item",
                                              attrs: {
                                                to: {
                                                  name: "appMeetingEdit",
                                                  params: {
                                                    uuid: row.item.uuid
                                                  }
                                                }
                                              }
                                            },
                                            [
                                              _c("i", {
                                                staticClass: "fas fa-edit"
                                              }),
                                              _vm._v(
                                                " " +
                                                  _vm._s(
                                                    _vm.$t("global.edit", {
                                                      attribute: _vm.$t(
                                                        "meeting.meeting"
                                                      )
                                                    })
                                                  )
                                              )
                                            ]
                                          )
                                        : _vm._e(),
                                      _vm._v(" "),
                                      _vm.hasPermission("create-meeting")
                                        ? _c(
                                            "router-link",
                                            {
                                              staticClass: "dropdown-item",
                                              attrs: {
                                                to: {
                                                  name: "appMeetingDuplicate",
                                                  params: {
                                                    uuid: row.item.uuid
                                                  }
                                                }
                                              }
                                            },
                                            [
                                              _c("i", {
                                                staticClass: "fas fa-copy"
                                              }),
                                              _vm._v(
                                                " " +
                                                  _vm._s(
                                                    _vm.$t("global.duplicate", {
                                                      attribute: _vm.$t(
                                                        "meeting.meeting"
                                                      )
                                                    })
                                                  )
                                              )
                                            ]
                                          )
                                        : _vm._e(),
                                      _vm._v(" "),
                                      row.item.status === "scheduled" &&
                                      _vm.hasPermission("list-meeting") &&
                                        row.item.canModerate
                                        ? _c(
                                            "router-link",
                                            {
                                              staticClass: "dropdown-item",
                                              attrs: {
                                                to: {
                                                  name:
                                                    "appMeetingSingleConfig",
                                                  params: {
                                                    subUuid: row.item.uuid
                                                  }
                                                }
                                              }
                                            },
                                            [
                                              _c("i", {
                                                staticClass: "fas fa-cog"
                                              }),
                                              _vm._v(
                                                " " +
                                                  _vm._s(
                                                    _vm.$t("global.config", {
                                                      attribute: _vm.$t(
                                                        "meeting.meeting"
                                                      )
                                                    })
                                                  )
                                              )
                                            ]
                                          )
                                        : _vm._e(),
                                      _vm._v(" "),
                                      _vm.hasPermission("delete-meeting") &&
                                      (row.item.status === "scheduled" ||
                                        (row.item.status === "cancelled" &&
                                          _vm.configs.meeting &&
                                          _vm.configs.meeting
                                            .allowDeletingCancelledMeetings) ||
                                        (row.item.status === "ended" &&
                                          _vm.configs.meeting &&
                                          _vm.configs.meeting
                                            .allowDeletingEndedMeetings))
                                        ? _c(
                                            "a",
                                            {
                                              staticClass: "dropdown-item",
                                              on: {
                                                click: function($event) {
                                                  $event.stopPropagation()
                                                  return _vm.deleteEntity(
                                                    row.item
                                                  )
                                                }
                                              }
                                            },
                                            [
                                              _c("i", {
                                                staticClass: "fas fa-trash"
                                              }),
                                              _vm._v(
                                                " " +
                                                  _vm._s(
                                                    _vm.$t("global.delete", {
                                                      attribute: _vm.$t(
                                                        "meeting.meeting"
                                                      )
                                                    })
                                                  )
                                              )
                                            ]
                                          )
                                        : _vm._e()
                                    ],
                                    1
                                  )
                                ]
                              }
                            }
                          ],
                          null,
                          false,
                          1749508565
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
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/views/app/meeting/index.vue":
/*!**************************************************!*\
  !*** ./resources/js/views/app/meeting/index.vue ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_vue_vue_type_template_id_4bfdbcbe___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=4bfdbcbe& */ "./resources/js/views/app/meeting/index.vue?vue&type=template&id=4bfdbcbe&");
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ "./resources/js/views/app/meeting/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_4bfdbcbe___WEBPACK_IMPORTED_MODULE_0__["render"],
  _index_vue_vue_type_template_id_4bfdbcbe___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/app/meeting/index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/app/meeting/index.vue?vue&type=script&lang=js&":
/*!***************************************************************************!*\
  !*** ./resources/js/views/app/meeting/index.vue?vue&type=script&lang=js& ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/app/meeting/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/app/meeting/index.vue?vue&type=template&id=4bfdbcbe&":
/*!*********************************************************************************!*\
  !*** ./resources/js/views/app/meeting/index.vue?vue&type=template&id=4bfdbcbe& ***!
  \*********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_4bfdbcbe___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=4bfdbcbe& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/app/meeting/index.vue?vue&type=template&id=4bfdbcbe&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_4bfdbcbe___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_4bfdbcbe___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=index.js.map?id=2069a8972ca582196eb1