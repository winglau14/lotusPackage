import {lotusUtils,lotusAjax} from "./utils";
let userInforData = $.cookie('u_i_s') ? JSON.parse($.cookie('u_i_s')) : null;
//公共顶部
let xyzTop = '<div class="xyz-common-top">' +
    '<div class="xyz-common-top-wrap width1200">' +
    '<div class="fl">';
//未登录
if (!$.cookie('u_i_s')) {
    xyzTop += '<span class="fl">欢迎来到小药站 </span><a style="padding-left: 14px;" class="xyz-common-top-exit fr" href="http://demall.xiaoyaozhan.com/pages/login.html">登录</a>';
} else {
    //已登录
    xyzTop += '<span class="fl">欢迎来到小药站 </span><img width="22" height="22" class="xyz-common-top-user-header fl" src="' + userInforData.HeadImgUrl + '" alt=""><span class="xyz-common-top-user-name fl text-elli">' + userInforData.NickName + '</span><a onclick="xyzCommon.dropOut();" class="xyz-common-top-exit fr" href="javascript:void(0);">退出</a>';
}
xyzTop += '</div>' +
    '<div class="fr xyz-common-top-category">' +
    '<a target="_blank" class="bor1" href="http://demall.xiaoyaozhan.com">回到首页</a><a target="_blank" class="bor1" href="http://devip.xiaoyaozhan.com/pages/indent/indentMy.html?m=7&s=0">我的订单</a><a class="bor1" target="_blank" href="http://demall.xiaoyaozhan.com/pages/user/me.html">我的收藏</a><a target="_blank" class="bor1" href="http://devip.xiaoyaozhan.com/pages/qrCode/serviceCode.html">客服</a><a target="_blank" href="http://devip.xiaoyaozhan.com/pages/message/messageList.html">通知</a>' +
    '</div>' +
    '</div>' +
    '</div>';
let xyzCenter = '<div class="xyz-common-center">' +
    '<div class="xyz-common-center-wrap width1200">' +
    '<a class="fl" target="_blank" href="http://demall.xiaoyaozhan.com">' +
    '<img width="50" height="50" class="xyz-common-center-logo fl" src='+require("../images/logo.png")+' alt="">' +
    '<span class="xyz-common-center-big fl">小药站采购端</span>' +
    '<span class="xyz-common-center-small fl">厂家直销批发平台</span>' +
    '</a>' +
    '<div class="xyz-common-center-search fl">' +
    '<input placeholder="请输入商品名称" class="xyz-common-center-search-input fl" type="text"><span onclick="xyzCommon.searchFun();" class="xyz-common-center-search-btn fl"></span>' +
    '</div>' +
    '<div class="xyz-common-center-cart fr"><a target="_blank" href="http://decart.xiaoyaozhan.com">' +
    '<img class="xyz-common-center-cart-img fl" src='+require("../images/cart-icon.png")+' alt=""><span class="xyz-common-center-cart-text fl">采购车</span><i class="xyz-common-center-cart-bg"></i><span class="xyz-common-center-cart-num">0</span>' +
    '</a></div>' +
    '</div>' +
    '</div>';
let xyzNav = '<div class="xyz-common-nav">' +
    '<div class="xyz-common-nav-wrap width1200 clearfix">' +
    '<div class="xyz-common-nav-category fl">' +
    '<p><a href="javascript:void(0);" style="color:#fff;"><img src='+require("../images/category-icon.png")+' alt=""> 药品分类</a></p>' +
    '<div id="xyz-common-category-module" style="display: none;" class="xyz-common-nav-category-box">' +
    '<ul class="xyz-common-nav-category-left">' +'</ul>' +
    '<div class="xyz-common-nav-category-right">' +'</div>' +
    '</div>' +
    '</div>' +
    '<ul class="fl xyz-common-nav-list">' +
    '<li class="fl active"><a  href="http://demall.xiaoyaozhan.com">首页</a></li>' +
    '<li class="fl"><a href="http://demall.xiaoyaozhan.com/pages/coolMan/tarentoShop.html">达人店铺</a></li>' +
    '<li class="fl"><a href="http://demall.xiaoyaozhan.com/pages/goods/allGoodsList.html">全部商品</a></li>' +
    '<li class="fl"><a href="http://demall.xiaoyaozhan.com/pages/coupon/couponIndex.html">优惠券中心</a></li>' +
    '</ul>' +
    '<div class="xyz-common-nav-my fr">' +
    '<a target="_blank" href="'+lotusUtils.mallUrl+'/pages/user/me.html">我的小药站</a> <img width="16" height="16" src='+require("../images/arrows-down.png")+' alt="">' +
    '<div class="xyz-common-nav-my-box">' +
    '<a target="_blank" href="http://devip.xiaoyaozhan.com/pages/indent/indentMy.html?m=7&s=0">全部订单</a>' +
    '<a style="display: none;" href="#">我的卡包</a>' +
    '<a target="_blank" href="http://devip.xiaoyaozhan.com/pages/enquiry/enquiryMY.html?m=4">我的询价</a>' +
    '<a target="_blank" href="http://devip.xiaoyaozhan.com/pages/invite/inviteGoods.html?m=3">报货邀请单</a>' +
    '<a target="_blank" href="http://devip.xiaoyaozhan.com/pages/frequently/frequentlyBuy.html?m=6">常购商品</a>' +
    '</div>' +
    '</div>' +
    '</div>' +
    '</div>';
