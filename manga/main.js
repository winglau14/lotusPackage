import Vue from 'vue'
import App from './App'
//lotusUtils工具类方法
import {lotusUtils} from "./static/utils/utils.js"
Vue.config.productionTip = false
//lotusUtils工具类方法注入到Vue
Vue.prototype.$lotusUtils = lotusUtils;

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
