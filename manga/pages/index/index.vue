<template>
			<view class="manga-index">
				<!--search-->
				<view class="manga-index-search"></view>
				<!--banner-->
				<view class="manga-index-swiper">
					<swiper style="width:100%;height:318upx;" class="swiper" previous-margin="20" indicator-active-color="#13a3ff" indicator-color="rgba(255, 255, 255, 1)" indicator-dots="true" autoplay="true" interval="3000" duration="500">
						<swiper-item v-for="(image, index) in indexData.banner" :key="index">
							<view class="swiper-item uni-bg-red">
								<navigator :url="'/pages/detail/detail?id='+image.comic_id.toString()">
									<image style="width:100%;height:318upx;" :src="image.pic" mode="aspectFit"></image>
								</navigator>
							</view>
						</swiper-item>
					</swiper>
				</view>
				<!--category-->
				<!-- <view class="manga-index-category">
					<navigator class="manga-index-category-link" url="/">
						<text class="manga-index-category-icon manga-index-category-icon1"></text>
						<text>分类</text>
					</navigator>
					<navigator class="manga-index-category-link" url="/">
						<text class="manga-index-category-icon manga-index-category-icon2"></text>
						<text>排行</text>
					</navigator>
					<navigator class="manga-index-category-link" url="/">
						<text class="manga-index-category-icon manga-index-category-icon3"></text>
						<text>追更</text>
					</navigator>
					<navigator class="manga-index-category-link" url="/">
						<text class="manga-index-category-icon manga-index-category-icon4"></text>
						<text>历史</text>
					</navigator>
				</view> -->
				<!--日漫经典-->
				<view class="manga-index-module">
					<view class="manga-index-module-title">
						<text class="manga-index-module-icon manga-index-module-icon2"></text>
						<navigator class="manga-index-module-more" url="../filter/filter?title=日漫经典&type=japanComic">更多>></navigator>
					</view>
					<view class="manga-index-module-list">
						<navigator v-for="(item,index) in jdData" :key="index" class="manga-index-module-item manga-index-module-item1" :url="'/pages/detail/detail?id='+item.comic_id">
							<image class="manga-index-module-img manga-index-module-img1" :src="item.cover_url" mode="aspectFit"></image>
							<text class="manga-index-module-text1" v-text="item.title"></text>
							<view>
								<text style="display: inline-block;font-size: 24upx;color:#969696;padding-right:10upx;" v-for="(cur,curIndex) in item.theme" :key="curIndex" v-text="cur"></text>
							</view>
						</navigator>
					</view>
				</view>
				<!--今日更新-->
				<view class="manga-index-module">
					<view class="manga-index-module-title">
						<text class="manga-index-module-icon manga-index-module-icon4"></text>
						<navigator class="manga-index-module-more" url="../filter/filter?title=今日我更新&type=todayUpdate">更多>></navigator>
					</view>
					<view class="manga-index-module-list">
						<navigator v-for="(item,index) in indexData.todayUpdate" :key="index" class="manga-index-module-item manga-index-module-item1" :url="'/pages/detail/detail?id='+item.comic_id">
							<image class="manga-index-module-img manga-index-module-img1" :src="item.cover_url" mode="aspectFit"></image>
							<text class="manga-index-module-text1" v-text="item.title"></text>
							<text class="manga-index-module-text2" v-text="'更新到'+item.lated_seqno+'话'"></text>
						</navigator>
					</view>
				</view>
				<!--无良的推荐-->
				<view class="manga-index-module">
					<view class="manga-index-module-title">
						<text class="manga-index-module-icon"></text>
						<navigator class="manga-index-module-more" url="../filter/filter?title=无良的推荐&type=recommend">更多>></navigator>
					</view>
					<view class="manga-index-module-list">
						<navigator v-for="(item,index) in indexData.recommend" :key="index" class="manga-index-module-item" :url="'/pages/detail/detail?id='+item.comic_id">
							<image class="manga-index-module-img" :src="item.pic" mode="aspectFit"></image>
							<text class="manga-index-module-text1" v-text="item.title"></text>
							<text class="manga-index-module-text2" v-text="item.short_desc"></text>
						</navigator>
						</view>
				</view>
				<!--新作上线-->
				<view class="manga-index-module">
					<view class="manga-index-module-title">
						<text class="manga-index-module-icon manga-index-module-icon3"></text>
						<navigator class="manga-index-module-more" url="../filter/filter?title=新作上线&type=riseFastNewComic">更多>></navigator>
					</view>
					<view class="manga-index-module-list">
						<navigator v-for="(item,index) in indexData.riseFastNewComic" :key="index" class="manga-index-module-item manga-index-module-item1" :url="'/pages/detail/detail?id='+item.comic_id">
							<image class="manga-index-module-img manga-index-module-img1" :src="item.cover_url" mode="aspectFit"></image>
							<text class="manga-index-module-text1" v-text="item.title"></text>
							<view>
								<text style="display: inline-block;font-size: 24upx;color:#969696;padding-right:10upx;" v-for="(cur,curIndex) in item.theme" :key="curIndex" v-text="cur"></text>
							</view>
						</navigator>
					</view>
				</view>
				<!--今日TOP5-->
				<view class="manga-index-module">
					<view class="manga-index-module-title">
						<text class="manga-index-module-icon5">今日TOP5</text>
					</view>
					<view class="manga-index-module-list">
						<navigator v-for="(item,index) in indexData.topZone" :key="index" class="manga-index-module-item manga-index-module-item2" :url="'/pages/detail/detail?id='+item.comic_id">
							<image class="manga-index-module-img manga-index-module-img2 manga-index-module-img3" :src="item.pic" mode="aspectFit"></image>
							<view class="manga-index-module-intor">
							<text class="manga-index-module-text1" v-text="item.title"></text>
							<view>
								<text style="display: inline-block;font-size: 24upx;color:#969696;padding-right:10upx;" v-for="(cur,curIndex) in item.theme" :key="curIndex" v-text="cur"></text>
							</view>
							</view>
						</navigator>
					</view>
				</view>
				<view style="color:#969696;font-size: 30upx;text-align: center;padding-bottom: 40upx;">^_^爱动漫，给主人你想要的，应有尽有^_^</view>		
				<!--广告位-->
				<!--  #ifdef  H5 -->
				<advModule :advData="advData"></advModule>
				<!--  #endif -->
	</view>
