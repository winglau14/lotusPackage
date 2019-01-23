<template>
    <!--过渡动画-->
    <view class="index-splash">
        <view class="index-splash-top">
            <text v-text="lotusSplashData.welcomeTitle"></text>
            <text v-text="lotusSplashData.appTitle"></text>
        </view>
        <view class="index-splash-footer">
            <view class="index-splash-logo" :style="'background:url('+lotusSplashData.logo+') no-repeat;background-size:100% 100%;'"></view>
            <view class="index-splash-text"><text>&copy;</text><text v-text="lotusSplashData.bottomTitle"></text></view>
        </view>
    </view>
</template>
<style lang="less">
    @import './lotusSplash.less';
</style>
<script>

    export default {
        name: 'lotus-splash',
        props: ['lotusSplashData'],
        data () {
            return {}
        },
        components: {},
        methods: {
            //splash页
            splashFn(){
                /* let splashDom = document.getElementById("index-splash");
                const _this = this;
                if (document.getElementById("index-splash")) {
                    splashDom.addEventListener("animationend", function () {
                        console.log('动画执行完成');
                        try {
                            const app = _this._props.lotusSplashData.parentDom;
                            document.getElementById(app).removeChild(splashDom);
                        } catch (e) {}
                    });
                    splashDom.addEventListener("webkitAnimationEnd", function () {
                        console.log('动画执行完成');
                        try {
                            const app = _this._props.lotusSplashData.parentDom;
                            document.getElementById(app).removeChild(splashDom);
                        } catch (e) {}
                    });
                } */
            }
        },
        onLoad(){
            this.$nextTick(()=>{
                //this.splashFn();
            });
        },
        onShow(){
        }
    }
</script>