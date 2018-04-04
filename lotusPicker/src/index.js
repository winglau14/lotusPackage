//picker选择器组件
import lotusPickerVue from './components/lotusPicker/LotusPicker.vue'

//组件注入到Vue
const lotusPicker = {
    install(Vue) {
        if (typeof window !== 'undefined' && window.Vue) {
            Vue = window.Vue;
        }
        Vue.component('lotus-picker', lotusPickerVue);
    }
};
export default lotusPicker;