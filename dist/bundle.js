/*! For license information please see bundle.js.LICENSE.txt */
(()=>{var t={988:()=>{function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t(e)}function e(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,c(r.key),r)}}function n(t){var e="function"==typeof Map?new Map:void 0;return n=function(t){if(null===t||!function(t){try{return-1!==Function.toString.call(t).indexOf("[native code]")}catch(e){return"function"==typeof t}}(t))return t;if("function"!=typeof t)throw new TypeError("Super expression must either be null or a function");if(void 0!==e){if(e.has(t))return e.get(t);e.set(t,n)}function n(){return function(t,e,n){if(r())return Reflect.construct.apply(null,arguments);var i=[null];i.push.apply(i,e);var a=new(t.bind.apply(t,i));return n&&o(a,n.prototype),a}(t,arguments,i(this).constructor)}return n.prototype=Object.create(t.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),o(n,t)},n(t)}function r(){try{var t=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(t){}return(r=function(){return!!t})()}function o(t,e){return o=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},o(t,e)}function i(t){return i=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},i(t)}function a(t,e,n){return(e=c(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function c(e){var n=function(e,n){if("object"!=t(e)||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var o=r.call(e,"string");if("object"!=t(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==t(n)?n:n+""}var u=function(n){function c(){var e,n,o,u;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,c),a((n=this,o=i(o=c),e=function(e,n){if(n&&("object"===t(n)||"function"==typeof n))return n;if(void 0!==n)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(e)}(n,r()?Reflect.construct(o,u||[],i(n).constructor):o.apply(n,u))),"_shadowRoot",null),a(e,"_style",null),e._shadowRoot=e.attachShadow({mode:"open"}),e._style=document.createElement("style"),e}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&o(t,e)}(c,n),u=c,(s=[{key:"_updateStyle",value:function(){this._style.textContent="\n        :host {\n          display: block;\n          width: 100%;\n          \n          color: green;\n          box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.2);\n        }\n  \n        div {\n          padding: 24px 20px;\n        }\n  \n        .brand-name {\n          margin: 0;\n          text-align: center;\n          font-size: 2em;\n        }\n      "}},{key:"_emptyContent",value:function(){this._shadowRoot.innerHTML=""}},{key:"connectedCallback",value:function(){this.render()}},{key:"render",value:function(){this._emptyContent(),this._updateStyle(),this._shadowRoot.appendChild(this._style),this._shadowRoot.innerHTML+='      \n        <div>\n          <h1 class="brand-name">Farhan Notes App</h1>\n        </div>\n      '}}])&&e(u.prototype,s),Object.defineProperty(u,"prototype",{writable:!1}),u;var u,s}(n(HTMLElement));customElements.define("app-bar",u)},980:()=>{function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t(e)}function e(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,c(r.key),r)}}function n(t){var e="function"==typeof Map?new Map:void 0;return n=function(t){if(null===t||!function(t){try{return-1!==Function.toString.call(t).indexOf("[native code]")}catch(e){return"function"==typeof t}}(t))return t;if("function"!=typeof t)throw new TypeError("Super expression must either be null or a function");if(void 0!==e){if(e.has(t))return e.get(t);e.set(t,n)}function n(){return function(t,e,n){if(r())return Reflect.construct.apply(null,arguments);var i=[null];i.push.apply(i,e);var a=new(t.bind.apply(t,i));return n&&o(a,n.prototype),a}(t,arguments,i(this).constructor)}return n.prototype=Object.create(t.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),o(n,t)},n(t)}function r(){try{var t=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(t){}return(r=function(){return!!t})()}function o(t,e){return o=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},o(t,e)}function i(t){return i=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},i(t)}function a(t,e,n){return(e=c(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function c(e){var n=function(e,n){if("object"!=t(e)||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var o=r.call(e,"string");if("object"!=t(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==t(n)?n:n+""}var u=function(n){function c(){var e,n,o,u;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,c),a((n=this,o=i(o=c),e=function(e,n){if(n&&("object"===t(n)||"function"==typeof n))return n;if(void 0!==n)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(e)}(n,r()?Reflect.construct(o,u||[],i(n).constructor):o.apply(n,u))),"_shadowRoot",null),a(e,"_style",null),e._shadowRoot=e.attachShadow({mode:"open"}),e._style=document.createElement("style"),e}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&o(t,e)}(c,n),u=c,(s=[{key:"_updateStyle",value:function(){this._style.textContent="\n        :host {\n          display: block;\n        }\n  \n        div {\n          padding: 4px;\n  \n          text-align: center;\n        }\n      "}},{key:"_emptyContent",value:function(){this._shadowRoot.innerHTML=""}},{key:"connectedCallback",value:function(){this.render()}},{key:"render",value:function(){this._emptyContent(),this._updateStyle(),this._shadowRoot.appendChild(this._style),this._shadowRoot.innerHTML+="      \n        <div>\n          Farhan Putra Bunga Mayang Notes App &copy; 2024\n        </div>\n      "}}])&&e(u.prototype,s),Object.defineProperty(u,"prototype",{writable:!1}),u;var u,s}(n(HTMLElement));customElements.define("footer-bar",u)},746:()=>{function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t(e)}function e(t){var i="function"==typeof Map?new Map:void 0;return e=function(t){if(null===t||!function(t){try{return-1!==Function.toString.call(t).indexOf("[native code]")}catch(e){return"function"==typeof t}}(t))return t;if("function"!=typeof t)throw new TypeError("Super expression must either be null or a function");if(void 0!==i){if(i.has(t))return i.get(t);i.set(t,e)}function e(){return function(t,e,o){if(n())return Reflect.construct.apply(null,arguments);var i=[null];i.push.apply(i,e);var a=new(t.bind.apply(t,i));return o&&r(a,o.prototype),a}(t,arguments,o(this).constructor)}return e.prototype=Object.create(t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),r(e,t)},e(t)}function n(){try{var t=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(t){}return(n=function(){return!!t})()}function r(t,e){return r=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},r(t,e)}function o(t){return o=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},o(t)}var i=function(e){function i(){var e;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,i);var r,a,c,u=(r=this,a=i,a=o(a),e=function(e,n){if(n&&("object"===t(n)||"function"==typeof n))return n;if(void 0!==n)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(e)}(r,n()?Reflect.construct(a,c||[],o(r).constructor):a.apply(r,c))).attachShadow({mode:"open"}),s=e.getAttribute("label"),l=e.getAttribute("id");return u.innerHTML='\n      <style>\n        label {\n          display: block;\n          margin-bottom: 5px;\n        }\n        input {\n          padding: 5px;\n          width: 100%;\n          box-sizing: border-box;\n        }\n      </style>\n      <label for="'.concat(l,'">').concat(s,'</label>\n      <input type="text" id="').concat(l,'" />\n    '),e}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&r(t,e)}(i,e),a=i,Object.defineProperty(a,"prototype",{writable:!1}),a;var a}(e(HTMLElement));customElements.define("input-field",i)},365:(t,e,n)=>{"use strict";n.d(e,{A:()=>c});var r=n(601),o=n.n(r),i=n(314),a=n.n(i)()(o());a.push([t.id,'/* CSS Grid layout */\n.notes-container {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));\n  gap: 20px;\n  padding: 20px;\n}\n\n/* Custom element styling */\n.note {\n  border: 1px solid #ed0000;\n  padding: 10px;\n  border-radius: 5px;\n}\n\n/* Form styling */\nform {\n  display: flex;\n  flex-direction: column;\n  margin-bottom: 20px;\n}\nform input,\nform textarea {\n  margin-bottom: 10px;\n  padding: 5px;\n}\n\n/* Optional: Realtime validation */\ninput:invalid {\n  border: 1px solid red;\n}\n\n/* Optional: Attractive design */\nbody {\n  font-family: Arial, sans-serif;\n  background-color: #f4f4f4;\n  margin: 0;\n  min-height: 100vh;\n  display: flex;\n  flex-direction: column;\n}\n.note {\n  background-color: #fff;\n}\n\n/* Optional: Custom attribute */\n.note[important="true"] {\n  border-color: red;\n}\n\n/* Custom element styling */\n.app-bar {\n  background-color: #333;\n  color: rgb(252, 252, 252);\n  padding: 10px;\n  text-align: center;\n}\n\n/* Custom element styling */\n.input-field {\n  margin-bottom: 10px;\n}\n\n/* Footer styling */\nfooter {\n  background-color: #333;\n  color: rgb(201, 0, 0);\n  text-align: center;\n  padding: 10px 0;\n  margin-top: auto;\n}\n\n.loading-indicator {\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  width: 100px;\n  height: 100px;\n  border: 5px solid #FFF;\n  border-bottom-color: #FF3D00;\n  border-radius: 50%;\n  display: none; /* Sembunyikan secara default */\n  box-sizing: border-box;\n  animation: rotation 1s linear infinite;\n}\n\n@keyframes rotation {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n',""]);const c=a},314:t=>{"use strict";t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n="",r=void 0!==e[5];return e[4]&&(n+="@supports (".concat(e[4],") {")),e[2]&&(n+="@media ".concat(e[2]," {")),r&&(n+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),n+=t(e),r&&(n+="}"),e[2]&&(n+="}"),e[4]&&(n+="}"),n})).join("")},e.i=function(t,n,r,o,i){"string"==typeof t&&(t=[[null,t,void 0]]);var a={};if(r)for(var c=0;c<this.length;c++){var u=this[c][0];null!=u&&(a[u]=!0)}for(var s=0;s<t.length;s++){var l=[].concat(t[s]);r&&a[l[0]]||(void 0!==i&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=i),n&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=n):l[2]=n),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),e.push(l))}},e}},601:t=>{"use strict";t.exports=function(t){return t[1]}},72:t=>{"use strict";var e=[];function n(t){for(var n=-1,r=0;r<e.length;r++)if(e[r].identifier===t){n=r;break}return n}function r(t,r){for(var i={},a=[],c=0;c<t.length;c++){var u=t[c],s=r.base?u[0]+r.base:u[0],l=i[s]||0,f="".concat(s," ").concat(l);i[s]=l+1;var p=n(f),d={css:u[1],media:u[2],sourceMap:u[3],supports:u[4],layer:u[5]};if(-1!==p)e[p].references++,e[p].updater(d);else{var y=o(d,r);r.byIndex=c,e.splice(c,0,{identifier:f,updater:y,references:1})}a.push(f)}return a}function o(t,e){var n=e.domAPI(e);return n.update(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap&&e.supports===t.supports&&e.layer===t.layer)return;n.update(t=e)}else n.remove()}}t.exports=function(t,o){var i=r(t=t||[],o=o||{});return function(t){t=t||[];for(var a=0;a<i.length;a++){var c=n(i[a]);e[c].references--}for(var u=r(t,o),s=0;s<i.length;s++){var l=n(i[s]);0===e[l].references&&(e[l].updater(),e.splice(l,1))}i=u}}},659:t=>{"use strict";var e={};t.exports=function(t,n){var r=function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}e[t]=n}return e[t]}(t);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},540:t=>{"use strict";t.exports=function(t){var e=document.createElement("style");return t.setAttributes(e,t.attributes),t.insert(e,t.options),e}},56:(t,e,n)=>{"use strict";t.exports=function(t){var e=n.nc;e&&t.setAttribute("nonce",e)}},825:t=>{"use strict";t.exports=function(t){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=t.insertStyleElement(t);return{update:function(n){!function(t,e,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var o=void 0!==n.layer;o&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,o&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var i=n.sourceMap;i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleTagTransform(r,t,e.options)}(e,t,n)},remove:function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(e)}}}},113:t=>{"use strict";t.exports=function(t,e){if(e.styleSheet)e.styleSheet.cssText=t;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(t))}}}},e={};function n(r){var o=e[r];if(void 0!==o)return o.exports;var i=e[r]={id:r,exports:{}};return t[r](i,i.exports,n),i.exports}n.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return n.d(e,{a:e}),e},n.d=(t,e)=>{for(var r in e)n.o(e,r)&&!n.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})},n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),n.nc=void 0,(()=>{"use strict";n(988),n(980),n(746);var t=n(72),e=n.n(t),r=n(825),o=n.n(r),i=n(659),a=n.n(i),c=n(56),u=n.n(c),s=n(540),l=n.n(s),f=n(113),p=n.n(f),d=n(365),y={};function h(t){return h="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},h(t)}function b(){b=function(){return e};var t,e={},n=Object.prototype,r=n.hasOwnProperty,o=Object.defineProperty||function(t,e,n){t[e]=n.value},i="function"==typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",c=i.asyncIterator||"@@asyncIterator",u=i.toStringTag||"@@toStringTag";function s(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{s({},"")}catch(t){s=function(t,e,n){return t[e]=n}}function l(t,e,n,r){var i=e&&e.prototype instanceof g?e:g,a=Object.create(i.prototype),c=new A(r||[]);return o(a,"_invoke",{value:k(t,n,c)}),a}function f(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(t){return{type:"throw",arg:t}}}e.wrap=l;var p="suspendedStart",d="suspendedYield",y="executing",v="completed",m={};function g(){}function w(){}function x(){}var O={};s(O,a,(function(){return this}));var E=Object.getPrototypeOf,j=E&&E(E(R([])));j&&j!==n&&r.call(j,a)&&(O=j);var _=x.prototype=g.prototype=Object.create(O);function S(t){["next","throw","return"].forEach((function(e){s(t,e,(function(t){return this._invoke(e,t)}))}))}function T(t,e){function n(o,i,a,c){var u=f(t[o],t,i);if("throw"!==u.type){var s=u.arg,l=s.value;return l&&"object"==h(l)&&r.call(l,"__await")?e.resolve(l.__await).then((function(t){n("next",t,a,c)}),(function(t){n("throw",t,a,c)})):e.resolve(l).then((function(t){s.value=t,a(s)}),(function(t){return n("throw",t,a,c)}))}c(u.arg)}var i;o(this,"_invoke",{value:function(t,r){function o(){return new e((function(e,o){n(t,r,e,o)}))}return i=i?i.then(o,o):o()}})}function k(e,n,r){var o=p;return function(i,a){if(o===y)throw Error("Generator is already running");if(o===v){if("throw"===i)throw a;return{value:t,done:!0}}for(r.method=i,r.arg=a;;){var c=r.delegate;if(c){var u=P(c,r);if(u){if(u===m)continue;return u}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(o===p)throw o=v,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);o=y;var s=f(e,n,r);if("normal"===s.type){if(o=r.done?v:d,s.arg===m)continue;return{value:s.arg,done:r.done}}"throw"===s.type&&(o=v,r.method="throw",r.arg=s.arg)}}}function P(e,n){var r=n.method,o=e.iterator[r];if(o===t)return n.delegate=null,"throw"===r&&e.iterator.return&&(n.method="return",n.arg=t,P(e,n),"throw"===n.method)||"return"!==r&&(n.method="throw",n.arg=new TypeError("The iterator does not provide a '"+r+"' method")),m;var i=f(o,e.iterator,n.arg);if("throw"===i.type)return n.method="throw",n.arg=i.arg,n.delegate=null,m;var a=i.arg;return a?a.done?(n[e.resultName]=a.value,n.next=e.nextLoc,"return"!==n.method&&(n.method="next",n.arg=t),n.delegate=null,m):a:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,m)}function L(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function C(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function A(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(L,this),this.reset(!0)}function R(e){if(e||""===e){var n=e[a];if(n)return n.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var o=-1,i=function n(){for(;++o<e.length;)if(r.call(e,o))return n.value=e[o],n.done=!1,n;return n.value=t,n.done=!0,n};return i.next=i}}throw new TypeError(h(e)+" is not iterable")}return w.prototype=x,o(_,"constructor",{value:x,configurable:!0}),o(x,"constructor",{value:w,configurable:!0}),w.displayName=s(x,u,"GeneratorFunction"),e.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===w||"GeneratorFunction"===(e.displayName||e.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,x):(t.__proto__=x,s(t,u,"GeneratorFunction")),t.prototype=Object.create(_),t},e.awrap=function(t){return{__await:t}},S(T.prototype),s(T.prototype,c,(function(){return this})),e.AsyncIterator=T,e.async=function(t,n,r,o,i){void 0===i&&(i=Promise);var a=new T(l(t,n,r,o),i);return e.isGeneratorFunction(n)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},S(_),s(_,u,"Generator"),s(_,a,(function(){return this})),s(_,"toString",(function(){return"[object Generator]"})),e.keys=function(t){var e=Object(t),n=[];for(var r in e)n.push(r);return n.reverse(),function t(){for(;n.length;){var r=n.pop();if(r in e)return t.value=r,t.done=!1,t}return t.done=!0,t}},e.values=R,A.prototype={constructor:A,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(C),!e)for(var n in this)"t"===n.charAt(0)&&r.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=t)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var n=this;function o(r,o){return c.type="throw",c.arg=e,n.next=r,o&&(n.method="next",n.arg=t),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],c=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var u=r.call(a,"catchLoc"),s=r.call(a,"finallyLoc");if(u&&s){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!s)throw Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,m):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),m},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),C(n),m}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var o=r.arg;C(n)}return o}}throw Error("illegal catch attempt")},delegateYield:function(e,n,r){return this.delegate={iterator:R(e),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=t),m}},e}function v(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,m(r.key),r)}}function m(t){var e=function(t,e){if("object"!=h(t)||!t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!=h(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"==h(e)?e:e+""}function g(t){var e="function"==typeof Map?new Map:void 0;return g=function(t){if(null===t||!function(t){try{return-1!==Function.toString.call(t).indexOf("[native code]")}catch(e){return"function"==typeof t}}(t))return t;if("function"!=typeof t)throw new TypeError("Super expression must either be null or a function");if(void 0!==e){if(e.has(t))return e.get(t);e.set(t,n)}function n(){return function(t,e,n){if(w())return Reflect.construct.apply(null,arguments);var r=[null];r.push.apply(r,e);var o=new(t.bind.apply(t,r));return n&&x(o,n.prototype),o}(t,arguments,O(this).constructor)}return n.prototype=Object.create(t.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),x(n,t)},g(t)}function w(){try{var t=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(t){}return(w=function(){return!!t})()}function x(t,e){return x=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},x(t,e)}function O(t){return O=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},O(t)}function E(t,e,n,r,o,i,a){try{var c=t[i](a),u=c.value}catch(t){return void n(t)}c.done?e(u):Promise.resolve(u).then(r,o)}function j(t){return function(){var e=this,n=arguments;return new Promise((function(r,o){var i=t.apply(e,n);function a(t){E(i,r,o,a,c,"next",t)}function c(t){E(i,r,o,a,c,"throw",t)}a(void 0)}))}}y.styleTagTransform=p(),y.setAttributes=u(),y.insert=a().bind(null,"head"),y.domAPI=o(),y.insertStyleElement=l(),e()(d.A,y),d.A&&d.A.locals&&d.A.locals;var _="https://notes-api.dicoding.dev/v2";function S(t,e){return T.apply(this,arguments)}function T(){return(T=j(b().mark((function t(e,n){var r,o;return b().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,A(),t.next=4,fetch("https://notes-api.dicoding.dev/v2/notes",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({title:e,body:n})});case 4:if((r=t.sent).ok){t.next=7;break}throw new Error("Error creating note: ".concat(r.statusText));case 7:return t.next=9,r.json();case 9:return o=t.sent,console.log("Status:",o.status),console.log("Message:",o.message),loadingIndicator.style.display="none",t.abrupt("return",o.data);case 16:throw t.prev=16,t.t0=t.catch(0),console.error("Error creating note:",t.t0),t.t0;case 20:case"end":return t.stop()}}),t,null,[[0,16]])})))).apply(this,arguments)}function k(t){return P.apply(this,arguments)}function P(){return(P=j(b().mark((function t(e){var n,r,o;return b().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,A(),n="".concat(_,"/notes/").concat(e,"/archive"),t.next=5,fetch(n,{method:"POST"});case 5:if((r=t.sent).ok){t.next=8;break}throw new Error("Error archiving note: ".concat(r.statusText));case 8:return t.next=10,r.json();case 10:return o=t.sent,console.log("Status:",o.status),console.log("Message:",o.message),loadingIndicator.style.display="none",t.abrupt("return",o);case 17:throw t.prev=17,t.t0=t.catch(0),console.error("Error archiving note:",t.t0),t.t0;case 21:case"end":return t.stop()}}),t,null,[[0,17]])})))).apply(this,arguments)}function L(t){return C.apply(this,arguments)}function C(){return(C=j(b().mark((function t(e){var n,r,o;return b().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,A(),n="".concat(_,"/notes/").concat(e),t.next=5,fetch(n,{method:"DELETE"});case 5:if((r=t.sent).ok){t.next=8;break}throw new Error("Error deleting note: ".concat(r.statusText));case 8:return t.next=10,r.json();case 10:return o=t.sent,console.log("Status:",o.status),console.log("Message:",o.message),loadingIndicator.style.display="none",t.abrupt("return",o);case 17:throw t.prev=17,t.t0=t.catch(0),console.error("Error deleting note:",t.t0),t.t0;case 21:case"end":return t.stop()}}),t,null,[[0,17]])})))).apply(this,arguments)}function A(){document.getElementById("loading-indicator").style.display="block"}var R=function(t){function e(){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),t=this,r=arguments,n=O(n=e),function(t,e){if(e&&("object"===h(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(t,w()?Reflect.construct(n,r||[],O(t).constructor):n.apply(t,r));var t,n,r}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&x(t,e)}(e,t),n=e,r=[{key:"connectedCallback",value:function(){this.render(),this.attachEventListeners()}},{key:"render",value:function(){var t=document.createElement("template");t.innerHTML='\n    <style>\n    .notes-container {\n      display: flex;\n      flex-wrap: wrap;\n      gap: 20px;\n    }\n    \n    .note {\n      flex: 1 0 calc(33.33% - 20px);\n      border: 1px solid #ccc;\n      border-radius: 8px;\n      overflow: hidden;\n      background-color: #fff;\n      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);\n    }\n    \n    .note-header {\n      padding: 20px;\n      background-color: #4CAF50;\n      color: #fff;\n      font-weight: bold;\n      border-bottom: 1px solid #ccc;\n      border-radius: 8px 8px 0 0;\n    }\n    \n    .note-body {\n      padding: 20px;\n    }\n    \n    .action-buttons {\n      display: flex;\n      justify-content: space-between;\n      margin-top: 20px;\n    }\n    \n    .action-buttons button {\n      background-color: #1976D2;\n      color: white;\n      border: none;\n      border-radius: 4px;\n      padding: 8px 16px;\n      cursor: pointer;\n      transition: background-color 0.3s ease;\n    }\n    \n    .action-buttons button:hover {\n      background-color: #0D47A1;\n    }\n</style>\n\n      <div class="note">\n        <h2>'.concat(this.getAttribute("title"),"</h2>\n        <p>").concat(this.getAttribute("body"),'</p>\n        <div class="action-buttons">\n          <button class="archive-button">Archive</button>\n          <button class="delete-button">Delete</button>\n        </div>\n      </div>\n    '),this.attachShadow({mode:"open"}),this.shadowRoot.appendChild(t.content.cloneNode(!0))}},{key:"attachEventListeners",value:function(){var t=this;this.shadowRoot.querySelector(".action-buttons").addEventListener("click",function(){var e=j(b().mark((function e(n){var r;return b().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=t.getAttribute("id"),!n.target.classList.contains("archive-button")){e.next=14;break}return e.prev=2,e.next=5,k(r);case 5:console.log("Note archived successfully."),t.remove(),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(2),console.error("Error archiving note:",e.t0);case 12:e.next=25;break;case 14:if(!n.target.classList.contains("delete-button")){e.next=25;break}return e.prev=15,e.next=18,L(r);case 18:console.log("Note deleted successfully."),t.remove(),e.next=25;break;case 22:e.prev=22,e.t1=e.catch(15),console.error("Error deleting note:",e.t1);case 25:case"end":return e.stop()}}),e,null,[[2,9],[15,22]])})));return function(t){return e.apply(this,arguments)}}())}}],r&&v(n.prototype,r),Object.defineProperty(n,"prototype",{writable:!1}),n;var n,r}(g(HTMLElement));customElements.define("note-app",R),document.getElementById("action-button").addEventListener("click",function(){var t=j(b().mark((function t(e){var n,r,o,i,a;return b().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.preventDefault(),n=document.getElementById("noteTitle").value,r=document.getElementById("noteBody").value,o=document.getElementById("notes-list"),t.prev=4,t.next=7,S(n,r);case 7:i=t.sent,(a=document.createElement("note-app")).setAttribute("title",i.title),a.setAttribute("body",i.body),o.appendChild(a),document.getElementById("noteTitle").value="",document.getElementById("noteBody").value="",t.next=19;break;case 16:t.prev=16,t.t0=t.catch(4),console.error("Error creating note:",t.t0);case 19:case"end":return t.stop()}}),t,null,[[4,16]])})));return function(e){return t.apply(this,arguments)}}());var M;M=document.getElementById("notes-list"),[{id:"notes-jT-jjsyz61J8XKiI",title:"Welcome to Notes, Dimas!",body:"Welcome to Notes! This is your first note. You can archive it, delete it, or create new ones.",createdAt:"2022-07-28T10:03:12.594Z",archived:!1},{id:"notes-aB-cdefg12345",title:"Meeting Agenda",body:"Discuss project updates and assign tasks for the upcoming week.",createdAt:"2022-08-05T15:30:00.000Z",archived:!1},{id:"notes-XyZ-789012345",title:"Shopping List",body:"Milk, eggs, bread, fruits, and vegetables.",createdAt:"2022-08-10T08:45:23.120Z",archived:!1},{id:"notes-QwErTyUiOp",title:"Workout Routine",body:"Monday: Cardio, Tuesday: Upper body, Wednesday: Rest, Thursday: Lower body, Friday: Cardio.",createdAt:"2022-08-25T09:15:17.890Z",archived:!1},{id:"notes-abcdef-987654",title:"Book Recommendations",body:"1. 'The Alchemist' by Paulo Coelho\n2. '1984' by George Orwell\n3. 'To Kill a Mockingbird' by Harper Lee",createdAt:"2022-09-01T14:20:05.321Z",archived:!1},{id:"notes-zyxwv-54321",title:"Daily Reflections",body:"Write down three positive things that happened today and one thing to improve tomorrow.",createdAt:"2022-09-07T20:40:30.150Z",archived:!1},{id:"notes-poiuyt-987654",title:"Travel Bucket List",body:"1. Paris, France\n2. Kyoto, Japan\n3. Santorini, Greece\n4. New York City, USA",createdAt:"2022-09-15T11:55:44.678Z",archived:!1},{id:"notes-asdfgh-123456",title:"Coding Projects",body:"1. Build a personal website\n2. Create a mobile app\n3. Contribute to an open-source project",createdAt:"2022-09-20T17:10:12.987Z",archived:!1}].forEach((function(t){var e=document.createElement("note-app");e.setAttribute("title",t.title),e.setAttribute("body",t.body),M.appendChild(e)}))})()})();