import qs from 'qs'
import ajaxInterceptors from '../Utils/ajaxInterceptors'
import AjaxPlugin from 'axios'
import Vue from 'vue'

//检测请求状态
function checkStatus(response) {
    try {
        // 如果 http 状态码正常, 则直接返回数据
        if (response.status === 200 || response.status === 304) {
            return response
        }
        // 异常状态下, 把错误信息返回去
        // 因为前面我们把错误扶正了, 不然像 404, 500 这样的错误是走不到这里的
        return {
            data: {
                code: response.status,
                message: response.data.Error.Message,
                data: response.data.Error,
            }
        }
    } catch (error) {
        return {
            data: {
                errorMessage: '网络异常'
            }
        }
    }

}

//检测状态码
function checkCode(res) {
    // 如果状态 code 异常(这里已经包括网络错误, 服务器错误, 后端抛出的错误), 可以弹出一个错误提示, 告诉用户
    if (res.data.code && res.data.code !== 200) {
        Vue.$lotus.toast.show({
            text: res.data.message,
            show:true,
            type:'text'
        });
    } else {
        if (res.data.errorMessage) {
            Vue.$lotus.toast.show({
                text: res.data.errorMessage,
                show:true,
                type:'text'
            });
        }
    }
    return res
}
//get or post请求封装
export default {
    get(url, params, contentType){
        let accessToken = sessionStorage.accessToken;
        ajaxInterceptors();
        return AjaxPlugin({
            method: 'get',
            url: url,
            params, // get 请求时带的参数
            timeout: 30000,
            headers: {
                'Content-Type': contentType||'application/x-www-form-urlencoded',
                //'Authorization': `Bearer ${btoa(accessToken)}`
            }
        }).then(checkStatus).then(checkCode);
    },
    post(url, data, contentType){
        let accessToken = sessionStorage.accessToken;
        ajaxInterceptors();
        const postData = contentType ? data : qs.stringify(data);
        return AjaxPlugin({
            method: 'post', // 请求协议
            url: url, // 请求的地址
            data: postData, // post 请求的数据
            timeout: 30000, // 超时时间, 单位毫秒
            headers: {
                'Content-Type': contentType||'application/x-www-form-urlencoded; charset=UTF-8',
                //'Authorization': `Bearer ${btoa(accessToken)}`
            }
        }).then(checkStatus).then(checkCode);
    }
}