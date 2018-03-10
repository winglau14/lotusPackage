# lotus-calendar

> vue 日期组件

## how to use 

### npm install lotus-calendar --save or yarn add lotus-calendar
### 插件的方式引入使用
1.main.js 
```$xslt
    import lotusCalendar from 'lotus-calendar'
    import 'lotus-calendar/dist/lotus-calendar.min'
    Vue.use(lotusCalendar) 
```

2.vue页面内引用日历控件：<br/>
```
    <lotus-calendar @returnDate="choseDate" :calendarData="calendarData"></lotus-calendar>
```

3.触发日历控件例子：<br/>
```
    <p>
       <span >日期控件：</span>
       <span @click="bindDateChange('starTime')" v-text="starTime+'至'"></span>
       <span @click="bindDateChange('endTime')" v-text="endTime"></span>
    </p>
```

4.参数说明：<br/>
（1）参数定义
```$xslt
    data () {
        return {
            starTime: '',
            endTime: '',
            calendarData:{
                isShow:false
            },
        }
    }
```

5.方法定义与调用：<br/>
```$xslt
    methods: {
        //获取选中时间
        choseDate(data,type){
            this[type] = data;
        },
        //触发显示日历控件
        bindDateChange(type){
             this.calendarData.isShow = true;
             this.calendarData.type = type;
        }
    }
```

6.演示 <br/>
![lotus-calendar](https://raw.githubusercontent.com/winglau14/lotusPackage/master/lotusCalendar/1.gif)


