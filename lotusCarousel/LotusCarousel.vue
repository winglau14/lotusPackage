<!--
imageList:图片列表类型为数组
_isAuto:是否需要开始自动轮播?_isAuto= true开启，_isAuto= false不开启自动轮播
_autoTime:轮播时间默认3000
_dotClickFlag:是否支持圆点点击切换轮播，默认false
-->
<template>
    <div class="lotus-slider-wrap">
        <ul @mouseout="mouseOutFn" @mouseover="mouseOverFn" class="lotus-slider-wrap-list" id="lotus-slider-wrap-list">
            <li v-for="(item,index) in imageList.concat(imageList)" :key="index" @click="clickLink(item.url)"  @touchstart="touchStart" @mousedown="touchStart" @touchmove="touchMove" @touchend="touchEnd" @transitionend="transitionEnd">
                <!--<router-link :to="item.url"><img @load="load" :src="item.pic" alt=""></router-link>-->
                <img  @load="load" :src="item.pic" alt="">
            </li>
        </ul>
        <!---->
        <p v-if="imageList.length>1" class="lotus-slider-wrap-dot">
            <span @click="clickChangeBenner(index);" v-for="(item,index) in imageList" :class="index === 0&&'active'" :key="index"></span>
        </p>
    </div>
</template>
<style lang="less">
    @import './lotusCarousel.less';
