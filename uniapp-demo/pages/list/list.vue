<template>
	<scroll-view v-if="pageShow" :style="{height:scrollHeight}" @scrolltolower="loadMoreFn" scroll-y="true" lower-threshold="0" class="list">
			<!--列表数据1-->
			<view v-for="(item,index) in listArray" :key="index" class="list-item">
				<navigator open-type="navigate" class="list-item-link" url="../form/form">
					<image class="list-item-pic" src="../../static/images/wx-icon.png" mode="aspectFit"></image>
					<view class="list-item-r">
						<text>名称：恩替卡韦恩替卡韦恩替卡韦恩替卡韦恩替卡韦恩替卡韦恩替卡韦恩替卡韦恩替卡韦恩替卡韦恩替卡韦恩替卡韦恩替卡韦恩替卡韦</text>
						<text class="list-item-time">创建时间：2019-01-22</text>
					</view>
				</navigator>
			</view>
			<!--列表数据1 END-->
		<LotusLoadMoreText :lotusLoadMData="lotusLoadMData"></LotusLoadMoreText>
	</scroll-view >
</template>

<script>
	import LotusLoadMoreText from "../../components/lotusLoadMoreText/LotusLoadMoreText.vue"
	export default {
		data() {
			return {
				listArray:10,
				scrollHeight:"",
				lotusLoadMData:{
					isShow:false,
					showLoadImg:true,
					text:''
				},
				pageShow:false
			};
		},
		components:{
			LotusLoadMoreText
		},
		methods:{
			//加载更多
			loadMoreFn(){
				console.log(66666);
			}
		},
		onLoad() {
			const _this = this;
			_this.$lotusUtils.getSystemInfor().then((response)=>{
				if(response){
					_this.scrollHeight = response.windowHeight+'px';
					_this.pageShow = true;
				}
			});
		},
		onShow() {
			
		}
	}
</script>

<style lang="less">
@import "./list.less";
</style>
