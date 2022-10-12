(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app/config/permission/index"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/app/config/permission/index.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/app/config/permission/index.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _api_permission__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @api/permission */ "./resources/js/api/permission.js");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
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


/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      activeModule: 'config',
      formData: {
        roles: []
      },
      preRequisite: {
        roles: [],
        permissions: [],
        modules: [],
        assignedPermissions: []
      },
      formErrors: {},
      initialFormData: null,
      isLoading: false
    };
  },
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_1__["mapGetters"])('config', ['vars'])),
  methods: {
    submit: function submit() {
      var _this = this;

      this.isLoading = true;
      _api_permission__WEBPACK_IMPORTED_MODULE_0__["assign"](_objectSpread(_objectSpread({}, this.formData), {}, {
        module: this.activeModule
      })).then(function (response) {
        _this.isLoading = false;

        _this.$toasted.success(response.message, _this.$toastConfig.success);
      })["catch"](function (error) {
        _this.isLoading = false;
        _this.formErrors = formUtil.handleErrors(error);
      });
    },
    getInitialData: function getInitialData() {
      var _this2 = this;

      this.isLoading = true;

      if (this.$route.query && this.$route.query.module) {
        this.activeModule = this.$route.query.module;
      }

      _api_permission__WEBPACK_IMPORTED_MODULE_0__["getPreRequisite"](this.activeModule).then(function (response) {
        _this2.preRequisite = _.cloneDeep(response);
        _this2.formData.roles = [];

        _this2.preRequisite.roles.forEach(function (role) {
          var permissions = _this2.preRequisite.assignedPermissions.find(function (o) {
            return o.role.toUpperCase() === role.name.toUpperCase();
          });

          _this2.formData.roles.push({
            name: role.name,
            permissions: permissions != 'undefined' ? permissions.permissions : []
          });
        });

        _this2.isLoading = false;
      })["catch"](function (error) {
        _this2.isLoading = false;
        _this2.formErrors = formUtil.handleErrors(error);
      });
    },
    humanize: function humanize(word) {
      return _.startCase(word);
    },
    updateRouteQuery: function updateRouteQuery(param) {
      var newQuery = Object.assign({}, this.$route.query, param);
      this.$router.push({
        path: this.$route.path,
        query: newQuery
      });
    }
  },
  mounted: function mounted() {
    this.getInitialData();
  },
  watch: {
    $route: function $route() {
      this.getInitialData();
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/app/config/permission/index.vue?vue&type=style&index=0&lang=scss&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-2!./node_modules/sass-loader/dist/cjs.js??ref--9-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/app/config/permission/index.vue?vue&type=style&index=0&lang=scss& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".table-wrapper.has-checkbox .custom-control-label:before {\n  top: -1rem;\n}\n.table-wrapper.has-checkbox .custom-control-label:after {\n  top: -1rem;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/app/config/permission/index.vue?vue&type=style&index=0&lang=scss&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-2!./node_modules/sass-loader/dist/cjs.js??ref--9-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/app/config/permission/index.vue?vue&type=style&index=0&lang=scss& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../node_modules/css-loader!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--9-2!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--9-3!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/app/config/permission/index.vue?vue&type=style&index=0&lang=scss&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/app/config/permission/index.vue?vue&type=template&id=3167ef22&":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/app/config/permission/index.vue?vue&type=template&id=3167ef22& ***!
  \*************************************************************************************************************************************************************************************************************************/
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
                    staticClass: "dropdown-item",
                    on: {
                      click: function($event) {
                        return _vm.updateRouteQuery({ module: mod })
                      }
                    }
                  },
                  [
                    _vm._v(
                      "\n                " +
                        _vm._s(_vm.$t(mod + "." + mod)) +
                        "\n                "
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
      ),
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
                      _c("th", [
                        _vm._v(_vm._s(_vm.$t("config.permission.permissions")))
                      ]),
                      _vm._v(" "),
                      _vm._l(_vm.formData.roles, function(rolePermission) {
                        return _c("th", [
                          _vm._v(_vm._s(_vm.humanize(rolePermission.name)))
                        ])
                      })
                    ],
                    2
                  )
                ]),
                _vm._v(" "),
                _c(
                  "tbody",
                  _vm._l(_vm.preRequisite.permissions, function(permission) {
                    return _c(
                      "tr",
                      [
                        _c("td", [_vm._v(_vm._s(_vm.humanize(permission)))]),
                        _vm._v(" "),
                        _vm._l(_vm.formData.roles, function(rolePermission) {
                          return _c(
                            "td",
                            [
                              _c("base-checkbox", {
                                staticClass: "ml-3",
                                attrs: {
                                  value: permission,
                                  disabled: rolePermission.name === "admin"
                                },
                                model: {
                                  value: rolePermission.permissions,
                                  callback: function($$v) {
                                    _vm.$set(rolePermission, "permissions", $$v)
                                  },
                                  expression: "rolePermission.permissions"
                                }
                              })
                            ],
                            1
                          )
                        })
                      ],
                      2
                    )
                  }),
                  0
                )
              ]
            ),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "text-right mt-5 px-4 mb-4" },
              [
                _c(
                  "base-button",
                  { attrs: { type: "submit", design: "primary" } },
                  [
                    _vm._v(
                      _vm._s(
                        _vm.$t("global.save", {
                          attribute: _vm.$t("config.permission.permissions")
                        })
                      )
                    )
                  ]
                )
              ],
              1
            )
          ]
        )
      ])
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/api/permission.js":
/*!****************************************!*\
  !*** ./resources/js/api/permission.js ***!
  \****************************************/
