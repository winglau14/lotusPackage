const gulp = require("gulp");
const path = require("path");
const fs = require("fs");
const inquirer = require('inquirer');
const gulpSequence = require('gulp-sequence');
let vuePageName = '';
let vueComponentsName = '';
let lessFolderName = '';
let lessFileName = '';
//vue组件初始化内容
function vueComponentContent(lessFolderName, lessFileName) {
    let lessStr = '';
    if(lessFolderName){
        //vue页面引入less
        lessStr = `'../../style/${lessFolderName}/${lessFileName}.less';`;
    }else{
        //vue组件引入less
        lessStr = `'./${lessFileName}.less';`;
    }
    return `<template>
    <div></div>
</template>
<style lang="less">
    @import ${lessStr}
</style>
<script>
    export default {
        name: 'tab-bar',
        props: ['messageData'],
        data () {
            return {}
        },
        components: {},
        methods: {},
        mounted(){},
        created(){}
    }
</script>
`;
}

//初始化less文件内容
function lessContent(name) {
    return `@import (reference) "../config";
@register: ${name};
.@{register} {
 
}`
}

//创建对应需要的文件夹与文件
gulp.task("createFile", function () {
    inquirer.prompt([
        {
            type: 'list',
            name: 'vueType',
            message: '选择要生成的vue类型页面 or 组件 驼峰命名首字母小写',
            // choices: ['less', 'scss', 'css'],
            choices: ['vuePage','vueComponent'],
            default: 'vuePage'
        },
        //vue页面文件夹名称
        {
            type: 'input',
            name: 'vuePageName',
            message: 'vue组件文件夹名称 驼峰命名首字母小写',
            default: 'index'
        },
        //vue组件命名名称
        {
            type: 'input',
            name: 'vueComponentName',
            message: 'vue组件命名名称 驼峰命名首字母大写',
            default: 'Index'
        },
        //less文件夹名称
        {
            type: 'list',
            name: 'lessType',
            message: 'less文件夹名称 驼峰命名首字母小写',
            choices: ['lessVuePage','lessVueComponent'],
            default: 'list'
        },
        //less文件夹名称
        {
            type: 'input',
            name: 'lessFolderName',
            message: 'less文件命名名称 驼峰命名首字母小写',
            default: 'less'
        },
        //less文件命名名称
        {
            type: 'input',
            name: 'lessFileName',
            message: 'less文件命名名称 驼峰命名首字母小写',
            default: 'less'
        },
        //less文件内父级className
        {
            type: 'input',
            name: 'lessClassName',
            message: 'less文件内父级className,超过两个用list-model',
            default: 'list'
        }
    ]).then(function (response) {
        console.log(response);
        for (let i in response) {
            if (i === 'vueType') {//生成对应vuePage文件夹
                //生成vue页面文件夹
                if(response['vueType'] === 'vuePage' && response['vuePageName']){
                    fs.mkdir(`test/${response['vuePageName']}`);
                }else{
                    //生成vue组件文件夹
                    fs.mkdir(`test/components/${response['vuePageName']}`);
                }
            } else if (i === 'vueComponentName') {//生成对应vuePage文件夹
                //拼接vuePage文件里面less文件引入路径
                vuePageName = response['vuePageName'];
                vueComponentsName = response['vueComponentName'];
                if(response['vueType'] === 'vuePage'){
                    lessFolderName = response['lessFolderName'];
                }
                lessFileName = response['lessFileName'];
                if(response['vueType'] === 'vuePage'){
                    //写入文件 vue页面
                    fs.writeFile(`test/${response['vuePageName']}/${response['vueComponentName']}.vue`, vueComponentContent(lessFolderName, lessFileName), 'utf-8',function(){
                        readRouter(vuePageName,vueComponentsName,response['vueType']);
                    });
                }else{
                    //写入文件 vue组件
                    fs.writeFile(`test/components/${response['vuePageName']}/${response['vueComponentName']}.vue`, vueComponentContent(lessFolderName, lessFileName), 'utf-8',function(){
                        readRouter(vuePageName,vueComponentsName,response['vueType']);
                    });
                }

            } else if (i === 'lessType') {
                //生成less文件夹
                //生成vue页面文件夹
                if(response['lessType'] === 'lessVuePage'){
                    fs.mkdir(`test/style/${response['lessFolderName']}`);
                }
            } else if (i === 'lessFileName') {
                const lessClassName = response['lessClassName'];
                //生成vue页面文件夹 生成less文件
                if(response['lessType'] === 'lessVuePage'){
                    //写入文件
                    fs.writeFile(`test/style/${response['lessFolderName']}/${response['lessFileName']}.less`, lessContent(lessClassName), 'utf-8');
                }else{
                    //写入文件
                    fs.writeFile(`test/components/${response['lessFolderName']}/${response['lessFileName']}.less`, lessContent(lessClassName), 'utf-8');
                }
            }
        }
    })
});
//读取router.js文件
function readRouter(vuePageName, vueComponentsName,type) {
    if(type === "vueComponent"){
        return false;
    }
    //console.log(vuePageName, vueComponentsName,type);
    fs.readFile('test/router/index.js', 'utf-8', function (err, data) {
        //匹配引入vuePage
        const reg1 = /\/\/append new components/g;
        const vuePageStr = `const ${vueComponentsName} = resolve => require(['../test/${vuePageName}/${vueComponentsName}'], resolve); \n//append new components`;
        //匹配引入routerPath
        const reg2 = /\/\/append new router obj/g;
        const routerPathStr = `,{
        path: '/${vuePageName}',
        component: ${vueComponentsName}
        }//append new router obj`;
        //console.log(data);
        const tempData = data.replace(reg1, vuePageStr).replace(reg2, routerPathStr);
        //console.log(tempData);
        //重写路由文件
        fs.writeFile('test/router/index.js', tempData, 'utf-8', function (err) {
            console.log('重写router.js完成！');
        });
    });
}
/*gulp.task('router',function(){
    readRouter('index','IndexVue','vuePage');
});*/
//执行的任务
gulp.task("create", gulpSequence(['createFile']));