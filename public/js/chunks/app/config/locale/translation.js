(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app/config/locale/translation"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/app/config/locale/translation.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/app/config/locale/translation.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _mixins_header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @mixins/header */ "./resources/js/mixins/header.js");
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


/* harmony default export */ __webpack_exports__["default"] = ({
  components: {},
  data: function data() {
    return {
      activeModule: 'auth',
      formData: {
        words: {}
      },
      preRequisite: {
        locales: [],
        modules: []
      },
      formErrors: {},
      initialFormData: null,
      emptyFormData: null,
      showLocaleEditModal: false,
      isModalLoading: true,
      modalData: {
        locale: 'en',
        label: null,
        translationInEn: null,
        translation: null,
        firstKey: null,
        secondKey: null,
        thirdKey: null,
        fourthKey: null
      },
      initialModalData: {},
      isLoading: false,
      showReloadBtn: false
    };
  },
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])('config', ['vars'])),
  methods: _objectSpread(_objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapActions"])('common', ['Custom', 'SetPageHeader'])), Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapActions"])('config', ['SetUiConfig'])), {}, {
    getInitialData: function getInitialData() {
      var _this = this;

      this.isLoading = true;

      if (this.$route.query && this.$route.query.module) {
        this.activeModule = this.$route.query.module;
      }

      this.Custom({
        url: 'config/locales/pre-requisite',
        params: {
          module: this.activeModule
        }
      }).then(function (response) {
        _this.preRequisite.locales = _.cloneDeep(response.locales);
        _this.preRequisite.modules = _.cloneDeep(response.modules);
        response.words.objForEach(function (words, loc) {
          if (_.isObject(words)) {
            _this.formData.words[loc] = Object.assign({}, words);
          } else {
            _this.formData.words[loc] = {};
          }
        });
        _this.initialFormData = Object.assign({}, _this.formData);
        _this.initialModalData = Object.assign({}, _this.modalData);
        _this.isLoading = false;
      })["catch"](function (error) {
        _this.isLoading = false;
        _this.formErrors = formUtil.handleErrors(error);
      });
    },
    humanize: function humanize(word) {
      return _.startCase(word);
    },
    getLocaleByCode: function getLocaleByCode(localeCode) {
      var locale = this.preRequisite.locales.find(function (l) {
        return l.locale === localeCode;
      });
      return locale ? "".concat(locale.name, " (").concat(localeCode, ")") : localeCode;
    },
    updateRouteQuery: function updateRouteQuery(param) {
      var newQuery = Object.assign({}, this.$route.query, param);
      this.$router.push({
        path: this.$route.path,
        query: newQuery
      });
    },
    isString: function isString(myVar) {
      return _.isString(myVar);
    },
    isObject: function isObject(myVar) {
      return _.isObject(myVar);
    },
    toggleLocaleEditModal: function toggleLocaleEditModal(locale, firstKey, secondKey, thirdKey, fourthKey) {
      this.modalData = _.cloneDeep(this.initialModalData);
      this.modalData.locale = locale;
      this.modalData.firstKey = firstKey;
      this.modalData.secondKey = secondKey;
      this.modalData.thirdKey = thirdKey;
      this.modalData.fourthKey = fourthKey;
      this.modalData.label = this.getLabel(firstKey, secondKey, thirdKey, fourthKey);
      this.modalData.translationInEn = this.getTranslation('en', firstKey, secondKey, thirdKey, fourthKey);
      this.modalData.translation = this.getTranslation(locale, firstKey, secondKey, thirdKey, fourthKey);
      this.showLocaleEditModal = true;
      this.isModalLoading = false;
    },
    onLocaleEditModalShown: function onLocaleEditModalShown() {
      var _this2 = this;

      this.$nextTick(function () {
        _this2.$refs["newTranslation"].$refs["base-input-newTranslation"].focus();
      });
    },
    getTranslation: function getTranslation(locale, firstKey, secondKey, thirdKey, fourthKey) {
      return this.formData.words[locale][firstKey] ? secondKey && this.formData.words[locale][firstKey][secondKey] ? thirdKey && this.formData.words[locale][firstKey][secondKey][thirdKey] ? fourthKey && this.formData.words[locale][firstKey][secondKey][thirdKey][fourthKey] ? this.formData.words[locale][firstKey][secondKey][thirdKey][fourthKey] : fourthKey ? '' : this.formData.words[locale][firstKey][secondKey][thirdKey] : thirdKey ? '' : this.formData.words[locale][firstKey][secondKey] : secondKey ? '' : this.formData.words[locale][firstKey] : '';
    },
    getLabel: function getLabel(firstKey, secondKey, thirdKey, fourthKey) {
      return firstKey + (secondKey ? thirdKey ? fourthKey ? ' -> ' + secondKey + ' -> ' + thirdKey + ' -> ' + fourthKey : ' -> ' + secondKey + ' -> ' + thirdKey : ' -> ' + secondKey : '');
    },
    onLocaleEditModalHidden: function onLocaleEditModalHidden() {
      this.isModalLoading = true;
    },
    onLocaleEditModalOK: function onLocaleEditModalOK(e) {
      var _this3 = this;

      e.preventDefault();
      this.isModalLoading = true;

      if (this.modalData.firstKey && !this.formData.words[this.modalData.locale][this.modalData.firstKey]) {
        this.formData.words[this.modalData.locale][this.modalData.firstKey] = {};
      }

      if (this.modalData.secondKey && !this.formData.words[this.modalData.locale][this.modalData.firstKey][this.modalData.secondKey]) {
        this.formData.words[this.modalData.locale][this.modalData.firstKey][this.modalData.secondKey] = {};
      }

      if (this.modalData.thirdKey && !this.formData.words[this.modalData.locale][this.modalData.firstKey][this.modalData.secondKey][this.modalData.thirdKey]) {
        this.formData.words[this.modalData.locale][this.modalData.firstKey][this.modalData.secondKey][this.modalData.thirdKey] = {};
      }

      if (this.modalData.fourthKey && !this.formData.words[this.modalData.locale][this.modalData.firstKey][this.modalData.secondKey][this.modalData.thirdKey][this.modalData.fourthKey]) {
        this.formData.words[this.modalData.locale][this.modalData.firstKey][this.modalData.secondKey][this.modalData.thirdKey][this.modalData.fourthKey] = {};
      }

      if (this.modalData.firstKey && this.modalData.secondKey && this.modalData.thirdKey && this.modalData.fourthKey) {
        this.formData.words[this.modalData.locale][this.modalData.firstKey][this.modalData.secondKey][this.modalData.thirdKey][this.modalData.fourthKey] = this.modalData.translation;
      } else if (this.modalData.firstKey && this.modalData.secondKey && this.modalData.thirdKey) {
        this.formData.words[this.modalData.locale][this.modalData.firstKey][this.modalData.secondKey][this.modalData.thirdKey] = this.modalData.translation;
      } else if (this.modalData.firstKey && this.modalData.secondKey) {
        this.formData.words[this.modalData.locale][this.modalData.firstKey][this.modalData.secondKey] = this.modalData.translation;
      } else if (this.modalData.firstKey) {
        this.formData.words[this.modalData.locale][this.modalData.firstKey] = this.modalData.translation;
      }

      this.Custom({
        url: "config/locales/".concat(this.modalData.locale, "/translate"),
        method: 'post',
        data: {
          module: this.activeModule,
          words: this.formData.words[this.modalData.locale]
        }
      }).then(function (response) {
        _this3.initialFormData = _.cloneDeep(_this3.formData);
        _this3.modalData = _.cloneDeep(_this3.initialModalData);

        _this3.$refs.localeEditModal.hide();

        _this3.showReloadBtn = true;
      })["catch"](function (error) {
        _this3.formData = _.cloneDeep(_this3.initialFormData);
        _this3.isModalLoading = false;
        _this3.formErrors = formUtil.handleErrors(error);
      });
    },
    applyPageHeader: function applyPageHeader() {
      var pageHeaderOptions = {
        buttons: [_mixins_header__WEBPACK_IMPORTED_MODULE_1__["addButton"]('appConfigLocaleAdd', 'access-config')]
      };
      this.SetPageHeader(pageHeaderOptions);
    },
    reloadPage: function reloadPage() {
      location.reload(true);
    }
  }),
  mounted: function mounted() {
    this.emptyFormData = Object.assign({}, this.formData);
    this.getInitialData();
    this.applyPageHeader();
  },
  watch: {
    $route: function $route() {
      this.getInitialData();
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/app/config/locale/translation.vue?vue&type=style&index=0&lang=scss&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-2!./node_modules/sass-loader/dist/cjs.js??ref--9-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/app/config/locale/translation.vue?vue&type=style&index=0&lang=scss& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".table-wrapper.has-checkbox .custom-control-label:before {\n  top: -1rem;\n}\n.table-wrapper.has-checkbox .custom-control-label:after {\n  top: -1rem;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/app/config/locale/translation.vue?vue&type=style&index=0&lang=scss&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-2!./node_modules/sass-loader/dist/cjs.js??ref--9-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/app/config/locale/translation.vue?vue&type=style&index=0&lang=scss& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../node_modules/css-loader!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--9-2!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--9-3!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./translation.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/app/config/locale/translation.vue?vue&type=style&index=0&lang=scss&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/app/config/locale/translation.vue?vue&type=template&id=7ef4560c&":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/app/config/locale/translation.vue?vue&type=template&id=7ef4560c& ***!
  \***************************************************************************************************************************************************************************************************************************/
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
      staticClass: "p-0 flex-grow",
      attrs: {
        boxed: "",
        "with-loader": "",
        "is-loading": _vm.isLoading,
        "loader-color": _vm.vars.loaderColor
      }
    },
    [
      _c("div", { staticClass: "d-flex justify-content-between" }, [
        _c(
          "div",
          { staticClass: "text-left p-4" },
          [
            _vm.showReloadBtn
              ? _c(
                  "base-button",
                  {
                    attrs: { type: "button", design: "light", size: "md" },
                    on: { click: _vm.reloadPage }
                  },
                  [
                    _c("i", { staticClass: "fas fa-sync-alt" }),
                    _vm._v(" " + _vm._s(_vm.$t("general.reload_page")))
                  ]
                )
              : _vm._e()
          ],
          1
        ),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "text-right p-4" },
          [
            _c(
              "base-dropdown",
              {
                attrs: {
                  tag: "div",
                  direction: "down",
                  "menu-classes": "show-dropdown-up",
                  position: "right"
                }
              },
              [
                _c(
                  "base-button",
                  {
                    attrs: {
                      slot: "title",
                      type: "button",
                      "data-toggle": "dropdown",
                      role: "button",
                      design: "info",
                      size: "md"
                    },
                    slot: "title"
                  },
                  [
                    _c("i", { staticClass: "fas fa-boxes" }),
                    _vm._v(
                      " " +
                        _vm._s(
                          _vm.$t(_vm.activeModule + "." + _vm.activeModule)
                        ) +
                        " "
                    ),
                    _c("i", { staticClass: "fas fa-chevron-down" })
                  ]
                ),
                _vm._v(" "),
                _vm._l(_vm.preRequisite.modules, function(mod) {
                  return _c(
                    "a",
                    {
                      key: mod,
                      staticClass: "dropdown-item",
                      on: {
                        click: function($event) {
                          return _vm.updateRouteQuery({ module: mod })
                        }
                      }
                    },
                    [
                      _vm._v(
                        "\n                    " +
                          _vm._s(_vm.$t(mod + "." + mod)) +
                          "\n                    "
                      ),
                      mod == _vm.activeModule
                        ? _c("i", { staticClass: "fas fa-check pull-right" })
                        : _vm._e()
                    ]
                  )
                })
              ],
              2
            )
          ],
          1
        )
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "table-responsive table-wrapper" }, [
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
            _c(
              "table",
              {
                staticClass:
                  "table b-table table-striped table-hover b-table-stacked-sm"
              },
              [
                _c("thead", [
                  _c(
                    "tr",
                    [
                      _c("th", [_vm._v(_vm._s(_vm.$t("config.locale.key")))]),
                      _vm._v(" "),
                      _vm._l(_vm.preRequisite.locales, function(locale) {
                        return _c("th", { key: locale.locale }, [
                          _vm._v(
                            _vm._s(locale.name + " (" + locale.locale + ")")
                          )
                        ])
                      })
                    ],
                    2
                  )
                ]),
                _vm._v(" "),
                _c(
                  "tbody",
                  [
                    _vm._l(_vm.formData.words["en"], function(value, key) {
                      return [
                        _vm.isString(value)
                          ? [
                              _c(
                                "tr",
                                { key: key },
                                [
                                  _c("td", [_vm._v(_vm._s(key))]),
                                  _vm._v(" "),
                                  _vm._l(_vm.preRequisite.locales, function(
                                    locale
                                  ) {
                                    return _c(
                                      "td",
                                      {
                                        key: locale.locale,
                                        on: {
                                          dblclick: function($event) {
                                            return _vm.toggleLocaleEditModal(
                                              locale.locale,
                                              key
                                            )
                                          }
                                        }
                                      },
                                      [
                                        _vm._v(
                                          _vm._s(
                                            _vm.getTranslation(
                                              locale.locale,
                                              key
                                            )
                                          )
                                        )
                                      ]
                                    )
                                  })
                                ],
                                2
                              )
                            ]
                          : _vm._e(),
                        _vm._v(" "),
                        _vm.isObject(value)
                          ? [
                              _vm._l(value, function(secondValue, secondKey) {
                                return [
                                  _vm.isString(secondValue)
                                    ? [
                                        _c(
                                          "tr",
                                          { key: "" + key + secondKey },
                                          [
                                            _c("td", [
                                              _vm._v(
                                                _vm._s(key) +
                                                  " -> " +
                                                  _vm._s(secondKey)
                                              )
                                            ]),
                                            _vm._v(" "),
                                            _vm._l(
                                              _vm.preRequisite.locales,
                                              function(locale) {
                                                return _c(
                                                  "td",
                                                  {
                                                    key: locale.locale,
                                                    on: {
                                                      dblclick: function(
                                                        $event
                                                      ) {
                                                        return _vm.toggleLocaleEditModal(
                                                          locale.locale,
                                                          key,
                                                          secondKey
                                                        )
                                                      }
                                                    }
                                                  },
                                                  [
                                                    _vm._v(
                                                      _vm._s(
                                                        _vm.getTranslation(
                                                          locale.locale,
                                                          key,
                                                          secondKey
                                                        )
                                                      )
                                                    )
                                                  ]
                                                )
                                              }
                                            )
                                          ],
                                          2
                                        )
                                      ]
                                    : _vm._e(),
                                  _vm._v(" "),
                                  _vm.isObject(secondValue)
                                    ? [
                                        _vm._l(secondValue, function(
                                          thirdValue,
                                          thirdKey
                                        ) {
                                          return [
                                            _vm.isString(thirdValue)
                                              ? [
                                                  _c(
                                                    "tr",
                                                    {
                                                      key:
                                                        "" +
                                                        key +
                                                        secondKey +
                                                        thirdKey
                                                    },
                                                    [
                                                      _c("td", [
                                                        _vm._v(
                                                          _vm._s(key) +
                                                            " -> " +
                                                            _vm._s(secondKey) +
                                                            " -> " +
                                                            _vm._s(thirdKey)
                                                        )
                                                      ]),
                                                      _vm._v(" "),
                                                      _vm._l(
                                                        _vm.preRequisite
                                                          .locales,
                                                        function(locale) {
                                                          return _c(
                                                            "td",
                                                            {
                                                              key:
                                                                locale.locale,
                                                              on: {
                                                                dblclick: function(
                                                                  $event
                                                                ) {
                                                                  return _vm.toggleLocaleEditModal(
                                                                    locale.locale,
                                                                    key,
                                                                    secondKey,
                                                                    thirdKey
                                                                  )
                                                                }
                                                              }
                                                            },
                                                            [
                                                              _vm._v(
                                                                _vm._s(
                                                                  _vm.getTranslation(
                                                                    locale.locale,
                                                                    key,
                                                                    secondKey,
                                                                    thirdKey
                                                                  )
                                                                )
                                                              )
                                                            ]
                                                          )
                                                        }
                                                      )
                                                    ],
                                                    2
                                                  )
                                                ]
                                              : _vm._e(),
                                            _vm._v(" "),
                                            _vm.isObject(thirdValue)
                                              ? _vm._l(thirdValue, function(
                                                  fourthValue,
                                                  fourthKey
                                                ) {
                                                  return _c(
                                                    "tr",
                                                    {
                                                      key:
                                                        "" +
                                                        key +
                                                        secondKey +
                                                        thirdKey +
                                                        fourthKey
                                                    },
                                                    [
                                                      _c("td", [
                                                        _vm._v(
                                                          _vm._s(key) +
                                                            " -> " +
                                                            _vm._s(secondKey) +
                                                            " -> " +
                                                            _vm._s(thirdKey) +
                                                            " -> " +
                                                            _vm._s(fourthKey)
                                                        )
                                                      ]),
                                                      _vm._v(" "),
                                                      _vm._l(
                                                        _vm.preRequisite
                                                          .locales,
                                                        function(locale) {
                                                          return _c(
                                                            "td",
                                                            {
                                                              key:
                                                                locale.locale,
                                                              on: {
                                                                dblclick: function(
                                                                  $event
                                                                ) {
                                                                  return _vm.toggleLocaleEditModal(
                                                                    locale.locale,
                                                                    key,
                                                                    secondKey,
                                                                    thirdKey,
                                                                    fourthKey
                                                                  )
                                                                }
                                                              }
                                                            },
                                                            [
                                                              _vm._v(
                                                                _vm._s(
                                                                  _vm.getTranslation(
                                                                    locale.locale,
                                                                    key,
                                                                    secondKey,
                                                                    thirdKey,
                                                                    fourthKey
                                                                  )
                                                                )
                                                              )
                                                            ]
                                                          )
                                                        }
                                                      )
                                                    ],
                                                    2
                                                  )
                                                })
                                              : _vm._e()
                                          ]
                                        })
                                      ]
                                    : _vm._e()
                                ]
                              })
                            ]
                          : _vm._e()
                      ]
                    })
                  ],
                  2
                )
              ]
            )
          ]
        )
      ]),
      _vm._v(" "),
      _c(
        "b-modal",
        {
          ref: "localeEditModal",
          attrs: {
            size: "md",
            centered: "",
            lazy: "",
            busy: _vm.isModalLoading,
            "no-close-on-backdrop": "",
            "no-close-on-esc": ""
          },
          on: {
            ok: _vm.onLocaleEditModalOK,
            hidden: _vm.onLocaleEditModalHidden,
            shown: _vm.onLocaleEditModalShown
          },
          model: {
            value: _vm.showLocaleEditModal,
            callback: function($$v) {
              _vm.showLocaleEditModal = $$v
            },
            expression: "showLocaleEditModal"
          }
        },
        [
          _c("template", { slot: "modal-header" }, [
            _c("h5", { staticClass: "modal-title" }, [
              _vm._v(_vm._s(_vm.$t("config.locale.translation")))
            ])
          ]),
          _vm._v(" "),
          _c("div", [
            _c("div", { staticClass: "row" }, [
              _c(
                "div",
                { staticClass: "col-12" },
                [
                  _c("base-input", {
                    ref: "newTranslation",
                    staticClass: "mb-5",
                    attrs: {
                      label:
                        _vm.modalData.label + " (" + _vm.modalData.locale + ")",
                      type: "text",
                      error: _vm.formErrors.translation,
                      name: "newTranslation"
                    },
                    on: {
                      "update:error": function($event) {
                        return _vm.$set(_vm.formErrors, "translation", $event)
                      }
                    },
                    model: {
                      value: _vm.modalData.translation,
                      callback: function($$v) {
                        _vm.$set(_vm.modalData, "translation", $$v)
                      },
                      expression: "modalData.translation"
                    }
                  })
                ],
                1
              )
            ]),
            _vm._v(" "),
            _c("p", { staticClass: "text-muted small m-0" }, [
              _vm._v("In English - " + _vm._s(_vm.modalData.translationInEn))
            ])
          ])
        ],
        2
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/views/app/config/locale/translation.vue":
/*!**************************************************************!*\
  !*** ./resources/js/views/app/config/locale/translation.vue ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _translation_vue_vue_type_template_id_7ef4560c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./translation.vue?vue&type=template&id=7ef4560c& */ "./resources/js/views/app/config/locale/translation.vue?vue&type=template&id=7ef4560c&");
