//日历组件
import lotusCalendarVue from './components/lotusCalendar/LotusCalendar.vue'

//组件注入到Vue
const lotusCalendar = {
    install:(Vue)=>{
        Vue.component('LotusCalendar',lotusCalendarVue);
    }
};
if (typeof window !== 'undefined' && window.Vue) {
    window.Vue.use(lotusCalendar)
}
export default lotusCalendar;