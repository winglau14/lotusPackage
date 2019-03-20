<template>
    <div ref="videoIndex" class="manga-video-index">
        <div v-if="pageShowVal>0">
            <div style="height:1.12rem;">
                <div class="manga-video-search-module">
                <div class="manga-video-search-form">
                    <div class="manga-video-search-left">
                        <img style="width:0.533rem;height:0.533rem;display: block;" src="../../../static/images/search-icon.png">
                        <input @input="inputFn" class="manga-video-search-input" type="text" v-model="keyWord" placeholder="请输入动漫名称" value=""/>
                        <img v-if="deleteFlag" @click="deleteFn" style="width:0.4rem;height:0.4rem;display: block;" src="../../../static/images/delete-icon.png">
                    </div>
                    <span @click="initSearch();searchFn();" class="manga-video-search-form-btn">搜索</span>
                </div>
            </div>
            </div>
            <div class="manga-video-index-list">
                <router-link class="manga-video-index-link" to="/videoDetail?name=海贼王&url=/?m=vod-detail-id-2320.html">
                    <img src="/static/images/hzw-pic.jpg" alt="">
                    <p class="manga-video-index-title1">海贼王</p>
                    <!--<p class="manga-video-index-title2">更新至:875话</p>-->
                </router-link>
                <router-link class="manga-video-index-link" to="/videoDetail?name=火影忍者：博人传之次世代继承者&url=/?m=vod-detail-id-1529.html">
                    <img src="/static/images/brc-pic.jpg" alt="">
                    <p class="manga-video-index-title1">博人传之次世代继承者</p>
                    <!--<p class="manga-video-index-title2">更新至:97话</p>-->
                </router-link>
                <!--<router-link class="manga-video-index-link" to="/watch?title=龙珠">
                    <img src="https://img.yongjiu7.com/upload/vod/2019-01-17/154773044811.jpg" alt="">
                    <p class="manga-video-index-title1">龙珠</p>
                    <p class="manga-video-index-title2">更新至:153话</p>
                </router-link>
                <router-link class="manga-video-index-link" to="/watch?title=高达创形者">
                    <img src="https://img.yongjiu7.com/upload/vod/2019-01-17/154771548718.jpg" alt="">
                    <p class="manga-video-index-title1">高达创形者</p>
                    <p class="manga-video-index-title2">更新至:25话</p>
                </router-link>
                <router-link class="manga-video-index-link" to="/watch?title=银魂第六季">
                    <img src="https://img.yongjiu7.com/upload/vod/2019-01-30/15488210571.jpg" alt="">
                    <p class="manga-video-index-title1">银魂第六季</p>
                    <p class="manga-video-index-title2">更新至:355话</p>
                </router-link>-->
            </div>
            <div v-if="tableArr.length>0" class="manga-video-table">
                <p class="manga-video-table-thead">
                    <span class="manga-video-table-title">影片名称</span>
                    <span class="manga-video-table-range">影片类目</span>
                    <span class="manga-video-table-time">更新时间</span>
                </p>
                <ul class="manga-video-table-body">
                    <li v-for="(item,index) in tableArr" :key="index">
                        <router-link class="manga-video-table-link" :to="'/videoDetail?name='+item.name+'&url='+item.url">
                            <span class="manga-video-table-link-title" v-text="item.name"></span>
                            <span class="manga-video-table-link-range" v-text="item.lm?item.lm:'--'"></span>
                            <span class="manga-video-table-link-time" v-text="item.updateTime"></span>
                        </router-link>
                    </li>
                </ul>
                <LotusLoadMoreText :lotusLoadMData="lotusLoadMData"></LotusLoadMoreText>
                <div v-if="noDataFlag" class="list-no-data">
                    <span>^_^主人，全部数据已加载完毕了喔^_^</span>
                </div>
            </div>
            <LotusNoData :lotusNoData="lotusNoData"></LotusNoData>
            <LotusToTop></LotusToTop>
            <tabBar :tabBarData="tabBarData"></tabBar>
        </div>
        <skeletonIndex :skeletonIndexData="6" v-if="!pageShowVal"></skeletonIndex>
    </div>
</template>
<style lang="less">
    @import './videoIndex.less';
