<script>
	export default {
		onLaunch: function () {
			console.log('App Launch')
		},
		onShow: function () {
			console.log('App Show')
		},
		onHide: function () {
			console.log('App Hide')
		}
	}
</script>

<style>
	/*每个页面公共css */
	.van-search .van-cell{
		 align-items: center;
	}
	.van-swipe__indicators{
		bottom:40upx !important;
	}
	.list-no-data{
		text-align: center;
		color:#969696;
		font-size: 32upx;
		padding-top: 40upx;
		padding-bottom: 40upx;
	}
	uni-toast .uni-toast{
		width:5em;
		font-size: 14px;
	}
	uni-toast .uni-icon_toast.uni-loading{
		margin:8px 0 0;
		width:30px;
		height:30px;
	}
	uni-toast .uni-toast__content{
		margin:0 0 10px;
	}
</style>