/* harmony import */ var _translation_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./translation.vue?vue&type=script&lang=js& */ "./resources/js/views/app/config/locale/translation.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _translation_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./translation.vue?vue&type=style&index=0&lang=scss& */ "./resources/js/views/app/config/locale/translation.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _translation_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _translation_vue_vue_type_template_id_7ef4560c___WEBPACK_IMPORTED_MODULE_0__["render"],
  _translation_vue_vue_type_template_id_7ef4560c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/app/config/locale/translation.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/app/config/locale/translation.vue?vue&type=script&lang=js&":
/*!***************************************************************************************!*\
  !*** ./resources/js/views/app/config/locale/translation.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_translation_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./translation.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/app/config/locale/translation.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_translation_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/app/config/locale/translation.vue?vue&type=style&index=0&lang=scss&":
/*!************************************************************************************************!*\
  !*** ./resources/js/views/app/config/locale/translation.vue?vue&type=style&index=0&lang=scss& ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_2_node_modules_sass_loader_dist_cjs_js_ref_9_3_node_modules_vue_loader_lib_index_js_vue_loader_options_translation_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader!../../../../../../node_modules/css-loader!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--9-2!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--9-3!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./translation.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/app/config/locale/translation.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_2_node_modules_sass_loader_dist_cjs_js_ref_9_3_node_modules_vue_loader_lib_index_js_vue_loader_options_translation_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_2_node_modules_sass_loader_dist_cjs_js_ref_9_3_node_modules_vue_loader_lib_index_js_vue_loader_options_translation_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_2_node_modules_sass_loader_dist_cjs_js_ref_9_3_node_modules_vue_loader_lib_index_js_vue_loader_options_translation_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_2_node_modules_sass_loader_dist_cjs_js_ref_9_3_node_modules_vue_loader_lib_index_js_vue_loader_options_translation_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/views/app/config/locale/translation.vue?vue&type=template&id=7ef4560c&":
/*!*********************************************************************************************!*\
  !*** ./resources/js/views/app/config/locale/translation.vue?vue&type=template&id=7ef4560c& ***!
  \*********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_translation_vue_vue_type_template_id_7ef4560c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./translation.vue?vue&type=template&id=7ef4560c& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/app/config/locale/translation.vue?vue&type=template&id=7ef4560c&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_translation_vue_vue_type_template_id_7ef4560c___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_translation_vue_vue_type_template_id_7ef4560c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=translation.js.map?id=e3df2aecce26c576fe7e