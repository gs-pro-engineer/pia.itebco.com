(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["auth/lock"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/auth/lock.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/auth/lock.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _partials_box__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./partials/box */ "./resources/js/views/auth/partials/box/index.vue");
/* harmony import */ var _views_layouts_partials_guest_header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @views/layouts/partials/guest-header */ "./resources/js/views/layouts/partials/guest-header.vue");
/* harmony import */ var _views_layouts_partials_guest_footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @views/layouts/partials/guest-footer */ "./resources/js/views/layouts/partials/guest-footer.vue");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _images_avatars_default_profile_image_male_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @images/avatars/default-profile-image-male.png */ "./resources/images/avatars/default-profile-image-male.png");
/* harmony import */ var _images_avatars_default_profile_image_male_png__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_images_avatars_default_profile_image_male_png__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var vue_avatar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vue-avatar */ "./node_modules/vue-avatar/dist/vue-avatar.min.js");
/* harmony import */ var vue_avatar__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(vue_avatar__WEBPACK_IMPORTED_MODULE_5__);
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






/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    Box: _partials_box__WEBPACK_IMPORTED_MODULE_0__["default"],
    GuestHeader: _views_layouts_partials_guest_header__WEBPACK_IMPORTED_MODULE_1__["default"],
    GuestFooter: _views_layouts_partials_guest_footer__WEBPACK_IMPORTED_MODULE_2__["default"],
    Avatar: vue_avatar__WEBPACK_IMPORTED_MODULE_5___default.a
  },
  data: function data() {
    return {
      formData: {
        password: ''
      },
      ProfileImageMale: _images_avatars_default_profile_image_male_png__WEBPACK_IMPORTED_MODULE_4___default.a,
      formErrors: {},
      isLoading: false
    };
  },
  computed: _objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_3__["mapGetters"])('config', ['configs', 'uiConfigs', 'vars'])), Object(vuex__WEBPACK_IMPORTED_MODULE_3__["mapGetters"])('user', ['profile'])),
  methods: _objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_3__["mapActions"])('user', ['Logout', 'Unlock', 'SetLock', 'SetLastActivity'])), {}, {
    submit: function submit() {
      var _this = this;

      this.isLoading = true;
      var routeQuery = this.$route.query;
      this.$gaEvent('engagement', 'unlock');
      this.Unlock(this.formData).then(function (response) {
        _this.SetLastActivity();

        _this.SetLock(false);

        _this.$gaEvent('activity', 'unlocked');

        var routeTo = {
          name: 'appDashboard'
        };

        if (routeQuery && routeQuery.ref && _this.$router.resolve(routeQuery.ref)) {
          routeTo = _this.$router.resolve(routeQuery.ref).route;
        }

        _this.$router.push(routeTo);
      })["catch"](function (error) {
        _this.isLoading = false; // console.error(error)

        _this.formErrors = formUtil.handleErrors(error);
      });
    },
    logout: function logout() {
      var _this2 = this;

      this.isLoading = true;
      var routeQuery = this.$route.query;
      this.$ga.event('engagement', 'logout', 'LockScreen');
      this.Logout().then(function () {
        _this2.$ga.event('activity', 'loggedout');

        var routeTo = {
          name: 'login'
        };

        if (routeQuery && routeQuery.ref && _this2.$router.resolve(routeQuery.ref)) {
          routeTo = _this2.$router.resolve(routeQuery.ref).route;
        }

        _this2.$router.push(routeTo);
      });
    }
  })
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/auth/lock.vue?vue&type=template&id=2dfbfa43&":
/*!*******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/auth/lock.vue?vue&type=template&id=2dfbfa43& ***!
  \*******************************************************************************************************************************************************************************************************/
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
    { staticClass: "guest-page" },
    [
      _c(
        "box",
        [
          _c("animated-loader", {
            attrs: {
              "is-loading": _vm.isLoading,
              "loader-color": _vm.vars.loaderColor
            }
          }),
          _vm._v(" "),
          _c("guest-header", [
            _vm.profile && _vm.profile.name
              ? _c(
                  "div",
                  {
                    staticClass:
                      "d-flex flex-column justify-content-start align-items-center"
                  },
                  [
                    _c("avatar", {
                      attrs: {
                        username: _vm.profile.name ? _vm.profile.name : null,
                        src: _vm.profile.userThumb
                          ? _vm.profile.userThumb
                          : _vm.profile.name
                          ? null
                          : _vm.ProfileImageMale,
                        "background-color": _vm.vars.colors.primary,
                        color: _vm.vars.colors.white,
                        size: 100,
                        "has-shadow": ""
                      }
                    }),
                    _vm._v(" "),
                    _c("h4", { staticClass: "username mt-4" }, [
                      _vm._v(
                        "\n                    " +
                          _vm._s(
                            _vm.$t("general.greeting") + ", " + _vm.profile.name
                          ) +
                          "\n                "
                      )
                    ])
                  ],
                  1
                )
              : _vm._e()
          ]),
          _vm._v(" "),
          _c("section", { attrs: { role: "main" } }, [
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
                _c("base-input", {
                  staticClass: "mb-3",
                  attrs: {
                    "auto-focus": "",
                    label: _vm.$t("auth.lock.props.password"),
                    type: "password",
                    name: "password",
                    "addon-left-icon": "fas fa-key",
                    error: _vm.formErrors.password
                  },
                  on: {
                    "update:error": function($event) {
                      return _vm.$set(_vm.formErrors, "password", $event)
                    }
                  },
                  model: {
                    value: _vm.formData.password,
                    callback: function($$v) {
                      _vm.$set(_vm.formData, "password", $$v)
                    },
                    expression: "formData.password"
                  }
                }),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "text-center" },
                  [
                    _c(
                      "base-button",
                      {
                        staticClass: "my-4 text-lg",
                        attrs: { type: "submit", design: "primary", block: "" }
                      },
                      [_vm._v(_vm._s(_vm.$t("general.unlock")))]
                    )
                  ],
                  1
                ),
                _vm._v(" "),
                _c("div", { staticClass: "form-group m-b-0" }, [
                  _c("div", { staticClass: "col-sm-12 text-center" }, [
                    _c("h6", { staticClass: "text-uppercase" }, [
                      _vm._v(_vm._s(_vm.$t("general.or")))
                    ]),
                    _vm._v(" "),
                    _c(
                      "p",
                      [
                        _c(
                          "base-button",
                          {
                            attrs: { type: "button", design: "link" },
                            on: { click: _vm.logout }
                          },
                          [
                            _c("i", { staticClass: "fas fa-power-off" }),
                            _c("span", { staticClass: "font-weight-bold" }, [
                              _vm._v(_vm._s(_vm.$t("auth.logout")))
                            ])
                          ]
                        )
                      ],
                      1
                    )
                  ])
                ])
              ],
              1
            )
          ])
        ],
        1
      ),
      _vm._v(" "),
      _vm.configs.system
        ? _c("guest-footer", {
            attrs: {
              "footer-credit": _vm.configs.system.footerCredit,
              version: _vm.configs.system.version
            }
          })
        : _vm._e()
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/images/avatars/default-profile-image-male.png":
/*!*****************************************************************!*\
  !*** ./resources/images/avatars/default-profile-image-male.png ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/default-profile-image-male.png?82fe52757240e0913ffeb5c5ab65b953";

/***/ }),

