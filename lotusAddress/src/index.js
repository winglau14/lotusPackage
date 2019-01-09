//picker选择器组件
import lotusAddressVue from './components/lotusAddress/LotusAddress.vue'

//组件注入到Vue
const lotusAddress = {
    install(Vue) {
        if (typeof window !== 'undefined' && window.Vue) {
            Vue = window.Vue;
        }
        Vue.component('lotus-address', lotusAddressVue);
    }
};
export default lotusAddress;