!function(e,n){"object"==typeof exports&&"object"==typeof module?module.exports=n():"function"==typeof define&&define.amd?define([],n):"object"==typeof exports?exports["video/full-description"]=n():e["video/full-description"]=n()}(self,(function(){return function(){var e={678:function(e,n,t){var o=t(355)((function(e){return e[1]}));o.push([e.id,".video-desc .info,\n.video-desc .desc-info,\n.video-desc-v1 .desc-info,\n.play-up-info .play-up-self {\n  height: auto !important;\n}\n\n.video-desc .btn,\n.video-desc .toggle-btn,\n.video-desc-v1 .toggle-btn,\n.play-up-info .play-up-self-btn {\n  display: none !important;\n}",""]),e.exports=o},355:function(e){"use strict";
// eslint-disable-next-line func-names
e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t=e(n);return n[2]?"@media ".concat(n[2]," {").concat(t,"}"):t})).join("")},
// eslint-disable-next-line func-names
n.i=function(e,t,o){"string"==typeof e&&(
// eslint-disable-next-line no-param-reassign
e=[[null,e,""]]);var r={};if(o)for(var i=0;i<this.length;i++){
// eslint-disable-next-line prefer-destructuring
var c=this[i][0];null!=c&&(r[c]=!0)}for(var s=0;s<e.length;s++){var a=[].concat(e[s]);o&&r[a[0]]||(t&&(a[2]?a[2]="".concat(t," and ").concat(a[2]):a[2]=t),n.push(a))}},n}},651:function(e,n,t){var o=t(678);o&&o.__esModule&&(o=o.default),e.exports="string"==typeof o?o:o.toString()}},n={};function t(o){var r=n[o];if(void 0!==r)return r.exports;var i=n[o]={id:o,exports:{}};return e[o](i,i.exports,t),i.exports}t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,{a:n}),n},t.d=function(e,n){for(var o in n)t.o(n,o)&&!t.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:n[o]})},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)};var o={};return function(){"use strict";t.d(o,{component:function(){return p}});var e=coreApis.componentApis.define,n=coreApis.utils.urls,r=coreApis.observer,i=coreApis.spinQuery,c=coreApis.style,s=t(651),a=t.n(s);const d="fullVideoDescription",u=()=>{(0,c.addStyle)(a(),d),(0,r.videoChange)((async()=>{const e=await(0,i.select)(".video-desc, .video-desc-v1");if(!e)return;const n=await(0,i.sq)((()=>dq(e,'[report-id="abstract_spread"], .toggle-btn')),(e=>"none"!==e.style.display));null==n||n.click()}))},p=(0,e.defineComponentMetadata)({name:d,entry:u,reload:u,unload:()=>{(0,c.removeStyle)(d)},displayName:"展开视频简介",tags:[componentsTags.video,componentsTags.style],description:{"zh-CN":"总是展开完整的视频简介."},urlInclude:n.videoAndBangumiUrls,commitHash:"266d622ceeacf7188a5ecdec1237f4e3c77c7fdc",coreVersion:"2.5.0"})}(),o=o.component}()}));