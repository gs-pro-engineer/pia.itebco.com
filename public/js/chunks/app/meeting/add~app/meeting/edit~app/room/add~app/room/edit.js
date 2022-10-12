(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app/meeting/add~app/meeting/edit~app/room/add~app/room/edit"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/app/option/modal-form.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/app/option/modal-form.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _mixins_modal_form__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @mixins/modal-form */ "./resources/js/mixins/modal-form.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  "extends": _mixins_modal_form__WEBPACK_IMPORTED_MODULE_0__["default"],
  props: {
    meta: {
      type: Object,
      required: true
    }
  },
  data: function data() {
    return {
      formData: {
        uuid: null,
        name: '',
        slug: '',
        description: '',
        parent: null,
        type: null
      },
      hasSlug: false,
      hasParent: false,
      preRequisite: {
        options: []
      },
      formLabels: {
        name: $t('option.props.name'),
        slug: $t('option.props.slug'),
        description: $t('option.props.description'),
        parent: $t('option.props.parent'),
        type: $t('option.props.type')
      },
      initUrl: 'options',
      dataType: 'option',
      dataTypeArr: 'options',
      propertyToMatch: 'name',
      entityTitle: 'option.option'
    };
  },
  watch: {
    meta: {
      deep: true,
      handler: function handler(newValue, oldValue) {
        this.formData.type = newValue.optionType;
        this.entityTitle = newValue.entityTitle;
        this.dataType = newValue.dataType;
        this.dataTypeArr = newValue.dataTypeArr;
        this.hasSlug = newValue.hasSlug;
        this.hasParent = newValue.hasParent;
      }
    }
  },
  methods: {
    createSlug: function createSlug() {
      if (this.showKeepAdding && this.formData.name != this.initialFormData.name) {
        this.formData.slug = this.formData.name.kebabCase();
      } else {
        this.formData.slug = this.formData.slug ? this.formData.slug : this.formData.name.kebabCase();
      }
    },
    preSubmit: function preSubmit() {
      this.createSlug();

      if (this.hasParent && !this.formData.parent) {
        this.$toasted.error($t('global.invalid', {
          attribute: $t('option.props.parent')
        }), this.$toastConfig.error);
        return;
      }

      this.submit();
    }
  },
  mounted: function mounted() {
    this.getInitialData();
  },
  created: function created() {
    this.formData.type = this.meta.optionType;
    this.entityTitle = this.meta.entityTitle;
    this.dataType = this.meta.dataType;
    this.dataTypeArr = this.meta.dataTypeArr;
    this.hasSlug = this.meta.hasSlug;
    this.hasParent = this.meta.hasParent;
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/app/option/modal-form.vue?vue&type=template&id=6ebd99e1&":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/app/option/modal-form.vue?vue&type=template&id=6ebd99e1& ***!
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
  return _c(
    "form",
    {
      staticClass: "has-fixed-footer",
      on: {
        submit: function($event) {
          $event.preventDefault()
          return _vm.preSubmit.apply(null, arguments)
        }
      }
    },
    [
      _c("h5", { staticClass: "text-center" }, [
        _vm._v(
          _vm._s(_vm.$t("global.add", { attribute: _vm.$t("option.option") }))
        )
      ]),
      _vm._v(" "),
      _c("hr"),
      _vm._v(" "),
      _c("animated-loader", {
        attrs: {
          "is-loading": _vm.isLoading,
          "loader-color": _vm.vars.loaderColor
        }
      }),
      _vm._v(" "),
      _c("div", { staticClass: "row" }, [
        _c(
          "div",
          { staticClass: "col-12 mb-4" },
          [
            _c("base-input", {
              attrs: {
                "auto-focus": "",
                label: _vm.formLabels.name,
                type: "text",
                error: _vm.formErrors.name,
                required: ""
              },
              on: {
                "update:error": function($event) {
                  return _vm.$set(_vm.formErrors, "name", $event)
                },
                blur: _vm.createSlug
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
        _vm.hasSlug
          ? _c(
              "div",
              { staticClass: "col-12 mb-4" },
              [
                _c("base-input", {
                  attrs: {
                    label: _vm.formLabels.slug,
                    type: "text",
                    error: _vm.formErrors.slug,
                    format: "kebabCase",
                    required: ""
                  },
                  on: {
                    "update:error": function($event) {
                      return _vm.$set(_vm.formErrors, "slug", $event)
                    },
                    focus: _vm.createSlug,
                    blur: _vm.createSlug
                  },
                  model: {
                    value: _vm.formData.slug,
                    callback: function($$v) {
                      _vm.$set(_vm.formData, "slug", $$v)
                    },
                    expression: "formData.slug"
                  }
                })
              ],
              1
            )
          : _vm._e(),
        _vm._v(" "),
        _vm.hasParent
          ? _c(
              "div",
              { staticClass: "col-12 mb-4" },
              [
                _c("base-select", {
                  attrs: {
                    options: _vm.preRequisite.options,
                    label: _vm.formLabels.parent,
                    error: _vm.formErrors.parent,
                    "allow-empty": true,
                    disabled: _vm.isLoading,
                    "track-by": "uuid",
                    "show-by": "nameWithParents"
                  },
                  on: {
                    "update:error": function($event) {
                      return _vm.$set(_vm.formErrors, "parent", $event)
                    }
                  },
                  model: {
                    value: _vm.formData.parent,
                    callback: function($$v) {
                      _vm.$set(_vm.formData, "parent", $$v)
                    },
                    expression: "formData.parent"
                  }
                })
              ],
              1
            )
          : _vm._e(),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "col-12 mb-4" },
          [
            _c("base-input", {
              attrs: {
                label: _vm.formLabels.description,
                type: "text",
                error: _vm.formErrors.description
              },
              on: {
                "update:error": function($event) {
                  return _vm.$set(_vm.formErrors, "description", $event)
                }
              },
              model: {
                value: _vm.formData.description,
                callback: function($$v) {
                  _vm.$set(_vm.formData, "description", $$v)
                },
                expression: "formData.description"
              }
            })
          ],
          1
        )
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "form-footer fixed-footer mt-5" }, [
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
                    return _vm.close()
                  }
                }
              },
              [
                _c("i", { staticClass: "fas fa-chevron-left" }),
                _vm._v(" " + _vm._s(_vm.$t("general.cancel")))
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
              { attrs: { type: "submit", design: "primary" } },
              [
                _c("i", { staticClass: "fas fa-save" }),
                _vm._v(
                  " " +
                    _vm._s(
                      _vm.$t("global.save", {
                        attribute: _vm.$t("option.option")
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
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/mixins/modal-form.js":
/*!*******************************************!*\
  !*** ./resources/js/mixins/modal-form.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _core_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/utils */ "./resources/js/core/utils/index.js");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



/* harmony default export */ __webpack_exports__["default"] = ({
  components: {},
  props: {
    pushToArr: {
      type: Boolean,
      "default": false
    }
  },
  data: function data() {
    return {
      formData: {},
      formErrors: {},
      initialFormData: null,
      emptyFormData: null,
      entity: null,
      preRequisite: {},
      isLoading: true,
      initUrl: '',
      dataType: null,
      dataTypeArr: null,
      propertyToMatch: null
    };
  },
  computed: _objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_1__["mapGetters"])('config', ['configs', 'vars'])), {}, {
    codePrefix: function codePrefix() {
      return this.formData.codePrefix;
    },
    formHasErrors: function formHasErrors() {
      var ans = false;
      this.formErrors.objForEach(function (er) {
        ans = er !== '' ? true : ans;
      });
      return ans;
    }
  }),
  watch: {
    codePrefix: function codePrefix(val) {
      if (this.preRequisite.codes) {
        var codeObj = this.preRequisite.codes.find(function (v) {
          return v.codePrefix === val;
        });
        var codeDigit = this.configs[this.dataType].codeDigit;

        if (codeObj) {
          this.formData.codeNumber = Object(_core_utils__WEBPACK_IMPORTED_MODULE_2__["numberPadding"])(codeObj.codeNumber + 1, codeDigit);
        } else {
          this.formData.codeNumber = Object(_core_utils__WEBPACK_IMPORTED_MODULE_2__["numberPadding"])(1, codeDigit);
        }
      }
    }
  },
  methods: _objectSpread(_objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_1__["mapActions"])('common', ['Init', 'Store', 'GetPreRequisite', 'Custom'])), Object(vuex__WEBPACK_IMPORTED_MODULE_1__["mapActions"])('config', ['SetUiConfig'])), {}, {
    submit: function submit() {
      var _this = this;

      if (formUtil.isUnchanged(this.initialFormData, this.formData)) {
        this.$toasted.info(this.$t('general.nothing_changed'), this.$toastConfig.info);
        return false;
      }

      this.isLoading = true;
      this.Store(this.formData).then(function (response) {
        _this.$toasted.success(response.message, _this.$toastConfig);

        _this.initialFormData = _.cloneDeep(_this.formData);

        if (response.hasOwnProperty(_this.dataType)) {
          _this.entity = response[_this.dataType];
        }

        _this.close(true);

        _this.isLoading = false;
      })["catch"](function (error) {
        _this.isLoading = false;
        _this.formErrors = Object.assign(_this.formErrors, formUtil.handleErrors(error));
      });
    },
    fillPreRequisite: function fillPreRequisite(response) {
      var _this2 = this;

      this.preRequisite.objForEach(function (value, key) {
        _this2.preRequisite[key] = response.hasOwnProperty(key) ? response[key] : value;
      });
      this.isLoading = false;
    },
    getInitialData: function getInitialData(callbackFn) {
      var _this3 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _this3.isLoading = true;
                _context.prev = 1;
                _context.next = 4;
                return _this3.GetPreRequisite();

              case 4:
                response = _context.sent;

                _this3.fillPreRequisite(response);

                if (_this3.configs[_this3.dataType]) {
                  _this3.$nextTick(function () {
                    _this3.formData.codePrefix = _this3.configs[_this3.dataType].codePrefix;
                  });
                }

                if (callbackFn) {
                  _this3.$nextTick(function () {
                    callbackFn();
                  });
                }

                return _context.abrupt("return", response);

              case 11:
                _context.prev = 11;
                _context.t0 = _context["catch"](1);
                _this3.isLoading = false;
                _this3.formErrors = formUtil.handleErrors(_context.t0);
                throw _context.t0;

              case 16:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[1, 11]]);
      }))();
    },
    close: function close(stored) {
      if (stored === true) {
        this.$emit('close', Object.assign({}, this.entity ? this.entity : this.formData, {
          dataType: this.dataType,
          dataTypeArr: this.dataTypeArr,
          propertyToMatch: this.propertyToMatch,
          dontMatch: this.entity ? true : false,
          push: this.pushToArr
        }));
      } else {
        this.$emit('close');
      }

      this.SetUiConfig({
        modalSidebarShow: false
      });
    },
    addTag: function addTag(newTag) {
      var tag = {
        name: newTag,
        slug: formUtil.generateSlug(newTag)
      };
      this.preRequisite.tags.push(tag);
      this.formData.tags.push(tag);
    }
  }),
  mounted: function mounted() {
    this.Init({
      url: this.initUrl
    });
    this.initialFormData = _.cloneDeep(this.formData);
  },
  beforeDestroy: function beforeDestroy() {
    delete this.formData;
    delete this.formErrors;
    delete this.preRequisite;
  }
});

