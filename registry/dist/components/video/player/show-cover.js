!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports["video/player/show-cover"]=t():e["video/player/show-cover"]=t()}(self,(function(){return function(){var e,t,o={308:function(e,t,o){var n=o(645)((function(e){return e[1]}));n.push([e.id,'.bpx-player-video-wrap::after,\n.bilibili-player-video::after {\n  position: absolute;\n  content: "";\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  display: none;\n  background: black var(--cover-url) center no-repeat;\n  background-size: contain;\n  pointer-events: none;\n  z-index: 10;\n}\n\n.bpx-player-container.bpx-state-paused .bpx-player-video-wrap::after {\n  display: block;\n}\n\n.bilibili-player-area.video-control-show.video-state-pause .bilibili-player-video::after {\n  display: block;\n}',""]),e.exports=n},645:function(e){"use strict";
// eslint-disable-next-line func-names
e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var o=e(t);return t[2]?"@media ".concat(t[2]," {").concat(o,"}"):o})).join("")},
// eslint-disable-next-line func-names
t.i=function(e,o,n){"string"==typeof e&&(
// eslint-disable-next-line no-param-reassign
e=[[null,e,""]]);var r={};if(n)for(var i=0;i<this.length;i++){
// eslint-disable-next-line prefer-destructuring
var c=this[i][0];null!=c&&(r[c]=!0)}for(var a=0;a<e.length;a++){var u=[].concat(e[a]);n&&r[u[0]]||(o&&(u[2]?u[2]="".concat(o," and ").concat(u[2]):u[2]=o),t.push(u))}},t}},990:function(e,t,o){var n=o(308);n&&n.__esModule&&(n=n.default),e.exports="string"==typeof n?n:n.toString()},705:function(e){"use strict";e.exports=coreApis.componentApis.video.videoInfo}},n={};function r(e){var t=n[e];if(void 0!==t)return t.exports;var i=n[e]={id:e,exports:{}};return o[e](i,i.exports,r),i.exports}t=Object.getPrototypeOf?function(e){return Object.getPrototypeOf(e)}:function(e){return e.__proto__},r.t=function(o,n){if(1&n&&(o=this(o)),8&n)return o;if("object"==typeof o&&o){if(4&n&&o.__esModule)return o;if(16&n&&"function"==typeof o.then)return o}var i=Object.create(null);r.r(i);var c={};e=e||[null,t({}),t([]),t(t)];for(var a=2&n&&o;"object"==typeof a&&!~e.indexOf(a);a=t(a))Object.getOwnPropertyNames(a).forEach((function(e){c[e]=function(){return o[e]}}));return c.default=function(){return o},r.d(i,c),i},r.d=function(e,t){for(var o in t)r.o(t,o)&&!r.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var i={};return function(){"use strict";r.d(i,{component:function(){return o}});var e=coreApis.observer,t=coreApis.utils;const o={name:"showCoverBeforePlay",displayName:"播放前显示封面",urlInclude:coreApis.utils.urls.playerUrls,entry:async()=>{let o;// eslint-disable-next-line prefer-arrow-callback
(0,t.createHook)(await(0,t.isBwpVideo)()?BwpElement.prototype:HTMLVideoElement.prototype,"play",(function(){return document.body.style.removeProperty("--cover-url"),!0}));(0,e.videoChange)((async({aid:e})=>{if(!e)return void console.warn("[播放前显示封面] 未找到av号");if(e===o)return;o=e;const{VideoInfo:t}=await Promise.resolve().then(r.t.bind(r,705,23)),n=new t(e);await n.fetchInfo(),document.body.style.setProperty("--cover-url",`url('${n.coverUrl}')`)}))},instantStyles:[{name:"showCoverBeforePlay",style:()=>Promise.resolve().then(r.t.bind(r,990,23))}],description:{"zh-CN":"在视频开始播放前, 在播放器中显示封面."},tags:[componentsTags.video],commitHash:"e5257ca7bea9d2c2c0a94c38ec82384adc1c9147",coreVersion:"2.1.7"}}(),i=i.component}()}));