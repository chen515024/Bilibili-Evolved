!function(t,n){"object"==typeof exports&&"object"==typeof module?module.exports=n():"function"==typeof define&&define.amd?define([],n):"object"==typeof exports?exports["style/scrollbar"]=n():t["style/scrollbar"]=n()}(self,(function(){return function(){var t,n,e={518:function(t,n,e){var r=e(645)((function(t){return t[1]}));r.push([t.id,"html ::-webkit-scrollbar {\n  width: 5px !important;\n  height: 5px !important;\n}\nhtml ::-webkit-scrollbar-corner,\nhtml ::-webkit-scrollbar-track {\n  background: transparent !important;\n}\nhtml ::-webkit-resizer,\nhtml ::-webkit-scrollbar-thumb {\n  background: #aaa;\n  border-radius: 3px;\n}\nhtml ::-webkit-scrollbar-thumb:hover {\n  background: #888;\n}\nhtml,\nhtml * {\n  scrollbar-color: #aaa transparent;\n  scrollbar-width: thin !important;\n}",""]),t.exports=r},645:function(t){"use strict";
// eslint-disable-next-line func-names
t.exports=function(t){var n=[];return n.toString=function(){return this.map((function(n){var e=t(n);return n[2]?"@media ".concat(n[2]," {").concat(e,"}"):e})).join("")},
// eslint-disable-next-line func-names
n.i=function(t,e,r){"string"==typeof t&&(
// eslint-disable-next-line no-param-reassign
t=[[null,t,""]]);var o={};if(r)for(var c=0;c<this.length;c++){
// eslint-disable-next-line prefer-destructuring
var a=this[c][0];null!=a&&(o[a]=!0)}for(var i=0;i<t.length;i++){var u=[].concat(t[i]);r&&o[u[0]]||(e&&(u[2]?u[2]="".concat(e," and ").concat(u[2]):u[2]=e),n.push(u))}},n}},110:function(t,n,e){var r=e(518);r&&r.__esModule&&(r=r.default),t.exports="string"==typeof r?r:r.toString()}},r={};function o(t){var n=r[t];if(void 0!==n)return n.exports;var c=r[t]={id:t,exports:{}};return e[t](c,c.exports,o),c.exports}n=Object.getPrototypeOf?function(t){return Object.getPrototypeOf(t)}:function(t){return t.__proto__},o.t=function(e,r){if(1&r&&(e=this(e)),8&r)return e;if("object"==typeof e&&e){if(4&r&&e.__esModule)return e;if(16&r&&"function"==typeof e.then)return e}var c=Object.create(null);o.r(c);var a={};t=t||[null,n({}),n([]),n(n)];for(var i=2&r&&e;"object"==typeof i&&!~t.indexOf(i);i=n(i))Object.getOwnPropertyNames(i).forEach((function(t){a[t]=function(){return e[t]}}));return a.default=function(){return e},o.d(c,a),c},o.d=function(t,n){for(var e in n)o.o(n,e)&&!o.o(t,e)&&Object.defineProperty(t,e,{enumerable:!0,get:n[e]})},o.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},o.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})};var c={};return function(){"use strict";o.d(c,{component:function(){return t}});const t={name:"elegantScrollbar",entry:none,displayName:"使用细滚动条",description:"使用浏览器的滚动条风格替代系统的滚动条, 不过 macOS 系统滚动条比浏览器做得好一些, 因此不建议 macOS 使用此功能.",tags:[componentsTags.style,componentsTags.general],instantStyles:[{name:"elegant-scrollbar",style:()=>Promise.resolve().then(o.t.bind(o,110,23))}],commitHash:"65f5f15206bd8f2c672de8c52fc0400af7c361c4",coreVersion:"2.1.7"}}(),c=c.component}()}));