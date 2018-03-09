import LotusLoaing from '../components/lotusComponents/LotusLoading'
const lotusLoading = {
    install:(Vue) => {
        let loadingTpl = Vue.extend(LotusLoaing);
        // 2、创建实例，挂载到文档以后的地方
        const instance = new loadingTpl();
        // 3、把创建的实例添加到body中
        instance.$mount(document.createElement('div'));
        // 挂载实例到我们创建的DOM上
        document.body.appendChild(instance.$el);
        const loading = {
            show:()=>{
                instance.show = true;
            },
            hide:()=>{
                instance.show = false;
            }
        };
        if (!Vue.$lotus) {
            Vue.$lotus = {
                loading
            }
        } else {
            Vue.$lotus.loading = loading
        }
        Vue.mixin({
            created: function () {
                this.$lotus = Vue.$lotus
            }
        })
    }
};
export default lotusLoading;