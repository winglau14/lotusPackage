<template>
    <div v-if="calendarData.isShow" class="lotus-calendar-wrap">
        <div class="lotus-calendar">
            <div class="lotus-calendar-cur-date">
                <div class="lotus-calendar-center">
                    <div class="lotus-calendar-month">
                        <p class="lotus-calendar-prev" @click="clickPrevMonth">←</p>
                        <p class="lotus-calendar-cur-text">{{showCurMonth}}月</p>
                        <p class="lotus-calendar-next" @click="clickNextMonth">→</p>
                    </div>
                    <div class="lotus-calendar-year">
                        <p class="lotus-calendar-prev" @click="clickPrevYear">←</p>
                        <p class="lotus-calendar-cur-text">{{curYear}}</p>
                        <p class="lotus-calendar-next" @click="clickNextYear">→</p>
                    </div>
                </div>
            </div>
            <div class="lotus-calendar-week">
                <div class="lotus-calendar-week-text lotus-calendar-week-range" v-for="(item,index) in weekText" :key="index">
                    {{item}}
                </div>
            </div>
            <div class="lotus-calendar-days">
                <div class="lotus-calendar-days-text" v-for="(item,index) in totalDaysArr" :key="index" @click="clickTargetTime(item,index)">
                    <p :class="item.flag?'lotus-calendar-days-act':'lotus-calendar-days-gray'" v-if="item.type == 0">
                        {{item.day}}</p>
                    <p :class="item.flag?'lotus-calendar-days-act':''" v-else-if="item.type == 1">
                        {{item.day}}</p>
                    <p :class="item.flag?'lotus-calendar-days-act':''" v-else="item.type == 2">{{item.day}}</p>
                </div>
            </div>
        </div>
        <div v-if="calendarData.isShow" class="lotus-calendar-mask" @click="clickShowCalendar"></div>
    </div>
</template>
<style lang="less">
    @import '../../style/lotusComponents/lotusCalendar.less';
