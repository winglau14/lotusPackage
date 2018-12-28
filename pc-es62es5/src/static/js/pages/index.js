//polyfill库用于实现浏览器不支持的原生api
/*import "../lib/babel-polyfill.min";*/
import "layui-layer";
import {lotusUtils,lotusAjax} from "../utils";
import {xyzCommon} from "../xyzCommon";
//采购车模块
let userInfor = $.cookie('u_i_s') ? JSON.parse($.cookie('u_i_s')) : null;
let throttleTime = null;
const cartModule = {
    pageSize: 100,
    pageIndex: 0,
    orderStatus: true,
    orderStr: "",
    //单选
    choseClick(obj, className, type, wxCode) {
        switch (type) {
            //1最外层全选
            case 1:
                if (!$(obj).hasClass(className)) {
                    $(obj).addClass(className);
                    $(obj).parents(".xyz-cart-item").find(".xyz-cart-item-product").find("i").each(function () {
                        if ($(this).attr("invalid") === "0" || !$(this).attr("invalid")) {
                            $(this).addClass(className);
                        }
                    });
                } else {
                    $(obj).removeClass(className);
                    $(obj).parents(".xyz-cart-item").find(".xyz-cart-item-product").find("i").removeClass(className);
                }
                //店铺顶部选中
                let storeLen = $(".xyz-cart-item-store").length;
                let storeChoseLen = $(".xyz-cart-item-store i.single-chosed").length;
                if (storeLen === storeChoseLen) {
                    $(".xyz-cart-fixed-module-full").prev().addClass(className);
                } else {
                    $(".xyz-cart-fixed-module-full").prev().removeClass(className);
                }
                break;
            //2店铺全选
            case 2:
                if (!$(obj).hasClass(className)) {
                    $(obj).addClass(className);
                    $(obj).parents("table").find("tbody tr").find("i").each(function () {
                        if ($(this).attr("invalid") === "0") {
                            $(this).addClass(className);
                        }
                    });
                    $(obj).parents(".xyz-cart-item").find(".xyz-cart-item-store i").addClass(className);
                } else {
                    $(obj).removeClass(className);
                    $(obj).parents("table").find("tbody tr").find("i").removeClass(className);
                    $(obj).parents(".xyz-cart-item").find(".xyz-cart-item-store i").removeClass(className);
                }
                //店铺顶部选中
                let storeLen1 = $(".xyz-cart-item-store").length;
                let storeChoseLen1 = $(".xyz-cart-item-store i.single-chosed").length;
                if (storeLen1 === storeChoseLen1) {
                    $(".xyz-cart-fixed-module-full").prev().addClass(className);
                } else {
                    $(".xyz-cart-fixed-module-full").prev().removeClass(className);
                }
                break;
            //3每个item单选
            case 3:
                if (!$(obj).hasClass(className)) {
                    $(obj).addClass(className);
                } else {
                    $(obj).removeClass(className);
                }
                let tbodyTrLen = $(obj).parents("tbody").find("tr.xyz-cart-tr").length;
                let iChosedLen = $(obj).parents("tbody").find("tr.xyz-cart-tr").find("i.single-chosed").length;
                //全选选中
                if (tbodyTrLen === iChosedLen) {
                    $("#company" + wxCode).addClass(className);
                    $("#th" + wxCode).addClass(className);
                } else {
                    $("#company" + wxCode).removeClass(className);
                    $("#th" + wxCode).removeClass(className);
                    $(".xyz-cart-fixed-module-full").prev('i').removeClass(className);
                }
                //店铺顶部选中
                let storeLen2 = $(".xyz-cart-item-store").length;
                let storeChoseLen2 = $(".xyz-cart-item-store i.single-chosed").length;
                if (storeLen2 === storeChoseLen2) {
                    $(".xyz-cart-fixed-module-full").prev().addClass(className);
                } else {
                    $(".xyz-cart-fixed-module-full").prev().removeClass(className);
                }
                break;
            case 4:
                if (!$(obj).hasClass(className)) {
                    $(obj).addClass(className);
                    $(".xyz-cart-item i").each(function () {
                        if ($(this).attr("invalid") === "0" || !$(this).attr("invalid")) {
                            $(this).addClass(className);
                        }
                    });
                } else {
                    $(obj).removeClass(className);
                    $(".xyz-cart-item i").removeClass(className);
                }
                $(".xyz-cart-item").each(function () {
                    let curIndex = $(this).attr("pindex");
                    //统计单个订单价格
                    cartModule.computeMoney(curIndex);
                });
                break;
        }
        if (wxCode) {
            //统计单个订单价格
            this.computeMoney(wxCode);
        }
        //统计所有订单价格
        this.computeAllMoney();
    },
    //采购数量加减
    modifyAmount(obj, type, wxCode) {
        let reg = /^[1-9]$|^[1-9]\d{1,}$/g;
        let maxStock = $(obj).parents().attr('stock') * 1;
        let isCheckStock = $(obj).parents().attr('ischeckstock') * 1;
        let qgNum = 0;
        let input = $(obj);
        //按钮
        if (type === 1 || type === -1) {
            qgNum = $(obj).siblings('input').attr("qg") * 1;
            input = $(obj).siblings("input");
        } else {
            qgNum = $(obj).attr("qg") * 1;
            //失去焦点商品被勾选中
            $(obj).parents(".xyz-cart-tr").find(".single-chose").addClass("single-chosed");
        }
        let curVal = 0;
        curVal += type + input.val() * 1;
        //校验输入是否是数字
        if (!reg.test(input.val())) {
            layer.msg('输入有误，请重新输入');
            curVal = qgNum;
        }
        //输入数量大于库存校验库存
        if (input.val() * 1 > maxStock && isCheckStock === 1) {
            curVal = maxStock;
        }
        //购买的数量不能小于起购数
        if (curVal <= qgNum) {
            curVal = qgNum;
            $(obj).removeClass("xyz-cart-tr-reduced");
        } else {
            if (type === 1) {
                $(obj).siblings(".xyz-cart-tr-reduce").addClass("xyz-cart-tr-reduced");
            }
        }
        //判断切换
        if (!type) {
            if ($(obj).val() <= qgNum) {
                $(obj).siblings(".xyz-cart-tr-reduce").removeClass("xyz-cart-tr-reduced");
            } else {
                $(obj).siblings(".xyz-cart-tr-reduce").addClass("xyz-cart-tr-reduced");
            }
        }
        input.val(curVal);
        //当前tr被选中
        if (type === -1 && $(obj).hasClass("xyz-cart-tr-reduced") || $(obj).hasClass("xyz-cart-tr-add")) {
            $(obj).parents(".xyz-cart-tr").find("i.single-chose").addClass("single-chosed");
        }
        let tbodyTrLen = $(obj).parents("tbody").find("tr.xyz-cart-tr").length;
        let iChosedLen = $(obj).parents("tbody").find("tr.xyz-cart-tr").find("i.single-chosed").length;
        //全选选中
        if (tbodyTrLen === iChosedLen) {
            $("#company" + wxCode).addClass("single-chosed");
            $("#th" + wxCode).addClass("single-chosed");
        } else {
            $("#company" + wxCode).removeClass("single-chosed");
            $("#th" + wxCode).removeClass("single-chosed");
            $(".xyz-cart-fixed-module-full").prev('i').removeClass("single-chosed");
        }
        //店铺顶部选中
        let storeLen = $(".xyz-cart-item-store").length;
        let storeChoseLen = $(".xyz-cart-item-store i.single-chosed").length;
        if (storeLen === storeChoseLen) {
            $(".xyz-cart-fixed-module-full").prev().addClass("single-chosed");
        } else {
            $(".xyz-cart-fixed-module-full").prev().removeClass("single-chosed");
        }
        //计算单个店铺价格
        this.computeMoney(wxCode);
        //统计所有订单价格
        this.computeAllMoney();
        //校验库存
        this.matchStockStatus();
    },
    //计算单个店铺价格
    computeMoney(wxCode) {
        let categoryAmount = 0;
        let goodsTotal = 0;
        let goodsTotalAmount = 0;
        let freemail = 0;
        let lPrice = 0;
        $(".xyz-cart-item").each(function (index) {
            let curWxCode = $(this).attr("pindex");
            freemail = $(this).attr("freemail") * 1;
            $(this).find("tbody tr").each(function () {
                let flag = $(this).find("i.single-chose").hasClass("single-chosed");
                let inputVal = $(this).find(".xyz-cart-tr-input").val() * 1;
                //普通商品 sale=0 or分销商品 sale=1
                let sale = $(this).find(".jt-range").attr("sale");
                let jtRange = $(this).find(".jt-range");
                let jtLen = $(this).find(".xyz-cart-tr-single-price p").length;
                if (flag && curWxCode === wxCode) {
                    let p1 = 0;
                    let p2 = 0;
                    let p3 = 0;
                    //分销商品 阶梯价只有两个
                    if (sale * 1 === 1 && jtLen === 2) {
                        if (inputVal >= jtRange.attr("min") * 1 && inputVal <= jtRange.attr("max") * 1 - 1) {
                            p1 = jtRange.attr("p1") * 1;
                            $(this).find(".single-tr-price").text(p1 * inputVal.toFixed(2));
                        } else if (inputVal >= jtRange.attr("max") * 1) {
                            p2 = jtRange.attr("p2") * 1;
                            $(this).find(".single-tr-price").text(p2 * inputVal.toFixed(2));
                        }
                    } else if (sale * 1 === 1 && jtLen === 3) {
                        //分销商品 阶梯价有三个
                        if (inputVal >= jtRange.attr("min") * 1 && inputVal <= jtRange.attr("middle") * 1 - 1) {
                            p1 = jtRange.attr("p1") * 1;
                            $(this).find(".single-tr-price").text((p1 * inputVal).toFixed(2));
                            $(this).find(".single-price").text(p1);
                        } else if (inputVal >= jtRange.attr("middle") * 1 && inputVal <= jtRange.attr("max") - 1) {
                            p2 = jtRange.attr("p2") * 1;
                            $(this).find(".single-tr-price").text((p2 * inputVal).toFixed(2));
                            $(this).find(".single-price").text(p2);
                        } else {
                            p3 = jtRange.attr("p3") * 1;
                            $(this).find(".single-tr-price").text((p3 * inputVal).toFixed(2));
                            $(this).find(".single-price").text(p3);
                        }
                    } else {
                        //普通商品
                        $(this).find(".single-tr-price").text(($(this).find(".single-price").text() * 1 * inputVal).toFixed(2));
                    }
                    //统计单店铺所有tr价格
                    goodsTotal += $(this).find(".single-tr-price").text() * 1;
                    categoryAmount += $(this).find("i.single-chosed").length;
                    goodsTotalAmount += inputVal;
                }
            });
            //还差多少运费计算
            lPrice = (freemail / 100) - goodsTotal > 0 ? (freemail / 100) - goodsTotal : 0;
            if (wxCode * 1 === index) {
                if (lPrice <= 0) {
                    $(this).find(".xyz-cart-sub-free").text("免邮");
                } else {
                    let tHtml = '差 ￥<span class="xyz-cart-sub-free-money">' + lPrice.toFixed(2) + '</span>';
                    tHtml += '<span style="display:none;" class="express-price">' + (freemail / 100) + '</span> 免邮';
                    $(this).find(".xyz-cart-sub-free").html(tHtml);
                }
            }
        });

        $("#goods-xj" + wxCode).text(goodsTotal.toFixed(2));
        $("#goods-category" + wxCode).text(categoryAmount);
        $("#goods-amount" + wxCode).text(goodsTotalAmount);
    },
    //计算所有选中商品价格
    computeAllMoney() {
        let allGoodsAmount = 0;//商品总数量
        let allGoodsCategory = 0;//商品种类总数
        let allMoney = 0;//总的价格
        $(".xyz-cart-item").each(function () {
            $(this).find(".xyz-cart-tr").each(function () {
                let flag = $(this).find("i").hasClass("single-chosed");
                if (flag) {
                    allGoodsCategory += $(this).find("i.single-chosed").length;
                    allGoodsAmount += $(this).find(".xyz-cart-tr-input").val() * 1;
                    allMoney += $(this).find(".single-tr-price").text() * 1;
                }
            });
        });
        //重新赋值
        $(".xyz-cart-fixed-all-camount").text(allGoodsCategory);
        $(".xyz-cart-fixed-all-pamount").text(allGoodsAmount);
        $(".xyz-cart-fixed-all-money").text('¥' + (allMoney).toFixed(2));
    },
    //删除商品
    deleteClick(cartId) {
        let idList = [];
        //删除单个
        if (cartId) {
            idList.push(cartId);
        } else {
            //批量删除
            $(".xyz-cart-tr").each(function () {
                let flag = $(this).find("i").hasClass("single-chosed");
                if (flag) {
                    let curCartId = $(this).attr("cartid");
                    idList.push(curCartId);
                }
            });
        }
        if (!idList.length) {
            layer.msg("请选择需要删除的商品");
            return false;
        }
        layer.confirm('确认要删除该宝贝吗？', {
            title: ['删除商品'],
            btn: ['确定', '取消']//可以无限个按钮
        }, function (index, layero) {
            //按钮【按钮一】的回调
            cartModule.deleteFn(idList);
            //关闭弹层
            layer.close(index);
        }, function (index) {
            //按钮【按钮二】的回调
        });
    },
    //删除商品 fn
    deleteFn(idList) {
        return lotusAjax.post(lotusUtils.xyzApiUrl + 'PReportOrder/DeleteShopCartDrugs', {
            WxDetailCode: /*'12343001036619776' || */userInfor.WxDetailCode,
            ShoppingCartCodes: JSON.stringify(idList)
        }).then(function (response) {
            let res = response.Data;
            if (res === 1) {
                layer.msg('删除成功');
                cartModule.getCartList();
                xyzCommon.getCartCount();
            } else {
                layer.msg('删除失败');
            }
        });
    },
    //加入收藏夹
    addFavor(obj, type, CatCode, DisCode) {
        //type = 1单选加入
        let goods = [];
        if (type === 1) {
            let singleObj = {
                CatalogDetailCode: CatCode,
                DistributionRelationCode: DisCode
            };
            goods.push(singleObj);
        }
        //批量加入收藏
        if (type === 2) {
            $(".xyz-cart-tr").each(function () {
                let obj = {
                    CatalogDetailCode: 0,
                    DistributionRelationCode: 0
                };
                //已勾选
                let flag = $(this).find("i.single-chosed").length;
                if (flag) {
                    obj.CatalogDetailCode = $(this).attr("ccode");
                    obj.DistributionRelationCode = $(this).attr("discode");
                    goods.push(obj);
                }
            })
        }
        //判断是否已勾选商品
        if (!goods.length) {
            layer.msg("请选择需要放入收藏的商品");
            return false;
        }
        clearTimeout(throttleTime);
        throttleTime = setTimeout(function () {
            lotusAjax.post(lotusUtils.xyzApiUrl + 'PUser/CollectionGoods', {
                WxDetailCode: userInfor.WxDetailCode,
                Goods: JSON.stringify(goods),
                requestNum: 1
            }).then(function (response) {
                let res = response.Data;
                if (res === 1) {
                    layer.msg('成功放入收藏夹');
                    cartModule.getCartList();
                }
            });
        }, 200);
    },
    //取消收藏夹
    cancelFavor(obj, CatCode, DisCode) {
        clearTimeout(throttleTime);
        throttleTime = setTimeout(function () {
            lotusAjax.post(lotusUtils.xyzApiUrl + 'PUser/CancelCollectionGoods', {
                WxDetailCode: /*'12343001036619776' || */userInfor.WxDetailCode,
                CatalogDetailCode: CatCode,
                DistributionRelationCode: DisCode,
                requestNum: 1
            }).then(function (response) {
                let res = response.Data;
                if (res === 1) {
                    layer.msg('取消成功');
                    cartModule.getCartList();
                }
            });
        }, 200);
    },
    //优惠券状态显示
    couponClick(obj) {
        let disFlag = $(obj).siblings(".xyz-cart-coupon-module").css("display");
        if (disFlag === "none") {
            $(obj).siblings(".xyz-cart-coupon-module").css("display", "block");
            $(obj).siblings(".xyz-cart-coupon-jt").css("display", "block");
        } else {
            $(obj).siblings(".xyz-cart-coupon-module").css("display", "none");
            $(obj).siblings(".xyz-cart-coupon-jt").css("display", "none");
        }
    },
    //领取优惠券
    getCouponClick(obj, id) {
        clearTimeout(throttleTime);
        throttleTime = setTimeout(function () {
            cartModule.getCouponById(id).then(function (response) {
                let res = response.Data;
                if (res === 1) {
                    layer.msg("领取成功");
                    $(obj).hide().siblings(".xyz-cart-coupon-geted").show();
                } else {
                    layer.msg("领取失败");
                }
            });
        }, 200);
    },
    //判断是否符合免邮
    matchFreeAmount(html) {
        layer.open({
            title: '未满免邮金额提醒',
            type: 1,
            skin: 'layui-layer-rim', //加上边框
            area: ['520px', '410px'], //宽高
            content: html
        });
    },
    //跳转到结算页面
    goToOrder() {
        let arr = [];
        //获取被勾选且需要补运费商品
        $(".xyz-cart-item").each(function (index) {
            let trFlag = false;
            let freemail = ($(this).attr("freemail") * 1) / 100;
            let yf = ($(this).attr("yf") * 1) / 100;
            let totalPrice = parseFloat($('#goods-xj' + index).text());
            //当前是否有选中商品
            $(this).find("tbody tr.xyz-cart-tr").each(function () {
                trFlag = $(this).find("i.single-chosed").length;
                if (trFlag) {
                    return false;
                }
            });
            let curScode = $(this).attr("scode");
            if (curScode !== "0" && trFlag && freemail > 0 && totalPrice < freemail) {
                let obj = {};
                obj.cname = $(this).find(".xyz-cart-item-store-name2").text();
                obj.psName = $(this).find(".xyz-cart-item-store-express").text();
                obj.curPrice = $(this).find(".xyz-cart-sub-total-money").find("span").text();
                obj.xjPrice = $(this).find(".xyz-cart-sub-free-money").text();
                obj.expressPrice = yf;
                obj.scode = curScode;
                obj.fwxcode = $(this).attr("fwxcode");
                arr.push(obj);
            }
        });
        //结算判断
        if ($(".xyz-cart-fixed-all-camount").text() === "0") {
            layer.msg("请选择需要结算的商品");
            return false;
        }
        //补运费结算判断
        if (arr.length) {
            let str = "";
            str += '<div style="display:block;" class="xyz-cart-cd"><p class="xyz-cart-cd-tips"><img src="/static/images/cd-tips-icon.png" alt="">提交商品中，以下供应商商品未满免邮金额，需补运费</p>';
            for (let i = 0; i <= arr.length - 1; i++) {
                str += '<div class="xyz-cart-cd-store">' +
                    '<div class="xyz-cart-cd-store-wrap">' +
                    '<p class="xyz-cart-cd-store-name">' + arr[i].cname + '</p>' +
                    '<ul class="xyz-cart-cd-list">' +
                    '<li class="clearfix">' +
                    '<div class="xyz-cart-cd-list-infor fl">' +
                    '<p class="xyz-cart-cd-list-producter">供应商：' + (arr[i].psName.replace("配送商：", "")) + '</p>' +
                    '<p class="xyz-cart-cd-list-order-amount">订单满￥' + (arr[i].curPrice * 1 + arr[i].xjPrice * 1).toFixed(2) + '免邮，还差￥' + arr[i].xjPrice + '</p>' +
                    '<p class="xyz-cart-cd-list-free-amount">需补运费 ￥' + (arr[i].expressPrice * 1).toFixed(2) + '</p>' +
                    '</div>' +
                    '<a class="xyz-cart-cd-btn fr" target="_blank" href="' + lotusUtils.mallUrl + '/pages/coolMan/cAllGoods.html?fId=' + arr[i].fwxcode + '&scode='+arr[i].scode+'">去凑单</a>' +
                    '</li>' +
                    '</ul>' +
                    '</div>' +
                    '</div>';
            }
            str += '<span onclick="cartModule.submitOrder();layer.closeAll();" class="xyz-cart-cd-order-btn">暂不凑单，提交订单</span></div>';
            cartModule.matchFreeAmount(str);
        }
        //获取提交订单参数
        let cartArr = [];
        $(".xyz-cart-item").each(function () {
            let trFlag1 = false;
            //当前是否有选中商品
            $(this).find("tbody tr.xyz-cart-tr").each(function () {
                trFlag1 = $(this).find("i.single-chosed").length;
                if (trFlag1) {
                    return false;
                }
            });
            if (trFlag1) {
                let orderObj = {};
                let goodsArr = [];
                orderObj.MyPrice = parseFloat($(this).attr("freemail")) / 100;
                orderObj.YfPrice = parseFloat($(this).attr("yf")) / 100;
                orderObj.SupplierCode = $(this).attr("scode");
                orderObj.FWxDetailCode = $(this).attr("fwxcode");
                orderObj.SupplierName = $(this).find(".xyz-cart-item-store-name2").text();
                orderObj.IsFlagship = $(this).find(".xyz-cart-item-store-name2").attr("cjd");
                orderObj.Qualification = $(this).find(".xyz-cart-item-store-name2").attr("rz");
                //区分平台商品与分销商品
                if ($(this).find(".xyz-cart-item-store-name2").text() !== "平台商品") {
                    orderObj.PsName = $(this).find(".xyz-cart-item-store-express").text();
                }
                $(this).find("tr.xyz-cart-tr").each(function () {
                    let goodsObj = {};
                    //是有有失效商品标识
                    let fail = $(this).find(".xyz-cart-tr-main-img1").length;
                    //是否被选中
                    let trFlag2 = $(this).find("i.single-chosed").length;
                    if (!fail && trFlag2) {
                        goodsObj.GoodsTitle = $(this).find(".xyz-cart-tr-main-name a").text();
                        goodsObj.Manufacturer = $(this).find(".xyz-cart-tr-main-company").text();
                        goodsObj.ValidDate = $(this).find(".xyz-cart-tr-main-validity").text();
                        //parseFloat($(this).find(".single-tr-price").text())/($(this).find(".xyz-cart-tr-input").val()*1)
                        //goodsObj.SinglePrice = $(this).find(".single-price").text();
                        goodsObj.SinglePrice = parseFloat($(this).find(".single-tr-price").text())/($(this).find(".xyz-cart-tr-input").val()*1);
                        goodsObj.ProductAmount = $(this).find(".xyz-cart-tr-input").val();
                        goodsObj.DistributionRelationCode = $(this).attr("fxcod");
                        goodsObj.CatalogDetailCode = $(this).attr("ccode");
                        goodsObj.DrugId = $(this).attr("did");
                        goodsObj.DrugImg = $(this).find(".xyz-cart-tr-main-img img").attr("src");
                        goodsObj.ShoppingCartCode = $(this).attr("cartid");
                        goodsArr.push(goodsObj);
                        orderObj.Goods = goodsArr;
                    }
                });
                cartArr.push(orderObj);
            }
        });
        //console.log(cartArr);
        cartModule.orderStr = JSON.stringify(cartArr);
        //不需要补运费直接跳转
        if (!arr.length) {
            cartModule.submitOrder();
        }
    },
    //确认订单页
    submitOrder() {
        lotusAjax.post(lotusUtils.xyzApiUrl + 'POrder/ConfirmOrderStr', {
            WxDetailCode: /*'12343001036619776' || */userInfor.WxDetailCode,
            Order: cartModule.orderStr
        }).then(function (response) {
            let res = response.Data;
            if (res) {
                location.href = lotusUtils.orderUrl
            }
        });
    },
    //领取优惠券
    getCouponById(id) {
        return lotusAjax.post(lotusUtils.xyzApiUrl + 'PCoupon/RecCoupon', {
            WxDetailCode: /*'12343001036619776' || */userInfor.WxDetailCode,
            CouponId: id
        })
    },
    //获取采购车数据
    getCartList() {
        //'http://tsvipapi.xiaoyaozhan.com/api/POrder/GetShoppingCar?WxDetailCode=25364224279838720&PageIndex=0&PageSize=100&requestNum=1'
        lotusAjax.get(lotusUtils.xyzApiUrl + 'POrder/GetShoppingCar', {
            WxDetailCode: userInfor.WxDetailCode,
            PageIndex: cartModule.pageIndex,
            PageSize: cartModule.pageSize,
            requestNum: 1
        }).then(function (response) {
            let res = response.Data;
            if (res) {
                let str = "";
                for (let i = 0; i <= res.length - 1; i++) {
                    let itemProNum = 0;
                    str += '<div pindex="' + i + '" fwxcode="' + res[i].FWxDetailCode + '" yf="' + res[i].Supplier.DistributionFee + '" freemail="' + res[i].Supplier.FreeMail + '" scode="' + res[i].Supplier.SupplierCode + '"  wxcode="' + res[i].FWxDetailCode + '" class="xyz-cart-item">' +
                        '<div class="xyz-cart-item-store clearfix">' +
                        '<i id="company' + i + '" onclick="cartModule.choseClick(this,\'single-chosed\',1,\'' + i + '\');" class="single-chose fl"></i>';
                    //达人店铺
                    if (res[i].IsDaRen === 1) {
                        str += '<a target="_blank" href="' + lotusUtils.mallUrl + '/pages/coolMan/coolManIndex.html?fId=' + res[i].FWxDetailCode + '"><img style="margin-left: 10px;height: 20px;" class="fl" src="/static/images/daren-icon.png" alt="">';
                    }
                    str += '<span isdaren="' + (res[i].IsDaRen === 1 ? 1 : 0) + '" class="fl xyz-cart-item-store-name">' + res[i].CatalogName + '</span></a>' +
                        '</div>' +
                        '<div class="xyz-cart-item-product">' +
                        '<table cellspacing="0">' +
                        '<thead>' +
                        '<tr>';
                    //普通商品
                    if (res[i].Supplier.SupplierCode === "0") {
                        str += '<th class="th1 clearfix">' +
                            '<p class="clearfix">' +
                            '<i id="th' + i + '" onclick="cartModule.choseClick(this,\'single-chosed\',2,\'' + i + '\');" class="single-chose fl"></i>' +
                            '<span cjd="0" rz="0" style="text-align: left;padding-left: 14px;" class="xyz-cart-item-store-name2 fl text-elli">平台商品</span>' +
                            '</p>' +
                            '</th>';
                    } else {
                        //分销商品
                        str += '<th class="th1 clearfix">' +
                            '<p class="clearfix">' +
                            '<i id="th' + i + '" onclick="cartModule.choseClick(this,\'single-chosed\',2,\'' + i + '\');" class="single-chose fl"></i>' +
                            '<span cjd="' + (res[i].Supplier.IsFlagship === 1 ? 1 : 0) + '" rz="' + (res[i].Supplier.Qualification === 1 ? 1 : 0) + '" style="text-align: left;padding-left: 14px;" class="xyz-cart-item-store-name2 fl text-elli">' + (res[i].Supplier.SupplierName) + '</span>';
                        //已认证店
                        if (res[i].Supplier.Qualification === 1) {
                            str += '<span class="fl xyz-cart-item-store-tar"><img height="20" src="/static/images/rz-icon01.png" alt=""></span>';
                        }
                        //厂家店
                        if (res[i].Supplier.IsFlagship === 1) {
                            str += '<span class="fl xyz-cart-item-store-tar"><img height="20" src="/static/images/cjd-icon01.png" alt=""></span>';
                        }
                        str += '</p>' +
                            '<p class="clearfix xyz-cart-item-store-express">配送商：' + res[i].Supplier.SupplierName + '</p>' +
                            '</th>';
                    }
                    str += '<th class="th2">单价</th>' +
                        '<th class="th3">采购数量</th>' +
                        '<th class="th4">金额</th>' +
                        '<th class="th5">';
                    //优惠券显示
                    if (res[i].Supplier.Coupon.length > 0) {
                        //优惠券
                        str += '<img onclick="cartModule.couponClick(this);" class="xyz-cart-item-store-coupon" src="/static/images/coupon-bg.png" alt="">' +
                            '<img class="xyz-cart-coupon-jt" src="/static/images/jt-icon.png" alt="">' +
                            '<div class="xyz-cart-coupon-module">' +
                            '<p class="font-left">' + res[i].Supplier.SupplierName + ' 可用优惠券</p>' +
                            '<ul>';
                        for (let a = 0; a <= res[i].Supplier.Coupon.length - 1; a++) {
                            str += '<li class="clearfix">';
                            //优惠券类型
                            if (res[i].Supplier.Coupon[a].CouponType === 1 || res[i].Supplier.Coupon[a].CouponType === 2) {
                                str += '<span class="fl xyz-cart-coupon-money red-text">￥' + (res[i].Supplier.Coupon[a].CouponParam / 100).toFixed(2) + '</span>';
                            } else {
                                str += '<span class="fl xyz-cart-coupon-money red-text">' + (res[i].Supplier.Coupon[a].CouponParam / 100) + '折</span>';
                            }
                            str += '<span class="fl xyz-cart-coupon-infor text-elli">' + res[i].Supplier.Coupon[a].CouponName + '</span>';
                            //优惠券状态（1.未领取 2.已领取 3.已领完）
                            if (res[i].Supplier.Coupon[a].RecStatus === 1) {
                                str += '<span onclick="cartModule.getCouponClick(this,\'' + res[i].Supplier.Coupon[a].CouponId + '\');" class="fr xyz-cart-coupon-get">领取</span>';
                                str += '<span class="fr xyz-cart-coupon-get xyz-cart-coupon-geted">领取</span>';
                            } else if (res[i].Supplier.Coupon[a].RecStatus === 2) {
                                str += '<span style="display: block;" class="fr xyz-cart-coupon-get xyz-cart-coupon-geted">已领取</span>';
                            } else {
                                str += '<span style="display: block;" class="fr xyz-cart-coupon-get xyz-cart-coupon-geted">已领完</span>';
                            }
                            str += '</li>';
                        }
                        str += '</ul></div>';
                    }
                    str += '</th></tr></thead><tbody>';
                    //商品列表
                    for (let j = 0; j <= res[i].Supplier.Goods.length - 1; j++) {
                        //有效商品 IsInvalid = 0未失效 IsInvalid = 1失效
                        if (res[i].Supplier.Goods[j].IsInvalid === 0) {
                            str += '<tr discode="' + res[i].Supplier.Goods[j].DistributionRelationCode + '" did="' + res[i].Supplier.Goods[j].DrugId + '" ccode="' + res[i].Supplier.Goods[j].CatalogDetailCode + '" fxcod="' + res[i].Supplier.Goods[j].DistributionRelationCode + '" cartid="' + res[i].Supplier.Goods[j].ShoppingCartCode + '" stock="' + res[i].Supplier.Goods[j].Stock + '" ischeckstock="' + res[i].Supplier.Goods[j].IsCheckStock + '" class="xyz-cart-tr">' +
                                '<td class="th1">' +
                                '<div class="xyz-cart-tr-main clearfix">' +
                                '<i invalid="0" onclick="cartModule.choseClick(this,\'single-chosed\',3,\'' + i + '\');" class="single-chose fl"></i>' +
                                '<div class="fl xyz-cart-tr-main-img"><img width="80" height="80" src="' + (res[i].Supplier.Goods[j].DrugImg ? res[i].Supplier.Goods[j].DrugImg : '/static/images/no-goods-img.jpg') + '" alt="">' +
                                '</div>' +
                                '<div class="fl xyz-cart-tr-main-box">' +
                                '<p class="xyz-cart-tr-main-name"><a target="_blank" href="' + lotusUtils.mallUrl + '/pages/goods/productDeatail.html?cCode=' + res[i].Supplier.Goods[j].CatalogDetailCode + '&dCode=' + res[i].Supplier.Goods[j].DistributionRelationCode + '">' + (res[i].Supplier.Goods[j].GoodsName && res[i].Supplier.Goods[j].GoodsName) + ' ' + (res[i].Supplier.Goods[j].Genericname && res[i].Supplier.Goods[j].Genericname) + ' ' + (res[i].Supplier.Goods[j].Spec && res[i].Supplier.Goods[j].Spec) + '/' + res[i].Supplier.Goods[j].Spec + '</a></p>' +
                                '<p class="xyz-cart-tr-main-company">' + (res[i].Supplier.Goods[j].Manufacturer && res[i].Supplier.Goods[j].Manufacturer) + '</p>' +
                                '<p class="xyz-cart-tr-main-validity">' + ('有效期 ' + res[i].Supplier.Goods[j].ValidDate) + '</p>' +
                                '</div>' +
                                '</div>' +
                                '</td>' +
                                '<td class="th2 xyz-cart-tr-single-price font-center">';
                            //有阶梯价
                            let curPrice = 0;
                            if (res[i].Supplier.Goods[j].PriceList.length > 0) {
                                for (let k = 0; k <= res[i].Supplier.Goods[j].PriceList.length - 1; k++) {
                                    //只有两个阶梯价
                                    if (res[i].Supplier.Goods[j].PriceList.length === 2) {
                                        if (k === 0) {
                                            str += '<p p2="' + (res[i].Supplier.Goods[j].PriceList[1].SalePrice / 100) + '" p1="' + (res[i].Supplier.Goods[j].PriceList[0].SalePrice / 100) + '" sale="1" class="jt-range" max="' + res[i].Supplier.Goods[j].PriceList[k + 1].MinCount + '" min="' + res[i].Supplier.Goods[j].PriceList[k].MinCount + '">' + res[i].Supplier.Goods[j].PriceList[k].MinCount + '-' + (res[i].Supplier.Goods[j].PriceList[k + 1].MinCount - 1) + res[i].Supplier.Goods[j].GoodsUnit + '：￥' + (res[i].Supplier.Goods[j].PriceList[k].SalePrice / 100).toFixed(2) + '</p>';
                                        } else {
                                            str += '<p>≥' + res[i].Supplier.Goods[j].PriceList[k].MinCount + res[i].Supplier.Goods[j].GoodsUnit + '：￥' + (res[i].Supplier.Goods[j].PriceList[k].SalePrice / 100).toFixed(2) + '</p>';
                                        }
                                        //获取当前价格
                                        if (res[i].Supplier.Goods[j].AppQty >= res[i].Supplier.Goods[j].PriceList[0].MinCount && res[i].Supplier.Goods[j].AppQty < res[i].Supplier.Goods[j].PriceList[1].MinCount) {
                                            curPrice = res[i].Supplier.Goods[j].PriceList[0].SalePrice;
                                        } else {
                                            curPrice = res[i].Supplier.Goods[j].PriceList[1].SalePrice;
                                        }
                                    }
                                    //有三个阶梯价
                                    if (res[i].Supplier.Goods[j].PriceList.length === 3) {
                                        if (k === 0) {
                                            str += '<p sale="1" p3="' + (res[i].Supplier.Goods[j].PriceList[2].SalePrice / 100) + '" p2="' + (res[i].Supplier.Goods[j].PriceList[1].SalePrice / 100) + '" p1="' + (res[i].Supplier.Goods[j].PriceList[0].SalePrice / 100) + '" class="jt-range" min="' + res[i].Supplier.Goods[j].PriceList[0].MinCount + '" middle="' + res[i].Supplier.Goods[j].PriceList[1].MinCount + '" max="' + res[i].Supplier.Goods[j].PriceList[2].MinCount + '">' + res[i].Supplier.Goods[j].PriceList[k].MinCount + '-' + (res[i].Supplier.Goods[j].PriceList[k + 1].MinCount - 1) + res[i].Supplier.Goods[j].GoodsUnit + '：￥' + (res[i].Supplier.Goods[j].PriceList[k].SalePrice / 100).toFixed(2) + '</p>';
                                        } else if (k === 1) {
                                            str += '<p>' + res[i].Supplier.Goods[j].PriceList[k].MinCount + '-' + (res[i].Supplier.Goods[j].PriceList[k + 1].MinCount - 1) + res[i].Supplier.Goods[j].GoodsUnit + '：￥' + (res[i].Supplier.Goods[j].PriceList[k].SalePrice / 100).toFixed(2) + '</p>';
                                        } else {
                                            str += '<p>≥' + res[i].Supplier.Goods[j].PriceList[k].MinCount + res[i].Supplier.Goods[j].GoodsUnit + '：￥' + (res[i].Supplier.Goods[j].PriceList[k].SalePrice / 100).toFixed(2) + '</p>';
                                        }
                                        //获取当前价格
                                        if (res[i].Supplier.Goods[j].AppQty >= res[i].Supplier.Goods[j].PriceList[0].MinCount && res[i].Supplier.Goods[j].AppQty < res[i].Supplier.Goods[j].PriceList[1].MinCount) {
                                            curPrice = res[i].Supplier.Goods[j].PriceList[0].SalePrice;
                                        } else if (res[i].Supplier.Goods[j].AppQty >= res[i].Supplier.Goods[j].PriceList[1].MinCount && res[i].Supplier.Goods[j].AppQty < res[i].Supplier.Goods[j].PriceList[2].MinCount) {
                                            curPrice = res[i].Supplier.Goods[j].PriceList[1].SalePrice;
                                        } else {
                                            curPrice = res[i].Supplier.Goods[j].PriceList[2].SalePrice;
                                        }
                                    }
                                }
                            } else {
                                //普通商品单价
                                curPrice = res[i].Supplier.Goods[j].SupplyPrice;
                                str += '<p sale="0" class="jt-range">￥' + (res[i].Supplier.Goods[j].SupplyPrice / 100).toFixed(2) + '</p>';
                            }
                            str += '</td>' +
                                '<td class="th3 xyz-cart-tr-amount font-center">' +
                                '<p class="clearfix xyz-cart-tr-amount-wrap">';
                            //采购数是否大于起购数
                            if (res[i].Supplier.Goods[j].AppQty > res[i].Supplier.Goods[j].MinCount) {
                                str += '<span onclick="cartModule.modifyAmount(this,-1,\'' + i + '\');" class="xyz-cart-tr-reduce xyz-cart-tr-reduced fl">-</span>';
                            } else {
                                str += '<span onclick="cartModule.modifyAmount(this,-1,\'' + i + '\');" class="xyz-cart-tr-reduce fl">-</span>';
                            }
                            str += '<input onblur="cartModule.modifyAmount(this,0,\'' + i + '\');" qg="' + res[i].Supplier.Goods[j].MinCount + '" class="xyz-cart-tr-input font-center fl" value="' + (res[i].Supplier.Goods[j].AppQty >= res[i].Supplier.Goods[j].MinCount ? res[i].Supplier.Goods[j].AppQty : res[i].Supplier.Goods[j].MinCount) + '" type="text">';
                            str += '<span onclick="cartModule.modifyAmount(this,1,\'' + i + '\');" class="xyz-cart-tr-add fl">+</span>' +
                                '</p>' +
                                '<p>起购数<span class="qg-num">' + res[i].Supplier.Goods[j].MinCount + '</span></p>' +
                                '</td>' +
                                '<td class="th4 xyz-cart-tr-sum font-center">' +
                                '<p>￥<span class="single-tr-price">' + (curPrice * res[i].Supplier.Goods[j].AppQty / 100).toFixed(2) + '</span><span style="display:none;" class="single-price">' + (curPrice / 100) + '</span></p>' +
                                '</td>' +
                                '<td class="th5 xyz-cart-tr-operation">' +
                                '<p><a onclick="cartModule.deleteClick(\'' + res[i].Supplier.Goods[j].ShoppingCartCode + '\');" href="javascript:void(0);">删除</a></p>' +
                                '<p>';
                            //只有分销商品才可加入收藏夹
                            if (res[i].Supplier.Goods[j].CatalogDetailCode !== "0") {
                                //已收藏
                                if (res[i].Supplier.Goods[j].IsCollected === 0) {
                                    str += '<a class="add-favor" onclick="cartModule.addFavor(this,1,\'' + res[i].Supplier.Goods[j].CatalogDetailCode + '\',\'' + res[i].Supplier.Goods[j].DistributionRelationCode + '\');" href="javascript:void(0);">放入收藏夹</a>';
                                } else {
                                    //取消收藏
                                    str += '<a onclick="cartModule.cancelFavor(this,\'' + res[i].Supplier.Goods[j].CatalogDetailCode + '\',\'' + res[i].Supplier.Goods[j].DistributionRelationCode + '\')" class="cancel-favor" href="javascript:void(0);">取消收藏</a></p>';
                                }
                            }
                            str += '</td></tr>';
                        } else {
                            //已失效
                            str += '<tr class="xyz-cart-tr">' +
                                '<td class="th1">' +
                                '<div class="xyz-cart-tr-main clearfix">' +
                                '<i invalid="1" style="cursor: not-allowed;" class="single-chose fl"></i>' +
                                '<div class="fl xyz-cart-tr-main-img xyz-cart-tr-main-img1">' +
                                '<span class="xyz-cart-tr-fail-bg"></span>' + '<img width="80" height="80" src="' + (res[i].Supplier.Goods[j].DrugImg ? res[i].Supplier.Goods[j].DrugImg : '/static/images/no-goods-img.jpg') + '" alt="">' +
                                '</div>' +
                                '<div class="fl xyz-cart-tr-main-box">' +
                                '<p class="xyz-cart-tr-main-name"><a href="javascript:void(0);">' + (res[i].Supplier.Goods[j].GoodsName && res[i].Supplier.Goods[j].GoodsName) + ' ' + (res[i].Supplier.Goods[j].Genericname && res[i].Supplier.Goods[j].Genericname) + ' ' + (res[i].Supplier.Goods[j].Spec && res[i].Supplier.Goods[j].Spec) + '/' + res[i].Supplier.Goods[j].Spec + '</a></p>' +
                                '<p class="xyz-cart-tr-main-company">' + (res[i].Supplier.Goods[j].Manufacturer && res[i].Supplier.Goods[j].Manufacturer) + '</p>' +
                                '<p class="xyz-cart-tr-main-validity">' + ('有效期 ' + (res[i].Supplier.Goods[j].ValidDate ? res[i].Supplier.Goods[j].ValidDate : '--')) + '</p>' +
                                '</div>' +
                                '</div>' +
                                '</td>' +
                                '<td class="th2 xyz-cart-tr-single-price font-center">';
                            //有阶梯价
                            let curPrice1 = 0;
                            if (res[i].Supplier.Goods[j].PriceList.length > 0) {
                                for (let k = 0; k <= res[i].Supplier.Goods[j].PriceList.length - 1; k++) {
                                    //只有两个阶梯价
                                    if (res[i].Supplier.Goods[j].PriceList.length === 2) {
                                        if (k === 0) {
                                            str += '<p>' + res[i].Supplier.Goods[j].PriceList[k].MinCount + '-' + (res[i].Supplier.Goods[j].PriceList[k + 1].MinCount - 1) + res[i].Supplier.Goods[j].GoodsUnit + '：￥' + (res[i].Supplier.Goods[j].PriceList[k].SalePrice / 100).toFixed(2) + '</p>';
                                        } else {
                                            str += '<p>≥' + res[i].Supplier.Goods[j].PriceList[k].MinCount + res[i].Supplier.Goods[j].GoodsUnit + '：￥' + (res[i].Supplier.Goods[j].PriceList[k].SalePrice / 100).toFixed(2) + '</p>';
                                        }
                                        //获取当前价格
                                        if (res[i].Supplier.Goods[j].AppQty >= res[i].Supplier.Goods[j].PriceList[0].MinCount && res[i].Supplier.Goods[j].AppQty < res[i].Supplier.Goods[j].PriceList[1].MinCount) {
                                            curPrice1 = res[i].Supplier.Goods[j].PriceList[0].SalePrice;
                                        } else {
                                            curPrice1 = res[i].Supplier.Goods[j].PriceList[1].SalePrice;
                                        }
                                    }
                                    //有三个阶梯价
                                    if (res[i].Supplier.Goods[j].PriceList.length === 3) {
                                        if (k === 0) {
                                            str += '<p>' + res[i].Supplier.Goods[j].PriceList[k].MinCount + '-' + (res[i].Supplier.Goods[j].PriceList[k + 1].MinCount - 1) + res[i].Supplier.Goods[j].GoodsUnit + '：￥' + (res[i].Supplier.Goods[j].PriceList[k].SalePrice / 100).toFixed(2) + '</p>';
                                        } else if (k === 1) {
                                            str += '<p>' + res[i].Supplier.Goods[j].PriceList[k].MinCount + '-' + (res[i].Supplier.Goods[j].PriceList[k + 1].MinCount - 1) + res[i].Supplier.Goods[j].GoodsUnit + '：￥' + (res[i].Supplier.Goods[j].PriceList[k].SalePrice / 100).toFixed(2) + '</p>';
                                        } else {
                                            str += '<p>≥' + res[i].Supplier.Goods[j].PriceList[k].MinCount + res[i].Supplier.Goods[j].GoodsUnit + '：￥' + (res[i].Supplier.Goods[j].PriceList[k].SalePrice / 100).toFixed(2) + '</p>';
                                        }
                                        //获取当前价格
                                        if (res[i].Supplier.Goods[j].AppQty >= res[i].Supplier.Goods[j].PriceList[0].MinCount && res[i].Supplier.Goods[j].AppQty < res[i].Supplier.Goods[j].PriceList[1].MinCount) {
                                            curPrice1 = res[i].Supplier.Goods[j].PriceList[0].SalePrice;
                                        } else if (res[i].Supplier.Goods[j].AppQty >= res[i].Supplier.Goods[j].PriceList[1].MinCount && res[i].Supplier.Goods[j].AppQty < res[i].Supplier.Goods[j].PriceList[2].MinCount) {
                                            curPrice1 = res[i].Supplier.Goods[j].PriceList[1].SalePrice;
                                        } else {
                                            curPrice1 = res[i].Supplier.Goods[j].PriceList[2].SalePrice;
                                        }
                                    }
                                }
                            } else {
                                //普通商品单价
                                curPrice1 = res[i].Supplier.Goods[j].SupplyPrice;
                                str += '<p>￥' + (res[i].Supplier.Goods[j].SupplyPrice / 100).toFixed(2) + '</p>';
                            }
                            str += '</td>' +
                                '<td class="th3 xyz-cart-tr-amount font-center">' +
                                '<p class="clearfix xyz-cart-tr-amount-wrap">' +
                                '<span class="xyz-cart-tr-reduce fl">-</span>' +
                                '<input readonly class="xyz-cart-tr-input font-center fl" value="' + res[i].Supplier.Goods[j].AppQty + '" type="text">' +
                                '<span style="color:#e9e9e9;cursor: text;" class="xyz-cart-tr-add fl">+</span>' +
                                '</p>' +
                                '<p>起购数' + res[i].Supplier.Goods[j].MinCount + '</p>' +
                                '</td>' +
                                '<td class="th4 xyz-cart-tr-sum font-center">' +
                                '<p>￥' + (curPrice1 * res[i].Supplier.Goods[j].AppQty / 100).toFixed(2) + '</p>' +
                                '</td>' +
                                '<td class="th5 xyz-cart-tr-operation">' +
                                '<p><a onclick="cartModule.deleteClick(\'' + res[i].Supplier.Goods[j].ShoppingCartCode + '\');" href="javascript:void(0);">删除</a></p>' +
                                '<p><a onclick="cartModule.addFavor(1,\'' + res[i].Supplier.Goods[j].CatalogDetailCode + '\');" href="javascript:void(0);">放入收藏夹</a></p>' +
                                '</td>' +
                                '</tr>';
                        }
                        itemProNum += res[i].Supplier.Goods[j].AppQty;
                    }
                    /*str += '<tr>' +
                        '<td colspan="5" class="xyz-cart-sub-wrap">' +
                        '<div class="clearfix">' +
                        '<div class="fr">' +
                        '小计：<span class="xyz-cart-sub-total-money red-text">￥ <span id="goods-xj' + i + '">' + (res[i].Supplier.SubTotal / 100).toFixed(2) + '</span></span></div>' +
                        '<div class="fr xyz-cart-sub-total-category">' +
                        '<span>种类 <span id="goods-category' + i + '">' + res[i].Supplier.Goods.length + '</span> |</span>' +
                        '<span>数量 <span id="goods-amount' + i + '">' + itemProNum + '</span> </span>' +
                        '</div>' +
                        '</div>';*/
                    str += '<tr>' +
                        '<td colspan="5" class="xyz-cart-sub-wrap">' +
                        '<div class="clearfix">' +
                        '<div class="fr">' +
                        '小计：<span class="xyz-cart-sub-total-money red-text">￥ <span id="goods-xj' + i + '">0.00</span></span></div>' +
                        '<div class="fr xyz-cart-sub-total-category">' +
                        '<span>种类 <span id="goods-category' + i + '">0</span> |</span>' +
                        '<span>数量 <span id="goods-amount' + i + '">0</span> </span>' +
                        '</div>' +
                        '</div>';
                    //免邮
                    /*if (res[i].Supplier.SupplierCode !== "0" && res[i].Supplier.SubTotal - res[i].Supplier.FreeMail >= 0) {
                        str += '<p class="xyz-cart-sub-free font-right">免邮</p>'
                    } else if (res[i].Supplier.SupplierCode !== "0") {
                        str += '<p class="xyz-cart-sub-free font-right">差 ￥<span id="xyz-cart-sub-free-money' + i + '" class="xyz-cart-sub-free-money">' + ((res[i].Supplier.FreeMail - res[i].Supplier.SubTotal) / 100).toFixed(2) + '</span><span style="display:none;" class="express-price">' + (res[i].Supplier.DistributionFee / 100).toFixed(2) + '</span>' +
                            ' 免邮</p>';
                    }*/
                    str += '<p class="xyz-cart-sub-free font-right">差 ￥<span id="xyz-cart-sub-free-money' + i + '" class="xyz-cart-sub-free-money">' + (res[i].Supplier.FreeMail/100).toFixed(2) + '</span><span style="display:none;" class="express-price">' + (res[i].Supplier.DistributionFee / 100).toFixed(2) + '</span>' +
                        ' 免邮</p>';

                    str += '</td>' +
                        '</tr>' +
                        '</tbody>' +
                        '</table>' +
                        '</div>' +
                        '</div>';
                }
                //数据插入
                $(".xyz-cart-list").html(str);
                //计算价格
                cartModule.computeAllMoney();
                //最后一个tr边框颜色为白色
                $(".xyz-cart-item").each(function () {
                    let len = $(this).find("tr.xyz-cart-tr").length;
                    $(this).find("tr.xyz-cart-tr").each(function (index) {
                        if (index === len - 1) {
                            $(this).find("td").css("border-bottom-color", "#fff");
                        }
                    });
                });
            } else {
                //采购车为空
                $(".xyz-cart-list .xyz-cart-item").remove();
                $(".xyz-cart-list").html(lotusUtils.noDataStr("采购车"));
            }
        })
    },
    //校验库存
    matchStockStatus() {
        cartModule.orderStatus = true;
        //校验商品采购数量是否正确
        $('.xyz-cart-item-product tbody tr').each(function () {
            //需要校验库存
            if ($(this).attr('ischeckstock') === '1') {
                let inputVal = $(this).find('.xyz-cart-tr-input').val() * 1;
                let stock = $(this).attr('stock') * 1;
                if (inputVal > stock) {
                    layer.msg('商品数量不能大于库存数');
                    cartModule.orderStatus = false;
                    $(this).find('.xyz-cart-tr-input').css('border-color', 'red');
                } else {
                    $(this).find('.xyz-cart-tr-input').css('border-color', '#cbcbcb');
                }
            }
        });
    }
};
//获取采购车数据
if(userInfor){
    cartModule.getCartList();
}
//加window是为了将变量变成全局变量html onclick可调用
window.cartModule = cartModule;
