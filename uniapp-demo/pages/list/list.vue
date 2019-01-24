<template>
	<scroll-view v-if="pageShow" :style="{height:scrollHeight}" @scrolltolower="loadMoreFn" scroll-y="true" lower-threshold="0" class="list">
			<!--列表数据1-->
			<view v-for="(item,index) in listArray" :key="index" class="list-item">
				<navigator open-type="navigate" class="list-item-link" :url="'../formDetail/formDetail?id='+item.buyFormId">
					<image class="list-item-pic" src="../../static/images/wx-icon.png" mode="aspectFit"></image>
					<view class="list-item-r">
						<text>名称：{{item.buyFormData.productName}}</text>
						<text class="list-item-time">创建时间：{{item.createTime}}</text>
					</view>
				</navigator>
			</view>
			<!--列表数据1 END-->
		<LotusLoadMoreText :lotusLoadMData="lotusLoadMData"></LotusLoadMoreText>
		<view v-if="noDataFlag" class="list-no-data">^_^暂无数据喔</view>
	</scroll-view >
</template>

<script>
	import LotusLoadMoreText from "../../components/lotusLoadMoreText/LotusLoadMoreText.vue";
	var forMatDate = require("moment"); 
	export default {
		data() {
			return {
				listArray:[],
				scrollHeight:"",
				lotusLoadMData:{
					isShow:false,
					showLoadImg:true,
					text:''
				},
				pageShow:false,
				flag:true,
				pageSize:10,
				pageIndex:0,
				noDataFlag:false
			};
		},
		components:{
			LotusLoadMoreText
		},
		methods:{
			//获取表单列表数据
			async getListData(){
				const _this = this;
				if(!this.flag){
					return false;
				}
				_this.flag = false;
				//获取openId
				const userInfor = await this.$lotusUtils.getStorageFn('userInfor');
				this.$lotusUtils.ajax(`${this.$lotusUtils.webUrl.api}buy/list`,'GET',{
					openId:JSON.parse(userInfor).openId,
					pageIndex:_this.pageIndex,
					pageSize:_this.pageSize
				}).then((response)=>{
					if(response.code === 1){
						const result = response.data;
						_this.listArray = _this.listArray.concat(result);
						if(result.length === _this.pageSize){
							_this.flag = true;
							_this.pageIndex +=1;
							_this.lotusLoadMData.isShow = true;
						}else{
							_this.flag = false;
							_this.lotusLoadMData.isShow = false;
						}
						//暂无数据的标识判断
						_this.listArray.length?_this.noDataFlag= false:_this.noDataFlag=true;
					}
				});
			},
			//加载更多
			loadMoreFn(){
				this.getListData();
			},
			//初始化条件
			initFn(){
				this.listArray = [];
				this.pageIndex = 0;
				this.flag = true;
			}
		},
		onLoad() {
		},
		onShow() {
			const _this = this;
			_this.$lotusUtils.getSystemInfor().then((response)=>{
				if(response){
					_this.scrollHeight = response.windowHeight+'px';
					_this.pageShow = true;
					_this.initFn();
					_this.getListData();
				}
			});
		}
	}
</script>

<style lang="less">
@import "./list.less";
</style>
