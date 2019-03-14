<template>
  <div id="app">
    <transition name="fade">
      <router-view keep-alive></router-view>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {
  }
}
</script>

<style lang="less">
  @import 'style/base.less';
  body, html {
    background-color: #fff;
    -webkit-overflow-scrolling: touch;
    overflow-scrolling: touch;
    color:#666;
    max-width: 750px;
    margin:0 auto;
  }
  /**页面切换淡入淡出效果**/
  .fade-enter-active, .fade-leave-active {
    transition: opacity .2s ease-in-out;
  }

  .fade-enter-active {
    transition-delay: .3s;
  }

  .fade-enter, .fade-leave-to {
    opacity: 0;
  }

  .index-app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  a {
    color: #222;
    display: block;
  }

  a:hover {
    text-decoration: none !important;
    tap-highlight-color:rgba(0,0,0,0);
    -webkit-tap-highlight-color:rgba(0,0,0,0);
  }

  a:active {
    text-decoration: none !important;
    background: #ececec;
  }
  .lock-body{
    height:100%;
    overflow: hidden;
  }
  .body-bg{
    background: #fff !important;
  }
  .abso-body{
    position: absolute;
    left:0;
    width:100%;
    height:100%;
  }
  .list-no-data{
    text-align: center;
    color:#969696;
    font-size: 0.36rem;
    padding-top: 0.43rem;
    padding-bottom: 0.43rem;
  }
</style>
