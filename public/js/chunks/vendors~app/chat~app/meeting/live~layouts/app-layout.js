(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["vendors~app/chat~app/meeting/live~layouts/app-layout"],{

/***/ "./node_modules/vue-at/dist/vue-at.js":
/*!********************************************!*\
  !*** ./node_modules/vue-at/dist/vue-at.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports=function(e){var t={};function n(i){if(t[i])return t[i].exports;var o=t[i]={i:i,l:!1,exports:{}};return e[i].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.i=function(e){return e},n.d=function(e,t,i){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:i})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=5)}([function(e,t){e.exports=function(e,t,n,i){var o,r=e=e||{},a=typeof e.default;"object"!==a&&"function"!==a||(o=e,r=e.default);var s="function"==typeof r?r.options:r;if(t&&(s.render=t.render,s.staticRenderFns=t.staticRenderFns),n&&(s._scopeId=n),i){var l=s.computed||(s.computed={});Object.keys(i).forEach(function(e){var t=i[e];l[e]=function(){return t}})}return{esModule:o,exports:r,options:s}}},function(e,t,n){"use strict";function i(){var e=window.getSelection();if(e&&e.rangeCount>0)return e.getRangeAt(0)}t.f=function(e,t){if(e.scrollIntoViewIfNeeded)e.scrollIntoViewIfNeeded(!1);else{var n=e.offsetTop-t.scrollTop;(n<0||n>t.offsetHeight-e.offsetHeight)&&((t=t||e.parentElement).scrollTop=e.offsetTop)}},t.e=function(e){var t=window.getSelection();t&&(t.removeAllRanges(),t.addRange(e))},t.d=i,t.a=function(e,t){return t.map(function(t){return{at:t,index:e.lastIndexOf(t)}}).reduce(function(e,t){return e.index>t.index?e:t})},t.b=function(e,t){t=t||window;var n={top:e.offsetTop,left:e.offsetLeft},i=e.offsetParent;for(;null!=i&&i!=t;)n.left+=i.offsetLeft,n.top+=i.offsetTop,i=i.offsetParent;return n},t.g=function(e,t){do{if(t(e))return e}while(e=e&&e.parentNode)},t.c=function(){var e=i();if(e){var t=e.cloneRange();return t.collapse(!0),t.setStart(t.endContainer,0),t}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n(1),o=n(6),r=n.n(o),a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e};t.default={name:"At",mixins:[r.a],props:{value:{type:String,default:null},at:{type:String,default:null},ats:{type:Array,default:function(){return["@"]}},suffix:{type:String,default:" "},loop:{type:Boolean,default:!0},allowSpaces:{type:Boolean,default:!0},tabSelect:{type:Boolean,default:!1},avoidEmail:{type:Boolean,default:!0},showUnique:{type:Boolean,default:!0},hoverSelect:{type:Boolean,default:!0},members:{type:Array,default:function(){return[]}},nameKey:{type:String,default:""},filterMatch:{type:Function,default:function(e,t,n){return e.toLowerCase().indexOf(t.toLowerCase())>-1}},deleteMatch:{type:Function,default:function(e,t,n){return t===e+n}},scrollRef:{type:String,default:""}},data:function(){return{bindsValue:null!=this.value,customsEmbedded:!1,hasComposition:!1,atwho:null}},computed:{atItems:function(){return this.at?[this.at]:this.ats},currentItem:function(){return this.atwho?this.atwho.list[this.atwho.cur]:""},style:function(){if(this.atwho){var e=this.atwho,t=(e.list,e.cur,e.x),o=e.y,r=this.$refs.wrap;if(r){var a=n.i(i.b)(r),s=this.scrollRef?document.querySelector(this.scrollRef).scrollLeft:0,l=this.scrollRef?document.querySelector(this.scrollRef).scrollTop:0;return{left:t+s+window.pageXOffset-a.left+"px",top:o+l+window.pageYOffset-a.top+"px"}}}return null}},watch:{"atwho.cur":function(e){var t=this;null!=e&&this.$nextTick(function(){t.scrollToCur()})},members:function(){this.handleInput(!0)},value:function(e,t){this.bindsValue&&this.handleValueUpdate(e)}},mounted:function(){this.$scopedSlots.embeddedItem&&(this.customsEmbedded=!0),this.bindsValue&&this.handleValueUpdate(this.value)},methods:{itemName:function(e){var t=this.nameKey;return t?e[t]:e},isCur:function(e){return e===this.atwho.cur},handleValueUpdate:function(e){var t=this.$el.querySelector("[contenteditable]");e!==t.innerHTML&&(t.innerHTML=e,this.dispatchInput())},dispatchInput:function(){var e=this.$el.querySelector("[contenteditable]"),t=new Event("input",{bubbles:!0});e.dispatchEvent(t)},handleItemHover:function(e){this.hoverSelect&&this.selectByMouse(e)},handleItemClick:function(e){this.selectByMouse(e),this.insertItem()},handleDelete:function(e){var t=n.i(i.c)();if(t){if(this.customsEmbedded&&t.endOffset>=1){var o=t.endContainer.childNodes[t.endOffset]||t.endContainer.childNodes[t.endOffset-1];if(!o||o.nodeType===Node.TEXT_NODE&&!/^\s?$/.test(o.data))return;o.nodeType===Node.TEXT_NODE?o.previousSibling&&(o=o.previousSibling):o.previousElementSibling&&(o=o.previousElementSibling);var r=[].slice.call(o.childNodes);(r=[].reverse.call(r)).unshift(o);var a=void 0;if([].some.call(r,function(e){if(e.getAttribute&&null!=e.getAttribute("data-at-embedded"))return a=e,!0}),a){e.preventDefault(),e.stopPropagation();var s=n.i(i.d)();s&&(s.setStartBefore(a),s.deleteContents(),n.i(i.e)(s),this.handleInput())}return}var l=this.atItems,u=this.members,d=this.suffix,c=this.deleteMatch,f=this.itemName,h=t.toString(),p=n.i(i.a)(h,l),m=p.at,v=p.index;if(v>-1){var w=h.slice(v+m.length);if(u.some(function(e){var t=f(e);return c(t,w,d)})){e.preventDefault(),e.stopPropagation();var b=n.i(i.d)();b&&(b.setStart(b.endContainer,v),b.deleteContents(),n.i(i.e)(b),this.handleInput())}}}},handleKeyDown:function(e){var t=this;if(this.atwho){if(38===e.keyCode||40===e.keyCode)return void(e.metaKey||e.ctrlKey||(e.preventDefault(),e.stopPropagation(),this.selectByKeyboard(e)));if(13===e.keyCode||this.tabSelect&&9===e.keyCode)return this.insertItem(),e.preventDefault(),void e.stopPropagation();if(27===e.keyCode)return void this.closePanel()}(e.keyCode>=48&&e.keyCode<=90||8===e.keyCode)&&setTimeout(function(){t.handleInput()},50),8===e.keyCode&&this.handleDelete(e)},handleCompositionStart:function(){this.hasComposition=!0},handleCompositionEnd:function(){this.hasComposition=!1,this.handleInput()},handleInput:function(e){if(!this.hasComposition){var t=this.$el.querySelector("[contenteditable]");this.$emit("input",t.innerHTML);var o=n.i(i.c)();if(o){var r=this.atItems,a=this.avoidEmail,s=this.allowSpaces,l=this.showUnique,u=!0,d=o.toString(),c=n.i(i.a)(d,r),f=c.at,h=c.index;h<0&&(u=!1);var p=d[h-1],m=d.slice(h+f.length,d.length);if(a&&/^[a-z0-9]$/i.test(p)&&(u=!1),!s&&/\s/.test(m)&&(u=!1),/^\s/.test(m)&&(u=!1),u){var v=this.members,w=this.filterMatch,b=this.itemName;!e&&m&&this.$emit("at",m);var g=v.filter(function(e){var t=b(e);return w(t,m,f)});if(u=!1,g.length&&(u=!0,!l)){var x=g[0];m===b(x)&&(u=!1)}u?this.openPanel(g,o,h,f):this.closePanel()}else this.closePanel()}}},closePanel:function(){this.atwho&&(this.atwho=null)},openPanel:function(e,t,n,i){var o=this,r=function(){var r=t.cloneRange();r.setStart(r.endContainer,n+i.length);var a=r.getClientRects()[0];o.atwho={range:t,offset:n,list:e,x:a.left,y:a.top-4,cur:0}};this.atwho?r():setTimeout(r,10)},scrollToCur:function(){var e=this.$refs.cur[0],t=e.parentElement.parentElement;n.i(i.f)(e,t)},selectByMouse:function(e){var t=+n.i(i.g)(e.target,function(e){return e.getAttribute("data-index")}).getAttribute("data-index");this.atwho=a({},this.atwho,{cur:t})},selectByKeyboard:function(e){var t=38===e.keyCode?-1:1,n=this.atwho,i=n.cur,o=n.list,r=this.loop?(i+t+o.length)%o.length:Math.max(0,Math.min(i+t,o.length-1));this.atwho=a({},this.atwho,{cur:r})},insertText:function(e,t){t.deleteContents();var o=t.endContainer;if(o.nodeType===Node.TEXT_NODE){var r=t.endOffset;o.data=o.data.slice(0,r)+e+o.data.slice(r),t.setEnd(o,r+e.length)}else{var a=document.createTextNode(e);t.insertNode(a),t.setEndAfter(a)}t.collapse(!1),n.i(i.e)(t),this.dispatchInput()},insertHtml:function(e,t){t.deleteContents();var o=t.endContainer,r=document.createElement("span");if(r.appendChild(document.createTextNode(" ")),r.appendChild(this.htmlToElement(e)),r.appendChild(document.createTextNode(" ")),r.setAttribute("data-at-embedded",""),r.setAttribute("contenteditable",!1),o.nodeType===Node.TEXT_NODE){var a=t.endOffset,s=o.splitText(a);o.parentNode.insertBefore(r,s),t.setEndBefore(s)}else{var l=document.createTextNode(suffix);t.insertNode(r),t.setEndAfter(r),t.insertNode(l),t.setEndAfter(l)}t.collapse(!1),n.i(i.e)(t)},insertItem:function(){var e=this.atwho,t=e.range,o=(e.offset,e.list),r=e.cur,a=this.suffix,s=this.atItems,l=this.itemName,u=this.customsEmbedded,d=t.cloneRange(),c=t.toString(),f=n.i(i.a)(c,s),h=f.at,p=f.index,m=u?p:p+h.length;d.setStart(d.endContainer,m),n.i(i.e)(d),n.i(i.e)(d);var v=o[r];if(u){var w=this.$refs.embeddedItem.firstChild.innerHTML;this.insertHtml(w,d)}else{var b=l(v)+a;this.insertText(b,d)}this.$emit("insert",v),this.handleInput()},htmlToElement:function(e){var t=document.createElement("template");return e=e.trim(),t.innerHTML=e,t.content.firstChild}}}},function(e,t,n){(e.exports=n(4)()).push([e.i,".atwho-view{color:#000;border-radius:3px;box-shadow:0 0 5px rgba(0,0,0,.1);min-width:120px;z-index:11110!important}.atwho-ul{list-style:none}.atwho-li{display:block}.atwho-view{border-radius:6px;box-shadow:0 0 10px 0 hsla(211,9%,44%,.5)}.atwho-ul{max-height:135px;padding:0;margin:0}.atwho-li{box-sizing:border-box;height:27px;padding:0 12px;white-space:nowrap;display:flex;align-items:center}.atwho-li span{overflow:hidden;text-overflow:ellipsis}.atwho-cur{background:#5bb8ff;color:#fff}.atwho-wrap{position:relative}.atwho-panel{position:absolute}.atwho-inner{position:relative}.atwho-view{position:absolute;bottom:0;left:-.8em;cursor:default;background-color:hsla(0,0%,100%,.94);min-width:140px;max-width:180px;max-height:200px;overflow-y:auto}.atwho-view::-webkit-scrollbar{width:11px;height:11px}.atwho-view::-webkit-scrollbar-track{background-color:#f5f5f5}.atwho-view::-webkit-scrollbar-thumb{min-height:36px;border:2px solid transparent;border-top:3px solid transparent;border-bottom:3px solid transparent;background-clip:padding-box;border-radius:7px;background-color:#c4c4c4}",""])},function(e,t){e.exports=function(){var e=[];return e.toString=function(){for(var e=[],t=0;t<this.length;t++){var n=this[t];n[2]?e.push("@media "+n[2]+"{"+n[1]+"}"):e.push(n[1])}return e.join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var i={},o=0;o<this.length;o++){var r=this[o][0];"number"==typeof r&&(i[r]=!0)}for(o=0;o<t.length;o++){var a=t[o];"number"==typeof a[0]&&i[a[0]]||(n&&!a[2]?a[2]=n:n&&(a[2]="("+a[2]+") and ("+n+")"),e.push(a))}},e}},function(e,t,n){var i=n(0)(n(2),null,null,null);e.exports=i.exports},function(e,t,n){n(9);var i=n(0)(null,n(7),null,null);e.exports=i.exports},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{ref:"wrap",staticClass:"atwho-wrap",on:{compositionstart:e.handleCompositionStart,compositionend:e.handleCompositionEnd,input:function(t){e.handleInput()},"!keydown":function(t){return e.handleKeyDown(t)}}},[e.atwho?n("div",{staticClass:"atwho-panel",style:e.style},[n("div",{staticClass:"atwho-inner"},[n("div",{staticClass:"atwho-view"},[n("ul",{staticClass:"atwho-ul"},e._l(e.atwho.list,function(t,i){return n("li",{key:i,ref:e.isCur(i)&&"cur",refInFor:!0,staticClass:"atwho-li",class:e.isCur(i)&&"atwho-cur",attrs:{"data-index":i},on:{mouseenter:e.handleItemHover,click:e.handleItemClick}},[e._t("item",[n("span",{domProps:{textContent:e._s(e.itemName(t))}})],{item:t})],2)}))])])]):e._e(),e._v(" "),n("span",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],ref:"embeddedItem"},[e._t("embeddedItem",null,{current:e.currentItem})],2),e._v(" "),e._t("default")],2)},staticRenderFns:[]}},function(e,t){var n={},i=function(e){var t;return function(){return void 0===t&&(t=e.apply(this,arguments)),t}},o=i(function(){return/msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase())}),r=i(function(){return document.head||document.getElementsByTagName("head")[0]}),a=null,s=0,l=[];function u(e,t){for(var i=0;i<e.length;i++){var o=e[i],r=n[o.id];if(r){r.refs++;for(var a=0;a<r.parts.length;a++)r.parts[a](o.parts[a]);for(;a<o.parts.length;a++)r.parts.push(f(o.parts[a],t))}else{var s=[];for(a=0;a<o.parts.length;a++)s.push(f(o.parts[a],t));n[o.id]={id:o.id,refs:1,parts:s}}}}function d(e){for(var t=[],n={},i=0;i<e.length;i++){var o=e[i],r=o[0],a={css:o[1],media:o[2],sourceMap:o[3]};n[r]?n[r].parts.push(a):t.push(n[r]={id:r,parts:[a]})}return t}function c(e){var t=document.createElement("style");return t.type="text/css",function(e,t){var n=r(),i=l[l.length-1];if("top"===e.insertAt)i?i.nextSibling?n.insertBefore(t,i.nextSibling):n.appendChild(t):n.insertBefore(t,n.firstChild),l.push(t);else{if("bottom"!==e.insertAt)throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");n.appendChild(t)}}(e,t),t}function f(e,t){var n,i,o;if(t.singleton){var r=s++;n=a||(a=c(t)),i=m.bind(null,n,r,!1),o=m.bind(null,n,r,!0)}else n=c(t),i=function(e,t){var n=t.css,i=t.media,o=t.sourceMap;i&&e.setAttribute("media",i);o&&(n+="\n/*# sourceURL="+o.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */");if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}.bind(null,n),o=function(){!function(e){e.parentNode.removeChild(e);var t=l.indexOf(e);t>=0&&l.splice(t,1)}(n)};return i(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;i(e=t)}else o()}}e.exports=function(e,t){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");void 0===(t=t||{}).singleton&&(t.singleton=o()),void 0===t.insertAt&&(t.insertAt="bottom");var i=d(e);return u(i,t),function(e){for(var o=[],r=0;r<i.length;r++){var a=i[r];(s=n[a.id]).refs--,o.push(s)}e&&u(d(e),t);for(r=0;r<o.length;r++){var s;if(0===(s=o[r]).refs){for(var l=0;l<s.parts.length;l++)s.parts[l]();delete n[s.id]}}}};var h,p=(h=[],function(e,t){return h[e]=t,h.filter(Boolean).join("\n")});function m(e,t,n,i){var o=n?"":i.css;if(e.styleSheet)e.styleSheet.cssText=p(t,o);else{var r=document.createTextNode(o),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(r,a[t]):e.appendChild(r)}}},function(e,t,n){var i=n(3);"string"==typeof i&&(i=[[e.i,i,""]]);n(8)(i,{});i.locals&&(e.exports=i.locals)}]);
