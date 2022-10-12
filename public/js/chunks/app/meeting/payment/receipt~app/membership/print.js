(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app/meeting/payment/receipt~app/membership/print"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/AppLogo.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/AppLogo.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************/
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

/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    tag: {
      type: String,
      "default": 'a'
    },
    place: {
      type: String,
      "default": 'normal'
    },
    size: {
      type: String,
      "default": 'normal'
    },
    appLogo: {
      type: Boolean,
      "default": false
    },
    inline: {
      type: Boolean,
      "default": false
    },
    link: {
      type: String,
      "default": ''
    },
    assets: {
      type: Object
    }
  },
  data: function data() {
    return {
      appLogoText: window.kmenv.name
    };
  },
  computed: _objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])('config', ['configs', 'uiConfigs'])), {}, {
    computedUrl: function computedUrl() {
      return this.tag === 'a' ? this.link !== '' ? this.link : '/' : false;
    },
    orgLogo: function orgLogo() {
      if (this.appLogo || !(this.configs.assets || this.assets)) {
        if (this.place === 'navbar' || this.place === 'sidebar' || this.place === 'dark') {
          return '/images/logo-light.png';
        }

        return '/images/logo.png';
      }

      var finalLogo = this.assets && this.assets.logo ? this.assets.logo : this.configs.assets.logo ? this.configs.assets.logo : '/images/logo.png';

      if (this.assets && this.assets.logoLight || this.configs.assets.logoLight) {
        if (this.place === 'navbar' && this.uiConfigs.topNavbarLogoLight || this.place === 'sidebar' && this.uiConfigs.leftSidebarLogoLight || this.place === 'dark') {
          finalLogo = this.assets && this.assets.logoLight ? this.assets.logoLight : this.configs.assets.logoLight;
        }
      }

      return finalLogo;
    },
    appTitle: function appTitle() {
      return this.configs.basic ? this.configs.basic.appName : window.kmenv.name;
    }
  })
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/layouts/partials/print-headers/simple.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/layouts/partials/print-headers/simple.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_AppLogo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @components/AppLogo */ "./resources/js/components/AppLogo.vue");
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


/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    AppLogo: _components_AppLogo__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  props: ['customConfigs'],
  computed: _objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_1__["mapGetters"])('config', ['configs'])), {}, {
    computedConfig: function computedConfig() {
      return this.customConfigs ? this.customConfigs : {};
    },
    computedBasic: function computedBasic() {
      return this.customConfigs && this.customConfigs.basic ? this.customConfigs.basic : this.configs.basic;
    },
    address: function address() {
      var address = this.computedBasic.orgAddressLine1;
      address = this.computedBasic.orgAddressLine2 ? address ? "".concat(address, ", ").concat(this.computedBasic.orgAddressLine2) : this.computedBasic.orgAddressLine2 : address;
      return address;
    },
    region: function region() {
      var region = this.computedBasic.orgCity;
      region = region ? this.computedBasic.orgZipcode ? "".concat(region, " - ").concat(this.computedBasic.orgZipcode) : region : '';
      region = this.computedBasic.orgState ? region ? "".concat(region, ", ").concat(this.computedBasic.orgState) : this.computedBasic.orgState : region;
      region = this.computedBasic.orgCountry ? region ? "".concat(region, ", ").concat(this.computedBasic.orgCountry) : this.computedBasic.orgCountry : region;
      return region;
    }
  })
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/AppLogo.vue?vue&type=template&id=7ceb4ed1&":
/*!**********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/AppLogo.vue?vue&type=template&id=7ceb4ed1& ***!
  \**********************************************************************************************************************************************************************************************************/
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
    _vm.tag,
    {
      tag: "component",
      class: [
        "logo",
        _vm.place + "-logo",
        _vm.size + "-logo",
        _vm.orgLogo ? "org-logo" : "app-logo",
        _vm.inline ? "inline-logo" : ""
      ],
      attrs: { href: _vm.computedUrl }
    },
    [
      _vm.orgLogo
        ? _c("img", {
            staticClass: "logo-icon",
            attrs: { src: _vm.orgLogo, alt: _vm.appTitle }
          })
        : [
            _c(
              "span",
              { staticClass: "logo-text", attrs: { title: _vm.appTitle } },
              [_vm._v(_vm._s(_vm.appLogoText))]
            )
          ]
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/layouts/partials/print-headers/simple.vue?vue&type=template&id=06f296e3&":
/*!***********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/layouts/partials/print-headers/simple.vue?vue&type=template&id=06f296e3& ***!
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
  return _c(
    "header",
    {
      class: [
        "print-header print-header-simple",
        "layout-" + _vm.computedConfig.printHeaderLayout
      ]
    },
    [
      _c("div", { staticClass: "row" }, [
        _c(
          "div",
          { staticClass: "col-6" },
          [
            _vm.computedConfig.printHeaderLogo
              ? _c("app-logo", {
                  attrs: {
                    place: "print-header",
                    assets:
                      _vm.computedConfig && _vm.computedConfig.assets
                        ? _vm.computedConfig.assets
                        : null
                  }
                })
              : _vm.computedBasic.orgName
              ? _c("h3", { staticClass: "font-weight-700" }, [
                  _vm._v(_vm._s(_vm.computedBasic.orgName))
                ])
              : _vm._e()
          ],
          1
        ),
        _vm._v(" "),
        _vm.computedBasic && _vm.computedConfig.printHeaderSellerInfo
          ? _c("div", { staticClass: "col-6 text-right contact-details" }, [
              _vm.computedConfig.printHeaderLogo && _vm.computedBasic.orgName
                ? _c("h4", { staticClass: "font-weight-700" }, [
                    _vm._v(_vm._s(_vm.computedBasic.orgName))
                  ])
                : _vm._e(),
              _vm._v(" "),
              _vm.address ? _c("p", [_vm._v(_vm._s(_vm.address))]) : _vm._e(),
              _vm._v(" "),
              _vm.region ? _c("p", [_vm._v(_vm._s(_vm.region))]) : _vm._e(),
              _vm._v(" "),
              _vm.computedBasic.phone || _vm.computedBasic.email
                ? _c("h6", [
                    _vm.computedBasic.phone
                      ? _c("span", {}, [
                          _vm._v(_vm._s(_vm.$t("config.basic.phone")) + ": "),
                          _c("span", { staticClass: "font-weight-700" }, [
                            _vm._v(_vm._s(_vm.computedBasic.phone))
                          ])
                        ])
                      : _vm._e(),
                    _vm.computedBasic.email
                      ? _c("span", { staticClass: "pre-comma" }, [
                          _vm._v(_vm._s(_vm.$t("config.basic.email")) + ": "),
                          _c("span", { staticClass: "font-weight-700" }, [
                            _vm._v(_vm._s(_vm.computedBasic.email))
                          ])
                        ])
                      : _vm._e()
                  ])
                : _vm._e()
            ])
          : _vm._e()
      ])
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/AppLogo.vue":
/*!*********************************************!*\
  !*** ./resources/js/components/AppLogo.vue ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AppLogo_vue_vue_type_template_id_7ceb4ed1___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AppLogo.vue?vue&type=template&id=7ceb4ed1& */ "./resources/js/components/AppLogo.vue?vue&type=template&id=7ceb4ed1&");
