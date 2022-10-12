(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app/user/profile/edit"],{

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

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/app/user/profile/edit.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/app/user/profile/edit.vue?vue&type=script&lang=js& ***!
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
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _js_event_bus__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @js/event-bus */ "./resources/js/event-bus.js");


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
      formData: {
        name: "",
        gender: null,
        language: null,
        birthDate: null
      },
      formErrors: {},
      formLabels: {
        name: $t("user.props.name"),
        gender: $t("user.props.gender"),
        language: $t("user.props.language"),
        birthDate: $t("user.props.birth_date")
      },
      initianLength: 0,
      initialFormData: null,
      emptyFormData: null,
      preRequisite: {
        genders: [],
        languages: []
      }
    };
  },
  computed: _objectSpread(_objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_4__["mapGetters"])("config", ["vars"])), Object(vuex__WEBPACK_IMPORTED_MODULE_4__["mapGetters"])("user", ["uuid", "liveUsers"])), {}, {
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
  methods: _objectSpread(_objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_4__["mapActions"])("common", ["Init", "Get", "Custom", "GetPreRequisite"])), Object(vuex__WEBPACK_IMPORTED_MODULE_4__["mapActions"])("user", ["GetUser"])), {}, {
    submit: function submit() {
      var _this2 = this;

      if (formUtil.isUnchanged(this.initialFormData, this.formData)) {
        this.$toasted.info(this.$t("general.nothing_changed"), this.$toastConfig.info);
        return false;
      }

      this.isLoading = true;
      this.Custom({
        method: "post",
        url: "/profile",
        data: this.formData
      }).then(function (response) {
        _this2.$toasted.success(response.message, _this2.$toastConfig);

        _this2.GetUser();

        _this2.initialFormData = _.cloneDeep(_this2.formData);

        _this2.$router.back();

        _this2.isLoading = false;
      })["catch"](function (error) {
        _this2.isLoading = false;
        _this2.formErrors = formUtil.handleErrors(error);
      });
    },
    reset: function reset() {
      var _this3 = this;

      formUtil.confirmAction().then(function (result) {
        if (result.value) {
          _this3.formData = Object.assign({}, _this3.formData, _.cloneDeep(_this3.initialFormData));
        }
      });
    },
    unsavedCheck: function unsavedCheck(next) {
      formUtil.unsavedCheckAlert(this.initialFormData, this.formData, next);
    },
    fillPreRequisite: function fillPreRequisite(response) {
      var _this4 = this;

      this.preRequisite.objForEach(function (value, key) {
        _this4.preRequisite[key] = response.hasOwnProperty(key) ? response[key] : value;
      });
    },
    setEntityData: function setEntityData(response) {
      var _this5 = this;

      this.entity = response;
      this.formData.objForEach(function (value, key) {
        _this5.formData[key] = response.profile.hasOwnProperty(key) ? response.profile[key] : value;
      });
    },
    getInitialData: function getInitialData() {
      var _this6 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var response, response2;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _this6.isLoading = true;
                _context.prev = 1;
                _context.next = 4;
                return _this6.Get({
                  uuid: _this6.uuid
                });

              case 4:
                response = _context.sent;

                _this6.setEntityData(response);

                _context.next = 8;
                return _this6.GetPreRequisite();

              case 8:
                response2 = _context.sent;

                _this6.fillPreRequisite(response2);

                _this6.isLoading = false;
                return _context.abrupt("return", response);

              case 14:
                _context.prev = 14;
                _context.t0 = _context["catch"](1);
                _this6.isLoading = false;
                formUtil.handleErrors(_context.t0);

                _this6.$router.push({
                  name: _this6.fallBackRoute
                });

              case 19:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[1, 14]]);
      }))();
    },
    doInit: function doInit() {
      this.Init({
        url: this.initUrl
      });
      this.getInitialData();
    }
  }),
  mounted: function mounted() {
    _js_event_bus__WEBPACK_IMPORTED_MODULE_5__["default"].$off("ROUTE_LEAVING", this.unsavedCheck);
    _js_event_bus__WEBPACK_IMPORTED_MODULE_5__["default"].$on("ROUTE_LEAVING", this.unsavedCheck);
    this.doInit();
  },
  beforeDestroy: function beforeDestroy() {
    delete this.formData;
    delete this.formErrors;
    delete this.formLabels;
    delete this.preRequisite;
    delete this.keepAddingFields;
  },
  destroyed: function destroyed() {
    _js_event_bus__WEBPACK_IMPORTED_MODULE_5__["default"].$off("ROUTE_LEAVING", this.unsavedCheck);
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/app/user/profile/edit.vue?vue&type=template&id=15ab7797&":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/app/user/profile/edit.vue?vue&type=template&id=15ab7797& ***!
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
      "loader-color": _vm.vars.loaderColor
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
                    language: _vm.entity.profile.language,
                    image: _vm.entity.profile.avatar,
                    age: _vm.entity.profile.age,
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
                    _vm.entity
                      ? [
                          _c("div", { staticClass: "row" }, [
                            _c(
                              "div",
                              { staticClass: "col-12 mb-3" },
                              [
                                _c("base-input", {
                                  attrs: {
                                    "auto-focus": "",
                                    label: _vm.formLabels.name,
                                    type: "text",
                                    error: _vm.formErrors.name,
                                    required: "",
                                    format: "startCase"
                                  },
                                  on: {
                                    "update:error": function($event) {
                                      return _vm.$set(
                                        _vm.formErrors,
                                        "name",
                                        $event
                                      )
                                    }
                                  },
                                  model: {
                                    value: _vm.formData.name,
                                    callback: function($$v) {
                                      _vm.$set(_vm.formData, "name", $$v)
                                    },
                                    expression: "formData.name"
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
                                    options: _vm.preRequisite.genders,
                                    label: _vm.formLabels.gender,
                                    error: _vm.formErrors.gender,
                                    required: ""
                                  },
                                  on: {
                                    "update:error": function($event) {
                                      return _vm.$set(
                                        _vm.formErrors,
                                        "gender",
                                        $event
                                      )
                                    }
                                  },
                                  model: {
                                    value: _vm.formData.gender,
                                    callback: function($$v) {
                                      _vm.$set(_vm.formData, "gender", $$v)
                                    },
                                    expression: "formData.gender"
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
                                    attrs: {
                                      label: _vm.formLabels.birthDate,
                                      "addon-right-icon": "far fa-calendar-alt",
                                      type: "text",
                                      error: _vm.formErrors.birthDate,
                                      "is-wrapper": true
                                    },
                                    on: {
                                      "update:error": function($event) {
                                        return _vm.$set(
                                          _vm.formErrors,
                                          "birthDate",
                                          $event
                                        )
                                      }
                                    },
                                    model: {
                                      value: _vm.formData.birthDate,
                                      callback: function($$v) {
                                        _vm.$set(_vm.formData, "birthDate", $$v)
                                      },
                                      expression: "formData.birthDate"
                                    }
                                  },
                                  [
                                    _c("date-picker", {
                                      staticClass: "form-control datepicker",
                                      attrs: {
                                        config: _vm.vars.datepickerConfig
                                      },
                                      model: {
                                        value: _vm.formData.birthDate,
                                        callback: function($$v) {
                                          _vm.$set(
                                            _vm.formData,
                                            "birthDate",
                                            $$v
                                          )
                                        },
                                        expression: "formData.birthDate"
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
                                _c("base-select", {
                                  attrs: {
                                    options: _vm.preRequisite.languages,
                                    label: _vm.formLabels.language,
                                    error: _vm.formErrors.language,
                                    required: ""
                                  },
                                  on: {
                                    "update:error": function($event) {
                                      return _vm.$set(
                                        _vm.formErrors,
                                        "language",
                                        $event
                                      )
                                    }
                                  },
                                  model: {
                                    value: _vm.formData.language,
                                    callback: function($$v) {
                                      _vm.$set(_vm.formData, "language", $$v)
                                    },
                                    expression: "formData.language"
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
                                "\n              " +
                                  _vm._s(_vm.$t("general.back"))
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
                              _vm._v(
                                "\n              " +
                                  _vm._s(
                                    _vm.$t("global.save", {
                                      attribute: _vm.$t("user.profile")
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

/***/ "./resources/js/views/app/user/profile/edit.vue":
/*!******************************************************!*\
  !*** ./resources/js/views/app/user/profile/edit.vue ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _edit_vue_vue_type_template_id_15ab7797___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./edit.vue?vue&type=template&id=15ab7797& */ "./resources/js/views/app/user/profile/edit.vue?vue&type=template&id=15ab7797&");
/* harmony import */ var _edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit.vue?vue&type=script&lang=js& */ "./resources/js/views/app/user/profile/edit.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _edit_vue_vue_type_template_id_15ab7797___WEBPACK_IMPORTED_MODULE_0__["render"],
  _edit_vue_vue_type_template_id_15ab7797___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/app/user/profile/edit.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/app/user/profile/edit.vue?vue&type=script&lang=js&":
/*!*******************************************************************************!*\
  !*** ./resources/js/views/app/user/profile/edit.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./edit.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/app/user/profile/edit.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/app/user/profile/edit.vue?vue&type=template&id=15ab7797&":
/*!*************************************************************************************!*\
  !*** ./resources/js/views/app/user/profile/edit.vue?vue&type=template&id=15ab7797& ***!
  \*************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_edit_vue_vue_type_template_id_15ab7797___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./edit.vue?vue&type=template&id=15ab7797& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/app/user/profile/edit.vue?vue&type=template&id=15ab7797&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_edit_vue_vue_type_template_id_15ab7797___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_edit_vue_vue_type_template_id_15ab7797___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=edit.js.map?id=23b02016e9d8c4cdd9f8