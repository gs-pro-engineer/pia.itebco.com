(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app/user/profile/image/view"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/app/user/profile/image/view.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/app/user/profile/image/view.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_ImageUploader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @components/ImageUploader */ "./resources/js/components/ImageUploader.vue");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _js_core_utils_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @js/core/utils/form */ "./resources/js/core/utils/form.js");
/* harmony import */ var _resources_images_avatars_default_profile_image_male_kid_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @resources/images/avatars/default-profile-image-male-kid.png */ "./resources/images/avatars/default-profile-image-male-kid.png");
/* harmony import */ var _resources_images_avatars_default_profile_image_male_kid_png__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_resources_images_avatars_default_profile_image_male_kid_png__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _resources_images_avatars_default_profile_image_female_kid_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @resources/images/avatars/default-profile-image-female-kid.png */ "./resources/images/avatars/default-profile-image-female-kid.png");
/* harmony import */ var _resources_images_avatars_default_profile_image_female_kid_png__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_resources_images_avatars_default_profile_image_female_kid_png__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _resources_images_avatars_default_profile_image_male_teen_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @resources/images/avatars/default-profile-image-male-teen.png */ "./resources/images/avatars/default-profile-image-male-teen.png");
/* harmony import */ var _resources_images_avatars_default_profile_image_male_teen_png__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_resources_images_avatars_default_profile_image_male_teen_png__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _resources_images_avatars_default_profile_image_female_teen_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @resources/images/avatars/default-profile-image-female-teen.png */ "./resources/images/avatars/default-profile-image-female-teen.png");
/* harmony import */ var _resources_images_avatars_default_profile_image_female_teen_png__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_resources_images_avatars_default_profile_image_female_teen_png__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _resources_images_avatars_default_profile_image_male_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @resources/images/avatars/default-profile-image-male.png */ "./resources/images/avatars/default-profile-image-male.png");
/* harmony import */ var _resources_images_avatars_default_profile_image_male_png__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_resources_images_avatars_default_profile_image_male_png__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _resources_images_avatars_default_profile_image_female_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @resources/images/avatars/default-profile-image-female.png */ "./resources/images/avatars/default-profile-image-female.png");
/* harmony import */ var _resources_images_avatars_default_profile_image_female_png__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_resources_images_avatars_default_profile_image_female_png__WEBPACK_IMPORTED_MODULE_8__);
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









/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    ImageUploader: _components_ImageUploader__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  data: function data() {
    return {
      isLoading: false
    };
  },
  computed: _objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_1__["mapGetters"])('config', ['configs', 'vars'])), Object(vuex__WEBPACK_IMPORTED_MODULE_1__["mapGetters"])('user', ['loggedInUser'])),
  methods: _objectSpread(_objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_1__["mapActions"])('common', ['Init', 'Custom'])), Object(vuex__WEBPACK_IMPORTED_MODULE_1__["mapActions"])('user', ['GetUser'])), {}, {
    handleUploadError: function handleUploadError(errorMessage) {
      this.$toasted.error(errorMessage, this.$toastConfig.error);
    },
    getUserImage: function getUserImage(gender, age) {
      if (!gender) {
        return _resources_images_avatars_default_profile_image_male_png__WEBPACK_IMPORTED_MODULE_7___default.a;
      }

      if (gender.uuid === 'male') {
        if (age) {
          if (age.years < 13) {
            return _resources_images_avatars_default_profile_image_male_kid_png__WEBPACK_IMPORTED_MODULE_3___default.a;
          } else if (age.years < 18) {
            return _resources_images_avatars_default_profile_image_male_teen_png__WEBPACK_IMPORTED_MODULE_5___default.a;
          }
        }

        return _resources_images_avatars_default_profile_image_male_png__WEBPACK_IMPORTED_MODULE_7___default.a;
      } else {
        if (age) {
          if (age.years < 13) {
            return _resources_images_avatars_default_profile_image_female_kid_png__WEBPACK_IMPORTED_MODULE_4___default.a;
          } else if (age.years < 18) {
            return _resources_images_avatars_default_profile_image_female_teen_png__WEBPACK_IMPORTED_MODULE_6___default.a;
          }
        }

        return _resources_images_avatars_default_profile_image_female_png__WEBPACK_IMPORTED_MODULE_8___default.a;
      }
    },
    getInitialData: function getInitialData() {
      var _this = this;

      this.isLoading = true;
      this.GetUser().then(function (response) {
        _this.isLoading = false;
      })["catch"](function (error) {
        _this.isLoading = false;
        _js_core_utils_form__WEBPACK_IMPORTED_MODULE_2__["handleErrors"](error);
      });
    }
  }),
  mounted: function mounted() {
    this.Init({
      url: 'users'
    });
    this.getInitialData();
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/app/user/profile/image/view.vue?vue&type=template&id=ea21fdb4&":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/app/user/profile/image/view.vue?vue&type=template&id=ea21fdb4& ***!
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
      attrs: {
        boxed: "",
        "with-loader": "",
        "is-loading": _vm.isLoading,
        "loader-color": _vm.vars.loaderColor
      }
    },
    [
      _vm.loggedInUser
        ? _c("div", { staticClass: "row" }, [
            _c("div", { staticClass: "col-12" }, [
              _c("h4", { staticClass: "text-center mb-5" }, [
                _vm._v(
                  _vm._s(
                    _vm.$t("global.upload", {
                      attribute: _vm.$t("user.props.image")
                    })
                  ) +
                    " for " +
                    _vm._s(_vm.loggedInUser.name)
                )
              ]),
              _vm._v(" "),
              _c("hr")
            ]),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "col-12 col-md-6 d-flex justify-content-center" },
              [
                _c("image-uploader", {
                  attrs: {
                    url: "/profile/avatar",
                    "name-label": "user.props.image",
                    "existing-image": _vm.loggedInUser.avatar,
                    placeholder: _vm.getUserImage(
                      _vm.loggedInUser.gender,
                      _vm.loggedInUser.age
                    ),
                    "remove-from-server": "",
                    profile: ""
                  },
                  on: {
                    uploaded: _vm.getInitialData,
                    removed: _vm.getInitialData
                  }
                })
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "col-12 col-md-6 d-flex justify-content-center" },
              [
                _c("image-uploader", {
                  attrs: {
                    url: "/profile/avatar?type=cover",
                    "name-label": "user.props.cover_image",
                    "existing-image": _vm.loggedInUser.cover,
                    placeholder: _vm.getUserImage(
                      _vm.loggedInUser.gender,
                      _vm.loggedInUser.age
                    ),
                    "remove-from-server": ""
                  },
                  on: {
                    uploaded: _vm.getInitialData,
                    removed: _vm.getInitialData
                  }
                })
              ],
              1
            )
          ])
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
                attrs: { type: "button", design: "light", tabindex: "-1" },
                on: {
                  click: function($event) {
                    return _vm.$router.back()
                  }
                }
              },
              [
                _c("i", { staticClass: "fas fa-chevron-left" }),
                _vm._v(" " + _vm._s(_vm.$t("general.back")))
              ]
            )
          ],
          1
        )
      ])
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/images/avatars/default-profile-image-female-kid.png":
/*!***********************************************************************!*\
  !*** ./resources/images/avatars/default-profile-image-female-kid.png ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/default-profile-image-female-kid.png?a698c120d375307de1ec9bc66eb39a68";

/***/ }),

