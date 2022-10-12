(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app/dashboard/header"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/app/dashboard/header.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/app/dashboard/header.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _views_layouts_partials_app_dashboard_header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @views/layouts/partials/app-dashboard-header */ "./resources/js/views/layouts/partials/app-dashboard-header.vue");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _widgets_StatBox__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./widgets/StatBox */ "./resources/js/views/app/dashboard/widgets/StatBox.vue");
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



/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    AppDashboardHeader: _views_layouts_partials_app_dashboard_header__WEBPACK_IMPORTED_MODULE_0__["default"],
    StatBox: _widgets_StatBox__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  data: function data() {
    return {
      isLoading: false
    };
  },
  computed: _objectSpread(_objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_1__["mapGetters"])('config', ['configs', 'vars'])), Object(vuex__WEBPACK_IMPORTED_MODULE_1__["mapGetters"])('common', ['others'])), Object(vuex__WEBPACK_IMPORTED_MODULE_1__["mapGetters"])('user', ['hasActiveMembership', 'membershipExpiryDate'])),
  methods: _objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_1__["mapActions"])('common', ['Custom', 'SetOthers'])), {}, {
    getInitialData: function getInitialData() {
      var _this = this;

      this.isLoading = true;
      this.Custom({
        url: 'dashboard/stats',
        method: 'get'
      }).then(function (response) {
        _this.SetOthers({
          stats: response
        });

        _this.isLoading = false;
      })["catch"](function (error) {
        _this.isLoading = false;
        formUtil.handleErrors(error);
      });
    }
  }),
  mounted: function mounted() {
    this.getInitialData();
  },
  beforeRouteEnter: function beforeRouteEnter(to, from, next) {
    next(function (vm) {
      vm.$store.state.config.ui.appIsLoading = false;
    });
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/app/dashboard/widgets/StatBox.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/app/dashboard/widgets/StatBox.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************/
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

/* harmony default export */ __webpack_exports__["default"] = ({
  name: "stat-box",
  props: {
    stat: {
      type: Object
    },
    isFetching: {
      type: Boolean,
      "default": true
    }
  },
  data: function data() {
    return {// isLoading: true,
    };
  },
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])('config', ['vars'])),
  methods: {},
  mounted: function mounted() {}
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/layouts/partials/app-dashboard-header.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/layouts/partials/app-dashboard-header.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _app_page_header_wrapper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-page-header-wrapper */ "./resources/js/views/layouts/partials/app-page-header-wrapper.vue");
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    AppPageHeaderWrapper: _app_page_header_wrapper__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  computed: {}
});

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/app/dashboard/header.vue?vue&type=style&index=0&id=12bfcb15&lang=scss&scoped=true&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-2!./node_modules/sass-loader/dist/cjs.js??ref--9-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/app/dashboard/header.vue?vue&type=style&index=0&id=12bfcb15&lang=scss&scoped=true& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Muli:300,400,600,700,800,900);", ""]);

