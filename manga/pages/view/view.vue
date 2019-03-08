<template>
	<!-- @scroll="scroll" @scrolltolower="loadMoreFn" -->
	<view v-if="pageShow" class="manga-view">
		<view id="scroll-body">
			<view v-for="(item,index) in imageArr" :key="index" class="manga-view-wrap">
				<image :pid="item.picture_id" class="manga-view-pic" :style="'margin-top:-12upx;height:'+(item.height*1+8)+'upx;width:'+item.width+'upx;'" :src="item.url" mode="aspectFit"></image>
			</view>
		</view>
		<view @tap="gotoTop" class="manga-view-top">
			<image class="manga-view-top-pic" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAoCAYAAACWwljjAAAABGdBTUEAALGPC/xhBQAAAbtJREFUWAntmMtKw0AUhhMvS5cuxILgQlRUpIggIoKIIoigG1eC+AA+jo+i6FIXBfeuXIgoeKVeitVWJX5HWhhDksnUpp3FDPyZk3Nm5nycmZKkXhAEOXSA3lG7muTeRzmfy6HneUvIhnYkQK+Q9NhAA0Opg0vBEhjBKHiyb8iGMyQMOYuK41BcBSypAL+MYXSKjtFAW7EAGEO3qN4uMQbbAkXiSfRQJ1H6a+yhlkKRcAoVFYiweYNjtCVQJJpBz2GCiPt7fBOZQpFgDpUikse5HgnkM4Fi4QX0Fpc5wf9EbLqpUCy4jMoJSXWhFwbMNgWKhVbRhy5jirhs9fy/oFhgHVVTJEs7RLZ8sSEoJm6iz7SZDMbJ+/OKERQTttCXQRLToRUmrKWCYuA2+jbN0MB4OQobYShfdTCgn/sL1K36M7TLrN3n+758aPy2rrpR6+/od5E8tf/A1uLS9aId5T7J3CNYihkQ4D9PiMdMC7mp4rjB9kjFjZp8BlnVHJBuO1yFXIV0FdDF3RlyFdJVQBdv5AxVdIsq8apiZ2PyYO1EVykesGfZEESsCkweyR8MUW+V8uJ1gkYipmpdP1pm2aJVPEGzAAAAAElFTkSuQmCC" mode="aspectFit"></image>
		</view>
	</view>
</template>
<style lang="less">
	@import "../../static/style/pages/view.less";
</style>
<script>
	import LotusLoadMoreText from "../../components/lotusLoadMoreText/LotusLoadMoreText.vue";
	export default {
		data() {
			return {
				viewData:{},//详情页数据源
				id:'551414',
				cid:1,
				detail:'1',
				imageArr:[],
				pageSize:8,
				type:'',
				pageShow:false
			}
		},
		components:{
			LotusLoadMoreText
		},
		onLoad(options) {
			if(options.id){
				this.id = options.id;
				this.cid = options.cid*1;
				this.initIndex = options.cid*1;
				this.next = options.next*1;
				this.maxPageIndx = options.max*1;
				this.type = options.type;
				if(this.type == 'tx'){
					this.getDataList();
				}else{
					this.getShList();
				}
			}
		},
		onShow() {
		},
		onHide(){
		},
		methods: {
			gotoTop(){
				uni.pageScrollTo({
					scrollTop: 0,
					duration: 100
				});
			},
			//版权问题提示
			copyrightFn(){
				uni.showModal({
					title:'温馨提示',
					content:'由于版权或者政策问题，该作品暂不支持阅读，抱歉^_^!',
					showCancel:false,
					success(){
						uni.navigateBack();
					}
				});
			},
			tabClick(index){
				this.curIndex = index;
			},
			//查看更多目录
			watchMoreFn(){
				this.watchMore = false;
			},
			//获取图片数据
			getDataList(type){
				const _this = this;
				this.$lotusUtils.ajax(`${this.$lotusUtils.webUrl.api}`,'POST',{
					uri:"View/comic",
					options:JSON.stringify({
						id:_this.id,
						cid:_this.cid,
						detail:_this.detail
					})
				}).then((response)=>{
					const res = response.data;
					if(res){
						_this.pageShow = true;
						_this.viewData = res;
						
						//设置标题
						uni.setNavigationBarTitle({
							title: `${res.title}`
						});
						//判断是否需要会员权限
						if(res.chapter.vip_state*1 === 2){
							_this.copyrightFn();
							return false;
						}
						_this.imageArr = res.picture;
						_this.noDataFlag = true;
					}
					
				});
			},
			getShList(){
				const _this = this;
					this.$lotusUtils.ajax(`${this.$lotusUtils.webUrl.lastApi}`,'POST',{
						id:_this.cid
					}).then((response)=>{
						const res = response.data;
						if(res){
							res.contentImg.map((item,index)=>{
								if(index > 0&&index<res.contentImg.length-1){
									item.height = 1400;
									item.width = 750;
									_this.imageArr.push(item);
								}
								
							});
							_this.pageShow = true;
							//设置标题
							uni.setNavigationBarTitle({
								title: `${res.title}`
							});
						}
					});
			}
		}
	}
</script>
