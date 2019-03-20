<template>
	<div @click="gotoTop" v-if="flag" class="lotus-to-top">
		<img class="lotus-to-top-pic" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAoCAYAAACWwljjAAAABGdBTUEAALGPC/xhBQAAAbtJREFUWAntmMtKw0AUhhMvS5cuxILgQlRUpIggIoKIIoigG1eC+AA+jo+i6FIXBfeuXIgoeKVeitVWJX5HWhhDksnUpp3FDPyZk3Nm5nycmZKkXhAEOXSA3lG7muTeRzmfy6HneUvIhnYkQK+Q9NhAA0Opg0vBEhjBKHiyb8iGMyQMOYuK41BcBSypAL+MYXSKjtFAW7EAGEO3qN4uMQbbAkXiSfRQJ1H6a+yhlkKRcAoVFYiweYNjtCVQJJpBz2GCiPt7fBOZQpFgDpUikse5HgnkM4Fi4QX0Fpc5wf9EbLqpUCy4jMoJSXWhFwbMNgWKhVbRhy5jirhs9fy/oFhgHVVTJEs7RLZ8sSEoJm6iz7SZDMbJ+/OKERQTttCXQRLToRUmrKWCYuA2+jbN0MB4OQobYShfdTCgn/sL1K36M7TLrN3n+758aPy2rrpR6+/od5E8tf/A1uLS9aId5T7J3CNYihkQ4D9PiMdMC7mp4rjB9kjFjZp8BlnVHJBuO1yFXIV0FdDF3RlyFdJVQBdv5AxVdIsq8apiZ2PyYO1EVykesGfZEESsCkweyR8MUW+V8uJ1gkYipmpdP1pm2aJVPEGzAAAAAElFTkSuQmCC">
	</div>
</template>

<script>
	export default {
		data() {
			return {
			    flag:false
			}
		},
		methods:{
		    //返回顶部
			gotoTop(){
			    const _this = this;
				this.$nextTick(()=>{
				    if(typeof document !== "undefined"){
                        document.body.scrollTop = 0;
						document.documentElement.scrollTop = 0;
						_this.flag = false;
					}
				})
			},
			//监听滚动事件
			scrollFn(){
                const _this = this;
                this.$nextTick(()=>{
                    if(typeof document !== "undefined"){
                        document.addEventListener("scroll",function(){
                            const curTop = document.body.scrollTop||document.documentElement.scrollTop;
                            if(curTop >= window.innerHeight*(2/3)){
                                _this.flag = true;
                            }
                        },false);
                    }
                })
			}
		},
		mounted(){
			this.scrollFn();
		}
	}
</script>

<style lang="less">
@import "./lotusToTop.less";
</style>