// module
exports.push([module.i, ".header-body[data-v-12bfcb15] {\n  margin-left: -15px;\n  margin-right: -15px;\n  margin-bottom: 90px;\n  margin-top: 0px;\n}\n.dashboard-alerts .alert[data-v-12bfcb15] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  text-align: center;\n}\n.dashboard-alerts .alert a[data-v-12bfcb15], .dashboard-alerts .alert .alert-btn[data-v-12bfcb15] {\n  margin-top: 1rem;\n}\n@media (min-width: 768px) {\n.dashboard-alerts .alert[data-v-12bfcb15] {\n    flex-direction: row;\n    justify-content: space-between;\n    text-align: left;\n    align-items: center;\n}\n.dashboard-alerts .alert .alert-btn[data-v-12bfcb15] {\n    margin-top: 0rem;\n    margin-right: 2rem;\n}\n}\n[data-top-navbar-color=primary] .page-header[data-v-12bfcb15] {\n  background-color: #0281d6 !important;\n  color: #dee2e9 !important;\n}\n[data-top-navbar-color=light-primary] .page-header[data-v-12bfcb15] {\n  background-color: #28a7fd !important;\n  color: #dee2e9 !important;\n}\n[data-top-navbar-color=dark-primary] .page-header[data-v-12bfcb15] {\n  background-color: #01538a !important;\n  color: #dee2e9 !important;\n}\n[data-top-navbar-color=secondary] .page-header[data-v-12bfcb15] {\n  background-color: #e00c51 !important;\n  color: #6c7580 !important;\n}\n[data-top-navbar-color=dark-secondary] .page-header[data-v-12bfcb15] {\n  background-color: #970837 !important;\n  color: #6c7580 !important;\n}\n[data-top-navbar-color=success] .page-header[data-v-12bfcb15] {\n  background-color: #2dce89 !important;\n  color: #dee2e9 !important;\n}\n[data-top-navbar-color=info] .page-header[data-v-12bfcb15] {\n  background-color: #11cdef !important;\n  color: #dee2e9 !important;\n}\n[data-top-navbar-color=warning] .page-header[data-v-12bfcb15] {\n  background-color: #fb6340 !important;\n  color: #dee2e9 !important;\n}\n[data-top-navbar-color=danger] .page-header[data-v-12bfcb15] {\n  background-color: #f5365c !important;\n  color: #dee2e9 !important;\n}\n[data-top-navbar-color=white] .page-header[data-v-12bfcb15] {\n  background-color: #fff !important;\n  color: #6c7580 !important;\n}\n[data-top-navbar-color=whitish] .page-header[data-v-12bfcb15] {\n  background-color: #fafbfd !important;\n  color: #6c7580 !important;\n}\n[data-top-navbar-color=light] .page-header[data-v-12bfcb15] {\n  background-color: #dee2e9 !important;\n  color: #6c7580 !important;\n}\n[data-top-navbar-color=dark] .page-header[data-v-12bfcb15] {\n  background-color: #6c7580 !important;\n  color: #dee2e9 !important;\n}\n[data-top-navbar-color=gray-darker] .page-header[data-v-12bfcb15] {\n  background-color: #495060 !important;\n  color: #dee2e9 !important;\n}\n[data-top-navbar-color=gray-darkest] .page-header[data-v-12bfcb15] {\n  background-color: #212532 !important;\n  color: #dee2e9 !important;\n}\n[data-top-navbar-color=black] .page-header[data-v-12bfcb15] {\n  background-color: #000 !important;\n  color: #dee2e9 !important;\n}\n[data-top-navbar-color=default-color] .page-header[data-v-12bfcb15] {\n  background-color: #0a346d !important;\n  color: #dee2e9 !important;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/app/dashboard/widgets/StatBox.vue?vue&type=style&index=0&id=a6180802&lang=scss&scoped=true&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-2!./node_modules/sass-loader/dist/cjs.js??ref--9-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/app/dashboard/widgets/StatBox.vue?vue&type=style&index=0&id=a6180802&lang=scss&scoped=true& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Muli:300,400,600,700,800,900);", ""]);

