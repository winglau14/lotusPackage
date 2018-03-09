import lotusAjax from '../Utils/apiRequestType'

export default {
    install(Vue){
        Vue.prototype.$lotusAjax = lotusAjax;
        Vue.lotusAjax = lotusAjax;
    },
    $lotusAjax:lotusAjax
}
export const $lotusAjax = lotusAjax;