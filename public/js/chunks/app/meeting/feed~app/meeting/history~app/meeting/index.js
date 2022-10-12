(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app/meeting/feed~app/meeting/history~app/meeting/index"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/FilterWrapper.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/FilterWrapper.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _js_event_bus__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @js/event-bus */ "./resources/js/event-bus.js");
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


/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    boxed: {
      type: Boolean,
      "default": false
    },
    showCloseBtn: {
      type: Boolean,
      "default": true
    },
    showFooter: {
      type: Boolean,
      "default": true
    },
    isLoading: {
      type: Boolean,
      "default": false
    },
    filterRouteFn: {
      type: Function
    }
  },
  computed: _objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_1__["mapGetters"])('common', ['filters'])), Object(vuex__WEBPACK_IMPORTED_MODULE_1__["mapGetters"])('config', ['vars'])),
  methods: {
    submit: function submit() {
      var filterQuery = _objectSpread(_objectSpread(_objectSpread({}, this.$route.query), this.filters), {}, {
        filtered: true,
        filtered_at: moment().unix()
      });

      if (this.filterRouteFn && _.isFunction(this.filterRouteFn)) {
        this.filterRouteFn(filterQuery);
      } else {
        this.$router.push({
          path: this.$route.path,
          query: filterQuery
        })["catch"](function (err) {});
      }
    },
    reset: function reset() {
      _js_event_bus__WEBPACK_IMPORTED_MODULE_0__["default"].$emit('CLEAR_FILTERS');
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/app/meeting/filter.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/app/meeting/filter.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _mixins_filter_form__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @mixins/filter-form */ "./resources/js/mixins/filter-form.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  "extends": _mixins_filter_form__WEBPACK_IMPORTED_MODULE_0__["default"]
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/FilterWrapper.vue?vue&type=template&id=3b6aa020&":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/FilterWrapper.vue?vue&type=template&id=3b6aa020& ***!
  \****************************************************************************************************************************************************************************************************************/
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
      staticClass: "mb-element",
      attrs: {
        boxed: _vm.boxed,
        "with-loader": "",
        "is-loading": _vm.isLoading,
        "loader-color": _vm.vars.loaderColor
      }
    },
    [
      _vm.showCloseBtn
        ? _c("close-button", {
            attrs: { title: _vm.$t("general.close") },
            on: {
              click: function($event) {
                return _vm.$emit("close")
              }
            }
          })
        : _vm._e(),
      _vm._v(" "),
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
          _vm._t("default"),
          _vm._v(" "),
          _vm._t("footer", function() {
            return [
              _vm.showFooter
                ? _c("div", { staticClass: "form-footer mt-3" }, [
                    _c(
                      "div",
                      { staticClass: "left-side" },
                      [
                        _c(
                          "base-button",
                          {
                            attrs: {
                              type: "button",
                              design: "light",
                              disabled: _vm.isLoading
                            },
                            on: {
                              click: function($event) {
                                return _vm.$emit("close")
                              }
                            }
                          },
                          [_vm._v(_vm._s(_vm.$t("general.close")))]
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
                          {
                            attrs: {
                              type: "button",
                              design: "light",
                              disabled: _vm.isLoading
                            },
                            on: { click: _vm.reset }
                          },
                          [_vm._v(_vm._s(_vm.$t("general.clear")))]
                        ),
                        _vm._v(" "),
                        _c(
                          "base-button",
                          {
                            attrs: {
                              type: "submit",
                              design: "primary",
                              disabled: _vm.isLoading
                            }
                          },
                          [_vm._v(_vm._s(_vm.$t("general.filter")))]
                        )
                      ],
                      1
                    )
                  ])
                : _vm._e()
            ]
          })
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/app/meeting/filter.vue?vue&type=template&id=40ae2c8e&":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/app/meeting/filter.vue?vue&type=template&id=40ae2c8e& ***!
  \****************************************************************************************************************************************************************************************************************/
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
    "filter-wrapper",
    {
      attrs: { boxed: _vm.boxed, "is-loading": _vm.isLoading },
      on: {
        close: function($event) {
          return _vm.$emit("close")
        }
      }
    },
    [
      _c("div", { staticClass: "row" }, [
        _c(
          "div",
          { staticClass: "col-12 col-md-4 mb-4" },
          [
            _c("base-input", {
              attrs: {
                "auto-focus": "",
                label: _vm.$t("general.search_keyword"),
                type: "text",
                disabled: _vm.isLoading
              },
              model: {
                value: _vm.filters.keyword,
                callback: function($$v) {
                  _vm.$set(_vm.filters, "keyword", $$v)
                },
                expression: "filters.keyword"
              }
            })
          ],
          1
        ),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "col-12 col-md-4 mb-4" },
          [
            _c("base-select", {
              attrs: {
                options: _vm.preRequisite.types,
                label: _vm.$t("meeting.props.type"),
                disabled: _vm.isLoading,
                simple: true
              },
              model: {
                value: _vm.filters.type,
                callback: function($$v) {
                  _vm.$set(_vm.filters, "type", $$v)
                },
                expression: "filters.type"
              }
            })
          ],
          1
        ),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "col-12 col-md-4 mb-4" },
          [
            _c("base-select", {
              attrs: {
                options: _vm.preRequisite.categories,
                label: _vm.$t("meeting.meeting_category.category"),
                disabled: _vm.isLoading,
                simple: true
              },
              model: {
                value: _vm.filters.category,
                callback: function($$v) {
                  _vm.$set(_vm.filters, "category", $$v)
                },
                expression: "filters.category"
              }
            })
          ],
          1
        ),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "col-12 col-md-4 mb-4" },
          [
            _c("base-select", {
              attrs: {
                options: _vm.preRequisite.statuses,
                label: _vm.$t("meeting.props.status"),
                disabled: _vm.isLoading,
                simple: true
              },
              model: {
                value: _vm.filters.status,
                callback: function($$v) {
                  _vm.$set(_vm.filters, "status", $$v)
                },
                expression: "filters.status"
              }
            })
          ],
          1
        ),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "col-12 col-md-8 mb-4" },
          [
            _c("date-between", {
              attrs: {
                label: _vm.$t("global.between", {
                  attribute: _vm.$t("meeting.meetings")
                }),
                start: _vm.filters.startDate,
                end: _vm.filters.endDate,
                disabled: _vm.isLoading
              },
              on: {
                "update:start": function($event) {
                  return _vm.$set(_vm.filters, "startDate", $event)
                },
                "update:end": function($event) {
                  return _vm.$set(_vm.filters, "endDate", $event)
                }
              }
            })
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

/***/ "./resources/js/components/FilterWrapper.vue":
/*!***************************************************!*\
  !*** ./resources/js/components/FilterWrapper.vue ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _FilterWrapper_vue_vue_type_template_id_3b6aa020___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FilterWrapper.vue?vue&type=template&id=3b6aa020& */ "./resources/js/components/FilterWrapper.vue?vue&type=template&id=3b6aa020&");
