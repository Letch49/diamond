parcelRequire=function(e,r,n,t){var i="function"==typeof parcelRequire&&parcelRequire,o="function"==typeof require&&require;function u(n,t){if(!r[n]){if(!e[n]){var f="function"==typeof parcelRequire&&parcelRequire;if(!t&&f)return f(n,!0);if(i)return i(n,!0);if(o&&"string"==typeof n)return o(n);var c=new Error("Cannot find module '"+n+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[n][1][r]||r},p.cache={};var l=r[n]=new u.Module(n);e[n][0].call(l.exports,p,l,l.exports,this)}return r[n].exports;function p(e){return u(p.resolve(e))}}u.isParcelRequire=!0,u.Module=function(e){this.id=e,this.bundle=u,this.exports={}},u.modules=e,u.cache=r,u.parent=i,u.register=function(r,n){e[r]=[function(e,r){r.exports=n},{}]};for(var f=0;f<n.length;f++)u(n[f]);if(n.length){var c=u(n[n.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=c:"function"==typeof define&&define.amd?define(function(){return c}):t&&(this[t]=c)}return u}({"DOJS":[function(require,module,exports) {
"use strict";function r(r){return n(r)||e(r)||t()}function t(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function e(r){if(Symbol.iterator in Object(r)||"[object Arguments]"===Object.prototype.toString.call(r))return Array.from(r)}function n(r){if(Array.isArray(r)){for(var t=0,e=new Array(r.length);t<r.length;t++)e[t]=r[t];return e}}Object.defineProperty(exports,"__esModule",{value:!0}),exports.drawTable=exports.table=exports.setImg=exports.shuffle=exports.disableButtons=exports.flatten=exports.onloadImg=void 0;var o=function(r,t){r.onload=function(){return t}};exports.onloadImg=o;var a=function t(e){return e.reduce(function(e,n){return Array.isArray(n)?(t(n).forEach(function(r){e.push(r)}),e):r(e).concat([n])},[])};exports.flatten=a;var s=function(r){r.forEach(function(r){r.disabled=!0})};exports.disableButtons=s;var u=function(r){for(var t=r.length-1;t>0;t--){var e=Math.floor(Math.random()*(t+1)),n=[r[e],r[t]];r[t]=n[0],r[e]=n[1]}return r};exports.shuffle=u;var i=function(r){var t=new Image;return t.src=r,t};exports.setImg=i;var f=function(r,t){r=new Number(r)+1;for(var e=new Array,n=new Array,o=1;o<r;o++){for(var s=1;s<r;s++)n.push({x:s*(t+10),y:o*(t+10),size:t});e.push(n),n=[]}return a(e)};exports.table=f;var c=function(r,t,e){r.strokeStyle="black",r.lineWidth=1;for(var n=0;n<t.length;n++){var o=t[n];r.strokeRect(o.x,o.y,e,e)}};exports.drawTable=c;
},{}],"ECgz":[function(require,module,exports) {
var define;
var e;!function(o,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof e&&e.amd?e(t):o.MicroModal=t()}(this,function(){"use strict";var e,o,t,i,n,a=function(e,o){if(!(e instanceof o))throw new TypeError("Cannot call a class as a function")},r=function(){function e(e,o){for(var t=0;t<o.length;t++){var i=o[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(o,t,i){return t&&e(o.prototype,t),i&&e(o,i),o}}(),s=function(e){if(Array.isArray(e)){for(var o=0,t=Array(e.length);o<e.length;o++)t[o]=e[o];return t}return Array.from(e)};return e=["a[href]","area[href]",'input:not([disabled]):not([type="hidden"]):not([aria-hidden])',"select:not([disabled]):not([aria-hidden])","textarea:not([disabled]):not([aria-hidden])","button:not([disabled]):not([aria-hidden])","iframe","object","embed","[contenteditable]",'[tabindex]:not([tabindex^="-"])'],o=function(){function o(e){var t=e.targetModal,i=e.triggers,n=void 0===i?[]:i,r=e.onShow,l=void 0===r?function(){}:r,c=e.onClose,d=void 0===c?function(){}:c,u=e.openTrigger,f=void 0===u?"data-micromodal-trigger":u,h=e.closeTrigger,v=void 0===h?"data-micromodal-close":h,g=e.disableScroll,m=void 0!==g&&g,b=e.disableFocus,y=void 0!==b&&b,w=e.awaitCloseAnimation,k=void 0!==w&&w,p=e.debugMode,E=void 0!==p&&p;a(this,o),this.modal=document.getElementById(t),this.config={debugMode:E,disableScroll:m,openTrigger:f,closeTrigger:v,onShow:l,onClose:d,awaitCloseAnimation:k,disableFocus:y},n.length>0&&this.registerTriggers.apply(this,s(n)),this.onClick=this.onClick.bind(this),this.onKeydown=this.onKeydown.bind(this)}return r(o,[{key:"registerTriggers",value:function(){for(var e=this,o=arguments.length,t=Array(o),i=0;i<o;i++)t[i]=arguments[i];t.forEach(function(o){o.addEventListener("click",function(){return e.showModal()})})}},{key:"showModal",value:function(){this.activeElement=document.activeElement,this.modal.setAttribute("aria-hidden","false"),this.modal.classList.add("is-open"),this.setFocusToFirstNode(),this.scrollBehaviour("disable"),this.addEventListeners(),this.config.onShow(this.modal)}},{key:"closeModal",value:function(){var e=this.modal;this.modal.setAttribute("aria-hidden","true"),this.removeEventListeners(),this.scrollBehaviour("enable"),this.activeElement.focus(),this.config.onClose(this.modal),this.config.awaitCloseAnimation?this.modal.addEventListener("animationend",function o(){e.classList.remove("is-open"),e.removeEventListener("animationend",o,!1)},!1):e.classList.remove("is-open")}},{key:"scrollBehaviour",value:function(e){if(this.config.disableScroll){var o=document.querySelector("body");switch(e){case"enable":Object.assign(o.style,{overflow:"initial",height:"initial"});break;case"disable":Object.assign(o.style,{overflow:"hidden",height:"100vh"})}}}},{key:"addEventListeners",value:function(){this.modal.addEventListener("touchstart",this.onClick),this.modal.addEventListener("click",this.onClick),document.addEventListener("keydown",this.onKeydown)}},{key:"removeEventListeners",value:function(){this.modal.removeEventListener("touchstart",this.onClick),this.modal.removeEventListener("click",this.onClick),document.removeEventListener("keydown",this.onKeydown)}},{key:"onClick",value:function(e){e.target.hasAttribute(this.config.closeTrigger)&&(this.closeModal(),e.preventDefault())}},{key:"onKeydown",value:function(e){27===e.keyCode&&this.closeModal(e),9===e.keyCode&&this.maintainFocus(e)}},{key:"getFocusableNodes",value:function(){var o=this.modal.querySelectorAll(e);return Object.keys(o).map(function(e){return o[e]})}},{key:"setFocusToFirstNode",value:function(){if(!this.config.disableFocus){var e=this.getFocusableNodes();e.length&&e[0].focus()}}},{key:"maintainFocus",value:function(e){var o=this.getFocusableNodes();if(this.modal.contains(document.activeElement)){var t=o.indexOf(document.activeElement);e.shiftKey&&0===t&&(o[o.length-1].focus(),e.preventDefault()),e.shiftKey||t!==o.length-1||(o[0].focus(),e.preventDefault())}else o[0].focus()}}]),o}(),t=null,i=function(e){if(!document.getElementById(e))return console.warn("MicroModal v0.3.1: ❗Seems like you have missed %c'"+e+"'","background-color: #f8f9fa;color: #50596c;font-weight: bold;","ID somewhere in your code. Refer example below to resolve it."),console.warn("%cExample:","background-color: #f8f9fa;color: #50596c;font-weight: bold;",'<div class="modal" id="'+e+'"></div>'),!1},n=function(e,o){if(function(e){if(e.length<=0)console.warn("MicroModal v0.3.1: ❗Please specify at least one %c'micromodal-trigger'","background-color: #f8f9fa;color: #50596c;font-weight: bold;","data attribute."),console.warn("%cExample:","background-color: #f8f9fa;color: #50596c;font-weight: bold;",'<a href="#" data-micromodal-trigger="my-modal"></a>')}(e),!o)return!0;for(var t in o)i(t);return!0},{init:function(e){var t=Object.assign({},{openTrigger:"data-micromodal-trigger"},e),i=[].concat(s(document.querySelectorAll("["+t.openTrigger+"]"))),a=function(e,o){var t=[];return e.forEach(function(e){var i=e.attributes[o].value;void 0===t[i]&&(t[i]=[]),t[i].push(e)}),t}(i,t.openTrigger);if(!0!==t.debugMode||!1!==n(i,a))for(var r in a){var l=a[r];t.targetModal=r,t.triggers=[].concat(s(l)),new o(t)}},show:function(e,n){var a=n||{};a.targetModal=e,!0===a.debugMode&&!1===i(e)||(t=new o(a)).showModal()},close:function(){t.closeModal()}}});
},{}],"yfeU":[function(require,module,exports) {
"use strict";function e(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function t(e,t){for(var i=0;i<t.length;i++){var r=t[i];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function i(e,i,r){return i&&t(e.prototype,i),r&&t(e,r),e}Object.defineProperty(exports,"__esModule",{value:!0}),exports.Chests=void 0;var r=function(){function t(i,r){e(this,t),this.len=i.slice().length,this.table=i.slice(),this.size=r}return i(t,[{key:"isClick",value:function(e,t,i,r,n,s,a){var o=[e.x,e.x+e.width,e.y,e.y+e.height];if(t>=o[0]&&t<=o[1]&&i>=o[2]&&i<=o[3]&&!0===e.isDraw){if(!0===e.isClick)return!0;e.isClick=!0,r.clearRect(e.x,e.y,e.width,e.height),e.isGold?r.drawImage(s,e.x,e.y,n,n):r.drawImage(a,e.x,e.y,n,n)}return e}},{key:"arrayChests",get:function(){for(var e=this.table,i=this.size,r=new Array,n=0;n<this.len;n++){var s=100*Math.random(),a=e[n];r.push({x:a.x,y:a.y,isClick:!1,height:i,width:i,isGold:s>=50})}return new t(r,i)}},{key:"toArray",get:function(){return this.table}}]),t}();exports.Chests=r;
},{}],"pQ8O":[function(require,module,exports) {
"use strict";function e(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function t(e,t){for(var i=0;i<t.length;i++){var r=t[i];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function i(e,i,r){return i&&t(e.prototype,i),r&&t(e,r),e}Object.defineProperty(exports,"__esModule",{value:!0}),exports.Chests=void 0;var r=function(){function t(i,r){e(this,t),this.len=i.slice().length,this.table=i.slice(),this.size=r}return i(t,[{key:"isClick",value:function(e,t,i,r,n,s,a){var o=[e.x,e.x+e.width,e.y,e.y+e.height],l=o[0],h=o[1],c=o[2],u=o[3],f=100*Math.random();if(t>=l&&t<=h&&i>=c&&i<=u&&!0===e.isDraw){if(!0===e.isClick)return!0;f>=50&&(e.isGold=!0,e.isClick=!0),r.clearRect(e.x,e.y,e.width,e.height),e.isGold?r.drawImage(s,e.x,e.y,n,n):r.drawImage(a,e.x,e.y,n,n)}return e}},{key:"arrayChests",get:function(){for(var e=this.table,i=this.size,r=new Array,n=0;n<this.len;n++){var s=e[n];r.push({x:s.x,y:s.y,isClick:!1,height:i,width:i,isGold:!1})}return new t(r,i)}},{key:"toArray",get:function(){return this.table}}]),t}();exports.Chests=r;
},{}],"wp/h":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.clearChest=exports.clickChest=exports.drawChests=exports.drawCanvas=void 0;var e=require("./functions.js"),t=a(require("../node_modules/micromodal/dist/micromodal.min.js")),r=require("./obj/chest_defined.js"),n=require("./obj/chest_random.js");function a(e){return e&&e.__esModule?e:{default:e}}var o=function(t,a,o,i,c){var s=document.createElement("canvas");s.setAttribute("id",t),s.setAttribute("width",(i+(a.length<16?60:35))*Math.sqrt(a.length)),s.setAttribute("height",(i+(a.length<16?60:35))*Math.sqrt(a.length)),document.querySelector("#body").appendChild(s);var u=s.getContext("2d");(0,e.drawTable)(u,a,i);var d="def"===c?new r.Chests(a,i):new n.Chests(a,i),l=d.arrayChests.table;return o(s,u,a,2,i,a.length,c,l,d)};exports.drawCanvas=o;var i=function(t,r,n,a,o,i){var c=new Array,s=new Array;if(r.reduce(function(e,t){!0===t.isDraw?c.push(t):s.push(t)},null),!0===i)return c.forEach(function(e){t.drawImage(n,e.x,e.y,a,a)}),r;var u=(0,e.shuffle)(s);if(c.forEach(function(e){t.drawImage(n,e.x,e.y,a,a)}),o===r.length)return r;if(0===o){var d=u[1];d.isDraw=!0,t.drawImage(n,d.x,d.y,d.width,d.height)}var l=u[0];return l.isDraw=!0,t.drawImage(n,l.x,l.y,l.width,l.height),r=c.concat(s)};exports.drawChests=i;var c=function(e,t,r,n,a,o,i,c,s){for(var u=e.pageX-r.offsetLeft,h=e.pageY-r.offsetTop,f=0;f<t.length;f++){var w=c.isClick(t[f],u,h,n,a,i,o);if(0===t.filter(function(e){return u>=e.x&&u<=e.x+e.width&&h>=e.y&&h<=e.y+e.height&&!0===e.isDraw}).length)return!1;document.querySelectorAll(".score").forEach(function(e){return e.innerHTML="Клики: ".concat(s)}),!0===w&&d(s),t.every(function(e){return!0===e.isClick})&&l(s)}};exports.clickChest=c;var s=function(e,t){t.forEach(function(t){e.clearRect(t.x,t.y,t.width,t.height)})};exports.clearChest=s;var u=function(e,r){t.default.init(),t.default.show("modal-1"),document.querySelector(".modal__title").innerHTML=r,document.querySelector(".modal__p").innerHTML="Ваш счёт: ".concat(e),document.querySelector(".modal__btn").addEventListener("click",function(){return location.reload()})},d=function(e){u(e,"Очень жаль")},l=function(e){u(e,"Поздравляем")};
},{"./functions.js":"DOJS","../node_modules/micromodal/dist/micromodal.min.js":"ECgz","./obj/chest_defined.js":"yfeU","./obj/chest_random.js":"pQ8O"}],"QcRT":[function(require,module,exports) {
"use strict";var e=require("./functions.js"),t=require("./gameEnigne.js"),n=function n(o,c,i){var s=arguments.length>3&&void 0!==arguments[3]?arguments[3]:3,d=arguments.length>4?arguments[4]:void 0,l=arguments.length>5?arguments[5]:void 0,a=arguments.length>6?arguments[6]:void 0,r=arguments.length>7?arguments[7]:void 0,u=arguments.length>8?arguments[8]:void 0,g=arguments.length>9&&void 0!==arguments[9]?arguments[9]:0,h=arguments.length>10&&void 0!==arguments[10]&&arguments[10],v=arguments.length>11&&void 0!==arguments[11]?arguments[11]:1,m=(0,e.setImg)("images/chest-close.png"),f=(0,e.setImg)("images/chest-empty.png"),k=(0,e.setImg)("images/chest-ok.png"),p=r;m.onload=function(){(0,t.drawChests)(c,p,m,d,g,h)},o.addEventListener("click",function(e){var r=(0,t.clickChest)(e,p,o,c,d,f,k,u,v);setTimeout(function(){(0,t.clearChest)(c,p)},400),g=!1===r?g:g!==l?g+1:g,v=!1===r?v:v+1,setTimeout(function(){n(o,c,i,s,d,l,a,p,u,g,!1===r,v)},500)},{once:!0})},o=function(o,c){var i=document.querySelectorAll("button");i.forEach(function(s){s.addEventListener("click",function(){var d=!0===document.querySelector("#check").checked?"def":"undef",l=(0,e.table)(s.dataset.compl,c);(0,e.disableButtons)(i),document.querySelector(".header").style.display="none",(0,t.drawCanvas)(o,l,n,c,d)})})};o("#cnv",80);
},{"./functions.js":"DOJS","./gameEnigne.js":"wp/h"}]},{},["QcRT"], null)
//# sourceMappingURL=/game.map