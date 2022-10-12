(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app/config/assets/index"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/app/config/assets/index.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/app/config/assets/index.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_ImageUploader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @components/ImageUploader */ "./resources/js/components/ImageUploader.vue");
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    ImageUploader: _components_ImageUploader__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  data: function data() {
    return {
      logo: '',
      logoLight: '',
      icon: '',
      iconMaskable: '',
      icon512: '',
      icon192: '',
      icon180: '',
      icon32: '',
      icon16: '',
      favicon: '',
      isLoading: false
    };
  },
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_1__["mapGetters"])('config', ['configs', 'vars'])),
  methods: _objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_1__["mapActions"])('config', ['GetConfig'])), {}, {
    handleUploadError: function handleUploadError(errorMessage) {
      this.$toasted.error(errorMessage, this.$toastConfig.error);
    },
    getInitialData: function getInitialData() {
      var imageObj = this.configs.assets;

      if (imageObj) {
        this.logo = imageObj.logo || '';
        this.logoLight = imageObj.logoLight || '';
        this.icon = imageObj.icon || '';
        this.iconMaskable = imageObj.iconMaskable || '';
        this.icon512 = imageObj.icon512 || '';
        this.icon192 = imageObj.icon192 || '';
        this.icon180 = imageObj.icon180 || '';
        this.icon32 = imageObj.icon32 || '';
        this.icon16 = imageObj.icon16 || '';
        this.favicon = imageObj.favicon || '';
      }
    },
    refreshConfig: function refreshConfig() {
      var _this = this;

      this.isLoading = true;
      this.GetConfig().then(function (response) {
        var imageObj = _this.configs.assets;

        if (imageObj) {
          _this.logo = imageObj.logo || '';
          _this.logoLight = imageObj.logoLight || '';
          _this.icon = imageObj.icon || '';
          _this.iconMaskable = imageObj.iconMaskable || '';
          _this.icon512 = imageObj.icon512 || '';
          _this.icon192 = imageObj.icon192 || '';
          _this.icon180 = imageObj.icon180 || '';
          _this.icon32 = imageObj.icon32 || '';
          _this.icon16 = imageObj.icon16 || '';
          _this.favicon = imageObj.favicon || '';
        }

        _this.isLoading = false;

        _this.$toasted.success(response.message, _this.$toastConfig.success);
      })["catch"](function (error) {
        _this.isLoading = false;
        _this.formErrors = formUtil.handleErrors(error);
      });
    }
  }),
  mounted: function mounted() {
    this.getInitialData();
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/app/config/assets/index.vue?vue&type=template&id=2bff47d6&":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/app/config/assets/index.vue?vue&type=template&id=2bff47d6& ***!
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
      attrs: {
        boxed: "",
        "with-loader": "",
        "is-loading": _vm.isLoading,
        "loader-color": _vm.vars.loaderColor
      }
    },
    [
      _c("h4", { staticClass: "mb-4 pb-2 border-bottom" }, [
        _vm._v(_vm._s(_vm.$t("config.assets.logo")))
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "row" }, [
        _c("div", { staticClass: "col-12 col-md-6 mb-4" }, [
          _c(
            "h6",
            {
              staticClass: "pb-2 mb-0 text-center text-muted font-weight-bold"
            },
            [_vm._v(_vm._s(_vm.$t("config.assets.logo")))]
          ),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "d-flex justify-content-center mb-4" },
            [
              _c("image-uploader", {
                attrs: {
                  url: "/config/assets?type=logo",
                  "name-label": "config.assets.logo",
                  "existing-image": _vm.logo,
                  placeholder: "/images/placeholder-logo.png",
                  "remove-from-server": ""
                },
                on: { uploaded: _vm.refreshConfig, removed: _vm.refreshConfig }
              })
            ],
            1
          )
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "col-12 col-md-6 mb-4" }, [
          _c(
            "h6",
            {
              staticClass: "pb-2 mb-0 text-center text-muted font-weight-bold"
            },
            [_vm._v(_vm._s(_vm.$t("config.assets.logo_light")))]
          ),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "d-flex justify-content-center mb-4" },
            [
              _c("image-uploader", {
                attrs: {
                  url: "/config/assets?type=logo_light",
                  "name-label": "config.assets.logo_light",
                  "existing-image": _vm.logoLight,
                  placeholder: "/images/placeholder-logo.png",
                  "dark-bg": "",
                  "remove-from-server": ""
                },
                on: { uploaded: _vm.refreshConfig, removed: _vm.refreshConfig }
              })
            ],
            1
          )
        ])
      ]),
      _vm._v(" "),
      _c("h4", { staticClass: "my-4 pb-2 border-bottom" }, [
        _vm._v(_vm._s(_vm.$t("config.assets.icons")))
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "row" }, [
        _c("div", { staticClass: "col-12 col-md-4 mb-4" }, [
          _c(
            "h6",
            {
              staticClass: "pb-2 mb-0 text-center text-muted font-weight-bold"
            },
            [_vm._v(_vm._s(_vm.$t("config.assets.icon")))]
          ),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "d-flex justify-content-center mb-4" },
            [
              _c("image-uploader", {
                attrs: {
                  url: "/config/assets?type=icon",
                  "name-label": "config.assets.icon",
                  "existing-image": _vm.icon,
                  placeholder: "/images/placeholder-icon.png",
                  "remove-from-server": ""
                },
                on: { uploaded: _vm.refreshConfig, removed: _vm.refreshConfig }
              })
            ],
            1
          )
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "col-12 col-md-4 mb-4" }, [
          _c(
            "h6",
            {
              staticClass: "pb-2 mb-0 text-center text-muted font-weight-bold"
            },
            [_vm._v(_vm._s(_vm.$t("config.assets.icon_maskable")))]
          ),
          _vm._v(" "),
          _c("p", { staticClass: "pb-2 mb-0 text-center text-muted" }, [
            _vm._v("Ref: "),
            _c(
              "a",
              {
                attrs: {
                  href: "https://maskable.app/editor",
                  target: "_blank",
                  rel: "nofollow"
                }
              },
              [_vm._v("Maskable Icon Editor")]
            )
          ]),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "d-flex justify-content-center mb-4" },
            [
              _c("image-uploader", {
                attrs: {
                  url: "/config/assets?type=icon_maskable",
                  "name-label": "config.assets.icon_maskable",
                  "existing-image": _vm.iconMaskable,
                  placeholder: "/images/placeholder-icon.png",
                  "remove-from-server": ""
                },
                on: { uploaded: _vm.refreshConfig, removed: _vm.refreshConfig }
              })
            ],
            1
          )
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "col-12 col-md-4 mb-4" }, [
          _c(
            "h6",
            {
              staticClass: "pb-2 mb-0 text-center text-muted font-weight-bold"
            },
            [_vm._v(_vm._s(_vm.$t("config.assets.icon")) + " 512x512")]
          ),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "d-flex justify-content-center mb-4" },
            [
              _c("image-uploader", {
                attrs: {
                  url: "/config/assets?type=icon_512",
                  "name-label": "config.assets.icon_512",
                  "existing-image": _vm.icon512,
                  placeholder: "/images/placeholder-icon.png",
                  "remove-from-server": ""
                },
                on: { uploaded: _vm.refreshConfig, removed: _vm.refreshConfig }
              })
            ],
            1
          )
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "col-12 col-md-4 mb-4" }, [
          _c(
            "h6",
            {
              staticClass: "pb-2 mb-0 text-center text-muted font-weight-bold"
            },
            [_vm._v(_vm._s(_vm.$t("config.assets.icon")) + " 192x192")]
          ),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "d-flex justify-content-center mb-4" },
            [
              _c("image-uploader", {
                attrs: {
                  url: "/config/assets?type=icon_192",
                  "name-label": "config.assets.icon_192",
                  "existing-image": _vm.icon192,
                  placeholder: "/images/placeholder-icon.png",
                  "remove-from-server": ""
                },
                on: { uploaded: _vm.refreshConfig, removed: _vm.refreshConfig }
              })
            ],
            1
          )
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "col-12 col-md-4 mb-4" }, [
          _c(
            "h6",
            {
              staticClass: "pb-2 mb-0 text-center text-muted font-weight-bold"
            },
            [_vm._v(_vm._s(_vm.$t("config.assets.icon")) + " 180x180")]
          ),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "d-flex justify-content-center mb-4" },
            [
              _c("image-uploader", {
                attrs: {
                  url: "/config/assets?type=icon_180",
                  "name-label": "config.assets.icon_180",
                  "existing-image": _vm.icon180,
                  placeholder: "/images/placeholder-icon.png",
                  "remove-from-server": ""
                },
                on: { uploaded: _vm.refreshConfig, removed: _vm.refreshConfig }
              })
            ],
            1
          )
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "col-12 col-md-4 mb-4" }, [
          _c(
            "h6",
            {
              staticClass: "pb-2 mb-0 text-center text-muted font-weight-bold"
            },
            [_vm._v(_vm._s(_vm.$t("config.assets.icon")) + " 32x32")]
          ),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "d-flex justify-content-center mb-4" },
            [
              _c("image-uploader", {
                attrs: {
                  url: "/config/assets?type=icon_32",
                  "name-label": "config.assets.icon_32",
                  "existing-image": _vm.icon32,
                  placeholder: "/images/placeholder-icon.png",
                  "remove-from-server": ""
                },
                on: { uploaded: _vm.refreshConfig, removed: _vm.refreshConfig }
              })
            ],
            1
          )
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "col-12 col-md-4 mb-4" }, [
          _c(
            "h6",
            {
              staticClass: "pb-2 mb-0 text-center text-muted font-weight-bold"
            },
            [_vm._v(_vm._s(_vm.$t("config.assets.icon")) + " 16x16")]
          ),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "d-flex justify-content-center mb-4" },
            [
              _c("image-uploader", {
                attrs: {
                  url: "/config/assets?type=icon_16",
                  "name-label": "config.assets.icon_16",
                  "existing-image": _vm.icon16,
                  placeholder: "/images/placeholder-icon.png",
                  "remove-from-server": ""
                },
                on: { uploaded: _vm.refreshConfig, removed: _vm.refreshConfig }
              })
            ],
            1
          )
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "col-12 col-md-4 mb-4" }, [
          _c(
            "h6",
            {
              staticClass: "pb-2 mb-0 text-center text-muted font-weight-bold"
            },
            [_vm._v(_vm._s(_vm.$t("config.assets.favicon")))]
          ),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "d-flex justify-content-center mb-4" },
            [
              _c("image-uploader", {
                attrs: {
                  url: "/config/assets?type=favicon",
                  "name-label": "config.assets.favicon",
                  "existing-image": _vm.favicon,
                  placeholder: "/images/placeholder-icon.png",
                  "remove-from-server": ""
                },
                on: { uploaded: _vm.refreshConfig, removed: _vm.refreshConfig }
              })
            ],
            1
          )
        ])
      ])
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/api/uploader.js":
/*!**************************************!*\
  !*** ./resources/js/api/uploader.js ***!
  \**************************************/