/* harmony import */ var _FilterWrapper_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FilterWrapper.vue?vue&type=script&lang=js& */ "./resources/js/components/FilterWrapper.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _FilterWrapper_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _FilterWrapper_vue_vue_type_template_id_3b6aa020___WEBPACK_IMPORTED_MODULE_0__["render"],
  _FilterWrapper_vue_vue_type_template_id_3b6aa020___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/FilterWrapper.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/FilterWrapper.vue?vue&type=script&lang=js&":
/*!****************************************************************************!*\
  !*** ./resources/js/components/FilterWrapper.vue?vue&type=script&lang=js& ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FilterWrapper_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./FilterWrapper.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/FilterWrapper.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FilterWrapper_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/FilterWrapper.vue?vue&type=template&id=3b6aa020&":
/*!**********************************************************************************!*\
  !*** ./resources/js/components/FilterWrapper.vue?vue&type=template&id=3b6aa020& ***!
  \**********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FilterWrapper_vue_vue_type_template_id_3b6aa020___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./FilterWrapper.vue?vue&type=template&id=3b6aa020& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/FilterWrapper.vue?vue&type=template&id=3b6aa020&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FilterWrapper_vue_vue_type_template_id_3b6aa020___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FilterWrapper_vue_vue_type_template_id_3b6aa020___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/core/utils/media.js":
/*!******************************************!*\
  !*** ./resources/js/core/utils/media.js ***!
  \******************************************/
