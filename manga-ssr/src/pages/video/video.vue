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
                url:''
            }
        },
        mounted() {
            const title = this.$route.query.name;
            this.url = this.$route.query.url;
            this.$lotusChangeTitle(title);
        },
        computed: {

        },
        methods: {
        }
    }
</script>