(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/formDetail/formDetail"],{"039c":function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("view",{staticClass:"form-detail"},[a("view",{staticClass:"form-detail-item"},[a("text",[t._v("名称：")]),a("text",[t._v(t._s(t.buyFormData.productName))])]),a("view",{staticClass:"form-detail-item"},[a("text",[t._v("规格：")]),a("text",[t._v(t._s(t.buyFormData.productSpec?t.buyFormData.productSpec:"--"))])]),a("view",{staticClass:"form-detail-item"},[a("text",[t._v("厂家：")]),a("text",[t._v(t._s(t.buyFormData.factory?t.buyFormData.factory:"--"))])]),a("view",{staticClass:"form-detail-item"},[a("text",[t._v("数量：")]),a("text",[t._v(t._s(t.buyFormData.amount))])]),a("view",{staticClass:"form-detail-item"},[a("text",[t._v("姓名：")]),a("text",[t._v(t._s(t.buyFormData.userName))])]),a("view",{staticClass:"form-detail-item"},[a("text",[t._v("手机：")]),a("text",[t._v(t._s(t.buyFormData.userPhone))])]),a("view",{staticClass:"form-detail-item"},[a("text",[t._v("地址：")]),a("text",[t._v(t._s(t.buyFormData.userAddress))])]),t.imageList.length>0?a("view",{staticClass:"form-detail-item"},[t._m(0),a("view",{staticClass:"form-detail-img-list"},t._l(t.imageList,function(e,i){return a("image",{key:i,attrs:{src:t.webUrl+e.imgUrl,mode:"aspectFit",eventid:"6c567299-0-"+i},on:{tap:function(a){t.imgPreviewer(e)}}})}))]):t._e(),a("navigator",{staticClass:"lotus-btn form-detail-btn",attrs:{url:"/pages/form/form?id="+t.buyFormId}},[t._v("编辑")]),a("view",{staticClass:"lotus-btn form-detail-delete",attrs:{eventid:"6c567299-1"},on:{tap:t.deleteForm}},[t._v("删除")])],1)},r=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("view",[t._v("附件："),a("text",{staticClass:"form-detail-item-tips"},[t._v("图片点击可以预览")])])}];a.d(e,"a",function(){return i}),a.d(e,"b",function(){return r})},a401:function(t,e,a){"use strict";a("be3b");var i=s(a("b0ce")),r=s(a("ab96"));function s(t){return t&&t.__esModule?t:{default:t}}Page((0,i.default)(r.default))},ab96:function(t,e,a){"use strict";a.r(e);var i=a("039c"),r=a("f57c");for(var s in r)"default"!==s&&function(t){a.d(e,t,function(){return r[t]})}(s);a("b1f6");var o=a("2877"),u=Object(o["a"])(r["default"],i["a"],i["b"],!1,null,null,null);e["default"]=u.exports},b1f6:function(t,e,a){"use strict";var i=a("c0cf"),r=a.n(i);r.a},c0cf:function(t,e,a){},d6e7:function(t,e,a){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={data:function(){return{buyFormId:"",buyFormData:{},imageList:[],webUrl:this.$lotusUtils.webUrl.api}},methods:{imgPreviewer:function(t){var e=[],a="".concat(this.$lotusUtils.webUrl.api).concat(t.imgUrl);e.push(a),this.$lotusUtils.imagesPreviewer(e)},deleteForm:function(){var e=this;this.$lotusUtils.ajax("".concat(e.$lotusUtils.webUrl.api,"buy/delete"),"POST",{id:e.buyFormId}).then(function(e){1===e.code&&t.showToast({icon:"none",title:"删除成功",success:function(){t.switchTab({url:"/pages/userCenter/userCenter"})}})})}},onLoad:function(e){if(this.buyFormId=e.id,!this.buyFormId)return!1;var a=this;this.$lotusUtils.ajax("".concat(a.$lotusUtils.webUrl.api,"buy/detail"),"GET",{buyFormId:a.buyFormId}).then(function(e){if(1===e.code){var i=e.data;a.buyFormData=i.buyFormData,a.imageList=i.buyFormData.imageList,t.setNavigationBarTitle({title:"".concat(i.buyFormData.productName)})}})},onShow:function(){}};e.default=a}).call(this,a("6e42")["default"])},f57c:function(t,e,a){"use strict";a.r(e);var i=a("d6e7"),r=a.n(i);for(var s in i)"default"!==s&&function(t){a.d(e,t,function(){return i[t]})}(s);e["default"]=r.a}},[["a401","common/runtime","common/vendor"]]]);