(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["auth/register"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/auth/register.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/auth/register.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _mixins_auth_form__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @mixins/auth-form */ "./resources/js/mixins/auth-form.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
        name: '',
        email: '',
        username: '',
        language: '',
        password: '',
        passwordConfirmation: ''
      },
      preRequisite: {
        languages: [{
          uuid: "japanese",
          label: "Japanese"
        }, {
          uuid: "english",
          label: "English"
        }, {
          uuid: "vietnamese",
          label: "Vietnamese"
        }, {
          uuid: "chinese",
          label: "Chinese"
        }]
      },
      selectedLanguage: "",
      registrationPending: false,
      registrationPendingMessage: $t('auth.register.pending_activation_message')
    };
  },
  methods: {
    submit: function submit() {
      var _this = this;

      this.isLoading = true;
      var routeQuery = this.$route.query;
      this.$gaEvent('engagement', 'register', 'Normal');
      this.Register(this.formData).then(function (response) {
        _this.$toasted.success(response.message, _this.$toastConfig);

        if (response.registrationStatus === 'activated') {
          _this.$router.push(_this.withQuery({
            name: 'login'
          }));
        } else {
          _this.registrationPending = true;
          _this.registrationPendingMessage = response.message;
        }

        _this.isLoading = false;
      })["catch"](function (error) {
        _this.isLoading = false;
        _this.formErrors = formUtil.handleErrors(error);
      });
    }
  },
  computed: {
    selectLanguage: {
      get: function get() {
        if (this.language) {
          return this.formData.language;
        } else {
          return this.selectedLanguage;
        }
      },
      set: function set(value) {
        if (value === "japanese") {
          this.formData.language = "Japanese";
        } else if (value === "english") {
          this.formData.language = "English";
        } else if (value === "vietnamese") {
          this.formData.language = "Vietnamese";
        } else if (value === "chinese") {
          this.formData.language = "Chinese";
        }

        this.selectedLanguage = value;
      }
    }
  },
  created: function created() {
    if (this.$route.query.hasOwnProperty('registered')) {
      this.registrationPending = this.$route.query.hasOwnProperty('registered') ? true : false;
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/auth/register.vue?vue&type=template&id=005be7bb&scoped=true&":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/auth/register.vue?vue&type=template&id=005be7bb&scoped=true& ***!
  \***********************************************************************************************************************************************************************************************************************/
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
        { attrs: { width: "xxl" } },
        [
          _c("animated-loader", {
            attrs: {
              "is-loading": _vm.isLoading,
              "loader-color": _vm.vars.loaderColor
            }
          }),
          _vm._v(" "),
          !_vm.registrationPending
            ? [
                _c("guest-header", [
                  _c("h5", [_vm._v(_vm._s(_vm.$t("auth.register.page_title")))])
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
                      _c("div", { staticClass: "row" }, [
                        _c(
                          "div",
                          { staticClass: "col-md-6" },
                          [
                            _c("base-input", {
                              staticClass: "mb-3",
                              attrs: {
                                "auto-focus": "",
                                label: _vm.$t("auth.register.props.name"),
                                type: "text",
                                name: "name",
                                "addon-left-icon": "far fa-id-badge",
                                error: _vm.formErrors.name
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
                          { staticClass: "col-md-6" },
                          [
                            _c("base-input", {
                              staticClass: "mb-3",
                              attrs: {
                                label: _vm.$t("auth.register.props.email"),
                                type: "text",
                                name: "email",
                                "addon-left-icon": "fas fa-envelope",
                                error: _vm.formErrors.email
                              },
                              on: {
                                "update:error": function($event) {
                                  return _vm.$set(
                                    _vm.formErrors,
                                    "email",
                                    $event
                                  )
                                }
                              },
                              model: {
                                value: _vm.formData.email,
                                callback: function($$v) {
                                  _vm.$set(_vm.formData, "email", $$v)
                                },
                                expression: "formData.email"
                              }
                            })
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c(
                          "div",
                          { staticClass: "col-md-6" },
                          [
                            _c("base-input", {
                              staticClass: "mb-3",
                              attrs: {
                                label: _vm.$t("auth.register.props.username"),
                                type: "text",
                                name: "username",
                                "addon-left-icon": "fas fa-user",
                                error: _vm.formErrors.username
                              },
                              on: {
                                "update:error": function($event) {
                                  return _vm.$set(
                                    _vm.formErrors,
                                    "username",
                                    $event
                                  )
                                }
                              },
                              model: {
                                value: _vm.formData.username,
                                callback: function($$v) {
                                  _vm.$set(_vm.formData, "username", $$v)
                                },
                                expression: "formData.username"
                              }
                            })
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c(
                          "div",
                          { staticClass: "col-md-6" },
                          [
                            _c("base-select", {
                              staticClass: "mb-3",
                              attrs: {
                                label: _vm.$t("auth.register.props.language"),
                                options: _vm.preRequisite.languages,
                                error: _vm.formErrors.language,
                                "allow-empty": false,
                                "preselect-first": "",
                                simple: "",
                                "track-by": "uuid",
                                "show-by": "label",
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
                                value: _vm.selectLanguage,
                                callback: function($$v) {
                                  _vm.selectLanguage = $$v
                                },
                                expression: "selectLanguage"
                              }
                            })
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c(
                          "div",
                          { staticClass: "col-md-6" },
                          [
                            _c("base-input", {
                              staticClass: "mb-3",
                              attrs: {
                                label: _vm.$t("auth.register.props.password"),
                                type: "password",
                                name: "password",
                                "addon-left-icon": "fas fa-key",
                                error: _vm.formErrors.password
                              },
                              on: {
                                "update:error": function($event) {
                                  return _vm.$set(
                                    _vm.formErrors,
                                    "password",
                                    $event
                                  )
                                }
                              },
                              model: {
                                value: _vm.formData.password,
                                callback: function($$v) {
                                  _vm.$set(_vm.formData, "password", $$v)
                                },
                                expression: "formData.password"
                              }
                            })
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c(
                          "div",
                          { staticClass: "col-md-6" },
                          [
                            _c("base-input", {
                              staticClass: "mb-3",
                              attrs: {
                                label: _vm.$t(
                                  "auth.register.props.confirm_password"
                                ),
                                type: "password",
                                name: "passwordConfirmation",
                                "addon-left-icon": "fas fa-key",
                                error: _vm.formErrors.passwordConfirmation
                              },
                              on: {
                                "update:error": function($event) {
                                  return _vm.$set(
                                    _vm.formErrors,
                                    "passwordConfirmation",
                                    $event
                                  )
                                }
                              },
                              model: {
                                value: _vm.formData.passwordConfirmation,
                                callback: function($$v) {
                                  _vm.$set(
                                    _vm.formData,
                                    "passwordConfirmation",
                                    $$v
                                  )
                                },
                                expression: "formData.passwordConfirmation"
                              }
                            })
                          ],
                          1
                        )
                      ]),
                      _vm._v(" "),
                      _vm.configs &&
                      _vm.configs.auth &&
                      _vm.configs.auth.registrationTerms
                        ? _c(
                            "div",
                            { staticClass: "pt-4 pb-2 text-muted text-center" },
                            [
                              _vm._v(
                                "\n                        " +
                                  _vm._s(
                                    _vm.$t(
                                      "auth.register.registration_terms_label"
                                    )
                                  ) +
                                  " "
                              ),
                              _c(
                                "a",
                                {
                                  attrs: {
                                    href: "/pages/terms",
                                    target: "_blank"
                                  }
                                },
                                [
                                  _vm._v(
                                    _vm._s(
                                      _vm.$t(
                                        "auth.register.registration_terms_label_tos"
                                      )
                                    )
                                  )
                                ]
                              ),
                              _vm._v(
                                " " +
                                  _vm._s(
                                    _vm.$t(
                                      "auth.register.registration_terms_label_and"
                                    )
                                  ) +
                                  " "
                              ),
                              _c(
                                "a",
                                {
                                  attrs: {
                                    href: "/pages/privacy",
                                    target: "_blank"
                                  }
                                },
                                [
                                  _vm._v(
                                    _vm._s(
                                      _vm.$t(
                                        "auth.register.registration_terms_label_privacy"
                                      )
                                    )
                                  )
                                ]
                              ),
                              _vm._v(".\n                    ")
                            ]
                          )
                        : _vm._e(),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "text-center mt-4" },
                        [
                          _c(
                            "base-button",
                            {
                              staticClass: "my-4 text-lg",
                              attrs: {
                                type: "submit",
                                design: "primary",
                                block: ""
                              }
                            },
                            [_vm._v(_vm._s(_vm.$t("auth.register.register")))]
                          )
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c("div", { staticClass: "row mt-4" }, [
                        _c(
                          "div",
                          { staticClass: "col-md-12 text-center" },
                          [
                            _c(
                              "router-link",
                              {
                                staticClass: "text-primary m-l-5",
                                attrs: { to: _vm.withQuery({ name: "login" }) }
                              },
                              [
                                _c(
                                  "span",
                                  { staticClass: "font-weight-bold" },
                                  [
                                    _vm._v(
                                      _vm._s(
                                        _vm.$t(
                                          "auth.register.already_have_account"
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
                      ]),
                      _vm._v(" "),
                      _vm.showLocaleSwitcher
                        ? _c("div", { staticClass: "row mt-4" }, [
                            _c(
                              "div",
                              { staticClass: "col-md-12 text-center" },
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
                                            staticClass: "nav-link-inner--text"
                                          },
                                          [_vm._v(_vm._s(_vm.selectedLocale))]
                                        ),
                                        _vm._v(" "),
                                        _c("i", {
                                          staticClass: "fas fa-chevron-up m-l-5"
                                        })
                                      ]
                                    ),
                                    _vm._v(" "),
                                    _vm._l(_vm.configs.system.locales, function(
                                      lo
                                    ) {
                                      return _c(
                                        "button",
                                        {
                                          key: lo.uuid,
                                          staticClass: "dropdown-item",
                                          attrs: { type: "button" },
                                          on: {
                                            click: function($event) {
                                              return _vm.switchLocale(lo)
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
                                    })
                                  ],
                                  2
                                )
                              ],
                              1
                            )
                          ])
                        : _vm._e()
                    ]
                  )
                ])
              ]
            : [
                _c("guest-header", [
                  _c("h4", { staticClass: "text-primary" }, [
                    _vm._v(_vm._s(_vm.$t("auth.register.completed")))
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "text-muted" }, [
                  _c("h6", { staticClass: "text-muted text-center" }, [
                    _vm._v(_vm._s(_vm.registrationPendingMessage))
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "row mt-4" }, [
                  _c(
                    "div",
                    { staticClass: "col-md-12 text-center" },
                    [
                      _c(
                        "router-link",
                        {
                          staticClass: "text-primary m-l-5",
                          attrs: { to: _vm.withQuery({ name: "login" }) }
                        },
                        [
                          _c("span", { staticClass: "font-weight-bold" }, [
                            _vm._v(_vm._s(_vm.$t("auth.login.page_title")))
                          ])
                        ]
                      )
                    ],
                    1
                  )
                ])
              ]
        ],
        2
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

/***/ "./resources/js/views/auth/register.vue":
/*!**********************************************!*\
  !*** ./resources/js/views/auth/register.vue ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _register_vue_vue_type_template_id_005be7bb_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./register.vue?vue&type=template&id=005be7bb&scoped=true& */ "./resources/js/views/auth/register.vue?vue&type=template&id=005be7bb&scoped=true&");
/* harmony import */ var _register_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./register.vue?vue&type=script&lang=js& */ "./resources/js/views/auth/register.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _register_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _register_vue_vue_type_template_id_005be7bb_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _register_vue_vue_type_template_id_005be7bb_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "005be7bb",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/auth/register.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/auth/register.vue?vue&type=script&lang=js&":
/*!***********************************************************************!*\
  !*** ./resources/js/views/auth/register.vue?vue&type=script&lang=js& ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_register_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./register.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/auth/register.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_register_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/auth/register.vue?vue&type=template&id=005be7bb&scoped=true&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/views/auth/register.vue?vue&type=template&id=005be7bb&scoped=true& ***!
  \*****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_register_vue_vue_type_template_id_005be7bb_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./register.vue?vue&type=template&id=005be7bb&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/auth/register.vue?vue&type=template&id=005be7bb&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_register_vue_vue_type_template_id_005be7bb_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_register_vue_vue_type_template_id_005be7bb_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=register.js.map?id=53a81b3edde0f0ee68a7