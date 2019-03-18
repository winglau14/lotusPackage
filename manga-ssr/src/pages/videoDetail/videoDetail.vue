<template>
    <div class="manga-video-detail">
        <div class="manga-video-detail-intor">
            <img v-lazy="videoDetail.pic" alt="">
            <div class="manga-video-detail-msg">
                <p v-text="videoDetail.name"></p>
                <p v-text="videoDetail.otherName"></p>
                <p v-text="videoDetail.zy"></p>
                <p v-text="videoDetail.dy"></p>
                <p style="overflow:hidden;">
                    <span style="float:left;" v-text="videoDetail.lan"></span><span style="float:right;" v-text="videoDetail.range"></span></p>
                <p style="overflow:hidden;">
                    <span style="float:left;" v-text="videoDetail.status"></span><span style="float:right;" v-text="videoDetail.year"></span>
                </p>
                <p v-text="videoDetail.time"></p>
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
                videoArr:[]
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
                        _this.videoArr = res.data.list.reverse();
                    }
                });
            }
        }
    }
</script>