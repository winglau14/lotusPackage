<template>
	<div class="manga-detail">
		<div v-if="pageShow" class="manga-detail-top">
			<img class="manga-detail-top-pic" v-lazy="detailData.cover_url">
			<div class="manga-detail-top-msg">
				<div class="manga-detail-top-title1" v-text="detailData.title"></div>
				<div class="manga-detail-top-title2">标签：
				<span v-for="(item,index) in detailData.theme" :key="index" v-text="index === detailData.theme.length-1?item:item+'、'"></span>
				</div>
				<div class="manga-detail-top-title2">作者：{{detailData.artist_name}}</div>
				<div class="manga-detail-top-title2">评分：{{detailData.score}}</div>
			</div>
		</div>
		<div v-if="pageShow" class="manga-detail-content">
			<div class="manga-detail-module">
				<span v-for="(item,index) in tabArr" :key="index" v-on:click="tabClick(index);" :class="index === curIndex ? 'manga-detail-module-item manga-detail-module-active':'manga-detail-module-item'" v-text="item"></span>
			</div>
			<!--详情-->
			<div v-if="curIndex === 0" class="manga-detail-tab1" v-text="detailData.brief_intrd"></div>
			<!--目录-->
			<div v-if="curIndex === 1" class="manga-detail-tab2">
				<div class="manga-detail-tab2-total">
				{{upDate}} 更新到{{categoryArr.length}}话
				<div v-if="pxFlag" v-on:click="pxChange" class="manga-detail-tab2-px">
					<img style="width:0.4rem;height:0.4rem;" :src="'/static/images/'+pxImg+'-icon.png'">{{pxText}}
				</div>
				</div>
				<div class="manga-detail-list">
					<div v-for="(item,index) in categoryArr" v-if="index<9&&watchMore" :key="index">
						<router-link v-if="item.vip_state == 1&&index==0" class="manga-detail-link" :to="'/pages/view/view?type='+(item.type?item.type:'tx')+'&id='+id+'&cid='+item.chapter_id">
							{{item.seq_no}}
						</router-link>
						<router-link v-if="item.vip_state == 1&&index>0" class="manga-detail-link" :to="'/pages/view/view?type='+(item.type?item.type:'tx')+'&id='+id+'&cid='+item.chapter_id">
							{{item.seq_no}}
						</router-link>
						<!-- <router-link v-if="item.vip_state == 1&&index==0" class="manga-detail-link" :to="'/pages/tempView/tempView?id='+id+'&cid='+item.chapter_id">
							{{item.seq_no}}
						</router-link>
						<router-link v-if="item.vip_state == 1&&index>0" class="manga-detail-link" :to="'/pages/tempView/tempView?id='+id+'&cid='+item.chapter_id">
							{{item.seq_no}}
						</router-link> -->
						<div v-if="item.vip_state == 2" v-on:tap="copyrightFn"  class="manga-detail-link">
							{{item.seq_no}}<img style="width:0.533rem;height:0.533rem;" src="/static/images/lock-icon.png">
						</div>
					</div>
					<div v-for="(item,index) in categoryArr" v-if="!watchMore" :key="index">
						<router-link v-if="item.vip_state == 1&&index==0"  class="manga-detail-link" :to="'/pages/view/view?type='+(item.type?item.type:'tx')+'&id='+id+'&cid='+item.chapter_id">
							{{item.seq_no}}
						</router-link>
						<router-link v-if="item.vip_state == 1&&index>0"  class="manga-detail-link" :to="'/pages/view/view?type='+(item.type?item.type:'tx')+'&id='+id+'&cid='+item.chapter_id">
							{{item.seq_no}}
						</router-link>
						<!-- <router-link v-if="item.vip_state == 1&&index==0"  class="manga-detail-link" :to="'/pages/tempView/tempView?id='+id+'&cid='+item.chapter_id">
							{{item.seq_no}}
						</router-link>
						<router-link v-if="item.vip_state == 1&&index>0"  class="manga-detail-link" :to="'/pages/tempView/tempView?id='+id+'&cid='+item.chapter_id">
							{{item.seq_no}}
						</router-link> -->
						<div v-if="item.vip_state == 2" v-on:tap="copyrightFn" class="manga-detail-link">
							{{item.seq_no}}<img style="width:0.533rem;height:0.533rem;" src="/static/images/lock-icon.png">
						</div>
					</div>
				</div>
				<div v-if="watchMore" v-on:click="watchMoreFn" class="manga-detail-more">主人，查看更多目录</div>
			</div>
			<!--评论-->
			<div v-if="curIndex === 2" class="manga-detail-tab3" style="text-align: center;">
				<span style="font-size:0.4rem;">暂无评论数据^_^！</span>
			</div>
		</div>
		<!--返回顶部-->
		<LotusToTop v-if="!watchMore"></LotusToTop>
		<!--返回顶部END-->
		<LotusConfirm @lotusConfirm="lotusConfirm" :ConfirmData="ConfirmData"></LotusConfirm>
	</div>
