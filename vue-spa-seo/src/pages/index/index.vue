<template>
    <div class="manga-index">
        <div v-if="pageShowVal === 2">
            <!--banner-->
            <div class="manga-index-swiper">
                <carousel :imageList="imageList"></carousel>
            </div>
            <!--category-->
            <!-- <view class="manga-index-category">
                <navigator class="manga-index-category-link" url="/">
                    <text class="manga-index-category-icon manga-index-category-icon1"></text>
                    <text>分类</text>
                </navigator>
                <navigator class="manga-index-category-link" url="/">
                    <text class="manga-index-category-icon manga-index-category-icon2"></text>
                    <text>排行</text>
                </navigator>
                <navigator class="manga-index-category-link" url="/">
                    <text class="manga-index-category-icon manga-index-category-icon3"></text>
                    <text>追更</text>
                </navigator>
                <navigator class="manga-index-category-link" url="/">
                    <text class="manga-index-category-icon manga-index-category-icon4"></text>
                    <text>历史</text>
                </navigator>
            </view> -->
            <!--日漫经典-->
            <div class="manga-index-module">
                <div class="manga-index-module-title">
                    <span class="manga-index-module-icon manga-index-module-icon2"></span>
                    <router-link class="manga-index-module-more" to="/pages/filter/filter?title=日漫经典&type=japanComic">更多
                    </router-link>
                </div>
                <div class="manga-index-module-list">
                    <router-link v-for="(item,index) in jdData" :key="index" class="manga-index-module-item manga-index-module-item1" :to="'/pages/detail/detail?id='+item.comic_id">
                        <img class="manga-index-module-img manga-index-module-img1" v-lazy="item.cover_url">
                        <span class="manga-index-module-text1" v-text="item.title"></span>
                        <span class="manga-index-module-text2" style="color:#ff9a6a;" v-text="'更新至:'+item.lated_seqno+'话'"></span>
                        <div style="font-size: 0;line-height: 0;">
                            <span style="margin-top:0.1rem;line-height:normal;vertical-align:middle;display: inline-block;font-size: 0.32rem;color:#969696;padding-right:0.133rem;" v-for="(cur,curIndex) in item.theme" :key="curIndex" v-text="cur"></span>
                        </div>
                    </router-link>
                </div>
            </div>
            <!--今日更新-->
            <div class="manga-index-module">
                <div class="manga-index-module-title">
                    <span class="manga-index-module-icon manga-index-module-icon4"></span>
                    <router-link class="manga-index-module-more" to="/pages/filter/filter?title=今日我更新&type=todayUpdate">更多</router-link>
                </div>
                <div class="manga-index-module-list">
                    <router-link v-for="(item,index) in indexData.todayUpdate" :key="index" class="manga-index-module-item manga-index-module-item1" :to="'/pages/detail/detail?id='+item.comic_id">
                        <img class="manga-index-module-img manga-index-module-img1" v-lazy="item.cover_url">
                        <span class="manga-index-module-text1" v-text="item.title"></span>
                        <span class="manga-index-module-text2" style="color:#ff9a6a;" v-text="'更新至:'+item.lated_seqno+'话'"></span>
                    </router-link>
                </div>
            </div>
            <!--无良的推荐-->
            <div class="manga-index-module">
                <div class="manga-index-module-title">
                    <span class="manga-index-module-icon"></span>
                    <router-link class="manga-index-module-more" to="/pages/filter/filter?title=无良的推荐&type=recommend">更多</router-link>
                </div>
                <div class="manga-index-module-list">
                    <router-link v-for="(item,index) in indexData.recommend" :key="index" class="manga-index-module-item" :to="'/pages/detail/detail?id='+item.comic_id">
                        <img class="manga-index-module-img" v-lazy="item.pic">
                        <span class="manga-index-module-text1" v-text="item.title"></span>
                        <span class="manga-index-module-text2" v-text="item.short_desc"></span>
                    </router-link>
                </div>
            </div>
            <!--新作上线-->
            <div class="manga-index-module">
                <div class="manga-index-module-title">
                    <span class="manga-index-module-icon manga-index-module-icon3"></span>
                    <router-link class="manga-index-module-more" to="/pages/filter/filter?title=新作上线&type=riseFastNewComic">
                        更多
                    </router-link>
                </div>
                <div class="manga-index-module-list">
                    <router-link v-for="(item,index) in indexData.riseFastNewComic" :key="index" class="manga-index-module-item manga-index-module-item1" :to="'/pages/detail/detail?id='+item.comic_id">
                        <img class="manga-index-module-img manga-index-module-img1" v-lazy="item.cover_url">
                        <span class="manga-index-module-text1" v-text="item.title"></span>
                        <div style="font-size: 0;line-height: 0;">
                            <span style="line-height:normal;margin-top:0.1rem;vertical-align:middle;display: inline-block;font-size: 0.32rem;color:#969696;padding-right:0.133rem;" v-for="(cur,curIndex) in item.theme" :key="curIndex" v-text="cur"></span>
                        </div>
                    </router-link>
                </div>
            </div>
            <!--今日TOP5-->
            <div class="manga-index-module">
                <div class="manga-index-module-title">
                    <span class="manga-index-module-icon5">今日TOP5</span>
                </div>
                <div class="manga-index-module-list">
                    <router-link v-for="(item,index) in indexData.topZone" :key="index" class="manga-index-module-item manga-index-module-item2" :to="'/pages/detail/detail?id='+item.comic_id">
                        <img class="manga-index-module-img manga-index-module-img2 manga-index-module-img3" v-lazy="item.pic">
                        <div class="manga-index-module-intor">
                            <span class="manga-index-module-text1" v-text="item.title"></span>
                            <div>
                                <span style="vertical-align:middle;display: inline-block;font-size: 0.32rem;color:#969696;padding-right:0.133rem;" v-for="(cur,curIndex) in item.theme" :key="curIndex" v-text="cur"></span>
                            </div>
                        </div>
                    </router-link>
                </div>
            </div>
            <div class="manga-index-tips">^_^爱动漫，给主人你想要的，应有尽有^_^</div>
            <div class="manga-index-footer">
                本站声明:网站部分内容来自网络,如有侵权请联系我们 1415430748@qq.com ,我们将及时处理!
            </div>
            <!--广告位-->
            <advModule :advData="advData"></advModule>
            <tabBar :tabBarData="tabBarData"></tabBar>
        </div>
        <!--<skeletonIndex :skeletonIndexData="6" v-if="!pageShowVal"></skeletonIndex>-->
    </div>
