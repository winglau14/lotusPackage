<script>
	export default {
		onLaunch: function () {
			console.log('App Launch')
		},
		onShow: function () {
			console.log('App Show');
		},
		onHide: function () {
			console.log('App Hide')
		}
	}
</script>

<style>
	/*主标题*/
	.font-color1{
		color:#191919;
	}
	/*副标题*/
	.font-color2{
		color:#7f7f7f;
	}
	.lotus-wrap{
		background: #f2f2f2;
	}
	/*每个页面公共css */
	.lotus-btn{
		background-color: #13a3ff !important;
		margin: 60upx 100upx;
	}
	uni-toast .uni-toast{
		width:140upx !important;
	}
	uni-toast .uni-toast__content{
		font-size: 26upx !important;
		margin: 0 0 26upx !important;
	}
	uni-toast .uni-icon_toast.uni-loading{
		width:60upx !important;
		height:60upx !important;
		margin:22upx 0 0 !important;		
		
	}
</style>
