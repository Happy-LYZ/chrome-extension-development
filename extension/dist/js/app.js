!function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var n={};t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="../dist/",t(t.s="hqmG")}({EoLF:function(e,t,n){(function(t){var r="object"===typeof t?t:"object"===typeof window?window:"object"===typeof self?self:this,o=r.regeneratorRuntime&&Object.getOwnPropertyNames(r).indexOf("regeneratorRuntime")>=0,i=o&&r.regeneratorRuntime;if(r.regeneratorRuntime=void 0,e.exports=n("sQRx"),o)r.regeneratorRuntime=i;else try{delete r.regeneratorRuntime}catch(e){r.regeneratorRuntime=void 0}}).call(t,n("mG0l"))},Sqna:function(e,t,n){function r(e,t){for(var n=0;n<e.length;n++){var r=e[n],o=h[r.id];if(o){o.refs++;for(var i=0;i<o.parts.length;i++)o.parts[i](r.parts[i]);for(;i<r.parts.length;i++)o.parts.push(l(r.parts[i],t))}else{for(var a=[],i=0;i<r.parts.length;i++)a.push(l(r.parts[i],t));h[r.id]={id:r.id,refs:1,parts:a}}}}function o(e,t){for(var n=[],r={},o=0;o<e.length;o++){var i=e[o],a=t.base?i[0]+t.base:i[0],c=i[1],s=i[2],u=i[3],l={css:c,media:s,sourceMap:u};r[a]?r[a].parts.push(l):n.push(r[a]={id:a,parts:[l]})}return n}function i(e,t){var n=v(e.insertInto);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var r=b[b.length-1];if("top"===e.insertAt)r?r.nextSibling?n.insertBefore(t,r.nextSibling):n.appendChild(t):n.insertBefore(t,n.firstChild),b.push(t);else{if("bottom"!==e.insertAt)throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");n.appendChild(t)}}function a(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e);var t=b.indexOf(e);t>=0&&b.splice(t,1)}function c(e){var t=document.createElement("style");return e.attrs.type="text/css",u(t,e.attrs),i(e,t),t}function s(e){var t=document.createElement("link");return e.attrs.type="text/css",e.attrs.rel="stylesheet",u(t,e.attrs),i(e,t),t}function u(e,t){Object.keys(t).forEach(function(n){e.setAttribute(n,t[n])})}function l(e,t){var n,r,o,i;if(t.transform&&e.css){if(!(i=t.transform(e.css)))return function(){};e.css=i}if(t.singleton){var u=g++;n=y||(y=c(t)),r=f.bind(null,n,u,!1),o=f.bind(null,n,u,!0)}else e.sourceMap&&"function"===typeof URL&&"function"===typeof URL.createObjectURL&&"function"===typeof URL.revokeObjectURL&&"function"===typeof Blob&&"function"===typeof btoa?(n=s(t),r=p.bind(null,n,t),o=function(){a(n),n.href&&URL.revokeObjectURL(n.href)}):(n=c(t),r=d.bind(null,n),o=function(){a(n)});return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else o()}}function f(e,t,n,r){var o=n?"":r.css;if(e.styleSheet)e.styleSheet.cssText=w(t,o);else{var i=document.createTextNode(o),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(i,a[t]):e.appendChild(i)}}function d(e,t){var n=t.css,r=t.media;if(r&&e.setAttribute("media",r),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}function p(e,t,n){var r=n.css,o=n.sourceMap,i=void 0===t.convertToAbsoluteUrls&&o;(t.convertToAbsoluteUrls||i)&&(r=x(r)),o&&(r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */");var a=new Blob([r],{type:"text/css"}),c=e.href;e.href=URL.createObjectURL(a),c&&URL.revokeObjectURL(c)}var h={},m=function(e){var t;return function(){return"undefined"===typeof t&&(t=e.apply(this,arguments)),t}}(function(){return window&&document&&document.all&&!window.atob}),v=function(e){var t={};return function(n){return"undefined"===typeof t[n]&&(t[n]=e.call(this,n)),t[n]}}(function(e){return document.querySelector(e)}),y=null,g=0,b=[],x=n("Y4It");e.exports=function(e,t){if("undefined"!==typeof DEBUG&&DEBUG&&"object"!==typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");t=t||{},t.attrs="object"===typeof t.attrs?t.attrs:{},t.singleton||(t.singleton=m()),t.insertInto||(t.insertInto="head"),t.insertAt||(t.insertAt="bottom");var n=o(e,t);return r(n,t),function(e){for(var i=[],a=0;a<n.length;a++){var c=n[a],s=h[c.id];s.refs--,i.push(s)}if(e){r(o(e,t),t)}for(var a=0;a<i.length;a++){var s=i[a];if(0===s.refs){for(var u=0;u<s.parts.length;u++)s.parts[u]();delete h[s.id]}}}};var w=function(){var e=[];return function(t,n){return e[t]=n,e.filter(Boolean).join("\n")}}()},V5hd:function(e,t,n){"use strict";function r(e){return function(){var t=e.apply(this,arguments);return new Promise(function(e,n){function r(o,i){try{var a=t[o](i),c=a.value}catch(e){return void n(e)}if(!a.done)return Promise.resolve(c).then(function(e){r("next",e)},function(e){r("throw",e)});e(c)}return r("next")})}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var i=n("qqdm"),a=n.n(i),c=n("oOIo"),s=(n.n(c),n("x1PA")),u=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),l=window.chrome,f=function(){function e(){var t=this;o(this,e),this.checkOption(),l.runtime.onMessage.addListener(function(e){"updateOption"!==e.action&&"active"!==e.action||t.checkOption(),"executeScript"===e.action&&t.executeScript(e.code),"insertCSS"===e.action&&t.insertCSS(e.code)})}return u(e,[{key:"enableSkin",value:function(){document.body.classList.add("chrome-extension-development-dark")}},{key:"disabledSkin",value:function(){document.body.classList.remove("chrome-extension-development-dark")}},{key:"enableClearMode",value:function(){document.body.classList.add("chrome-extension-development-clear")}},{key:"disabledClearMode",value:function(){document.body.classList.remove("chrome-extension-development-clear")}},{key:"enableFullscreen",value:function(){document.body.classList.add("chrome-extension-development-fullscreen")}},{key:"disabledFullscreen",value:function(){document.body.classList.remove("chrome-extension-development-fullscreen")}},{key:"checkOption",value:function(){function e(){return t.apply(this,arguments)}var t=r(a.a.mark(function e(){var t;return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.a.getAsync();case 2:t=e.sent,t.enableSkin?this.enableSkin():this.disabledSkin(),t.clearMode?this.enableClearMode():this.disabledClearMode(),t.fullscreen?this.enableFullscreen():this.disabledFullscreen();case 6:case"end":return e.stop()}},e,this)}));return e}()},{key:"executeScript",value:function(e){var t=document.createElement("script"),n=document.getElementsByTagName("head")[0];t.textContent=e,n.appendChild(t),setTimeout(function(){return n.removeChild(t)})}},{key:"insertCSS",value:function(e){var t=document.createElement("style"),n=document.getElementsByTagName("head")[0];t.type="text/css",t.textContent=e,n.appendChild(t)}}]),e}();t.a=f},Y4It:function(e,t){e.exports=function(e){var t="undefined"!==typeof window&&window.location;if(!t)throw new Error("fixUrls requires window.location");if(!e||"string"!==typeof e)return e;var n=t.protocol+"//"+t.host,r=n+t.pathname.replace(/\/[^\/]*$/,"/");return e.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(e,t){var o=t.trim().replace(/^"(.*)"$/,function(e,t){return t}).replace(/^'(.*)'$/,function(e,t){return t});if(/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(o))return e;var i;return i=0===o.indexOf("//")?o:0===o.indexOf("/")?n+o:r+o.replace(/^\.\//,""),"url("+JSON.stringify(i)+")"})}},YfG4:function(e,t){function n(e,t){var n=e[1]||"",o=e[3];if(!o)return n;if(t&&"function"===typeof btoa){var i=r(o);return[n].concat(o.sources.map(function(e){return"/*# sourceURL="+o.sourceRoot+e+" */"})).concat([i]).join("\n")}return[n].join("\n")}function r(e){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(e))))+" */"}e.exports=function(e){var t=[];return t.toString=function(){return this.map(function(t){var r=n(t,e);return t[2]?"@media "+t[2]+"{"+r+"}":r}).join("")},t.i=function(e,n){"string"===typeof e&&(e=[[null,e,""]]);for(var r={},o=0;o<this.length;o++){var i=this[o][0];"number"===typeof i&&(r[i]=!0)}for(o=0;o<e.length;o++){var a=e[o];"number"===typeof a[0]&&r[a[0]]||(n&&!a[2]?a[2]=n:n&&(a[2]="("+a[2]+") and ("+n+")"),t.push(a))}},t}},hqmG:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),new(n("V5hd").a)},mG0l:function(e,t){var n;n=function(){return this}();try{n=n||Function("return this")()||(0,eval)("this")}catch(e){"object"===typeof window&&(n=window)}e.exports=n},oOIo:function(e,t,n){var r=n("tz8F");"string"===typeof r&&(r=[[e.i,r,""]]);var o={};o.transform=void 0;n("Sqna")(r,o);r.locals&&(e.exports=r.locals)},qqdm:function(e,t,n){e.exports=n("EoLF")},sQRx:function(e,t,n){(function(t){!function(t){"use strict";function n(e,t,n,r){var i=t&&t.prototype instanceof o?t:o,a=Object.create(i.prototype),c=new p(r||[]);return a._invoke=u(e,n,c),a}function r(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(e){return{type:"throw",arg:e}}}function o(){}function i(){}function a(){}function c(e){["next","throw","return"].forEach(function(t){e[t]=function(e){return this._invoke(t,e)}})}function s(e){function n(t,o,i,a){var c=r(e[t],e,o);if("throw"!==c.type){var s=c.arg,u=s.value;return u&&"object"===typeof u&&g.call(u,"__await")?Promise.resolve(u.__await).then(function(e){n("next",e,i,a)},function(e){n("throw",e,i,a)}):Promise.resolve(u).then(function(e){s.value=e,i(s)},a)}a(c.arg)}function o(e,t){function r(){return new Promise(function(r,o){n(e,t,r,o)})}return i=i?i.then(r,r):r()}"object"===typeof t.process&&t.process.domain&&(n=t.process.domain.bind(n));var i;this._invoke=o}function u(e,t,n){var o=j;return function(i,a){if(o===E)throw new Error("Generator is already running");if(o===R){if("throw"===i)throw a;return m()}for(n.method=i,n.arg=a;;){var c=n.delegate;if(c){var s=l(c,n);if(s){if(s===C)continue;return s}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(o===j)throw o=R,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);o=E;var u=r(e,t,n);if("normal"===u.type){if(o=n.done?R:S,u.arg===C)continue;return{value:u.arg,done:n.done}}"throw"===u.type&&(o=R,n.method="throw",n.arg=u.arg)}}}function l(e,t){var n=e.iterator[t.method];if(n===v){if(t.delegate=null,"throw"===t.method){if(e.iterator.return&&(t.method="return",t.arg=v,l(e,t),"throw"===t.method))return C;t.method="throw",t.arg=new TypeError("The iterator does not provide a 'throw' method")}return C}var o=r(n,e.iterator,t.arg);if("throw"===o.type)return t.method="throw",t.arg=o.arg,t.delegate=null,C;var i=o.arg;return i?i.done?(t[e.resultName]=i.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=v),t.delegate=null,C):i:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,C)}function f(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function d(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function p(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(f,this),this.reset(!0)}function h(e){if(e){var t=e[x];if(t)return t.call(e);if("function"===typeof e.next)return e;if(!isNaN(e.length)){var n=-1,r=function t(){for(;++n<e.length;)if(g.call(e,n))return t.value=e[n],t.done=!1,t;return t.value=v,t.done=!0,t};return r.next=r}}return{next:m}}function m(){return{value:v,done:!0}}var v,y=Object.prototype,g=y.hasOwnProperty,b="function"===typeof Symbol?Symbol:{},x=b.iterator||"@@iterator",w=b.asyncIterator||"@@asyncIterator",k=b.toStringTag||"@@toStringTag",L="object"===typeof e,O=t.regeneratorRuntime;if(O)return void(L&&(e.exports=O));O=t.regeneratorRuntime=L?e.exports:{},O.wrap=n;var j="suspendedStart",S="suspendedYield",E="executing",R="completed",C={},N={};N[x]=function(){return this};var U=Object.getPrototypeOf,_=U&&U(U(h([])));_&&_!==y&&g.call(_,x)&&(N=_);var P=a.prototype=o.prototype=Object.create(N);i.prototype=P.constructor=a,a.constructor=i,a[k]=i.displayName="GeneratorFunction",O.isGeneratorFunction=function(e){var t="function"===typeof e&&e.constructor;return!!t&&(t===i||"GeneratorFunction"===(t.displayName||t.name))},O.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,a):(e.__proto__=a,k in e||(e[k]="GeneratorFunction")),e.prototype=Object.create(P),e},O.awrap=function(e){return{__await:e}},c(s.prototype),s.prototype[w]=function(){return this},O.AsyncIterator=s,O.async=function(e,t,r,o){var i=new s(n(e,t,r,o));return O.isGeneratorFunction(t)?i:i.next().then(function(e){return e.done?e.value:i.next()})},c(P),P[k]="Generator",P[x]=function(){return this},P.toString=function(){return"[object Generator]"},O.keys=function(e){var t=[];for(var n in e)t.push(n);return t.reverse(),function n(){for(;t.length;){var r=t.pop();if(r in e)return n.value=r,n.done=!1,n}return n.done=!0,n}},O.values=h,p.prototype={constructor:p,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=v,this.done=!1,this.delegate=null,this.method="next",this.arg=v,this.tryEntries.forEach(d),!e)for(var t in this)"t"===t.charAt(0)&&g.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=v)},stop:function(){this.done=!0;var e=this.tryEntries[0],t=e.completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(e){function t(t,r){return i.type="throw",i.arg=e,n.next=t,r&&(n.method="next",n.arg=v),!!r}if(this.done)throw e;for(var n=this,r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r],i=o.completion;if("root"===o.tryLoc)return t("end");if(o.tryLoc<=this.prev){var a=g.call(o,"catchLoc"),c=g.call(o,"finallyLoc");if(a&&c){if(this.prev<o.catchLoc)return t(o.catchLoc,!0);if(this.prev<o.finallyLoc)return t(o.finallyLoc)}else if(a){if(this.prev<o.catchLoc)return t(o.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return t(o.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n];if(r.tryLoc<=this.prev&&g.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var o=r;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=e,i.arg=t,o?(this.method="next",this.next=o.finallyLoc,C):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),C},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),d(n),C}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var r=n.completion;if("throw"===r.type){var o=r.arg;d(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,n){return this.delegate={iterator:h(e),resultName:t,nextLoc:n},"next"===this.method&&(this.arg=v),C}}}("object"===typeof t?t:"object"===typeof window?window:"object"===typeof self?self:this)}).call(t,n("mG0l"))},tz8F:function(e,t,n){t=e.exports=n("YfG4")(void 0),t.push([e.i,".chrome-extension-development-clear .h-card {\n  display: none; }\n\n.chrome-extension-development-clear .h-card + .col-9 {\n  width: 100%; }\n\n.chrome-extension-development-clear .discussion-sidebar {\n  display: none; }\n\n.chrome-extension-development-fullscreen .site-nav-container, .chrome-extension-development-fullscreen .site-footer-container,\n.chrome-extension-development-fullscreen .container-lg,\n.chrome-extension-development-fullscreen .container {\n  width: auto;\n  max-width: none;\n  margin-left: 10px;\n  margin-right: 10px; }\n\n.chrome-extension-development-fullscreen #discussion_bucket {\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex; }\n\n.chrome-extension-development-fullscreen .discussion-sidebar {\n  float: none;\n  margin-left: 20px;\n  -webkit-order: 1;\n      -ms-flex-order: 1;\n          order: 1; }\n\n.chrome-extension-development-fullscreen .discussion-timeline {\n  float: none;\n  -webkit-flex: 1 1 0%;\n      -ms-flex: 1 1 0%;\n          flex: 1 1 0%; }\n\n.chrome-extension-development-dark {\n  background: #333;\n  color: #eee; }\n  .chrome-extension-development-dark .site-header {\n    background: #000;\n    border-bottom-color: #000; }\n  .chrome-extension-development-dark .site-header-nav .nav-item {\n    color: #aaa; }\n  .chrome-extension-development-dark .site-header .header-logo-invertocat {\n    color: red; }\n  .chrome-extension-development-dark .site-header .header-search-wrapper {\n    background: #353535;\n    border-color: #000; }\n    .chrome-extension-development-dark .site-header .header-search-wrapper .form-control {\n      background: none; }\n  .chrome-extension-development-dark .header-search-scope {\n    border-right: #333; }\n  .chrome-extension-development-dark .vcard-detail .octicon {\n    color: #fff; }\n  .chrome-extension-development-dark a,\n  .chrome-extension-development-dark .site-header .site-header-link {\n    color: #a3bdda; }\n  .chrome-extension-development-dark .form-control,\n  .chrome-extension-development-dark .form-select {\n    background: #eee; }\n  .chrome-extension-development-dark .user-profile-nav {\n    background: #6b6b6b;\n    border-color: #e36209; }\n  .chrome-extension-development-dark .underline-nav-item {\n    color: #a3bdda; }\n  .chrome-extension-development-dark .Counter {\n    background: #000;\n    color: #aaa; }\n  .chrome-extension-development-dark .underline-nav-item.selected {\n    color: #fff; }\n  .chrome-extension-development-dark .pinned-repo-item {\n    background: #000;\n    border-color: #666 !important; }\n  .chrome-extension-development-dark .text-gray {\n    color: #989292 !important; }\n  .chrome-extension-development-dark .muted-link {\n    color: #aaa; }\n  .chrome-extension-development-dark .profile-timeline-year-list {\n    background-color: transparent !important; }\n  .chrome-extension-development-dark .profile-timeline-month-heading {\n    background-color: #333 !important; }\n  .chrome-extension-development-dark .discussion-item-icon {\n    background-color: #333;\n    color: #fff;\n    border-color: #666; }\n  .chrome-extension-development-dark .profile-timeline.discussion-timeline::before {\n    background-color: #666; }\n  .chrome-extension-development-dark .ajax-pagination-form .ajax-pagination-btn {\n    background: #555;\n    border-color: #666 !important; }\n  .chrome-extension-development-dark .reponav-item.selected,\n  .chrome-extension-development-dark .repohead.experiment-repo-nav {\n    background-color: #333;\n    color: #fff; }\n  .chrome-extension-development-dark .signup-prompt-bg {\n    background-image: -webkit-linear-gradient(top, rgba(255, 255, 255, 0) 50%, #000), -webkit-linear-gradient(20deg, #333 32%, #555);\n    background-image: -o-linear-gradient(top, rgba(255, 255, 255, 0) 50%, #000), -o-linear-gradient(20deg, #333 32%, #555);\n    background-image: linear-gradient(180deg, rgba(255, 255, 255, 0) 50%, #000), linear-gradient(70deg, #333 32%, #555); }\n",""])},x1PA:function(e,t,n){"use strict";var r=window.chrome,o="chrome-extension-options",i=void 0;try{i=JSON.parse(localStorage.getItem(o))||{}}catch(e){i={}}var a=void 0;try{a=r.extension.getBackgroundPage()}catch(e){}t.a=Object.assign({options:i,get:function(e){return void 0===e?i:i[e]},set:function(e,t){return i[e]=t,localStorage.setItem(o,JSON.stringify(i)),i}},a===window?null:{getAsync:function(e){return new Promise(function(t){r.runtime.sendMessage({action:"getOption",key:e},t)})},setAsync:function(e,t){return new Promise(function(n){r.runtime.sendMessage({action:"setOption",key:e,value:t},n)})},getSync:function(e){return a.extensionOptions.get(e)},setSync:function(){var e;return(e=a.extensionOptions).set.apply(e,arguments)}})}});