/*! exports provided: mediaProps, getMediaProps, checkDeviceSupport, getMediaPermission, initMedia, showMediaPermissionError, showNoDeviceError, getDisplayMedia, playAudio, playIncomingCall, playOutgoingCall, playIncomingMessage, playScreenshot, share */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mediaProps", function() { return mediaProps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMediaProps", function() { return getMediaProps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkDeviceSupport", function() { return checkDeviceSupport; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMediaPermission", function() { return getMediaPermission; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initMedia", function() { return initMedia; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showMediaPermissionError", function() { return showMediaPermissionError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showNoDeviceError", function() { return showNoDeviceError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDisplayMedia", function() { return getDisplayMedia; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "playAudio", function() { return playAudio; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "playIncomingCall", function() { return playIncomingCall; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "playOutgoingCall", function() { return playOutgoingCall; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "playIncomingMessage", function() { return playIncomingMessage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "playScreenshot", function() { return playScreenshot; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "share", function() { return share; });
/* harmony import */ var _core_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core/utils */ "./resources/js/core/utils/index.js");


function hasGetUserMedia() {
  return !!(navigator.mediaDevices && navigator.mediaDevices.getUserMedia);
}

if (!hasGetUserMedia()) {
  alert($t('misc.get_user_media_not_supported'));
}

if (navigator.mediaDevices && navigator.mediaDevices.enumerateDevices) {
  // Firefox 38+ seems having support of enumerateDevicesx
  navigator.enumerateDevices = function (callback) {
    navigator.mediaDevices.enumerateDevices().then(callback);
  };
}

var isHTTPs = location.protocol === 'https:';
var MediaDevices = [];
var canEnumerate = false;

if (typeof MediaStreamTrack !== 'undefined' && 'getSources' in MediaStreamTrack) {
  canEnumerate = true;
} else if (navigator.mediaDevices && !!navigator.mediaDevices.enumerateDevices) {
  canEnumerate = true;
}

var mediaProps = {
  hasMicrophone: false,
  hasWebcam: false,
  isMicrophoneAlreadyCaptured: false,
  isWebcamAlreadyCaptured: false,
  permissionError: true
};
var getMediaProps = function getMediaProps() {
  return mediaProps;
};
var checkDeviceSupport = function checkDeviceSupport(callback) {
  if (!canEnumerate) {
    return;
  }

  if (!navigator.enumerateDevices && window.MediaStreamTrack && window.MediaStreamTrack.getSources) {
    navigator.enumerateDevices = window.MediaStreamTrack.getSources.bind(window.MediaStreamTrack);
  }

  if (!navigator.enumerateDevices && navigator.enumerateDevices) {
    navigator.enumerateDevices = navigator.enumerateDevices.bind(navigator);
  }

  if (!navigator.enumerateDevices) {
    if (callback) {
      callback(mediaProps);
    }

    return;
  }

  MediaDevices = [];
  navigator.enumerateDevices(function (devices) {
    devices.forEach(function (_device) {
      var device = {};

      for (var d in _device) {
        device[d] = _device[d];
      }

      if (device.kind === 'audio') {
        device.kind = 'audioinput';
      }

      if (device.kind === 'video') {
        device.kind = 'videoinput';
      }

      var skip;
      MediaDevices.forEach(function (d) {
        if (d.id === device.id && d.kind === device.kind) {
          skip = true;
        }
      });

      if (skip) {
        return;
      }

      if (!device.deviceId) {
        device.deviceId = device.id;
      }

      if (!device.id) {
        device.id = device.deviceId;
      }

      if (!device.label) {
        device.label = 'Please invoke getUserMedia once.';

        if (!isHTTPs) {
          device.label = 'HTTPs is required to get label of this ' + device.kind + ' device.';
        }
      } else {
        if (device.kind === 'videoinput' && !mediaProps.isWebcamAlreadyCaptured) {
          mediaProps.isWebcamAlreadyCaptured = true;
        }

        if (device.kind === 'audioinput' && !mediaProps.isMicrophoneAlreadyCaptured) {
          mediaProps.isMicrophoneAlreadyCaptured = true;
        }
      }

      if (device.kind === 'audioinput') {
        mediaProps.hasMicrophone = true;
      }

      if (device.kind === 'videoinput') {
        mediaProps.hasWebcam = true;
      } // there is no 'videoouput' in the spec.


      MediaDevices.push(device);
    });

    if (callback) {
      callback(mediaProps);
    }
  });
};
var getMediaPermission = function getMediaPermission() {
  var withStream = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
  return new Promise(function (res, rej) {
    navigator.mediaDevices.getUserMedia({
      video: true,
      audio: true
    }).then(function (stream) {
      mediaProps.permissionError = false;
      debugger;

      if (stream && withStream) {
        res(stream);
      } else {
        res(true);
      }
    })["catch"](function (err) {
      mediaProps.permissionError = true;
      rej(err);
    });
  });
};
var initMedia = function initMedia() {
  var checkMic = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
  var checkCam = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
  checkDeviceSupport(function (mediaSupport) {
    if (mediaSupport) {
      var showError = false;

      if (checkMic && !mediaSupport.hasMicrophone) {
        showError = true;
      }

      if (checkCam && !mediaSupport.hasWebcam) {
        showError = true;
      }

      if (showError) {
        showNoDeviceError(mediaSupport);
      }
    }
  });
};
var showMediaPermissionError = function showMediaPermissionError(err) {
  var msg = {
    icon: 'error',
    html: '',
    footer: $t('misc.solve_and_refresh')
  };

  if (!err) {
    return;
  }

  if (err.name === 'NotAllowedError' || err.name === 'PermissionDeniedError') {
    msg.title = $t('misc.media.permission_denied');
    msg.html = $t('misc.media.permission_denied_text');
  } else if (err.name === 'NotFoundError') {
    msg.title = $t('misc.media.not_found');
    msg.html = $t('misc.media.not_found_text');
  } else if (err.name === 'NotReadableError' || err.name === 'OverconstrainedError') {
    msg.title = $t('misc.media.unreadable');
    msg.html = $t('misc.media.unreadable_text');
  } else if (err.name === 'SecurityError' || err.name === 'TypeError') {
    msg.title = $t('misc.media.security');
    msg.html = $t('misc.media.security_text');
  }

  msg.html += '<div><pre><code style="white-space: break-spaces;">' + err + '</code><pre></div>';
  var alrt = swtAlert.fire(msg);
  return {
    msg: msg,
    alert: alrt
  };
};
var showNoDeviceError = function showNoDeviceError(deviceList) {
  var missingDevices = [];

  if (!deviceList.hasMicrophone) {
    missingDevices.push('Microphone');
  }

  if (!deviceList.hasWebcam) {
    missingDevices.push('WebCam');
  }

  var msg = {
    icon: 'error',
    title: $t('misc.media.missing'),
    text: $t('misc.media.missing_text', {
      attribute: missingDevices.join(', ')
    }),
    footer: $t('misc.solve_and_refresh')
  };
  swtAlert.fire(msg);
};
var getDisplayMedia = function getDisplayMedia() {
  if (navigator.mediaDevices.getDisplayMedia) {
    return navigator.mediaDevices.getDisplayMedia({
      video: true,
      audio: false
    });
  } else if (navigator.getDisplayMedia) {
    return navigator.getDisplayMedia({
      video: true
    });
  }
};
var playAudio = function playAudio(opts) {
  var defaultOpts = {
    type: null,
    loop: false,
    duration: 1000
  };
  opts = Object.assign({}, defaultOpts, opts);

  if (!opts.type) {
    return;
  }

  var audioEle = new Audio();
  audioEle.preload = 'auto';
  audioEle.autoplay = true;
  audioEle.loop = opts.loop;
  audioEle.src = "/sound/".concat(opts.type, ".mp3");
  audioEle.play().then(function () {
    setTimeout(function () {
      audioEle && audioEle.pause();
    }, opts.duration);
  })["catch"](function (error) {
    console.error(error);
  });
  return audioEle;
};
var playIncomingCall = function playIncomingCall() {
  var onCondition = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

  if (document.hasFocus() && !onCondition) {
    return;
  }

  return playAudio({
    type: 'incoming',
    loop: true,
    duration: 30000
  });
};
var playOutgoingCall = function playOutgoingCall() {
  var onCondition = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

  if (document.hasFocus() && !onCondition) {
    return;
  }

  return playAudio({
    type: 'calling',
    loop: true,
    duration: 30000
  });
};
var playIncomingMessage = function playIncomingMessage() {
  var onCondition = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

  if (document.hasFocus() && !onCondition) {
    return;
  }

  return playAudio({
    type: 'message',
    duration: 3000
  });
};
var playScreenshot = function playScreenshot() {
  var onCondition = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

  if (document.hasFocus() && !onCondition) {
    return;
  }

  return playAudio({
    type: 'screenshot',
    duration: 3000
  });
};
var share = function share() {
  var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var callback = arguments.length > 1 ? arguments[1] : undefined;
  var useNativeShare = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
  var currentUrl = document.querySelector('link[rel=canonical]') ? document.querySelector('link[rel=canonical]').href : document.location.href;
  var url = data.url ? data.url : currentUrl;

  if (useNativeShare && navigator.share) {
    navigator.share({
      title: data.title ? data.title : document.title,
      url: url
    }).then(function () {})["catch"](console.error);
  } else {
    var alertContent = {
      showCancelButton: true,
      confirmButtonText: $t('misc.share_alert.confirm_btn'),
      cancelButtonText: $t('misc.share_alert.cancel_btn')
    };

    if (data.alertTitle) {
      alertContent.title = data.alertTitle;
    }

    if (data.alertHtml) {
      alertContent.html = data.alertHtml;
    } else {
      alertContent.text = $t('misc.share_alert.text');
    }

    swtAlert.fire(alertContent).then(function (result) {
      if (result.value) {
        Object(_core_utils__WEBPACK_IMPORTED_MODULE_0__["copyToClipboard"])(url);
        setTimeout(function () {
          callback();
        }, 500);
      }
    });
  }
};

/***/ }),

/***/ "./resources/js/mixins/filter-form.js":
/*!********************************************!*\
  !*** ./resources/js/mixins/filter-form.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _components_FilterWrapper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @components/FilterWrapper */ "./resources/js/components/FilterWrapper.vue");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    FilterWrapper: _components_FilterWrapper__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  props: {
    preRequisite: {
      type: Object,
      "default": function _default() {
        return {};
      }
    },
    boxed: {
      type: Boolean,
      "default": false
    },
    isLoading: {
      type: Boolean,
      "default": false
    }
  },
  computed: _objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])('common', ['filters'])), Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])('config', ['vars']))
});

