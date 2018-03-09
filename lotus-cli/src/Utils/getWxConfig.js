import AjaxPlugin from 'axios'
import apiUrl from './apiUrl'
//获取微信签名配置
const initWxSignConfig = () => {
    return AjaxPlugin.get(apiUrl.wxApiUrl + 'Wx/GetJSConfig', {
        params:{
            SignSource: 7,
            url: location.href
        }
    }).then((response) => {
        if (response.data.Data) {
            return response.data.Data;
        }
    })
};

export const getWxSignConfig = async () => {
    const config = await initWxSignConfig();
    wx.config({
        debug: false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
        appId: config.appID,// 必填，公众号的唯一标识
        timestamp: config.timestamp,// 必填，生成签名的时间戳
        nonceStr: config.nonceStr, // 必填，生成签名的随机串
        signature: config.signature,// 必填，签名，见附录1
        jsApiList: ['onMenuShareTimeline', 'onMenuShareAppMessage', 'openLocation','closeWindow'] // 必填，需要使用的JS接口列表，所有JS接口列表见附录2
    });
};