</style>
<script>
    import LotusToTop from "../../components/lotusToTop/lotusToTop.vue";
    import LotusLoadMoreText from "../../components/lotusLoadMoreText/LotusLoadMoreText.vue";
    import LotusNoData from "../../components/lotusNodata/LotusNoData.vue";
    import tabBar from "../../components/lotusTabBar/LotusTabBar.vue";
    import skeletonIndex from "../../components/skeleton/SkeletonIndex.vue";
    import loadMore from "../../Utils/loadMore";

    export default {
        name: 'manga-video-index',
        props: ['videoIndexData'],
        data() {
            return {
                keyWord: '',
                deleteFlag: false,
                tabBarData: this.$lotusUtils.tabBarData,
                tableArr: [],
                lotusLoadMData: {
                    isShow: false,
                    showLoadImg: true,
                    text: ''
                },
                lotusNoData: {
                    isShow: false,
                    imgUrl: '',
                    text: '暂未搜索到相关动漫数据^_^!',
                    textStyle: 'color:#969696;font-size:0.35rem;',
                    imgStyle: 'width:4.96rem;margin-top:2rem;',
                    wrapStyle:'padding-top:0;'
                },
                noDataFlag: false,
                pageIndex: 1,
                pageSize: 50,
                flag:true,
                pageShowVal:0
            }
        },
        components: {
            LotusToTop,
            LotusLoadMoreText,
            LotusNoData,
            tabBar,
            skeletonIndex
        },
        methods: {
            inputFn() {
                this.keyWord ? this.deleteFlag = true : this.deleteFlag = false;
            },
            //删除
            deleteFn() {
                this.deleteFlag = false;
                this.keyWord = '';
                this.lotusNoData.isShow = false;
            },
            //无搜索关键词获取列表数据
            getListData() {
                const _this = this;
                let url = "";
                //type === search搜索翻页
                if (_this.keyWord) {
                    url = `?m=vod-index-pg-${_this.pageIndex}.html`;
                } else{
                    url = `?m=vod-type-id-4-pg-${_this.pageIndex}.html`;
                }
                //阻止滑动加载更多2次触发
                if(_this.keyWord&&_this.tableArr.length < _this.pageSize){
                    return false;
                }

                if (_this.flag) {
                    _this.flag = false;
                    this.$lotusAjax.post(`${this.$lotusUtils.webUrl.api}movie`, {
                        url: url,
                        /*isHide:true*/
                    }).then((response) => {
                        const res = response;
                        if (res.code === 1) {
                            _this.pageShow = true;
                            _this.tableArr = _this.tableArr.concat(res.data.list);
                            if (res.data.list.length === _this.pageSize) {
                                _this.pageIndex += 1;
                                _this.flag = true;
                            }
                            //点击搜索第一次不用显示加载更多
                            _this.keyWord?_this.lotusLoadMData.isShow = false:_this.lotusLoadMData.isShow = true;
                            //数据为空
                            if(!res.data.list.length||res.data.list.length<_this.pageSize){
                                _this.lotusLoadMData.isShow = false;
                                _this.noDataFlag = true;
                            }else{
                                _this.noDataFlag = false;
                            }
                            _this.pageShowVal = 1;
                        }
                    });
                }
            },
            //初始化搜索状态
            initSearch() {
                this.flag = true;
                this.tableArr = [];
                this.pageIndex = 1;
                this.lotusLoadMData.isShow = false;
                this.noDataFlag = false;
                this.lotusNoData.isShow = false;
            },
            //搜索fn
            searchFn() {
                const _this = this;
                let url = '';
                let data = {};
                if(_this.keyWord){
                    url = `${_this.$lotusUtils.webUrl.api}movieSearch/`;
                    data.wd = _this.keyWord;
                }else{
                    url = `${this.$lotusUtils.webUrl.api}movie/`;
                    data.url = `?m=vod-type-id-4-pg-${_this.pageIndex}.html`;
                }
                this.$lotusAjax.post(url, data).then((response) => {
                    const res = response;
                    if (res.code === 1) {
                        _this.tableArr = res.data.list;
                        _this.pageIndex += 1;
                        res.data.list.length === _this.pageSize ? _this.flag = true :_this.flag = false;
                        //数据为空
                        if(!res.data.list.length){
                            _this.lotusNoData.isShow = true;
                        }
                        if(res.data.list.length<_this.pageSize){
                            _this.noDataFlag = true;
                        }
                    }
                });
            }
        },
        mounted() {
            this.getListData();
        },
        created() {
            const _this = this;
            //上拉加载更多
            const upLoadMore = () => {
                if (_this.$refs["videoIndex"]) {
                    _this.getListData();
                }
            };
            if (typeof window !== "undefined") {
                loadMore(upLoadMore, window.innerHeight * (2/ 3), 'up', true);
            }
        }
    }
</script>