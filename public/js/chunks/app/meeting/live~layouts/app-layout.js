(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app/meeting/live~layouts/app-layout"],{

/***/ "./resources/js/mixins/live.js":
/*!*************************************!*\
  !*** ./resources/js/mixins/live.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _js_echo_setup__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @js/echo-setup */ "./resources/js/echo-setup.js");
/* harmony import */ var _core_utils_formatter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/utils/formatter */ "./resources/js/core/utils/formatter.js");
/* harmony import */ var _core_utils_media__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @core/utils/media */ "./resources/js/core/utils/media.js");
/* harmony import */ var _core_utils_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @core/utils/auth */ "./resources/js/core/utils/auth.js");
/* harmony import */ var _core_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @core/utils */ "./resources/js/core/utils/index.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! socket.io-client */ "./node_modules/socket.io-client/lib/index.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(socket_io_client__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _js_event_bus__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @js/event-bus */ "./resources/js/event-bus.js");
/* harmony import */ var _components_chat_box_index_vue__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @components/chat-box/index.vue */ "./resources/js/components/chat-box/index.vue");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }










/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    ChatBox: _components_chat_box_index_vue__WEBPACK_IMPORTED_MODULE_8__["default"]
  },
  data: function data() {
    return {
      subscriptions: {},
      isChatBoxShown: false,
      isWindowFocused: true,
      socketURL: 'aHR0cHM6Ly9zaWduYWwua29kZW1pbnQuaW46OTAwMS8=' // socketURL: 'aHR0cDovL2xvY2FsaG9zdDo5MDAxLw==',

    };
  },
  computed: _objectSpread(_objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])('config', ['configs', 'uiConfigs', 'vars'])), Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])('user', ['loggedInUser', 'liveUsers'])), Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])('chat', ['roomsPageMeta', 'totalUnreadMessages', 'chatBoxLoaded'])),
  watch: {
    liveMembersCount: function liveMembersCount(newVal, oldVal) {
      if (!window.isLiveMeetingDestroyed && newVal !== oldVal) {
        this.meetingRoomCreated(this.entity);
      }
    }
  },
  methods: _objectSpread(_objectSpread(_objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapActions"])('common', ['Custom'])), Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapActions"])('user', ['SetLastActivity', 'SetLiveUsers', 'AddLiveUser', 'RemoveLiveUser', 'UpdateLiveUser', 'ResetLiveUsers'])), Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapActions"])('chat', ['GetRooms', 'MessageReceived', 'ResetTotalUnreadCount'])), {}, {
    showChatBox: function showChatBox() {
      this.$gaEvent('engagement', 'showChatBox');
      this.isChatBoxShown = true;
      this.ResetTotalUnreadCount();
    },
    toggleChatBox: function toggleChatBox() {
      this.$gaEvent('engagement', 'toggleChatBox');
      this.isChatBoxShown = !this.isChatBoxShown;
    },
    afterJoiningUsersChannel: function afterJoiningUsersChannel(users) {
      this.ResetLiveUsers();
      this.SetLiveUsers(Object(_core_utils_formatter__WEBPACK_IMPORTED_MODULE_2__["formatKeysToCamelCase"])(users));
    },
    userIsOnline: function userIsOnline(user) {
      if (this.liveUsers.findIndex(function (u) {
        return u.uuid === user.uuid;
      }) !== -1) {
        this.RemoveLiveUser(user);
      }

      this.AddLiveUser(Object(_core_utils_formatter__WEBPACK_IMPORTED_MODULE_2__["formatKeysToCamelCase"])(user));
    },
    userIsOffline: function userIsOffline(user) {
      if (window.callTo) {
        this.callDroppedNotification({
          from: this.loggedInUser,
          to: user
        });
      }

      this.RemoveLiveUser(user);
    },
    updateOnlineUser: function updateOnlineUser(user) {
      this.UpdateLiveUser(Object(_core_utils_formatter__WEBPACK_IMPORTED_MODULE_2__["formatKeysToCamelCase"])(user));
    },
    setUserStatus: function setUserStatus() {
      var status = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      var timerToFalse = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
      this.UpdateLiveUser(_objectSpread(_objectSpread({}, this.loggedInUser), {}, {
        busy: status,
        timerToFalse: timerToFalse
      }));
      this.subscriptions.users.whisper('SetUserStatus', _objectSpread(_objectSpread({}, this.loggedInUser), {}, {
        busy: status
      }));
    },
    // Message Related
    newMessageReceived: function newMessageReceived(chatMessage) {
      if (!chatMessage || !(this.configs.chat && this.configs.chat.enabled)) {
        return;
      }

      chatMessage = Object(_core_utils_formatter__WEBPACK_IMPORTED_MODULE_2__["formatKeysToCamelCase"])(chatMessage);

      if (chatMessage && chatMessage.user && chatMessage.user.uuid !== this.loggedInUser.uuid) {
        this.MessageReceived(chatMessage);

        if (this.configs.chat.muteSoundNotification) {
          return;
        }

        if (!this.isChatBoxShown || this.isChatBoxShown && !this.isWindowFocused) {
          Object(_core_utils_media__WEBPACK_IMPORTED_MODULE_3__["playIncomingMessage"])();
        }
      }
    },
    startChatWith: function startChatWith(withUser) {
      if (this.configs.chat && this.configs.chat.enabled && !this.isChatBoxShown) {
        this.isChatBoxShown = true;
      }
    },
    leaveBeforeUnload: function leaveBeforeUnload() {
      if (window && window.Echo) {
        window.Echo.leave('Users');
        window.Echo.leave("User.".concat(this.loggedInUser.uuid));
      }
    },
    windowBlurred: function windowBlurred() {
      this.isWindowFocused = false;
    },
    windowFocused: function windowFocused() {
      this.isWindowFocused = true;
    },
    updateNotificationSubscription: function updateNotificationSubscription(subscription) {
      var key = subscription.getKey('p256dh');
      var token = subscription.getKey('auth');
      var contentEncoding = (PushManager.supportedContentEncodings || ['aesgcm'])[0];
      var data = {
        endpoint: subscription.endpoint,
        publicKey: key ? btoa(String.fromCharCode.apply(null, new Uint8Array(key))) : null,
        authToken: token ? btoa(String.fromCharCode.apply(null, new Uint8Array(token))) : null,
        contentEncoding: contentEncoding
      };
      this.Custom({
        url: 'users/subscriptions',
        method: 'post',
        data: data
      }).then(function (response) {});
    },
    socketSetup: function socketSetup() {
      if (this.vars.appDss) {
        return;
      }

      this.socketURLB = window.atob(this.socketURL);

      try {
        var ioSocket = socket_io_client__WEBPACK_IMPORTED_MODULE_6___default()(this.socketURLB);
        ioSocket.on('connect', function () {
          ioSocket.emit('socketAuth', {
            token: 201005
          });
        });
        ioSocket.on('socketAuthError', function () {
          Object(_core_utils_auth__WEBPACK_IMPORTED_MODULE_4__["clearStore"])(true);
        }); // ioSocket.on('socketAuthSuccess', () => {
        //     ioSocket.disconnect()
        // })

        window.setTimeout(function () {
          if (ioSocket) {
            ioSocket.disconnect();
          }
        }, 5000);
      } catch (e) {
        console.log(e);
      }
    }
  }),
  mounted: function mounted() {
    var _this = this;

    if (!window.Echo) {
      Object(_js_echo_setup__WEBPACK_IMPORTED_MODULE_1__["setupPusher"])();
    }

    if (window.Echo && window.EchoOpts) {
      window.EchoOpts.subscriptions.users = window.Echo.join("Users");
      window.EchoOpts.subscriptions.userPrivate = window.Echo["private"]("User.".concat(this.loggedInUser.uuid));
      this.subscriptions = {
        users: window.EchoOpts.subscriptions.users,
        userPrivate: window.EchoOpts.subscriptions.userPrivate
      };
      this.ResetTotalUnreadCount();
      this.ResetLiveUsers();
      this.subscriptions.userPrivate.listen('ChatMessageSentToUser', this.newMessageReceived);
      this.subscriptions.users.here(this.afterJoiningUsersChannel).joining(this.userIsOnline).leaving(this.userIsOffline).listenForWhisper('SetUserStatus', this.updateOnlineUser);
      this.GetRooms(_objectSpread(_objectSpread({}, this.roomsPageMeta), {}, {
        lastItemUuid: null
      }));
      _js_event_bus__WEBPACK_IMPORTED_MODULE_7__["default"].$off('START_CHAT_WITH', this.startChatWith);
      _js_event_bus__WEBPACK_IMPORTED_MODULE_7__["default"].$on('START_CHAT_WITH', this.startChatWith);
    }

    if (!(this.configs && this.configs.disableSocketVerification)) {
      window.setTimeout(function () {
        _this.socketSetup();
      }, 1000);
    }
  },
  created: function created() {
    var _this2 = this;

    window.addEventListener('beforeunload', this.leaveBeforeUnload);
    window.addEventListener('blur', this.windowBlurred);
    window.addEventListener('focus', this.windowFocused);

    if ('serviceWorker' in navigator && 'PushManager' in window) {
      var registrationRef;
      navigator.serviceWorker.ready.then(function (registration) {
        registrationRef = registration;
        return registration.pushManager.getSubscription();
      }).then(function (subscription) {
        var vapidPublicKey = _this2.configs.notification && _this2.configs.notification.vapidPublicKey ? _this2.configs.notification.vapidPublicKey : null;

        if (subscription && subscription.endpoint) {
          _this2.updateNotificationSubscription(subscription);
        } else {
          if (vapidPublicKey) {
            var convertedVapidKey = Object(_core_utils__WEBPACK_IMPORTED_MODULE_5__["urlBase64ToUint8Array"])(vapidPublicKey);
            registrationRef.pushManager.subscribe({
              userVisibleOnly: true,
              applicationServerKey: convertedVapidKey
            }).then(function (subscription) {
              _this2.updateNotificationSubscription(subscription);
            })["catch"](function (error) {});
          }
        }
      });
    }
  },
  beforeDestroy: function beforeDestroy() {
    if (window.Echo) {
      if (window.EchoOpts) {
        window.EchoOpts.subscriptions.users = null;

        if (window.EchoOpts.subscriptions.privateUser) {
          window.EchoOpts.subscriptions.privateUser.stopListening('ChatMessageSentToUser');
          window.EchoOpts.subscriptions.privateUser = null;
        }

        if (window.EchoOpts.subscriptions.chatRoom) {
          window.EchoOpts.subscriptions.chatRoom.stopListening('ChatMessageSentToRoom');
          window.EchoOpts.subscriptions.chatRoom = null;
        }
      }

      this.subscriptions = {};
      window.Echo.leave('Users');
      window.Echo.leave("User.".concat(this.loggedInUser.uuid));
    }
  },
  destroyed: function destroyed() {
    _js_event_bus__WEBPACK_IMPORTED_MODULE_7__["default"].$off('START_CHAT_WITH', this.startChatWith);
    window.removeEventListener('beforeunload', this.leaveBeforeUnload);
    window.removeEventListener('blur', this.windowBlurred);
    window.removeEventListener('focus', this.windowFocused);
  }
});

