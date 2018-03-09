<template>
  <div id="app">
    <p style="text-align: center">
      <span style="font-size: 0.37rem;">日期控件：</span>
      <span @click="openDate('starTime')" style="font-size: 0.37rem;">{{starTime}} 至</span>
      <span @click="openDate('endTime')" style="font-size: 0.37rem;">{{endTime}}</span>
    </p>
    <!--日期控件-->
    <lotusCalendar @returnDate="choseDate" :calendarData="calendarData"/>
  </div>
</template>

<script>
    /**
     1.returnDate 日期控件监听的方法;
     2.calendarData 日期控件需要的参数isShow=>true是显示false隐藏,
     type是返回赋值的对象，默认传入this.starTime or this.endTime,
     假如有多个选择日期的文本可以定义多个变量并传入type，调用方法openDate('starTime')，为了让日期选择后唯一性
     **/
    export default {
  name: 'App',
    data () {
        return {
            starTime: '',
            endTime: '',
            calendarData:{
                isShow:false,
                type:this.starTime
            }
        }
    },
    methods: {
      //点击打开日历控件
        openDate(type){
            this.calendarData.isShow = true;
            this.calendarData.type = type;
        },
        //获取选中时间
        choseDate(data,type){
            this[type] = data;
        }
    },
    computed: {},
    created(){
    }
}
</script>
