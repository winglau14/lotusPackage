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
</style>