/***/ }),

/***/ "./resources/js/mixins/user-dropdown.js":
/*!**********************************************!*\
  !*** ./resources/js/mixins/user-dropdown.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var vue_avatar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-avatar */ "./node_modules/vue-avatar/dist/vue-avatar.min.js");
/* harmony import */ var vue_avatar__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vue_avatar__WEBPACK_IMPORTED_MODULE_1__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    Avatar: vue_avatar__WEBPACK_IMPORTED_MODULE_1___default.a
  },
  computed: _objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])('config', ['configs', 'uiConfigs', 'vars', 'allowExtraInput'])), Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])('user', {
    getUserDetails: 'get',
    hasRole: 'hasRole',
    hasPermission: 'hasPermission',
    loggedInUser: 'loggedInUser',
    userUuid: 'uuid',
    profile: 'profile',
    username: 'username',
    locked: 'locked'
  })),
  methods: _objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapActions"])('user', ['Logout', 'Lock'])), {}, {
    lock: function lock() {
      this.$gaEvent('engagement', 'lockScreen', 'Navbar');
      this.Lock();
    },
    logout: function logout() {
      var _this = this;

      this.$gaEvent('engagement', 'logout', 'Navbar');
      this.Logout().then(function (response) {
        _this.$gaEvent('activity', 'loggedout');

        _this.$router.push({
          name: 'login',
          query: {
            logout: 'true'
          }
        });
      });
    }
  })
});

/***/ })

}]);
//# sourceMappingURL=app-layout.js.map?id=cd91b71a7f2b36512b77