/***/ "./resources/js/views/auth/lock.vue":
/*!******************************************!*\
  !*** ./resources/js/views/auth/lock.vue ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lock_vue_vue_type_template_id_2dfbfa43___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lock.vue?vue&type=template&id=2dfbfa43& */ "./resources/js/views/auth/lock.vue?vue&type=template&id=2dfbfa43&");
/* harmony import */ var _lock_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lock.vue?vue&type=script&lang=js& */ "./resources/js/views/auth/lock.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _lock_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _lock_vue_vue_type_template_id_2dfbfa43___WEBPACK_IMPORTED_MODULE_0__["render"],
  _lock_vue_vue_type_template_id_2dfbfa43___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/auth/lock.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/auth/lock.vue?vue&type=script&lang=js&":
/*!*******************************************************************!*\
  !*** ./resources/js/views/auth/lock.vue?vue&type=script&lang=js& ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_lock_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./lock.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/auth/lock.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_lock_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/auth/lock.vue?vue&type=template&id=2dfbfa43&":
/*!*************************************************************************!*\
  !*** ./resources/js/views/auth/lock.vue?vue&type=template&id=2dfbfa43& ***!
  \*************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_lock_vue_vue_type_template_id_2dfbfa43___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./lock.vue?vue&type=template&id=2dfbfa43& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/auth/lock.vue?vue&type=template&id=2dfbfa43&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_lock_vue_vue_type_template_id_2dfbfa43___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_lock_vue_vue_type_template_id_2dfbfa43___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=lock.js.map?id=4844797edda65d269d21