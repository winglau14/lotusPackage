import {createApp} from "./main"
export default context =>{
    return new Promise((resolve,reject)=>{
        const {app,router} = createApp();
        //设置服务器端router的位置
        router.push(context.url);
        //等到router将可能的异步组件和钩子函数解析完
        router.onReady(()=>{
           const matchedComponents = router.getMatchedComponents();
           //匹配不到的路由执行reject函数，并返回404
            if(!matchedComponents.length){
                return reject({
                    code:404
                })
            }
            // Promise 应该 resolve 应用程序实例，以便它可以渲染
            resolve(app);
        },reject);
    })
}