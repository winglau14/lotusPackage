<template>
    <div @click="close" class="lotus-previewer" v-if="previewerData.isShow">
        <img :class="previewerData.isShow ? 'act' :'remove'" :src="previewerData.url" alt="">
    </div>
</template>
<style lang="less">
    @import '../../style/other/lotusPreviewer.less';
</style>
<script>
    import lockBody from '../../Utils/lockBody'
    export default {
        name: 'lotus-previewer',
        props: ['previewerData'],
        methods: {
            close(){
                this._props.previewerData.isShow = false;
                lockBody('auto','auto');
            }
        }
    }
</script>