</style>
<script>
    export default {
        name: 'lotus-calendar',
        props: ['calendarData'],
        data () {
            return {
                isShow: true,
                weekText: ['一', '二', '三', '四', '五', '六', '日'],
                aMonth: [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
                curMonthDays: 0,//当前月天数
                preMonthDays: 0,//上一个月天数
                nextMonthDays: 0,//下一个月天数
                totalDaysArr: [],//日历总天数
                curYear: 0,//当前年份
                curMonth: 0,//当前月份
                curDate: 0,//当前日份
                showCurMonth: 0,//显示日历中月份
                choseIndex: 0,
                choseCurTime: null,//每个日期obj有day/month/year
                showFlag: true,
                prevYear: '',//上一年
                time:null
            }
        },
        components: {},
        methods: {
            //点击上一月
            clickPrevMonth(){
                //console.log('prev'+this.curMonth);
                this.totalDaysArr = [];
                //判断点击到一月进入一年设置月份为12月
                if (this.curMonth <= 0) {
                    this.curMonth = 11;
                    this.curYear--;
                } else {
                    this.curMonth--;
                }
                //生成日历数据
                this.createCalendarData(this.curYear, this.curMonth, this.curDate);
            },
            //点击下一月
            clickNextMonth(){
                this.totalDaysArr = [];
                this.curMonth++;
                //超过12月进入下一年判断设置月份为1月
                if (this.curMonth >= 12) {
                    this.curMonth = 0;
                    this.curYear++;
                }
                //生成日历数据
                this.createCalendarData(this.curYear, this.curMonth, this.curDate);
            },
            //点击上一年
            clickPrevYear(){
                this.prevYear = '';
                this.totalDaysArr = [];
                this.curYear--;
                //生成日历数据
                this.createCalendarData(this.curYear, this.curMonth, this.curDate);
            },
            //点击下一年
            clickNextYear(){
                this.prevYear = '';
                this.totalDaysArr = [];
                this.curYear++;
                //生成日历数据
                this.createCalendarData(this.curYear, this.curMonth, this.curDate);
            },
            //选中日期
            clickTargetTime(curTime){
                let objTime = curTime;
                //遍历选中时间是否与当前时间一致，一致flag = true or flag = false;
                this.totalDaysArr.map((item) => {
                    item.day === objTime.day && item.month === objTime.month ? item.flag = true : item.flag = false;
                });
                //为了不影响objTime这个数据源，定义一个临时obj
                let tempObj = {};
                //处理选中的时间
                for (let i in objTime) {
                    if (i === 'day') {
                        tempObj.day = objTime[i];
                        tempObj.day = tempObj.day < 10 ? `0${tempObj.day}` : tempObj.day;
                    }
                    if (i === 'month') {
                        //选中时间跨入上一年12月份
                        tempObj.month = objTime[i];
                        if (objTime[i] < 0) {
                            tempObj.month = 12;
                        } else {
                            tempObj.month = tempObj.month + 1 < 10 ? `0${tempObj.month + 1}` : tempObj.month + 1;
                        }
                    }
                    if(i === 'year'){
                        tempObj.year = objTime[i];
                    }
                }

                this.choseCurTime = tempObj;
                this.showFlag = false;
                //判断选择时间跨入了下一年换算当前月份
                if (this.choseCurTime.month > 12) {
                    this.choseCurTime.month = this.choseCurTime.month - 12 < 10 ? `0${this.choseCurTime.month - 12}` : this.choseCurTime.month - 12;
                }
                //关闭日历弹层
                this._props.calendarData.isShow = false;
                //传值给父组件
                this.$emit('returnDate', `${this.choseCurTime.year}-${this.choseCurTime.month}-${this.choseCurTime.day}`, this._props.calendarData.type);
            },
            //显示与隐藏日历
            clickShowCalendar(){
                this._props.calendarData.isShow = false;
            },
            //显示
            show() {
                this.returnType = this._props.calendarData.type;
                this.showFlag = true;
                this.totalDaysArr = [];
                const objDate = new Date();
                //当前年份
                this.curYear = objDate.getFullYear();
                //当前月份
                this.curMonth = objDate.getMonth();
                //当前几号
                this.curDate = objDate.getDate();
                //生成日历数据
                this.createCalendarData(this.curYear, this.curMonth, this.curDate);
            },
            //方法调用
            lotusCalendar() {
                this.show();
            },
            //是否为闰年
            isLeapYear(year) {
                return ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0);
            },
            //获取当前月份天数
            getCurMonthDays(year, month) {
                if (this.isLeapYear(year)) {
                    //判断当前月份是2月
                    if (this.curMonth === 1) {
                        return this.aMonth[1] = 29;
                    } else {
                        return this.aMonth[month];
                    }
                } else {
                    //不是闰年重置2月天数为28
                    this.aMonth[1] = 28;
                    return this.aMonth[month];
                }
            },
            //自动补0
            autoPatchZero(val) {
                return val < 10 ? `0${val}` : val;
            },
            //生成日历数据 curYear年份 curMonth月份 curDate号数
            createCalendarData(curYear, curMonth, curDate) {
                //换算当前月份自动补全 val < 10 ? `0${val}` : val;
                this.showCurMonth = curMonth;
                this.showCurMonth = this.autoPatchZero(this.showCurMonth + 1);
                let preYear = '';
                //当前月份1号星期几
                let iWeek = new Date(curYear, curMonth, 1).getDay();
                if (iWeek === 0) {
                    iWeek = 7;
                }
                if (curMonth === 0) {
                    const t = 12;
                    preYear = curYear;
                    preYear -= 1;
                    this.prevYear = preYear;
                    //上一个月份共多少天
                    this.preMonthDays = this.getCurMonthDays(preYear, t - 1);
                } else {
                    //上一个月份共多少天
                    this.preMonthDays = this.getCurMonthDays(curYear, curMonth - 1);
                }
                //当前月份共多少天
                this.curMonthDays = this.getCurMonthDays(curYear, curMonth);
                //下一个月份共多少天
                this.nextMonthDays = this.getCurMonthDays(curYear, curMonth + 1);
                //上一个月剩下几天
                for (let i = iWeek - 2; i >= 0; i--) {
                    let obj = {
                        day: this.preMonthDays - i,
                        className: 'gray',
                        type: 0,
                        flag: false,
                        month: curMonth - 1,
                        year: preYear ? preYear : curYear
                    };
                    this.totalDaysArr.push(obj);
                }

                //当前月份天数
                for (let i = 1; i <= this.curMonthDays; i++) {
                    let obj = {
                        day: i,
                        type: 1,
                        flag: false,
                        className: '',
                        month: curMonth,
                        year: curYear
                    };
                    if (i === curDate) {
                        obj.flag = true;
                        obj.className = 'act';
                        obj.type = 2;
                    }
                    this.totalDaysArr.push(obj);
                }

                //下一个月开始的几天
                const leaveLength = 42 - this.totalDaysArr.length;
                for (let i = 1; i <= leaveLength; i++) {
                    let obj = {
                        day: i,
                        className: 'gray',
                        type: 0,
                        flag: false,
                        month: curMonth + 1,
                        year: curYear
                    };
                    //点击月份进入了下一年
                    if(obj.month >= 12){
                        obj.year += 1
                    }
                    this.totalDaysArr.push(obj);
                }
            }
        },
        computed: {},
        mounted(){
            this.lotusCalendar();
        },
        created(){
        }
    }
</script>