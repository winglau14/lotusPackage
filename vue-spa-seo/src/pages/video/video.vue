<template>
    <div class="manga-video">
        <iframe id="load-resource" class="manga-video-iframe" :src="url" frameborder="0"></iframe>
    </div>
</template>
<style lang="less">
    @import './video.less';
</style>
<script>
    export default {
        data() {
            return {
                url: ''
            }
        },
        mounted() {
            const title = this.$route.query.name;
            this.url = decodeURIComponent(this.$route.query.url);
            this.$lotusChangeTitle(title);
            this.loadResource();
        },
        computed: {},
        methods: {
            loadResource() {
                if (typeof document) {
                    const _this = this;
                    const dom = document.getElementById("load-resource");
                    _this.$lotus.loading.show();
                    dom.onload = function () {
                        _this.$lotus.loading.hide();
                    };
                    setTimeout(()=>{
                        _this.$lotus.loading.hide();
                    },2000);
                }
            }
        }
    }
</script>