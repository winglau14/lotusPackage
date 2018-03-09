//查看大图组件
import lotusPreViewerVux from '../components/lotusPreViewer/LotusPreViewerVux'

//组件注入到Vue
const lotusPreViewer = {
    install:(Vue)=>{
        Vue.component('LotusPreViewer',lotusPreViewerVux);
    }
};
export default lotusPreViewer;