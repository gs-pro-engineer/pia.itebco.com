(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app/meeting/add~app/meeting/edit~app/site/page/add~app/site/page/edit~app/utility/note/add~app/utili~2de71fcc"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/core/components/EditorWrapper.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/core/components/EditorWrapper.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery_dist_jquery_min_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery/dist/jquery.min.js */ "./node_modules/jquery/dist/jquery.min.js");
/* harmony import */ var jquery_dist_jquery_min_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery_dist_jquery_min_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vue_trumbowyg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-trumbowyg */ "./node_modules/vue-trumbowyg/dist/vue-trumbowyg.min.js");
/* harmony import */ var vue_trumbowyg__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vue_trumbowyg__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var trumbowyg_dist_ui_trumbowyg_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! trumbowyg/dist/ui/trumbowyg.css */ "./node_modules/trumbowyg/dist/ui/trumbowyg.css");
/* harmony import */ var trumbowyg_dist_ui_trumbowyg_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(trumbowyg_dist_ui_trumbowyg_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _images_icons_trumbowyg_icons_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @images/icons/trumbowyg-icons.svg */ "./resources/images/icons/trumbowyg-icons.svg");
/* harmony import */ var _images_icons_trumbowyg_icons_svg__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_images_icons_trumbowyg_icons_svg__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var jquery_resizable_dom_dist_jquery_resizable_min_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! jquery-resizable-dom/dist/jquery-resizable.min.js */ "./node_modules/jquery-resizable-dom/dist/jquery-resizable.min.js");
/* harmony import */ var jquery_resizable_dom_dist_jquery_resizable_min_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(jquery_resizable_dom_dist_jquery_resizable_min_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var trumbowyg_dist_plugins_cleanpaste_trumbowyg_cleanpaste_min_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! trumbowyg/dist/plugins/cleanpaste/trumbowyg.cleanpaste.min.js */ "./node_modules/trumbowyg/dist/plugins/cleanpaste/trumbowyg.cleanpaste.min.js");
/* harmony import */ var trumbowyg_dist_plugins_cleanpaste_trumbowyg_cleanpaste_min_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(trumbowyg_dist_plugins_cleanpaste_trumbowyg_cleanpaste_min_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var trumbowyg_dist_plugins_allowtagsfrompaste_trumbowyg_allowtagsfrompaste_min_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! trumbowyg/dist/plugins/allowtagsfrompaste/trumbowyg.allowtagsfrompaste.min.js */ "./node_modules/trumbowyg/dist/plugins/allowtagsfrompaste/trumbowyg.allowtagsfrompaste.min.js");
/* harmony import */ var trumbowyg_dist_plugins_allowtagsfrompaste_trumbowyg_allowtagsfrompaste_min_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(trumbowyg_dist_plugins_allowtagsfrompaste_trumbowyg_allowtagsfrompaste_min_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var trumbowyg_dist_plugins_colors_ui_trumbowyg_colors_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! trumbowyg/dist/plugins/colors/ui/trumbowyg.colors.css */ "./node_modules/trumbowyg/dist/plugins/colors/ui/trumbowyg.colors.css");
/* harmony import */ var trumbowyg_dist_plugins_colors_ui_trumbowyg_colors_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(trumbowyg_dist_plugins_colors_ui_trumbowyg_colors_css__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var trumbowyg_dist_plugins_colors_trumbowyg_colors_min_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! trumbowyg/dist/plugins/colors/trumbowyg.colors.min.js */ "./node_modules/trumbowyg/dist/plugins/colors/trumbowyg.colors.min.js");
/* harmony import */ var trumbowyg_dist_plugins_colors_trumbowyg_colors_min_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(trumbowyg_dist_plugins_colors_trumbowyg_colors_min_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var trumbowyg_dist_plugins_table_ui_trumbowyg_table_min_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! trumbowyg/dist/plugins/table/ui/trumbowyg.table.min.css */ "./node_modules/trumbowyg/dist/plugins/table/ui/trumbowyg.table.min.css");
/* harmony import */ var trumbowyg_dist_plugins_table_ui_trumbowyg_table_min_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(trumbowyg_dist_plugins_table_ui_trumbowyg_table_min_css__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var trumbowyg_dist_plugins_table_trumbowyg_table_min_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! trumbowyg/dist/plugins/table/trumbowyg.table.min.js */ "./node_modules/trumbowyg/dist/plugins/table/trumbowyg.table.min.js");
/* harmony import */ var trumbowyg_dist_plugins_table_trumbowyg_table_min_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(trumbowyg_dist_plugins_table_trumbowyg_table_min_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var trumbowyg_dist_plugins_emoji_ui_trumbowyg_emoji_css__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! trumbowyg/dist/plugins/emoji/ui/trumbowyg.emoji.css */ "./node_modules/trumbowyg/dist/plugins/emoji/ui/trumbowyg.emoji.css");
/* harmony import */ var trumbowyg_dist_plugins_emoji_ui_trumbowyg_emoji_css__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(trumbowyg_dist_plugins_emoji_ui_trumbowyg_emoji_css__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var trumbowyg_dist_plugins_emoji_trumbowyg_emoji_min_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! trumbowyg/dist/plugins/emoji/trumbowyg.emoji.min.js */ "./node_modules/trumbowyg/dist/plugins/emoji/trumbowyg.emoji.min.js");
/* harmony import */ var trumbowyg_dist_plugins_emoji_trumbowyg_emoji_min_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(trumbowyg_dist_plugins_emoji_trumbowyg_emoji_min_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var trumbowyg_dist_plugins_fontsize_trumbowyg_fontsize_min_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! trumbowyg/dist/plugins/fontsize/trumbowyg.fontsize.min.js */ "./node_modules/trumbowyg/dist/plugins/fontsize/trumbowyg.fontsize.min.js");
/* harmony import */ var trumbowyg_dist_plugins_fontsize_trumbowyg_fontsize_min_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(trumbowyg_dist_plugins_fontsize_trumbowyg_fontsize_min_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var trumbowyg_dist_plugins_history_trumbowyg_history_min_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! trumbowyg/dist/plugins/history/trumbowyg.history.min.js */ "./node_modules/trumbowyg/dist/plugins/history/trumbowyg.history.min.js");
/* harmony import */ var trumbowyg_dist_plugins_history_trumbowyg_history_min_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(trumbowyg_dist_plugins_history_trumbowyg_history_min_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var trumbowyg_dist_plugins_lineheight_trumbowyg_lineheight_min_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! trumbowyg/dist/plugins/lineheight/trumbowyg.lineheight.min.js */ "./node_modules/trumbowyg/dist/plugins/lineheight/trumbowyg.lineheight.min.js");
/* harmony import */ var trumbowyg_dist_plugins_lineheight_trumbowyg_lineheight_min_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(trumbowyg_dist_plugins_lineheight_trumbowyg_lineheight_min_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var trumbowyg_dist_plugins_noembed_trumbowyg_noembed_min_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! trumbowyg/dist/plugins/noembed/trumbowyg.noembed.min.js */ "./node_modules/trumbowyg/dist/plugins/noembed/trumbowyg.noembed.min.js");
/* harmony import */ var trumbowyg_dist_plugins_noembed_trumbowyg_noembed_min_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(trumbowyg_dist_plugins_noembed_trumbowyg_noembed_min_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var trumbowyg_dist_plugins_pasteembed_trumbowyg_pasteembed_min_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! trumbowyg/dist/plugins/pasteembed/trumbowyg.pasteembed.min.js */ "./node_modules/trumbowyg/dist/plugins/pasteembed/trumbowyg.pasteembed.min.js");
/* harmony import */ var trumbowyg_dist_plugins_pasteembed_trumbowyg_pasteembed_min_js__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(trumbowyg_dist_plugins_pasteembed_trumbowyg_pasteembed_min_js__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var trumbowyg_dist_plugins_preformatted_trumbowyg_preformatted_min_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! trumbowyg/dist/plugins/preformatted/trumbowyg.preformatted.min.js */ "./node_modules/trumbowyg/dist/plugins/preformatted/trumbowyg.preformatted.min.js");
/* harmony import */ var trumbowyg_dist_plugins_preformatted_trumbowyg_preformatted_min_js__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(trumbowyg_dist_plugins_preformatted_trumbowyg_preformatted_min_js__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var trumbowyg_dist_plugins_resizimg_trumbowyg_resizimg_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! trumbowyg/dist/plugins/resizimg/trumbowyg.resizimg.js */ "./node_modules/trumbowyg/dist/plugins/resizimg/trumbowyg.resizimg.js");
/* harmony import */ var trumbowyg_dist_plugins_resizimg_trumbowyg_resizimg_js__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(trumbowyg_dist_plugins_resizimg_trumbowyg_resizimg_js__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var trumbowyg_dist_plugins_specialchars_ui_trumbowyg_specialchars_css__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! trumbowyg/dist/plugins/specialchars/ui/trumbowyg.specialchars.css */ "./node_modules/trumbowyg/dist/plugins/specialchars/ui/trumbowyg.specialchars.css");
/* harmony import */ var trumbowyg_dist_plugins_specialchars_ui_trumbowyg_specialchars_css__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(trumbowyg_dist_plugins_specialchars_ui_trumbowyg_specialchars_css__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var trumbowyg_dist_plugins_specialchars_trumbowyg_specialchars_min_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! trumbowyg/dist/plugins/specialchars/trumbowyg.specialchars.min.js */ "./node_modules/trumbowyg/dist/plugins/specialchars/trumbowyg.specialchars.min.js");
/* harmony import */ var trumbowyg_dist_plugins_specialchars_trumbowyg_specialchars_min_js__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(trumbowyg_dist_plugins_specialchars_trumbowyg_specialchars_min_js__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var trumbowyg_dist_plugins_upload_trumbowyg_upload_min_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! trumbowyg/dist/plugins/upload/trumbowyg.upload.min.js */ "./node_modules/trumbowyg/dist/plugins/upload/trumbowyg.upload.min.js");
/* harmony import */ var trumbowyg_dist_plugins_upload_trumbowyg_upload_min_js__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(trumbowyg_dist_plugins_upload_trumbowyg_upload_min_js__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var _core_utils_auth__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @core/utils/auth */ "./resources/js/core/utils/auth.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
























var token = Object(_core_utils_auth__WEBPACK_IMPORTED_MODULE_23__["getToken"])();
var btnsDefObj = {
  image: {
    dropdown: ['insertImage', 'upload'],
    ico: 'insertImage'
  },
  textAlign: {
    dropdown: ['justifyLeft', 'justifyCenter', 'justifyRight', 'justifyFull'],
    ico: 'justifyFull'
  },
  textDecoration: {
    dropdown: ['underline', 'del', 'superscript', 'subscript'],
    ico: 'underline'
  },
  lists: {
    dropdown: ['unorderedList', 'orderedList'],
    ico: 'unorderedList'
  },
  extras: {
    dropdown: ['removeformat', 'undo', 'redo', 'horizontalRule', 'preformatted'],
    ico: 'removeformat'
  }
};
/* harmony default export */ __webpack_exports__["default"] = ({
  name: "editor-wrapper",
  components: {
    Trumbowyg: vue_trumbowyg__WEBPACK_IMPORTED_MODULE_1___default.a
  },
  props: {
    disabled: {
      type: Boolean,
      "default": false,
      description: "Whether input is required (adds an asterix *)"
    },
    required: {
      type: Boolean,
      "default": false,
      description: "Whether input is required (adds an asterix *)"
    },
    config: {
      type: [String, Object]
    },
    autogrow: {
      type: Boolean,
      "default": false
    },
    height: {
      type: String,
      "default": ''
    },
    label: {
      type: String,
      "default": 'Enter content'
    },
    value: {
      type: String,
      description: "Selected value"
    },
    error: {
      type: String,
      description: "Select error (below select)"
    }
  },
  data: function data() {
    return {
      configObj: {
        btnsDef: {
          image: btnsDefObj.image,
          textAlign: btnsDefObj.textAlign,
          textDecoration: btnsDefObj.textDecoration,
          lists: btnsDefObj.lists
        },
        btns: [['undo', 'redo'], ['formatting', 'strong', 'em', 'textDecoration'], ['foreColor', 'backColor'], ['textAlign', 'lists'], ['horizontalRule', 'link', 'image', 'table', 'specialChars', 'emoji'], ['preformatted'], ['removeformat'], ['fullscreen']],
        plugins: {
          resizimg: {
            minSize: 64,
            step: 16
          },
          table: {
            rows: 8,
            columns: 8
          },
          upload: {
            serverPath: '/api/uploads/image',
            fileFieldName: 'image',
            headers: {
              'X-Requested-With': 'XMLHttpRequest',
              'withCredentials': true,
              'x-xsrf-token': "".concat(token)
            },
            urlPropertyName: 'url',
            error: function error(_error) {
              debugger;
            }
          }
        },
        autogrow: false,
        imageWidthModalEdit: true,
        tagsToRemove: ['script', 'link', 'iframe', 'input'],
        tagsToKeep: ['hr', 'img', 'embed'],
        svgPath: _images_icons_trumbowyg_icons_svg__WEBPACK_IMPORTED_MODULE_3___default.a
      },
      minConfigObj: {
        btnsDef: {
          image: btnsDefObj.image,
          textAlign: btnsDefObj.textAlign,
          textDecoration: btnsDefObj.textDecoration,
          lists: btnsDefObj.lists,
          extras: btnsDefObj.extras
        },
        btns: [['formatting', 'strong', 'em', 'textDecoration'], ['foreColor', 'backColor'], ['textAlign', 'lists'], ['image', 'extras'], ['fullscreen']],
        plugins: {
          resizimg: {
            minSize: 64,
            step: 16
          },
          table: {
            rows: 8,
            columns: 8
          },
          upload: {
            serverPath: '/api/uploads/image',
            fileFieldName: 'image',
            headers: {
              'X-Requested-With': 'XMLHttpRequest',
              'Authorization': "Bearer ".concat(token)
            },
            urlPropertyName: 'url',
            error: function error(_error2) {
              debugger;
            }
          }
        },
        autogrow: false,
        imageWidthModalEdit: true,
        tagsToRemove: ['script', 'link', 'iframe', 'input'],
        tagsToKeep: ['hr', 'img', 'embed'],
        svgPath: _images_icons_trumbowyg_icons_svg__WEBPACK_IMPORTED_MODULE_3___default.a
      },
      leastConfigObj: {
        btnsDef: {
          image: btnsDefObj.image,
          textAlign: btnsDefObj.textAlign,
          textDecoration: btnsDefObj.textDecoration,
          lists: btnsDefObj.lists,
          extras: btnsDefObj.extras
        },
        btns: [['formatting', 'strong', 'em', 'textDecoration'], ['foreColor', 'backColor'], ['textAlign'], ['extras']],
        plugins: {
          resizimg: {
            minSize: 64,
            step: 16
          }
        },
        autogrow: false,
        imageWidthModalEdit: true,
        tagsToRemove: ['script', 'link', 'iframe', 'input'],
        tagsToKeep: ['hr', 'img', 'embed'],
        svgPath: _images_icons_trumbowyg_icons_svg__WEBPACK_IMPORTED_MODULE_3___default.a
      }
    };
  },
  computed: {
    content: {
      get: function get() {
        return this.value;
      },
      set: function set(value) {
        value = value.replace(/<[^>]+/gmi, function (match) {
          return match.replace(/ on\w+="[^"]*"/gmi, '');
        });
        this.$emit('input', value);
        this.$emit('update:error', '');
      }
    },
    computedConfig: function computedConfig() {
      return this.config ? this.config === 'minimal' ? this.minConfigObj : this.config === 'least' ? this.leastConfigObj : this.config.hasOwnProperty('btnsDef') ? this.config : this.configObj : this.configObj;
    }
  },
  methods: {},
  mounted: function mounted() {
    this.configObj.autogrow = this.autogrow;
    this.minConfigObj.autogrow = this.autogrow;
    this.leastConfigObj.autogrow = this.autogrow;
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/core/components/EditorWrapper.vue?vue&type=style&index=0&lang=scss&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-2!./node_modules/sass-loader/dist/cjs.js??ref--9-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/core/components/EditorWrapper.vue?vue&type=style&index=0&lang=scss& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Muli:300,400,600,700,800,900);", ""]);

// module
exports.push([module.i, ".trumbowyg-box, .trumbowyg-editor {\n  margin-top: 0;\n}\n.trumbowyg-box {\n  border-radius: 0.25rem;\n  border: 0.0625rem solid #e9ecf1;\n  transition: box-shadow 0.15s ease;\n  box-shadow: 0 1px 3px rgba(50, 50, 93, 0.15), 0 1px 0 rgba(0, 0, 0, 0.02);\n}\n.trumbowyg-box .trumbowyg-button-pane {\n  background: #f5f6f7;\n  border-radius: 0.25rem 0.25rem 0 0;\n  border-bottom: 0.0625rem solid #e9ecf1;\n  z-index: auto;\n}\n.trumbowyg-box .trumbowyg-button-pane::after, .trumbowyg-box .trumbowyg-button-pane .trumbowyg-button-group::after {\n  background: #e9ecf1;\n}\n.editor-wrapper.height-xs .trumbowyg-box, .editor-wrapper.height-xs .trumbowyg-editor {\n  min-height: 100px;\n}\n.editor-wrapper.height-sm .trumbowyg-box, .editor-wrapper.height-sm .trumbowyg-editor {\n  min-height: 150px;\n}\n.editor-wrapper.height-md .trumbowyg-box, .editor-wrapper.height-md .trumbowyg-editor {\n  min-height: 300px;\n}\n.editor-wrapper.height-lg .trumbowyg-box, .editor-wrapper.height-lg .trumbowyg-editor {\n  min-height: 450px;\n}\n.editor-wrapper.height-xl .trumbowyg-box, .editor-wrapper.height-xl .trumbowyg-editor {\n  min-height: 600px;\n}\n.editor-wrapper.height-xxl .trumbowyg-box, .editor-wrapper.height-xxl .trumbowyg-editor {\n  min-height: 750px;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/core/components/EditorWrapper.vue?vue&type=style&index=0&lang=scss&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-2!./node_modules/sass-loader/dist/cjs.js??ref--9-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/core/components/EditorWrapper.vue?vue&type=style&index=0&lang=scss& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--9-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--9-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./EditorWrapper.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/core/components/EditorWrapper.vue?vue&type=style&index=0&lang=scss&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/core/components/EditorWrapper.vue?vue&type=template&id=3d6f336f&":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/core/components/EditorWrapper.vue?vue&type=template&id=3d6f336f& ***!
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
    "div",
    {
      class: [
        "editor-wrapper",
        { "not-empty": !!_vm.value },
        { required: _vm.required },
        _vm.height ? "height-" + _vm.height : ""
      ]
    },
    [
      _c("label", { staticClass: "input-group-material-label" }, [
        _vm._v(_vm._s(_vm.label) + " "),
        _vm.required
          ? _c("span", { staticClass: "required-asterix" }, [_vm._v("*")])
          : _vm._e()
      ]),
      _vm._v(" "),
      _vm._t("default", function() {
        return [
          _c("trumbowyg", {
            staticClass: "form-control",
            attrs: { config: _vm.computedConfig, name: "content" },
            model: {
              value: _vm.content,
              callback: function($$v) {
                _vm.content = $$v
              },
              expression: "content"
            }
          })
        ]
      }),
      _vm._v(" "),
      _vm._t("errorBlock", function() {
        return [
          _vm.error
            ? _c(
                "div",
                { staticClass: "text-danger invalid-feedback error-block" },
                [_vm._v("\n            " + _vm._s(_vm.error) + "\n        ")]
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

/***/ "./resources/images/icons/trumbowyg-icons.svg":
/*!****************************************************!*\
  !*** ./resources/images/icons/trumbowyg-icons.svg ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/trumbowyg-icons.svg?5b01ba8be11eb713b41763472b62eefe";

/***/ }),

/***/ "./resources/js/core/components/EditorWrapper.vue":
/*!********************************************************!*\
  !*** ./resources/js/core/components/EditorWrapper.vue ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _EditorWrapper_vue_vue_type_template_id_3d6f336f___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EditorWrapper.vue?vue&type=template&id=3d6f336f& */ "./resources/js/core/components/EditorWrapper.vue?vue&type=template&id=3d6f336f&");
/* harmony import */ var _EditorWrapper_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./EditorWrapper.vue?vue&type=script&lang=js& */ "./resources/js/core/components/EditorWrapper.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _EditorWrapper_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./EditorWrapper.vue?vue&type=style&index=0&lang=scss& */ "./resources/js/core/components/EditorWrapper.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _EditorWrapper_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _EditorWrapper_vue_vue_type_template_id_3d6f336f___WEBPACK_IMPORTED_MODULE_0__["render"],
  _EditorWrapper_vue_vue_type_template_id_3d6f336f___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/core/components/EditorWrapper.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/core/components/EditorWrapper.vue?vue&type=script&lang=js&":
/*!*********************************************************************************!*\
  !*** ./resources/js/core/components/EditorWrapper.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EditorWrapper_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./EditorWrapper.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/core/components/EditorWrapper.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EditorWrapper_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/core/components/EditorWrapper.vue?vue&type=style&index=0&lang=scss&":
/*!******************************************************************************************!*\
  !*** ./resources/js/core/components/EditorWrapper.vue?vue&type=style&index=0&lang=scss& ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_2_node_modules_sass_loader_dist_cjs_js_ref_9_3_node_modules_vue_loader_lib_index_js_vue_loader_options_EditorWrapper_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--9-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--9-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./EditorWrapper.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/core/components/EditorWrapper.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_2_node_modules_sass_loader_dist_cjs_js_ref_9_3_node_modules_vue_loader_lib_index_js_vue_loader_options_EditorWrapper_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_2_node_modules_sass_loader_dist_cjs_js_ref_9_3_node_modules_vue_loader_lib_index_js_vue_loader_options_EditorWrapper_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_2_node_modules_sass_loader_dist_cjs_js_ref_9_3_node_modules_vue_loader_lib_index_js_vue_loader_options_EditorWrapper_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_2_node_modules_sass_loader_dist_cjs_js_ref_9_3_node_modules_vue_loader_lib_index_js_vue_loader_options_EditorWrapper_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/core/components/EditorWrapper.vue?vue&type=template&id=3d6f336f&":
/*!***************************************************************************************!*\
  !*** ./resources/js/core/components/EditorWrapper.vue?vue&type=template&id=3d6f336f& ***!
  \***************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EditorWrapper_vue_vue_type_template_id_3d6f336f___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./EditorWrapper.vue?vue&type=template&id=3d6f336f& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/core/components/EditorWrapper.vue?vue&type=template&id=3d6f336f&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EditorWrapper_vue_vue_type_template_id_3d6f336f___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EditorWrapper_vue_vue_type_template_id_3d6f336f___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=utili~2de71fcc.js.map?id=29354347a130e058bd8b