/***/ }),

/***/ "./resources/js/views/app/option/modal-form.vue":
/*!******************************************************!*\
  !*** ./resources/js/views/app/option/modal-form.vue ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modal_form_vue_vue_type_template_id_6ebd99e1___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modal-form.vue?vue&type=template&id=6ebd99e1& */ "./resources/js/views/app/option/modal-form.vue?vue&type=template&id=6ebd99e1&");
/* harmony import */ var _modal_form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modal-form.vue?vue&type=script&lang=js& */ "./resources/js/views/app/option/modal-form.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _modal_form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _modal_form_vue_vue_type_template_id_6ebd99e1___WEBPACK_IMPORTED_MODULE_0__["render"],
  _modal_form_vue_vue_type_template_id_6ebd99e1___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/app/option/modal-form.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/app/option/modal-form.vue?vue&type=script&lang=js&":
/*!*******************************************************************************!*\
  !*** ./resources/js/views/app/option/modal-form.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_modal_form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./modal-form.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/app/option/modal-form.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_modal_form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/app/option/modal-form.vue?vue&type=template&id=6ebd99e1&":
/*!*************************************************************************************!*\
  !*** ./resources/js/views/app/option/modal-form.vue?vue&type=template&id=6ebd99e1& ***!
  \*************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_modal_form_vue_vue_type_template_id_6ebd99e1___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./modal-form.vue?vue&type=template&id=6ebd99e1& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/app/option/modal-form.vue?vue&type=template&id=6ebd99e1&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_modal_form_vue_vue_type_template_id_6ebd99e1___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_modal_form_vue_vue_type_template_id_6ebd99e1___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=edit.js.map?id=e64638f1a0ce7a8e190c