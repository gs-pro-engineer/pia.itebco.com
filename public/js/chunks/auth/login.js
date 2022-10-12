(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["auth/login"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/auth/login.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/auth/login.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _mixins_auth_form__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @mixins/auth-form */ "./resources/js/mixins/auth-form.js");
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

/* harmony default export */ __webpack_exports__["default"] = ({
  "extends": _mixins_auth_form__WEBPACK_IMPORTED_MODULE_0__["default"],
  data: function data() {
    return {
      formData: {
        email: '',
        password: ''
      }
    };
  },
  methods: {
    submit: function submit() {
      var _this = this;

      this.isLoading = true;
      var routeQuery = this.$route.query;
      this.$gaEvent('engagement', 'login', 'Normal');
      this.Login(this.formData).then(function (response) {
        _this.$toasted.success(response.message, _this.$toastConfig);

        _this.$gaEvent('activity', 'loggedin', 'Normal');

        if (_this.configs.auth.twoFactorSecurity && _this.twoFactorSet) {
          _this.$router.push({
            name: 'authSecurity',
            query: routeQuery
          });

          _this.isLoading = false;
        } else {
          var routeTo = response.reload ? {
            name: 'appDashboard',
            query: {
              reload: 1
            }
          } : {
            name: 'appDashboard'
          };

          if (routeQuery && routeQuery.ref && _this.$router.resolve(routeQuery.ref)) {
            routeTo = _this.$router.resolve(routeQuery.ref).route;
          }

          if (_this.hasRole('admin') && _this.configs.system && _this.configs.system.setupWizard) {
            routeTo = {
              name: 'setup'
            };
          }

          routeTo = _objectSpread(_objectSpread({}, routeTo), {}, {
            query: {
              locale: undefined
            }
          });

          _this.ResetTwoFactorSet().then(function () {
            _this.$router.push(routeTo);
          })["catch"](function (error) {
            _this.isLoading = false;
            _this.formErrors = formUtil.handleErrors(error);
          });
        }
      })["catch"](function (error) {
        _this.isLoading = false;
        _this.formErrors = formUtil.handleErrors(error);
      });
    },
    loginAs: function loginAs(role, domain) {
      this.formData.email = role + '@' + domain + '.com';
      this.formData.password = 'password';
      this.submit();
    }
  },
  mounted: function mounted() {
    this.SetCSRF();
    var cause = this.$route.query && this.$route.query.cause ? this.$route.query.cause : null;

    if (cause) {
      if (cause === 'csrf_token_expired') {
        this.$toasted.error($t('general.csrf_token_expired'), this.$toastConfig.error);
        this.$router.push(this.withQuery({
          name: this.$route.name,
          replace: true
        }));
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/auth/login.vue?vue&type=style&index=0&id=6517b581&lang=scss&scoped=true&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-2!./node_modules/sass-loader/dist/cjs.js??ref--9-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/auth/login.vue?vue&type=style&index=0&id=6517b581&lang=scss&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".login-with-icons .btn[data-v-6517b581] {\n  width: 30px;\n  height: 30px;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 0.9rem;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/auth/login.vue?vue&type=style&index=0&id=6517b581&lang=scss&scoped=true&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-2!./node_modules/sass-loader/dist/cjs.js??ref--9-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/auth/login.vue?vue&type=style&index=0&id=6517b581&lang=scss&scoped=true& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--9-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--9-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./login.vue?vue&type=style&index=0&id=6517b581&lang=scss&scoped=true& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/auth/login.vue?vue&type=style&index=0&id=6517b581&lang=scss&scoped=true&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/auth/login.vue?vue&type=template&id=6517b581&scoped=true&":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/auth/login.vue?vue&type=template&id=6517b581&scoped=true& ***!
  \********************************************************************************************************************************************************************************************************************/
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
            _c("h5", [_vm._v(_vm._s(_vm.$t("auth.login.page_title")))])
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
                    label: _vm.$t("auth.login.props.email_username"),
                    type: "text",
                    "addon-left-icon": "fas fa-envelope",
                    error: _vm.formErrors.email
                  },
                  on: {
                    "update:error": function($event) {
                      return _vm.$set(_vm.formErrors, "email", $event)
                    }
                  },
                  model: {
                    value: _vm.formData.email,
                    callback: function($$v) {
                      _vm.$set(_vm.formData, "email", $$v)
                    },
                    expression: "formData.email"
                  }
                }),
                _vm._v(" "),
                _c("base-input", {
                  staticClass: "mb-3",
                  attrs: {
                    label: _vm.$t("auth.login.props.password"),
                    type: "password",
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
                  { staticClass: "text-center mt-4" },
                  [
                    _c(
                      "base-button",
                      {
                        staticClass: "my-4 text-lg",
                        attrs: { type: "submit", design: "primary", block: "" }
                      },
                      [_vm._v(_vm._s(_vm.$t("auth.login.login")))]
                    )
                  ],
                  1
                ),
                _vm._v(" "),
                _vm.configs && _vm.configs.auth
                  ? [
                      _vm.configs.auth.mobileOtpLogin ||
                      _vm.configs.auth.emailOtpLogin ||
                      _vm.configs.auth.socialLogin ||
                      _vm.configs.auth.facebook ||
                      _vm.configs.auth.twitter ||
                      _vm.configs.auth.github ||
                      _vm.configs.auth.google ||
                      _vm.showLocaleSwitcher
                        ? [
                            _c("div", { staticClass: "row mt-4" }, [
                              _vm.showLocaleSwitcher
                                ? _c(
                                    "div",
                                    {
                                      staticClass:
                                        "col-3 text-left locale-switcher"
                                    },
                                    [
                                      _c(
                                        "base-dropdown",
                                        {
                                          attrs: {
                                            tag: "div",
                                            direction: "up",
                                            "menu-classes": "show-dropdown-up"
                                          }
                                        },
                                        [
                                          _c(
                                            "base-button",
                                            {
                                              staticClass: "text-uppercase",
                                              attrs: {
                                                slot: "title",
                                                type: "button",
                                                design: "light",
                                                block: "",
                                                "data-toggle": "dropdown",
                                                role: "button",
                                                size: "sm"
                                              },
                                              slot: "title"
                                            },
                                            [
                                              _c(
                                                "span",
                                                {
                                                  staticClass:
                                                    "nav-link-inner--text"
                                                },
                                                [
                                                  _vm._v(
                                                    _vm._s(_vm.selectedLocale)
                                                  )
                                                ]
                                              ),
                                              _vm._v(" "),
                                              _c("i", {
                                                staticClass:
                                                  "fas fa-chevron-up m-l-5"
                                              })
                                            ]
                                          ),
                                          _vm._v(" "),
                                          _vm._l(
                                            _vm.configs.system.locales,
                                            function(lo) {
                                              return _c(
                                                "button",
                                                {
                                                  key: lo.uuid,
                                                  staticClass: "dropdown-item",
                                                  attrs: { type: "button" },
                                                  on: {
                                                    click: function($event) {
                                                      return _vm.switchLocale(
                                                        lo
                                                      )
                                                    }
                                                  }
                                                },
                                                [
                                                  _vm._v(
                                                    _vm._s(lo.name) +
                                                      " (" +
                                                      _vm._s(lo.locale) +
                                                      ")"
                                                  )
                                                ]
                                              )
                                            }
                                          )
                                        ],
                                        2
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
                                    _vm.showLocaleSwitcher ? "col-9" : "col-12",
                                    "text-right login-with-icons"
                                  ]
                                },
                                [
                                  _vm.configs.auth.emailOtpLogin
                                    ? _c(
                                        "router-link",
                                        {
                                          directives: [
                                            {
                                              name: "b-tooltip",
                                              rawName: "v-b-tooltip.hover",
                                              modifiers: { hover: true }
                                            }
                                          ],
                                          staticClass: "btn btn-sm btn-gmail",
                                          attrs: {
                                            to: _vm.withQuery({
                                              name: "login-email-otp"
                                            }),
                                            title: _vm.$t(
                                              "auth.login.login_using_email_otp"
                                            )
                                          }
                                        },
                                        [
                                          _c("i", {
                                            staticClass:
                                              "fas fa-envelope-open-text"
                                          })
                                        ]
                                      )
                                    : _vm._e(),
                                  _vm._v(" "),
                                  _vm.configs.auth.socialLogin &&
                                  _vm.configs.auth.socialLoginProviders &&
                                  _vm.configs.auth.socialLoginProviders.length
                                    ? _vm._l(
                                        _vm.configs.auth.socialLoginProviders,
                                        function(provider) {
                                          return _c(
                                            "a",
                                            {
                                              directives: [
                                                {
                                                  name: "b-tooltip",
                                                  rawName: "v-b-tooltip.hover",
                                                  modifiers: { hover: true }
                                                }
                                              ],
                                              key: provider,
                                              class:
                                                "btn btn-sm " +
                                                _vm.btns[provider],
                                              attrs: {
                                                href: "/auth/login/" + provider,
                                                title: _vm.$t(
                                                  "auth.login.login_with",
                                                  { attribute: provider }
                                                )
                                              }
                                            },
                                            [
                                              _c("i", {
                                                class: _vm.icons[provider]
                                              })
                                            ]
                                          )
                                        }
                                      )
                                    : _vm._e()
                                ],
                                2
                              )
                            ]),
                            _vm._v(" "),
                            _c("div", { staticClass: "text-center" }, [
                              _c("hr", { staticClass: "my-4" })
                            ])
                          ]
                        : _vm._e(),
                      _vm._v(" "),
                      _vm.configs.auth.resetPassword ||
                      _vm.configs.auth.registration
                        ? _c("div", { staticClass: "row mt-4" }, [
                            _vm.configs.auth.resetPassword
                              ? _c(
                                  "div",
                                  {
                                    class: [
                                      "col-12 text-center",
                                      {
                                        "col-md-6 text-md-left":
                                          _vm.configs.auth.registration
                                      }
                                    ]
                                  },
                                  [
                                    _c(
                                      "router-link",
                                      {
                                        staticClass: "text-primary m-l-5",
                                        attrs: {
                                          to: _vm.withQuery({
                                            name: "password"
                                          })
                                        }
                                      },
                                      [
                                        _c(
                                          "span",
                                          { staticClass: "font-weight-bold" },
                                          [
                                            _vm._v(
                                              _vm._s(
                                                _vm.$t(
                                                  "auth.password.forgot_password"
                                                )
                                              )
                                            )
                                          ]
                                        )
                                      ]
                                    )
                                  ],
                                  1
                                )
                              : _vm._e(),
                            _vm._v(" "),
                            _vm.configs.auth.registration
                              ? _c(
                                  "div",
                                  {
                                    class: [
                                      "col-12 text-center",
                                      {
                                        "col-md-6 text-md-right":
                                          _vm.configs.auth.resetPassword
                                      }
                                    ]
                                  },
                                  [
                                    _c(
                                      "router-link",
                                      {
                                        staticClass: "text-primary m-l-5",
                                        attrs: {
                                          to: _vm.withQuery({
                                            name: "register"
                                          })
                                        }
                                      },
                                      [
                                        _c(
                                          "span",
                                          { staticClass: "font-weight-bold" },
                                          [
                                            _vm._v(
                                              _vm._s(
                                                _vm.$t(
                                                  "auth.register.register_here"
                                                )
                                              )
                                            )
                                          ]
                                        )
                                      ]
                                    )
                                  ],
                                  1
                                )
                              : _vm._e()
                          ])
                        : _vm._e()
                    ]
                  : _vm._e(),
                _vm._v(" "),
                _vm.configs && (!_vm.configs.system || !_vm.configs.system.mode)
                  ? _c(
                      "div",
                      { staticClass: "text-center my-4 pt-4" },
                      [
                        _c(
                          "base-dropdown",
                          {
                            attrs: {
                              tag: "div",
                              direction: "up",
                              "menu-classes": "show-dropdown-up",
                              position:
                                _vm.configs.system &&
                                _vm.configs.system.direction === "ltr"
                                  ? "right"
                                  : "left"
                            }
                          },
                          [
                            _c(
                              "base-button",
                              {
                                staticClass: "text-uppercase",
                                attrs: {
                                  slot: "title",
                                  type: "button",
                                  design: "success",
                                  block: "",
                                  "data-toggle": "dropdown",
                                  role: "button"
                                },
                                slot: "title"
                              },
                              [
                                _c(
                                  "span",
                                  { staticClass: "nav-link-inner--text" },
                                  [_vm._v("Auto Login As")]
                                ),
                                _vm._v(" "),
                                _c("i", {
                                  staticClass: "fas fa-chevron-up m-l-5"
                                })
                              ]
                            ),
                            _vm._v(" "),
                            [
                              _c(
                                "button",
                                {
                                  staticClass: "dropdown-item",
                                  attrs: { type: "button" },
                                  on: {
                                    click: function($event) {
                                      return _vm.loginAs("admin", "admin")
                                    }
                                  }
                                },
                                [_vm._v("Admin")]
                              ),
                              _vm._v(" "),
                              _c(
                                "button",
                                {
                                  staticClass: "dropdown-item",
                                  attrs: { type: "button" },
                                  on: {
                                    click: function($event) {
                                      return _vm.loginAs("user", "user")
                                    }
                                  }
                                },
                                [_vm._v("User")]
                              ),
                              _vm._v(" "),
                              _c(
                                "button",
                                {
                                  staticClass: "dropdown-item",
                                  attrs: { type: "button" },
                                  on: {
                                    click: function($event) {
                                      return _vm.loginAs("user1", "user")
                                    }
                                  }
                                },
                                [_vm._v("User 1")]
                              ),
                              _vm._v(" "),
                              _c(
                                "button",
                                {
                                  staticClass: "dropdown-item",
                                  attrs: { type: "button" },
                                  on: {
                                    click: function($event) {
                                      return _vm.loginAs("user2", "user")
                                    }
                                  }
                                },
                                [_vm._v("User 2")]
                              ),
                              _vm._v(" "),
                              _c(
                                "button",
                                {
                                  staticClass: "dropdown-item",
                                  attrs: { type: "button" },
                                  on: {
                                    click: function($event) {
                                      return _vm.loginAs("user3", "user")
                                    }
                                  }
                                },
                                [_vm._v("User 3")]
                              ),
                              _vm._v(" "),
                              _c(
                                "button",
                                {
                                  staticClass: "dropdown-item",
                                  attrs: { type: "button" },
                                  on: {
                                    click: function($event) {
                                      return _vm.loginAs("user4", "user")
                                    }
                                  }
                                },
                                [_vm._v("User 4")]
                              ),
                              _vm._v(" "),
                              _c(
                                "button",
                                {
                                  staticClass: "dropdown-item",
                                  attrs: { type: "button" },
                                  on: {
                                    click: function($event) {
                                      return _vm.loginAs("user5", "user")
                                    }
                                  }
                                },
                                [_vm._v("User 5")]
                              )
                            ]
                          ],
                          2
                        )
                      ],
                      1
                    )
                  : _vm._e()
              ],
              2
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

/***/ "./resources/js/mixins/auth-form.js":
/*!******************************************!*\
  !*** ./resources/js/mixins/auth-form.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _js_views_auth_partials_box__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @js/views/auth/partials/box */ "./resources/js/views/auth/partials/box/index.vue");
/* harmony import */ var _views_layouts_partials_guest_header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @views/layouts/partials/guest-header */ "./resources/js/views/layouts/partials/guest-header.vue");
/* harmony import */ var _views_layouts_partials_guest_footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @views/layouts/partials/guest-footer */ "./resources/js/views/layouts/partials/guest-footer.vue");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    Box: _js_views_auth_partials_box__WEBPACK_IMPORTED_MODULE_1__["default"],
    GuestHeader: _views_layouts_partials_guest_header__WEBPACK_IMPORTED_MODULE_2__["default"],
    GuestFooter: _views_layouts_partials_guest_footer__WEBPACK_IMPORTED_MODULE_3__["default"]
  },
  data: function data() {
    return {
      formData: {},
      formErrors: {},
      initialFormData: null,
      initianLength: 0,
      emptyFormData: null,
      preRequisite: {},
      isLoading: true,
      icons: {
        'facebook': 'fab fa-facebook-f',
        'twitter': 'fab fa-twitter',
        'github': 'fab fa-github',
        'google': 'fab fa-google'
      },
      btns: {
        'facebook': 'btn-facebook',
        'twitter': 'btn-twitter',
        'github': 'btn-github',
        'google': 'btn-google-plus'
      }
    };
  },
  computed: _objectSpread(_objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])('config', ['configs', 'vars'])), Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])('user', ['twoFactorSet', 'hasRole'])), {}, {
    selectedLocale: function selectedLocale() {
      var locale = getQueryStringByParam('locale');
      return locale ? locale : this.configs.system.locale;
    },
    showLocaleSwitcher: function showLocaleSwitcher() {
      return this.configs.system.locales && this.configs.system.locales.length > 1;
    }
  }),
  methods: _objectSpread(_objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapActions"])('config', ['GetConfig'])), Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapActions"])('user', ['Register', 'SetCSRF', 'Logout', 'Login', 'LoginUsingOtp', 'ResetTwoFactorSet', 'RequestReset', 'ValidateResetPassword', 'ResetPassword', 'CheckTwoFactorCode'])), {}, {
    withQuery: function withQuery(toRoute) {
      var aTag = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      var routeQuery = this.$route.query;
      var href = '';

      if (!toRoute.hasOwnProperty('query')) {
        toRoute['query'] = {};
      }

      toRoute.query.locale = routeQuery && routeQuery.locale ? routeQuery.locale : undefined;

      if (routeQuery && routeQuery.locale) {
        href = "".concat(href, "?locale=").concat(routeQuery.locale);
      }

      if (routeQuery && routeQuery.ref && !(options && options.hasOwnProperty('removeRef') && options.removeRef)) {
        toRoute.query.ref = routeQuery.ref;

        if (href) {
          href = "?".concat(href, "&ref=").concat(routeQuery.ref);
        } else {
          href = "?".concat(href, "&ref=").concat(routeQuery.ref);
        }

        if (href) {
          href = "?".concat(href, "&ref=").concat(routeQuery.ref);
        } else {
          href = "?".concat(href, "&ref=").concat(routeQuery.ref);
        }
      }

      href = "".concat(toRoute.name).concat(href);

      if (aTag) {
        return href;
      }

      return toRoute;
    },
    switchLocale: function switchLocale(locale) {
      var url = window.location.href;
      window.location.href = updateQueryStringParam(url, 'locale', locale.locale);
    }
  }),
  mounted: function mounted() {
    this.initialFormData = _.cloneDeep(this.formData);
    this.isLoading = false;
  },
  beforeDestroy: function beforeDestroy() {
    delete this.formData;
    delete this.formErrors;
    delete this.preRequisite;
  }
});

