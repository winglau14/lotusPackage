(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/form/form"],{"0b54":function(t,e,i){},3315:function(t,e,i){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=s(i("a34a"));function s(t){return t&&t.__esModule?t:{default:t}}function r(t,e,i,a,s,r,o){try{var n=t[r](o),l=n.value}catch(u){return void i(u)}n.done?e(l):Promise.resolve(l).then(a,s)}function o(t){return function(){var e=this,i=arguments;return new Promise(function(a,s){var o=t.apply(e,i);function n(t){r(o,a,s,n,l,"next",t)}function l(t){r(o,a,s,n,l,"throw",t)}n(void 0)})}}var n={data:function(){return{productName:"",productSpec:"",factory:"",amount:"",userName:"",userPhone:"",userAddress:"",imageList:[],submitTime:null,imgWebUrl:this.$lotusUtils.webUrl.api,formId:0}},methods:{compressImage:function(t){return new Promise(function(e,i){plus.zip.compressImage({src:t,dst:t,quality:40,overwrite:!0},function(){e(t)},function(t){console.log(JSON.stringify(t))})})},openCamera:function(e){var i=this;t.chooseImage({count:1,success:function(e){var a=e.tempFilePaths[0],s=a.split("/");console.log(s[s.length-1]),i.compressImage(a).then(function(e){console.log(a),t.uploadFile({url:"".concat(i.$lotusUtils.webUrl.api,"upLoad/image"),filePath:e,name:"file",formData:{},success:function(t){var e=JSON.parse(t.data);if(1===e.code){var a=e.data;i.testUrl=i.$lotusUtils.webUrl.api+a.imgUrl,i.imageList.push(a)}},fail:function(t){console.log(JSON.stringify(t))}})})}})},deleteImg:function(t,e){var i=this,a="".concat(t[e].imgName,".jpg");i.$lotusUtils.ajax("".concat(i.$lotusUtils.webUrl.api,"upLoad/imageDelete"),"POST",{imgName:a,buyFormId:i.formId}).then(function(a){console.log(JSON.stringify(a)),1===a.code&&(t.splice(e,1),i.imageList=t)})},imgPreviewer:function(t){var e=[],i="".concat(this.$lotusUtils.webUrl.api).concat(t.imgUrl);e.push(i),this.$lotusUtils.imagesPreviewer(e)},submitFn:function(){var e=o(a.default.mark(function e(){var i,s,r,o;return a.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(this.formMatch()){e.next=2;break}return e.abrupt("return",!1);case 2:return e.next=4,this.$lotusUtils.getStorageFn("userInfor");case 4:i=e.sent,s={productName:this.productName,productSpec:this.productSpec,factory:this.factory,amount:this.amount,userName:this.userName,userPhone:this.userPhone,userAddress:this.userAddress,imageList:this.imageList},r="",o={},this.formId>0?(r="".concat(this.$lotusUtils.webUrl.api,"buy/update"),o={openId:JSON.parse(i).openId,buyFormData:JSON.stringify(s),buyFormId:this.formId}):(r="".concat(this.$lotusUtils.webUrl.api,"buy/add"),o={openId:JSON.parse(i).openId,buyFormData:JSON.stringify(s)}),this.$lotusUtils.ajax(r,"POST",o).then(function(e){1===e.code&&t.showToast({title:"提交成功",icon:"none",mask:!0,success:function(){t.redirectTo({url:"/pages/success/success?id="+e.data})}})});case 10:case"end":return e.stop()}},e,this)}));function i(){return e.apply(this,arguments)}return i}(),submitFnClick:function(){var t=this;clearTimeout(this.submitTime),this.submitTime=setTimeout(function(){t.submitFn()},200)},formMatch:function(){if(!this.productName)return t.showToast({title:"名称不能为空",icon:"none"}),!1;if(!this.amount)return t.showToast({title:"数量不能为空",icon:"none"}),!1;if(!/[1-9]$|^[1-9]\d{1,2}$/g.test(this.amount))return t.showToast({title:"数量输入有误",icon:"none"}),this.amount="",!1;if(!this.userName)return t.showToast({title:"姓名不能为空",icon:"none"}),!1;if(!/^1[0-9]{2}[0-9]{8}$/.test(this.userPhone)){var e=this.userPhone?"手机号码不合法":"手机号码不能为空";return t.showToast({title:e,icon:"none"}),!1}return!!this.userAddress||(t.showToast({title:"收货人地址不能为空",icon:"none"}),!1)},getFormDetail:function(){var e=this;this.$lotusUtils.ajax("".concat(e.$lotusUtils.webUrl.api,"buy/detail"),"GET",{buyFormId:e.formId}).then(function(i){if(1===i.code){var a=i.data;e.buyFormData=a.buyFormData,e.imageList=a.buyFormData.imageList,e.productName=a.buyFormData.productName,e.productSpec=a.buyFormData.productSpec,e.factory=a.buyFormData.factory,e.amount=a.buyFormData.amount,e.userName=a.buyFormData.userName,e.userPhone=a.buyFormData.userPhone,e.userAddress=a.buyFormData.userAddress,t.setNavigationBarTitle({title:"".concat(a.buyFormData.productName)})}})}},onLoad:function(t){this.formId=t.id},onShow:function(){this.formId>0&&this.getFormDetail()}};e.default=n}).call(this,i("543d")["default"])},"45ac":function(t,e,i){"use strict";var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("view",{staticClass:"fill-form"},[i("view",{staticClass:"fill-form-item"},[t._m(0),i("view",{staticClass:"fill-form-item-r"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.productName,expression:"productName"}],attrs:{placeholder:"请输入名称",type:"text",eventid:"76436e79-0"},domProps:{value:t.productName},on:{input:function(e){e.target.composing||(t.productName=e.target.value)}}})])]),i("view",{staticClass:"fill-form-item"},[t._m(1),i("view",{staticClass:"fill-form-item-r"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.productSpec,expression:"productSpec"}],attrs:{placeholder:"请输入规格",type:"text",eventid:"76436e79-1"},domProps:{value:t.productSpec},on:{input:function(e){e.target.composing||(t.productSpec=e.target.value)}}})])]),i("view",{staticClass:"fill-form-item"},[t._m(2),i("view",{staticClass:"fill-form-item-r"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.factory,expression:"factory"}],attrs:{placeholder:"请输入厂家",type:"text",eventid:"76436e79-2"},domProps:{value:t.factory},on:{input:function(e){e.target.composing||(t.factory=e.target.value)}}})])]),i("view",{staticClass:"fill-form-item"},[t._m(3),i("view",{staticClass:"fill-form-item-r"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.amount,expression:"amount"}],attrs:{maxlength:"3",placeholder:"请输入购买数量",type:"number",eventid:"76436e79-3"},domProps:{value:t.amount},on:{input:function(e){e.target.composing||(t.amount=e.target.value)}}})])]),i("view",{staticClass:"fill-form-item"},[t._m(4),i("view",{staticClass:"fill-form-item-r"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.userName,expression:"userName"}],attrs:{placeholder:"请输入收货人姓名",type:"text",eventid:"76436e79-4"},domProps:{value:t.userName},on:{input:function(e){e.target.composing||(t.userName=e.target.value)}}})])]),i("view",{staticClass:"fill-form-item"},[t._m(5),i("view",{staticClass:"fill-form-item-r"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.userPhone,expression:"userPhone"}],attrs:{maxlength:"11",placeholder:"请输入收货人手机号码",type:"number",eventid:"76436e79-5"},domProps:{value:t.userPhone},on:{input:function(e){e.target.composing||(t.userPhone=e.target.value)}}})])]),i("view",{staticClass:"fill-form-item"},[t._m(6),i("view",{staticClass:"fill-form-item-r"},[i("textarea",{directives:[{name:"model",rawName:"v-model",value:t.userAddress,expression:"userAddress"}],staticStyle:{width:"580rpx"},attrs:{maxlength:"500","auto-height":"",placeholder:"请输入收货人地址",eventid:"76436e79-6"},domProps:{value:t.userAddress},on:{input:function(e){e.target.composing||(t.userAddress=e.target.value)}}})])]),i("view",{staticClass:"fill-form-item",staticStyle:{"padding-bottom":"0"}},[t._m(7),i("view",{staticClass:"fill-form-item-r"},[t.imageList.length?i("text",{staticClass:"fill-form-item-tips"},[t._v("图片点击可以预览")]):t._e(),i("view",{staticClass:"fill-form-item-img-list"},[t._l(t.imageList,function(e,a){return i("view",{key:a,staticClass:"fill-form-item-img-wrap"},[i("image",{staticClass:"fill-form-item-img",attrs:{src:t.imgWebUrl+e.imgUrl,mode:"aspectFit",eventid:"76436e79-7-"+a},on:{tap:function(i){t.imgPreviewer(e)}}}),i("view",{staticClass:"fill-form-item-delete",attrs:{eventid:"76436e79-8-"+a},on:{tap:function(e){t.deleteImg(t.imageList,a)}}})])}),t.imageList.length<2?i("view",{staticClass:"fill-form-item-camera",attrs:{eventid:"76436e79-9"},on:{tap:function(e){t.openCamera(0)}}}):t._e()],2)])]),i("view",{staticClass:"fill-form-fix"},[i("view",{staticClass:"fill-form-fix-wrap"},[i("button",{staticClass:"fill-form-fix-btn lotus-btn",attrs:{type:"primary",eventid:"76436e79-10"},on:{tap:t.submitFnClick}},[t._v("提交")])],1)])])},s=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("view",{staticClass:"fill-form-item-l"},[i("text",{staticClass:"fill-form-item-l-red"},[t._v("*")]),i("text",[t._v("名称：")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("view",{staticClass:"fill-form-item-l"},[i("text",{staticClass:"fill-form-item-l-red",staticStyle:{opacity:"0"}},[t._v("*")]),i("text",[t._v("规格：")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("view",{staticClass:"fill-form-item-l"},[i("text",{staticClass:"fill-form-item-l-red",staticStyle:{opacity:"0"}},[t._v("*")]),i("text",[t._v("厂家：")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("view",{staticClass:"fill-form-item-l"},[i("text",{staticClass:"fill-form-item-l-red"},[t._v("*")]),i("text",[t._v("数量：")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("view",{staticClass:"fill-form-item-l"},[i("text",{staticClass:"fill-form-item-l-red"},[t._v("*")]),i("text",[t._v("姓名：")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("view",{staticClass:"fill-form-item-l"},[i("text",{staticClass:"fill-form-item-l-red"},[t._v("*")]),i("text",[t._v("手机：")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("view",{staticClass:"fill-form-item-l fill-form-item-top"},[i("text",{staticClass:"fill-form-item-l-red"},[t._v("*")]),i("text",[t._v("地址：")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("view",{staticClass:"fill-form-item-l fill-form-item-top"},[i("text",{staticClass:"fill-form-item-l-red",staticStyle:{opacity:"0"}},[t._v("*")]),i("text",[t._v("附件：")])])}];i.d(e,"a",function(){return a}),i.d(e,"b",function(){return s})},"4cdf":function(t,e,i){"use strict";i("be3b");var a=r(i("b0ce")),s=r(i("8d25"));function r(t){return t&&t.__esModule?t:{default:t}}Page((0,a.default)(s.default))},"6aa7":function(t,e,i){"use strict";var a=i("0b54"),s=i.n(a);s.a},"8d25":function(t,e,i){"use strict";i.r(e);var a=i("45ac"),s=i("ebf9");for(var r in s)"default"!==r&&function(t){i.d(e,t,function(){return s[t]})}(r);i("6aa7");var o=i("2877"),n=Object(o["a"])(s["default"],a["a"],a["b"],!1,null,null,null);e["default"]=n.exports},ebf9:function(t,e,i){"use strict";i.r(e);var a=i("3315"),s=i.n(a);for(var r in a)"default"!==r&&function(t){i.d(e,t,function(){return a[t]})}(r);e["default"]=s.a}},[["4cdf","common/runtime","common/vendor"]]]);