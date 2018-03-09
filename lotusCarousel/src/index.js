//滑动轮播、无缝轮播组件
import lotusCarouselVue from './components/lotusCarousel/LotusCarousel.vue'

//组件注入到Vue
const lotusCarousel = {
    install(Vue){
        if (typeof window !== 'undefined' && window.Vue) {
            Vue = window.Vue;
        }
        Vue.component('lotus-carousel',lotusCarouselVue);
    }
};
export default lotusCarousel;