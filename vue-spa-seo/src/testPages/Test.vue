<template>
    <div id="register" class="register">
        <p style="text-align: center">
            <span style="font-size: 0.37rem;">日期控件：</span>
            <span @click="bindDateChange('starTime')" style="font-size: 0.37rem;" v-text="starTime+'至'"></span>
            <span @click="bindDateChange('endTime')" style="font-size: 0.37rem;" v-text="endTime"></span>
        </p>
        <!--日期控件-->
        <lotus-calendar @returnDate="choseDate" :calendarData="calendarData"></lotus-calendar>
    </div>
</template>
<style scoped>
    .register{
        padding-top: 50px;
        font-size: 30px;
    }
</style>
<script>
import lotusCalendar from "../components/lotusCalendar/LotusCalendar.vue"
export default {
  name: 'register',
  components: {
      lotusCalendar
  },
  data () {
    return {
      starTime: '控件1',
      endTime: '控件2',
      calendarData: {
        isShow: false
      }
    }
  },
  methods: {
    bindDateChange (type) {
      this.calendarData.isShow = true
      this.calendarData.type = type
    },
    // 获取选中时间
    choseDate (data, type) {
      this[type] = data
    }
  },
  computed: {
  },
  mounted () {
  },
  created () {
    // 开始时间
    const startTime = `${new Date().getFullYear()}-${new Date().getMonth() + 1}-${new Date().getDate()}`
    // 结束时间
    const endTime = `${new Date().getFullYear()}-${new Date().getMonth() + 1}-${new Date().getDate()}`
    this.starTime = this.$lotusUtils.dateFormat(startTime)
    this.endTime = this.$lotusUtils.dateFormat(endTime)
  }
}
</script>
