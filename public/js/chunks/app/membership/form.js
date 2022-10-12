(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app/membership/form"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/app/membership/form.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/app/membership/form.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mixins_form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @mixins/form */ "./resources/js/mixins/form.js");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _vue_stripe_vue_stripe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @vue-stripe/vue-stripe */ "./node_modules/@vue-stripe/vue-stripe/dist/index.js");
/* harmony import */ var _vue_stripe_vue_stripe__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_vue_stripe_vue_stripe__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var bootstrap_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! bootstrap-vue */ "./node_modules/bootstrap-vue/esm/index.js");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

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




/* harmony default export */ __webpack_exports__["default"] = ({
  "extends": _mixins_form__WEBPACK_IMPORTED_MODULE_1__["default"],
  components: {
    StripeElementCard: _vue_stripe_vue_stripe__WEBPACK_IMPORTED_MODULE_3__["StripeElementCard"],
    BCard: bootstrap_vue__WEBPACK_IMPORTED_MODULE_4__["BCard"],
    BTabs: bootstrap_vue__WEBPACK_IMPORTED_MODULE_4__["BTabs"],
    BTab: bootstrap_vue__WEBPACK_IMPORTED_MODULE_4__["BTab"]
  },
  data: function data() {
    return {
      formData: {
        frequency: null,
        currency: null,
        amount: 0,
        payableAmount: 0,
        creditBalance: 0,
        applicableDate: null,
        oldExpiryDate: null,
        expiryDate: null,
        source: null,
        token: null,
        charge: null,
        orgName: '',
        addressLine1: '',
        addressLine2: '',
        city: '',
        state: '',
        country: '',
        zipcode: ''
      },
      formLabels: {
        frequency: $t('membership.props.frequency'),
        currency: $t('config.system.currency'),
        amount: $t('membership.props.amount'),
        payableAmount: $t('membership.props.payable_amount'),
        creditBalance: $t('membership.props.credit_balance'),
        expiryDate: $t('membership.props.expiry_date'),
        newExpiryDate: $t('membership.props.new_expiry_date'),
        applicableDate: $t('membership.props.applicable_date'),
        orgName: $t('membership.props.org_name'),
        addressLine1: $t('membership.props.address_line_1'),
        addressLine2: $t('membership.props.address_line_2'),
        city: $t('membership.props.city'),
        state: $t('membership.props.state'),
        country: $t('membership.props.country'),
        zipcode: $t('membership.props.zipcode')
      },
      showPaymentOptions: true,
      initialSetupCompleted: false,
      paypalConfig: {},
      paypalButtons: null,
      paypalButtonsHasRendered: false,
      paddleConfig: {},
      activePGTab: 0,
      loading: false,
      pageTitle: $t('membership.start_membership'),
      initUrl: 'membership'
    };
  },
  computed: _objectSpread(_objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_2__["mapGetters"])('common', ['entity'])), Object(vuex__WEBPACK_IMPORTED_MODULE_2__["mapGetters"])('user', ['hasActiveMembership', 'membershipExpiryDate', 'hasLifetimeMembership', 'email'])), {}, {
    preRequisiteEntity: function preRequisiteEntity() {
      return this.entity;
    },
    isBusy: function isBusy() {
      return !this.entity || this.isLoading ? true : false;
    },
    computedFrequency: {
      get: function get() {
        return this.formData.frequency ? this.formData.frequency.name : null;
      },
      set: function set(v) {
        this.formData.frequency = this.preRequisiteEntity.frequencies.find(function (c) {
          return c.name === v;
        });
        this.getCalculatedAmount();
      }
    },
    computedCurrency: {
      get: function get() {
        return this.formData.currency ? this.formData.currency.name : null;
      },
      set: function set(v) {
        this.formData.currency = this.preRequisiteEntity.currencies.find(function (c) {
          return c.name === v;
        });
        this.getCalculatedAmount();

        if (this.preRequisiteEntity.paymentGateways.length && this.preRequisiteEntity.paymentGateways[this.computedActiveTab].name === 'paypal') {
          if (this.paypalConfig.loaded === true) {
            this.paypalScriptLoaded();
          } else {
            this.loadPaypal();
          }
        }

        if (this.preRequisiteEntity.paymentGateways.length && this.preRequisiteEntity.paymentGateways[this.computedActiveTab].name === 'paddle') {
          if (this.paddleConfig.loaded === true) {
            this.paddleScriptLoaded();
          } else {
            this.loadPaddle();
          }
        }
      }
    },
    computedPricingForPaddle: function computedPricingForPaddle() {
      return [this.computedCurrency ? "".concat(this.computedCurrency, ":").concat(this.payableAmount) : "USD:".concat(this.payableAmount)];
    },
    stripeConfig: function stripeConfig() {
      return this.entity && this.entity.paymentGateways.length ? this.entity.paymentGateways[0] : {};
    },
    stripeStyle: function stripeStyle() {
      return {
        empty: {
          '::placeholder': {
            color: '#adb5c0'
          },
          ':focus': {
            '::placeholder': {
              color: '#ced4dd'
            }
          }
        }
      };
    },
    payableAmount: function payableAmount() {
      return this.formData.amount;
    },
    computedActiveTab: {
      get: function get() {
        return this.activePGTab;
      },
      set: function set(v) {
        this.activePGTab = v;

        if (this.preRequisiteEntity.paymentGateways.length && this.preRequisiteEntity.paymentGateways[v].name === 'paypal') {
          if (this.paypalConfig.loaded === false) {
            this.loadPaypal();
          } else {
            this.paypalScriptLoaded();
          }
        } else {
          if (this.paypalConfig.loaded && this.paypalButtons && this.paypalButtons.close) {
            this.paypalButtons.close();
            this.paypalButtonsHasRendered = false;
          }

          if (this.preRequisiteEntity.paymentGateways.length && this.preRequisiteEntity.paymentGateways[v].name === 'paddle') {
            if (this.paddleConfig.loaded === false) {
              this.loadPaddle();
            } else {
              this.paddleScriptLoaded();
            }
          }
        }
      }
    }
  }),
  watch: {
    preRequisiteEntity: function preRequisiteEntity(val) {
      if (val) {
        this.formData.frequency = val.frequencies ? val.frequencies[0] : null;
      }
    }
  },
  methods: _objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_2__["mapActions"])('user', ['GetUser'])), {}, {
    getCalculatedAmount: function getCalculatedAmount(cbFunction) {
      var _this = this;

      if (!this.initialSetupCompleted) {
        return;
      }

      this.isLoading = true;
      this.formData.method = this.preRequisiteEntity && this.preRequisiteEntity.paymentGateways && this.preRequisiteEntity.paymentGateways.length ? this.preRequisiteEntity.paymentGateways[this.computedActiveTab].name : null;
      this.Custom({
        url: 'membership/calculate',
        method: 'post',
        data: this.formData
      }).then(function (response) {
        _this.formData.amount = response.amount || 0;
        _this.formData.applicableDate = response.applicableDate;
        _this.formData.oldExpiryDate = response.expiryDate;
        _this.formData.expiryDate = response.newExpiryDate;
        _this.formData.paddleUrl = response.paddleUrl; // this.showPaymentOptions = this.formData.payable ? true : false

        _this.isLoading = false;

        if (cbFunction && _.isFunction(cbFunction)) {
          cbFunction();
        } else {
          if (_this.preRequisiteEntity && _this.preRequisiteEntity.paymentGateways.length && _this.preRequisiteEntity.paymentGateways[_this.computedActiveTab].name === 'paddle') {
            if (_this.paddleConfig.loaded === true) {
              if (Paddle && Paddle.Checkout) {// Paddle.Checkout.close()
                // this.paddleConfig.loaded = false
              }

              _this.paddleScriptLoaded();
            } else {
              _this.loadPaddle();
            }
          }
        }
      })["catch"](function (error) {
        _this.isLoading = false;
        formUtil.handleErrors(error);
      });
    },
    updateMembership: function updateMembership() {
      var _this2 = this;

      this.isLoading = true;
      this.Custom({
        url: 'membership',
        method: 'post',
        data: this.formData
      }).then(function (response) {
        _this2.$toasted.success(response.message, _this2.$toastConfig);

        _this2.GetUser().then(function (response) {
          _this2.$router.push({
            name: 'appMembershipList',
            query: {
              reload: true
            }
          });

          _this2.isLoading = false;
        })["catch"](function (error) {
          formUtil.handleErrors(error);

          _this2.$router.push({
            name: 'appMembershipList',
            query: {
              reload: true
            }
          });

          _this2.isLoading = false; // location.reload()
        }); // this.isLoading = false

      })["catch"](function (error) {
        _this2.isLoading = false;
        formUtil.handleErrors(error);
      });
    },
    proceed: function proceed() {
      if (this.formData.amount) {
        this.isLoading = true;

        if (this.$refs && this.$refs.stripeRef && this.preRequisiteEntity.paymentGateways.length && this.preRequisiteEntity.paymentGateways[this.computedActiveTab].name === 'stripe') {
          this.$refs.stripeRef[0].submit();
        } else {
          this.isLoading = false;
        }
      } else {
        this.updateMembership();
      }
    },
    stripeTokenCreated: function stripeTokenCreated(token) {
      this.formData.token = token;
      this.formData.method = this.preRequisiteEntity.paymentGateways.length && this.preRequisiteEntity.paymentGateways[this.computedActiveTab].name; // for additional charge objects go to https://stripe.com/docs/api/charges/object

      this.formData.charge = {
        source: token.id,
        amount: this.payableAmount * 100 // the amount you want to charge the customer in cents. $100 is 1000 (it is strongly recommended you use a product id and quantity and get calculate this on the backend to avoid people manipulating the cost)

      };
      this.formData.payableAmount = this.formData.charge.amount;
      this.updateMembership();
    },
    paypalScriptLoaded: function paypalScriptLoaded() {
      var _this3 = this;

      this.loading = true;
      this.isLoading = true;

      if (this.paypalButtons && this.paypalButtons.close && this.paypalButtonsHasRendered) {
        this.paypalButtons.close();
        this.paypalButtonsHasRendered = false;
      }

      this.paypalButtons = window.paypal.Buttons({
        createOrder: function createOrder(data, actions) {
          _this3.isLoading = true;
          var orderObj = {
            purchase_units: [{
              description: "".concat(window.kmenv.name, " - ").concat(_this3.computedFrequency.name, " ").concat($t('membership.membership')),
              amount: {
                currency_code: _this3.computedCurrency,
                value: _this3.payableAmount
              }
            }]
          }; // console.log(orderObj)

          return actions.order.create(orderObj);
        },
        onApprove: function () {
          var _onApprove = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(data, actions) {
            var token;
            return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return actions.order.capture();

                  case 2:
                    token = _context.sent;
                    // console.log(token)
                    _this3.formData.token = token;
                    _this3.formData.method = _this3.preRequisiteEntity.paymentGateways.length ? _this3.preRequisiteEntity.paymentGateways[_this3.computedActiveTab].name : null; // for additional charge objects go to https://stripe.com/docs/api/charges/object

                    _this3.formData.charge = {
                      source: token.id,
                      amount: _this3.payableAmount // the amount you want to charge the customer in cents. $100 is 1000 (it is strongly recommended you use a product id and quantity and get calculate this on the backend to avoid people manipulating the cost)

                    };
                    _this3.formData.payableAmount = _this3.formData.charge.amount;
                    _this3.isLoading = false;

                    _this3.updateMembership();

                  case 9:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee);
          }));

          function onApprove(_x, _x2) {
            return _onApprove.apply(this, arguments);
          }

          return onApprove;
        }(),
        onError: function onError(err) {
          _this3.isLoading = false;

          _this3.$toasted.error(_this3.$t('membership.paypal_create_order_error'), _this3.$toastConfig.error);
        }
      });
      this.paypalButtons.render(this.$refs.paypalRef[0]).then(function () {
        _this3.paypalButtonsHasRendered = true;
      })["catch"](function (err) {
        var selector = _this3.$refs.paypalRef[0]; // button failed to render, possibly because it was closed or destroyed.

        if (selector && selector.children.length > 0) {
          // still mounted so throw an error
          throw new Error(err);
        }

        _this3.$toasted.info($t('general.kindly_reload_page'), _this3.$toastConfig.info); // not mounted anymore, we can safely ignore the error


        return;
      });
      this.paypalConfig.loaded = true;
      this.loading = false;
      this.isLoading = false;
    },
    paddleScriptLoaded: function paddleScriptLoaded() {
      var _this4 = this;

      if (Paddle) {
        if (!this.paddleConfig.mode) {
          Paddle.Environment.set('sandbox');
        }

        Paddle.Setup({
          vendor: this.paddleConfig.key
        });
        this.getCalculatedAmount(function () {
          Paddle.Checkout.open({
            method: 'inline',
            email: _this4.email,
            country: _this4.formData.country,
            postcode: _this4.formData.zipcode,
            allowQuantity: false,
            disableLogout: true,
            frameTarget: 'paddle-container',
            frameInitialHeight: 416,
            frameStyle: 'width:100%; min-width:312px; background-color: transparent; border: none;',
            override: _this4.formData.paddleUrl,
            successCallback: function successCallback(data) {
              _this4.formData.token = data.checkout;
              _this4.formData.method = _this4.preRequisiteEntity.paymentGateways.length && _this4.preRequisiteEntity.paymentGateways[_this4.computedActiveTab].name;
              _this4.formData.charge = {
                source: data.checkout.id,
                amount: _this4.payableAmount
              };
              _this4.formData.payableAmount = _this4.formData.charge.amount;

              _this4.updateMembership();
            } // closeCallback: (data) => {
            //     console.log(data)
            // }

          });
          _this4.paddleConfig.loaded = true;
        });
      }
    },
    loadPaypal: function loadPaypal() {
      var script = document.createElement("script");
      script.src = "https://www.paypal.com/sdk/js?client-id=" + this.paypalConfig.key + "&currency=" + this.computedCurrency;
      script.addEventListener("load", this.paypalScriptLoaded);
      document.body.appendChild(script);
    },
    loadPaddle: function loadPaddle() {
      var script = document.createElement("script");
      script.src = "https://cdn.paddle.com/paddle/paddle.js";
      script.addEventListener("load", this.paddleScriptLoaded);
      document.body.appendChild(script);
    }
  }),
  mounted: function mounted() {
    var _this5 = this;

    if (this.hasActiveMembership) {
      this.pageTitle = $t('membership.extend_membership');
    } else {
      this.pageTitle = this.membershipExpiryDate ? $t('membership.renew_membership') : $t('membership.start_membership');
    }

    this.applyPageHeader();
    this.formData.currency = this.configs.system.currency;
    this.formData.orgName = this.configs.basic.orgName || '';
    this.formData.addressLine1 = this.configs.basic.orgAddressLine1 || '';
    this.formData.addressLine2 = this.configs.basic.orgAddressLine2 || '';
    this.formData.city = this.configs.basic.orgCity || '';
    this.formData.state = this.configs.basic.orgState || '';
    this.formData.country = this.configs.basic.orgCountry || '';
    this.formData.zipcode = this.configs.basic.orgZipcode || '';

    if (this.preRequisiteEntity) {
      this.formData.frequency = this.preRequisiteEntity.selectedFrequency ? this.preRequisiteEntity.selectedFrequency : this.preRequisiteEntity.frequencies ? this.preRequisiteEntity.frequencies[0] : null;
      this.formData.currency = this.preRequisiteEntity.selectedCurrency ? this.preRequisiteEntity.selectedCurrency : this.preRequisiteEntity.currencies ? this.preRequisiteEntity.currencies[0] : null;

      if (this.preRequisiteEntity.paymentGateways.length) {
        this.paypalConfig = this.preRequisiteEntity.paymentGateways.find(function (pg) {
          return pg.name === 'paypal';
        });

        if (this.paypalConfig) {
          this.paypalConfig.loaded = false;

          if (this.preRequisiteEntity.paymentGateways[this.computedActiveTab].name === 'paypal') {
            this.loadPaypal();
          }
        }

        this.paddleConfig = this.preRequisiteEntity.paymentGateways.find(function (pg) {
          return pg.name === 'paddle';
        });

        if (this.paddleConfig) {
          this.paddleConfig.loaded = false;

          if (this.preRequisiteEntity.paymentGateways[this.computedActiveTab].name === 'paddle') {
            this.loadPaddle();
          }
        }
      }

      this.initialSetupCompleted = true;
      window.setTimeout(function () {
        _this5.getCalculatedAmount();
      }, 1000);
    } else {
      this.initialSetupCompleted = true;
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/app/membership/form.vue?vue&type=style&index=0&lang=scss&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-2!./node_modules/sass-loader/dist/cjs.js??ref--9-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/app/membership/form.vue?vue&type=style&index=0&lang=scss& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Muli:300,400,600,700,800,900);", ""]);

// module
exports.push([module.i, ".base-container .StripeElement {\n  border: 1px solid #dee2e9 !important;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/app/membership/form.vue?vue&type=style&index=0&lang=scss&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-2!./node_modules/sass-loader/dist/cjs.js??ref--9-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/app/membership/form.vue?vue&type=style&index=0&lang=scss& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--9-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--9-3!../../../../../node_modules/vue-loader/lib??vue-loader-options!./form.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/app/membership/form.vue?vue&type=style&index=0&lang=scss&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/app/membership/form.vue?vue&type=template&id=41a3eec0&":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/app/membership/form.vue?vue&type=template&id=41a3eec0& ***!
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
    "base-container",
    {
      attrs: {
        boxed: "",
        "min-height": "full",
        "has-form": "",
        "has-footer": ""
      }
    },
    [
      _c(
        "form",
        {
          on: {
            submit: function($event) {
              $event.preventDefault()
              return _vm.proceed.apply(null, arguments)
            }
          }
        },
        [
          _c("animated-loader", {
            attrs: {
              "is-loading": _vm.isBusy,
              "loader-color": _vm.vars.loaderColor
            }
          }),
          _vm._v(" "),
          _vm.entity
            ? [
                _c("div", { staticClass: "row" }, [
                  _c("div", { staticClass: "col-12 col-md-4 mb-4" }, [
                    _c("label", { staticClass: "d-block text-muted" }, [
                      _vm._v(_vm._s(_vm.formLabels.currency))
                    ]),
                    _vm._v(" "),
                    _c("div", [
                      _vm._v(
                        "\n                        " +
                          _vm._s(_vm.computedCurrency) +
                          "\n                    "
                      )
                    ])
                  ]),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "col-12 col-md-4 mb-4 text-md-center" },
                    [
                      _c("label", { staticClass: "d-block text-muted" }, [
                        _vm._v(_vm._s(_vm.formLabels.frequency))
                      ]),
                      _vm._v(" "),
                      _c(
                        "div",
                        {
                          staticClass:
                            "d-flex align-items-center justify-content-md-center flex-wrap"
                        },
                        [
                          _vm._l(_vm.preRequisiteEntity.frequencies, function(
                            frequency
                          ) {
                            return [
                              _c(
                                "base-radio",
                                {
                                  key: frequency.name,
                                  staticClass: "mr-3 ml-0 mt-2",
                                  attrs: { value: frequency.name, inline: "" },
                                  model: {
                                    value: _vm.computedFrequency,
                                    callback: function($$v) {
                                      _vm.computedFrequency = $$v
                                    },
                                    expression: "computedFrequency"
                                  }
                                },
                                [
                                  _vm._v(
                                    "\n                                " +
                                      _vm._s(frequency.name) +
                                      "\n                            "
                                  )
                                ]
                              )
                            ]
                          })
                        ],
                        2
                      )
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "col-12 col-md-4 mb-4 mt-2 text-md-right" },
                    [
                      _c("view-date", {
                        attrs: {
                          label: _vm.formLabels.expiryDate,
                          value: _vm.formData.oldExpiryDate
                        }
                      })
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c("div", {
                    staticClass: "col-12 col-md-4 mb-4 mt-2 d-none d-lg-block"
                  }),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "col-12 col-md-4 mb-4 mt-2 text-md-center" },
                    [
                      _c("view-date", {
                        attrs: {
                          label: _vm.formLabels.applicableDate,
                          value: _vm.formData.applicableDate
                        }
                      })
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "col-12 col-md-4 mb-4 mt-2 text-md-right" },
                    [
                      _c("view-date", {
                        attrs: {
                          label: _vm.formLabels.newExpiryDate,
                          value: _vm.formData.expiryDate
                        }
                      })
                    ],
                    1
                  )
                ]),
                _vm._v(" "),
                _vm.formData.currency && _vm.formData.frequency
                  ? _c("div", { staticClass: "mb-4 mt-2" }, [
                      _c(
                        "div",
                        { staticClass: "text-md-right" },
                        [
                          _c("view-currency", {
                            attrs: {
                              label: _vm.formLabels.amount,
                              value: _vm.formData.amount,
                              currency: _vm.formData.currency,
                              tag: "h5",
                              "data-classes": "text-success"
                            }
                          })
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "text-md-right" },
                        [
                          _c("view-currency", {
                            attrs: {
                              label: _vm.formLabels.payableAmount,
                              value: _vm.payableAmount,
                              currency: _vm.formData.currency,
                              tag: "h2",
                              "data-classes": "text-success font-weight-600"
                            }
                          })
                        ],
                        1
                      )
                    ])
                  : _vm._e(),
                _vm._v(" "),
                _c("h5", { staticClass: "mb-2 mt-1 pb-2 border-bottom" }, [
                  _vm._v(_vm._s(_vm.$t("membership.props.billing_address")))
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "row" }, [
                  _c(
                    "div",
                    { staticClass: "col-12" },
                    [
                      _c("base-input", {
                        attrs: {
                          label: _vm.formLabels.orgName,
                          type: "text",
                          error: _vm.formErrors.orgName
                        },
                        on: {
                          "update:error": function($event) {
                            return _vm.$set(_vm.formErrors, "orgName", $event)
                          }
                        },
                        model: {
                          value: _vm.formData.orgName,
                          callback: function($$v) {
                            _vm.$set(_vm.formData, "orgName", $$v)
                          },
                          expression: "formData.orgName"
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
                        attrs: {
                          label: _vm.formLabels.addressLine1,
                          type: "text",
                          error: _vm.formErrors.addressLine1
                        },
                        on: {
                          "update:error": function($event) {
                            return _vm.$set(
                              _vm.formErrors,
                              "addressLine1",
                              $event
                            )
                          }
                        },
                        model: {
                          value: _vm.formData.addressLine1,
                          callback: function($$v) {
                            _vm.$set(_vm.formData, "addressLine1", $$v)
                          },
                          expression: "formData.addressLine1"
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
                        attrs: {
                          label: _vm.formLabels.addressLine2,
                          type: "text",
                          error: _vm.formErrors.addressLine2
                        },
                        on: {
                          "update:error": function($event) {
                            return _vm.$set(
                              _vm.formErrors,
                              "addressLine2",
                              $event
                            )
                          }
                        },
                        model: {
                          value: _vm.formData.addressLine2,
                          callback: function($$v) {
                            _vm.$set(_vm.formData, "addressLine2", $$v)
                          },
                          expression: "formData.addressLine2"
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
                        attrs: {
                          label: _vm.formLabels.city,
                          type: "text",
                          error: _vm.formErrors.city
                        },
                        on: {
                          "update:error": function($event) {
                            return _vm.$set(_vm.formErrors, "city", $event)
                          }
                        },
                        model: {
                          value: _vm.formData.city,
                          callback: function($$v) {
                            _vm.$set(_vm.formData, "city", $$v)
                          },
                          expression: "formData.city"
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
                        attrs: {
                          label: _vm.formLabels.state,
                          type: "text",
                          error: _vm.formErrors.state
                        },
                        on: {
                          "update:error": function($event) {
                            return _vm.$set(_vm.formErrors, "state", $event)
                          }
                        },
                        model: {
                          value: _vm.formData.state,
                          callback: function($$v) {
                            _vm.$set(_vm.formData, "state", $$v)
                          },
                          expression: "formData.state"
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
                        attrs: {
                          label: _vm.formLabels.country,
                          type: "text",
                          error: _vm.formErrors.country
                        },
                        on: {
                          "update:error": function($event) {
                            return _vm.$set(_vm.formErrors, "country", $event)
                          }
                        },
                        model: {
                          value: _vm.formData.country,
                          callback: function($$v) {
                            _vm.$set(_vm.formData, "country", $$v)
                          },
                          expression: "formData.country"
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
                        attrs: {
                          label: _vm.formLabels.zipcode,
                          type: "text",
                          error: _vm.formErrors.zipcode
                        },
                        on: {
                          "update:error": function($event) {
                            return _vm.$set(_vm.formErrors, "zipcode", $event)
                          }
                        },
                        model: {
                          value: _vm.formData.zipcode,
                          callback: function($$v) {
                            _vm.$set(_vm.formData, "zipcode", $$v)
                          },
                          expression: "formData.zipcode"
                        }
                      })
                    ],
                    1
                  )
                ]),
                _vm._v(" "),
                _c("br"),
                _vm._v(" "),
                _vm.showPaymentOptions
                  ? _c(
                      "div",
                      [
                        _c(
                          "b-card",
                          { attrs: { "no-body": "" } },
                          [
                            _c(
                              "b-tabs",
                              {
                                attrs: {
                                  pills: "",
                                  card: "",
                                  vertical: "",
                                  lazy: "",
                                  "active-nav-item-class":
                                    "font-weight-bold py-2",
                                  "nav-wrapper-class":
                                    "col-12 col-md-4 col-lg-3 border-right"
                                },
                                model: {
                                  value: _vm.computedActiveTab,
                                  callback: function($$v) {
                                    _vm.computedActiveTab = $$v
                                  },
                                  expression: "computedActiveTab"
                                }
                              },
                              _vm._l(_vm.entity.paymentGateways, function(
                                gateway
                              ) {
                                return _c(
                                  "b-tab",
                                  {
                                    key: gateway.name,
                                    attrs: {
                                      title: gateway.label,
                                      "title-item-class": "p-0"
                                    }
                                  },
                                  [
                                    gateway.name === "stripe"
                                      ? _c("stripe-element-card", {
                                          ref: "stripeRef",
                                          refInFor: true,
                                          attrs: {
                                            pk: _vm.stripeConfig.key,
                                            amount: _vm.payableAmount * 100,
                                            locale: _vm.configs.system.locale,
                                            "style-object": _vm.stripeStyle
                                          },
                                          on: {
                                            token: _vm.stripeTokenCreated,
                                            loading: function($event) {
                                              _vm.loading = $event
                                            }
                                          }
                                        })
                                      : _vm._e(),
                                    _vm._v(" "),
                                    gateway.name === "paypal"
                                      ? _c(
                                          "div",
                                          { ref: "paypalRef", refInFor: true },
                                          [
                                            _c("animated-loader", {
                                              attrs: {
                                                "is-loading":
                                                  !_vm.paypalConfig.loaded &&
                                                  _vm.computedActiveTab === 1 &&
                                                  !_vm.isBusy,
                                                "loader-color":
                                                  _vm.vars.loaderColor
                                              }
                                            })
                                          ],
                                          1
                                        )
                                      : _vm._e(),
                                    _vm._v(" "),
                                    gateway.name === "paddle"
                                      ? _c(
                                          "div",
                                          { staticClass: "paddle-container" },
                                          [
                                            _c("animated-loader", {
                                              attrs: {
                                                "is-loading":
                                                  !_vm.paddleConfig.loaded &&
                                                  _vm.computedActiveTab === 2 &&
                                                  !_vm.isBusy,
                                                "loader-color":
                                                  _vm.vars.loaderColor
                                              }
                                            })
                                          ],
                                          1
                                        )
                                      : _vm._e()
                                  ],
                                  1
                                )
                              }),
                              1
                            )
                          ],
                          1
                        )
                      ],
                      1
                    )
                  : _vm._e()
              ]
            : _vm._e(),
          _vm._v(" "),
          _c("div", { staticClass: "form-footer mt-3" }, [
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
                        return _vm.$router.push({
                          name: "appMembershipList",
                          query: { reload: true }
                        })
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
                _vm.computedActiveTab === 0
                  ? _c(
                      "base-button",
                      { attrs: { type: "submit", design: "primary" } },
                      [
                        _vm._v(_vm._s(_vm.$t("general.proceed")) + " "),
                        _c("i", { staticClass: "fas fa-chevron-right" })
                      ]
                    )
                  : _c("span", { staticClass: "text-muted" }, [
                      _vm._v(_vm._s(_vm.$t("membership.pay_to_proceed")))
                    ])
              ],
              1
            )
          ])
        ],
        2
      )
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/views/app/membership/form.vue":
/*!****************************************************!*\
  !*** ./resources/js/views/app/membership/form.vue ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _form_vue_vue_type_template_id_41a3eec0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./form.vue?vue&type=template&id=41a3eec0& */ "./resources/js/views/app/membership/form.vue?vue&type=template&id=41a3eec0&");
/* harmony import */ var _form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./form.vue?vue&type=script&lang=js& */ "./resources/js/views/app/membership/form.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _form_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./form.vue?vue&type=style&index=0&lang=scss& */ "./resources/js/views/app/membership/form.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _form_vue_vue_type_template_id_41a3eec0___WEBPACK_IMPORTED_MODULE_0__["render"],
  _form_vue_vue_type_template_id_41a3eec0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/app/membership/form.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/app/membership/form.vue?vue&type=script&lang=js&":
/*!*****************************************************************************!*\
  !*** ./resources/js/views/app/membership/form.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./form.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/app/membership/form.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/app/membership/form.vue?vue&type=style&index=0&lang=scss&":
/*!**************************************************************************************!*\
  !*** ./resources/js/views/app/membership/form.vue?vue&type=style&index=0&lang=scss& ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_2_node_modules_sass_loader_dist_cjs_js_ref_9_3_node_modules_vue_loader_lib_index_js_vue_loader_options_form_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--9-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--9-3!../../../../../node_modules/vue-loader/lib??vue-loader-options!./form.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/app/membership/form.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_2_node_modules_sass_loader_dist_cjs_js_ref_9_3_node_modules_vue_loader_lib_index_js_vue_loader_options_form_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_2_node_modules_sass_loader_dist_cjs_js_ref_9_3_node_modules_vue_loader_lib_index_js_vue_loader_options_form_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_2_node_modules_sass_loader_dist_cjs_js_ref_9_3_node_modules_vue_loader_lib_index_js_vue_loader_options_form_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_2_node_modules_sass_loader_dist_cjs_js_ref_9_3_node_modules_vue_loader_lib_index_js_vue_loader_options_form_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/views/app/membership/form.vue?vue&type=template&id=41a3eec0&":
/*!***********************************************************************************!*\
  !*** ./resources/js/views/app/membership/form.vue?vue&type=template&id=41a3eec0& ***!
  \***********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_form_vue_vue_type_template_id_41a3eec0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./form.vue?vue&type=template&id=41a3eec0& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/app/membership/form.vue?vue&type=template&id=41a3eec0&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_form_vue_vue_type_template_id_41a3eec0___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_form_vue_vue_type_template_id_41a3eec0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=form.js.map?id=21002ac0d3f5451599c4