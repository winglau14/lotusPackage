<template>
	<view class="fill-form">
		<view class="fill-form-item">
			<view class="fill-form-item-l">
				<text class="fill-form-item-l-red">*</text><text>名称：</text>
			</view>
			<view class="fill-form-item-r">
				<input v-model="productName" placeholder="请输入名称" type="text">
			</view>
		</view>
		<view class="fill-form-item">
			<view class="fill-form-item-l">
				<text class="fill-form-item-l-red" style="opacity: 0;">*</text><text>规格：</text>
			</view>
			<view class="fill-form-item-r">
				<input v-model="productSpec" placeholder="请输入规格" type="text">
			</view>
		</view>
		<view class="fill-form-item">
			<view class="fill-form-item-l">
				<text class="fill-form-item-l-red" style="opacity: 0;">*</text><text>厂家：</text>
			</view>
			<view class="fill-form-item-r">
				<input v-model="factory" placeholder="请输入厂家" type="text">
			</view>
		</view>
		<view class="fill-form-item">
			<view class="fill-form-item-l">
				<text class="fill-form-item-l-red">*</text><text>数量：</text>
			</view>
			<view class="fill-form-item-r">
				<input v-model="amount" maxlength="3" placeholder="请输入购买数量" type="number">
			</view>
		</view>
		<view class="fill-form-item">
			<view class="fill-form-item-l">
				<text class="fill-form-item-l-red">*</text><text>姓名：</text>
			</view>
			<view class="fill-form-item-r">
				<input v-model="userName" placeholder="请输入收货人姓名" type="text">
			</view>
		</view>
		<view class="fill-form-item">
			<view class="fill-form-item-l">
				<text class="fill-form-item-l-red">*</text><text>手机：</text>
			</view>
			<view class="fill-form-item-r">
				<input v-model="userPhone" maxlength="11" placeholder="请输入收货人手机号码" type="number">
			</view>
		</view>
		<view class="fill-form-item">
			<view class="fill-form-item-l fill-form-item-top">
				<text class="fill-form-item-l-red">*</text><text>地址：</text>
			</view>
			<view class="fill-form-item-r">
				<textarea style="width:580upx;" v-model="userAddress" maxlength="500" auto-height value="" placeholder="请输入收货人地址" />
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
				<button @tap="submitFnClick" class="fill-form-fix-btn lotus-btn" type="primary">提交</button>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				productName:'',//商品名称
				productSpec:'',//商品规格
				factory:'',//商品厂家
				amount:'',//商品数量
				userName:'',//收货人姓名
				userPhone:'',//收货人手机号
				userAddress:'',//收货地址
				imageList:[],//附件
				submitTime:null
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
			//表单提交api
			async submitFn(){
				//表单校验
				if(!this.formMatch()){
					return false;
				}
				//获取openId
				const userInfor = await this.$lotusUtils.getStorageFn('userInfor');
				//获取表单提交数据
				const buyFormData = {
					productName:this.productName,
					productSpec:this.productSpec,//商品规格
					factory:this.factory,//商品厂家
					amount:this.amount,//商品数量
					userName:this.userName,//收货人姓名
					userPhone:this.userPhone,//收货人手机号
					userAddress:this.userAddress,//收货地址
					imageList:this.imageList,//附件
					
				}
				this.$lotusUtils.ajax(`${this.$lotusUtils.webUrl.api}buy/add`,'POST',{
					openId:JSON.parse(userInfor).openId,
					buyFormData:JSON.stringify(buyFormData)
				}).then((response)=>{
					console.log(JSON.stringify(response));
					if(response.code === 1){
						uni.showToast({
							title:'提交成功:'+response.data,
							icon:'none'
						});
					}
					
				});
			},
			//防止多少点击
			submitFnClick(){
				clearTimeout(this.submitTime);
				this.submitTime = setTimeout(()=>{
					this.submitFn();
				},200);
			},
			//表单校验
			formMatch(){
				if(!this.productName){
					uni.showToast({
						title:'名称不能为空',
						icon:'none'
					});
					return false;
				}else if(!this.amount){
					uni.showToast({
						title:'数量不能为空',
						icon:'none'
					});
					return false;
				}else if(!this.userName){
					uni.showToast({
						title:'姓名不能为空',
						icon:'none'
					});
					return false;
				}else if(!/^1[0-9]{2}[0-9]{8}$/.test(this.userPhone)){
						const errText = !this.userPhone?'手机号码不能为空':'手机号码不合法'
						uni.showToast({
							title:errText,
							icon:'none'
						});
						return false;
					}else if(!this.userAddress){
					uni.showToast({
						title:'收货人地址不能为空',
						icon:'none'
					});
					return false;
				}
				//验证通过返回true
				return true;
			}
		},
		onShow(){
		}
	}
</script>

<style lang="less">
@import './form.less';
</style>