// module
exports.push([module.i, ".stat-widget .card-title[data-v-a6180802] {\n  font-size: 0.85rem;\n  font-weight: 600;\n  color: #6c7580;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/app/dashboard/header.vue?vue&type=style&index=0&id=12bfcb15&lang=scss&scoped=true&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-2!./node_modules/sass-loader/dist/cjs.js??ref--9-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/app/dashboard/header.vue?vue&type=style&index=0&id=12bfcb15&lang=scss&scoped=true& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--9-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--9-3!../../../../../node_modules/vue-loader/lib??vue-loader-options!./header.vue?vue&type=style&index=0&id=12bfcb15&lang=scss&scoped=true& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/app/dashboard/header.vue?vue&type=style&index=0&id=12bfcb15&lang=scss&scoped=true&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/app/dashboard/widgets/StatBox.vue?vue&type=style&index=0&id=a6180802&lang=scss&scoped=true&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-2!./node_modules/sass-loader/dist/cjs.js??ref--9-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/app/dashboard/widgets/StatBox.vue?vue&type=style&index=0&id=a6180802&lang=scss&scoped=true& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../node_modules/css-loader!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--9-2!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--9-3!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./StatBox.vue?vue&type=style&index=0&id=a6180802&lang=scss&scoped=true& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/app/dashboard/widgets/StatBox.vue?vue&type=style&index=0&id=a6180802&lang=scss&scoped=true&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/app/dashboard/header.vue?vue&type=template&id=12bfcb15&scoped=true&":
/*!******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/app/dashboard/header.vue?vue&type=template&id=12bfcb15&scoped=true& ***!
  \******************************************************************************************************************************************************************************************************************************/
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
  return _c("app-dashboard-header", [
    _c(
      "div",
      { staticClass: "header-body min-height-150px" },
      [
        _c("animated-loader", {
          attrs: {
            "is-loading":
              _vm.isLoading && !(_vm.others.stats && _vm.others.stats.length),
            "loader-color": _vm.vars.colors.white,
            "overlay-color": "transparent"
          }
        }),
        _vm._v(" "),
        _vm.others.alerts
          ? _c(
              "div",
              { staticClass: "row dashboard-alerts" },
              _vm._l(_vm.others.alerts, function(alert) {
                return _c("div", { staticClass: "col-12" }, [
                  _c(
                    "div",
                    {
                      class: [
                        "alert fade show mb-element",
                        "alert-" + alert.type,
                        { "alert-dismissible": alert.dismissible }
                      ],
                      attrs: { role: "alert" }
                    },
                    [
                      _c("div", { staticClass: "alert-content" }, [
                        alert.title
                          ? _c("h4", [_vm._v(_vm._s(alert.title))])
                          : _vm._e(),
                        _vm._v(" "),
                        alert.description
                          ? _c("p", { staticClass: "mb-0" }, [
                              _vm._v(_vm._s(alert.description))
                            ])
                          : _vm._e()
                      ]),
                      _vm._v(" "),
                      alert.link
                        ? [
                            alert.link.route
                              ? _c(
                                  "router-link",
                                  {
                                    staticClass: "btn btn-lg alert-btn",
                                    attrs: { to: { name: alert.link.route } }
                                  },
                                  [_vm._v(_vm._s(alert.link.text))]
                                )
                              : alert.link.href
                              ? _c(
                                  "a",
                                  {
                                    attrs: {
                                      href: alert.link.href,
                                      target: alert.link.target
                                        ? alert.link.target
                                        : "_self"
                                    }
                                  },
                                  [_vm._v(_vm._s(alert.link.text))]
                                )
                              : _vm._e()
                          ]
                        : _vm._e(),
                      _vm._v(" "),
                      alert.dismissible
                        ? _c(
                            "button",
                            {
                              staticClass: "close",
                              attrs: {
                                type: "button",
                                "data-dismiss": "alert",
                                "aria-label": "Close"
                              }
                            },
                            [
                              _c("span", { attrs: { "aria-hidden": "true" } }, [
                                _vm._v("×")
                              ])
                            ]
                          )
                        : _vm._e()
                    ],
                    2
                  )
                ])
              }),
              0
            )
          : _vm._e(),
        _vm._v(" "),
        _vm.others.stats && _vm.others.stats.length
          ? _c(
              "div",
              { staticClass: "row" },
              _vm._l(_vm.others.stats, function(stat) {
                return _c(
                  "div",
                  { key: stat.label, staticClass: "col-12 col-sm-6 col-md-3" },
                  [
                    _c("stat-box", {
                      attrs: { "is-fetching": _vm.isLoading, stat: stat }
                    })
                  ],
                  1
                )
              }),
              0
            )
          : _vm._e(),
        _vm._v(" "),
        _vm.configs.membership.dashboardAlertStartMembership &&
        !_vm.hasActiveMembership &&
        !_vm.membershipExpiryDate
          ? _c("div", { staticClass: "dashboard-alerts mt-element" }, [
              _c(
                "div",
                {
                  staticClass: "alert fade show mb-element alert-info",
                  attrs: { role: "alert" }
                },
                [
                  _c("div", { staticClass: "alert-content" }, [
                    _c("h4", [
                      _vm._v(
                        _vm._s(_vm.$t("membership.dashboard_alert_start.title"))
                      )
                    ]),
                    _vm._v(" "),
                    _c("p", { staticClass: "mb-0" }, [
                      _vm._v(
                        _vm._s(
                          _vm.$t("membership.dashboard_alert_start.description")
                        )
                      )
                    ])
                  ]),
                  _vm._v(" "),
                  _c(
                    "router-link",
                    {
                      staticClass: "btn btn-lg alert-btn",
                      attrs: { to: { name: "appMembershipList" } }
                    },
                    [_vm._v(_vm._s(_vm.$t("membership.start_membership")))]
                  )
                ],
                1
              )
            ])
          : _vm.configs.membership.dashboardAlertMembershipExpired &&
            !_vm.hasActiveMembership &&
            _vm.membershipExpiryDate
          ? _c("div", { staticClass: "dashboard-alerts mt-element" }, [
              _c(
                "div",
                {
                  staticClass: "alert fade show mb-element alert-danger",
                  attrs: { role: "alert" }
                },
                [
                  _c("div", { staticClass: "alert-content" }, [
                    _c("h4", [
                      _vm._v(
                        _vm._s(
                          _vm.$t("membership.dashboard_alert_expired.title")
                        )
                      )
                    ]),
                    _vm._v(" "),
                    _c("p", { staticClass: "mb-0" }, [
                      _vm._v(
                        _vm._s(
                          _vm.$t(
                            "membership.dashboard_alert_expired.description"
                          )
                        )
                      )
                    ])
                  ]),
                  _vm._v(" "),
                  _c(
                    "router-link",
                    {
                      staticClass: "btn btn-lg alert-btn",
                      attrs: { to: { name: "appMembershipList" } }
                    },
                    [_vm._v(_vm._s(_vm.$t("membership.renew_membership")))]
                  )
                ],
                1
              )
            ])
          : _vm._e()
      ],
      1
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/app/dashboard/widgets/StatBox.vue?vue&type=template&id=a6180802&scoped=true&":
/*!***************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/app/dashboard/widgets/StatBox.vue?vue&type=template&id=a6180802&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************************************/
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
    "card",
    { staticClass: "stat-widget min-height-150px", attrs: { shadow: "" } },
    [
      _vm._t("default", function() {
        return [
          _c("div", { staticClass: "stat-details" }, [
            _c("h5", { staticClass: "card-title text-uppercase mb-2 nowrap" }, [
              _vm._v(_vm._s(_vm.stat.label))
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "row" }, [
              _c("div", { staticClass: "col d-flex align-items-center" }, [
                _c("span", { staticClass: "h3 font-weight-bold mb-0" }, [
                  _vm._v(_vm._s(_vm.stat.value))
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "col-auto" }, [
                _c(
                  "div",
                  {
                    staticClass:
                      "icon icon-shape text-white rounded-circle shadow",
                    class: _vm.stat.color
                  },
                  [
                    _c("animated-loader", {
                      attrs: {
                        "is-loading": _vm.isFetching,
                        "loader-color": _vm.vars.colors.white,
                        "overlay-color": "transparent"
                      }
                    }),
                    _vm._v(" "),
                    !_vm.isFetching
                      ? _c("i", { class: _vm.stat.icon })
                      : _vm._e()
                  ],
                  1
                )
              ])
            ]),
            _vm._v(" "),
            _vm.stat.extra && _vm.stat.extra.today
              ? _c(
                  "p",
                  { staticClass: "mt-2 mb-0 text-muted text-sm  nowrap" },
                  [
                    _c(
                      "span",
                      { class: ["mr-1", _vm.stat.extra.today.color] },
                      [_c("i", { class: _vm.stat.extra.today.icon })]
                    ),
                    _vm._v(" "),
                    _c(
                      "span",
                      {
                        class: [
                          "d-inline-block mb-0 mr-1",
                          _vm.stat.extra.today.color
                        ]
                      },
                      [
                        _vm._v(
                          _vm._s(_vm.stat.extra.today.value) +
                            " " +
                            _vm._s(_vm.stat.extra.today.label)
                        )
                      ]
                    )
                  ]
                )
              : _vm._e()
          ])
        ]
      })
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/layouts/partials/app-dashboard-header.vue?vue&type=template&id=3e938dfa&":
/*!***********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/layouts/partials/app-dashboard-header.vue?vue&type=template&id=3e938dfa& ***!
  \***********************************************************************************************************************************************************************************************************************************/
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
  return _c("app-page-header-wrapper", [_vm._t("default")], 2)
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/views/app/dashboard/header.vue":
/*!*****************************************************!*\
  !*** ./resources/js/views/app/dashboard/header.vue ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _header_vue_vue_type_template_id_12bfcb15_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./header.vue?vue&type=template&id=12bfcb15&scoped=true& */ "./resources/js/views/app/dashboard/header.vue?vue&type=template&id=12bfcb15&scoped=true&");
/* harmony import */ var _header_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header.vue?vue&type=script&lang=js& */ "./resources/js/views/app/dashboard/header.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _header_vue_vue_type_style_index_0_id_12bfcb15_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./header.vue?vue&type=style&index=0&id=12bfcb15&lang=scss&scoped=true& */ "./resources/js/views/app/dashboard/header.vue?vue&type=style&index=0&id=12bfcb15&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _header_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _header_vue_vue_type_template_id_12bfcb15_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _header_vue_vue_type_template_id_12bfcb15_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "12bfcb15",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/app/dashboard/header.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/app/dashboard/header.vue?vue&type=script&lang=js&":
/*!******************************************************************************!*\
  !*** ./resources/js/views/app/dashboard/header.vue?vue&type=script&lang=js& ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_header_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./header.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/app/dashboard/header.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_header_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/app/dashboard/header.vue?vue&type=style&index=0&id=12bfcb15&lang=scss&scoped=true&":
/*!***************************************************************************************************************!*\
  !*** ./resources/js/views/app/dashboard/header.vue?vue&type=style&index=0&id=12bfcb15&lang=scss&scoped=true& ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_2_node_modules_sass_loader_dist_cjs_js_ref_9_3_node_modules_vue_loader_lib_index_js_vue_loader_options_header_vue_vue_type_style_index_0_id_12bfcb15_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--9-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--9-3!../../../../../node_modules/vue-loader/lib??vue-loader-options!./header.vue?vue&type=style&index=0&id=12bfcb15&lang=scss&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/app/dashboard/header.vue?vue&type=style&index=0&id=12bfcb15&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_2_node_modules_sass_loader_dist_cjs_js_ref_9_3_node_modules_vue_loader_lib_index_js_vue_loader_options_header_vue_vue_type_style_index_0_id_12bfcb15_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_2_node_modules_sass_loader_dist_cjs_js_ref_9_3_node_modules_vue_loader_lib_index_js_vue_loader_options_header_vue_vue_type_style_index_0_id_12bfcb15_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_2_node_modules_sass_loader_dist_cjs_js_ref_9_3_node_modules_vue_loader_lib_index_js_vue_loader_options_header_vue_vue_type_style_index_0_id_12bfcb15_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_2_node_modules_sass_loader_dist_cjs_js_ref_9_3_node_modules_vue_loader_lib_index_js_vue_loader_options_header_vue_vue_type_style_index_0_id_12bfcb15_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/views/app/dashboard/header.vue?vue&type=template&id=12bfcb15&scoped=true&":
/*!************************************************************************************************!*\
  !*** ./resources/js/views/app/dashboard/header.vue?vue&type=template&id=12bfcb15&scoped=true& ***!
  \************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_header_vue_vue_type_template_id_12bfcb15_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./header.vue?vue&type=template&id=12bfcb15&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/app/dashboard/header.vue?vue&type=template&id=12bfcb15&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_header_vue_vue_type_template_id_12bfcb15_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_header_vue_vue_type_template_id_12bfcb15_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/views/app/dashboard/widgets/StatBox.vue":
/*!**************************************************************!*\
  !*** ./resources/js/views/app/dashboard/widgets/StatBox.vue ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _StatBox_vue_vue_type_template_id_a6180802_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./StatBox.vue?vue&type=template&id=a6180802&scoped=true& */ "./resources/js/views/app/dashboard/widgets/StatBox.vue?vue&type=template&id=a6180802&scoped=true&");
/* harmony import */ var _StatBox_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./StatBox.vue?vue&type=script&lang=js& */ "./resources/js/views/app/dashboard/widgets/StatBox.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _StatBox_vue_vue_type_style_index_0_id_a6180802_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./StatBox.vue?vue&type=style&index=0&id=a6180802&lang=scss&scoped=true& */ "./resources/js/views/app/dashboard/widgets/StatBox.vue?vue&type=style&index=0&id=a6180802&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _StatBox_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _StatBox_vue_vue_type_template_id_a6180802_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _StatBox_vue_vue_type_template_id_a6180802_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "a6180802",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/app/dashboard/widgets/StatBox.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/app/dashboard/widgets/StatBox.vue?vue&type=script&lang=js&":
/*!***************************************************************************************!*\
  !*** ./resources/js/views/app/dashboard/widgets/StatBox.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_StatBox_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./StatBox.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/app/dashboard/widgets/StatBox.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_StatBox_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/app/dashboard/widgets/StatBox.vue?vue&type=style&index=0&id=a6180802&lang=scss&scoped=true&":
/*!************************************************************************************************************************!*\
  !*** ./resources/js/views/app/dashboard/widgets/StatBox.vue?vue&type=style&index=0&id=a6180802&lang=scss&scoped=true& ***!
  \************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_2_node_modules_sass_loader_dist_cjs_js_ref_9_3_node_modules_vue_loader_lib_index_js_vue_loader_options_StatBox_vue_vue_type_style_index_0_id_a6180802_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader!../../../../../../node_modules/css-loader!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--9-2!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--9-3!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./StatBox.vue?vue&type=style&index=0&id=a6180802&lang=scss&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/app/dashboard/widgets/StatBox.vue?vue&type=style&index=0&id=a6180802&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_2_node_modules_sass_loader_dist_cjs_js_ref_9_3_node_modules_vue_loader_lib_index_js_vue_loader_options_StatBox_vue_vue_type_style_index_0_id_a6180802_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_2_node_modules_sass_loader_dist_cjs_js_ref_9_3_node_modules_vue_loader_lib_index_js_vue_loader_options_StatBox_vue_vue_type_style_index_0_id_a6180802_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_2_node_modules_sass_loader_dist_cjs_js_ref_9_3_node_modules_vue_loader_lib_index_js_vue_loader_options_StatBox_vue_vue_type_style_index_0_id_a6180802_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_2_node_modules_sass_loader_dist_cjs_js_ref_9_3_node_modules_vue_loader_lib_index_js_vue_loader_options_StatBox_vue_vue_type_style_index_0_id_a6180802_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/views/app/dashboard/widgets/StatBox.vue?vue&type=template&id=a6180802&scoped=true&":
/*!*********************************************************************************************************!*\
  !*** ./resources/js/views/app/dashboard/widgets/StatBox.vue?vue&type=template&id=a6180802&scoped=true& ***!
  \*********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_StatBox_vue_vue_type_template_id_a6180802_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./StatBox.vue?vue&type=template&id=a6180802&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/app/dashboard/widgets/StatBox.vue?vue&type=template&id=a6180802&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_StatBox_vue_vue_type_template_id_a6180802_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_StatBox_vue_vue_type_template_id_a6180802_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/views/layouts/partials/app-dashboard-header.vue":
/*!**********************************************************************!*\
  !*** ./resources/js/views/layouts/partials/app-dashboard-header.vue ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _app_dashboard_header_vue_vue_type_template_id_3e938dfa___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-dashboard-header.vue?vue&type=template&id=3e938dfa& */ "./resources/js/views/layouts/partials/app-dashboard-header.vue?vue&type=template&id=3e938dfa&");
/* harmony import */ var _app_dashboard_header_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-dashboard-header.vue?vue&type=script&lang=js& */ "./resources/js/views/layouts/partials/app-dashboard-header.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _app_dashboard_header_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _app_dashboard_header_vue_vue_type_template_id_3e938dfa___WEBPACK_IMPORTED_MODULE_0__["render"],
  _app_dashboard_header_vue_vue_type_template_id_3e938dfa___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/layouts/partials/app-dashboard-header.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/layouts/partials/app-dashboard-header.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************!*\
  !*** ./resources/js/views/layouts/partials/app-dashboard-header.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_app_dashboard_header_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./app-dashboard-header.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/layouts/partials/app-dashboard-header.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_app_dashboard_header_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/layouts/partials/app-dashboard-header.vue?vue&type=template&id=3e938dfa&":
/*!*****************************************************************************************************!*\
  !*** ./resources/js/views/layouts/partials/app-dashboard-header.vue?vue&type=template&id=3e938dfa& ***!
  \*****************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_app_dashboard_header_vue_vue_type_template_id_3e938dfa___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./app-dashboard-header.vue?vue&type=template&id=3e938dfa& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/layouts/partials/app-dashboard-header.vue?vue&type=template&id=3e938dfa&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_app_dashboard_header_vue_vue_type_template_id_3e938dfa___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_app_dashboard_header_vue_vue_type_template_id_3e938dfa___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=header.js.map?id=3f4393efb448e8d33cc6