//toast组件 参数toastObj
// toastObj.text=>标题
// toastObj.show=>显示标识默认隐藏
// toastObj.time=>隐藏的时间默认1000
// toast.onHide=>隐藏的回调函数
import LotusToast from '../components/lotusComponents/LotusToast'
const lotusToast = {
    install: (Vue) => {
        let loadingTpl = Vue.extend(LotusToast);
        // 2、创建实例，挂载到文档以后的地方
        const instance = new loadingTpl();
        // 3、把创建的实例添加到body中
        instance.$mount(document.createElement('div'));
        // 挂载实例到我们创建的DOM上
        document.body.appendChild(instance.$el);
        const toast = {
            show: (obj) => {
                instance.toastObj = obj;
                let time = obj.time || 1000;
                setTimeout(()=>{
                    instance.toastObj.type = '';
                    //隐藏后回调
                    if(typeof obj.onHide === 'function'){
                        obj.onHide();
                    }
                },time);
            }
        };
        if (!Vue.$lotus) {
            Vue.$lotus = {
                toast
            }
        } else {
            Vue.$lotus.toast = toast
        }
        Vue.mixin({
            created: function () {
                this.$lotus = Vue.$lotus
            }
        })
    }
};
export default lotusToast;