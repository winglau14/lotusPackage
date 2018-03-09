import nameSpaced from "../nameSpaced"
import Api from '../../Utils/apiRequestType'
import ApiUrl from  '../../Utils/apiUrl'
//设置底部导航数据模块的命名空间为bottomBarNav
const types = nameSpaced('bottomBarNav');

const state = {
    isNew: false,
    webChatCount: 0,
    systemCount: 0,
    normalCount: 0
}

const mutations = {
    [types.SET_MUTATIONS](state, {isNew, webChatCount, systemCount, normalCount}){
        state.isNew = isNew;
        state.webChatCount = webChatCount;
        state.systemCount = systemCount;
        state.normalCount = normalCount;
    }
}
const actions = {
    [types.SET_ACTIONS]({commit}, {ReceiveNid}){
        Api.get(ApiUrl.yyfApiUrl + 'MsgContents/SalesGetUnReadInfo', {
            ReceiveNid: ReceiveNid
        }).then((response) => {
            if (response.data.Data) {
                const result = response.data.Data;
                let obj = {
                    isNew: result.CountList.length > 0 && true,
                    webChatCount: 0,
                    systemCount: 0,
                    normalCount: 0
                }
                result.CountList.map((item) => {
                    //1->系统消息;2->普通消息;3->莲藕助理消息
                    if(item.msgType === 1){
                        obj.systemCount = item.Count;
                    }else if(item.msgType === 2){
                        obj.normalCount = item.Count;
                    }else if(item.msgType === 3){
                        obj.webChatCount = item.Count;
                    }
                });
                commit(types.SET_MUTATIONS, obj);
            }
        }, (error) => {
            console.log(error);
        });

    }
}

const getters = {
    [types.SET_GETTERS](state) {
        return state;
    }
}

export default {
    state,
    mutations,
    actions,
    getters
}