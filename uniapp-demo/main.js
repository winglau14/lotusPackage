import Vue from 'vue'
import App from './App'
import {lotusUtils} from "./static/utils/utils.js"
Vue.config.productionTip = false
//lotusUtils注入到Vue
Vue.prototype.$lotusUtils = lotusUtils;
App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
