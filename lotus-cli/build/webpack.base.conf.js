"use strict";

//引入node path路径模块
const path = require("path");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
//引入webpack生产环境配置参数
const prodConfig = require("../config").build;

//拼接路径
function resolve(track) {
    return path.join(__dirname, "..", track);
}
//资源路径
function assetsPath(_path) {
    return path.join(prodConfig.staticPath, _path);
}

//webpack 基本设置

module.exports = {
    //项目入口文件->webpack从此处开始构建！
    entry: path.resolve(__dirname, "../src/main.js"),
    //配置模块如何被解析
    resolve: {
        //自动解析文件扩展名(补全文件后缀)(从左->右)
        // import hello from './hello'  （!hello.js? -> !hello.vue? -> !hello.json）
        extensions: [".js", ".vue", ".json"],
        //配置别名映射
        alias: {
            // import Vue from 'vue/dist/vue.esm.js'可以写成 import Vue from 'vue'
            // 键后加上$,表示精准匹配！
            vue$: "vue/dist/vue.js",
            "@": resolve("src"),
            utils: resolve("src/utils"),
            components: resolve("src/components"),
            public: resolve("dist")
        }
    },
    module: {
        //处理模块的规则(可在此处使用不同的loader来处理模块！)
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                options: {
                    loaders:{
                        css:ExtractTextPlugin.extract({
                            use: 'css-loader',
                            fallback: 'vue-style-loader'
                        })
                    }
                }
            },
            //使用babel-loader来处理src下面的所有js文件,具体babel配置在.babelrc,主要是用来转义es6
            {
                test: /\.js$/,
                use: {
                    loader: "babel-loader"
                },
                include: resolve("src")
            },
            //使用url-loader(file-loader的一个再封装)对引入的图片进行编码,此处可将小于8192字节(8kb)的图片转为DataURL(base64),
            //大于limit字节的会调用file-loader进行处理！
            //图片一般发布后都是长缓存,故此处文件名加入hash做版本区分!
            {
                test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                loader: "url-loader",
                options: {
                    limit: 8192,
                    name: assetsPath("img/[name].[hash:8].[ext]")
                }
            },
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract({ fallback: 'style-loader', use: 'css-loader' })
                /*use: ExtractTextPlugin.extract({
                 use: "css-loader"/!*,"less-loader", "postcss-loader"*!/,
                 fallback: "style-loader"
                 })*/
            }
        ]
    },
    plugins: [
        // 设置生成css 的路径和文件名，会自动将对应entry入口js文件中引入的CSS抽出成单独的文件
        new ExtractTextPlugin('./dist/css/styles11.css')
    ]
};