/***/ "./resources/images/avatars/default-profile-image-female-teen.png":
/*!************************************************************************!*\
  !*** ./resources/images/avatars/default-profile-image-female-teen.png ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/default-profile-image-female-teen.png?08f8f40c141d4d9130622bed6ce75020";

/***/ }),

/***/ "./resources/images/avatars/default-profile-image-female.png":
/*!*******************************************************************!*\
  !*** ./resources/images/avatars/default-profile-image-female.png ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/default-profile-image-female.png?f06ec6078fcc441923987bf158202c95";

/***/ }),

/***/ "./resources/images/avatars/default-profile-image-male-kid.png":
/*!*********************************************************************!*\
  !*** ./resources/images/avatars/default-profile-image-male-kid.png ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/default-profile-image-male-kid.png?db33f81a8becd3256ed9d97fe79d62a9";

/***/ }),

/***/ "./resources/images/avatars/default-profile-image-male-teen.png":
/*!**********************************************************************!*\
  !*** ./resources/images/avatars/default-profile-image-male-teen.png ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/default-profile-image-male-teen.png?54adcbaedc1c7db829c01303f13b3441";

/***/ }),

/***/ "./resources/images/avatars/default-profile-image-male.png":
/*!*****************************************************************!*\
  !*** ./resources/images/avatars/default-profile-image-male.png ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/default-profile-image-male.png?82fe52757240e0913ffeb5c5ab65b953";

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

/***/ "./resources/js/views/app/user/profile/image/view.vue":
/*!************************************************************!*\
  !*** ./resources/js/views/app/user/profile/image/view.vue ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _view_vue_vue_type_template_id_ea21fdb4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./view.vue?vue&type=template&id=ea21fdb4& */ "./resources/js/views/app/user/profile/image/view.vue?vue&type=template&id=ea21fdb4&");
/* harmony import */ var _view_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./view.vue?vue&type=script&lang=js& */ "./resources/js/views/app/user/profile/image/view.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _view_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _view_vue_vue_type_template_id_ea21fdb4___WEBPACK_IMPORTED_MODULE_0__["render"],
  _view_vue_vue_type_template_id_ea21fdb4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/app/user/profile/image/view.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/app/user/profile/image/view.vue?vue&type=script&lang=js&":
/*!*************************************************************************************!*\
  !*** ./resources/js/views/app/user/profile/image/view.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_view_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./view.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/app/user/profile/image/view.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_view_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/app/user/profile/image/view.vue?vue&type=template&id=ea21fdb4&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/views/app/user/profile/image/view.vue?vue&type=template&id=ea21fdb4& ***!
  \*******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_view_vue_vue_type_template_id_ea21fdb4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./view.vue?vue&type=template&id=ea21fdb4& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/app/user/profile/image/view.vue?vue&type=template&id=ea21fdb4&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_view_vue_vue_type_template_id_ea21fdb4___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_view_vue_vue_type_template_id_ea21fdb4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=view.js.map?id=955a53696e9925b5a776