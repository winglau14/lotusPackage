import Vue from 'vue'
import VueRouter from 'vue-router'
/*import FastClick from 'fastclick'*/
import App from './App'
import routes from './router'
import './js/newflexible'
/*import es6Promise from 'es6-promise'*/
import store from './vuex/store'
//ajax请求
import lotusAjax from './lotusPlugins/lotusApiRequest'
//apiUrl地址
import lotusApiUrl from './lotusPlugins/lotusApiUrl'
//动态修改微信title
import lotusChangeTitle from './lotusPlugins/lotusChangeTitle'
//全站工具类包括了正则验证、页面title、json转字符串、字符串转json
import lotusUtils from './lotusPlugins/lotusUtils'
//获取微信签名配置
import {getWxSignConfig} from './Utils/getWxConfig'
/*import VueLazyload from 'vue-lazyload'*/
//loading 组件
import lotusLoading from './lotusPlugins/lotusLoading'
//toast 组件
import lotusToast from './lotusPlugins/lotusToast'
//lotusNoDataNav 组件
import lotusNoDataNav from './lotusPlugins/lotusNoDataNav'
//查看大图组件
import lotusPreViewer from './lotusPlugins/lotusPreViewer'
//日期控件
/*import lotusCalendar from 'lotus-calendar'*/
/*import 'lotus-calendar/dist/lotus-calendar.min.css'*/
/*import lotusQuery from 'lotus-url-query-string'*/

/*es6Promise.polyfill()*/
Vue.use(VueRouter)
Vue.use(lotusAjax)
Vue.use(lotusApiUrl)
Vue.use(lotusChangeTitle)
Vue.use(lotusUtils)
Vue.use(lotusLoading)
Vue.use(lotusToast)
Vue.use(lotusNoDataNav)
Vue.use(lotusPreViewer)
/*Vue.use(lotusCalendar)*/
/*Vue.use(VueLazyload, {
 preLoad: 1.3,
 loading: '/static/loading-img.png',
 attempt: 1,
 listenEvents: ['scroll', 'touchmove']
 })*/
Vue.config.productionTip = false

const router = new VueRouter({
    routes
});

//获取token
if (!sessionStorage.accessToken) {
    lotusAjax.$lotusAjax.post(lotusApiUrl.$lotusApiUrl.Auth, {
        "client_id": "opf30006",
        "client_secret": "28d8f44cd2414b0597a0c92f901c456a",
        "grant_type": "client_credentials"
    }).then((response) => {
        const result = response.data;
        if (result) {
            if (result.access_token && result.refresh_token) {
                sessionStorage.accessToken = response.data.access_token;
                sessionStorage.refreshToken = response.data.refresh_token;
            }
        }
    })
}
getWxSignConfig();
//获取wxCode
const getWxCode = function () {
    location.href = 'https://open.weixin.qq.com/connect/oauth2/authorize?appid=wxd298d25b6cb7925a&redirect_uri=' + encodeURIComponent(location.href) + '&response_type=code&scope=snsapi_userinfo&state=1#wechat_redirect';
};

//获取微信用户信息
const getUserInfo = (wxCode) => {
    return lotusAjax.$lotusAjax.get(lotusApiUrl.$lotusApiUrl.wxApiUrl + 'Wx/GetUserInfo', {
        code: wxCode,
        SignSource: 14
    }).then((response) => {
        if (response.data.Data) {
            sessionStorage.wxyyParner = JSON.stringify(response.data.Data);
            return response.data.Data;
        }
    });
};
//判断用户是否注册
let checkUserRegister = async ({wxCode}) => {
    if (!sessionStorage.wxyyParner) {
        await getUserInfo(wxCode);
    }
    /*const openId = JSON.parse(sessionStorage.wxyyParner).OpenId;*/
    const unionID = JSON.parse(sessionStorage.wxyyParner).UnionID;
    return lotusAjax.$lotusAjax.get(lotusApiUrl.$lotusApiUrl.yyfApiUrl + 'XAdmin/GetOtherXadmin', {
        UnionId: unionID,
        SignSource: 13
    }).then((response) => {
        const result = response.data;
        if (result.Data) {
            //有帐号
            if (result.Data.XAdminId > 0) {
                sessionStorage.xAdminId = result.Data.XAdminId;
                store.dispatch('isLogin/SET_ACTIONS', {
                    loginFlag: true,
                    Xid: result.Data.XAdminId
                });
            } else {
                //没帐号
                store.dispatch('isLogin/SET_ACTIONS', {
                    loginFlag: false,
                    Xid: 0
                });
                //跳转到关注药吉利小程序
                router.replace({
                    path:'/noLimit'
                })
            }
            return result.Data;
        }
    })
};
//路由调整检测
router.beforeEach(async (to, from, next) => {
    document.body.className = '';
    document.documentElement.className = '';
    //页面切换滚动到顶部
    document.body.scrollTop = 0;
    //判断是否为分享页面路径
    const urlPath = to.path;
    //关注药吉利小程序
    if(urlPath.includes('/noLimit')){
        next();
        return false;
    }
    if (sessionStorage.xAdminId) {
        store.dispatch('isLogin/SET_ACTIONS', {
            loginFlag: true,
            Xid: sessionStorage.xAdminId
        });
    } else {
        if (location.href.indexOf('code') < 0) {
            getWxCode();
        } else {
            if (location.href.indexOf('code') > 0) {
                const wxCode = location.href.match(/code=.*?&/)[0].replace('code=', '').replace('&', '');
                //const wxCode = lotusQuery().code;
                await checkUserRegister({wxCode});
            }
        }
    }
    next();
});

