(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/login/login"],{"06e7":function(t,e,n){"use strict";n.r(e);var i=n("e482"),a=n.n(i);for(var o in i)"default"!==o&&function(t){n.d(e,t,function(){return i[t]})}(o);e["default"]=a.a},3916:function(t,e,n){"use strict";var i=n("f237"),a=n.n(i);a.a},"84d3":function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("view",{staticClass:"login"},[t._m(0),n("view",{staticClass:"login-list"},[n("view",{staticClass:"login-list-item",attrs:{eventid:"18aaca0d-0"},on:{tap:function(e){t.loginClick("weixin")}}},[n("image",{staticStyle:{width:"100rpx",height:"100rpx"},attrs:{src:"../../static/images/wx-icon.png",mode:"aspectFit"}}),n("text",[t._v("微信")])]),n("view",{staticClass:"login-list-item",attrs:{eventid:"18aaca0d-1"},on:{tap:function(e){t.loginClick("qq")}}},[n("image",{staticStyle:{width:"100rpx",height:"100rpx"},attrs:{src:"../../static/images/qq-icon.png",mode:"aspectFit"}}),n("text",[t._v("QQ")])])])])},a=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("view",{staticClass:"login-welcome"},[n("text",{staticClass:"login-welcome-line"}),n("text",{staticClass:"login-welcome-title"},[t._v("使用以下方式登录")]),n("text",{staticClass:"login-welcome-line"})])}];n.d(e,"a",function(){return i}),n.d(e,"b",function(){return a})},ae78:function(t,e,n){"use strict";n.r(e);var i=n("84d3"),a=n("06e7");for(var o in a)"default"!==o&&function(t){n.d(e,t,function(){return a[t]})}(o);n("3916");var s=n("2877"),c=Object(s["a"])(a["default"],i["a"],i["b"],!1,null,null,null);e["default"]=c.exports},bc2c:function(t,e,n){"use strict";n("be3b");var i=o(n("b0ce")),a=o(n("ae78"));function o(t){return t&&t.__esModule?t:{default:t}}Page((0,i.default)(a.default))},e482:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={data:function(){return{loginTime:null}},methods:{loginType:function(e){var n=this;"string"===typeof e?n.$lotusUtils.wxLoginFn(e).then(function(i){if(!i.userInfor)return!1;var a=JSON.parse(i.userInfor);n.registerApiFn(e,a).then(function(e){1===e.code&&t.switchTab({url:"/pages/userCenter/userCenter"})})}):t.showToast({title:"敬请期待^_^",icon:"none"})},registerApiFn:function(t,e){return this.$lotusUtils.ajax("".concat(this.$lotusUtils.webUrl.api,"user/login"),"POST",{openId:e.openId,nickName:e.nickName,source:t,avatarUrl:e.avatarUrl})},loginClick:function(t){var e=this;clearTimeout(this.loginTime),this.loginTime=setTimeout(function(){e.loginType(t)},160)}},onLoad:function(){},onShow:function(){}};e.default=n}).call(this,n("543d")["default"])},f237:function(t,e,n){}},[["bc2c","common/runtime","common/vendor"]]]);