(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app/meeting/feed"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/app/meeting/feed.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/app/meeting/feed.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.common.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vue_infinite_scroll__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-infinite-scroll */ "./node_modules/vue-infinite-scroll/vue-infinite-scroll.js");
/* harmony import */ var vue_infinite_scroll__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vue_infinite_scroll__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var vue_masonry__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue-masonry */ "./node_modules/vue-masonry/src/masonry.plugin.js");
/* harmony import */ var _mixins_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mixins/table */ "./resources/js/mixins/table.js");
/* harmony import */ var _filter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./filter */ "./resources/js/views/app/meeting/filter.vue");
/* harmony import */ var _meeting_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./meeting-card */ "./resources/js/views/app/meeting/meeting-card.vue");
/* harmony import */ var _core_utils_media__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @core/utils/media */ "./resources/js/core/utils/media.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



vue__WEBPACK_IMPORTED_MODULE_0___default.a.use(vue_masonry__WEBPACK_IMPORTED_MODULE_2__["VueMasonryPlugin"]);




/* harmony default export */ __webpack_exports__["default"] = ({
  directives: {
    infiniteScroll: vue_infinite_scroll__WEBPACK_IMPORTED_MODULE_1___default.a
  },
  components: {
    FilterForm: _filter__WEBPACK_IMPORTED_MODULE_4__["default"],
    MeetingCard: _meeting_card__WEBPACK_IMPORTED_MODULE_5__["default"]
  },
  "extends": _mixins_table__WEBPACK_IMPORTED_MODULE_3__["default"],
  data: function data() {
    return {
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
      dataType: 'meeting',
      feedTable: true
    };
  },
  methods: {},
  mounted: function mounted() {
    this.getInitialData();
  },
  created: function created() {
    if (!(this.configs && this.configs.meeting && this.configs.meeting.cardLayout)) {
      location.reload();
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/app/meeting/meeting-card.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/app/meeting/meeting-card.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
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

/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    meeting: {
      type: Object,
      required: true
    },
    lift: {
      type: Boolean,
      "default": false
    },
    raise: {
      type: Boolean,
      "default": false
    },
    flex: {
      type: Boolean,
      "default": true
    },
    link: {
      type: [Object, String],
      "default": null
    }
  },
  computed: _objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])('config', ['vars', 'configs'])), {}, {
    computedLink: function computedLink() {
      return this.link ? this.link : this.meetingLink;
    },
    meetingLink: function meetingLink() {
      return {
        name: 'appMeetingView',
        params: {
          uuid: this.meeting.uuid
        }
      };
    },
    computedImage: function computedImage() {
      return this.meeting.cover ? this.meeting.cover : '/images/placeholder-dash.png';
    } // excerpt() {
    //     return formUtil.getExcerpt(this.meeting.agenda, null, 25) + '...'
    // },

  }),
  methods: {}
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/app/meeting/feed.vue?vue&type=template&id=9a7b51c2&":
/*!**************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/app/meeting/feed.vue?vue&type=template&id=9a7b51c2& ***!
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
    {
      directives: [
        {
          name: "infinite-scroll",
          rawName: "v-infinite-scroll",
          value: _vm.getFeed,
          expression: "getFeed"
        }
      ],
      class: [
        "entity-list-container",
        "card-layout-design-" + _vm.configs.meeting.cardLayoutDesign
      ],
      attrs: {
        "infinite-scroll-disabled": _vm.isFetching,
        "infinite-scroll-distance": "200"
      }
    },
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
          _c("animated-loader", {
            key: "loader",
            attrs: {
              "is-loading": _vm.isLoading,
              "loader-color": _vm.vars.loaderColor,
              "overlay-color": "transparent"
            }
          }),
          _vm._v(" "),
          _c(
            "feed-wrapper",
            {
              key: "feed",
              attrs: {
                meta: _vm.feed.meta,
                filtered: _vm.isFiltered,
                "add-button-route": "appMeetingAdd",
                "add-button-permissions": ["create-meeting"],
                "entity-title": "meeting.meeting",
                "entities-title": "meeting.meetings",
                "entity-description": "meeting.module_description"
              }
            },
            [
              _c(
                "div",
                {
                  directives: [{ name: "masonry", rawName: "v-masonry" }],
                  staticClass: "meetings-feed",
                  attrs: {
                    "transition-duration": "0.3s",
                    "item-selector": ".item"
                  }
                },
                [
                  _c(
                    "div",
                    { staticClass: "row" },
                    [
                      _vm._l(_vm.feed.data, function(meeting) {
                        return [
                          _c(
                            "div",
                            {
                              directives: [
                                {
                                  name: "masonry-tile",
                                  rawName: "v-masonry-tile"
                                }
                              ],
                              key: meeting.uuid,
                              staticClass: "col-12 col-md-4 item"
                            },
                            [
                              _c("meeting-card", {
                                attrs: {
                                  meeting: meeting,
                                  flex: false,
                                  raise: true
                                },
                                scopedSlots: _vm._u(
                                  [
                                    {
                                      key: "actions",
                                      fn: function() {
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
                                                      params: {
                                                        uuid: meeting.uuid
                                                      }
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
                                              meeting.hasSnapshots &&
                                              _vm.configs.meeting &&
                                              _vm.configs.meeting.enableSnapshot
                                                ? _c(
                                                    "router-link",
                                                    {
                                                      staticClass:
                                                        "dropdown-item",
                                                      attrs: {
                                                        to: {
                                                          name:
                                                            "appMeetingSnapshots",
                                                          params: {
                                                            uuid: meeting.uuid
                                                          }
                                                        }
                                                      }
                                                    },
                                                    [
                                                      _c("i", {
                                                        staticClass:
                                                          "fas fa-image"
                                                      }),
                                                      _vm._v(
                                                        " " +
                                                          _vm._s(
                                                            _vm.$t(
                                                              "global.view",
                                                              {
                                                                attribute: _vm.$t(
                                                                  "meeting.snapshots"
                                                                )
                                                              }
                                                            )
                                                          )
                                                      )
                                                    ]
                                                  )
                                                : _vm._e(),
                                              _vm._v(" "),
                                              (meeting.hasChunkRecordings ||
                                                meeting.hasRecordings) &&
                                              _vm.configs.meeting &&
                                              _vm.configs.meeting
                                                .enableRecording
                                                ? _c(
                                                    "router-link",
                                                    {
                                                      staticClass:
                                                        "dropdown-item",
                                                      attrs: {
                                                        to: {
                                                          name:
                                                            "appMeetingRecordings",
                                                          params: {
                                                            uuid: meeting.uuid
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
                                                            _vm.$t(
                                                              "global.view",
                                                              {
                                                                attribute: _vm.$t(
                                                                  "meeting.recordings"
                                                                )
                                                              }
                                                            )
                                                          )
                                                      )
                                                    ]
                                                  )
                                                : _vm._e(),
                                              _vm._v(" "),
                                              meeting.status === "scheduled" ||
                                              meeting.status === "live"
                                                ? _c(
                                                    "router-link",
                                                    {
                                                      staticClass:
                                                        "dropdown-item bg-primary text-white",
                                                      attrs: {
                                                        to: {
                                                          name: "liveMeeting",
                                                          params: {
                                                            uuid: meeting.uuid
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
                                              meeting.status === "scheduled" ||
                                              meeting.status === "live"
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
                                                          return _vm.shareURL(
                                                            meeting
                                                          )
                                                        }
                                                      }
                                                    },
                                                    [
                                                      _c("i", {
                                                        staticClass:
                                                          "fas fa-share-alt"
                                                      }),
                                                      _vm._v(
                                                        " " +
                                                          _vm._s(
                                                            _vm.$t(
                                                              "general.share_url"
                                                            )
                                                          )
                                                      )
                                                    ]
                                                  )
                                                : _vm._e(),
                                              _vm._v(" "),
                                              meeting.status === "scheduled" &&
                                              (_vm.hasPermission(
                                                "create-meeting"
                                              ) ||
                                                meeting.canModerate)
                                                ? _c(
                                                    "router-link",
                                                    {
                                                      staticClass:
                                                        "dropdown-item",
                                                      attrs: {
                                                        to: {
                                                          name:
                                                            "appMeetingEdit",
                                                          params: {
                                                            uuid: meeting.uuid
                                                          }
                                                        }
                                                      }
                                                    },
                                                    [
                                                      _c("i", {
                                                        staticClass:
                                                          "fas fa-edit"
                                                      }),
                                                      _vm._v(
                                                        " " +
                                                          _vm._s(
                                                            _vm.$t(
                                                              "global.edit",
                                                              {
                                                                attribute: _vm.$t(
                                                                  "meeting.meeting"
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
                                                    "router-link",
                                                    {
                                                      staticClass:
                                                        "dropdown-item",
                                                      attrs: {
                                                        to: {
                                                          name:
                                                            "appMeetingDuplicate",
                                                          params: {
                                                            uuid: meeting.uuid
                                                          }
                                                        }
                                                      }
                                                    },
                                                    [
                                                      _c("i", {
                                                        staticClass:
                                                          "fas fa-copy"
                                                      }),
                                                      _vm._v(
                                                        " " +
                                                          _vm._s(
                                                            _vm.$t(
                                                              "global.duplicate",
                                                              {
                                                                attribute: _vm.$t(
                                                                  "meeting.meeting"
                                                                )
                                                              }
                                                            )
                                                          )
                                                      )
                                                    ]
                                                  )
                                                : _vm._e(),
                                              _vm._v(" "),
                                              meeting.status === "scheduled" &&
                                              _vm.hasPermission(
                                                "list-meeting"
                                              ) &&
                                                meeting.canModerate
                                                ? _c(
                                                    "router-link",
                                                    {
                                                      staticClass:
                                                        "dropdown-item",
                                                      attrs: {
                                                        to: {
                                                          name:
                                                            "appMeetingSingleConfig",
                                                          params: {
                                                            subUuid:
                                                              meeting.uuid
                                                          }
                                                        }
                                                      }
                                                    },
                                                    [
                                                      _c("i", {
                                                        staticClass:
                                                          "fas fa-cog"
                                                      }),
                                                      _vm._v(
                                                        " " +
                                                          _vm._s(
                                                            _vm.$t(
                                                              "global.config",
                                                              {
                                                                attribute: _vm.$t(
                                                                  "meeting.meeting"
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
                                                "delete-meeting"
                                              ) &&
                                              (meeting.status === "scheduled" ||
                                                (meeting.status ===
                                                  "cancelled" &&
                                                  _vm.configs.meeting &&
                                                  _vm.configs.meeting
                                                    .allowDeletingCancelledMeetings) ||
                                                (meeting.status === "ended" &&
                                                  _vm.configs.meeting &&
                                                  _vm.configs.meeting
                                                    .allowDeletingEndedMeetings))
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
                                                            meeting
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
                                                                  "meeting.meeting"
                                                                )
                                                              }
                                                            )
                                                          )
                                                      )
                                                    ]
                                                  )
                                                : _vm._e()
                                            ],
                                            1
                                          )
                                        ]
                                      },
                                      proxy: true
                                    }
                                  ],
                                  null,
                                  true
                                )
                              })
                            ],
                            1
                          )
                        ]
                      })
                    ],
                    2
                  )
                ]
              ),
              _vm._v(" "),
              _vm.isFetching
                ? _c(
                    "div",
                    { staticClass: "d-flex justify-content-center" },
                    [
                      _c("animated-loader", {
                        key: "loader",
                        attrs: {
                          "is-loading": _vm.isFetching,
                          size: "inline",
                          "loader-color": _vm.vars.loaderColor,
                          "overlay-color": "transparent"
                        }
                      })
                    ],
                    1
                  )
                : _vm._e(),
              _vm._v(" "),
              _vm.noMoreData
                ? _c("h5", { staticClass: "text-center my-4" }, [
                    _vm._v(_vm._s(_vm.$t("general.thats_all_for_now")))
                  ])
                : _vm._e()
            ]
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/app/meeting/meeting-card.vue?vue&type=template&id=6d3275e3&":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/app/meeting/meeting-card.vue?vue&type=template&id=6d3275e3& ***!
  \**********************************************************************************************************************************************************************************************************************/
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
    { staticClass: "post-item meeting-item", class: { "d-flex": _vm.flex } },
    [
      _c("card", {
        attrs: {
          shadow: "",
          lift: _vm.lift,
          raise: _vm.raise,
          "no-body": "",
          "show-footer": ""
        },
        scopedSlots: _vm._u(
          [
            {
              key: "title",
              fn: function() {
                return [
                  _c("router-link", { attrs: { to: _vm.computedLink } }, [
                    _c("h6", [_vm._v(_vm._s(_vm.meeting.title))])
                  ])
                ]
              },
              proxy: true
            },
            {
              key: "actions",
              fn: function() {
                return [_vm._t("actions")]
              },
              proxy: true
            },
            {
              key: "bottomImage",
              fn: function() {
                return [
                  _c(
                    "router-link",
                    {
                      staticClass: "meeting-image",
                      attrs: { to: _vm.computedLink }
                    },
                    [
                      _c("img", {
                        staticClass: "card-img-bottom",
                        attrs: {
                          src: _vm.computedImage,
                          alt: _vm.meeting.title
                        }
                      })
                    ]
                  )
                ]
              },
              proxy: true
            },
            _vm.meeting.agenda
              ? {
                  key: "footer",
                  fn: function() {
                    return [
                      _c(
                        "div",
                        { staticClass: "meeting-badges" },
                        [
                          _c("badge", { attrs: { type: "dark" } }, [
                            _vm._v(_vm._s(_vm.meeting.type.name))
                          ]),
                          _vm._v(" "),
                          _c("badge", { attrs: { type: "dark" } }, [
                            _vm._v(_vm._s(_vm.meeting.category.name))
                          ])
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "d-flex justify-content-between" },
                        [
                          _c(
                            "div",
                            [
                              _c("view-date", {
                                staticClass: "meeting-date mb-0",
                                attrs: {
                                  prefix: _vm.$t("meeting.props.scheduled_on"),
                                  value: _vm.meeting.startDateTime,
                                  "with-tz": "",
                                  tag: "span",
                                  "data-classes": "text-sm",
                                  "prefix-classes": "text-sm"
                                }
                              })
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "badge",
                            {
                              attrs: {
                                rounded: "",
                                type:
                                  _vm.vars.colorsForStatus[
                                    "meeting-" + _vm.meeting.status
                                  ]
                              }
                            },
                            [_vm._v(_vm._s(_vm.meeting.status))]
                          )
                        ],
                        1
                      )
                    ]
                  },
                  proxy: true
                }
              : null
          ],
          null,
          true
        )
      })
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/views/app/meeting/feed.vue":
/*!*************************************************!*\
  !*** ./resources/js/views/app/meeting/feed.vue ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _feed_vue_vue_type_template_id_9a7b51c2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./feed.vue?vue&type=template&id=9a7b51c2& */ "./resources/js/views/app/meeting/feed.vue?vue&type=template&id=9a7b51c2&");
/* harmony import */ var _feed_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./feed.vue?vue&type=script&lang=js& */ "./resources/js/views/app/meeting/feed.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _feed_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _feed_vue_vue_type_template_id_9a7b51c2___WEBPACK_IMPORTED_MODULE_0__["render"],
  _feed_vue_vue_type_template_id_9a7b51c2___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/app/meeting/feed.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/app/meeting/feed.vue?vue&type=script&lang=js&":
/*!**************************************************************************!*\
  !*** ./resources/js/views/app/meeting/feed.vue?vue&type=script&lang=js& ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_feed_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./feed.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/app/meeting/feed.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_feed_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/app/meeting/feed.vue?vue&type=template&id=9a7b51c2&":
/*!********************************************************************************!*\
  !*** ./resources/js/views/app/meeting/feed.vue?vue&type=template&id=9a7b51c2& ***!
  \********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_feed_vue_vue_type_template_id_9a7b51c2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./feed.vue?vue&type=template&id=9a7b51c2& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/app/meeting/feed.vue?vue&type=template&id=9a7b51c2&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_feed_vue_vue_type_template_id_9a7b51c2___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_feed_vue_vue_type_template_id_9a7b51c2___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/views/app/meeting/meeting-card.vue":
/*!*********************************************************!*\
  !*** ./resources/js/views/app/meeting/meeting-card.vue ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _meeting_card_vue_vue_type_template_id_6d3275e3___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./meeting-card.vue?vue&type=template&id=6d3275e3& */ "./resources/js/views/app/meeting/meeting-card.vue?vue&type=template&id=6d3275e3&");
