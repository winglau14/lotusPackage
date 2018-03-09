<template>
    <!---->
    <div class="yjl-list">
        <!--<p class="yjl-list-top"></p>-->
        <div class="yjl-list-calendar">
            <div class="yjl-list-calendar-left">
                <p class="yjl-list-calendar-st" @click="bindDateChange('startTime')" v-text="startTime"></p>
                <span>至</span>
                <p class="yjl-list-calendar-et" @click="bindDateChange('endTime')" v-text="endTime"></p>
            </div>
            <div @click="isWXWindow" class="yjl-list-calendar-right">导出表格</div>
        </div>
        <!--list content-->
        <div class="yjl-list-wrap" ref="scroll">
            <p class="yjl-list-wrap-tab">
                <span v-for="(item,index) in tabArray" @click="tabClick(index)" :class="selectedIndex === index ?'yjl-list-wrap-tab-item yjl-list-wrap-tab-act':'yjl-list-wrap-tab-item'" v-text="item.text"></span>
            </p>
            <div class="yjl-list-wrap-content">
                <div v-for="(item,index) in 4" :key="index">
                    <!--接收人、发放人-->
                    <div class="yjl-list-wrap-type1" v-if="(index === 0 && index === selectedIndex && hasDataFlag)|| (index === 1 && index === selectedIndex && hasDataFlag)">
                        <p class="yjl-list-wrap-nav">
                            <span v-if="index === 0">接收人</span>
                            <span v-if="index === 1">发放人</span>
                            <span>红包</span>
                            <span>金额</span>
                        </p>
                        <p class="yjl-list-wrap-total">
                            <span>总计({{totalData.totalCount?totalData.totalCount:'--'}})</span>
                            <span v-text="totalData.reCount?totalData.reCount:'--'"></span>
                            <span v-text="totalData.totalAmount/100 ? totalData.totalAmount/100 : '--'"></span>
                        </p>
                        <div v-for="(item,index) in listDataArray" :key="index" :id="index ===listDataArray.length-1 &&'tab_'+selectedIndex">
                            <p class="yjl-list-wrap-item">
                                <span v-text="item.NickName"></span>
                                <span v-text="item.Count"></span>
                                <span v-text="item.Amount/100"></span>
                            </p>
                        </div>
                    </div>
                    <!--商品-->
                    <div class="yjl-list-wrap-type2" v-if="index === 2 && index === selectedIndex && hasDataFlag">
                        <div class="yjl-list-wrap-product">
                            <p>商品个数：{{totalData.totalDrug ? totalData.totalDrug:'--'}}</p>
                            <p>红包总数：{{totalData.reTotalCount ? totalData.reTotalCount:'--'}}</p>
                            <p>接收人数：{{totalData.recipientCount ? totalData.recipientCount:'--'}}</p>
                            <p>发放总额：{{totalData.totalAmount ? totalData.totalAmount/100:'--'}}</p>
                        </div>
                        <div class="yjl-list-wrap-pitem" v-for="(item,index) in listDataArray" :key="index" :id="index ===listDataArray.length-1 &&'tab_'+selectedIndex">
                            <p class="yjl-list-wrap-pname">
                                <span>商品：{{item.GoodsName?item.GoodsName:'--'}} {{item.Genericname?item.Genericname:'--'}}</span>
                                <i @click="openMask(item)" v-if="item.GoodsName || item.Genericname"></i>
                            </p>
                            <p>登记数量：{{item.GoodsAmount?item.GoodsAmount:'--'}}</p>
                            <p>奖励单价：{{(item.MinGoodsPrice/100).toFixed(2)}}-{{(item.MaxGoodsPrice/100).toFixed(2)}}</p>
                            <p class="yjl-list-wrap-flex"><span>发放总额：{{(item.Amount/100).toFixed(2)}}</span><span>红包总数：{{item.ReCount}}</span>
                            </p>
                            <p class="yjl-list-wrap-flex"><span>奖励人数：80</span><span>奖励店数：4</span></p>
                            <p>
                                发放人：<span v-for="(cur,index) in item.SenderNickName" :key="index" v-text="index !=item.SenderNickName.length-1?cur+'、':cur"></span>
                            </p>
                        </div>
                    </div>
                    <!--店家-->
                    <div class="yjl-list-wrap-type1" v-if="index === 3 && index === selectedIndex && hasDataFlag">
                        <p class="yjl-list-wrap-nav">
                            <span>店家</span>
                            <span>红包</span>
                            <span>金额</span>
                        </p>
                        <p class="yjl-list-wrap-total">
                            <span>总计({{totalData.shopCount?totalData.shopCount:'--'}})</span>
                            <span v-text="totalData.reTotalCount?totalData.reTotalCount:'--'"></span>
                            <span v-text="totalData.totalAmount/100 ? totalData.totalAmount/100 : '--'"></span>
                        </p>
                        <div v-for="(item,index) in listDataArray" :keys="index" :id="index ===listDataArray.length-1 &&'tab_'+selectedIndex">
                            <div class="yjl-list-wrap-item">
                                <div class="yjl-list-wrap-region">
                                    <p v-text="item.ShopName"></p>
                                    <span v-if="item.City && item.Region" class="yjl-list-wrap-address" v-text="item.City+' '+item.Region"></span>
                                </div>
                                <span v-text="item.ReCount?item.ReCount:'--'"></span>
                                <span v-text="item.Amount?item.Amount/100:'--'"></span>
                            </div>
                        </div>
                    </div>
                </div>
                <!--暂无数据-->
                <div v-if="noDataFlag" class="yjl-list-no-data" :style="noDataFlag?'height:'+noDataHeight+'px':'height:auto'">
                    <team-message v-if="noDataFlag" :teamMessage="message"></team-message>
                </div>
            </div>
        </div>
        <!--end list content-->
        <div v-if="maskFlag" @click="closeMask" class="yjl-list-mask">
            <div class="yjl-list-mask-product">
                <img class="yjl-list-mask-icon" src="/static/yyl-icon03.png" alt="">
                <p>商品：{{productData.GoodsName?productData.GoodsName:''}}
                    {{productData.Genericname?productData.Genericname:''}}</p>
                <p>规格：{{productData.Spec?productData.Spec:'--'}}</p>
                <p>厂家：{{productData.Manufacturer?productData.Manufacturer:'--'}}</p>
            </div>
        </div>
        <!--日期控件-->
        <!--<lotus-calendar @returnDate="choseDate" :calendarData="calendarData"></lotus-calendar>-->
    </div>
