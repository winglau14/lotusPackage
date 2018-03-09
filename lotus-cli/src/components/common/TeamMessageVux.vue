<template>
    <div class="team-message">
        <img :src="teamMessage.imgUrl" class="team-message-img" alt="暂无图片">
        <div class="team-message-member" v-html="teamMessage.member"></div>
    </div>
</template>
<style lang="less">
    @import '../../style/other/teamMessage.less';
</style>
<script>
    export default {
        props: ['teamMessage'],
        components: {},
        data () {
            return {}
        }

    }
</script>
