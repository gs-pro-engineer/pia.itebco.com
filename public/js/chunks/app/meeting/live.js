(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app/meeting/live"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/FileSharer.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/FileSharer.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _js_vars__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @js/vars */ "./resources/js/vars.js");
/* harmony import */ var bootstrap_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! bootstrap-vue */ "./node_modules/bootstrap-vue/esm/index.js");
/* harmony import */ var _core_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @core/utils */ "./resources/js/core/utils/index.js");
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
  name: "file-sharer",
  components: {
    BProgress: bootstrap_vue__WEBPACK_IMPORTED_MODULE_2__["BProgress"]
  },
  props: {
    connection: {
      "default": null
    },
    allowSharing: {
      "default": true
    },
    actionLabel: {
      type: String,
      "default": 'global.choose'
    },
    nameLabel: {
      type: String,
      "default": 'upload.file'
    },
    namesLabel: {
      type: String,
      "default": 'upload.files'
    },
    closeButtonLabel: {
      type: String,
      "default": 'upload.close'
    },
    buttonWrapperClasses: {
      type: String,
      "default": 'justify-content-between'
    },
    buttonClasses: {
      type: String,
      "default": ''
    },
    closeButtonClasses: {
      type: String,
      "default": 'btn-light'
    },
    buttonIcon: {
      type: String,
      "default": 'fas fa-upload'
    },
    buttonDesign: {
      type: String,
      "default": 'primary'
    },
    options: {
      type: Object,
      "default": function _default() {
        return {
          allowedExtensions: ["jpg", "png", "jpeg", "pdf", "doc", "docx", "xls", "xlsx", "txt"],
          maxNoOfFiles: 20,
          allowedMaxFileSize: null
        };
      }
    },
    multiple: {
      type: Boolean,
      "default": false
    },
    hideButtonLabel: {
      type: Boolean,
      "default": false
    },
    showCloseButton: {
      type: Boolean,
      "default": true
    },
    autoSend: {
      type: Boolean,
      "default": true
    }
  },
  data: function data() {
    return {
      icons: _js_vars__WEBPACK_IMPORTED_MODULE_1__["fileIcons"],
      mimeTypes: _js_vars__WEBPACK_IMPORTED_MODULE_1__["fileMimeTypes"],
      sharingFiles: [],
      lastSelectedFile: null,
      incomingRequest: {
        show: false,
        sender: null,
        fileId: null
      }
    };
  },
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])('config', ['configs', 'vars'])),
  watch: {
    connection: function connection(newVal, oldVal) {
      if (newVal && oldVal === null) {
        this.setupConnection();
      }
    }
  },
  methods: {
    getFileIcon: function getFileIcon(type) {
      return this.icons[type] || 'fa-file-alt';
    },
    getFileNameIcon: function getFileNameIcon(type) {
      return this.icons[type] || 'fa-file-alt';
    },
    generateFilesList: function generateFilesList(e) {
      var _this = this;

      var allowedExtensions = null;
      var selectedFiles = this.$refs.filesInput.files;

      if (this.options.allowedExtensions) {
        if (!_.isArray(this.options.allowedExtensions)) {
          this.options.allowedExtensions = this.options.allowedExtensions.split(",");
        }

        allowedExtensions = new RegExp('(\.' + this.options.allowedExtensions.join('|\.') + ')$');
      }

      if (this.options.maxNoOfFiles && selectedFiles.length > this.options.maxNoOfFiles) {
        this.$toasted.error(this.$t('upload.max_file_limit_crossed', {
          number: this.options.maxNoOfFiles
        }), this.$toastConfig.error);
        return;
      }

      var _loop = function _loop(i) {
        var fileId = "".concat(selectedFiles[i].size, "-").concat(selectedFiles[i].name);

        var existingFileIndex = _this.sharingFiles.findIndex(function (f) {
          return f.fileId === fileId;
        });

        if (allowedExtensions && !allowedExtensions.test(selectedFiles[i].name)) {
          _this.$toasted.error(_this.$t('global.file_not_supported', {
            attribute: selectedFiles[i].name.split('.').pop()
          }), _this.$toastConfig.error);
        } else if (_this.options.allowedMaxFileSize && selectedFiles[i].size > _this.options.allowedMaxFileSize) {
          _this.$toasted.error(_this.$t('global.file_too_large', {
            attribute: selectedFiles[i].name
          }), _this.$toastConfig.error);
        } else if (existingFileIndex === -1) {
          var fileObj = {
            uuid: '',
            name: selectedFiles[i].name,
            size: selectedFiles[i].size,
            type: selectedFiles[i].type,
            humanSize: Object(_core_utils__WEBPACK_IMPORTED_MODULE_3__["bytesToSize"])(selectedFiles[i].size),
            fileId: fileId,
            url: '',
            sendingTo: [],
            progress: {
              value: 0,
              max: 0,
              percent: 0,
              status: 'starting'
            }
          };

          _this.sharingFiles.unshift(fileObj);

          _this.lastSelectedFile = selectedFiles[i];
        }
      };

      for (var i = 0; i < selectedFiles.length; i++) {
        _loop(i);
      }

      if (this.autoSend && this.connection) {
        this.connection.send({
          doYouWannaReceiveThisFile: true,
          sender: this.connection.extra,
          fileId: "".concat(this.lastSelectedFile.size, "-").concat(this.lastSelectedFile.name)
        });
      }
    },
    rejectIncomingFile: function rejectIncomingFile() {
      this.incomingRequest.show = false;
      this.connection.send({
        noIDoNotWannaReceive: true,
        sender: this.connection.extra,
        fileId: this.incomingRequest.fileId
      });
      this.incomingRequest.sender = null;
      this.incomingRequest.fileId = null;
    },
    acceptIncomingFile: function acceptIncomingFile() {
      this.incomingRequest.show = false;
      this.connection.send({
        yesIWannaReceive: true,
        sender: this.connection.extra,
        fileId: this.incomingRequest.fileId
      });
      this.incomingRequest.sender = null;
      this.incomingRequest.fileId = null;
    },
    rtcmOnOpen: function rtcmOnOpen(e) {
      var _this2 = this;

      try {
        chrome.power.requestKeepAwake('display');
      } catch (e) {}

      if (this.connection.connectedWith[e.userid]) {
        return;
      }

      this.connection.connectedWith[e.userid] = true;

      if (!this.lastSelectedFile) {
        return;
      }

      window.setTimeout(function () {
        if (_this2.autoSend && _this2.connection) {
          _this2.connection.send({
            doYouWannaReceiveThisFile: true,
            sender: _this2.connection.extra,
            fileId: "".concat(_this2.lastSelectedFile.size, "-").concat(_this2.lastSelectedFile.name)
          });
        }
      }, 500);
    },
    rtcmOnClose: function rtcmOnClose(e) {},
    rtcmOnLeave: function rtcmOnLeave(e) {},
    rtcmOnMessage: function rtcmOnMessage(event) {
      if (event.data.doYouWannaReceiveThisFile) {
        if (!this.connection.fileReceived[event.data.fileId]) {
          this.incomingRequest.fileId = event.data.fileId;
          this.incomingRequest.sender = event.data.sender;
          this.incomingRequest.show = true;
          this.$emit('show');
        }
      } else if (event.data.yesIWannaReceive && !!this.lastSelectedFile) {
        this.connection.shareFile(this.lastSelectedFile, event.userid);
      } else if (event.data.noIDoNotWannaReceive && !!this.lastSelectedFile) {}
    },
    rtcmOnFileStart: function rtcmOnFileStart(file) {
      var fileId = "".concat(file.size, "-").concat(file.name);

      if (this.connection.fileReceived[fileId]) {
        return;
      } //receiving new file


      if (file.userid !== this.connection.userid) {
        this.sharingFiles.unshift({
          uuid: '',
          name: file.name,
          size: file.size,
          type: file.type,
          humanSize: Object(_core_utils__WEBPACK_IMPORTED_MODULE_3__["bytesToSize"])(file.size),
          fileId: fileId,
          url: '',
          receivingFrom: null,
          progress: {
            value: 0,
            max: 0,
            percent: 0,
            status: 'starting'
          }
        });
        this.$emit('show');
      }

      var selectedFileIndex = this.sharingFiles.findIndex(function (f) {
        return f.fileId === fileId;
      });

      if (selectedFileIndex === -1) {
        return;
      }

      var selectedFile = this.sharingFiles[selectedFileIndex];
      selectedFile.uuid = file.uuid;
      selectedFile.userid = file.userid;

      if (file.userid === this.connection.userid) {
        if (!selectedFile.sendingTo) {
          selectedFile.sendingTo = [];
        }

        if (selectedFile.sendingTo.length > 0) {
          if (selectedFile.sendingTo.findIndex(function (u) {
            return u.userid === file.remoteUserId;
          }) !== -1) {
            return;
          }
        }

        selectedFile.sendingTo.unshift({
          userid: file.remoteUserId,
          progress: {
            value: 0,
            percent: 0,
            max: file.maxChunks,
            status: 'starting'
          }
        });
      } else {
        selectedFile.receiveAgain = true;
        selectedFile.receivingFrom = file.userid;
        selectedFile.progress.max = file.maxChunks;
        selectedFile.progress.status = 'starting';
      }
    },
    rtcmOnFileProgress: function rtcmOnFileProgress(chunk) {
      var fileId = "".concat(chunk.size, "-").concat(chunk.name);

      if (this.connection.fileReceived[fileId]) {
        return;
      }

      var selectedFileIndex = this.sharingFiles.findIndex(function (f) {
        return f.uuid === chunk.uuid;
      });

      if (selectedFileIndex === -1) {
        return;
      }

      var selectedFile = this.sharingFiles[selectedFileIndex];

      if (chunk.remoteUserId && selectedFile.sendingTo) {
        var remoteUserIndex = selectedFile.sendingTo.findIndex(function (u) {
          return u.userid === chunk.remoteUserId;
        });
        var helperInnerObj = selectedFile.sendingTo[remoteUserIndex];

        if (!helperInnerObj) {
          return;
        }

        helperInnerObj.progress.value = chunk.currentPosition;
        helperInnerObj.progress = this.updateProgress(helperInnerObj.progress, true);
      } else {
        selectedFile.progress.value = chunk.currentPosition;
        selectedFile.progress = this.updateProgress(selectedFile.progress, false);
      }
    },
    rtcmOnFileEnd: function rtcmOnFileEnd(file) {
      var fileId = "".concat(file.size, "-").concat(file.name);

      if (this.connection.fileReceived[fileId]) {
        return;
      } //received file ?


      if (file.remoteUserId === this.connection.userid) {
        this.connection.fileReceived[fileId] = file;
      }

      var selectedFileIndex = this.sharingFiles.findIndex(function (f) {
        return f.fileId === fileId;
      });

      if (selectedFileIndex === -1) {
        return;
      }

      var selectedFile = this.sharingFiles[selectedFileIndex];
      selectedFile.url = file.url;

      if (file.remoteUserId && selectedFile.sendingTo) {
        var remoteUserIndex = selectedFile.sendingTo.findIndex(function (u) {
          return u.userid === file.remoteUserId;
        });
        selectedFile.sendingTo[remoteUserIndex].progress.status = 'sent';
      } else {
        selectedFile.progress.status = 'received';
      }
    },
    rtcmOnError: function rtcmOnError(e) {},
    updateProgress: function updateProgress(progress) {
      var sending = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

      if (!progress.value || progress.value === -1) {
        progress.percent = 0;
        return progress;
      }

      var percent = parseInt((progress.value / progress.max * 100).toFixed(0));

      if (sending) {
        progress.status = percent > 100 ? 'sent' : 'sending - ' + percent + '%';
      } else {
        progress.status = percent > 100 ? 'received' : 'receiving - ' + percent + '%';
      }

      progress.percent = percent > 100 ? 100 : percent;
      return progress;
    },
    setupConnection: function setupConnection() {
      this.connection.enableFileSharing = true;
      this.connection.fileReceived = {};
      this.connection.connectedWith = {};
      this.connection.chunkSize = 15 * 1000;
      this.connection.onopen = this.rtcmOnOpen;
      this.connection.onclose = this.rtcmOnClose;
      this.connection.onleave = this.rtcmOnLeave;
      this.connection.onmessage = this.rtcmOnMessage;
      this.connection.onerror = this.rtcmOnError;
      this.connection.onFileStart = this.rtcmOnFileStart;
      this.connection.onFileProgress = this.rtcmOnFileProgress;
      this.connection.onFileEnd = this.rtcmOnFileEnd;
    }
  },
  mounted: function mounted() {
    this.options.allowedMaxFileSize = this.options.allowedMaxFileSize ? this.options.allowedMaxFileSize : this.configs.system && this.configs.system.postMaxSize ? this.configs.system.postMaxSize : null;
    this.options.allowedExtensions = this.options.allowedExtensions ? this.options.allowedExtensions : this.configs.system && this.configs.system.allowedFileExtensions ? this.configs.system.allowedFileExtensions : null;

    if (this.connection) {
      this.setupConnection();
    }
  },
  destroyed: function destroyed() {}
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/app/meeting/live.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/app/meeting/live.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _mixins_user_dropdown__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @mixins/user-dropdown */ "./resources/js/mixins/user-dropdown.js");
/* harmony import */ var _mixins_meeting__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @mixins/meeting */ "./resources/js/mixins/meeting.js");
/* harmony import */ var _mixins_live__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mixins/live */ "./resources/js/mixins/live.js");
/* harmony import */ var _mixins_azure_speech__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mixins/azure-speech */ "./resources/js/mixins/azure-speech.js");
/* harmony import */ var _mixins_google_speech__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mixins/google-speech */ "./resources/js/mixins/google-speech.js");
/* harmony import */ var _components_AppLogo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @components/AppLogo */ "./resources/js/components/AppLogo.vue");
/* harmony import */ var _core_components_AnimatedNumber__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @core/components/AnimatedNumber */ "./resources/js/core/components/AnimatedNumber.vue");
/* harmony import */ var vue2_flip_countdown__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! vue2-flip-countdown */ "./node_modules/vue2-flip-countdown/dist/vue2-flip-countdown.js");
/* harmony import */ var vue2_flip_countdown__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(vue2_flip_countdown__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _components_FileSharer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @components/FileSharer */ "./resources/js/components/FileSharer.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//








 // import VideoItem from './video-item'

/* harmony default export */ __webpack_exports__["default"] = ({
  mixins: [_mixins_live__WEBPACK_IMPORTED_MODULE_2__["default"], _mixins_meeting__WEBPACK_IMPORTED_MODULE_1__["default"], _mixins_user_dropdown__WEBPACK_IMPORTED_MODULE_0__["default"], _mixins_azure_speech__WEBPACK_IMPORTED_MODULE_3__["default"], _mixins_google_speech__WEBPACK_IMPORTED_MODULE_4__["default"]],
  components: {
    AppLogo: _components_AppLogo__WEBPACK_IMPORTED_MODULE_5__["default"],
    AnimatedNumber: _core_components_AnimatedNumber__WEBPACK_IMPORTED_MODULE_6__["default"],
    FlipCountdown: vue2_flip_countdown__WEBPACK_IMPORTED_MODULE_7___default.a,
    FileSharer: _components_FileSharer__WEBPACK_IMPORTED_MODULE_8__["default"]
  },
  computed: {
    fileSharerOptions: function fileSharerOptions() {
      return {
        allowedExtensions: this.configs.system.allowedFileExtensions,
        maxNoOfFiles: 20,
        allowedMaxFileSize: null
      };
    }
  },
  watch: {
    locked: function locked(newVal, oldVal) {
      if (newVal) {
        var toPath = this.$route.fullPath;
        this.$router.push({
          name: 'authLock',
          query: {
            ref: toPath
          }
        });
      }
    }
  },
  methods: {
    toggleVoiceToText: function toggleVoiceToText() {
      console.log("currentLanguage:", this.currentLanguage);

      if (this.autoTranslate === "Google Translate") {
        this.google_toggleVoiceToText({
          language: this.currentLanguage,
          V2V: false
        });
      } else if (this.autoTranslate === "Microsoft Azure" || this.autoTranslate === null) {
        this.azure_toggleVoiceToText();
      }
    },
    toggleVoiceToVoice: function toggleVoiceToVoice() {
      if (this.autoTranslate === "Google Translate") {
        this.google_toggleVoiceToText({
          language: this.currentLanguage,
          V2V: true
        });
      } else if (this.autoTranslate === "Microsoft Azure" || this.autoTranslate === null) {
        this.azure_toggleVoiceToVoice();
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/app/meeting/live.vue?vue&type=style&index=0&lang=scss&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-2!./node_modules/sass-loader/dist/cjs.js??ref--9-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/app/meeting/live.vue?vue&type=style&index=0&lang=scss& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Muli:300,400,600,700,800,900);", ""]);

// module
exports.push([module.i, ".files-sharing-box {\n  position: relative;\n  width: 100vw;\n  min-height: 30vh;\n}\n.files-sharing-box .files-container {\n  width: 100%;\n  height: 100%;\n  background-color: white;\n}\n.files-sharing-box .files-container .files-wrapper {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  padding: 0.5rem;\n}\n.agenda-streams-container .voice-text {\n  background-color: #00000017;\n  position: absolute;\n  z-index: 100;\n  top: 50%;\n  left: 50%;\n  transform: translateX(-50%) translateY(calc(-50% - 20px));\n}\n@media (min-width: 576px) {\n.files-sharing-box {\n    position: fixed;\n    top: 0;\n    left: 0;\n    width: 35vw;\n    height: 100vh;\n    z-index: 1;\n}\n.files-sharing-box .files-container {\n    width: 100%;\n    height: 100%;\n    background-color: rgba(255, 255, 255, 0.85);\n    padding-bottom: 60px;\n    opacity: 0.85;\n}\n.files-sharing-box .files-container .files-wrapper {\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    padding: 1.5rem;\n}\n.files-sharing-box:hover .files-container {\n    opacity: 1;\n}\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/app/meeting/live.vue?vue&type=style&index=0&lang=scss&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-2!./node_modules/sass-loader/dist/cjs.js??ref--9-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/app/meeting/live.vue?vue&type=style&index=0&lang=scss& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--9-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--9-3!../../../../../node_modules/vue-loader/lib??vue-loader-options!./live.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/app/meeting/live.vue?vue&type=style&index=0&lang=scss&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/FileSharer.vue?vue&type=template&id=68270e3a&":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/FileSharer.vue?vue&type=template&id=68270e3a& ***!
  \*************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "sm-uploader file-uploader file-sharer" }, [
    _c("div", { class: ["files-list-wrapper"] }, [
      _vm.incomingRequest.show
        ? _c("div", { staticClass: "file-incoming-request" }, [
            _c("div", { staticClass: "alert fade show alert-white" }, [
              _c("div", { staticClass: "alert-content" }, [
                _c("h6", [
                  _c("strong", [
                    _vm._v(_vm._s(_vm.incomingRequest.sender.name))
                  ]),
                  _c("span", { staticClass: "text-muted mx-1" }, [
                    _vm._v(_vm._s(_vm.$t("upload.wants_to_share_file")))
                  ]),
                  _c("strong", [_vm._v(_vm._s(_vm.incomingRequest.fileId))])
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "d-flex justify-content-start mt-3" }, [
                _c(
                  "button",
                  {
                    staticClass: "btn btn-sm btn-danger flex-grow",
                    attrs: { type: "button" },
                    on: { click: _vm.rejectIncomingFile }
                  },
                  [_vm._v(_vm._s(_vm.$t("upload.reject")))]
                ),
                _vm._v(" "),
                _c(
                  "button",
                  {
                    staticClass: "btn btn-sm btn-success flex-grow",
                    attrs: { type: "button" },
                    on: { click: _vm.acceptIncomingFile }
                  },
                  [_vm._v(_vm._s(_vm.$t("upload.accept")))]
                )
              ])
            ])
          ])
        : _vm._e(),
      _vm._v(" "),
      _vm.sharingFiles.length
        ? _c(
            "ul",
            { staticClass: "files-list" },
            _vm._l(_vm.sharingFiles, function(fileObj, index) {
              return _c(
                "li",
                { key: fileObj.fileId, staticClass: "file-details-row" },
                [
                  _c("div", { staticClass: "file-details-wrapper" }, [
                    _c("div", { staticClass: "file-icon" }, [
                      _c("span", [
                        _c("i", {
                          class: ["far", _vm.getFileIcon(fileObj.type)]
                        })
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "file-details" }, [
                      _c("h6", [_vm._v(_vm._s(fileObj.name))]),
                      _vm._v(" "),
                      _c("p", [
                        _c("span", [
                          _c("span", { staticClass: "font-weight-700" }, [
                            _vm._v(_vm._s(_vm.$t("upload.type")))
                          ]),
                          _vm._v(
                            ": " +
                              _vm._s(_vm.mimeTypes[fileObj.type] || "Unknown")
                          )
                        ]),
                        _vm._v(" "),
                        _c("span", { staticClass: "ml-1" }, [
                          _c("span", { staticClass: "font-weight-700" }, [
                            _vm._v(_vm._s(_vm.$t("upload.size")))
                          ]),
                          _vm._v(": " + _vm._s(fileObj.humanSize))
                        ])
                      ]),
                      _vm._v(" "),
                      fileObj.sendingTo
                        ? _c(
                            "div",
                            { staticClass: "sharing-details-wrapper" },
                            _vm._l(fileObj.sendingTo, function(to) {
                              return _c(
                                "div",
                                {
                                  key: to.userid,
                                  staticClass: "sharing-row mt-2"
                                },
                                [
                                  _c(
                                    "div",
                                    { staticClass: "sharing-details small" },
                                    [
                                      _c(
                                        "div",
                                        { staticClass: "flex-grow text-muted" },
                                        [
                                          _vm._v(
                                            "\n                                        Sending to: " +
                                              _vm._s(to.userid) +
                                              "\n                                    "
                                          )
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _c("div", [
                                        _c(
                                          "span",
                                          {
                                            class: [
                                              "badge badge-sm badge-pill",
                                              {
                                                "badge-success":
                                                  to.progress.status === "sent"
                                              },
                                              {
                                                "badge-info":
                                                  to.progress.status !== "sent"
                                              }
                                            ]
                                          },
                                          [_vm._v(_vm._s(to.progress.status))]
                                        )
                                      ])
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c("b-progress", {
                                    staticClass: "mt-2 mb-0",
                                    attrs: {
                                      value: to.progress.percent,
                                      max: 100
                                    }
                                  })
                                ],
                                1
                              )
                            }),
                            0
                          )
                        : fileObj.receivingFrom
                        ? _c(
                            "div",
                            { staticClass: "sharing-row mt-2" },
                            [
                              _c(
                                "div",
                                { staticClass: "sharing-details small" },
                                [
                                  _c(
                                    "div",
                                    { staticClass: "flex-grow text-muted" },
                                    [
                                      _vm._v(
                                        "\n                                    Receiving From: " +
                                          _vm._s(fileObj.receivingFrom) +
                                          "\n                                "
                                      )
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c("div", [
                                    _c(
                                      "span",
                                      {
                                        class: [
                                          "badge badge-sm badge-pill",
                                          {
                                            "badge-success":
                                              fileObj.progress.status ===
                                              "received"
                                          },
                                          {
                                            "badge-info":
                                              fileObj.progress.status !==
                                              "received"
                                          }
                                        ]
                                      },
                                      [_vm._v(_vm._s(fileObj.progress.status))]
                                    )
                                  ])
                                ]
                              ),
                              _vm._v(" "),
                              _c("b-progress", {
                                staticClass: "mt-2 mb-0",
                                attrs: {
                                  value: fileObj.progress.percent,
                                  max: 100
                                }
                              })
                            ],
                            1
                          )
                        : _vm._e()
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "status-wrapper" }, [
                      !fileObj.receivingFrom ||
                      fileObj.progress.status === "received"
                        ? _c(
                            "a",
                            {
                              staticClass: "status-action",
                              attrs: {
                                href: fileObj.url,
                                target: "_blank",
                                download: fileObj.name
                              }
                            },
                            [_vm._m(0, true)]
                          )
                        : _vm._e()
                    ])
                  ])
                ]
              )
            }),
            0
          )
        : _vm._e()
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "file-uploader-form" }, [
      _c(
        "div",
        { class: ["file-selector d-flex", _vm.buttonWrapperClasses] },
        [
          _vm.showCloseButton
            ? _c(
                "button",
                {
                  class: ["btn", _vm.closeButtonClasses],
                  attrs: { type: "button" },
                  on: {
                    click: function($event) {
                      return _vm.$emit("hide")
                    }
                  }
                },
                [
                  _vm._m(1),
                  _vm._v(" "),
                  _c("span", { staticClass: "button-label" }, [
                    _vm._v(_vm._s(_vm.$t(_vm.closeButtonLabel)))
                  ])
                ]
              )
            : _vm._e(),
          _vm._v(" "),
          _vm.allowSharing
            ? [
                _c(
                  "label",
                  {
                    class: ["btn", "btn-" + _vm.buttonDesign, _vm.buttonClasses]
                  },
                  [
                    _c("input", {
                      ref: "filesInput",
                      staticClass: "selector-input",
                      attrs: {
                        name: "filesInput",
                        type: "file",
                        id: "filesInput",
                        multiple: _vm.multiple
                      },
                      on: { change: _vm.generateFilesList }
                    }),
                    _vm._v(" "),
                    _c("span", { staticClass: "button-icon" }, [
                      _c("i", { class: _vm.buttonIcon })
                    ]),
                    _vm._v(" "),
                    !_vm.hideButtonLabel
                      ? _c("span", { staticClass: "button-label" }, [
                          _vm._v(
                            _vm._s(
                              _vm.$t(_vm.actionLabel, {
                                attribute: _vm.$t(_vm.namesLabel)
                              })
                            )
                          )
                        ])
                      : _vm._e()
                  ]
                )
              ]
            : _vm._e()
        ],
        2
      )
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("span", [_c("i", { staticClass: "fas fa-download" })])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("span", { staticClass: "button-icon" }, [
      _c("i", { staticClass: "fas fa-times" })
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/app/meeting/live.vue?vue&type=template&id=12b2cb6d&":
/*!**************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/app/meeting/live.vue?vue&type=template&id=12b2cb6d& ***!
  \**************************************************************************************************************************************************************************************************************/
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
      class: [
        "meeting-page",
        { "auto-hide-footer": _vm.pageConfigs.footerAutoHide && _vm.hasVideos },
        { pulse: _vm.recording },
        {
          "mirrored-video":
            _vm.configs.meeting && _vm.configs.meeting.mirroredVideo
        }
      ],
      attrs: {
        "with-loader": "",
        "is-loading": _vm.isLoading,
        "loader-color": _vm.vars.loaderColor,
        "overlay-color": _vm.uiConfigs.pageColorSchemeType,
        "loader-size": "screen",
        "data-page-background-color": _vm.uiConfigs.pageBackgroundColor,
        "data-card-background-color": _vm.uiConfigs.pageContainerBackgroundColor
      }
    },
    [
      !_vm.duplicateTab
        ? [
            _c(
              "div",
              {
                class: ["meeting-footer", { "has-videos": _vm.hasVideos }],
                attrs: {
                  "data-footer-background-color": _vm.uiConfigs.leftSidebarColor
                }
              },
              [
                _c(
                  "div",
                  { staticClass: "logo-wrapper" },
                  [
                    _c("app-logo", {
                      attrs: { place: "sidebar", size: "sm", tag: "span" }
                    })
                  ],
                  1
                ),
                _vm._v(" "),
                _vm.entity && _vm.entity.status
                  ? _c(
                      "div",
                      { staticClass: "meeting-actions meeting-actions-center" },
                      [
                        _vm.pageConfigs.showEnableAudioBtn
                          ? [
                              _vm.pageConfigs.enableAudio
                                ? _c(
                                    "button",
                                    {
                                      directives: [
                                        {
                                          name: "b-tooltip",
                                          rawName: "v-b-tooltip.hover.d500",
                                          modifiers: { hover: true, d500: true }
                                        }
                                      ],
                                      staticClass: "btn action",
                                      attrs: {
                                        type: "button",
                                        title: _vm.$t("meeting.mute_audio")
                                      },
                                      on: {
                                        click: function($event) {
                                          _vm.toggleAudio()
                                          _vm.toggleRecognition()
                                        }
                                      }
                                    },
                                    [
                                      _c("i", {
                                        staticClass: "fas fa-microphone"
                                      })
                                    ]
                                  )
                                : _c(
                                    "button",
                                    {
                                      directives: [
                                        {
                                          name: "b-tooltip",
                                          rawName: "v-b-tooltip.hover.d500",
                                          modifiers: { hover: true, d500: true }
                                        }
                                      ],
                                      staticClass: "btn action disabled-text",
                                      attrs: {
                                        type: "button",
                                        title: _vm.$t("meeting.unmute_audio")
                                      },
                                      on: {
                                        click: function($event) {
                                          _vm.toggleAudio()
                                          _vm.toggleRecognition()
                                        }
                                      }
                                    },
                                    [
                                      _c("i", {
                                        staticClass: "fas fa-microphone-slash"
                                      })
                                    ]
                                  )
                            ]
                          : _vm._e(),
                        _vm._v(" "),
                        _vm.pageConfigs.showEnableVideoBtn
                          ? [
                              _vm.pageConfigs.enableVideo
                                ? _c(
                                    "button",
                                    {
                                      directives: [
                                        {
                                          name: "b-tooltip",
                                          rawName: "v-b-tooltip.hover.d500",
                                          modifiers: { hover: true, d500: true }
                                        }
                                      ],
                                      staticClass: "btn action",
                                      attrs: {
                                        type: "button",
                                        title: _vm.$t("meeting.mute_video")
                                      },
                                      on: { click: _vm.toggleVideo }
                                    },
                                    [_c("i", { staticClass: "fas fa-video" })]
                                  )
                                : _c(
                                    "button",
                                    {
                                      directives: [
                                        {
                                          name: "b-tooltip",
                                          rawName: "v-b-tooltip.hover.d500",
                                          modifiers: { hover: true, d500: true }
                                        }
                                      ],
                                      staticClass: "btn action disabled-text",
                                      attrs: {
                                        type: "button",
                                        title: _vm.$t("meeting.unmute_video")
                                      },
                                      on: { click: _vm.toggleVideo }
                                    },
                                    [
                                      _c("i", {
                                        staticClass: "fas fa-video-slash"
                                      })
                                    ]
                                  )
                            ]
                          : _vm._e(),
                        _vm._v(" "),
                        _vm.pageConfigs.showDeviceConfig
                          ? _c(
                              "button",
                              {
                                directives: [
                                  {
                                    name: "b-tooltip",
                                    rawName: "v-b-tooltip.hover.d500",
                                    modifiers: { hover: true, d500: true }
                                  }
                                ],
                                staticClass:
                                  "btn action d-sm-none d-md-inline-block",
                                attrs: {
                                  type: "button",
                                  title: _vm.$t("meeting.media_devices.setup")
                                },
                                on: { click: _vm.toggleDevicesModal }
                              },
                              [_c("i", { staticClass: "fas fa-cogs" })]
                            )
                          : _vm._e(),
                        _vm._v(" "),
                        _vm.videoList.length
                          ? [
                              _vm.pageConfigs.enableFileSharing
                                ? _c(
                                    "button",
                                    {
                                      directives: [
                                        {
                                          name: "b-tooltip",
                                          rawName: "v-b-tooltip.hover.d500",
                                          modifiers: { hover: true, d500: true }
                                        }
                                      ],
                                      class: [
                                        "btn action d-none d-lg-inline-block",
                                        { "disabled-text": _vm.showFileSharing }
                                      ],
                                      attrs: {
                                        type: "button",
                                        title: _vm.$t("upload.share_files")
                                      },
                                      on: { click: _vm.toggleFileSharing }
                                    },
                                    [_c("i", { staticClass: "fas fa-upload" })]
                                  )
                                : _vm._e(),
                              _vm._v(" "),
                              _c(
                                "button",
                                {
                                  directives: [
                                    {
                                      name: "b-tooltip",
                                      rawName: "v-b-tooltip.hover.d500",
                                      modifiers: { hover: true, d500: true }
                                    }
                                  ],
                                  staticClass: "btn action danger-text",
                                  attrs: {
                                    type: "button",
                                    title: _vm.$t("meeting.leave_meeting")
                                  },
                                  on: { click: _vm.getOffline }
                                },
                                [_c("i", { staticClass: "fas fa-phone-slash" })]
                              ),
                              _vm._v(" "),
                              _vm.pageConfigs.enableScreenSharing
                                ? [
                                    _vm.localScreenStreamid
                                      ? _c(
                                          "button",
                                          {
                                            directives: [
                                              {
                                                name: "b-tooltip",
                                                rawName:
                                                  "v-b-tooltip.hover.d500",
                                                modifiers: {
                                                  hover: true,
                                                  d500: true
                                                }
                                              }
                                            ],
                                            staticClass:
                                              "btn action disabled-text d-none d-lg-inline-block",
                                            attrs: {
                                              type: "button",
                                              title: _vm.$t(
                                                "meeting.stop_sharing_screen"
                                              )
                                            },
                                            on: { click: _vm.stopSharingScreen }
                                          },
                                          [
                                            _c("i", {
                                              staticClass: "fas fa-minus-square"
                                            })
                                          ]
                                        )
                                      : _c(
                                          "button",
                                          {
                                            directives: [
                                              {
                                                name: "b-tooltip",
                                                rawName:
                                                  "v-b-tooltip.hover.d500",
                                                modifiers: {
                                                  hover: true,
                                                  d500: true
                                                }
                                              }
                                            ],
                                            staticClass:
                                              "btn action d-none d-lg-inline-block",
                                            attrs: {
                                              type: "button",
                                              title: _vm.$t(
                                                "meeting.share_screen"
                                              )
                                            },
                                            on: { click: _vm.shareScreen }
                                          },
                                          [
                                            _c("i", {
                                              staticClass: "fas fa-desktop"
                                            })
                                          ]
                                        )
                                  ]
                                : _vm._e(),
                              _vm._v(" "),
                              _vm.pageConfigs.enableRecording &&
                              _vm.entity.canModerate
                                ? [
                                    _vm.recording
                                      ? [
                                          _vm.pageConfigs.enableAutoRecording &&
                                          !_vm.pageConfigs.canStopAutoRecording
                                            ? [
                                                _c(
                                                  "button",
                                                  {
                                                    staticClass:
                                                      "btn action danger-text d-none d-md-inline-block",
                                                    attrs: { type: "button" }
                                                  },
                                                  [
                                                    _c("i", {
                                                      staticClass:
                                                        "fas fa-circle"
                                                    }),
                                                    _vm._v(" "),
                                                    _c(
                                                      "span",
                                                      {
                                                        staticClass:
                                                          "recording_time"
                                                      },
                                                      [
                                                        _vm._v(
                                                          _vm._s(
                                                            _vm.recordingDuration
                                                          )
                                                        )
                                                      ]
                                                    )
                                                  ]
                                                )
                                              ]
                                            : [
                                                _vm.recordingPaused
                                                  ? _c(
                                                      "button",
                                                      {
                                                        directives: [
                                                          {
                                                            name: "b-tooltip",
                                                            rawName:
                                                              "v-b-tooltip.hover.d500",
                                                            modifiers: {
                                                              hover: true,
                                                              d500: true
                                                            }
                                                          }
                                                        ],
                                                        staticClass:
                                                          "btn action success-text d-none d-md-inline-block",
                                                        attrs: {
                                                          type: "button",
                                                          title: _vm.$t(
                                                            "meeting.resume_recording"
                                                          )
                                                        },
                                                        on: {
                                                          click:
                                                            _vm.resumeRecording
                                                        }
                                                      },
                                                      [
                                                        _c("i", {
                                                          staticClass:
                                                            "fas fa-circle"
                                                        })
                                                      ]
                                                    )
                                                  : _c(
                                                      "button",
                                                      {
                                                        directives: [
                                                          {
                                                            name: "b-tooltip",
                                                            rawName:
                                                              "v-b-tooltip.hover.d500",
                                                            modifiers: {
                                                              hover: true,
                                                              d500: true
                                                            }
                                                          }
                                                        ],
                                                        staticClass:
                                                          "btn action danger-text d-none d-md-inline-block",
                                                        attrs: {
                                                          type: "button",
                                                          title: _vm.$t(
                                                            "meeting.pause_recording"
                                                          )
                                                        },
                                                        on: {
                                                          click:
                                                            _vm.pauseRecording
                                                        }
                                                      },
                                                      [
                                                        _c("i", {
                                                          staticClass:
                                                            "fas fa-pause"
                                                        })
                                                      ]
                                                    ),
                                                _vm._v(" "),
                                                _c(
                                                  "button",
                                                  {
                                                    directives: [
                                                      {
                                                        name: "b-tooltip",
                                                        rawName:
                                                          "v-b-tooltip.hover.d500",
                                                        modifiers: {
                                                          hover: true,
                                                          d500: true
                                                        }
                                                      }
                                                    ],
                                                    staticClass:
                                                      "btn action danger-text d-none d-md-inline-block",
                                                    attrs: {
                                                      type: "button",
                                                      title: _vm.$t(
                                                        "meeting.stop_recording"
                                                      )
                                                    },
                                                    on: {
                                                      click: _vm.stopRecording
                                                    }
                                                  },
                                                  [
                                                    _c("i", {
                                                      staticClass: "fas fa-stop"
                                                    }),
                                                    _vm._v(" "),
                                                    _c(
                                                      "span",
                                                      {
                                                        staticClass:
                                                          "recording_time"
                                                      },
                                                      [
                                                        _vm._v(
                                                          _vm._s(
                                                            _vm.recordingDuration
                                                          )
                                                        )
                                                      ]
                                                    )
                                                  ]
                                                )
                                              ]
                                        ]
                                      : _c(
                                          "button",
                                          {
                                            directives: [
                                              {
                                                name: "b-tooltip",
                                                rawName:
                                                  "v-b-tooltip.hover.d500",
                                                modifiers: {
                                                  hover: true,
                                                  d500: true
                                                }
                                              }
                                            ],
                                            staticClass:
                                              "btn action d-none d-md-inline-block",
                                            attrs: {
                                              type: "button",
                                              title: _vm.$t(
                                                "meeting.start_recording"
                                              )
                                            },
                                            on: { click: _vm.startRecording }
                                          },
                                          [
                                            _c("i", {
                                              staticClass: "fas fa-circle"
                                            })
                                          ]
                                        )
                                  ]
                                : _vm._e(),
                              _vm._v(" "),
                              _vm.pageConfigs.enableWhiteboard
                                ? [
                                    _vm.showWhiteboard
                                      ? _c(
                                          "button",
                                          {
                                            directives: [
                                              {
                                                name: "b-tooltip",
                                                rawName:
                                                  "v-b-tooltip.hover.d500",
                                                modifiers: {
                                                  hover: true,
                                                  d500: true
                                                }
                                              }
                                            ],
                                            staticClass:
                                              "btn action danger-text d-none d-md-inline-block",
                                            attrs: {
                                              type: "button",
                                              title: _vm.$t(
                                                "meeting.hide_whiteboard"
                                              )
                                            },
                                            on: { click: _vm.toggleWhiteboard }
                                          },
                                          [
                                            _c("i", {
                                              staticClass:
                                                "fas fa-chalkboard-teacher"
                                            })
                                          ]
                                        )
                                      : _vm._e(),
                                    _vm._v(" "),
                                    _vm.showWhiteboard
                                      ? _c(
                                          "button",
                                          {
                                            directives: [
                                              {
                                                name: "b-tooltip",
                                                rawName:
                                                  "v-b-tooltip.hover.d500",
                                                modifiers: {
                                                  hover: true,
                                                  d500: true
                                                }
                                              }
                                            ],
                                            staticClass:
                                              "btn action danger-text d-none d-md-inline-block",
                                            attrs: {
                                              type: "button",
                                              title: _vm.$t(
                                                "meeting.clear_hide_whiteboard"
                                              )
                                            },
                                            on: {
                                              click:
                                                _vm.hideAndDestroyWhiteboard
                                            }
                                          },
                                          [
                                            _c("i", {
                                              staticClass:
                                                "fas fa-chalkboard-teacher mr-0"
                                            }),
                                            _c("i", {
                                              staticClass:
                                                "fas fa-times font-size-xs ml-1 font-size-xs text-danger"
                                            })
                                          ]
                                        )
                                      : _c(
                                          "button",
                                          {
                                            directives: [
                                              {
                                                name: "b-tooltip",
                                                rawName:
                                                  "v-b-tooltip.hover.d500",
                                                modifiers: {
                                                  hover: true,
                                                  d500: true
                                                }
                                              }
                                            ],
                                            staticClass:
                                              "btn action d-none d-md-inline-block",
                                            attrs: {
                                              type: "button",
                                              title: _vm.$t(
                                                "meeting.show_whiteboard"
                                              )
                                            },
                                            on: { click: _vm.toggleWhiteboard }
                                          },
                                          [
                                            _c("i", {
                                              staticClass:
                                                "fas fa-chalkboard-teacher"
                                            })
                                          ]
                                        )
                                  ]
                                : _vm._e(),
                              _vm._v(" "),
                              _vm.pageConfigs.enableHandGesture
                                ? [
                                    _vm.isHandUp
                                      ? _c(
                                          "button",
                                          {
                                            directives: [
                                              {
                                                name: "b-tooltip",
                                                rawName:
                                                  "v-b-tooltip.hover.d500",
                                                modifiers: {
                                                  hover: true,
                                                  d500: true
                                                }
                                              }
                                            ],
                                            staticClass:
                                              "btn action success-text",
                                            attrs: {
                                              type: "button",
                                              title: _vm.$t(
                                                "meeting.lower_hand"
                                              )
                                            },
                                            on: { click: _vm.toggleHandUp }
                                          },
                                          [
                                            _c("i", {
                                              staticClass: "far fa-hand-paper"
                                            })
                                          ]
                                        )
                                      : _c(
                                          "button",
                                          {
                                            directives: [
                                              {
                                                name: "b-tooltip",
                                                rawName:
                                                  "v-b-tooltip.hover.d500",
                                                modifiers: {
                                                  hover: true,
                                                  d500: true
                                                }
                                              }
                                            ],
                                            staticClass: "btn action",
                                            attrs: {
                                              type: "button",
                                              title: _vm.$t(
                                                "meeting.raise_hand"
                                              )
                                            },
                                            on: { click: _vm.toggleHandUp }
                                          },
                                          [
                                            _c("i", {
                                              staticClass: "fas fa-hand-paper"
                                            })
                                          ]
                                        )
                                  ]
                                : _vm._e()
                            ]
                          : _vm._e()
                      ],
                      2
                    )
                  : _vm._e(),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "meeting-actions meeting-actions-right" },
                  [
                    _vm.entity
                      ? [
                          _c(
                            "base-dropdown",
                            {
                              staticClass: "more-actions",
                              attrs: {
                                tag: "div",
                                direction: "up",
                                "menu-classes": "show-dropdown-up",
                                position: "right"
                              }
                            },
                            [
                              _c(
                                "button",
                                {
                                  staticClass: "btn action more-actions-btn",
                                  attrs: { slot: "title", type: "button" },
                                  slot: "title"
                                },
                                [_c("i", { staticClass: "fas fa-globe" })]
                              ),
                              _vm._v(" "),
                              _vm._l(_vm.supportedLanguages, function(
                                supportedLanguage,
                                cIndex
                              ) {
                                return [
                                  _c(
                                    "button",
                                    {
                                      key: "suported-language-button-" + cIndex,
                                      class: [
                                        "dropdown-item",
                                        {
                                          "text-success":
                                            supportedLanguage.value ===
                                            _vm.currentLanguage
                                        }
                                      ],
                                      attrs: { type: "button" },
                                      on: {
                                        click: function($event) {
                                          return _vm.setLanguage(
                                            supportedLanguage.value
                                          )
                                        }
                                      }
                                    },
                                    [
                                      _vm._v(
                                        "\n                                " +
                                          _vm._s(supportedLanguage.text) +
                                          "\n                            "
                                      )
                                    ]
                                  )
                                ]
                              })
                            ],
                            2
                          ),
                          _vm._v(" "),
                          _vm.recordedFilesToUpload &&
                          _vm.recordedFilesToUpload.length
                            ? _c(
                                "base-dropdown",
                                {
                                  staticClass:
                                    "more-actions d-none d-md-inline-block",
                                  attrs: {
                                    tag: "div",
                                    direction: "up",
                                    size: "md",
                                    "menu-classes":
                                      "show-dropdown-up p-0 max-height-500px",
                                    position: "right",
                                    "has-scroll": ""
                                  }
                                },
                                [
                                  _c(
                                    "button",
                                    {
                                      staticClass:
                                        "btn action grid-toggle-btn d-none d-md-inline-block",
                                      attrs: { slot: "title", type: "button" },
                                      slot: "title"
                                    },
                                    [
                                      _c("i", {
                                        staticClass: "fas fa-cloud-upload-alt"
                                      })
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "card",
                                    {
                                      staticClass: "upload-widget",
                                      attrs: {
                                        shadow: "",
                                        "body-classes": "p-0",
                                        "header-classes": "p-2"
                                      },
                                      scopedSlots: _vm._u(
                                        [
                                          {
                                            key: "header",
                                            fn: function() {
                                              return [
                                                _c(
                                                  "h5",
                                                  { staticClass: "m-0 p-1" },
                                                  [
                                                    _vm._v(
                                                      _vm._s(
                                                        _vm.$t(
                                                          "meeting.meeting_recordings"
                                                        )
                                                      )
                                                    )
                                                  ]
                                                )
                                              ]
                                            },
                                            proxy: true
                                          }
                                        ],
                                        null,
                                        false,
                                        2909934337
                                      )
                                    },
                                    [
                                      _vm._v(" "),
                                      _c(
                                        "div",
                                        { staticClass: "widget-wrapper" },
                                        [
                                          _c(
                                            "div",
                                            {
                                              staticClass:
                                                "widget-body file-uploader"
                                            },
                                            [
                                              _c(
                                                "div",
                                                {
                                                  staticClass:
                                                    "files-list-wrapper"
                                                },
                                                [
                                                  _c(
                                                    "ul",
                                                    {
                                                      staticClass: "files-list"
                                                    },
                                                    _vm._l(
                                                      _vm.recordedFilesToUpload,
                                                      function(fileObj) {
                                                        return _c(
                                                          "li",
                                                          {
                                                            key: fileObj.uuid,
                                                            staticClass:
                                                              "file-details-row"
                                                          },
                                                          [
                                                            _c(
                                                              "div",
                                                              {
                                                                staticClass:
                                                                  "file-details"
                                                              },
                                                              [
                                                                !fileObj.chunk
                                                                  ? _c(
                                                                      "h6",
                                                                      {
                                                                        staticClass:
                                                                          "pointer",
                                                                        on: {
                                                                          click: function(
                                                                            $event
                                                                          ) {
                                                                            return fileObj.download(
                                                                              fileObj.blob
                                                                            )
                                                                          }
                                                                        }
                                                                      },
                                                                      [
                                                                        _vm._v(
                                                                          _vm._s(
                                                                            fileObj
                                                                              .file
                                                                              .name
                                                                          )
                                                                        )
                                                                      ]
                                                                    )
                                                                  : _c(
                                                                      "h6",
                                                                      {
                                                                        staticClass:
                                                                          "pointer"
                                                                      },
                                                                      [
                                                                        _vm._v(
                                                                          _vm._s(
                                                                            fileObj.name
                                                                          )
                                                                        )
                                                                      ]
                                                                    ),
                                                                _vm._v(" "),
                                                                fileObj.error
                                                                  ? _c(
                                                                      "p",
                                                                      {
                                                                        staticClass:
                                                                          "text-danger"
                                                                      },
                                                                      [
                                                                        _vm._v(
                                                                          "\n                                                        " +
                                                                            _vm._s(
                                                                              fileObj.error
                                                                            ) +
                                                                            "\n                                                    "
                                                                        )
                                                                      ]
                                                                    )
                                                                  : [
                                                                      _c(
                                                                        "p",
                                                                        {
                                                                          staticClass:
                                                                            "text-muted"
                                                                        },
                                                                        [
                                                                          _vm._v(
                                                                            "\n                                                            " +
                                                                              _vm._s(
                                                                                fileObj.status
                                                                              ) +
                                                                              "\n                                                        "
                                                                          )
                                                                        ]
                                                                      ),
                                                                      _vm._v(
                                                                        " "
                                                                      ),
                                                                      _c("p", [
                                                                        !fileObj.chunk
                                                                          ? _c(
                                                                              "span",
                                                                              [
                                                                                _c(
                                                                                  "span",
                                                                                  {
                                                                                    staticClass:
                                                                                      "font-weight-700"
                                                                                  },
                                                                                  [
                                                                                    _vm._v(
                                                                                      _vm._s(
                                                                                        _vm.$t(
                                                                                          "upload.size"
                                                                                        )
                                                                                      )
                                                                                    )
                                                                                  ]
                                                                                ),
                                                                                _vm._v(
                                                                                  ": " +
                                                                                    _vm._s(
                                                                                      _vm._f(
                                                                                        "decimal"
                                                                                      )(
                                                                                        fileObj
                                                                                          .file
                                                                                          .size /
                                                                                          1024,
                                                                                        0
                                                                                      )
                                                                                    ) +
                                                                                    " KB"
                                                                                )
                                                                              ]
                                                                            )
                                                                          : _vm._e()
                                                                      ])
                                                                    ]
                                                              ],
                                                              2
                                                            ),
                                                            _vm._v(" "),
                                                            _c(
                                                              "div",
                                                              {
                                                                class: [
                                                                  "status-wrapper",
                                                                  {
                                                                    "actions-wrapper":
                                                                      fileObj.status ===
                                                                      "uploaded"
                                                                  }
                                                                ]
                                                              },
                                                              [
                                                                _c(
                                                                  "transition",
                                                                  {
                                                                    staticClass:
                                                                      "transition-wrapper",
                                                                    attrs: {
                                                                      appear:
                                                                        "",
                                                                      tag:
                                                                        "div",
                                                                      name:
                                                                        "actions",
                                                                      mode:
                                                                        "out-in"
                                                                    }
                                                                  },
                                                                  [
                                                                    fileObj.status ===
                                                                    "uploading"
                                                                      ? _c(
                                                                          "div",
                                                                          {
                                                                            staticClass:
                                                                              "status-uploading-wrapper"
                                                                          },
                                                                          [
                                                                            !fileObj.chunk
                                                                              ? _c(
                                                                                  "label",
                                                                                  {
                                                                                    staticClass:
                                                                                      "status-action",
                                                                                    on: {
                                                                                      click:
                                                                                        fileObj.cancel
                                                                                    }
                                                                                  },
                                                                                  [
                                                                                    _vm._v(
                                                                                      _vm._s(
                                                                                        _vm.$t(
                                                                                          "upload.cancel"
                                                                                        )
                                                                                      )
                                                                                    )
                                                                                  ]
                                                                                )
                                                                              : _vm._e(),
                                                                            _vm._v(
                                                                              " "
                                                                            ),
                                                                            _c(
                                                                              "progress-ring",
                                                                              {
                                                                                attrs: {
                                                                                  value:
                                                                                    fileObj.progress,
                                                                                  "stroke-color":
                                                                                    _vm
                                                                                      .vars
                                                                                      .loaderColor,
                                                                                  radius: 18,
                                                                                  "stroke-width": 2,
                                                                                  "percent-size":
                                                                                    "sm"
                                                                                }
                                                                              }
                                                                            )
                                                                          ],
                                                                          1
                                                                        )
                                                                      : fileObj.status ===
                                                                        "cancelled"
                                                                      ? _c(
                                                                          "div",
                                                                          {
                                                                            staticClass:
                                                                              "status-cancelled-wrapper"
                                                                          },
                                                                          [
                                                                            _c(
                                                                              "label",
                                                                              {
                                                                                staticClass:
                                                                                  "status-text text-danger"
                                                                              },
                                                                              [
                                                                                _vm._v(
                                                                                  _vm._s(
                                                                                    _vm.$t(
                                                                                      "upload.cancelled"
                                                                                    )
                                                                                  )
                                                                                )
                                                                              ]
                                                                            ),
                                                                            _vm._v(
                                                                              " "
                                                                            ),
                                                                            _c(
                                                                              "span",
                                                                              {
                                                                                staticClass:
                                                                                  "status-icon text-danger"
                                                                              },
                                                                              [
                                                                                _c(
                                                                                  "i",
                                                                                  {
                                                                                    staticClass:
                                                                                      "fas fa-times"
                                                                                  }
                                                                                )
                                                                              ]
                                                                            )
                                                                          ]
                                                                        )
                                                                      : fileObj.status ===
                                                                        "error"
                                                                      ? _c(
                                                                          "div",
                                                                          {
                                                                            staticClass:
                                                                              "status-error-wrapper"
                                                                          },
                                                                          [
                                                                            _c(
                                                                              "label",
                                                                              {
                                                                                staticClass:
                                                                                  "status-text text-danger"
                                                                              },
                                                                              [
                                                                                _vm._v(
                                                                                  _vm._s(
                                                                                    _vm.$t(
                                                                                      "upload.error"
                                                                                    )
                                                                                  )
                                                                                )
                                                                              ]
                                                                            ),
                                                                            _vm._v(
                                                                              " "
                                                                            ),
                                                                            _c(
                                                                              "span",
                                                                              {
                                                                                staticClass:
                                                                                  "status-icon text-danger"
                                                                              },
                                                                              [
                                                                                _c(
                                                                                  "i",
                                                                                  {
                                                                                    staticClass:
                                                                                      "fas fa-exclamation-triangle"
                                                                                  }
                                                                                )
                                                                              ]
                                                                            )
                                                                          ]
                                                                        )
                                                                      : _vm._e()
                                                                  ]
                                                                )
                                                              ],
                                                              1
                                                            )
                                                          ]
                                                        )
                                                      }
                                                    ),
                                                    0
                                                  )
                                                ]
                                              )
                                            ]
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
                          _vm.entity.status &&
                          _vm.videoList.length &&
                          !(
                            _vm.pageConfigs.enableWhiteboard &&
                            _vm.showWhiteboard
                          )
                            ? _c(
                                "base-dropdown",
                                {
                                  staticClass:
                                    "more-actions d-none d-md-inline-block",
                                  attrs: {
                                    tag: "div",
                                    direction: "up",
                                    "menu-classes": "show-dropdown-up",
                                    position: "right"
                                  }
                                },
                                [
                                  _c(
                                    "button",
                                    {
                                      directives: [
                                        {
                                          name: "b-tooltip",
                                          rawName: "v-b-tooltip.hover.d500",
                                          modifiers: { hover: true, d500: true }
                                        }
                                      ],
                                      staticClass:
                                        "btn action grid-toggle-btn d-none d-md-inline-block",
                                      attrs: {
                                        slot: "title",
                                        type: "button",
                                        title: _vm.$t("meeting.change_layout")
                                      },
                                      slot: "title"
                                    },
                                    [
                                      _c("i", {
                                        staticClass: "fas fa-th-large"
                                      })
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "button",
                                    {
                                      staticClass:
                                        "dropdown-item d-flex justify-content-between align-items-center",
                                      attrs: { type: "button" },
                                      on: {
                                        click: function($event) {
                                          return _vm.toggleLayout("grid")
                                        }
                                      }
                                    },
                                    [
                                      _vm._v(
                                        _vm._s(_vm.$t("meeting.grid_layout")) +
                                          " "
                                      ),
                                      _c("i", {
                                        staticClass:
                                          "fas fa-check min-width-auto text-light",
                                        class: {
                                          "text-dark":
                                            _vm.pageConfigs.layout === "grid"
                                        }
                                      })
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "button",
                                    {
                                      staticClass:
                                        "dropdown-item d-flex justify-content-between align-items-center",
                                      attrs: { type: "button" },
                                      on: {
                                        click: function($event) {
                                          return _vm.toggleLayout("gallery")
                                        }
                                      }
                                    },
                                    [
                                      _vm._v(
                                        _vm._s(
                                          _vm.$t("meeting.gallery_layout")
                                        ) + " "
                                      ),
                                      _c("i", {
                                        staticClass:
                                          "fas fa-check min-width-auto text-light",
                                        class: {
                                          "text-dark":
                                            _vm.pageConfigs.layout === "gallery"
                                        }
                                      })
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _vm.pageConfigs.hasAgenda ||
                                  (_vm.pageConfigs.enableWhiteboard &&
                                    _vm.showWhiteboard)
                                    ? _c(
                                        "button",
                                        {
                                          staticClass:
                                            "dropdown-item d-flex justify-content-between align-items-center",
                                          attrs: { type: "button" },
                                          on: {
                                            click: function($event) {
                                              return _vm.toggleLayout(
                                                "presentation"
                                              )
                                            }
                                          }
                                        },
                                        [
                                          _vm._v(
                                            _vm._s(
                                              _vm.$t(
                                                "meeting.presentation_layout"
                                              )
                                            ) + " "
                                          ),
                                          _c("i", {
                                            staticClass:
                                              "fas fa-check min-width-auto text-light",
                                            class: {
                                              "text-dark":
                                                _vm.pageConfigs.layout ===
                                                "presentation"
                                            }
                                          })
                                        ]
                                      )
                                    : _vm._e(),
                                  _vm._v(" "),
                                  _c(
                                    "button",
                                    {
                                      staticClass:
                                        "dropdown-item d-flex justify-content-between align-items-center",
                                      attrs: { type: "button" },
                                      on: {
                                        click: function($event) {
                                          return _vm.toggleLayout("fullpage")
                                        }
                                      }
                                    },
                                    [
                                      _vm._v(
                                        _vm._s(
                                          _vm.$t("meeting.fullpage_layout")
                                        ) + " "
                                      ),
                                      _vm.pageConfigs.layout === "fullpage"
                                        ? _c("i", {
                                            staticClass:
                                              "fas fa-check min-width-auto text-light",
                                            class: {
                                              "text-dark":
                                                _vm.pageConfigs.layout ===
                                                "fullpage"
                                            }
                                          })
                                        : _vm._e()
                                    ]
                                  )
                                ]
                              )
                            : _vm._e(),
                          _vm._v(" "),
                          _vm.pageConfigs.enableChat &&
                          _vm.configs.chat &&
                          _vm.configs.chat.enabled &&
                          _vm.subscriptions &&
                          _vm.subscriptions.userPrivate &&
                          !_vm.entity.isBlocked
                            ? _c(
                                "button",
                                {
                                  directives: [
                                    {
                                      name: "b-tooltip",
                                      rawName: "v-b-tooltip.hover.d500",
                                      modifiers: { hover: true, d500: true }
                                    }
                                  ],
                                  class: [
                                    "btn action chats-toggle-btn",
                                    {
                                      pulse:
                                        _vm.totalUnreadMessages &&
                                        _vm.totalUnreadMessages > 0 &&
                                        !_vm.isChatBoxShown
                                    }
                                  ],
                                  attrs: {
                                    type: "button",
                                    title: _vm.$t(
                                      _vm.isChatBoxShown
                                        ? "global.hide"
                                        : "global.show",
                                      { attribute: _vm.$t("chat.chats") }
                                    )
                                  },
                                  on: { click: _vm.toggleChatBox }
                                },
                                [
                                  _c("i", {
                                    class: [
                                      _vm.isChatBoxShown
                                        ? "fas fa-comment-slash"
                                        : "far fa-comment"
                                    ]
                                  }),
                                  _vm._v(" "),
                                  _vm.totalUnreadMessages &&
                                  _vm.totalUnreadMessages > 0
                                    ? _c(
                                        "span",
                                        {
                                          staticClass:
                                            "text-success unread-count"
                                        },
                                        [
                                          _vm._v(
                                            _vm._s(_vm.totalUnreadMessages)
                                          )
                                        ]
                                      )
                                    : _vm._e()
                                ]
                              )
                            : _vm._e()
                        ]
                      : _vm._e(),
                    _vm._v(" "),
                    _c(
                      "base-dropdown",
                      {
                        staticClass: "more-actions",
                        attrs: {
                          tag: "div",
                          direction: "up",
                          "menu-classes": "show-dropdown-up",
                          position: "right"
                        }
                      },
                      [
                        _c(
                          "button",
                          {
                            staticClass: "btn action more-actions-btn",
                            attrs: { slot: "title", type: "button" },
                            slot: "title"
                          },
                          [_c("i", { staticClass: "fas fa-ellipsis-v" })]
                        ),
                        _vm._v(" "),
                        !(
                          _vm.entity &&
                          _vm.entity.status &&
                          _vm.videoList.length
                        )
                          ? _c(
                              "button",
                              {
                                staticClass: "dropdown-item",
                                attrs: { type: "button" },
                                on: {
                                  click: function($event) {
                                    return _vm.$router.push({
                                      name: _vm.fallBackRoute
                                    })
                                  }
                                }
                              },
                              [
                                _c("i", { staticClass: "fas fa-chevron-left" }),
                                _vm._v(" " + _vm._s(_vm.$t("general.back")))
                              ]
                            )
                          : _c(
                              "button",
                              {
                                staticClass: "dropdown-item",
                                attrs: { type: "button" },
                                on: { click: _vm.getOffline }
                              },
                              [
                                _c("i", { staticClass: "fas fa-phone-slash" }),
                                _vm._v(
                                  " " + _vm._s(_vm.$t("meeting.leave_meeting"))
                                )
                              ]
                            ),
                        _vm._v(" "),
                        _vm.entity &&
                        _vm.entity.status &&
                        _vm.entity.canModerate &&
                        _vm.entity.status === "live"
                          ? _c(
                              "button",
                              {
                                staticClass: "dropdown-item",
                                attrs: { type: "button" },
                                on: { click: _vm.endMeeting }
                              },
                              [
                                _c("i", {
                                  staticClass: "fas fa-calendar-times"
                                }),
                                _vm._v(
                                  " " + _vm._s(_vm.$t("meeting.end_meeting"))
                                )
                              ]
                            )
                          : _vm._e(),
                        _vm._v(" "),
                        _c("div", {
                          staticClass: "dropdown-divider my-1",
                          attrs: { role: "separator" }
                        }),
                        _vm._v(" "),
                        _vm.pageConfigs.hasAgenda
                          ? _c(
                              "button",
                              {
                                staticClass: "dropdown-item agenda-toggle-btn",
                                attrs: { type: "button" },
                                on: { click: _vm.toggleAgenda }
                              },
                              [
                                _c("i", { staticClass: "fas fa-quote-left" }),
                                _vm._v(
                                  " " +
                                    _vm._s(
                                      _vm.$t(
                                        _vm.showAgenda
                                          ? "global.hide"
                                          : "global.show",
                                        { attribute: _vm.$t("general.agenda") }
                                      )
                                    )
                                )
                              ]
                            )
                          : _vm._e(),
                        _vm._v(" "),
                        _c(
                          "button",
                          {
                            staticClass: "dropdown-item d-none d-md-block",
                            attrs: { type: "button" },
                            on: { click: _vm.toggleFooterAutoHide }
                          },
                          [
                            _c("i", { staticClass: "fas fa-hourglass-start" }),
                            _vm._v(
                              " " +
                                _vm._s(
                                  _vm.$t(
                                    _vm.pageConfigs.footerAutoHide
                                      ? "meeting.toggle_autohide_off"
                                      : "meeting.toggle_autohide_on"
                                  )
                                )
                            )
                          ]
                        ),
                        _vm._v(" "),
                        _vm.uiConfigs.fullScreen
                          ? _c(
                              "button",
                              {
                                staticClass: "dropdown-item d-none d-md-block",
                                attrs: { type: "button" },
                                on: {
                                  click: function($event) {
                                    return _vm.toggleFullScreen(false)
                                  }
                                }
                              },
                              [
                                _c("i", { staticClass: "fas fa-compress" }),
                                _vm._v(
                                  " " +
                                    _vm._s(
                                      _vm.$t("config.ui.toggle_fullscreen")
                                    )
                                )
                              ]
                            )
                          : _c(
                              "button",
                              {
                                staticClass: "dropdown-item d-none d-md-block",
                                attrs: { type: "button" },
                                on: {
                                  click: function($event) {
                                    return _vm.toggleFullScreen(true)
                                  }
                                }
                              },
                              [
                                _c("i", { staticClass: "fas fa-expand" }),
                                _vm._v(
                                  " " +
                                    _vm._s(
                                      _vm.$t("config.ui.toggle_fullscreen")
                                    )
                                )
                              ]
                            ),
                        _vm._v(" "),
                        _vm.pageConfigs.enableMeetingInfo &&
                        _vm.videoList.length
                          ? _c(
                              "button",
                              {
                                staticClass: "dropdown-item",
                                attrs: { type: "button" },
                                on: { click: _vm.toggleMeetingInfo }
                              },
                              [
                                _c("i", { staticClass: "fas fa-info" }),
                                _vm._v(
                                  " " +
                                    _vm._s(
                                      _vm.$t("meeting.toggle_meeting_info")
                                    )
                                )
                              ]
                            )
                          : _vm._e(),
                        _vm._v(" "),
                        _c("div", {
                          staticClass: "dropdown-divider d-md-none my-1",
                          attrs: { role: "separator" }
                        }),
                        _vm._v(" "),
                        _c(
                          "button",
                          {
                            staticClass: "dropdown-item d-md-none",
                            attrs: { type: "button" },
                            on: {
                              click: function($event) {
                                return _vm.toggleLayout("grid")
                              }
                            }
                          },
                          [
                            _c("i", {
                              staticClass: "fas fa-check text-light",
                              class: {
                                "text-dark": _vm.pageConfigs.layout === "grid"
                              }
                            }),
                            _vm._v(" " + _vm._s(_vm.$t("meeting.grid_layout")))
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "button",
                          {
                            staticClass: "dropdown-item d-md-none",
                            attrs: { type: "button" },
                            on: {
                              click: function($event) {
                                return _vm.toggleLayout("fullpage")
                              }
                            }
                          },
                          [
                            _c("i", {
                              staticClass: "fas fa-check text-light",
                              class: {
                                "text-dark":
                                  _vm.pageConfigs.layout === "fullpage"
                              }
                            }),
                            _vm._v(
                              " " + _vm._s(_vm.$t("meeting.fullpage_layout"))
                            )
                          ]
                        ),
                        _vm._v(" "),
                        _c("div", {
                          staticClass: "dropdown-divider my-1",
                          attrs: { role: "separator" }
                        }),
                        _vm._v(" "),
                        _vm.pageConfigs.showDeviceConfig
                          ? _c(
                              "button",
                              {
                                staticClass: "dropdown-item show-devices-btn",
                                attrs: { type: "button" },
                                on: { click: _vm.toggleDevicesModal }
                              },
                              [
                                _c("i", { staticClass: "fas fa-cogs" }),
                                _vm._v(
                                  " " +
                                    _vm._s(
                                      _vm.$t("meeting.media_devices.setup")
                                    )
                                )
                              ]
                            )
                          : _vm._e(),
                        _vm._v(" "),
                        _vm.entity
                          ? [
                              _vm.entity.canModerate
                                ? _c(
                                    "a",
                                    {
                                      staticClass: "dropdown-item",
                                      attrs: {
                                        target: "_blank",
                                        href: _vm.configPageUrl()
                                      }
                                    },
                                    [
                                      _c("i", { staticClass: "fas fa-cog" }),
                                      _vm._v(
                                        " " +
                                          _vm._s(
                                            _vm.$t("global.config", {
                                              attribute: _vm.$t(
                                                "meeting.meeting"
                                              )
                                            })
                                          )
                                      )
                                    ]
                                  )
                                : _vm._e(),
                              _vm._v(" "),
                              _vm.pageConfigs.enableSnapshot &&
                              _vm.entity.hasSnapshots
                                ? _c(
                                    "a",
                                    {
                                      staticClass: "dropdown-item",
                                      attrs: {
                                        target: "_blank",
                                        href: _vm.snapshotsPageUrl()
                                      }
                                    },
                                    [
                                      _c("i", { staticClass: "fas fa-image" }),
                                      _vm._v(
                                        " " +
                                          _vm._s(
                                            _vm.$t("global.view", {
                                              attribute: _vm.$t(
                                                "meeting.snapshots"
                                              )
                                            })
                                          )
                                      )
                                    ]
                                  )
                                : _vm._e(),
                              _vm._v(" "),
                              _vm.pageConfigs.enableRecording &&
                              (_vm.entity.hasChunkRecordings ||
                                _vm.entity.hasRecordings)
                                ? _c(
                                    "a",
                                    {
                                      staticClass: "dropdown-item",
                                      attrs: {
                                        target: "_blank",
                                        href: _vm.recordingsPageUrl()
                                      }
                                    },
                                    [
                                      _c("i", {
                                        staticClass: "fas fa-photo-video"
                                      }),
                                      _vm._v(
                                        " " +
                                          _vm._s(
                                            _vm.$t("global.view", {
                                              attribute: _vm.$t(
                                                "meeting.recordings"
                                              )
                                            })
                                          )
                                      )
                                    ]
                                  )
                                : _vm._e()
                            ]
                          : _vm._e(),
                        _vm._v(" "),
                        _vm.entity && _vm.entity.status && _vm.videoList.length
                          ? [
                              _vm.pageConfigs.enableFileSharing
                                ? _c(
                                    "button",
                                    {
                                      staticClass:
                                        "dropdown-item file-sharing-btn",
                                      attrs: { type: "button" },
                                      on: { click: _vm.toggleFileSharing }
                                    },
                                    [
                                      _c("i", { staticClass: "fas fa-upload" }),
                                      _vm._v(
                                        " " +
                                          _vm._s(_vm.$t("upload.share_files"))
                                      )
                                    ]
                                  )
                                : _vm._e(),
                              _vm._v(" "),
                              _vm.pageConfigs.enableScreenSharing
                                ? [
                                    _vm.localScreenStreamid
                                      ? _c(
                                          "button",
                                          {
                                            staticClass:
                                              "dropdown-item d-none d-md-block",
                                            attrs: { type: "button" },
                                            on: { click: _vm.stopSharingScreen }
                                          },
                                          [
                                            _c("i", {
                                              staticClass: "fas fa-minus-square"
                                            }),
                                            _vm._v(
                                              " " +
                                                _vm._s(
                                                  _vm.$t(
                                                    "meeting.stop_sharing_screen"
                                                  )
                                                )
                                            )
                                          ]
                                        )
                                      : _c(
                                          "button",
                                          {
                                            staticClass:
                                              "dropdown-item d-none d-md-block",
                                            attrs: { type: "button" },
                                            on: { click: _vm.shareScreen }
                                          },
                                          [
                                            _c("i", {
                                              staticClass: "fas fa-desktop"
                                            }),
                                            _vm._v(
                                              " " +
                                                _vm._s(
                                                  _vm.$t("meeting.share_screen")
                                                )
                                            )
                                          ]
                                        )
                                  ]
                                : _vm._e()
                            ]
                          : _vm._e(),
                        _vm._v(" "),
                        _vm.pageConfigs.enableLinkSharing
                          ? _c(
                              "button",
                              {
                                staticClass: "dropdown-item",
                                attrs: { type: "button" },
                                on: { click: _vm.shareURL }
                              },
                              [
                                _c("i", { staticClass: "fas fa-share-alt" }),
                                _vm._v(
                                  " " + _vm._s(_vm.$t("general.share_url"))
                                )
                              ]
                            )
                          : _vm._e(),
                        _vm._v(" "),
                        _vm.pageConfigs.enableLinkSharing && _vm.hasNativeShare
                          ? _c(
                              "button",
                              {
                                staticClass: "dropdown-item",
                                attrs: { type: "button" },
                                on: { click: _vm.share }
                              },
                              [
                                _c("i", { staticClass: "fas fa-share-alt" }),
                                _vm._v(" " + _vm._s(_vm.$t("general.share")))
                              ]
                            )
                          : _vm._e(),
                        _vm._v(" "),
                        _c(
                          "button",
                          {
                            staticClass: "dropdown-item",
                            attrs: {
                              type: "button",
                              title: _vm.$t("meeting.recognize_text_title")
                            },
                            on: {
                              click: function($event) {
                                return _vm.toggleVoiceToText()
                              }
                            }
                          },
                          [
                            _c("i", { staticClass: "fas fa-language" }),
                            _vm._v(
                              "\n                        " +
                                _vm._s(
                                  _vm.$t(
                                    _vm.g_enableV2T || _vm.enableV2T
                                      ? "meeting.enable_recognize_text"
                                      : "meeting.disable_recognize_text"
                                  )
                                ) +
                                "\n                    "
                            )
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "button",
                          {
                            staticClass: "dropdown-item",
                            attrs: {
                              type: "button",
                              title: _vm.$t("meeting.recognize_voice_title")
                            },
                            on: {
                              click: function($event) {
                                return _vm.toggleVoiceToVoice()
                              }
                            }
                          },
                          [
                            _c("i", { staticClass: "fas fa-microphone" }),
                            _vm._v(
                              "\n                        " +
                                _vm._s(
                                  _vm.$t(
                                    _vm.g_enableV2V || _vm.enableV2V
                                      ? "meeting.enable_recognize_voice"
                                      : "meeting.disable_recognize_voice"
                                  )
                                ) +
                                "\n                    "
                            )
                          ]
                        )
                      ],
                      2
                    ),
                    _vm._v(" "),
                    _c(
                      "base-dropdown",
                      {
                        staticClass: "more-actions",
                        attrs: {
                          tag: "div",
                          direction: "up",
                          "menu-classes": "show-dropdown-up",
                          position: "right"
                        }
                      },
                      [
                        _c(
                          "button",
                          {
                            staticClass:
                              "btn action grid-toggle-btn d-none d-md-inline-block px-1",
                            attrs: { slot: "title", type: "button" },
                            slot: "title"
                          },
                          [
                            _vm.loggedInUser
                              ? _c("user-avatar", {
                                  attrs: {
                                    user: _vm.loggedInUser,
                                    size: 40,
                                    color:
                                      _vm.vars.colors[
                                        _vm.uiConfigs.topNavbarColor
                                      ]
                                  }
                                })
                              : _vm._e()
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c("h6", { staticClass: "dropdown-header" }, [
                          _vm._v(
                            _vm._s(
                              _vm.$t("general.greeting") +
                                ", " +
                                _vm.loggedInUser.name
                            )
                          )
                        ]),
                        _vm._v(" "),
                        _vm.loggedInUser
                          ? _c(
                              "router-link",
                              {
                                staticClass: "dropdown-item",
                                attrs: { to: { name: "appProfileView" } }
                              },
                              [
                                _c("i", { staticClass: "fas fa-user" }),
                                _vm._v(
                                  " " +
                                    _vm._s(_vm.$t("user.your_profile")) +
                                    "\n                    "
                                )
                              ]
                            )
                          : _vm._e(),
                        _vm._v(" "),
                        !_vm.hasPermission("access-config")
                          ? _c(
                              "router-link",
                              {
                                staticClass: "dropdown-item",
                                attrs: { to: { name: "appUserPreference" } }
                              },
                              [
                                _c("i", { staticClass: "fas fa-user-cog" }),
                                _vm._v(
                                  " " +
                                    _vm._s(_vm.$t("user.user_preference")) +
                                    "\n                    "
                                )
                              ]
                            )
                          : _vm._e(),
                        _vm._v(" "),
                        _c(
                          "router-link",
                          {
                            staticClass: "dropdown-item",
                            attrs: { to: { name: "appUserChangePassword" } }
                          },
                          [
                            _c("i", { staticClass: "fas fa-key" }),
                            _vm._v(
                              " " +
                                _vm._s(
                                  _vm.$t("auth.password.change_password")
                                ) +
                                "\n                    "
                            )
                          ]
                        )
                      ],
                      1
                    )
                  ],
                  2
                )
              ]
            ),
            _vm._v(" "),
            _c(
              "div",
              {
                class: [
                  "agenda-streams-container",
                  {
                    "has-agenda":
                      _vm.pageConfigs.hasAgenda ||
                      (_vm.hasVideos && _vm.pageConfigs.enableWhiteboard)
                  },
                  {
                    "agenda-visible":
                      _vm.showAgenda || (_vm.hasVideos && _vm.showWhiteboard)
                  },
                  {
                    "has-cover-image":
                      _vm.entity && _vm.entity.cover && _vm.hasVideos
                  }
                ],
                style: _vm.coverPageStyles
              },
              [
                _vm.entity && !_vm.entity.isBlocked
                  ? [
                      _vm.pageConfigs.hasAgenda && !_vm.showWhiteboard
                        ? [
                            _c(
                              "card",
                              {
                                staticClass: "agenda-container",
                                attrs: {
                                  shadow: "",
                                  "body-classes": "agenda-wrapper"
                                }
                              },
                              [
                                _c(
                                  "div",
                                  { staticClass: "meeting-agenda-container" },
                                  [
                                    _c(
                                      "vue-scroll",
                                      {
                                        ref: "vue-scroll-agenda",
                                        attrs: { id: "vue-scroll-agenda" }
                                      },
                                      [
                                        _vm.entity
                                          ? [
                                              _vm._m(0),
                                              _vm._v(" "),
                                              _c(
                                                "div",
                                                {
                                                  staticClass: "text-muted mt-3"
                                                },
                                                [
                                                  _vm._m(1),
                                                  _vm._v(" "),
                                                  _vm._m(2)
                                                ]
                                              ),
                                              _vm._v(" "),
                                              _c("view-paragraph", {
                                                staticClass: "mt-3",
                                                attrs: {
                                                  label: _vm.$t(
                                                    "meeting.props.agenda"
                                                  ),
                                                  value: _vm.entity.agenda
                                                }
                                              }),
                                              _vm._v(" "),
                                              _vm.entity.description
                                                ? _c("view-paragraph", {
                                                    staticClass: "mt-3",
                                                    attrs: {
                                                      label: _vm.$t(
                                                        "meeting.props.description"
                                                      ),
                                                      value:
                                                        _vm.entity.description,
                                                      html: ""
                                                    }
                                                  })
                                                : _vm._e(),
                                              _vm._v(" "),
                                              _vm.entity.attachments
                                                ? _c("view-uploads", {
                                                    class: [
                                                      "mt-3",
                                                      _vm.uiConfigs
                                                        .colorSchemeType
                                                    ],
                                                    attrs: {
                                                      label: _vm.$t(
                                                        "upload.attachments"
                                                      ),
                                                      "name-label": _vm.$t(
                                                        "upload.attachment"
                                                      ),
                                                      value:
                                                        _vm.entity.attachments,
                                                      "download-button-classes":
                                                        "text-gray",
                                                      "url-prefix":
                                                        "/meetings/" +
                                                        _vm.uuid +
                                                        "/downloads"
                                                    }
                                                  })
                                                : _vm._e()
                                            ]
                                          : _vm._e()
                                      ],
                                      2
                                    )
                                  ],
                                  1
                                )
                              ]
                            )
                          ]
                        : _vm._e(),
                      _vm._v(" "),
                      _vm.hasVideos &&
                      _vm.pageConfigs.enableWhiteboard &&
                      !_vm.showAgenda
                        ? [
                            _c(
                              "card",
                              {
                                staticClass: "whiteboard-container",
                                attrs: {
                                  shadow: "",
                                  "body-classes": "whiteboard-wrapper"
                                }
                              },
                              [
                                _c(
                                  "div",
                                  {
                                    staticClass: "meeting-whiteboard-container"
                                  },
                                  [
                                    _c(
                                      "vue-scroll",
                                      {
                                        ref: "vue-scroll-whiteboard",
                                        attrs: { id: "vue-scroll-whiteboard" }
                                      },
                                      [
                                        _c("div", {
                                          ref: "whiteboard",
                                          staticClass: "whiteboard",
                                          attrs: { id: "whiteboard" }
                                        })
                                      ]
                                    )
                                  ],
                                  1
                                )
                              ]
                            )
                          ]
                        : _vm._e()
                    ]
                  : _vm._e(),
                _vm._v(" "),
                _c(
                  "div",
                  { class: ["voice-text"] },
                  [
                    _vm.textResult
                      ? [
                          _vm._l(_vm.videoList, function(item) {
                            return [
                              _vm.pageConfigs.enableUserAvatar && !item.local
                                ? _c(
                                    "div",
                                    {
                                      staticClass:
                                        "text-left align-content-start text-md-left d-flex align-items-center mb-1"
                                    },
                                    [
                                      _c("user-avatar", {
                                        staticClass: "mr-2",
                                        attrs: {
                                          user: item.extra
                                            ? item.extra
                                            : { name: item.name },
                                          size: 40,
                                          "has-shadow": ""
                                        }
                                      }),
                                      _vm._v(" "),
                                      _c(
                                        "span",
                                        { staticClass: "text-light" },
                                        [_vm._v(_vm._s(_vm.textResult))]
                                      )
                                    ],
                                    1
                                  )
                                : _vm._e()
                            ]
                          })
                        ]
                      : [
                          _vm._l(_vm.conversations, function(
                            conversation,
                            cIndex
                          ) {
                            return [
                              _vm._l(_vm.videoList, function(item, i) {
                                return [
                                  conversation.translations[_vm.myLanguage] &&
                                  conversation.user == item.uuid
                                    ? [
                                        _vm.pageConfigs.enableUserAvatar &&
                                        !item.local
                                          ? _c(
                                              "div",
                                              {
                                                key:
                                                  "voice-text-list-" +
                                                  cIndex +
                                                  "-" +
                                                  i,
                                                staticClass:
                                                  "text-left align-content-start text-md-left d-flex align-items-center mb-1"
                                              },
                                              [
                                                _c("user-avatar", {
                                                  staticClass: "mr-2",
                                                  attrs: {
                                                    user: item.extra
                                                      ? item.extra
                                                      : { name: item.name },
                                                    size: 40,
                                                    "has-shadow": ""
                                                  }
                                                }),
                                                _vm._v(" "),
                                                _c(
                                                  "span",
                                                  {
                                                    key: cIndex,
                                                    staticClass: "text-light"
                                                  },
                                                  [
                                                    _vm._v(
                                                      _vm._s(
                                                        conversation
                                                          .translations[
                                                          _vm.myLanguage
                                                        ]
                                                      )
                                                    )
                                                  ]
                                                )
                                              ],
                                              1
                                            )
                                          : _vm._e()
                                      ]
                                    : _vm._e()
                                ]
                              })
                            ]
                          })
                        ]
                  ],
                  2
                ),
                _vm._v(" "),
                _c(
                  "div",
                  {
                    class: [
                      "streams-container",
                      _vm.hasVideos
                        ? "stream-" + _vm.pageConfigs.layout + "-layout"
                        : ""
                    ]
                  },
                  [
                    _c(
                      "div",
                      {
                        ref: "videoListEle",
                        class: ["video-list", _vm.hasVideosClasses]
                      },
                      [
                        _vm.hasVideos
                          ? [
                              _vm._l(_vm.videoList, function(item, itemIndex) {
                                return [
                                  _c(
                                    "div",
                                    {
                                      key: "" + item.uuid + item.id,
                                      class: [
                                        "video-item video-card",
                                        { maximized: item.maximized },
                                        { local: item.local },
                                        { screen: item.screen },
                                        { whiteboard: item.whiteboard },
                                        {
                                          "fullscreen-item":
                                            item.id === _vm.fullScreenItemId
                                        },
                                        { "hand-up": item.isHandUp },
                                        { "user-speaking": item.speaking },
                                        { "audio-muted": item.audioMuted },
                                        {
                                          "video-muted":
                                            item.videoMuted || !item.hasVideo
                                        },
                                        { "no-stream": !item.status },
                                        {
                                          "disable-mirror": item.disableMirror
                                        },
                                        {
                                          "has-full-user-avatar":
                                            _vm.pageConfigs.enableUserAvatar &&
                                            _vm.pageConfigs
                                              .enableFullUserAvatar &&
                                            item.extra &&
                                            (item.extra.cover ||
                                              item.extra.avatar) &&
                                            (item.videoMuted || !item.hasVideo)
                                        }
                                      ],
                                      on: {
                                        dblclick: function($event) {
                                          return _vm.changeFocus(item)
                                        }
                                      }
                                    },
                                    [
                                      _c(
                                        "div",
                                        { staticClass: "video-wrapper" },
                                        [
                                          _c("video", {
                                            ref: "videos",
                                            refInFor: true,
                                            class: [
                                              {
                                                "no-poster":
                                                  item.status &&
                                                  !item.videoMuted
                                              }
                                            ],
                                            attrs: {
                                              autoplay: "",
                                              playsinline: "",
                                              id: item.id,
                                              poster: item.status
                                                ? null
                                                : "/images/video/no-stream.jpg"
                                            },
                                            domProps: { muted: item.muted }
                                          }),
                                          _vm._v(" "),
                                          _vm.pageConfigs.enableUserAvatar &&
                                          _vm.pageConfigs
                                            .enableFullUserAvatar &&
                                          item.extra &&
                                          (item.extra.cover ||
                                            item.extra.avatar) &&
                                          (item.videoMuted || !item.hasVideo)
                                            ? _c("div", {
                                                staticClass: "full-user-avatar",
                                                style:
                                                  "background-image: url(" +
                                                  (item.extra.cover ||
                                                    item.extra.avatar) +
                                                  ")"
                                              })
                                            : _vm._e(),
                                          _vm._v(" "),
                                          _c(
                                            "div",
                                            { staticClass: "caption" },
                                            [
                                              _vm.pageConfigs
                                                .enableUserAvatar && !item.local
                                                ? [
                                                    _c("user-avatar", {
                                                      staticClass: "mr-1",
                                                      attrs: {
                                                        user: item.extra
                                                          ? item.extra
                                                          : { name: item.name },
                                                        size: 40,
                                                        "has-shadow": ""
                                                      }
                                                    })
                                                  ]
                                                : _vm._e(),
                                              _vm._v(" "),
                                              _c(
                                                "h6",
                                                [
                                                  _c(
                                                    "span",
                                                    {
                                                      class: [
                                                        "text-xs mr-1",
                                                        {
                                                          "text-success":
                                                            item.status
                                                        },
                                                        {
                                                          "text-danger": !item.status
                                                        }
                                                      ]
                                                    },
                                                    [
                                                      _c("i", {
                                                        staticClass:
                                                          "fas fa-circle"
                                                      })
                                                    ]
                                                  ),
                                                  _vm._v(" "),
                                                  item.local
                                                    ? [
                                                        _vm._v(
                                                          "\n                                                " +
                                                            _vm._s(
                                                              item.screen
                                                                ? _vm.$t(
                                                                    "meeting.your_screen"
                                                                  )
                                                                : item.whiteboard
                                                                ? _vm.$t(
                                                                    "meeting.your_whiteboard"
                                                                  )
                                                                : _vm.$t(
                                                                    "meeting.you"
                                                                  )
                                                            ) +
                                                            "\n                                            "
                                                        )
                                                      ]
                                                    : [
                                                        _vm._v(
                                                          "\n                                                " +
                                                            _vm._s(
                                                              item.screen
                                                                ? "" +
                                                                    item.name +
                                                                    _vm.$t(
                                                                      "meeting.screen"
                                                                    )
                                                                : item.whiteboard
                                                                ? "" +
                                                                  item.name +
                                                                  _vm.$t(
                                                                    "meeting.whiteboard"
                                                                  )
                                                                : item.name
                                                            ) +
                                                            "\n                                            "
                                                        )
                                                      ],
                                                  _vm._v(" "),
                                                  !item.status
                                                    ? _c(
                                                        "span",
                                                        {
                                                          staticClass:
                                                            "bracketed text-danger"
                                                        },
                                                        [
                                                          _vm._v(
                                                            _vm._s(
                                                              _vm.$t(
                                                                "meeting.left"
                                                              )
                                                            )
                                                          )
                                                        ]
                                                      )
                                                    : _vm._e()
                                                ],
                                                2
                                              )
                                            ],
                                            2
                                          ),
                                          _vm._v(" "),
                                          _c("div", {
                                            staticClass: "highlight-border"
                                          })
                                        ]
                                      ),
                                      _vm._v(" "),
                                      !item.local
                                        ? _c(
                                            "div",
                                            {
                                              staticClass:
                                                "custom-controls-wrapper"
                                            },
                                            [
                                              _c(
                                                "div",
                                                {
                                                  staticClass: "custom-controls"
                                                },
                                                [
                                                  item.extra.isHost
                                                    ? _c(
                                                        "div",
                                                        {
                                                          directives: [
                                                            {
                                                              name: "b-tooltip",
                                                              rawName:
                                                                "v-b-tooltip.hover.d500",
                                                              modifiers: {
                                                                hover: true,
                                                                d500: true
                                                              }
                                                            }
                                                          ],
                                                          staticClass:
                                                            "status-icon",
                                                          attrs: {
                                                            title: _vm.$t(
                                                              "meeting.host"
                                                            )
                                                          }
                                                        },
                                                        [
                                                          _c("i", {
                                                            staticClass:
                                                              "fas fa-user-tie enabled-text"
                                                          })
                                                        ]
                                                      )
                                                    : item.extra.canModerate
                                                    ? _c(
                                                        "div",
                                                        {
                                                          directives: [
                                                            {
                                                              name: "b-tooltip",
                                                              rawName:
                                                                "v-b-tooltip.hover.d500",
                                                              modifiers: {
                                                                hover: true,
                                                                d500: true
                                                              }
                                                            }
                                                          ],
                                                          staticClass:
                                                            "status-icon",
                                                          attrs: {
                                                            title: _vm.$t(
                                                              "meeting.moderator"
                                                            )
                                                          }
                                                        },
                                                        [
                                                          _c("i", {
                                                            staticClass:
                                                              "fas fa-user-cog enabled-text"
                                                          })
                                                        ]
                                                      )
                                                    : _vm._e(),
                                                  _vm._v(" "),
                                                  !item.whiteboard &&
                                                  !item.screen &&
                                                  item.isHandUp
                                                    ? _c(
                                                        "div",
                                                        {
                                                          staticClass:
                                                            "status-icon"
                                                        },
                                                        [
                                                          _c("i", {
                                                            staticClass:
                                                              "fas fa-hand-paper enabled-text"
                                                          })
                                                        ]
                                                      )
                                                    : _vm._e(),
                                                  _vm._v(" "),
                                                  item.audioMuted
                                                    ? _c(
                                                        "div",
                                                        {
                                                          staticClass:
                                                            "status-icon"
                                                        },
                                                        [
                                                          _c("i", {
                                                            staticClass:
                                                              "fas fa-microphone-slash disabled-text"
                                                          })
                                                        ]
                                                      )
                                                    : _vm._e(),
                                                  _vm._v(" "),
                                                  _vm.pageConfigs.layout ===
                                                    "fullpage" &&
                                                  !item.maximized
                                                    ? [
                                                        _c(
                                                          "button",
                                                          {
                                                            directives: [
                                                              {
                                                                name:
                                                                  "b-tooltip",
                                                                rawName:
                                                                  "v-b-tooltip.hover.d500",
                                                                modifiers: {
                                                                  hover: true,
                                                                  d500: true
                                                                }
                                                              }
                                                            ],
                                                            staticClass:
                                                              "controls-btn",
                                                            attrs: {
                                                              title: _vm.$t(
                                                                "meeting.mute_for_me"
                                                              )
                                                            },
                                                            on: {
                                                              click: function(
                                                                $event
                                                              ) {
                                                                return _vm.toggleRemoteAudio(
                                                                  item,
                                                                  itemIndex
                                                                )
                                                              }
                                                            }
                                                          },
                                                          [
                                                            _c("i", {
                                                              class: [
                                                                "fas",
                                                                {
                                                                  "fa-volume-up enabled-text":
                                                                    item.muted
                                                                },
                                                                {
                                                                  "fa-volume-off disabled-text": !item.muted
                                                                }
                                                              ]
                                                            })
                                                          ]
                                                        ),
                                                        _vm._v(" "),
                                                        _c(
                                                          "button",
                                                          {
                                                            directives: [
                                                              {
                                                                name:
                                                                  "b-tooltip",
                                                                rawName:
                                                                  "v-b-tooltip.hover.d500",
                                                                modifiers: {
                                                                  hover: true,
                                                                  d500: true
                                                                }
                                                              }
                                                            ],
                                                            staticClass:
                                                              "controls-btn",
                                                            attrs: {
                                                              title: _vm.$t(
                                                                "meeting.maximize"
                                                              )
                                                            },
                                                            on: {
                                                              click: function(
                                                                $event
                                                              ) {
                                                                return _vm.changeFocus(
                                                                  item
                                                                )
                                                              }
                                                            }
                                                          },
                                                          [
                                                            _c("i", {
                                                              staticClass:
                                                                "fas fa-expand enabled-text"
                                                            })
                                                          ]
                                                        ),
                                                        _vm._v(" "),
                                                        _vm.pageConfigs
                                                          .enableSnapshot &&
                                                        (_vm.pageConfigs
                                                          .anyoneCanTakeSnapshot ||
                                                          _vm.entity
                                                            .canModerate)
                                                          ? _c(
                                                              "button",
                                                              {
                                                                directives: [
                                                                  {
                                                                    name:
                                                                      "b-tooltip",
                                                                    rawName:
                                                                      "v-b-tooltip.hover.d500",
                                                                    modifiers: {
                                                                      hover: true,
                                                                      d500: true
                                                                    }
                                                                  }
                                                                ],
                                                                staticClass:
                                                                  "controls-btn",
                                                                attrs: {
                                                                  title: _vm.$t(
                                                                    "meeting.take_snapshot"
                                                                  )
                                                                },
                                                                on: {
                                                                  click: function(
                                                                    $event
                                                                  ) {
                                                                    return _vm.takeSnapshotOfStream(
                                                                      item,
                                                                      itemIndex
                                                                    )
                                                                  }
                                                                }
                                                              },
                                                              [
                                                                _c("i", {
                                                                  staticClass:
                                                                    "fas fa-image enabled-text"
                                                                })
                                                              ]
                                                            )
                                                          : _vm._e(),
                                                        _vm._v(" "),
                                                        _vm.entity.canModerate
                                                          ? [
                                                              _c(
                                                                "button",
                                                                {
                                                                  directives: [
                                                                    {
                                                                      name:
                                                                        "b-tooltip",
                                                                      rawName:
                                                                        "v-b-tooltip.hover.d500",
                                                                      modifiers: {
                                                                        hover: true,
                                                                        d500: true
                                                                      }
                                                                    }
                                                                  ],
                                                                  staticClass:
                                                                    "controls-btn",
                                                                  attrs: {
                                                                    title: _vm.$t(
                                                                      "meeting.kick_ban_participant"
                                                                    )
                                                                  },
                                                                  on: {
                                                                    click: function(
                                                                      $event
                                                                    ) {
                                                                      return _vm.kickRemoteUser(
                                                                        item,
                                                                        itemIndex
                                                                      )
                                                                    }
                                                                  }
                                                                },
                                                                [
                                                                  _c("i", {
                                                                    staticClass:
                                                                      "fas fa-ban enabled-text"
                                                                  })
                                                                ]
                                                              ),
                                                              _vm._v(" "),
                                                              _c(
                                                                "button",
                                                                {
                                                                  directives: [
                                                                    {
                                                                      name:
                                                                        "b-tooltip",
                                                                      rawName:
                                                                        "v-b-tooltip.hover.d500",
                                                                      modifiers: {
                                                                        hover: true,
                                                                        d500: true
                                                                      }
                                                                    }
                                                                  ],
                                                                  staticClass:
                                                                    "controls-btn",
                                                                  attrs: {
                                                                    title: _vm.$t(
                                                                      "meeting.mute_for_everyone"
                                                                    )
                                                                  },
                                                                  on: {
                                                                    click: function(
                                                                      $event
                                                                    ) {
                                                                      return _vm.toggleRemoteAudioSource(
                                                                        item,
                                                                        itemIndex
                                                                      )
                                                                    }
                                                                  }
                                                                },
                                                                [
                                                                  _c("i", {
                                                                    class: [
                                                                      "fas",
                                                                      {
                                                                        "fa-microphone enabled-text":
                                                                          item.audioMuted
                                                                      },
                                                                      {
                                                                        "fa-microphone-slash disabled-text": !item.audioMuted
                                                                      }
                                                                    ]
                                                                  })
                                                                ]
                                                              )
                                                            ]
                                                          : _vm._e()
                                                      ]
                                                    : _c(
                                                        "base-dropdown",
                                                        {
                                                          staticClass:
                                                            "custom-control-dropdown",
                                                          attrs: {
                                                            tag: "div",
                                                            position: "right"
                                                          }
                                                        },
                                                        [
                                                          _c(
                                                            "button",
                                                            {
                                                              staticClass:
                                                                "btn action custom-control-dropdown-btn btn-sm",
                                                              attrs: {
                                                                slot: "title",
                                                                type: "button"
                                                              },
                                                              slot: "title"
                                                            },
                                                            [
                                                              _c("i", {
                                                                staticClass:
                                                                  "fas fa-ellipsis-v"
                                                              })
                                                            ]
                                                          ),
                                                          _vm._v(" "),
                                                          _c(
                                                            "button",
                                                            {
                                                              staticClass:
                                                                "dropdown-item btn-sm",
                                                              attrs: {
                                                                type: "button"
                                                              },
                                                              on: {
                                                                click: function(
                                                                  $event
                                                                ) {
                                                                  return _vm.disableMirror(
                                                                    item,
                                                                    itemIndex
                                                                  )
                                                                }
                                                              }
                                                            },
                                                            [
                                                              _c("i", {
                                                                staticClass:
                                                                  "fas fa-exchange-alt enabled-text"
                                                              }),
                                                              _vm._v(
                                                                " " +
                                                                  _vm._s(
                                                                    _vm.$t(
                                                                      "meeting.mirror_flip"
                                                                    )
                                                                  ) +
                                                                  "\n                                            "
                                                              )
                                                            ]
                                                          ),
                                                          _vm._v(" "),
                                                          _vm.pageConfigs
                                                            .layout ===
                                                            "fullpage" &&
                                                          !item.maximized
                                                            ? _c(
                                                                "button",
                                                                {
                                                                  staticClass:
                                                                    "dropdown-item btn-sm",
                                                                  attrs: {
                                                                    type:
                                                                      "button"
                                                                  },
                                                                  on: {
                                                                    click: function(
                                                                      $event
                                                                    ) {
                                                                      return _vm.changeFocus(
                                                                        item
                                                                      )
                                                                    }
                                                                  }
                                                                },
                                                                [
                                                                  _c("i", {
                                                                    staticClass:
                                                                      "fas fa-expand enabled-text"
                                                                  }),
                                                                  _vm._v(
                                                                    " " +
                                                                      _vm._s(
                                                                        _vm.$t(
                                                                          "meeting.maximize"
                                                                        )
                                                                      ) +
                                                                      "\n                                            "
                                                                  )
                                                                ]
                                                              )
                                                            : _vm._e(),
                                                          _vm._v(" "),
                                                          _c(
                                                            "button",
                                                            {
                                                              staticClass:
                                                                "dropdown-item btn-sm",
                                                              attrs: {
                                                                type: "button"
                                                              },
                                                              on: {
                                                                click: function(
                                                                  $event
                                                                ) {
                                                                  return _vm.toggleRemoteAudio(
                                                                    item,
                                                                    itemIndex
                                                                  )
                                                                }
                                                              }
                                                            },
                                                            [
                                                              item.muted
                                                                ? [
                                                                    _c("i", {
                                                                      staticClass:
                                                                        "fas fa-volume-up enabled-text"
                                                                    }),
                                                                    _vm._v(
                                                                      " " +
                                                                        _vm._s(
                                                                          _vm.$t(
                                                                            "meeting.unmute_for_me"
                                                                          )
                                                                        ) +
                                                                        "\n                                                "
                                                                    )
                                                                  ]
                                                                : [
                                                                    _c("i", {
                                                                      staticClass:
                                                                        "fas fa-volume-off disabled-text"
                                                                    }),
                                                                    _vm._v(
                                                                      " " +
                                                                        _vm._s(
                                                                          _vm.$t(
                                                                            "meeting.mute_for_me"
                                                                          )
                                                                        ) +
                                                                        "\n                                                "
                                                                    )
                                                                  ]
                                                            ],
                                                            2
                                                          ),
                                                          _vm._v(" "),
                                                          _vm.pageConfigs
                                                            .enableSnapshot &&
                                                          (_vm.pageConfigs
                                                            .anyoneCanTakeSnapshot ||
                                                            _vm.entity
                                                              .canModerate)
                                                            ? _c(
                                                                "button",
                                                                {
                                                                  staticClass:
                                                                    "dropdown-item btn-sm",
                                                                  attrs: {
                                                                    type:
                                                                      "button"
                                                                  },
                                                                  on: {
                                                                    click: function(
                                                                      $event
                                                                    ) {
                                                                      return _vm.takeSnapshotOfStream(
                                                                        item,
                                                                        itemIndex
                                                                      )
                                                                    }
                                                                  }
                                                                },
                                                                [
                                                                  _c("i", {
                                                                    staticClass:
                                                                      "fas fa-image enabled-text"
                                                                  }),
                                                                  _vm._v(
                                                                    " " +
                                                                      _vm._s(
                                                                        _vm.$t(
                                                                          "meeting.take_snapshot"
                                                                        )
                                                                      ) +
                                                                      "\n                                            "
                                                                  )
                                                                ]
                                                              )
                                                            : _vm._e(),
                                                          _vm._v(" "),
                                                          _vm.entity.canModerate
                                                            ? [
                                                                _c(
                                                                  "button",
                                                                  {
                                                                    staticClass:
                                                                      "dropdown-item btn-sm",
                                                                    attrs: {
                                                                      type:
                                                                        "button"
                                                                    },
                                                                    on: {
                                                                      click: function(
                                                                        $event
                                                                      ) {
                                                                        return _vm.kickRemoteUser(
                                                                          item,
                                                                          itemIndex
                                                                        )
                                                                      }
                                                                    }
                                                                  },
                                                                  [
                                                                    _c("i", {
                                                                      staticClass:
                                                                        "fas fa-ban enabled-text"
                                                                    }),
                                                                    _vm._v(
                                                                      " " +
                                                                        _vm._s(
                                                                          _vm.$t(
                                                                            "meeting.kick_ban"
                                                                          )
                                                                        ) +
                                                                        "\n                                                "
                                                                    )
                                                                  ]
                                                                ),
                                                                _vm._v(" "),
                                                                _c(
                                                                  "button",
                                                                  {
                                                                    staticClass:
                                                                      "dropdown-item btn-sm",
                                                                    attrs: {
                                                                      type:
                                                                        "button"
                                                                    },
                                                                    on: {
                                                                      click: function(
                                                                        $event
                                                                      ) {
                                                                        return _vm.toggleRemoteAudioSource(
                                                                          item,
                                                                          itemIndex
                                                                        )
                                                                      }
                                                                    }
                                                                  },
                                                                  [
                                                                    item.audioMuted
                                                                      ? [
                                                                          _c(
                                                                            "i",
                                                                            {
                                                                              staticClass:
                                                                                "fas fa-microphone enabled-text"
                                                                            }
                                                                          ),
                                                                          _vm._v(
                                                                            " " +
                                                                              _vm._s(
                                                                                _vm.$t(
                                                                                  "meeting.unmute_for_everyone"
                                                                                )
                                                                              ) +
                                                                              "\n                                                    "
                                                                          )
                                                                        ]
                                                                      : [
                                                                          _c(
                                                                            "i",
                                                                            {
                                                                              staticClass:
                                                                                "fas fa-microphone-slash disabled-text"
                                                                            }
                                                                          ),
                                                                          _vm._v(
                                                                            " " +
                                                                              _vm._s(
                                                                                _vm.$t(
                                                                                  "meeting.mute_for_everyone"
                                                                                )
                                                                              ) +
                                                                              "\n                                                    "
                                                                          )
                                                                        ]
                                                                  ],
                                                                  2
                                                                )
                                                              ]
                                                            : _vm._e()
                                                        ],
                                                        2
                                                      )
                                                ],
                                                2
                                              )
                                            ]
                                          )
                                        : item.local
                                        ? _c(
                                            "div",
                                            {
                                              staticClass:
                                                "custom-controls-wrapper"
                                            },
                                            [
                                              _c(
                                                "div",
                                                {
                                                  staticClass: "custom-controls"
                                                },
                                                [
                                                  item.extra.isHost
                                                    ? _c(
                                                        "div",
                                                        {
                                                          directives: [
                                                            {
                                                              name: "b-tooltip",
                                                              rawName:
                                                                "v-b-tooltip.hover.d500",
                                                              modifiers: {
                                                                hover: true,
                                                                d500: true
                                                              }
                                                            }
                                                          ],
                                                          staticClass:
                                                            "status-icon",
                                                          attrs: {
                                                            title: _vm.$t(
                                                              "meeting.host"
                                                            )
                                                          }
                                                        },
                                                        [
                                                          _c("i", {
                                                            staticClass:
                                                              "fas fa-user-tie text-info"
                                                          })
                                                        ]
                                                      )
                                                    : item.extra.canModerate
                                                    ? _c(
                                                        "div",
                                                        {
                                                          directives: [
                                                            {
                                                              name: "b-tooltip",
                                                              rawName:
                                                                "v-b-tooltip.hover.d500",
                                                              modifiers: {
                                                                hover: true,
                                                                d500: true
                                                              }
                                                            }
                                                          ],
                                                          staticClass:
                                                            "status-icon",
                                                          attrs: {
                                                            title: _vm.$t(
                                                              "meeting.moderator"
                                                            )
                                                          }
                                                        },
                                                        [
                                                          _c("i", {
                                                            staticClass:
                                                              "fas fa-user-cog text-info"
                                                          })
                                                        ]
                                                      )
                                                    : _vm._e(),
                                                  _vm._v(" "),
                                                  _c(
                                                    "button",
                                                    {
                                                      directives: [
                                                        {
                                                          name: "b-tooltip",
                                                          rawName:
                                                            "v-b-tooltip.hover.d500",
                                                          modifiers: {
                                                            hover: true,
                                                            d500: true
                                                          }
                                                        }
                                                      ],
                                                      staticClass:
                                                        "controls-btn",
                                                      attrs: {
                                                        title: _vm.$t(
                                                          "meeting.maximize"
                                                        )
                                                      },
                                                      on: {
                                                        click: function(
                                                          $event
                                                        ) {
                                                          return _vm.changeFocus(
                                                            item
                                                          )
                                                        }
                                                      }
                                                    },
                                                    [
                                                      _c("i", {
                                                        staticClass:
                                                          "fas fa-expand enabled-text"
                                                      })
                                                    ]
                                                  ),
                                                  _vm._v(" "),
                                                  item.isHandUp
                                                    ? _c(
                                                        "div",
                                                        {
                                                          staticClass:
                                                            "status-icon"
                                                        },
                                                        [
                                                          _c("i", {
                                                            staticClass:
                                                              "fas fa-hand-paper enabled-text"
                                                          })
                                                        ]
                                                      )
                                                    : _vm._e(),
                                                  _vm._v(" "),
                                                  _vm.pageConfigs
                                                    .enableSnapshot &&
                                                  (_vm.pageConfigs
                                                    .anyoneCanTakeSnapshot ||
                                                    _vm.entity.canModerate)
                                                    ? _c(
                                                        "button",
                                                        {
                                                          directives: [
                                                            {
                                                              name: "b-tooltip",
                                                              rawName:
                                                                "v-b-tooltip.hover.d500",
                                                              modifiers: {
                                                                hover: true,
                                                                d500: true
                                                              }
                                                            }
                                                          ],
                                                          staticClass:
                                                            "controls-btn",
                                                          attrs: {
                                                            title: _vm.$t(
                                                              "meeting.take_snapshot"
                                                            )
                                                          },
                                                          on: {
                                                            click: function(
                                                              $event
                                                            ) {
                                                              return _vm.takeSnapshotOfStream(
                                                                item,
                                                                itemIndex
                                                              )
                                                            }
                                                          }
                                                        },
                                                        [
                                                          _c("i", {
                                                            staticClass:
                                                              "fas fa-image enabled-text"
                                                          })
                                                        ]
                                                      )
                                                    : _vm._e()
                                                ]
                                              )
                                            ]
                                          )
                                        : _vm._e()
                                    ]
                                  )
                                ]
                              })
                            ]
                          : _c(
                              "card",
                              {
                                staticClass: "video-item wait-box maximized",
                                attrs: { shadow: "" }
                              },
                              [
                                _vm.entity && !_vm.entity.isBlocked
                                  ? [
                                      _vm.entity.status === "scheduled" ||
                                      _vm.entity.status === "live"
                                        ? [
                                            _c(
                                              "div",
                                              {
                                                staticClass:
                                                  "green-room text-center mt-3"
                                              },
                                              [
                                                _c("video", {
                                                  ref: "greenRoomVideo",
                                                  attrs: {
                                                    autoplay: "",
                                                    playsinline: "",
                                                    muted: "",
                                                    id: "greenRoomVideo"
                                                  },
                                                  domProps: { muted: true }
                                                }),
                                                _vm._v(" "),
                                                _c("br"),
                                                _vm._v(" "),
                                                _c(
                                                  "canvas",
                                                  {
                                                    ref: "greenRoomAudio",
                                                    staticStyle: {
                                                      margin: "0 auto"
                                                    },
                                                    attrs: {
                                                      id: "greenRoomAudio",
                                                      width: "250",
                                                      height: "15",
                                                      "data-val":
                                                        _vm.micVolumeActivity
                                                    }
                                                  },
                                                  [_vm._v("No canvas")]
                                                )
                                              ]
                                            )
                                          ]
                                        : _vm._e(),
                                      _vm._v(" "),
                                      _vm.entity.status === "scheduled"
                                        ? [
                                            _vm.startDateTimeIsFuture
                                              ? _c("flip-countdown", {
                                                  staticClass: "my-3",
                                                  attrs: {
                                                    deadline:
                                                      _vm.entity.startDateTime
                                                  }
                                                })
                                              : [
                                                  _vm.entity.canModerate
                                                    ? [
                                                        _c(
                                                          "h5",
                                                          {
                                                            staticClass:
                                                              "text-muted text-center my-3"
                                                          },
                                                          [
                                                            _vm._v(
                                                              "\n                                            " +
                                                                _vm._s(
                                                                  _vm.$t(
                                                                    "meeting.waiting_for_you_to_start"
                                                                  )
                                                                ) +
                                                                "\n                                        "
                                                            )
                                                          ]
                                                        ),
                                                        _vm._v(" "),
                                                        _c(
                                                          "div",
                                                          {
                                                            staticClass:
                                                              "d-flex justify-content-center flex-wrap my-3"
                                                          },
                                                          [
                                                            _c(
                                                              "base-button",
                                                              {
                                                                attrs: {
                                                                  type:
                                                                    "button",
                                                                  design:
                                                                    "primary",
                                                                  size: "lg"
                                                                },
                                                                on: {
                                                                  click:
                                                                    _vm.getOnline
                                                                }
                                                              },
                                                              [
                                                                _vm._v(
                                                                  _vm._s(
                                                                    _vm.$t(
                                                                      "global.click_to",
                                                                      {
                                                                        attribute: _vm.$t(
                                                                          "meeting.get_live"
                                                                        )
                                                                      }
                                                                    )
                                                                  )
                                                                )
                                                              ]
                                                            ),
                                                            _vm._v(" "),
                                                            !_vm.isLoading
                                                              ? _c(
                                                                  "base-button",
                                                                  {
                                                                    attrs: {
                                                                      type:
                                                                        "button",
                                                                      design:
                                                                        "light",
                                                                      size: "lg"
                                                                    },
                                                                    on: {
                                                                      click: function(
                                                                        $event
                                                                      ) {
                                                                        return _vm.$router.push(
                                                                          {
                                                                            name:
                                                                              _vm.fallBackRoute
                                                                          }
                                                                        )
                                                                      }
                                                                    }
                                                                  },
                                                                  [
                                                                    _vm._v(
                                                                      _vm._s(
                                                                        _vm.$t(
                                                                          "global.click_to",
                                                                          {
                                                                            attribute: _vm.$t(
                                                                              "general.go_back"
                                                                            )
                                                                          }
                                                                        )
                                                                      )
                                                                    )
                                                                  ]
                                                                )
                                                              : _vm._e()
                                                          ],
                                                          1
                                                        )
                                                      ]
                                                    : [
                                                        _c(
                                                          "h5",
                                                          {
                                                            staticClass:
                                                              "text-muted text-center my-3"
                                                          },
                                                          [
                                                            _vm._v(
                                                              "\n                                            " +
                                                                _vm._s(
                                                                  _vm.$t(
                                                                    "meeting.starting_any_time_now"
                                                                  )
                                                                ) +
                                                                "\n                                        "
                                                            )
                                                          ]
                                                        ),
                                                        _vm._v(" "),
                                                        !_vm.isLoading
                                                          ? _c(
                                                              "div",
                                                              {
                                                                staticClass:
                                                                  "d-flex justify-content-center"
                                                              },
                                                              [
                                                                _c(
                                                                  "base-button",
                                                                  {
                                                                    attrs: {
                                                                      type:
                                                                        "button",
                                                                      design:
                                                                        "light",
                                                                      size: "lg"
                                                                    },
                                                                    on: {
                                                                      click: function(
                                                                        $event
                                                                      ) {
                                                                        return _vm.$router.push(
                                                                          {
                                                                            name:
                                                                              _vm.fallBackRoute
                                                                          }
                                                                        )
                                                                      }
                                                                    }
                                                                  },
                                                                  [
                                                                    _vm._v(
                                                                      _vm._s(
                                                                        _vm.$t(
                                                                          "global.click_to",
                                                                          {
                                                                            attribute: _vm.$t(
                                                                              "general.go_back"
                                                                            )
                                                                          }
                                                                        )
                                                                      )
                                                                    )
                                                                  ]
                                                                )
                                                              ],
                                                              1
                                                            )
                                                          : _vm._e()
                                                      ]
                                                ],
                                            _vm._v(" "),
                                            _c(
                                              "div",
                                              {
                                                staticClass: "text-center my-3"
                                              },
                                              [
                                                _c(
                                                  "span",
                                                  { staticClass: "text-muted" },
                                                  [
                                                    _vm._v(
                                                      _vm._s(
                                                        _vm.$t(
                                                          "meeting.scheduled_for"
                                                        )
                                                      )
                                                    )
                                                  ]
                                                ),
                                                _c(
                                                  "span",
                                                  {
                                                    directives: [
                                                      {
                                                        name: "b-tooltip",
                                                        rawName:
                                                          "v-b-tooltip.hover.d500",
                                                        modifiers: {
                                                          hover: true,
                                                          d500: true
                                                        }
                                                      }
                                                    ],
                                                    staticClass:
                                                      "text-muted-lg m-l-5",
                                                    attrs: {
                                                      title: _vm._f(
                                                        "momentDateTime"
                                                      )(
                                                        _vm.entity.startDateTime
                                                      )
                                                    }
                                                  },
                                                  [
                                                    _vm._v(
                                                      _vm._s(
                                                        _vm._f(
                                                          "momentCalendar"
                                                        )(
                                                          _vm.entity
                                                            .startDateTime,
                                                          {
                                                            sameElse:
                                                              _vm.vars
                                                                .defaultDateTimeFormat
                                                          }
                                                        )
                                                      )
                                                    )
                                                  ]
                                                )
                                              ]
                                            ),
                                            _vm._v(" "),
                                            _vm.liveMembersCount > 0
                                              ? _c(
                                                  "div",
                                                  {
                                                    staticClass:
                                                      "text-muted text-center my-3"
                                                  },
                                                  [
                                                    _c(
                                                      "span",
                                                      {
                                                        staticClass:
                                                          "text-xs text-success mr-1"
                                                      },
                                                      [
                                                        _c("i", {
                                                          staticClass:
                                                            "fas fa-circle"
                                                        })
                                                      ]
                                                    ),
                                                    _vm._v(" "),
                                                    _c("animated-number", {
                                                      attrs: {
                                                        number:
                                                          _vm.liveMembersCount,
                                                        delay: 100
                                                      }
                                                    }),
                                                    _vm._v(" "),
                                                    _vm.liveMembersCount > 1
                                                      ? _c("span", [
                                                          _vm._v(
                                                            _vm._s(
                                                              _vm.$t(
                                                                "meeting.members_online"
                                                              )
                                                            )
                                                          )
                                                        ])
                                                      : _c("span", [
                                                          _vm._v(
                                                            _vm._s(
                                                              _vm.$t(
                                                                "meeting.member_online"
                                                              )
                                                            )
                                                          )
                                                        ])
                                                  ],
                                                  1
                                                )
                                              : _vm._e(),
                                            _vm._v(" "),
                                            _vm.entity.canModerate
                                              ? [
                                                  _c(
                                                    "div",
                                                    {
                                                      staticClass:
                                                        "d-flex justify-content-center my-3"
                                                    },
                                                    [
                                                      _c(
                                                        "base-button",
                                                        {
                                                          attrs: {
                                                            type: "button",
                                                            design:
                                                              "gray-darker",
                                                            size: "sm"
                                                          },
                                                          on: {
                                                            click:
                                                              _vm.cancelMeeting
                                                          }
                                                        },
                                                        [
                                                          _c("i", {
                                                            staticClass:
                                                              "fas fa-times m-r-5"
                                                          }),
                                                          _vm._v(
                                                            " " +
                                                              _vm._s(
                                                                _vm.$t(
                                                                  "meeting.cancel"
                                                                )
                                                              )
                                                          )
                                                        ]
                                                      ),
                                                      _vm._v(" "),
                                                      _c(
                                                        "base-dropdown",
                                                        {
                                                          attrs: {
                                                            tag: "div",
                                                            size: "sm",
                                                            direction: "up"
                                                          }
                                                        },
                                                        [
                                                          _c(
                                                            "base-button",
                                                            {
                                                              attrs: {
                                                                slot: "title",
                                                                type: "button",
                                                                design:
                                                                  "gray-darker",
                                                                size: "sm",
                                                                "data-toggle":
                                                                  "dropdown",
                                                                role: "button"
                                                              },
                                                              slot: "title"
                                                            },
                                                            [
                                                              _c("i", {
                                                                staticClass:
                                                                  "far fa-clock m-r-5"
                                                              }),
                                                              _vm._v(" "),
                                                              _c(
                                                                "span",
                                                                {
                                                                  staticClass:
                                                                    "nav-link-inner--text"
                                                                },
                                                                [
                                                                  _vm._v(
                                                                    _vm._s(
                                                                      _vm.$t(
                                                                        "meeting.snooze"
                                                                      )
                                                                    )
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
                                                            _vm.snoozeOpts,
                                                            function(opt) {
                                                              return _c(
                                                                "button",
                                                                {
                                                                  key: opt.uuid,
                                                                  staticClass:
                                                                    "dropdown-item",
                                                                  attrs: {
                                                                    type:
                                                                      "button"
                                                                  },
                                                                  on: {
                                                                    click: function(
                                                                      $event
                                                                    ) {
                                                                      return _vm.snoozeMeeting(
                                                                        opt.uuid
                                                                      )
                                                                    }
                                                                  }
                                                                },
                                                                [
                                                                  _vm._v(
                                                                    _vm._s(
                                                                      opt.name
                                                                    ) +
                                                                      " " +
                                                                      _vm._s(
                                                                        _vm.$t(
                                                                          "list.general.durations." +
                                                                            opt.type
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
                                                    ],
                                                    1
                                                  )
                                                ]
                                              : _vm._e()
                                          ]
                                        : _vm.entity.status === "live"
                                        ? [
                                            _vm.roomIdAlive
                                              ? [
                                                  _c(
                                                    "h5",
                                                    {
                                                      staticClass:
                                                        "text-muted text-center my-3"
                                                    },
                                                    [
                                                      _vm._v(
                                                        "\n                                        " +
                                                          _vm._s(
                                                            _vm.$t(
                                                              "meeting.is_live_now"
                                                            )
                                                          ) +
                                                          "\n                                    "
                                                      )
                                                    ]
                                                  ),
                                                  _vm._v(" "),
                                                  _c(
                                                    "div",
                                                    {
                                                      staticClass:
                                                        "d-flex justify-content-center flex-wrap my-3"
                                                    },
                                                    [
                                                      _c(
                                                        "base-button",
                                                        {
                                                          attrs: {
                                                            type: "button",
                                                            design: "primary",
                                                            size: "lg"
                                                          },
                                                          on: {
                                                            click: _vm.getOnline
                                                          }
                                                        },
                                                        [
                                                          _vm._v(
                                                            _vm._s(
                                                              _vm.$t(
                                                                "global.click_to",
                                                                {
                                                                  attribute: _vm.$t(
                                                                    "meeting.get_live"
                                                                  )
                                                                }
                                                              )
                                                            )
                                                          )
                                                        ]
                                                      ),
                                                      _vm._v(" "),
                                                      !_vm.isLoading
                                                        ? _c(
                                                            "base-button",
                                                            {
                                                              attrs: {
                                                                type: "button",
                                                                design: "light",
                                                                size: "lg"
                                                              },
                                                              on: {
                                                                click: function(
                                                                  $event
                                                                ) {
                                                                  return _vm.$router.push(
                                                                    {
                                                                      name:
                                                                        _vm.fallBackRoute
                                                                    }
                                                                  )
                                                                }
                                                              }
                                                            },
                                                            [
                                                              _vm._v(
                                                                _vm._s(
                                                                  _vm.$t(
                                                                    "global.click_to",
                                                                    {
                                                                      attribute: _vm.$t(
                                                                        "general.go_back"
                                                                      )
                                                                    }
                                                                  )
                                                                )
                                                              )
                                                            ]
                                                          )
                                                        : _vm._e()
                                                    ],
                                                    1
                                                  )
                                                ]
                                              : [
                                                  _vm.entity.canModerate
                                                    ? [
                                                        _c(
                                                          "h5",
                                                          {
                                                            staticClass:
                                                              "text-muted text-center my-3"
                                                          },
                                                          [
                                                            _vm._v(
                                                              "\n                                            " +
                                                                _vm._s(
                                                                  _vm.$t(
                                                                    "meeting.waiting_for_you_to_start"
                                                                  )
                                                                ) +
                                                                "\n                                        "
                                                            )
                                                          ]
                                                        ),
                                                        _vm._v(" "),
                                                        _c(
                                                          "div",
                                                          {
                                                            staticClass:
                                                              "d-flex justify-content-center flex-wrap my-3"
                                                          },
                                                          [
                                                            _c(
                                                              "base-button",
                                                              {
                                                                attrs: {
                                                                  type:
                                                                    "button",
                                                                  design:
                                                                    "primary",
                                                                  size: "lg"
                                                                },
                                                                on: {
                                                                  click:
                                                                    _vm.getOnline
                                                                }
                                                              },
                                                              [
                                                                _vm._v(
                                                                  _vm._s(
                                                                    _vm.$t(
                                                                      "global.click_to",
                                                                      {
                                                                        attribute: _vm.$t(
                                                                          "meeting.get_live"
                                                                        )
                                                                      }
                                                                    )
                                                                  )
                                                                )
                                                              ]
                                                            ),
                                                            _vm._v(" "),
                                                            !_vm.isLoading
                                                              ? _c(
                                                                  "base-button",
                                                                  {
                                                                    attrs: {
                                                                      type:
                                                                        "button",
                                                                      design:
                                                                        "light",
                                                                      size: "lg"
                                                                    },
                                                                    on: {
                                                                      click: function(
                                                                        $event
                                                                      ) {
                                                                        return _vm.$router.push(
                                                                          {
                                                                            name:
                                                                              _vm.fallBackRoute
                                                                          }
                                                                        )
                                                                      }
                                                                    }
                                                                  },
                                                                  [
                                                                    _vm._v(
                                                                      _vm._s(
                                                                        _vm.$t(
                                                                          "global.click_to",
                                                                          {
                                                                            attribute: _vm.$t(
                                                                              "general.go_back"
                                                                            )
                                                                          }
                                                                        )
                                                                      )
                                                                    )
                                                                  ]
                                                                )
                                                              : _vm._e()
                                                          ],
                                                          1
                                                        )
                                                      ]
                                                    : [
                                                        _c(
                                                          "h5",
                                                          {
                                                            staticClass:
                                                              "text-muted text-center my-3"
                                                          },
                                                          [
                                                            _vm._v(
                                                              "\n                                            " +
                                                                _vm._s(
                                                                  _vm.$t(
                                                                    "meeting.starting_any_time_now"
                                                                  )
                                                                ) +
                                                                "\n                                        "
                                                            )
                                                          ]
                                                        ),
                                                        _vm._v(" "),
                                                        !_vm.isLoading
                                                          ? _c(
                                                              "div",
                                                              {
                                                                staticClass:
                                                                  "d-flex justify-content-center"
                                                              },
                                                              [
                                                                _c(
                                                                  "base-button",
                                                                  {
                                                                    attrs: {
                                                                      type:
                                                                        "button",
                                                                      design:
                                                                        "light",
                                                                      size: "lg"
                                                                    },
                                                                    on: {
                                                                      click: function(
                                                                        $event
                                                                      ) {
                                                                        return _vm.$router.push(
                                                                          {
                                                                            name:
                                                                              _vm.fallBackRoute
                                                                          }
                                                                        )
                                                                      }
                                                                    }
                                                                  },
                                                                  [
                                                                    _vm._v(
                                                                      _vm._s(
                                                                        _vm.$t(
                                                                          "global.click_to",
                                                                          {
                                                                            attribute: _vm.$t(
                                                                              "general.go_back"
                                                                            )
                                                                          }
                                                                        )
                                                                      )
                                                                    )
                                                                  ]
                                                                )
                                                              ],
                                                              1
                                                            )
                                                          : _vm._e()
                                                      ]
                                                ],
                                            _vm._v(" "),
                                            _vm.liveMembersCount > 0
                                              ? _c(
                                                  "div",
                                                  {
                                                    staticClass:
                                                      "text-muted text-center my-3"
                                                  },
                                                  [
                                                    _c(
                                                      "span",
                                                      {
                                                        staticClass:
                                                          "text-xs text-success mr-1"
                                                      },
                                                      [
                                                        _c("i", {
                                                          staticClass:
                                                            "fas fa-circle"
                                                        })
                                                      ]
                                                    ),
                                                    _vm._v(" "),
                                                    _c("animated-number", {
                                                      attrs: {
                                                        number:
                                                          _vm.liveMembersCount,
                                                        delay: 100
                                                      }
                                                    }),
                                                    _vm._v(" "),
                                                    _vm.liveMembersCount > 1
                                                      ? _c("span", [
                                                          _vm._v(
                                                            _vm._s(
                                                              _vm.$t(
                                                                "meeting.members_online"
                                                              )
                                                            )
                                                          )
                                                        ])
                                                      : _c("span", [
                                                          _vm._v(
                                                            _vm._s(
                                                              _vm.$t(
                                                                "meeting.member_online"
                                                              )
                                                            )
                                                          )
                                                        ])
                                                  ],
                                                  1
                                                )
                                              : _vm._e()
                                          ]
                                        : _vm.entity.status === "cancelled"
                                        ? [
                                            _c(
                                              "h4",
                                              {
                                                staticClass:
                                                  "text-muted text-center my-3"
                                              },
                                              [
                                                _vm._v(
                                                  "\n                                    " +
                                                    _vm._s(
                                                      _vm.$t(
                                                        "meeting.meeting_cancelled"
                                                      )
                                                    ) +
                                                    "\n                                "
                                                )
                                              ]
                                            ),
                                            _vm._v(" "),
                                            !_vm.isLoading
                                              ? _c(
                                                  "div",
                                                  {
                                                    staticClass:
                                                      "d-flex justify-content-center"
                                                  },
                                                  [
                                                    _c(
                                                      "base-button",
                                                      {
                                                        attrs: {
                                                          type: "button",
                                                          design: "light",
                                                          size: "lg"
                                                        },
                                                        on: {
                                                          click: function(
                                                            $event
                                                          ) {
                                                            return _vm.$router.push(
                                                              {
                                                                name:
                                                                  _vm.fallBackRoute
                                                              }
                                                            )
                                                          }
                                                        }
                                                      },
                                                      [
                                                        _vm._v(
                                                          _vm._s(
                                                            _vm.$t(
                                                              "global.click_to",
                                                              {
                                                                attribute: _vm.$t(
                                                                  "general.go_back"
                                                                )
                                                              }
                                                            )
                                                          )
                                                        )
                                                      ]
                                                    )
                                                  ],
                                                  1
                                                )
                                              : _vm._e()
                                          ]
                                        : _vm.entity.status === "ended"
                                        ? [
                                            _c(
                                              "h4",
                                              {
                                                staticClass:
                                                  "text-muted text-center my-3"
                                              },
                                              [
                                                _vm._v(
                                                  "\n                                    " +
                                                    _vm._s(
                                                      _vm.$t(
                                                        "meeting.meeting_ended"
                                                      )
                                                    ) +
                                                    "\n                                "
                                                )
                                              ]
                                            ),
                                            _vm._v(" "),
                                            !_vm.isLoading
                                              ? _c(
                                                  "div",
                                                  {
                                                    staticClass:
                                                      "d-flex justify-content-center"
                                                  },
                                                  [
                                                    _c(
                                                      "base-button",
                                                      {
                                                        attrs: {
                                                          type: "button",
                                                          design: "light",
                                                          size: "lg"
                                                        },
                                                        on: {
                                                          click: function(
                                                            $event
                                                          ) {
                                                            return _vm.$router.push(
                                                              {
                                                                name:
                                                                  _vm.fallBackRoute
                                                              }
                                                            )
                                                          }
                                                        }
                                                      },
                                                      [
                                                        _vm._v(
                                                          _vm._s(
                                                            _vm.$t(
                                                              "global.click_to",
                                                              {
                                                                attribute: _vm.$t(
                                                                  "general.go_back"
                                                                )
                                                              }
                                                            )
                                                          )
                                                        )
                                                      ]
                                                    )
                                                  ],
                                                  1
                                                )
                                              : _vm._e()
                                          ]
                                        : _vm._e()
                                    ]
                                  : [
                                      _vm.entity
                                        ? _c(
                                            "h3",
                                            {
                                              staticClass:
                                                "text-center text-danger my-3"
                                            },
                                            [
                                              _vm._v(
                                                "\n                                " +
                                                  _vm._s(
                                                    _vm.$t(
                                                      "meeting.not_allowed"
                                                    )
                                                  ) +
                                                  "\n                            "
                                              )
                                            ]
                                          )
                                        : _vm._e(),
                                      _vm._v(" "),
                                      !_vm.isLoading
                                        ? _c(
                                            "div",
                                            {
                                              staticClass:
                                                "d-flex justify-content-center"
                                            },
                                            [
                                              _c(
                                                "base-button",
                                                {
                                                  attrs: {
                                                    type: "button",
                                                    design: "light",
                                                    size: "lg"
                                                  },
                                                  on: {
                                                    click: function($event) {
                                                      return _vm.$router.push({
                                                        name: _vm.fallBackRoute
                                                      })
                                                    }
                                                  }
                                                },
                                                [
                                                  _vm._v(
                                                    _vm._s(
                                                      _vm.$t(
                                                        "global.click_to",
                                                        {
                                                          attribute: _vm.$t(
                                                            "general.go_back"
                                                          )
                                                        }
                                                      )
                                                    )
                                                  )
                                                ]
                                              )
                                            ],
                                            1
                                          )
                                        : _vm._e()
                                    ]
                              ],
                              2
                            )
                      ],
                      2
                    )
                  ]
                )
              ],
              2
            ),
            _vm._v(" "),
            _vm.pageConfigs.enableMeetingInfo &&
            _vm.rtcmConnection &&
            _vm.videoList.length &&
            _vm.showMeetingInfo
              ? _c("div", { staticClass: "meeting-info-container" }, [
                  _c("div", { staticClass: "meeting-info" }, [
                    _c("span", { staticClass: "info-label" }, [
                      _vm._v(_vm._s(_vm.$t("meeting.total_participants")))
                    ]),
                    _vm._v(": "),
                    _c("span", { staticClass: "info-value" }, [
                      _vm._v(_vm._s(_vm.participantCount))
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "meeting-info" }, [
                    _c("span", { staticClass: "info-label" }, [
                      _vm._v(_vm._s(_vm.$t("meeting.started_at")))
                    ]),
                    _vm._v(": "),
                    _c("span", { staticClass: "info-value" }, [
                      _vm._v(
                        _vm._s(
                          _vm._f("moment")(
                            _vm.entity.startedAt,
                            _vm.vars.defaultDateTimeFormat
                          )
                        )
                      )
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "meeting-info" }, [
                    _c("span", { staticClass: "info-label" }, [
                      _vm._v(_vm._s(_vm.$t("meeting.meeting_live_since")))
                    ]),
                    _vm._v(": "),
                    _c("span", { staticClass: "info-value" }, [
                      _vm._v(_vm._s(_vm.meetingDuration))
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "meeting-info" }, [
                    _c("span", { staticClass: "info-label" }, [
                      _vm._v(_vm._s(_vm.$t("meeting.props.estimated_end_time")))
                    ]),
                    _vm._v(": "),
                    _c("span", { staticClass: "info-value" }, [
                      _vm._v(
                        _vm._s(
                          _vm._f("moment")(
                            _vm.entity.estimatedEndTime,
                            _vm.vars.defaultDateTimeFormat
                          )
                        )
                      )
                    ])
                  ])
                ])
              : _vm._e(),
            _vm._v(" "),
            _vm.pageConfigs.enableChat &&
            _vm.configs.chat &&
            _vm.configs.chat.enabled &&
            _vm.entity &&
            !_vm.entity.isBlocked
              ? _c(
                  "div",
                  { staticClass: "chat-box-container" },
                  [
                    _vm.isChatBoxShown
                      ? _c("chat-box", {
                          attrs: {
                            "box-visibility": _vm.isChatBoxShown,
                            meeting: _vm.entity,
                            channel: _vm.subscriptions.userPrivate
                          },
                          on: {
                            boxHidden: function($event) {
                              _vm.isChatBoxShown = false
                            },
                            boxShown: function($event) {
                              _vm.isChatBoxShown = true
                            }
                          }
                        })
                      : _vm._e()
                  ],
                  1
                )
              : _vm._e(),
            _vm._v(" "),
            _c(
              "b-modal",
              {
                attrs: {
                  size: "md",
                  centered: "",
                  lazy: "",
                  busy: _vm.isLoading,
                  id: "devicesModal",
                  "no-close-on-backdrop": "",
                  "no-close-on-esc": ""
                },
                on: {
                  ok: _vm.onDevicesModalOK,
                  cancel: _vm.onDevicesModalCancel
                },
                model: {
                  value: _vm.showDevicesModal,
                  callback: function($$v) {
                    _vm.showDevicesModal = $$v
                  },
                  expression: "showDevicesModal"
                }
              },
              [
                _c("template", { slot: "modal-header" }, [
                  _c("h5", { staticClass: "modal-title" }, [
                    _vm._v(
                      _vm._s(
                        _vm.$t("meeting.media_devices.video_and_audio_devices")
                      )
                    )
                  ])
                ]),
                _vm._v(" "),
                _c(
                  "div",
                  [
                    _c("base-select", {
                      attrs: {
                        options: _vm.mediaDevices.audioInput,
                        label: _vm.$t("meeting.media_devices.audio_input"),
                        "allow-empty": false,
                        "preselect-first": ""
                      },
                      model: {
                        value: _vm.mediaConfigFormData.selectedAudioInput,
                        callback: function($$v) {
                          _vm.$set(
                            _vm.mediaConfigFormData,
                            "selectedAudioInput",
                            $$v
                          )
                        },
                        expression: "mediaConfigFormData.selectedAudioInput"
                      }
                    }),
                    _vm._v(" "),
                    _c("base-select", {
                      attrs: {
                        options: _vm.mediaDevices.videoInput,
                        label: _vm.$t("meeting.media_devices.video_input"),
                        "allow-empty": false,
                        "preselect-first": ""
                      },
                      model: {
                        value: _vm.mediaConfigFormData.selectedVideoInput,
                        callback: function($$v) {
                          _vm.$set(
                            _vm.mediaConfigFormData,
                            "selectedVideoInput",
                            $$v
                          )
                        },
                        expression: "mediaConfigFormData.selectedVideoInput"
                      }
                    }),
                    _vm._v(" "),
                    _c("div", { staticClass: "row" }, [
                      _c(
                        "div",
                        { staticClass: "col-12 col-md-4" },
                        [
                          _c("base-select", {
                            attrs: {
                              options: _vm.mediaDevices.resolutions,
                              label: _vm.$t(
                                "meeting.media_devices.video_resolution"
                              ),
                              "allow-empty": false,
                              "preselect-first": "",
                              simple: "",
                              "track-by": "label",
                              "show-by": "label"
                            },
                            model: {
                              value: _vm.mediaConfigFormData.selectedResolution,
                              callback: function($$v) {
                                _vm.$set(
                                  _vm.mediaConfigFormData,
                                  "selectedResolution",
                                  $$v
                                )
                              },
                              expression:
                                "mediaConfigFormData.selectedResolution"
                            }
                          })
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "col-12 col-md-4" },
                        [
                          _c("base-select", {
                            attrs: {
                              options: _vm.mediaDevices.frameRates,
                              label: _vm.$t("meeting.media_devices.frame_rate"),
                              "allow-empty": false,
                              "preselect-first": "",
                              simple: "",
                              "track-by": "uuid",
                              "show-by": "label"
                            },
                            model: {
                              value: _vm.mediaConfigFormData.frameRate,
                              callback: function($$v) {
                                _vm.$set(
                                  _vm.mediaConfigFormData,
                                  "frameRate",
                                  $$v
                                )
                              },
                              expression: "mediaConfigFormData.frameRate"
                            }
                          })
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "col-12 col-md-4" },
                        [
                          _c("base-select", {
                            attrs: {
                              options: _vm.mediaDevices.facingModes,
                              label: _vm.$t(
                                "meeting.media_devices.facing_mode"
                              ),
                              "allow-empty": false,
                              "preselect-first": "",
                              simple: "",
                              "track-by": "uuid",
                              "show-by": "label"
                            },
                            model: {
                              value: _vm.mediaConfigFormData.facingMode,
                              callback: function($$v) {
                                _vm.$set(
                                  _vm.mediaConfigFormData,
                                  "facingMode",
                                  $$v
                                )
                              },
                              expression: "mediaConfigFormData.facingMode"
                            }
                          })
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-12" }, [
                        _c("h6", { staticClass: "mt-2 pb-1" }, [
                          _vm._v(
                            _vm._s(_vm.$t("meeting.media_devices.bandwidth"))
                          )
                        ])
                      ]),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "col-12 col-sm-4" },
                        [
                          _c("base-select", {
                            attrs: {
                              options: _vm.audioBandwidthOpts,
                              label: _vm.$t("meeting.media_devices.audio"),
                              "allow-empty": false,
                              "preselect-first": "",
                              simple: "",
                              "track-by": "uuid",
                              "show-by": "label"
                            },
                            model: {
                              value: _vm.mediaConfigFormData.bandwidth.audio,
                              callback: function($$v) {
                                _vm.$set(
                                  _vm.mediaConfigFormData.bandwidth,
                                  "audio",
                                  $$v
                                )
                              },
                              expression: "mediaConfigFormData.bandwidth.audio"
                            }
                          })
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "col-12 col-sm-4" },
                        [
                          _c("base-select", {
                            attrs: {
                              options: _vm.videoBandwidthOpts,
                              label: _vm.$t("meeting.media_devices.video"),
                              "allow-empty": false,
                              "preselect-first": "",
                              simple: "",
                              "track-by": "uuid",
                              "show-by": "label"
                            },
                            model: {
                              value: _vm.mediaConfigFormData.bandwidth.video,
                              callback: function($$v) {
                                _vm.$set(
                                  _vm.mediaConfigFormData.bandwidth,
                                  "video",
                                  $$v
                                )
                              },
                              expression: "mediaConfigFormData.bandwidth.video"
                            }
                          })
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "col-12 col-sm-4" },
                        [
                          _c("base-select", {
                            attrs: {
                              options: _vm.screenBandwidthOpts,
                              label: _vm.$t("meeting.media_devices.screen"),
                              "allow-empty": false,
                              "preselect-first": "",
                              simple: "",
                              "track-by": "uuid",
                              "show-by": "label"
                            },
                            model: {
                              value: _vm.mediaConfigFormData.bandwidth.screen,
                              callback: function($$v) {
                                _vm.$set(
                                  _vm.mediaConfigFormData.bandwidth,
                                  "screen",
                                  $$v
                                )
                              },
                              expression: "mediaConfigFormData.bandwidth.screen"
                            }
                          })
                        ],
                        1
                      )
                    ])
                  ],
                  1
                )
              ],
              2
            ),
            _vm._v(" "),
            _vm.pageConfigs.enableFileSharing
              ? _c(
                  "div",
                  {
                    class: [
                      "files-sharing-box d-none",
                      { "d-flex": _vm.showFileSharing }
                    ]
                  },
                  [
                    _c(
                      "card",
                      {
                        staticClass: "files-container",
                        attrs: { shadow: "", "body-classes": "files-wrapper" }
                      },
                      [
                        _c("file-sharer", {
                          attrs: {
                            connection: _vm.fileSharingConnection,
                            "allow-sharing": _vm.pageConfigs.enableFileSharing,
                            options: _vm.fileSharerOptions
                          },
                          on: {
                            hide: function($event) {
                              _vm.showFileSharing = false
                            },
                            show: function($event) {
                              _vm.showFileSharing = true
                            }
                          }
                        })
                      ],
                      1
                    )
                  ],
                  1
                )
              : _vm._e()
          ]
        : _c(
            "card",
            {
              staticClass:
                "duplicate-tab d-flex justify-content-center align-items-center min-height-90vh",
              attrs: { shadow: "" }
            },
            [_c("h2", [_vm._v(_vm._s(_vm.$t("meeting.duplicate_tab")))])]
          )
    ],
    2
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("h4", { staticClass: "meeting-title" }, [
      _vm._v(_vm._s(_vm.entity.title))
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("span", [
      _vm._v(
        _vm._s(_vm.$t("meeting.props.type")) +
          ": " +
          _vm._s(_vm.entity.type.name) +
          ","
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("span", [
      _vm._v(
        _vm._s(_vm.$t("meeting.meeting_category.category")) +
          ": " +
          _vm._s(_vm.entity.category.name)
      )
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/api/azure-speech.js":
/*!******************************************!*\
  !*** ./resources/js/api/azure-speech.js ***!
  \******************************************/
/*! exports provided: getToken */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getToken", function() { return getToken; });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
 // import request from '@core/utils/request'
// axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
// axios.defaults.withCredentials = true;

var apiUrl = "".concat(location.origin, ":27017/api");
function getToken() {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get("".concat(apiUrl, "/get-speech-token"));
}

/***/ }),

/***/ "./resources/js/components/FileSharer.vue":
/*!************************************************!*\
  !*** ./resources/js/components/FileSharer.vue ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _FileSharer_vue_vue_type_template_id_68270e3a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FileSharer.vue?vue&type=template&id=68270e3a& */ "./resources/js/components/FileSharer.vue?vue&type=template&id=68270e3a&");
/* harmony import */ var _FileSharer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FileSharer.vue?vue&type=script&lang=js& */ "./resources/js/components/FileSharer.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _FileSharer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _FileSharer_vue_vue_type_template_id_68270e3a___WEBPACK_IMPORTED_MODULE_0__["render"],
  _FileSharer_vue_vue_type_template_id_68270e3a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/FileSharer.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/FileSharer.vue?vue&type=script&lang=js&":
/*!*************************************************************************!*\
  !*** ./resources/js/components/FileSharer.vue?vue&type=script&lang=js& ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FileSharer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./FileSharer.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/FileSharer.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FileSharer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/FileSharer.vue?vue&type=template&id=68270e3a&":
/*!*******************************************************************************!*\
  !*** ./resources/js/components/FileSharer.vue?vue&type=template&id=68270e3a& ***!
  \*******************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FileSharer_vue_vue_type_template_id_68270e3a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./FileSharer.vue?vue&type=template&id=68270e3a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/FileSharer.vue?vue&type=template&id=68270e3a&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FileSharer_vue_vue_type_template_id_68270e3a___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FileSharer_vue_vue_type_template_id_68270e3a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/mixins/azure-speech.js":
/*!*********************************************!*\
  !*** ./resources/js/mixins/azure-speech.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _api_azure_speech__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @api/azure-speech */ "./resources/js/api/azure-speech.js");
/* harmony import */ var universal_cookie__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! universal-cookie */ "./node_modules/universal-cookie/es6/index.js");
/* harmony import */ var microsoft_cognitiveservices_speech_sdk__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! microsoft-cognitiveservices-speech-sdk */ "./node_modules/microsoft-cognitiveservices-speech-sdk/distrib/es2015/microsoft.cognitiveservices.speech.sdk.js");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



 // import io from 'socket.io-client';
// import VueSocketIO from "vue-socket.io";



/**
 * 
 * @param {String} text 
 * @returns {Number} time in seconds
 */

function getDelayTimeOfText(text) {
  return "".concat(text || " ").split(" ").length / 3 * 1000 + 3000; // read speed 200 words for a min
}

/* harmony default export */ __webpack_exports__["default"] = ({
  components: {},
  data: function data() {
    return {
      timer: null,
      recognizer: null,
      synthesizer: null,
      conversations: [
        /**
        {
            user: UserId
            translates: {
                en: "something is okay"
            }
        }
        */
      ],
      errors: [],
      displayText: 'INITIALIZED: ready to test speech...',
      isRecognizing: false,
      enableV2T: false,
      // enable voice to text
      enableV2V: false,
      // enable voice to voice
      languagesInRoom: ["en", // default value
      "ja", "vi", "zh"],
      uuid: "",
      // room id for broadcast
      myLanguage: 'en',
      // must be language code
      // myLanguagePrefix: 'en', // commented at 2021-12-23  because we dont need to use this value
      supportedLanguages: [{
        value: "en",
        speechTransCode: "en",
        text2SpeechCode: "en-US",
        speech2TextCode: "en-US",
        voiceNames: {
          "male": "en-US-GuyNeural",
          "female": "en-US-JennyNeural"
        },
        // voiceName: "en-US-AriaNeural",
        text: "English"
      }, {
        value: "ja",
        speechTransCode: "ja",
        text2SpeechCode: "ja-JP",
        speech2TextCode: "ja-JP",
        voiceNames: {
          "male": "ja-JP-KeitaNeural",
          "female": "ja-JP-NanamiNeural"
        },
        // voiceName: "ja-JP-NanamiNeural",
        text: "Japanese"
      }, {
        value: "vi",
        speechTransCode: "vi",
        text2SpeechCode: "vi-VN",
        speech2TextCode: "vi-VN",
        voiceNames: {
          "male": "vi-VN-NamMinhNeural",
          "female": "vi-VN-HoaiMyNeural"
        },
        // voiceName: "vi-VN-HoaiMyNeural",
        text: "Vietnamese"
      }, {
        value: "zh",
        speechTransCode: "zh-Hans",
        text2SpeechCode: "zh-CN",
        speech2TextCode: "zh-CN",
        voiceNames: {
          "male": "zh-CN-YunxiNeural",
          "female": "zh-CN-XiaoruiNeural"
        },
        // voiceName: "zh-CN-XiaohanNeural",
        text: "Chinese"
      }],
      isMuted: false
    };
  },
  computed: _objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_1__["mapGetters"])('user', {
    getUserDetails: 'get',
    hasRole: 'hasRole',
    hasPermission: 'hasPermission',
    loggedInUser: 'loggedInUser',
    userUuid: 'uuid',
    profile: 'profile',
    username: 'username',
    liveUsers: 'liveUsers'
  })), {}, {
    currentLanguage: {
      get: function get() {
        return this.myLanguage;
      },
      set: function set(newValue) {
        this.myLanguage = newValue;
        this.myLanguagePrefix = newValue.split('-')[0]; // console.log("this.myLanguage: ", this.myLanguage);
        // console.log("newValue: ", newValue);
        // this.myLanguage = newValue;
        // this.myLanguagePrefix = newValue.split('-')[0];
        // this.addLanguageToRoom(this.myLanguage)
      }
    }
  }),
  watch: {
    myLanguage: function myLanguage() {
      this.initContinuesSpeechToTextInMulti();
    }
  },
  sockets: {
    // socket event listeners
    broadcast_conversation: function broadcast_conversation(conversation) {
      var _this = this;

      // console.log("conversation from server: ", conversation)
      if (conversation.owner !== this.userUuid) {
        // let user = conversation.owner; // conversation.owner === UserId
        // let translations = conversation.translations;
        // let conversations = this.conversations.filter((value) => {
        //     return value.user !== user
        // });
        var text = conversation.translations[this.myLanguage]; // console.log("conversation: ", text)

        if (this.enableV2T) {
          this.conversations.push({
            user: conversation.owner,
            translations: conversation.translations,
            messageId: conversation.messageId
          }); // this.conversations = [...conversations, {user, translations}]
          // console.log("this.conversations: ", this.conversations)
        }

        if (this.enableV2V && text) {
          var user = this.liveUsers.find(function (user) {
            return user.uuid === conversation.owner;
          });
          var gender = user.gender.uuid || "male"; // console.log("gender: ", gender)
          // console.log("user.gender.uuid: ", user.gender.uuid)

          var supportedLanguage = this.supportedLanguages.find(function (sl) {
            return sl.value === _this.myLanguage;
          });
          this.textToSpeech(text, supportedLanguage.text2SpeechCode, supportedLanguage.voiceNames[gender]);
        }
      } else {// console.log(
        //     "this.userUuid: ", this.userUuid,
        //     "conversation.owner: ", conversation.owner
        // )
      }
    }
  },
  methods: {
    /**
     * 
     * @returns token
     */
    getTokenOrRefresh: function getTokenOrRefresh() {
      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var cookie, speechToken, res, token, region, idx;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                cookie = new universal_cookie__WEBPACK_IMPORTED_MODULE_3__["default"]();
                speechToken = cookie.get('speech-token');

                if (!(speechToken === undefined)) {
                  _context.next = 16;
                  break;
                }

                _context.prev = 3;
                _context.next = 6;
                return _api_azure_speech__WEBPACK_IMPORTED_MODULE_2__["getToken"]();

              case 6:
                res = _context.sent;
                token = res.data.token;
                region = res.data.region;
                cookie.set('speech-token', region + ':' + token, {
                  maxAge: 540,
                  path: '/'
                }); // console.log('Token fetched from back-end: ' + token);

                return _context.abrupt("return", {
                  authToken: token,
                  region: region
                });

              case 13:
                _context.prev = 13;
                _context.t0 = _context["catch"](3);
                return _context.abrupt("return", {
                  authToken: null,
                  error: _context.t0
                });

              case 16:
                // console.log('Token fetched from cookie: ' + speechToken);
                idx = speechToken.indexOf(':');
                return _context.abrupt("return", {
                  authToken: speechToken.slice(idx + 1),
                  region: speechToken.slice(0, idx)
                });

              case 18:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[3, 13]]);
      }))();
    },

    /**
     * 
     * @returns 
     */
    initContinuesSpeechToTextInMulti: function initContinuesSpeechToTextInMulti() {
      var _this2 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
        var _this2$supportedLangu;

        var tokenObj, speechTranslationConfig, mySpeech2TextCode, audioConfig, recognizer;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                if (_this2.recognizer) {
                  // console.log("stoping continuesSpeechToSpeech....")
                  _this2.recognizer.stopContinuousRecognitionAsync();
                } // console.log("initing continuesSpeechToSpeech....")
                // console.log("this.languagesInRoom: ", this.languagesInRoom)
                // console.log("this.myLanguage: ", this.myLanguage)


                _context2.next = 3;
                return _this2.getTokenOrRefresh();

              case 3:
                tokenObj = _context2.sent;
                // const speechConfig = speechsdk.SpeechConfig.fromAuthorizationToken(tokenObj.authToken, tokenObj.region);
                speechTranslationConfig = microsoft_cognitiveservices_speech_sdk__WEBPACK_IMPORTED_MODULE_4__["SpeechTranslationConfig"].fromAuthorizationToken(tokenObj.authToken, tokenObj.region);
                mySpeech2TextCode = (_this2$supportedLangu = _this2.supportedLanguages.find(function (sl) {
                  return sl.value === _this2.myLanguage;
                })) === null || _this2$supportedLangu === void 0 ? void 0 : _this2$supportedLangu.speech2TextCode; // console.log("mySpeechTransCode: ", mySpeech2TextCode)

                speechTranslationConfig.speechRecognitionLanguage = mySpeech2TextCode ? mySpeech2TextCode : "en-US"; // "en-US"
                // add languages in the room
                // speechTranslationConfig.addTargetLanguage(this.myLanguage);

                _this2.languagesInRoom.forEach(function (language) {
                  var supportedLanguage = _this2.supportedLanguages.find(function (sl) {
                    return sl.value === language;
                  }); // console.log("speechTransCode: ", speechTransCode)


                  if (supportedLanguage) {
                    var speechTransCode = supportedLanguage.speechTransCode;
                    speechTranslationConfig.addTargetLanguage(speechTransCode);
                  }
                });

                audioConfig = microsoft_cognitiveservices_speech_sdk__WEBPACK_IMPORTED_MODULE_4__["AudioConfig"].fromDefaultMicrophoneInput();
                recognizer = new microsoft_cognitiveservices_speech_sdk__WEBPACK_IMPORTED_MODULE_4__["TranslationRecognizer"](speechTranslationConfig, audioConfig);

                recognizer.recognizing = function (s, e) {// console.log(`TRANSLATING: Text=${e.result.text}`);
                };

                recognizer.recognized = function (s, e) {
                  // console.log("e.result.reason: ", e.result.reason)
                  // console.log(e.result.reason != ResultReason.NoMatch);
                  if (e.result.reason != microsoft_cognitiveservices_speech_sdk__WEBPACK_IMPORTED_MODULE_4__["ResultReason"].NoMatch) {
                    var conversationResult = {
                      owner: _this2.userUuid,
                      resultReason: e.result.reason,
                      translations: {}
                    };

                    _this2.languagesInRoom.forEach(function (language) {
                      var supportedLanguage = _this2.supportedLanguages.find(function (sl) {
                        return sl.value === language;
                      });

                      if (supportedLanguage) {
                        var speechTransCode = supportedLanguage.speechTransCode;
                        conversationResult.translations[language] = e.result.translations.get(speechTransCode);
                      }
                    }); // conversationResult.translations[this.myLanguage] = e.result.translations.get(this.myLanguage)
                    // console.log("sending converstation...", conversationResult)
                    // send conversation to users in the room


                    _this2.sendConversation(conversationResult);
                  } else {// console.log("Didnt recognized");
                  }
                };

                recognizer.canceled = function (s, e) {
                  // console.log(`CANCELED: Reason=${e.reason}`);
                  if (e.reason == "CancellationReason.Error") {// console.log(`"CANCELED: ErrorCode=${e.errorCode}`);
                    // console.log(`"CANCELED: ErrorDetails=${e.errorDetails}`);
                    // console.log("CANCELED: Did you update the subscription info?");
                  }

                  recognizer.stopContinuousRecognitionAsync();
                };

                recognizer.sessionStopped = function (s, e) {
                  // console.log("\n    Session stopped event.");
                  recognizer.stopContinuousRecognitionAsync();
                };

                recognizer.startContinuousRecognitionAsync(function (err) {
                  if (err) {
                    console.error("startContinuousRecognitionAsync: ", err);
                  }
                });
                _this2.recognizer = recognizer;

              case 16:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }))();
    },

    /**
     * 
     * @param {String} text 
     * @param {String} text2SpeechCode 
     * @param {String} voiceName // https://docs.microsoft.com/en-us/azure/cognitive-services/speech-service/language-support
     */
    textToSpeech: function textToSpeech(text, text2SpeechCode, voiceName) {
      var _this3 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3() {
        var tokenObj, speechConfig, audioConfig, synthesizer;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return _this3.getTokenOrRefresh();

              case 2:
                tokenObj = _context3.sent;
                speechConfig = microsoft_cognitiveservices_speech_sdk__WEBPACK_IMPORTED_MODULE_4__["SpeechConfig"].fromAuthorizationToken(tokenObj.authToken, tokenObj.region);
                audioConfig = microsoft_cognitiveservices_speech_sdk__WEBPACK_IMPORTED_MODULE_4__["AudioConfig"].fromDefaultSpeakerOutput();
                speechConfig.speechSynthesisLanguage = text2SpeechCode; //supportedLanguage.text2SpeechCode; // e.g. "de-DE"
                // The voice setting will overwrite language setting.
                // The voice setting will not overwrite the voice element in input SSML.

                speechConfig.speechSynthesisVoiceName = voiceName; //supportedLanguage.voiceNames[gender];

                synthesizer = new microsoft_cognitiveservices_speech_sdk__WEBPACK_IMPORTED_MODULE_4__["SpeechSynthesizer"](speechConfig, audioConfig);
                synthesizer.speakTextAsync(text, function (result) {
                  if (result) {
                    synthesizer.close();
                    return result.audioData;
                  } else {
                    console.error("Text to voice result: ", result);
                  }
                }, function (error) {
                  console.error(error);
                  synthesizer.close();
                });
                _this3.synthesizer = synthesizer;

              case 10:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }))();
    },
    joinToRoom: function joinToRoom() {
      this.$socket.emit('join', {
        room: this.uuid
      }, function (err) {
        if (err) {
          return console.error("Join to room:", err);
        } // console.log("joined room: ", this.uuid)

      });
    },
    // addLanguageToRoom(language) {
    //     this.$socket.emit('add_or_update_language_to_room', { room: this.uuid, language: language, userId: this.userUuid }, (err) => {
    //         if (err) {
    //             return console.error("add_language to room:", err)
    //         }
    //     });
    // },
    sendConversation: function sendConversation(conversationResult) {
      this.$socket.emit('send_conversation', {
        conversationResult: conversationResult,
        room: this.uuid
      }, function (err) {
        if (err) {
          console.error("send_conversation: ", err);
        } // console.log("sent_conversation: ", conversationResult)

      });
    },
    _socketInit: function _socketInit() {
      var _this4 = this;

      this.joinToRoom();
      this.$socket.on("connect_error", function (err) {
        // console.log(`connect_error due to ${err.message}`);
        // console.log(`trying again`);
        _this4.errors.push("connect_error: Could not connect to Socket Server for Traslations"); // this.socket.close();
        // this.socket.open();

      });
      this.$socket.on('disconnect', function (reason) {
        // console.log("socket disconnect reason: ", reason);
        if (reason === "io server disconnect") {
          // the disconnection was initiated by the server, you need to reconnect manually
          _this4.$socket.connect();

          _this4._socketInit();
        }
      });
    },
    toggleRecognition: function toggleRecognition() {
      this.isMuted = !this.isMuted;

      if (this.isMuted) {
        this.recognizer.stopContinuousRecognitionAsync();
      } else {
        this.initContinuesSpeechToTextInMulti();
      }
    },
    azure_toggleVoiceToText: function azure_toggleVoiceToText() {
      this.enableV2T = !this.enableV2T;
      this.initContinuesSpeechToTextInMulti();

      if (this.enableV2T) {
        this.autoShiftConversations();
      } else {
        this.conversations = [];
        clearTimeout(this.timer);
      }
    },
    azure_toggleVoiceToVoice: function azure_toggleVoiceToVoice() {
      this.enableV2V = !this.enableV2V;

      if (!this.enableV2V) {
        try {
          this.synthesizer && this.synthesizer.close();
        } catch (err) {
          console.error("err: ", err);
        }
      }
    },
    setLanguage: function setLanguage(value) {
      this.currentLanguage = value; // this.myLanguagePrefix = newValue.split('-')[0];
      // this.addLanguageToRoom(this.myLanguage)
    },
    autoShiftConversations: function autoShiftConversations() {
      var _this5 = this;

      var conversation = this.conversations[0];

      if (conversation) {
        // console.log("removing...")
        var text = conversation && conversation.translations[this.myLanguage];
        var delaySeconds = getDelayTimeOfText(text || "");
        this.timer = setTimeout(function () {
          _this5.conversations.shift();

          _this5.autoShiftConversations();
        }, delaySeconds);
      } else {
        // console.log("delaying...")
        this.timer = setTimeout(function () {
          _this5.autoShiftConversations();
        }, 800);
      }
    }
  },
  mounted: function mounted() {
    if (this.$route.params.uuid) {
      this.uuid = this.$route.params.uuid;

      this._socketInit();

      this.getTokenOrRefresh(); // this.addLanguageToRoom(this.myLanguage)

      if (!this.isMuted) {
        this.initContinuesSpeechToTextInMulti();
      }
    } else {
      this.errors.push("Uuid does not exists. You are not able to use translation feature");
      console.error("uuid does not exists");
    }
  },
  beforeDestroy: function beforeDestroy() {
    try {
      clearTimeout(this.timer);
      this.recognizer.stopContinuousRecognitionAsync();
      this.$socket.emit('remove_user_on_room', {
        room: this.uuid,
        userId: this.userUuid
      });
    } catch (err) {
      console.error("stopContinuousRecognitionAsync: ", err);
    }

    console.log("socket.close event"); // this.socket.close()
  }
});

/***/ }),

/***/ "./resources/js/mixins/google-speech.js":
/*!**********************************************!*\
  !*** ./resources/js/mixins/google-speech.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



var ss = __webpack_require__(/*! socket.io-stream */ "./node_modules/socket.io-stream/index.js");

var socket = io.connect("".concat(location.origin, ":27017"));
var ssStream = ss.createStream();
var audioContext;
var scriptNode;
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      timer: null,
      g_enableV2T: false,
      // enable voice to text
      g_enableV2V: false,
      // enable voice to voice
      uuid: "",
      myLanguage: 'English',
      resultError: false,
      textResult: "",
      errors: []
    };
  },
  computed: _objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_1__["mapGetters"])('user', {
    loggedInUser: 'loggedInUser',
    userUuid: 'uuid',
    liveUsers: 'liveUsers'
  })), Object(vuex__WEBPACK_IMPORTED_MODULE_1__["mapActions"])('user', {
    GetAllUsers: 'GetAllUsers'
  })),
  methods: {
    successCallback: function successCallback(stream) {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
        var vm, input, bufferSize, scriptNodeProcess, _scriptNodeProcess;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _scriptNodeProcess = function _scriptNodeProcess3() {
                  _scriptNodeProcess = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(audioProcessingEvent) {
                    var inputBuffer, outputBuffer, inputData, outputData, sample;
                    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
                      while (1) {
                        switch (_context.prev = _context.next) {
                          case 0:
                            inputBuffer = audioProcessingEvent.inputBuffer;
                            outputBuffer = audioProcessingEvent.outputBuffer;
                            inputData = inputBuffer.getChannelData(0);
                            outputData = outputBuffer.getChannelData(0); // Loop through the 4096 samples

                            for (sample = 0; sample < inputBuffer.length; sample++) {
                              outputData[sample] = inputData[sample];
                            }

                            _context.prev = 5;
                            _context.next = 8;
                            return ssStream.write(new ss.Buffer(vm.downsampleBuffer(inputData, 44100, 16000)));

                          case 8:
                            _context.next = 13;
                            break;

                          case 10:
                            _context.prev = 10;
                            _context.t0 = _context["catch"](5);
                            console.log("ssStream writing error!");

                          case 13:
                          case "end":
                            return _context.stop();
                        }
                      }
                    }, _callee, null, [[5, 10]]);
                  }));
                  return _scriptNodeProcess.apply(this, arguments);
                };

                scriptNodeProcess = function _scriptNodeProcess2(_x) {
                  return _scriptNodeProcess.apply(this, arguments);
                };

                vm = _this;
                audioContext = new AudioContext();
                console.log("successCallback:....IN");
                input = audioContext.createMediaStreamSource(stream);
                bufferSize = 2048;
                scriptNode = audioContext.createScriptProcessor(bufferSize, 1, 1);
                scriptNode.onaudioprocess = scriptNodeProcess;
                input.connect(scriptNode);

              case 10:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }))();
    },
    downsampleBuffer: function downsampleBuffer(buffer, sampleRate, outSampleRate) {
      if (outSampleRate == sampleRate) {
        return buffer;
      }

      if (outSampleRate > sampleRate) {
        throw "downsampling rate show be smaller than original sample rate";
      }

      var sampleRateRatio = sampleRate / outSampleRate;
      var newLength = Math.round(buffer.length / sampleRateRatio);
      var result = new Int16Array(newLength);
      var offsetResult = 0;
      var offsetBuffer = 0;

      while (offsetResult < result.length) {
        var nextOffsetBuffer = Math.round((offsetResult + 1) * sampleRateRatio);
        var accum = 0,
            count = 0;

        for (var i = offsetBuffer; i < nextOffsetBuffer && i < buffer.length; i++) {
          accum += buffer[i];
          count++;
        }

        result[offsetResult] = Math.min(1, accum / count) * 0x7fff;
        offsetResult++;
        offsetBuffer = nextOffsetBuffer;
      }

      return result.buffer;
    },
    google_toggleVoiceToText: function google_toggleVoiceToText(data) {
      var _this2 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                if (data.V2V) {
                  _this2.g_enableV2V = !_this2.g_enableV2V;
                } else {
                  _this2.g_enableV2T = !_this2.g_enableV2T;
                }

                if (_this2.$route.params.uuid) {
                  _this2.uuid = _this2.$route.params.uuid;

                  if (_this2.g_enableV2T || _this2.g_enableV2V) {
                    _this2.myLanguage = data.language;
                    socket.emit("LANGUAGE_SPEECH", {
                      myLanguage: _this2.myLanguage,
                      V2V: _this2.g_enableV2V,
                      liveUsers: _this2.liveUsers,
                      room: _this2.uuid
                    });
                    scriptNode.connect(audioContext.destination);
                    ss(socket).emit('START_SPEECH', ssStream);
                  } else {
                    clearTimeout(_this2.timer);
                    scriptNode.disconnect(audioContext.destination);
                    ssStream.end();
                    socket.emit("STOP_SPEECH", {});
                  }
                } else {
                  _this2.errors.push("Uuid does not exists. You are not able to use translation feature");

                  console.error("uuid does not exists");
                }

              case 2:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }))();
    },
    errorCallback: function errorCallback(error) {
      console.log('errorCallback:', error);
    }
  },
  created: function created() {
    var that = this;

    if (that.$route.params.uuid) {
      that.uuid = that.$route.params.uuid;
      socket.emit("join", {
        room: that.uuid
      }, function (err) {
        if (err) {
          return console.error("Join to room:", err);
        }
      });
      socket.on("SPEECH_RESULTS", function (result_data) {
        if (that.userUuid === result_data.uuid) {
          that.textResult = result_data.text;
          console.log("SPEECH2TEXT_RESULT:", that.textResult);
        }
      });
      socket.on("TEXT2SPEECH_RESULTS", /*#__PURE__*/function () {
        var _ref = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee4(result) {
          var _audioContext, audio, source;

          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee4$(_context4) {
            while (1) {
              switch (_context4.prev = _context4.next) {
                case 0:
                  if (!(that.userUuid === result.uuid)) {
                    _context4.next = 10;
                    break;
                  }

                  console.log("TEXT2SPEECH_RESULTS:", result.data);
                  _audioContext = new AudioContext();
                  _context4.next = 5;
                  return _audioContext.decodeAudioData(result.data);

                case 5:
                  audio = _context4.sent;
                  source = _audioContext.createBufferSource();
                  source.buffer = audio;
                  source.connect(_audioContext.destination);
                  source.start(0);

                case 10:
                case "end":
                  return _context4.stop();
              }
            }
          }, _callee4);
        }));

        return function (_x2) {
          return _ref.apply(this, arguments);
        };
      }());

      if (navigator.mediaDevices.getUserMedia) {
        console.log("getUserMedia supported...");
        navigator.webkitGetUserMedia({
          audio: true
        }, /*#__PURE__*/function () {
          var _ref2 = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee5(stream) {
            return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee5$(_context5) {
              while (1) {
                switch (_context5.prev = _context5.next) {
                  case 0:
                    _context5.prev = 0;
                    _context5.next = 3;
                    return that.successCallback(stream);

                  case 3:
                    _context5.next = 8;
                    break;

                  case 5:
                    _context5.prev = 5;
                    _context5.t0 = _context5["catch"](0);
                    that.errorCallback(_context5.t0);

                  case 8:
                  case "end":
                    return _context5.stop();
                }
              }
            }, _callee5, null, [[0, 5]]);
          }));

          return function (_x3) {
            return _ref2.apply(this, arguments);
          };
        }(), function (error) {
          console.log("Error-Callback:", error);
        });
      } else {
        console.log("getUserMedia not supported on your browser!");
      }
    } else {
      that.errors.push("Uuid does not exists. You are not able to use translation feature");
      console.error("uuid does not exists");
    }
  },
  beforeDestroy: function beforeDestroy() {
    scriptNode.disconnect(audioContext.destination);
    ssStream.end();
    socket.emit("STOP_SPEECH", {});
  }
});

/***/ }),

/***/ "./resources/js/mixins/meeting.js":
/*!****************************************!*\
  !*** ./resources/js/mixins/meeting.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! socket.io-client */ "./node_modules/socket.io-client/lib/index.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(socket_io_client__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var rtcmulticonnection__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rtcmulticonnection */ "./node_modules/rtcmulticonnection/dist/RTCMultiConnection.js");
/* harmony import */ var rtcmulticonnection__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(rtcmulticonnection__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _resources_public_js_recordrtc_RecordRTC_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @resources/public/js/recordrtc/RecordRTC.js */ "./resources/public/js/recordrtc/RecordRTC.js");
/* harmony import */ var _resources_public_js_recordrtc_RecordRTC_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_resources_public_js_recordrtc_RecordRTC_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _resources_public_js_adapter_latest_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @resources/public/js/adapter-latest.js */ "./resources/public/js/adapter-latest.js");
/* harmony import */ var _resources_public_js_adapter_latest_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_resources_public_js_adapter_latest_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var hark_hark_bundle_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! hark/hark.bundle.js */ "./node_modules/hark/hark.bundle.js");
/* harmony import */ var hark_hark_bundle_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(hark_hark_bundle_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var fbr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! fbr */ "./node_modules/fbr/FileBufferReader.js");
/* harmony import */ var fbr__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(fbr__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var screenfull__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! screenfull */ "./node_modules/screenfull/dist/screenfull.js");
/* harmony import */ var screenfull__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(screenfull__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _js_echo_setup__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @js/echo-setup */ "./resources/js/echo-setup.js");
/* harmony import */ var _core_utils_media__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @core/utils/media */ "./resources/js/core/utils/media.js");
/* harmony import */ var _core_utils__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @core/utils */ "./resources/js/core/utils/index.js");
/* harmony import */ var _core_utils_auth__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @core/utils/auth */ "./resources/js/core/utils/auth.js");
/* harmony import */ var _core_utils_form__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @core/utils/form */ "./resources/js/core/utils/form.js");
/* harmony import */ var _core_filters_momentz__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @core/filters/momentz */ "./resources/js/core/filters/momentz.js");
/* harmony import */ var _core_plugins_vumeter__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @core/plugins/vumeter */ "./resources/js/core/plugins/vumeter.js");
/* harmony import */ var _core_plugins_detect_duplicate_tab__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @core/plugins/detect-duplicate-tab */ "./resources/js/core/plugins/detect-duplicate-tab.js");
/* harmony import */ var _core_configs_sweet_alert__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @core/configs/sweet-alert */ "./resources/js/core/configs/sweet-alert.js");
/* harmony import */ var _api_uploader__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @api/uploader */ "./resources/js/api/uploader.js");
var _objectSpread2;

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var ebml = document.createElement('script');
ebml.setAttribute('src', '/js/EBML.js');
document.head.appendChild(ebml);



















window.io = socket_io_client__WEBPACK_IMPORTED_MODULE_1___default.a;
window.hark = hark_hark_bundle_js__WEBPACK_IMPORTED_MODULE_5___default.a;
/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    RTCMultiConnection: rtcmulticonnection__WEBPACK_IMPORTED_MODULE_2___default.a
  },
  data: function data() {
    return {
      uuid: null,
      entity: null,
      entityDatesBackup: {},
      isLoading: false,
      prevRoute: null,
      fullScreenItemId: null,
      meetingRoomId: null,
      initUrl: 'meetings',
      fallBackRoute: 'appMeetingList',
      newMessages: false,
      roomIdAlive: false,
      showFlipClock: true,
      duplicateTab: false,
      fullScreenInOn: false,
      mediaDeviceIssue: false,
      permissionRejected: false,
      needStreamAddOrReplace: false,
      membersLive: [],
      videoList: [],
      liveParticipants: [],
      mediaConfigFormData: {},
      mediaConfigurations: {
        selectedAudioInput: null,
        selectedAudioOutput: null,
        selectedVideoInput: null,
        activeAudioInput: null,
        activeVideoInput: null,
        activeFacingMode: null,
        selectedResolution: 'Auto',
        facingMode: 'auto',
        frameRate: 'auto',
        bandwidth: {
          audio: 'auto',
          video: 'auto',
          screen: 'auto',
          audioMin: 6,
          videoMin: 100,
          screenMin: 300
        },
        recording: {
          type: 'video',
          mimeType: 'video/webm',
          timeSlice: 5000,
          disableLogs: false
        }
      },
      audioBandwidthOpts: [{
        uuid: 'auto',
        label: 'Auto'
      }, {
        uuid: 64,
        label: '64 kbps'
      }, {
        uuid: 128,
        label: '128 kbps'
      }, {
        uuid: 256,
        label: '256 kbps'
      }, {
        uuid: 510,
        label: '512 kbps'
      }],
      videoBandwidthOpts: [{
        uuid: 'auto',
        label: 'Auto'
      }, {
        uuid: 128,
        label: '128 kbps'
      }, {
        uuid: 256,
        label: '256 kbps'
      }, {
        uuid: 512,
        label: '512 kbps'
      }, {
        uuid: 1024,
        label: '1 mbps'
      }, {
        uuid: 2000,
        label: '2 mbps'
      }],
      screenBandwidthOpts: [{
        uuid: 'auto',
        label: 'Auto'
      }, {
        uuid: 512,
        label: '512 kbps'
      }, {
        uuid: 1024,
        label: '1 mbps'
      }, {
        uuid: 2048,
        label: '2 mbps'
      }, {
        uuid: 3000,
        label: '3 mbps'
      }, {
        uuid: 4000,
        label: '4 mbps'
      }],
      mediaDevices: {
        audioInput: [{
          uuid: 'auto',
          name: 'Auto'
        }],
        audioOutput: [{
          uuid: 'auto',
          name: 'Auto'
        }],
        videoInput: [{
          uuid: 'auto',
          name: 'Auto'
        }],
        resolutions: [{
          label: 'Auto',
          constraints: {}
        }, {
          label: '240p',
          constraints: {
            width: {
              max: 320,
              ideal: 320
            },
            height: {
              max: 240,
              ideal: 240
            }
          }
        }, {
          label: '240p Wide',
          constraints: {
            width: {
              max: 426,
              ideal: 426
            },
            height: {
              max: 240,
              ideal: 240
            }
          },
          wide: true
        }, {
          label: '360p',
          constraints: {
            width: {
              max: 640,
              ideal: 640
            },
            height: {
              max: 480,
              ideal: 480
            }
          }
        }, {
          label: '360p Wide',
          constraints: {
            width: {
              max: 640,
              ideal: 640
            },
            height: {
              max: 360,
              ideal: 360
            }
          },
          wide: true
        }, {
          label: '720p',
          constraints: {
            width: {
              max: 960,
              ideal: 960
            },
            height: {
              max: 720,
              ideal: 720
            }
          }
        }, {
          label: '720p Wide',
          constraints: {
            width: {
              max: 1280,
              ideal: 1280
            },
            height: {
              max: 720,
              ideal: 720
            }
          },
          wide: true
        }, {
          label: '1080p',
          constraints: {
            width: {
              max: 1920,
              ideal: 1920
            },
            height: {
              max: 1080,
              ideal: 1080
            }
          }
        }, {
          label: '4K',
          constraints: {
            width: {
              max: 4096,
              ideal: 4096
            },
            height: {
              max: 2160,
              ideal: 2160
            }
          }
        }],
        facingModes: [{
          uuid: 'auto',
          label: 'Auto'
        }, {
          uuid: 'user',
          label: 'User'
        }, {
          uuid: 'environment',
          label: 'Environment'
        }],
        frameRates: [{
          uuid: 'auto',
          label: 'Auto'
        }, {
          uuid: 30,
          label: '30 fps'
        }, {
          uuid: 60,
          label: '60 fps'
        }]
      },
      socketURL: 'aHR0cHM6Ly9zaWduYWwua29kZW1pbnQuaW46OTAwMS8=',
      // socketURL: 'aHR0cDovL2xvY2FsaG9zdDo5MDAxLw==',
      rtcmConnection: null,
      localVideo: null,
      localScreenStreamid: null,
      localWhiteboardStreamid: null,
      localGreenRoomStream: null,
      audioConstraints: {},
      videoConstraints: {},
      pageConfigs: {
        hasAgenda: true,
        enableChat: true,
        enableAudio: true,
        enableVideo: true,
        showEnableAudioBtn: true,
        showEnableVideoBtn: true,
        showDeviceConfig: true,
        enableScreenSharing: true,
        enableRecording: true,
        enableAutoRecording: false,
        autoUploadRecording: false,
        autoUploadRecorded: false,
        canStopAutoRecording: false,
        recordingTimeSlice: 5000,
        enableHandGesture: true,
        enableWhiteboard: false,
        footerAutoHide: false,
        disableScroll: false,
        speechDetection: false,
        muteParticipantsOnStart: false,
        allowJoiningWithoutDevices: false,
        enableFileSharing: true,
        enableLinkSharing: true,
        enableRecogText: true,
        enableRecogVoice: true,
        enableSnapshot: false,
        anyoneCanTakeSnapshot: false,
        enableSnapshotAlert: false,
        snapshotAlertToUserOnly: false,
        snapshotAlertToModerators: false,
        askHostBeforeJoining: false,
        preferRearCameraFirst: false,
        enableUserAvatar: false,
        enableFullUserAvatar: false,
        enableMeetingInfo: false,
        forceUpdateUsername: false,
        autoEndMeeting: false,
        alertBeforeAutoEnd: false,
        canSnoozeAutoEnd: false,
        canCancelAutoEnd: false,
        alertBeforeAutoEndTime: 1,
        endTimeSnoozePeriod: 1,
        layout: 'fullpage',
        lastLayout: 'fullpage',
        maxParticipantCount: 1000
      },
      meetingRulesHost: {
        session: {
          audio: false,
          video: false,
          screen: false,
          data: false,
          oneway: false
        },
        mediaConstraints: {
          audio: false,
          video: false,
          screen: false
        },
        mandatory: {
          OfferToReceiveAudio: false,
          OfferToReceiveVideo: false
        },
        autoCloseEntireSession: false
      },
      meetingRulesGuest: {
        session: {
          audio: false,
          video: false,
          screen: false,
          data: false,
          oneway: false
        },
        mediaConstraints: {
          audio: false,
          video: false,
          screen: false
        },
        mandatory: {
          OfferToReceiveAudio: false,
          OfferToReceiveVideo: false
        },
        autoCloseEntireSession: false
      },
      snoozeOpts: [{
        uuid: 5,
        name: 5,
        type: 'm'
      }, {
        uuid: 10,
        name: 10,
        type: 'm'
      }, {
        uuid: 15,
        name: 15,
        type: 'm'
      }, {
        uuid: 30,
        name: 30,
        type: 'm'
      }, {
        uuid: 60,
        name: 1,
        type: 'h'
      }],
      isHandUp: false,
      recording: false,
      recorded: false,
      recordingPaused: false,
      recordingDuration: null,
      meetingDuration: null,
      showDevicesModal: false,
      showFileSharing: false,
      showWhiteboard: false,
      showMeetingInfo: true,
      showAgenda: true,
      fileSharingConnection: null,
      canvasDesigner: null,
      autoEndingToast: null,
      stopNavigation: false,
      hasNativeShare: !!navigator.share,
      stopNavigationMessage: '',
      recordedFilesToUpload: [],
      micVolumeActivity: 20,
      alreadyAcceptedParticipants: {},
      autoTranslate: null
    };
  },
  computed: _objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])('config', ['configs', 'uiConfigs', 'vars'])), {}, {
    user: function user() {
      return {
        uuid: this.userUuid,
        username: this.username,
        name: this.profile.name
      };
    },
    hasVideos: function hasVideos() {
      return this.videoList && this.videoList.length > 0 ? this.videoList.length : 0;
    },
    // videos() {
    //     return this.videoList
    // },
    hasVideosClasses: function hasVideosClasses() {
      if (!this.hasVideos) {
        return 'has-no-video';
      }

      var toReturn = 'has-videos ' + (this.pageConfigs.disableScroll ? 'disable-scroll ' : '') + "has-".concat(this.hasVideos, "-videos ");
      var rows = this.hasVideos > 15 ? 4 : this.hasVideos > 8 ? 3 : this.hasVideos > 3 ? 2 : 1;
      var itemPerRows = this.hasVideos > 20 ? 6 : this.hasVideos === 16 ? 4 : this.hasVideos > 12 ? 5 : this.hasVideos > 9 ? 4 : this.hasVideos === 9 ? 3 : this.hasVideos > 6 ? 4 : this.hasVideos > 4 ? 3 : this.hasVideos === 4 ? 2 : this.hasVideos;
      return toReturn + (this.hasVideos > 20 ? 'has-gt-20-videos' : this.hasVideos > 12 ? 'has-gt-12-videos' : this.hasVideos > 4 ? 'has-gt-4-videos' : this.hasVideos > 1 ? 'has-2-3-videos' : 'has-1-video') + " has-".concat(rows, "-rows has-").concat(itemPerRows, "-per-row");
    },
    liveMembersCount: function liveMembersCount() {
      return this.membersLive.length - 1;
    },
    startDateTimeIsFuture: function startDateTimeIsFuture() {
      var isInFuture = this.entity && this.showFlipClock && this.isStartDateTimeInFuture();

      if (isInFuture) {
        this.startCountDown();
      } else {
        if (window.countdownInterval) {
          clearInterval(window.countdownInterval);
        }
      }

      return isInFuture;
    },
    enableLogs: function enableLogs() {
      return this.rtcmConnection && this.rtcmConnection.enableLogs || this.configs.meeting.debugMode;
    },
    participantCount: function participantCount() {
      return this.liveParticipants.length + 1;
    },
    coverPageStyles: function coverPageStyles() {
      return this.entity && this.entity.cover && this.hasVideos ? {
        backgroundImage: 'url(' + this.entity.cover + ')'
      } : {};
    }
  }),
  watch: {
    liveMembersCount: function liveMembersCount(newVal, oldVal) {
      if (!window.isLiveMeetingDestroyed && newVal !== oldVal) {
        this.meetingRoomCreated(this.entity);
      }
    }
  },
  methods: _objectSpread(_objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapActions"])('config', ['SetUiConfig'])), Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapActions"])('common', ['Init', 'Get', 'Custom', 'GetPreRequisite'])), {}, (_objectSpread2 = {
    stopAutoEndMeeting: function stopAutoEndMeeting() {
      if (window.autoEndMeetingTimeout) {
        clearTimeout(window.autoEndMeetingTimeout);
        window.autoEndMeetingTimeout = null;
      }

      if (this.autoEndingToast && this.autoEndingToast.close && _.isFunction(this.autoEndingToast.close)) {
        _core_configs_sweet_alert__WEBPACK_IMPORTED_MODULE_17__["swtToast"].close();
        this.autoEndingToast = null;
      }
    },
    startAutoEndMeeting: function startAutoEndMeeting() {
      var _this = this;

      var toEndIn = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 300;

      //300 seconds
      if (window.autoEndMeetingTimeout) {
        clearTimeout(window.autoEndMeetingTimeout);
        window.autoEndMeetingTimeout = null;
      }

      window.autoEndMeetingTimeout = setTimeout(function () {
        if (_this.entity.canModerate) {
          _this.endMeeting(false);
        } else {
          _this.getOffline();
        }
      }, 1000 * toEndIn); //1000*toEndIn
    },
    startMeetingTimer: function startMeetingTimer() {
      var _this2 = this;

      if (window.meetingDurationInterval) {
        this.meetingDuration = null;
        clearInterval(window.meetingDurationInterval);
      }

      if (!this.entity || this.entity.status !== 'live') {
        return;
      }

      var checkAutoEndMeeting = function checkAutoEndMeeting() {
        if (!_this2.entity || _this2.entity.status !== 'live') {
          _this2.stopAutoEndMeeting();

          _this2.stopMeetingTimer();

          return;
        }

        if (_this2.pageConfigs.autoEndMeeting && _this2.entity.estimatedEndTime) {
          var autoEndTimeAlert = _this2.pageConfigs.alertBeforeAutoEndTime || 5; //in minutes

          var estimatedEndTime = moment(_this2.entity.estimatedEndTime, _this2.vars.serverDateTimeFormat);
          var timeRightNow = _core_filters_momentz__WEBPACK_IMPORTED_MODULE_14__["now"]({
            moment: true
          });
          var toEndIn = ((estimatedEndTime.valueOf() - timeRightNow.valueOf()) / 1000).toFixed(0);

          if (toEndIn <= 0) {
            if (window.autoEndMeetingTimeout) {
              clearInterval(window.autoEndMeetingTimeout);
              window.autoEndMeetingTimeout = null;
            }

            if (_this2.entity.canModerate) {
              _this2.endMeeting(false);
            } else {
              _this2.getOffline();
            }
          } else if (toEndIn <= autoEndTimeAlert * 60) {
            var toEndInTime = Object(_core_utils__WEBPACK_IMPORTED_MODULE_11__["calculateTimeDuration"])(toEndIn) + ' ' + $t('list.general.durations.seconds');

            if (toEndIn >= 60) {
              toEndInTime = Object(_core_utils__WEBPACK_IMPORTED_MODULE_11__["calculateTimeDuration"])(toEndIn) + ' ' + $t('list.general.durations.minutes');
            } else if (toEndIn >= 3600) {
              toEndInTime = Object(_core_utils__WEBPACK_IMPORTED_MODULE_11__["calculateTimeDuration"])(toEndIn) + ' ' + $t('list.general.durations.hours');
            }

            if (_this2.pageConfigs.alertBeforeAutoEnd) {
              if (window.autoEndMeetingTimeout && _this2.autoEndingToast && _core_configs_sweet_alert__WEBPACK_IMPORTED_MODULE_17__["Swal"].isVisible() && _core_configs_sweet_alert__WEBPACK_IMPORTED_MODULE_17__["Swal"].isTimerRunning()) {
                _core_configs_sweet_alert__WEBPACK_IMPORTED_MODULE_17__["swtToast"].update({
                  title: $t('meeting.auto_ending_msg', {
                    attribute: toEndInTime
                  })
                });
              } else {
                if (!_this2.autoEndingToast && _core_configs_sweet_alert__WEBPACK_IMPORTED_MODULE_17__["Swal"].isVisible()) {
                  return;
                }

                if (_this2.autoEndingToast && _this2.autoEndingToast.close && _.isFunction(_this2.autoEndingToast.close)) {
                  _core_configs_sweet_alert__WEBPACK_IMPORTED_MODULE_17__["swtToast"].close();
                  _this2.autoEndingToast = null;
                }

                if (_this2.entity.canModerate) {
                  var toastObj = {
                    iconHtml: '<i class="far fa-clock"></i>',
                    title: $t('meeting.auto_ending_msg', {
                      attribute: toEndInTime
                    }),
                    timer: toEndIn * 1000,
                    showConfirmButton: false,
                    showDenyButton: false,
                    position: 'bottom'
                  };

                  if (_this2.pageConfigs.canSnoozeAutoEnd) {
                    toastObj.showConfirmButton = true;
                    toastObj.confirmButtonText = $t('meeting.snooze');
                  }

                  if (_this2.pageConfigs.canCancelAutoEnd) {
                    toastObj.showDenyButton = true;
                    toastObj.denyButtonText = $t('meeting.keep_meeting_live');
                  }

                  _this2.autoEndingToast = _core_configs_sweet_alert__WEBPACK_IMPORTED_MODULE_17__["swtToast"].fire(toastObj).then(function (result) {
                    if (result.isConfirmed && _this2.pageConfigs.canSnoozeAutoEnd) {
                      _this2.stopAutoEndMeeting();

                      _this2.entity.estimatedEndTime = moment(_this2.entity.estimatedEndTime, _this2.vars.serverDateTimeFormat).add(10, 'minutes').format(_this2.vars.serverDateTimeFormat);

                      _this2.meetingAction('snooze-end-time', {
                        period: _this2.pageConfigs.endTimeSnoozePeriod || 5
                      }, {
                        alert: false,
                        inform: {
                          endTimeSnoozed: true
                        }
                      });

                      _core_configs_sweet_alert__WEBPACK_IMPORTED_MODULE_17__["swtToast"].close();
                      _this2.autoEndingToast = null;
                    } else if (result.isDenied && _this2.pageConfigs.canCancelAutoEnd) {
                      _this2.stopAutoEndMeeting();

                      _this2.pageConfigs.autoEndMeeting = false;

                      _this2.meetingAction('cancel-auto-end', null, {
                        alert: false,
                        inform: {
                          autoEndCancelled: true
                        }
                      });

                      _core_configs_sweet_alert__WEBPACK_IMPORTED_MODULE_17__["swtToast"].close();
                      _this2.autoEndingToast = null;
                    }
                  });
                } else {
                  _this2.autoEndingToast = _core_configs_sweet_alert__WEBPACK_IMPORTED_MODULE_17__["swtToast"].fire({
                    iconHtml: '<i class="far fa-clock"></i>',
                    title: $t('meeting.auto_ending_msg', {
                      attribute: toEndInTime
                    }),
                    timer: toEndIn * 1000,
                    showConfirmButton: false,
                    position: 'bottom'
                  });
                }
              }
            }

            if (!(window.autoEndMeetingTimeout && _this2.autoEndingToast)) {
              _this2.stopAutoEndMeeting();

              _this2.startAutoEndMeeting(toEndIn);
            }
          } else if (toEndIn > autoEndTimeAlert * 60) {
            if (_this2.autoEndingToast && _this2.autoEndingToast.close && _.isFunction(_this2.autoEndingToast.close)) {
              _core_configs_sweet_alert__WEBPACK_IMPORTED_MODULE_17__["swtToast"].close();
              _this2.autoEndingToast = null;
            }
          } else {
            _this2.stopAutoEndMeeting();
          }
        }
      };

      var meetingStartedAt = moment(this.entity.startedAt, this.vars.serverDateTimeFormat).valueOf();
      window.meetingDurationInterval = window.setInterval(function () {
        var timeNow = _core_filters_momentz__WEBPACK_IMPORTED_MODULE_14__["now"]({
          moment: true
        }).valueOf();
        _this2.meetingDuration = Object(_core_utils__WEBPACK_IMPORTED_MODULE_11__["calculateTimeDuration"])((timeNow - meetingStartedAt) / 1000);
        checkAutoEndMeeting();
      }, 1000);
    },
    stopMeetingTimer: function stopMeetingTimer() {
      if (window.meetingDurationInterval) {
        this.meetingDuration = null;
        clearInterval(window.meetingDurationInterval);
      }
    },
    configPageUrl: function configPageUrl() {
      var routeData = this.$router.resolve({
        name: 'appMeetingSingleConfig',
        params: {
          subUuid: this.uuid
        }
      });
      return routeData.href;
    },
    snapshotsPageUrl: function snapshotsPageUrl() {
      var routeData = this.$router.resolve({
        name: 'appMeetingSnapshots',
        params: {
          uuid: this.uuid
        }
      });
      return routeData.href;
    },
    recordingsPageUrl: function recordingsPageUrl() {
      var routeData = this.$router.resolve({
        name: 'appMeetingRecordings',
        params: {
          uuid: this.uuid
        }
      });
      return routeData.href;
    },
    share: function share() {
      this.shareURL(null, true);
    },
    shareURL: function shareURL(event) {
      var _this3 = this;

      var forceNativeShare = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

      if (!this.entity) {
        return;
      }

      this.$gaEvent('engagement', 'shareURL', 'Shown');
      var url = window.location.protocol + '//' + window.location.hostname + (window.location.port ? ':' + window.location.port : '');
      url = url + (this.entity.identifier ? "/m/".concat(this.entity.identifier) : "/app/live/meetings/".concat(this.entity.uuid));
      var alertTitle = this.entity.identifier ? "<span class=\"text-nowrap\">".concat($t('meeting.meeting_code'), ":</span> <strong class=\"ml-2 text-wrap-pre-line text-word-break-all\"> ").concat(this.entity.identifier, "</strong>") : null;
      Object(_core_utils_media__WEBPACK_IMPORTED_MODULE_10__["share"])({
        title: $t('meeting.user_inviting_msg', {
          attribute: this.user.name
        }),
        alertTitle: alertTitle,
        alertHtml: "".concat($t('misc.share_alert.text'), "<br>") + "<small class='text-muted'>".concat(url, "</small><br>"),
        url: url
      }, function () {
        _this3.$gaEvent('engagement', 'shareURL', 'Copied');

        _this3.$toasted.success($t('meeting.url_has_been_copied'), _this3.$toastConfig);
      }, forceNativeShare);
    },
    // query / countdown / timer methods
    isStartDateTimeInFuture: function isStartDateTimeInFuture() {
      return this.entity && this.entity.startDateTime && moment(this.entity.startDateTime, this.vars.serverDateTimeFormat).isAfter(_core_filters_momentz__WEBPACK_IMPORTED_MODULE_14__["now"]({
        moment: true
      }));
    },
    startCountDown: function startCountDown() {
      var _this4 = this;

      if (window.countdownInterval) {
        clearInterval(window.countdownInterval);
      }

      window.countdownInterval = window.setInterval(function () {
        if (_this4.isStartDateTimeInFuture()) {
          _this4.showFlipClock = true;
        } else {
          if (_this4.showFlipClock && !document.hasFocus()) {
            Object(_core_utils_media__WEBPACK_IMPORTED_MODULE_10__["playIncomingMessage"])();
          }

          _this4.showFlipClock = false;
        }
      }, 1000);
    },
    stopKeepAlivePolling: function stopKeepAlivePolling() {
      if (window.meetingKeepAliveTimer) {
        clearInterval(window.meetingKeepAliveTimer);
        window.meetingKeepAliveTimer = null;
      }
    },
    startKeepAlivePolling: function startKeepAlivePolling() {
      var _this5 = this;

      if (window.meetingKeepAliveTimer) {
        clearInterval(window.meetingKeepAliveTimer);
        window.meetingKeepAliveTimer = null;
      }

      if (!this.entity || this.entity.status !== 'live') {
        return;
      }

      window.meetingKeepAliveTimer = setInterval(function () {
        _this5.Custom({
          url: "/".concat(_this5.initUrl, "/").concat(_this5.uuid, "/keep-alive"),
          method: 'post',
          silent: true
        }).then(function (response) {})["catch"](function (error) {});
      }, 300000); //1000*60*5 = 5 minutes
    },
    takeSnapshotOfStream: function takeSnapshotOfStream(item, itemIndex) {
      var _this6 = this;

      if (!(this.pageConfigs.enableSnapshot && (this.entity.canModerate || this.pageConfigs.anyoneCanTakeSnapshot))) {
        return;
      }

      this.$gaEvent('engagement', 'takeSnapshot');
      var image = this.takeSnapshot(this.$refs.videos[itemIndex], !item.disableMirror);
      var name = "".concat(item.extra.username, " stream by ").concat(this.username);
      this.Custom({
        url: "/".concat(this.initUrl, "/").concat(this.uuid, "/snapshots"),
        method: 'post',
        data: {
          image: image,
          name: name
        }
      }).then(function (response) {
        _this6.$toasted.info($t('meeting.snapshot_taken'), _objectSpread(_objectSpread({}, _this6.$toastConfig.info), {}, {
          duration: 10000,
          icon: {
            name: 'fa-download'
          },
          action: {
            text: 'View / Download',
            href: response.fullUrl,
            target: '_blank'
          }
        }));
      })["catch"](function (error) {
        _this6.isLoading = false;
        formUtil.handleErrors(error);
      });
      this.informAboutSnapshot(item);
      Object(_core_utils_media__WEBPACK_IMPORTED_MODULE_10__["playScreenshot"])();
    },
    takeSnapshot: function takeSnapshot(video, enableMirror) {
      var canvas = document.createElement('canvas');
      canvas.width = (video.videoWidth || video.clientWidth) * 2;
      canvas.height = (video.videoHeight || video.clientHeight) * 2;
      var context = canvas.getContext('2d');

      if (this.configs.meeting && this.configs.meeting.mirroredVideo && enableMirror) {
        context.translate(canvas.width, 0);
        context.scale(-1, 1);
      }

      context.drawImage(video, 0, 0, canvas.width, canvas.height);
      return canvas.toDataURL('image/png');
    },
    informAboutSnapshot: function informAboutSnapshot(item) {
      if (this.pageConfigs.enableSnapshotAlert) {
        this.emitSocketEvents('snapshotTaken', {
          byUser: this.user,
          ofUser: item.extra,
          item: item
        });
      }
    },
    informAboutMeetingUpdate: function informAboutMeetingUpdate(data) {
      this.emitSocketEvents('meetingUpdated', {
        data: data
      });
    },
    checkPendingUploads: _.throttle(function () {
      var uploadsPending = this.recordedFilesToUpload.filter(function (obj) {
        return obj.status === 'waiting' || obj.status === 'uploading';
      });

      if (uploadsPending.length) {
        this.stopNavigation = true;
        this.stopNavigationMessage = $t('meeting.uploads_pending_message');
      } else {
        this.stopNavigation = false;
        this.stopNavigationMessage = '';
      }

      this.uploadRecording();
    }, 500, {
      'leading': true,
      'trailing': false
    }),
    uploadRecording: function uploadRecording(data) {
      var _this7 = this;

      var startUploading = _.throttle(function () {
        var filesToUpload = _this7.recordedFilesToUpload.filter(function (obj) {
          return obj.status === 'waiting' && obj.chunk;
        });

        var filesBeingUploaded = _this7.recordedFilesToUpload.filter(function (obj) {
          return obj.status === 'uploading' && obj.chunk;
        });

        if (filesToUpload.length) {
          var onUploadProgressArr = [];
          var CancelToken = axios__WEBPACK_IMPORTED_MODULE_8___default.a.CancelToken;
          var maxRequestSlot = 5;
          var freeRequestSlot = maxRequestSlot - filesBeingUploaded.length;

          var _loop = function _loop(i) {
            var uploadObj = _this7.recordedFilesToUpload[i];

            onUploadProgressArr[i] = function (progressEvent) {
              uploadObj.progress = Math.round(progressEvent.loaded * 100 / progressEvent.total);
            };

            if (uploadObj.status === 'waiting') {
              freeRequestSlot = freeRequestSlot - 1;
              var formData = new FormData();
              formData.append('file', uploadObj.blob);
              formData.append('mime', uploadObj.mime);
              formData.append('request_uuid', uploadObj.requestUuid);
              formData.append('order', uploadObj.order);
              formData.append('chunk', uploadObj.chunk);
              uploadObj.status = 'uploading';
              var cancelToken = new CancelToken(function (c) {
                uploadObj.cancel = c;
              });
              _api_uploader__WEBPACK_IMPORTED_MODULE_18__["uploadFile"]({
                url: "/".concat(_this7.initUrl, "/").concat(_this7.uuid, "/recordings"),
                data: formData,
                silent: true
              }, onUploadProgressArr[i], cancelToken).then(function (response) {
                uploadObj.status = 'uploaded';
                delete uploadObj.cancel;

                _this7.checkPendingUploads();

                setTimeout(function () {
                  delete _this7.recordedFilesToUpload.splice(_this7.recordedFilesToUpload.findIndex(function (f) {
                    return f.uuid === uploadObj.uuid;
                  }), 1);

                  _this7.checkPendingUploads();
                }, 3000);
              })["catch"](function (thrown) {
                if (thrown.response && thrown.response.data) {
                  var _data = thrown.response.data || {};

                  var errors = _data.errors ? formUtil.assignErrors(_data.errors) : {};
                  uploadObj.error = errors.message;
                  uploadObj.status = 'error'; // this.$toasted.error(errors.message, this.$toastConfig.error)
                  // setTimeout(() => {
                  //     delete this.recordedFilesToUpload.splice(this.recordedFilesToUpload.findIndex(f => f.uuid === uploadObj.uuid), 1)
                  // }, 3000)
                } else {
                  uploadObj.status = 'cancelled'; // setTimeout(() => {
                  // delete this.recordedFilesToUpload.splice(this.recordedFilesToUpload.findIndex(f => f.uuid === uploadObj.uuid), 1);
                  // }, 3000)
                }

                _this7.checkPendingUploads();
              });
            }
          };

          for (var i = _this7.recordedFilesToUpload.length - 1; i >= 0 && freeRequestSlot > 0; i--) {
            _loop(i);
          }
        }
      }, 1000, {
        'leading': true,
        'trailing': false
      });

      if (!data || !data.uuid) {
        startUploading();
        return;
      }

      var recordedFileName = ($t('meeting.meeting_recording') + '-' + _core_filters_momentz__WEBPACK_IMPORTED_MODULE_14__["now"]({
        moment: true
      }).unix()).kebabCase() + ".webm";

      if (!this.recordedFilesToUpload) {
        this.recordedFilesToUpload = [];
      }

      this.recordedFilesToUpload.unshift({
        uuid: uuid(),
        chunk: data.chunk,
        blob: data.blob,
        mime: data.blob.type,
        requestUuid: data.uuid,
        order: data.order,
        status: 'waiting',
        name: recordedFileName,
        progress: 0,
        error: null
      });
      startUploading();
      this.checkPendingUploads();
    },
    uploadRecorded: function uploadRecorded(blob, recorderInstance, recordedFileName) {
      var _this8 = this;

      var startUploading = function startUploading() {
        var filesToUpload = _this8.recordedFilesToUpload.filter(function (obj) {
          return obj.status === 'waiting' && !obj.chunk;
        });

        if (filesToUpload.length) {
          var onUploadProgressArr = [];
          var CancelToken = axios__WEBPACK_IMPORTED_MODULE_8___default.a.CancelToken;

          var _loop2 = function _loop2(i) {
            var uploadObj = _this8.recordedFilesToUpload[i];
            uploadObj.download = downloadRecorded;

            onUploadProgressArr[i] = function (progressEvent) {
              uploadObj.progress = Math.round(progressEvent.loaded * 100 / progressEvent.total);
            };

            if (uploadObj.status === 'waiting') {
              var formData = new FormData();
              formData.append('file', uploadObj.file);
              formData.append('mime', uploadObj.file.type);
              formData.append('request_uuid', uploadObj.uuid);
              uploadObj.status = 'uploading';
              var cancelToken = new CancelToken(function (c) {
                uploadObj.cancel = c;
              });
              _api_uploader__WEBPACK_IMPORTED_MODULE_18__["uploadFile"]({
                url: "/".concat(_this8.initUrl, "/").concat(_this8.uuid, "/recordings"),
                data: formData,
                silent: true
              }, onUploadProgressArr[i], cancelToken).then(function (response) {
                uploadObj.status = 'uploaded';
                delete uploadObj.cancel;

                _this8.checkPendingUploads();

                setTimeout(function () {
                  delete _this8.recordedFilesToUpload.splice(_this8.recordedFilesToUpload.findIndex(function (f) {
                    return f.uuid === uploadObj.uuid;
                  }), 1);

                  _this8.checkPendingUploads();
                }, 3000);
              })["catch"](function (thrown) {
                if (thrown.response && thrown.response.data) {
                  var data = thrown.response.data || {};
                  var errors = data.errors ? formUtil.assignErrors(data.errors) : {};
                  uploadObj.error = errors.message;
                  uploadObj.status = 'error';

                  _this8.$toasted.error(errors.message, _this8.$toastConfig.error); // setTimeout(() => {
                  // delete this.recordedFilesToUpload.splice(this.recordedFilesToUpload.findIndex(f => f.uuid === uploadObj.uuid), 1)
                  // }, 3000)

                } else {
                  uploadObj.status = 'cancelled'; // setTimeout(() => {
                  // delete this.recordedFilesToUpload.splice(this.recordedFilesToUpload.findIndex(f => f.uuid === uploadObj.uuid), 1);
                  // }, 3000)
                }

                _this8.checkPendingUploads();
              });
            }
          };

          for (var i = _this8.recordedFilesToUpload.length - 1; i >= 0; i++) {
            _loop2(i);
          }
        }
      };

      var downloadRecorded = function downloadRecorded(seekableBlob) {
        var recordedVideo = URL.createObjectURL(seekableBlob);
        var downloadLinkBtn = document.createElement("a");
        _resources_public_js_recordrtc_RecordRTC_js__WEBPACK_IMPORTED_MODULE_3__["invokeSaveAsDialog"](seekableBlob, recordedFileName);
        downloadLinkBtn.style.display = "none";
        downloadLinkBtn.href = recordedVideo;
        downloadLinkBtn.download = recordedFileName;
        document.body.appendChild(downloadLinkBtn); // downloadLinkBtn.click()

        setTimeout(function () {
          document.body.removeChild(downloadLinkBtn);
          window.URL.revokeObjectURL(downloadLinkBtn);
          _this8.recorded = false;
        }, 100);
      };

      var recFormat = this.mediaConfigurations.recording && this.mediaConfigurations.recording.mimeType ? this.mediaConfigurations.recording.mimeType : 'video/webm'; // we need to upload "File" --- not "Blob"

      var fileObject = new File([blob], recordedFileName, {
        type: recFormat
      });

      if (fileObject.size > this.configs.system.postMaxSize) {
        this.$toasted.error(this.$t('global.file_too_large', {
          attribute: fileObject.name
        }), this.$toastConfig.error);
      } else {
        if (!this.recordedFilesToUpload) {
          this.recordedFilesToUpload = [];
        }

        this.recordedFilesToUpload.unshift({
          uuid: uuid(),
          chunk: false,
          blob: blob,
          file: fileObject,
          status: 'waiting',
          progress: 0,
          error: null
        });
        startUploading();
      }

      this.checkPendingUploads();
      recorderInstance.reset();
      recorderInstance = null;

      if (this.rtcmConnection) {
        this.rtcmConnection.recorder = null;
      }
    },
    startRecording: function startRecording() {
      var _this9 = this;

      this.$gaEvent('engagement', 'startRecording');

      if (!(this.pageConfigs.enableRecording && this.entity.canModerate)) {
        return;
      }

      this.recording = true;
      this.recorded = false;

      if (this.configs.meeting.debugMode) {
        this.mediaConfigurations.recording.disableLogs = false;
      } else {
        this.mediaConfigurations.recording.disableLogs = true;
      }

      var recorderInstance = this.rtcmConnection.recorder;

      if (recorderInstance) {
        return;
      }

      var streamsToRecord = [];
      var blobs = [];
      var recordingUuid = uuid();
      this.rtcmConnection.streamEvents.selectAll().forEach(function (streamEvent) {
        streamsToRecord.push(streamEvent.stream);
      });

      if (this.pageConfigs.autoUploadRecording) {
        this.mediaConfigurations.recording.ondataavailable = function (blob) {
          blobs.push(blob);

          _this9.uploadRecording({
            uuid: recordingUuid,
            chunk: true,
            blob: blob,
            order: blobs.length
          });
        };
      }

      recorderInstance = _resources_public_js_recordrtc_RecordRTC_js__WEBPACK_IMPORTED_MODULE_3__(streamsToRecord, this.mediaConfigurations.recording);
      this.rtcmConnection.recorder = recorderInstance;
      recorderInstance.startRecording();
      var recordingStartedAt = new Date().getTime();

      if (window.recordingDurationInterval) {
        this.recordingDuration = null;
        clearInterval(window.recordingDurationInterval);
      }

      window.recordingDurationInterval = window.setInterval(function () {
        _this9.recordingDuration = Object(_core_utils__WEBPACK_IMPORTED_MODULE_11__["calculateTimeDuration"])((new Date().getTime() - recordingStartedAt) / 1000);
      }, 1000);
      recorderInstance = null;
    },
    pauseRecording: function pauseRecording() {
      this.$gaEvent('engagement', 'pauseRecording');
      this.recordingPaused = true;
      var recorderInstance = this.rtcmConnection.recorder;

      if (!recorderInstance) {
        return alert('No recorder found!');
      }

      recorderInstance.pauseRecording();

      if (window.recordingDurationInterval) {
        clearInterval(window.recordingDurationInterval);
      }

      recorderInstance = null;
    },
    resumeRecording: function resumeRecording() {
      var _this10 = this;

      this.$gaEvent('engagement', 'resumeRecording');
      this.recordingPaused = false;
      var recorderInstance = this.rtcmConnection.recorder;

      if (!recorderInstance) {
        return alert('No recorder found!');
      }

      recorderInstance.resumeRecording();
      var recordingResumedAt = new Date().getTime();
      var recordingDurationBeforePaused = Object(_core_utils__WEBPACK_IMPORTED_MODULE_11__["hmsToSeconds"])(this.recordingDuration || '00:00');

      if (window.recordingDurationInterval) {
        clearInterval(window.recordingDurationInterval);
      }

      window.recordingDurationInterval = window.setInterval(function () {
        _this10.recordingDuration = Object(_core_utils__WEBPACK_IMPORTED_MODULE_11__["calculateTimeDuration"])(recordingDurationBeforePaused + (new Date().getTime() - recordingResumedAt) / 1000);
      }, 1000);
      recorderInstance = null;
    },
    stopRecording: function stopRecording() {
      var _this11 = this;

      this.$gaEvent('engagement', 'stopRecording');
      this.checkPendingUploads();
      this.recording = false;
      this.recorded = true;
      var recorderInstance = this.rtcmConnection.recorder;

      if (!recorderInstance) {
        return alert('No recorder found!');
      }

      recorderInstance.stopRecording(function () {
        if (window.recordingDurationInterval) {
          _this11.recordingDuration = null;
          clearInterval(window.recordingDurationInterval);
          window.recordingDurationInterval = null;
        }

        var recordedFileName = ($t('meeting.meeting_recording') + '-' + _core_filters_momentz__WEBPACK_IMPORTED_MODULE_14__["now"]({
          moment: true
        }).unix()).kebabCase() + ".webm";
        _resources_public_js_recordrtc_RecordRTC_js__WEBPACK_IMPORTED_MODULE_3__["getSeekableBlob"](recorderInstance.getBlob(), function (seekableBlob) {
          _this11.checkPendingUploads();

          if (!_this11.pageConfigs.autoUploadRecording) {
            if (_this11.pageConfigs.autoUploadRecorded) {
              _this11.uploadRecorded(seekableBlob, recorderInstance, recordedFileName);
            } else {
              swtAlert.fire({
                title: $t('meeting.recorded_meeting'),
                allowOutsideClick: false,
                allowEscapeKey: false,
                position: 'bottom',
                showDenyButton: true,
                showCancelButton: true,
                confirmButtonText: "<i class=\"fas fa-download\"></i> ".concat($t('general.download')),
                denyButtonText: "<i class=\"fas fa-upload\"></i> ".concat($t('general.upload')),
                cancelButtonText: "".concat($t('general.cancel')),
                customClass: {
                  confirmButton: 'btn btn-success',
                  cancelButton: 'btn btn-danger',
                  denyButton: 'btn btn-primary'
                }
              }).then(function (result) {
                if (result.isConfirmed) {
                  var recordedVideo = URL.createObjectURL(seekableBlob);
                  var downloadLinkBtn = document.createElement("a");
                  _resources_public_js_recordrtc_RecordRTC_js__WEBPACK_IMPORTED_MODULE_3__["invokeSaveAsDialog"](seekableBlob, recordedFileName);
                  downloadLinkBtn.style.display = "none";
                  downloadLinkBtn.href = recordedVideo;
                  downloadLinkBtn.download = recordedFileName;
                  document.body.appendChild(downloadLinkBtn); // downloadLinkBtn.click()

                  setTimeout(function () {
                    document.body.removeChild(downloadLinkBtn);
                    window.URL.revokeObjectURL(downloadLinkBtn);
                    _this11.recorded = false;
                  }, 100);
                  recorderInstance.reset();
                  recorderInstance = null;

                  if (_this11.rtcmConnection) {
                    _this11.rtcmConnection.recorder = null;
                  }

                  _this11.checkPendingUploads();
                } else if (result.isDenied) {
                  _this11.uploadRecorded(seekableBlob, recorderInstance, recordedFileName);

                  _this11.checkPendingUploads();
                } else {
                  result.dismiss === _core_configs_sweet_alert__WEBPACK_IMPORTED_MODULE_17__["Swal"].DismissReason.cancel;
                  recorderInstance.reset();
                  recorderInstance = null;

                  if (_this11.rtcmConnection) {
                    _this11.rtcmConnection.recorder = null;
                  }

                  _this11.checkPendingUploads();

                  return;
                }
              });
            }
          } else {
            recorderInstance.reset();
            recorderInstance = null;

            if (_this11.rtcmConnection) {
              _this11.rtcmConnection.recorder = null;
            }
          }

          _this11.checkPendingUploads();
        });
      });
    },
    // toggle methods
    toggleHandUp: function toggleHandUp() {
      var _this12 = this;

      this.$gaEvent('engagement', 'toggleHandUp');

      if (window.lowerHandTimer) {
        clearTimeout(window.lowerHandTimer);
        window.lowerHandTimer = null;
      }

      var found = this.$refs.videos.find(function (video) {
        return video.id === _this12.localVideo.id;
      });
      var videoIndex = this.videoList.findIndex(function (video) {
        return video.id === _this12.localVideo.id;
      });

      if (found && found.srcObject) {
        var stream = found.srcObject;
        this.isHandUp = !this.isHandUp;
        this.videoList[videoIndex].isHandUp = this.isHandUp;
        this.emitSocketEvents('remoteHandToggled', {
          isHandUp: this.isHandUp,
          streamid: stream.streamid
        });

        if (this.isHandUp) {
          window.lowerHandTimer = setTimeout(function () {
            _this12.toggleHandUp();
          }, 30000);
        }

        this.rtcmConnection.extra.isHandUp = this.isHandUp;
        this.updateExtraData();
      } else {
        this.localVideo = null;
      }
    },
    toggleAudio: function toggleAudio(event) {
      var _this13 = this;

      var forceMute = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      this.pageConfigs.enableAudio = forceMute ? false : !this.pageConfigs.enableAudio;

      if (this.rtcmConnection) {
        this.rtcmConnection.extra.audioMuted = !this.pageConfigs.enableAudio;
        this.updateExtraData();
      }

      if (!(this.$refs.videos && this.$refs.videos.length)) {
        this.setupGreenRoom();
        return;
      }

      var found = this.$refs.videos.find(function (video) {
        return video.id === _this13.localVideo.id;
      });
      var videoIndex = this.videoList.findIndex(function (video) {
        return video.id === _this13.localVideo.id;
      });

      if (found && found.srcObject) {
        var stream = found.srcObject;
        var tracks = stream.getAudioTracks();
        tracks.forEach(function (track) {
          if (_this13.pageConfigs.enableAudio) {
            track.enabled = true;
            _this13.videoList[videoIndex].audioMuted = false;
          } else {
            track.enabled = false;
            _this13.videoList[videoIndex].audioMuted = true;
          }
        });
        this.emitSocketEvents('remoteMutedUnmuted', {
          audioEnabled: this.pageConfigs.enableAudio,
          streamid: stream.streamid
        });
      } else {
        this.localVideo = null;
      }
    },
    toggleVideo: function toggleVideo() {
      var _this14 = this;

      this.pageConfigs.enableVideo = !this.pageConfigs.enableVideo;

      if (this.rtcmConnection) {
        this.rtcmConnection.extra.videoMuted = !this.pageConfigs.enableVideo;
        this.updateExtraData();
      }

      if (!(this.$refs.videos && this.$refs.videos.length)) {
        this.setupGreenRoom();
        return;
      }

      var found = this.$refs.videos.find(function (video) {
        return video.id === _this14.localVideo.id;
      });
      var videoIndex = this.videoList.findIndex(function (video) {
        return video.id === _this14.localVideo.id;
      });

      if (found && found.srcObject) {
        var stream = found.srcObject;
        var tracks = stream.getVideoTracks();
        tracks.forEach(function (track) {
          if (_this14.pageConfigs.enableVideo) {
            track.enabled = true;
            _this14.videoList[videoIndex].videoMuted = false;
          } else {
            track.enabled = false;
            _this14.videoList[videoIndex].videoMuted = true;
          }
        });
        this.emitSocketEvents('remoteMutedUnmuted', {
          videoEnabled: this.pageConfigs.enableVideo,
          streamid: stream.streamid
        });
      } else {
        this.localVideo = null;
      }
    },
    toggleRemoteAudio: function toggleRemoteAudio(videoItem, itemIndex) {
      if (videoItem.muted) {
        this.videoList[itemIndex].muted = false;
        this.$refs.videos[itemIndex].muted = false;
      } else {
        this.videoList[itemIndex].muted = true;
        this.$refs.videos[itemIndex].muted = true;
      }
    },
    toggleRemoteAudioSource: function toggleRemoteAudioSource(item, itemIndex) {
      this.emitSocketEvents('muteUnmuteRemote', item);
    },
    toggleEleFullScreen: function toggleEleFullScreen(videoItem, itemIndex) {
      var _this15 = this;

      var targetParentEl = this.$refs['videoListEle'];
      this.fullScreenItemId = videoItem.id;
      this.$fullscreen.toggle(targetParentEl, {
        wrap: false,
        callback: function callback(fullscreen) {
          _this15.fullScreenInOn = fullscreen;
        }
      });
    },
    toggleFullScreen: function toggleFullScreen(to) {
      if (screenfull__WEBPACK_IMPORTED_MODULE_7___default.a.isEnabled) {
        if (to) {
          screenfull__WEBPACK_IMPORTED_MODULE_7___default.a.request();
        } else {
          screenfull__WEBPACK_IMPORTED_MODULE_7___default.a.exit();
        }
      }
    },
    toggleFooterAutoHide: function toggleFooterAutoHide() {
      this.pageConfigs.footerAutoHide = !this.pageConfigs.footerAutoHide;
      this.$gaEvent('engagement', 'toggleFooterAutoHide');
    },
    toggleLayout: function toggleLayout(layout) {
      this.pageConfigs.layout = layout ? layout : this.pageConfigs.layout;
      this.pageConfigs.disableScroll = this.pageConfigs.layout === 'grid' ? true : this.entity.config && this.entity.config.hasOwnProperty('disableScroll') ? this.entity.config.disableScroll : this.pageConfigs.disableScroll;
      this.$gaEvent('engagement', 'toggleLayout', layout);
    },
    toggleFileSharing: function toggleFileSharing() {
      this.showFileSharing = !this.showFileSharing;
      this.$gaEvent('engagement', 'toggleFileSharing');
    },
    toggleAgenda: function toggleAgenda() {
      this.showAgenda = !this.showAgenda;
      this.$gaEvent('engagement', 'toggleAgenda');
    },
    toggleMeetingInfo: function toggleMeetingInfo() {
      this.showMeetingInfo = !this.showMeetingInfo;
      this.$gaEvent('engagement', 'toggleMeetingInfo');
    },
    toggleWhiteboard: function toggleWhiteboard() {
      this.$gaEvent('engagement', 'toggleWhiteboard');

      if (!this.showWhiteboard) {
        if (!this.canvasDesigner) {
          this.initWhiteboard();
        }

        this.pageConfigs.lastLayout = this.pageConfigs.layout;
        this.pageConfigs.layout = 'presentation';
        this.showWhiteboard = true;
      } else {
        this.pageConfigs.layout = this.pageConfigs.lastLayout;
        this.showWhiteboard = false;
      }
    },
    changeFocus: function changeFocus(item) {
      // if(item.local) {
      //     return
      // }
      this.videoList.forEach(function (v) {
        v.maximized = v.id === item.id;
      });
    },
    disableMirror: function disableMirror(item, itemIndex) {
      this.videoList[itemIndex].disableMirror = this.videoList[itemIndex].disableMirror ? false : true;
    },
    kickRemoteUser: function kickRemoteUser(item, itemIndex) {
      var _this16 = this;

      formUtil.confirmAction().then(function (result) {
        if (result.value) {
          var found = _this16.$refs.videos.find(function (video) {
            return video.id === item.id;
          });

          if (found && found.srcObject) {
            var stream = found.srcObject;

            _this16.rtcmConnection.removeStream(stream.streamid);

            _this16.emitSocketEvents('banAttendee', item);

            _this16.Custom({
              url: "/".concat(_this16.initUrl, "/").concat(_this16.uuid, "/invitees/").concat(item.extra.uuid, "/block"),
              method: 'post'
            }).then(function (response) {
              _this16.$toasted.success(response.message, _this16.$toastConfig);
            })["catch"](function (error) {
              formUtil.handleErrors(error);
            });
          }
        } else {
          result.dismiss === _core_configs_sweet_alert__WEBPACK_IMPORTED_MODULE_17__["Swal"].DismissReason.cancel;
        }
      });
    },
    switchCamera: function switchCamera() {
      this.mediaConfigurations.facingMode = this.mediaConfigurations.facingMode === 'user' ? 'environment' : 'user';
      this.applyMediaConstraints();
    },
    stopStream: function stopStream(localVideo) {
      var found = this.$refs.videos.find(function (video) {
        return video.id === localVideo.id;
      });

      if (found && found.srcObject) {
        var stream = found.srcObject;
        this.stopStream(stream);
      }
    },
    // channel event callback methods
    afterJoiningChannel: function afterJoiningChannel(members) {
      this.membersLive = members;
    },
    newMemberJoining: function newMemberJoining(member) {
      this.membersLive.push(member);
    },
    memberLeaving: function memberLeaving(member) {
      this.membersLive = this.membersLive.filter(function (u) {
        return u.uuid !== member.uuid;
      });
    },
    updateEntityBackup: function updateEntityBackup(e) {
      var data = _.cloneDeep(e);

      this.entityDatesBackup.status = data.status;
      this.entityDatesBackup.startDateTime = data.startDateTime;
      this.entityDatesBackup.plannedStartDateTime = data.plannedStartDateTime;
      this.entityDatesBackup.startedAt = data.startedAt;
      this.entityDatesBackup.estimatedEndTime = data.estimatedEndTime;
      this.entityDatesBackup.endedAt = data.endedAt;
    },
    meetingStatusChanged: function meetingStatusChanged(e) {
      var _this17 = this;

      var getTimezoneDateTime = function getTimezoneDateTime(dt) {
        return _core_filters_momentz__WEBPACK_IMPORTED_MODULE_14__["momentDateTimeTz"](dt, _this17.vars.serverDateTimeFormat);
      };

      if (e.uuid === this.entity.uuid) {
        if (this.entity.status === e.status && !e.delayed && !e.updated) {
          return;
        } else if (e.updated) {
          this.stopAutoEndMeeting();
        }

        this.updateEntityBackup(e);
        this.entity.status = e.status;
        this.entity.startDateTime = getTimezoneDateTime(e.startDateTime);

        if (this.entity.plannedStartDateTime) {
          this.entity.plannedStartDateTime = getTimezoneDateTime(e.plannedStartDateTime);
        }

        if (this.entity.startedAt) {
          this.entity.startedAt = getTimezoneDateTime(e.startedAt);
        }

        if (this.entity.estimatedEndTime) {
          this.entity.estimatedEndTime = getTimezoneDateTime(e.estimatedEndTime);
        }

        if (this.entity.status === e.status && !e.delayed) {
          return;
        }

        var meetingStatus = e.status;

        if (meetingStatus === 'scheduled' && e.delayed) {
          meetingStatus = 'delayed';
        }

        var statusUpdateMessages = {
          'live': 'meeting.is_live_now',
          'delayed': 'meeting.meeting_delayed',
          'cancelled': 'meeting.meeting_cancelled',
          'ended': 'meeting.meeting_ended'
        };
        this.$toasted.success($t(statusUpdateMessages[meetingStatus]), this.$toastConfig);
      }
    },
    gotNewMessage: function gotNewMessage() {
      if (!(this.pageConfigs.enableChat && this.configs.chat && this.configs.chat.enabled)) {
        return;
      }

      if (!this.pageConfigs.showChat || this.fullScreenInOn) {
        this.newMessages = true;
        Object(_core_utils_media__WEBPACK_IMPORTED_MODULE_10__["playIncomingMessage"])();
      }
    },
    meetingRoomCreated: function meetingRoomCreated(e) {
      var _this18 = this;

      var data = e.hasOwnProperty('data') && e.data ? e.data : e;
      this.entity.roomId = data.roomId;
      this.initMediaAndRtcmConnection();
      this.rtcmConnection.checkPresence(this.entity.roomId, function (isRoomExist, roomid) {
        _this18.roomIdAlive = !!isRoomExist;
      });
    },
    banAttendee: function banAttendee(e) {
      var data = e.hasOwnProperty('data') && e.data ? e.data : e;

      if (this.enableLogs) {
        console.log(data);
      }

      var found = this.$refs.videos.find(function (video) {
        return video.id === data.id;
      });

      if (found && found.srcObject) {
        var stream = found.srcObject;
        this.rtcmConnection.removeStream(stream.streamid);
      }

      if (e.uuid === this.userUuid) {
        this.closeConnectionAndStream();
        this.getInitialData();
      }

      this.$toasted.info($t('meeting.ban_notification'), this.$toastConfig.info);
    },
    streamRemoved: function streamRemoved(e) {
      var data = e.hasOwnProperty('data') && e.data ? e.data : e;

      if (this.rtcmConnection && data.id) {
        this.rtcmConnection.removeStream(data.id);
      }

      this.rtcmOnStreamEnded(data);
    },
    meetingEnded: function meetingEnded(e) {
      var data = e.hasOwnProperty('data') && e.data ? e.data : e;
      this.closeConnectionAndStream();
      this.getInitialData();
    },
    // channel action methods
    joinChannel: function joinChannel() {
      if (!window.Echo) {
        return;
      }

      if (this.entity.isPam) {
        window.meetingChannel = window.Echo.channel("MeetingGuest.".concat(this.uuid));
      } else {
        window.meetingChannel = window.Echo.join("Meeting.".concat(this.uuid));
        window.meetingChannel.here(this.afterJoiningChannel).joining(this.newMemberJoining).leaving(this.memberLeaving);
      }

      window.meetingChannel.listen('MeetingStatusChanged', this.meetingStatusChanged).listen('NewMessage', this.gotNewMessage).listen('MeetingRoomCreated', this.meetingRoomCreated).listen('PublicMeetingRoomCreated', this.meetingRoomCreated);
    },
    whisperChannel: function whisperChannel(channel, method) {
      var opts = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

      if (!(channel && channel.whisper && method)) {
        return;
      }

      channel.whisper(method, opts);
    },
    emitSocketEvents: function emitSocketEvents(event) {
      var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      if (!(this.rtcmConnection && this.rtcmConnection.socket && event)) {
        return;
      }

      if (this.enableLogs) {
        console.log('Emitting on Socket: ', event);
      }

      try {
        this.rtcmConnection.socket.emit('Whisper', {
          event: event,
          data: data
        });
      } catch (e) {}
    },
    // rtcm event callback methods
    // for room initiator
    rtcmOnNewParticipant: function rtcmOnNewParticipant(participantId, userPreferences) {
      var _this19 = this;

      if (this.enableLogs) {
        console.log("On rtcmOnNewParticipant - participantId : ", participantId);
        console.log("On rtcmOnNewParticipant - userPreferences : ", userPreferences);
      }

      if (this.rtcmConnection.getAllParticipants().length >= this.rtcmConnection.maxParticipantsAllowed) {
        // please check this line
        return;
      }

      var userId = userPreferences.connectionDescription.remoteUserId;

      if (this.alreadyAcceptedParticipants[userId]) {
        this.rtcmConnection.acceptParticipationRequest(participantId, userPreferences);
        return;
      }

      if (this.pageConfigs.askHostBeforeJoining) {
        swtAlert.fire({
          title: $t('meeting.user_trying_to_join', {
            attribute: userPreferences.extra.name || userId
          }),
          allowOutsideClick: false,
          showCancelButton: true,
          confirmButtonText: $t('general.accept'),
          cancelButtonText: $t('general.reject')
        }).then(function (result) {
          if (result.value) {
            _this19.rtcmConnection.acceptParticipationRequest(participantId, userPreferences);

            _this19.alreadyAcceptedParticipants[userId] = true;
            return;
          } else {
            result.dismiss === _core_configs_sweet_alert__WEBPACK_IMPORTED_MODULE_17__["Swal"].DismissReason.cancel;
            return;
          }
        });
      } else {
        this.rtcmConnection.acceptParticipationRequest(participantId, userPreferences);
        return;
      }
    },
    // for participants
    // rtcmOnReadyForOffer(remoteUserId, userPreferences) {
    //     messageSound.play();
    //     this.rtcmConnection.multiPeersHandler.createNewPeer(remoteUserId, userPreferences)
    // }
    rtcmOnOpen: function rtcmOnOpen(e) {
      var _this20 = this;

      // if (this.canvasDesigner && this.canvasDesigner.pointsLength <= 0) {
      //     setTimeout(() => {
      //         this.rtcmConnection.send('sync-canvas-points')
      //     }, 1000)
      // }
      if (this.canvasDesigner && this.rtcmConnection.isInitiator) {
        setTimeout(function () {
          _this20.canvasDesigner.renderStream();
        }, 1000);
      }
    },
    rtcmOnClose: function rtcmOnClose(e) {},
    rtcmOnMessage: function rtcmOnMessage(e) {// if (e.data === 'sync-canvas-points') {
      //     this.canvasDesigner.sync()
      //     return
      // }
      // this.canvasDesigner.syncData(e.data)
    },
    rtcmOnUserStatusChanged: function rtcmOnUserStatusChanged(event) {
      var _this21 = this;

      var localUserId = this.rtcmConnection.userid;

      if (this.enableLogs) {
        console.log("On rtcmOnUserStatusChanged - event : ", event); // console.log("On rtcmOnUserStatusChanged - rtcmConnection : ", this.rtcmConnection)

        console.log("On rtcmOnUserStatusChanged - localUserId : ", localUserId);
      }

      var newUserAdded = function newUserAdded(stream) {
        // debugger
        var streamId = stream.userid;
        var streamType = stream.userid === localUserId ? 'local' : 'remote';

        if (!(_this21.rtcmConnection.isInitiator || _this21.entity.canModerate) && streamType !== 'local' && (_this21.entity.type.uuid === 'live_class' || _this21.entity.type.uuid === 'webinar')) {
          //if current user is a normal user (not an initiator or moderator), and stream type is from remote, and type is live class
          return;
        }

        var found = _this21.videoList.find(function (video) {
          return video.id === stream.streamid;
        });

        if (_this21.videoList.length > 1) {
          _this21.recheckLiveParticipants(null);
        }

        if (found === undefined) {
          var video = _objectSpread(_objectSpread({
            id: streamId,
            streamUserId: stream.userid,
            muted: true
          }, stream.extra), {}, {
            extra: stream.extra,
            maximized: false,
            local: streamType === 'local' ? true : false,
            //bad me dekhenge
            screen: false,
            status: true,
            hasAudio: false,
            hasVideo: false,
            hasStream: false,
            speaking: false,
            disableMirror: false
          });

          _this21.videoList.push(video);
        }

        _this21.isLoading = false;
      };

      var foundVideos = this.videoList.filter(function (video) {
        return video.id === event.userid || video.streamUserId === event.userid || event.extra && video.uuid === event.extra.uuid;
      });

      if (event && event.status === "online") {
        if (foundVideos && foundVideos.length) {
          foundVideos.forEach(function (foundVideo) {
            if (foundVideo.username !== event.extra.username) {
              var tempIndex = _this21.videoList.findIndex(function (video) {
                return video.uuid === foundVideo.uuid && (!(video.hasOwnProperty('id') && foundVideo.hasOwnProperty('id')) || video.hasOwnProperty('id') && foundVideo.hasOwnProperty('id') && video.id === foundVideo.id);
              });

              _this21.videoList[tempIndex].username = event.extra.username;
              _this21.videoList[tempIndex].name = event.extra.name;

              if (_this21.videoList[tempIndex].extra) {
                _this21.videoList[tempIndex].extra['username'] = event.extra.username;
                _this21.videoList[tempIndex].extra['name'] = event.extra.name;
              }
            }
          });
        } else if (event.extra && event.extra.hasOwnProperty('username') && event.extra.username) {
          newUserAdded(event);
        }
      } else {
        if (foundVideos && foundVideos.length) {
          foundVideos.forEach(function (foundVideo) {
            _this21.rtcmConnection.removeStream(foundVideo.id);

            _this21.recheckLiveParticipants(_objectSpread(_objectSpread({}, foundVideo), {}, {
              streamid: foundVideo.id
            }));

            _this21.autoSetVideoMaximized();
          });
        }
      }
    },
    rtcmOnLeave: function rtcmOnLeave(event) {
      if (this.enableLogs) {
        console.log("On rtcmOnLeave - event : ", event);
      }
    },
    rtcmOnSpeaking: function rtcmOnSpeaking(event) {
      var _this22 = this;

      // if (this.enableLogs) {
      // console.log("On rtcmOnSpeaking - event : ", event)
      // }
      var videoIndex = this.videoList.findIndex(function (v) {
        return v.id === event.streamid;
      });

      if (window.onSilenceTimeoutObj['index' + videoIndex]) {
        clearTimeout(window.onSilenceTimeoutObj['index' + videoIndex]);
      }

      if (this.videoList[videoIndex]) {
        this.videoList[videoIndex].speaking = true;
      }

      window.onSilenceTimeoutObj['index' + videoIndex] = setTimeout(function () {
        if (_this22.videoList[videoIndex]) {
          _this22.videoList[videoIndex].speaking = false;
        }
      }, 5000);
    },
    rtcmOnSilence: function rtcmOnSilence(event) {
      var _this23 = this;

      // if (this.enableLogs) {
      // console.log("On rtcmOnSilence - event : ", event)
      // }
      var videoIndex = this.videoList.findIndex(function (v) {
        return v.id === event.streamid;
      });

      if (window.onSilenceTimeoutObj['index' + videoIndex]) {
        clearTimeout(window.onSilenceTimeoutObj['index' + videoIndex]);
      }

      window.onSilenceTimeoutObj['index' + videoIndex] = setTimeout(function () {
        if (_this23.videoList[videoIndex]) {
          _this23.videoList[videoIndex].speaking = false;
        }
      }, 2000);
    },
    rtcmOnVolumeChange: function rtcmOnVolumeChange(event) {// if (this.enableLogs) {
      //     console.log("On rtcmOnVolumeChange - event : ", event)
      // }
    },
    rtcmOnStream: function rtcmOnStream(stream) {
      var _this24 = this;

      if (this.enableLogs) {
        console.log('On Stream: ', stream);
      }

      if (!(this.rtcmConnection.isInitiator || this.entity.canModerate) && stream.type !== 'local' && (this.entity.type.uuid === 'live_class' || this.entity.type.uuid === 'webinar')) {
        //if current user is a normal user (not an initiator or moderator), and stream type is from remote, and type is live class
        if (!stream.extra.isInitiator) {
          // if remove stream is from a user who is not an initiator, then dont show
          return;
        }
      }

      var streamId = stream.streamid;
      var foundIndex = this.videoList.findIndex(function (video) {
        return video.id === stream.streamid || video.id === stream.userid;
      });
      var streamInstance = stream.stream.idInstance ? JSON.parse(stream.stream.idInstance) : stream.stream;
      var isWhiteboard = !(streamInstance.isAudio || streamInstance.audio || streamInstance.isVideo || streamInstance.video || streamInstance.isScreen || streamInstance.screen) && stream.extra.hasWhiteboard;

      if (streamInstance.isScreen && stream.type === 'local') {
        this.localScreenStreamid = stream.streamid;
        var tracks = stream.stream.getTracks();
        tracks.forEach(function (track) {
          track.addEventListener('ended', _this24.stopSharingScreen);
        });
      } else if (isWhiteboard && stream.type === 'local') {
        this.localWhiteboardStreamid = stream.streamid;
      }

      if (this.videoList.length > 1) {
        this.recheckLiveParticipants(null);
      }

      var video = _objectSpread(_objectSpread({
        id: streamId,
        streamUserId: stream.userid,
        muted: stream.type === 'local'
      }, stream.extra), {}, {
        extra: stream.extra,
        maximized: stream.type === 'local' && !streamInstance.isScreen && !isWhiteboard,
        local: stream.type === 'local',
        screen: stream.extra.screenStreamId && streamId === stream.extra.screenStreamId || this.localScreenStreamid === streamId || streamInstance.isScreen,
        whiteboard: stream.extra.whiteboardStreamId && streamId === stream.extra.whiteboardStreamId || isWhiteboard,
        status: true,
        hasAudio: streamInstance.isAudio || streamInstance.audio,
        hasVideo: streamInstance.isVideo || streamInstance.video || streamInstance.isScreen || isWhiteboard || streamInstance.screen,
        hasStream: true,
        speaking: false,
        disableMirror: false
      });

      if (video.screen || video.whiteboard) {
        video.videoMuted = false;
      }

      if (foundIndex === -1) {
        // let foundUserIndex = this.videoList.findIndex(item => item.uuid === stream.extra.uuid)
        // if (foundUserIndex >= 0) {
        //     const foundUserVideo = this.videoList[foundUserIndex]
        //     if (!foundUserVideo.status) {
        //         let newList = this.videoList.map(item => item.uuid !== foundUserVideo.uuid)
        //         this.videoList = newList
        //     }
        // }
        if (stream.type === 'local' && this.localScreenStreamid !== video.id && this.localWhiteboardStreamid !== video.id) {
          if (this.localVideo && this.needStreamAddOrReplace) {
            video.id = streamId = this.localVideo.id;
          } else {
            this.localVideo = video;
            this.videoList.push(video);
          }
        } else {
          this.videoList.push(video);
        } //just for testing -start
        // let video2 = {
        //     ...video,
        //     maximized: false,
        //     uuid: uuid(),
        // }
        // this.videoList.push(video)
        // this.videoList.push(video2)
        //just for testing -ended

      } else if (foundIndex !== -1 && !this.videoList[foundIndex].hasStream) {
        if (stream.type === 'local' && this.localScreenStreamid !== video.id && this.localWhiteboardStreamid !== video.id) {
          if (this.localVideo && this.needStreamAddOrReplace) {
            video.id = streamId = this.localVideo.id;
          } else {
            this.localVideo = video;
            this.videoList[foundIndex] = Object.assign({}, this.videoList[foundIndex], video);
          }
        } else {
          this.videoList[foundIndex] = Object.assign({}, this.videoList[foundIndex], video);
        }
      }

      this.autoSetVideoMaximized();

      if (this.pageConfigs.enableRecording && this.entity.canModerate) {
        var recorderInstance = this.rtcmConnection.recorder;

        if (recorderInstance) {
          var internalRecorder = recorderInstance.getInternalRecorder();

          if (this.recording && internalRecorder) {
            internalRecorder.addStreams(stream.stream);
          }
        } else {
          if (this.pageConfigs.enableAutoRecording) {
            setTimeout(function () {
              _this24.startRecording();
            }, 1000);
          }
        } // if(!this.rtcmConnection.recorder.streams) {
        //     this.rtcmConnection.recorder.streams = []
        // }
        // if(this.recording) {
        //     this.rtcmConnection.recorder.streams.push(stream.stream)
        // }

      }

      setTimeout(function () {
        if (_this24.enableLogs) {
          console.log("$refs : ", _this24.$refs);
          console.log("$refs.videos : ", _this24.$refs.videos);
        }

        for (var i = 0, len = _this24.$refs.videos.length; i < len; i++) {
          if (_this24.$refs.videos[i].id === streamId || _this24.$refs.videos[i].id === stream.userid) {
            _this24.$refs.videos[i].srcObject = stream.stream;
            break;
          }
        } // this.rtcmConnection.streamEvents.selectAll({
        //     isScreen: true
        // }).forEach(function(screenEvent) {
        //     this.videoList.forEach((item, index) => {
        //         if (item.id !== screenEvent.stream.streamid) {
        //             this.videoList[index].screen = true
        //         } else {
        //             this.videoList[index].screen = false
        //         }
        //     })
        // })


        if (stream.type === 'local') {
          _this24.applyOnStartConfigs();
        }

        setTimeout(function () {
          if (_this24.pageConfigs.speechDetection && !isWhiteboard && !streamInstance.isScreen) {
            _this24.initHark({
              stream: stream.stream,
              streamedObject: stream,
              connection: _this24.rtcmConnection
            });
          }
        }, 1000);
      }, 500);
      this.isLoading = false;
    },
    rtcmOnStreamEnded: function rtcmOnStreamEnded(stream) {
      this.recheckLiveParticipants(stream);
      this.autoSetVideoMaximized();
    },
    rtcmOnError: function rtcmOnError(error) {
      this.isLoading = false; // if(window.currentUserMediaRequest) {
      //     window.currentUserMediaRequest.mutex = false
      // }
    },
    rtcmOnMediaError: function rtcmOnMediaError(error) {
      var _this25 = this;

      this.isLoading = false;

      if (window.currentUserMediaRequest) {
        window.currentUserMediaRequest.mutex = false;
      }

      if (this.enableLogs) {
        console.log("onMediaError : ", error);
      }

      this.mediaDeviceIssue = true;
      var msgObj = Object(_core_utils_media__WEBPACK_IMPORTED_MODULE_10__["showMediaPermissionError"])(error);
      msgObj.alert.then(function (result) {
        if (error.name === 'NotFoundError' || error.name === 'NotReadableError' || error.name === 'OverconstrainedError') {
          _this25.applyMediaConstraints(true);

          _this25.$toasted.info($t('meeting.media_devices.setup_reset_try_again'), _this25.$toastConfig.info);
        } else if (error.name === 'NotAllowedError' || error.name === 'PermissionDeniedError') {
          _this25.permissionRejected = true;
        }

        if (!result.value) {
          _this25.isLoading = false;
          result.dismiss === _core_configs_sweet_alert__WEBPACK_IMPORTED_MODULE_17__["Swal"].DismissReason.cancel;
        }
      }); // this.meetingAction('leave', { error: { name: error.name, title: msg.title } }, { alert: false })
    },
    rtcmOnMute: function rtcmOnMute(stream) {
      if (this.enableLogs) {
        console.log("On rtcmOnMute: ", stream);
      }

      var videoIndex = this.videoList.findIndex(function (v) {
        return v.id === stream.streamid;
      });
      var videoEle = this.$refs.videos.find(function (video) {
        return video.id === stream.streamid;
      });

      if (stream.muteType === 'video') {
        this.videoList[videoIndex].videoMuted = true;
      } else if (stream.muteType === 'audio') {
        this.videoList[videoIndex].muted = true;
      } else {
        this.videoList[videoIndex].videoMuted = true;
        this.videoList[videoIndex].muted = true;
        videoEle.srcObject = null;
      }
    },
    rtcmOnUnmute: function rtcmOnUnmute(stream) {
      if (this.enableLogs) {
        console.log(stream);
      }

      var videoIndex = this.videoList.findIndex(function (v) {
        return v.id === stream.streamid;
      });
      var videoEle = this.$refs.videos.find(function (video) {
        return video.id === stream.streamid;
      });

      if (stream.unmuteType === 'video') {
        this.videoList[videoIndex].videoMuted = false;
      } else if (stream.unmuteType === 'audio') {
        this.videoList[videoIndex].muted = false;
      } else {
        this.videoList[videoIndex].videoMuted = false;
        this.videoList[videoIndex].muted = false;
        videoEle.srcObject = stream;
      }
    },
    rtcmOnRemoteMuteUnmuted: function rtcmOnRemoteMuteUnmuted(e) {
      var data = e.hasOwnProperty('data') && e.data ? e.data : e;

      if (this.enableLogs) {
        console.log(data);
      }

      var videoIndex = this.videoList.findIndex(function (video) {
        return video.id === data.streamid;
      });

      if (videoIndex === -1 || !this.videoList[videoIndex]) {
        return;
      }

      if (data.hasOwnProperty('audioEnabled')) {
        if (data.audioEnabled) {
          this.videoList[videoIndex].audioMuted = false;
        } else {
          this.videoList[videoIndex].audioMuted = true;
        }
      } else if (data.hasOwnProperty('videoEnabled')) {
        // const videoEle = this.$refs.videos.find(video => {
        //     return video.id === data.streamid
        // })
        if (data.videoEnabled) {
          this.videoList[videoIndex].videoMuted = false;
        } else {
          this.videoList[videoIndex].videoMuted = true;
        }
      }
    },
    rtcmOnSnapshotTaken: function rtcmOnSnapshotTaken(e) {
      var data = e.hasOwnProperty('data') && e.data ? e.data : e;

      if (this.enableLogs) {
        console.log('rtcmOnSnapshotTaken', data);
      }

      if (!(this.pageConfigs.enableSnapshotAlert && data && data.byUser && data.ofUser)) {
        return;
      }

      if (this.pageConfigs.snapshotAlertToUserOnly) {
        if (this.pageConfigs.snapshotAlertToModerators) {
          if (this.entity.canModerate) {
            this.$toasted.info($t('meeting.snapshot_taken_notification_user', {
              by_user: data.byUser.name,
              of_user: data.ofUser.name
            }), this.$toastConfig.info);
            Object(_core_utils_media__WEBPACK_IMPORTED_MODULE_10__["playScreenshot"])();
          }
        } else if (this.userUuid === data.ofUser.uuid) {
          this.$toasted.info($t('meeting.snapshot_taken_notification_your', {
            by_user: data.byUser.name
          }), this.$toastConfig.info);
          Object(_core_utils_media__WEBPACK_IMPORTED_MODULE_10__["playScreenshot"])();
        }
      } else {
        if (this.userUuid === data.ofUser.uuid) {
          this.$toasted.info($t('meeting.snapshot_taken_notification_your', {
            by_user: data.byUser.name
          }), this.$toastConfig.info);
        } else {
          this.$toasted.info($t('meeting.snapshot_taken_notification_user', {
            by_user: data.byUser.name,
            of_user: data.ofUser.name
          }), this.$toastConfig.info);
        }

        Object(_core_utils_media__WEBPACK_IMPORTED_MODULE_10__["playScreenshot"])();
      }
    },
    rtcmOnMeetingUpdated: function rtcmOnMeetingUpdated(e) {
      var _this26 = this;

      var data = e.hasOwnProperty('data') && e.data ? e.data : e;

      if (this.enableLogs) {
        console.log('rtcmOnMeetingUpdated', data);
      }

      if (data.dateUpdated) {
        var getTimezoneDateTime = function getTimezoneDateTime(dt) {
          return _core_filters_momentz__WEBPACK_IMPORTED_MODULE_14__["momentDateTimeTz"](dt, _this26.vars.serverDateTimeFormat);
        };

        this.updateEntityBackup(data);
        this.entity.status = data.status;
        this.entity.startDateTime = getTimezoneDateTime(data.startDateTime);

        if (data.plannedStartDateTime) {
          this.entity.plannedStartDateTime = getTimezoneDateTime(data.plannedStartDateTime);
        }

        if (data.startedAt) {
          this.entity.startedAt = getTimezoneDateTime(data.startedAt);
        }

        if (data.estimatedEndTime) {
          this.entity.estimatedEndTime = getTimezoneDateTime(data.estimatedEndTime);
        }

        if (data.endedAt) {
          this.entity.endedAt = getTimezoneDateTime(data.endedAt);
        }
      }

      if (data.endTimeSnoozed && this.autoEndingToast && this.autoEndingToast.close && _.isFunction(this.autoEndingToast.close)) {
        this.stopAutoEndMeeting();
        _core_configs_sweet_alert__WEBPACK_IMPORTED_MODULE_17__["swtToast"].close();
        this.autoEndingToast = null;
      }

      if (data.autoEndCancelled && this.autoEndingToast && this.autoEndingToast.close && _.isFunction(this.autoEndingToast.close)) {
        this.stopAutoEndMeeting();
        this.pageConfigs.autoEndMeeting = false;
        _core_configs_sweet_alert__WEBPACK_IMPORTED_MODULE_17__["swtToast"].close();
        this.autoEndingToast = null;
      }
    },
    rtcmOnRemoteHandToggled: function rtcmOnRemoteHandToggled(e) {
      var data = e.hasOwnProperty('data') && e.data ? e.data : e;

      if (this.enableLogs) {
        console.log(data);
      }

      if (!(data && data.streamid && this.rtcmConnection.streamEvents[data.streamid])) {
        return;
      }

      var videoIndex = this.videoList.findIndex(function (video) {
        return video.id === data.streamid;
      });

      if (data.hasOwnProperty('isHandUp')) {
        if (data.isHandUp) {
          this.videoList[videoIndex].isHandUp = true;
          this.$toasted.info($t('meeting.handup_notification', {
            attribute: this.videoList[videoIndex].name
          }), this.$toastConfig.info);
        } else {
          this.videoList[videoIndex].isHandUp = false;
        }
      }
    },
    rtcmOnMuteUnmuteRemote: function rtcmOnMuteUnmuteRemote(e) {
      var data = e.hasOwnProperty('data') && e.data ? e.data : e;

      if (this.enableLogs) {
        console.log(data);
      }

      var found = this.$refs.videos.find(function (video) {
        return video.id === data.id;
      });

      if (found && found.srcObject) {
        this.toggleAudio();
      }
    },
    rtcmOnUserIdAlreadyTaken: function rtcmOnUserIdAlreadyTaken(useridAlreadyTaken, yourNewUserId) {
      this.rtcmConnection.userid = yourNewUserId;
    },
    // rtc action methods
    initMediaAndRtcmConnection: function initMediaAndRtcmConnection() {
      if (!this.rtcmConnection) {
        this.rtcmConnection = new rtcmulticonnection__WEBPACK_IMPORTED_MODULE_2___default.a();
        this.rtcmConnection.socketURL = window.atob(this.socketURL);

        if (this.configs.signalServers && this.configs.signalServers.url) {
          this.rtcmConnection.socketURL = this.configs.signalServers.url;
        }

        this.rtcmConnection.autoCreateMediaElement = false; // this.rtcmConnection.autoCloseEntireSession = true // set this line to close room as soon as room creator leaves

        if (this.configs.meeting) {
          if (this.configs.meeting.debugMode) {
            this.rtcmConnection.enableLogs = true;
          } else {
            this.rtcmConnection.enableLogs = false;
          }

          if (this.configs.meeting.forceTurn) {
            this.rtcmConnection.candidates = {
              turn: true,
              stun: false,
              host: false
            };
          }
        }

        this.rtcmConnection.onopen = this.rtcmOnOpen;
        this.rtcmConnection.onclose = this.rtcmOnClose;
        this.rtcmConnection.onleave = this.rtcmOnLeave;
        this.rtcmConnection.onmessage = this.rtcmOnMessage;
        this.rtcmConnection.onNewParticipant = this.rtcmOnNewParticipant; // this.rtcmConnection.onReadyForOffer = this.rtcmOnReadyForOffer

        this.rtcmConnection.onUserStatusChanged = this.rtcmOnUserStatusChanged;
        this.rtcmConnection.onstream = this.rtcmOnStream;
        this.rtcmConnection.onstreamended = this.rtcmOnStreamEnded;
        this.rtcmConnection.onmute = this.rtcmOnMute;
        this.rtcmConnection.onunmute = this.rtcmOnUnmute;
        this.rtcmConnection.onMediaError = this.rtcmOnMediaError; // this.rtcmConnection.onerror = this.rtcmOnError

        this.rtcmConnection.onUserIdAlreadyTaken = this.rtcmOnUserIdAlreadyTaken;

        if (this.pageConfigs.speechDetection) {
          this.rtcmConnection.onspeaking = this.rtcmOnSpeaking;
          this.rtcmConnection.onsilence = this.rtcmOnSilence;
          this.rtcmConnection.onvolumechange = this.rtcmOnVolumeChange;
          window.onSilenceTimeoutObj = {};
        }

        this.rtcmConnection.setCustomSocketEvent('Whisper');
        this.fileSharingConnection = this.rtcmConnection;
      }

      this.getMediaConstraints(); //Bandwidth and bitrate setup

      var BandwidthHandler = this.rtcmConnection.BandwidthHandler;
      this.rtcmConnection.bandwidth = {
        audio: this.mediaConfigurations.bandwidth.audio === 'auto' ? false : this.mediaConfigurations.bandwidth.audio,
        video: this.mediaConfigurations.bandwidth.video === 'auto' ? false : this.mediaConfigurations.bandwidth.video,
        screen: this.mediaConfigurations.bandwidth.screen === 'auto' ? false : this.mediaConfigurations.bandwidth.screen
      }; // this.rtcmConnection.processSdp = (sdp) => {
      //     if (this.rtcmConnection.DetectRTC.browser.name === 'Safari') {
      //         return sdp
      //     }
      //     if (this.rtcmConnection.codecs.video.toUpperCase() === 'VP8') {
      //         sdp = BandwidthHandler.preferCodec(sdp, 'vp8')
      //     }
      //     if (this.rtcmConnection.codecs.video.toUpperCase() === 'VP9') {
      //         sdp = BandwidthHandler.preferCodec(sdp, 'vp9')
      //     }
      //     if (this.rtcmConnection.codecs.video.toUpperCase() === 'H264') {
      //         sdp = BandwidthHandler.preferCodec(sdp, 'h264')
      //     }
      //     if (this.rtcmConnection.codecs.audio === 'G722') {
      //         sdp = BandwidthHandler.removeNonG722(sdp)
      //     }
      //     if (this.rtcmConnection.DetectRTC.browser.name === 'Firefox') {
      //         return sdp
      //     }
      //     if (this.rtcmConnection.bandwidth.video || this.rtcmConnection.bandwidth.screen) {
      //         sdp = BandwidthHandler.setApplicationSpecificBandwidth(sdp, this.rtcmConnection.bandwidth, !!this.rtcmConnection.session.screen)
      //     }
      //     if (this.rtcmConnection.bandwidth.video) {
      //         sdp = BandwidthHandler.setVideoBitrates(sdp, {
      //             min: this.mediaConfigurations.bandwidth.videoMin * 8 * 1024,
      //             max: this.rtcmConnection.bandwidth.video * 8 * 1024
      //         })
      //     }
      //     if (this.rtcmConnection.bandwidth.audio) {
      //         sdp = BandwidthHandler.setOpusAttributes(sdp, {
      //             maxaveragebitrate: this.rtcmConnection.bandwidth.audio * 8 * 1024,
      //             maxplaybackrate: this.rtcmConnection.bandwidth.audio * 8 * 1024,
      //             stereo: 1,
      //             maxptime: 3
      //         })
      //     }
      //     return sdp
      // }

      this.rtcmConnection.iceServers = [{
        urls: ["stun.l.google.com:19302", "stun1.l.google.com:19302", "stun2.l.google.com:19302", "stun3.l.google.com:19302", "stun4.l.google.com:19302"]
      }];

      if (this.pageConfigs.maxParticipantCount) {
        this.rtcmConnection.maxParticipantsAllowed = this.pageConfigs.maxParticipantCount;
      }

      if (this.configs.iceServers.length) {
        this.rtcmConnection.iceServers = _toConsumableArray(this.configs.iceServers);
      }

      this.rtcmConnection.session = _objectSpread({}, this.meetingRulesHost.session);
      this.rtcmConnection.sdpConstraints.mandatory = _objectSpread({}, this.meetingRulesHost.mandatory);
      this.rtcmConnection.mediaConstraints = {
        video: this.meetingRulesHost.mediaConstraints.video ? this.videoConstraints : false,
        audio: this.meetingRulesHost.mediaConstraints.audio ? this.audioConstraints : false,
        screen: this.meetingRulesHost.mediaConstraints.screen
      };
    },
    initSocketListener: function initSocketListener() {
      if (!(this.rtcmConnection && this.rtcmConnection.socket)) {
        return;
      }

      var callbackList = {
        'removedStream': this.streamRemoved,
        'banAttendee': this.banAttendee,
        'muteUnmuteRemote': this.rtcmOnMuteUnmuteRemote,
        'remoteMutedUnmuted': this.rtcmOnRemoteMuteUnmuted,
        'remoteHandToggled': this.rtcmOnRemoteHandToggled,
        'meetingEnded': this.meetingEnded,
        'snapshotTaken': this.rtcmOnSnapshotTaken,
        'meetingUpdated': this.rtcmOnMeetingUpdated
      };
      this.rtcmConnection.socket.on('Whisper', function (e) {
        if (e && callbackList.hasOwnProperty(e.event)) {
          callbackList[e.event](e.data);
        }
      });
    },
    initCanvasDesigner: function initCanvasDesigner() {
      // here goes canvas designer
      this.canvasDesigner = new CanvasDesigner(); // you can place widget.html anywhere

      this.canvasDesigner.widgetHtmlURL = '/js/canvas-designer/widget.html';
      this.canvasDesigner.widgetJsURL = '/js/canvas-designer/widget.min.js';
    },
    initWhiteboard: function initWhiteboard() {
      var _this27 = this;

      if (this.videoList.length < 1 || !this.$refs.whiteboard || !CanvasDesigner) {
        return;
      }

      if (!this.canvasDesigner) {
        this.initCanvasDesigner();
      }

      this.canvasDesigner.addSyncListener(function (data) {
        _this27.rtcmConnection.send(data);
      });
      this.canvasDesigner.setSelected('pencil');
      this.canvasDesigner.setTools({
        pencil: true,
        text: true,
        image: true,
        pdf: true,
        eraser: true,
        line: true,
        arrow: true,
        dragSingle: true,
        dragMultiple: true,
        arc: true,
        rectangle: true,
        quadratic: true,
        bezier: true,
        marker: true,
        zoom: false,
        lineWidth: true,
        colorsPicker: true,
        extraOptions: false,
        code: false,
        undo: true
      });

      if (!this.canvasDesigner.iframe) {
        this.canvasDesigner.appendTo(this.$refs.whiteboard, function () {
          _this27.rtcmConnection.extra.hasWhiteboard = true;

          _this27.updateExtraData();

          _this27.canvasDesigner.captureStream(function (stream) {
            _this27.rtcmConnection.addStream(stream);

            _this27.rtcmConnection.onstream({
              streamid: stream.id,
              stream: stream,
              userid: _this27.rtcmConnection.userid,
              type: 'local',
              extra: _this27.rtcmConnection.extra
            });
          });
        });
      }
    },
    updateExtraData: function updateExtraData() {
      if (this.rtcmConnection && this.rtcmConnection.socket) {
        this.rtcmConnection.updateExtraData();
      }
    },
    destroyWhiteboard: function destroyWhiteboard() {
      var _this28 = this;

      if (this.canvasDesigner) {
        this.canvasDesigner.destroy();
        this.canvasDesigner = null;
        var found = this.$refs.videos.find(function (video) {
          return video.id === _this28.localWhiteboardStreamid;
        });

        if (found && found.srcObject) {
          if (this.rtcmConnection && this.localWhiteboardStreamid) {
            this.rtcmConnection.removeStream(this.localWhiteboardStreamid);
            this.rtcmOnStreamEnded({
              id: this.localWhiteboardStreamid
            });

            if (this.videoList.length > 1) {
              this.recheckLiveParticipants({
                streamid: this.localWhiteboardStreamid
              });
            }

            this.autoSetVideoMaximized();
          }

          this.emitSocketEvents('removedStream', found.srcObject); // this.videoList = this.videoList.filter(video => video.id !== this.localScreenStreamid)

          this.localWhiteboardStreamid = null;
        } else {
          this.localWhiteboardStreamid = null;
        }
      }

      this.rtcmConnection.extra.hasWhiteboard = false;
      this.updateExtraData();
    },
    hideAndDestroyWhiteboard: function hideAndDestroyWhiteboard() {
      var _this29 = this;

      formUtil.confirmAction().then(function (result) {
        if (result.value) {
          _this29.pageConfigs.layout = _this29.pageConfigs.lastLayout;
          _this29.showWhiteboard = false;

          _this29.destroyWhiteboard();
        } else {
          result.dismiss === _core_configs_sweet_alert__WEBPACK_IMPORTED_MODULE_17__["Swal"].DismissReason.cancel;
        }
      });
    },
    getMediaConstraints: function getMediaConstraints() {
      var _this30 = this;

      var setDefaults = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      this.needStreamAddOrReplace = false;

      if (setDefaults) {
        this.audioConstraints = {
          "sampleSize": 16,
          "channelCount": 2,
          "echoCancellation": false
        };
        this.videoConstraints = {
          width: {
            min: 426,
            ideal: 1280,
            max: 4096
          },
          height: {
            min: 240,
            ideal: 720,
            max: 2160
          }
        };
        return;
      }

      if (this.pageConfigs.enableAudio) {
        if (this.mediaConfigurations.selectedAudioInput && this.mediaConfigurations.selectedAudioInput.uuid && this.mediaConfigurations.selectedAudioInput.uuid !== 'auto') {
          this.audioConstraints = {
            deviceId: {
              ideal: this.mediaConfigurations.selectedAudioInput.uuid
            }
          };

          if (this.audioConstraints.hasOwnProperty('deviceId') && this.mediaConfigurations.activeAudioInput !== this.audioConstraints.deviceId.ideal) {
            this.needStreamAddOrReplace = true;
          }
        } else {
          this.audioConstraints = true;
        }
      } else {
        this.audioConstraints = false;
      }

      if (this.pageConfigs.enableVideo) {
        if (this.mediaConfigurations.selectedVideoInput && this.mediaConfigurations.selectedVideoInput.uuid && this.mediaConfigurations.selectedVideoInput.uuid !== 'auto') {
          this.videoConstraints = {
            deviceId: {
              ideal: this.mediaConfigurations.selectedVideoInput.uuid
            }
          };

          if (this.videoConstraints.hasOwnProperty('deviceId') && this.mediaConfigurations.activeVideoInput !== this.videoConstraints.deviceId.ideal) {
            this.needStreamAddOrReplace = true;
          }
        } else {
          delete this.videoConstraints.deviceId;
        }

        if (this.mediaConfigurations.facingMode !== 'auto') {
          this.videoConstraints.facingMode = this.mediaConfigurations.facingMode;

          if (this.mediaConfigurations.activeFacingMode !== this.videoConstraints.facingMode) {
            this.needStreamAddOrReplace = true;
          }
        } else {
          if (this.videoConstraints.hasOwnProperty('facingMode')) {
            if (this.mediaConfigurations.activeFacingMode !== this.videoConstraints.facingMode) {
              this.needStreamAddOrReplace = true;
            }

            delete this.videoConstraints.facingMode;
          }
        }

        if (this.mediaConfigurations.frameRate !== 'auto') {
          this.videoConstraints.frameRate = this.mediaConfigurations.frameRate;
        } else {
          if (this.videoConstraints.hasOwnProperty('frameRate')) {
            delete this.videoConstraints.frameRate;
          }
        }

        var selectedResolution = this.mediaDevices.resolutions.find(function (r) {
          return r.label === _this30.mediaConfigurations.selectedResolution;
        });

        if (selectedResolution && selectedResolution.label !== 'Auto') {
          this.videoConstraints.width = selectedResolution.constraints.width;
          this.videoConstraints.height = selectedResolution.constraints.height;
        } else {
          if (this.videoConstraints.hasOwnProperty('width')) {
            delete this.videoConstraints.width;
          }

          if (this.videoConstraints.hasOwnProperty('height')) {
            delete this.videoConstraints.height;
          }
        }
      } else {
        this.videoConstraints = false;
      }
    },
    applyMediaConstraints: function applyMediaConstraints() {
      var setDefaults = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

      if (!(this.rtcmConnection && this.localVideo)) {
        return;
      }

      this.getMediaConstraints(setDefaults);
      this.rtcmConnection.mediaConstraints = {
        video: this.meetingRulesHost.mediaConstraints.video ? this.videoConstraints : false,
        audio: this.meetingRulesHost.mediaConstraints.audio ? this.audioConstraints : false,
        screen: this.meetingRulesHost.mediaConstraints.screen
      };
      this.rtcmConnection.bandwidth = {
        audio: this.mediaConfigurations.bandwidth.audio === 'auto' ? false : this.mediaConfigurations.bandwidth.audio,
        video: this.mediaConfigurations.bandwidth.video === 'auto' ? false : this.mediaConfigurations.bandwidth.video,
        screen: this.mediaConfigurations.bandwidth.screen === 'auto' ? false : this.mediaConfigurations.bandwidth.screen
      };
      this.mediaConfigurations.activeAudioInput = this.audioConstraints && this.audioConstraints.hasOwnProperty('deviceId') ? this.audioConstraints.deviceId.ideal : null;
      this.mediaConfigurations.activeVideoInput = this.videoConstraints && this.videoConstraints.hasOwnProperty('deviceId') ? this.videoConstraints.deviceId.ideal : null;
      this.mediaConfigurations.activeFacingMode = this.mediaConfigurations.facingMode;

      if (!this.needStreamAddOrReplace) {
        this.rtcmConnection.applyConstraints(this.rtcmConnection.mediaConstraints);
        return;
      }

      this.closeConnectionAndStream(true);
    },
    closeConnectionAndStream: function closeConnectionAndStream() {
      var _this31 = this;

      var reopen = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      var callbackFn = arguments.length > 1 ? arguments[1] : undefined;
      this.stopKeepAlivePolling();
      this.stopAutoEndMeeting();

      if (this.autoEndingToast && _.isEmpty(this.autoEndingToast)) {
        _core_configs_sweet_alert__WEBPACK_IMPORTED_MODULE_17__["swtToast"].close();
        this.autoEndingToast = null;
      }

      if (this.rtcmConnection) {
        try {
          this.destroyWhiteboard();
          this.rtcmConnection.attachStreams.forEach(function (localStream) {
            localStream.stop();
          });

          if (this.$refs.greenRoomVideo && this.$refs.greenRoomVideo.srcObject) {
            var stream = this.$refs.greenRoomVideo.srcObject; // stopStream(stream)

            stream.stop();
            this.localGreenRoomStream = null;
          } else if (this.localGreenRoomStream) {
            var _stream = this.localGreenRoomStream; // stopStream(stream)

            _stream.stop();

            this.localGreenRoomStream = null;
          }

          if (this.localVideo) {
            // this.rtcmConnection.removeStream(this.localVideo.id)
            this.emitSocketEvents('removedStream', this.localVideo);
          }

          this.rtcmConnection.getAllParticipants().forEach(function (pid) {
            _this31.rtcmConnection.disconnectWith(pid);
          });
          this.rtcmConnection.leave();
          this.rtcmConnection.closeSocket();
          window.setTimeout(function () {
            _this31.localVideo = null;
            _this31.localScreenStreamid = null;
            _this31.localWhiteboardStreamid = null;
            _this31.localGreenRoomStream = null;

            if (_this31.rtcmConnection) {
              _this31.rtcmConnection.recorder = null;
            }

            _this31.rtcmConnection = null;

            if (reopen) {
              _this31.getOnline();
            }

            if (callbackFn && _.isFunction(callbackFn)) {
              callbackFn();
            }
          }, 500);
        } catch (e) {
          console.log('There are some errors');
          console.error(e);
        }
      }

      this.videoList = [];
    },
    initHark: function initHark(args) {
      if (!window.hark || !this.pageConfigs.speechDetection) {
        return;
      }

      var streamedObject = args.streamedObject;
      var stream = args.stream;
      var connection = args.connection;
      var options = {};
      var speechEvents = hark_hark_bundle_js__WEBPACK_IMPORTED_MODULE_5___default()(stream, options);
      speechEvents.on('speaking', function () {
        // console.log('speaking')
        connection.onspeaking(streamedObject);
      });
      speechEvents.on('stopped_speaking', function () {
        // console.log('silence')
        connection.onsilence(streamedObject);
      }); // speechEvents.on('volume_change', function(volume, threshold) {
      //     streamedObject.volume = volume
      //     streamedObject.threshold = threshold
      // connection.onvolumechange(streamedObject)
      // })

      window.harkInitiated = true; // console.log('hark initiated - ', streamedObject.extra.name)
    },
    recheckLiveParticipants: function recheckLiveParticipants(stream) {
      var _this32 = this;

      var newList = [];
      this.liveParticipants = this.rtcmConnection ? this.rtcmConnection.getAllParticipants() : [];
      this.videoList.forEach(function (item, index) {
        var userIndex = _this32.liveParticipants.findIndex(function (m) {
          return m === item.streamUserId;
        });

        if ((!stream || stream && item.id !== stream.streamid) && (item.local || !item.local && userIndex !== -1)) {
          newList.push(item);
        } else {
          item.status = false;
          newList.push(item);
        }
      });
      this.videoList = newList;
      setTimeout(function () {
        _this32.videoList = _this32.videoList.filter(function (v) {
          return v.status;
        });

        _this32.autoSetVideoMaximized();
      }, 3000);
    },
    autoSetVideoMaximized: function autoSetVideoMaximized() {
      var _this33 = this;

      var setMaximized = function setMaximized(maximizedIndex) {
        _this33.videoList[maximizedIndex].maximized = true;
        _this33.videoList = _this33.videoList.map(function (v, index) {
          v.maximized = false;

          if (index === maximizedIndex) {
            v.maximized = true;
          }

          return v;
        });
      };

      if (this.videoList.length > 1) {
        var maximizedRemoteVideoIndex = this.videoList.findIndex(function (v) {
          return !v.local && v.maximized && v.status;
        });

        if (maximizedRemoteVideoIndex === -1) {
          var remoteVideoIndex = this.videoList.findIndex(function (v) {
            return !v.local && v.hasStream;
          });

          if (remoteVideoIndex !== -1) {
            setMaximized(remoteVideoIndex);
          } else {
            setMaximized(0);
          }
        } else {
          var whiteboardRemoteVideoIndex = this.videoList.findIndex(function (v) {
            return !v.local && v.whiteboard && v.status;
          });

          if (whiteboardRemoteVideoIndex !== -1 && this.videoList[whiteboardRemoteVideoIndex].whiteboard) {
            setMaximized(whiteboardRemoteVideoIndex);
          }
        }
      } else if (this.videoList.length) {
        setMaximized(0);
      }
    },
    validateMediaDeviceRequest: function validateMediaDeviceRequest(mediaConstraints) {
      var deviceRequest = {
        video: mediaConstraints.video ? true : false,
        audio: mediaConstraints.audio ? true : false,
        screen: mediaConstraints.screen ? true : false
      };

      if (this.pageConfigs.allowJoiningWithoutDevices) {
        if (deviceRequest.audio && !(this.mediaDevices.audioInput && this.mediaDevices.audioInput.length)) {
          deviceRequest.audio = false;
        }

        if (deviceRequest.video && !(this.mediaDevices.videoInput && this.mediaDevices.videoInput.length)) {
          deviceRequest.video = false;
        }
      }

      return deviceRequest;
    },
    openRoom: function openRoom(meetingRoomId) {
      var _this34 = this;

      if (this.enableLogs) {
        console.log('openRoom', meetingRoomId);
      }

      this.rtcmConnection.session = _objectSpread({}, this.meetingRulesHost.session);
      this.videoList = [];
      this.getMediaConstraints();
      var activeMeetingRules = this.meetingRulesHost;
      this.rtcmConnection.mediaConstraints = {
        video: activeMeetingRules.mediaConstraints.video ? this.videoConstraints : false,
        audio: activeMeetingRules.mediaConstraints.audio ? this.audioConstraints : false,
        screen: activeMeetingRules.mediaConstraints.screen
      };
      this.rtcmConnection.sdpConstraints.mandatory = _objectSpread({}, activeMeetingRules.mandatory);
      this.rtcmConnection.autoCloseEntireSession = activeMeetingRules.autoCloseEntireSession;
      this.rtcmConnection.enableScalableBroadcast = activeMeetingRules.enableScalableBroadcast;

      if (this.rtcmConnection.enableScalableBroadcast) {
        this.rtcmConnection.maxRelayLimitPerUser = activeMeetingRules.maxRelayLimitPerUser;
      } // console.log('mediaConstraints')
      // console.log(this.rtcmConnection.mediaConstraints)
      // console.log('sdpConstraints')
      // console.log(this.rtcmConnection.sdpConstraints)


      this.rtcmConnection.extra.isInitiator = true;
      this.rtcmConnection.open(meetingRoomId, function (isRoomOpened, roomid, error) {
        if (_this34.enableLogs) {
          console.log('Room Opened: ', roomid);
        }

        _this34.isLoading = false;

        if (error) {
          formUtil.handleErrors(error);
        } else if (isRoomOpened === true) {
          _this34.updatePageConfigs(true);

          _this34.whisperChannel(window.meetingChannel, 'MeetingRoomCreated', {
            roomId: meetingRoomId
          });

          _this34.Custom({
            url: "/".concat(_this34.initUrl, "/").concat(_this34.uuid, "/alert"),
            method: 'post',
            params: {
              type: 'MeetingRoomCreated',
              data: {
                roomId: meetingRoomId
              }
            }
          })["catch"](function (error) {
            _this34.isLoading = false;
            formUtil.handleErrors(error);
          });

          _this34.initSocketListener();

          _this34.$toasted.success($t('meeting.meeting_created'), _this34.$toastConfig);
        }
      });
    },
    joinRoom: function joinRoom(meetingRoomId) {
      var _this35 = this;

      this.rtcmConnection.session = _objectSpread({}, this.meetingRulesGuest.session);
      this.videoList = [];
      this.getMediaConstraints();
      var activeMeetingRules = this.entity.canModerate ? this.meetingRulesHost : this.meetingRulesGuest;
      var deviceRequest = this.validateMediaDeviceRequest(activeMeetingRules.mediaConstraints);
      this.rtcmConnection.mediaConstraints = {
        video: deviceRequest.video ? this.videoConstraints : false,
        audio: deviceRequest.audio ? this.audioConstraints : false,
        screen: deviceRequest.screen
      };

      if (this.pageConfigs.allowJoiningWithoutDevices && !deviceRequest.audio && !deviceRequest.video && !deviceRequest.screen) {
        this.rtcmConnection.dontCaptureUserMedia = true;
      }

      this.rtcmConnection.sdpConstraints.mandatory = _objectSpread({}, activeMeetingRules.mandatory);
      this.rtcmConnection.autoCloseEntireSession = activeMeetingRules.autoCloseEntireSession;
      this.rtcmConnection.enableScalableBroadcast = activeMeetingRules.enableScalableBroadcast;

      if (this.rtcmConnection.enableScalableBroadcast) {
        this.rtcmConnection.maxRelayLimitPerUser = activeMeetingRules.maxRelayLimitPerUser;
      }

      this.rtcmConnection.extra.isInitiator = this.entity.canModerate; // console.log('mediaConstraints')
      // console.log(this.rtcmConnection.mediaConstraints)
      // console.log('sdpConstraints')
      // console.log(this.rtcmConnection.sdpConstraints)

      this.rtcmConnection.join(meetingRoomId, function (isJoined, roomid, error) {
        _this35.isLoading = false;

        if (isJoined === false || error) {
          _this35.closeConnectionAndStream();

          if (error === 'Room full') {
            _this35.$toasted.error($t('meeting.room_full'), _this35.$toastConfig.error);
          } else {
            _this35.$toasted.error($t('meeting.unable_to_join'), _this35.$toastConfig.error);
          }
        } else {
          _this35.updatePageConfigs(_this35.entity.canModerate);

          _this35.initSocketListener();

          _this35.$toasted.success($t('meeting.meeting_joined'), _this35.$toastConfig);
        }
      });
    },
    applyOnStartConfigs: function applyOnStartConfigs() {
      var _this36 = this;

      if (!this.rtcmConnection.extra.isInitiator && this.pageConfigs.muteParticipantsOnStart) {
        window.setTimeout(function () {
          _this36.toggleAudio(null, true);
        }, 1000);
      }
    },
    shareScreen: function shareScreen() {
      var _this37 = this;

      try {
        this.rtcmConnection.addStream({
          screen: true,
          streamCallback: function streamCallback(stream) {
            _this37.rtcmConnection.extra.screenStreamId = stream.id;

            _this37.updateExtraData();
          }
        });
      } catch (e) {}
    },
    stopSharingScreen: function stopSharingScreen() {
      var _this38 = this;

      this.isLoading = true;
      this.rtcmConnection.extra.screenStreamId = null;
      this.updateExtraData();
      var found = this.$refs.videos.find(function (video) {
        return video.id === _this38.localScreenStreamid;
      });

      if (found && found.srcObject) {
        var tracks = found.srcObject.getTracks();
        tracks.forEach(function (track) {
          track.removeEventListener('ended', _this38.stopSharingScreen);
          track.enabled = false;
          track.stop();
        });
        this.rtcmConnection.removeStream(this.localScreenStreamid);
        this.emitSocketEvents('removedStream', found.srcObject); // this.videoList = this.videoList.filter(video => video.id !== this.localScreenStreamid)

        this.localScreenStreamid = null;
        this.isLoading = false;
      } else {
        this.localScreenStreamid = null;
        this.isLoading = false;
      }
    },
    getOnline: function getOnline() {
      var _this39 = this;

      this.isLoading = true;
      this.showAgenda = false;
      var meetingStatusEalier = this.entity.status;
      this.$gaEvent('engagement', 'meeting_getOnline');
      this.initMediaAndRtcmConnection();
      this.Custom({
        url: "/".concat(this.initUrl, "/").concat(this.uuid, "/join"),
        method: 'post'
      }).then(function (response) {
        _this39.meetingRoomId = response.meeting.roomId;
        response.meeting = _this39.updateMeetingTimezone(response.meeting);
        _this39.entity = response.meeting;
        _this39.rtcmConnection.extra = {
          username: _this39.user.username,
          name: _this39.user.name,
          uuid: _this39.user.uuid,
          avatar: _this39.profile.avatar,
          cover: _this39.profile.cover,
          audioMuted: !_this39.pageConfigs.enableAudio,
          videoMuted: !_this39.pageConfigs.enableVideo,
          isHandUp: _this39.isHandUp,
          isInitiator: false,
          isHost: _this39.entity.isHost,
          canModerate: _this39.entity.canModerate
        };

        if (_this39.enableLogs) {
          console.log('rtcmConnection', _this39.rtcmConnection);
          console.log('mediaConfigurations', _this39.mediaConfigurations);
          console.log('mediaDevices', _this39.mediaDevices);
          console.log('pageConfigs', _this39.pageConfigs);
          console.log('videoConstraints', _this39.videoConstraints);
          console.log('audioConstraints', _this39.audioConstraints);
          console.log('meetingRulesHost', _this39.meetingRulesHost);
          console.log('meetingRulesGuest', _this39.meetingRulesGuest);
          console.log('rtcmConnection-ExtraData', _this39.rtcmConnection.extra);
        }

        _this39.rtcmConnection.checkPresence(_this39.meetingRoomId, function (isRoomExist, roomid) {
          if (_this39.enableLogs) {
            console.log('RoomID checkPresence', isRoomExist);
          }

          if (isRoomExist === true) {
            _this39.joinRoom(_this39.meetingRoomId);
          } else {
            if (_this39.entity.canModerate) {
              _this39.openRoom(_this39.meetingRoomId);
            } else {
              _this39.isLoading = false;

              _this39.$toasted.error($t('meeting.room_not_found'), _this39.$toastConfig.error);
            }
          }

          _this39.startKeepAlivePolling();

          _this39.startMeetingTimer();
        });
      })["catch"](function (error) {
        _this39.isLoading = false;
        formUtil.handleErrors(error);
      });
    },
    getOffline: function getOffline() {
      var _this40 = this;

      this.$gaEvent('engagement', 'meeting_getOffline');
      var alert = 'confirm';

      if (this.rtcmConnection.recorder && window.recordingDurationInterval) {
        alert = null;
        this.stopRecording();
      }

      this.isLoading = true;
      this.meetingAction('leave', null, {
        alert: alert,
        sameCallbackIfError: true,
        callback: function callback(e) {
          _this40.showAgenda = true;
          _this40.showWhiteboard = false;

          if (_this40.pageConfigs.layout === 'presentation') {
            _this40.pageConfigs.layout = _this40.pageConfigs.lastLayout;
          }

          _this40.closeConnectionAndStream(false, function () {
            _this40.stopMeetingTimer();

            _this40.setupGreenRoom();

            _this40.initMediaAndRtcmConnection();
          });
        }
      });
    },
    // meeting action methods
    meetingAction: function meetingAction(action) {
      var _this41 = this;

      var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var opts = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {
        alert: 'confirm'
      };
      var defaultOpts = {
        alert: 'confirm'
      };
      opts = Object.assign({}, defaultOpts, opts);

      var callApi = function callApi(dataToSend) {
        _this41.isLoading = true;
        data = dataToSend ? dataToSend : data;

        if (action === 'end') {
          if (!(_this41.entity && _this41.entity.status === 'live')) {
            return;
          }
        }

        _this41.Custom({
          url: "/".concat(_this41.initUrl, "/").concat(_this41.uuid, "/").concat(action),
          method: 'post',
          data: data
        }).then(function (response) {
          _this41.updateEntityBackup(response.meeting);

          response.meeting = _this41.updateMeetingTimezone(response.meeting);
          _this41.entity = response.meeting;

          var informObj = _objectSpread(_objectSpread({}, _this41.entityDatesBackup), {}, {
            dateUpdated: true
          });

          if (opts.inform) {
            informObj = _objectSpread(_objectSpread({}, informObj), opts.inform);
          }

          _this41.informAboutMeetingUpdate(informObj);

          _this41.$toasted.success(response.message, _this41.$toastConfig);

          if (opts.callback) {
            opts.callback(response);
          }

          _this41.isLoading = false;
        })["catch"](function (error) {
          _this41.isLoading = false;

          if (opts.callback && opts.sameCallbackIfError) {
            opts.callback(error);
          }

          formUtil.handleErrors(error);
        });
      };

      if (!action) {
        this.isLoading = false;
        return;
      }

      if (opts.alert === 'confirm' || opts.alert === true) {
        formUtil.confirmAction().then(function (result) {
          if (result.value) {
            callApi();
          } else {
            _this41.isLoading = false;
            result.dismiss === _core_configs_sweet_alert__WEBPACK_IMPORTED_MODULE_17__["Swal"].DismissReason.cancel;
          }
        });
      } else if (opts.alert === 'input') {
        swtAlert.fire({
          title: opts.title,
          input: 'text',
          inputPlaceholder: opts.inputPlaceholder,
          showCancelButton: true,
          confirmButtonText: 'Proceed!',
          cancelButtonText: 'Go Back!'
        }).then(function (result) {
          if (result.value) {
            var toSend = {};
            toSend[opts.fieldName] = result.value;
            callApi(toSend);
          } else {
            _this41.isLoading = false;
            result.dismiss === _core_configs_sweet_alert__WEBPACK_IMPORTED_MODULE_17__["Swal"].DismissReason.cancel;
          }
        });
      } else {
        callApi();
      }
    },
    snoozeMeeting: function snoozeMeeting(period) {
      this.meetingAction('snooze', {
        period: period
      });
    },
    cancelMeeting: function cancelMeeting() {
      this.meetingAction('cancel', null, {
        alert: 'input',
        title: $t('meeting.reason_for_cancellation'),
        inputPlaceholder: $t('meeting.reason_for_cancellation'),
        fieldName: 'cancellationReason'
      });
    },
    endMeeting: _.debounce(function () {
      var _this42 = this;

      var alert = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
      this.$gaEvent('engagement', 'meeting_endMeeting');

      if (this.rtcmConnection && this.rtcmConnection.recorder && window.recordingDurationInterval) {
        alert = null;
        this.stopRecording();
      }

      if (this.entity && this.entity.status === 'live') {
        this.isLoading = true;
        this.meetingAction('end', null, {
          alert: alert,
          sameCallbackIfError: true,
          callback: function callback(e) {
            _this42.showAgenda = true;
            _this42.showWhiteboard = false;

            if (_this42.pageConfigs.layout === 'presentation') {
              _this42.pageConfigs.layout = _this42.pageConfigs.lastLayout;
            }

            if (e && e.meeting) {
              _this42.emitSocketEvents('meetingEnded', {
                status: e.meeting.status
              });
            }

            _this42.closeConnectionAndStream();
          }
        });
      } else {
        this.showAgenda = true;
        this.showWhiteboard = false;

        if (this.pageConfigs.layout === 'presentation') {
          this.pageConfigs.layout = this.pageConfigs.lastLayout;
        }

        if (e && e.meeting) {
          this.emitSocketEvents('meetingEnded', {
            status: e.meeting.status
          });
        }

        this.closeConnectionAndStream();
      }
    }, 5000, {
      'leading': true,
      'trailing': false
    }),
    // meeting related methods
    updateMeetingRules: function updateMeetingRules() {
      if (this.entity.type.uuid === 'video_conference') {
        this.meetingRulesHost = {
          session: {
            audio: true,
            video: true,
            screen: false,
            data: true,
            oneway: false
          },
          mediaConstraints: {
            audio: true,
            video: true,
            screen: false
          },
          mandatory: {
            OfferToReceiveAudio: true,
            OfferToReceiveVideo: true
          },
          autoCloseEntireSession: false,
          enableScalableBroadcast: false
        };
        this.meetingRulesGuest = {
          session: {
            audio: true,
            video: true,
            screen: false,
            data: true,
            oneway: false
          },
          mediaConstraints: {
            audio: true,
            video: true,
            screen: false
          },
          mandatory: {
            OfferToReceiveAudio: true,
            OfferToReceiveVideo: true
          },
          autoCloseEntireSession: false,
          enableScalableBroadcast: false
        };
      } else if (this.entity.type.uuid === 'audio_conference') {
        this.meetingRulesHost = {
          session: {
            audio: true,
            video: false,
            screen: false,
            data: true,
            oneway: false
          },
          mediaConstraints: {
            audio: true,
            video: false,
            screen: false
          },
          mandatory: {
            OfferToReceiveAudio: true,
            OfferToReceiveVideo: false
          },
          autoCloseEntireSession: false,
          enableScalableBroadcast: false
        };
        this.meetingRulesGuest = {
          session: {
            audio: true,
            video: false,
            screen: false,
            data: true,
            oneway: false
          },
          mediaConstraints: {
            audio: true,
            video: false,
            screen: false
          },
          mandatory: {
            OfferToReceiveAudio: true,
            OfferToReceiveVideo: false
          },
          autoCloseEntireSession: false,
          enableScalableBroadcast: false
        };
      } else if (this.entity.type.uuid === 'webinar') {
        this.meetingRulesHost = {
          session: {
            audio: true,
            video: true,
            screen: false,
            data: true,
            oneway: true
          },
          mediaConstraints: {
            audio: true,
            video: true,
            screen: false
          },
          mandatory: {
            OfferToReceiveAudio: false,
            OfferToReceiveVideo: false
          },
          autoCloseEntireSession: true,
          enableScalableBroadcast: true,
          maxRelayLimitPerUser: 1
        };
        this.meetingRulesGuest = {
          session: {
            audio: true,
            video: true,
            screen: false,
            data: true,
            oneway: true
          },
          mediaConstraints: {
            audio: false,
            video: false,
            screen: false
          },
          mandatory: {
            OfferToReceiveAudio: true,
            OfferToReceiveVideo: true
          },
          autoCloseEntireSession: true,
          enableScalableBroadcast: true,
          maxRelayLimitPerUser: 1
        };
      } else if (this.entity.type.uuid === 'live_class') {
        this.meetingRulesHost = {
          session: {
            audio: true,
            video: true,
            screen: false,
            data: true,
            oneway: false
          },
          mediaConstraints: {
            audio: true,
            video: true,
            screen: false
          },
          mandatory: {
            OfferToReceiveAudio: true,
            OfferToReceiveVideo: true
          },
          autoCloseEntireSession: true,
          enableScalableBroadcast: false
        };
        this.meetingRulesGuest = {
          session: {
            audio: true,
            video: true,
            screen: false,
            data: true,
            oneway: false
          },
          mediaConstraints: {
            audio: true,
            video: true,
            screen: false
          },
          mandatory: {
            OfferToReceiveAudio: true,
            OfferToReceiveVideo: true
          },
          autoCloseEntireSession: true,
          enableScalableBroadcast: false
        };
      } else if (this.entity.type.uuid === 'podcast') {
        this.meetingRulesHost = {
          session: {
            audio: true,
            video: false,
            screen: false,
            data: false,
            oneway: true
          },
          mediaConstraints: {
            audio: true,
            video: false,
            screen: false
          },
          mandatory: {
            OfferToReceiveAudio: false,
            OfferToReceiveVideo: false
          },
          autoCloseEntireSession: true,
          enableScalableBroadcast: true,
          maxRelayLimitPerUser: 1
        };
        this.meetingRulesGuest = {
          session: {
            audio: true,
            video: false,
            screen: false,
            data: false,
            oneway: true
          },
          mediaConstraints: {
            audio: false,
            video: false,
            screen: false
          },
          mandatory: {
            OfferToReceiveAudio: true,
            OfferToReceiveVideo: false
          },
          autoCloseEntireSession: true,
          enableScalableBroadcast: true,
          maxRelayLimitPerUser: 1
        };
      }
    },
    updateMeetingTimezone: function updateMeetingTimezone(meetingEntity) {
      var _this43 = this;

      var getTimezoneDateTime = function getTimezoneDateTime(dt) {
        return _core_filters_momentz__WEBPACK_IMPORTED_MODULE_14__["momentDateTimeTz"](dt, _this43.vars.serverDateTimeFormat);
      };

      this.updateEntityBackup(meetingEntity);
      meetingEntity.startDateTime = getTimezoneDateTime(meetingEntity.startDateTime);

      if (meetingEntity.plannedStartDateTime) {
        meetingEntity.plannedStartDateTime = getTimezoneDateTime(meetingEntity.plannedStartDateTime);
      }

      if (meetingEntity.startedAt) {
        meetingEntity.startedAt = getTimezoneDateTime(meetingEntity.startedAt);
      }

      if (meetingEntity.estimatedEndTime) {
        meetingEntity.estimatedEndTime = getTimezoneDateTime(meetingEntity.estimatedEndTime);
      }

      return meetingEntity;
    },
    // event callback methods
    beforeUnload: function beforeUnload(event) {
      if (this.localVideo) {
        this.emitSocketEvents('removedStream', this.localVideo);
      }

      if (this.stopNavigation) {
        event.returnValue = this.stopNavigationMessage;
      }
    },
    logEvent: function logEvent(msg, args) {
      var type = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'log';

      if (this.enableLogs) {
        if (type === 'log') {
          console.log(msg, args);
        } else if (type === 'error') {
          console.error(msg, args);
        } else if (type === 'debug') {
          console.trace(msg, args);
        }
      }
    },
    // devices modal methods
    toggleDevicesModal: function toggleDevicesModal() {
      this.mediaConfigFormData = _.cloneDeep(this.mediaConfigurations);
      this.showDevicesModal = true;
    },
    onDevicesModalOK: function onDevicesModalOK(e) {
      var _this44 = this;

      e.preventDefault();

      if (!Object(_core_utils_form__WEBPACK_IMPORTED_MODULE_13__["areEqual"])(this.mediaConfigFormData, this.mediaConfigurations)) {
        this.mediaConfigurations = _.cloneDeep(this.mediaConfigFormData);
        this.applyMediaConstraints();
      }

      this.$nextTick(function () {
        _this44.$bvModal.hide('devicesModal');
      });
    },
    onDevicesModalCancel: function onDevicesModalCancel(e) {
      var _this45 = this;

      e.preventDefault();
      this.$nextTick(function () {
        _this45.$bvModal.hide('devicesModal');
      });
    },
    // page methods
    updatePageConfigs: function updatePageConfigs() {
      var _this46 = this;

      var isInitiator = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      var configAudioRecFormat = this.configs.meeting.recordingFormatAudio ? this.configs.meeting.recordingFormatAudio : 'audio/webm';
      var configVideoRecFormat = this.configs.meeting.recordingFormatVideo ? this.configs.meeting.recordingFormatVideo : 'video/webm';
      var configOptions = {};
      var recordingType = this.mediaConfigurations.recording.type;
      var recordingFormat = this.mediaConfigurations.recording.mimeType;

      if (this.entity.type.uuid === 'video_conference') {
        configOptions = {
          enableAudio: true,
          enableVideo: true,
          showEnableAudioBtn: true,
          showEnableVideoBtn: true
        };
        recordingType = 'video';
        recordingFormat = configVideoRecFormat;
      } else if (this.entity.type.uuid === 'audio_conference') {
        configOptions = {
          enableAudio: true,
          enableVideo: true,
          showEnableAudioBtn: true,
          showEnableVideoBtn: false
        };
        recordingType = 'audio';
        recordingFormat = configAudioRecFormat;
      } else if (this.entity.type.uuid === 'webinar') {
        configOptions = isInitiator ? {
          enableAudio: true,
          enableVideo: true,
          showEnableAudioBtn: true,
          showEnableVideoBtn: true
        } : {
          enableAudio: true,
          enableVideo: true,
          showEnableAudioBtn: false,
          showEnableVideoBtn: false,
          enableScreenSharing: false,
          enableFileSharing: false,
          enableRecording: false,
          enableHandGesture: false,
          enableWhiteboard: false
        };
        recordingType = 'video';
        recordingFormat = configVideoRecFormat;
      } else if (this.entity.type.uuid === 'live_class') {
        configOptions = isInitiator ? {
          enableAudio: true,
          enableVideo: true,
          showEnableAudioBtn: true,
          showEnableVideoBtn: true
        } : {
          enableAudio: true,
          enableVideo: true,
          showEnableAudioBtn: false,
          showEnableVideoBtn: false,
          enableScreenSharing: false,
          enableFileSharing: false,
          enableRecording: false,
          enableWhiteboard: false
        };
        recordingType = 'video';
        recordingFormat = configVideoRecFormat;
      } else if (this.entity.type.uuid === 'podcast') {
        configOptions = isInitiator ? {
          enableAudio: true,
          enableVideo: false,
          showEnableAudioBtn: true,
          showEnableVideoBtn: false,
          enableScreenSharing: false,
          enableHandGesture: false,
          enableWhiteboard: false
        } : {
          enableAudio: true,
          enableVideo: false,
          showEnableAudioBtn: false,
          showEnableVideoBtn: false,
          enableScreenSharing: false,
          enableFileSharing: false,
          enableRecording: false,
          enableHandGesture: false,
          enableWhiteboard: false
        };
        recordingType = 'audio';
        recordingFormat = configAudioRecFormat;
      }

      configOptions.objForEach(function (value, key) {
        return _this46.pageConfigs[key] = value;
      });
      this.mediaConfigurations.recording.type = recordingType;
      this.mediaConfigurations.recording.mimeType = recordingFormat;
      this.mediaConfigurations.recording.timeSlice = this.pageConfigs.recordingTimeSlice || 5000;
      var selectedResolution = this.mediaDevices.resolutions.find(function (r) {
        return r.label === _this46.mediaConfigurations.selectedResolution;
      });

      if (selectedResolution && selectedResolution.label !== 'Auto') {
        this.mediaConfigurations.recording.video = {
          width: selectedResolution.constraints.width.max,
          height: selectedResolution.constraints.height.max
        };
      } else if (this.mediaConfigurations.recording.video) {
        delete this.mediaConfigurations.recording.video;
      }

      this.rtcmConnection.extra.audioMuted = !this.pageConfigs.enableAudio;
      this.rtcmConnection.extra.videoMuted = !this.pageConfigs.enableVideo;
      this.rtcmConnection.extra.isHandUp = this.isHandUp;
      this.updateExtraData();

      if (this.pageConfigs.enableWhiteboard) {
        Object(_core_utils__WEBPACK_IMPORTED_MODULE_11__["loadScript"])('/js/canvas-designer/webrtc-handler.js');
        Object(_core_utils__WEBPACK_IMPORTED_MODULE_11__["loadScript"])('/js/canvas-designer/canvas-designer-widget.js');
      }
    },
    destroyPage: function destroyPage() {
      if (window.countdownInterval) {
        clearInterval(window.countdownInterval);
      }

      if (window.meetingKeepAliveTimer) {
        clearInterval(window.meetingKeepAliveTimer);
      }

      if (window.recordingDurationInterval) {
        clearInterval(window.recordingDurationInterval);
      }

      this.SetUiConfig({
        pageHeaderShow: true,
        pageFooterShow: true
      });
      this.closeConnectionAndStream();

      if (window.Echo) {
        if (window.meetingChannel) {
          window.meetingChannel.stopListening('MeetingStatusChanged');
          window.meetingChannel.stopListening('NewMessage');
        }

        window.Echo.leave("Meeting.".concat(this.uuid));
      }

      if (screenfull__WEBPACK_IMPORTED_MODULE_7___default.a.isEnabled) {
        screenfull__WEBPACK_IMPORTED_MODULE_7___default.a.off('change');
        screenfull__WEBPACK_IMPORTED_MODULE_7___default.a.off('error');
      }
    },
    getInitialData: function getInitialData() {
      var _this47 = this;

      this.isLoading = true;

      if (!window.Echo) {
        this.$toasted.error($t('config.pusher.credential_required'), this.$toastConfig.error);
        this.$router.push({
          name: this.fallBackRoute
        });
        return;
      }

      return this.Get({
        uuid: this.uuid
      }).then(function (response) {
        if (response.isInstantMeeting) {
          _this47.fallBackRoute = 'appInstantMeetingList';
          _this47.pageConfigs.hasAgenda = false;
        }

        if (response.isMeetingRoom) {
          _this47.pageConfigs.hasAgenda = false;
          _this47.fallBackRoute = 'appRoomList';
        }

        if (response.identifier && response.isPam && !(_this47.$route.query && _this47.$route.query.identifier && _this47.$route.query.identifier === response.identifier)) {
          _this47.$router.replace({
            name: _this47.$route.name,
            params: _this47.$route.params,
            query: _objectSpread(_objectSpread({}, _this47.$route.query), {}, {
              identifier: response.identifier
            })
          });
        }

        if (response.isPaid && !response.hasPaid) {
          _this47.$toasted.error($t('meeting.could_not_join_paid_meeting_without_payment'), _this47.$toastConfig.error);

          setTimeout(function () {
            _this47.$router.push({
              name: 'appMeetingPayment',
              params: {
                uuid: response.uuid
              }
            });
          }, 2000);
          return;
        }

        response.config.objForEach(function (value, key) {
          return _this47.pageConfigs[key] = value;
        });
        _this47.pageConfigs.disableScroll = _this47.pageConfigs.layout === 'grid' ? true : response.config && response.config.hasOwnProperty('disableScroll') ? response.config.disableScroll : _this47.pageConfigs.disableScroll;
        response = _this47.updateMeetingTimezone(response);
        _this47.entity = response;

        _this47.updateMeetingRules(); //Changes to prefer rear camera


        if (_this47.pageConfigs.preferRearCameraFirst) {
          _this47.mediaConfigurations.facingMode = 'environment';
        }

        if (response.roomId && response.status === 'live') {
          setTimeout(function () {
            _this47.initMediaAndRtcmConnection();

            _this47.rtcmConnection.checkPresence(response.roomId, function (isRoomExist, roomid) {
              _this47.roomIdAlive = !!isRoomExist;
            });
          }, 1000);
        }

        _this47.joinChannel();

        _this47.setupGreenRoom();

        if (response.isInstantMeeting && !response.isBlocked && response.status === 'live') {
          if (!(_this47.rtcmConnection && _this47.rtcmConnection.isInitiator || response.canModerate) && (response.type.uuid === 'live_class' || response.type.uuid === 'webinar')) {
            //if current user is a normal user (not an initiator or moderator), and type is live class or webinar
            _this47.isLoading = false;
          } else {
            _this47.getOnline();
          }
        } else {
          _this47.isLoading = false;
        }

        if (response.autoTranslate) {
          _this47.autoTranslate = response.autoTranslate;
        }

        return response;
      })["catch"](function (error) {
        _this47.isLoading = false;
        formUtil.handleErrors(error);

        _this47.$router.push({
          name: _this47.fallBackRoute
        });

        return error;
      });
    }
  }, _defineProperty(_objectSpread2, "stopStream", function stopStream(stream) {
    if (stream && _.isFunction(stream.stop)) {
      stream.stop();
    }

    if (stream && _.isFunction(stream.getTracks)) {
      stream.getTracks().forEach(function (track) {
        return track.stop();
      });
    }
  }), _defineProperty(_objectSpread2, "toggleVideoTracks", function toggleVideoTracks(stream, value) {
    if (!stream) {
      return;
    }

    var tracks = stream.getVideoTracks();
    tracks.forEach(function (track) {
      track.enabled = value;
    });
  }), _defineProperty(_objectSpread2, "toggleAudioTracks", function toggleAudioTracks(stream, value) {
    if (!stream) {
      return;
    }

    var tracks = stream.getAudioTracks();
    tracks.forEach(function (track) {
      track.enabled = value;
    });
  }), _defineProperty(_objectSpread2, "setupGreenRoom", function setupGreenRoom() {
    var _this48 = this;

    var force = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

    var setupMicActivity = function setupMicActivity(stream) {
      if (_this48.$refs.greenRoomAudio && _this48.pageConfigs.enableAudio) {
        var audioContext = new AudioContext();
        var analyser = audioContext.createAnalyser();
        var microphone = audioContext.createMediaStreamSource(stream);
        var javascriptNode = audioContext.createScriptProcessor(2048, 1, 1);
        analyser.smoothingTimeConstant = 0.8;
        analyser.fftSize = 1024;
        microphone.connect(analyser);
        analyser.connect(javascriptNode);
        javascriptNode.connect(audioContext.destination);
        Object(_core_plugins_vumeter__WEBPACK_IMPORTED_MODULE_15__["default"])(_this48.$refs.greenRoomAudio, {
          width: 'sibling',
          boxGapFraction: 0.2
        });

        javascriptNode.onaudioprocess = function () {
          var array = new Uint8Array(analyser.frequencyBinCount);
          analyser.getByteFrequencyData(array);
          var values = 0;
          var length = array.length;

          for (var i = 0; i < length; i++) {
            values += array[i];
          }

          var average = values / length;
          var volumeActivity = Math.round(average); // console.log(Math.round(average))

          _this48.micVolumeActivity = volumeActivity < 0 ? 0 : volumeActivity;
        };
      }
    };

    if (this.$refs.videos && this.$refs.videos.length) {
      if (this.localGreenRoomStream) {
        this.stopStream(this.localGreenRoomStream);
      }

      this.localGreenRoomStream = null;
      return;
    }

    if (this.pageConfigs.enableVideo && this.pageConfigs.enableAudio && !(this.$refs.greenRoomVideo && this.$refs.greenRoomVideo.srcObject)) {
      force = true;
    }

    if (!this.localGreenRoomStream || force) {
      if (this.localGreenRoomStream) {
        this.stopStream(this.localGreenRoomStream);
      }

      this.localGreenRoomStream = null;
      this.getMediaConstraints();

      if (this.videoConstraints && this.mediaConfigurations.selectedVideoInput || this.audioConstraints && this.mediaConfigurations.selectedAudioInput) {
        navigator.mediaDevices.getUserMedia({
          video: this.videoConstraints,
          audio: this.audioConstraints || true
        }).then(function (stream) {
          _this48.toggleVideoTracks(stream, _this48.pageConfigs.enableVideo);

          _this48.toggleAudioTracks(stream, _this48.pageConfigs.enableAudio);

          _this48.localGreenRoomStream = stream;

          if (_this48.$refs.greenRoomVideo && _this48.pageConfigs.enableVideo) {
            _this48.$refs.greenRoomVideo.srcObject = stream;
          }

          setTimeout(function () {
            setupMicActivity(_this48.localGreenRoomStream);
          }, 1000);
        })["catch"](this.rtcmOnMediaError);
      }
    } else {
      if (this.pageConfigs.enableVideo || this.pageConfigs.enableAudio) {
        this.toggleVideoTracks(this.localGreenRoomStream, this.pageConfigs.enableVideo);
        this.toggleAudioTracks(this.localGreenRoomStream, this.pageConfigs.enableAudio);

        if (!this.pageConfigs.enableVideo && this.$refs.greenRoomVideo) {
          this.$refs.greenRoomVideo.srcObject = null;
        }

        setupMicActivity(this.localGreenRoomStream);
      } else {
        if (this.localGreenRoomStream) {
          this.stopStream(this.localGreenRoomStream);
        }

        this.localGreenRoomStream = null;
        this.$refs.greenRoomVideo.srcObject = null;
      }
    }
  }), _defineProperty(_objectSpread2, "setupMediaDevices", function setupMediaDevices() {
    var _this49 = this;

    var rtcmc = new rtcmulticonnection__WEBPACK_IMPORTED_MODULE_2___default.a();

    if (rtcmc.DetectRTC.isWebRTCSupported === false) {
      this.$toasted.error($t('meeting.invalid_browser_error'), this.$toastConfig.error);
    }

    this.isLoading = true;
    this.mediaDeviceIssue = this.permissionRejected = false;

    var loadDevices = function loadDevices(callbackFn) {
      rtcmc.DetectRTC.load(function () {
        if (_this49.enableLogs) {
          console.log(rtcmc.DetectRTC);
        }

        if (rtcmc.DetectRTC.hasMicrophone === true) {
          _this49.mediaDevices.audioInput = rtcmc.DetectRTC.audioInputDevices.map(function (device) {
            return {
              'uuid': device.deviceId || device.id,
              'name': device.label || "microphone ".concat(_this49.mediaDevices.audioInput.length + 1)
            };
          });
        } else {
          _this49.mediaDeviceIssue = true;
        }

        if (rtcmc.DetectRTC.hasWebcam === true) {
          _this49.mediaDevices.videoInput = rtcmc.DetectRTC.videoInputDevices.map(function (device) {
            return {
              'uuid': device.deviceId || device.id,
              'name': device.label || "camera ".concat(_this49.mediaDevices.videoInput.length + 1)
            };
          });
        } else {
          _this49.mediaDeviceIssue = true;
        }

        if (rtcmc.DetectRTC.hasSpeakers === true) {
          _this49.mediaDevices.audioOutput = rtcmc.DetectRTC.audioOutputDevices.map(function (device) {
            return {
              'uuid': device.deviceId || device.id,
              'name': device.label || "speaker ".concat(_this49.mediaDevices.audioOutput.length + 1)
            };
          });
        } else {
          _this49.$toasted.error($t('meeting.audio_output_device_error'), _this49.$toastConfig.error);
        }

        _this49.mediaConfigurations.selectedAudioInput = _this49.mediaDevices.audioInput ? _this49.mediaDevices.audioInput[0] : null;
        _this49.mediaConfigurations.selectedVideoInput = _this49.mediaDevices.videoInput ? _this49.mediaDevices.videoInput[0] : null;
        _this49.mediaConfigFormData = _.cloneDeep(_this49.mediaConfigurations);

        if (callbackFn) {
          callbackFn();
        }

        _this49.getInitialData();
      });
    };

    if (!rtcmc.DetectRTC.MediaDevices.length || rtcmc.DetectRTC.MediaDevices[0] && rtcmc.DetectRTC.MediaDevices[0].isCustomLabel) {
      navigator.mediaDevices.getUserMedia({
        audio: true,
        video: true
      }).then(function (stream) {
        loadDevices(function () {
          // release camera
          stream.getTracks().forEach(function (track) {
            track.stop();
          });
        });
      })["catch"](function (error) {
        _this49.rtcmOnMediaError(error);

        _this49.getInitialData();
      });
    } else {
      loadDevices();
    }
  }), _defineProperty(_objectSpread2, "doInit", function doInit() {
    this.Init({
      url: this.initUrl
    });

    if (window.isDuplicate()) {
      this.duplicateTab = true;
    }

    this.setupMediaDevices();
  }), _defineProperty(_objectSpread2, "initNetworkListener", function initNetworkListener() {
    var vm = this;
    window.addEventListener('offline', function (e) {
      if (vm.rtcmConnection && vm.videoList && vm.videoList.length) {
        vm.videoList = vm.videoList.slice(0, 1);
        vm.autoSetVideoMaximized();
      }
    });
    window.addEventListener('online', function (e) {
      vm.closeConnectionAndStream(true);
    });
  }), _objectSpread2)),
  mounted: function mounted() {
    var _this50 = this;

    if (screenfull__WEBPACK_IMPORTED_MODULE_7___default.a.isEnabled) {
      screenfull__WEBPACK_IMPORTED_MODULE_7___default.a.on('change', function () {
        _this50.SetUiConfig({
          fullScreen: screenfull__WEBPACK_IMPORTED_MODULE_7___default.a.isFullscreen
        });
      });
      screenfull__WEBPACK_IMPORTED_MODULE_7___default.a.on('error', function (event) {
        console.error('Failed to enable fullscreen', event);
      });
      this.SetUiConfig({
        fullScreen: false
      });
    }

    this.doInit();
    window.addEventListener('beforeunload', this.beforeUnload);
    this.checkIfOffline();
    this.initNetworkListener();
  },
  created: function created() {
    document.body.classList.add("meeting-page");

    if (this.$route.params.uuid) {
      this.uuid = this.$route.params.uuid;
    }

    this.mediaConfigFormData = _.cloneDeep(this.mediaConfigurations);
    this.SetUiConfig({
      pageHeaderShow: false,
      pageFooterShow: false
    }); // detect 2G and alert

    if (navigator.connection && navigator.connection.type === 'cellular' && navigator.connection.downlinkMax <= 0.115) {
      alert('2G is not supported. Please use a better internet service.');
    }
  },
  beforeRouteEnter: function beforeRouteEnter(to, from, next) {
    if (!to.params.uuid) {
      next({
        name: from === 'appMeetingView' ? from : 'AppMeetingList'
      });
    } else {
      next(function (vm) {
        vm.prevRoute = from;
      });
    }
  },
  beforeDestroy: function beforeDestroy() {
    if (!window.isMeetingPageDestroyed) {
      this.isLoading = true;
      this.destroyPage();

      if (this.entity && this.entity.status === 'live') {
        this.Custom({
          url: "/".concat(this.initUrl, "/").concat(this.uuid, "/leave"),
          method: 'post'
        });
      }

      window.isMeetingPageDestroyed = true;
    }
  },
  beforeRouteLeave: function beforeRouteLeave(to, from, next) {
    var _this51 = this;

    var doBeforeLeaving = function doBeforeLeaving() {
      var leave = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

      if (!leave) {
        return;
      }

      _this51.isLoading = true;

      _this51.destroyPage();

      window.removeEventListener('beforeunload', _this51.beforeUnload);

      if (_this51.entity && _this51.entity.status === 'live') {
        _this51.Custom({
          url: "/".concat(_this51.initUrl, "/").concat(_this51.uuid, "/leave"),
          method: 'post'
        }).then(function (response) {
          window.isMeetingPageDestroyed = true;
          next();
        })["catch"](function (error) {
          window.isMeetingPageDestroyed = true;
          next();
        });
      } else {
        window.isMeetingPageDestroyed = true;
        next();
      }
    };

    if (this.hasVideos) {
      formUtil.unsavedCheckAlert({}, {
        unsaved: true
      }, doBeforeLeaving, {
        title: $t('meeting.is_live')
      });
    } else {
      doBeforeLeaving();
    }
  },
  destroyed: function destroyed() {
    document.body.classList.remove("meeting-page");
  },
  filters: {
    decimal: function decimal(value) {
      var num = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2;
      return Number(value).toFixed(num);
    }
  }
});

/***/ }),

/***/ "./resources/js/views/app/meeting/live.vue":
/*!*************************************************!*\
  !*** ./resources/js/views/app/meeting/live.vue ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _live_vue_vue_type_template_id_12b2cb6d___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./live.vue?vue&type=template&id=12b2cb6d& */ "./resources/js/views/app/meeting/live.vue?vue&type=template&id=12b2cb6d&");
/* harmony import */ var _live_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./live.vue?vue&type=script&lang=js& */ "./resources/js/views/app/meeting/live.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _live_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./live.vue?vue&type=style&index=0&lang=scss& */ "./resources/js/views/app/meeting/live.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _live_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _live_vue_vue_type_template_id_12b2cb6d___WEBPACK_IMPORTED_MODULE_0__["render"],
  _live_vue_vue_type_template_id_12b2cb6d___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/app/meeting/live.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/app/meeting/live.vue?vue&type=script&lang=js&":
/*!**************************************************************************!*\
  !*** ./resources/js/views/app/meeting/live.vue?vue&type=script&lang=js& ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_live_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./live.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/app/meeting/live.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_live_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/app/meeting/live.vue?vue&type=style&index=0&lang=scss&":
/*!***********************************************************************************!*\
  !*** ./resources/js/views/app/meeting/live.vue?vue&type=style&index=0&lang=scss& ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_2_node_modules_sass_loader_dist_cjs_js_ref_9_3_node_modules_vue_loader_lib_index_js_vue_loader_options_live_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--9-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--9-3!../../../../../node_modules/vue-loader/lib??vue-loader-options!./live.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/app/meeting/live.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_2_node_modules_sass_loader_dist_cjs_js_ref_9_3_node_modules_vue_loader_lib_index_js_vue_loader_options_live_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_2_node_modules_sass_loader_dist_cjs_js_ref_9_3_node_modules_vue_loader_lib_index_js_vue_loader_options_live_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_2_node_modules_sass_loader_dist_cjs_js_ref_9_3_node_modules_vue_loader_lib_index_js_vue_loader_options_live_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_2_node_modules_sass_loader_dist_cjs_js_ref_9_3_node_modules_vue_loader_lib_index_js_vue_loader_options_live_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/views/app/meeting/live.vue?vue&type=template&id=12b2cb6d&":
/*!********************************************************************************!*\
  !*** ./resources/js/views/app/meeting/live.vue?vue&type=template&id=12b2cb6d& ***!
  \********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_live_vue_vue_type_template_id_12b2cb6d___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./live.vue?vue&type=template&id=12b2cb6d& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/app/meeting/live.vue?vue&type=template&id=12b2cb6d&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_live_vue_vue_type_template_id_12b2cb6d___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_live_vue_vue_type_template_id_12b2cb6d___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/public/js/recordrtc/RecordRTC.js":
/*!****************************************************!*\
  !*** ./resources/public/js/recordrtc/RecordRTC.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global, process) {var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__; // Last time updated: 2021-03-09 3:20:22 AM UTC
// ________________
// RecordRTC v5.6.2
// Open-Sourced: https://github.com/muaz-khan/RecordRTC
// --------------------------------------------------
// Muaz Khan     - www.MuazKhan.com
// MIT License   - www.WebRTC-Experiment.com/licence
// --------------------------------------------------
// ____________
// RecordRTC.js

/**
 * {@link https://github.com/muaz-khan/RecordRTC|RecordRTC} is a WebRTC JavaScript library for audio/video as well as screen activity recording. It supports Chrome, Firefox, Opera, Android, and Microsoft Edge. Platforms: Linux, Mac and Windows.
 * @summary Record audio, video or screen inside the browser.
 * @license {@link https://github.com/muaz-khan/RecordRTC/blob/master/LICENSE|MIT}
 * @author {@link https://MuazKhan.com|Muaz Khan}
 * @typedef RecordRTC
 * @class
 * @example
 * var recorder = RecordRTC(mediaStream or [arrayOfMediaStream], {
 *     type: 'video', // audio or video or gif or canvas
 *     recorderType: MediaStreamRecorder || CanvasRecorder || StereoAudioRecorder || Etc
 * });
 * recorder.startRecording();
 * @see For further information:
 * @see {@link https://github.com/muaz-khan/RecordRTC|RecordRTC Source Code}
 * @param {MediaStream} mediaStream - Single media-stream object, array of media-streams, html-canvas-element, etc.
 * @param {object} config - {type:"video", recorderType: MediaStreamRecorder, disableLogs: true, numberOfAudioChannels: 1, bufferSize: 0, sampleRate: 0, desiredSampRate: 16000, video: HTMLVideoElement, etc.}
 */

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function RecordRTC(mediaStream, config) {
  if (!mediaStream) {
    throw 'First parameter is required.';
  }

  config = config || {
    type: 'video'
  };
  config = new RecordRTCConfiguration(mediaStream, config); // a reference to user's recordRTC object

  var self = this;

  function startRecording(config2) {
    if (!config.disableLogs) {
      console.log('RecordRTC version: ', self.version);
    }

    if (!!config2) {
      // allow users to set options using startRecording method
      // config2 is similar to main "config" object (second parameter over RecordRTC constructor)
      config = new RecordRTCConfiguration(mediaStream, config2);
    }

    if (!config.disableLogs) {
      console.log('started recording ' + config.type + ' stream.');
    }

    if (mediaRecorder) {
      mediaRecorder.clearRecordedData();
      mediaRecorder.record();
      setState('recording');

      if (self.recordingDuration) {
        handleRecordingDuration();
      }

      return self;
    }

    initRecorder(function () {
      if (self.recordingDuration) {
        handleRecordingDuration();
      }
    });
    return self;
  }

  function initRecorder(initCallback) {
    if (initCallback) {
      config.initCallback = function () {
        initCallback();
        initCallback = config.initCallback = null; // recorder.initRecorder should be call-backed once.
      };
    }

    var Recorder = new GetRecorderType(mediaStream, config);
    mediaRecorder = new Recorder(mediaStream, config);
    mediaRecorder.record();
    setState('recording');

    if (!config.disableLogs) {
      console.log('Initialized recorderType:', mediaRecorder.constructor.name, 'for output-type:', config.type);
    }
  }

  function stopRecording(callback) {
    callback = callback || function () {};

    if (!mediaRecorder) {
      warningLog();
      return;
    }

    if (self.state === 'paused') {
      self.resumeRecording();
      setTimeout(function () {
        stopRecording(callback);
      }, 1);
      return;
    }

    if (self.state !== 'recording' && !config.disableLogs) {
      console.warn('Recording state should be: "recording", however current state is: ', self.state);
    }

    if (!config.disableLogs) {
      console.log('Stopped recording ' + config.type + ' stream.');
    }

    if (config.type !== 'gif') {
      mediaRecorder.stop(_callback);
    } else {
      mediaRecorder.stop();

      _callback();
    }

    setState('stopped');

    function _callback(__blob) {
      if (!mediaRecorder) {
        if (typeof callback.call === 'function') {
          callback.call(self, '');
        } else {
          callback('');
        }

        return;
      }

      Object.keys(mediaRecorder).forEach(function (key) {
        if (typeof mediaRecorder[key] === 'function') {
          return;
        }

        self[key] = mediaRecorder[key];
      });
      var blob = mediaRecorder.blob;

      if (!blob) {
        if (__blob) {
          mediaRecorder.blob = blob = __blob;
        } else {
          throw 'Recording failed.';
        }
      }

      if (blob && !config.disableLogs) {
        console.log(blob.type, '->', bytesToSize(blob.size));
      }

      if (callback) {
        var url;

        try {
          url = URL.createObjectURL(blob);
        } catch (e) {}

        if (typeof callback.call === 'function') {
          callback.call(self, url);
        } else {
          callback(url);
        }
      }

      if (!config.autoWriteToDisk) {
        return;
      }

      getDataURL(function (dataURL) {
        var parameter = {};
        parameter[config.type + 'Blob'] = dataURL;
        DiskStorage.Store(parameter);
      });
    }
  }

  function pauseRecording() {
    if (!mediaRecorder) {
      warningLog();
      return;
    }

    if (self.state !== 'recording') {
      if (!config.disableLogs) {
        console.warn('Unable to pause the recording. Recording state: ', self.state);
      }

      return;
    }

    setState('paused');
    mediaRecorder.pause();

    if (!config.disableLogs) {
      console.log('Paused recording.');
    }
  }

  function resumeRecording() {
    if (!mediaRecorder) {
      warningLog();
      return;
    }

    if (self.state !== 'paused') {
      if (!config.disableLogs) {
        console.warn('Unable to resume the recording. Recording state: ', self.state);
      }

      return;
    }

    setState('recording'); // not all libs have this method yet

    mediaRecorder.resume();

    if (!config.disableLogs) {
      console.log('Resumed recording.');
    }
  }

  function readFile(_blob) {
    postMessage(new FileReaderSync().readAsDataURL(_blob));
  }

  function getDataURL(callback, _mediaRecorder) {
    if (!callback) {
      throw 'Pass a callback function over getDataURL.';
    }

    var blob = _mediaRecorder ? _mediaRecorder.blob : (mediaRecorder || {}).blob;

    if (!blob) {
      if (!config.disableLogs) {
        console.warn('Blob encoder did not finish its job yet.');
      }

      setTimeout(function () {
        getDataURL(callback, _mediaRecorder);
      }, 1000);
      return;
    }

    if (typeof Worker !== 'undefined' && !navigator.mozGetUserMedia) {
      var webWorker = processInWebWorker(readFile);

      webWorker.onmessage = function (event) {
        callback(event.data);
      };

      webWorker.postMessage(blob);
    } else {
      var reader = new FileReader();
      reader.readAsDataURL(blob);

      reader.onload = function (event) {
        callback(event.target.result);
      };
    }

    function processInWebWorker(_function) {
      try {
        var blob = URL.createObjectURL(new Blob([_function.toString(), 'this.onmessage =  function (eee) {' + _function.name + '(eee.data);}'], {
          type: 'application/javascript'
        }));
        var worker = new Worker(blob);
        URL.revokeObjectURL(blob);
        return worker;
      } catch (e) {}
    }
  }

  function handleRecordingDuration(counter) {
    counter = counter || 0;

    if (self.state === 'paused') {
      setTimeout(function () {
        handleRecordingDuration(counter);
      }, 1000);
      return;
    }

    if (self.state === 'stopped') {
      return;
    }

    if (counter >= self.recordingDuration) {
      stopRecording(self.onRecordingStopped);
      return;
    }

    counter += 1000; // 1-second

    setTimeout(function () {
      handleRecordingDuration(counter);
    }, 1000);
  }

  function setState(state) {
    if (!self) {
      return;
    }

    self.state = state;

    if (typeof self.onStateChanged.call === 'function') {
      self.onStateChanged.call(self, state);
    } else {
      self.onStateChanged(state);
    }
  }

  var WARNING = 'It seems that recorder is destroyed or "startRecording" is not invoked for ' + config.type + ' recorder.';

  function warningLog() {
    if (config.disableLogs === true) {
      return;
    }

    console.warn(WARNING);
  }

  var mediaRecorder;
  var returnObject = {
    /**
     * This method starts the recording.
     * @method
     * @memberof RecordRTC
     * @instance
     * @example
     * var recorder = RecordRTC(mediaStream, {
     *     type: 'video'
     * });
     * recorder.startRecording();
     */
    startRecording: startRecording,

    /**
     * This method stops the recording. It is strongly recommended to get "blob" or "URI" inside the callback to make sure all recorders finished their job.
     * @param {function} callback - Callback to get the recorded blob.
     * @method
     * @memberof RecordRTC
     * @instance
     * @example
     * recorder.stopRecording(function() {
     *     // use either "this" or "recorder" object; both are identical
     *     video.src = this.toURL();
     *     var blob = this.getBlob();
     * });
     */
    stopRecording: stopRecording,

    /**
     * This method pauses the recording. You can resume recording using "resumeRecording" method.
     * @method
     * @memberof RecordRTC
     * @instance
     * @todo Firefox is unable to pause the recording. Fix it.
     * @example
     * recorder.pauseRecording();  // pause the recording
     * recorder.resumeRecording(); // resume again
     */
    pauseRecording: pauseRecording,

    /**
     * This method resumes the recording.
     * @method
     * @memberof RecordRTC
     * @instance
     * @example
     * recorder.pauseRecording();  // first of all, pause the recording
     * recorder.resumeRecording(); // now resume it
     */
    resumeRecording: resumeRecording,

    /**
     * This method initializes the recording.
     * @method
     * @memberof RecordRTC
     * @instance
     * @todo This method should be deprecated.
     * @example
     * recorder.initRecorder();
     */
    initRecorder: initRecorder,

    /**
     * Ask RecordRTC to auto-stop the recording after 5 minutes.
     * @method
     * @memberof RecordRTC
     * @instance
     * @example
     * var fiveMinutes = 5 * 1000 * 60;
     * recorder.setRecordingDuration(fiveMinutes, function() {
     *    var blob = this.getBlob();
     *    video.src = this.toURL();
     * });
     *
     * // or otherwise
     * recorder.setRecordingDuration(fiveMinutes).onRecordingStopped(function() {
     *    var blob = this.getBlob();
     *    video.src = this.toURL();
     * });
     */
    setRecordingDuration: function setRecordingDuration(recordingDuration, callback) {
      if (typeof recordingDuration === 'undefined') {
        throw 'recordingDuration is required.';
      }

      if (typeof recordingDuration !== 'number') {
        throw 'recordingDuration must be a number.';
      }

      self.recordingDuration = recordingDuration;

      self.onRecordingStopped = callback || function () {};

      return {
        onRecordingStopped: function onRecordingStopped(callback) {
          self.onRecordingStopped = callback;
        }
      };
    },

    /**
     * This method can be used to clear/reset all the recorded data.
     * @method
     * @memberof RecordRTC
     * @instance
     * @todo Figure out the difference between "reset" and "clearRecordedData" methods.
     * @example
     * recorder.clearRecordedData();
     */
    clearRecordedData: function clearRecordedData() {
      if (!mediaRecorder) {
        warningLog();
        return;
      }

      mediaRecorder.clearRecordedData();

      if (!config.disableLogs) {
        console.log('Cleared old recorded data.');
      }
    },

    /**
     * Get the recorded blob. Use this method inside the "stopRecording" callback.
     * @method
     * @memberof RecordRTC
     * @instance
     * @example
     * recorder.stopRecording(function() {
     *     var blob = this.getBlob();
     *
     *     var file = new File([blob], 'filename.webm', {
     *         type: 'video/webm'
     *     });
     *
     *     var formData = new FormData();
     *     formData.append('file', file); // upload "File" object rather than a "Blob"
     *     uploadToServer(formData);
     * });
     * @returns {Blob} Returns recorded data as "Blob" object.
     */
    getBlob: function getBlob() {
      if (!mediaRecorder) {
        warningLog();
        return;
      }

      return mediaRecorder.blob;
    },

    /**
     * Get data-URI instead of Blob.
     * @param {function} callback - Callback to get the Data-URI.
     * @method
     * @memberof RecordRTC
     * @instance
     * @example
     * recorder.stopRecording(function() {
     *     recorder.getDataURL(function(dataURI) {
     *         video.src = dataURI;
     *     });
     * });
     */
    getDataURL: getDataURL,

    /**
     * Get virtual/temporary URL. Usage of this URL is limited to current tab.
     * @method
     * @memberof RecordRTC
     * @instance
     * @example
     * recorder.stopRecording(function() {
     *     video.src = this.toURL();
     * });
     * @returns {String} Returns a virtual/temporary URL for the recorded "Blob".
     */
    toURL: function toURL() {
      if (!mediaRecorder) {
        warningLog();
        return;
      }

      return URL.createObjectURL(mediaRecorder.blob);
    },

    /**
     * Get internal recording object (i.e. internal module) e.g. MutliStreamRecorder, MediaStreamRecorder, StereoAudioRecorder or WhammyRecorder etc.
     * @method
     * @memberof RecordRTC
     * @instance
     * @example
     * var internalRecorder = recorder.getInternalRecorder();
     * if(internalRecorder instanceof MultiStreamRecorder) {
     *     internalRecorder.addStreams([newAudioStream]);
     *     internalRecorder.resetVideoStreams([screenStream]);
     * }
     * @returns {Object} Returns internal recording object.
     */
    getInternalRecorder: function getInternalRecorder() {
      return mediaRecorder;
    },

    /**
     * Invoke save-as dialog to save the recorded blob into your disk.
     * @param {string} fileName - Set your own file name.
     * @method
     * @memberof RecordRTC
     * @instance
     * @example
     * recorder.stopRecording(function() {
     *     this.save('file-name');
     *
     *     // or manually:
     *     invokeSaveAsDialog(this.getBlob(), 'filename.webm');
     * });
     */
    save: function save(fileName) {
      if (!mediaRecorder) {
        warningLog();
        return;
      }

      invokeSaveAsDialog(mediaRecorder.blob, fileName);
    },

    /**
     * This method gets a blob from indexed-DB storage.
     * @param {function} callback - Callback to get the recorded blob.
     * @method
     * @memberof RecordRTC
     * @instance
     * @example
     * recorder.getFromDisk(function(dataURL) {
     *     video.src = dataURL;
     * });
     */
    getFromDisk: function getFromDisk(callback) {
      if (!mediaRecorder) {
        warningLog();
        return;
      }

      RecordRTC.getFromDisk(config.type, callback);
    },

    /**
     * This method appends an array of webp images to the recorded video-blob. It takes an "array" object.
     * @type {Array.<Array>}
     * @param {Array} arrayOfWebPImages - Array of webp images.
     * @method
     * @memberof RecordRTC
     * @instance
     * @todo This method should be deprecated.
     * @example
     * var arrayOfWebPImages = [];
     * arrayOfWebPImages.push({
     *     duration: index,
     *     image: 'data:image/webp;base64,...'
     * });
     * recorder.setAdvertisementArray(arrayOfWebPImages);
     */
    setAdvertisementArray: function setAdvertisementArray(arrayOfWebPImages) {
      config.advertisement = [];
      var length = arrayOfWebPImages.length;

      for (var i = 0; i < length; i++) {
        config.advertisement.push({
          duration: i,
          image: arrayOfWebPImages[i]
        });
      }
    },

    /**
     * It is equivalent to <code class="str">"recorder.getBlob()"</code> method. Usage of "getBlob" is recommended, though.
     * @property {Blob} blob - Recorded Blob can be accessed using this property.
     * @memberof RecordRTC
     * @instance
     * @readonly
     * @example
     * recorder.stopRecording(function() {
     *     var blob = this.blob;
     *
     *     // below one is recommended
     *     var blob = this.getBlob();
     * });
     */
    blob: null,

    /**
     * This works only with {recorderType:StereoAudioRecorder}. Use this property on "stopRecording" to verify the encoder's sample-rates.
     * @property {number} bufferSize - Buffer-size used to encode the WAV container
     * @memberof RecordRTC
     * @instance
     * @readonly
     * @example
     * recorder.stopRecording(function() {
     *     alert('Recorder used this buffer-size: ' + this.bufferSize);
     * });
     */
    bufferSize: 0,

    /**
     * This works only with {recorderType:StereoAudioRecorder}. Use this property on "stopRecording" to verify the encoder's sample-rates.
     * @property {number} sampleRate - Sample-rates used to encode the WAV container
     * @memberof RecordRTC
     * @instance
     * @readonly
     * @example
     * recorder.stopRecording(function() {
     *     alert('Recorder used these sample-rates: ' + this.sampleRate);
     * });
     */
    sampleRate: 0,

    /**
     * {recorderType:StereoAudioRecorder} returns ArrayBuffer object.
     * @property {ArrayBuffer} buffer - Audio ArrayBuffer, supported only in Chrome.
     * @memberof RecordRTC
     * @instance
     * @readonly
     * @example
     * recorder.stopRecording(function() {
     *     var arrayBuffer = this.buffer;
     *     alert(arrayBuffer.byteLength);
     * });
     */
    buffer: null,

    /**
     * This method resets the recorder. So that you can reuse single recorder instance many times.
     * @method
     * @memberof RecordRTC
     * @instance
     * @example
     * recorder.reset();
     * recorder.startRecording();
     */
    reset: function reset() {
      if (self.state === 'recording' && !config.disableLogs) {
        console.warn('Stop an active recorder.');
      }

      if (mediaRecorder && typeof mediaRecorder.clearRecordedData === 'function') {
        mediaRecorder.clearRecordedData();
      }

      mediaRecorder = null;
      setState('inactive');
      self.blob = null;
    },

    /**
     * This method is called whenever recorder's state changes. Use this as an "event".
     * @property {String} state - A recorder's state can be: recording, paused, stopped or inactive.
     * @method
     * @memberof RecordRTC
     * @instance
     * @example
     * recorder.onStateChanged = function(state) {
     *     console.log('Recorder state: ', state);
     * };
     */
    onStateChanged: function onStateChanged(state) {
      if (!config.disableLogs) {
        console.log('Recorder state changed:', state);
      }
    },

    /**
     * A recorder can have inactive, recording, paused or stopped states.
     * @property {String} state - A recorder's state can be: recording, paused, stopped or inactive.
     * @memberof RecordRTC
     * @static
     * @readonly
     * @example
     * // this looper function will keep you updated about the recorder's states.
     * (function looper() {
     *     document.querySelector('h1').innerHTML = 'Recorder\'s state is: ' + recorder.state;
     *     if(recorder.state === 'stopped') return; // ignore+stop
     *     setTimeout(looper, 1000); // update after every 3-seconds
     * })();
     * recorder.startRecording();
     */
    state: 'inactive',

    /**
     * Get recorder's readonly state.
     * @method
     * @memberof RecordRTC
     * @example
     * var state = recorder.getState();
     * @returns {String} Returns recording state.
     */
    getState: function getState() {
      return self.state;
    },

    /**
     * Destroy RecordRTC instance. Clear all recorders and objects.
     * @method
     * @memberof RecordRTC
     * @example
     * recorder.destroy();
     */
    destroy: function destroy() {
      var disableLogsCache = config.disableLogs;
      config = {
        disableLogs: true
      };
      self.reset();
      setState('destroyed');
      returnObject = self = null;

      if (Storage.AudioContextConstructor) {
        Storage.AudioContextConstructor.close();
        Storage.AudioContextConstructor = null;
      }

      config.disableLogs = disableLogsCache;

      if (!config.disableLogs) {
        console.log('RecordRTC is destroyed.');
      }
    },

    /**
     * RecordRTC version number
     * @property {String} version - Release version number.
     * @memberof RecordRTC
     * @static
     * @readonly
     * @example
     * alert(recorder.version);
     */
    version: '5.6.2'
  };

  if (!this) {
    self = returnObject;
    return returnObject;
  } // if someone wants to use RecordRTC with the "new" keyword.


  for (var prop in returnObject) {
    this[prop] = returnObject[prop];
  }

  self = this;
  return returnObject;
}

RecordRTC.version = '5.6.2';

if (true
/* && !!module.exports*/
) {
  module.exports = RecordRTC;
}

if (true) {
  !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
    return RecordRTC;
  }).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
}

RecordRTC.getFromDisk = function (type, callback) {
  if (!callback) {
    throw 'callback is mandatory.';
  }

  console.log('Getting recorded ' + (type === 'all' ? 'blobs' : type + ' blob ') + ' from disk!');
  DiskStorage.Fetch(function (dataURL, _type) {
    if (type !== 'all' && _type === type + 'Blob' && callback) {
      callback(dataURL);
    }

    if (type === 'all' && callback) {
      callback(dataURL, _type.replace('Blob', ''));
    }
  });
};
/**
 * This method can be used to store recorded blobs into IndexedDB storage.
 * @param {object} options - {audio: Blob, video: Blob, gif: Blob}
 * @method
 * @memberof RecordRTC
 * @example
 * RecordRTC.writeToDisk({
 *     audio: audioBlob,
 *     video: videoBlob,
 *     gif  : gifBlob
 * });
 */


RecordRTC.writeToDisk = function (options) {
  console.log('Writing recorded blob(s) to disk!');
  options = options || {};

  if (options.audio && options.video && options.gif) {
    options.audio.getDataURL(function (audioDataURL) {
      options.video.getDataURL(function (videoDataURL) {
        options.gif.getDataURL(function (gifDataURL) {
          DiskStorage.Store({
            audioBlob: audioDataURL,
            videoBlob: videoDataURL,
            gifBlob: gifDataURL
          });
        });
      });
    });
  } else if (options.audio && options.video) {
    options.audio.getDataURL(function (audioDataURL) {
      options.video.getDataURL(function (videoDataURL) {
        DiskStorage.Store({
          audioBlob: audioDataURL,
          videoBlob: videoDataURL
        });
      });
    });
  } else if (options.audio && options.gif) {
    options.audio.getDataURL(function (audioDataURL) {
      options.gif.getDataURL(function (gifDataURL) {
        DiskStorage.Store({
          audioBlob: audioDataURL,
          gifBlob: gifDataURL
        });
      });
    });
  } else if (options.video && options.gif) {
    options.video.getDataURL(function (videoDataURL) {
      options.gif.getDataURL(function (gifDataURL) {
        DiskStorage.Store({
          videoBlob: videoDataURL,
          gifBlob: gifDataURL
        });
      });
    });
  } else if (options.audio) {
    options.audio.getDataURL(function (audioDataURL) {
      DiskStorage.Store({
        audioBlob: audioDataURL
      });
    });
  } else if (options.video) {
    options.video.getDataURL(function (videoDataURL) {
      DiskStorage.Store({
        videoBlob: videoDataURL
      });
    });
  } else if (options.gif) {
    options.gif.getDataURL(function (gifDataURL) {
      DiskStorage.Store({
        gifBlob: gifDataURL
      });
    });
  }
}; // __________________________
// RecordRTC-Configuration.js

/**
 * {@link RecordRTCConfiguration} is an inner/private helper for {@link RecordRTC}.
 * @summary It configures the 2nd parameter passed over {@link RecordRTC} and returns a valid "config" object.
 * @license {@link https://github.com/muaz-khan/RecordRTC/blob/master/LICENSE|MIT}
 * @author {@link https://MuazKhan.com|Muaz Khan}
 * @typedef RecordRTCConfiguration
 * @class
 * @example
 * var options = RecordRTCConfiguration(mediaStream, options);
 * @see {@link https://github.com/muaz-khan/RecordRTC|RecordRTC Source Code}
 * @param {MediaStream} mediaStream - MediaStream object fetched using getUserMedia API or generated using captureStreamUntilEnded or WebAudio API.
 * @param {object} config - {type:"video", disableLogs: true, numberOfAudioChannels: 1, bufferSize: 0, sampleRate: 0, video: HTMLVideoElement, getNativeBlob:true, etc.}
 */


function RecordRTCConfiguration(mediaStream, config) {
  if (!config.recorderType && !config.type) {
    if (!!config.audio && !!config.video) {
      config.type = 'video';
    } else if (!!config.audio && !config.video) {
      config.type = 'audio';
    }
  }

  if (config.recorderType && !config.type) {
    if (config.recorderType === WhammyRecorder || config.recorderType === CanvasRecorder || typeof WebAssemblyRecorder !== 'undefined' && config.recorderType === WebAssemblyRecorder) {
      config.type = 'video';
    } else if (config.recorderType === GifRecorder) {
      config.type = 'gif';
    } else if (config.recorderType === StereoAudioRecorder) {
      config.type = 'audio';
    } else if (config.recorderType === MediaStreamRecorder) {
      if (getTracks(mediaStream, 'audio').length && getTracks(mediaStream, 'video').length) {
        config.type = 'video';
      } else if (!getTracks(mediaStream, 'audio').length && getTracks(mediaStream, 'video').length) {
        config.type = 'video';
      } else if (getTracks(mediaStream, 'audio').length && !getTracks(mediaStream, 'video').length) {
        config.type = 'audio';
      } else {// config.type = 'UnKnown';
      }
    }
  }

  if (typeof MediaStreamRecorder !== 'undefined' && typeof MediaRecorder !== 'undefined' && 'requestData' in MediaRecorder.prototype) {
    if (!config.mimeType) {
      config.mimeType = 'video/webm';
    }

    if (!config.type) {
      config.type = config.mimeType.split('/')[0];
    }

    if (!config.bitsPerSecond) {// config.bitsPerSecond = 128000;
    }
  } // consider default type=audio


  if (!config.type) {
    if (config.mimeType) {
      config.type = config.mimeType.split('/')[0];
    }

    if (!config.type) {
      config.type = 'audio';
    }
  }

  return config;
} // __________________
// GetRecorderType.js

/**
 * {@link GetRecorderType} is an inner/private helper for {@link RecordRTC}.
 * @summary It returns best recorder-type available for your browser.
 * @license {@link https://github.com/muaz-khan/RecordRTC/blob/master/LICENSE|MIT}
 * @author {@link https://MuazKhan.com|Muaz Khan}
 * @typedef GetRecorderType
 * @class
 * @example
 * var RecorderType = GetRecorderType(options);
 * var recorder = new RecorderType(options);
 * @see {@link https://github.com/muaz-khan/RecordRTC|RecordRTC Source Code}
 * @param {MediaStream} mediaStream - MediaStream object fetched using getUserMedia API or generated using captureStreamUntilEnded or WebAudio API.
 * @param {object} config - {type:"video", disableLogs: true, numberOfAudioChannels: 1, bufferSize: 0, sampleRate: 0, video: HTMLVideoElement, etc.}
 */


function GetRecorderType(mediaStream, config) {
  var recorder; // StereoAudioRecorder can work with all three: Edge, Firefox and Chrome
  // todo: detect if it is Edge, then auto use: StereoAudioRecorder

  if (isChrome || isEdge || isOpera) {
    // Media Stream Recording API has not been implemented in chrome yet;
    // That's why using WebAudio API to record stereo audio in WAV format
    recorder = StereoAudioRecorder;
  }

  if (typeof MediaRecorder !== 'undefined' && 'requestData' in MediaRecorder.prototype && !isChrome) {
    recorder = MediaStreamRecorder;
  } // video recorder (in WebM format)


  if (config.type === 'video' && (isChrome || isOpera)) {
    recorder = WhammyRecorder;

    if (typeof WebAssemblyRecorder !== 'undefined' && typeof ReadableStream !== 'undefined') {
      recorder = WebAssemblyRecorder;
    }
  } // video recorder (in Gif format)


  if (config.type === 'gif') {
    recorder = GifRecorder;
  } // html2canvas recording!


  if (config.type === 'canvas') {
    recorder = CanvasRecorder;
  }

  if (isMediaRecorderCompatible() && recorder !== CanvasRecorder && recorder !== GifRecorder && typeof MediaRecorder !== 'undefined' && 'requestData' in MediaRecorder.prototype) {
    if (getTracks(mediaStream, 'video').length || getTracks(mediaStream, 'audio').length) {
      // audio-only recording
      if (config.type === 'audio') {
        if (typeof MediaRecorder.isTypeSupported === 'function' && MediaRecorder.isTypeSupported('audio/webm')) {
          recorder = MediaStreamRecorder;
        } // else recorder = StereoAudioRecorder;

      } else {
        // video or screen tracks
        if (typeof MediaRecorder.isTypeSupported === 'function' && MediaRecorder.isTypeSupported('video/webm')) {
          recorder = MediaStreamRecorder;
        }
      }
    }
  }

  if (mediaStream instanceof Array && mediaStream.length) {
    recorder = MultiStreamRecorder;
  }

  if (config.recorderType) {
    recorder = config.recorderType;
  }

  if (!config.disableLogs && !!recorder && !!recorder.name) {
    console.log('Using recorderType:', recorder.name || recorder.constructor.name);
  }

  if (!recorder && isSafari) {
    recorder = MediaStreamRecorder;
  }

  return recorder;
} // _____________
// MRecordRTC.js

/**
 * MRecordRTC runs on top of {@link RecordRTC} to bring multiple recordings in a single place, by providing simple API.
 * @summary MRecordRTC stands for "Multiple-RecordRTC".
 * @license {@link https://github.com/muaz-khan/RecordRTC/blob/master/LICENSE|MIT}
 * @author {@link https://MuazKhan.com|Muaz Khan}
 * @typedef MRecordRTC
 * @class
 * @example
 * var recorder = new MRecordRTC();
 * recorder.addStream(MediaStream);
 * recorder.mediaType = {
 *     audio: true, // or StereoAudioRecorder or MediaStreamRecorder
 *     video: true, // or WhammyRecorder or MediaStreamRecorder or WebAssemblyRecorder or CanvasRecorder
 *     gif: true    // or GifRecorder
 * };
 * // mimeType is optional and should be set only in advance cases.
 * recorder.mimeType = {
 *     audio: 'audio/wav',
 *     video: 'video/webm',
 *     gif:   'image/gif'
 * };
 * recorder.startRecording();
 * @see For further information:
 * @see {@link https://github.com/muaz-khan/RecordRTC/tree/master/MRecordRTC|MRecordRTC Source Code}
 * @param {MediaStream} mediaStream - MediaStream object fetched using getUserMedia API or generated using captureStreamUntilEnded or WebAudio API.
 * @requires {@link RecordRTC}
 */


function MRecordRTC(mediaStream) {
  /**
   * This method attaches MediaStream object to {@link MRecordRTC}.
   * @param {MediaStream} mediaStream - A MediaStream object, either fetched using getUserMedia API, or generated using captureStreamUntilEnded or WebAudio API.
   * @method
   * @memberof MRecordRTC
   * @example
   * recorder.addStream(MediaStream);
   */
  this.addStream = function (_mediaStream) {
    if (_mediaStream) {
      mediaStream = _mediaStream;
    }
  };
  /**
   * This property can be used to set the recording type e.g. audio, or video, or gif, or canvas.
   * @property {object} mediaType - {audio: true, video: true, gif: true}
   * @memberof MRecordRTC
   * @example
   * var recorder = new MRecordRTC();
   * recorder.mediaType = {
   *     audio: true, // TRUE or StereoAudioRecorder or MediaStreamRecorder
   *     video: true, // TRUE or WhammyRecorder or MediaStreamRecorder or WebAssemblyRecorder or CanvasRecorder
   *     gif  : true  // TRUE or GifRecorder
   * };
   */


  this.mediaType = {
    audio: true,
    video: true
  };
  /**
   * This method starts recording.
   * @method
   * @memberof MRecordRTC
   * @example
   * recorder.startRecording();
   */

  this.startRecording = function () {
    var mediaType = this.mediaType;
    var recorderType;
    var mimeType = this.mimeType || {
      audio: null,
      video: null,
      gif: null
    };

    if (typeof mediaType.audio !== 'function' && isMediaRecorderCompatible() && !getTracks(mediaStream, 'audio').length) {
      mediaType.audio = false;
    }

    if (typeof mediaType.video !== 'function' && isMediaRecorderCompatible() && !getTracks(mediaStream, 'video').length) {
      mediaType.video = false;
    }

    if (typeof mediaType.gif !== 'function' && isMediaRecorderCompatible() && !getTracks(mediaStream, 'video').length) {
      mediaType.gif = false;
    }

    if (!mediaType.audio && !mediaType.video && !mediaType.gif) {
      throw 'MediaStream must have either audio or video tracks.';
    }

    if (!!mediaType.audio) {
      recorderType = null;

      if (typeof mediaType.audio === 'function') {
        recorderType = mediaType.audio;
      }

      this.audioRecorder = new RecordRTC(mediaStream, {
        type: 'audio',
        bufferSize: this.bufferSize,
        sampleRate: this.sampleRate,
        numberOfAudioChannels: this.numberOfAudioChannels || 2,
        disableLogs: this.disableLogs,
        recorderType: recorderType,
        mimeType: mimeType.audio,
        timeSlice: this.timeSlice,
        onTimeStamp: this.onTimeStamp
      });

      if (!mediaType.video) {
        this.audioRecorder.startRecording();
      }
    }

    if (!!mediaType.video) {
      recorderType = null;

      if (typeof mediaType.video === 'function') {
        recorderType = mediaType.video;
      }

      var newStream = mediaStream;

      if (isMediaRecorderCompatible() && !!mediaType.audio && typeof mediaType.audio === 'function') {
        var videoTrack = getTracks(mediaStream, 'video')[0];

        if (isFirefox) {
          newStream = new MediaStream();
          newStream.addTrack(videoTrack);

          if (recorderType && recorderType === WhammyRecorder) {
            // Firefox does NOT supports webp-encoding yet
            // But Firefox do supports WebAssemblyRecorder
            recorderType = MediaStreamRecorder;
          }
        } else {
          newStream = new MediaStream();
          newStream.addTrack(videoTrack);
        }
      }

      this.videoRecorder = new RecordRTC(newStream, {
        type: 'video',
        video: this.video,
        canvas: this.canvas,
        frameInterval: this.frameInterval || 10,
        disableLogs: this.disableLogs,
        recorderType: recorderType,
        mimeType: mimeType.video,
        timeSlice: this.timeSlice,
        onTimeStamp: this.onTimeStamp,
        workerPath: this.workerPath,
        webAssemblyPath: this.webAssemblyPath,
        frameRate: this.frameRate,
        // used by WebAssemblyRecorder; values: usually 30; accepts any.
        bitrate: this.bitrate // used by WebAssemblyRecorder; values: 0 to 1000+

      });

      if (!mediaType.audio) {
        this.videoRecorder.startRecording();
      }
    }

    if (!!mediaType.audio && !!mediaType.video) {
      var self = this;
      var isSingleRecorder = isMediaRecorderCompatible() === true;

      if (mediaType.audio instanceof StereoAudioRecorder && !!mediaType.video) {
        isSingleRecorder = false;
      } else if (mediaType.audio !== true && mediaType.video !== true && mediaType.audio !== mediaType.video) {
        isSingleRecorder = false;
      }

      if (isSingleRecorder === true) {
        self.audioRecorder = null;
        self.videoRecorder.startRecording();
      } else {
        self.videoRecorder.initRecorder(function () {
          self.audioRecorder.initRecorder(function () {
            // Both recorders are ready to record things accurately
            self.videoRecorder.startRecording();
            self.audioRecorder.startRecording();
          });
        });
      }
    }

    if (!!mediaType.gif) {
      recorderType = null;

      if (typeof mediaType.gif === 'function') {
        recorderType = mediaType.gif;
      }

      this.gifRecorder = new RecordRTC(mediaStream, {
        type: 'gif',
        frameRate: this.frameRate || 200,
        quality: this.quality || 10,
        disableLogs: this.disableLogs,
        recorderType: recorderType,
        mimeType: mimeType.gif
      });
      this.gifRecorder.startRecording();
    }
  };
  /**
   * This method stops recording.
   * @param {function} callback - Callback function is invoked when all encoders finished their jobs.
   * @method
   * @memberof MRecordRTC
   * @example
   * recorder.stopRecording(function(recording){
   *     var audioBlob = recording.audio;
   *     var videoBlob = recording.video;
   *     var gifBlob   = recording.gif;
   * });
   */


  this.stopRecording = function (callback) {
    callback = callback || function () {};

    if (this.audioRecorder) {
      this.audioRecorder.stopRecording(function (blobURL) {
        callback(blobURL, 'audio');
      });
    }

    if (this.videoRecorder) {
      this.videoRecorder.stopRecording(function (blobURL) {
        callback(blobURL, 'video');
      });
    }

    if (this.gifRecorder) {
      this.gifRecorder.stopRecording(function (blobURL) {
        callback(blobURL, 'gif');
      });
    }
  };
  /**
   * This method pauses recording.
   * @method
   * @memberof MRecordRTC
   * @example
   * recorder.pauseRecording();
   */


  this.pauseRecording = function () {
    if (this.audioRecorder) {
      this.audioRecorder.pauseRecording();
    }

    if (this.videoRecorder) {
      this.videoRecorder.pauseRecording();
    }

    if (this.gifRecorder) {
      this.gifRecorder.pauseRecording();
    }
  };
  /**
   * This method resumes recording.
   * @method
   * @memberof MRecordRTC
   * @example
   * recorder.resumeRecording();
   */


  this.resumeRecording = function () {
    if (this.audioRecorder) {
      this.audioRecorder.resumeRecording();
    }

    if (this.videoRecorder) {
      this.videoRecorder.resumeRecording();
    }

    if (this.gifRecorder) {
      this.gifRecorder.resumeRecording();
    }
  };
  /**
   * This method can be used to manually get all recorded blobs.
   * @param {function} callback - All recorded blobs are passed back to the "callback" function.
   * @method
   * @memberof MRecordRTC
   * @example
   * recorder.getBlob(function(recording){
   *     var audioBlob = recording.audio;
   *     var videoBlob = recording.video;
   *     var gifBlob   = recording.gif;
   * });
   * // or
   * var audioBlob = recorder.getBlob().audio;
   * var videoBlob = recorder.getBlob().video;
   */


  this.getBlob = function (callback) {
    var output = {};

    if (this.audioRecorder) {
      output.audio = this.audioRecorder.getBlob();
    }

    if (this.videoRecorder) {
      output.video = this.videoRecorder.getBlob();
    }

    if (this.gifRecorder) {
      output.gif = this.gifRecorder.getBlob();
    }

    if (callback) {
      callback(output);
    }

    return output;
  };
  /**
   * Destroy all recorder instances.
   * @method
   * @memberof MRecordRTC
   * @example
   * recorder.destroy();
   */


  this.destroy = function () {
    if (this.audioRecorder) {
      this.audioRecorder.destroy();
      this.audioRecorder = null;
    }

    if (this.videoRecorder) {
      this.videoRecorder.destroy();
      this.videoRecorder = null;
    }

    if (this.gifRecorder) {
      this.gifRecorder.destroy();
      this.gifRecorder = null;
    }
  };
  /**
   * This method can be used to manually get all recorded blobs' DataURLs.
   * @param {function} callback - All recorded blobs' DataURLs are passed back to the "callback" function.
   * @method
   * @memberof MRecordRTC
   * @example
   * recorder.getDataURL(function(recording){
   *     var audioDataURL = recording.audio;
   *     var videoDataURL = recording.video;
   *     var gifDataURL   = recording.gif;
   * });
   */


  this.getDataURL = function (callback) {
    this.getBlob(function (blob) {
      if (blob.audio && blob.video) {
        getDataURL(blob.audio, function (_audioDataURL) {
          getDataURL(blob.video, function (_videoDataURL) {
            callback({
              audio: _audioDataURL,
              video: _videoDataURL
            });
          });
        });
      } else if (blob.audio) {
        getDataURL(blob.audio, function (_audioDataURL) {
          callback({
            audio: _audioDataURL
          });
        });
      } else if (blob.video) {
        getDataURL(blob.video, function (_videoDataURL) {
          callback({
            video: _videoDataURL
          });
        });
      }
    });

    function getDataURL(blob, callback00) {
      if (typeof Worker !== 'undefined') {
        var webWorker = processInWebWorker(function readFile(_blob) {
          postMessage(new FileReaderSync().readAsDataURL(_blob));
        });

        webWorker.onmessage = function (event) {
          callback00(event.data);
        };

        webWorker.postMessage(blob);
      } else {
        var reader = new FileReader();
        reader.readAsDataURL(blob);

        reader.onload = function (event) {
          callback00(event.target.result);
        };
      }
    }

    function processInWebWorker(_function) {
      var blob = URL.createObjectURL(new Blob([_function.toString(), 'this.onmessage =  function (eee) {' + _function.name + '(eee.data);}'], {
        type: 'application/javascript'
      }));
      var worker = new Worker(blob);
      var url;

      if (typeof URL !== 'undefined') {
        url = URL;
      } else if (typeof webkitURL !== 'undefined') {
        url = webkitURL;
      } else {
        throw 'Neither URL nor webkitURL detected.';
      }

      url.revokeObjectURL(blob);
      return worker;
    }
  };
  /**
   * This method can be used to ask {@link MRecordRTC} to write all recorded blobs into IndexedDB storage.
   * @method
   * @memberof MRecordRTC
   * @example
   * recorder.writeToDisk();
   */


  this.writeToDisk = function () {
    RecordRTC.writeToDisk({
      audio: this.audioRecorder,
      video: this.videoRecorder,
      gif: this.gifRecorder
    });
  };
  /**
   * This method can be used to invoke a save-as dialog for all recorded blobs.
   * @param {object} args - {audio: 'audio-name', video: 'video-name', gif: 'gif-name'}
   * @method
   * @memberof MRecordRTC
   * @example
   * recorder.save({
   *     audio: 'audio-file-name',
   *     video: 'video-file-name',
   *     gif  : 'gif-file-name'
   * });
   */


  this.save = function (args) {
    args = args || {
      audio: true,
      video: true,
      gif: true
    };

    if (!!args.audio && this.audioRecorder) {
      this.audioRecorder.save(typeof args.audio === 'string' ? args.audio : '');
    }

    if (!!args.video && this.videoRecorder) {
      this.videoRecorder.save(typeof args.video === 'string' ? args.video : '');
    }

    if (!!args.gif && this.gifRecorder) {
      this.gifRecorder.save(typeof args.gif === 'string' ? args.gif : '');
    }
  };
}
/**
 * This method can be used to get all recorded blobs from IndexedDB storage.
 * @param {string} type - 'all' or 'audio' or 'video' or 'gif'
 * @param {function} callback - Callback function to get all stored blobs.
 * @method
 * @memberof MRecordRTC
 * @example
 * MRecordRTC.getFromDisk('all', function(dataURL, type){
 *     if(type === 'audio') { }
 *     if(type === 'video') { }
 *     if(type === 'gif')   { }
 * });
 */


MRecordRTC.getFromDisk = RecordRTC.getFromDisk;
/**
 * This method can be used to store recorded blobs into IndexedDB storage.
 * @param {object} options - {audio: Blob, video: Blob, gif: Blob}
 * @method
 * @memberof MRecordRTC
 * @example
 * MRecordRTC.writeToDisk({
 *     audio: audioBlob,
 *     video: videoBlob,
 *     gif  : gifBlob
 * });
 */

MRecordRTC.writeToDisk = RecordRTC.writeToDisk;

if (typeof RecordRTC !== 'undefined') {
  RecordRTC.MRecordRTC = MRecordRTC;
}

var browserFakeUserAgent = 'Fake/5.0 (FakeOS) AppleWebKit/123 (KHTML, like Gecko) Fake/12.3.4567.89 Fake/123.45';

(function (that) {
  if (!that) {
    return;
  }

  if (typeof window !== 'undefined') {
    return;
  }

  if (typeof global === 'undefined') {
    return;
  }

  global.navigator = {
    userAgent: browserFakeUserAgent,
    getUserMedia: function getUserMedia() {}
  };

  if (!global.console) {
    global.console = {};
  }

  if (typeof global.console.log === 'undefined' || typeof global.console.error === 'undefined') {
    global.console.error = global.console.log = global.console.log || function () {
      console.log(arguments);
    };
  }

  if (typeof document === 'undefined') {
    /*global document:true */
    that.document = {
      documentElement: {
        appendChild: function appendChild() {
          return '';
        }
      }
    };

    document.createElement = document.captureStream = document.mozCaptureStream = function () {
      var obj = {
        getContext: function getContext() {
          return obj;
        },
        play: function play() {},
        pause: function pause() {},
        drawImage: function drawImage() {},
        toDataURL: function toDataURL() {
          return '';
        },
        style: {}
      };
      return obj;
    };

    that.HTMLVideoElement = function () {};
  }

  if (typeof location === 'undefined') {
    /*global location:true */
    that.location = {
      protocol: 'file:',
      href: '',
      hash: ''
    };
  }

  if (typeof screen === 'undefined') {
    /*global screen:true */
    that.screen = {
      width: 0,
      height: 0
    };
  }

  if (typeof URL === 'undefined') {
    /*global screen:true */
    that.URL = {
      createObjectURL: function createObjectURL() {
        return '';
      },
      revokeObjectURL: function revokeObjectURL() {
        return '';
      }
    };
  }
  /*global window:true */


  that.window = global;
})(typeof global !== 'undefined' ? global : null); // _____________________________
// Cross-Browser-Declarations.js
// animation-frame used in WebM recording

/*jshint -W079 */


var requestAnimationFrame = window.requestAnimationFrame;

if (typeof requestAnimationFrame === 'undefined') {
  if (typeof webkitRequestAnimationFrame !== 'undefined') {
    /*global requestAnimationFrame:true */
    requestAnimationFrame = webkitRequestAnimationFrame;
  } else if (typeof mozRequestAnimationFrame !== 'undefined') {
    /*global requestAnimationFrame:true */
    requestAnimationFrame = mozRequestAnimationFrame;
  } else if (typeof msRequestAnimationFrame !== 'undefined') {
    /*global requestAnimationFrame:true */
    requestAnimationFrame = msRequestAnimationFrame;
  } else if (typeof requestAnimationFrame === 'undefined') {
    // via: https://gist.github.com/paulirish/1579671
    var lastTime = 0;
    /*global requestAnimationFrame:true */

    requestAnimationFrame = function requestAnimationFrame(callback, element) {
      var currTime = new Date().getTime();
      var timeToCall = Math.max(0, 16 - (currTime - lastTime));
      var id = setTimeout(function () {
        callback(currTime + timeToCall);
      }, timeToCall);
      lastTime = currTime + timeToCall;
      return id;
    };
  }
}
/*jshint -W079 */


var cancelAnimationFrame = window.cancelAnimationFrame;

if (typeof cancelAnimationFrame === 'undefined') {
  if (typeof webkitCancelAnimationFrame !== 'undefined') {
    /*global cancelAnimationFrame:true */
    cancelAnimationFrame = webkitCancelAnimationFrame;
  } else if (typeof mozCancelAnimationFrame !== 'undefined') {
    /*global cancelAnimationFrame:true */
    cancelAnimationFrame = mozCancelAnimationFrame;
  } else if (typeof msCancelAnimationFrame !== 'undefined') {
    /*global cancelAnimationFrame:true */
    cancelAnimationFrame = msCancelAnimationFrame;
  } else if (typeof cancelAnimationFrame === 'undefined') {
    /*global cancelAnimationFrame:true */
    cancelAnimationFrame = function cancelAnimationFrame(id) {
      clearTimeout(id);
    };
  }
} // WebAudio API representer


var AudioContext = window.AudioContext;

if (typeof AudioContext === 'undefined') {
  if (typeof webkitAudioContext !== 'undefined') {
    /*global AudioContext:true */
    AudioContext = webkitAudioContext;
  }

  if (typeof mozAudioContext !== 'undefined') {
    /*global AudioContext:true */
    AudioContext = mozAudioContext;
  }
}
/*jshint -W079 */


var URL = window.URL;

if (typeof URL === 'undefined' && typeof webkitURL !== 'undefined') {
  /*global URL:true */
  URL = webkitURL;
}

if (typeof navigator !== 'undefined' && typeof navigator.getUserMedia === 'undefined') {
  // maybe window.navigator?
  if (typeof navigator.webkitGetUserMedia !== 'undefined') {
    navigator.getUserMedia = navigator.webkitGetUserMedia;
  }

  if (typeof navigator.mozGetUserMedia !== 'undefined') {
    navigator.getUserMedia = navigator.mozGetUserMedia;
  }
}

var isEdge = navigator.userAgent.indexOf('Edge') !== -1 && (!!navigator.msSaveBlob || !!navigator.msSaveOrOpenBlob);
var isOpera = !!window.opera || navigator.userAgent.indexOf('OPR/') !== -1;
var isFirefox = navigator.userAgent.toLowerCase().indexOf('firefox') > -1 && 'netscape' in window && / rv:/.test(navigator.userAgent);
var isChrome = !isOpera && !isEdge && !!navigator.webkitGetUserMedia || isElectron() || navigator.userAgent.toLowerCase().indexOf('chrome/') !== -1;
var isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);

if (isSafari && !isChrome && navigator.userAgent.indexOf('CriOS') !== -1) {
  isSafari = false;
  isChrome = true;
}

var MediaStream = window.MediaStream;

if (typeof MediaStream === 'undefined' && typeof webkitMediaStream !== 'undefined') {
  MediaStream = webkitMediaStream;
}
/*global MediaStream:true */


if (typeof MediaStream !== 'undefined') {
  // override "stop" method for all browsers
  if (typeof MediaStream.prototype.stop === 'undefined') {
    MediaStream.prototype.stop = function () {
      this.getTracks().forEach(function (track) {
        track.stop();
      });
    };
  }

  if (!('getVideoTracks' in MediaStream.prototype)) {
    MediaStream.prototype.getVideoTracks = function () {
      if (!this.getTracks) {
        return [];
      }

      var tracks = [];
      this.getTracks.forEach(function (track) {
        if (track.kind.toString().indexOf('video') !== -1) {
          tracks.push(track);
        }
      });
      return tracks;
    };

    MediaStream.prototype.getAudioTracks = function () {
      if (!this.getTracks) {
        return [];
      }

      var tracks = [];
      this.getTracks.forEach(function (track) {
        if (track.kind.toString().indexOf('audio') !== -1) {
          tracks.push(track);
        }
      });
      return tracks;
    };
  }

  if (!('stop' in MediaStream.prototype)) {
    MediaStream.prototype.stop = function () {
      this.getAudioTracks().forEach(function (track) {
        if (!!track.stop) {
          track.stop();
        }
      });
      this.getVideoTracks().forEach(function (track) {
        if (!!track.stop) {
          track.stop();
        }
      });
    };
  }
} // below function via: http://goo.gl/B3ae8c

/**
 * Return human-readable file size.
 * @param {number} bytes - Pass bytes and get formatted string.
 * @returns {string} - formatted string
 * @example
 * bytesToSize(1024*1024*5) === '5 GB'
 * @see {@link https://github.com/muaz-khan/RecordRTC|RecordRTC Source Code}
 */


function bytesToSize(bytes) {
  var k = 1000;
  var sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];

  if (bytes === 0) {
    return '0 Bytes';
  }

  var i = parseInt(Math.floor(Math.log(bytes) / Math.log(k)), 10);
  return (bytes / Math.pow(k, i)).toPrecision(3) + ' ' + sizes[i];
}
/**
 * @param {Blob} file - File or Blob object. This parameter is required.
 * @param {string} fileName - Optional file name e.g. "Recorded-Video.webm"
 * @example
 * invokeSaveAsDialog(blob or file, [optional] fileName);
 * @see {@link https://github.com/muaz-khan/RecordRTC|RecordRTC Source Code}
 */


function invokeSaveAsDialog(file, fileName) {
  if (!file) {
    throw 'Blob object is required.';
  }

  if (!file.type) {
    try {
      file.type = 'video/webm';
    } catch (e) {}
  }

  var fileExtension = (file.type || 'video/webm').split('/')[1];

  if (fileExtension.indexOf(';') !== -1) {
    // extended mimetype, e.g. 'video/webm;codecs=vp8,opus'
    fileExtension = fileExtension.split(';')[0];
  }

  if (fileName && fileName.indexOf('.') !== -1) {
    var splitted = fileName.split('.');
    fileName = splitted[0];
    fileExtension = splitted[1];
  }

  var fileFullName = (fileName || Math.round(Math.random() * 9999999999) + 888888888) + '.' + fileExtension;

  if (typeof navigator.msSaveOrOpenBlob !== 'undefined') {
    return navigator.msSaveOrOpenBlob(file, fileFullName);
  } else if (typeof navigator.msSaveBlob !== 'undefined') {
    return navigator.msSaveBlob(file, fileFullName);
  }

  var hyperlink = document.createElement('a');
  hyperlink.href = URL.createObjectURL(file);
  hyperlink.download = fileFullName;
  hyperlink.style = 'display:none;opacity:0;color:transparent;';
  (document.body || document.documentElement).appendChild(hyperlink);

  if (typeof hyperlink.click === 'function') {
    hyperlink.click();
  } else {
    hyperlink.target = '_blank';
    hyperlink.dispatchEvent(new MouseEvent('click', {
      view: window,
      bubbles: true,
      cancelable: true
    }));
  }

  URL.revokeObjectURL(hyperlink.href);
}
/**
 * from: https://github.com/cheton/is-electron/blob/master/index.js
 **/


function isElectron() {
  // Renderer process
  if (typeof window !== 'undefined' && _typeof(window.process) === 'object' && window.process.type === 'renderer') {
    return true;
  } // Main process


  if (typeof process !== 'undefined' && _typeof(process.versions) === 'object' && !!process.versions.electron) {
    return true;
  } // Detect the user agent when the `nodeIntegration` option is set to true


  if ((typeof navigator === "undefined" ? "undefined" : _typeof(navigator)) === 'object' && typeof navigator.userAgent === 'string' && navigator.userAgent.indexOf('Electron') >= 0) {
    return true;
  }

  return false;
}

function getTracks(stream, kind) {
  if (!stream || !stream.getTracks) {
    return [];
  }

  return stream.getTracks().filter(function (t) {
    return t.kind === (kind || 'audio');
  });
}

function setSrcObject(stream, element) {
  if ('srcObject' in element) {
    element.srcObject = stream;
  } else if ('mozSrcObject' in element) {
    element.mozSrcObject = stream;
  } else {
    element.srcObject = stream;
  }
}
/**
 * @param {Blob} file - File or Blob object.
 * @param {function} callback - Callback function.
 * @example
 * getSeekableBlob(blob or file, callback);
 * @see {@link https://github.com/muaz-khan/RecordRTC|RecordRTC Source Code}
 */


function getSeekableBlob(inputBlob, callback) {
  // EBML.js copyrights goes to: https://github.com/legokichi/ts-ebml
  if (typeof EBML === 'undefined') {
    throw new Error('Please link: https://www.webrtc-experiment.com/EBML.js');
  }

  var reader = new EBML.Reader();
  var decoder = new EBML.Decoder();
  var tools = EBML.tools;
  var fileReader = new FileReader();

  fileReader.onload = function (e) {
    var ebmlElms = decoder.decode(this.result);
    ebmlElms.forEach(function (element) {
      reader.read(element);
    });
    reader.stop();
    var refinedMetadataBuf = tools.makeMetadataSeekable(reader.metadatas, reader.duration, reader.cues);
    var body = this.result.slice(reader.metadataSize);
    var newBlob = new Blob([refinedMetadataBuf, body], {
      type: 'video/webm'
    });
    callback(newBlob);
  };

  fileReader.readAsArrayBuffer(inputBlob);
}

if (typeof RecordRTC !== 'undefined') {
  RecordRTC.invokeSaveAsDialog = invokeSaveAsDialog;
  RecordRTC.getTracks = getTracks;
  RecordRTC.getSeekableBlob = getSeekableBlob;
  RecordRTC.bytesToSize = bytesToSize;
  RecordRTC.isElectron = isElectron;
} // __________ (used to handle stuff like http://goo.gl/xmE5eg) issue #129
// Storage.js

/**
 * Storage is a standalone object used by {@link RecordRTC} to store reusable objects e.g. "new AudioContext".
 * @license {@link https://github.com/muaz-khan/RecordRTC/blob/master/LICENSE|MIT}
 * @author {@link https://MuazKhan.com|Muaz Khan}
 * @example
 * Storage.AudioContext === webkitAudioContext
 * @property {webkitAudioContext} AudioContext - Keeps a reference to AudioContext object.
 * @see {@link https://github.com/muaz-khan/RecordRTC|RecordRTC Source Code}
 */


var Storage = {};

if (typeof AudioContext !== 'undefined') {
  Storage.AudioContext = AudioContext;
} else if (typeof webkitAudioContext !== 'undefined') {
  Storage.AudioContext = webkitAudioContext;
}

if (typeof RecordRTC !== 'undefined') {
  RecordRTC.Storage = Storage;
}

function isMediaRecorderCompatible() {
  if (isFirefox || isSafari || isEdge) {
    return true;
  }

  var nVer = navigator.appVersion;
  var nAgt = navigator.userAgent;
  var fullVersion = '' + parseFloat(navigator.appVersion);
  var majorVersion = parseInt(navigator.appVersion, 10);
  var nameOffset, verOffset, ix;

  if (isChrome || isOpera) {
    verOffset = nAgt.indexOf('Chrome');
    fullVersion = nAgt.substring(verOffset + 7);
  } // trim the fullVersion string at semicolon/space if present


  if ((ix = fullVersion.indexOf(';')) !== -1) {
    fullVersion = fullVersion.substring(0, ix);
  }

  if ((ix = fullVersion.indexOf(' ')) !== -1) {
    fullVersion = fullVersion.substring(0, ix);
  }

  majorVersion = parseInt('' + fullVersion, 10);

  if (isNaN(majorVersion)) {
    fullVersion = '' + parseFloat(navigator.appVersion);
    majorVersion = parseInt(navigator.appVersion, 10);
  }

  return majorVersion >= 49;
} // ______________________
// MediaStreamRecorder.js

/**
 * MediaStreamRecorder is an abstraction layer for {@link https://w3c.github.io/mediacapture-record/MediaRecorder.html|MediaRecorder API}. It is used by {@link RecordRTC} to record MediaStream(s) in both Chrome and Firefox.
 * @summary Runs top over {@link https://w3c.github.io/mediacapture-record/MediaRecorder.html|MediaRecorder API}.
 * @license {@link https://github.com/muaz-khan/RecordRTC/blob/master/LICENSE|MIT}
 * @author {@link https://github.com/muaz-khan|Muaz Khan}
 * @typedef MediaStreamRecorder
 * @class
 * @example
 * var config = {
 *     mimeType: 'video/webm', // vp8, vp9, h264, mkv, opus/vorbis
 *     audioBitsPerSecond : 256 * 8 * 1024,
 *     videoBitsPerSecond : 256 * 8 * 1024,
 *     bitsPerSecond: 256 * 8 * 1024,  // if this is provided, skip above two
 *     checkForInactiveTracks: true,
 *     timeSlice: 1000, // concatenate intervals based blobs
 *     ondataavailable: function() {} // get intervals based blobs
 * }
 * var recorder = new MediaStreamRecorder(mediaStream, config);
 * recorder.record();
 * recorder.stop(function(blob) {
 *     video.src = URL.createObjectURL(blob);
 *
 *     // or
 *     var blob = recorder.blob;
 * });
 * @see {@link https://github.com/muaz-khan/RecordRTC|RecordRTC Source Code}
 * @param {MediaStream} mediaStream - MediaStream object fetched using getUserMedia API or generated using captureStreamUntilEnded or WebAudio API.
 * @param {object} config - {disableLogs:true, initCallback: function, mimeType: "video/webm", timeSlice: 1000}
 * @throws Will throw an error if first argument "MediaStream" is missing. Also throws error if "MediaRecorder API" are not supported by the browser.
 */


function MediaStreamRecorder(mediaStream, config) {
  var self = this;

  if (typeof mediaStream === 'undefined') {
    throw 'First argument "MediaStream" is required.';
  }

  if (typeof MediaRecorder === 'undefined') {
    throw 'Your browser does not support the Media Recorder API. Please try other modules e.g. WhammyRecorder or StereoAudioRecorder.';
  }

  config = config || {
    // bitsPerSecond: 256 * 8 * 1024,
    mimeType: 'video/webm'
  };

  if (config.type === 'audio') {
    if (getTracks(mediaStream, 'video').length && getTracks(mediaStream, 'audio').length) {
      var stream;

      if (!!navigator.mozGetUserMedia) {
        stream = new MediaStream();
        stream.addTrack(getTracks(mediaStream, 'audio')[0]);
      } else {
        // webkitMediaStream
        stream = new MediaStream(getTracks(mediaStream, 'audio'));
      }

      mediaStream = stream;
    }

    if (!config.mimeType || config.mimeType.toString().toLowerCase().indexOf('audio') === -1) {
      config.mimeType = isChrome ? 'audio/webm' : 'audio/ogg';
    }

    if (config.mimeType && config.mimeType.toString().toLowerCase() !== 'audio/ogg' && !!navigator.mozGetUserMedia) {
      // forcing better codecs on Firefox (via #166)
      config.mimeType = 'audio/ogg';
    }
  }

  var arrayOfBlobs = [];
  /**
   * This method returns array of blobs. Use only with "timeSlice". Its useful to preview recording anytime, without using the "stop" method.
   * @method
   * @memberof MediaStreamRecorder
   * @example
   * var arrayOfBlobs = recorder.getArrayOfBlobs();
   * @returns {Array} Returns array of recorded blobs.
   */

  this.getArrayOfBlobs = function () {
    return arrayOfBlobs;
  };
  /**
   * This method records MediaStream.
   * @method
   * @memberof MediaStreamRecorder
   * @example
   * recorder.record();
   */


  this.record = function () {
    // set defaults
    self.blob = null;
    self.clearRecordedData();
    self.timestamps = [];
    allStates = [];
    arrayOfBlobs = [];
    var recorderHints = config;

    if (!config.disableLogs) {
      console.log('Passing following config over MediaRecorder API.', recorderHints);
    }

    if (mediaRecorder) {
      // mandatory to make sure Firefox doesn't fails to record streams 3-4 times without reloading the page.
      mediaRecorder = null;
    }

    if (isChrome && !isMediaRecorderCompatible()) {
      // to support video-only recording on stable
      recorderHints = 'video/vp8';
    }

    if (typeof MediaRecorder.isTypeSupported === 'function' && recorderHints.mimeType) {
      if (!MediaRecorder.isTypeSupported(recorderHints.mimeType)) {
        if (!config.disableLogs) {
          console.warn('MediaRecorder API seems unable to record mimeType:', recorderHints.mimeType);
        }

        recorderHints.mimeType = config.type === 'audio' ? 'audio/webm' : 'video/webm';
      }
    } // using MediaRecorder API here


    try {
      mediaRecorder = new MediaRecorder(mediaStream, recorderHints); // reset

      config.mimeType = recorderHints.mimeType;
    } catch (e) {
      // chrome-based fallback
      mediaRecorder = new MediaRecorder(mediaStream);
    } // old hack?


    if (recorderHints.mimeType && !MediaRecorder.isTypeSupported && 'canRecordMimeType' in mediaRecorder && mediaRecorder.canRecordMimeType(recorderHints.mimeType) === false) {
      if (!config.disableLogs) {
        console.warn('MediaRecorder API seems unable to record mimeType:', recorderHints.mimeType);
      }
    } // Dispatching OnDataAvailable Handler


    mediaRecorder.ondataavailable = function (e) {
      if (e.data) {
        allStates.push('ondataavailable: ' + bytesToSize(e.data.size));
      }

      if (typeof config.timeSlice === 'number') {
        if (e.data && e.data.size) {
          arrayOfBlobs.push(e.data);
          updateTimeStamp();

          if (typeof config.ondataavailable === 'function') {
            // intervals based blobs
            var blob = config.getNativeBlob ? e.data : new Blob([e.data], {
              type: getMimeType(recorderHints)
            });
            config.ondataavailable(blob);
          }
        }

        return;
      }

      if (!e.data || !e.data.size || e.data.size < 100 || self.blob) {
        // make sure that stopRecording always getting fired
        // even if there is invalid data
        if (self.recordingCallback) {
          self.recordingCallback(new Blob([], {
            type: getMimeType(recorderHints)
          }));
          self.recordingCallback = null;
        }

        return;
      }

      self.blob = config.getNativeBlob ? e.data : new Blob([e.data], {
        type: getMimeType(recorderHints)
      });

      if (self.recordingCallback) {
        self.recordingCallback(self.blob);
        self.recordingCallback = null;
      }
    };

    mediaRecorder.onstart = function () {
      allStates.push('started');
    };

    mediaRecorder.onpause = function () {
      allStates.push('paused');
    };

    mediaRecorder.onresume = function () {
      allStates.push('resumed');
    };

    mediaRecorder.onstop = function () {
      allStates.push('stopped');
    };

    mediaRecorder.onerror = function (error) {
      if (!error) {
        return;
      }

      if (!error.name) {
        error.name = 'UnknownError';
      }

      allStates.push('error: ' + error);

      if (!config.disableLogs) {
        // via: https://w3c.github.io/mediacapture-record/MediaRecorder.html#exception-summary
        if (error.name.toString().toLowerCase().indexOf('invalidstate') !== -1) {
          console.error('The MediaRecorder is not in a state in which the proposed operation is allowed to be executed.', error);
        } else if (error.name.toString().toLowerCase().indexOf('notsupported') !== -1) {
          console.error('MIME type (', recorderHints.mimeType, ') is not supported.', error);
        } else if (error.name.toString().toLowerCase().indexOf('security') !== -1) {
          console.error('MediaRecorder security error', error);
        } // older code below
        else if (error.name === 'OutOfMemory') {
          console.error('The UA has exhaused the available memory. User agents SHOULD provide as much additional information as possible in the message attribute.', error);
        } else if (error.name === 'IllegalStreamModification') {
          console.error('A modification to the stream has occurred that makes it impossible to continue recording. An example would be the addition of a Track while recording is occurring. User agents SHOULD provide as much additional information as possible in the message attribute.', error);
        } else if (error.name === 'OtherRecordingError') {
          console.error('Used for an fatal error other than those listed above. User agents SHOULD provide as much additional information as possible in the message attribute.', error);
        } else if (error.name === 'GenericError') {
          console.error('The UA cannot provide the codec or recording option that has been requested.', error);
        } else {
          console.error('MediaRecorder Error', error);
        }
      }

      (function (looper) {
        if (!self.manuallyStopped && mediaRecorder && mediaRecorder.state === 'inactive') {
          delete config.timeslice; // 10 minutes, enough?

          mediaRecorder.start(10 * 60 * 1000);
          return;
        }

        setTimeout(looper, 1000);
      })();

      if (mediaRecorder.state !== 'inactive' && mediaRecorder.state !== 'stopped') {
        mediaRecorder.stop();
      }
    };

    if (typeof config.timeSlice === 'number') {
      updateTimeStamp();
      mediaRecorder.start(config.timeSlice);
    } else {
      // default is 60 minutes; enough?
      // use config => {timeSlice: 1000} otherwise
      mediaRecorder.start(3.6e+6);
    }

    if (config.initCallback) {
      config.initCallback(); // old code
    }
  };
  /**
   * @property {Array} timestamps - Array of time stamps
   * @memberof MediaStreamRecorder
   * @example
   * console.log(recorder.timestamps);
   */


  this.timestamps = [];

  function updateTimeStamp() {
    self.timestamps.push(new Date().getTime());

    if (typeof config.onTimeStamp === 'function') {
      config.onTimeStamp(self.timestamps[self.timestamps.length - 1], self.timestamps);
    }
  }

  function getMimeType(secondObject) {
    if (mediaRecorder && mediaRecorder.mimeType) {
      return mediaRecorder.mimeType;
    }

    return secondObject.mimeType || 'video/webm';
  }
  /**
   * This method stops recording MediaStream.
   * @param {function} callback - Callback function, that is used to pass recorded blob back to the callee.
   * @method
   * @memberof MediaStreamRecorder
   * @example
   * recorder.stop(function(blob) {
   *     video.src = URL.createObjectURL(blob);
   * });
   */


  this.stop = function (callback) {
    callback = callback || function () {};

    self.manuallyStopped = true; // used inside the mediaRecorder.onerror

    if (!mediaRecorder) {
      return;
    }

    this.recordingCallback = callback;

    if (mediaRecorder.state === 'recording') {
      mediaRecorder.stop();
    }

    if (typeof config.timeSlice === 'number') {
      setTimeout(function () {
        self.blob = new Blob(arrayOfBlobs, {
          type: getMimeType(config)
        });
        self.recordingCallback(self.blob);
      }, 100);
    }
  };
  /**
   * This method pauses the recording process.
   * @method
   * @memberof MediaStreamRecorder
   * @example
   * recorder.pause();
   */


  this.pause = function () {
    if (!mediaRecorder) {
      return;
    }

    if (mediaRecorder.state === 'recording') {
      mediaRecorder.pause();
    }
  };
  /**
   * This method resumes the recording process.
   * @method
   * @memberof MediaStreamRecorder
   * @example
   * recorder.resume();
   */


  this.resume = function () {
    if (!mediaRecorder) {
      return;
    }

    if (mediaRecorder.state === 'paused') {
      mediaRecorder.resume();
    }
  };
  /**
   * This method resets currently recorded data.
   * @method
   * @memberof MediaStreamRecorder
   * @example
   * recorder.clearRecordedData();
   */


  this.clearRecordedData = function () {
    if (mediaRecorder && mediaRecorder.state === 'recording') {
      self.stop(clearRecordedDataCB);
    }

    clearRecordedDataCB();
  };

  function clearRecordedDataCB() {
    arrayOfBlobs = [];
    mediaRecorder = null;
    self.timestamps = [];
  } // Reference to "MediaRecorder" object


  var mediaRecorder;
  /**
   * Access to native MediaRecorder API
   * @method
   * @memberof MediaStreamRecorder
   * @instance
   * @example
   * var internal = recorder.getInternalRecorder();
   * internal.ondataavailable = function() {}; // override
   * internal.stream, internal.onpause, internal.onstop, etc.
   * @returns {Object} Returns internal recording object.
   */

  this.getInternalRecorder = function () {
    return mediaRecorder;
  };

  function isMediaStreamActive() {
    if ('active' in mediaStream) {
      if (!mediaStream.active) {
        return false;
      }
    } else if ('ended' in mediaStream) {
      // old hack
      if (mediaStream.ended) {
        return false;
      }
    }

    return true;
  }
  /**
   * @property {Blob} blob - Recorded data as "Blob" object.
   * @memberof MediaStreamRecorder
   * @example
   * recorder.stop(function() {
   *     var blob = recorder.blob;
   * });
   */


  this.blob = null;
  /**
   * Get MediaRecorder readonly state.
   * @method
   * @memberof MediaStreamRecorder
   * @example
   * var state = recorder.getState();
   * @returns {String} Returns recording state.
   */

  this.getState = function () {
    if (!mediaRecorder) {
      return 'inactive';
    }

    return mediaRecorder.state || 'inactive';
  }; // list of all recording states


  var allStates = [];
  /**
   * Get MediaRecorder all recording states.
   * @method
   * @memberof MediaStreamRecorder
   * @example
   * var state = recorder.getAllStates();
   * @returns {Array} Returns all recording states
   */

  this.getAllStates = function () {
    return allStates;
  }; // if any Track within the MediaStream is muted or not enabled at any time,
  // the browser will only record black frames
  // or silence since that is the content produced by the Track
  // so we need to stopRecording as soon as any single track ends.


  if (typeof config.checkForInactiveTracks === 'undefined') {
    config.checkForInactiveTracks = false; // disable to minimize CPU usage
  }

  var self = this; // this method checks if media stream is stopped
  // or if any track is ended.

  (function looper() {
    if (!mediaRecorder || config.checkForInactiveTracks === false) {
      return;
    }

    if (isMediaStreamActive() === false) {
      if (!config.disableLogs) {
        console.log('MediaStream seems stopped.');
      }

      self.stop();
      return;
    }

    setTimeout(looper, 1000); // check every second
  })(); // for debugging


  this.name = 'MediaStreamRecorder';

  this.toString = function () {
    return this.name;
  };
}

if (typeof RecordRTC !== 'undefined') {
  RecordRTC.MediaStreamRecorder = MediaStreamRecorder;
} // source code from: http://typedarray.org/wp-content/projects/WebAudioRecorder/script.js
// https://github.com/mattdiamond/Recorderjs#license-mit
// ______________________
// StereoAudioRecorder.js

/**
 * StereoAudioRecorder is a standalone class used by {@link RecordRTC} to bring "stereo" audio-recording in chrome.
 * @summary JavaScript standalone object for stereo audio recording.
 * @license {@link https://github.com/muaz-khan/RecordRTC/blob/master/LICENSE|MIT}
 * @author {@link https://MuazKhan.com|Muaz Khan}
 * @typedef StereoAudioRecorder
 * @class
 * @example
 * var recorder = new StereoAudioRecorder(MediaStream, {
 *     sampleRate: 44100,
 *     bufferSize: 4096
 * });
 * recorder.record();
 * recorder.stop(function(blob) {
 *     video.src = URL.createObjectURL(blob);
 * });
 * @see {@link https://github.com/muaz-khan/RecordRTC|RecordRTC Source Code}
 * @param {MediaStream} mediaStream - MediaStream object fetched using getUserMedia API or generated using captureStreamUntilEnded or WebAudio API.
 * @param {object} config - {sampleRate: 44100, bufferSize: 4096, numberOfAudioChannels: 1, etc.}
 */


function StereoAudioRecorder(mediaStream, config) {
  if (!getTracks(mediaStream, 'audio').length) {
    throw 'Your stream has no audio tracks.';
  }

  config = config || {};
  var self = this; // variables

  var leftchannel = [];
  var rightchannel = [];
  var recording = false;
  var recordingLength = 0;
  var jsAudioNode;
  var numberOfAudioChannels = 2;
  /**
   * Set sample rates such as 8K or 16K. Reference: http://stackoverflow.com/a/28977136/552182
   * @property {number} desiredSampRate - Desired Bits per sample * 1000
   * @memberof StereoAudioRecorder
   * @instance
   * @example
   * var recorder = StereoAudioRecorder(mediaStream, {
   *   desiredSampRate: 16 * 1000 // bits-per-sample * 1000
   * });
   */

  var desiredSampRate = config.desiredSampRate; // backward compatibility

  if (config.leftChannel === true) {
    numberOfAudioChannels = 1;
  }

  if (config.numberOfAudioChannels === 1) {
    numberOfAudioChannels = 1;
  }

  if (!numberOfAudioChannels || numberOfAudioChannels < 1) {
    numberOfAudioChannels = 2;
  }

  if (!config.disableLogs) {
    console.log('StereoAudioRecorder is set to record number of channels: ' + numberOfAudioChannels);
  } // if any Track within the MediaStream is muted or not enabled at any time,
  // the browser will only record black frames
  // or silence since that is the content produced by the Track
  // so we need to stopRecording as soon as any single track ends.


  if (typeof config.checkForInactiveTracks === 'undefined') {
    config.checkForInactiveTracks = true;
  }

  function isMediaStreamActive() {
    if (config.checkForInactiveTracks === false) {
      // always return "true"
      return true;
    }

    if ('active' in mediaStream) {
      if (!mediaStream.active) {
        return false;
      }
    } else if ('ended' in mediaStream) {
      // old hack
      if (mediaStream.ended) {
        return false;
      }
    }

    return true;
  }
  /**
   * This method records MediaStream.
   * @method
   * @memberof StereoAudioRecorder
   * @example
   * recorder.record();
   */


  this.record = function () {
    if (isMediaStreamActive() === false) {
      throw 'Please make sure MediaStream is active.';
    }

    resetVariables();
    isAudioProcessStarted = isPaused = false;
    recording = true;

    if (typeof config.timeSlice !== 'undefined') {
      looper();
    }
  };

  function mergeLeftRightBuffers(config, callback) {
    function mergeAudioBuffers(config, cb) {
      var numberOfAudioChannels = config.numberOfAudioChannels; // todo: "slice(0)" --- is it causes loop? Should be removed?

      var leftBuffers = config.leftBuffers.slice(0);
      var rightBuffers = config.rightBuffers.slice(0);
      var sampleRate = config.sampleRate;
      var internalInterleavedLength = config.internalInterleavedLength;
      var desiredSampRate = config.desiredSampRate;

      if (numberOfAudioChannels === 2) {
        leftBuffers = mergeBuffers(leftBuffers, internalInterleavedLength);
        rightBuffers = mergeBuffers(rightBuffers, internalInterleavedLength);

        if (desiredSampRate) {
          leftBuffers = interpolateArray(leftBuffers, desiredSampRate, sampleRate);
          rightBuffers = interpolateArray(rightBuffers, desiredSampRate, sampleRate);
        }
      }

      if (numberOfAudioChannels === 1) {
        leftBuffers = mergeBuffers(leftBuffers, internalInterleavedLength);

        if (desiredSampRate) {
          leftBuffers = interpolateArray(leftBuffers, desiredSampRate, sampleRate);
        }
      } // set sample rate as desired sample rate


      if (desiredSampRate) {
        sampleRate = desiredSampRate;
      } // for changing the sampling rate, reference:
      // http://stackoverflow.com/a/28977136/552182


      function interpolateArray(data, newSampleRate, oldSampleRate) {
        var fitCount = Math.round(data.length * (newSampleRate / oldSampleRate));
        var newData = [];
        var springFactor = Number((data.length - 1) / (fitCount - 1));
        newData[0] = data[0];

        for (var i = 1; i < fitCount - 1; i++) {
          var tmp = i * springFactor;
          var before = Number(Math.floor(tmp)).toFixed();
          var after = Number(Math.ceil(tmp)).toFixed();
          var atPoint = tmp - before;
          newData[i] = linearInterpolate(data[before], data[after], atPoint);
        }

        newData[fitCount - 1] = data[data.length - 1];
        return newData;
      }

      function linearInterpolate(before, after, atPoint) {
        return before + (after - before) * atPoint;
      }

      function mergeBuffers(channelBuffer, rLength) {
        var result = new Float64Array(rLength);
        var offset = 0;
        var lng = channelBuffer.length;

        for (var i = 0; i < lng; i++) {
          var buffer = channelBuffer[i];
          result.set(buffer, offset);
          offset += buffer.length;
        }

        return result;
      }

      function interleave(leftChannel, rightChannel) {
        var length = leftChannel.length + rightChannel.length;
        var result = new Float64Array(length);
        var inputIndex = 0;

        for (var index = 0; index < length;) {
          result[index++] = leftChannel[inputIndex];
          result[index++] = rightChannel[inputIndex];
          inputIndex++;
        }

        return result;
      }

      function writeUTFBytes(view, offset, string) {
        var lng = string.length;

        for (var i = 0; i < lng; i++) {
          view.setUint8(offset + i, string.charCodeAt(i));
        }
      } // interleave both channels together


      var interleaved;

      if (numberOfAudioChannels === 2) {
        interleaved = interleave(leftBuffers, rightBuffers);
      }

      if (numberOfAudioChannels === 1) {
        interleaved = leftBuffers;
      }

      var interleavedLength = interleaved.length; // create wav file

      var resultingBufferLength = 44 + interleavedLength * 2;
      var buffer = new ArrayBuffer(resultingBufferLength);
      var view = new DataView(buffer); // RIFF chunk descriptor/identifier

      writeUTFBytes(view, 0, 'RIFF'); // RIFF chunk length
      // changed "44" to "36" via #401

      view.setUint32(4, 36 + interleavedLength * 2, true); // RIFF type

      writeUTFBytes(view, 8, 'WAVE'); // format chunk identifier
      // FMT sub-chunk

      writeUTFBytes(view, 12, 'fmt '); // format chunk length

      view.setUint32(16, 16, true); // sample format (raw)

      view.setUint16(20, 1, true); // stereo (2 channels)

      view.setUint16(22, numberOfAudioChannels, true); // sample rate

      view.setUint32(24, sampleRate, true); // byte rate (sample rate * block align)

      view.setUint32(28, sampleRate * numberOfAudioChannels * 2, true); // block align (channel count * bytes per sample)

      view.setUint16(32, numberOfAudioChannels * 2, true); // bits per sample

      view.setUint16(34, 16, true); // data sub-chunk
      // data chunk identifier

      writeUTFBytes(view, 36, 'data'); // data chunk length

      view.setUint32(40, interleavedLength * 2, true); // write the PCM samples

      var lng = interleavedLength;
      var index = 44;
      var volume = 1;

      for (var i = 0; i < lng; i++) {
        view.setInt16(index, interleaved[i] * (0x7FFF * volume), true);
        index += 2;
      }

      if (cb) {
        return cb({
          buffer: buffer,
          view: view
        });
      }

      postMessage({
        buffer: buffer,
        view: view
      });
    }

    if (config.noWorker) {
      mergeAudioBuffers(config, function (data) {
        callback(data.buffer, data.view);
      });
      return;
    }

    var webWorker = processInWebWorker(mergeAudioBuffers);

    webWorker.onmessage = function (event) {
      callback(event.data.buffer, event.data.view); // release memory

      URL.revokeObjectURL(webWorker.workerURL); // kill webworker (or Chrome will kill your page after ~25 calls)

      webWorker.terminate();
    };

    webWorker.postMessage(config);
  }

  function processInWebWorker(_function) {
    var workerURL = URL.createObjectURL(new Blob([_function.toString(), ';this.onmessage =  function (eee) {' + _function.name + '(eee.data);}'], {
      type: 'application/javascript'
    }));
    var worker = new Worker(workerURL);
    worker.workerURL = workerURL;
    return worker;
  }
  /**
   * This method stops recording MediaStream.
   * @param {function} callback - Callback function, that is used to pass recorded blob back to the callee.
   * @method
   * @memberof StereoAudioRecorder
   * @example
   * recorder.stop(function(blob) {
   *     video.src = URL.createObjectURL(blob);
   * });
   */


  this.stop = function (callback) {
    callback = callback || function () {}; // stop recording


    recording = false;
    mergeLeftRightBuffers({
      desiredSampRate: desiredSampRate,
      sampleRate: sampleRate,
      numberOfAudioChannels: numberOfAudioChannels,
      internalInterleavedLength: recordingLength,
      leftBuffers: leftchannel,
      rightBuffers: numberOfAudioChannels === 1 ? [] : rightchannel,
      noWorker: config.noWorker
    }, function (buffer, view) {
      /**
       * @property {Blob} blob - The recorded blob object.
       * @memberof StereoAudioRecorder
       * @example
       * recorder.stop(function(){
       *     var blob = recorder.blob;
       * });
       */
      self.blob = new Blob([view], {
        type: 'audio/wav'
      });
      /**
       * @property {ArrayBuffer} buffer - The recorded buffer object.
       * @memberof StereoAudioRecorder
       * @example
       * recorder.stop(function(){
       *     var buffer = recorder.buffer;
       * });
       */

      self.buffer = new ArrayBuffer(view.buffer.byteLength);
      /**
       * @property {DataView} view - The recorded data-view object.
       * @memberof StereoAudioRecorder
       * @example
       * recorder.stop(function(){
       *     var view = recorder.view;
       * });
       */

      self.view = view;
      self.sampleRate = desiredSampRate || sampleRate;
      self.bufferSize = bufferSize; // recorded audio length

      self.length = recordingLength;
      isAudioProcessStarted = false;

      if (callback) {
        callback(self.blob);
      }
    });
  };

  if (typeof RecordRTC.Storage === 'undefined') {
    RecordRTC.Storage = {
      AudioContextConstructor: null,
      AudioContext: window.AudioContext || window.webkitAudioContext
    };
  }

  if (!RecordRTC.Storage.AudioContextConstructor || RecordRTC.Storage.AudioContextConstructor.state === 'closed') {
    RecordRTC.Storage.AudioContextConstructor = new RecordRTC.Storage.AudioContext();
  }

  var context = RecordRTC.Storage.AudioContextConstructor; // creates an audio node from the microphone incoming stream

  var audioInput = context.createMediaStreamSource(mediaStream);
  var legalBufferValues = [0, 256, 512, 1024, 2048, 4096, 8192, 16384];
  /**
   * From the spec: This value controls how frequently the audioprocess event is
   * dispatched and how many sample-frames need to be processed each call.
   * Lower values for buffer size will result in a lower (better) latency.
   * Higher values will be necessary to avoid audio breakup and glitches
   * The size of the buffer (in sample-frames) which needs to
   * be processed each time onprocessaudio is called.
   * Legal values are (256, 512, 1024, 2048, 4096, 8192, 16384).
   * @property {number} bufferSize - Buffer-size for how frequently the audioprocess event is dispatched.
   * @memberof StereoAudioRecorder
   * @example
   * recorder = new StereoAudioRecorder(mediaStream, {
   *     bufferSize: 4096
   * });
   */
  // "0" means, let chrome decide the most accurate buffer-size for current platform.

  var bufferSize = typeof config.bufferSize === 'undefined' ? 4096 : config.bufferSize;

  if (legalBufferValues.indexOf(bufferSize) === -1) {
    if (!config.disableLogs) {
      console.log('Legal values for buffer-size are ' + JSON.stringify(legalBufferValues, null, '\t'));
    }
  }

  if (context.createJavaScriptNode) {
    jsAudioNode = context.createJavaScriptNode(bufferSize, numberOfAudioChannels, numberOfAudioChannels);
  } else if (context.createScriptProcessor) {
    jsAudioNode = context.createScriptProcessor(bufferSize, numberOfAudioChannels, numberOfAudioChannels);
  } else {
    throw 'WebAudio API has no support on this browser.';
  } // connect the stream to the script processor


  audioInput.connect(jsAudioNode);

  if (!config.bufferSize) {
    bufferSize = jsAudioNode.bufferSize; // device buffer-size
  }
  /**
   * The sample rate (in sample-frames per second) at which the
   * AudioContext handles audio. It is assumed that all AudioNodes
   * in the context run at this rate. In making this assumption,
   * sample-rate converters or "varispeed" processors are not supported
   * in real-time processing.
   * The sampleRate parameter describes the sample-rate of the
   * linear PCM audio data in the buffer in sample-frames per second.
   * An implementation must support sample-rates in at least
   * the range 22050 to 96000.
   * @property {number} sampleRate - Buffer-size for how frequently the audioprocess event is dispatched.
   * @memberof StereoAudioRecorder
   * @example
   * recorder = new StereoAudioRecorder(mediaStream, {
   *     sampleRate: 44100
   * });
   */


  var sampleRate = typeof config.sampleRate !== 'undefined' ? config.sampleRate : context.sampleRate || 44100;

  if (sampleRate < 22050 || sampleRate > 96000) {
    // Ref: http://stackoverflow.com/a/26303918/552182
    if (!config.disableLogs) {
      console.log('sample-rate must be under range 22050 and 96000.');
    }
  }

  if (!config.disableLogs) {
    if (config.desiredSampRate) {
      console.log('Desired sample-rate: ' + config.desiredSampRate);
    }
  }

  var isPaused = false;
  /**
   * This method pauses the recording process.
   * @method
   * @memberof StereoAudioRecorder
   * @example
   * recorder.pause();
   */

  this.pause = function () {
    isPaused = true;
  };
  /**
   * This method resumes the recording process.
   * @method
   * @memberof StereoAudioRecorder
   * @example
   * recorder.resume();
   */


  this.resume = function () {
    if (isMediaStreamActive() === false) {
      throw 'Please make sure MediaStream is active.';
    }

    if (!recording) {
      if (!config.disableLogs) {
        console.log('Seems recording has been restarted.');
      }

      this.record();
      return;
    }

    isPaused = false;
  };
  /**
   * This method resets currently recorded data.
   * @method
   * @memberof StereoAudioRecorder
   * @example
   * recorder.clearRecordedData();
   */


  this.clearRecordedData = function () {
    config.checkForInactiveTracks = false;

    if (recording) {
      this.stop(clearRecordedDataCB);
    }

    clearRecordedDataCB();
  };

  function resetVariables() {
    leftchannel = [];
    rightchannel = [];
    recordingLength = 0;
    isAudioProcessStarted = false;
    recording = false;
    isPaused = false;
    context = null;
    self.leftchannel = leftchannel;
    self.rightchannel = rightchannel;
    self.numberOfAudioChannels = numberOfAudioChannels;
    self.desiredSampRate = desiredSampRate;
    self.sampleRate = sampleRate;
    self.recordingLength = recordingLength;
    intervalsBasedBuffers = {
      left: [],
      right: [],
      recordingLength: 0
    };
  }

  function clearRecordedDataCB() {
    if (jsAudioNode) {
      jsAudioNode.onaudioprocess = null;
      jsAudioNode.disconnect();
      jsAudioNode = null;
    }

    if (audioInput) {
      audioInput.disconnect();
      audioInput = null;
    }

    resetVariables();
  } // for debugging


  this.name = 'StereoAudioRecorder';

  this.toString = function () {
    return this.name;
  };

  var isAudioProcessStarted = false;

  function onAudioProcessDataAvailable(e) {
    if (isPaused) {
      return;
    }

    if (isMediaStreamActive() === false) {
      if (!config.disableLogs) {
        console.log('MediaStream seems stopped.');
      }

      jsAudioNode.disconnect();
      recording = false;
    }

    if (!recording) {
      if (audioInput) {
        audioInput.disconnect();
        audioInput = null;
      }

      return;
    }
    /**
     * This method is called on "onaudioprocess" event's first invocation.
     * @method {function} onAudioProcessStarted
     * @memberof StereoAudioRecorder
     * @example
     * recorder.onAudioProcessStarted: function() { };
     */


    if (!isAudioProcessStarted) {
      isAudioProcessStarted = true;

      if (config.onAudioProcessStarted) {
        config.onAudioProcessStarted();
      }

      if (config.initCallback) {
        config.initCallback();
      }
    }

    var left = e.inputBuffer.getChannelData(0); // we clone the samples

    var chLeft = new Float32Array(left);
    leftchannel.push(chLeft);

    if (numberOfAudioChannels === 2) {
      var right = e.inputBuffer.getChannelData(1);
      var chRight = new Float32Array(right);
      rightchannel.push(chRight);
    }

    recordingLength += bufferSize; // export raw PCM

    self.recordingLength = recordingLength;

    if (typeof config.timeSlice !== 'undefined') {
      intervalsBasedBuffers.recordingLength += bufferSize;
      intervalsBasedBuffers.left.push(chLeft);

      if (numberOfAudioChannels === 2) {
        intervalsBasedBuffers.right.push(chRight);
      }
    }
  }

  jsAudioNode.onaudioprocess = onAudioProcessDataAvailable; // to prevent self audio to be connected with speakers

  if (context.createMediaStreamDestination) {
    jsAudioNode.connect(context.createMediaStreamDestination());
  } else {
    jsAudioNode.connect(context.destination);
  } // export raw PCM


  this.leftchannel = leftchannel;
  this.rightchannel = rightchannel;
  this.numberOfAudioChannels = numberOfAudioChannels;
  this.desiredSampRate = desiredSampRate;
  this.sampleRate = sampleRate;
  self.recordingLength = recordingLength; // helper for intervals based blobs

  var intervalsBasedBuffers = {
    left: [],
    right: [],
    recordingLength: 0
  }; // this looper is used to support intervals based blobs (via timeSlice+ondataavailable)

  function looper() {
    if (!recording || typeof config.ondataavailable !== 'function' || typeof config.timeSlice === 'undefined') {
      return;
    }

    if (intervalsBasedBuffers.left.length) {
      mergeLeftRightBuffers({
        desiredSampRate: desiredSampRate,
        sampleRate: sampleRate,
        numberOfAudioChannels: numberOfAudioChannels,
        internalInterleavedLength: intervalsBasedBuffers.recordingLength,
        leftBuffers: intervalsBasedBuffers.left,
        rightBuffers: numberOfAudioChannels === 1 ? [] : intervalsBasedBuffers.right
      }, function (buffer, view) {
        var blob = new Blob([view], {
          type: 'audio/wav'
        });
        config.ondataavailable(blob);
        setTimeout(looper, config.timeSlice);
      });
      intervalsBasedBuffers = {
        left: [],
        right: [],
        recordingLength: 0
      };
    } else {
      setTimeout(looper, config.timeSlice);
    }
  }
}

if (typeof RecordRTC !== 'undefined') {
  RecordRTC.StereoAudioRecorder = StereoAudioRecorder;
} // _________________
// CanvasRecorder.js

/**
 * CanvasRecorder is a standalone class used by {@link RecordRTC} to bring HTML5-Canvas recording into video WebM. It uses HTML2Canvas library and runs top over {@link Whammy}.
 * @summary HTML2Canvas recording into video WebM.
 * @license {@link https://github.com/muaz-khan/RecordRTC/blob/master/LICENSE|MIT}
 * @author {@link https://MuazKhan.com|Muaz Khan}
 * @typedef CanvasRecorder
 * @class
 * @example
 * var recorder = new CanvasRecorder(htmlElement, { disableLogs: true, useWhammyRecorder: true });
 * recorder.record();
 * recorder.stop(function(blob) {
 *     video.src = URL.createObjectURL(blob);
 * });
 * @see {@link https://github.com/muaz-khan/RecordRTC|RecordRTC Source Code}
 * @param {HTMLElement} htmlElement - querySelector/getElementById/getElementsByTagName[0]/etc.
 * @param {object} config - {disableLogs:true, initCallback: function}
 */


function CanvasRecorder(htmlElement, config) {
  if (typeof html2canvas === 'undefined') {
    throw 'Please link: https://www.webrtc-experiment.com/screenshot.js';
  }

  config = config || {};

  if (!config.frameInterval) {
    config.frameInterval = 10;
  } // via DetectRTC.js


  var isCanvasSupportsStreamCapturing = false;
  ['captureStream', 'mozCaptureStream', 'webkitCaptureStream'].forEach(function (item) {
    if (item in document.createElement('canvas')) {
      isCanvasSupportsStreamCapturing = true;
    }
  });

  var _isChrome = (!!window.webkitRTCPeerConnection || !!window.webkitGetUserMedia) && !!window.chrome;

  var chromeVersion = 50;
  var matchArray = navigator.userAgent.match(/Chrom(e|ium)\/([0-9]+)\./);

  if (_isChrome && matchArray && matchArray[2]) {
    chromeVersion = parseInt(matchArray[2], 10);
  }

  if (_isChrome && chromeVersion < 52) {
    isCanvasSupportsStreamCapturing = false;
  }

  if (config.useWhammyRecorder) {
    isCanvasSupportsStreamCapturing = false;
  }

  var globalCanvas, mediaStreamRecorder;

  if (isCanvasSupportsStreamCapturing) {
    if (!config.disableLogs) {
      console.log('Your browser supports both MediRecorder API and canvas.captureStream!');
    }

    if (htmlElement instanceof HTMLCanvasElement) {
      globalCanvas = htmlElement;
    } else if (htmlElement instanceof CanvasRenderingContext2D) {
      globalCanvas = htmlElement.canvas;
    } else {
      throw 'Please pass either HTMLCanvasElement or CanvasRenderingContext2D.';
    }
  } else if (!!navigator.mozGetUserMedia) {
    if (!config.disableLogs) {
      console.error('Canvas recording is NOT supported in Firefox.');
    }
  }

  var isRecording;
  /**
   * This method records Canvas.
   * @method
   * @memberof CanvasRecorder
   * @example
   * recorder.record();
   */

  this.record = function () {
    isRecording = true;

    if (isCanvasSupportsStreamCapturing && !config.useWhammyRecorder) {
      // CanvasCaptureMediaStream
      var canvasMediaStream;

      if ('captureStream' in globalCanvas) {
        canvasMediaStream = globalCanvas.captureStream(25); // 25 FPS
      } else if ('mozCaptureStream' in globalCanvas) {
        canvasMediaStream = globalCanvas.mozCaptureStream(25);
      } else if ('webkitCaptureStream' in globalCanvas) {
        canvasMediaStream = globalCanvas.webkitCaptureStream(25);
      }

      try {
        var mdStream = new MediaStream();
        mdStream.addTrack(getTracks(canvasMediaStream, 'video')[0]);
        canvasMediaStream = mdStream;
      } catch (e) {}

      if (!canvasMediaStream) {
        throw 'captureStream API are NOT available.';
      } // Note: Jan 18, 2016 status is that,
      // Firefox MediaRecorder API can't record CanvasCaptureMediaStream object.


      mediaStreamRecorder = new MediaStreamRecorder(canvasMediaStream, {
        mimeType: config.mimeType || 'video/webm'
      });
      mediaStreamRecorder.record();
    } else {
      whammy.frames = [];
      lastTime = new Date().getTime();
      drawCanvasFrame();
    }

    if (config.initCallback) {
      config.initCallback();
    }
  };

  this.getWebPImages = function (callback) {
    if (htmlElement.nodeName.toLowerCase() !== 'canvas') {
      callback();
      return;
    }

    var framesLength = whammy.frames.length;
    whammy.frames.forEach(function (frame, idx) {
      var framesRemaining = framesLength - idx;

      if (!config.disableLogs) {
        console.log(framesRemaining + '/' + framesLength + ' frames remaining');
      }

      if (config.onEncodingCallback) {
        config.onEncodingCallback(framesRemaining, framesLength);
      }

      var webp = frame.image.toDataURL('image/webp', 1);
      whammy.frames[idx].image = webp;
    });

    if (!config.disableLogs) {
      console.log('Generating WebM');
    }

    callback();
  };
  /**
   * This method stops recording Canvas.
   * @param {function} callback - Callback function, that is used to pass recorded blob back to the callee.
   * @method
   * @memberof CanvasRecorder
   * @example
   * recorder.stop(function(blob) {
   *     video.src = URL.createObjectURL(blob);
   * });
   */


  this.stop = function (callback) {
    isRecording = false;
    var that = this;

    if (isCanvasSupportsStreamCapturing && mediaStreamRecorder) {
      mediaStreamRecorder.stop(callback);
      return;
    }

    this.getWebPImages(function () {
      /**
       * @property {Blob} blob - Recorded frames in video/webm blob.
       * @memberof CanvasRecorder
       * @example
       * recorder.stop(function() {
       *     var blob = recorder.blob;
       * });
       */
      whammy.compile(function (blob) {
        if (!config.disableLogs) {
          console.log('Recording finished!');
        }

        that.blob = blob;

        if (that.blob.forEach) {
          that.blob = new Blob([], {
            type: 'video/webm'
          });
        }

        if (callback) {
          callback(that.blob);
        }

        whammy.frames = [];
      });
    });
  };

  var isPausedRecording = false;
  /**
   * This method pauses the recording process.
   * @method
   * @memberof CanvasRecorder
   * @example
   * recorder.pause();
   */

  this.pause = function () {
    isPausedRecording = true;

    if (mediaStreamRecorder instanceof MediaStreamRecorder) {
      mediaStreamRecorder.pause();
      return;
    }
  };
  /**
   * This method resumes the recording process.
   * @method
   * @memberof CanvasRecorder
   * @example
   * recorder.resume();
   */


  this.resume = function () {
    isPausedRecording = false;

    if (mediaStreamRecorder instanceof MediaStreamRecorder) {
      mediaStreamRecorder.resume();
      return;
    }

    if (!isRecording) {
      this.record();
    }
  };
  /**
   * This method resets currently recorded data.
   * @method
   * @memberof CanvasRecorder
   * @example
   * recorder.clearRecordedData();
   */


  this.clearRecordedData = function () {
    if (isRecording) {
      this.stop(clearRecordedDataCB);
    }

    clearRecordedDataCB();
  };

  function clearRecordedDataCB() {
    whammy.frames = [];
    isRecording = false;
    isPausedRecording = false;
  } // for debugging


  this.name = 'CanvasRecorder';

  this.toString = function () {
    return this.name;
  };

  function cloneCanvas() {
    //create a new canvas
    var newCanvas = document.createElement('canvas');
    var context = newCanvas.getContext('2d'); //set dimensions

    newCanvas.width = htmlElement.width;
    newCanvas.height = htmlElement.height; //apply the old canvas to the new one

    context.drawImage(htmlElement, 0, 0); //return the new canvas

    return newCanvas;
  }

  function drawCanvasFrame() {
    if (isPausedRecording) {
      lastTime = new Date().getTime();
      return setTimeout(drawCanvasFrame, 500);
    }

    if (htmlElement.nodeName.toLowerCase() === 'canvas') {
      var duration = new Date().getTime() - lastTime; // via #206, by Jack i.e. @Seymourr

      lastTime = new Date().getTime();
      whammy.frames.push({
        image: cloneCanvas(),
        duration: duration
      });

      if (isRecording) {
        setTimeout(drawCanvasFrame, config.frameInterval);
      }

      return;
    }

    html2canvas(htmlElement, {
      grabMouse: typeof config.showMousePointer === 'undefined' || config.showMousePointer,
      onrendered: function onrendered(canvas) {
        var duration = new Date().getTime() - lastTime;

        if (!duration) {
          return setTimeout(drawCanvasFrame, config.frameInterval);
        } // via #206, by Jack i.e. @Seymourr


        lastTime = new Date().getTime();
        whammy.frames.push({
          image: canvas.toDataURL('image/webp', 1),
          duration: duration
        });

        if (isRecording) {
          setTimeout(drawCanvasFrame, config.frameInterval);
        }
      }
    });
  }

  var lastTime = new Date().getTime();
  var whammy = new Whammy.Video(100);
}

if (typeof RecordRTC !== 'undefined') {
  RecordRTC.CanvasRecorder = CanvasRecorder;
} // _________________
// WhammyRecorder.js

/**
 * WhammyRecorder is a standalone class used by {@link RecordRTC} to bring video recording in Chrome. It runs top over {@link Whammy}.
 * @summary Video recording feature in Chrome.
 * @license {@link https://github.com/muaz-khan/RecordRTC/blob/master/LICENSE|MIT}
 * @author {@link https://MuazKhan.com|Muaz Khan}
 * @typedef WhammyRecorder
 * @class
 * @example
 * var recorder = new WhammyRecorder(mediaStream);
 * recorder.record();
 * recorder.stop(function(blob) {
 *     video.src = URL.createObjectURL(blob);
 * });
 * @see {@link https://github.com/muaz-khan/RecordRTC|RecordRTC Source Code}
 * @param {MediaStream} mediaStream - MediaStream object fetched using getUserMedia API or generated using captureStreamUntilEnded or WebAudio API.
 * @param {object} config - {disableLogs: true, initCallback: function, video: HTMLVideoElement, etc.}
 */


function WhammyRecorder(mediaStream, config) {
  config = config || {};

  if (!config.frameInterval) {
    config.frameInterval = 10;
  }

  if (!config.disableLogs) {
    console.log('Using frames-interval:', config.frameInterval);
  }
  /**
   * This method records video.
   * @method
   * @memberof WhammyRecorder
   * @example
   * recorder.record();
   */


  this.record = function () {
    if (!config.width) {
      config.width = 320;
    }

    if (!config.height) {
      config.height = 240;
    }

    if (!config.video) {
      config.video = {
        width: config.width,
        height: config.height
      };
    }

    if (!config.canvas) {
      config.canvas = {
        width: config.width,
        height: config.height
      };
    }

    canvas.width = config.canvas.width || 320;
    canvas.height = config.canvas.height || 240;
    context = canvas.getContext('2d'); // setting defaults

    if (config.video && config.video instanceof HTMLVideoElement) {
      video = config.video.cloneNode();

      if (config.initCallback) {
        config.initCallback();
      }
    } else {
      video = document.createElement('video');
      setSrcObject(mediaStream, video);

      video.onloadedmetadata = function () {
        // "onloadedmetadata" may NOT work in FF?
        if (config.initCallback) {
          config.initCallback();
        }
      };

      video.width = config.video.width;
      video.height = config.video.height;
    }

    video.muted = true;
    video.play();
    lastTime = new Date().getTime();
    whammy = new Whammy.Video();

    if (!config.disableLogs) {
      console.log('canvas resolutions', canvas.width, '*', canvas.height);
      console.log('video width/height', video.width || canvas.width, '*', video.height || canvas.height);
    }

    drawFrames(config.frameInterval);
  };
  /**
   * Draw and push frames to Whammy
   * @param {integer} frameInterval - set minimum interval (in milliseconds) between each time we push a frame to Whammy
   */


  function drawFrames(frameInterval) {
    frameInterval = typeof frameInterval !== 'undefined' ? frameInterval : 10;
    var duration = new Date().getTime() - lastTime;

    if (!duration) {
      return setTimeout(drawFrames, frameInterval, frameInterval);
    }

    if (isPausedRecording) {
      lastTime = new Date().getTime();
      return setTimeout(drawFrames, 100);
    } // via #206, by Jack i.e. @Seymourr


    lastTime = new Date().getTime();

    if (video.paused) {
      // via: https://github.com/muaz-khan/WebRTC-Experiment/pull/316
      // Tweak for Android Chrome
      video.play();
    }

    context.drawImage(video, 0, 0, canvas.width, canvas.height);
    whammy.frames.push({
      duration: duration,
      image: canvas.toDataURL('image/webp')
    });

    if (!isStopDrawing) {
      setTimeout(drawFrames, frameInterval, frameInterval);
    }
  }

  function asyncLoop(o) {
    var i = -1,
        length = o.length;

    (function loop() {
      i++;

      if (i === length) {
        o.callback();
        return;
      } // "setTimeout" added by Jim McLeod


      setTimeout(function () {
        o.functionToLoop(loop, i);
      }, 1);
    })();
  }
  /**
   * remove black frames from the beginning to the specified frame
   * @param {Array} _frames - array of frames to be checked
   * @param {number} _framesToCheck - number of frame until check will be executed (-1 - will drop all frames until frame not matched will be found)
   * @param {number} _pixTolerance - 0 - very strict (only black pixel color) ; 1 - all
   * @param {number} _frameTolerance - 0 - very strict (only black frame color) ; 1 - all
   * @returns {Array} - array of frames
   */
  // pull#293 by @volodalexey


  function dropBlackFrames(_frames, _framesToCheck, _pixTolerance, _frameTolerance, _callback2) {
    var localCanvas = document.createElement('canvas');
    localCanvas.width = canvas.width;
    localCanvas.height = canvas.height;
    var context2d = localCanvas.getContext('2d');
    var resultFrames = [];
    var checkUntilNotBlack = _framesToCheck === -1;
    var endCheckFrame = _framesToCheck && _framesToCheck > 0 && _framesToCheck <= _frames.length ? _framesToCheck : _frames.length;
    var sampleColor = {
      r: 0,
      g: 0,
      b: 0
    };
    var maxColorDifference = Math.sqrt(Math.pow(255, 2) + Math.pow(255, 2) + Math.pow(255, 2));
    var pixTolerance = _pixTolerance && _pixTolerance >= 0 && _pixTolerance <= 1 ? _pixTolerance : 0;
    var frameTolerance = _frameTolerance && _frameTolerance >= 0 && _frameTolerance <= 1 ? _frameTolerance : 0;
    var doNotCheckNext = false;
    asyncLoop({
      length: endCheckFrame,
      functionToLoop: function functionToLoop(loop, f) {
        var matchPixCount, endPixCheck, maxPixCount;

        var finishImage = function finishImage() {
          if (!doNotCheckNext && maxPixCount - matchPixCount <= maxPixCount * frameTolerance) {// console.log('removed black frame : ' + f + ' ; frame duration ' + _frames[f].duration);
          } else {
            // console.log('frame is passed : ' + f);
            if (checkUntilNotBlack) {
              doNotCheckNext = true;
            }

            resultFrames.push(_frames[f]);
          }

          loop();
        };

        if (!doNotCheckNext) {
          var image = new Image();

          image.onload = function () {
            context2d.drawImage(image, 0, 0, canvas.width, canvas.height);
            var imageData = context2d.getImageData(0, 0, canvas.width, canvas.height);
            matchPixCount = 0;
            endPixCheck = imageData.data.length;
            maxPixCount = imageData.data.length / 4;

            for (var pix = 0; pix < endPixCheck; pix += 4) {
              var currentColor = {
                r: imageData.data[pix],
                g: imageData.data[pix + 1],
                b: imageData.data[pix + 2]
              };
              var colorDifference = Math.sqrt(Math.pow(currentColor.r - sampleColor.r, 2) + Math.pow(currentColor.g - sampleColor.g, 2) + Math.pow(currentColor.b - sampleColor.b, 2)); // difference in color it is difference in color vectors (r1,g1,b1) <=> (r2,g2,b2)

              if (colorDifference <= maxColorDifference * pixTolerance) {
                matchPixCount++;
              }
            }

            finishImage();
          };

          image.src = _frames[f].image;
        } else {
          finishImage();
        }
      },
      callback: function callback() {
        resultFrames = resultFrames.concat(_frames.slice(endCheckFrame));

        if (resultFrames.length <= 0) {
          // at least one last frame should be available for next manipulation
          // if total duration of all frames will be < 1000 than ffmpeg doesn't work well...
          resultFrames.push(_frames[_frames.length - 1]);
        }

        _callback2(resultFrames);
      }
    });
  }

  var isStopDrawing = false;
  /**
   * This method stops recording video.
   * @param {function} callback - Callback function, that is used to pass recorded blob back to the callee.
   * @method
   * @memberof WhammyRecorder
   * @example
   * recorder.stop(function(blob) {
   *     video.src = URL.createObjectURL(blob);
   * });
   */

  this.stop = function (callback) {
    callback = callback || function () {};

    isStopDrawing = true;

    var _this = this; // analyse of all frames takes some time!


    setTimeout(function () {
      // e.g. dropBlackFrames(frames, 10, 1, 1) - will cut all 10 frames
      // e.g. dropBlackFrames(frames, 10, 0.5, 0.5) - will analyse 10 frames
      // e.g. dropBlackFrames(frames, 10) === dropBlackFrames(frames, 10, 0, 0) - will analyse 10 frames with strict black color
      dropBlackFrames(whammy.frames, -1, null, null, function (frames) {
        whammy.frames = frames; // to display advertisement images!

        if (config.advertisement && config.advertisement.length) {
          whammy.frames = config.advertisement.concat(whammy.frames);
        }
        /**
         * @property {Blob} blob - Recorded frames in video/webm blob.
         * @memberof WhammyRecorder
         * @example
         * recorder.stop(function() {
         *     var blob = recorder.blob;
         * });
         */


        whammy.compile(function (blob) {
          _this.blob = blob;

          if (_this.blob.forEach) {
            _this.blob = new Blob([], {
              type: 'video/webm'
            });
          }

          if (callback) {
            callback(_this.blob);
          }
        });
      });
    }, 10);
  };

  var isPausedRecording = false;
  /**
   * This method pauses the recording process.
   * @method
   * @memberof WhammyRecorder
   * @example
   * recorder.pause();
   */

  this.pause = function () {
    isPausedRecording = true;
  };
  /**
   * This method resumes the recording process.
   * @method
   * @memberof WhammyRecorder
   * @example
   * recorder.resume();
   */


  this.resume = function () {
    isPausedRecording = false;

    if (isStopDrawing) {
      this.record();
    }
  };
  /**
   * This method resets currently recorded data.
   * @method
   * @memberof WhammyRecorder
   * @example
   * recorder.clearRecordedData();
   */


  this.clearRecordedData = function () {
    if (!isStopDrawing) {
      this.stop(clearRecordedDataCB);
    }

    clearRecordedDataCB();
  };

  function clearRecordedDataCB() {
    whammy.frames = [];
    isStopDrawing = true;
    isPausedRecording = false;
  } // for debugging


  this.name = 'WhammyRecorder';

  this.toString = function () {
    return this.name;
  };

  var canvas = document.createElement('canvas');
  var context = canvas.getContext('2d');
  var video;
  var lastTime;
  var whammy;
}

if (typeof RecordRTC !== 'undefined') {
  RecordRTC.WhammyRecorder = WhammyRecorder;
} // https://github.com/antimatter15/whammy/blob/master/LICENSE
// _________
// Whammy.js
// todo: Firefox now supports webp for webm containers!
// their MediaRecorder implementation works well!
// should we provide an option to record via Whammy.js or MediaRecorder API is a better solution?

/**
 * Whammy is a standalone class used by {@link RecordRTC} to bring video recording in Chrome. It is written by {@link https://github.com/antimatter15|antimatter15}
 * @summary A real time javascript webm encoder based on a canvas hack.
 * @license {@link https://github.com/muaz-khan/RecordRTC/blob/master/LICENSE|MIT}
 * @author {@link https://MuazKhan.com|Muaz Khan}
 * @typedef Whammy
 * @class
 * @example
 * var recorder = new Whammy().Video(15);
 * recorder.add(context || canvas || dataURL);
 * var output = recorder.compile();
 * @see {@link https://github.com/muaz-khan/RecordRTC|RecordRTC Source Code}
 */


var Whammy = function () {
  // a more abstract-ish API
  function WhammyVideo(duration) {
    this.frames = [];
    this.duration = duration || 1;
    this.quality = 0.8;
  }
  /**
   * Pass Canvas or Context or image/webp(string) to {@link Whammy} encoder.
   * @method
   * @memberof Whammy
   * @example
   * recorder = new Whammy().Video(0.8, 100);
   * recorder.add(canvas || context || 'image/webp');
   * @param {string} frame - Canvas || Context || image/webp
   * @param {number} duration - Stick a duration (in milliseconds)
   */


  WhammyVideo.prototype.add = function (frame, duration) {
    if ('canvas' in frame) {
      //CanvasRenderingContext2D
      frame = frame.canvas;
    }

    if ('toDataURL' in frame) {
      frame = frame.toDataURL('image/webp', this.quality);
    }

    if (!/^data:image\/webp;base64,/ig.test(frame)) {
      throw 'Input must be formatted properly as a base64 encoded DataURI of type image/webp';
    }

    this.frames.push({
      image: frame,
      duration: duration || this.duration
    });
  };

  function processInWebWorker(_function) {
    var blob = URL.createObjectURL(new Blob([_function.toString(), 'this.onmessage =  function (eee) {' + _function.name + '(eee.data);}'], {
      type: 'application/javascript'
    }));
    var worker = new Worker(blob);
    URL.revokeObjectURL(blob);
    return worker;
  }

  function whammyInWebWorker(frames) {
    function ArrayToWebM(frames) {
      var info = checkFrames(frames);

      if (!info) {
        return [];
      }

      var clusterMaxDuration = 30000;
      var EBML = [{
        'id': 0x1a45dfa3,
        // EBML
        'data': [{
          'data': 1,
          'id': 0x4286 // EBMLVersion

        }, {
          'data': 1,
          'id': 0x42f7 // EBMLReadVersion

        }, {
          'data': 4,
          'id': 0x42f2 // EBMLMaxIDLength

        }, {
          'data': 8,
          'id': 0x42f3 // EBMLMaxSizeLength

        }, {
          'data': 'webm',
          'id': 0x4282 // DocType

        }, {
          'data': 2,
          'id': 0x4287 // DocTypeVersion

        }, {
          'data': 2,
          'id': 0x4285 // DocTypeReadVersion

        }]
      }, {
        'id': 0x18538067,
        // Segment
        'data': [{
          'id': 0x1549a966,
          // Info
          'data': [{
            'data': 1e6,
            //do things in millisecs (num of nanosecs for duration scale)
            'id': 0x2ad7b1 // TimecodeScale

          }, {
            'data': 'whammy',
            'id': 0x4d80 // MuxingApp

          }, {
            'data': 'whammy',
            'id': 0x5741 // WritingApp

          }, {
            'data': doubleToString(info.duration),
            'id': 0x4489 // Duration

          }]
        }, {
          'id': 0x1654ae6b,
          // Tracks
          'data': [{
            'id': 0xae,
            // TrackEntry
            'data': [{
              'data': 1,
              'id': 0xd7 // TrackNumber

            }, {
              'data': 1,
              'id': 0x73c5 // TrackUID

            }, {
              'data': 0,
              'id': 0x9c // FlagLacing

            }, {
              'data': 'und',
              'id': 0x22b59c // Language

            }, {
              'data': 'V_VP8',
              'id': 0x86 // CodecID

            }, {
              'data': 'VP8',
              'id': 0x258688 // CodecName

            }, {
              'data': 1,
              'id': 0x83 // TrackType

            }, {
              'id': 0xe0,
              // Video
              'data': [{
                'data': info.width,
                'id': 0xb0 // PixelWidth

              }, {
                'data': info.height,
                'id': 0xba // PixelHeight

              }]
            }]
          }]
        }]
      }]; //Generate clusters (max duration)

      var frameNumber = 0;
      var clusterTimecode = 0;

      while (frameNumber < frames.length) {
        var clusterFrames = [];
        var clusterDuration = 0;

        do {
          clusterFrames.push(frames[frameNumber]);
          clusterDuration += frames[frameNumber].duration;
          frameNumber++;
        } while (frameNumber < frames.length && clusterDuration < clusterMaxDuration);

        var clusterCounter = 0;
        var cluster = {
          'id': 0x1f43b675,
          // Cluster
          'data': getClusterData(clusterTimecode, clusterCounter, clusterFrames)
        }; //Add cluster to segment

        EBML[1].data.push(cluster);
        clusterTimecode += clusterDuration;
      }

      return generateEBML(EBML);
    }

    function getClusterData(clusterTimecode, clusterCounter, clusterFrames) {
      return [{
        'data': clusterTimecode,
        'id': 0xe7 // Timecode

      }].concat(clusterFrames.map(function (webp) {
        var block = makeSimpleBlock({
          discardable: 0,
          frame: webp.data.slice(4),
          invisible: 0,
          keyframe: 1,
          lacing: 0,
          trackNum: 1,
          timecode: Math.round(clusterCounter)
        });
        clusterCounter += webp.duration;
        return {
          data: block,
          id: 0xa3
        };
      }));
    } // sums the lengths of all the frames and gets the duration


    function checkFrames(frames) {
      if (!frames[0]) {
        postMessage({
          error: 'Something went wrong. Maybe WebP format is not supported in the current browser.'
        });
        return;
      }

      var width = frames[0].width,
          height = frames[0].height,
          duration = frames[0].duration;

      for (var i = 1; i < frames.length; i++) {
        duration += frames[i].duration;
      }

      return {
        duration: duration,
        width: width,
        height: height
      };
    }

    function numToBuffer(num) {
      var parts = [];

      while (num > 0) {
        parts.push(num & 0xff);
        num = num >> 8;
      }

      return new Uint8Array(parts.reverse());
    }

    function strToBuffer(str) {
      return new Uint8Array(str.split('').map(function (e) {
        return e.charCodeAt(0);
      }));
    }

    function bitsToBuffer(bits) {
      var data = [];
      var pad = bits.length % 8 ? new Array(1 + 8 - bits.length % 8).join('0') : '';
      bits = pad + bits;

      for (var i = 0; i < bits.length; i += 8) {
        data.push(parseInt(bits.substr(i, 8), 2));
      }

      return new Uint8Array(data);
    }

    function generateEBML(json) {
      var ebml = [];

      for (var i = 0; i < json.length; i++) {
        var data = json[i].data;

        if (_typeof(data) === 'object') {
          data = generateEBML(data);
        }

        if (typeof data === 'number') {
          data = bitsToBuffer(data.toString(2));
        }

        if (typeof data === 'string') {
          data = strToBuffer(data);
        }

        var len = data.size || data.byteLength || data.length;
        var zeroes = Math.ceil(Math.ceil(Math.log(len) / Math.log(2)) / 8);
        var sizeToString = len.toString(2);
        var padded = new Array(zeroes * 7 + 7 + 1 - sizeToString.length).join('0') + sizeToString;
        var size = new Array(zeroes).join('0') + '1' + padded;
        ebml.push(numToBuffer(json[i].id));
        ebml.push(bitsToBuffer(size));
        ebml.push(data);
      }

      return new Blob(ebml, {
        type: 'video/webm'
      });
    }

    function toBinStrOld(bits) {
      var data = '';
      var pad = bits.length % 8 ? new Array(1 + 8 - bits.length % 8).join('0') : '';
      bits = pad + bits;

      for (var i = 0; i < bits.length; i += 8) {
        data += String.fromCharCode(parseInt(bits.substr(i, 8), 2));
      }

      return data;
    }

    function makeSimpleBlock(data) {
      var flags = 0;

      if (data.keyframe) {
        flags |= 128;
      }

      if (data.invisible) {
        flags |= 8;
      }

      if (data.lacing) {
        flags |= data.lacing << 1;
      }

      if (data.discardable) {
        flags |= 1;
      }

      if (data.trackNum > 127) {
        throw 'TrackNumber > 127 not supported';
      }

      var out = [data.trackNum | 0x80, data.timecode >> 8, data.timecode & 0xff, flags].map(function (e) {
        return String.fromCharCode(e);
      }).join('') + data.frame;
      return out;
    }

    function parseWebP(riff) {
      var VP8 = riff.RIFF[0].WEBP[0];
      var frameStart = VP8.indexOf('\x9d\x01\x2a'); // A VP8 keyframe starts with the 0x9d012a header

      for (var i = 0, c = []; i < 4; i++) {
        c[i] = VP8.charCodeAt(frameStart + 3 + i);
      }

      var width, height, tmp; //the code below is literally copied verbatim from the bitstream spec

      tmp = c[1] << 8 | c[0];
      width = tmp & 0x3FFF;
      tmp = c[3] << 8 | c[2];
      height = tmp & 0x3FFF;
      return {
        width: width,
        height: height,
        data: VP8,
        riff: riff
      };
    }

    function getStrLength(string, offset) {
      return parseInt(string.substr(offset + 4, 4).split('').map(function (i) {
        var unpadded = i.charCodeAt(0).toString(2);
        return new Array(8 - unpadded.length + 1).join('0') + unpadded;
      }).join(''), 2);
    }

    function parseRIFF(string) {
      var offset = 0;
      var chunks = {};

      while (offset < string.length) {
        var id = string.substr(offset, 4);
        var len = getStrLength(string, offset);
        var data = string.substr(offset + 4 + 4, len);
        offset += 4 + 4 + len;
        chunks[id] = chunks[id] || [];

        if (id === 'RIFF' || id === 'LIST') {
          chunks[id].push(parseRIFF(data));
        } else {
          chunks[id].push(data);
        }
      }

      return chunks;
    }

    function doubleToString(num) {
      return [].slice.call(new Uint8Array(new Float64Array([num]).buffer), 0).map(function (e) {
        return String.fromCharCode(e);
      }).reverse().join('');
    }

    var webm = new ArrayToWebM(frames.map(function (frame) {
      var webp = parseWebP(parseRIFF(atob(frame.image.slice(23))));
      webp.duration = frame.duration;
      return webp;
    }));
    postMessage(webm);
  }
  /**
   * Encodes frames in WebM container. It uses WebWorkinvoke to invoke 'ArrayToWebM' method.
   * @param {function} callback - Callback function, that is used to pass recorded blob back to the callee.
   * @method
   * @memberof Whammy
   * @example
   * recorder = new Whammy().Video(0.8, 100);
   * recorder.compile(function(blob) {
   *    // blob.size - blob.type
   * });
   */


  WhammyVideo.prototype.compile = function (callback) {
    var webWorker = processInWebWorker(whammyInWebWorker);

    webWorker.onmessage = function (event) {
      if (event.data.error) {
        console.error(event.data.error);
        return;
      }

      callback(event.data);
    };

    webWorker.postMessage(this.frames);
  };

  return {
    /**
     * A more abstract-ish API.
     * @method
     * @memberof Whammy
     * @example
     * recorder = new Whammy().Video(0.8, 100);
     * @param {?number} speed - 0.8
     * @param {?number} quality - 100
     */
    Video: WhammyVideo
  };
}();

if (typeof RecordRTC !== 'undefined') {
  RecordRTC.Whammy = Whammy;
} // ______________ (indexed-db)
// DiskStorage.js

/**
 * DiskStorage is a standalone object used by {@link RecordRTC} to store recorded blobs in IndexedDB storage.
 * @summary Writing blobs into IndexedDB.
 * @license {@link https://github.com/muaz-khan/RecordRTC/blob/master/LICENSE|MIT}
 * @author {@link https://MuazKhan.com|Muaz Khan}
 * @example
 * DiskStorage.Store({
 *     audioBlob: yourAudioBlob,
 *     videoBlob: yourVideoBlob,
 *     gifBlob  : yourGifBlob
 * });
 * DiskStorage.Fetch(function(dataURL, type) {
 *     if(type === 'audioBlob') { }
 *     if(type === 'videoBlob') { }
 *     if(type === 'gifBlob')   { }
 * });
 * // DiskStorage.dataStoreName = 'recordRTC';
 * // DiskStorage.onError = function(error) { };
 * @property {function} init - This method must be called once to initialize IndexedDB ObjectStore. Though, it is auto-used internally.
 * @property {function} Fetch - This method fetches stored blobs from IndexedDB.
 * @property {function} Store - This method stores blobs in IndexedDB.
 * @property {function} onError - This function is invoked for any known/unknown error.
 * @property {string} dataStoreName - Name of the ObjectStore created in IndexedDB storage.
 * @see {@link https://github.com/muaz-khan/RecordRTC|RecordRTC Source Code}
 */


var DiskStorage = {
  /**
   * This method must be called once to initialize IndexedDB ObjectStore. Though, it is auto-used internally.
   * @method
   * @memberof DiskStorage
   * @internal
   * @example
   * DiskStorage.init();
   */
  init: function init() {
    var self = this;

    if (typeof indexedDB === 'undefined' || typeof indexedDB.open === 'undefined') {
      console.error('IndexedDB API are not available in this browser.');
      return;
    }

    var dbVersion = 1;
    var dbName = this.dbName || location.href.replace(/\/|:|#|%|\.|\[|\]/g, ''),
        db;
    var request = indexedDB.open(dbName, dbVersion);

    function createObjectStore(dataBase) {
      dataBase.createObjectStore(self.dataStoreName);
    }

    function putInDB() {
      var transaction = db.transaction([self.dataStoreName], 'readwrite');

      if (self.videoBlob) {
        transaction.objectStore(self.dataStoreName).put(self.videoBlob, 'videoBlob');
      }

      if (self.gifBlob) {
        transaction.objectStore(self.dataStoreName).put(self.gifBlob, 'gifBlob');
      }

      if (self.audioBlob) {
        transaction.objectStore(self.dataStoreName).put(self.audioBlob, 'audioBlob');
      }

      function getFromStore(portionName) {
        transaction.objectStore(self.dataStoreName).get(portionName).onsuccess = function (event) {
          if (self.callback) {
            self.callback(event.target.result, portionName);
          }
        };
      }

      getFromStore('audioBlob');
      getFromStore('videoBlob');
      getFromStore('gifBlob');
    }

    request.onerror = self.onError;

    request.onsuccess = function () {
      db = request.result;
      db.onerror = self.onError;

      if (db.setVersion) {
        if (db.version !== dbVersion) {
          var setVersion = db.setVersion(dbVersion);

          setVersion.onsuccess = function () {
            createObjectStore(db);
            putInDB();
          };
        } else {
          putInDB();
        }
      } else {
        putInDB();
      }
    };

    request.onupgradeneeded = function (event) {
      createObjectStore(event.target.result);
    };
  },

  /**
   * This method fetches stored blobs from IndexedDB.
   * @method
   * @memberof DiskStorage
   * @internal
   * @example
   * DiskStorage.Fetch(function(dataURL, type) {
   *     if(type === 'audioBlob') { }
   *     if(type === 'videoBlob') { }
   *     if(type === 'gifBlob')   { }
   * });
   */
  Fetch: function Fetch(callback) {
    this.callback = callback;
    this.init();
    return this;
  },

  /**
   * This method stores blobs in IndexedDB.
   * @method
   * @memberof DiskStorage
   * @internal
   * @example
   * DiskStorage.Store({
   *     audioBlob: yourAudioBlob,
   *     videoBlob: yourVideoBlob,
   *     gifBlob  : yourGifBlob
   * });
   */
  Store: function Store(config) {
    this.audioBlob = config.audioBlob;
    this.videoBlob = config.videoBlob;
    this.gifBlob = config.gifBlob;
    this.init();
    return this;
  },

  /**
   * This function is invoked for any known/unknown error.
   * @method
   * @memberof DiskStorage
   * @internal
   * @example
   * DiskStorage.onError = function(error){
   *     alerot( JSON.stringify(error) );
   * };
   */
  onError: function onError(error) {
    console.error(JSON.stringify(error, null, '\t'));
  },

  /**
   * @property {string} dataStoreName - Name of the ObjectStore created in IndexedDB storage.
   * @memberof DiskStorage
   * @internal
   * @example
   * DiskStorage.dataStoreName = 'recordRTC';
   */
  dataStoreName: 'recordRTC',
  dbName: null
};

if (typeof RecordRTC !== 'undefined') {
  RecordRTC.DiskStorage = DiskStorage;
} // ______________
// GifRecorder.js

/**
 * GifRecorder is standalone calss used by {@link RecordRTC} to record video or canvas into animated gif.
 * @license {@link https://github.com/muaz-khan/RecordRTC/blob/master/LICENSE|MIT}
 * @author {@link https://MuazKhan.com|Muaz Khan}
 * @typedef GifRecorder
 * @class
 * @example
 * var recorder = new GifRecorder(mediaStream || canvas || context, { onGifPreview: function, onGifRecordingStarted: function, width: 1280, height: 720, frameRate: 200, quality: 10 });
 * recorder.record();
 * recorder.stop(function(blob) {
 *     img.src = URL.createObjectURL(blob);
 * });
 * @see {@link https://github.com/muaz-khan/RecordRTC|RecordRTC Source Code}
 * @param {MediaStream} mediaStream - MediaStream object or HTMLCanvasElement or CanvasRenderingContext2D.
 * @param {object} config - {disableLogs:true, initCallback: function, width: 320, height: 240, frameRate: 200, quality: 10}
 */


function GifRecorder(mediaStream, config) {
  if (typeof GIFEncoder === 'undefined') {
    var script = document.createElement('script');
    script.src = 'https://www.webrtc-experiment.com/gif-recorder.js';
    (document.body || document.documentElement).appendChild(script);
  }

  config = config || {};
  var isHTMLObject = mediaStream instanceof CanvasRenderingContext2D || mediaStream instanceof HTMLCanvasElement;
  /**
   * This method records MediaStream.
   * @method
   * @memberof GifRecorder
   * @example
   * recorder.record();
   */

  this.record = function () {
    if (typeof GIFEncoder === 'undefined') {
      setTimeout(self.record, 1000);
      return;
    }

    if (!isLoadedMetaData) {
      setTimeout(self.record, 1000);
      return;
    }

    if (!isHTMLObject) {
      if (!config.width) {
        config.width = video.offsetWidth || 320;
      }

      if (!config.height) {
        config.height = video.offsetHeight || 240;
      }

      if (!config.video) {
        config.video = {
          width: config.width,
          height: config.height
        };
      }

      if (!config.canvas) {
        config.canvas = {
          width: config.width,
          height: config.height
        };
      }

      canvas.width = config.canvas.width || 320;
      canvas.height = config.canvas.height || 240;
      video.width = config.video.width || 320;
      video.height = config.video.height || 240;
    } // external library to record as GIF images


    gifEncoder = new GIFEncoder(); // void setRepeat(int iter)
    // Sets the number of times the set of GIF frames should be played.
    // Default is 1; 0 means play indefinitely.

    gifEncoder.setRepeat(0); // void setFrameRate(Number fps)
    // Sets frame rate in frames per second.
    // Equivalent to setDelay(1000/fps).
    // Using "setDelay" instead of "setFrameRate"

    gifEncoder.setDelay(config.frameRate || 200); // void setQuality(int quality)
    // Sets quality of color quantization (conversion of images to the
    // maximum 256 colors allowed by the GIF specification).
    // Lower values (minimum = 1) produce better colors,
    // but slow processing significantly. 10 is the default,
    // and produces good color mapping at reasonable speeds.
    // Values greater than 20 do not yield significant improvements in speed.

    gifEncoder.setQuality(config.quality || 10); // Boolean start()
    // This writes the GIF Header and returns false if it fails.

    gifEncoder.start();

    if (typeof config.onGifRecordingStarted === 'function') {
      config.onGifRecordingStarted();
    }

    startTime = Date.now();

    function drawVideoFrame(time) {
      if (self.clearedRecordedData === true) {
        return;
      }

      if (isPausedRecording) {
        return setTimeout(function () {
          drawVideoFrame(time);
        }, 100);
      }

      lastAnimationFrame = requestAnimationFrame(drawVideoFrame);

      if (_typeof(lastFrameTime) === undefined) {
        lastFrameTime = time;
      } // ~10 fps


      if (time - lastFrameTime < 90) {
        return;
      }

      if (!isHTMLObject && video.paused) {
        // via: https://github.com/muaz-khan/WebRTC-Experiment/pull/316
        // Tweak for Android Chrome
        video.play();
      }

      if (!isHTMLObject) {
        context.drawImage(video, 0, 0, canvas.width, canvas.height);
      }

      if (config.onGifPreview) {
        config.onGifPreview(canvas.toDataURL('image/png'));
      }

      gifEncoder.addFrame(context);
      lastFrameTime = time;
    }

    lastAnimationFrame = requestAnimationFrame(drawVideoFrame);

    if (config.initCallback) {
      config.initCallback();
    }
  };
  /**
   * This method stops recording MediaStream.
   * @param {function} callback - Callback function, that is used to pass recorded blob back to the callee.
   * @method
   * @memberof GifRecorder
   * @example
   * recorder.stop(function(blob) {
   *     img.src = URL.createObjectURL(blob);
   * });
   */


  this.stop = function (callback) {
    callback = callback || function () {};

    if (lastAnimationFrame) {
      cancelAnimationFrame(lastAnimationFrame);
    }

    endTime = Date.now();
    /**
     * @property {Blob} blob - The recorded blob object.
     * @memberof GifRecorder
     * @example
     * recorder.stop(function(){
     *     var blob = recorder.blob;
     * });
     */

    this.blob = new Blob([new Uint8Array(gifEncoder.stream().bin)], {
      type: 'image/gif'
    });
    callback(this.blob); // bug: find a way to clear old recorded blobs

    gifEncoder.stream().bin = [];
  };

  var isPausedRecording = false;
  /**
   * This method pauses the recording process.
   * @method
   * @memberof GifRecorder
   * @example
   * recorder.pause();
   */

  this.pause = function () {
    isPausedRecording = true;
  };
  /**
   * This method resumes the recording process.
   * @method
   * @memberof GifRecorder
   * @example
   * recorder.resume();
   */


  this.resume = function () {
    isPausedRecording = false;
  };
  /**
   * This method resets currently recorded data.
   * @method
   * @memberof GifRecorder
   * @example
   * recorder.clearRecordedData();
   */


  this.clearRecordedData = function () {
    self.clearedRecordedData = true;
    clearRecordedDataCB();
  };

  function clearRecordedDataCB() {
    if (gifEncoder) {
      gifEncoder.stream().bin = [];
    }
  } // for debugging


  this.name = 'GifRecorder';

  this.toString = function () {
    return this.name;
  };

  var canvas = document.createElement('canvas');
  var context = canvas.getContext('2d');

  if (isHTMLObject) {
    if (mediaStream instanceof CanvasRenderingContext2D) {
      context = mediaStream;
      canvas = context.canvas;
    } else if (mediaStream instanceof HTMLCanvasElement) {
      context = mediaStream.getContext('2d');
      canvas = mediaStream;
    }
  }

  var isLoadedMetaData = true;

  if (!isHTMLObject) {
    var video = document.createElement('video');
    video.muted = true;
    video.autoplay = true;
    video.playsInline = true;
    isLoadedMetaData = false;

    video.onloadedmetadata = function () {
      isLoadedMetaData = true;
    };

    setSrcObject(mediaStream, video);
    video.play();
  }

  var lastAnimationFrame = null;
  var startTime, endTime, lastFrameTime;
  var gifEncoder;
  var self = this;
}

if (typeof RecordRTC !== 'undefined') {
  RecordRTC.GifRecorder = GifRecorder;
} // Last time updated: 2019-06-21 4:09:42 AM UTC
// ________________________
// MultiStreamsMixer v1.2.2
// Open-Sourced: https://github.com/muaz-khan/MultiStreamsMixer
// --------------------------------------------------
// Muaz Khan     - www.MuazKhan.com
// MIT License   - www.WebRTC-Experiment.com/licence
// --------------------------------------------------


function MultiStreamsMixer(arrayOfMediaStreams, elementClass) {
  var browserFakeUserAgent = 'Fake/5.0 (FakeOS) AppleWebKit/123 (KHTML, like Gecko) Fake/12.3.4567.89 Fake/123.45';

  (function (that) {
    if (typeof RecordRTC !== 'undefined') {
      return;
    }

    if (!that) {
      return;
    }

    if (typeof window !== 'undefined') {
      return;
    }

    if (typeof global === 'undefined') {
      return;
    }

    global.navigator = {
      userAgent: browserFakeUserAgent,
      getUserMedia: function getUserMedia() {}
    };

    if (!global.console) {
      global.console = {};
    }

    if (typeof global.console.log === 'undefined' || typeof global.console.error === 'undefined') {
      global.console.error = global.console.log = global.console.log || function () {
        console.log(arguments);
      };
    }

    if (typeof document === 'undefined') {
      /*global document:true */
      that.document = {
        documentElement: {
          appendChild: function appendChild() {
            return '';
          }
        }
      };

      document.createElement = document.captureStream = document.mozCaptureStream = function () {
        var obj = {
          getContext: function getContext() {
            return obj;
          },
          play: function play() {},
          pause: function pause() {},
          drawImage: function drawImage() {},
          toDataURL: function toDataURL() {
            return '';
          },
          style: {}
        };
        return obj;
      };

      that.HTMLVideoElement = function () {};
    }

    if (typeof location === 'undefined') {
      /*global location:true */
      that.location = {
        protocol: 'file:',
        href: '',
        hash: ''
      };
    }

    if (typeof screen === 'undefined') {
      /*global screen:true */
      that.screen = {
        width: 0,
        height: 0
      };
    }

    if (typeof URL === 'undefined') {
      /*global screen:true */
      that.URL = {
        createObjectURL: function createObjectURL() {
          return '';
        },
        revokeObjectURL: function revokeObjectURL() {
          return '';
        }
      };
    }
    /*global window:true */


    that.window = global;
  })(typeof global !== 'undefined' ? global : null); // requires: chrome://flags/#enable-experimental-web-platform-features


  elementClass = elementClass || 'multi-streams-mixer';
  var videos = [];
  var isStopDrawingFrames = false;
  var canvas = document.createElement('canvas');
  var context = canvas.getContext('2d');
  canvas.style.opacity = 0;
  canvas.style.position = 'absolute';
  canvas.style.zIndex = -1;
  canvas.style.top = '-1000em';
  canvas.style.left = '-1000em';
  canvas.className = elementClass;
  (document.body || document.documentElement).appendChild(canvas);
  this.disableLogs = false;
  this.frameInterval = 10;
  this.width = 360;
  this.height = 240; // use gain node to prevent echo

  this.useGainNode = true;
  var self = this; // _____________________________
  // Cross-Browser-Declarations.js
  // WebAudio API representer

  var AudioContext = window.AudioContext;

  if (typeof AudioContext === 'undefined') {
    if (typeof webkitAudioContext !== 'undefined') {
      /*global AudioContext:true */
      AudioContext = webkitAudioContext;
    }

    if (typeof mozAudioContext !== 'undefined') {
      /*global AudioContext:true */
      AudioContext = mozAudioContext;
    }
  }
  /*jshint -W079 */


  var URL = window.URL;

  if (typeof URL === 'undefined' && typeof webkitURL !== 'undefined') {
    /*global URL:true */
    URL = webkitURL;
  }

  if (typeof navigator !== 'undefined' && typeof navigator.getUserMedia === 'undefined') {
    // maybe window.navigator?
    if (typeof navigator.webkitGetUserMedia !== 'undefined') {
      navigator.getUserMedia = navigator.webkitGetUserMedia;
    }

    if (typeof navigator.mozGetUserMedia !== 'undefined') {
      navigator.getUserMedia = navigator.mozGetUserMedia;
    }
  }

  var MediaStream = window.MediaStream;

  if (typeof MediaStream === 'undefined' && typeof webkitMediaStream !== 'undefined') {
    MediaStream = webkitMediaStream;
  }
  /*global MediaStream:true */


  if (typeof MediaStream !== 'undefined') {
    // override "stop" method for all browsers
    if (typeof MediaStream.prototype.stop === 'undefined') {
      MediaStream.prototype.stop = function () {
        this.getTracks().forEach(function (track) {
          track.stop();
        });
      };
    }
  }

  var Storage = {};

  if (typeof AudioContext !== 'undefined') {
    Storage.AudioContext = AudioContext;
  } else if (typeof webkitAudioContext !== 'undefined') {
    Storage.AudioContext = webkitAudioContext;
  }

  function setSrcObject(stream, element) {
    if ('srcObject' in element) {
      element.srcObject = stream;
    } else if ('mozSrcObject' in element) {
      element.mozSrcObject = stream;
    } else {
      element.srcObject = stream;
    }
  }

  this.startDrawingFrames = function () {
    drawVideosToCanvas();
  };

  function drawVideosToCanvas() {
    if (isStopDrawingFrames) {
      return;
    }

    var videosLength = videos.length;
    var fullcanvas = false;
    var remaining = [];
    videos.forEach(function (video) {
      if (!video.stream) {
        video.stream = {};
      }

      if (video.stream.fullcanvas) {
        fullcanvas = video;
      } else {
        // todo: video.stream.active or video.stream.live to fix blank frames issues?
        remaining.push(video);
      }
    });

    if (fullcanvas) {
      canvas.width = fullcanvas.stream.width;
      canvas.height = fullcanvas.stream.height;
    } else if (remaining.length) {
      canvas.width = videosLength > 1 ? remaining[0].width * 2 : remaining[0].width;
      var height = 1;

      if (videosLength === 3 || videosLength === 4) {
        height = 2;
      }

      if (videosLength === 5 || videosLength === 6) {
        height = 3;
      }

      if (videosLength === 7 || videosLength === 8) {
        height = 4;
      }

      if (videosLength === 9 || videosLength === 10) {
        height = 5;
      }

      canvas.height = remaining[0].height * height;
    } else {
      canvas.width = self.width || 360;
      canvas.height = self.height || 240;
    }

    if (fullcanvas && fullcanvas instanceof HTMLVideoElement) {
      drawImage(fullcanvas);
    }

    remaining.forEach(function (video, idx) {
      drawImage(video, idx);
    });
    setTimeout(drawVideosToCanvas, self.frameInterval);
  }

  function drawImage(video, idx) {
    if (isStopDrawingFrames) {
      return;
    }

    var x = 0;
    var y = 0;
    var width = video.width;
    var height = video.height;

    if (idx === 1) {
      x = video.width;
    }

    if (idx === 2) {
      y = video.height;
    }

    if (idx === 3) {
      x = video.width;
      y = video.height;
    }

    if (idx === 4) {
      y = video.height * 2;
    }

    if (idx === 5) {
      x = video.width;
      y = video.height * 2;
    }

    if (idx === 6) {
      y = video.height * 3;
    }

    if (idx === 7) {
      x = video.width;
      y = video.height * 3;
    }

    if (typeof video.stream.left !== 'undefined') {
      x = video.stream.left;
    }

    if (typeof video.stream.top !== 'undefined') {
      y = video.stream.top;
    }

    if (typeof video.stream.width !== 'undefined') {
      width = video.stream.width;
    }

    if (typeof video.stream.height !== 'undefined') {
      height = video.stream.height;
    }

    context.drawImage(video, x, y, width, height);

    if (typeof video.stream.onRender === 'function') {
      video.stream.onRender(context, x, y, width, height, idx);
    }
  }

  function getMixedStream() {
    isStopDrawingFrames = false;
    var mixedVideoStream = getMixedVideoStream();
    var mixedAudioStream = getMixedAudioStream();

    if (mixedAudioStream) {
      mixedAudioStream.getTracks().filter(function (t) {
        return t.kind === 'audio';
      }).forEach(function (track) {
        mixedVideoStream.addTrack(track);
      });
    }

    var fullcanvas;
    arrayOfMediaStreams.forEach(function (stream) {
      if (stream.fullcanvas) {
        fullcanvas = true;
      }
    }); // mixedVideoStream.prototype.appendStreams = appendStreams;
    // mixedVideoStream.prototype.resetVideoStreams = resetVideoStreams;
    // mixedVideoStream.prototype.clearRecordedData = clearRecordedData;

    return mixedVideoStream;
  }

  function getMixedVideoStream() {
    resetVideoStreams();
    var capturedStream;

    if ('captureStream' in canvas) {
      capturedStream = canvas.captureStream();
    } else if ('mozCaptureStream' in canvas) {
      capturedStream = canvas.mozCaptureStream();
    } else if (!self.disableLogs) {
      console.error('Upgrade to latest Chrome or otherwise enable this flag: chrome://flags/#enable-experimental-web-platform-features');
    }

    var videoStream = new MediaStream();
    capturedStream.getTracks().filter(function (t) {
      return t.kind === 'video';
    }).forEach(function (track) {
      videoStream.addTrack(track);
    });
    canvas.stream = videoStream;
    return videoStream;
  }

  function getMixedAudioStream() {
    // via: @pehrsons
    if (!Storage.AudioContextConstructor) {
      Storage.AudioContextConstructor = new Storage.AudioContext();
    }

    self.audioContext = Storage.AudioContextConstructor;
    self.audioSources = [];

    if (self.useGainNode === true) {
      self.gainNode = self.audioContext.createGain();
      self.gainNode.connect(self.audioContext.destination);
      self.gainNode.gain.value = 0; // don't hear self
    }

    var audioTracksLength = 0;
    arrayOfMediaStreams.forEach(function (stream) {
      if (!stream.getTracks().filter(function (t) {
        return t.kind === 'audio';
      }).length) {
        return;
      }

      audioTracksLength++;
      var audioSource = self.audioContext.createMediaStreamSource(stream);

      if (self.useGainNode === true) {
        audioSource.connect(self.gainNode);
      }

      self.audioSources.push(audioSource);
    });

    if (!audioTracksLength) {
      // because "self.audioContext" is not initialized
      // that's why we've to ignore rest of the code
      return;
    }

    self.audioDestination = self.audioContext.createMediaStreamDestination();
    self.audioSources.forEach(function (audioSource) {
      audioSource.connect(self.audioDestination);
    });
    return self.audioDestination.stream;
  }

  function getVideo(stream) {
    var video = document.createElement('video');
    setSrcObject(stream, video);
    video.className = elementClass;
    video.muted = true;
    video.volume = 0;
    video.width = stream.width || self.width || 360;
    video.height = stream.height || self.height || 240;
    video.play();
    return video;
  } // this.appendStreams = function(streams) {
  //     if (!streams) {
  //         throw 'First parameter is required.';
  //     }
  //     if (!(streams instanceof Array)) {
  //         streams = [streams];
  //     }
  //     streams.forEach(function(stream) {
  //         var newStream = new MediaStream();
  //         if (stream.getTracks().filter(function(t) {
  //                 return t.kind === 'video';
  //             }).length) {
  //             var video = getVideo(stream);
  //             video.stream = stream;
  //             videos.push(video);
  //             newStream.addTrack(stream.getTracks().filter(function(t) {
  //                 return t.kind === 'video';
  //             })[0]);
  //         }
  //         if (stream.getTracks().filter(function(t) {
  //                 return t.kind === 'audio';
  //             }).length) {
  //             var audioSource = self.audioContext.createMediaStreamSource(stream);
  //             self.audioDestination = self.audioContext.createMediaStreamDestination();
  //             audioSource.connect(self.audioDestination);
  //             newStream.addTrack(self.audioDestination.stream.getTracks().filter(function(t) {
  //                 return t.kind === 'audio';
  //             })[0]);
  //         }
  //         arrayOfMediaStreams.push(newStream);
  //     });
  // };
  // START - ADDED BY KODEMINT


  function getVideoTracks() {
    var tracks = [];
    arrayOfMediaStreams.forEach(function (stream) {
      stream.getVideoTracks().forEach(function (track) {
        tracks.push(track);
      });
    });
    return tracks;
  }

  this.appendStreams = function (streams) {
    debugger;

    if (!streams) {
      throw 'First parameter is required.';
    }

    if (!(streams instanceof Array)) {
      streams = [streams];
    }

    arrayOfMediaStreams.concat(streams);
    streams.forEach(function (stream) {
      if (stream.getVideoTracks().length) {
        var video = getVideo(stream);
        video.stream = stream;
        videos.push(video);
      }

      if (stream.getAudioTracks().length && self.audioContext) {
        var audioSource = self.audioContext.createMediaStreamSource(stream);
        audioSource.connect(self.audioDestination);
        self.audioSources.push(audioSource);
      }
    });
  }; // END - ADDED BY KODEMINT


  this.releaseStreams = function () {
    videos = [];
    isStopDrawingFrames = true;

    if (self.gainNode) {
      self.gainNode.disconnect();
      self.gainNode = null;
    }

    if (self.audioSources.length) {
      self.audioSources.forEach(function (source) {
        source.disconnect();
      });
      self.audioSources = [];
    }

    if (self.audioDestination) {
      self.audioDestination.disconnect();
      self.audioDestination = null;
    }

    if (self.audioContext) {
      self.audioContext.close();
    }

    self.audioContext = null;
    context.clearRect(0, 0, canvas.width, canvas.height);

    if (canvas.stream) {
      canvas.stream.stop();
      canvas.stream = null;
    }
  };

  this.resetVideoStreams = function (streams) {
    if (streams && !(streams instanceof Array)) {
      streams = [streams];
    }

    resetVideoStreams(streams);
  };

  function resetVideoStreams(streams) {
    videos = [];
    streams = streams || arrayOfMediaStreams; // via: @adrian-ber

    streams.forEach(function (stream) {
      if (!stream.getTracks().filter(function (t) {
        return t.kind === 'video';
      }).length) {
        return;
      }

      var video = getVideo(stream);
      video.stream = stream;
      videos.push(video);
    });
  } // for debugging


  this.name = 'MultiStreamsMixer';

  this.toString = function () {
    return this.name;
  };

  this.getMixedStream = getMixedStream;
}

if (typeof RecordRTC === 'undefined') {
  if (true
  /* && !!module.exports*/
  ) {
    module.exports = MultiStreamsMixer;
  }

  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
      return MultiStreamsMixer;
    }).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  }
} // ______________________
// MultiStreamRecorder.js

/*
 * Video conference recording, using captureStream API along with WebAudio and Canvas2D API.
 */

/**
 * MultiStreamRecorder can record multiple videos in single container.
 * @summary Multi-videos recorder.
 * @license {@link https://github.com/muaz-khan/RecordRTC/blob/master/LICENSE|MIT}
 * @author {@link https://MuazKhan.com|Muaz Khan}
 * @typedef MultiStreamRecorder
 * @class
 * @example
 * var options = {
 *     mimeType: 'video/webm'
 * }
 * var recorder = new MultiStreamRecorder(ArrayOfMediaStreams, options);
 * recorder.record();
 * recorder.stop(function(blob) {
 *     video.src = URL.createObjectURL(blob);
 *
 *     // or
 *     var blob = recorder.blob;
 * });
 * @see {@link https://github.com/muaz-khan/RecordRTC|RecordRTC Source Code}
 * @param {MediaStreams} mediaStreams - Array of MediaStreams.
 * @param {object} config - {disableLogs:true, frameInterval: 1, mimeType: "video/webm"}
 */


function MultiStreamRecorder(arrayOfMediaStreams, options) {
  arrayOfMediaStreams = arrayOfMediaStreams || [];
  var self = this;
  var mixer;
  var mediaRecorder;
  options = options || {
    elementClass: 'multi-streams-mixer',
    mimeType: 'video/webm',
    video: {
      width: 360,
      height: 240
    }
  };

  if (!options.frameInterval) {
    options.frameInterval = 10;
  }

  if (!options.video) {
    options.video = {};
  }

  if (!options.video.width) {
    options.video.width = 360;
  }

  if (!options.video.height) {
    options.video.height = 240;
  }
  /**
   * This method records all MediaStreams.
   * @method
   * @memberof MultiStreamRecorder
   * @example
   * recorder.record();
   */


  this.record = function () {
    // github/muaz-khan/MultiStreamsMixer
    mixer = new MultiStreamsMixer(arrayOfMediaStreams, options.elementClass || 'multi-streams-mixer');

    if (getAllVideoTracks().length) {
      mixer.frameInterval = options.frameInterval || 10;
      mixer.width = options.video.width || 360;
      mixer.height = options.video.height || 240;
      mixer.startDrawingFrames();
    }

    if (options.previewStream && typeof options.previewStream === 'function') {
      options.previewStream(mixer.getMixedStream());
    } // record using MediaRecorder API


    mediaRecorder = new MediaStreamRecorder(mixer.getMixedStream(), options);
    mediaRecorder.record();
  };

  function getAllVideoTracks() {
    var tracks = [];
    arrayOfMediaStreams.forEach(function (stream) {
      getTracks(stream, 'video').forEach(function (track) {
        tracks.push(track);
      });
    });
    return tracks;
  }
  /**
   * This method stops recording MediaStream.
   * @param {function} callback - Callback function, that is used to pass recorded blob back to the callee.
   * @method
   * @memberof MultiStreamRecorder
   * @example
   * recorder.stop(function(blob) {
   *     video.src = URL.createObjectURL(blob);
   * });
   */


  this.stop = function (callback) {
    if (!mediaRecorder) {
      return;
    }

    mediaRecorder.stop(function (blob) {
      self.blob = blob;
      callback(blob);
      self.clearRecordedData();
    });
  };
  /**
   * This method pauses the recording process.
   * @method
   * @memberof MultiStreamRecorder
   * @example
   * recorder.pause();
   */


  this.pause = function () {
    if (mediaRecorder) {
      mediaRecorder.pause();
    }
  };
  /**
   * This method resumes the recording process.
   * @method
   * @memberof MultiStreamRecorder
   * @example
   * recorder.resume();
   */


  this.resume = function () {
    if (mediaRecorder) {
      mediaRecorder.resume();
    }
  };
  /**
   * This method resets currently recorded data.
   * @method
   * @memberof MultiStreamRecorder
   * @example
   * recorder.clearRecordedData();
   */


  this.clearRecordedData = function () {
    if (mediaRecorder) {
      mediaRecorder.clearRecordedData();
      mediaRecorder = null;
    }

    if (mixer) {
      mixer.releaseStreams();
      mixer = null;
    }
  };
  /**
   * Add extra media-streams to existing recordings.
   * @method
   * @memberof MultiStreamRecorder
   * @param {MediaStreams} mediaStreams - Array of MediaStreams
   * @example
   * recorder.addStreams([newAudioStream, newVideoStream]);
   */


  this.addStreams = function (streams) {
    if (!streams) {
      throw 'First parameter is required.';
    }

    if (!(streams instanceof Array)) {
      streams = [streams];
    }

    arrayOfMediaStreams.concat(streams);

    if (!mediaRecorder || !mixer) {
      return;
    }

    mixer.appendStreams(streams);

    if (options.previewStream && typeof options.previewStream === 'function') {
      options.previewStream(mixer.getMixedStream());
    }
  };
  /**
   * Reset videos during live recording. Replace old videos e.g. replace cameras with full-screen.
   * @method
   * @memberof MultiStreamRecorder
   * @param {MediaStreams} mediaStreams - Array of MediaStreams
   * @example
   * recorder.resetVideoStreams([newVideo1, newVideo2]);
   */


  this.resetVideoStreams = function (streams) {
    if (!mixer) {
      return;
    }

    if (streams && !(streams instanceof Array)) {
      streams = [streams];
    }

    mixer.resetVideoStreams(streams);
  };
  /**
   * Returns MultiStreamsMixer
   * @method
   * @memberof MultiStreamRecorder
   * @example
   * let mixer = recorder.getMixer();
   * mixer.appendStreams([newStream]);
   */


  this.getMixer = function () {
    return mixer;
  }; // for debugging


  this.name = 'MultiStreamRecorder';

  this.toString = function () {
    return this.name;
  };
}

if (typeof RecordRTC !== 'undefined') {
  RecordRTC.MultiStreamRecorder = MultiStreamRecorder;
} // _____________________
// RecordRTC.promises.js

/**
 * RecordRTCPromisesHandler adds promises support in {@link RecordRTC}. Try a {@link https://github.com/muaz-khan/RecordRTC/blob/master/simple-demos/RecordRTCPromisesHandler.html|demo here}
 * @summary Promises for {@link RecordRTC}
 * @license {@link https://github.com/muaz-khan/RecordRTC/blob/master/LICENSE|MIT}
 * @author {@link https://MuazKhan.com|Muaz Khan}
 * @typedef RecordRTCPromisesHandler
 * @class
 * @example
 * var recorder = new RecordRTCPromisesHandler(mediaStream, options);
 * recorder.startRecording()
 *         .then(successCB)
 *         .catch(errorCB);
 * // Note: You can access all RecordRTC API using "recorder.recordRTC" e.g.
 * recorder.recordRTC.onStateChanged = function(state) {};
 * recorder.recordRTC.setRecordingDuration(5000);
 * @see {@link https://github.com/muaz-khan/RecordRTC|RecordRTC Source Code}
 * @param {MediaStream} mediaStream - Single media-stream object, array of media-streams, html-canvas-element, etc.
 * @param {object} config - {type:"video", recorderType: MediaStreamRecorder, disableLogs: true, numberOfAudioChannels: 1, bufferSize: 0, sampleRate: 0, video: HTMLVideoElement, etc.}
 * @throws Will throw an error if "new" keyword is not used to initiate "RecordRTCPromisesHandler". Also throws error if first argument "MediaStream" is missing.
 * @requires {@link RecordRTC}
 */


function RecordRTCPromisesHandler(mediaStream, options) {
  if (!this) {
    throw 'Use "new RecordRTCPromisesHandler()"';
  }

  if (typeof mediaStream === 'undefined') {
    throw 'First argument "MediaStream" is required.';
  }

  var self = this;
  /**
   * @property {Blob} blob - Access/reach the native {@link RecordRTC} object.
   * @memberof RecordRTCPromisesHandler
   * @example
   * let internal = recorder.recordRTC.getInternalRecorder();
   * alert(internal instanceof MediaStreamRecorder);
   * recorder.recordRTC.onStateChanged = function(state) {};
   */

  self.recordRTC = new RecordRTC(mediaStream, options);
  /**
   * This method records MediaStream.
   * @method
   * @memberof RecordRTCPromisesHandler
   * @example
   * recorder.startRecording()
   *         .then(successCB)
   *         .catch(errorCB);
   */

  this.startRecording = function () {
    return new Promise(function (resolve, reject) {
      try {
        self.recordRTC.startRecording();
        resolve();
      } catch (e) {
        reject(e);
      }
    });
  };
  /**
   * This method stops the recording.
   * @method
   * @memberof RecordRTCPromisesHandler
   * @example
   * recorder.stopRecording().then(function() {
   *     var blob = recorder.getBlob();
   * }).catch(errorCB);
   */


  this.stopRecording = function () {
    return new Promise(function (resolve, reject) {
      try {
        self.recordRTC.stopRecording(function (url) {
          self.blob = self.recordRTC.getBlob();

          if (!self.blob || !self.blob.size) {
            reject('Empty blob.', self.blob);
            return;
          }

          resolve(url);
        });
      } catch (e) {
        reject(e);
      }
    });
  };
  /**
   * This method pauses the recording. You can resume recording using "resumeRecording" method.
   * @method
   * @memberof RecordRTCPromisesHandler
   * @example
   * recorder.pauseRecording()
   *         .then(successCB)
   *         .catch(errorCB);
   */


  this.pauseRecording = function () {
    return new Promise(function (resolve, reject) {
      try {
        self.recordRTC.pauseRecording();
        resolve();
      } catch (e) {
        reject(e);
      }
    });
  };
  /**
   * This method resumes the recording.
   * @method
   * @memberof RecordRTCPromisesHandler
   * @example
   * recorder.resumeRecording()
   *         .then(successCB)
   *         .catch(errorCB);
   */


  this.resumeRecording = function () {
    return new Promise(function (resolve, reject) {
      try {
        self.recordRTC.resumeRecording();
        resolve();
      } catch (e) {
        reject(e);
      }
    });
  };
  /**
   * This method returns data-url for the recorded blob.
   * @method
   * @memberof RecordRTCPromisesHandler
   * @example
   * recorder.stopRecording().then(function() {
   *     recorder.getDataURL().then(function(dataURL) {
   *         window.open(dataURL);
   *     }).catch(errorCB);;
   * }).catch(errorCB);
   */


  this.getDataURL = function (callback) {
    return new Promise(function (resolve, reject) {
      try {
        self.recordRTC.getDataURL(function (dataURL) {
          resolve(dataURL);
        });
      } catch (e) {
        reject(e);
      }
    });
  };
  /**
   * This method returns the recorded blob.
   * @method
   * @memberof RecordRTCPromisesHandler
   * @example
   * recorder.stopRecording().then(function() {
   *     recorder.getBlob().then(function(blob) {})
   * }).catch(errorCB);
   */


  this.getBlob = function () {
    return new Promise(function (resolve, reject) {
      try {
        resolve(self.recordRTC.getBlob());
      } catch (e) {
        reject(e);
      }
    });
  };
  /**
   * This method returns the internal recording object.
   * @method
   * @memberof RecordRTCPromisesHandler
   * @example
   * let internalRecorder = await recorder.getInternalRecorder();
   * if(internalRecorder instanceof MultiStreamRecorder) {
   *     internalRecorder.addStreams([newAudioStream]);
   *     internalRecorder.resetVideoStreams([screenStream]);
   * }
   * @returns {Object}
   */


  this.getInternalRecorder = function () {
    return new Promise(function (resolve, reject) {
      try {
        resolve(self.recordRTC.getInternalRecorder());
      } catch (e) {
        reject(e);
      }
    });
  };
  /**
   * This method resets the recorder. So that you can reuse single recorder instance many times.
   * @method
   * @memberof RecordRTCPromisesHandler
   * @example
   * await recorder.reset();
   * recorder.startRecording(); // record again
   */


  this.reset = function () {
    return new Promise(function (resolve, reject) {
      try {
        resolve(self.recordRTC.reset());
      } catch (e) {
        reject(e);
      }
    });
  };
  /**
   * Destroy RecordRTC instance. Clear all recorders and objects.
   * @method
   * @memberof RecordRTCPromisesHandler
   * @example
   * recorder.destroy().then(successCB).catch(errorCB);
   */


  this.destroy = function () {
    return new Promise(function (resolve, reject) {
      try {
        resolve(self.recordRTC.destroy());
      } catch (e) {
        reject(e);
      }
    });
  };
  /**
   * Get recorder's readonly state.
   * @method
   * @memberof RecordRTCPromisesHandler
   * @example
   * let state = await recorder.getState();
   * // or
   * recorder.getState().then(state => { console.log(state); })
   * @returns {String} Returns recording state.
   */


  this.getState = function () {
    return new Promise(function (resolve, reject) {
      try {
        resolve(self.recordRTC.getState());
      } catch (e) {
        reject(e);
      }
    });
  };
  /**
   * @property {Blob} blob - Recorded data as "Blob" object.
   * @memberof RecordRTCPromisesHandler
   * @example
   * await recorder.stopRecording();
   * let blob = recorder.getBlob(); // or "recorder.recordRTC.blob"
   * invokeSaveAsDialog(blob);
   */


  this.blob = null;
  /**
   * RecordRTC version number
   * @property {String} version - Release version number.
   * @memberof RecordRTCPromisesHandler
   * @static
   * @readonly
   * @example
   * alert(recorder.version);
   */

  this.version = '5.6.2';
}

if (typeof RecordRTC !== 'undefined') {
  RecordRTC.RecordRTCPromisesHandler = RecordRTCPromisesHandler;
} // ______________________
// WebAssemblyRecorder.js

/**
 * WebAssemblyRecorder lets you create webm videos in JavaScript via WebAssembly. The library consumes raw RGBA32 buffers (4 bytes per pixel) and turns them into a webm video with the given framerate and quality. This makes it compatible out-of-the-box with ImageData from a CANVAS. With realtime mode you can also use webm-wasm for streaming webm videos.
 * @summary Video recording feature in Chrome, Firefox and maybe Edge.
 * @license {@link https://github.com/muaz-khan/RecordRTC/blob/master/LICENSE|MIT}
 * @author {@link https://MuazKhan.com|Muaz Khan}
 * @typedef WebAssemblyRecorder
 * @class
 * @example
 * var recorder = new WebAssemblyRecorder(mediaStream);
 * recorder.record();
 * recorder.stop(function(blob) {
 *     video.src = URL.createObjectURL(blob);
 * });
 * @see {@link https://github.com/muaz-khan/RecordRTC|RecordRTC Source Code}
 * @param {MediaStream} mediaStream - MediaStream object fetched using getUserMedia API or generated using captureStreamUntilEnded or WebAudio API.
 * @param {object} config - {webAssemblyPath:'webm-wasm.wasm',workerPath: 'webm-worker.js', frameRate: 30, width: 1920, height: 1080, bitrate: 1024, realtime: true}
 */


function WebAssemblyRecorder(stream, config) {
  // based on: github.com/GoogleChromeLabs/webm-wasm
  if (typeof ReadableStream === 'undefined' || typeof WritableStream === 'undefined') {
    // because it fixes readable/writable streams issues
    console.error('Following polyfill is strongly recommended: https://unpkg.com/@mattiasbuelens/web-streams-polyfill/dist/polyfill.min.js');
  }

  config = config || {};
  config.width = config.width || 640;
  config.height = config.height || 480;
  config.frameRate = config.frameRate || 30;
  config.bitrate = config.bitrate || 1200;
  config.realtime = config.realtime || true;

  function createBufferURL(buffer, type) {
    return URL.createObjectURL(new Blob([buffer], {
      type: type || ''
    }));
  }

  var finished;

  function cameraStream() {
    return new ReadableStream({
      start: function start(controller) {
        var cvs = document.createElement('canvas');
        var video = document.createElement('video');
        var first = true;
        video.srcObject = stream;
        video.muted = true;
        video.height = config.height;
        video.width = config.width;
        video.volume = 0;

        video.onplaying = function () {
          cvs.width = config.width;
          cvs.height = config.height;
          var ctx = cvs.getContext('2d');
          var frameTimeout = 1000 / config.frameRate;
          var cameraTimer = setInterval(function f() {
            if (finished) {
              clearInterval(cameraTimer);
              controller.close();
            }

            if (first) {
              first = false;

              if (config.onVideoProcessStarted) {
                config.onVideoProcessStarted();
              }
            }

            ctx.drawImage(video, 0, 0);

            if (controller._controlledReadableStream.state !== 'closed') {
              try {
                controller.enqueue(ctx.getImageData(0, 0, config.width, config.height));
              } catch (e) {}
            }
          }, frameTimeout);
        };

        video.play();
      }
    });
  }

  var worker;

  function startRecording(stream, buffer) {
    if (!config.workerPath && !buffer) {
      finished = false; // is it safe to use @latest ?

      fetch('https://unpkg.com/webm-wasm@latest/dist/webm-worker.js').then(function (r) {
        r.arrayBuffer().then(function (buffer) {
          startRecording(stream, buffer);
        });
      });
      return;
    }

    if (!config.workerPath && buffer instanceof ArrayBuffer) {
      var blob = new Blob([buffer], {
        type: 'text/javascript'
      });
      config.workerPath = URL.createObjectURL(blob);
    }

    if (!config.workerPath) {
      console.error('workerPath parameter is missing.');
    }

    worker = new Worker(config.workerPath);
    worker.postMessage(config.webAssemblyPath || 'https://unpkg.com/webm-wasm@latest/dist/webm-wasm.wasm');
    worker.addEventListener('message', function (event) {
      if (event.data === 'READY') {
        worker.postMessage({
          width: config.width,
          height: config.height,
          bitrate: config.bitrate || 1200,
          timebaseDen: config.frameRate || 30,
          realtime: config.realtime
        });
        cameraStream().pipeTo(new WritableStream({
          write: function write(image) {
            if (finished) {
              console.error('Got image, but recorder is finished!');
              return;
            }

            worker.postMessage(image.data.buffer, [image.data.buffer]);
          }
        }));
      } else if (!!event.data) {
        if (!isPaused) {
          arrayOfBuffers.push(event.data);
        }
      }
    });
  }
  /**
   * This method records video.
   * @method
   * @memberof WebAssemblyRecorder
   * @example
   * recorder.record();
   */


  this.record = function () {
    arrayOfBuffers = [];
    isPaused = false;
    this.blob = null;
    startRecording(stream);

    if (typeof config.initCallback === 'function') {
      config.initCallback();
    }
  };

  var isPaused;
  /**
   * This method pauses the recording process.
   * @method
   * @memberof WebAssemblyRecorder
   * @example
   * recorder.pause();
   */

  this.pause = function () {
    isPaused = true;
  };
  /**
   * This method resumes the recording process.
   * @method
   * @memberof WebAssemblyRecorder
   * @example
   * recorder.resume();
   */


  this.resume = function () {
    isPaused = false;
  };

  function terminate(callback) {
    if (!worker) {
      if (callback) {
        callback();
      }

      return;
    } // Wait for null event data to indicate that the encoding is complete


    worker.addEventListener('message', function (event) {
      if (event.data === null) {
        worker.terminate();
        worker = null;

        if (callback) {
          callback();
        }
      }
    });
    worker.postMessage(null);
  }

  var arrayOfBuffers = [];
  /**
   * This method stops recording video.
   * @param {function} callback - Callback function, that is used to pass recorded blob back to the callee.
   * @method
   * @memberof WebAssemblyRecorder
   * @example
   * recorder.stop(function(blob) {
   *     video.src = URL.createObjectURL(blob);
   * });
   */

  this.stop = function (callback) {
    finished = true;
    var recorder = this;
    terminate(function () {
      recorder.blob = new Blob(arrayOfBuffers, {
        type: 'video/webm'
      });
      callback(recorder.blob);
    });
  }; // for debugging


  this.name = 'WebAssemblyRecorder';

  this.toString = function () {
    return this.name;
  };
  /**
   * This method resets currently recorded data.
   * @method
   * @memberof WebAssemblyRecorder
   * @example
   * recorder.clearRecordedData();
   */


  this.clearRecordedData = function () {
    arrayOfBuffers = [];
    isPaused = false;
    this.blob = null; // todo: if recording-ON then STOP it first
  };
  /**
   * @property {Blob} blob - The recorded blob object.
   * @memberof WebAssemblyRecorder
   * @example
   * recorder.stop(function(){
   *     var blob = recorder.blob;
   * });
   */


  this.blob = null;
}

if (typeof RecordRTC !== 'undefined') {
  RecordRTC.WebAssemblyRecorder = WebAssemblyRecorder;
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js"), __webpack_require__(/*! ./../../../../node_modules/process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ 10:
/*!**********************!*\
  !*** util (ignored) ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 11:
/*!**********************!*\
  !*** util (ignored) ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 2:
/*!********************!*\
  !*** fs (ignored) ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 3:
/*!********************!*\
  !*** ws (ignored) ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 4:
/*!*********************!*\
  !*** tls (ignored) ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 5:
/*!******************************************!*\
  !*** ../../external/ocsp/ocsp (ignored) ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 6:
/*!****************************!*\
  !*** agent-base (ignored) ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 7:
/*!**********************************!*\
  !*** async-disk-cache (ignored) ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 8:
/*!***********************************!*\
  !*** https-proxy-agent (ignored) ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 9:
/*!*********************!*\
  !*** net (ignored) ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

}]);
//# sourceMappingURL=live.js.map?id=ecb90625d27b57e095e6