(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app/meeting/live~app/meeting/live-as-guest~layouts/app-layout"],{

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

/***/ "./resources/js/core/filters/momentz.js":
/*!**********************************************!*\
  !*** ./resources/js/core/filters/momentz.js ***!
  \**********************************************/
/*! exports provided: now, momentDate, momentTime, momentDateTime, momentCalendar, momentDateTz, momentTimeTz, momentDateTimeTz, momentCalendarTz, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "now", function() { return now; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "momentDate", function() { return momentDate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "momentTime", function() { return momentTime; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "momentDateTime", function() { return momentDateTime; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "momentCalendar", function() { return momentCalendar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "momentDateTz", function() { return momentDateTz; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "momentTimeTz", function() { return momentTimeTz; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "momentDateTimeTz", function() { return momentDateTimeTz; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "momentCalendarTz", function() { return momentCalendarTz; });
/* harmony import */ var _js_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @js/store */ "./resources/js/store/index.js");

var configs = _js_store__WEBPACK_IMPORTED_MODULE_0__["default"].getters['config/configs'];
var vars = _js_store__WEBPACK_IMPORTED_MODULE_0__["default"].getters['config/vars'];

var getActiveConfigs = function getActiveConfigs() {
  return {
    timezone: configs.authenticated ? configs.system.timezone : moment.tz.guess(),
    defaultDateFormat: vars.defaultDateFormat,
    defaultDateTimeFormat: vars.defaultDateTimeFormat,
    serverDateFormat: vars.serverDateFormat,
    serverDateTimeFormat: vars.serverDateTimeFormat,
    calendarLocale: {
      // lastDay: '[Yesterday]',
      lastDay: vars.defaultDateFormat,
      sameDay: vars.defaultTimeFormat,
      lastWeek: vars.defaultDateFormat,
      sameElse: vars.defaultDateFormat
    }
  };
};

var now = function now(formatOption, timezoneOption) {
  var activeConfigs = getActiveConfigs();
  var momentObj = moment.utc().tz(timezoneOption || activeConfigs.timezone);

  if (formatOption && formatOption.hasOwnProperty('moment') && formatOption.moment) {
    return momentObj;
  }

  return momentObj.format(formatOption || activeConfigs.defaultDateTimeFormat);
};
var momentDate = function momentDate(value, formatOption) {
  var activeConfigs = getActiveConfigs();
  var momentObj = moment(value, activeConfigs.serverDateFormat);

  if (!value) {
    return 'INVALID DATE STRING';
  }

  if (Array.isArray(value)) {
    momentObj = moment(value[0], value[1]);
  }

  if (formatOption && formatOption.hasOwnProperty('moment') && formatOption.moment) {
    return momentObj;
  }

  return momentObj.format(formatOption || activeConfigs.defaultDateFormat);
};
var momentTime = function momentTime(value, formatOption) {
  var activeConfigs = getActiveConfigs();
  var momentObj = moment(value, activeConfigs.serverTimeFormat);

  if (!value) {
    return 'INVALID TIME STRING';
  }

  if (Array.isArray(value)) {
    momentObj = moment(value[0], value[1]);
  }

  if (formatOption && formatOption.hasOwnProperty('moment') && formatOption.moment) {
    return momentObj;
  }

  return momentObj.format(formatOption || activeConfigs.defaultTimeFormat);
};
var momentDateTime = function momentDateTime(value, formatOption) {
  var activeConfigs = getActiveConfigs();
  var momentObj = moment(value, activeConfigs.serverDateTimeFormat);

  if (!value) {
    return 'INVALID DATE TIME STRING';
  }

  if (Array.isArray(value)) {
    momentObj = moment(value[0], value[1]);
  }

  if (formatOption && formatOption.hasOwnProperty('moment') && formatOption.moment) {
    return momentObj;
  }

  return momentObj.format(formatOption || activeConfigs.defaultDateTimeFormat);
};
var momentCalendar = function momentCalendar(value, calendarOption) {
  var activeConfigs = getActiveConfigs();
  var momentObj = moment(value, activeConfigs.serverDateTimeFormat);

  if (!value) {
    return 'INVALID DATE TIME STRING';
  }

  if (Array.isArray(value)) {
    momentObj = moment(value[0], value[1]);
  }

  if (calendarOption && calendarOption.hasOwnProperty('moment') && calendarOption.moment) {
    return momentObj;
  }

  return momentObj.calendar(calendarOption ? calendarOption : activeConfigs.calendarLocale);
};
var momentDateTz = function momentDateTz(value, formatOption, timezoneOption) {
  var activeConfigs = getActiveConfigs();

  if (!value) {
    return 'INVALID DATE STRING';
  }

  var momentObj = moment.utc(value, activeConfigs.serverDateFormat);

  if (value === 'NOW') {
    momentObj = moment.utc();
  }

  if (Array.isArray(value)) {
    momentObj = moment.utc(value[0], value[1]);
  }

  if (formatOption && formatOption.hasOwnProperty('moment') && formatOption.moment) {
    return momentObj.tz(timezoneOption || activeConfigs.timezone);
  }

  return momentObj.tz(timezoneOption || activeConfigs.timezone).format(formatOption || activeConfigs.defaultDateFormat);
};
var momentTimeTz = function momentTimeTz(value, formatOption, timezoneOption) {
  var activeConfigs = getActiveConfigs();
  var momentObj = moment.utc("".concat(moment().format(activeConfigs.serverDateFormat), " ").concat(value), activeConfigs.serverTimeFormat);

  if (!value) {
    return 'INVALID TIME STRING';
  }

  if (Array.isArray(value)) {
    momentObj = moment.utc(value[0], value[1]);
  }

  if (formatOption && formatOption.hasOwnProperty('moment') && formatOption.moment) {
    return momentObj.tz(timezoneOption || activeConfigs.timezone);
  }

  return momentObj.tz(timezoneOption || activeConfigs.timezone).format(formatOption || activeConfigs.defaultTimeFormat);
};
var momentDateTimeTz = function momentDateTimeTz(value, formatOption, timezoneOption) {
  var activeConfigs = getActiveConfigs();

  if (!value) {
    return 'INVALID DATE TIME STRING';
  }

  var momentObj;

  if (value === 'NOW') {
    momentObj = moment.utc();
  } else if (Array.isArray(value)) {
    momentObj = moment.utc(value[0], value[1]);
  } else {
    momentObj = moment.utc(value, activeConfigs.serverDateTimeFormat);
  }

  if (formatOption && formatOption.hasOwnProperty('moment') && formatOption.moment) {
    return momentObj.tz(timezoneOption || activeConfigs.timezone);
  }

  return momentObj.tz(timezoneOption || activeConfigs.timezone).format(formatOption || activeConfigs.defaultDateTimeFormat);
};
var momentCalendarTz = function momentCalendarTz(value) {
  var calendarOption = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  var timezoneOption = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
  var activeConfigs = getActiveConfigs();
  var momentObj = moment.utc(value, activeConfigs.serverDateTimeFormat);

  if (!value) {
    return 'INVALID DATE TIME STRING';
  }

  if (Array.isArray(value)) {
    momentObj = moment.utc(value[0], value[1]);
  }

  var result = momentObj.tz(timezoneOption || activeConfigs.timezone);

  if (calendarOption && calendarOption.hasOwnProperty('moment') && calendarOption.moment) {
    return result;
  }

  result = result.calendar(calendarOption ? calendarOption : activeConfigs.calendarLocale);
  return result;
};
/* harmony default export */ __webpack_exports__["default"] = ({
  momentDate: momentDate,
  momentTime: momentTime,
  momentDateTime: momentDateTime,
  momentCalendar: momentCalendar,
  momentDateTz: momentDateTz,
  momentTimeTz: momentTimeTz,
  momentDateTimeTz: momentDateTimeTz,
  momentCalendarTz: momentCalendarTz
});

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

