(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app/activity/index~app/config/locale/index~app/config/role/index~app/contact/index~app/meeting/feed~~eda71be7"],{

/***/ "./resources/js/mixins/table.js":
/*!**************************************!*\
  !*** ./resources/js/mixins/table.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header */ "./resources/js/mixins/header.js");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _core_configs_sweet_alert__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @core/configs/sweet-alert */ "./resources/js/core/configs/sweet-alert.js");
/* harmony import */ var _js_event_bus__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @js/event-bus */ "./resources/js/event-bus.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }



function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      uuid: null,
      entity: null,
      fields: [],
      preRequisite: {},
      preRequisiteFetchList: [],
      showFilters: false,
      isInitialized: false,
      isLoading: false,
      isFetching: false,
      noMoreData: false,
      getInitialDataCalled: false,
      gotError: false,
      selectedRows: [],
      formErrors: {},
      customFilters: {},
      filtersCastBoolean: [],
      appendToQuery: {},
      filtersOptions: {
        name: ''
      },
      sortOptions: {
        hasScroll: false
      },
      columnsOptions: {
        hasScroll: false
      },
      exportOptions: {},
      initUrl: '',
      initSubUrl: null,
      dataType: null,
      printOptions: null,
      headerButtons: null,
      headerFloaters: null,
      headerLinks: null,
      hideHeaderLinks: false,
      hideSortOptions: false,
      hideColumnOptions: false,
      hideFilterButton: false,
      feedTable: false
    };
  },
  computed: _objectSpread(_objectSpread(_objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_2__["mapGetters"])('common', ['entities', 'feed', 'filters', 'columns', 'others'])), Object(vuex__WEBPACK_IMPORTED_MODULE_2__["mapGetters"])('config', ['configs', 'uiConfigs', 'vars', 'allowExtraInput'])), Object(vuex__WEBPACK_IMPORTED_MODULE_2__["mapGetters"])('user', ['hasRole', 'hasPermission', 'hasAnyPermission', 'profile'])), {}, {
    isFiltered: function isFiltered() {
      var query = this.$route.query;
      return query.filtered === 'true' ? true : query.filtered === 'false' ? false : query.filtered;
    },
    selectAllRows: {
      get: function get() {
        var _this = this;

        return this.entities && this.entities.data.every(function (_ref) {
          var uuid = _ref.uuid;
          return _this.selectedRows.indexOf(uuid) !== -1;
        });
      },
      set: function set(value) {
        var selected = this.selectedRows;

        if (value) {
          this.entities.data.forEach(function (ent) {
            if (selected.indexOf(ent.uuid) === -1) {
              selected.push(ent.uuid);
            }
          });
        } else {
          this.entities.data.forEach(function (ent) {
            var index = selected.indexOf(ent.uuid);

            if (index !== -1) {
              selected.splice(index, 1);
            }
          });
        }

        this.selectedRows = selected;
      }
    },
    showTagsForm: function showTagsForm() {
      return !!this.selectedRows.length;
    },
    tableMeta: function tableMeta() {
      if (this.uiConfigs.hideSecureContent && this.filterFn && _.isFunction(this.filterFn)) {
        var arrayOfSecuredContent = this.entities.data.filter(this.filterFn);
        arrayOfSecuredContent = arrayOfSecuredContent.length;
        return _objectSpread(_objectSpread({}, this.entities.meta), {}, {
          to: this.entities.meta.to - arrayOfSecuredContent,
          total: this.entities.meta.total - arrayOfSecuredContent
        });
      }

      return this.entities.meta;
    }
  }),
  watch: {
    $route: function $route(val, oldVal) {
      if (this.initSubUrl && this.$route.params.uuid && val.params.uuid !== oldVal.params.uuid) {
        this.doInit();
        this.getEntityData();
      } else {
        this.updatePageMeta();
        this.applyPageHeader();
      }
    },
    columns: function columns(val, oldVal) {
      if (val.fields) {
        this.fields = val.fields;
        this.refreshTable();
      }
    }
  },
  methods: _objectSpread(_objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_2__["mapActions"])('common', ['Init', 'InitSub', 'Get', 'GetList', 'GetFeed', 'Destroy', 'Update', 'SetMeta', 'SetFilters', 'Custom', 'GetPreRequisite', 'ResetFilters', 'SetPageHeader'])), Object(vuex__WEBPACK_IMPORTED_MODULE_2__["mapActions"])('config', ['SetUiConfig', 'SetConfig'])), {}, {
    itemsProvider: function itemsProvider(context) {
      var _this2 = this;

      this.isLoading = true;

      var query = _objectSpread(_objectSpread(_objectSpread({}, this.filters), {}, {
        currentPage: this.entities.meta.currentPage,
        perPage: this.entities.meta.perPage
      }, this.appendToQuery), {}, {
        sortBy: this.filters.sortBy ? this.filters.sortBy.snakeCase() : this.filters.sortBy
      });

      this.gotError = false;
      return this.GetList(query).then(function (response) {
        return response.data;
      })["catch"](function (error) {
        _this2.isLoading = false;
        formUtil.handleErrors(error);
        _this2.gotError = true;
        return [];
      });
    },
    getFeed: _.debounce(function () {
      var _this3 = this;

      if (!this.feedTable || this.noMoreData) {
        return;
      }

      this.isFetching = true;

      var query = _objectSpread(_objectSpread(_objectSpread({}, this.filters), {}, {
        perPage: this.feed.meta.perPage,
        cursor: this.feed.meta.cursor || true
      }, this.appendToQuery), {}, {
        sortBy: this.filters.sortBy ? this.filters.sortBy.snakeCase() : this.filters.sortBy
      });

      this.gotError = false;
      return this.GetFeed(query).then(function (response) {
        if (response.meta && response.meta.hasMorePages && response.data && response.data.length) {
          _this3.noMoreData = false;
        } else {
          _this3.noMoreData = true;
        }

        _this3.isInitialized = true;
        _this3.isFetching = false;
        _this3.isLoading = false;
        return response.data;
      })["catch"](function (error) {
        _this3.noMoreData = false;
        _this3.isInitialized = true;
        _this3.isFetching = false;
        _this3.isLoading = false;
        formUtil.handleErrors(error);
        _this3.gotError = true;
        return [];
      });
    }, 1000),
    updatePageMeta: function updatePageMeta() {
      var initTable = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
      var forceRefresh = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      var query = this.$route.query;
      var paginationMeta = {
        currentPage: parseInt(query.currentPage || 1),
        perPage: parseInt(query.perPage || this.configs.system.perPage),
        cursor: query.cursor || this.entities.meta.cursor || true
      };
      var filtersMeta = this.filters;
      query.objForEach(function (value, key) {
        filtersMeta[key] = value;
      });

      if (this.filtersCastBoolean && this.filtersCastBoolean.length) {
        this.filtersCastBoolean.objForEach(function (value) {
          filtersMeta[value] = filtersMeta[value] === 'true' ? true : filtersMeta[value] === 'false' ? false : filtersMeta[value];
        });
      }

      if (this.customFilters) {
        this.customFilters.objForEach(function (value, key) {
          filtersMeta[key] = value;
        });
      }

      this.SetMeta(paginationMeta);
      this.SetFilters(filtersMeta);

      if (initTable) {
        if (this.isInitialized) {
          this.refreshTable();
          this.isInitialized = true;
        } else {
          this.isInitialized = true;
        }
      } else if (forceRefresh) {
        this.refreshTable();
      }
    },
    refreshTable: function refreshTable() {
      if (this.$refs && this.$refs.hasOwnProperty('btable') && this.$refs.btable) {
        this.$refs.btable.refresh();
      }

      this.getFeed();
    },
    refreshTableIfRoute: function refreshTableIfRoute(route) {
      if (this.$route.name === route) {
        this.refreshTable();
      }

      this.getFeed();
    },
    toggleFilter: function toggleFilter() {
      this.showFilters = !this.showFilters;
    },
    deleteEntity: function deleteEntity(entity) {
      var _this4 = this;

      formUtil.confirmAction().then(function (result) {
        if (result.value) {
          _this4.isLoading = true;

          _this4.Destroy(entity).then(function (response) {
            _this4.isLoading = false;

            _this4.$toasted.success(response.message, _this4.$toastConfig);

            _this4.$nextTick(function () {
              _this4.refreshTable();

              if (typeof _this4.getInitialData === "function" && _this4.getInitialDataCalled && _this4.getInitialDataCalledAfterDeleting) {
                _this4.getInitialData();
              }
            });
          })["catch"](function (error) {
            _this4.isLoading = false;
            _this4.isInitialized = true;
            _this4.formErrors = formUtil.handleErrors(error);
          });
        } else {
          result.dismiss === _core_configs_sweet_alert__WEBPACK_IMPORTED_MODULE_3__["default"].DismissReason.cancel;
        }
      });
    },
    fillFilterPreRequisite: function fillFilterPreRequisite() {
      var _this5 = this;

      if (!(this.isFiltered && this.filters && this.preRequisiteFetchList && this.preRequisiteFetchList.length)) {
        return;
      }

      this.preRequisiteFetchList.forEach(function (obj) {
        if (obj.filterKey && obj.preRequisiteKey && obj.url) {
          _this5.Custom({
            url: obj.url + _this5.filters[obj.filterKey],
            method: 'get'
          }).then(function (response) {
            if (response) {
              _this5.preRequisite[obj.preRequisiteKey].push(response);
            }
          });
        }
      });
    },
    fillPreRequisite: function fillPreRequisite(response) {
      var _this6 = this;

      this.preRequisite.objForEach(function (value, key) {
        _this6.preRequisite[key] = response.hasOwnProperty(key) ? response[key] : value;
      });
      this.isLoading = false;
    },
    getInitialData: function getInitialData() {
      var _this7 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var query, preRequisiteQuery, response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _this7.isLoading = true;
                _this7.getInitialDataCalled = true;
                _context.prev = 2;
                query = _this7.$route.query;
                preRequisiteQuery = {};

                if (_this7.isFiltered && query && _this7.preRequisiteFetchList && _this7.preRequisiteFetchList.length) {
                  _this7.preRequisiteFetchList.forEach(function (obj) {
                    if (obj.filterKey && query[obj.filterKey]) {
                      preRequisiteQuery[obj.filterKey] = query[obj.filterKey];
                    }
                  });
                }

                _context.next = 8;
                return _this7.GetPreRequisite(_objectSpread(_objectSpread({}, _this7.customFilters), preRequisiteQuery));

              case 8:
                response = _context.sent;

                _this7.fillPreRequisite(response);

                _this7.updatePageMeta();

                _this7.fillFilterPreRequisite();

                if (typeof _this7.afterGetInitialData === "function") {
                  _this7.afterGetInitialData();
                }

                return _context.abrupt("return", response);

              case 16:
                _context.prev = 16;
                _context.t0 = _context["catch"](2);
                _this7.isLoading = false;
                _this7.formErrors = formUtil.handleErrors(_context.t0);
                throw _context.t0;

              case 21:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[2, 16]]);
      }))();
    },
    getEntityData: function getEntityData(callbackFn) {
      var _this8 = this;

      this.isLoading = true;

      if (this.initSubUrl && this.$route.params.uuid) {
        this.uuid = this.$route.params.uuid;
        return this.Get({
          uuid: this.uuid
        }).then(function (response) {
          _this8.entity = response;

          if (response.name) {
            _this8.pageTitle = response.name;
            _this8.subTitle = response.name ? _this8.subTitle : '';

            _this8.applyPageHeader();
          }

          _this8.doInitSub();

          _this8.updatePageMeta();

          _this8.isLoading = false;

          if (_this8.afterGetEntityData && typeof _this8.afterGetEntityData === "function") {
            _this8.afterGetEntityData();
          }

          if (callbackFn && typeof callbackFn === "function") {
            callbackFn();
          }
        })["catch"](function (error) {
          _this8.isLoading = false;
          formUtil.handleErrors(error);

          _this8.$router.back();
        });
      } else {
        this.isLoading = false;
        this.$router.back();
      }
    },
    reloadEntityData: function reloadEntityData(callbackFn) {
      var _this9 = this;

      this.isLoading = true;

      if (this.initSubUrl && this.$route.params.uuid) {
        this.uuid = this.$route.params.uuid;
        return this.Get({
          uuid: this.uuid
        }).then(function (response) {
          _this9.entity = response;

          if (response.name) {
            _this9.pageTitle = response.name;
            _this9.subTitle = response.name ? _this9.subTitle : '';

            _this9.applyPageHeader();
          }

          _this9.isLoading = false;

          if (callbackFn && typeof callbackFn === "function") {
            callbackFn();
          }
        })["catch"](function (error) {
          _this9.isLoading = false;
          formUtil.handleErrors(error);

          _this9.$router.back();
        });
      } else {
        this.isLoading = false;
        this.$router.back();
      }
    },
    applyTags: function applyTags(formData) {
      var _this10 = this;

      this.Custom({
        url: "/tags",
        method: 'post',
        data: _objectSpread(_objectSpread({}, formData), {}, {
          type: (this.tagType || this.dataType).kebabCase(),
          uuids: this.selectedRows
        })
      }).then(function (response) {
        _this10.selectedRows = [];

        _this10.$toasted.success(response.message, _this10.$toastConfig);

        if (_this10.refreshAfterTagsApplied) {
          _this10.$nextTick(function () {
            _this10.refreshTable();
          });
        }

        _this10.isLoading = false;
      })["catch"](function (error) {
        _this10.isLoading = false;
        _this10.formErrors = formUtil.handleErrors(error);
      });
    },
    getSortOptionsArray: function getSortOptionsArray() {
      return this.fields.filter(function (f) {
        return f.sort;
      }).map(function (f) {
        return {
          label: f.label,
          sort: f.sort,
          thClass: f.thClass,
          tdClass: f.tdClass
        };
      });
    },
    getHeaderOptions: function getHeaderOptions() {
      var buttons = [];

      if (this.routesRequired && this.routesRequired.add) {
        if (_typeof(this.permissionsRequired) === 'object' && this.permissionsRequired !== null && this.permissionsRequired.add) {
          buttons.push(_header__WEBPACK_IMPORTED_MODULE_1__["addButton"](this.routesRequired.add, this.permissionsRequired.add));
        } else if (this.permissionsRequired) {
          buttons.push(_header__WEBPACK_IMPORTED_MODULE_1__["addButton"](this.routesRequired.add, this.permissionsRequired));
        } else {
          buttons.push(_header__WEBPACK_IMPORTED_MODULE_1__["addButton"](this.routesRequired.add));
        }
      }

      if (!this.hideFilterButton) {
        buttons.push(_header__WEBPACK_IMPORTED_MODULE_1__["filterButton"]());
      }

      if (this.routesRequired && this.routesRequired.config) {
        if (_typeof(this.permissionsRequired) === 'object' && this.permissionsRequired !== null && this.permissionsRequired.config) {
          buttons.push(_header__WEBPACK_IMPORTED_MODULE_1__["configButton"](this.routesRequired.config, this.permissionsRequired.config));
        } else if (this.permissionsRequired) {
          buttons.push(_header__WEBPACK_IMPORTED_MODULE_1__["configButton"](this.routesRequired.config, this.permissionsRequired));
        } else {
          buttons.push(_header__WEBPACK_IMPORTED_MODULE_1__["configButton"](this.routesRequired.config));
        }
      }

      if (this.headerButtons) {
        buttons = buttons.concat(this.headerButtons);
      }

      var floaters = [];

      if (this.headerFloaters) {
        headerFloaters = headerFloaters.concat(this.headerFloaters);
      }

      var links = [];

      if (this.routesRequired && this.routesRequired["import"]) {
        if (_typeof(this.permissionsRequired) === 'object' && this.permissionsRequired !== null && this.permissionsRequired["import"]) {
          links.push(_header__WEBPACK_IMPORTED_MODULE_1__["importOption"](this.routesRequired["import"], this.permissionsRequired["import"]));
        } else if (this.permissionsRequired) {
          links.push(_header__WEBPACK_IMPORTED_MODULE_1__["importOption"](this.routesRequired["import"], this.permissionsRequired));
        }
      }

      if (this.routesRequired && this.routesRequired.config) {
        if (_typeof(this.permissionsRequired) === 'object' && this.permissionsRequired !== null && this.permissionsRequired.config) {
          links.push(_header__WEBPACK_IMPORTED_MODULE_1__["configOption"](this.routesRequired.config, this.permissionsRequired.config));
        } else if (this.permissionsRequired) {
          links.push(_header__WEBPACK_IMPORTED_MODULE_1__["configOption"](this.routesRequired.config, this.permissionsRequired));
        }
      }

      links.push(_header__WEBPACK_IMPORTED_MODULE_1__["printOption"]());
      links.push(_header__WEBPACK_IMPORTED_MODULE_1__["exportPdfOption"]());
      links.push(_header__WEBPACK_IMPORTED_MODULE_1__["exportCsvOption"]()); // links.push(headerMixins.exportExcelCsvOption())

      links.push(_header__WEBPACK_IMPORTED_MODULE_1__["exportXlsOption"]());

      if (this.headerLinks) {
        links = links.concat(this.headerLinks);
      }

      return {
        hideLinks: this.hideHeaderLinks || false,
        buttons: buttons,
        floaters: floaters,
        sort: this.hideSortOptions ? false : _header__WEBPACK_IMPORTED_MODULE_1__["getSortOptions"](this.sortOptions || {}, this.getSortOptionsArray()),
        links: links,
        columns: this.hideColumnOptions ? false : this.columnsOptions,
        title: this.pageTitle || '',
        subTitle: this.pageTitle ? this.subTitle || '' : ''
      };
    },
    getKeyBindingOptions: function getKeyBindingOptions() {
      var opts = _objectSpread({}, _header__WEBPACK_IMPORTED_MODULE_1__["commonKeyBindings"]);

      if (this.routesRequired && this.routesRequired.add) {
        opts['key_a'] = this.routesRequired.add;
      }

      return opts;
    },
    applyPageHeader: function applyPageHeader() {
      var pageHeaderOptions = Object.assign({}, this.getHeaderOptions(), this.header || {});
      var keyBindings = Object.assign({}, this.getKeyBindingOptions(), this.keyBindings || {});
      this.SetPageHeader(pageHeaderOptions);
      this.SetConfig({
        keyBindings: keyBindings
      });
    },
    "export": function _export(options) {
      var _this11 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
        var transformers, getFinalValue, exportUtil, exportOptions, fields, secureContentPattern, content, excelStrings, fileTitle, fileName, columns;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _this11.isLoading = true;
                _context2.next = 3;
                return __webpack_require__.e(/*! import() | helpers/transformers */ "helpers/transformers").then(__webpack_require__.bind(null, /*! @js/helpers/transformers */ "./resources/js/helpers/transformers.js"));

              case 3:
                transformers = _context2.sent;

                getFinalValue = function getFinalValue(item, key) {
                  var finalVal;
                  var keys = key.split('.');

                  if (keys && keys.length) {
                    keys.forEach(function (k, i) {
                      finalVal = finalVal ? finalVal[k] : i === 0 ? item[k] : null;
                    });
                  } else {
                    finalVal = item[key];
                  }

                  return finalVal;
                };

                exportOptions = _this11.exportOptions || {};
                fields = _this11.exportPdfFields || _this11.fields.filter(function (f) {
                  return (f.label || f.headerTitle) && !f.cantExport;
                });

                if (_this11.uiConfigs.hideSecureContent) {
                  secureContentPattern = new RegExp('secure-content', 'igm');
                  fields = fields.filter(function (f) {
                    return !secureContentPattern.test(f.thClass) && !secureContentPattern.test(f.tdClass);
                  });
                }

                content = [];
                excelStrings = false;
                fileTitle = '';
                fileName = moment().unix();

                if (_this11.$route.meta.title) {
                  fileTitle = _this11.$route.meta.trans ? $t(_this11.$route.meta.trans, {
                    attribute: $t(_this11.$route.meta.title)
                  }) : $t(_this11.$route.meta.title);
                  fileName = fileTitle.toLowerCase().replace(/\s+/g, '-') + '-' + fileName;
                }

                if (options.type === 'xls-csv') {
                  options.type = 'csv';
                  excelStrings = true;
                }

                if (!(options.type === 'pdf' || options.type === 'print')) {
                  _context2.next = 23;
                  break;
                }

                _context2.next = 17;
                return Promise.all(/*! import() | utils/export-pdf */[__webpack_require__.e("vendors~utils/export-pdf"), __webpack_require__.e("utils/export-pdf")]).then(__webpack_require__.bind(null, /*! @core/utils/export/pdf */ "./resources/js/core/utils/export/pdf.js"));

              case 17:
                exportUtil = _context2.sent;
                columns = fields.map(function (f) {
                  return {
                    header: f.label || f.headerTitle,
                    dataKey: f.key
                  };
                });
                content = _this11.entities.data.map(function (item) {
                  var row = {};
                  fields.forEach(function (field) {
                    var ft = field.transformer;
                    var value = getFinalValue(item, field.key);

                    if (ft && (value || value === false)) {
                      ft = _.isArray(ft) ? ft : [ft];
                      ft.forEach(function (ftrans) {
                        var func = _.isFunction(ftrans) ? ftrans : transformers[ftrans];
                        value = field.transformerOpts ? func(value, field.transformerOpts) : func(value, item);
                      });
                    }

                    row[field.key] = value || "";
                  });
                  return row;
                });

                if (options.type === 'pdf') {
                  exportUtil.downloadPdfFile(fileName, fileTitle, columns, content, exportOptions);
                } else {
                  exportUtil.printTable(fileTitle, columns, content, exportOptions);
                }

                _context2.next = 28;
                break;

              case 23:
                _context2.next = 25;
                return Promise.all(/*! import() | utils/export-csv */[__webpack_require__.e("vendors~utils/export-csv"), __webpack_require__.e("utils/export-csv")]).then(__webpack_require__.bind(null, /*! @core/utils/export/csv */ "./resources/js/core/utils/export/csv.js"));

              case 25:
                exportUtil = _context2.sent;
                content = _this11.entities.data.map(function (item) {
                  var row = {};
                  fields.forEach(function (field) {
                    var ft = field.transformer;
                    var value = getFinalValue(item, field.key);

                    if (ft && (value || value === false)) {
                      ft = _.isArray(ft) ? ft : [ft];
                      ft.forEach(function (ftrans) {
                        var func = _.isFunction(ftrans) ? ftrans : transformers[ftrans];
                        value = field.transformerOpts ? func(value, field.transformerOpts) : func(value, item);
                      });
                    }

                    row[field.label] = value || "";
                  });
                  return row;
                });
                exportUtil.downloadFile(content, options.type, fileName);

              case 28:
                _this11.isLoading = false;

              case 29:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }))();
    },
    doInitSub: function doInitSub() {
      this.uuid = this.$route.params.uuid;

      if (!this.uuid) {
        this.isLoading = false;
        this.$router.back();
      }

      this.InitSub({
        url: this.uuid + '/' + this.initSubUrl,
        filters: this.filtersOptions,
        columns: this.fields
      });
    },
    doInit: function doInit() {
      this.Init({
        url: this.initUrl,
        filters: this.filtersOptions,
        columns: this.fields
      });
      this.applyPageHeader();
    },
    clearFilters: function clearFilters() {
      var filterOptionsHasDefaultValues = false;
      this.filtersOptions.objForEach(function (value, key) {
        if (value !== '') {
          filterOptionsHasDefaultValues = true;
        }
      });

      if (filterOptionsHasDefaultValues) {
        this.ResetFilters();
        this.SetFilters(_objectSpread(_objectSpread({}, this.filters), this.filtersOptions));
      } else {
        this.ResetFilters();
      }

      if (this.$route.query && this.$route.query.filtered) {
        this.$router.push({
          path: this.$route.path
        })["catch"](function (err) {});
      }

      if (this.afterClearFilters && _.isFunction(this.afterClearFilters)) {
        this.afterClearFilters();
      }
    },
    rowClickHandler: function rowClickHandler(opts, item) {
      if (opts.action && typeof opts.action === "function") {
        opts.action(opts, item);
      } else if (opts.route) {
        this.$router.push({
          name: opts.route,
          params: {
            uuid: item.uuid
          }
        });
      } else if (opts.getRoute && _.isFunction(opts.getRoute)) {
        var route = opts.getRoute(item);

        if (route) {
          this.$router.push({
            name: route,
            params: {
              uuid: item.uuid
            }
          });
        }
      }
    },
    getBalanceClass: function getBalanceClass(balance) {
      var classText = balance > 0 ? 'text-success' : 'text-danger';
      classText = balance && Number(balance) != 0 ? classText : 'text-muted';
      classText = classText + ' font-weight-600';
      return classText;
    },
    getPopoverContent: function getPopoverContent(rowItem) {
      var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'list';
      var entityKey = arguments.length > 2 ? arguments[2] : undefined;
      var entityProperty = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 'name';
      var customContentFn = arguments.length > 4 ? arguments[4] : undefined;

      if (type === 'list' && entityKey && entityProperty) {
        var content = this.getDetailsList(rowItem[entityKey], entityProperty);
        content = "<ul>".concat(content.join(), "</ul>");
        return content;
      } else if (type === 'custom' && customContentFn && typeof customContentFn === "function") {
        return customContentFn(rowItem);
      }
    },
    getDetailsList: function getDetailsList(entities, key) {
      return entities.map(function (entity) {
        return "<li>".concat(entity[key], "</li>");
      });
    },
    momentFn: function momentFn(date, inFormat, outFormat) {
      return moment(date, inFormat || this.vars.serverDateFormat).format(outFormat || this.vars.defaultDateFormat);
    }
  }),
  mounted: function mounted() {
    _js_event_bus__WEBPACK_IMPORTED_MODULE_4__["default"].$off('REFRESH_TABLE', this.refreshTableIfRoute);
    _js_event_bus__WEBPACK_IMPORTED_MODULE_4__["default"].$on('REFRESH_TABLE', this.refreshTableIfRoute);
    _js_event_bus__WEBPACK_IMPORTED_MODULE_4__["default"].$off('TOGGLE_FILTER', this.toggleFilter);
    _js_event_bus__WEBPACK_IMPORTED_MODULE_4__["default"].$on('TOGGLE_FILTER', this.toggleFilter);
    _js_event_bus__WEBPACK_IMPORTED_MODULE_4__["default"].$off('CLEAR_FILTERS', this.clearFilters);
    _js_event_bus__WEBPACK_IMPORTED_MODULE_4__["default"].$on('CLEAR_FILTERS', this.clearFilters);
    _js_event_bus__WEBPACK_IMPORTED_MODULE_4__["default"].$off('EXPORT', this["export"]);
    _js_event_bus__WEBPACK_IMPORTED_MODULE_4__["default"].$on('EXPORT', this["export"]);

    if (this.isFiltered) {
      this.showFilters = true;
    }

    this.doInit();
  },
  destroyed: function destroyed() {
    _js_event_bus__WEBPACK_IMPORTED_MODULE_4__["default"].$off('REFRESH_TABLE', this.refreshTableIfRoute);
    _js_event_bus__WEBPACK_IMPORTED_MODULE_4__["default"].$off('TOGGLE_FILTER', this.toggleFilter);
    _js_event_bus__WEBPACK_IMPORTED_MODULE_4__["default"].$off('CLEAR_FILTERS', this.clearFilters);
    _js_event_bus__WEBPACK_IMPORTED_MODULE_4__["default"].$off('EXPORT', this["export"]);
  }
});

/***/ })

}]);
//# sourceMappingURL=feed~~eda71be7.js.map?id=e5d1ee61a7017ef8be7a