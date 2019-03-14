<!--
【descImage】：图片
【showImg】：是否显示图片，true/false
【descText】：描述语句
【twoButton】：是否显示两个按钮，true/false
【noText】：取消
【yesText】：确定
-->
<template>
    <div class="confirm-item" v-if="ConfirmData.showConfirm" @click.self="ConfirmData.showConfirm=false">
        <div class="confirm-item-wrap">
            <div class="confirm-item-content">
                <img v-if="showImg" class="confirm-item-content-image" :src="ConfirmData.descImage?ConfirmData.descImage:defaultImage" alt="">
                <div class="confirm-item-content-text" v-html="ConfirmData.descText?ConfirmData.descText:'想好了吗？'"></div>
            </div>
            <div class="confirm-item-click">
                <a v-if="twoButton" class="confirm-item-click-no" v-html="ConfirmData.noText?ConfirmData.noText:'取消'" @click="ConfirmData.showConfirm=false"></a>
                <a class="confirm-item-click-yes" v-html="ConfirmData.yesText?ConfirmData.yesText:'确定'" @click="click"></a>
            </div>
        </div>
    </div>
</template>
<style lang="less">
    @import 'lotusConfirm.less';
</style>
<script>
    export default {
        name: 'tab-bar',
        props: ['ConfirmData'],
        data () {
            return {
            	defaultImage: require('./confirm-icon.png'),
            	showImg: true,
	            twoButton: true,
            }
        },
        components: {},
        methods: {
	        click(){
		        this.$emit('lotusConfirm');
		        this._props.ConfirmData.showConfirm = false;
            }
        },
        mounted(){

        },
        created(){
            this._props.ConfirmData.hasOwnProperty('showImg')?(this.showImg = this._props.ConfirmData.showImg):'';
	        this._props.ConfirmData.hasOwnProperty('twoButton')?(this.twoButton = this._props.ConfirmData.twoButton):'';
        }
    }
</script>