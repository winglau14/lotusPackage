const webpack = require('webpack');
//const fs = require('fs');
const path = require('path');
const glob = require('glob');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const CleanWebpackPlugin = require("clean-webpack-plugin");
//const ExtractTextPlugin = require('extract-text-webpack-plugin');

//遍历文件路径
const entries = (globPath) => {
    let files = glob.sync(globPath);
    let entries = {},
        entry, dirname, basename, extname;

    for (let i = 0; i < files.length; i++) {
        entry = files[i];
        dirname = path.dirname(entry);//当前目录
        extname = path.extname(entry);//后缀
        if(extname === ".html"){
            basename = path.basename(entry, '.html');
        }else if(extname === ".js"/*&&entry.indexOf("lib") === -1*/){
            basename = path.basename(entry, '.js');
        }
        //if(entry.indexOf("lib") === -1){
            entries[path.join(dirname, basename).replace('src\\', '')] = './' + entry;
        //}

    }
    return entries;
};
const chunks = Object.keys(entries("src/**/*.js"));
let WebpackConfig = {
    entry: entries("src/**/*.js"),
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "[name].js",
        chunkFilename:'[name].js',// 设置按需加载后的chunk名字
    },
    /*externals: {
        jquery: "window.jQuery", //如果要全局引用jQuery，不管你的jQuery有没有支持模块化，用externals就对了。
    },*/
    // 开发服务器，实时重新加载
    devServer: {
        port: 8914,
        contentBase: './dist',
        // 声明为热替换
        hot: true,
        // 第一次打包时打开浏览器
        open: true,
        /*watchOptions: {
            aggregateTimeout: 300,
            poll: 1000
        }*/
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            },
            {
                test: /\.(htm|html)$/,
                use: [{
                    loader:'html-loader'
                }],
            },
            {
                test: /\.less$/,
                use: ['style-loader','css-loader','less-loader']
            },
            /*{
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: 'css-loader'
                })
            }*/
            {
                test: /\.css$/,
                use: ['style-loader','css-loader']/*ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: 'css-loader'
                })*/
            },
            /*{
                test: require.resolve('jquery'),
                use: [{
                    loader: 'expose-loader',
                    options: '$'
                },{
                    loader: 'expose-loader',
                    options: 'jquery'
                }]
            },*/
            {
                test: /\.(png|jpe?g|gif|svg)$/i,
                loaders:'url-loader',
                options: {
                    limit: 20*1024,
                    name: '/static/images/[name].[ext]?[hash]'
                }
            },
            {
                test: /\.(woff2?|eot|ttf|otf)$/,
                loader: 'url-loader',
                options: {
                    limit: 10000
                }
            }
        ]
    },
    plugins: [
        new webpack.NamedModulesPlugin(),
        // 热替换插件
        new webpack.HotModuleReplacementPlugin(),
        //删除dist文件夹与文件
        new CleanWebpackPlugin(["dist"], {
            root: path.resolve(__dirname),
            verbose: true,
            dry: false
        }),
        //资源copy
        new CopyWebpackPlugin([
            {
                from: path.resolve(__dirname, 'src'),
                to: path.resolve(__dirname, 'dist'),
                ignore: ['*.js']
            }
        ]),
        //required 的 *.css 模块抽取到分离的 CSS 文件
        /*new ExtractTextPlugin({
            filename:'bundle.css?v=[hash]',
            allChunks:true,
            disable:false,
            publicPath:'/dist'
        })*/
        new webpack.ProvidePlugin({
            //加载jq
            '$': 'jquery',
            'jQuery':"jquery",
            'window.$':"jquery"
        }),
        // 将公共模块提取，生成名为`vendors`的chunk
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendors',
            filename:'static/js/vendors.js',
            chunks: chunks,
            minChunks: 2||chunks.length // 提取所有entry共同依赖的模块
        }),
    ],
    resolve:{
        alias:{
        }
    }
};
//获取html pages
const pages = entries("src/**/*.html");
for(let item in pages){
    const pagesArr = pages[item].split("/");
    const curFileName = pagesArr[pagesArr.length-1];
    let conf = {
        filename: `${item}.html`,
        template: `${pages[item]}`,
        inject: "body",
        chunks: [curFileName,'vendors']
    };
    WebpackConfig.plugins.push(new HtmlWebpackPlugin(conf));
}
module.exports = WebpackConfig;
