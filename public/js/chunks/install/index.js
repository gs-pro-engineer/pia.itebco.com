(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["install/index"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/install/index.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/install/index.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_form_wizard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-form-wizard */ "./node_modules/vue-form-wizard/dist/vue-form-wizard.js");
/* harmony import */ var vue_form_wizard__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_form_wizard__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _partials_quotes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./partials/quotes */ "./resources/js/views/install/partials/quotes.vue");
/* harmony import */ var _api_install__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @api/install */ "./resources/js/api/install.js");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _js_core_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @js/core/utils */ "./resources/js/core/utils/index.js");
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





/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    FormWizard: vue_form_wizard__WEBPACK_IMPORTED_MODULE_0__["FormWizard"],
    TabContent: vue_form_wizard__WEBPACK_IMPORTED_MODULE_0__["TabContent"],
    Quotes: _partials_quotes__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  data: function data() {
    return {
      name: '',
      version: '',
      serverChecks: [],
      folderChecks: [],
      formData: {
        dbHost: 'localhost',
        dbPort: 3306,
        dbDatabase: '',
        dbUsername: '',
        dbPassword: '',
        name: '',
        email: '',
        username: '',
        language: 'Japanese',
        password: '',
        passwordConfirmation: '',
        accessCode: '',
        envatoEmail: '',
        seed: false,
        skipDbVersionCheck: false
      },
      verifier: '',
      formErrors: {},
      quotes: [],
      isProcessing: false,
      isLoading: false,
      helpTopic: ''
    };
  },
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_3__["mapGetters"])('config', ['vars'])),
  mounted: function mounted() {
    this.getPreRequisite();
  },
  methods: {
    getPreRequisite: function getPreRequisite() {
      var _this = this;

      this.isLoading = true;
      _api_install__WEBPACK_IMPORTED_MODULE_2__["getPreRequisite"](this.formData).then(function (response) {
        _this.isLoading = false;
        _this.name = response.app.name;
        _this.serverChecks = response.preRequisite.server;
        _this.folderChecks = response.preRequisite.folder;
        _this.verifier = response.app.verifier;
        _this.version = response.app.version;
        _this.quotes = response.quotes;
        var savedFormData = Object(_js_core_utils__WEBPACK_IMPORTED_MODULE_4__["getFromStorage"])('KMInstallWizFormData', true);
        formUtil.assignValues(_this.formData, savedFormData);
      })["catch"](function (error) {
        _this.isLoading = false;
        _this.formErrors = formUtil.handleErrors(error);
      });
    },
    preRequisiteFulfill: function preRequisiteFulfill() {
      var serverErrors = this.serverChecks.filter(function (serverCheck) {
        return serverCheck.type === 'error';
      });
      var folderErrors = this.folderChecks.filter(function (folderCheck) {
        return folderCheck.type === 'error';
      });

      if (serverErrors.length) {
        this.$toasted.error(this.$t('product.install.fix_server_error'), this.$toastConfig);
        return false;
      } else if (folderErrors.length) {
        this.$toasted.error(this.$t('product.install.fix_folder_error'), this.$toastConfig);
        return false;
      }

      return true;
    },
    validateDatabase: function validateDatabase() {
      return this.validate('database');
    },
    validateAdmin: function validateAdmin() {
      return this.validate('admin');
    },
    validateAccessCode: function validateAccessCode() {
      return this.validate('access_code');
    },
    validate: function validate(option) {
      var _this2 = this;

      this.isLoading = true;
      Object(_js_core_utils__WEBPACK_IMPORTED_MODULE_4__["saveToStorage"])('KMInstallWizFormData', this.formData);
      return _api_install__WEBPACK_IMPORTED_MODULE_2__["validate"](option, this.formData).then(function () {
        _this2.isLoading = false;
        return true;
      })["catch"](function (error) {
        _this2.isLoading = false;
        _this2.formErrors = formUtil.handleErrors(error);
        return false;
      });
    },
    finishInstallation: function finishInstallation() {
      var _this3 = this;

      this.isProcessing = true;
      this.$toasted.success(this.$t('product.install.installation_processing'), this.$toastConfig);
      _api_install__WEBPACK_IMPORTED_MODULE_2__["install"](this.formData).then(function (response) {
        Object(_js_core_utils__WEBPACK_IMPORTED_MODULE_4__["removeFromStorage"])('KMInstallWizFormData');

        _this3.$store.dispatch('config/SetLoaded', false);

        _this3.$toasted.success(response.message, _this3.$toastConfig);

        _this3.$router.push({
          name: 'login'
        });
      })["catch"](function (error) {
        _this3.isProcessing = false;
        _this3.formErrors = formUtil.handleErrors(error);
      });
    },
    onTabChange: function onTabChange(prevIndex, nextIndex) {
      var that = this;
      this.$nextTick(function () {
        if (that) {
          if (nextIndex === 1 && that.$refs["dbDatabase"]) {
            that.$refs["dbDatabase"].$refs["base-input-dbDatabase"].focus();
          } else if (nextIndex === 2 && that.$refs["email"]) {
            that.$refs["email"].$refs["base-input-email"].focus();
          } else if (nextIndex === 3 && that.$refs["accessCode"]) {
            that.$refs["accessCode"].$refs["base-input-accessCode"].focus();
          }
        }
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/install/partials/quotes.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/install/partials/quotes.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bootstrap-vue */ "./node_modules/bootstrap-vue/esm/index.js");
//
//
//
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
    BCarousel: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BCarousel"],
    BCarouselSlide: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BCarouselSlide"]
  },
  data: function data() {
    return {
      slide: 0,
      quotes: [{
        "quote": "Life isn’t about getting and having, it’s about giving and being.",
        "author": "Kevin Kruse"
      }, {
        "quote": "Whatever the mind of man can conceive and believe, it can achieve.",
        "author": "Napoleon Hill"
      }, {
        "quote": "Strive not to be a success, but rather to be of value.",
        "author": "Albert Einstein"
      }, {
        "quote": "Two roads diverged in a wood, and I—I took the one less traveled by, And that has made all the difference.",
        "author": "Robert Frost"
      }, {
        "quote": "I attribute my success to this: I never gave or took any excuse.",
        "author": "Florence Nightingale"
      }, {
        "quote": "You miss 100% of the shots you don’t take.",
        "author": "Wayne Gretzky"
      }, {
        "quote": "I’ve missed more than 9000 shots in my career. I’ve lost almost 300 games. 26 times I’ve been trusted to take the game winning shot and missed. I’ve failed over and over and over again in my life. And that is why I succeed.",
        "author": "Michael Jordan"
      }, {
        "quote": "The most difficult thing is the decision to act, the rest is merely tenacity.",
        "author": "Amelia Earhart"
      }, {
        "quote": "Every strike brings me closer to the next home run.",
        "author": "Babe Ruth"
      }, {
        "quote": "Definiteness of purpose is the starting point of all achievement.",
        "author": "W. Clement Stone"
      }, {
        "quote": "We must balance conspicuous consumption with conscious capitalism.",
        "author": "Kevin Kruse"
      }, {
        "quote": "Life is what happens to you while you’re busy making other plans.",
        "author": "John Lennon"
      }, {
        "quote": "We become what we think about.",
        "author": "Earl Nightingale"
      }, {
        "quote": "Twenty years from now you will be more disappointed by the things that you didn’t do than by the ones you did do, so throw off the bowlines, sail away from safe harbor, catch the trade winds in your sails.  Explore, Dream, Discover.",
        "author": "Mark Twain"
      }, {
        "quote": "Life is 10% what happens to me and 90% of how I react to it.",
        "author": "Charles Swindoll"
      }, {
        "quote": "The most common way people give up their power is by thinking they don’t have any.",
        "author": "Alice Walker"
      }, {
        "quote": "The mind is everything. What you think you become.",
        "author": "Buddha"
      }, {
        "quote": "The best time to plant a tree was 20 years ago. The second best time is now.",
        "author": "Chinese Proverb"
      }, {
        "quote": "An unexamined life is not worth living.",
        "author": "Socrates"
      }, {
        "quote": "Eighty percent of success is showing up.",
        "author": "Woody Allen"
      }, {
        "quote": "Your time is limited, so don’t waste it living someone else’s life.",
        "author": "Steve Jobs"
      }, {
        "quote": "Winning isn’t everything, but wanting to win is.",
        "author": "Vince Lombardi"
      }, {
        "quote": "I am not a product of my circumstances. I am a product of my decisions.",
        "author": "Stephen Covey"
      }, {
        "quote": "Every child is an artist.  The problem is how to remain an artist once he grows up.",
        "author": "Pablo Picasso"
      }, {
        "quote": "You can never cross the ocean until you have the courage to lose sight of the shore.",
        "author": "Christopher Columbus"
      }, {
        "quote": "I’ve learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.",
        "author": "Maya Angelou"
      }, {
        "quote": "Either you run the day, or the day runs you.",
        "author": "Jim Rohn"
      }, {
        "quote": "Whether you think you can or you think you can’t, you’re right.",
        "author": "Henry Ford"
      }, {
        "quote": "The two most important days in your life are the day you are born and the day you find out why.",
        "author": "Mark Twain"
      }, {
        "quote": "Whatever you can do, or dream you can, begin it.  Boldness has genius, power and magic in it.",
        "author": "Johann Wolfgang von Goethe"
      }, {
        "quote": "The best revenge is massive success.",
        "author": "Frank Sinatra"
      }, {
        "quote": "People often say that motivation doesn’t last. Well, neither does bathing.  That’s why we recommend it daily.",
        "author": "Zig Ziglar"
      }, {
        "quote": "Life shrinks or expands in proportion to one’s courage.",
        "author": "Anais Nin"
      }, {
        "quote": "If you hear a voice within you say “you cannot paint,” then by all means paint and that voice will be silenced.",
        "author": "Vincent Van Gogh"
      }, {
        "quote": "There is only one way to avoid criticism: do nothing, say nothing, and be nothing.",
        "author": "Aristotle"
      }, {
        "quote": "Ask and it will be given to you; search, and you will find; knock and the door will be opened for you.",
        "author": "Jesus"
      }, {
        "quote": "The only person you are destined to become is the person you decide to be.",
        "author": "Ralph Waldo Emerson"
      }, {
        "quote": "Go confidently in the direction of your dreams.  Live the life you have imagined.",
        "author": "Henry David Thoreau"
      }, {
        "quote": "When I stand before God at the end of my life, I would hope that I would not have a single bit of talent left and could say, I used everything you gave me.",
        "author": "Erma Bombeck"
      }, {
        "quote": "Few things can help an individual more than to place responsibility on him, and to let him know that you trust him.",
        "author": "Booker T. Washington"
      }, {
        "quote": "Certain things catch your eye, but pursue only those that capture the heart.",
        "author": " Ancient Indian Proverb"
      }, {
        "quote": "Believe you can and you’re halfway there.",
        "author": "Theodore Roosevelt"
      }, {
        "quote": "Everything you’ve ever wanted is on the other side of fear.",
        "author": "George Addair"
      }, {
        "quote": "We can easily forgive a child who is afraid of the dark; the real tragedy of life is when men are afraid of the light.",
        "author": "Plato"
      }, {
        "quote": "Teach thy tongue to say, “I do not know,” and thous shalt progress.",
        "author": "Maimonides"
      }, {
        "quote": "Start where you are. Use what you have.  Do what you can.",
        "author": "Arthur Ashe"
      }, {
        "quote": "When I was 5 years old, my mother always told me that happiness was the key to life.  When I went to school, they asked me what I wanted to be when I grew up.  I wrote down ‘happy’.  They told me I didn’t understand the assignment, and I told them they didn’t understand life.",
        "author": "John Lennon"
      }, {
        "quote": "Fall seven times and stand up eight.",
        "author": "Japanese Proverb"
      }, {
        "quote": "When one door of happiness closes, another opens, but often we look so long at the closed door that we do not see the one that has been opened for us.",
        "author": "Helen Keller"
      }, {
        "quote": "Everything has beauty, but not everyone can see.",
        "author": "Confucius"
      }, {
        "quote": "How wonderful it is that nobody need wait a single moment before starting to improve the world.",
        "author": "Anne Frank"
      }, {
        "quote": "When I let go of what I am, I become what I might be.",
        "author": "Lao Tzu"
      }, {
        "quote": "Life is not measured by the number of breaths we take, but by the moments that take our breath away.",
        "author": "Maya Angelou"
      }, {
        "quote": "Happiness is not something readymade.  It comes from your own actions.",
        "author": "Dalai Lama"
      }, {
        "quote": "If you’re offered a seat on a rocket ship, don’t ask what seat! Just get on.",
        "author": "Sheryl Sandberg"
      }, {
        "quote": "First, have a definite, clear practical ideal; a goal, an objective. Second, have the necessary means to achieve your ends; wisdom, money, materials, and methods. Third, adjust all your means to that end.",
        "author": "Aristotle"
      }, {
        "quote": "If the wind will not serve, take to the oars.",
        "author": "Latin Proverb"
      }, {
        "quote": "You can’t fall if you don’t climb.  But there’s no joy in living your whole life on the ground.",
        "author": "Unknown"
      }, {
        "quote": "We must believe that we are gifted for something, and that this thing, at whatever cost, must be attained.",
        "author": "Marie Curie"
      }, {
        "quote": "Too many of us are not living our dreams because we are living our fears.",
        "author": "Les Brown"
      }, {
        "quote": "Challenges are what make life interesting and overcoming them is what makes life meaningful.",
        "author": "Joshua J. Marine"
      }, {
        "quote": "If you want to lift yourself up, lift up someone else.",
        "author": "Booker T. Washington"
      }, {
        "quote": "I have been impressed with the urgency of doing. Knowing is not enough; we must apply. Being willing is not enough; we must do.",
        "author": "Leonardo da Vinci"
      }, {
        "quote": "Limitations live only in our minds.  But if we use our imaginations, our possibilities become limitless.",
        "author": "Jamie Paolinetti"
      }, {
        "quote": "You take your life in your own hands, and what happens? A terrible thing, no one to blame.",
        "author": "Erica Jong"
      }, {
        "quote": "What’s money? A man is a success if he gets up in the morning and goes to bed at night and in between does what he wants to do.",
        "author": "Bob Dylan"
      }, {
        "quote": "I didn’t fail the test. I just found 100 ways to do it wrong.",
        "author": "Benjamin Franklin"
      }, {
        "quote": "In order to succeed, your desire for success should be greater than your fear of failure.",
        "author": "Bill Cosby"
      }, {
        "quote": "A person who never made a mistake never tried anything new.",
        "author": " Albert Einstein"
      }, {
        "quote": "The person who says it cannot be done should not interrupt the person who is doing it.",
        "author": "Chinese Proverb"
      }, {
        "quote": "There are no traffic jams along the extra mile.",
        "author": "Roger Staubach"
      }, {
        "quote": "It is never too late to be what you might have been.",
        "author": "George Eliot"
      }, {
        "quote": "You become what you believe.",
        "author": "Oprah Winfrey"
      }, {
        "quote": "I would rather die of passion than of boredom.",
        "author": "Vincent van Gogh"
      }, {
        "quote": "A truly rich man is one whose children run into his arms when his hands are empty.",
        "author": "Unknown"
      }, {
        "quote": "It is not what you do for your children, but what you have taught them to do for themselves, that will make them successful human beings.",
        "author": "Ann Landers"
      }, {
        "quote": "If you want your children to turn out well, spend twice as much time with them, and half as much money.",
        "author": "Abigail Van Buren"
      }, {
        "quote": "Build your own dreams, or someone else will hire you to build theirs.",
        "author": "Farrah Gray"
      }, {
        "quote": "The battles that count aren’t the ones for gold medals. The struggles within yourself–the invisible battles inside all of us–that’s where it’s at.",
        "author": "Jesse Owens"
      }, {
        "quote": "Education costs money.  But then so does ignorance.",
        "author": "Sir Claus Moser"
      }, {
        "quote": "I have learned over the years that when one’s mind is made up, this diminishes fear.",
        "author": "Rosa Parks"
      }, {
        "quote": "It does not matter how slowly you go as long as you do not stop.",
        "author": "Confucius"
      }, {
        "quote": "If you look at what you have in life, you’ll always have more. If you look at what you don’t have in life, you’ll never have enough.",
        "author": "Oprah Winfrey"
      }, {
        "quote": "Remember that not getting what you want is sometimes a wonderful stroke of luck.",
        "author": "Dalai Lama"
      }, {
        "quote": "You can’t use up creativity.  The more you use, the more you have.",
        "author": "Maya Angelou"
      }, {
        "quote": "Dream big and dare to fail.",
        "author": "Norman Vaughan"
      }, {
        "quote": "Our lives begin to end the day we become silent about things that matter.",
        "author": "Martin Luther King Jr."
      }, {
        "quote": "Do what you can, where you are, with what you have.",
        "author": "Teddy Roosevelt"
      }, {
        "quote": "If you do what you’ve always done, you’ll get what you’ve always gotten.",
        "author": "Tony Robbins"
      }, {
        "quote": "Dreaming, after all, is a form of planning.",
        "author": "Gloria Steinem"
      }, {
        "quote": "It’s your place in the world; it’s your life. Go on and do all you can with it, and make it the life you want to live.",
        "author": "Mae Jemison"
      }, {
        "quote": "You may be disappointed if you fail, but you are doomed if you don’t try.",
        "author": "Beverly Sills"
      }, {
        "quote": "Remember no one can make you feel inferior without your consent.",
        "author": "Eleanor Roosevelt"
      }, {
        "quote": "Life is what we make it, always has been, always will be.",
        "author": "Grandma Moses"
      }, {
        "quote": "The question isn’t who is going to let me; it’s who is going to stop me.",
        "author": "Ayn Rand"
      }, {
        "quote": "When everything seems to be going against you, remember that the airplane takes off against the wind, not with it.",
        "author": "Henry Ford"
      }, {
        "quote": "It’s not the years in your life that count. It’s the life in your years.",
        "author": "Abraham Lincoln"
      }, {
        "quote": "Change your thoughts and you change your world.",
        "author": "Norman Vincent Peale"
      }, {
        "quote": "Either write something worth reading or do something worth writing.",
        "author": "Benjamin Franklin"
      }, {
        "quote": "Nothing is impossible, the word itself says, “I’m possible!”",
        "author": "–Audrey Hepburn"
      }, {
        "quote": "The only way to do great work is to love what you do.",
        "author": "Steve Jobs"
      }, {
        "quote": "If you can dream it, you can achieve it.",
        "author": "Zig Ziglar"
      }]
    };
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/install/index.vue?vue&type=style&index=0&lang=scss&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-2!./node_modules/sass-loader/dist/cjs.js??ref--9-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/install/index.vue?vue&type=style&index=0&lang=scss& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports
exports.i(__webpack_require__(/*! -!../../../../node_modules/css-loader!vue-form-wizard/dist/vue-form-wizard.min.css */ "./node_modules/css-loader/index.js!./node_modules/vue-form-wizard/dist/vue-form-wizard.min.css"), "");
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Muli:300,400,600,700,800,900);", ""]);

// module
exports.push([module.i, "@media (min-width: 992px) {\n.container {\n    width: 80vw;\n    max-width: 80vw;\n    margin: 1rem;\n}\n}\n.install-box .vue-form-wizard .wizard-icon-circle.square_shape {\n  border-radius: 1rem;\n}\n.install-box .vue-form-wizard .wizard-icon-circle .wizard-icon-container.square_shape {\n  border-radius: 0.5rem;\n}\n.install-box .vue-form-wizard .wizard-header {\n  padding: 1.5rem 1.5rem 1rem;\n}\n.install-box .vue-form-wizard .wizard-tab-content {\n  padding: 1.5rem 1.5rem 1.5rem;\n}\n.install-box .vue-form-wizard .wizard-tab-content .alert {\n  padding: 0.5rem 0.875rem;\n}\n.install-box .vue-form-wizard .wizard-tab-content .server-requirements .alert {\n  padding: 0.5rem 0.875rem;\n  margin-bottom: 0.5rem;\n  font-size: 0.75rem;\n}\n.install-box .vue-form-wizard .wizard-card-footer {\n  padding: 1.5rem 1.5rem 0rem;\n}\n.install-box .vue-form-wizard .wizard-card-footer .wizard-btn {\n  font-size: 22px;\n  font-weight: 700;\n  padding: 0.5rem 1rem;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/install/partials/quotes.vue?vue&type=style&index=0&lang=scss&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-2!./node_modules/sass-loader/dist/cjs.js??ref--9-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/install/partials/quotes.vue?vue&type=style&index=0&lang=scss& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".quote-carousel .carousel-caption {\n  width: 100%;\n  height: 100%;\n  left: 0;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  justify-content: center;\n  display: flex;\n  flex-direction: column;\n  padding: 20px 100px;\n}\n.quote-carousel .carousel-control-prev-icon {\n  background-image: url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23000' viewBox='0 0 8 8'%3E%3Cpath d='M5.25 0l-4 4 4 4 1.5-1.5-2.5-2.5 2.5-2.5-1.5-1.5z'/%3E%3C/svg%3E\");\n  opacity: 0.8;\n}\n.quote-carousel .carousel-control-next-icon {\n  background-image: url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23000' viewBox='0 0 8 8'%3E%3Cpath d='M2.75 0l-1.5 1.5 2.5 2.5-2.5 2.5 1.5 1.5 4-4-4-4z'/%3E%3C/svg%3E\");\n  opacity: 0.8;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/install/index.vue?vue&type=style&index=0&lang=scss&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-2!./node_modules/sass-loader/dist/cjs.js??ref--9-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/install/index.vue?vue&type=style&index=0&lang=scss& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--9-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--9-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/install/index.vue?vue&type=style&index=0&lang=scss&");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/install/partials/quotes.vue?vue&type=style&index=0&lang=scss&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-2!./node_modules/sass-loader/dist/cjs.js??ref--9-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/install/partials/quotes.vue?vue&type=style&index=0&lang=scss& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--9-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--9-3!../../../../../node_modules/vue-loader/lib??vue-loader-options!./quotes.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/install/partials/quotes.vue?vue&type=style&index=0&lang=scss&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/install/index.vue?vue&type=template&id=4b6051ef&":
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/install/index.vue?vue&type=template&id=4b6051ef& ***!
  \***********************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "general-page install-page" }, [
    _c(
      "div",
      { staticClass: "container" },
      [
        _c("animated-loader", {
          attrs: {
            "is-loading": _vm.isLoading,
            "loader-color": _vm.vars.loaderColor
          }
        }),
        _vm._v(" "),
        _c(
          "card",
          {
            directives: [
              {
                name: "show",
                rawName: "v-show",
                value: !_vm.isProcessing,
                expression: "!isProcessing"
              }
            ],
            staticClass: "border-0 install-box",
            attrs: {
              type: "white",
              shadow: "",
              "header-classes": "bg-white",
              "body-classes": "p-0"
            }
          },
          [
            _c(
              "form-wizard",
              {
                ref: "installWizard",
                attrs: {
                  color: _vm.vars.colors.primary,
                  shape: "square",
                  errorColor: _vm.vars.colors.danger,
                  title: _vm.name + " " + _vm.version,
                  subtitle: _vm.$t("product.install.sub_title"),
                  nextButtonText: _vm.$t("product.install.next_button_content"),
                  backButtonText: _vm.$t("product.install.back_button_content"),
                  finishButtonText: _vm.$t(
                    "product.install.finish_button_content"
                  )
                },
                on: {
                  "on-complete": _vm.finishInstallation,
                  "on-change": _vm.onTabChange
                }
              },
              [
                _c(
                  "tab-content",
                  {
                    attrs: {
                      title: _vm.$t("product.install.pre_requisite"),
                      "before-change": _vm.preRequisiteFulfill,
                      icon: "fas fa-tasks"
                    }
                  },
                  [
                    _c("h5", { staticClass: "card-title text-center" }, [
                      _vm._v(
                        _vm._s(_vm.$t("product.install.server_requirements"))
                      )
                    ]),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "row server-requirements" },
                      _vm._l(_vm.serverChecks, function(serverCheck) {
                        return _vm.serverChecks.length
                          ? _c("div", { staticClass: "col-3" }, [
                              _c(
                                "p",
                                {
                                  class: [
                                    "alert",
                                    "alert-" +
                                      (serverCheck.type === "error"
                                        ? "danger"
                                        : "info")
                                  ]
                                },
                                [
                                  _c("i", {
                                    class: [
                                      "fa",
                                      "fa-" +
                                        (serverCheck.type === "error"
                                          ? "times"
                                          : "check")
                                    ]
                                  }),
                                  _vm._v(" " + _vm._s(serverCheck.message))
                                ]
                              )
                            ])
                          : _vm._e()
                      }),
                      0
                    ),
                    _vm._v(" "),
                    _c("h5", { staticClass: "card-title text-center mt-3" }, [
                      _vm._v(
                        _vm._s(_vm.$t("product.install.folder_permissions"))
                      )
                    ]),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "row server-requirements" },
                      _vm._l(_vm.folderChecks, function(folderCheck) {
                        return _vm.folderChecks.length
                          ? _c("div", { staticClass: "col-3" }, [
                              _c(
                                "p",
                                {
                                  class: [
                                    "alert",
                                    "alert-" +
                                      (folderCheck.type === "error"
                                        ? "danger"
                                        : "info")
                                  ]
                                },
                                [
                                  _c("i", {
                                    class: [
                                      "fa",
                                      "fa-" +
                                        (folderCheck.type === "error"
                                          ? "times"
                                          : "check")
                                    ]
                                  }),
                                  _vm._v(" " + _vm._s(folderCheck.message))
                                ]
                              )
                            ])
                          : _vm._e()
                      }),
                      0
                    )
                  ]
                ),
                _vm._v(" "),
                _c(
                  "tab-content",
                  {
                    attrs: {
                      title: _vm.$t("product.install.database_setup"),
                      "before-change": _vm.validateDatabase,
                      icon: "fas fa-database"
                    }
                  },
                  [
                    _c(
                      "form",
                      {
                        staticClass: "form-horizontal",
                        on: {
                          submit: function($event) {
                            $event.preventDefault()
                            return _vm.$refs.installWizard.nextTab()
                          }
                        }
                      },
                      [
                        _c("div", { staticClass: "row" }, [
                          _c(
                            "div",
                            { staticClass: "col-12 col-md-4" },
                            [
                              _c("base-input", {
                                staticClass: "mb-3",
                                attrs: {
                                  label: _vm.$t(
                                    "product.install.props.db_port"
                                  ),
                                  type: "text",
                                  name: "dbPort",
                                  error: _vm.formErrors.dbPort
                                },
                                on: {
                                  "update:error": function($event) {
                                    return _vm.$set(
                                      _vm.formErrors,
                                      "dbPort",
                                      $event
                                    )
                                  }
                                },
                                model: {
                                  value: _vm.formData.dbPort,
                                  callback: function($$v) {
                                    _vm.$set(_vm.formData, "dbPort", $$v)
                                  },
                                  expression: "formData.dbPort"
                                }
                              })
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "div",
                            { staticClass: "col-12 col-md-8" },
                            [
                              _c("base-input", {
                                staticClass: "mb-3",
                                attrs: {
                                  label: _vm.$t(
                                    "product.install.props.db_host"
                                  ),
                                  type: "text",
                                  name: "dbHost",
                                  error: _vm.formErrors.dbHost
                                },
                                on: {
                                  "update:error": function($event) {
                                    return _vm.$set(
                                      _vm.formErrors,
                                      "dbHost",
                                      $event
                                    )
                                  }
                                },
                                model: {
                                  value: _vm.formData.dbHost,
                                  callback: function($$v) {
                                    _vm.$set(_vm.formData, "dbHost", $$v)
                                  },
                                  expression: "formData.dbHost"
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
                              _c("base-input", {
                                ref: "dbDatabase",
                                staticClass: "mb-3",
                                attrs: {
                                  label: _vm.$t(
                                    "product.install.props.db_database"
                                  ),
                                  type: "text",
                                  name: "dbDatabase",
                                  error: _vm.formErrors.dbDatabase
                                },
                                on: {
                                  "update:error": function($event) {
                                    return _vm.$set(
                                      _vm.formErrors,
                                      "dbDatabase",
                                      $event
                                    )
                                  }
                                },
                                model: {
                                  value: _vm.formData.dbDatabase,
                                  callback: function($$v) {
                                    _vm.$set(_vm.formData, "dbDatabase", $$v)
                                  },
                                  expression: "formData.dbDatabase"
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
                              _c("base-input", {
                                staticClass: "mb-3",
                                attrs: {
                                  label: _vm.$t(
                                    "product.install.props.db_username"
                                  ),
                                  type: "text",
                                  name: "dbUsername",
                                  error: _vm.formErrors.dbUsername
                                },
                                on: {
                                  "update:error": function($event) {
                                    return _vm.$set(
                                      _vm.formErrors,
                                      "dbUsername",
                                      $event
                                    )
                                  }
                                },
                                model: {
                                  value: _vm.formData.dbUsername,
                                  callback: function($$v) {
                                    _vm.$set(_vm.formData, "dbUsername", $$v)
                                  },
                                  expression: "formData.dbUsername"
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
                              _c("base-input", {
                                staticClass: "mb-3",
                                attrs: {
                                  label: _vm.$t(
                                    "product.install.props.db_password"
                                  ),
                                  type: "password",
                                  name: "dbPassword",
                                  error: _vm.formErrors.dbPassword
                                },
                                on: {
                                  "update:error": function($event) {
                                    return _vm.$set(
                                      _vm.formErrors,
                                      "dbPassword",
                                      $event
                                    )
                                  }
                                },
                                model: {
                                  value: _vm.formData.dbPassword,
                                  callback: function($$v) {
                                    _vm.$set(_vm.formData, "dbPassword", $$v)
                                  },
                                  expression: "formData.dbPassword"
                                }
                              })
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "div",
                            { staticClass: "col-12 col-md-6" },
                            [
                              _c(
                                "base-checkbox",
                                {
                                  staticClass: "my-4",
                                  attrs: { name: "seed" },
                                  model: {
                                    value: _vm.formData.skipDbVersionCheck,
                                    callback: function($$v) {
                                      _vm.$set(
                                        _vm.formData,
                                        "skipDbVersionCheck",
                                        $$v
                                      )
                                    },
                                    expression: "formData.skipDbVersionCheck"
                                  }
                                },
                                [
                                  _vm._v(
                                    "\n                                    " +
                                      _vm._s(
                                        _vm.$t(
                                          "product.install.skip_db_version_check"
                                        )
                                      ) +
                                      "\n                                "
                                  )
                                ]
                              )
                            ],
                            1
                          )
                        ]),
                        _vm._v(" "),
                        _c(
                          "button",
                          {
                            staticClass: "btn d-none",
                            attrs: { type: "submit" }
                          },
                          [
                            _vm._v(
                              _vm._s(
                                _vm.$t("product.install.next_button_content")
                              )
                            )
                          ]
                        )
                      ]
                    )
                  ]
                ),
                _vm._v(" "),
                _c(
                  "tab-content",
                  {
                    attrs: {
                      title: _vm.$t("product.install.admin_setup"),
                      "before-change": _vm.validateAdmin,
                      icon: "fas fa-user"
                    }
                  },
                  [
                    _c(
                      "form",
                      {
                        staticClass: "form-horizontal",
                        on: {
                          submit: function($event) {
                            $event.preventDefault()
                            return _vm.$refs.installWizard.nextTab()
                          }
                        }
                      },
                      [
                        _c("div", { staticClass: "row" }, [
                          _c(
                            "div",
                            { staticClass: "col-12 col-md-4" },
                            [
                              _c("base-input", {
                                ref: "email",
                                staticClass: "mb-3",
                                attrs: {
                                  label: _vm.$t("product.install.props.email"),
                                  type: "email",
                                  name: "email",
                                  error: _vm.formErrors.email
                                },
                                on: {
                                  "update:error": function($event) {
                                    return _vm.$set(
                                      _vm.formErrors,
                                      "email",
                                      $event
                                    )
                                  }
                                },
                                model: {
                                  value: _vm.formData.email,
                                  callback: function($$v) {
                                    _vm.$set(_vm.formData, "email", $$v)
                                  },
                                  expression: "formData.email"
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
                              _c("base-input", {
                                staticClass: "mb-3",
                                attrs: {
                                  label: _vm.$t("product.install.props.name"),
                                  type: "text",
                                  name: "name",
                                  error: _vm.formErrors.name
                                },
                                on: {
                                  "update:error": function($event) {
                                    return _vm.$set(
                                      _vm.formErrors,
                                      "name",
                                      $event
                                    )
                                  }
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
                          _c(
                            "div",
                            { staticClass: "col-12 col-md-4" },
                            [
                              _c("base-input", {
                                staticClass: "mb-3",
                                attrs: {
                                  label: _vm.$t(
                                    "product.install.props.username"
                                  ),
                                  type: "text",
                                  name: "username",
                                  error: _vm.formErrors.username
                                },
                                on: {
                                  "update:error": function($event) {
                                    return _vm.$set(
                                      _vm.formErrors,
                                      "username",
                                      $event
                                    )
                                  }
                                },
                                model: {
                                  value: _vm.formData.username,
                                  callback: function($$v) {
                                    _vm.$set(_vm.formData, "username", $$v)
                                  },
                                  expression: "formData.username"
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
                              _c("base-input", {
                                staticClass: "mb-3",
                                attrs: {
                                  label: _vm.$t(
                                    "product.install.props.language"
                                  ),
                                  type: "text",
                                  name: "language",
                                  error: _vm.formErrors.language
                                },
                                on: {
                                  "update:error": function($event) {
                                    return _vm.$set(
                                      _vm.formErrors,
                                      "language",
                                      $event
                                    )
                                  }
                                },
                                model: {
                                  value: _vm.formData.language,
                                  callback: function($$v) {
                                    _vm.$set(_vm.formData, "language", $$v)
                                  },
                                  expression: "formData.language"
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
                              _c("base-input", {
                                staticClass: "mb-3",
                                attrs: {
                                  label: _vm.$t(
                                    "product.install.props.password"
                                  ),
                                  type: "password",
                                  name: "password",
                                  error: _vm.formErrors.password
                                },
                                on: {
                                  "update:error": function($event) {
                                    return _vm.$set(
                                      _vm.formErrors,
                                      "password",
                                      $event
                                    )
                                  }
                                },
                                model: {
                                  value: _vm.formData.password,
                                  callback: function($$v) {
                                    _vm.$set(_vm.formData, "password", $$v)
                                  },
                                  expression: "formData.password"
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
                              _c("base-input", {
                                staticClass: "mb-3",
                                attrs: {
                                  label: _vm.$t(
                                    "product.install.props.password_confirmation"
                                  ),
                                  type: "password",
                                  name: "passwordConfirmation",
                                  error: _vm.formErrors.passwordConfirmation
                                },
                                on: {
                                  "update:error": function($event) {
                                    return _vm.$set(
                                      _vm.formErrors,
                                      "passwordConfirmation",
                                      $event
                                    )
                                  }
                                },
                                model: {
                                  value: _vm.formData.passwordConfirmation,
                                  callback: function($$v) {
                                    _vm.$set(
                                      _vm.formData,
                                      "passwordConfirmation",
                                      $$v
                                    )
                                  },
                                  expression: "formData.passwordConfirmation"
                                }
                              })
                            ],
                            1
                          )
                        ]),
                        _vm._v(" "),
                        _c(
                          "button",
                          {
                            staticClass: "btn d-none",
                            attrs: { type: "submit" }
                          },
                          [
                            _vm._v(
                              _vm._s(
                                _vm.$t("product.install.next_button_content")
                              )
                            )
                          ]
                        )
                      ]
                    )
                  ]
                ),
                _vm._v(" "),
                _c(
                  "tab-content",
                  {
                    attrs: {
                      title: _vm.$t("product.install.ready_to_go"),
                      "before-change": _vm.validateAccessCode,
                      icon: "fas fa-check"
                    }
                  },
                  [
                    _c("p", { staticClass: "alert alert-info my-3" }, [
                      _c("span", { staticClass: "pull-left mr-2" }, [
                        _c("i", { staticClass: "fas fa-info-circle fa-3x" })
                      ]),
                      _vm._v(" "),
                      _c("span", { staticClass: "h6 text-white" }, [
                        _vm._v(
                          _vm._s(_vm.$t("product.install.ready_to_go_message"))
                        )
                      ])
                    ]),
                    _vm._v(" "),
                    _c(
                      "form",
                      {
                        staticClass: "form-horizontal",
                        on: {
                          submit: function($event) {
                            $event.preventDefault()
                            return _vm.$refs.installWizard.nextTab()
                          }
                        }
                      },
                      [
                        _c("div", { staticClass: "row" }, [
                          _c(
                            "div",
                            { staticClass: "col-6" },
                            [
                              _c("base-input", {
                                ref: "accessCode",
                                staticClass: "mb-3",
                                attrs: {
                                  label: _vm.$t(
                                    "product.license.props.access_code"
                                  ),
                                  type: "text",
                                  name: "accessCode",
                                  error: _vm.formErrors.accessCode
                                },
                                on: {
                                  "update:error": function($event) {
                                    return _vm.$set(
                                      _vm.formErrors,
                                      "accessCode",
                                      $event
                                    )
                                  }
                                },
                                model: {
                                  value: _vm.formData.accessCode,
                                  callback: function($$v) {
                                    _vm.$set(_vm.formData, "accessCode", $$v)
                                  },
                                  expression: "formData.accessCode"
                                }
                              }),
                              _vm._v(" "),
                              _c(
                                "a",
                                {
                                  staticClass:
                                    "btn btn-md btn-info my-4 text-uppercase",
                                  attrs: {
                                    href: _vm.verifier,
                                    target: "_blank",
                                    tabindex: "-1"
                                  }
                                },
                                [
                                  _vm._v(
                                    _vm._s(
                                      _vm.$t("product.license.get_access_code")
                                    )
                                  )
                                ]
                              )
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "div",
                            { staticClass: "col-6" },
                            [
                              _c("base-input", {
                                staticClass: "mb-3",
                                attrs: {
                                  label: _vm.$t(
                                    "product.license.props.envato_email"
                                  ),
                                  type: "email",
                                  name: "envatoEmail",
                                  error: _vm.formErrors.envatoEmail
                                },
                                on: {
                                  "update:error": function($event) {
                                    return _vm.$set(
                                      _vm.formErrors,
                                      "envatoEmail",
                                      $event
                                    )
                                  }
                                },
                                model: {
                                  value: _vm.formData.envatoEmail,
                                  callback: function($$v) {
                                    _vm.$set(_vm.formData, "envatoEmail", $$v)
                                  },
                                  expression: "formData.envatoEmail"
                                }
                              }),
                              _vm._v(" "),
                              _c("div", { staticClass: "clearfix mb-4" })
                            ],
                            1
                          )
                        ]),
                        _vm._v(" "),
                        _c(
                          "button",
                          {
                            staticClass: "btn d-none",
                            attrs: { type: "submit" }
                          },
                          [
                            _vm._v(
                              _vm._s(
                                _vm.$t("product.install.next_button_content")
                              )
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
          ],
          1
        ),
        _vm._v(" "),
        _c(
          "card",
          {
            directives: [
              {
                name: "show",
                rawName: "v-show",
                value: _vm.isProcessing,
                expression: "isProcessing"
              }
            ],
            staticClass: "border-0 install-box text-center",
            attrs: {
              type: "white",
              shadow: "",
              "header-classes": "bg-white pb-5",
              "body-classes": "px-lg-5 py-lg-5"
            }
          },
          [
            _c("h2", { staticClass: "mb-4" }, [
              _vm._v("Installation in Progress")
            ]),
            _vm._v(" "),
            _c("hr"),
            _vm._v(" "),
            _c("h5", [
              _vm._v(
                "This process may take several minutes depending upon your server configuration. Meanwhile, you can read some inspirational quotes from great personalities all over the world!"
              )
            ]),
            _vm._v(" "),
            _c("p", { staticClass: "alert alert-info mt-4" }, [
              _vm._v(
                "Do not reload or close this page. You will be redirected to login page automatically once the installation is completed."
              )
            ]),
            _vm._v(" "),
            _c("animated-loader", {
              attrs: {
                "is-loading": _vm.isProcessing,
                "loader-color": _vm.vars.loaderColor,
                size: "inline"
              }
            }),
            _vm._v(" "),
            _c("quotes")
          ],
          1
        )
      ],
      1
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/install/partials/quotes.vue?vue&type=template&id=7688a8f1&":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/install/partials/quotes.vue?vue&type=template&id=7688a8f1& ***!
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
    "b-carousel",
    {
      staticClass: "quote-carousel",
      attrs: {
        id: "carousel1",
        controls: "",
        background: "#fff",
        interval: 4000,
        "img-width": "1024",
        "img-height": "330px"
      },
      model: {
        value: _vm.slide,
        callback: function($$v) {
          _vm.slide = $$v
        },
        expression: "slide"
      }
    },
    _vm._l(_vm.quotes, function(quote, index) {
      return _c(
        "b-carousel-slide",
        { key: index, attrs: { "img-blank": "", "img-alt": "Blank image" } },
        [
          _c("blockquote", { attrs: { cite: quote.authors } }, [
            _c("h3", [_vm._v(_vm._s(quote.quote))]),
            _vm._v(" "),
            _c("h5", { staticClass: "mt-4" }, [
              _vm._v("~ " + _vm._s(quote.author))
            ])
          ])
        ]
      )
    }),
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/api/install.js":
/*!*************************************!*\
  !*** ./resources/js/api/install.js ***!
  \*************************************/
/*! exports provided: getPreRequisite, validate, install */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPreRequisite", function() { return getPreRequisite; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "validate", function() { return validate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "install", function() { return install; });
/* harmony import */ var _js_core_utils_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @js/core/utils/request */ "./resources/js/core/utils/request.js");

var apiUrl = '/install';
function getPreRequisite() {
  return Object(_js_core_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: apiUrl + '/pre-requisite',
    method: 'get'
  });
}
function validate(option, data) {
  return Object(_js_core_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: apiUrl + '/validate?option=' + option,
    method: 'post',
    data: data
  });
}
function install(data) {
  return Object(_js_core_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: apiUrl,
    method: 'post',
    data: data
  });
}

/***/ }),

/***/ "./resources/js/views/install/index.vue":
/*!**********************************************!*\
  !*** ./resources/js/views/install/index.vue ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_vue_vue_type_template_id_4b6051ef___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=4b6051ef& */ "./resources/js/views/install/index.vue?vue&type=template&id=4b6051ef&");
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ "./resources/js/views/install/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.vue?vue&type=style&index=0&lang=scss& */ "./resources/js/views/install/index.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_4b6051ef___WEBPACK_IMPORTED_MODULE_0__["render"],
  _index_vue_vue_type_template_id_4b6051ef___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/install/index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/install/index.vue?vue&type=script&lang=js&":
/*!***********************************************************************!*\
  !*** ./resources/js/views/install/index.vue?vue&type=script&lang=js& ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/install/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/install/index.vue?vue&type=style&index=0&lang=scss&":
/*!********************************************************************************!*\
  !*** ./resources/js/views/install/index.vue?vue&type=style&index=0&lang=scss& ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_2_node_modules_sass_loader_dist_cjs_js_ref_9_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--9-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--9-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/install/index.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_2_node_modules_sass_loader_dist_cjs_js_ref_9_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_2_node_modules_sass_loader_dist_cjs_js_ref_9_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_2_node_modules_sass_loader_dist_cjs_js_ref_9_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_2_node_modules_sass_loader_dist_cjs_js_ref_9_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/views/install/index.vue?vue&type=template&id=4b6051ef&":
/*!*****************************************************************************!*\
  !*** ./resources/js/views/install/index.vue?vue&type=template&id=4b6051ef& ***!
  \*****************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_4b6051ef___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=4b6051ef& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/install/index.vue?vue&type=template&id=4b6051ef&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_4b6051ef___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_4b6051ef___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/views/install/partials/quotes.vue":
/*!********************************************************!*\
  !*** ./resources/js/views/install/partials/quotes.vue ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _quotes_vue_vue_type_template_id_7688a8f1___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./quotes.vue?vue&type=template&id=7688a8f1& */ "./resources/js/views/install/partials/quotes.vue?vue&type=template&id=7688a8f1&");
/* harmony import */ var _quotes_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./quotes.vue?vue&type=script&lang=js& */ "./resources/js/views/install/partials/quotes.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _quotes_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./quotes.vue?vue&type=style&index=0&lang=scss& */ "./resources/js/views/install/partials/quotes.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _quotes_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _quotes_vue_vue_type_template_id_7688a8f1___WEBPACK_IMPORTED_MODULE_0__["render"],
  _quotes_vue_vue_type_template_id_7688a8f1___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/install/partials/quotes.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/install/partials/quotes.vue?vue&type=script&lang=js&":
/*!*********************************************************************************!*\
  !*** ./resources/js/views/install/partials/quotes.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_quotes_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./quotes.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/install/partials/quotes.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_quotes_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/install/partials/quotes.vue?vue&type=style&index=0&lang=scss&":
/*!******************************************************************************************!*\
  !*** ./resources/js/views/install/partials/quotes.vue?vue&type=style&index=0&lang=scss& ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_2_node_modules_sass_loader_dist_cjs_js_ref_9_3_node_modules_vue_loader_lib_index_js_vue_loader_options_quotes_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--9-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--9-3!../../../../../node_modules/vue-loader/lib??vue-loader-options!./quotes.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/install/partials/quotes.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_2_node_modules_sass_loader_dist_cjs_js_ref_9_3_node_modules_vue_loader_lib_index_js_vue_loader_options_quotes_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_2_node_modules_sass_loader_dist_cjs_js_ref_9_3_node_modules_vue_loader_lib_index_js_vue_loader_options_quotes_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_2_node_modules_sass_loader_dist_cjs_js_ref_9_3_node_modules_vue_loader_lib_index_js_vue_loader_options_quotes_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_2_node_modules_sass_loader_dist_cjs_js_ref_9_3_node_modules_vue_loader_lib_index_js_vue_loader_options_quotes_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/views/install/partials/quotes.vue?vue&type=template&id=7688a8f1&":
/*!***************************************************************************************!*\
  !*** ./resources/js/views/install/partials/quotes.vue?vue&type=template&id=7688a8f1& ***!
  \***************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_quotes_vue_vue_type_template_id_7688a8f1___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./quotes.vue?vue&type=template&id=7688a8f1& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/install/partials/quotes.vue?vue&type=template&id=7688a8f1&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_quotes_vue_vue_type_template_id_7688a8f1___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_quotes_vue_vue_type_template_id_7688a8f1___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=index.js.map?id=83b90b5df211600235de