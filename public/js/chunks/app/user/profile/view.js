(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app/user/profile/view"],{

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

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/app/user/profile/view.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/app/user/profile/view.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_ProfilePage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @components/ProfilePage */ "./resources/js/components/ProfilePage.vue");
/* harmony import */ var _components_ProfilePageSidebox__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @components/ProfilePageSidebox */ "./resources/js/components/ProfilePageSidebox.vue");
/* harmony import */ var _mixins_header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mixins/header */ "./resources/js/mixins/header.js");
/* harmony import */ var _js_helpers_transformers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @js/helpers/transformers */ "./resources/js/helpers/transformers.js");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _js_event_bus__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @js/event-bus */ "./resources/js/event-bus.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }



function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

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






/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    ProfilePage: _components_ProfilePage__WEBPACK_IMPORTED_MODULE_1__["default"],
    ProfilePageSidebox: _components_ProfilePageSidebox__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  data: function data() {
    return {
      entity: null,
      isLoading: false,
      initUrl: "users",
      dataTitle: $t("user.user"),
      fallBackRoute: "appUserList",
      headerButtons: null,
      headerLinks: null
    };
  },
  computed: _objectSpread(_objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_5__["mapGetters"])("config", ["vars"])), Object(vuex__WEBPACK_IMPORTED_MODULE_5__["mapGetters"])("user", ["uuid", "hasPermission", "liveUsers"])), {}, {
    liveUser: function liveUser() {
      var _this = this;

      return this.value && this.liveUsers.find(function (u) {
        return u.uuid === _this.value.uuid;
      });
    },
    isOnline: function isOnline() {
      return !!this.liveUser;
    }
  }),
  methods: _objectSpread(_objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_5__["mapActions"])("common", ["Init", "Get", "Custom", "SetPageHeader"])), Object(vuex__WEBPACK_IMPORTED_MODULE_5__["mapActions"])("config", ["SetUiConfig", "SetConfig"])), {}, {
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
    },
    setEntityData: function setEntityData(response) {
      if (this.entityKey && response.hasOwnProperty(this.entityKey)) {
        this.entity = response[this.entityKey];
      } else {
        this.entity = response;
      }
    },
    getInitialData: function getInitialData() {
      var _this3 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _this3.isLoading = true;
                _context.prev = 1;
                _context.next = 4;
                return _this3.Get({
                  uuid: _this3.uuid
                });

              case 4:
                response = _context.sent;

                _this3.setEntityData(response);

                _this3.isLoading = false;
                return _context.abrupt("return", response);

              case 10:
                _context.prev = 10;
                _context.t0 = _context["catch"](1);
                _this3.isLoading = false;
                formUtil.handleErrors(_context.t0);

                _this3.$router.push({
                  name: _this3.fallBackRoute
                });

              case 15:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[1, 10]]);
      }))();
    },
    getHeaderOptions: function getHeaderOptions() {
      var buttons = [];

      if (this.routesRequired && this.routesRequired.add) {
        if (_typeof(this.permissionsRequired) === "object" && this.permissionsRequired !== null && this.permissionsRequired.add) {
          buttons.push(_mixins_header__WEBPACK_IMPORTED_MODULE_3__["addButton"](this.routesRequired.add, this.permissionsRequired.add));
        } else if (this.permissionsRequired) {
          buttons.push(_mixins_header__WEBPACK_IMPORTED_MODULE_3__["addButton"](this.routesRequired.add, this.permissionsRequired));
        }
      }

      if (this.headerButtons) {
        buttons = buttons.concat(this.headerButtons);
      }

      var links = [];
      links.push(_mixins_header__WEBPACK_IMPORTED_MODULE_3__["printOption"]());
      links.push(_mixins_header__WEBPACK_IMPORTED_MODULE_3__["exportPdfOption"]());

      if (this.headerLinks) {
        links = links.concat(this.headerLinks);
      }

      return {
        hideLinks: this.hideHeaderLinks || false,
        buttons: buttons,
        links: links,
        title: this.pageTitle || "",
        subTitle: this.pageTitle ? this.subTitle || "" : ""
      };
    },
    getKeyBindingOptions: function getKeyBindingOptions() {
      var opts = _objectSpread({}, _mixins_header__WEBPACK_IMPORTED_MODULE_3__["commonKeyBindings"]);

      if (this.routesRequired && this.routesRequired.add) {
        opts["key_a"] = this.routesRequired.add;
      }

      if (this.routesRequired && this.routesRequired.edit) {
        opts["key_e"] = this.routesRequired.edit;
      }

      return opts;
    },
    applyPageHeader: function applyPageHeader() {
      var pageHeaderOptions = Object.assign({}, this.getHeaderOptions(), this.header || {});
      var keyBindings = Object.assign({}, this.getKeyBindingOptions(), this.keyBindings || {});
      this.SetPageHeader(pageHeaderOptions);
      this.SetConfig({
        keyBindings: keyBindings
      });
    },
    "export": function _export(options) {
      var _this4 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
        var printTitle, printPreview;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _this4.isLoading = true;

                try {
                  printTitle = "Printing ".concat(_this4.dataTitle || "");

                  if (_this4.printTitle) {
                    printTitle = _this4.printTitle;
                  }

                  printPreview = _this4.configs.system.printPreview;

                  _this4.$printComponent("printable", {
                    title: printTitle,
                    autoPrint: !printPreview,
                    autoCloseAfterPrint: !printPreview
                  });
                } catch (e) {}

                _this4.isLoading = false;

              case 3:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }))();
    },
    doInit: function doInit() {
      this.Init({
        url: this.initUrl
      });
      this.getInitialData();
      this.applyPageHeader();
    }
  }),
  mounted: function mounted() {
    _js_event_bus__WEBPACK_IMPORTED_MODULE_6__["default"].$off("EXPORT", this["export"]);
    _js_event_bus__WEBPACK_IMPORTED_MODULE_6__["default"].$on("EXPORT", this["export"]);
    this.doInit();
  },
  destroyed: function destroyed() {
    _js_event_bus__WEBPACK_IMPORTED_MODULE_6__["default"].$off("EXPORT", this["export"]);
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/app/user/profile/view.vue?vue&type=template&id=0515029c&":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/app/user/profile/view.vue?vue&type=template&id=0515029c& ***!
  \*******************************************************************************************************************************************************************************************************************/
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
                    horizontal: false,
                    "edit-image": ""
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
                            _c("view-single", {
                              attrs: {
                                label: _vm.$t("user.props.birth_date"),
                                value: _vm._f("moment")(
                                  _vm.entity.profile.birthDate,
                                  _vm.vars.defaultDateFormat
                                )
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
                  _c(
                    "div",
                    { staticClass: "right-side" },
                    [
                      _c(
                        "base-button",
                        {
                          attrs: { type: "button", design: "dark" },
                          on: {
                            click: function($event) {
                              $event.stopPropagation()
                              return _vm.$router.push({
                                name: "appProfileViewImage",
                                params: { uuid: _vm.entity.uuid }
                              })
                            }
                          }
                        },
                        [
                          _c("i", { staticClass: "fas fa-image" }),
                          _vm._v(
                            "\n            " +
                              _vm._s(
                                _vm.$t("global.edit", {
                                  attribute: _vm.$t("user.props.image")
                                })
                              )
                          )
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "base-button",
                        {
                          attrs: { type: "button", design: "primary" },
                          on: {
                            click: function($event) {
                              $event.stopPropagation()
                              return _vm.$router.push({
                                name: "appProfileEdit",
                                params: { uuid: _vm.entity.uuid }
                              })
                            }
                          }
                        },
                        [
                          _c("i", { staticClass: "fas fa-edit" }),
                          _vm._v(
                            "\n            " +
                              _vm._s(
                                _vm.$t("global.edit", {
                                  attribute: _vm.$t("user.user")
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

/***/ "./resources/js/helpers/transformers.js":
/*!**********************************************!*\
  !*** ./resources/js/helpers/transformers.js ***!
  \**********************************************/
/*! exports provided: arrayOfObjects, uppercase, capitalize, lowercase, objectWithName, contact, contactWithAlias, contactWithAssociation, user, employee, employeeWithAlias, getRegion, percent, date, datetime, truncateString, limitWords, badgeStatus, badgeStatusYesNo, badgeStatusLabel, badgeStatusCompleted, currency, getCurrencyDescription */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "arrayOfObjects", function() { return arrayOfObjects; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "uppercase", function() { return uppercase; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "capitalize", function() { return capitalize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lowercase", function() { return lowercase; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "objectWithName", function() { return objectWithName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "contact", function() { return contact; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "contactWithAlias", function() { return contactWithAlias; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "contactWithAssociation", function() { return contactWithAssociation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "user", function() { return user; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "employee", function() { return employee; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "employeeWithAlias", function() { return employeeWithAlias; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRegion", function() { return getRegion; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "percent", function() { return percent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "date", function() { return date; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "datetime", function() { return datetime; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "truncateString", function() { return truncateString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "limitWords", function() { return limitWords; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "badgeStatus", function() { return badgeStatus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "badgeStatusYesNo", function() { return badgeStatusYesNo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "badgeStatusLabel", function() { return badgeStatusLabel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "badgeStatusCompleted", function() { return badgeStatusCompleted; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "currency", function() { return currency; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCurrencyDescription", function() { return getCurrencyDescription; });
/* harmony import */ var _js_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @js/store */ "./resources/js/store/index.js");
/* harmony import */ var _core_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @core/utils */ "./resources/js/core/utils/index.js");


var vars = _js_store__WEBPACK_IMPORTED_MODULE_0__["default"].getters['config/vars'];
function arrayOfObjects(value, opts) {
  var toReturn = '';

  if (value && value.length && opts) {
    value.forEach(function (detail) {
      if (toReturn) {
        toReturn += ', ';
      }

      toReturn += "".concat(detail[opts.firstAttr][opts.firstAttr2], " (").concat(_core_utils__WEBPACK_IMPORTED_MODULE_1__["formatCurrency"].to(detail[opts.secondAttr], vars.defaultCurrency, true, false, true, false), ")");
    });
  }

  return toReturn;
}
function uppercase(val) {
  return val.toUpperCase();
}
function capitalize(val) {
  return val.capitalize();
}
function lowercase(val) {
  return val.toLowerCase();
}
function objectWithName(_ref) {
  var name = _ref.name;
  return name;
}
function contact(_ref2) {
  var name = _ref2.name;
  return name;
}
function contactWithAlias(_ref3) {
  var name = _ref3.name,
      alias = _ref3.alias;
  return "".concat(name, " (").concat(alias, ")");
}
function contactWithAssociation(_ref4) {
  var name = _ref4.name,
      designation = _ref4.designation;
  return "".concat(name, " (").concat(designation, ")");
}
function user(user) {
  return user.profile ? user.profile.name || user.username : user.username;
}
function employee(_ref5) {
  var name = _ref5.name;
  return name;
}
function employeeWithAlias(_ref6) {
  var name = _ref6.name,
      alias = _ref6.alias;
  return "".concat(name, " (").concat(alias, ")");
}
function getRegion(value) {
  var item = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var region = item ? item.city : '';
  region = region ? item.zipcode ? "".concat(region, " - ").concat(item.zipcode) : region : '';
  region = item.state ? region ? "".concat(region, ", ").concat(item.state) : item.state : region;
  region = item.country ? region ? "".concat(region, ", ").concat(item.country.name) : item.country.name : region;
  return region;
}
function percent(content) {
  return "".concat(content, " %");
}
function date(content) {
  return moment(content, vars.serverDateFormat).format(vars.defaultDateFormat);
}
function datetime(content) {
  return moment(content, vars.serverDateTimeFormat).format(vars.defaultDateTimeFormat);
}
function truncateString(content, opts) {
  var max = opts.max || 30;
  var suffix = content.length > max ? opts.suffix || '...' : '';
  return content.slice(0, max) + suffix;
}
function limitWords(content, opts) {
  var contentArr = content.split(' ');
  var max = opts.max || 3;
  var suffix = contentArr.length > max ? opts.suffix || '...' : '';
  return contentArr.slice(0, max).join(' ') + suffix;
}
function badgeStatus(status) {
  return status ? 'true' : 'false';
}
function badgeStatusYesNo(status) {
  return status ? $t('general.yes') : $t('general.no');
}
function badgeStatusLabel(status, opts) {
  return status ? $t('general.yes') : $t('general.no');
}
function badgeStatusCompleted(status) {
  return status ? $t('utility.todo.completed') : $t('utility.todo.incomplete');
}
function currency(value, opts) {
  var currency = opts && opts.currency ? opts.currency : vars.defaultCurrency;
  return _core_utils__WEBPACK_IMPORTED_MODULE_1__["formatCurrency"].to(value, currency, true);
}
function getCurrencyDescription(value) {
  var item = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  return "".concat(item.currency.name, " - ").concat(item.currency.description, " (").concat(item.currency.symbol, ")");
}

/***/ }),

/***/ "./resources/js/views/app/user/profile/view.vue":
/*!******************************************************!*\
  !*** ./resources/js/views/app/user/profile/view.vue ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _view_vue_vue_type_template_id_0515029c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./view.vue?vue&type=template&id=0515029c& */ "./resources/js/views/app/user/profile/view.vue?vue&type=template&id=0515029c&");
/* harmony import */ var _view_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./view.vue?vue&type=script&lang=js& */ "./resources/js/views/app/user/profile/view.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _view_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _view_vue_vue_type_template_id_0515029c___WEBPACK_IMPORTED_MODULE_0__["render"],
  _view_vue_vue_type_template_id_0515029c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/app/user/profile/view.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/app/user/profile/view.vue?vue&type=script&lang=js&":
/*!*******************************************************************************!*\
  !*** ./resources/js/views/app/user/profile/view.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_view_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./view.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/app/user/profile/view.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_view_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/app/user/profile/view.vue?vue&type=template&id=0515029c&":
/*!*************************************************************************************!*\
  !*** ./resources/js/views/app/user/profile/view.vue?vue&type=template&id=0515029c& ***!
  \*************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_view_vue_vue_type_template_id_0515029c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./view.vue?vue&type=template&id=0515029c& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/app/user/profile/view.vue?vue&type=template&id=0515029c&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_view_vue_vue_type_template_id_0515029c___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_view_vue_vue_type_template_id_0515029c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=view.js.map?id=e59748f7d2565cfd4520