</style>
<script>
    export default {
        name: 'lotus-slider-wrap',
        props: {
            //图片list
            imageList: {
                required: true,
                type: Array
            },
            //开启自动轮播
            _isAuto: {
                type: Boolean,
                default: true
            },
            //轮播时间
            _autoTime: {
                type: Number,
                default: 3000
            },
            //支持点击按钮切换
            _dotClickFlag:{
                type:Boolean,
                default:false
            }
        },
        data () {
            return {
                windowWidth:typeof window !== "undefined"&&Math.min((window.innerWidth?window.innerWidth:375), (document.documentElement.clientWidth?document.documentElement.clientWidth:375)),
                liLength: 0,
                listWidth: 0,
                imgNaturalHeight: 0,
                imgNaturalWidth: 0,
                imgHeight: 0,
                startX: 0,
                endX: 0,
                index: 0,
                distance: 0,
                time: null,
                isAuto: this._props._isAuto,
                imageUrls:[],
                clickFlag:true
            }
        },
        components: {},
        methods: {
            //获取x轴滑动距离
            getFinger(e) {
                let x = 0;
                if (e.touches) {
                    const touches = e.touches;
                    x = touches[0].clientX;
                }else{
                    x = e.pageX;
                }
                return x;
            },
            //设置位置
            setTranslate(index, windowWidth) {
                if(typeof document === "undefined"){
                    return false;
                }
                const list = document.querySelector('.lotus-slider-wrap-list');
                if (document.querySelector('.lotus-slider-wrap-dot')) {
                    const dot = document.querySelector('.lotus-slider-wrap-dot');
                    const span = dot.getElementsByTagName('span');
                    //设置dot className
                    for (let i = 0; i <=span.length-1; i++) {
                        span[i].className = '';
                    }
                    span[Math.abs(index)%span.length].className = 'active';
                }
                this.setTransition(list, (index * windowWidth), 300);
            },
            //设置transition
            setTransition(obj, distance, time){
                obj.style.webkitTransition = 'all ' + time + 'ms ease-out';
                obj.style.webkitTransform = 'translate3D(' + distance + 'px,0px,0px)';
            },
            //自动轮播
            autoCarousel() {
                clearInterval(this.time);
                //轮播间隔时间
                const autoTime = ~~this._props._autoTime;
                this.time = setInterval(() => {
                    if (Math.abs(this.index) === this.liLength - 1) {
                        this.index = -((this.liLength/2)-1);
                    }
                    //设置切换位置
                    this.setTranslate(this.index, this.windowWidth);
                    if(typeof document === "undefined"){
                        return false;
                    }
                    //切换过渡小优化，不然切换的时候，会有小的闪动
                    document.querySelector('.lotus-slider-wrap-list').style.webkitTransition = 'none';
                    setTimeout(()=>{
                        this.index--;
                        this.setTranslate(this.index, this.windowWidth);
                    },30);
                   //console.log(this.index);
                }, autoTime);
            },
            touchStart(e){
                this.startX = this.getFinger(e);
                if(this.index === 0){
                    this.index = -this.liLength/2;
                }else if(this.index === this.liLength-1){
                    this.index = -((this.liLength/2)-1);
                }
                clearInterval(this.time);
                if(typeof document === "undefined"){
                    return false;
                }
                document.querySelector("#lotus-slider-wrap-list").onmousemove = (ev)=>{
                    this.touchMove(ev);
                };
                document.querySelector("#lotus-slider-wrap-list").onmouseup = (ev)=>{
                    this.touchEnd(ev);
                    document.querySelector("#lotus-slider-wrap-list").onmousemove = null;
                    document.querySelector("#lotus-slider-wrap-list").onmouseup = null;
                }
            },
            touchMove(e){
                clearInterval(this.time);
                if(typeof document === "undefined"){
                    return false;
                }
                const list = document.querySelector('.lotus-slider-wrap-list');
                this.endX = this.getFinger(e);
                this.distance = this.endX - this.startX;
                //console.log(this.distance);
                if(Math.abs(this.distance)>=30){
                    this.clickFlag = false;
                    e.preventDefault();
                }else{
                    this.clickFlag = true;
                }

                let ss = 0;
                //判断滑动到最左边加回弹效果
                if (this.index === 0 && this.distance > 0) {
                    //console.log('最左边');
                    ss = (Math.sqrt(Math.abs(this.distance)) + 10);
                    this.setTransition(list, (~~ss), 100);
                    return false;
                } else if (this.index === -(this.liLength - 1) && this.distance < 0) {
                    //判断滑动到最右边加回弹效果
                    //console.log('最右边');
                    ss = this.index * this.windowWidth - (Math.sqrt(Math.abs(this.distance)) + 10);
                    this.setTransition(list, (~~ss), 100);
                    return false;
                }
                this.setTransition(list, (this.index * this.windowWidth + this.distance), 0);
            },
            touchEnd(){
                if(typeof document === "undefined"){
                    return false;
                }
                const list = document.querySelector('.lotus-slider-wrap-list');
                clearInterval(this.time);
                //重新开启自动轮播
                if (this._props.imageList.length >= 2 && this.isAuto) {
                    this.autoCarousel();
                }
                //回弹
                if (this.distance!==0 && Math.abs(this.distance) < this.windowWidth / 3) {
                    //console.log('回弹');
                    this.setTransition(list, (this.index * this.windowWidth), 300);
                    return false;
                }
                //滑动距离超过50
                if (Math.abs(this.distance) > 50) {
                    //左滑动 index-- distance<0 ? '左滑动':'右滑动'
                    if (this.distance < 0) {
                        this.index--;
                        //滑动到最后一个 index = -(liLength-1);
                        if (Math.abs(this.index) >= this.liLength - 1) {
                            this.index = -(this.liLength - 1);
                        }
                    } else {
                        //右滑动
                        this.index++;
                        if (this.index >= 0) {
                            this.index = 0;
                        }
                    }
                    //设置切换位置
                    this.setTranslate(this.index, this.windowWidth);
                }
                /*this.distance = 0;
                this.clickFlag = true;*/
                setTimeout(()=>{
                    this.distance = 0;
                    this.clickFlag = true;
                },100);
                console.log('end:'+this.distance);

            },
            transitionEnd(){
                //判断滑动到最后一个
                if(Math.abs(this.index) === this.liLength-1){
                    this.index = -((this.liLength/2)-1);
                }
            },
            //鼠标移入调用函数
            mouseOverFn(){
                clearInterval(this.time);
            },
            //鼠标移开调用函数
            mouseOutFn() {
                document.getElementById(`lotus-slider-wrap-list`).onmousemove = null;
                document.getElementById(`lotus-slider-wrap-list`).onmouseup = null;
                this.autoCarousel();
            },
            //加载数据
            load(){
                if(typeof document === "undefined"){
                    return false;
                }
                let list = document.querySelector('.lotus-slider-wrap-list');
                let li = list.querySelectorAll('li');
                this.liLength = li.length;
                this.listWidth = ~~this.windowWidth * this.liLength;
                const img = list.getElementsByTagName('img');
                const imgNaturalHeight = img[0].naturalHeight;
                const imgNaturalWidth = img[0].naturalWidth;
                this.imgHeight = ~~((imgNaturalHeight * this.windowWidth) / imgNaturalWidth);
                //给list设置width height
                list.style.width = this.listWidth + 'px';
                list.style.webkitTransform = 'translate3D(0px,0px,0px)';
                //给li设置width height
                for (let i = 0; i < this.liLength; i++) {
                    li[i].style.width = this.windowWidth + 'px';
                    li[i].style.height = this.imgHeight>imgNaturalHeight?imgNaturalHeight+'px': this.imgHeight+ 'px';
                    img[i].style.width = this.windowWidth>750?750+'px':this.windowWidth + 'px';
                    img[i].style.display = 'block';
                }

            },
            //支持点击按钮切换
            clickChangeBenner(index){
                if(this._props._dotClickFlag){
                    this.index = -index;
                    clearInterval(this.time);
                    //设置切换位置
                    this.setTranslate(this.index, this.windowWidth);
                    this.autoCarousel();
                }

            },
            //图片链接跳转
            clickLink(url){
                console.log(this.clickFlag);
                if(this.clickFlag){
                    this.$router.push(url);
                }

            }
        },
        mounted(){
            if(this._props.imageList.length > 1){
                //图片大于2个开始轮播开启自动轮播
                this.autoCarousel();
            }

        },
        created(){

        },
        destroyed(){
            //销毁 关闭定时器
            clearInterval(this.time);
        }
    }
</script>