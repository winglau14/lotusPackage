!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define("LotusPicker",[],e):"object"==typeof exports?exports.LotusPicker=e():t.LotusPicker=e()}(this,function(){return function(t){function e(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,e),o.l=!0,o.exports}var n={};return e.m=t,e.c=n,e.i=function(t){return t},e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:r})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=38)}([function(t,e){var n=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=n)},function(t,e,n){var r=n(31)("wks"),o=n(35),i=n(0).Symbol,c="function"==typeof i;(t.exports=function(t){return r[t]||(r[t]=c&&i[t]||(c?i:o)("Symbol."+t))}).store=r},function(t,e,n){var r=n(6);t.exports=function(t){if(!r(t))throw TypeError(t+" is not an object!");return t}},function(t,e){var n=t.exports={version:"2.5.3"};"number"==typeof __e&&(__e=n)},function(t,e,n){var r=n(13),o=n(30);t.exports=n(5)?function(t,e,n){return r.f(t,e,o(1,n))}:function(t,e,n){return t[e]=n,t}},function(t,e,n){t.exports=!n(24)(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},function(t,e){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,e){t.exports={}},function(t,e){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},function(t,e){var n={}.toString;t.exports=function(t){return n.call(t).slice(8,-1)}},function(t,e,n){var r=n(8);t.exports=function(t,e,n){if(r(t),void 0===e)return t;switch(n){case 1:return function(n){return t.call(e,n)};case 2:return function(n,r){return t.call(e,n,r)};case 3:return function(n,r,o){return t.call(e,n,r,o)}}return function(){return t.apply(e,arguments)}}},function(t,e,n){var r=n(0),o=n(3),i=n(10),c=n(4),u=function(t,e,n){var s,a,f,l=t&u.F,p=t&u.G,h=t&u.S,v=t&u.P,d=t&u.B,y=t&u.W,m=p?o:o[e]||(o[e]={}),x=m.prototype,g=p?r:h?r[e]:(r[e]||{}).prototype;p&&(n=e);for(s in n)(a=!l&&g&&void 0!==g[s])&&s in m||(f=a?g[s]:n[s],m[s]=p&&"function"!=typeof g[s]?n[s]:d&&a?i(f,r):y&&g[s]==f?function(t){var e=function(e,n,r){if(this instanceof t){switch(arguments.length){case 0:return new t;case 1:return new t(e);case 2:return new t(e,n)}return new t(e,n,r)}return t.apply(this,arguments)};return e.prototype=t.prototype,e}(f):v&&"function"==typeof f?i(Function.call,f):f,v&&((m.virtual||(m.virtual={}))[s]=f,t&u.R&&x&&!x[s]&&c(x,s,f)))};u.F=1,u.G=2,u.S=4,u.P=8,u.B=16,u.W=32,u.U=64,u.R=128,t.exports=u},function(t,e){var n={}.hasOwnProperty;t.exports=function(t,e){return n.call(t,e)}},function(t,e,n){var r=n(2),o=n(46),i=n(66),c=Object.defineProperty;e.f=n(5)?Object.defineProperty:function(t,e,n){if(r(t),e=i(e,!0),r(n),o)try{return c(t,e,n)}catch(t){}if("get"in n||"set"in n)throw TypeError("Accessors not supported!");return"value"in n&&(t[e]=n.value),t}},function(t,e){t.exports=function(t){if(void 0==t)throw TypeError("Can't call method on  "+t);return t}},function(t,e,n){var r=n(6),o=n(0).document,i=r(o)&&r(o.createElement);t.exports=function(t){return i?o.createElement(t):{}}},function(t,e,n){"use strict";function r(t){var e,n;this.promise=new t(function(t,r){if(void 0!==e||void 0!==n)throw TypeError("Bad Promise constructor");e=t,n=r}),this.resolve=o(e),this.reject=o(n)}var o=n(8);t.exports.f=function(t){return new r(t)}},function(t,e,n){var r=n(13).f,o=n(12),i=n(1)("toStringTag");t.exports=function(t,e,n){t&&!o(t=n?t:t.prototype,i)&&r(t,i,{configurable:!0,value:e})}},function(t,e,n){var r=n(31)("keys"),o=n(35);t.exports=function(t){return r[t]||(r[t]=o(t))}},function(t,e){var n=Math.ceil,r=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?r:n)(t)}},function(t,e,n){var r=n(48),o=n(14);t.exports=function(t){return r(o(t))}},function(t,e,n){t.exports={default:n(41),__esModule:!0}},function(t,e,n){var r=n(9),o=n(1)("toStringTag"),i="Arguments"==r(function(){return arguments}()),c=function(t,e){try{return t[e]}catch(t){}};t.exports=function(t){var e,n,u;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(n=c(e=Object(t),o))?n:i?r(e):"Object"==(u=r(e))&&"function"==typeof e.callee?"Arguments":u}},function(t,e){t.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},function(t,e){t.exports=function(t){try{return!!t()}catch(t){return!0}}},function(t,e,n){var r=n(0).document;t.exports=r&&r.documentElement},function(t,e,n){"use strict";var r=n(27),o=n(11),i=n(61),c=n(4),u=n(12),s=n(7),a=n(51),f=n(17),l=n(57),p=n(1)("iterator"),h=!([].keys&&"next"in[].keys()),v=function(){return this};t.exports=function(t,e,n,d,y,m,x){a(n,e,d);var g,_,w,b=function(t){if(!h&&t in L)return L[t];switch(t){case"keys":case"values":return function(){return new n(this,t)}}return function(){return new n(this,t)}},k=e+" Iterator",P="values"==y,S=!1,L=t.prototype,j=L[p]||L["@@iterator"]||y&&L[y],O=!h&&j||b(y),T=y?P?b("entries"):O:void 0,E="Array"==e?L.entries||j:j;if(E&&(w=l(E.call(new t)))!==Object.prototype&&w.next&&(f(w,k,!0),r||u(w,p)||c(w,p,v)),P&&j&&"values"!==j.name&&(S=!0,O=function(){return j.call(this)}),r&&!x||!h&&!S&&L[p]||c(L,p,O),s[e]=O,s[k]=v,y)if(g={values:P?O:b("values"),keys:m?O:b("keys"),entries:T},x)for(_ in g)_ in L||i(L,_,g[_]);else o(o.P+o.F*(h||S),e,g);return g}},function(t,e){t.exports=!0},function(t,e){t.exports=function(t){try{return{e:!1,v:t()}}catch(t){return{e:!0,v:t}}}},function(t,e,n){var r=n(2),o=n(6),i=n(16);t.exports=function(t,e){if(r(t),o(e)&&e.constructor===t)return e;var n=i.f(t);return(0,n.resolve)(e),n.promise}},function(t,e){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},function(t,e,n){var r=n(0),o=r["__core-js_shared__"]||(r["__core-js_shared__"]={});t.exports=function(t){return o[t]||(o[t]={})}},function(t,e,n){var r=n(2),o=n(8),i=n(1)("species");t.exports=function(t,e){var n,c=r(t).constructor;return void 0===c||void 0==(n=r(c)[i])?e:o(n)}},function(t,e,n){var r,o,i,c=n(10),u=n(47),s=n(25),a=n(15),f=n(0),l=f.process,p=f.setImmediate,h=f.clearImmediate,v=f.MessageChannel,d=f.Dispatch,y=0,m={},x=function(){var t=+this;if(m.hasOwnProperty(t)){var e=m[t];delete m[t],e()}},g=function(t){x.call(t.data)};p&&h||(p=function(t){for(var e=[],n=1;arguments.length>n;)e.push(arguments[n++]);return m[++y]=function(){u("function"==typeof t?t:Function(t),e)},r(y),y},h=function(t){delete m[t]},"process"==n(9)(l)?r=function(t){l.nextTick(c(x,t,1))}:d&&d.now?r=function(t){d.now(c(x,t,1))}:v?(o=new v,i=o.port2,o.port1.onmessage=g,r=c(i.postMessage,i,1)):f.addEventListener&&"function"==typeof postMessage&&!f.importScripts?(r=function(t){f.postMessage(t+"","*")},f.addEventListener("message",g,!1)):r="onreadystatechange"in a("script")?function(t){s.appendChild(a("script")).onreadystatechange=function(){s.removeChild(this),x.call(t)}}:function(t){setTimeout(c(x,t,1),0)}),t.exports={set:p,clear:h}},function(t,e,n){var r=n(19),o=Math.min;t.exports=function(t){return t>0?o(r(t),9007199254740991):0}},function(t,e){var n=0,r=Math.random();t.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++n+r).toString(36))}},function(t,e,n){n(75);var r=n(78)(n(37),n(79),null,null);t.exports=r.exports},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(21),o=n.n(r),i=n(40),c=n.n(i),u=n(39),s=n.n(u);e.default={name:"lotus-picker",props:["lotusPickerData","flag","title"],data:function(){return{sy:0,my:0,ey:0,initY:0,itemClientH:0,result:[],status:!1}},computed:{changeStatus:function(){this.status=this._props.flag.isShow,this.status&&this.initPicker()}},components:{},methods:{touchStart:function(t,e){e.preventDefault(),this.sy=e.touches[0].pageY;var n=this.getTransformVal("#lotus-picker-flex-item"+t);this.initY=parseInt(n[1])},touchMove:function(t,e,n){var r=this;return s()(c.a.mark(function o(){var i;return c.a.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:n.preventDefault(),r.my=n.touches[0].pageY,i=r.my-r.sy,r.setTransformVal("#lotus-picker-flex-item"+e,i+r.initY,r.itemClientH*t.values.length,400,1);case 4:case"end":return o.stop()}},o,r)}))()},touchEnd:function(t,e){var n=this;return s()(c.a.mark(function r(){var o,i,u,s,a,f,l;return c.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:o=n.getTransformVal("#lotus-picker-flex-item"+e),i=document.querySelector("#lotus-picker-flex-item"+e),n.initY=parseInt(o[1]),u=(parseInt(o[1])+n.itemClientH/2)/n.itemClientH,s=Math.floor(u),n.initY>=i.offsetTop&&n.my-n.sy>0?(a=n.itemClientH,document.querySelector("#lotus-picker-flex-item"+e).style.cssText="transform:translate3d(0px,"+a+"px,0px);height:"+n.itemClientH*t.values.length+"px;transition:all 500ms cubic-bezier(0.1, 0.57, 0.1, 1)"):Math.abs(parseInt(o[1]))>=i.scrollHeight-2*n.itemClientH&&n.my-n.sy<0?(f=i.scrollHeight-2*n.itemClientH,n.setTransformVal("#lotus-picker-flex-item"+e,-f,n.itemClientH*t.values.length,500,1)):(l=(s+1)*n.itemClientH-n.itemClientH,n.setTransformVal("#lotus-picker-flex-item"+e,l,n.itemClientH*t.values.length,500,1));case 6:case"end":return r.stop()}},r,n)}))()},getTransformVal:function(t){var e=document.querySelector(t),n=e.style.webkitTransform||e.style.transform,r=/\(.*\)/;return n=n.match(r)[0].replace(/\(|\)/g,""),n.split(",")},setTransformVal:function(t,e,n,r,o){document.querySelector(t).style.cssText=o?"transform:translate3d(0px,"+e+"px,0px);height:"+n+"px;transition:all "+(r||500)+"ms cubic-bezier(0.1, 0.57, 0.1, 1);":"transform:translate3d(0px,"+e+"px,0px);height:"+n+"px;transition:none;"},setPickerShow:function(t,e,n){e=0===e?0:-e;var r=e*this.itemClientH+this.itemClientH;this.setTransformVal("#lotus-picker-flex-item"+t,r,this.itemClientH*n.values.length)},getCurNum:function(t,e,n){var r=this,i=0,c=0,u={index:0,val:0};return new o.a(function(o){r.$nextTick(function(){var s=r.getTransformVal("#lotus-picker-flex-item"+n);c=parseInt(s[1]),c===r.itemClientH?i=0:(i=Math.abs(t-1))>=e.values.length&&(i=e.values.length-1),u.index=i,u.type=e.type,u.val=e.values[i],r.result.map(function(t,n){e.type===t.type&&r.result.splice(n,1)}),o(u)})})},close:function(){this._props.flag.isShow=!1},initPicker:function(){var t=this;this.$nextTick(function(){if(!document.querySelector(".lotus-picker-flex-item p"))return!1;t.itemClientH=document.querySelector(".lotus-picker-flex-item p").clientHeight,t.initY=t.itemClientH,t._props.lotusPickerData.map(function(e,n){document.querySelector("#lotus-picker-flex-item"+n).style.cssText="transform:translate3d(0px,"+t.itemClientH+"px,0px);height:"+t.itemClientH*e.values.length+"px;",e.index>0&&t.setPickerShow(n,e.index,t._props.lotusPickerData[n])})})},affirmResult:function(){var t=this;this.result=[],this._props.lotusPickerData.map(function(e,n){var r={index:0,val:0,type:""},o=t.getTransformVal("#lotus-picker-flex-item"+n),i=Math.abs((parseInt(o[1])-t.itemClientH)/t.itemClientH);r.index=Math.abs(i),r.val=e.values[i],r.type=e.type,t.result.push(r)}),this.$emit("change",this.result)}},mounted:function(){},created:function(){}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(36),o=n.n(r),i={install:function(t){"undefined"!=typeof window&&window.Vue&&(t=window.Vue),t.component("lotus-picker",o.a)}};e.default=i},function(t,e,n){"use strict";e.__esModule=!0;var r=n(21),o=function(t){return t&&t.__esModule?t:{default:t}}(r);e.default=function(t){return function(){var e=t.apply(this,arguments);return new o.default(function(t,n){function r(i,c){try{var u=e[i](c),s=u.value}catch(t){return void n(t)}if(!u.done)return o.default.resolve(s).then(function(t){r("next",t)},function(t){r("throw",t)});t(s)}return r("next")})}}},function(t,e,n){t.exports=n(76)},function(t,e,n){n(69),n(71),n(74),n(70),n(72),n(73),t.exports=n(3).Promise},function(t,e){t.exports=function(){}},function(t,e){t.exports=function(t,e,n,r){if(!(t instanceof e)||void 0!==r&&r in t)throw TypeError(n+": incorrect invocation!");return t}},function(t,e,n){var r=n(20),o=n(34),i=n(64);t.exports=function(t){return function(e,n,c){var u,s=r(e),a=o(s.length),f=i(c,a);if(t&&n!=n){for(;a>f;)if((u=s[f++])!=u)return!0}else for(;a>f;f++)if((t||f in s)&&s[f]===n)return t||f||0;return!t&&-1}}},function(t,e,n){var r=n(10),o=n(50),i=n(49),c=n(2),u=n(34),s=n(67),a={},f={},e=t.exports=function(t,e,n,l,p){var h,v,d,y,m=p?function(){return t}:s(t),x=r(n,l,e?2:1),g=0;if("function"!=typeof m)throw TypeError(t+" is not iterable!");if(i(m)){for(h=u(t.length);h>g;g++)if((y=e?x(c(v=t[g])[0],v[1]):x(t[g]))===a||y===f)return y}else for(d=m.call(t);!(v=d.next()).done;)if((y=o(d,x,v.value,e))===a||y===f)return y};e.BREAK=a,e.RETURN=f},function(t,e,n){t.exports=!n(5)&&!n(24)(function(){return 7!=Object.defineProperty(n(15)("div"),"a",{get:function(){return 7}}).a})},function(t,e){t.exports=function(t,e,n){var r=void 0===n;switch(e.length){case 0:return r?t():t.call(n);case 1:return r?t(e[0]):t.call(n,e[0]);case 2:return r?t(e[0],e[1]):t.call(n,e[0],e[1]);case 3:return r?t(e[0],e[1],e[2]):t.call(n,e[0],e[1],e[2]);case 4:return r?t(e[0],e[1],e[2],e[3]):t.call(n,e[0],e[1],e[2],e[3])}return t.apply(n,e)}},function(t,e,n){var r=n(9);t.exports=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==r(t)?t.split(""):Object(t)}},function(t,e,n){var r=n(7),o=n(1)("iterator"),i=Array.prototype;t.exports=function(t){return void 0!==t&&(r.Array===t||i[o]===t)}},function(t,e,n){var r=n(2);t.exports=function(t,e,n,o){try{return o?e(r(n)[0],n[1]):e(n)}catch(e){var i=t.return;throw void 0!==i&&r(i.call(t)),e}}},function(t,e,n){"use strict";var r=n(55),o=n(30),i=n(17),c={};n(4)(c,n(1)("iterator"),function(){return this}),t.exports=function(t,e,n){t.prototype=r(c,{next:o(1,n)}),i(t,e+" Iterator")}},function(t,e,n){var r=n(1)("iterator"),o=!1;try{var i=[7][r]();i.return=function(){o=!0},Array.from(i,function(){throw 2})}catch(t){}t.exports=function(t,e){if(!e&&!o)return!1;var n=!1;try{var i=[7],c=i[r]();c.next=function(){return{done:n=!0}},i[r]=function(){return c},t(i)}catch(t){}return n}},function(t,e){t.exports=function(t,e){return{value:e,done:!!t}}},function(t,e,n){var r=n(0),o=n(33).set,i=r.MutationObserver||r.WebKitMutationObserver,c=r.process,u=r.Promise,s="process"==n(9)(c);t.exports=function(){var t,e,n,a=function(){var r,o;for(s&&(r=c.domain)&&r.exit();t;){o=t.fn,t=t.next;try{o()}catch(r){throw t?n():e=void 0,r}}e=void 0,r&&r.enter()};if(s)n=function(){c.nextTick(a)};else if(!i||r.navigator&&r.navigator.standalone)if(u&&u.resolve){var f=u.resolve();n=function(){f.then(a)}}else n=function(){o.call(r,a)};else{var l=!0,p=document.createTextNode("");new i(a).observe(p,{characterData:!0}),n=function(){p.data=l=!l}}return function(r){var o={fn:r,next:void 0};e&&(e.next=o),t||(t=o,n()),e=o}}},function(t,e,n){var r=n(2),o=n(56),i=n(23),c=n(18)("IE_PROTO"),u=function(){},s=function(){var t,e=n(15)("iframe"),r=i.length;for(e.style.display="none",n(25).appendChild(e),e.src="javascript:",t=e.contentWindow.document,t.open(),t.write("<script>document.F=Object<\/script>"),t.close(),s=t.F;r--;)delete s.prototype[i[r]];return s()};t.exports=Object.create||function(t,e){var n;return null!==t?(u.prototype=r(t),n=new u,u.prototype=null,n[c]=t):n=s(),void 0===e?n:o(n,e)}},function(t,e,n){var r=n(13),o=n(2),i=n(59);t.exports=n(5)?Object.defineProperties:function(t,e){o(t);for(var n,c=i(e),u=c.length,s=0;u>s;)r.f(t,n=c[s++],e[n]);return t}},function(t,e,n){var r=n(12),o=n(65),i=n(18)("IE_PROTO"),c=Object.prototype;t.exports=Object.getPrototypeOf||function(t){return t=o(t),r(t,i)?t[i]:"function"==typeof t.constructor&&t instanceof t.constructor?t.constructor.prototype:t instanceof Object?c:null}},function(t,e,n){var r=n(12),o=n(20),i=n(44)(!1),c=n(18)("IE_PROTO");t.exports=function(t,e){var n,u=o(t),s=0,a=[];for(n in u)n!=c&&r(u,n)&&a.push(n);for(;e.length>s;)r(u,n=e[s++])&&(~i(a,n)||a.push(n));return a}},function(t,e,n){var r=n(58),o=n(23);t.exports=Object.keys||function(t){return r(t,o)}},function(t,e,n){var r=n(4);t.exports=function(t,e,n){for(var o in e)n&&t[o]?t[o]=e[o]:r(t,o,e[o]);return t}},function(t,e,n){t.exports=n(4)},function(t,e,n){"use strict";var r=n(0),o=n(3),i=n(13),c=n(5),u=n(1)("species");t.exports=function(t){var e="function"==typeof o[t]?o[t]:r[t];c&&e&&!e[u]&&i.f(e,u,{configurable:!0,get:function(){return this}})}},function(t,e,n){var r=n(19),o=n(14);t.exports=function(t){return function(e,n){var i,c,u=String(o(e)),s=r(n),a=u.length;return s<0||s>=a?t?"":void 0:(i=u.charCodeAt(s),i<55296||i>56319||s+1===a||(c=u.charCodeAt(s+1))<56320||c>57343?t?u.charAt(s):i:t?u.slice(s,s+2):c-56320+(i-55296<<10)+65536)}}},function(t,e,n){var r=n(19),o=Math.max,i=Math.min;t.exports=function(t,e){return t=r(t),t<0?o(t+e,0):i(t,e)}},function(t,e,n){var r=n(14);t.exports=function(t){return Object(r(t))}},function(t,e,n){var r=n(6);t.exports=function(t,e){if(!r(t))return t;var n,o;if(e&&"function"==typeof(n=t.toString)&&!r(o=n.call(t)))return o;if("function"==typeof(n=t.valueOf)&&!r(o=n.call(t)))return o;if(!e&&"function"==typeof(n=t.toString)&&!r(o=n.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},function(t,e,n){var r=n(22),o=n(1)("iterator"),i=n(7);t.exports=n(3).getIteratorMethod=function(t){if(void 0!=t)return t[o]||t["@@iterator"]||i[r(t)]}},function(t,e,n){"use strict";var r=n(42),o=n(53),i=n(7),c=n(20);t.exports=n(26)(Array,"Array",function(t,e){this._t=c(t),this._i=0,this._k=e},function(){var t=this._t,e=this._k,n=this._i++;return!t||n>=t.length?(this._t=void 0,o(1)):"keys"==e?o(0,n):"values"==e?o(0,t[n]):o(0,[n,t[n]])},"values"),i.Arguments=i.Array,r("keys"),r("values"),r("entries")},function(t,e){},function(t,e,n){"use strict";var r,o,i,c,u=n(27),s=n(0),a=n(10),f=n(22),l=n(11),p=n(6),h=n(8),v=n(43),d=n(45),y=n(32),m=n(33).set,x=n(54)(),g=n(16),_=n(28),w=n(29),b=s.TypeError,k=s.process,P=s.Promise,S="process"==f(k),L=function(){},j=o=g.f,O=!!function(){try{var t=P.resolve(1),e=(t.constructor={})[n(1)("species")]=function(t){t(L,L)};return(S||"function"==typeof PromiseRejectionEvent)&&t.then(L)instanceof e}catch(t){}}(),T=function(t){var e;return!(!p(t)||"function"!=typeof(e=t.then))&&e},E=function(t,e){if(!t._n){t._n=!0;var n=t._c;x(function(){for(var r=t._v,o=1==t._s,i=0;n.length>i;)!function(e){var n,i,c=o?e.ok:e.fail,u=e.resolve,s=e.reject,a=e.domain;try{c?(o||(2==t._h&&H(t),t._h=1),!0===c?n=r:(a&&a.enter(),n=c(r),a&&a.exit()),n===e.promise?s(b("Promise-chain cycle")):(i=T(n))?i.call(n,u,s):u(n)):s(r)}catch(t){s(t)}}(n[i++]);t._c=[],t._n=!1,e&&!t._h&&C(t)})}},C=function(t){m.call(s,function(){var e,n,r,o=t._v,i=M(t);if(i&&(e=_(function(){S?k.emit("unhandledRejection",o,t):(n=s.onunhandledrejection)?n({promise:t,reason:o}):(r=s.console)&&r.error&&r.error("Unhandled promise rejection",o)}),t._h=S||M(t)?2:1),t._a=void 0,i&&e.e)throw e.v})},M=function(t){return 1!==t._h&&0===(t._a||t._c).length},H=function(t){m.call(s,function(){var e;S?k.emit("rejectionHandled",t):(e=s.onrejectionhandled)&&e({promise:t,reason:t._v})})},R=function(t){var e=this;e._d||(e._d=!0,e=e._w||e,e._v=t,e._s=2,e._a||(e._a=e._c.slice()),E(e,!0))},F=function(t){var e,n=this;if(!n._d){n._d=!0,n=n._w||n;try{if(n===t)throw b("Promise can't be resolved itself");(e=T(t))?x(function(){var r={_w:n,_d:!1};try{e.call(t,a(F,r,1),a(R,r,1))}catch(t){R.call(r,t)}}):(n._v=t,n._s=1,E(n,!1))}catch(t){R.call({_w:n,_d:!1},t)}}};O||(P=function(t){v(this,P,"Promise","_h"),h(t),r.call(this);try{t(a(F,this,1),a(R,this,1))}catch(t){R.call(this,t)}},r=function(t){this._c=[],this._a=void 0,this._s=0,this._d=!1,this._v=void 0,this._h=0,this._n=!1},r.prototype=n(60)(P.prototype,{then:function(t,e){var n=j(y(this,P));return n.ok="function"!=typeof t||t,n.fail="function"==typeof e&&e,n.domain=S?k.domain:void 0,this._c.push(n),this._a&&this._a.push(n),this._s&&E(this,!1),n.promise},catch:function(t){return this.then(void 0,t)}}),i=function(){var t=new r;this.promise=t,this.resolve=a(F,t,1),this.reject=a(R,t,1)},g.f=j=function(t){return t===P||t===c?new i(t):o(t)}),l(l.G+l.W+l.F*!O,{Promise:P}),n(17)(P,"Promise"),n(62)("Promise"),c=n(3).Promise,l(l.S+l.F*!O,"Promise",{reject:function(t){var e=j(this);return(0,e.reject)(t),e.promise}}),l(l.S+l.F*(u||!O),"Promise",{resolve:function(t){return w(u&&this===c?P:this,t)}}),l(l.S+l.F*!(O&&n(52)(function(t){P.all(t).catch(L)})),"Promise",{all:function(t){var e=this,n=j(e),r=n.resolve,o=n.reject,i=_(function(){var n=[],i=0,c=1;d(t,!1,function(t){var u=i++,s=!1;n.push(void 0),c++,e.resolve(t).then(function(t){s||(s=!0,n[u]=t,--c||r(n))},o)}),--c||r(n)});return i.e&&o(i.v),n.promise},race:function(t){var e=this,n=j(e),r=n.reject,o=_(function(){d(t,!1,function(t){e.resolve(t).then(n.resolve,r)})});return o.e&&r(o.v),n.promise}})},function(t,e,n){"use strict";var r=n(63)(!0);n(26)(String,"String",function(t){this._t=String(t),this._i=0},function(){var t,e=this._t,n=this._i;return n>=e.length?{value:void 0,done:!0}:(t=r(e,n),this._i+=t.length,{value:t,done:!1})})},function(t,e,n){"use strict";var r=n(11),o=n(3),i=n(0),c=n(32),u=n(29);r(r.P+r.R,"Promise",{finally:function(t){var e=c(this,o.Promise||i.Promise),n="function"==typeof t;return this.then(n?function(n){return u(e,t()).then(function(){return n})}:t,n?function(n){return u(e,t()).then(function(){throw n})}:t)}})},function(t,e,n){"use strict";var r=n(11),o=n(16),i=n(28);r(r.S,"Promise",{try:function(t){var e=o.f(this),n=i(t);return(n.e?e.reject:e.resolve)(n.v),e.promise}})},function(t,e,n){n(68);for(var r=n(0),o=n(4),i=n(7),c=n(1)("toStringTag"),u="CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,TextTrackList,TouchList".split(","),s=0;s<u.length;s++){var a=u[s],f=r[a],l=f&&f.prototype;l&&!l[c]&&o(l,c,a),i[a]=i.Array}},function(t,e){},function(t,e,n){var r=function(){return this}()||Function("return this")(),o=r.regeneratorRuntime&&Object.getOwnPropertyNames(r).indexOf("regeneratorRuntime")>=0,i=o&&r.regeneratorRuntime;if(r.regeneratorRuntime=void 0,t.exports=n(77),o)r.regeneratorRuntime=i;else try{delete r.regeneratorRuntime}catch(t){r.regeneratorRuntime=void 0}},function(t,e){!function(e){"use strict";function n(t,e,n,r){var i=e&&e.prototype instanceof o?e:o,c=Object.create(i.prototype),u=new h(r||[]);return c._invoke=a(t,n,u),c}function r(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(t){return{type:"throw",arg:t}}}function o(){}function i(){}function c(){}function u(t){["next","throw","return"].forEach(function(e){t[e]=function(t){return this._invoke(e,t)}})}function s(t){function e(n,o,i,c){var u=r(t[n],t,o);if("throw"!==u.type){var s=u.arg,a=s.value;return a&&"object"==typeof a&&x.call(a,"__await")?Promise.resolve(a.__await).then(function(t){e("next",t,i,c)},function(t){e("throw",t,i,c)}):Promise.resolve(a).then(function(t){s.value=t,i(s)},c)}c(u.arg)}function n(t,n){function r(){return new Promise(function(r,o){e(t,n,r,o)})}return o=o?o.then(r,r):r()}var o;this._invoke=n}function a(t,e,n){var o=S;return function(i,c){if(o===j)throw new Error("Generator is already running");if(o===O){if("throw"===i)throw c;return d()}for(n.method=i,n.arg=c;;){var u=n.delegate;if(u){var s=f(u,n);if(s){if(s===T)continue;return s}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(o===S)throw o=O,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);o=j;var a=r(t,e,n);if("normal"===a.type){if(o=n.done?O:L,a.arg===T)continue;return{value:a.arg,done:n.done}}"throw"===a.type&&(o=O,n.method="throw",n.arg=a.arg)}}}function f(t,e){var n=t.iterator[e.method];if(n===y){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=y,f(t,e),"throw"===e.method))return T;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return T}var o=r(n,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,T;var i=o.arg;return i?i.done?(e[t.resultName]=i.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=y),e.delegate=null,T):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,T)}function l(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function p(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function h(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(l,this),this.reset(!0)}function v(t){if(t){var e=t[_];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,r=function e(){for(;++n<t.length;)if(x.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=y,e.done=!0,e};return r.next=r}}return{next:d}}function d(){return{value:y,done:!0}}var y,m=Object.prototype,x=m.hasOwnProperty,g="function"==typeof Symbol?Symbol:{},_=g.iterator||"@@iterator",w=g.asyncIterator||"@@asyncIterator",b=g.toStringTag||"@@toStringTag",k="object"==typeof t,P=e.regeneratorRuntime;if(P)return void(k&&(t.exports=P));P=e.regeneratorRuntime=k?t.exports:{},P.wrap=n;var S="suspendedStart",L="suspendedYield",j="executing",O="completed",T={},E={};E[_]=function(){return this};var C=Object.getPrototypeOf,M=C&&C(C(v([])));M&&M!==m&&x.call(M,_)&&(E=M);var H=c.prototype=o.prototype=Object.create(E);i.prototype=H.constructor=c,c.constructor=i,c[b]=i.displayName="GeneratorFunction",P.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===i||"GeneratorFunction"===(e.displayName||e.name))},P.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,c):(t.__proto__=c,b in t||(t[b]="GeneratorFunction")),t.prototype=Object.create(H),t},P.awrap=function(t){return{__await:t}},u(s.prototype),s.prototype[w]=function(){return this},P.AsyncIterator=s,P.async=function(t,e,r,o){var i=new s(n(t,e,r,o));return P.isGeneratorFunction(e)?i:i.next().then(function(t){return t.done?t.value:i.next()})},u(H),H[b]="Generator",H[_]=function(){return this},H.toString=function(){return"[object Generator]"},P.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){for(;e.length;){var r=e.pop();if(r in t)return n.value=r,n.done=!1,n}return n.done=!0,n}},P.values=v,h.prototype={constructor:h,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=y,this.done=!1,this.delegate=null,this.method="next",this.arg=y,this.tryEntries.forEach(p),!t)for(var e in this)"t"===e.charAt(0)&&x.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=y)},stop:function(){this.done=!0;var t=this.tryEntries[0],e=t.completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){function e(e,r){return i.type="throw",i.arg=t,n.next=e,r&&(n.method="next",n.arg=y),!!r}if(this.done)throw t;for(var n=this,r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r],i=o.completion;if("root"===o.tryLoc)return e("end");if(o.tryLoc<=this.prev){var c=x.call(o,"catchLoc"),u=x.call(o,"finallyLoc");if(c&&u){if(this.prev<o.catchLoc)return e(o.catchLoc,!0);if(this.prev<o.finallyLoc)return e(o.finallyLoc)}else if(c){if(this.prev<o.catchLoc)return e(o.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return e(o.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n];if(r.tryLoc<=this.prev&&x.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var o=r;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=t,i.arg=e,o?(this.method="next",this.next=o.finallyLoc,T):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),T},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),p(n),T}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var o=r.arg;p(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:v(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=y),T}}}(function(){return this}()||Function("return this")())},function(t,e){t.exports=function(t,e,n,r){var o,i=t=t||{},c=typeof t.default;"object"!==c&&"function"!==c||(o=t,i=t.default);var u="function"==typeof i?i.options:i;if(e&&(u.render=e.render,u.staticRenderFns=e.staticRenderFns),n&&(u._scopeId=n),r){var s=Object.create(u.computed||null);Object.keys(r).forEach(function(t){var e=r[t];s[t]=function(){return e}}),u.computed=s}return{esModule:o,exports:i,options:u}}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.flag.isShow?n("div",{staticClass:"lotus-picker",attrs:{s:t.changeStatus}},[n("div",{staticClass:"lotus-picker-main"},[n("div",{staticClass:"lotus-picker-top"},[n("span",{staticClass:"lotus-picker-top-cancel",on:{click:t.close}},[t._v("取消")]),t._v(" "),n("span",{staticClass:"lotus-picker-top-title"},[t._v(t._s(t.title||"请选择"))]),t._v(" "),n("span",{staticClass:"lotus-picker-top-confirm",on:{click:function(e){t.close(),t.affirmResult()}}},[t._v("确认")])]),t._v(" "),n("div",{staticClass:"lotus-picker-flex"},t._l(t.lotusPickerData,function(e,r){return n("div",{key:r,staticClass:"lotus-picker-flex-item",attrs:{id:"lotus-picker-flex-item"+r}},t._l(e.values,function(o,i){return n("p",{key:i,domProps:{textContent:t._s(o)},on:{touchstart:function(e){t.touchStart(r,e)},touchmove:function(n){t.touchMove(e,r,n)},touchend:function(n){t.touchEnd(e,r)}}})}))})),t._v(" "),n("i",{staticClass:"lotus-picker-center"}),t._v(" "),n("i",{staticClass:"lotus-picker-bottom"})])]):t._e()},staticRenderFns:[]}}])});