import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App'
import {CreateRouter} from './router'
/*import store from './vuex/store'*/
/*import FastClick from 'fastclick'*/
// rem布局库
/*import '../static/lib/newflexible'*/
//  引入需要window的外置js
if (typeof window !== 'undefined') {
    require('../static/lib/newflexible')
}
import es6Promise from 'es6-promise'
import 'babel-polyfill'
// ajax请求
import lotusAjax from './lotusPlugins/lotusApiRequest'
// apiUrl地址
import lotusApiUrl from './lotusPlugins/lotusApiUrl'

// 全站工具类包括了正则验证、页面title、json转字符串、字符串转json
import lotusUtils from './lotusPlugins/lotusUtils'
/* import VueLazyload from 'vue-lazyload' */
/*if(typeof document !== "undefined"){
    // loading 组件
    const lotusLoading = require('./lotusPlugins/lotusLoading');
    Vue.use(lotusLoading);
    // toast 组件
    const lotusToast = require('./lotusPlugins/lotusToast');
    Vue.use(lotusToast);
    // 动态修改微信title
    const lotusChangeTitle = require('./lotusPlugins/lotusChangeTitle');
    Vue.use(lotusChangeTitle);
}*/
// loading 组件
import lotusLoading  from './lotusPlugins/lotusLoading';
Vue.use(lotusLoading);
// toast 组件
import lotusToast from './lotusPlugins/lotusToast';
Vue.use(lotusToast);
// 动态修改微信title
import lotusChangeTitle from './lotusPlugins/lotusChangeTitle';
Vue.use(lotusChangeTitle);
import VueLazyload from 'vue-lazyload'

Vue.use(VueLazyload);

// or with options
Vue.use(VueLazyload, {
    preLoad: 1.3,
    loading: '/static/images/npc-not-found.png',
    attempt: 1
});

es6Promise.polyfill();
Vue.use(VueRouter);
Vue.use(lotusAjax);
Vue.use(lotusApiUrl);
Vue.use(lotusUtils);
if(typeof document !== "undefined"){
    const FastClick = require('fastclick');
    FastClick.attach(document.body);
}
export function createApp(){
    const router = new CreateRouter();
    const app = new Vue({
        router,
        render:h => h(App)
    });
    return{
        app,router
    }
}
