import Vue from 'vue'
import App from './App'

//日期控件引入
import lotusCalendar from 'lotus-calendar'
import 'lotus-calendar/dist/lotus-calendar.min'
Vue.use(lotusCalendar);

new Vue({
    el: '#app',
    template: '<App/>',
    components: {App}
});