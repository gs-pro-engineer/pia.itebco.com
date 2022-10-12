(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app/chat~app/meeting/live~layouts/app-layout"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/chat-box/conversation-header.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/chat-box/conversation-header.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************/
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
//
//
//
//
//
//
//
//
//
//
//
//
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
    room: {
      type: Object,
      required: true
    },
    roomName: {
      type: String,
      required: true
    },
    vars: {
      type: Object,
      required: true
    },
    configs: {
      type: Object,
      required: true
    },
    typingUser: {
      type: String
    }
  },
  computed: _objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])('user', ['liveUsers'])), {}, {
    computedUser: function computedUser() {
      return this.room.isGroup || !this.room.member ? this.room : this.room.member;
    },
    roomMembers: function roomMembers() {
      if (this.room.memberCount <= 1) {
        return this.$t('chat.only_you_are_member');
      }

      if (this.room.members && this.room.members.length > 1) {
        return this.room.members[1].user.profile.name + this.$t('chat.and_n_other_members', {
          attribute: this.room.memberCount - 1
        });
      }

      return '';
    }
  }),
  methods: {
    isLiveOnline: function isLiveOnline(user) {
      return user && this.liveUsers.find(function (u) {
        return u.uuid === user.uuid;
      }) ? true : false;
    },
    goToGroup: function goToGroup() {
      this.$emit('goToGroup', this.room);
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/chat-box/group.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/chat-box/group.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************/
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    activeContainer: {
      type: String,
      "default": 'home',
      required: true
    },
    activeGroup: {
      type: [Object, null],
      "default": function _default() {
        return null;
      }
    },
    membersToAdd: {
      type: Array,
      "default": function _default() {
        return [];
      }
    },
    membersToRemove: {
      type: Array,
      "default": function _default() {
        return [];
      }
    }
  },
  data: function data() {
    return {
      formData: {
        uuid: null,
        name: '',
        isPublicGroup: false,
        members: []
      },
      showEditNameForm: false,
      isLoading: false
    };
  },
  watch: {
    activeContainer: function activeContainer(newVal, oldVal) {
      if (newVal === 'chatgroup' && newVal !== oldVal) {
        if (!this.activeGroup) {
          this.formData.uuid = null;
          this.formData.name = '';
          this.formData.isPublicGroup = false;
          this.formData.members = [];
        }
      }
    },
    activeGroup: function activeGroup(newValue, oldValue) {
      if (oldValue !== newValue) {
        if (newValue) {
          this.formData.uuid = newValue.uuid;
          this.formData.name = newValue.name;
          this.formData.members = newValue.members;
          this.getMembers();
        } else {
          this.formData.uuid = null;
          this.formData.name = '';
          this.formData.isPublicGroup = false;
          this.formData.members = [];
        }
      }
    },
    membersToAdd: {
      handler: function handler(newValue) {
        var _this = this;

        if (!(newValue && newValue.length)) {
          return;
        }

        newValue.forEach(function (m) {
          var foundIndex = _this.formData.members.findIndex(function (u) {
            return u.user.uuid === m.user.uuid;
          });

          if (foundIndex === -1) {
            _this.formData.members.push(_objectSpread({}, m));
          }
        });
      },
      deep: true
    },
    membersToRemove: {
      handler: function handler(newValue) {
        var _this2 = this;

        if (!(newValue && newValue.length)) {
          return;
        }

        newValue.forEach(function (m) {
          var foundIndex = _this2.formData.members.findIndex(function (u) {
            return u.user.uuid === m.user.uuid;
          });

          if (foundIndex !== -1) {
            _this2.formData.members.splice(foundIndex, 1);
          }
        });
      },
      deep: true
    }
  },
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])('user', ['hasRole'])),
  methods: _objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapActions"])('chat', ['CreateRoom', 'UpdateRoom', 'GetRoomMembers'])), {}, {
    goBack: function goBack() {
      this.formData.uuid = null;
      this.formData.name = '';
      this.formData.isPublicGroup = false;
      this.formData.members = [];
      this.$emit('goBack');
    },
    editName: function editName() {
      this.showEditNameForm = true;
    },
    updateName: function updateName() {
      var _this3 = this;

      this.isLoading = true;
      this.UpdateRoom({
        uuid: this.formData.uuid,
        name: this.formData.name
      }).then(function (response) {
        _this3.isLoading = false;
        _this3.showEditNameForm = false;
      })["catch"](function (error) {
        _this3.isLoading = false;
        formUtil.handleErrors(error);
      });
    },
    createGroup: function createGroup() {
      var _this4 = this;

      this.isLoading = true;
      this.CreateRoom({
        name: this.formData.name,
        isPublicGroup: this.formData.isPublicGroup,
        members: this.formData.members.map(function (m) {
          return m.user;
        })
      }).then(function (response) {
        _this4.isLoading = false;

        _this4.$emit('goToConversation', {
          room: response,
          user: null
        });
      })["catch"](function (error) {
        _this4.isLoading = false;
        formUtil.handleErrors(error);
      });
    },
    getMembers: function getMembers() {
      var _this5 = this;

      if (!this.activeGroup) {
        return;
      }

      this.isLoading = true;
      this.GetRoomMembers({
        uuid: this.activeGroup.uuid
      }).then(function (response) {
        _this5.isLoading = false;
        _this5.formData.members = response;
      })["catch"](function (error) {
        _this5.isLoading = false;
        formUtil.handleErrors(error);
      });
    }
  }),
  mounted: function mounted() {
    if (this.activeGroup) {
      this.getMembers();
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/chat-box/header.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/chat-box/header.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    activeContainer: {
      type: String,
      "default": 'home',
      required: true
    },
    configs: {
      type: Object,
      required: true
    },
    fullPage: {
      type: Boolean,
      "default": false
    }
  },
  computed: {
    computedTitle: function computedTitle() {
      return this.activeContainer === 'settings' ? $t('config.chat.chat_config') : this.activeContainer === 'chatgroup' ? $t('chat.chat_group') : $t('chat.live_chat');
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/chat-box/index.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/chat-box/index.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _components_FileUploader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @components/FileUploader */ "./resources/js/components/FileUploader.vue");
/* harmony import */ var vue_emoji_picker__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue-emoji-picker */ "./node_modules/vue-emoji-picker/dist-module/main.js");
/* harmony import */ var vue_emoji_picker__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(vue_emoji_picker__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./header */ "./resources/js/components/chat-box/header.vue");
/* harmony import */ var _settings__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./settings */ "./resources/js/components/chat-box/settings.vue");
/* harmony import */ var _group__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./group */ "./resources/js/components/chat-box/group.vue");
/* harmony import */ var _room_item__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./room-item */ "./resources/js/components/chat-box/room-item.vue");
/* harmony import */ var _conversation_header__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./conversation-header */ "./resources/js/components/chat-box/conversation-header.vue");
/* harmony import */ var _message_item__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./message-item */ "./resources/js/components/chat-box/message-item.vue");
/* harmony import */ var vue_at__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! vue-at */ "./node_modules/vue-at/dist/vue-at.js");
/* harmony import */ var vue_at__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(vue_at__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _js_event_bus__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @js/event-bus */ "./resources/js/event-bus.js");
/* harmony import */ var _core_utils_form__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @core/utils/form */ "./resources/js/core/utils/form.js");
/* harmony import */ var _core_utils_formatter__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @core/utils/formatter */ "./resources/js/core/utils/formatter.js");
/* harmony import */ var _js_vars__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @js/vars */ "./resources/js/vars.js");
/* harmony import */ var _core_filters_momentz__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @core/filters/momentz */ "./resources/js/core/filters/momentz.js");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "ChatBox",
  components: {
    FileUploader: _components_FileUploader__WEBPACK_IMPORTED_MODULE_1__["default"],
    EmojiPicker: vue_emoji_picker__WEBPACK_IMPORTED_MODULE_2___default.a,
    At: vue_at__WEBPACK_IMPORTED_MODULE_9___default.a,
    ChatBoxHeader: _header__WEBPACK_IMPORTED_MODULE_3__["default"],
    ChatBoxSettings: _settings__WEBPACK_IMPORTED_MODULE_4__["default"],
    ChatBoxGroup: _group__WEBPACK_IMPORTED_MODULE_5__["default"],
    ChatRoomItem: _room_item__WEBPACK_IMPORTED_MODULE_6__["default"],
    ConversationHeader: _conversation_header__WEBPACK_IMPORTED_MODULE_7__["default"],
    MessageItem: _message_item__WEBPACK_IMPORTED_MODULE_8__["default"]
  },
  props: {
    channel: {
      "default": null
    },
    boxVisibility: {
      type: Boolean,
      "default": false
    },
    fullPage: {
      type: Boolean,
      "default": false
    },
    meeting: {
      type: Object,
      "default": function _default() {
        return {};
      }
    }
  },
  data: function data() {
    return {
      isBoxShown: false,
      isSearchShown: false,
      showChatOptions: false,
      largeChatBox: false,
      searched: false,
      newChatScreen: false,
      newGroupScreen: false,
      cbHeaderTitle: $t('chat.live_chat'),
      searchTerm: '',
      searchTermEmoji: '',
      activeContainer: 'home',
      members: [],
      newMessage: {
        message: '',
        attachments: [],
        updated: false
      },
      newMessageRequestUUID: uuid(),
      activeConversation: null,
      activeGroup: null,
      activeGroupMembersToAdd: [],
      activeGroupMembersToRemove: [],
      uploadURL: '',
      formErrors: {},
      preRequisite: {
        uploaderConfig: {
          module: '',
          token: '',
          allowedExtensions: '',
          allowedMaxFileSize: null,
          maxNoOfFiles: 1,
          uuid: uuid()
        }
      },
      goingToConversation: false,
      isFetching: false,
      noMoreMessages: false,
      newUnreadMessageOnFeed: false,
      showScrollToLatestBtn: false,
      chatRoomChannel: null,
      typingUser: null,
      typingUserTimeout: null,
      initialNewMessage: null,
      firstFetch: true,
      fileIcons: _js_vars__WEBPACK_IMPORTED_MODULE_13__["fileIcons"],
      fileMimeTypes: _js_vars__WEBPACK_IMPORTED_MODULE_13__["fileMimeTypes"]
    };
  },
  watch: {
    boxVisibility: function boxVisibility(newVal, oldVal) {
      this.isBoxShown = newVal;

      if (this.isBoxShown) {
        document.body.classList.add("chat-box-shown");
      }
    },
    activeChatUser: function activeChatUser(newVal, oldVal) {
      if (newVal !== null && (!oldVal || oldVal !== null && newVal.uuid !== oldVal.uuid)) {
        this.goToConversation({
          user: newVal
        });
      }
    },
    activeChatRoom: function activeChatRoom(newVal, oldVal) {
      if (this.goingToConversation === false && newVal !== null && (!oldVal || oldVal !== null && newVal.uuid !== oldVal.uuid)) {
        this.goToConversation({
          room: newVal
        });
      }
    }
  },
  computed: _objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])('config', ['vars', 'configs', 'uiConfigs'])), Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])('user', {
    'userUuid': 'uuid'
  })), Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])('user', ['profile', 'username'])), Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])('chat', ['rooms', 'roomsPageMeta', 'roomsSearch', 'messages', 'messagesPageMeta', 'messagesSearch', 'activeChatRoom', 'activeChatUser'])), {}, {
    user: function user() {
      return {
        uuid: this.userUuid,
        username: this.username,
        name: this.profile.name,
        profile: this.profile
      };
    },
    hasMessages: function hasMessages() {
      return this.activeConversation && this.messages.data;
    },
    computedParticipants: function computedParticipants() {
      if (this.activeConversation) {
        return this.activeConversation.members;
      }

      return [];
    },
    enterToSubmit: function enterToSubmit() {
      return this.configs.chat && this.configs.chat.enterToSubmit;
    }
  }),
  methods: _objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapActions"])('chat', ['GetRooms', 'GetRoom', 'AddMemberToRoom', 'RemoveMemberFromRoom', 'SearchRooms', 'SearchMessages', 'GetMessages', 'SendMessage', 'PutMessageToFeed', 'PatchMessageInFeed', 'ResetMessage', 'SetMessage', 'ResetTotalUnreadCount', 'SetActiveChatRoom', 'SetActiveChatUser', 'ResetActiveChatRoomAndUser', 'SearchRoomMembers'])), {}, {
    // TOGGLE & HIDE SHOW METHODS
    hideChatBox: function hideChatBox() {
      var _this = this;

      this.isBoxShown = false;
      this.ResetActiveChatRoomAndUser();
      setTimeout(function () {
        _this.$emit('boxHidden');
      }, 200);
    },
    showChatBox: function showChatBox() {
      this.isBoxShown = true;
      this.$emit('boxShown');
    },
    hideSearch: function hideSearch() {
      this.searchTerm = '';
      this.searched = false;
      this.isSearchShown = false;
      this.showChatOptions = true;
      this.newChatScreen = false;
      this.newGroupScreen = false;

      if (this.activeContainer === 'home') {
        this.fetchRooms(true);
        this.scrollTo("vue-scroll-rooms", 0);
      } else if (this.activeContainer === 'conversation') {
        this.fetchMessages(true);
      }
    },
    toggleSearch: function toggleSearch() {
      var _this2 = this;

      var startNewChat = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      var startNewGroup = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      this.searchTerm = '';
      this.searched = false;
      this.isSearchShown = !this.isSearchShown;

      if (this.isSearchShown) {
        this.newChatScreen = startNewChat;
        this.newGroupScreen = startNewGroup;
        this.showChatOptions = !(startNewChat || startNewGroup);
        this.$nextTick(function () {
          _this2.$refs["searchTerm"].focus();
        });
      } else {
        this.newChatScreen = false;
        this.newGroupScreen = false;
        this.showChatOptions = true;

        if (this.activeContainer === 'home') {
          this.fetchRooms(true);
          this.scrollTo("vue-scroll-rooms", 0);
        } else if (this.activeContainer === 'conversation') {
          this.fetchMessages(true);
        }
      }
    },
    startNewChat: function startNewChat() {
      this.toggleSearch(true);
    },
    // SWITCH TO VIEW METHODS
    goHome: function goHome() {
      var _this3 = this;

      this.lastActiveContainer = this.activeContainer;
      this.activeContainer = 'home';
      this.ResetActiveChatRoomAndUser();

      if (this.lastActiveContainer === 'conversation') {
        this.leaveChatRoomChannel(this.activeConversation.chatRoom);
        this.hideSearch();

        if (this.searchRoomObj && this.searchRoomObj.searched) {
          this.searchTerm = this.searchRoomObj.searchTerm;
          this.searched = this.searchRoomObj.searched;
          this.isSearchShown = true;
          this.showChatOptions = false;
        } else {
          this.fetchRooms();
        }
      } else {
        this.fetchRooms();
      }

      this.scrollTo("vue-scroll-rooms", 0);
      setTimeout(function () {
        _this3.activeConversation = null;
      }, 100);
    },
    goToConversation: function goToConversation(_ref) {
      var _this4 = this;

      var room = _ref.room,
          user = _ref.user;
      var fetchRoomForUser = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      this.goingToConversation = true;

      var swtichToConversationTab = function swtichToConversationTab() {
        setTimeout(function () {
          _this4.activeContainer = 'conversation';

          if (_this4.isSearchShown) {
            _this4.searchRoomObj = {
              searchTerm: _this4.searchTerm,
              searched: _this4.searched
            };

            _this4.hideSearch();
          } else {
            _this4.searchRoomObj = {
              searchTerm: null,
              searched: null
            };
          }

          _this4.goingToConversation = false;
          window.setTimeout(function () {
            _this4.scrollToLatestMessages();

            _this4.focusNewMessage();

            _this4.showScrollToLatestBtn = false;
            _this4.newUnreadMessageOnFeed = false;
          }, 300);
        }, 100);
      };

      this.activeConversation = {
        chatRoom: room || null,
        user: room && room.isGroup ? null : user || null,
        members: room && room.isGroup ? room.members : user ? [user] : []
      };
      this.ResetMessage();

      if (room) {
        if (!room.hasLeft) {
          this.joinChatRoomChannel(room);
        }

        this.GetRoom({
          uuid: room.uuid
        }).then(function (response) {
          var newChatRoomInfo = response.chatRoom;
          var newChats = response.chats;
          _this4.activeConversation.chatRoom = newChatRoomInfo;

          if (room.hasLeft && !newChatRoomInfo.hasLeft) {
            _this4.joinChatRoomChannel(newChatRoomInfo);
          }

          if (newChatRoomInfo.hasLeft) {
            _this4.leaveChatRoomChannel(newChatRoomInfo);
          }

          _this4.SetMessage({
            data: _toConsumableArray(newChats),
            meta: _objectSpread(_objectSpread({}, _this4.messages.meta), {}, {
              total: newChats.length,
              lastItemUuid: newChats.length ? newChats[newChats.length - 1].uuid : null
            })
          });

          if (_this4.activeConversation.chatRoom && _this4.activeConversation.chatRoom.hasOwnProperty('chats')) {
            delete _this4.activeConversation.chatRoom.chats;
          }

          _this4.noMoreMessages = false;

          _this4.SetActiveChatRoom(_this4.activeConversation.chatRoom);

          swtichToConversationTab();
        })["catch"](function (error) {
          _this4.goingToConversation = false;
          formUtil.handleErrors(error);
        });
      } else {
        this.SetActiveChatUser(this.activeConversation.user);
        this.fetchMessages(true);
        swtichToConversationTab();
      }
    },
    goToSettings: function goToSettings() {
      var _this5 = this;

      this.lastActiveContainer = this.activeContainer;
      this.activeContainer = 'settings';
      this.scrollTo("vue-scroll-rooms", 0);
      setTimeout(function () {
        if (_this5.lastActiveContainer === 'conversation') {
          _this5.ResetActiveChatRoomAndUser();

          _this5.leaveChatRoomChannel(_this5.activeConversation.chatRoom);
        }

        if (_this5.isSearchShown) {
          _this5.hideSearch();
        }

        _this5.activeConversation = null;
      }, 100);
    },
    goToCreateGroup: function goToCreateGroup() {
      this.activeGroup = null;
      this.goToGroup();
    },
    goToGroup: function goToGroup() {
      var _this6 = this;

      var activeGroup = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
      this.activeGroupMembersToAdd = [];
      this.activeGroupMembersToRemove = [];
      this.lastActiveContainer = this.activeContainer;
      this.activeContainer = 'chatgroup';
      this.activeGroup = activeGroup;
      this.scrollTo("vue-scroll-rooms", 0);

      if (this.isSearchShown) {
        this.hideSearch();
      }

      if (!activeGroup) {
        this.$nextTick(function () {
          window.setTimeout(function () {
            _this6.$refs["chatBoxGroup"].$refs["groupName"].focus();
          }, 300);
        });
      }
    },
    showAddMemberScreen: function showAddMemberScreen() {
      this.activeGroupMembersToAdd = [];
      this.activeGroupMembersToRemove = [];
      this.toggleSearch(false, true);
    },
    addToGroup: function addToGroup(data) {
      var _this7 = this;

      if (data && data.user) {
        if (this.activeGroup) {
          this.isLoading = true;
          this.AddMemberToRoom({
            uuid: this.activeGroup.uuid,
            members: [data.user]
          }).then(function (response) {
            _this7.isLoading = false;
            _this7.activeGroup = response;
            _this7.activeConversation.chatRoom = response;
            _this7.activeConversation.chatRoom.members = response.members;
          })["catch"](function (error) {
            _this7.isLoading = false;
            formUtil.handleErrors(error);
          });
        } else {
          this.activeGroupMembersToAdd.push(data);
        }
      }

      this.toggleSearch();
    },
    removeMemberFromGroup: function removeMemberFromGroup(data) {
      var _this8 = this;

      this.activeGroupMembersToAdd = [];
      this.activeGroupMembersToRemove = [];

      if (data && data.user) {
        if (this.activeGroup) {
          this.isLoading = true;
          this.RemoveMemberFromRoom({
            uuid: this.activeGroup.uuid,
            members: [data.user]
          }).then(function (response) {
            _this8.isLoading = false;
            _this8.activeGroup = response;
            _this8.activeConversation.chatRoom = response;
          })["catch"](function (error) {
            _this8.isLoading = false;
            formUtil.handleErrors(error);
          });
        } else {
          this.activeGroupMembersToRemove.push(data);
        }
      }
    },
    goBack: function goBack() {
      if (this.lastActiveContainer) {
        this.activeContainer = this.lastActiveContainer;
      } else {
        this.goHome();
      }
    },
    // FETCH DATA METHODS
    searchTermChanged: _.debounce(function () {
      if (!this.searchTerm || this.searchTerm.length < 2) {
        return;
      }

      if (this.activeContainer === 'home' || this.activeContainer === 'chatgroup') {
        this.searchRooms();
        this.scrollTo("vue-scroll-rooms", 0);
      } else if (this.activeContainer === 'conversation') {
        this.searchMessages();
      }
    }, 500),
    handleAt: function handleAt(chunk) {
      var _this9 = this;

      if (!chunk || chunk.length < 2) {
        if (this.activeConversation) {
          this.activeConversation.members = [];
        }

        return;
      }

      if (!this.activeConversation.chatRoom) {
        this.activeConversation.members = [];
        return;
      }

      this.SearchRoomMembers({
        uuid: this.activeConversation.chatRoom.uuid,
        term: chunk
      }).then(function (response) {
        _this9.activeConversation.members = response;
      })["catch"](function (error) {
        formUtil.handleErrors(error);

        if (_this9.activeConversation) {
          _this9.activeConversation.members = [];
        }

        return;
      });
    },
    fetchRooms: function fetchRooms() {
      var _this10 = this;

      var reset = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
      this.isFetching = true;

      var query = _objectSpread(_objectSpread({}, this.roomsPageMeta), {}, {
        lastItemUuid: reset ? null : this.rooms.meta.lastItemUuid,
        perPage: this.rooms.meta.perPage
      });

      this.GetRooms(query).then(function (response) {
        _this10.isFetching = false;
      })["catch"](function (error) {
        _this10.isFetching = false;
        formUtil.handleErrors(error);
      });
    },
    searchRooms: function searchRooms() {
      var _this11 = this;

      this.isFetching = true;
      this.SearchRooms(this.searchTerm).then(function (response) {
        _this11.searched = true;
        _this11.showChatOptions = false;
        _this11.isFetching = false;
      })["catch"](function (error) {
        _this11.isFetching = false;
        formUtil.handleErrors(error);
      });
    },
    searchMessages: function searchMessages() {
      var _this12 = this;

      if (!this.activeConversation.chatRoom) {
        return;
      }

      this.isFetching = true;
      this.SearchMessages({
        q: this.searchTerm,
        chatRoom: this.activeConversation.chatRoom.uuid
      }).then(function (response) {
        _this12.searched = true;
        _this12.isFetching = false;
        window.setTimeout(function () {
          _this12.scrollToLatestMessages();

          _this12.showScrollToLatestBtn = false;
          _this12.newUnreadMessageOnFeed = false;
        }, 300);
      })["catch"](function (error) {
        _this12.isFetching = false;
        formUtil.handleErrors(error);
      });
    },
    fetchMessages: function fetchMessages() {
      var _this13 = this;

      var reset = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

      if (!this.activeConversation.chatRoom && !this.activeConversation.user) {
        return;
      }

      this.isFetching = true;
      this.noMoreMessages = false;
      this.newUnreadMessageOnFeed = false;

      var query = _objectSpread(_objectSpread({}, this.messagesPageMeta), {}, {
        lastItemUuid: reset ? null : this.messages.meta.lastItemUuid,
        perPage: this.messages.meta.perPage,
        chatRoom: this.activeConversation.chatRoom ? this.activeConversation.chatRoom.uuid : null,
        user: this.activeConversation.user ? this.activeConversation.user.uuid : null
      });

      this.GetMessages(query).then(function (response) {
        _this13.isFetching = false;

        if (!response.data.length) {
          _this13.noMoreMessages = true;
        }

        if (reset) {
          window.setTimeout(function () {
            _this13.scrollToLatestMessages();

            _this13.showScrollToLatestBtn = false;
            _this13.newUnreadMessageOnFeed = false;
          }, 300);
        }

        if (!_this13.searched) {
          _this13.focusNewMessage();
        }
      })["catch"](function (error) {
        _this13.isFetching = false;
        formUtil.handleErrors(error);
      });
    },
    chatRoomUpdated: function chatRoomUpdated() {
      var _this14 = this;

      this.GetRoom({
        uuid: this.activeConversation.chatRoom.uuid
      }).then(function (response) {
        var newChatRoomInfo = response.chatRoom;
        _this14.activeConversation.chatRoom = newChatRoomInfo;

        if (response.hasLeft) {
          _this14.leaveChatRoomChannel(newChatRoomInfo);
        }
      })["catch"](function (error) {
        formUtil.handleErrors(error);
      });
    },
    // POST DATA & JOIN LEAVE METHODS
    postMessage: function postMessage() {
      var _this15 = this;

      if (!this.newMessage.message) {
        return;
      }

      this.newMessage.message = this.removeHtmlTags(this.newMessage.message.trim());
      var messageObj = {
        uuid: this.newMessageRequestUUID,
        message: this.newMessage.message,
        user: this.user,
        sentAt: _core_filters_momentz__WEBPACK_IMPORTED_MODULE_14__["now"](this.vars.serverDateTimeFormat),
        status: 'sending'
      };
      this.newMessageRequestUUID = uuid();
      this.newMessage = _.cloneDeep(this.initialNewMessage);
      this.noMoreMessages = false;
      this.putMessageToFeed(messageObj);
      window.setTimeout(function () {
        _this15.scrollTo("vue-scroll-messages", 100);

        _this15.focusNewMessage();
      }, 300);
      this.SendMessage({
        message: messageObj.message,
        chatRoom: this.activeConversation.chatRoom,
        user: this.activeConversation.user
      }).then(function (response) {
        _this15.messageSentSuccess(messageObj, response);
      })["catch"](function (error) {
        _this15.messageSendingFailed(messageObj, error);
      });
    },
    attachmentUploadStarted: function attachmentUploadStarted(count) {
      var _this16 = this;

      if (!this.newMessage.attachments || this.newMessage.attachments.length) {
        return;
      }

      var messageObj = {
        uuid: this.newMessageRequestUUID,
        message: null,
        user: this.user,
        sentAt: moment.utc().format(this.vars.serverDateTimeFormat),
        status: 'sending'
      };
      this.newMessageRequestUUID = uuid();
      this.newMessage = _.cloneDeep(this.initialNewMessage);
      this.putMessageToFeed(messageObj);
      window.setTimeout(function () {
        _this16.scrollTo("vue-scroll-messages", 100);

        _this16.focusNewMessage();
      }, 300);
    },
    attachmentUploaded: function attachmentUploaded(response) {
      if (!(response && response.meta && response.meta.requestUuid)) {
        this.$toasted.error($t('misc.error_unknown'), this.$toastConfig.error);
        return;
      }

      _js_event_bus__WEBPACK_IMPORTED_MODULE_10__["default"].$emit('RESET_UPLOAD');
      this.messageSentSuccess({
        uuid: response.meta.requestUuid
      }, response);
    },
    attachmentUploadError: function attachmentUploadError(error) {
      if (!(error && error.meta && error.meta.requestUuid)) {
        this.$toasted.error($t('misc.error_unknown'), this.$toastConfig.error);
        return;
      }

      _js_event_bus__WEBPACK_IMPORTED_MODULE_10__["default"].$emit('RESET_UPLOAD');

      if (error) {
        this.messageSendingFailed({
          uuid: error.meta.requestUuid
        }, error);
      }
    },
    messageSentSuccess: function messageSentSuccess(oldMessage, newMessageResponse) {
      var _this17 = this;

      var newMessage = newMessageResponse.data;
      this.PatchMessageInFeed({
        old: oldMessage,
        "new": _objectSpread(_objectSpread({}, newMessage), {}, {
          newUuid: newMessage.uuid,
          uuid: oldMessage.uuid
        })
      });

      if (!this.activeConversation.chatRoom) {
        this.joinChatRoomChannel(newMessage.chatRoom);
        this.GetRoom({
          uuid: newMessage.chatRoom.uuid
        }).then(function (response) {
          _this17.activeConversation.chatRoom = response.chatRoom;

          if (_this17.activeConversation.chatRoom && _this17.activeConversation.chatRoom.hasOwnProperty('chats')) {
            delete _this17.activeConversation.chatRoom.chats;
          }
        })["catch"](function (error) {
          formUtil.handleErrors(error);
        });
      }
    },
    messageSendingFailed: function messageSendingFailed(oldMessage, error) {
      this.PatchMessageInFeed({
        old: oldMessage,
        "new": _objectSpread(_objectSpread({}, oldMessage), {}, {
          status: 'error',
          error: formUtil.getError(error)
        })
      });
    },
    noNeedCallback: function noNeedCallback() {
      this.afterUploadComplete();
    },
    joinChatRoomChannel: function joinChatRoomChannel(chatRoom) {
      window.EchoOpts.subscriptions.chatRoom = window.Echo.join("ChatRoom.".concat(chatRoom.uuid));
      this.chatRoomChannel = window.EchoOpts.subscriptions.chatRoom;
      this.chatRoomChannel.listen('ChatMessageSentToRoom', this.newMessageReceived);
      this.chatRoomChannel.listen('ChatRoomUpdated', this.chatRoomUpdated);
      this.chatRoomChannel.listenForWhisper('typing', this.anotherUserTyping);
    },
    leaveChatRoomChannel: function leaveChatRoomChannel(chatRoom) {
      if (this.chatRoomChannel) {
        this.chatRoomChannel.stopListening('ChatMessageSentToRoom');
        this.chatRoomChannel = null;
      }

      if (chatRoom) {
        window.Echo.leave("ChatRoom.".concat(chatRoom.uuid));
      }

      if (window.EchoOpts && window.EchoOpts.subscriptions) {
        window.EchoOpts.subscriptions.chatRoom = null;
      }
    },
    // HELPER METHODS OR EVENT CALLBACKS
    enterPressedEvt: function enterPressedEvt(fnCallback, event) {
      if (this.enterToSubmit) {
        return Object(_core_utils_form__WEBPACK_IMPORTED_MODULE_11__["enterPressed"])(fnCallback, event);
      }

      return false;
    },
    putMessageToFeed: function putMessageToFeed(message) {
      if (this.messages.data.findIndex(function (c) {
        return c.uuid === message.uuid;
      }) !== -1) {
        return;
      }

      this.PutMessageToFeed(message);
    },
    focusNewMessage: function focusNewMessage() {
      if (this.$refs["newMessageInput"]) {
        this.$refs['newMessageInput'].focus();
      }
    },
    scrollTo: function scrollTo(refId, pos) {
      if (this.$refs[refId]) {
        this.$refs[refId].scrollTo({
          y: "".concat(pos, "%")
        }, 300);
      }
    },
    scrollToLatestMessages: function scrollToLatestMessages() {
      this.scrollTo("vue-scroll-messages", 100);
    },
    handleMessageScroll: _.debounce(function (vertical, horizontal) {
      if (vertical.process > 0.95) {
        this.showScrollToLatestBtn = false;
        this.newUnreadMessageOnFeed = false;
      } else {
        if (!this.searched || this.searched && vertical.process !== 0) {
          this.showScrollToLatestBtn = true;
        }
      }

      if (vertical.process < 0.5 && !this.isFetching && !this.noMoreMessages) {
        this.fetchMessages();
      }
    }, 500),
    handleRoomsScroll: _.debounce(function (vertical, horizontal) {
      if (vertical.process > 0.5 && !this.isFetching) {
        this.fetchRooms();
      }
    }, 500),
    isTyping: _.throttle(function () {
      if (this.chatRoomChannel) {
        this.chatRoomChannel.whisper('typing', {
          user: this.user
        });
      }
    }, 500, {
      'leading': true,
      'trailing': false
    }),
    anotherUserTyping: function anotherUserTyping(_ref2) {
      var _this18 = this;

      var user = _ref2.user;
      this.typingUser = user.name;

      if (this.typingUserTimeout) {
        clearTimeout(this.typingUserTimeout);
      }

      this.typingUserTimeout = setTimeout(function () {
        _this18.typingUser = null;
      }, 1500);
    },
    newMessageReceived: function newMessageReceived(message) {
      var _this19 = this;

      if (!message) {
        return;
      }

      message = Object(_core_utils_formatter__WEBPACK_IMPORTED_MODULE_12__["formatKeysToCamelCase"])(message);

      if (message && message.user && message.user.uuid !== this.userUuid) {
        this.putMessageToFeed(message); // playIncomingMessage()

        window.setTimeout(function () {
          var _this19$$refs$vueScr = _this19.$refs["vue-scroll-messages"].getScrollProcess(),
              v = _this19$$refs$vueScr.v,
              h = _this19$$refs$vueScr.h;

          if (v > 0.5) {
            _this19.scrollToLatestMessages();
          } else {
            _this19.showScrollToLatestBtn = true;
            _this19.newUnreadMessageOnFeed = true;
          }
        }, 300);
      }
    },
    appendEmoji: function appendEmoji(emoji) {
      this.newMessage.message += emoji;
    },
    removeHtmlTags: function removeHtmlTags(content) {
      content = content ? content.replace(/<[^>]+/gmi, function (match) {
        return match.replace(/ on\w+="[^"]*"/gmi, '');
      }).replace(/<(?!\/?b>|\/?p>|\/?strong>|\/?div>|\/?br>|\/?span>|\/?em>|\/?i>)[^>]+>/gmi, '') : content;
      return content;
    },
    doInit: function doInit() {
      var _this20 = this;

      this.initialNewMessage = _.cloneDeep(this.newMessage);

      if (this.activeChatRoom) {
        this.goToConversation({
          room: this.activeChatRoom
        });
      } else if (this.activeChatUser) {
        this.goToConversation({
          user: this.activeChatUser
        });
      } else {
        this.fetchRooms();
      }

      if (this.isBoxShown) {
        document.body.classList.add("chat-box-shown");
      }

      setTimeout(function () {
        _this20.showChatOptions = _this20.boxVisibility;
      }, 1000);
    }
  }),
  directives: {
    focus: {
      inserted: function inserted(el) {
        el.focus();
      }
    }
  },
  mounted: function mounted() {
    var _this21 = this;

    setTimeout(function () {
      _this21.isBoxShown = _this21.boxVisibility;
    }, 100);
    setTimeout(function () {
      _this21.doInit();
    }, 200);
  },
  created: function created() {
    if (this.configs.system && this.configs.system.allowedFileExtensions) {
      this.preRequisite.uploaderConfig.allowedExtensions = this.configs.system.allowedFileExtensions;
    }

    if (this.configs.system && this.configs.system.postMaxSize) {
      this.preRequisite.uploaderConfig.allowedMaxFileSize = this.configs.system.postMaxSize;
    }
  },
  beforeDestroy: function beforeDestroy() {
    document.body.classList.remove("chat-box-shown");

    if (window.Echo && window.EchoOpts) {
      if (window.EchoOpts.subscriptions && window.EchoOpts.subscriptions.chatRoom) {
        window.EchoOpts.subscriptions.chatRoom.stopListening('ChatMessageSentToRoom');
        window.EchoOpts.subscriptions.chatRoom = null;
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/chat-box/message-item.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/chat-box/message-item.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    message: {
      type: Object,
      required: true
    },
    fileIcons: {
      type: Object,
      required: true
    },
    fileMimeTypes: {
      type: Object,
      required: true
    },
    vars: {
      type: Object,
      "default": function _default() {
        return {};
      }
    }
  },
  data: function data() {
    return {
      messageStatusIcons: {
        'sending': 'far fa-clock',
        'sent': 'fas fa-check',
        'delivered': 'fas fa-check-double',
        'read': 'fas fa-check-double',
        'error': 'fas fa-exclamation-triangle'
      }
    };
  },
  computed: {
    hasAttachment: function hasAttachment() {
      return (!this.message.message || this.message.message === '%%chat_attachment_%%') && this.message.attachments && this.message.attachments.length;
    }
  },
  methods: {
    removeHtmlTags: function removeHtmlTags(content) {
      if (!content) {
        return content;
      }

      content = content.replace(/<[^>]+/gmi, function (match) {
        return match.replace(/ on\w+="[^"]*"/gmi, '');
      }).replace(/<(?!\/?>)[^>]+>/gmi, ' ').replace(/\s+/gmi, ' ');
      var tmp = document.createElement("DIV");
      tmp.innerHTML = content;
      return tmp.textContent || tmp.innerText || "";
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/chat-box/room-item.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/chat-box/room-item.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************/
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    room: {
      type: Object,
      required: true
    },
    roomName: {
      type: String,
      required: true
    },
    showLastMessage: {
      type: Boolean,
      "default": true
    },
    clickAction: {
      type: String,
      "default": 'goToConversation'
    },
    showCustomAction: {
      type: Boolean,
      "default": false
    },
    clickActionOnCustom: {
      type: String,
      "default": 'removeMember'
    },
    customActionIcon: {
      type: String,
      "default": 'fas fa-times'
    },
    vars: {
      type: Object,
      "default": function _default() {
        return {};
      }
    }
  },
  computed: _objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])('user', {
    'userUuid': 'uuid'
  })), {}, {
    computedAvatar: function computedAvatar() {
      return this.room.isGroup || !this.room.member ? this.room : this.room.member;
    }
  }),
  methods: {
    removeHtmlTags: function removeHtmlTags(content) {
      if (!content) {
        return content;
      }

      content = content.replace(/<(?!\/?>)[^>]+>/gmi, ' ').replace(/\s+/gmi, ' ');
      var tmp = document.createElement("DIV");
      tmp.innerHTML = content;
      return tmp.textContent || tmp.innerText || "";
    },
    onClickRoomItem: function onClickRoomItem() {
      if (this.computedAvatar.uuid === this.userUuid) {
        return;
      }

      if (this.clickAction === 'addToGroup') {
        this.$emit(this.clickAction, {
          room: null,
          user: this.room.member ? this.room.member : this.room
        });
      } else {
        if (this.room.isGroup || this.room.member) {
          this.$emit(this.clickAction, {
            room: this.room,
            user: null
          });
        } else {
          this.$emit(this.clickAction, {
            room: null,
            user: this.room
          });
        }
      }
    },
    doCustomAction: function doCustomAction() {
      this.$emit(this.clickActionOnCustom, {
        room: this.room,
        user: this.room.member ? this.room.member : this.room
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/chat-box/settings.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/chat-box/settings.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _mixins_config_form__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @mixins/config-form */ "./resources/js/mixins/config-form.js");
/* harmony import */ var _core_filters_momentz__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @core/filters/momentz */ "./resources/js/core/filters/momentz.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  "extends": _mixins_config_form__WEBPACK_IMPORTED_MODULE_0__["default"],
  props: {
    activeContainer: {
      type: String,
      "default": 'home',
      required: true
    }
  },
  watch: {
    activeContainer: function activeContainer(newVal, oldVal) {
      if (newVal === 'settings' && newVal !== oldVal) {
        this.formData = Object.assign({}, this.formData, _.cloneDeep(this.initialFormData));
      }
    }
  },
  data: function data() {
    return {
      now: _core_filters_momentz__WEBPACK_IMPORTED_MODULE_1__["now"]({
        moment: true
      }),
      formData: {
        chat: {
          enableAutoOpen: false,
          enterToSubmit: false,
          muteSoundNotification: false
        },
        override: true
      },
      useUserPreference: true
    };
  },
  methods: {
    afterSubmitSuccess: function afterSubmitSuccess() {
      this.$emit('goHome');
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/chat-box/group.vue?vue&type=style&index=0&lang=scss&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-2!./node_modules/sass-loader/dist/cjs.js??ref--9-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/chat-box/group.vue?vue&type=style&index=0&lang=scss& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Muli:300,400,600,700,800,900);", ""]);

// module
exports.push([module.i, ".chatgroup-wrapper {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  max-height: 100%;\n  overflow: hidden;\n}\n.chatgroup-wrapper .chatgroup {\n  display: flex;\n  flex-grow: 1;\n  justify-content: stretch;\n  align-items: stretch;\n  height: 100%;\n  max-height: 100%;\n  overflow: hidden;\n  position: relative;\n  display: flex;\n  flex-direction: row;\n}\n.chatgroup-wrapper .chatgroup .chatgroup-form .chatgroup-name {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  padding: 0 0.85rem;\n}\n.chatgroup-wrapper .chatgroup .chatgroup-form .chatgroup-name h6 {\n  line-height: 2rem;\n  color: rgba(255, 255, 255, 0.8);\n  margin-bottom: 0;\n  flex-grow: 1;\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n}\n.chatgroup-wrapper .chatgroup .chatgroup-form .chatgroup-name input.form-control {\n  background: rgba(0, 0, 0, 0.1);\n  border: 1px solid transparent;\n  border-top-color: rgba(0, 0, 0, 0.05);\n  border-bottom-color: rgba(0, 0, 0, 0.05);\n  width: 100%;\n  height: 100%;\n  color: #fff;\n}\n.chatgroup-wrapper .chatgroup .chatgroup-form .chatgroup-name input.form-control:hover {\n  background: rgba(0, 0, 0, 0.15);\n}\n.chatgroup-wrapper .chatgroup .chatgroup-form .chatgroup-name input.form-control:focus, .chatgroup-wrapper .chatgroup .chatgroup-form .chatgroup-name input.form-control:active {\n  background: rgba(0, 0, 0, 0.35);\n}\n.chatgroup-wrapper .chatgroup .chatgroup-form .chatgroup-name input.form-control::-moz-placeholder {\n  color: #6c7580;\n}\n.chatgroup-wrapper .chatgroup .chatgroup-form .chatgroup-name input.form-control:-ms-input-placeholder {\n  color: #6c7580;\n}\n.chatgroup-wrapper .chatgroup .chatgroup-form .chatgroup-name input.form-control::placeholder {\n  color: #6c7580;\n}\n.chatgroup-wrapper .chatgroup .chatgroup-form .chatgroup-name .chatgroup-actions {\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-end;\n}\n.chatgroup-wrapper .chatgroup .chatgroup-form .chatgroup-name .chatgroup-actions > button {\n  flex-grow: 1;\n  background: transparent;\n  border: none;\n  color: white;\n  white-space: nowrap;\n  width: 40px;\n  height: 40px;\n  border-radius: 30px;\n}\n.chatgroup-wrapper .chatgroup .chatgroup-form .chatgroup-name .chatgroup-actions > button:hover {\n  background: rgba(0, 0, 0, 0.2);\n  padding-bottom: 2px;\n}\n.chatgroup-wrapper .chatgroup .chatgroup-form .chatgroup-members-header {\n  border-bottom: 1px solid rgba(0, 0, 0, 0.4);\n}\n.chatgroup-wrapper .chatgroup-footer {\n  box-shadow: 0 -2px 6px 0 rgba(0, 0, 0, 0.4);\n  z-index: 1;\n  display: flex;\n  flex-direction: row;\n  flex-wrap: nowrap;\n  justify-content: center;\n}\n.chatgroup-wrapper .chatgroup-footer button {\n  flex: 1 0 auto;\n  margin: 0;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/chat-box/settings.vue?vue&type=style&index=0&lang=scss&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-2!./node_modules/sass-loader/dist/cjs.js??ref--9-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/chat-box/settings.vue?vue&type=style&index=0&lang=scss& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".settings-wrapper {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  max-height: 100%;\n  overflow: hidden;\n}\n.settings-wrapper .settings {\n  display: flex;\n  flex-grow: 1;\n  justify-content: stretch;\n  align-items: stretch;\n  height: 100%;\n  max-height: 100%;\n  overflow: hidden;\n  position: relative;\n  padding: 0.85rem;\n  display: flex;\n  flex-direction: row;\n}\n.settings-wrapper .settings .switch-wrapper > .input-group-material-label {\n  padding-left: 0;\n}\n.settings-wrapper .settings-footer {\n  box-shadow: 0 -2px 6px 0 rgba(0, 0, 0, 0.4);\n  z-index: 1;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/chat-box/group.vue?vue&type=style&index=0&lang=scss&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-2!./node_modules/sass-loader/dist/cjs.js??ref--9-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/chat-box/group.vue?vue&type=style&index=0&lang=scss& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--9-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--9-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./group.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/chat-box/group.vue?vue&type=style&index=0&lang=scss&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/chat-box/settings.vue?vue&type=style&index=0&lang=scss&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-2!./node_modules/sass-loader/dist/cjs.js??ref--9-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/chat-box/settings.vue?vue&type=style&index=0&lang=scss& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--9-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--9-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./settings.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/chat-box/settings.vue?vue&type=style&index=0&lang=scss&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/chat-box/conversation-header.vue?vue&type=template&id=2ce8a029&":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/chat-box/conversation-header.vue?vue&type=template&id=2ce8a029& ***!
  \*******************************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "conversation-header" }, [
    _c(
      "div",
      { staticClass: "room-thumb" },
      [_c("user-avatar", { attrs: { user: _vm.computedUser, size: 40 } })],
      1
    ),
    _vm._v(" "),
    _c("div", { staticClass: "room-details" }, [
      _c("div", { staticClass: "title-row" }, [
        _c("h6", { staticClass: "room-title" }, [_vm._v(_vm._s(_vm.roomName))])
      ]),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "meta-row" },
        [
          !_vm.room.isGroup && !_vm.typingUser
            ? [
                _vm.isLiveOnline(_vm.computedUser)
                  ? _c("span", [_vm._v(_vm._s(_vm.$t("general.online")))])
                  : _c("span", [_vm._v(_vm._s(_vm.$t("general.offline")))])
              ]
            : _vm.room.isGroup
            ? [
                _vm.typingUser
                  ? [
                      _c("span", { staticClass: "typing-indicator" }, [
                        _vm._v(
                          _vm._s(_vm.typingUser) +
                            " " +
                            _vm._s(_vm.$t("general.is_typing"))
                        )
                      ]),
                      _vm._v(" "),
                      _c("span", [_vm._v("  ")])
                    ]
                  : _vm.roomMembers
                  ? _c("span", [_vm._v(_vm._s(_vm.roomMembers))])
                  : _c("span", [
                      _vm._v(
                        _vm._s(_vm.room.memberCount) +
                          " " +
                          _vm._s(_vm.$t("chat.members"))
                      )
                    ])
              ]
            : [
                _c(
                  "span",
                  {
                    directives: [
                      {
                        name: "show",
                        rawName: "v-show",
                        value: _vm.typingUser,
                        expression: "typingUser"
                      }
                    ],
                    staticClass: "typing-indicator"
                  },
                  [_vm._v(_vm._s(_vm.$t("general.is_typing")))]
                ),
                _vm._v(" "),
                _c("span", [_vm._v("  ")])
              ]
        ],
        2
      )
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "room-btns action-buttons" }, [
      _vm.room.isGroup &&
      !_vm.room.hasLeft &&
      _vm.configs &&
      _vm.configs.chat.groupChat
        ? _c(
            "button",
            { attrs: { type: "button" }, on: { click: _vm.goToGroup } },
            [_c("i", { staticClass: "fas fa-info-circle" })]
          )
        : _vm._e()
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/chat-box/group.vue?vue&type=template&id=56715911&":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/chat-box/group.vue?vue&type=template&id=56715911& ***!
  \*****************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "cb-inner-window chatgroup-container" }, [
    _vm.activeContainer === "chatgroup"
      ? _c("div", { staticClass: "chatgroup-wrapper" }, [
          _c(
            "div",
            { staticClass: "chatgroup" },
            [
              _c(
                "vue-scroll",
                {
                  ref: "vue-scroll-chatgroup",
                  attrs: { id: "vue-scroll-chatgroup" }
                },
                [
                  _c(
                    "div",
                    { staticClass: "chatgroup-form" },
                    [
                      _vm.activeGroup
                        ? [
                            !_vm.showEditNameForm
                              ? _c(
                                  "div",
                                  { staticClass: "chatgroup-name mt-2" },
                                  [
                                    _c("h6", [
                                      _vm._v(_vm._s(_vm.formData.name))
                                    ]),
                                    _vm._v(" "),
                                    _vm.activeGroup.canModerate
                                      ? _c(
                                          "div",
                                          { staticClass: "chatgroup-actions" },
                                          [
                                            _c(
                                              "button",
                                              {
                                                attrs: { type: "button" },
                                                on: { click: _vm.editName }
                                              },
                                              [
                                                _c("i", {
                                                  staticClass:
                                                    "fas fa-pencil-alt"
                                                })
                                              ]
                                            )
                                          ]
                                        )
                                      : _vm._e()
                                  ]
                                )
                              : _vm.activeGroup.canModerate
                              ? _c(
                                  "div",
                                  { staticClass: "chatgroup-name mt-2" },
                                  [
                                    _c("input", {
                                      directives: [
                                        {
                                          name: "model",
                                          rawName: "v-model",
                                          value: _vm.formData.name,
                                          expression: "formData.name"
                                        }
                                      ],
                                      ref: "groupName",
                                      staticClass: "form-control",
                                      attrs: {
                                        type: "text",
                                        placeholder: _vm.$t(
                                          "chat.chat_group_name"
                                        )
                                      },
                                      domProps: { value: _vm.formData.name },
                                      on: {
                                        input: function($event) {
                                          if ($event.target.composing) {
                                            return
                                          }
                                          _vm.$set(
                                            _vm.formData,
                                            "name",
                                            $event.target.value
                                          )
                                        }
                                      }
                                    }),
                                    _vm._v(" "),
                                    _c(
                                      "div",
                                      { staticClass: "chatgroup-actions" },
                                      [
                                        _c(
                                          "button",
                                          {
                                            attrs: { type: "button" },
                                            on: { click: _vm.updateName }
                                          },
                                          [
                                            _c("i", {
                                              staticClass: "fas fa-check"
                                            })
                                          ]
                                        )
                                      ]
                                    )
                                  ]
                                )
                              : _vm._e()
                          ]
                        : [
                            _c("div", { staticClass: "chatgroup-name" }, [
                              _c("input", {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: _vm.formData.name,
                                    expression: "formData.name"
                                  }
                                ],
                                ref: "groupName",
                                staticClass: "form-control",
                                attrs: {
                                  type: "text",
                                  placeholder: _vm.$t("chat.chat_group_name")
                                },
                                domProps: { value: _vm.formData.name },
                                on: {
                                  input: function($event) {
                                    if ($event.target.composing) {
                                      return
                                    }
                                    _vm.$set(
                                      _vm.formData,
                                      "name",
                                      $event.target.value
                                    )
                                  }
                                }
                              })
                            ]),
                            _vm._v(" "),
                            _vm.hasRole("admin")
                              ? _c(
                                  "base-checkbox",
                                  {
                                    staticClass: "ml-3 mt-4",
                                    model: {
                                      value: _vm.formData.isPublicGroup,
                                      callback: function($$v) {
                                        _vm.$set(
                                          _vm.formData,
                                          "isPublicGroup",
                                          $$v
                                        )
                                      },
                                      expression: "formData.isPublicGroup"
                                    }
                                  },
                                  [
                                    _c("span", { staticClass: "text-light" }, [
                                      _vm._v(
                                        _vm._s(_vm.$t("chat.is_public_group")) +
                                          "?"
                                      )
                                    ])
                                  ]
                                )
                              : _vm._e()
                          ],
                      _vm._v(" "),
                      _c("div", {
                        staticClass: "chatgroup-members-header pt-3"
                      }),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "chatgroup-members" },
                        [
                          _vm._t("members", null, {
                            members: _vm.formData.members
                          })
                        ],
                        2
                      )
                    ],
                    2
                  )
                ]
              )
            ],
            1
          ),
          _vm._v(" "),
          !_vm.activeGroup
            ? _c(
                "div",
                { staticClass: "chatgroup-footer" },
                [
                  _c(
                    "base-button",
                    {
                      attrs: { type: "button", design: "dark-primary" },
                      on: { click: _vm.goBack }
                    },
                    [_vm._v(_vm._s(_vm.$t("general.cancel")))]
                  ),
                  _vm._v(" "),
                  _c(
                    "base-button",
                    {
                      attrs: { type: "button", design: "primary" },
                      on: { click: _vm.createGroup }
                    },
                    [_vm._v(_vm._s(_vm.$t("general.save")))]
                  )
                ],
                1
              )
            : _vm._e()
        ])
      : _vm._e()
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/chat-box/header.vue?vue&type=template&id=b871232a&":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/chat-box/header.vue?vue&type=template&id=b871232a& ***!
  \******************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "chat-box-header" }, [
    _c("h6", { staticClass: "cb-header-title" }, [
      _vm._v(_vm._s(_vm.computedTitle))
    ]),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "cb-header-buttons action-buttons" },
      [
        _vm.activeContainer === "chatgroup"
          ? [
              _c(
                "button",
                {
                  attrs: { type: "button" },
                  on: {
                    click: function($event) {
                      return _vm.$emit("goBack")
                    }
                  }
                },
                [
                  _c("i", {
                    class: [
                      "fas",
                      { "fa-chevron-left": _vm.activeContainer === "chatgroup" }
                    ]
                  })
                ]
              ),
              _vm._v(" "),
              _c(
                "button",
                {
                  staticClass: "auto-width",
                  attrs: { type: "button" },
                  on: {
                    click: function($event) {
                      return _vm.$emit("showAddMemberScreen")
                    }
                  }
                },
                [
                  _c("i", { staticClass: "fas fa-plus" }),
                  _vm._v(" "),
                  _c("span", { staticClass: "px-2" }, [
                    _vm._v(_vm._s(_vm.$t("chat.add")))
                  ])
                ]
              )
            ]
          : [
              _vm.activeContainer !== "home"
                ? _c(
                    "button",
                    {
                      attrs: { type: "button" },
                      on: {
                        click: function($event) {
                          return _vm.$emit("goHome")
                        }
                      }
                    },
                    [
                      _c("i", {
                        class: [
                          "fas",
                          {
                            "fa-chevron-left":
                              _vm.activeContainer === "conversation"
                          },
                          {
                            "fa-chevron-right":
                              _vm.activeContainer === "settings"
                          }
                        ]
                      })
                    ]
                  )
                : _vm._e(),
              _vm._v(" "),
              _vm.activeContainer !== "settings"
                ? [
                    _c(
                      "button",
                      {
                        attrs: { type: "button" },
                        on: {
                          click: function($event) {
                            return _vm.$emit("toggleSearch")
                          }
                        }
                      },
                      [_c("i", { staticClass: "fas fa-search" })]
                    ),
                    _vm._v(" "),
                    _c(
                      "button",
                      {
                        attrs: { type: "button" },
                        on: {
                          click: function($event) {
                            return _vm.$emit("goToSettings")
                          }
                        }
                      },
                      [_c("i", { staticClass: "fas fa-cog" })]
                    )
                  ]
                : _vm._e(),
              _vm._v(" "),
              _vm.activeContainer === "home" &&
              !_vm.fullPage &&
              _vm.configs.chat.seaparateWindow
                ? _c(
                    "router-link",
                    {
                      staticClass: "button",
                      attrs: { to: { name: "appChat" } }
                    },
                    [_c("i", { staticClass: "fas fa-external-link-alt" })]
                  )
                : _vm._e()
            ],
        _vm._v(" "),
        !_vm.fullPage
          ? _c(
              "button",
              {
                attrs: { type: "button" },
                on: {
                  click: function($event) {
                    return _vm.$emit("hideChatBox")
                  }
                }
              },
              [_c("i", { staticClass: "fas fa-times" })]
            )
          : _vm._e()
      ],
      2
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/chat-box/index.vue?vue&type=template&id=7eb429e4&":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/chat-box/index.vue?vue&type=template&id=7eb429e4& ***!
  \*****************************************************************************************************************************************************************************************************************/
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
    "div",
    {
      class: [
        "chat-box-wrapper",
        { shown: _vm.isBoxShown },
        { "search-shown": _vm.isSearchShown },
        { "chat-box-lg": _vm.largeChatBox },
        { "show-chat-options": _vm.showChatOptions }
      ]
    },
    [
      _c("chat-box-header", {
        attrs: {
          "active-container": _vm.activeContainer,
          configs: _vm.configs,
          "full-page": _vm.fullPage
        },
        on: {
          goHome: _vm.goHome,
          toggleSearch: _vm.toggleSearch,
          goToSettings: _vm.goToSettings,
          goBack: _vm.goBack,
          hideChatBox: _vm.hideChatBox,
          showAddMemberScreen: _vm.showAddMemberScreen
        }
      }),
      _vm._v(" "),
      _c("div", { staticClass: "search" }, [
        _c("input", {
          directives: [
            {
              name: "model",
              rawName: "v-model",
              value: _vm.searchTerm,
              expression: "searchTerm"
            }
          ],
          ref: "searchTerm",
          staticClass: "form-control",
          attrs: {
            type: "text",
            placeholder: _vm.$t("general.search_helper_default_text")
          },
          domProps: { value: _vm.searchTerm },
          on: {
            keydown: function($event) {
              if (
                !$event.type.indexOf("key") &&
                _vm._k($event.keyCode, "esc", 27, $event.key, ["Esc", "Escape"])
              ) {
                return null
              }
              return _vm.toggleSearch.apply(null, arguments)
            },
            input: [
              function($event) {
                if ($event.target.composing) {
                  return
                }
                _vm.searchTerm = $event.target.value
              },
              _vm.searchTermChanged
            ]
          }
        }),
        _vm._v(" "),
        _vm.searchTerm
          ? _c(
              "button",
              {
                staticClass: "clear-btn",
                attrs: { type: "button" },
                on: { click: _vm.hideSearch }
              },
              [_vm._v(_vm._s(_vm.$t("general.clear")))]
            )
          : _vm._e()
      ]),
      _vm._v(" "),
      _c(
        "div",
        {
          class: [
            "chat-box",
            { "showing-settings": _vm.activeContainer === "settings" },
            { "showing-chats": _vm.activeContainer === "conversation" },
            { "showing-chatgroup": _vm.activeContainer === "chatgroup" }
          ]
        },
        [
          _vm.configs.chat.groupChat
            ? _c("chat-box-group", {
                ref: "chatBoxGroup",
                attrs: {
                  "active-container": _vm.activeContainer,
                  "active-group": _vm.activeGroup,
                  "members-to-add": _vm.activeGroupMembersToAdd,
                  "members-to-remove": _vm.activeGroupMembersToRemove
                },
                on: {
                  goToConversation: _vm.goToConversation,
                  goBack: _vm.goBack,
                  goHome: _vm.goHome
                },
                scopedSlots: _vm._u(
                  [
                    {
                      key: "members",
                      fn: function(ref) {
                        var members = ref.members
                        return [
                          _c(
                            "div",
                            { staticClass: "rooms-wrapper" },
                            [
                              _vm.searchTerm && _vm.searched
                                ? [
                                    _vm.roomsSearch.rooms.length ||
                                    _vm.roomsSearch.users.length
                                      ? _c(
                                          "ul",
                                          { staticClass: "rooms" },
                                          [
                                            _vm._l(
                                              _vm.roomsSearch.rooms,
                                              function(room) {
                                                return [
                                                  !room.isGroup
                                                    ? _c("chat-room-item", {
                                                        key: room.uuid,
                                                        attrs: {
                                                          room: room,
                                                          "room-name":
                                                            room.name,
                                                          "click-action":
                                                            "addToGroup",
                                                          vars: _vm.vars,
                                                          "show-last-message": false
                                                        },
                                                        on: {
                                                          addToGroup:
                                                            _vm.addToGroup
                                                        }
                                                      })
                                                    : _vm._e()
                                                ]
                                              }
                                            ),
                                            _vm._v(" "),
                                            _vm._l(
                                              _vm.roomsSearch.users,
                                              function(user) {
                                                return _c("chat-room-item", {
                                                  key: user.uuid,
                                                  attrs: {
                                                    room: user,
                                                    "room-name":
                                                      user.profile.name,
                                                    "click-action":
                                                      "addToGroup",
                                                    vars: _vm.vars
                                                  },
                                                  on: {
                                                    addToGroup: _vm.addToGroup
                                                  }
                                                })
                                              }
                                            )
                                          ],
                                          2
                                        )
                                      : _c("div", { staticClass: "no-data" }, [
                                          _c("h5", [
                                            _vm._v(
                                              _vm._s(
                                                _vm.$t("chat.no_result_found")
                                              )
                                            )
                                          ])
                                        ])
                                  ]
                                : [
                                    _c(
                                      "ul",
                                      { staticClass: "rooms" },
                                      _vm._l(members, function(member) {
                                        return _c("chat-room-item", {
                                          key: member.user.uuid,
                                          attrs: {
                                            room: member.user,
                                            "room-name":
                                              member.user.profile.name,
                                            "click-action": "goToConversation",
                                            "show-custom-action":
                                              _vm.activeGroup &&
                                              _vm.activeGroup.canModerate,
                                            "click-action-on-custom":
                                              "removeMember",
                                            vars: _vm.vars
                                          },
                                          on: {
                                            goToConversation:
                                              _vm.goToConversation,
                                            removeMember:
                                              _vm.removeMemberFromGroup
                                          }
                                        })
                                      }),
                                      1
                                    )
                                  ]
                            ],
                            2
                          )
                        ]
                      }
                    }
                  ],
                  null,
                  false,
                  3003752676
                )
              })
            : _vm._e(),
          _vm._v(" "),
          _c("chat-box-settings", {
            attrs: { "active-container": _vm.activeContainer },
            on: { goHome: _vm.goHome }
          }),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "cb-inner-window rooms-container" },
            [
              _c(
                "vue-scroll",
                {
                  ref: "vue-scroll-rooms",
                  attrs: { id: "vue-scroll-rooms" },
                  on: { "handle-scroll": _vm.handleRoomsScroll }
                },
                [
                  _c(
                    "div",
                    { staticClass: "rooms-wrapper" },
                    [
                      (_vm.searchTerm && _vm.searched) ||
                      _vm.newChatScreen ||
                      _vm.newGroupScreen
                        ? [
                            _vm.roomsSearch.rooms.length ||
                            _vm.roomsSearch.users.length
                              ? _c(
                                  "ul",
                                  { staticClass: "rooms" },
                                  [
                                    !_vm.newChatScreen || !_vm.newGroupScreen
                                      ? [
                                          _vm._l(
                                            _vm.roomsSearch.rooms,
                                            function(room) {
                                              return _c("chat-room-item", {
                                                key: room.uuid,
                                                attrs: {
                                                  room: room,
                                                  "room-name": room.name,
                                                  vars: _vm.vars
                                                },
                                                on: {
                                                  goToConversation:
                                                    _vm.goToConversation
                                                }
                                              })
                                            }
                                          ),
                                          _vm._v(" "),
                                          _vm.roomsSearch.users.length
                                            ? _c(
                                                "li",
                                                {
                                                  staticClass:
                                                    "my-2 pl-3 font-weight-500"
                                                },
                                                [
                                                  _vm._v(
                                                    _vm._s(_vm.$t("user.users"))
                                                  )
                                                ]
                                              )
                                            : _vm._e()
                                        ]
                                      : _vm._e(),
                                    _vm._v(" "),
                                    _vm._l(_vm.roomsSearch.users, function(
                                      user
                                    ) {
                                      return _c("chat-room-item", {
                                        key: user.uuid,
                                        attrs: {
                                          room: user,
                                          "room-name": user.profile.name,
                                          "click-action": "goToConversation",
                                          vars: _vm.vars
                                        },
                                        on: {
                                          goToConversation: _vm.goToConversation
                                        }
                                      })
                                    })
                                  ],
                                  2
                                )
                              : _c("div", { staticClass: "no-data" }, [
                                  _c("h5", [
                                    _vm._v(
                                      _vm._s(_vm.$t("chat.no_result_found"))
                                    )
                                  ])
                                ])
                          ]
                        : [
                            _vm.rooms.data && _vm.rooms.data.length
                              ? _c(
                                  "ul",
                                  { staticClass: "rooms" },
                                  _vm._l(_vm.rooms.data, function(room) {
                                    return _c("chat-room-item", {
                                      key: room.uuid,
                                      attrs: {
                                        room: room,
                                        "room-name": room.name,
                                        vars: _vm.vars
                                      },
                                      on: {
                                        goToConversation: _vm.goToConversation
                                      }
                                    })
                                  }),
                                  1
                                )
                              : _c("div", { staticClass: "no-data" }, [
                                  _c("h5", [
                                    _vm._v(_vm._s(_vm.$t("chat.no_chats_yet")))
                                  ])
                                ])
                          ]
                    ],
                    2
                  )
                ]
              ),
              _vm._v(" "),
              _c("div", { staticClass: "chat-option-buttons" }, [
                _vm.configs.chat.groupChat
                  ? _c(
                      "button",
                      {
                        attrs: { type: "button" },
                        on: { click: _vm.goToCreateGroup }
                      },
                      [_c("i", { staticClass: "fas fa-users" })]
                    )
                  : _vm._e(),
                _vm._v(" "),
                _c(
                  "button",
                  {
                    attrs: { type: "button" },
                    on: { click: _vm.startNewChat }
                  },
                  [_c("i", { staticClass: "fas fa-user" })]
                ),
                _vm._v(" "),
                _vm._m(0)
              ])
            ],
            1
          ),
          _vm._v(" "),
          _c("div", { staticClass: "cb-inner-window conversation-container" }, [
            _vm.activeConversation
              ? _c(
                  "div",
                  { staticClass: "conversation-wrapper" },
                  [
                    _vm.activeConversation.chatRoom
                      ? _c("conversation-header", {
                          attrs: {
                            room: _vm.activeConversation.chatRoom,
                            "room-name": _vm.activeConversation.chatRoom.name,
                            vars: _vm.vars,
                            configs: _vm.configs,
                            typingUser: _vm.typingUser
                          },
                          on: { goToGroup: _vm.goToGroup }
                        })
                      : _vm.activeConversation.user
                      ? _c("conversation-header", {
                          attrs: {
                            room: _vm.activeConversation.user,
                            "room-name":
                              _vm.activeConversation.user.profile.name,
                            vars: _vm.vars,
                            configs: _vm.configs,
                            typingUser: _vm.typingUser
                          }
                        })
                      : _vm._e(),
                    _vm._v(" "),
                    _c(
                      "div",
                      {
                        class: [
                          "conversation",
                          { "no-messages": !_vm.hasMessages },
                          { "got-new-messages": _vm.newUnreadMessageOnFeed },
                          { "show-scroll-btn": _vm.showScrollToLatestBtn }
                        ]
                      },
                      [
                        _vm.hasMessages
                          ? _c(
                              "div",
                              { staticClass: "messages-list-container" },
                              [
                                _c(
                                  "vue-scroll",
                                  {
                                    ref: "vue-scroll-messages",
                                    attrs: { id: "vue-scroll-messages" },
                                    on: {
                                      "handle-scroll": _vm.handleMessageScroll
                                    }
                                  },
                                  [
                                    _c(
                                      "div",
                                      {
                                        class: [
                                          "messages-list-wrapper",
                                          {
                                            "show-name":
                                              _vm.activeConversation.chatRoom &&
                                              _vm.activeConversation.chatRoom
                                                .isGroup
                                          }
                                        ]
                                      },
                                      [
                                        _vm.searchTerm && _vm.searched
                                          ? [
                                              _vm.messagesSearch.length
                                                ? _vm._l(
                                                    _vm.messagesSearch,
                                                    function(message, mIndex) {
                                                      return _c(
                                                        "message-item",
                                                        {
                                                          key: message.uuid,
                                                          class: [
                                                            {
                                                              "own-message":
                                                                message.user
                                                                  .uuid ===
                                                                _vm.userUuid
                                                            },
                                                            {
                                                              "prev-diff-own":
                                                                !_vm.messages
                                                                  .data[
                                                                  mIndex + 1
                                                                ] ||
                                                                _vm.messages
                                                                  .data[
                                                                  mIndex + 1
                                                                ].user.uuid !==
                                                                  message.user
                                                                    .uuid
                                                            },
                                                            {
                                                              "next-diff-own":
                                                                !_vm.messages
                                                                  .data[
                                                                  mIndex - 1
                                                                ] ||
                                                                _vm.messages
                                                                  .data[
                                                                  mIndex - 1
                                                                ].user.uuid !==
                                                                  message.user
                                                                    .uuid
                                                            }
                                                          ],
                                                          attrs: {
                                                            message: message,
                                                            vars: _vm.vars,
                                                            "file-icons":
                                                              _vm.fileIcons,
                                                            "file-mime-types":
                                                              _vm.fileMimeTypes
                                                          }
                                                        }
                                                      )
                                                    }
                                                  )
                                                : _c(
                                                    "div",
                                                    { staticClass: "no-data" },
                                                    [
                                                      _c("h5", [
                                                        _vm._v(
                                                          _vm._s(
                                                            _vm.$t(
                                                              "chat.no_result_found"
                                                            )
                                                          )
                                                        )
                                                      ])
                                                    ]
                                                  )
                                            ]
                                          : [
                                              _vm._l(
                                                _vm.messages.data,
                                                function(message, mIndex) {
                                                  return _c("message-item", {
                                                    key: message.uuid,
                                                    class: [
                                                      {
                                                        "own-message":
                                                          message.user.uuid ===
                                                          _vm.userUuid
                                                      },
                                                      {
                                                        "prev-diff-own":
                                                          !_vm.messages.data[
                                                            mIndex + 1
                                                          ] ||
                                                          _vm.messages.data[
                                                            mIndex + 1
                                                          ].user.uuid !==
                                                            message.user.uuid
                                                      },
                                                      {
                                                        "next-diff-own":
                                                          !_vm.messages.data[
                                                            mIndex - 1
                                                          ] ||
                                                          _vm.messages.data[
                                                            mIndex - 1
                                                          ].user.uuid !==
                                                            message.user.uuid
                                                      }
                                                    ],
                                                    attrs: {
                                                      message: message,
                                                      vars: _vm.vars,
                                                      "file-icons":
                                                        _vm.fileIcons,
                                                      "file-mime-types":
                                                        _vm.fileMimeTypes
                                                    }
                                                  })
                                                }
                                              ),
                                              _vm._v(" "),
                                              _vm.isFetching
                                                ? _c(
                                                    "div",
                                                    {
                                                      staticClass:
                                                        "d-flex justify-content-center my-2"
                                                    },
                                                    [
                                                      _c("animated-loader", {
                                                        attrs: {
                                                          "is-loading":
                                                            _vm.isFetching,
                                                          "loader-color":
                                                            _vm.vars.colors
                                                              .light,
                                                          "overlay-color":
                                                            "transparent",
                                                          size: "inline",
                                                          "loader-size": "20px",
                                                          "loader-stroke": "3px"
                                                        }
                                                      })
                                                    ],
                                                    1
                                                  )
                                                : _vm._e(),
                                              _vm._v(" "),
                                              _vm.noMoreMessages
                                                ? _c(
                                                    "div",
                                                    {
                                                      staticClass:
                                                        "message-item my-4 d-flex justify-content-center align-items-center"
                                                    },
                                                    [
                                                      _c(
                                                        "h5",
                                                        {
                                                          staticClass:
                                                            "text-muted"
                                                        },
                                                        [
                                                          _vm._v(
                                                            "\n                                            " +
                                                              _vm._s(
                                                                _vm.$t(
                                                                  "chat.no_more_messages"
                                                                )
                                                              ) +
                                                              "\n                                        "
                                                          )
                                                        ]
                                                      )
                                                    ]
                                                  )
                                                : _vm._e()
                                            ]
                                      ],
                                      2
                                    )
                                  ]
                                )
                              ],
                              1
                            )
                          : _c(
                              "div",
                              {
                                staticClass:
                                  "d-flex justify-content-center align-items-center min-height-300px"
                              },
                              [
                                _c("h5", { staticClass: "text-muted" }, [
                                  _vm._v(
                                    "\n                            " +
                                      _vm._s(_vm.$t("chat.no_messages_yet")) +
                                      "\n                        "
                                  )
                                ])
                              ]
                            ),
                        _vm._v(" "),
                        _c(
                          "div",
                          {
                            staticClass: "scroll-latest-btn",
                            on: { click: _vm.scrollToLatestMessages }
                          },
                          [_vm._m(1)]
                        )
                      ]
                    ),
                    _vm._v(" "),
                    (_vm.activeConversation.chatRoom &&
                      !_vm.activeConversation.chatRoom.isGroup) ||
                    (!_vm.activeConversation.chatRoom &&
                      _vm.activeConversation.user) ||
                    (_vm.activeConversation.chatRoom &&
                      _vm.activeConversation.chatRoom.isGroup &&
                      !_vm.activeConversation.chatRoom.hasLeft)
                      ? _c("div", { staticClass: "conversation-footer" }, [
                          _c(
                            "div",
                            { staticClass: "new-message" },
                            [
                              _c(
                                "at",
                                {
                                  attrs: {
                                    members: _vm.computedParticipants,
                                    "name-key": "name"
                                  },
                                  on: { at: _vm.handleAt },
                                  scopedSlots: _vm._u(
                                    [
                                      {
                                        key: "item",
                                        fn: function(s) {
                                          return [
                                            _c(
                                              "span",
                                              { staticClass: "mentioned" },
                                              [
                                                _vm._v(
                                                  _vm._s(s.item.name) + " "
                                                ),
                                                _c(
                                                  "span",
                                                  {
                                                    staticClass:
                                                      "bracketed text-muted-md"
                                                  },
                                                  [
                                                    _vm._v(
                                                      _vm._s(s.item.username)
                                                    )
                                                  ]
                                                )
                                              ]
                                            )
                                          ]
                                        }
                                      },
                                      {
                                        key: "embeddedItem",
                                        fn: function(s) {
                                          return [
                                            _c("span", [
                                              _c(
                                                "span",
                                                {
                                                  staticClass:
                                                    "tag mentioned bg-white text-primary mx-1 px-2 py-1 rounded",
                                                  attrs: {
                                                    "data-uuid":
                                                      s.current &&
                                                      s.current.user
                                                        ? s.current.user.uuid
                                                        : ""
                                                  }
                                                },
                                                [_vm._v(_vm._s(s.current.name))]
                                              ),
                                              _vm._v(" "),
                                              _c("span")
                                            ])
                                          ]
                                        }
                                      }
                                    ],
                                    null,
                                    false,
                                    1168386567
                                  ),
                                  model: {
                                    value: _vm.newMessage.message,
                                    callback: function($$v) {
                                      _vm.$set(_vm.newMessage, "message", $$v)
                                    },
                                    expression: "newMessage.message"
                                  }
                                },
                                [
                                  _vm._v(" "),
                                  _vm._v(" "),
                                  _c(
                                    "div",
                                    {
                                      ref: "newMessageInput",
                                      staticClass:
                                        "new-message-input form-control",
                                      attrs: {
                                        contenteditable: "",
                                        "data-placeholder": _vm.$t(
                                          "chat.type_a_message"
                                        ),
                                        placeholder: _vm.$t(
                                          "chat.type_a_message"
                                        )
                                      },
                                      on: {
                                        keydown: [
                                          _vm.isTyping,
                                          function($event) {
                                            if (
                                              !$event.type.indexOf("key") &&
                                              _vm._k(
                                                $event.keyCode,
                                                "enter",
                                                13,
                                                $event.key,
                                                "Enter"
                                              )
                                            ) {
                                              return null
                                            }
                                            return _vm.enterPressedEvt(
                                              _vm.postMessage,
                                              $event
                                            )
                                          }
                                        ]
                                      }
                                    },
                                    [_c("div")]
                                  )
                                ]
                              ),
                              _vm._v(" "),
                              _c("emoji-picker", {
                                staticClass: "emoji-picker-wrapper",
                                attrs: { search: _vm.searchTermEmoji },
                                on: { emoji: _vm.appendEmoji },
                                scopedSlots: _vm._u(
                                  [
                                    {
                                      key: "emoji-invoker",
                                      fn: function(ref) {
                                        var clickEvent = ref.events.click
                                        return _c(
                                          "button",
                                          {
                                            staticClass:
                                              "btn-custom emoji-button",
                                            attrs: { type: "button" },
                                            on: {
                                              click: function($event) {
                                                $event.stopPropagation()
                                                return clickEvent.apply(
                                                  null,
                                                  arguments
                                                )
                                              }
                                            }
                                          },
                                          [
                                            _c("i", {
                                              staticClass: "far fa-grin"
                                            })
                                          ]
                                        )
                                      }
                                    },
                                    {
                                      key: "emoji-picker",
                                      fn: function(ref) {
                                        var emojis = ref.emojis
                                        var insert = ref.insert
                                        var display = ref.display
                                        return _c(
                                          "div",
                                          {
                                            staticClass:
                                              "emoji-picker-container"
                                          },
                                          [
                                            _c(
                                              "div",
                                              { staticClass: "emoji-picker" },
                                              [
                                                _c(
                                                  "div",
                                                  {
                                                    staticClass:
                                                      "emoji-picker__search"
                                                  },
                                                  [
                                                    _c("input", {
                                                      directives: [
                                                        {
                                                          name: "model",
                                                          rawName: "v-model",
                                                          value:
                                                            _vm.searchTermEmoji,
                                                          expression:
                                                            "searchTermEmoji"
                                                        },
                                                        {
                                                          name: "focus",
                                                          rawName: "v-focus"
                                                        }
                                                      ],
                                                      attrs: { type: "text" },
                                                      domProps: {
                                                        value:
                                                          _vm.searchTermEmoji
                                                      },
                                                      on: {
                                                        input: function(
                                                          $event
                                                        ) {
                                                          if (
                                                            $event.target
                                                              .composing
                                                          ) {
                                                            return
                                                          }
                                                          _vm.searchTermEmoji =
                                                            $event.target.value
                                                        }
                                                      }
                                                    })
                                                  ]
                                                ),
                                                _vm._v(" "),
                                                _c(
                                                  "div",
                                                  _vm._l(emojis, function(
                                                    emojiGroup,
                                                    category
                                                  ) {
                                                    return _c(
                                                      "div",
                                                      {
                                                        key: category,
                                                        staticClass: "mt-2"
                                                      },
                                                      [
                                                        _c("h5", [
                                                          _vm._v(
                                                            _vm._s(category)
                                                          )
                                                        ]),
                                                        _vm._v(" "),
                                                        _c(
                                                          "div",
                                                          {
                                                            staticClass:
                                                              "emojis"
                                                          },
                                                          _vm._l(
                                                            emojiGroup,
                                                            function(
                                                              emoji,
                                                              emojiName
                                                            ) {
                                                              return _c(
                                                                "span",
                                                                {
                                                                  key: emojiName,
                                                                  attrs: {
                                                                    title: emojiName
                                                                  },
                                                                  on: {
                                                                    click: function(
                                                                      $event
                                                                    ) {
                                                                      return insert(
                                                                        emoji
                                                                      )
                                                                    }
                                                                  }
                                                                },
                                                                [
                                                                  _vm._v(
                                                                    _vm._s(
                                                                      emoji
                                                                    )
                                                                  )
                                                                ]
                                                              )
                                                            }
                                                          ),
                                                          0
                                                        )
                                                      ]
                                                    )
                                                  }),
                                                  0
                                                )
                                              ]
                                            )
                                          ]
                                        )
                                      }
                                    }
                                  ],
                                  null,
                                  false,
                                  3848860834
                                )
                              }),
                              _vm._v(" "),
                              !_vm.newMessage.message &&
                              _vm.configs.chat.fileSharing
                                ? _c("file-uploader", {
                                    attrs: {
                                      url: "/chat/messages",
                                      "name-label": "upload.attachment",
                                      "names-label": "upload.attachments",
                                      "button-icon": "fas fa-paperclip",
                                      "button-classes": "btn-sm",
                                      "button-design": "custom",
                                      "hide-button-label": "",
                                      "hide-file-list": "",
                                      options: _vm.preRequisite.uploaderConfig,
                                      data: _vm.newMessage.attachments,
                                      "additional-form-data":
                                        _vm.activeConversation,
                                      "request-identifier":
                                        _vm.newMessageRequestUUID
                                    },
                                    on: {
                                      uploading: _vm.attachmentUploadStarted,
                                      updated: _vm.attachmentUploaded,
                                      error: _vm.attachmentUploadError,
                                      noNeed: _vm.noNeedCallback
                                    }
                                  })
                                : _vm._e(),
                              _vm._v(" "),
                              _c(
                                "button",
                                {
                                  staticClass: "btn-custom post-message-button",
                                  attrs: {
                                    type: "button",
                                    title: _vm.$t("general.submit")
                                  },
                                  on: { click: _vm.postMessage }
                                },
                                [_c("i", { staticClass: "far fa-paper-plane" })]
                              )
                            ],
                            1
                          )
                        ])
                      : _vm._e()
                  ],
                  1
                )
              : _vm._e()
          ])
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("button", { attrs: { type: "button" } }, [
      _c("i", { staticClass: "fas fa-comment-dots fa-flip-horizontal" })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "scroll-btn-wrapper" }, [
      _c("i", { staticClass: "fas fa-angle-double-down" })
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/chat-box/message-item.vue?vue&type=template&id=5c5f8277&":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/chat-box/message-item.vue?vue&type=template&id=5c5f8277& ***!
  \************************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "message-item-wrapper" }, [
    _c(
      "div",
      { class: ["message-item", { "has-attachments": _vm.hasAttachment }] },
      [
        _c("span", { staticClass: "tail-in" }, [
          _c(
            "svg",
            {
              attrs: {
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 8 13",
                width: "8",
                height: "13"
              }
            },
            [
              _c("path", {
                attrs: {
                  opacity: ".13",
                  fill: "#0000000",
                  d:
                    "M1.533 3.568L8 12.193V1H2.812C1.042 1 .474 2.156 1.533 3.568z"
                }
              }),
              _c("path", {
                attrs: {
                  fill: "currentColor",
                  d:
                    "M1.533 2.568L8 11.193V0H2.812C1.042 0 .474 1.156 1.533 2.568z"
                }
              })
            ]
          )
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "message-header" }, [
          _c("h6", { staticClass: "message-user" }, [
            _vm._v(_vm._s(_vm.message.user.profile.name))
          ])
        ]),
        _vm._v(" "),
        _vm.hasAttachment
          ? _c(
              "div",
              { staticClass: "message-content" },
              [
                _vm._l(_vm.message.attachments, function(attachment) {
                  return [
                    _c(
                      "div",
                      {
                        key: attachment.uuid,
                        class: [
                          "attachment",
                          {
                            "non-image-attachment":
                              attachment.mime !== "image/png" &&
                              attachment.mime !== "image/jpeg"
                          }
                        ]
                      },
                      [
                        attachment.mime === "image/png" ||
                        attachment.mime === "image/jpeg"
                          ? [
                              _c(
                                "a",
                                {
                                  staticClass: "attachment-link",
                                  attrs: {
                                    href: attachment.fullUrl,
                                    target: "_blank"
                                  }
                                },
                                [
                                  _c("img", {
                                    staticClass: "img-fluid",
                                    attrs: {
                                      src: attachment.fullUrl,
                                      alt: attachment.filename
                                    }
                                  })
                                ]
                              ),
                              _vm._v(" "),
                              _c("div", { staticClass: "attachment-shadow" }),
                              _vm._v(" "),
                              _c(
                                "div",
                                { staticClass: "message-footer small" },
                                [
                                  _vm.message.sentAt
                                    ? _c(
                                        "span",
                                        { staticClass: "message-created-at" },
                                        [
                                          _vm._v(
                                            _vm._s(
                                              _vm._f("momentCalendarTz")(
                                                _vm.message.sentAt
                                              )
                                            )
                                          )
                                        ]
                                      )
                                    : _vm._e(),
                                  _vm._v(" "),
                                  _c(
                                    "span",
                                    {
                                      class: [
                                        "message-status",
                                        _vm.message.status
                                      ]
                                    },
                                    [
                                      _c("i", {
                                        class:
                                          _vm.messageStatusIcons[
                                            _vm.message.status
                                          ]
                                      })
                                    ]
                                  )
                                ]
                              )
                            ]
                          : [
                              _c(
                                "a",
                                {
                                  staticClass: "attachment-link",
                                  attrs: {
                                    href: attachment.fullUrl,
                                    target: "_blank"
                                  }
                                },
                                [
                                  _c(
                                    "div",
                                    { staticClass: "attachment-details" },
                                    [
                                      _c(
                                        "div",
                                        { staticClass: "attachment-icon" },
                                        [
                                          _c("i", {
                                            class: [
                                              "fas",
                                              _vm.fileIcons[attachment.mime]
                                            ]
                                          })
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "div",
                                        { staticClass: "attachment-name" },
                                        [
                                          _c("h6", [
                                            _vm._v(_vm._s(attachment.filename))
                                          ])
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _vm._m(0, true)
                                    ]
                                  )
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "div",
                                { staticClass: "message-footer small" },
                                [
                                  _c("div", { staticClass: "left-side" }, [
                                    _c(
                                      "span",
                                      { staticClass: "attachment-type" },
                                      [
                                        _vm._v(
                                          _vm._s(
                                            _vm.fileMimeTypes[attachment.mime]
                                          )
                                        )
                                      ]
                                    ),
                                    _c(
                                      "span",
                                      { staticClass: "attachment-size" },
                                      [
                                        _vm._v(
                                          _vm._s(attachment.humanReadableSize)
                                        )
                                      ]
                                    )
                                  ]),
                                  _vm._v(" "),
                                  _c("div", { staticClass: "right-side" }, [
                                    _vm.message.sentAt
                                      ? _c(
                                          "span",
                                          { staticClass: "message-created-at" },
                                          [
                                            _vm._v(
                                              _vm._s(
                                                _vm._f("momentCalendarTz")(
                                                  _vm.message.sentAt
                                                )
                                              )
                                            )
                                          ]
                                        )
                                      : _vm._e(),
                                    _vm._v(" "),
                                    _c(
                                      "span",
                                      {
                                        class: [
                                          "message-status",
                                          _vm.message.status
                                        ]
                                      },
                                      [
                                        _c("i", {
                                          class:
                                            _vm.messageStatusIcons[
                                              _vm.message.status
                                            ]
                                        })
                                      ]
                                    )
                                  ])
                                ]
                              )
                            ]
                      ],
                      2
                    )
                  ]
                })
              ],
              2
            )
          : _c("div", { staticClass: "message-content" }, [
              _c("div", { staticClass: "message-body" }, [
                _vm.message.status === "sent"
                  ? _c("div", {
                      staticClass: "message",
                      domProps: { innerHTML: _vm._s(_vm.message.message) }
                    })
                  : _c("div", { staticClass: "message" }, [
                      _vm._v(_vm._s(_vm.removeHtmlTags(_vm.message.message)))
                    ]),
                _vm._v(" "),
                _c("div", { staticClass: "footer-space" })
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "message-footer small" }, [
                _vm.message.sentAt
                  ? _c("span", { staticClass: "message-created-at" }, [
                      _vm._v(
                        _vm._s(_vm._f("momentCalendarTz")(_vm.message.sentAt))
                      )
                    ])
                  : _vm._e(),
                _vm._v(" "),
                _c("span", { class: ["message-status", _vm.message.status] }, [
                  _c("i", { class: _vm.messageStatusIcons[_vm.message.status] })
                ])
              ])
            ])
      ]
    )
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "download-icon" }, [
      _c("i", { staticClass: "far fa-arrow-alt-circle-down" })
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/chat-box/room-item.vue?vue&type=template&id=7c922152&":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/chat-box/room-item.vue?vue&type=template&id=7c922152& ***!
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
    "li",
    { class: ["room-item"], on: { click: _vm.onClickRoomItem } },
    [
      _c(
        "div",
        { staticClass: "item-thumb" },
        [_c("user-avatar", { attrs: { user: _vm.computedAvatar, size: 40 } })],
        1
      ),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "item-details" },
        [
          _c("div", { staticClass: "title-row" }, [
            _c("h6", { staticClass: "item-title" }, [
              _vm._v(_vm._s(_vm.roomName))
            ]),
            _vm._v(" "),
            _vm.showLastMessage && _vm.room.lastConversationAt
              ? _c("small", { staticClass: "item-meta" }, [
                  _vm._v(
                    _vm._s(
                      _vm._f("momentCalendarTz")(_vm.room.lastConversationAt)
                    )
                  )
                ])
              : _vm._e()
          ]),
          _vm._v(" "),
          _vm.showLastMessage && _vm.room.lastConversationAt
            ? [
                _vm.room.message
                  ? _c("div", { staticClass: "meta-row text-ellipsis" }, [
                      _vm.room.message === "%%chat_attachment_%%"
                        ? _c("span", [
                            _vm._v(_vm._s(_vm.$t("upload.attachment")))
                          ])
                        : _c("span", [
                            _vm._v(_vm._s(_vm.removeHtmlTags(_vm.room.message)))
                          ])
                    ])
                  : _vm.room.isGroup
                  ? _c("div", { staticClass: "meta-row text-ellipsis" }, [
                      _c("span", [
                        _vm._v(
                          _vm._s(_vm.room.memberCount) +
                            " " +
                            _vm._s(_vm.$t("chat.members"))
                        )
                      ])
                    ])
                  : _vm._e()
              ]
            : _vm._e(),
          _vm._v(" "),
          _vm.room.unreadMessages
            ? _c("div", { staticClass: "unread-messages" }, [
                _c(
                  "span",
                  { staticClass: "badge badge-sm badge-pill badge-light" },
                  [_vm._v(_vm._s(_vm.room.unreadMessages))]
                )
              ])
            : _vm._e()
        ],
        2
      ),
      _vm._v(" "),
      _vm._t("actions", function() {
        return [
          _vm.showCustomAction
            ? _c(
                "div",
                {
                  staticClass:
                    "item-actions action-buttons floating-action-buttons"
                },
                [
                  _c(
                    "button",
                    {
                      attrs: { type: "button" },
                      on: {
                        click: function($event) {
                          $event.stopPropagation()
                          return _vm.doCustomAction.apply(null, arguments)
                        }
                      }
                    },
                    [_c("i", { class: _vm.customActionIcon })]
                  )
                ]
              )
            : _vm._e()
        ]
      })
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/chat-box/settings.vue?vue&type=template&id=923098fe&":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/chat-box/settings.vue?vue&type=template&id=923098fe& ***!
  \********************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "cb-inner-window settings-container" }, [
    _vm.activeContainer === "settings"
      ? _c("div", { staticClass: "settings-wrapper" }, [
          _c(
            "div",
            { staticClass: "settings" },
            [
              _c(
                "vue-scroll",
                {
                  ref: "vue-scroll-settings",
                  attrs: { id: "vue-scroll-settings" }
                },
                [
                  _c(
                    "div",
                    { staticClass: "settings-list" },
                    [
                      _c(
                        "switch-wrapper",
                        {
                          staticClass: "text-light",
                          attrs: {
                            label: _vm.$t("config.chat.enable_auto_open")
                          }
                        },
                        [
                          _c("base-switch", {
                            attrs: { design: "success" },
                            model: {
                              value: _vm.formData.chat.enableAutoOpen,
                              callback: function($$v) {
                                _vm.$set(
                                  _vm.formData.chat,
                                  "enableAutoOpen",
                                  $$v
                                )
                              },
                              expression: "formData.chat.enableAutoOpen"
                            }
                          })
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "switch-wrapper",
                        {
                          staticClass: "text-light",
                          attrs: {
                            label: _vm.$t("config.chat.enter_to_submit")
                          }
                        },
                        [
                          _c("base-switch", {
                            attrs: { design: "success" },
                            model: {
                              value: _vm.formData.chat.enterToSubmit,
                              callback: function($$v) {
                                _vm.$set(
                                  _vm.formData.chat,
                                  "enterToSubmit",
                                  $$v
                                )
                              },
                              expression: "formData.chat.enterToSubmit"
                            }
                          })
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "switch-wrapper",
                        {
                          staticClass: "text-light",
                          attrs: {
                            label: _vm.$t("config.chat.mute_sound_notification")
                          }
                        },
                        [
                          _c("base-switch", {
                            attrs: { design: "success" },
                            model: {
                              value: _vm.formData.chat.muteSoundNotification,
                              callback: function($$v) {
                                _vm.$set(
                                  _vm.formData.chat,
                                  "muteSoundNotification",
                                  $$v
                                )
                              },
                              expression: "formData.chat.muteSoundNotification"
                            }
                          })
                        ],
                        1
                      )
                    ],
                    1
                  )
                ]
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "settings-footer" },
            [
              _c(
                "base-button",
                {
                  attrs: { type: "button", design: "primary", size: "block" },
                  on: { click: _vm.submit }
                },
                [_vm._v(_vm._s(_vm.$t("general.save")))]
              )
            ],
            1
          )
        ])
      : _vm._e()
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/chat-box/conversation-header.vue":
/*!******************************************************************!*\
  !*** ./resources/js/components/chat-box/conversation-header.vue ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _conversation_header_vue_vue_type_template_id_2ce8a029___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./conversation-header.vue?vue&type=template&id=2ce8a029& */ "./resources/js/components/chat-box/conversation-header.vue?vue&type=template&id=2ce8a029&");
/* harmony import */ var _conversation_header_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./conversation-header.vue?vue&type=script&lang=js& */ "./resources/js/components/chat-box/conversation-header.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _conversation_header_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _conversation_header_vue_vue_type_template_id_2ce8a029___WEBPACK_IMPORTED_MODULE_0__["render"],
  _conversation_header_vue_vue_type_template_id_2ce8a029___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/chat-box/conversation-header.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/chat-box/conversation-header.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/components/chat-box/conversation-header.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_conversation_header_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./conversation-header.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/chat-box/conversation-header.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_conversation_header_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/chat-box/conversation-header.vue?vue&type=template&id=2ce8a029&":
/*!*************************************************************************************************!*\
  !*** ./resources/js/components/chat-box/conversation-header.vue?vue&type=template&id=2ce8a029& ***!
  \*************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_conversation_header_vue_vue_type_template_id_2ce8a029___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./conversation-header.vue?vue&type=template&id=2ce8a029& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/chat-box/conversation-header.vue?vue&type=template&id=2ce8a029&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_conversation_header_vue_vue_type_template_id_2ce8a029___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_conversation_header_vue_vue_type_template_id_2ce8a029___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/chat-box/group.vue":
/*!****************************************************!*\
  !*** ./resources/js/components/chat-box/group.vue ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _group_vue_vue_type_template_id_56715911___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./group.vue?vue&type=template&id=56715911& */ "./resources/js/components/chat-box/group.vue?vue&type=template&id=56715911&");
/* harmony import */ var _group_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./group.vue?vue&type=script&lang=js& */ "./resources/js/components/chat-box/group.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _group_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./group.vue?vue&type=style&index=0&lang=scss& */ "./resources/js/components/chat-box/group.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _group_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _group_vue_vue_type_template_id_56715911___WEBPACK_IMPORTED_MODULE_0__["render"],
  _group_vue_vue_type_template_id_56715911___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/chat-box/group.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/chat-box/group.vue?vue&type=script&lang=js&":
/*!*****************************************************************************!*\
  !*** ./resources/js/components/chat-box/group.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_group_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./group.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/chat-box/group.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_group_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/chat-box/group.vue?vue&type=style&index=0&lang=scss&":
/*!**************************************************************************************!*\
  !*** ./resources/js/components/chat-box/group.vue?vue&type=style&index=0&lang=scss& ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_2_node_modules_sass_loader_dist_cjs_js_ref_9_3_node_modules_vue_loader_lib_index_js_vue_loader_options_group_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--9-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--9-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./group.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/chat-box/group.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_2_node_modules_sass_loader_dist_cjs_js_ref_9_3_node_modules_vue_loader_lib_index_js_vue_loader_options_group_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_2_node_modules_sass_loader_dist_cjs_js_ref_9_3_node_modules_vue_loader_lib_index_js_vue_loader_options_group_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_2_node_modules_sass_loader_dist_cjs_js_ref_9_3_node_modules_vue_loader_lib_index_js_vue_loader_options_group_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_2_node_modules_sass_loader_dist_cjs_js_ref_9_3_node_modules_vue_loader_lib_index_js_vue_loader_options_group_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/components/chat-box/group.vue?vue&type=template&id=56715911&":
/*!***********************************************************************************!*\
  !*** ./resources/js/components/chat-box/group.vue?vue&type=template&id=56715911& ***!
  \***********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_group_vue_vue_type_template_id_56715911___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./group.vue?vue&type=template&id=56715911& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/chat-box/group.vue?vue&type=template&id=56715911&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_group_vue_vue_type_template_id_56715911___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_group_vue_vue_type_template_id_56715911___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/chat-box/header.vue":
/*!*****************************************************!*\
  !*** ./resources/js/components/chat-box/header.vue ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _header_vue_vue_type_template_id_b871232a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./header.vue?vue&type=template&id=b871232a& */ "./resources/js/components/chat-box/header.vue?vue&type=template&id=b871232a&");
/* harmony import */ var _header_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header.vue?vue&type=script&lang=js& */ "./resources/js/components/chat-box/header.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _header_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _header_vue_vue_type_template_id_b871232a___WEBPACK_IMPORTED_MODULE_0__["render"],
  _header_vue_vue_type_template_id_b871232a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/chat-box/header.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/chat-box/header.vue?vue&type=script&lang=js&":
/*!******************************************************************************!*\
  !*** ./resources/js/components/chat-box/header.vue?vue&type=script&lang=js& ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_header_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./header.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/chat-box/header.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_header_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/chat-box/header.vue?vue&type=template&id=b871232a&":
/*!************************************************************************************!*\
  !*** ./resources/js/components/chat-box/header.vue?vue&type=template&id=b871232a& ***!
  \************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_header_vue_vue_type_template_id_b871232a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./header.vue?vue&type=template&id=b871232a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/chat-box/header.vue?vue&type=template&id=b871232a&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_header_vue_vue_type_template_id_b871232a___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_header_vue_vue_type_template_id_b871232a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/chat-box/index.vue":
/*!****************************************************!*\
  !*** ./resources/js/components/chat-box/index.vue ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_vue_vue_type_template_id_7eb429e4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=7eb429e4& */ "./resources/js/components/chat-box/index.vue?vue&type=template&id=7eb429e4&");
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ "./resources/js/components/chat-box/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_7eb429e4___WEBPACK_IMPORTED_MODULE_0__["render"],
  _index_vue_vue_type_template_id_7eb429e4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/chat-box/index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/chat-box/index.vue?vue&type=script&lang=js&":
/*!*****************************************************************************!*\
  !*** ./resources/js/components/chat-box/index.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/chat-box/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/chat-box/index.vue?vue&type=template&id=7eb429e4&":
/*!***********************************************************************************!*\
  !*** ./resources/js/components/chat-box/index.vue?vue&type=template&id=7eb429e4& ***!
  \***********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_7eb429e4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=7eb429e4& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/chat-box/index.vue?vue&type=template&id=7eb429e4&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_7eb429e4___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_7eb429e4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/chat-box/message-item.vue":
/*!***********************************************************!*\
  !*** ./resources/js/components/chat-box/message-item.vue ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _message_item_vue_vue_type_template_id_5c5f8277___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./message-item.vue?vue&type=template&id=5c5f8277& */ "./resources/js/components/chat-box/message-item.vue?vue&type=template&id=5c5f8277&");
/* harmony import */ var _message_item_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./message-item.vue?vue&type=script&lang=js& */ "./resources/js/components/chat-box/message-item.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _message_item_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _message_item_vue_vue_type_template_id_5c5f8277___WEBPACK_IMPORTED_MODULE_0__["render"],
  _message_item_vue_vue_type_template_id_5c5f8277___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/chat-box/message-item.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/chat-box/message-item.vue?vue&type=script&lang=js&":
/*!************************************************************************************!*\
  !*** ./resources/js/components/chat-box/message-item.vue?vue&type=script&lang=js& ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_message_item_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./message-item.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/chat-box/message-item.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_message_item_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/chat-box/message-item.vue?vue&type=template&id=5c5f8277&":
/*!******************************************************************************************!*\
  !*** ./resources/js/components/chat-box/message-item.vue?vue&type=template&id=5c5f8277& ***!
  \******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_message_item_vue_vue_type_template_id_5c5f8277___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./message-item.vue?vue&type=template&id=5c5f8277& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/chat-box/message-item.vue?vue&type=template&id=5c5f8277&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_message_item_vue_vue_type_template_id_5c5f8277___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_message_item_vue_vue_type_template_id_5c5f8277___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/chat-box/room-item.vue":
/*!********************************************************!*\
  !*** ./resources/js/components/chat-box/room-item.vue ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _room_item_vue_vue_type_template_id_7c922152___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./room-item.vue?vue&type=template&id=7c922152& */ "./resources/js/components/chat-box/room-item.vue?vue&type=template&id=7c922152&");
/* harmony import */ var _room_item_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./room-item.vue?vue&type=script&lang=js& */ "./resources/js/components/chat-box/room-item.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _room_item_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _room_item_vue_vue_type_template_id_7c922152___WEBPACK_IMPORTED_MODULE_0__["render"],
  _room_item_vue_vue_type_template_id_7c922152___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/chat-box/room-item.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/chat-box/room-item.vue?vue&type=script&lang=js&":
/*!*********************************************************************************!*\
  !*** ./resources/js/components/chat-box/room-item.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_room_item_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./room-item.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/chat-box/room-item.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_room_item_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/chat-box/room-item.vue?vue&type=template&id=7c922152&":
/*!***************************************************************************************!*\
  !*** ./resources/js/components/chat-box/room-item.vue?vue&type=template&id=7c922152& ***!
  \***************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_room_item_vue_vue_type_template_id_7c922152___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./room-item.vue?vue&type=template&id=7c922152& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/chat-box/room-item.vue?vue&type=template&id=7c922152&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_room_item_vue_vue_type_template_id_7c922152___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_room_item_vue_vue_type_template_id_7c922152___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/chat-box/settings.vue":
/*!*******************************************************!*\
  !*** ./resources/js/components/chat-box/settings.vue ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _settings_vue_vue_type_template_id_923098fe___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./settings.vue?vue&type=template&id=923098fe& */ "./resources/js/components/chat-box/settings.vue?vue&type=template&id=923098fe&");
/* harmony import */ var _settings_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./settings.vue?vue&type=script&lang=js& */ "./resources/js/components/chat-box/settings.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _settings_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./settings.vue?vue&type=style&index=0&lang=scss& */ "./resources/js/components/chat-box/settings.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _settings_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _settings_vue_vue_type_template_id_923098fe___WEBPACK_IMPORTED_MODULE_0__["render"],
  _settings_vue_vue_type_template_id_923098fe___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/chat-box/settings.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/chat-box/settings.vue?vue&type=script&lang=js&":
/*!********************************************************************************!*\
  !*** ./resources/js/components/chat-box/settings.vue?vue&type=script&lang=js& ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_settings_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./settings.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/chat-box/settings.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_settings_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/chat-box/settings.vue?vue&type=style&index=0&lang=scss&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/components/chat-box/settings.vue?vue&type=style&index=0&lang=scss& ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_2_node_modules_sass_loader_dist_cjs_js_ref_9_3_node_modules_vue_loader_lib_index_js_vue_loader_options_settings_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--9-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--9-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./settings.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/chat-box/settings.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_2_node_modules_sass_loader_dist_cjs_js_ref_9_3_node_modules_vue_loader_lib_index_js_vue_loader_options_settings_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_2_node_modules_sass_loader_dist_cjs_js_ref_9_3_node_modules_vue_loader_lib_index_js_vue_loader_options_settings_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_2_node_modules_sass_loader_dist_cjs_js_ref_9_3_node_modules_vue_loader_lib_index_js_vue_loader_options_settings_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_2_node_modules_sass_loader_dist_cjs_js_ref_9_3_node_modules_vue_loader_lib_index_js_vue_loader_options_settings_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/components/chat-box/settings.vue?vue&type=template&id=923098fe&":
/*!**************************************************************************************!*\
  !*** ./resources/js/components/chat-box/settings.vue?vue&type=template&id=923098fe& ***!
  \**************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_settings_vue_vue_type_template_id_923098fe___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./settings.vue?vue&type=template&id=923098fe& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/chat-box/settings.vue?vue&type=template&id=923098fe&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_settings_vue_vue_type_template_id_923098fe___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_settings_vue_vue_type_template_id_923098fe___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/mixins/config-form.js":
/*!********************************************!*\
  !*** ./resources/js/mixins/config-form.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _api_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @api/config */ "./resources/js/api/config.js");
/* harmony import */ var _js_core_utils_formatter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @js/core/utils/formatter */ "./resources/js/core/utils/formatter.js");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




/* harmony default export */ __webpack_exports__["default"] = ({
  components: {},
  data: function data() {
    return {
      formData: {},
      formErrors: {},
      initialFormData: null,
      initianLength: 0,
      emptyFormData: null,
      entity: null,
      preRequisite: {},
      isLoading: true,
      useUserPreference: false,
      dataType: null,
      configType: ''
    };
  },
  computed: _objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_1__["mapGetters"])('config', {
    configsWithPreference: 'configs',
    configs: 'configsOriginal',
    vars: 'vars',
    allowExtraInput: 'allowExtraInput'
  })), {}, {
    formHasErrors: function formHasErrors() {
      var ans = false;
      this.formErrors.objForEach(function (er) {
        ans = er !== '' ? true : ans;
      });
      return ans;
    }
  }),
  methods: _objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_1__["mapActions"])('config', ['GetConfig'])), Object(vuex__WEBPACK_IMPORTED_MODULE_1__["mapActions"])('user', ['GetUser'])), Object(vuex__WEBPACK_IMPORTED_MODULE_1__["mapActions"])('navigation', ['Generate'])), Object(vuex__WEBPACK_IMPORTED_MODULE_1__["mapActions"])('common', ['Custom'])), {}, {
    findActualValue: function findActualValue(value, options) {
      var key = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'uuid';
      return options.find(function (option) {
        return option[key] === value;
      }) || null;
    },
    submit: function submit() {
      var _this = this;

      var preference = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

      if (formUtil.isUnchanged(this.initialFormData, this.formData)) {
        this.$toasted.info(this.$t('general.nothing_changed'), this.$toastConfig.info);
        return false;
      }

      this.isLoading = true;

      if (this.formData.hasOwnProperty('type')) {
        this.formData.type = this.formData.type.snakeCase();
      }

      var storeFn = preference === true || this.useUserPreference ? _api_config__WEBPACK_IMPORTED_MODULE_2__["updateUserPref"] : this.configType === 'module' ? _api_config__WEBPACK_IMPORTED_MODULE_2__["updateModule"] : _api_config__WEBPACK_IMPORTED_MODULE_2__["update"];

      if (this.beforeSubmit && typeof this.beforeSubmit === "function") {
        var shouldProceed = this.beforeSubmit();

        if (shouldProceed === false) {
          this.isLoading = false;
          return;
        }
      }

      storeFn(this.formData).then(function (response) {
        var fnToCall = preference === true || _this.useUserPreference ? _this.GetUser : _this.GetConfig;
        fnToCall().then(function () {
          _this.$toasted.success(response.message, _this.$toastConfig);

          _this.initialFormData = _.cloneDeep(_this.formData);
          _this.isLoading = false;
        })["catch"](function (error) {
          _this.isLoading = false;
          _this.formErrors = formUtil.handleErrors(error);
        });

        if (typeof _this.afterSubmit === "function") {
          _this.afterSubmit();
        }

        if (typeof _this.afterSubmitSuccess === "function") {
          _this.afterSubmitSuccess();
        }
      })["catch"](function (error) {
        _this.isLoading = false;
        _this.formErrors = formUtil.handleErrors(error);

        if (typeof _this.afterSubmit === "function") {
          _this.afterSubmit();
        }

        if (typeof _this.afterSubmitError === "function") {
          _this.afterSubmitError();
        }
      });
    },
    reset: function reset() {
      var _this2 = this;

      formUtil.confirmAction().then(function (result) {
        if (result.value) {
          _this2.formData = Object.assign({}, _this2.formData, _.cloneDeep(_this2.initialFormData));
        }
      });
    },
    unsavedCheck: function unsavedCheck(next) {
      formUtil.unsavedCheckAlert(this.initialFormData, this.formData, next);
    },
    fillPreRequisite: function fillPreRequisite(response) {
      var _this3 = this;

      this.preRequisite.objForEach(function (value, key) {
        _this3.preRequisite[key] = response.hasOwnProperty(key) ? response[key] : value;
      });
      this.isLoading = false;
    },
    fillFormData: function fillFormData() {
      var _this4 = this;

      this.isLoading = true;
      var configsToUse = this.useUserPreference ? this.configsWithPreference : this.configs;

      if (this.formData.type && configsToUse[this.formData.type]) {
        this.formData = formUtil.assignValues(this.formData, configsToUse[this.formData.type]);
      }

      if (this.formData.types && Array.isArray(this.formData.types)) {
        this.formData.types.forEach(function (value) {
          _this4.formData = formUtil.assignValues(_this4.formData, configsToUse[value]);
        });
      }

      if (this.formData.override) {
        this.formData.objForEach(function (value, key) {
          if (value && _.isObject(value)) {
            _this4.formData[key] = formUtil.assignValues(_this4.formData[key], configsToUse[key]);
          } else {
            _this4.formData[key] = configsToUse[key] ? configsToUse[key] : value;
          }
        });
      }

      if (typeof this.addNewRow === "function" && typeof this.addNewRowIfNone === "function") {
        this.addNewRowIfNone();
      }

      this.isLoading = false;
    },
    getInitialData: function getInitialData(callbackFn) {
      var _this5 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _this5.isLoading = true;
                _context.prev = 1;
                _context.next = 4;
                return _api_config__WEBPACK_IMPORTED_MODULE_2__["getPreRequisite"](Object.keys(_this5.preRequisite).join(','));

              case 4:
                response = _context.sent;

                _this5.fillPreRequisite(response);

                if (callbackFn) {
                  _this5.$nextTick(function () {
                    callbackFn();
                  });
                }

                return _context.abrupt("return", response);

              case 10:
                _context.prev = 10;
                _context.t0 = _context["catch"](1);
                _this5.isLoading = false;
                _this5.formErrors = formUtil.handleErrors(_context.t0);
                throw _context.t0;

              case 15:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[1, 10]]);
      }))();
    }
  }),
  mounted: function mounted() {
    this.fillFormData();
    this.initialFormData = _.cloneDeep(this.formData);
  },
  beforeDestroy: function beforeDestroy() {
    delete this.formData;
    delete this.formErrors;
    delete this.preRequisite;
  },
  beforeRouteLeave: function beforeRouteLeave(to, from, next) {
    this.unsavedCheck(next);
  }
});

/***/ })

}]);
//# sourceMappingURL=app-layout.js.map?id=71372e6821461c3f7c79