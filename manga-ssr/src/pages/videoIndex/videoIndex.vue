<template>
    <div class="manga-video-index">
        <div class="manga-video-search-module">
			<div class="manga-video-search-form">
				<div class="manga-video-search-left">
					<img style="width:0.533rem;height:0.533rem;display: block;" src="../../../static/images/search-icon.png">
					<input @input="inputFn" class="manga-video-search-input" type="text" v-model="keyWord" placeholder="请输入动漫名称" value="" />
					<img v-if="deleteFlag" @click="deleteFn" style="width:0.4rem;height:0.4rem;display: block;" src="../../../static/images/delete-icon.png">
				</div>
				<span @click="initSearch();searchFn('search');" class="manga-video-search-form-btn">搜索</span>
			</div>
		</div>
        <div class="manga-video-index-list">
            <router-link class="manga-video-index-link" to="/watch?title=海贼王">
                <img src="https://img.yongjiu7.com/upload/vod/2019-01-17/154771241415.jpg" alt="">
                <p class="manga-video-index-title1">海贼王</p>
                <p class="manga-video-index-title2">更新至:875话</p>
            </router-link>
            <router-link class="manga-video-index-link" to="/watch?title=火影忍者：博人传之次世代继承者">
                <img src="https://img.yongjiu7.com/upload/vod/2019-01-17/15477120582.jpg" alt="">
                <p class="manga-video-index-title1">火影忍者：博人传之次世代继承者</p>
                <p class="manga-video-index-title2">更新至:97话</p>
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
        <div class="manga-video-table">
            <p class="manga-video-table-thead">
                <span class="manga-video-table-title">动漫名称</span>
                <span class="manga-video-table-range">地区分类</span>
                <span class="manga-video-table-status">连载集数</span>
                <span class="manga-video-table-time">更新时间</span>
            </p>
            <ul class="manga-video-table-body">
                <li v-for="(item,index) in tableArr" :key="index">
                    <router-link class="manga-video-table-link" :to="'/watch?name='+item.name+'&id='+item.url">
                        <span class="manga-video-table-link-title" v-text="item.name"></span>
                        <span class="manga-video-table-link-range" v-text="item.range"></span>
                        <span class="manga-video-table-link-status" :style="item.pageIndex?' color:#ff9a6a;':' color:#969696;'" v-text="item.pageIndex?item.pageIndex:'完结'"></span>
                        <span class="manga-video-table-link-time" v-text="item.updateTime"></span>
                    </router-link>
                </li>
            </ul>
        </div>
        <LotusToTop></LotusToTop>
        <tabBar :tabBarData="tabBarData"></tabBar>
    </div>
</template>
<style lang="less">
    @import './videoIndex.less';
</style>
<script>
    import LotusToTop from "../../components/lotusToTop/lotusToTop.vue";
    import tabBar from "../../components/lotusTabBar/LotusTabBar.vue";
    export default {
        name: 'manga-video-index',
        props: ['videoIndexData'],
        data() {
            return {
                keyWord:'',
				deleteFlag:false,
                tabBarData:[{
                    path:'/videoIndex',
                    icon:'/static/images/tv-icon1.png',
                    selectedIcon:'/static/images/tv-icon2.png',
                    title:'视频',
                    color:'#333',
                    selectedColor:'#13a3ff'
                },{
                    path:'/',
                    icon:'/static/images/home-icon1.png',
                    selectedIcon:'/static/images/home-icon2.png',
                    title:'漫画',
                    color:'#333',
                    selectedColor:'#13a3ff'
                },{
                    path:'/pages/category/category',
                    icon:'/static/images/category-icon1.png',
                    selectedIcon:'/static/images/category-icon2.png',
                    title:'分类',
                    color:'#333',
                    selectedColor:'#13a3ff'
                },{
                    path:'/pages/search/search',
                    icon:'/static/images/search-icon1.png',
                    selectedIcon:'/static/images/search-icon2.png',
                    title:'搜索',
                    color:'#333',
                    selectedColor:'#13a3ff'
                }],
                tableArr:[]
            }
        },
        components: {
            LotusToTop,
            tabBar
        },
        methods: {
            inputFn(){
				this.keyWord ? this.deleteFlag = true :this.deleteFlag = false;
			},
			//删除
			deleteFn(){
				this.deleteFlag = false;
				this.hotFlag = true;
				this.noDataFlag = false;
				this.keyWord= '';
				this.searchArr = [];
				this.lotusNoData.isShow = false;
			},
            getListData(){
                const _this = this;
                this.$lotusAjax.post(`${this.$lotusUtils.webUrl.api}movie`, {
                    url: "http://yongjiuzy.cc/?m=vod-type-id-4-pg-1.html"
                }).then((response) => {
                    const res = response;
                    if (res.code === 1) {
                        _this.tableArr = res.data.list;
                    }
                });
            }
        },
        mounted() {
            this.getListData();

        },
        created() {

        }
    }
</script>