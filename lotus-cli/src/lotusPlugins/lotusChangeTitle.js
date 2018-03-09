//动态修改微信标题
import changeWxTitle from '../Utils/changeWxTitle'

export default {
    install(Vue){
        Vue.prototype.$lotusChangeTitle = changeWxTitle;
        Vue.lotusChangeTitle = changeWxTitle;
    },
    $lotusChangeTitle:changeWxTitle
}
export const $lotusChangeTitle = changeWxTitle;