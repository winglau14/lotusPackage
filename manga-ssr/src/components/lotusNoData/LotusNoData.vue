<template>
  <div v-if="lotusNoData.isShow" :style="lotusNoData.wrapStyle" class="lotus-no-datas">
      <img :src="lotusNoData.imgUrl?lotusNoData.imgUrl:'/static/images/npc-not-found.png'" :style="lotusNoData.imgStyle"  class="lotus-no-datas-img" alt="暂无图片">
      <p v-text="lotusNoData.text" :style="lotusNoData.textStyle" class="lotus-no-datas-text"></p>
  </div>
</template>
<style lang="less">
  @import 'lotusNoData.less';
</style>
<script>
  export default {
    name: 'lotus-no-data',
    props: ['lotusNoData'],
    components: {},
    data () {
      return {}
    }

  }
</script>