/*! exports provided: getPreRequisite, assign */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPreRequisite", function() { return getPreRequisite; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "assign", function() { return assign; });
/* harmony import */ var _core_utils_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core/utils/request */ "./resources/js/core/utils/request.js");

var apiUrl = '/config/permissions';
function getPreRequisite(module) {
  return Object(_core_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: apiUrl + '/pre-requisite',
    method: 'get',
    params: {
      module: module
    }
  });
}
function assign(data) {
  return Object(_core_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: apiUrl + '/assign',
    method: 'post',
    data: data
  });
}

/***/ }),

/***/ "./resources/js/views/app/config/permission/index.vue":
/*!************************************************************!*\
  !*** ./resources/js/views/app/config/permission/index.vue ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_vue_vue_type_template_id_3167ef22___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=3167ef22& */ "./resources/js/views/app/config/permission/index.vue?vue&type=template&id=3167ef22&");
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ "./resources/js/views/app/config/permission/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.vue?vue&type=style&index=0&lang=scss& */ "./resources/js/views/app/config/permission/index.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_3167ef22___WEBPACK_IMPORTED_MODULE_0__["render"],
  _index_vue_vue_type_template_id_3167ef22___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/app/config/permission/index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/app/config/permission/index.vue?vue&type=script&lang=js&":
/*!*************************************************************************************!*\
  !*** ./resources/js/views/app/config/permission/index.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/app/config/permission/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/app/config/permission/index.vue?vue&type=style&index=0&lang=scss&":
/*!**********************************************************************************************!*\
  !*** ./resources/js/views/app/config/permission/index.vue?vue&type=style&index=0&lang=scss& ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_2_node_modules_sass_loader_dist_cjs_js_ref_9_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader!../../../../../../node_modules/css-loader!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--9-2!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--9-3!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/app/config/permission/index.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_2_node_modules_sass_loader_dist_cjs_js_ref_9_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_2_node_modules_sass_loader_dist_cjs_js_ref_9_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_2_node_modules_sass_loader_dist_cjs_js_ref_9_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_2_node_modules_sass_loader_dist_cjs_js_ref_9_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/views/app/config/permission/index.vue?vue&type=template&id=3167ef22&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/views/app/config/permission/index.vue?vue&type=template&id=3167ef22& ***!
  \*******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_3167ef22___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=3167ef22& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/app/config/permission/index.vue?vue&type=template&id=3167ef22&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_3167ef22___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_3167ef22___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=index.js.map?id=d68dd1c20fb231f591d7