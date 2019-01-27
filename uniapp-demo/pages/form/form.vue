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
						<!-- <image @tap="imgPreviewer(itemList);" class="fill-form-item-img" :src="$lotusUtils.webUrl.api+itemList.imgUrl" mode="aspectFit"></image> -->
						<image @tap="imgPreviewer(itemList);" class="fill-form-item-img" :src="imgWebUrl+itemList.imgUrl" mode="aspectFit"></image>
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
				submitTime:null,
				imgWebUrl:this.$lotusUtils.webUrl.api,
				formId:0
			};
		},
		methods:{
			//打开相机
			openCamera(index){
				const _this = this;
				uni.chooseImage({
					count: 2, //默认9
					sizeType: ['compressed'], //可以指定是原图还是压缩图，默认二者都有
					success: function (res) {
						const imgList = res.tempFilePaths[0];
						/* uni.showLoading({
							title: '图片上传中',
							mask: true
						}); */
						 uni.uploadFile({
                            url: `${_this.$lotusUtils.webUrl.api}upLoad/image`, //仅为示例，非真实的接口地址
                            filePath: imgList,
                            name: 'file',
                            formData: {
                            },
                            success: (uploadFileRes) => {
								//uni.hideLoading();
                                const result = JSON.parse(uploadFileRes.data);
                                if(result.code === 1){
                                    const urlData = result.data;
									_this.testUrl = _this.$lotusUtils.webUrl.api+urlData.imgUrl; 
                                    _this.imageList.push(urlData);
                                }
                            },
                            fail:(error)=>{
                                console.log(JSON.stringify(error));
                            }
                        });
						
					}
				});
			},
			//删除图片
			deleteImg(imageList,index){
				const _this = this;
				const imgName = `${imageList[index].imgName}.jpg`;
				//删除图片api
				_this.$lotusUtils.ajax(`${_this.$lotusUtils.webUrl.api}upLoad/imageDelete`,'POST',{
					imgName
				}).then((response)=>{
					//删除成功
					if(response.code === 1){
						imageList.splice(index,1);
						_this.imageList = imageList;
					}
				});
				
			},
			//图片预览
			imgPreviewer(imageList){
				let imgUrlList = [];
				const tempUrl = `${this.$lotusUtils.webUrl.api}${imageList.imgUrl}`;
				imgUrlList .push(tempUrl);
				this.$lotusUtils.imagesPreviewer(imgUrlList);
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
				//更新表单信息
				let url = '';
				let upDateObj = {};
				if(this.formId>0){
					url = `${this.$lotusUtils.webUrl.api}buy/update`;
					upDateObj = {
						openId:JSON.parse(userInfor).openId,
						buyFormData:JSON.stringify(buyFormData),
						buyFormId:this.formId
					};
				}else{
					//新增表单信息
					url = `${this.$lotusUtils.webUrl.api}buy/add`;
					upDateObj = {
						openId:JSON.parse(userInfor).openId,
						buyFormData:JSON.stringify(buyFormData)
					};
				}
				this.$lotusUtils.ajax(url,'POST',upDateObj).then((response)=>{
					console.log(JSON.stringify(response));
					if(response.code === 1){
						uni.showToast({
							title:'提交成功',
							icon:'none',
							mask:true,
							success:function() {
								//提交成功跳转表单详情页
								uni.redirectTo({
									url:'/pages/success/success?id='+response.data
								});
							}
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
				}else if(!/[1-9]$|^[1-9]\d{1,2}$/g.test(this.amount)){
					uni.showToast({
						title:'数量输入有误',
						icon:'none'
					});
					this.amount = '';
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
			},
			//图片上传
			upLoadImg(file){
				return this.$lotusUtils.ajax(`${this.$lotusUtils.webUrl.api}upLoad/image`,'POST',file,'multipart/form-data');
			},
			//获取表单详情
			getFormDetail(){
				const _this = this;
				this.$lotusUtils.ajax(`${_this.$lotusUtils.webUrl.api}buy/detail`,'GET',{
					buyFormId:_this.formId
				}).then((response)=>{
					if(response.code === 1){
						const res = response.data;
						_this.buyFormData = res.buyFormData;
						_this.imageList = res.buyFormData.imageList;
						_this.productName = res.buyFormData.productName;
						_this.productSpec= res.buyFormData.productSpec;
						_this.factory = res.buyFormData.factory;
						_this.amount = res.buyFormData.amount;
						_this.userName= res.buyFormData.userName;
						_this.userPhone= res.buyFormData.userPhone;
						_this.userAddress= res.buyFormData.userAddress;
						//设置导航条标题
						uni.setNavigationBarTitle({
							title: `${res.buyFormData.productName}`
						});
					}
				});
			}
		},
		onLoad(options) {
			this.formId = options.id;
		},
		onShow(){
			//有formId获取详情
			if(this.formId>0){
				this.getFormDetail();
			}
		}
	}
</script>

<style lang="less">
@import './form.less';
</style>