</template>
<style lang="less">
	@import "../../static/style/pages/index.less";
</style>
<script>
	import advModule from "../../components/advert/advert.vue";
	export default {
		data() {
			return {
				indexData:{},//首页数据源
				jdData:{},//日漫经典
				advData:{
					href:'https://s.click.taobao.com/VoofrEw',
					imgUrl:'http://img.alicdn.com/bao/uploaded/i2/1824693883/O1CN011eYSNt5WB7hCWkZ_!!1824693883.jpg',
					title:'海贼王手办路飞索隆艾斯模型公仔动漫周边生日礼物男生二次元摆件'
				}
			}
		},
		components:{
			advModule
		},
		onLoad() {
			this.getDataList();
			this.getJdData();
		},
		methods: {
			getDataList(){
				const _this = this;
				this.$lotusUtils.ajax(`${this.$lotusUtils.webUrl.api}`,'POST',{
					uri:"Index/all",
					options:JSON.stringify({})
				}).then((response)=>{
					const res = response.data;
					if(res){
						_this.indexData = res;
					}
				});
			},
			//日漫经典
			getJdData(){
				const _this = this;
				this.$lotusUtils.ajax(`${this.$lotusUtils.webUrl.api}`,'POST',{
					uri:"Index/more",
					options:JSON.stringify({
						filter:"japanComic",
						page:1
					})
				}).then((response)=>{
					const res = response.data;
					if(res){
						_this.jdData = res.splice(0,6);
					}
				});
			}
		}
	}
</script>
