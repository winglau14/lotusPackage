//toast组件 参数toastObj
// toastObj.text=>标题
// toastObj.show=>显示标识默认隐藏
// toastObj.time=>隐藏的时间默认1000
// toast.onHide=>隐藏的回调函数
import LotusNoDataNav from '../components/lotusComponents/LotusNoDataNav'
const lotusNoDataNav = {
    install: (Vue) => {
        let loadingTpl = Vue.extend(LotusNoDataNav);
        // 2、创建实例，挂载到文档以后的地方
        const instance = new loadingTpl();
        // 3、把创建的实例添加到body中
        instance.$mount(document.createElement('div'));
        const noDataNav = {
            show: (obj, dom) => {
                //判断是否有text
                if (!obj.text) {
                    obj.text = '没有更多数据了'
                }
                instance.noDataNavObj = obj;
                // 挂载实例到我们创建的DOM上
                if (dom) {
                    if(document.querySelector(dom)){
                        document.querySelector(dom).appendChild(instance.$el);
                    }
                } else {
                    document.body.appendChild(instance.$el);
                }

            },
            hide: (obj, dom) => {
                instance.noDataNavObj = obj;
                // 挂载实例到我们创建的DOM上
                if (dom) {
                    //判断dom child是否存在
                    if (!document.querySelector(dom).childNodes.length) {
                        return false;
                    }
                    document.querySelector(dom).removeChild(instance.$el);
                } else {
                    document.body.removeChild(instance.$el);
                }
            }
        };
        if (!Vue.$lotus) {
            Vue.$lotus = {
                noDataNav
            }
        } else {
            Vue.$lotus.noDataNav = noDataNav
        }
        Vue.mixin({
            created: function () {
                this.$lotus = Vue.$lotus
            }
        })
    }
};
export default lotusNoDataNav;