/* harmony import */ var _meeting_card_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./meeting-card.vue?vue&type=script&lang=js& */ "./resources/js/views/app/meeting/meeting-card.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _meeting_card_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _meeting_card_vue_vue_type_template_id_6d3275e3___WEBPACK_IMPORTED_MODULE_0__["render"],
  _meeting_card_vue_vue_type_template_id_6d3275e3___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/app/meeting/meeting-card.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/app/meeting/meeting-card.vue?vue&type=script&lang=js&":
/*!**********************************************************************************!*\
  !*** ./resources/js/views/app/meeting/meeting-card.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_meeting_card_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./meeting-card.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/app/meeting/meeting-card.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_meeting_card_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/app/meeting/meeting-card.vue?vue&type=template&id=6d3275e3&":
/*!****************************************************************************************!*\
  !*** ./resources/js/views/app/meeting/meeting-card.vue?vue&type=template&id=6d3275e3& ***!
  \****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_meeting_card_vue_vue_type_template_id_6d3275e3___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./meeting-card.vue?vue&type=template&id=6d3275e3& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/app/meeting/meeting-card.vue?vue&type=template&id=6d3275e3&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_meeting_card_vue_vue_type_template_id_6d3275e3___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_meeting_card_vue_vue_type_template_id_6d3275e3___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=feed.js.map?id=efc403f9351c03eb6724