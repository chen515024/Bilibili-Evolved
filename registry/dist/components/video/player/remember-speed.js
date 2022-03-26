!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports["video/player/remember-speed"]=t():e["video/player/remember-speed"]=t()}(self,(function(){return function(){"use strict";var e,t,n={90:function(e,t,n){n.r(t),n.d(t,{createController:function(){return G}});var r=n(730),i=coreApis.observer,o=n(114);const s=(0,o.cK)(o.VG.custom.active.selector),a=(0,o.cK)(o.VG.custom.show.selector);let d,l,c,u,p,m,f,v=1;const y=e=>{for(const[t,n]of Object.entries(o.YM.individualRememberList))if(n.some((t=>t.toString()===(0,o.yM)(e).toString())))return parseFloat(t);return null},b=()=>o.YM.remember?parseFloat(o.YM.speed):null,g=e=>{e=(0,o.yM)(e);let t=-1;for(const n of Object.values(o.YM.individualRememberList))if(t=n.indexOf(e),-1!==t){n.splice(t,1);break}return-1!==t},S=(e,t=!1,n)=>{n=(0,o.yM)(n);(g(n)||t)&&(o.YM.individualRememberList[e]||(o.YM.individualRememberList[e]=[]),o.YM.individualRememberList[e].push(n))},h=e=>p.querySelector(`${o.VG.custom.speedMenuItem.selector}[data-value="${e}"]`),x=e=>e?(h(e)?.click(),e):m.playbackRate,M=x,V=(e=!1)=>{if(e){const e=b();if(!e)return;g(),M(e)}else M(1)},w=(e="smart",t=!1)=>{switch(e){case"smart":1===x()?x(l):V(t);break;case"classic":M(l)}},L=e=>{p.querySelector(`${o.VG.custom.speedMenuItem.selector}[data-value="${x()}"]`)?.classList.remove(s),m.playbackRate=e,p.querySelector(`${o.VG.custom.speedMenuItem.selector}[data-value="${e}"]`)?.classList.add(s),u.classList.remove(a),f.innerText=(0,o.Nq)(e)},E=async()=>{const{getExtraSpeedMenuItemElements:e}=await Promise.resolve().then(n.bind(n,324));p.prepend(...await e()),p.querySelectorAll(`${o.VG.custom.speedMenuItem.selector}[data-value]:not(.extended)`).forEach((e=>{e.style.order=(0,o.dP)(parseFloat(e.getAttribute("data-value")??"1"))})),(0,o.NH)(p,["click",e=>{const t=e.target,n=parseFloat(t.dataset.value);var r;e.target.classList.contains("extended")&&(r=n,o.Tt.includes(r)?h(r)?.click():L(r)),(0,o.aC)().includes(x())&&d===n&&L(n)}])},N=(e,t)=>{const n=o.Tt.includes(t);u.dispatchEvent(new CustomEvent("changed",{detail:{speed:t,isNativeSpeed:n,previousSpeed:e}}))},G=_.once((()=>((0,i.videoChange)((async()=>{(0,o.oG)();const e=await o.VG.custom.speedContainer(),t=await r.playerAgent.query.video.element();if(!e)throw new Error("speed container element not found!");if(!t)throw new Error("video element not found!");var n;u=e,m=t,f=u.querySelector(o.VG.custom.speedNameBtn.selector),p=u.querySelector(o.VG.custom.speedMenuList.selector),await(async()=>{o.YM.extend&&!u.classList.contains("extended")&&(await E(),u.classList.add("extended"))})(),p.querySelectorAll(o.VG.custom.speedMenuItem.selector).forEach((e=>{if(!e.hasAttribute("data-value")){const t=parseFloat(e.textContent).toString();e.setAttribute("data-value",t)}})),d=v,n=N,(0,o.NH)(p,["click",e=>{n(c,parseFloat(e.target.dataset.value??"1"))}]),(0,o.NH)(u,["changed",({detail:{speed:e,isNativeSpeed:t,previousSpeed:n}})=>{c=e,t&&(v=e,d=e),o.YM.extend&&o.Tt.includes(e)&&p.querySelector(`${o.VG.custom.speedMenuItem.selector}.extended${o.VG.custom.active.selector}`)?.classList.remove(s),o.YM.remember&&(o.YM.individualRemember?S(e,e!==b()):o.YM.speed=e.toString()),n&&n!==e&&(l=n)}]),setTimeout((()=>{M(o.YM.remember&&o.YM.individualRemember&&y()||b()||c)}),100)})),{getSupportedRates:o.V3,getExtendedSupportedRates:o.aC,setVideoSpeed:M,videoSpeed:x,getRememberSpeed:y,rememberSpeed:S,forgetSpeed:g,resetVideoSpeed:V,toggleVideoSpeed:w})))},324:function(e,t,n){n.r(t),n.d(t,{getExtraSpeedMenuItemElements:function(){return l}});var r=coreApis.style,i=coreApis.utils.log,o=n(114);const s=(0,o.cK)(o.VG.custom.speedMenuItem.selector),a=e=>{const t=document.createElement("li");t.innerText=(0,o.Nq)(e),t.classList.add(s,"extended"),t.dataset.value=e.toString(),t.style.order=(0,o.dP)(e);const n=document.createElement("i");return n.classList.add("mdi","mdi-close-circle"),n.addEventListener("click",(()=>{lodash.pull(o.YM.extendList,e),t.remove()})),t.append(n),t},d=e=>{const t=(()=>{const e=(0,o.V3)().slice(-1)[0]+o.hD;return e>o.PW?null:e})();e.setAttribute("min",t?e.value=t.toString():(e.value="",o.uv.toString()))},l=async()=>{(0,r.addStyle)(`\n  ${o.VG.custom.speedContainer.selector} ${o.VG.custom.speedMenuItem.selector}:first-child .mdi-playlist-plus {\n    font-size: 1.5em;\n  }\n  ${o.VG.custom.speedContainer.selector} ${o.VG.custom.speedMenuItem.selector}:first-child input {\n    font-size: inherit;\n    color: inherit;\n    line-height: inherit;\n    background: transparent;\n    outline: none;\n    width: 100%;\n    border: none;\n    text-align: center;\n  }\n  ${o.VG.custom.speedMenuItem.selector} .mdi-close-circle {\n    color: inherit;\n    opacity: 0.5;\n    display: none;\n    position: absolute;\n    right: 4px;\n  }\n  ${o.VG.custom.speedMenuItem.selector}:not(${o.VG.custom.active.selector}):hover .mdi-close-circle {\n    display: inline;\n  }\n  ${o.VG.custom.speedMenuItem.selector} .mdi-close-circle:hover {\n    opacity: 1;\n    transition: all .3s;\n  }\n  /* https://stackoverflow.com/a/4298216 */\n  /* Chrome */\n  .add-speed-entry::-webkit-outer-spin-button,\n  .add-speed-entry::-webkit-inner-spin-button {\n    -webkit-appearance: none;\n    margin: 0;\n  }\n  /* Firefox */\n  .add-speed-entry[type=number] {\n    -moz-appearance:textfield;\n  }\n  ${o.VG.custom.speedMenuList.selector} {\n    display: flex;\n    flex-direction: column;\n    overflow-y: auto;\n    max-height: 360px;\n  }\n  `,"extend-video-speed-style");const e=(0,o.aC)().map((e=>a(e))).reverse();return e.unshift((()=>{const e=document.createElement("li");e.classList.add(s);const t=document.createElement("i");t.classList.add("mdi","mdi-playlist-plus");const n=document.createElement("input");return n.classList.add("add-speed-entry"),n.setAttribute("type","number"),n.setAttribute("max",o.PW.toString()),n.setAttribute("step",o.hD.toString()),n.setAttribute("title","增加新的倍速值"),d(n),n.addEventListener("keydown",(t=>{if("Enter"===t.key){const t=parseFloat(n.value);if(!isFinite(t))return(0,i.logError)("无效的倍速值",o.cJ),!1;if(t<o.uv)return(0,i.logError)("倍速值太小了",o.cJ),!1;if(t>o.PW)return(0,i.logError)("倍速值太大了",o.cJ),!1;if((0,o.V3)().includes(t))return(0,i.logError)("不能重复添加已有的倍速值",o.cJ),!1;o.YM.extendList.push(t),o.YM.extendList=(0,o.uL)(o.YM.extendList);let r=e.nextElementSibling;for(;!r.dataset.value||parseFloat(r.dataset.value)>o.Tt.slice(-1)[0]&&t<parseFloat(r.dataset.value);)r=r.nextElementSibling;r.before(a(t)),d(n)}return!0})),e.prepend(t,n),n.style.display="none",e.addEventListener("mouseenter",(()=>{d(n),n.style.display="inline",t.style.display="none",n.focus()})),e.addEventListener("mouseleave",(()=>{t.style.display="inline",n.style.display="none"})),e})()),e}},114:function(e,t,n){n.d(t,{NH:function(){return x},dP:function(){return m},cJ:function(){return l},VG:function(){return u},Nq:function(){return S},yM:function(){return f},aC:function(){return b},V3:function(){return g},uL:function(){return y},PW:function(){return a},uv:function(){return s},Tt:function(){return c},YM:function(){return v},oG:function(){return M},hD:function(){return d},cK:function(){return p}});var r=n(730),i=n(407),o=coreApis.utils.sort;const s=.0625,a=16,d=.5,l=2e3,c=[.5,.75,1,1.25,1.5,2],u=r.playerAgent.provideCustomQuery({video:{speedMenuList:".bilibili-player-video-btn-speed-menu",speedMenuItem:".bilibili-player-video-btn-speed-menu-list",speedNameBtn:".bilibili-player-video-btn-speed-name",speedContainer:".bilibili-player-video-btn-speed",active:".bilibili-player-active",show:".bilibili-player-speed-show"},bangumi:{speedMenuList:".squirtle-speed-select-list",speedMenuItem:".squirtle-select-item",speedNameBtn:".squirtle-speed-select-result",speedContainer:".squirtle-speed-wrap",active:".active",show:".bilibili-player-speed-show"}}),p=e=>e.replace(/^\./,""),m=e=>(1e4*(a-e)).toString(),f=(e=unsafeWindow.aid)=>{if(!e)throw new Error("aid is unknown");return e},{options:v}=(0,i.getComponentSettings)("rememberVideoSpeed"),y=e=>Array.from(new Set(e)).sort((0,o.ascendingSort)()),b=()=>y(v.extendList),g=()=>v.extend?[...c,...b()].sort((0,o.ascendingSort)()):c,S=e=>1===e?"倍速":Math.trunc(e)===e?`${e}.0x`:`${e}x`,h=new Map,x=(e,t)=>{e.addEventListener(...t),h.set(e,t)},M=()=>h.forEach(((e,t)=>t.removeEventListener(...e)))},730:function(e){e.exports=coreApis.componentApis.video.playerAgent},407:function(e){e.exports=coreApis.settings}},r={};function i(e){var t=r[e];if(void 0!==t)return t.exports;var o=r[e]={exports:{}};return n[e](o,o.exports,i),o.exports}t=Object.getPrototypeOf?function(e){return Object.getPrototypeOf(e)}:function(e){return e.__proto__},i.t=function(n,r){if(1&r&&(n=this(n)),8&r)return n;if("object"==typeof n&&n){if(4&r&&n.__esModule)return n;if(16&r&&"function"==typeof n.then)return n}var o=Object.create(null);i.r(o);var s={};e=e||[null,t({}),t([]),t(t)];for(var a=2&r&&n;"object"==typeof a&&!~e.indexOf(a);a=t(a))Object.getOwnPropertyNames(a).forEach((function(e){s[e]=function(){return n[e]}}));return s.default=function(){return n},i.d(o,s),o},i.d=function(e,t){for(var n in t)i.o(t,n)&&!i.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var o={};return function(){i.d(o,{component:function(){return r}});var e=coreApis.componentApis.component,t=coreApis.utils.urls;const n="rememberVideoSpeed",r={name:n,displayName:"倍速增强",author:{name:"JLoeve",link:"https://github.com/LonelySteve"},description:{"zh-CN":"可以记忆上次选择的视频播放速度, 还可以使用更多倍速来扩展原生倍速菜单."},tags:[componentsTags.video],urlInclude:t.playerUrls,entry:async()=>(await Promise.resolve().then(i.bind(i,90))).createController(),plugin:{displayName:"倍速增强 - 快捷键支持",setup:async({addData:t})=>{const{getComponentSettings:r}=await Promise.resolve().then(i.t.bind(i,407,23)),o=async(t,r)=>{const i=(0,e.importComponent)(n);r(i,i.getSupportedRates()),t.showTip(`${i.videoSpeed()}x`,"mdi-fast-forward")};t("keymap.actions",(e=>{e.videoSpeedIncrease={displayName:"提高倍速",run:e=>(o(e,((e,t)=>{e.setVideoSpeed(t.find((t=>t>e.videoSpeed()))||t[t.length-1])})),!0)},e.videoSpeedDecrease={displayName:"降低倍速",run:e=>(o(e,((e,t)=>{e.setVideoSpeed([...t].reverse().find((t=>t<e.videoSpeed()))||t[0])})),!0)},e.videoSpeedReset={displayName:"重置倍速",run:e=>(o(e,(e=>{e.toggleVideoSpeed()})),!0)},r("rememberVideoSpeed").options.individualRemember&&(e.videoSpeedForget={displayName:"清除当前倍速记忆",run:e=>(o(e,(e=>{e.resetVideoSpeed(!0)})),!0)})})),t("keymap.presets",(e=>{e.videoSpeedIncrease="shift > 》 arrowUp",e.videoSpeedDecrease="shift < 《 arrowDown",e.videoSpeedReset="shift ? ？",e.videoSpeedForget="shift : ："}))}},options:{speed:{displayName:"记忆的速度",defaultValue:"1.0",hidden:!0},extend:{displayName:"扩展倍速菜单",defaultValue:!0},extendList:{displayName:"扩展倍速列表",defaultValue:[2.5,3],hidden:!0},remember:{displayName:"启用倍速记忆",defaultValue:!0},individualRemember:{displayName:"各视频分别记忆",defaultValue:!1,hidden:!0},individualRememberList:{displayName:"分别记忆倍速列表",defaultValue:{},hidden:!0}},commitHash:"e5257ca7bea9d2c2c0a94c38ec82384adc1c9147",coreVersion:"2.1.7"}}(),o=o.component}()}));