<template>
	<view class="manga-search">
		<view class="manga-search-module">
			<view class="manga-search-form">
				<view class="manga-search-left">
					<image style="width:40upx;height:40upx;display: block;" src="../../static/images/search-icon.png" mode="aspectFit"></image>
					<input @input="inputFn" class="manga-search-input" type="text" v-model="keyWord" placeholder="请输入漫画名|作者" value="" />
					<image v-if="deleteFlag" @tap="deleteFn" style="width:30upx;height:30upx;display: block;" src="../../static/images/delete-icon.png" mode="aspectFit"></image>
				</view>
				<text v-on:tap="initSearch();searchFn('search');" class="manga-search-form-btn">搜索</text>
			</view>
		</view>
		<view v-if="hotFlag" class="manga-search-hot">
			<text class="manga-search-hot-title">大家都在搜索：</text>
			<navigator class="manga-search-hot-link" url="/pages/detail/detail?id=637143">刍狗</navigator>
			<navigator class="manga-search-hot-link" url="/pages/detail/detail?id=505430">航海王</navigator>
			<navigator class="manga-search-hot-link" url="/pages/detail/detail?id=505432">火影忍者</navigator>
			<navigator class="manga-search-hot-link" url="/pages/detail/detail?id=505435">银魂</navigator>
			<navigator class="manga-search-hot-link" url="/pages/detail/detail?id=505436">龙珠</navigator>
			<navigator class="manga-search-hot-link" url="/pages/detail/detail?id=623654">名侦探柯南</navigator>
		</view>
		<scroll-view :style="{height:scrollHeight+'px'}" @scrolltolower="loadMoreFn" scroll-y="true" lower-threshold="50" v-if="pageShow" class="manga-search-result">
			<view class="manga-search-result-list">
				<navigator v-for="(item,index) in searchArr" :key="index" :url="'../detail/detail?id='+item.comic_id" class="manga-search-result-item">
					<image class="manga-search-result-pic" :src="item.cover_url" mode="aspectFit"></image>
					<view class="manga-search-result-intor">
						<text class="manga-search-result-txt1">{{item.title}}</text>
						<text class="manga-search-result-txt2">更新到{{item.lated_seqno}}话</text>
						<view class="manga-search-result-tag">
							<text v-for="(cur,curIndex) in item.theme" :key="curIndex">{{cur+' '}}</text>
						</view>
						<view class="manga-search-result-txt3">{{item.brief_intrd}}</view>
					</view>
				</navigator>
				<LotusLoadMoreText :lotusLoadMData="lotusLoadMData"></LotusLoadMoreText>
				<view v-if="noDataFlag" class="list-no-data">
					<text>^_^主人，全部数据已加载完毕了喔^_^</text>
				</view>
			</view>
		</scroll-view>
		<LotusNoData :lotusNoData="lotusNoData"></LotusNoData>
		
	</view>
</template>

<script>
	import LotusLoadMoreText from "../../components/lotusLoadMoreText/LotusLoadMoreText.vue";
	import LotusNoData from "../../components/lotusNodata/LotusNoData.vue";
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
					src:'',
					text:'',
					paddingTop:'300upx'
				},
				noDataFlag:false,
				scrollHeight:"",
				flag:true,
				pageShow:false,
				searchArr:[],
				pageIndex:1,
				keyWord:'',
				deleteFlag:false,
				hotFlag:true
			}
		},
		components:{
			LotusLoadMoreText,
			LotusNoData
		},
		onLoad() {
		},
		onShow() {
			const _this = this;
			_this.$lotusUtils.getSystemInfor().then((response)=>{
				if(response){
					_this.scrollHeight = response.windowHeight;
					_this.searchFn();
				}
			});
		},
		methods:{
			inputFn(e){
				this.keyWord = e.detail.value;
				this.keyWord ? this.deleteFlag = true :this.deleteFlag = false;
			},
			//删除
			deleteFn(){
				this.deleteFlag = false;
				this.hotFlag = true;
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
							this.$lotusUtils.ajax(`${_this.$lotusUtils.webUrl.api}`,'POST',{
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
									_this.lotusLoadMData.isShow = true;
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
				
			},
			loadMoreFn(){
				this.searchFn();
			}
		}
	}
</script>

<style lang="less">
@import "./search.less";
</style>
