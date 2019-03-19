<template>
    <div v-if="pageShow" class="manga-video-detail">
        <div class="manga-video-detail-intor">
            <img v-lazy="videoDetail.pic" alt="">
            <div class="manga-video-detail-msg">
                <p v-text="'影片名称：'+videoDetail.name"></p>
                <p v-text="'影片别名：'+videoDetail.otherName"></p>
                <p v-text="'影片主演：'+videoDetail.zy"></p>
                <p v-text="'影片导演：'+videoDetail.dy"></p>
                <p style="overflow:hidden;">
                    <span style="float:left;" v-text="'语言：'+(videoDetail.lan?videoDetail.lan:'--')"></span><span style="float:right;" v-text="'地区：'+videoDetail.range"></span></p>
                <p style="overflow:hidden;">
                    <span style="float:left;" v-text="'连载状态：'+videoDetail.status"></span><span style="float:right;" v-text="'上映年份：'+videoDetail.year"></span>
                </p>
                <p v-text="'更新时间：'+videoDetail.updateTime"></p>
            </div>
        </div>
        <div class="manga-video-detail-list">
            <router-link v-for="(item,index) in videoDetail.list" :key="index" :to="'/watch?name='+videoDetail.name+'-'+item.page+'&url='+item.url">{{item.page}}</router-link>
        </div>
        <LotusToTop></LotusToTop>
    </div>
</template>
<style lang="less">
    @import './videoDetail.less';
</style>
<script>
import LotusToTop from "../../components/lotusToTop/lotusToTop.vue";
    export default {
        data() {
            return {
                url:'',
                videoDetail:{},
                videoArr:[],
                pageShow:false
            }
        },
        components:{
            LotusToTop
        },
        mounted() {
            const title = this.$route.query.name;
            this.url = this.$route.query.url;
            this.$lotusChangeTitle(title);
            this.getDetailData();
        },
        methods: {
            getDetailData(){
                const _this = this;
                this.$lotusAjax.post(`${this.$lotusUtils.webUrl.api}movieDetail`, {
                    url: _this.url
                }).then((response) => {
                    const res = response;
                    if (res.code === 1) {
                        _this.videoDetail = res.data;
                        _this.videoArr = res.data.list;
                        _this.pageShow = true;
                    }
                });
            }
        }
    }
</script>