import Vue from 'vue'
import App from './App'
//引入日历组件
import lotusCalendar from './components/lotusCalendar/LotusCalendar'

Vue.use(lotusCalendar);

new Vue({
    el: '#app',
    render: h => h(App)
});
