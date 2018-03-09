const Test = resolve => require(['../components/Test'], resolve);
//列表页
const List = resolve => require(['../components/list/List'], resolve);
const routes = [
    {   //测试
        path: '/test',
        component: Test
    },
    {   //列表页
        path: '/list',
        component: List
    }
];
export default routes;