//获取微信签名配置
/*if ('ontouchstart' in window) {
    FastClick.attach(document.body);
}*/

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    store,
    template: '<App/>',
    components: {App}
});

//开发环境
 sessionStorage.wxyyParner = '{"AccessToken":"KFwkDPnt0YXINO3MKbK2z-3fXJa9jyIhyCafzzxjvzofWv8kjp_xCxtbBvPZnPOX8hOSnJEX7pPOQzSjiOcqvTb6Gz40cuLcG1ubboaoFbo","OpenId":"od8v2vx88VurZS5jvQ1HIQpT0nDM","UnionID":"oewYHxH2lQ4HRSG9mb9xUDIDAMNQ","NickName":"WingLau","HeadImgUrl":"http://wx.qlogo.cn/mmopen/vi_32/VRrt8JGhB8tpWibEzSia62moJQMgnPMcXe9rGHwGzeTSAPuWtDRq6pOIkYSLqO3woWNicHWE1Niawp8KYAgWGbZLSQ/0","Sex":"1","City":"广州","Country":"中国","QrcodeImgUrl":null,"Province":"广东"}';
 sessionStorage.yyParnerInformation = '{"AdminId":100135,"AdminName":"WingLau","Code":1,"Eid":101262,"DptId":101343,"DPTName":"超级管理员","RoleList":[{"RoleId":2078,"RoleName":"员工","DptId":101343,"DptName":"超级管理员","Description":null,"CreateTime":"2017-10-14T10:00:16","CorpName":"支付宝企业","EId":101262},{"RoleId":2098,"RoleName":"普通","DptId":101343,"DptName":"超级管理员","Description":null,"CreateTime":"2017-10-18T09:50:14","CorpName":null,"EId":101262},{"RoleId":2099,"RoleName":"普通1","DptId":101343,"DptName":"超级管理员","Description":null,"CreateTime":"2017-10-18T09:52:15","CorpName":null,"EId":101262},{"RoleId":2100,"RoleName":"test1","DptId":101343,"DptName":"超级管理员","Description":null,"CreateTime":"2017-10-18T09:58:49","CorpName":null,"EId":101262},{"RoleId":2101,"RoleName":"test2","DptId":101343,"DptName":"超级管理员","Description":null,"CreateTime":"2017-10-18T09:59:26","CorpName":null,"EId":101262}],"PerList":[{"PerId":0,"PerName":"发布招商","PerCode":"issueBusiness","ParentCode":null,"PerType":null,"Description":null,"PlatformType":null},{"PerId":0,"PerName":"药店管理","PerCode":"listPharmacy","ParentCode":null,"PerType":null,"Description":null,"PlatformType":null},{"PerId":0,"PerName":"临床资源","PerCode":"clinicalResources","ParentCode":null,"PerType":null,"Description":null,"PlatformType":null},{"PerId":0,"PerName":"邀请药店","PerCode":"inviteAPharmacy","ParentCode":null,"PerType":null,"Description":null,"PlatformType":null},{"PerId":0,"PerName":"成员管理","PerCode":"memberManage","ParentCode":null,"PerType":null,"Description":null,"PlatformType":null},{"PerId":0,"PerName":"招商资源","PerCode":"sourceList","ParentCode":null,"PerType":null,"Description":null,"PlatformType":null},{"PerId":0,"PerName":"快捷功能","PerCode":"Quick","ParentCode":null,"PerType":null,"Description":null,"PlatformType":null},{"PerId":0,"PerName":"个人中心","PerCode":"PersonalCenter","ParentCode":null,"PerType":null,"Description":null,"PlatformType":null},{"PerId":0,"PerName":"招商管理","PerCode":"sourceManage","ParentCode":null,"PerType":null,"Description":null,"PlatformType":null}],"MobilePhone":"13724830565","HeadimgUrl":"http://wx.qlogo.cn/mmopen/vi_32/VRrt8JGhB8tpWibEzSia62moJQMgnPMcXe9rGHwGzeTSAPuWtDRq6pOIkYSLqO3woWNicHWE1Niawp8KYAgWGbZLSQ/0","Nid":1010,"CorpName":"支付宝企业","CorpId":24,"LoginAuth":2}';
 sessionStorage.xAdminId = 2;