</template>
<!--<style lang="less">
    @import '../../style/list/list.less';
</style>-->
<script>
    import '../../style/list/list.less';
    import loadMore from "../../Utils/loadMore"
    import lockBody from "../../Utils/lockBody"
    import TeamMessage from '../common/TeamMessageVux'
    export default {
        name: 'tab-bar',
        props: ['messageData'],
        data () {
            return {
                startTime: '',
                endTime: '',
                calendarData: {
                    isShow: false
                },
                selectedIndex: 0,
                tabArray: [
                    {
                        index: 0,
                        text: '接收人'
                    },
                    {
                        index: 1,
                        text: '发放人'
                    },
                    {
                        index: 2,
                        text: '商品'
                    },
                    {
                        index: 3,
                        text: '店家'
                    }
                ],
                flag: true,
                pageSize: 1,
                pageIndex: 0,
                listDataArray: [],
                totalData: {},
                maskFlag: false,
                productData: null,
                message: {
                    imgUrl: '/static/on-data-img.png',
                    member: '暂无接收人数据'
                },
                noDataFlag:false,
                hasDataFlag:false,
                noDataHeight:0,
                tableUrl:''
            }
        },
        components: {TeamMessage},
        methods: {
            bindDateChange(type){
                this.calendarData.isShow = true;
                this.calendarData.type = type;
            },
            //获取选中时间
            choseDate(data, type){
                this[type] = data;
                if (this.matchTime()) {
                    this.initVal();
                    //获取数据
                    this.recipientList();
                }
            },
            //时间校验
            matchTime(){
                const reg = /-/g;
                let startTime = this.startTime;
                let endTime = this.endTime;
                if (this.startTime) {
                    startTime = startTime.replace(reg, '/');
                }
                if (this.endTime) {
                    endTime = endTime.replace(reg, '/');
                }
                const romain = (+new Date(endTime) - (+new Date(startTime))) / 86400000;
                //选择开始时间or结束时间大于当前时间
                if (+new Date(startTime) > (+new Date()) || +new Date(endTime) > (+new Date())) {
                    this.$lotus.toast.show({
                        type: 'text',
                        text: '选择的时间不能大于当前时间'
                    });
                    return false;
                }
                //开始时间不能大于结束时间
                if (+new Date(startTime) > (+new Date(endTime))) {
                    this.$lotus.toast.show({
                        type: 'text',
                        text: '开始时间不能大于结束时间'
                    });
                    return false;
                }
                //选择时间范围小于7天
                if (romain < 7) {
                    this.$lotus.toast.show({
                        type: 'text',
                        text: '选择时间段不能少于7天'
                    });
                    return false;
                }
                return true;
            },
            //选项卡click
            tabClick(index){
                this.selectedIndex = index;
                //没有更多数据显示
                this.$lotus.noDataNav.show({
                    hide: true
                }, `#tab_${this.selectedIndex}`);
                if (this.matchTime()) {
                    this.initVal();
                    this.recipientList();
                }
            },
            //初始化数据
            initVal(){
                this.pageIndex = 0;
                this.flag = true;
                this.listDataArray = [];
                this.totalData = {};
            },
            //获取数据 recipientList
            recipientList(){
                let dataUrl = '';
                switch (this.selectedIndex) {
                    case 0:
                        dataUrl = 'recipientAnalysis/';
                        this.message.member = '暂无接收人数据';
                        break;
                    case 1:
                        dataUrl = 'senderAnalysis/';
                        this.message.member = '暂无发放人数据';
                        break;
                    case 2:
                        dataUrl = 'goodsAnalysis/';
                        this.message.member = '暂无商品数据';
                        break;
                    case 3:
                        dataUrl = 'shopAnalysis/';
                        this.message.member = '暂无店家数据';
                        break;

                }
                if (this.flag && parseInt(sessionStorage.xAdminId) > 0) {
                    this.flag = false;
                  return  this.$lotusAjax.get(`${this.$lotusApiUrl.yyfApiUrl}RedEnvelopes/${dataUrl}`, {
                        xAdminId: sessionStorage.xAdminId,
                        startTime: this.startTime,
                        endTime: this.endTime,
                        pageIndex: this.pageIndex,
                        pageSize: this.pageSize
                    }).then((response) => {
                        const result = response.data;
                        if (result.Data.length > 0) {
                            //统计数据
                            this.totalData = result.Data[0];
                            //遍历list数据源
                            this.listDataArray = this.listDataArray.concat(result.Data[0].detail);
                            //判断是否需要翻页
                            if (result.Data[0].detail.length >= this.pageSize) {
                                this.flag = true;
                                this.pageIndex += 1;
                            } else {
                                //没有更多数据显示
                                this.$lotus.noDataNav.show({
                                    show: true
                                }, `#tab_${this.selectedIndex}`);
                            }
                            //判断是否有数据
                            if(this.listDataArray.length > 0){
                                this.hasDataFlag = true;
                                this.noDataFlag = false;
                            }else{
                                this.hasDataFlag = false;
                                this.noDataFlag = true;
                            }
                        }else{
                            this.noDataFlag = true;
                        }
                    });
                }
            },
            //查看药品信息
            openMask(item){
                this.maskFlag = true;
                this.productData = item;
                lockBody('100%', 'hidden');
            },
            //关闭弹层
            closeMask(){
                this.maskFlag = false;
                lockBody('auto', 'auto');
            },
            //判断是否为电脑端微信
            isWXWindow(){
                const ua = window.navigator.userAgent.toLowerCase();
                const reg1 = /WindowsWechat/i;
                const reg2 = /MicroMessenger/i;
                if (reg1.test(ua) && reg2.test(ua)) {
                    //下载表格
                    if(this.matchTime()){
                        this.downloadTable();
                    }
                } else {
                    this.$lotus.toast.show({
                        type: 'text',
                        text: '请前往微信客户端登录微信导出数据'
                    });
                }
            },
            //重置无数据高度
            initClientHeight(){
                this.$nextTick(()=>{
                        const top = document.querySelector('.yjl-header').clientHeight;
                        const calendar = document.querySelector('.yjl-list-calendar').clientHeight;
                        const tab = document.querySelector('.yjl-list-wrap-tab').clientHeight;
                        const wHeight = document.documentElement.clientHeight;
                        this.noDataHeight = wHeight-top-calendar-tab-44;
                });
            },
            //下载表格
            downloadTable(){
                this.$lotusAjax.get(this.$lotusApiUrl.yyfApiUrl+'RedEnvelopes/redEnvelopesExport',{
                    xAdminId:sessionStorage.xAdminId,
                    startTime: this.startTime,
                    endTime: this.endTime,
                }).then((response)=>{
                    const result = response.data;
                    if(result.Data){
                        window.location.href = this.$lotusApiUrl.downloadFileUrl+result.Data;
                    }
                })
            }
        },
        computed: {},
        mounted(){
            this.$lotusChangeTitle('要吉利发放统计');
        },
        created(){
            //开始时间 -7
            const backUpSeven = +new Date() - 604800000;
            const startTime = `${new Date(backUpSeven).getFullYear()}-${new Date(backUpSeven).getMonth() + 1}-${new Date(backUpSeven).getDate()}`;
            //结束时间
            const endTime = `${new Date().getFullYear()}-${new Date().getMonth() + 1}-${new Date().getDate()}`;
            this.startTime = this.$lotusUtils.dateFormat(startTime);
            this.endTime = this.$lotusUtils.dateFormat(endTime);
            //获取接收人数据
            this.recipientList();
            //this.initClientHeight();
            //上拉加载更多
            const upLoadMore = () => {
                if (this.$refs.scroll) {
                    this.recipientList();
                }
            };
            loadMore(upLoadMore, window.innerHeight * (2 / 3), 'up');
        }
    }
</script>