/*! exports provided: uploadImage, removeImage, uploadFile, removeFile */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "uploadImage", function() { return uploadImage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeImage", function() { return removeImage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "uploadFile", function() { return uploadFile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeFile", function() { return removeFile; });
/* harmony import */ var _core_utils_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core/utils/request */ "./resources/js/core/utils/request.js");

function uploadImage(options, onUploadProgress) {
  return Object(_core_utils_request__WEBPACK_IMPORTED_MODULE_0__["instance"])({
    url: options.url,
    method: 'post',
    data: options.data,
    upload: true,
    config: {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    },
    headers: {
      'Content-Type': 'multipart/form-data; charset=utf-8; boundary=' + Math.random().toString().substr(2)
    },
    onUploadProgress: onUploadProgress
  });
}
function removeImage(options) {
  return Object(_core_utils_request__WEBPACK_IMPORTED_MODULE_0__["instance"])({
    url: options.url,
    method: 'delete',
    data: options.data
  });
}
function uploadFile(options, onUploadProgress, cancelToken) {
  var data = {
    url: options.url,
    method: 'post',
    data: options.data,
    upload: true,
    config: {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    },
    headers: {
      'Content-Type': 'multipart/form-data; charset=utf-8; boundary=' + Math.random().toString().substr(2)
    },
    onUploadProgress: onUploadProgress,
    cancelToken: cancelToken
  };

  if (options.silent) {
    return Object(_core_utils_request__WEBPACK_IMPORTED_MODULE_0__["instanceSilent"])(data);
  }

  return Object(_core_utils_request__WEBPACK_IMPORTED_MODULE_0__["instance"])(data);
}
function removeFile(options) {
  return Object(_core_utils_request__WEBPACK_IMPORTED_MODULE_0__["instance"])({
    url: options.url,
    method: 'delete',
    data: options.data
  });
}

/***/ }),

/***/ "./resources/js/views/app/config/assets/index.vue":
/*!********************************************************!*\
  !*** ./resources/js/views/app/config/assets/index.vue ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_vue_vue_type_template_id_2bff47d6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=2bff47d6& */ "./resources/js/views/app/config/assets/index.vue?vue&type=template&id=2bff47d6&");
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ "./resources/js/views/app/config/assets/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_2bff47d6___WEBPACK_IMPORTED_MODULE_0__["render"],
  _index_vue_vue_type_template_id_2bff47d6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/app/config/assets/index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/app/config/assets/index.vue?vue&type=script&lang=js&":
/*!*********************************************************************************!*\
  !*** ./resources/js/views/app/config/assets/index.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/app/config/assets/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/app/config/assets/index.vue?vue&type=template&id=2bff47d6&":
/*!***************************************************************************************!*\
  !*** ./resources/js/views/app/config/assets/index.vue?vue&type=template&id=2bff47d6& ***!
  \***************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_2bff47d6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=2bff47d6& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/app/config/assets/index.vue?vue&type=template&id=2bff47d6&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_2bff47d6___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_2bff47d6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=index.js.map?id=9431d6aa6dedf5ac8a0b