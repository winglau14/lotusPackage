import Vue from 'vue'
import AjaxPlugin from 'axios'

export default function ajaxInterceptors () {
  // 添加一个api请求拦截器
  AjaxPlugin.interceptors.request.use((config) => {
    // 添加loding中组件
    // 设置isHide不需要显示loading
      if(config.data.indexOf("isHide")>-1){
          Vue.$lotus.loading.hide()
      }else {
          Vue.$lotus.loading.show()
      }

    return config
  }, function (error) {
    console.log(error);
    return Promise.reject(error)
  });
  // 添加一个响应拦截器
  AjaxPlugin.interceptors.response.use(function (response) {
    Vue.$lotus.loading.hide();
    return response
  }, function (error) {
    Vue.$lotus.loading.hide();
    return Promise.resolve(error.response)
  })
}