//底部
let xyzFooter = '<div class="xyz-common-footer">' +
    '<div class="width1200">' +
    '<p class="xyz-common-footer-category"><a rel="nofollow" title="粤B2-20180932" target="_blank" href="javascript:location.href=\''+lotusUtils.mallUrl+'/pages/companyInfor.html\'">经营许可证：粤B2-20180932</a>|<a target="_blank" rel="nofollow" title="粤ICP备17054794号" href="http://www.miitbeian.gov.cn/">粤ICP备17054794号</a>|<a href="javascript:void(0);">小药站客服电话：020-8251 4307</a></p>' +
    '<p>© 2017-2018 www.xiaoyaozhan.com All Rights Reserved.小药站 版权所有 <a target="_blank" href="http://demall.xiaoyaozhan.com/pages/protocol.html">《用户协议》</a></p>' +
    '</div>' +
    '</div>';
//返回顶部
let xyzGoToTop = '<div class="xyz-go-top"><p><img src='+require("../images/go-top.png")+' alt=""></p><span>顶部</span></div>';
export const xyzCommon = {
    //插入dom
    appendHtml: function () {
        $("#xyz-common").html(xyzTop + xyzCenter + xyzNav);
        $("body").append(xyzFooter + xyzGoToTop);
    },
    //返回顶部
    goToTop: function () {
        //返回顶部
        $(window).scroll(function () {
            var top = $(document).scrollTop();
            if (top >= window.innerHeight / 3) {
                $('.xyz-go-top').show();
            } else {
                $('.xyz-go-top').hide();
            }
        });
        $('.xyz-go-top').click(function () {
            document.documentElement.scrollTop = 0;
            document.body.scrollTop = 0;
        });
    },
    //我的小药站交互
    myXyzHover: function () {
        $(".xyz-common-nav-my").mouseenter(function () {
            $(this).addClass("xyz-common-nav-myed");
            $(this).find("img").attr("src", require("../images/arrows-up.png"));
            $(this).find(".xyz-common-nav-my-box").show();
        });
        $(".xyz-common-nav-my").mouseleave(function () {
            $(this).removeClass("xyz-common-nav-myed");
            $(this).find("img").attr("src", require("../images/arrows-down.png"));
            $(this).find(".xyz-common-nav-my-box").hide();
        });
    },
    //分类交互
    xyzCategory: function () {
        //鼠标移入药品分类
        $(".xyz-common-nav-category").mouseenter(function () {
            $("#xyz-common-category-module").show();
            $(".xyz-common-nav-category-right").css("height","");
        });
        $(".xyz-common-nav-category").mouseleave(function () {
            if(!$(this).hasClass("remove")){
                $("#xyz-common-category-module").hide();
            }
        });
        //鼠标移出药品分类明细
        $("#xyz-common-category-module").mouseleave(function () {
            $("#xyz-common-category-module li").removeClass("active");
            $(".xyz-common-nav-category-right").hide();
        });
        //鼠标移入药品分类明细 li
        $("#xyz-common-category-module li").mouseenter(function () {
            $(".xyz-common-nav-category-right").show().css("height","");
            var index = $(this).index();
            $("#xyz-common-category-module li").removeClass("active");
            $(this).addClass("active");
            $(this).find("p").css("border-color", "#fff");
            $(this).prev().find("p").css("border-color", "#fff");
            //右侧数据展示
            var secChildren = $(this).find(".xyz-common-category-children").text();
            if(secChildren){
                secChildren = JSON.parse(secChildren);
                var secStr='<p class="xyz-common-nav-category-sub clearfix">';
                for(var a = 0;a<=secChildren.length-1;a++){
                    secStr+='<a class="fl" target="_blank" href="'+lotusUtils.mallUrl+'/pages/goods/allGoodsList.html?a='+index+'&b='+a+'&class='+secChildren[a].ProductName+'">'+secChildren[a].ProductName+' ('+secChildren[a].GoodsCount+')</a>';
                    //三级分类
                    /*secStr+='<p class="xyz-common-nav-category-link clearfix">';
                    for(var b = 0;b<=secChildren[a].Children.length-1;b++){
                        secStr+='<a class="fl" href="'+lotusUtils.mallUrl+'/pages/goods/allGoodsList.html?a='+index+'&b='+a+'&c='+b+'&class='+secChildren[a].Children[b].ProductName+'" target="_blank">'+secChildren[a].Children[b].ProductName+'（<span>'+secChildren[a].Children[b].GoodsCount+'</span>）</a>';
                    }
                    secStr+='</p>';*/
                }
                secStr+='</p>';
                //无数据
                var rightObj = $(".xyz-common-nav-category-right");
                if(!secStr){
                    secStr += lotusUtils.noDataStr("该药品分类");
                    rightObj.css("height",$(".xyz-common-nav-category-left").css("height"));
                }
                rightObj.html(secStr);
            }
        });
        //鼠标移出药品分类明细 li
        $("#xyz-common-category-module li").mouseleave(function () {
            $(this).find("p").css("border-color", "#dbdbdb");
            $(this).prev().find("p").css("border-color", "#dbdbdb");
        });
    },
    //退出
    dropOut:function(){
        $.cookie('u_i_s', '', {
            expires: -1,
            path: '/',
            secure: false
        });
        $.removeCookie('u_i', {
            expires: -1,
            path: "/",
            domain: ".xiaoyaozhan.com",
            secure: false
        });
        $.cookie('xyzExpiresTime', '', {
            path: "/",
            secure: false,
            expires: -1
        });
        //跳转到登录页面
        location.href = 'http://demall.xiaoyaozhan.com/pages/login.html';
    },
    //获取采购车数量
    getCartCount:function(){
        if(!userInforData){
            return false;
        }
      return lotusAjax.get(lotusUtils.xyzApiUrl+'PReportOrder/GetShopCartCount',{
            WxDetailCode:userInforData.WxDetailCode
        }).then(function(response){
            var res = response.Data;
            var count = res.result >99 ? "99+":res.result;
            $(".xyz-common-center-cart-num").text(count);
        });
    },
    //获取商品分类
    getCategory:function(){
        if(!userInforData){
            return false;
        }
       return lotusAjax.get(lotusUtils.xyzApiUrl+'Vip/GetProductType',{
            WxDetailCode:userInforData.WxDetailCode,
            FWxDetailCode:""
        }).then(function(response){
            var res = response.Data;
            if(res){
                var str ="";
                for(var i = 0;i<=res.length-1;i++){
                    str+='<li>' +
                        '<p class="xyz-common-nav-category-item clearfix">';
                    if(i === 0){
                        str+='<img width="30" index="'+i+'" height="30" src="/static/images/category-icon'+i+'.png" class="fl xyz-common-nav-category-icon">';
                    }else{
                        str+='<img width="30" index="'+(i*2)+'" height="30" src="/static/images/category-icon'+(i*2)+'.png" class="fl xyz-common-nav-category-icon">';
                    }
                    str+='<a href="javascript:void(0);" class="xyz-common-nav-category-title fl">'+res[i].ProductName+'</a>' +
                        '<a href="javascript:void(0);" class="fl xyz-common-nav-category-num">'+res[i].GoodsCount+'</a>' +
                        '</p>' +
                        '<p style="display: none;" class="xyz-common-category-children">'+JSON.stringify(res[i].Children)+'</p>'+
                        '</li>';
                }
                $(".xyz-common-nav-category-left").html(str);
                xyzCommon.xyzCategory();
            }
        });
    },
    searchFun: function () {
        var searchVal = $(".xyz-common-center-search-input").val();
        lotusUtils.openNewWindow('http://demall.xiaoyaozhan.com/pages/goods/allGoodsList.html?key='+encodeURIComponent(searchVal),'_self');
    }
};
xyzCommon.appendHtml();
xyzCommon.goToTop();
xyzCommon.myXyzHover();
xyzCommon.getCartCount();
xyzCommon.getCategory();
window.xyzCommon = xyzCommon;

