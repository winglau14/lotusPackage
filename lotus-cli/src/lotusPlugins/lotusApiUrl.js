//apiUrl插件注入到Vue这个对象
import lotusApiUrl from '../Utils/apiUrl'

export default {
    install(Vue){
        Vue.prototype.$lotusApiUrl = lotusApiUrl;
        Vue.lotusApiUrl = lotusApiUrl;
    },
    $lotusApiUrl:lotusApiUrl
}

export const $lotusApiUrl = lotusApiUrl;