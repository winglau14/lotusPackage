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
		<view v-if="imageList.length>0" class="form-detail-item">
			<text>附件：</text>
			<view class="form-detail-img-list">
				<image @tap="imgPreviewer(item)" v-for="(item,index) in imageList" :key="index" :src="webUrl+item.imgUrl" mode="aspectFit"></image>
			</view>
		</view>
		<navigator class="lotus-btn form-detail-btn" :url="'/pages/form/form?id='+buyFormId">编辑</navigator>
	</view>
</template>

<script>
	export default{
		data(){
			return {
				buyFormId:'',
				buyFormData:{},
				imageList:[],
				webUrl:this.$lotusUtils.webUrl.api
			}
		},
		methods:{
			//图片预览
			imgPreviewer(imageList){
				let imgUrlList = [];
				const tempUrl = `${this.$lotusUtils.webUrl.api}${imageList.imgUrl}`;
				imgUrlList .push(tempUrl);
				this.$lotusUtils.imagesPreviewer(imgUrlList);
			}
		},
		onLoad(options) {
			const _this = this;
			//判断是否获取到表单id
			if(options.id === 'undefined'){
				return false;
			}
			this.buyFormId = options.id;
			
		},
		onShow(){
			this.$lotusUtils.ajax(`${_this.$lotusUtils.webUrl.api}buy/detail`,'GET',{
				buyFormId:_this.buyFormId
			}).then((response)=>{
				if(response.code === 1){
					const res = response.data;
					_this.buyFormData = res.buyFormData;
					_this.imageList = res.buyFormData.imageList;
					//设置导航条标题
					uni.setNavigationBarTitle({
						title: `${res.buyFormData.productName}`
					});
				}
			});
		}
	}
</script>

<style lang="less">
	@import "./formDetail.less";
</style>
