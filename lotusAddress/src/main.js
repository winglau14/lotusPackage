import Vue from 'vue'
import App from './App'

//滑动轮播组件引入
import lotusCarousel from 'lotus-carousel'
import 'lotus-carousel/dist/lotus-carousel.min'
Vue.use(lotusCarousel);

new Vue({
    el: '#app',
    template: '<App/>',
    components: {App}
});