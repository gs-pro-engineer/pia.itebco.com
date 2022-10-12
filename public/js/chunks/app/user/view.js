(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app/user/view"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ProfilePage.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/ProfilePage.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _components_ProfilePageSidebox__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @components/ProfilePageSidebox */ "./resources/js/components/ProfilePageSidebox.vue");
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


/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    ProfilePageSidebox: _components_ProfilePageSidebox__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  props: {
    isLoading: {
      type: Boolean,
      "default": false
    },
    loaderColor: {
      type: String,
      "default": '#000000'
    },
    innerSidebarBoxClasses: {
      type: String,
      "default": 'p-0'
    }
  },
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])('config', ['vars']))
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ProfilePageSidebox.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/ProfilePageSidebox.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'profile-page-sidebox',
  props: {
    isLoading: {
      type: Boolean,
      "default": false
    },
    minHeight: {
      type: Boolean,
      "default": true
    },
    overflowHidden: {
      type: Boolean,
      "default": true
    },
    loaderColor: {
      type: String,
      "default": '#000000'
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/app/user/view.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/app/user/view.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _mixins_view__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @mixins/view */ "./resources/js/mixins/view.js");
/* harmony import */ var _components_ProfilePage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @components/ProfilePage */ "./resources/js/components/ProfilePage.vue");
/* harmony import */ var _components_ProfilePageSidebox__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @components/ProfilePageSidebox */ "./resources/js/components/ProfilePageSidebox.vue");
/* harmony import */ var _mixins_header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mixins/header */ "./resources/js/mixins/header.js");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
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





