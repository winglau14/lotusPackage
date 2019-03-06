<template>
	<scroll-view @scroll="scroll" :style="{height:scrollHeight+'px'}" @scrolltolower="loadMoreFn" scroll-y="true" lower-threshold="50" v-if="pageShow" class="manga-view">
		<view id="scroll-body">
			<view v-if="prevFlag" v-on:tap="prevData" class="manga-view-prev">点击加载上一章节</view>
			<view v-for="(item,index) in imageArr" :key="index" class="manga-view-wrap">
				<image :pid="item.picture_id" class="manga-view-pic" :style="'margin-top:-12upx;height:'+(item.height*1+8)+'upx;width:'+item.width+'upx;'" :src="item.url" mode="aspectFit"></image>
			</view>
			<LotusLoadMoreText :lotusLoadMData="lotusLoadMData"></LotusLoadMoreText>
			<view v-if="noDataFlag" class="list-no-data">
				<text>未完待续^_^</text>
				<text style="display: block;font-size: 20upx;padding-top: 10upx;">作者小哥哥正在埋头苦画中~</text>
			</view>
		</view>
	</scroll-view>
</template>
<style lang="less">
	@import "../../static/style/pages/view.less";
</style>
<script>
	import LotusLoadMoreText from "../../components/lotusLoadMoreText/LotusLoadMoreText.vue";
	export default {
		data() {
			return {
				lotusLoadMData:{
					isShow:false,
					showLoadImg:true,
					text:''
				},
				noDataFlag:false,
				viewData:{},//详情页数据源
				id:'551414',
				cid:1,
				detail:'1',
				pageShow:false,
				scrollHeight:"",
				flag:true,
				imageArr:[],
				pageSize:8,
				prevFlag:false,
				initIndex:0,
				saveFirstIndex:0,
				titleArray:[],
				maxPageIndx:0,
				getFirstPicFlag:true,
				next:0,
				resetFlag:true,//重置pageIndex标识
				type:0
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
				this.type = options.t*1;
				//设置首次上一页页码index
				this.$lotusUtils.setStorageFn('prevPageIndex',options.prev*1,'sync');
				//当前章数与下一章不是顺序排序
				const tVal = this.next - this.cid;
				if(tVal>1){
					//设置首次下一页页码index
					this.$lotusUtils.setStorageFn('saveFirstIndex',options.next*1,'sync');
				}else{
					//设置首次下一页页码index
					this.$lotusUtils.setStorageFn('saveFirstIndex',options.cid*1,'sync');
				}
				
				//显示上一章判断
				if(this.type === 0){
					this.prevFlag = false;
				}else{
					this.prevFlag = true;
				}
			}
		},
		onShow() {
			const _this = this;
			_this.$lotusUtils.getSystemInfor().then((response)=>{
				if(response){
					_this.scrollHeight = response.windowHeight;
					_this.getDataList('上拉');
				}
			});
		},
		onHide(){
			uni.clearStorage();
		},
		methods: {
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
			async scroll(e){
				const _this = this;
				let view = uni.createSelectorQuery().select("#scroll-body");

					view.fields({
					  size: true,
					  scrollOffset: true
					}, data => {
						const domHeight = data.height;
						const curPage = domHeight/_this.scrollHeight;
						const curScrollVal = e.detail.scrollTop;
						const tIndex = Math.floor((curScrollVal)/((_this.scrollHeight-100)*_this.pageSize));
					  //设置标题
					  /* if(this.titleArray[tIndex]){
					  	uni.setNavigationBarTitle({
					  		title: `${this.titleArray[tIndex]}`
					  	});
					  } */
					}).exec();
			},
			tabClick(index){
				this.curIndex = index;
			},
			//查看更多目录
			watchMoreFn(){
				this.watchMore = false;
			},
			//上一章
			async prevData(){
				const prevPageIndex = await this.$lotusUtils.getStorageFn('prevPageIndex','sync');
						this.cid = prevPageIndex;
						//重新设置上一页页码index
						this.$lotusUtils.setStorageFn('prevPageIndex',this.cid,'sync');
						//console.log(prevPageIndex);
						//显示加载上一章按钮
						if(this.cid === 0){
							this.prevFlag = false;
						}else{
							this.prevFlag = true;
							this.flag = true;
							this.getDataList();
							this.$lotusUtils.setStorageFn('prevPageIndex',prevPageIndex-1,'sync');
						}
			},
			//获取图片数据
			getDataList(type){
				const _this = this;
				if(_this.flag){
					_this.flag = false;
					//翻到最大页数
					/* if(_this.maxPageIndx>0&&_this.cid>=_this.maxPageIndx){
						_this.noDataFlag = true;
						_this.lotusLoadMData.isShow = false;
						return false;
					} */
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
							//console.log(res.picture);
							/* if(_this.getFirstPicFlag){
								_this.getFirstPicFlag = false;
								_this.pageSize = res.picture.length;
							} */
							_this.flag = true;
							//显示加载上一章按钮
							this.$lotusUtils.getStorageFn('prevPageIndex','sync').then((prevRes)=>{
								if(prevRes*1 <= 0||_this.type === 0){
									_this.prevFlag = false;
								}else{
									_this.prevFlag = true;
								}
							});
							//上拉加载下一章数据
							if(type){
								_this.cid +=1;
								//当前章数与下一章不是顺序排序
								const tVal = _this.next - _this.initIndex;
								if(tVal>1&&_this.resetFlag){
									_this.cid = _this.next;
									_this.resetFlag = false;
									//设置首次下一页页码index
									_this.$lotusUtils.setStorageFn('saveFirstIndex',_this.cid,'sync');
								}else{
									_this.$lotusUtils.setStorageFn('saveFirstIndex',_this.cid,'sync');
								}
								
								_this.imageArr = _this.imageArr.concat(res.picture);
								_this.lotusLoadMData.isShow = true;
								//标题收集
								_this.titleArray.push(res.chapter.title);
							}else{
								//点击加载上一章数据
								_this.imageArr = res.picture.concat(_this.imageArr);
								//标题收集
								_this.titleArray.unshift(res.chapter.title);
							}
							_this.noDataFlag = false;
						}else{
							_this.lotusLoadMData.isShow = false;
							_this.noDataFlag = true;
						}
						
						
					});
				}
			},
			//加载更多
			async loadMoreFn(){
				//获取下一页页码index
				const t = await this.$lotusUtils.getStorageFn('saveFirstIndex','sync');
				this.cid = t*1;
				//设置首次下一页页码index
				this.$lotusUtils.setStorageFn('saveFirstIndex',this.cid,'sync');
				this.getDataList("上拉");
				
			},
		}
	}
</script>