/***/ }),

/***/ "./resources/js/views/auth/login.vue":
/*!*******************************************!*\
  !*** ./resources/js/views/auth/login.vue ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _login_vue_vue_type_template_id_6517b581_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login.vue?vue&type=template&id=6517b581&scoped=true& */ "./resources/js/views/auth/login.vue?vue&type=template&id=6517b581&scoped=true&");
/* harmony import */ var _login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.vue?vue&type=script&lang=js& */ "./resources/js/views/auth/login.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _login_vue_vue_type_style_index_0_id_6517b581_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login.vue?vue&type=style&index=0&id=6517b581&lang=scss&scoped=true& */ "./resources/js/views/auth/login.vue?vue&type=style&index=0&id=6517b581&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _login_vue_vue_type_template_id_6517b581_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _login_vue_vue_type_template_id_6517b581_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "6517b581",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/auth/login.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/auth/login.vue?vue&type=script&lang=js&":
/*!********************************************************************!*\
  !*** ./resources/js/views/auth/login.vue?vue&type=script&lang=js& ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./login.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/auth/login.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/auth/login.vue?vue&type=style&index=0&id=6517b581&lang=scss&scoped=true&":
/*!*****************************************************************************************************!*\
  !*** ./resources/js/views/auth/login.vue?vue&type=style&index=0&id=6517b581&lang=scss&scoped=true& ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_2_node_modules_sass_loader_dist_cjs_js_ref_9_3_node_modules_vue_loader_lib_index_js_vue_loader_options_login_vue_vue_type_style_index_0_id_6517b581_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--9-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--9-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./login.vue?vue&type=style&index=0&id=6517b581&lang=scss&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/auth/login.vue?vue&type=style&index=0&id=6517b581&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_2_node_modules_sass_loader_dist_cjs_js_ref_9_3_node_modules_vue_loader_lib_index_js_vue_loader_options_login_vue_vue_type_style_index_0_id_6517b581_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_2_node_modules_sass_loader_dist_cjs_js_ref_9_3_node_modules_vue_loader_lib_index_js_vue_loader_options_login_vue_vue_type_style_index_0_id_6517b581_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_2_node_modules_sass_loader_dist_cjs_js_ref_9_3_node_modules_vue_loader_lib_index_js_vue_loader_options_login_vue_vue_type_style_index_0_id_6517b581_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_2_node_modules_sass_loader_dist_cjs_js_ref_9_3_node_modules_vue_loader_lib_index_js_vue_loader_options_login_vue_vue_type_style_index_0_id_6517b581_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/views/auth/login.vue?vue&type=template&id=6517b581&scoped=true&":
/*!**************************************************************************************!*\
  !*** ./resources/js/views/auth/login.vue?vue&type=template&id=6517b581&scoped=true& ***!
  \**************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_login_vue_vue_type_template_id_6517b581_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./login.vue?vue&type=template&id=6517b581&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/auth/login.vue?vue&type=template&id=6517b581&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_login_vue_vue_type_template_id_6517b581_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_login_vue_vue_type_template_id_6517b581_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=login.js.map?id=df094a2d9a29ef1d0008