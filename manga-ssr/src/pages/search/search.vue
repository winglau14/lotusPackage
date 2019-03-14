<template>
	<div class="manga-search">
		<div class="manga-search-module">
			<div class="manga-search-form">
				<div class="manga-search-left">
					<img style="width:0.533rem;height:0.533rem;display: block;" src="../../../static/images/search-icon.png">
					<input @input="inputFn" class="manga-search-input" type="text" v-model="keyWord" placeholder="请输入漫画名|作者" value="" />
					<img v-if="deleteFlag" @click="deleteFn" style="width:0.4rem;height:0.4rem;display: block;" src="../../../static/images/delete-icon.png">
				</div>
				<span @click="initSearch();searchFn('search');" class="manga-search-form-btn">搜索</span>
			</div>
		</div>
		<div v-if="hotFlag" class="manga-search-hot">
			<span class="manga-search-hot-title">大家都在搜索：</span>
			<router-link class="manga-search-hot-link" to="/pages/detail/detail?id=637143">刍狗</router-link>
			<router-link class="manga-search-hot-link" to="/pages/detail/detail?id=505430">航海王</router-link>
			<router-link class="manga-search-hot-link" to="/pages/detail/detail?id=505432">火影忍者</router-link>
			<router-link class="manga-search-hot-link" to="/pages/detail/detail?id=505435">银魂</router-link>
			<router-link class="manga-search-hot-link" to="/pages/detail/detail?id=505436">龙珠</router-link>
			<router-link class="manga-search-hot-link" to="/pages/detail/detail?id=623654">名侦探柯南</router-link>
		</div>
		<div v-if="pageShow" ref="search" class="manga-search-result">
			<div class="manga-search-result-list">
				<router-link v-for="(item,index) in searchArr" :key="index" :to="'../detail/detail?id='+item.comic_id" class="manga-search-result-item">
					<img class="manga-search-result-pic" v-lazy="item.cover_url">
					<div class="manga-search-result-intor">
						<span class="manga-search-result-txt1">{{item.title}}</span>
						<span class="manga-search-result-txt2">更新到{{item.lated_seqno}}话</span>
						<div class="manga-search-result-tag">
							<span v-for="(cur,curIndex) in item.theme" :key="curIndex">{{cur+' '}}</span>
						</div>
						<div class="manga-search-result-txt3">{{item.brief_intrd}}</div>
					</div>
				</router-link>
				<LotusLoadMoreText :lotusLoadMData="lotusLoadMData"></LotusLoadMoreText>
				<div v-if="noDataFlag" class="list-no-data">
					<span>^_^主人，全部数据已加载完毕了喔^_^</span>
				</div>
			</div>
		</div>
		<LotusNoData :lotusNoData="lotusNoData"></LotusNoData>
		<tabBar :tabBarData="tabBarData"></tabBar>
	</div>
</template>

<script>
	import LotusLoadMoreText from "../../components/lotusLoadMoreText/LotusLoadMoreText.vue";
	import LotusNoData from "../../components/lotusNodata/LotusNoData.vue";
    import tabBar from "../../components/lotusTabBar/LotusTabBar.vue";
    import loadMore from "../../Utils/loadMore";
	export default {
		data(){
			return{
				lotusLoadMData:{
					isShow:false,
					showLoadImg:true,
					text:''
				},
				lotusNoData:{
					isShow:false,
                    imgUrl:'',
					text:'暂未搜索到相关漫画数据^_^!',
					textStyle:'color:#969696;font-size:0.35rem;',
                    imgStyle:'width:4.96rem;margin-top:2rem;'
				},
				noDataFlag:false,
				scrollHeight:"",
				flag:true,
				pageShow:false,
				searchArr:[],
				pageIndex:1,
				keyWord:'',
				deleteFlag:false,
				hotFlag:true,
                tabBarData:[{
                    path:'/',
                    icon:'/static/images/home-icon1.png',
                    selectedIcon:'/static/images/home-icon2.png',
                    title:'首页',
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
                }]
			}
		},
		components:{
			LotusLoadMoreText,
			LotusNoData,
            tabBar
		},
        mounted(){
            const _this = this;
            _this.$lotusChangeTitle("爱动漫");
            if(typeof document !== "undefined"){
                document.documentElement.scrollTop = 0;
            }
        },
        created() {
            const _this = this;
            //上拉加载更多
            const upLoadMore = () => {
                if (_this.$refs["search"]) {
                    _this.searchFn();
                }
            };
            if(typeof window !== "undefined"){
                loadMore(upLoadMore, window.innerHeight * (2 / 3), 'up',true);
            }
        },
		methods:{
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
			//初始化搜索状态
			initSearch(){
				this.hotFlag = false;
				this.flag = true;
				this.searchArr = [];
				this.pageIndex = 1;
				this.lotusLoadMData.isShow = false;
				this.noDataFlag = false;
				this.lotusNoData.isShow = false;
			},
			//搜索fn
			searchFn(type){
				const _this = this;
					if(_this.flag){
						_this.flag = false;
							this.$lotusAjax.post(`${_this.$lotusUtils.webUrl.api}`,{
								uri:"Search/result",
								options:JSON.stringify({
									word:_this.keyWord,
									page:_this.pageIndex
								})
							}).then((response)=>{
								_this.test = JSON.stringify(response);
								const res = response.data;
								if(res){
									_this.pageShow = true;
									_this.searchArr = _this.searchArr.concat(res);
									_this.pageIndex+=1;
									_this.flag = true;
									if(type){
										_this.lotusLoadMData.isShow = false;
									}else{
										_this.lotusLoadMData.isShow = true;
									}
									_this.noDataFlag = false;	
								}else{
									_this.lotusLoadMData.isShow = false;
									_this.noDataFlag = true;
									if(type){
										_this.lotusNoData.isShow = true;
									}
								}
							});
					}
				
			}
		}
	}
</script>

<style lang="less">
@import "./search.less";
</style>