/***/ "./resources/js/echo-setup.js":
/*!************************************!*\
  !*** ./resources/js/echo-setup.js ***!
  \************************************/
/*! exports provided: setupPusher, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setupPusher", function() { return setupPusher; });
/* harmony import */ var laravel_echo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! laravel-echo */ "./node_modules/laravel-echo/dist/echo.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var pusher_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! pusher-js */ "./node_modules/pusher-js/dist/web/pusher.js");
/* harmony import */ var pusher_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(pusher_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _js_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @js/store */ "./resources/js/store/index.js");




var setupPusher = function setupPusher() {
  var configs = _js_store__WEBPACK_IMPORTED_MODULE_3__["default"].getters['config/configs'];
  var pusherConfigs = configs.hasOwnProperty('pusher') ? configs.pusher : null;

  if (!window.Echo && pusherConfigs && pusherConfigs.pusherAppKey) {
    if (pusherConfigs.debugMode) {
      pusher_js__WEBPACK_IMPORTED_MODULE_2___default.a.logToConsole = true;
    } else {
      pusher_js__WEBPACK_IMPORTED_MODULE_2___default.a.logToConsole = false;
    }

    window.Echo = new laravel_echo__WEBPACK_IMPORTED_MODULE_0__["default"]({
      broadcaster: "pusher",
      cluster: pusherConfigs.pusherAppCluster,
      encrypted: true,
      key: pusherConfigs.pusherAppKey,
      authorizer: function authorizer(channel, options) {
        return {
          authorize: function authorize(socketId, callback) {
            axios__WEBPACK_IMPORTED_MODULE_1___default.a.post('/api/broadcasting/auth', {
              socket_id: socketId,
              channel_name: channel.name
            }).then(function (response) {
              if (!response || !response.data) {
                console.error('Invalid Data!');
              } else {
                callback(false, response.data);
              }
            })["catch"](function (error) {
              callback(true, error);
            });
          }
        };
      }
    });
    window.EchoOpts = {
      subscriptions: {}
    };
  }
};
/* harmony default export */ __webpack_exports__["default"] = ({
  setupPusher: setupPusher
});

/***/ }),

/***/ 1:
/*!********************!*\
  !*** ws (ignored) ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

}]);
//# sourceMappingURL=app-layout.js.map?id=0b6112223f80c7cc6db9