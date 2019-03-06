<!--
【descImage】：图片
【showImg】：是否显示图片，true/false
【descText】：描述语句
【twoButton】：是否显示两个按钮，true/false
【noText】：取消
【yesText】：确定
-->
<template>
    <div class="confirm-item" v-if="ConfirmData.showConfirm" @tap="ConfirmData.showConfirm=false">
        <div class="confirm-item-wrap">
            <div class="confirm-item-content">
                <img v-if="ConfirmData.showImg" class="confirm-item-content-image" :src="ConfirmData.descImage?ConfirmData.descImage:defaultImage" alt="">
                <div class="confirm-item-content-text" v-html="ConfirmData.descText?ConfirmData.descText:'想好了吗？'"></div>
            </div>
            <div class="confirm-item-click">
                <span v-if="twoButton" class="confirm-item-click-no" v-html="ConfirmData.noText?ConfirmData.noText:'取消'" @tap="ConfirmData.showConfirm=false"></span>
                <span class="confirm-item-click-yes" v-html="ConfirmData.yesText?ConfirmData.yesText:'确定'" @tap="click"></span>
            </div>
        </div>
    </div>
</template>
<style lang="less">
    @import 'lotusConfirm.less';
</style>
<script>
    export default {
        name: 'lotus-confirm',
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
        created(){
            this._props.ConfirmData.hasOwnProperty('showImg')?(this.showImg = this._props.ConfirmData.showImg):'';
	        this._props.ConfirmData.hasOwnProperty('twoButton')?(this.twoButton = this._props.ConfirmData.twoButton):'';
        }
    }
</script>