<template>
	<scroll-view :style="{height:scrollHeight+'px'}" @scrolltolower="loadMoreFn" scroll-y="true" lower-threshold="50" v-if="pageShow" class="manga-filter">
		<view class="manga-filter-list">
			<navigator v-for="(item,index) in filterArr" :key="index" :url="'../detail/detail?id='+item.comic_id" class="manga-filter-item">
				<image class="manga-filter-pic" :src="item.cover_url" mode="aspectFit"></image>
				<view class="manga-filter-intor">
					<text class="manga-filter-txt1">{{item.title}}</text>
					<text class="manga-filter-txt2">更新到{{item.lated_seqno}}话</text>
					<view class="manga-filter-tag">
						<text v-for="(cur,curIndex) in item.theme" :key="curIndex">{{cur+' '}}</text>
					</view>
					<view class="manga-filter-txt3">{{item.brief_intrd}}</view>
				</view>
			</navigator>
			<LotusLoadMoreText :lotusLoadMData="lotusLoadMData"></LotusLoadMoreText>
			<view v-if="noDataFlag" class="list-no-data">
				<text>^_^主人，全部数据已加载完毕了喔^_^</text>
			</view>
		</view>
	</scroll-view>
</template>

<script>
	import LotusLoadMoreText from "../../components/lotusLoadMoreText/LotusLoadMoreText.vue";
	export default {
		data() {
			return {
				lotusLoadMData:{
					isShow:false,
					showLoadImg:true,
					text:''
				},
				noDataFlag:false,
				filterArr:[],
				id:0,
				pageShow:false,
				flag:true,
				type:'recommend',
				pageIndex:1,
				scrollHeight:0
			}
		},
		components:{
			LotusLoadMoreText
		},
		onLoad(options) {
			if(options.id){
				this.id = options.id;
				uni.setNavigationBarTitle({
					title: options.title
				});
			}
			this.getDataList();
			
		},
		onShow() {
			const _this = this;
			_this.$lotusUtils.getSystemInfor().then((response)=>{
				if(response){
					_this.scrollHeight = response.windowHeight;
					_this.getDataList();
				}
			});
		},
		methods: {
			getDataList(){
				const _this = this;
				if(_this.flag){
					_this.flag = false;
						this.$lotusUtils.ajax(`${_this.$lotusUtils.webUrl.api}`,'POST',{
							uri:"Classify/list",
							options:JSON.stringify({
								id:_this.id,
								page:_this.pageIndex
							})
						}).then((response)=>{
							_this.test = JSON.stringify(response);
							const res = response.data;
							if(res){
								_this.pageShow = true;
								_this.filterArr = _this.filterArr.concat(res);
								_this.pageIndex+=1;
								_this.flag = true;
								_this.lotusLoadMData.isShow = true;
								_this.noDataFlag = false;	
							}else{
								_this.lotusLoadMData.isShow = false;
								_this.noDataFlag = true;
							}
						});
				}
			},
			loadMoreFn(){
				this.getDataList();
			}
		}
	}
</script>

<style lang="less">
	@import "./categoryList.less";
</style>