/***/ }),

/***/ "./resources/js/views/app/meeting/filter.vue":
/*!***************************************************!*\
  !*** ./resources/js/views/app/meeting/filter.vue ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _filter_vue_vue_type_template_id_40ae2c8e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./filter.vue?vue&type=template&id=40ae2c8e& */ "./resources/js/views/app/meeting/filter.vue?vue&type=template&id=40ae2c8e&");
/* harmony import */ var _filter_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./filter.vue?vue&type=script&lang=js& */ "./resources/js/views/app/meeting/filter.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _filter_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _filter_vue_vue_type_template_id_40ae2c8e___WEBPACK_IMPORTED_MODULE_0__["render"],
  _filter_vue_vue_type_template_id_40ae2c8e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/app/meeting/filter.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/app/meeting/filter.vue?vue&type=script&lang=js&":
/*!****************************************************************************!*\
  !*** ./resources/js/views/app/meeting/filter.vue?vue&type=script&lang=js& ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_filter_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./filter.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/app/meeting/filter.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_filter_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/app/meeting/filter.vue?vue&type=template&id=40ae2c8e&":
/*!**********************************************************************************!*\
  !*** ./resources/js/views/app/meeting/filter.vue?vue&type=template&id=40ae2c8e& ***!
  \**********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_filter_vue_vue_type_template_id_40ae2c8e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./filter.vue?vue&type=template&id=40ae2c8e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/app/meeting/filter.vue?vue&type=template&id=40ae2c8e&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_filter_vue_vue_type_template_id_40ae2c8e___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_filter_vue_vue_type_template_id_40ae2c8e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=index.js.map?id=f1aac614478040f292e2