//# sourceMappingURL=vue-at.js.map

/***/ }),

/***/ "./node_modules/vue-emoji-picker/dist-module/main.js":
/*!***********************************************************!*\
  !*** ./node_modules/vue-emoji-picker/dist-module/main.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

!function(e,o){ true?module.exports=o():undefined}(this,function(){return function(e){function o(a){if(t[a])return t[a].exports;var n=t[a]={i:a,l:!1,exports:{}};return e[a].call(n.exports,n,n.exports,o),n.l=!0,n.exports}var t={};return o.m=e,o.c=t,o.i=function(e){return e},o.d=function(e,t,a){o.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:a})},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,o){return Object.prototype.hasOwnProperty.call(e,o)},o.p="/dist-module/",o(o.s=3)}([function(e,o,t){var a=t(4)(t(1),t(5),null,null,null);e.exports=a.exports},function(e,o,t){"use strict";Object.defineProperty(o,"__esModule",{value:!0});var a=t(2),n=function(e){return e&&e.__esModule?e:{default:e}}(a),i=function(e){return e.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")};o.default={props:{search:{type:String,required:!1,default:""},emojiTable:{type:Object,required:!1,default:function(){return n.default}}},data:function(){return{display:{x:0,y:0,visible:!1}}},computed:{emojis:function(){if(this.search){var e={};for(var o in this.emojiTable){e[o]={};for(var t in this.emojiTable[o])new RegExp(".*"+i(this.search)+".*").test(t)&&(e[o][t]=this.emojiTable[o][t]);0===Object.keys(e[o]).length&&delete e[o]}return e}return this.emojiTable}},methods:{insert:function(e){this.$emit("emoji",e)},toggle:function(e){this.display.visible=!this.display.visible,this.display.x=e.clientX,this.display.y=e.clientY},hide:function(){this.display.visible=!1},escape:function(e){!0===this.display.visible&&27===e.keyCode&&(this.display.visible=!1)}},directives:{"click-outside":{bind:function(e,o,t){if("function"==typeof o.value){var a=o.modifiers.bubble,n=function(t){(a||!e.contains(t.target)&&e!==t.target)&&o.value(t)};e.__vueClickOutside__=n,document.addEventListener("click",n)}},unbind:function(e,o){document.removeEventListener("click",e.__vueClickOutside__),e.__vueClickOutside__=null}}},mounted:function(){document.addEventListener("keyup",this.escape)},destroyed:function(){document.removeEventListener("keyup",this.escape)}}},function(e,o,t){"use strict";Object.defineProperty(o,"__esModule",{value:!0}),o.default={"Frequently used":{thumbs_up:"👍","-1":"👎",sob:"😭",confused:"😕",neutral_face:"😐",blush:"😊",heart_eyes:"😍"},People:{smile:"😄",smiley:"😃",grinning:"😀",blush:"😊",wink:"😉",heart_eyes:"😍",kissing_heart:"😘",kissing_closed_eyes:"😚",kissing:"😗",kissing_smiling_eyes:"😙",stuck_out_tongue_winking_eye:"😜",stuck_out_tongue_closed_eyes:"😝",stuck_out_tongue:"😛",flushed:"😳",grin:"😁",pensive:"😔",relieved:"😌",unamused:"😒",disappointed:"😞",persevere:"😣",cry:"😢",joy:"😂",sob:"😭",sleepy:"😪",disappointed_relieved:"😥",cold_sweat:"😰",sweat_smile:"😅",sweat:"😓",weary:"😩",tired_face:"😫",fearful:"😨",scream:"😱",angry:"😠",rage:"😡",triumph:"😤",confounded:"😖",laughing:"😆",yum:"😋",mask:"😷",sunglasses:"😎",sleeping:"😴",dizzy_face:"😵",astonished:"😲",worried:"😟",frowning:"😦",anguished:"😧",imp:"👿",open_mouth:"😮",grimacing:"😬",neutral_face:"😐",confused:"😕",hushed:"😯",smirk:"😏",expressionless:"😑",man_with_gua_pi_mao:"👲",man_with_turban:"👳",cop:"👮",construction_worker:"👷",guardsman:"💂",baby:"👶",boy:"👦",girl:"👧",man:"👨",woman:"👩",older_man:"👴",older_woman:"👵",person_with_blond_hair:"👱",angel:"👼",princess:"👸",smiley_cat:"😺",smile_cat:"😸",heart_eyes_cat:"😻",kissing_cat:"😽",smirk_cat:"😼",scream_cat:"🙀",crying_cat_face:"😿",joy_cat:"😹",pouting_cat:"😾",japanese_ogre:"👹",japanese_goblin:"👺",see_no_evil:"🙈",hear_no_evil:"🙉",speak_no_evil:"🙊",skull:"💀",alien:"👽",hankey:"💩",fire:"🔥",sparkles:"✨",star2:"🌟",dizzy:"💫",boom:"💥",anger:"💢",sweat_drops:"💦",droplet:"💧",zzz:"💤",dash:"💨",ear:"👂",eyes:"👀",nose:"👃",tongue:"👅",lips:"👄",thumbs_up:"👍","-1":"👎",ok_hand:"👌",facepunch:"👊",fist:"✊",wave:"👋",hand:"✋",open_hands:"👐",point_up_2:"👆",point_down:"👇",point_right:"👉",point_left:"👈",raised_hands:"🙌",pray:"🙏",clap:"👏",muscle:"💪",walking:"🚶",runner:"🏃",dancer:"💃",couple:"👫",family:"👪",couplekiss:"💏",couple_with_heart:"💑",dancers:"👯",ok_woman:"🙆",no_good:"🙅",information_desk_person:"💁",raising_hand:"🙋",massage:"💆",haircut:"💇",nail_care:"💅",bride_with_veil:"👰",person_with_pouting_face:"🙎",person_frowning:"🙍",bow:"🙇",tophat:"🎩",crown:"👑",womans_hat:"👒",athletic_shoe:"👟",mans_shoe:"👞",sandal:"👡",high_heel:"👠",boot:"👢",shirt:"👕",necktie:"👔",womans_clothes:"👚",dress:"👗",running_shirt_with_sash:"🎽",jeans:"👖",kimono:"👘",bikini:"👙",briefcase:"💼",handbag:"👜",pouch:"👝",purse:"👛",eyeglasses:"👓",ribbon:"🎀",closed_umbrella:"🌂",lipstick:"💄",yellow_heart:"💛",blue_heart:"💙",purple_heart:"💜",green_heart:"💚",broken_heart:"💔",heartpulse:"💗",heartbeat:"💓",two_hearts:"💕",sparkling_heart:"💖",revolving_hearts:"💞",cupid:"💘",love_letter:"💌",kiss:"💋",ring:"💍",gem:"💎",bust_in_silhouette:"👤",speech_balloon:"💬",footprints:"👣"},Nature:{dog:"🐶",wolf:"🐺",cat:"🐱",mouse:"🐭",hamster:"🐹",rabbit:"🐰",frog:"🐸",tiger:"🐯",koala:"🐨",bear:"🐻",pig:"🐷",pig_nose:"🐽",cow:"🐮",boar:"🐗",monkey_face:"🐵",monkey:"🐒",horse:"🐴",sheep:"🐑",elephant:"🐘",panda_face:"🐼",penguin:"🐧",bird:"🐦",baby_chick:"🐤",hatched_chick:"🐥",hatching_chick:"🐣",chicken:"🐔",snake:"🐍",turtle:"🐢",bug:"🐛",bee:"🐝",ant:"🐜",beetle:"🐞",snail:"🐌",octopus:"🐙",shell:"🐚",tropical_fish:"🐠",fish:"🐟",dolphin:"🐬",whale:"🐳",racehorse:"🐎",dragon_face:"🐲",blowfish:"🐡",camel:"🐫",poodle:"🐩",feet:"🐾",bouquet:"💐",cherry_blossom:"🌸",tulip:"🌷",four_leaf_clover:"🍀",rose:"🌹",sunflower:"🌻",hibiscus:"🌺",maple_leaf:"🍁",leaves:"🍃",fallen_leaf:"🍂",herb:"🌿",ear_of_rice:"🌾",mushroom:"🍄",cactus:"🌵",palm_tree:"🌴",chestnut:"🌰",seedling:"🌱",blossom:"🌼",new_moon:"🌑",first_quarter_moon:"🌓",moon:"🌔",full_moon:"🌕",first_quarter_moon_with_face:"🌛",crescent_moon:"🌙",earth_asia:"🌏",volcano:"🌋",milky_way:"🌌",stars:"🌠",partly_sunny:"⛅",snowman:"⛄",cyclone:"🌀",foggy:"🌁",rainbow:"🌈",ocean:"🌊"},Objects:{bamboo:"🎍",gift_heart:"💝",dolls:"🎎",school_satchel:"🎒",mortar_board:"🎓",flags:"🎏",fireworks:"🎆",sparkler:"🎇",wind_chime:"🎐",rice_scene:"🎑",jack_o_lantern:"🎃",ghost:"👻",santa:"🎅",christmas_tree:"🎄",gift:"🎁",tanabata_tree:"🎋",tada:"🎉",confetti_ball:"🎊",balloon:"🎈",crossed_flags:"🎌",crystal_ball:"🔮",movie_camera:"🎥",camera:"📷",video_camera:"📹",vhs:"📼",cd:"💿",dvd:"📀",minidisc:"💽",floppy_disk:"💾",computer:"💻",iphone:"📱",telephone_receiver:"📞",pager:"📟",fax:"📠",satellite:"📡",tv:"📺",radio:"📻",loud_sound:"🔊",bell:"🔔",loudspeaker:"📢",mega:"📣",hourglass_flowing_sand:"⏳",hourglass:"⌛",alarm_clock:"⏰",watch:"⌚",unlock:"🔓",lock:"🔒",lock_with_ink_pen:"🔏",closed_lock_with_key:"🔐",key:"🔑",mag_right:"🔎",bulb:"💡",flashlight:"🔦",electric_plug:"🔌",battery:"🔋",mag:"🔍",bath:"🛀",toilet:"🚽",wrench:"🔧",nut_and_bolt:"🔩",hammer:"🔨",door:"🚪",smoking:"🚬",bomb:"💣",gun:"🔫",hocho:"🔪",pill:"💊",syringe:"💉",moneybag:"💰",yen:"💴",dollar:"💵",credit_card:"💳",money_with_wings:"💸",calling:"📲","e-mail":"📧",inbox_tray:"📥",outbox_tray:"📤",envelope_with_arrow:"📩",incoming_envelope:"📨",mailbox:"📫",mailbox_closed:"📪",postbox:"📮",package:"📦",memo:"📝",page_facing_up:"📄",page_with_curl:"📃",bookmark_tabs:"📑",bar_chart:"📊",chart_with_upwards_trend:"📈",chart_with_downwards_trend:"📉",scroll:"📜",clipboard:"📋",date:"📅",calendar:"📆",card_index:"📇",file_folder:"📁",open_file_folder:"📂",pushpin:"📌",paperclip:"📎",straight_ruler:"📏",triangular_ruler:"📐",closed_book:"📕",green_book:"📗",blue_book:"📘",orange_book:"📙",notebook:"📓",notebook_with_decorative_cover:"📔",ledger:"📒",books:"📚",book:"📖",bookmark:"🔖",name_badge:"📛",newspaper:"📰",art:"🎨",clapper:"🎬",microphone:"🎤",headphones:"🎧",musical_score:"🎼",musical_note:"🎵",notes:"🎶",musical_keyboard:"🎹",violin:"🎻",trumpet:"🎺",saxophone:"🎷",guitar:"🎸",space_invader:"👾",video_game:"🎮",black_joker:"🃏",flower_playing_cards:"🎴",mahjong:"🀄",game_die:"🎲",dart:"🎯",football:"🏈",basketball:"🏀",soccer:"⚽",baseball:"⚾",tennis:"🎾","8ball":"🎱",bowling:"🎳",golf:"⛳",checkered_flag:"🏁",trophy:"🏆",ski:"🎿",snowboarder:"🏂",swimmer:"🏊",surfer:"🏄",fishing_pole_and_fish:"🎣",tea:"🍵",sake:"🍶",beer:"🍺",beers:"🍻",cocktail:"🍸",tropical_drink:"🍹",wine_glass:"🍷",fork_and_knife:"🍴",pizza:"🍕",hamburger:"🍔",fries:"🍟",poultry_leg:"🍗",meat_on_bone:"🍖",spaghetti:"🍝",curry:"🍛",fried_shrimp:"🍤",bento:"🍱",sushi:"🍣",fish_cake:"🍥",rice_ball:"🍙",rice_cracker:"🍘",rice:"🍚",ramen:"🍜",stew:"🍲",oden:"🍢",dango:"🍡",egg:"🍳",bread:"🍞",doughnut:"🍩",custard:"🍮",icecream:"🍦",ice_cream:"🍨",shaved_ice:"🍧",birthday:"🎂",cake:"🍰",cookie:"🍪",chocolate_bar:"🍫",candy:"🍬",lollipop:"🍭",honey_pot:"🍯",apple:"🍎",green_apple:"🍏",tangerine:"🍊",cherries:"🍒",grapes:"🍇",watermelon:"🍉",strawberry:"🍓",peach:"🍑",melon:"🍈",banana:"🍌",pineapple:"🍍",sweet_potato:"🍠",eggplant:"🍆",tomato:"🍅",corn:"🌽"},Places:{house:"🏠",house_with_garden:"🏡",school:"🏫",office:"🏢",post_office:"🏣",hospital:"🏥",bank:"🏦",convenience_store:"🏪",love_hotel:"🏩",hotel:"🏨",wedding:"💒",church:"⛪",department_store:"🏬",city_sunrise:"🌇",city_sunset:"🌆",japanese_castle:"🏯",european_castle:"🏰",tent:"⛺",factory:"🏭",tokyo_tower:"🗼",japan:"🗾",mount_fuji:"🗻",sunrise_over_mountains:"🌄",sunrise:"🌅",night_with_stars:"🌃",statue_of_liberty:"🗽",bridge_at_night:"🌉",carousel_horse:"🎠",ferris_wheel:"🎡",fountain:"⛲",roller_coaster:"🎢",ship:"🚢",boat:"⛵",speedboat:"🚤",rocket:"🚀",seat:"💺",station:"🚉",bullettrain_side:"🚄",bullettrain_front:"🚅",metro:"🚇",railway_car:"🚃",bus:"🚌",blue_car:"🚙",car:"🚗",taxi:"🚕",truck:"🚚",rotating_light:"🚨",police_car:"🚓",fire_engine:"🚒",ambulance:"🚑",bike:"🚲",barber:"💈",busstop:"🚏",ticket:"🎫",traffic_light:"🚥",construction:"🚧",beginner:"🔰",fuelpump:"⛽",izakaya_lantern:"🏮",slot_machine:"🎰",moyai:"🗿",circus_tent:"🎪",performing_arts:"🎭",round_pushpin:"📍",triangular_flag_on_post:"🚩"},Symbols:{keycap_ten:"🔟",1234:"🔢",symbols:"🔣",capital_abcd:"🔠",abcd:"🔡",abc:"🔤",arrow_up_small:"🔼",arrow_down_small:"🔽",rewind:"⏪",fast_forward:"⏩",arrow_double_up:"⏫",arrow_double_down:"⏬",ok:"🆗",new:"🆕",up:"🆙",cool:"🆒",free:"🆓",ng:"🆖",signal_strength:"📶",cinema:"🎦",koko:"🈁",u6307:"🈯",u7a7a:"🈳",u6e80:"🈵",u5408:"🈴",u7981:"🈲",ideograph_advantage:"🉐",u5272:"🈹",u55b6:"🈺",u6709:"🈶",u7121:"🈚",restroom:"🚻",mens:"🚹",womens:"🚺",baby_symbol:"🚼",wc:"🚾",no_smoking:"🚭",u7533:"🈸",accept:"🉑",cl:"🆑",sos:"🆘",id:"🆔",no_entry_sign:"🚫",underage:"🔞",no_entry:"⛔",negative_squared_cross_mark:"❎",white_check_mark:"✅",heart_decoration:"💟",vs:"🆚",vibration_mode:"📳",mobile_phone_off:"📴",ab:"🆎",diamond_shape_with_a_dot_inside:"💠",ophiuchus:"⛎",six_pointed_star:"🔯",atm:"🏧",chart:"💹",heavy_dollar_sign:"💲",currency_exchange:"💱",x:"❌",exclamation:"❗",question:"❓",grey_exclamation:"❕",grey_question:"❔",o:"⭕",top:"🔝",end:"🔚",back:"🔙",on:"🔛",soon:"🔜",arrows_clockwise:"🔃",clock12:"🕛",clock1:"🕐",clock2:"🕑",clock3:"🕒",clock4:"🕓",clock5:"🕔",clock6:"🕕",clock7:"🕖",clock8:"🕗",clock9:"🕘",clock10:"🕙",clock11:"🕚",heavy_plus_sign:"➕",heavy_minus_sign:"➖",heavy_division_sign:"➗",white_flower:"💮",100:"💯",radio_button:"🔘",link:"🔗",curly_loop:"➰",trident:"🔱",small_red_triangle:"🔺",black_square_button:"🔲",white_square_button:"🔳",red_circle:"🔴",large_blue_circle:"🔵",small_red_triangle_down:"🔻",white_large_square:"⬜",black_large_square:"⬛",large_orange_diamond:"🔶",large_blue_diamond:"🔷",small_orange_diamond:"🔸",small_blue_diamond:"🔹"}}},function(e,o,t){"use strict";Object.defineProperty(o,"__esModule",{value:!0}),o.EmojiPickerPlugin=o.EmojiPicker=void 0;var a=t(0),n=function(e){return e&&e.__esModule?e:{default:e}}(a),i={install:function(e){arguments.length>1&&void 0!==arguments[1]&&arguments[1];e.component("emoji-picker",n.default)}};"undefined"!=typeof window&&(window.EmojiPicker=i),o.EmojiPicker=n.default,o.EmojiPickerPlugin=i,o.default=n.default},function(e,o){e.exports=function(e,o,t,a,n){var i,r=e=e||{},s=typeof e.default;"object"!==s&&"function"!==s||(i=e,r=e.default);var l="function"==typeof r?r.options:r;o&&(l.render=o.render,l.staticRenderFns=o.staticRenderFns),a&&(l._scopeId=a);var _;if(n?(_=function(e){e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,e||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),t&&t.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(n)},l._ssrRegister=_):t&&(_=t),_){var c=l.functional,u=c?l.render:l.beforeCreate;c?l.render=function(e,o){return _.call(o),u(e,o)}:l.beforeCreate=u?[].concat(u,_):[_]}return{esModule:i,exports:r,options:l}}},function(e,o){e.exports={render:function(){var e=this,o=e.$createElement,t=e._self._c||o;return t("div",[e._t("emoji-invoker",null,{events:{click:function(o){return e.toggle(o)}}}),e._v(" "),e.display.visible?t("div",{directives:[{name:"click-outside",rawName:"v-click-outside",value:e.hide,expression:"hide"}]},[e._t("emoji-picker",null,{emojis:e.emojis,insert:e.insert,display:e.display})],2):e._e()],2)},staticRenderFns:[]}}])});
//# sourceMappingURL=main.js.map

/***/ })

}]);
//# sourceMappingURL=app-layout.js.map?id=6f5c48c38e0e0940f982