export default function (callback, distance, type, _isScroll) {
    let sY = 0;
    let r, scrollTop = 0, clientH = 0, scrollHeight = 0;
    let initDistance = distance || 150;
    let scrollRange = 80;
    let isScroll = _isScroll || false;//是否需要滚动事件加载默认false
    let loading = false;
    //获取scrollTop(当前滚动的top值)/clientH(当前窗口的高度)/scrollHeight(当前文档可滚动的高度)
    function getOptions() {
        scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
        clientH = window.innerHeight;
        scrollHeight = document.body.scrollHeight || document.documentElement.scrollHeight;
    }

    document.addEventListener("touchstart", function (event) {
        if(loading){
            event.preventDefault();
            return;
        }
        sY = event.touches[0].pageY;
    }, false);
    document.addEventListener("touchmove", function (event) {
        if(!sY){
           return;
        }
        if (loading) {
            event.preventDefault();
            return
        }
        getOptions();
        r = event.touches[0].pageY - sY;
    }, false);
    document.addEventListener("touchend", function (event) {
        if (loading) {
            event.preventDefault();
            return
        }
        getOptions();
        if (Math.abs(r) > scrollRange && scrollTop + clientH >= scrollHeight - initDistance && r < 0 && type === 'up') {
            loading = true;
            //上拉
            callback();
        }
        //重置r与scrollTop初始值
        loading = false;
        r = 0;
        scrollTop = 0;
    }, false);
    //滚动到底部加载跟多
    if (isScroll) {
        document.addEventListener("scroll", function () {
            getOptions();
            //触发上拉
            if (scrollTop + clientH >= scrollHeight - initDistance && type === 'up') {
                callback();
            }
        });
    }

}