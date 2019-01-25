<template>
	<view class="form-detail">
		<view class="form-detail-item">
			<text>名称：</text>
			<text>{{buyFormData.productName}}</text>
		</view>
		<view class="form-detail-item">
			<text>规格：</text>
			<text>{{buyFormData.productSpec?buyFormData.productSpec:'--'}}</text>
		</view>
		<view class="form-detail-item">
			<text>厂家：</text>
			<text>{{buyFormData.factory?buyFormData.factory:'--'}}</text>
		</view>
		<view class="form-detail-item">
			<text>数量：</text>
			<text>{{buyFormData.amount}}</text>
		</view>
		<view class="form-detail-item">
			<text>姓名：</text>
			<text>{{buyFormData.userName}}</text>
		</view>
		<view class="form-detail-item">
			<text>手机：</text>
			<text>{{buyFormData.userPhone}}</text>
		</view>
		<view class="form-detail-item">
			<text>地址：</text>
			<text>{{buyFormData.userAddress}}</text>
		</view>
		<view class="form-detail-item">
			<text>附件：</text>
			<text>--</text>
		</view>
	</view>
</template>

<script>
	export default{
		data(){
			return {
				buyFormId:'',
				buyFormData:{}
			}
		},
		methods:{
			
		},
		onLoad(options) {
			const _this = this;
			//判断是否获取到表单id
			if(options.id === 'undefined'){
				return false;
			}
			this.buyFormId = options.id;
			this.$lotusUtils.ajax(`${_this.$lotusUtils.webUrl.api}buy/detail`,'GET',{
				buyFormId:_this.buyFormId
			}).then((response)=>{
				if(response.code === 1){
					const res = response.data;
					_this.buyFormData = res.buyFormData;
					//设置导航条标题
					uni.setNavigationBarTitle({
						title: `${res.buyFormData.productName}`
					});
				}
			});
		},
		onShow(){
		}
	}
</script>

<style lang="less">
	@import "./formDetail.less";
</style>
