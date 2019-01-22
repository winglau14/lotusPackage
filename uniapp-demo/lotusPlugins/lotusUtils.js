import utils from '../Utils/utils'

export default {
    install(Vue){
        Vue.prototype.$lotusUtils = utils;
        Vue.lotusUtils = utils;
    },
    $lotusUtils: utils
}
export const $lotusUtils = utils;