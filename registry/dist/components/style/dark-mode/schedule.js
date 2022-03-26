!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports["style/dark-mode/schedule"]=t():e["style/dark-mode/schedule"]=t()}(self,(function(){return function(){"use strict";var e={d:function(t,i){for(var r in i)e.o(i,r)&&!e.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:i[r]})},o:function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}},t={};e.d(t,{component:function(){return l}});var i=coreApis.lifeCycle,r=coreApis.settings;function o(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}class n{constructor(...e){if(o(this,"hour",void 0),o(this,"minute",void 0),0===e.length){const e=new Date;this.hour=e.getHours(),this.minute=e.getMinutes()}else if(1===e.length){const[t]=e;[this.hour,this.minute]=t.split(":").slice(0,2).map((e=>n.validatePart(e))),this.normalize()}else 2===e.length&&([this.hour,this.minute]=e)}normalize(){for(;this.minute<0;)this.minute+=60,this.hour-=1;for(;this.minute>=60;)this.minute-=60,this.hour+=1;for(;this.hour<0;)this.hour+=24;for(;this.hour>=24;)this.hour-=24}lessThan(e){return this.hour<e.hour||this.hour===e.hour&&this.minute<e.minute}greaterThan(e){return this.hour>e.hour||this.hour===e.hour&&this.minute>e.minute}equals(e){return this.hour===e.hour&&this.minute===e.minute}isInRange(e,t){if(e.equals(t))return!1;let i=this.greaterThan(e)&&this.lessThan(t);e.greaterThan(t)&&(i=this.greaterThan(e)||this.lessThan(t));return i||this.equals(e)}toString(){return`${this.hour.toString().padStart(2,"0")}:${this.minute.toString().padStart(2,"0")}`}static validatePart(e){const t=parseInt(e);return!Number.isNaN(t)&&t>=0&&t<=59?t:null}static millisecondsBefore(e){const t=new n,i=(new Date).getSeconds(),r=1e3*(3600*t.hour+60*t.minute+i);let o=1e3*(3600*e.hour+60*e.minute)-r;return(t.greaterThan(e)||t.equals(e)&&0!==i)&&(o+=864e5),o}}const s=e=>{const t=new n(e.options.range.start),i=new n(e.options.range.end),o=(new n).isInRange(t,i),l=(0,r.getComponentSettings)("darkMode");l.enabled!==o&&(l.enabled=o);let u=0;u=o?n.millisecondsBefore(i):n.millisecondsBefore(t),0!==u&&setTimeout((()=>s(e)),u)},l={name:"darkModeSchedule",displayName:"夜间模式计划时段",description:"设置一个使用夜间模式的时间段, 进入 / 离开此时间段时, 会自动开启 / 关闭夜间模式. 结束时间小于起始时间时将视为次日, 如 `18:00` 至 `6:00` 表示晚上 18:00 到次日 6:00. 请勿和 `夜间模式跟随系统` 一同使用.",tags:[componentsTags.style,componentsTags.general],entry:({settings:e})=>(0,i.fullyLoaded)((()=>s(e))),urlExclude:["//member.bilibili.com/v2","//member.bilibili.com/platform","//member.bilibili.com/video/upload.html","//member.bilibili.com/article-text/home","//www.bilibili.com/audio/submit/","//member.bilibili.com/studio/bs-editor/projects","//www.bilibili.com/s/video/","//member.bilibili.com/platform","//live.bilibili.com/p/html/live-lottery/anchor-join.html","//account.bilibili.com/subtitle/edit/#/editor","/york/allowance-charge","//cm.bilibili.com/quests/#/task"],options:{range:{defaultValue:{start:"18:00",end:"6:00"},displayName:"时间段",validator:e=>{const{start:t,end:i}=e,r=/^(\d{1,2}):(\d{1,2})$/;if(!r.test(t)||!r.test(i))return null;const o=new n(e.start),s=new n(e.end);return{start:o.toString(),end:s.toString()}}}},commitHash:"e5257ca7bea9d2c2c0a94c38ec82384adc1c9147",coreVersion:"2.1.7"};return t=t.component}()}));