<template>
	<view class="fill-form">
		<view class="fill-form-item">
			<view class="fill-form-item-l">
				<text class="fill-form-item-l-red">*</text><text>名称：</text>
			</view>
			<view class="fill-form-item-r">
				<input placeholder="请输入名称" type="text">
			</view>
		</view>
		<view class="fill-form-item">
			<view class="fill-form-item-l">
				<text class="fill-form-item-l-red" style="opacity: 0;">*</text><text>规格：</text>
			</view>
			<view class="fill-form-item-r">
				<input placeholder="请输入规格" type="text">
			</view>
		</view>
		<view class="fill-form-item">
			<view class="fill-form-item-l">
				<text class="fill-form-item-l-red" style="opacity: 0;">*</text><text>厂家：</text>
			</view>
			<view class="fill-form-item-r">
				<input placeholder="请输入厂家" type="text">
			</view>
		</view>
		<view class="fill-form-item">
			<view class="fill-form-item-l">
				<text class="fill-form-item-l-red">*</text><text>数量：</text>
			</view>
			<view class="fill-form-item-r">
				<input maxlength="3" placeholder="请输入购买数量" type="number">
			</view>
		</view>
		<view class="fill-form-item">
			<view class="fill-form-item-l">
				<text class="fill-form-item-l-red">*</text><text>姓名：</text>
			</view>
			<view class="fill-form-item-r">
				<input placeholder="请输入收货人姓名" type="text">
			</view>
		</view>
		<view class="fill-form-item">
			<view class="fill-form-item-l">
				<text class="fill-form-item-l-red">*</text><text>手机：</text>
			</view>
			<view class="fill-form-item-r">
				<input maxlength="11" placeholder="请输入收货人手机号码" type="number">
			</view>
		</view>
		<view class="fill-form-item">
			<view class="fill-form-item-l fill-form-item-top">
				<text class="fill-form-item-l-red">*</text><text>地址：</text>
			</view>
			<view class="fill-form-item-r">
				<textarea style="width:580upx;" maxlength="500" auto-height value="" placeholder="请输入收货人地址" />
			</view>
		</view>
		<view class="fill-form-item" style="padding-bottom: 0;">
			<view class="fill-form-item-l fill-form-item-top">
				<text class="fill-form-item-l-red" style="opacity: 0;">*</text><text>附件：</text>
			</view>
			<view class="fill-form-item-r">
				<text v-if="imageList.length" class="fill-form-item-tips">图片点击可以预览</text>
				<view class="fill-form-item-img-list">
					<view v-for="(itemList,index) in imageList" :key="index" class="fill-form-item-img-wrap">
						<image @tap="imgPreviewer(itemList);" class="fill-form-item-img" :src="itemList" mode="aspectFit"></image>
						<view @tap="deleteImg(imageList,index);" class="fill-form-item-delete"></view>
					</view>
					<view v-if="imageList.length<2" @tap="openCamera(0);" class="fill-form-item-camera"></view>
				</view>
			</view>
		</view>
		<view class="fill-form-fix">
			<view class="fill-form-fix-wrap">
				<button @tap="test" class="fill-form-fix-btn lotus-btn" type="primary">提交</button>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				imageList:[],
				userName:'',
				userHeader:''
			};
		},
		methods:{
			//打开相机
			openCamera(index){
				/* this.$lotusUtils.openCamera().then((response)=>{
					if(response){
						this.imageList.push(response);
					}
				}); */
				const _this = this;
				uni.chooseImage({
					count: 2, //默认9
					sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
					success: function (res) {
						const imgList = res.tempFilePaths;
						imgList.map((item,index)=>{
							_this.imageList.push(item);
						});
					}
				});
			},
			//删除图片
			deleteImg(imageList,index){
				imageList.splice(index,1);
				this.imageList = imageList;
			},
			loginFn(){
				this.$lotusUtils.wxLoginFn();
			},
			//图片预览
			imgPreviewer(url){
				let imgUrl = [];
				imgUrl .push(url);
				this.$lotusUtils.imagesPreviewer(imgUrl);
			},
			test(){
				uni.showToast({
					title:'待完善',
					icon:'none'
				});
				return false;
				this.$lotusUtils.ajax(`${this.$lotusUtils.webUrl.api}user/list`,'GET',{
					name:'test'
				}).then((response)=>{
					uni.showToast({
						title:`${JSON.stringify(response)}`,
						icon:'none'
					});
				});
			}
		},
		onShow(){
		}
	}
</script>

<style lang="less">
@import './form.less';
</style>
