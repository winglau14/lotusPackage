import Vue from 'vue'
import App from './App'

//省市区lotus-address组件引入
import lotusAddress from 'lotus-address'
import 'lotus-address/dist/lotus-address.min'
Vue.use(lotusAddress);

new Vue({
    el: '#app',
    template: '<App/>',
    components: {App}
});