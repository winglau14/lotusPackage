<template>
    <div @mouseout="mouseOutFn" :s="changeStatus" v-if="flag.isShow" class="lotus-picker">
        <div class="lotus-picker-main">
            <div class="lotus-picker-top">
                <span class="lotus-picker-top-cancel" @click="close">取消</span>
                <span class="lotus-picker-top-title">{{title||'请选择'}}</span>
                <span @click="close();affirmResult();" class="lotus-picker-top-confirm">确认</span>
            </div>
            <div class="lotus-picker-flex">
                <div v-for="(itemList,curIndex) in lotusPickerData" @mousedown="touchStart(curIndex,$event,itemList)" :id="'lotus-picker-flex-item'+curIndex" :key="curIndex" class="lotus-picker-flex-item">
                    <p @touchstart="touchStart(curIndex,$event)" @touchmove="touchMove(itemList,curIndex,$event)" @touchend="touchEnd(itemList,curIndex)" v-for="(item,index) in itemList.values" v-text="item" :key="index"></p>
                </div>
            </div>
            <i class="lotus-picker-center"></i>
            <i class="lotus-picker-bottom"></i>
        </div>
    </div>
</template>
<style lang="less">
    @import "./loutsPicker.less";
</style>
<script>
    export default {
        name: "lotus-picker",
        props: ["lotusPickerData", "flag", "title"],
        data() {
            return {
                sy: 0,
                my: 0,
                ey: 0,
                initY: 0,
                itemClientH: 0,
                result: [],
                status: false,
                selectedIndex:0
            };
        },
        computed: {
            changeStatus(){
                const _this = this;
                _this.status = this._props.flag.isShow;
                if (this.status) {
                    this.initPicker();
                }
            }
        },
        components: {},
        methods: {
            touchStart(index, e,itemVal) {
                e.preventDefault();
                if(e.touches){
                    this.sy = e.touches[0].pageY;
                }else{
                    this.sy = e.pageY;
                }
                const y = this.getTransformVal(`#lotus-picker-flex-item${index}`);
                this.initY = parseInt(y[1]);
                this.selectedIndex = index;
                //支持pc端滑动
                document.getElementById(`lotus-picker-flex-item${index}`).onmousemove = (ev)=>{
                    this.selectedIndex = index;
                    this.touchMove(itemVal,index,ev);
                };
                document.getElementById(`lotus-picker-flex-item${index}`).onmouseup = (ev)=>{
                    this.selectedIndex = index;
                    this.touchEnd(itemVal,index,ev);
                    document.getElementById(`lotus-picker-flex-item${index}`).onmousemove = null;
                    document.getElementById(`lotus-picker-flex-item${index}`).onmouseup = null;
                };
            },
            //滑动中
            async touchMove(itemVal, index, e) {
                e.preventDefault();
                if(e.touches){
                    this.my = e.touches[0].pageY;
                }else{
                    this.my = e.pageY;
                }
                const y = (this.my - this.sy);
                this.setTransformVal(`#lotus-picker-flex-item${index}`, (y + this.initY), this.itemClientH * itemVal.values.length, 1,400);
            },
            //滑动结束
            async touchEnd(itemVal, index) {
                const y = this.getTransformVal(`#lotus-picker-flex-item${index}`);
                const dom = document.querySelector(`#lotus-picker-flex-item${index}`);
                this.initY = parseInt(y[1]);
                const t = (parseInt(y[1]) + this.itemClientH / 2) / this.itemClientH;
                let b = Math.floor(t);

                //获取滑动的值
                const curItem = await this.getCurNum(b, itemVal, index).then((response) => {
                    return response;
                });

                //滑动到第一个，下拉判断
                if (this.initY >= dom.offsetTop && this.my - this.sy > 0) {
                    const c = this.itemClientH;
                    if(document.querySelector(`#lotus-picker-flex-item${index}`)){
                        document.querySelector(`#lotus-picker-flex-item${index}`).style.cssText = `-webkit-transform:translate3d(0px,${c}px,0px);height:${this.itemClientH * itemVal.values.length}px;transition:all 500ms cubic-bezier(0.1, 0.57, 0.1, 1);transform:translate3d(0px,${c}px,0px);height:${this.itemClientH * itemVal.values.length}px;transition:all 500ms cubic-bezier(0.1, 0.57, 0.1, 1)`;
                    }
                } else if (Math.abs(parseInt(y[1])) >= dom.scrollHeight - 2 * this.itemClientH && this.my - this.sy < 0) {
                    //滑动到最后一个，上拉判断
                    const c = dom.scrollHeight - 2 * this.itemClientH;
                    this.setTransformVal(`#lotus-picker-flex-item${index}`, (-c), this.itemClientH * itemVal.values.length,1, 500);
                } else {
                    //计算滑动item的transform：translateY的值
                    const c = (b + 1) * this.itemClientH - this.itemClientH;
                    this.setTransformVal(`#lotus-picker-flex-item${index}`, (c), this.itemClientH * itemVal.values.length,1,500);
                }
                //最大值限制
                if (itemVal.maxVal && curItem.val >= itemVal.maxVal) {
                    itemVal.values.map((item, itemIndex) => {
                        if (item === itemVal.maxVal) {
                            this.setPickerShow(index, itemIndex, itemVal);
                            return false;
                        }
                    });
                }
                //this._props.lotusPickerData[0].linkage为true是设置picker选项联动标识
                //省市区联动返回最后选择的值
                if(this._props.lotusPickerData[0].linkage){
                    if(index === 0){
                        this._props.lotusPickerData.map((item,curIndex)=>{
                            if(curIndex>0){
                                this.setTransformVal(`#lotus-picker-flex-item${curIndex}`, this.itemClientH, this.itemClientH * itemVal.values.length);
                            }
                        });
                    }else if(index === 1){
                        const last = index+1;
                        this.setTransformVal(`#lotus-picker-flex-item${last}`, this.itemClientH, this.itemClientH * this.lotusPickerData[last].values.length);
                    }
                }
                this.affirmResult(index);
            },
            //获取transform的值
            getTransformVal(obj) {
                const dom = document.querySelector(obj);
                let p;
                if(dom){
                    p = dom.style.webkitTransform || dom.style.transform;
                    //获取transform里值
                    const reg = /\(.*\)/;
                    p = p.match(reg)[0].replace(/\(|\)/g, "");
                    return p.split(",");
                }else{
                    return [];
                }
            },
            //设置transform的值
            setTransformVal(obj, yVal, pHeight, type, time){
                if (type&&document.querySelector(obj)) {
                    document.querySelector(obj).style.cssText = `-webkit-transform:translate3d(0px,${yVal}px,0px);height:${pHeight}px;transition:all ${time || 500}ms cubic-bezier(0.1, 0.57, 0.1, 1);transform:translate3d(0px,${yVal}px,0px);height:${pHeight}px;transition:all ${time || 500}ms cubic-bezier(0.1, 0.57, 0.1, 1);`;
                } else if(document.querySelector(obj)) {
                    document.querySelector(obj).style.cssText = `-webkit-transform:translate3d(0px,${yVal}px,0px);height:${pHeight}px;transition:none;transform:translate3d(0px,${yVal}px,0px);height:${pHeight}px;transition:none;`;
                }
            },
            //设置初始picker显示值
            setPickerShow(domIndex, index, itemVal, type){
                index === 0 ? index = 0 : index = -index;
                const c = index * this.itemClientH + this.itemClientH;
                if (type) {
                    this.setTransformVal(`#lotus-picker-flex-item${domIndex}`, c, this.itemClientH * itemVal.values.length, type);
                } else {
                    this.setTransformVal(`#lotus-picker-flex-item${domIndex}`, c, this.itemClientH * itemVal.values.length);
                }

            },
            //获取索引值
            getCurNum(b, itemVal, index){
                let cIndex = 0;
                let initY = 0;
                let obj = {
                    index: 0,
                    val: 0
                };
                return new Promise((resolve) => {
                    this.$nextTick(() => {
                        const y = this.getTransformVal(`#lotus-picker-flex-item${index}`);
                        initY = parseInt(y[1]);
                        if (initY === this.itemClientH) {
                            cIndex = 0;
                        } else {
                            cIndex = Math.abs(b - 1);
                            if (cIndex >= itemVal.values.length) {
                                cIndex = itemVal.values.length - 1;
                            }
                        }
                        obj.index = cIndex;
                        obj.type = itemVal.type;
                        obj.val = itemVal.values[cIndex];
                        if (itemVal&&itemVal.maxVal) {
                            obj.maxVal = itemVal.maxVal;
                        }

                        //console.log(`当前索引:${cIndex},当前值:${itemVal[cIndex]}`);
                        this.result.map((rItem, rIndex) => {
                            if (itemVal.type === rItem.type) {
                                this.result.splice(rIndex, 1);
                            }
                        });
                        resolve(obj);
                    });

                });
            },
            //关闭picker弹层
            close(){
                this._props.flag.isShow = false;
                this.$emit('cancel',this._props.flag.isShow);
            },
            //设置picker初始值
            initPicker(){
                this.$nextTick(() => {
                    if (!document.querySelector(".lotus-picker-flex-item p"))return false;
                    this.itemClientH = document.querySelector(".lotus-picker-flex-item p").clientHeight;
                    this.initY = this.itemClientH;
                    this._props.lotusPickerData.map((item, index) => {
                        document.querySelector(`#lotus-picker-flex-item${index}`).style.cssText = `-webkit-transform:translate3d(0px,${this.itemClientH}px,0px);height:${this.itemClientH * item.values.length}px;transform:translate3d(0px,${this.itemClientH}px,0px);height:${this.itemClientH * item.values.length}px;`;
                        if (item.index > 0) {
                            this.setPickerShow(index, item.index, this._props.lotusPickerData[index]);
                        }
                    });
                });
            },
            //点击确认按钮获取最后picker的值回传到父组件
            affirmResult(tarIndex){
                this.result = [];
                this._props.lotusPickerData.map((item, index) => {
                    let obj = {
                        index: 0,
                        val: 0,
                        type: '',
                        act:tarIndex===index
                    };
                    //获取对应picker的transform:translateY的值
                    const y = this.getTransformVal(`#lotus-picker-flex-item${index}`);
                    //parseInt(y[1])-this.itemClientH)/this.itemClientH计算picker滑动到了第几个item的index
                    const itemIndex = Math.abs((parseInt(y[1]) - this.itemClientH) / this.itemClientH);
                    //拼装父组件需要的值
                    obj.index = Math.abs(itemIndex);
                    obj.val = item.values[itemIndex];
                    obj.type = item.type;
                    this.result.push(obj);
                });
                //picker值的回传
                this.$emit("change", this.result);
            },
            mouseOutFn(){
                document.getElementById(`lotus-picker-flex-item${this.selectedIndex}`).onmousemove = null;
                document.getElementById(`lotus-picker-flex-item${this.selectedIndex}`).onmouseup = null;
                this.touchEnd(this.lotusPickerData[this.selectedIndex],this.selectedIndex);
            }
        },
        mounted() {
        },
        created() {
        }
    };
</script>