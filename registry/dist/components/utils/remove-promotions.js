!function(e,n){"object"==typeof exports&&"object"==typeof module?module.exports=n():"function"==typeof define&&define.amd?define([],n):"object"==typeof exports?exports["utils/remove-promotions"]=n():e["utils/remove-promotions"]=n()}(self,(function(){return function(){var e,n,t={72:function(e,n,t){var o=t(645)((function(e){return e[1]}));o.push([e.id,"#slide_ad,\n.v-wrap .vcd,\n.ad-report,\n#home_popularize .l-con,\n#home_popularize .adpos,\n.gg-floor-module,\n.home-app-download,\n.bilibili-player-promote-wrap,\n.bili-header-m .nav-menu .nav-con .nav-item .text-red,\n.mobile-link-l,\n.video-page-game-card,\n.international-home .banner-card,\n.bypb-window .operate-card,\n.gg-window .operate-card,\n#reportFirst2 .extension,\n.video-page-special-card,\n.mascot,\n.rank-container .cm-module,\nbody:not(.preserve-event-banner) .activity-m,\nbody.remove-game-match-module .bili-wrapper > .home-match,\nbody.remove-game-match-module #reportFirst3,\n.home-content .ad-panel,\n.recommend-list .rec-list > :not(.video-page-card),\n.eva-extension-area,\n.eva-banner {\n  display: none !important;\n}\n\n.recommend-list .rec-list > :not(.video-page-card) + .video-page-card {\n  padding-top: 0 !important;\n}\n\n#home_popularize {\n  position: relative !important;\n}\n\n.popularize-module .online,\n.gg-window .online {\n  position: absolute !important;\n  top: 50% !important;\n  right: 0.5% !important;\n  transform: translateY(-100%) !important;\n}\n\n.gg-window .online {\n  right: 0 !important;\n  padding: 0 16px !important;\n}\n\n#reportFirst2 {\n  position: relative;\n  margin-bottom: 4px;\n}\n\n.blocked-ads {\n  width: 440px;\n  height: 220px;\n  display: flex;\n  color: #888;\n  background-color: rgba(136,136,136,0.13333);\n  font-size: 24pt;\n  font-weight: bold;\n  align-items: center;\n  justify-content: space-evenly;\n}\n\n.blocked-ads.new {\n  width: 100%;\n  height: 100%;\n  background-color: #eee;\n}\n\nbody.dark .blocked-ads.new {\n  background-color: #333;\n}",""]),e.exports=o},645:function(e){"use strict";
// eslint-disable-next-line func-names
e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t=e(n);return n[2]?"@media ".concat(n[2]," {").concat(t,"}"):t})).join("")},
// eslint-disable-next-line func-names
n.i=function(e,t,o){"string"==typeof e&&(
// eslint-disable-next-line no-param-reassign
e=[[null,e,""]]);var r={};if(o)for(var i=0;i<this.length;i++){
// eslint-disable-next-line prefer-destructuring
var a=this[i][0];null!=a&&(r[a]=!0)}for(var c=0;c<e.length;c++){var s=[].concat(e[c]);o&&r[s[0]]||(t&&(s[2]?s[2]="".concat(t," and ").concat(s[2]):s[2]=t),n.push(s))}},n}},488:function(e,n,t){var o=t(72);o&&o.__esModule&&(o=o.default),e.exports="string"==typeof o?o:o.toString()},407:function(e){"use strict";e.exports=coreApis.settings},569:function(e){"use strict";e.exports=coreApis.spinQuery}},o={};function r(e){var n=o[e];if(void 0!==n)return n.exports;var i=o[e]={id:e,exports:{}};return t[e](i,i.exports,r),i.exports}n=Object.getPrototypeOf?function(e){return Object.getPrototypeOf(e)}:function(e){return e.__proto__},r.t=function(t,o){if(1&o&&(t=this(t)),8&o)return t;if("object"==typeof t&&t){if(4&o&&t.__esModule)return t;if(16&o&&"function"==typeof t.then)return t}var i=Object.create(null);r.r(i);var a={};e=e||[null,n({}),n([]),n(n)];for(var c=2&o&&t;"object"==typeof c&&!~e.indexOf(c);c=n(c))Object.getOwnPropertyNames(c).forEach((function(e){a[e]=function(){return t[e]}}));return a.default=function(){return t},r.d(i,a),i},r.d=function(e,n){for(var t in n)r.o(n,t)&&!r.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:n[t]})},r.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var i={};return function(){"use strict";r.d(i,{component:function(){return e}});const e={name:"removePromotions",displayName:"删除广告",entry:async({settings:e,metadata:n})=>{const{addComponentListener:t}=await Promise.resolve().then(r.t.bind(r,407,23));if("https://www.bilibili.com/"===document.URL.replace(window.location.search,"")){const{selectAll:n,select:t}=await Promise.resolve().then(r.t.bind(r,569,23));t(".eva-extension-area").then((e=>{e&&(e.parentElement.style.margin="12px")})),n(".gg-pic").then((n=>{0!==n.length&&n.forEach((n=>{const t=n.parentElement;t.style.display="none";const o=[...t.parentElement.childNodes].indexOf(t)+1,r=t.parentElement.parentElement.querySelector(`.pic li:nth-child(${o})`);if(r){r.style.display="flex";const n=r.querySelector("a:not(.more-text)");n.insertAdjacentHTML("afterend",`\n            <div class="blocked-ads">${e.options.showPlaceholder?"🚫已屏蔽广告":""}</div>\n          `),n.style.visibility="hidden";[r.querySelector("a.more-text"),r.querySelector("img")].forEach((e=>e.style.display="none"))}}))})),t(".focus-carousel.home-slide").then((n=>{n&&dqa(n,".gg-icon,.bypb-icon").map((e=>e.parentElement.parentElement)).forEach((n=>{n.style.display="none",n.insertAdjacentHTML("afterend",`\n            <div class="blocked-ads new">${e.options.showPlaceholder?"🚫已屏蔽广告":""}</div>\n          `)}))}))}t(`${n.name}.preserveEventBanner`,(e=>{document.body.classList.toggle("preserve-event-banner",e)}),!0)},instantStyles:[{name:"removePromotions",style:()=>Promise.resolve().then(r.t.bind(r,488,23))}],tags:[componentsTags.utils],description:{"zh-CN":'\n删除站内的各种广告. 包括首页的推广模块, 手机 app 推荐, 视频页面右侧的广告等. 注意: 首页推广模块删除后留下空白区域是正常现象, 如果觉得怪可以开启 `占位文本` 选项.\n\n- `占位文本`: 删除首页推广模块的广告后显示"🚫已屏蔽广告"来替代空白区域.\n- `保留活动横幅`: 保留视频页面的活动横幅.\n'.trim()},options:{showPlaceholder:{displayName:"占位文本",defaultValue:!0},preserveEventBanner:{displayName:"保留活动横幅",defaultValue:!1}},commitHash:"e5257ca7bea9d2c2c0a94c38ec82384adc1c9147",coreVersion:"2.1.7"}}(),i=i.component}()}));