</template>
<style lang="less">
	@import "../../../static/style/pages/detail.less";
</style>
<script>
	import advModule from "../../components/advert/advert.vue";
    import LotusConfirm from "../../components/lotusConfirm/LotusConfirm.vue";
	import LotusToTop from "../../components/lotusToTop/lotusToTop.vue";
	export default {
		data() {
			return {
				detailData:{},//详情页数据源
				curIndex:1,
				tabArr:['详情','目录','评论'],
				upDate:'',
				categoryArr:[],
				watchMore:true,
				id:0,
				pageShow:false,
				pxFlag:false,
				pxImg:'down',
				pxText:'正序',
				maxChapter:0,
				advData:{
					href:'https://s.click.taobao.com/VoofrEw',
					imgUrl:'http://img.alicdn.com/bao/uploaded/i2/1824693883/O1CN011eYSNt5WB7hCWkZ_!!1824693883.jpg',
					title:'海贼王手办路飞索隆艾斯模型公仔动漫周边生日礼物男生二次元摆件'
				},
                ConfirmData:{
                    descText:'<p style="font-size: 0.4rem;">温馨提示</p><p style="font-size: 0.4rem;">由于版权或者政策问题，该作品暂不支持阅读，抱歉^_^!</p>',
                    showConfirm:false,
					showImg:false,
                    twoButton:false
				}
			}
		},
		components:{
			advModule,
			LotusToTop,
            LotusConfirm
		},
		created() {
            this.id = this.$route.query.id;
			this.getDataList();
			
		},
		methods: {
            lotusConfirm(){
                if(typeof window !== "undefined"){
                    window.history.go(-1);
                }
			},
			//版权问题提示
			copyrightFn(){
				this.ConfirmData.showConfirm = true;
			},
			//正序倒序变换
			pxChange(){ 
				if(this.pxImg === "down"){
					this.pxImg = "up";
					this.pxText = "倒序";
				}else{
					this.pxImg = "down";
					this.pxText = "正序";
				}
				this.categoryArr = this.categoryArr.reverse();
			},
			tabClick(index){
				this.curIndex = index;
			},
			watchMoreFn(){
				this.watchMore = false;
				this.pxFlag = true;
			},
			getDataList(){
				const _this = this;
				this.$lotusAjax.post(`${_this.$lotusUtils.webUrl.api}mApi`,{
					uri:"Detail/comic",
					options:JSON.stringify({
						id:_this.id
					})
				}).then((response)=>{
					const res = response.data;
					if(res){
						_this.pageShow = true;
						_this.detailData = res;
						_this.$lotusChangeTitle(res.title);
						let tFlag = true;
						res.catalog.map((item,index)=>{
							if(~~item.vip_state === 2&&tFlag){
								tFlag = false;
								_this.maxChapter = item.chapter_id;
							}
						});
						//前一章与后一章重新赋值
						res.catalog.map((item,index)=>{
							//上一章
							if(res.catalog[index-1]){
								const prev = res.catalog[index-1];
								item.prev = prev.chapter_id;
							}else{
								item.prev = item.chapter_id;
							}
							//下一章
							if(res.catalog[index+1]){
								const next = res.catalog[index+1];
								item.next = next.chapter_id;
							}else{
								item.next = item.chapter_id;
							}
						});
						//章节目录数组倒序
						_this.categoryArr = res.catalog.reverse();
						const t = res.update_time*1000;
						const curT = new Date(t);
						_this.upDate = `${curT.getFullYear()}-${(curT.getMonth()+1)<10?'0'+(curT.getMonth()+1):(curT.getMonth()+1)}-${curT.getDate()}`;
						//海贼王更新标识
						if(_this.id === '505430'){
							_this.getDataList2();
						}
					}else{
						//版权问题
                        _this.copyrightFn();
					}
				})
			},
			getDataList2(){
				const _this = this;
				this.$lotusAjax.post(`${_this.$lotusUtils.webUrl.api}shApi`,{
					uri:"",
					options:JSON.stringify({
						id:_this.id
					})
				}).then((response)=>{
					const res = response.data;
					if(res){
						const curObj = res.comicsIndexes['1'].nums;
						let tempArr = [];
						for(let i in curObj){
							for(let b in curObj[i]){
								tempArr.push(curObj[i][b]);
							}
						}
						const shLen = tempArr.length;
						const txLen = _this.categoryArr.length;
						const len = shLen - txLen;
						let lastArr = [];
						for(let i = 0;i<=len-1;i++){
							let tObj = {
								chapter_id:0,
								seq_no:i+txLen+1,
								vip_state:1,
								type:'sh'
							};
							if(tempArr[i+txLen].length === 2){
								tObj.chapter_id = tempArr[i+txLen]['0']['id'];
								lastArr.push(tObj);
							}
						}
						_this.categoryArr = lastArr.concat(_this.categoryArr);
					}
				})
			}
		}
	}
</script>