</template>
<style lang="less">
    @import "../../../static/style/pages/index.less";
</style>
<script>
    import advModule from "../../components/advert/advert.vue";
    import carousel from "../../components/lotusCarousel/LotusCarousel.vue";
    import tabBar from "../../components/lotusTabBar/LotusTabBar.vue";
    /*import skeletonIndex from "../../components/skeleton/SkeletonIndex.vue";*/
    export default {
        data() {
            return {
                indexData: {},//首页数据源
                jdData: {},//日漫经典
                advData: {
                    href: 'https://s.click.taobao.com/VoofrEw',
                    imgUrl: 'http://img.alicdn.com/bao/uploaded/i2/1824693883/O1CN011eYSNt5WB7hCWkZ_!!1824693883.jpg',
                    title: '海贼王手办路飞索隆艾斯模型公仔动漫周边生日礼物男生二次元摆件'
                },
                imageList:[],
                tabBarData:this.$lotusUtils.tabBarData,
                pageShowVal:0
            }
        },
        components: {
            advModule,
            carousel,
            tabBar,
            /*skeletonIndex*/
        },
        created() {
            this.getDataList();

        },
        methods: {
            getDataList() {
                const _this = this;
                this.$lotusAjax.post(`${this.$lotusUtils.webUrl.api}mApi/`, {
                    uri: "Index/all",
                    options: JSON.stringify({}),
                    /*isHide:true*/
                }).then((response) => {
                    const res = response.data;
                    if (res) {
                        _this.indexData = res;
                        res.banner.map((item)=>{
                            const obj = {pic:item.pic,url:`/pages/detail/detail?id=${item.comic_id}`};
                            _this.imageList.push(obj);
                        });
                        console.log(res.banner);
                        _this.pageShowVal +=1;
                    }
                    this.getJdData();
                });
            },
            //日漫经典
            getJdData() {
                const _this = this;
                this.$lotusAjax.post(`${this.$lotusUtils.webUrl.api}mApi/`, {
                    uri: "Index/more",
                    options: JSON.stringify({
                        filter: "japanComic",
                        page: 1
                    }),
                    /*isHide:true*/
                }).then((response) => {
                    const res = response.data;
                    if (res) {
                        _this.pageShowVal +=1;
                        _this.jdData = res.splice(0, 6);
                    }
                });
            }
        }
    }
</script>
