<template>
    <div class="manga-video">
        <iframe class="manga-video-iframe" :src="url" frameborder="0"></iframe>
    </div>
</template>
<style lang="less">
    @import './video.less';
</style>
<script>
    export default {
        data() {
            return {
                url:'https://bobo.yong-cctv.com/share/eTOERov3fehigMQl'
            }
        },
        mounted() {
            const title = this.$route.query.title;
            this.$lotusChangeTitle(title);
        },
        computed: {

        },
        methods: {
        }
    }
</script>