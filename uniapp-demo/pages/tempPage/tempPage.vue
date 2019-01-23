<template>
	<view>
		<lotus-splash :lotusSplashData="splashData"></lotus-splash>
	</view>
</template>
<script>
	import LotusSplash from "../../components/lotusSplash/LotusSplash.vue"
	export default {
		data(){
			return{
				splashData:{
                    welcomeTitle:'欢迎使用',
                    appTitle:'帮您购',
                    bottomTitle:'帮您购提供服务',
                    logo:'/static/images/app-icon/mipmap-xhdpi/W.png'
                    },
					delay:2000 //动画执行完成时间
			}
		},
		components:{
			LotusSplash
		},
		onLaunch: function () {
		},
		onShow: function () {
			setTimeout(()=>{
				//获取用户信息
				this.$lotusUtils.getStorageFn('userInfor1').then((response)=>{
					if(response){
						//获取到用户信息
						uni.redirectTo({
							url: '/pages/form/form'
						});
					}else{
						//未获取到用户信息
						uni.redirectTo({
							url: '/pages/login/login'
						});
					}
				});
			},this.delay);
		},
		onHide: function () {
			
		},
		onLoad() {
			/* uni.removeStorage({
				key: 'userInfor',
				success: function (res) {
					console.log('success');
				}
			}); */
			
		}
	}
</script>

<style>
</style>