/* harmony default export */ __webpack_exports__["default"] = ({
  "extends": _mixins_view__WEBPACK_IMPORTED_MODULE_0__["default"],
  components: {
    ProfilePage: _components_ProfilePage__WEBPACK_IMPORTED_MODULE_1__["default"],
    ProfilePageSidebox: _components_ProfilePageSidebox__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  data: function data() {
    return {
      initUrl: "users",
      dataTitle: $t("user.user"),
      fallBackRoute: "appUserList",
      permissionsRequired: {
        add: "create-user",
        edit: "edit-user"
      },
      routesRequired: {
        add: "appUserAdd",
        edit: "appUserEdit"
      }
    };
  },
  computed: _objectSpread(_objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_4__["mapGetters"])("config", ["vars"])), Object(vuex__WEBPACK_IMPORTED_MODULE_4__["mapGetters"])("user", ["hasPermission", "liveUsers"])), {}, {
    liveUser: function liveUser() {
      var _this = this;

      return this.value && this.liveUsers.find(function (u) {
        return u.uuid === _this.uuid;
      });
    },
    isOnline: function isOnline() {
      return !!this.liveUser;
    }
  }),
  methods: {
    changeStatus: function changeStatus(status) {
      var _this2 = this;

      formUtil.confirmAction().then(function (result) {
        if (result.value) {
          _this2.isLoading = true;
          var data = {
            status: status
          };

          _this2.Custom({
            url: "/".concat(_this2.initUrl, "/").concat(_this2.uuid, "/status"),
            method: "post",
            data: data
          }).then(function (response) {
            _this2.isLoading = false;

            _this2.getInitialData();
          })["catch"](function (error) {
            _this2.isLoading = false;
            formUtil.handleErrors(error);
          });
        } else {
          result.dismiss === Swal.DismissReason.cancel;
        }
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ProfilePage.vue?vue&type=template&id=21d2b2bd&":
/*!**************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/ProfilePage.vue?vue&type=template&id=21d2b2bd& ***!
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
    { staticClass: "inner-sidebar-layout-wrapper", attrs: { id: "printable" } },
    [
      _c("div", { staticClass: "inner-sidebar-layout" }, [
        _c(
          "div",
          { staticClass: "inner-sidebar" },
          [
            _c(
              "profile-page-sidebox",
              {
                class: ["p-0", _vm.innerSidebarBoxClasses],
                attrs: {
                  "is-loading": _vm.isLoading,
                  "loader-color": _vm.vars.colors.white
                }
              },
              [_vm._t("sidebarMainContent")],
              2
            ),
            _vm._v(" "),
            _vm._t("sidebarSubContent")
          ],
          2
        ),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "inner-content-wrapper" },
          [_vm._t("mainContent")],
          2
        )
      ]),
      _vm._v(" "),
      _vm._t("subContent")
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ProfilePageSidebox.vue?vue&type=template&id=196539c7&":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/ProfilePageSidebox.vue?vue&type=template&id=196539c7& ***!
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
      class: [
        "profile-sidebar-wrapper",
        { "overflow-hidden": _vm.overflowHidden }
      ],
      attrs: { boxed: "", "min-height": _vm.minHeight }
    },
    [
      _c("animated-loader", {
        attrs: {
          "is-loading": _vm.isLoading,
          "loader-color": _vm.loaderColor,
          "overlay-color": "dark"
        }
      }),
      _vm._v(" "),
      _vm._t("default")
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/app/user/view.vue?vue&type=template&id=0036cfe8&":
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/app/user/view.vue?vue&type=template&id=0036cfe8& ***!
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
  return _c("profile-page", {
    attrs: {
      "is-loading": _vm.isLoading,
      "loader-color": _vm.vars.loaderColor,
      "inner-sidebar-box-classes": "h-100"
    },
    scopedSlots: _vm._u([
      {
        key: "sidebarMainContent",
        fn: function() {
          return [
            _vm.entity
              ? _c("profile-card", {
                  attrs: {
                    name: _vm.entity.profile.name,
                    "sub-heading": _vm.entity.username || "-",
                    gender: _vm.entity.profile.gender,
                    image: _vm.entity.profile.avatar,
                    "cover-image": _vm.entity.profile.cover,
                    age: _vm.entity.profile.age,
                    language: _vm.entity.profile.language,
                    "data-card-color": "whitish",
                    "user-status": _vm.isOnline,
                    user: _vm.entity,
                    horizontal: false
                  }
                })
              : _vm._e()
          ]
        },
        proxy: true
      },
      {
        key: "mainContent",
        fn: function() {
          return [
            _c(
              "base-container",
              {
                attrs: {
                  boxed: "",
                  "with-loader": "",
                  "has-footer": "",
                  "min-height": "full",
                  "is-loading": _vm.isLoading,
                  "loader-color": _vm.vars.loaderColor
                }
              },
              [
                _vm.entity
                  ? [
                      _c("div", { staticClass: "row" }, [
                        _c(
                          "div",
                          { staticClass: "col-12 col-md-6 mb-3" },
                          [
                            _c("view-single", {
                              attrs: {
                                label: _vm.$t("user.props.name"),
                                value: _vm.entity.profile.name
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
                                label: _vm.$t("user.props.gender"),
                                value: _vm.entity.profile.gender,
                                showIfExists: "name"
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
                                label: _vm.$t("user.props.email"),
                                value: _vm.entity.email
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
                            _c("view-date", {
                              attrs: {
                                label: _vm.$t("user.props.birth_date"),
                                value: _vm.entity.profile.birthDate
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
                                label: _vm.$t("user.props.language"),
                                value: _vm.entity.profile.language,
                                showIfExists: "name"
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
                                label: _vm.$t("config.role.role"),
                                value: _vm.entity.role,
                                "show-if-exists": "name"
                              }
                            })
                          ],
                          1
                        )
                      ])
                    ]
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
                          _vm._v(
                            "\n            " + _vm._s(_vm.$t("general.back"))
                          )
                        ]
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _vm.hasPermission("edit-user")
                    ? _c(
                        "div",
                        { staticClass: "right-side" },
                        [
                          _vm.entity
                            ? [
                                _vm.entity.status === "activated"
                                  ? _c(
                                      "base-button",
                                      {
                                        attrs: {
                                          type: "button",
                                          design: "danger"
                                        },
                                        on: {
                                          click: function($event) {
                                            return _vm.changeStatus("banned")
                                          }
                                        }
                                      },
                                      [
                                        _vm._v(
                                          _vm._s(_vm.$t("user.user_action_ban"))
                                        )
                                      ]
                                    )
                                  : _vm._e(),
                                _vm._v(" "),
                                _vm.entity.status === "banned"
                                  ? _c(
                                      "base-button",
                                      {
                                        attrs: {
                                          type: "button",
                                          design: "success"
                                        },
                                        on: {
                                          click: function($event) {
                                            return _vm.changeStatus("activated")
                                          }
                                        }
                                      },
                                      [
                                        _vm._v(
                                          _vm._s(
                                            _vm.$t("user.user_action_activate")
                                          )
                                        )
                                      ]
                                    )
                                  : _vm._e(),
                                _vm._v(" "),
                                _vm.entity.status === "pending_activation"
                                  ? _c(
                                      "base-button",
                                      {
                                        attrs: {
                                          type: "button",
                                          design: "success"
                                        },
                                        on: {
                                          click: function($event) {
                                            return _vm.changeStatus("activated")
                                          }
                                        }
                                      },
                                      [
                                        _vm._v(
                                          _vm._s(
                                            _vm.$t("user.user_action_approve")
                                          )
                                        )
                                      ]
                                    )
                                  : _vm._e(),
                                _vm._v(" "),
                                _vm.entity.status === "pending_approval"
                                  ? _c(
                                      "base-button",
                                      {
                                        attrs: {
                                          type: "button",
                                          design: "success"
                                        },
                                        on: {
                                          click: function($event) {
                                            return _vm.changeStatus("activated")
                                          }
                                        }
                                      },
                                      [
                                        _vm._v(
                                          _vm._s(
                                            _vm.$t("user.user_action_approve")
                                          )
                                        )
                                      ]
                                    )
                                  : _vm._e(),
                                _vm._v(" "),
                                _vm.entity.status === "pending_approval"
                                  ? _c(
                                      "base-button",
                                      {
                                        attrs: {
                                          type: "button",
                                          design: "warning"
                                        },
                                        on: {
                                          click: function($event) {
                                            return _vm.changeStatus(
                                              "disapproved"
                                            )
                                          }
                                        }
                                      },
                                      [
                                        _vm._v(
                                          _vm._s(
                                            _vm.$t(
                                              "user.user_action_disapprove"
                                            )
                                          )
                                        )
                                      ]
                                    )
                                  : _vm._e()
                              ]
                            : _vm._e()
                        ],
                        2
                      )
                    : _vm._e()
                ])
              ],
              2
            )
          ]
        },
        proxy: true
      }
    ])
  })
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/ProfilePage.vue":
/*!*************************************************!*\
  !*** ./resources/js/components/ProfilePage.vue ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ProfilePage_vue_vue_type_template_id_21d2b2bd___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ProfilePage.vue?vue&type=template&id=21d2b2bd& */ "./resources/js/components/ProfilePage.vue?vue&type=template&id=21d2b2bd&");
/* harmony import */ var _ProfilePage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ProfilePage.vue?vue&type=script&lang=js& */ "./resources/js/components/ProfilePage.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ProfilePage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ProfilePage_vue_vue_type_template_id_21d2b2bd___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ProfilePage_vue_vue_type_template_id_21d2b2bd___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/ProfilePage.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/ProfilePage.vue?vue&type=script&lang=js&":
/*!**************************************************************************!*\
  !*** ./resources/js/components/ProfilePage.vue?vue&type=script&lang=js& ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProfilePage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./ProfilePage.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ProfilePage.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProfilePage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/ProfilePage.vue?vue&type=template&id=21d2b2bd&":
/*!********************************************************************************!*\
  !*** ./resources/js/components/ProfilePage.vue?vue&type=template&id=21d2b2bd& ***!
  \********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProfilePage_vue_vue_type_template_id_21d2b2bd___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./ProfilePage.vue?vue&type=template&id=21d2b2bd& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ProfilePage.vue?vue&type=template&id=21d2b2bd&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProfilePage_vue_vue_type_template_id_21d2b2bd___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProfilePage_vue_vue_type_template_id_21d2b2bd___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/ProfilePageSidebox.vue":
/*!********************************************************!*\
  !*** ./resources/js/components/ProfilePageSidebox.vue ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ProfilePageSidebox_vue_vue_type_template_id_196539c7___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ProfilePageSidebox.vue?vue&type=template&id=196539c7& */ "./resources/js/components/ProfilePageSidebox.vue?vue&type=template&id=196539c7&");
/* harmony import */ var _ProfilePageSidebox_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ProfilePageSidebox.vue?vue&type=script&lang=js& */ "./resources/js/components/ProfilePageSidebox.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ProfilePageSidebox_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ProfilePageSidebox_vue_vue_type_template_id_196539c7___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ProfilePageSidebox_vue_vue_type_template_id_196539c7___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/ProfilePageSidebox.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/ProfilePageSidebox.vue?vue&type=script&lang=js&":
/*!*********************************************************************************!*\
  !*** ./resources/js/components/ProfilePageSidebox.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProfilePageSidebox_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./ProfilePageSidebox.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ProfilePageSidebox.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProfilePageSidebox_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/ProfilePageSidebox.vue?vue&type=template&id=196539c7&":
/*!***************************************************************************************!*\
  !*** ./resources/js/components/ProfilePageSidebox.vue?vue&type=template&id=196539c7& ***!
  \***************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProfilePageSidebox_vue_vue_type_template_id_196539c7___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./ProfilePageSidebox.vue?vue&type=template&id=196539c7& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ProfilePageSidebox.vue?vue&type=template&id=196539c7&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProfilePageSidebox_vue_vue_type_template_id_196539c7___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProfilePageSidebox_vue_vue_type_template_id_196539c7___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/views/app/user/view.vue":
/*!**********************************************!*\
  !*** ./resources/js/views/app/user/view.vue ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _view_vue_vue_type_template_id_0036cfe8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./view.vue?vue&type=template&id=0036cfe8& */ "./resources/js/views/app/user/view.vue?vue&type=template&id=0036cfe8&");
/* harmony import */ var _view_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./view.vue?vue&type=script&lang=js& */ "./resources/js/views/app/user/view.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _view_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _view_vue_vue_type_template_id_0036cfe8___WEBPACK_IMPORTED_MODULE_0__["render"],
  _view_vue_vue_type_template_id_0036cfe8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/app/user/view.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/app/user/view.vue?vue&type=script&lang=js&":
/*!***********************************************************************!*\
  !*** ./resources/js/views/app/user/view.vue?vue&type=script&lang=js& ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_view_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./view.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/app/user/view.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_view_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/app/user/view.vue?vue&type=template&id=0036cfe8&":
/*!*****************************************************************************!*\
  !*** ./resources/js/views/app/user/view.vue?vue&type=template&id=0036cfe8& ***!
  \*****************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_view_vue_vue_type_template_id_0036cfe8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./view.vue?vue&type=template&id=0036cfe8& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/app/user/view.vue?vue&type=template&id=0036cfe8&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_view_vue_vue_type_template_id_0036cfe8___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_view_vue_vue_type_template_id_0036cfe8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=view.js.map?id=4b410d4619350ef54bf6