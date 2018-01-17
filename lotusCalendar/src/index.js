//日历组件
import lotusCalendarVue from './components/lotusCalendar/LotusCalendar.vue'

//组件注入到Vue
const lotusCalendar = {
    install(Vue){
        if (typeof window !== 'undefined' && window.Vue) {
            Vue = window.Vue;
        }
        Vue.component('lotus-calendar',lotusCalendarVue);
    }
};
export default lotusCalendar;