/* harmony import */ var _AppLogo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AppLogo.vue?vue&type=script&lang=js& */ "./resources/js/components/AppLogo.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _AppLogo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _AppLogo_vue_vue_type_template_id_7ceb4ed1___WEBPACK_IMPORTED_MODULE_0__["render"],
  _AppLogo_vue_vue_type_template_id_7ceb4ed1___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/AppLogo.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/AppLogo.vue?vue&type=script&lang=js&":
/*!**********************************************************************!*\
  !*** ./resources/js/components/AppLogo.vue?vue&type=script&lang=js& ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AppLogo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./AppLogo.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/AppLogo.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AppLogo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/AppLogo.vue?vue&type=template&id=7ceb4ed1&":
/*!****************************************************************************!*\
  !*** ./resources/js/components/AppLogo.vue?vue&type=template&id=7ceb4ed1& ***!
  \****************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AppLogo_vue_vue_type_template_id_7ceb4ed1___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./AppLogo.vue?vue&type=template&id=7ceb4ed1& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/AppLogo.vue?vue&type=template&id=7ceb4ed1&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AppLogo_vue_vue_type_template_id_7ceb4ed1___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AppLogo_vue_vue_type_template_id_7ceb4ed1___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/views/layouts/partials/print-headers/simple.vue":
/*!**********************************************************************!*\
  !*** ./resources/js/views/layouts/partials/print-headers/simple.vue ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _simple_vue_vue_type_template_id_06f296e3___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./simple.vue?vue&type=template&id=06f296e3& */ "./resources/js/views/layouts/partials/print-headers/simple.vue?vue&type=template&id=06f296e3&");
/* harmony import */ var _simple_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./simple.vue?vue&type=script&lang=js& */ "./resources/js/views/layouts/partials/print-headers/simple.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _simple_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _simple_vue_vue_type_template_id_06f296e3___WEBPACK_IMPORTED_MODULE_0__["render"],
  _simple_vue_vue_type_template_id_06f296e3___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/layouts/partials/print-headers/simple.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/layouts/partials/print-headers/simple.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************!*\
  !*** ./resources/js/views/layouts/partials/print-headers/simple.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_simple_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./simple.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/layouts/partials/print-headers/simple.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_simple_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/layouts/partials/print-headers/simple.vue?vue&type=template&id=06f296e3&":
/*!*****************************************************************************************************!*\
  !*** ./resources/js/views/layouts/partials/print-headers/simple.vue?vue&type=template&id=06f296e3& ***!
  \*****************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_simple_vue_vue_type_template_id_06f296e3___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./simple.vue?vue&type=template&id=06f296e3& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/layouts/partials/print-headers/simple.vue?vue&type=template&id=06f296e3&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_simple_vue_vue_type_template_id_06f296e3___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_simple_vue_vue_type_template_id_06f296e3___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=print.js.map?id=0f3ef8c67946be0ef156