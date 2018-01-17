var path = require('path')
var utils = require('./utils')
var config = require('../config')
var vueLoaderConfig = require('./vue-loader.conf')

function resolve(dir) {
    return path.join(__dirname, '..', dir)
}

var webpackConfig = {
    entry: {
        app: './src/index.js'
    },
    output: {
        path: config.build.assetsRoot,
        //filename: '[name].js',
        publicPath: process.env.NODE_ENV === 'production'
            ? config.build.assetsPublicPath
            : config.dev.assetsPublicPath,
        filename:'lotus-calendar.js',  //打包生成文件的名字
        library:'LotusCalendar',   //reqire引入的名字
        libraryTarget:'umd',
        umdNamedDefine:true
    },
    resolve: {
        extensions: ['.js', '.vue', '.json'],
        alias: {
            'vue$': 'vue/dist/vue.esm.js',
            '@': resolve('src')
        }
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                options: vueLoaderConfig
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                include: [resolve('src'), resolve('test')]
            },
            {
                test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                /*loader: 'url-loader',
                 options: {
                 limit: 10000,
                 name: utils.assetsPath('img/[name].[hash:7].[ext]')
                 }*/
                loaders: [
                    'url-loader?limit=10000&name=' + utils.assetsPath('img/[name].[hash:5].[ext]'),
                    'image-webpack-loader'
                ]
            },
            {
                test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                    limit: 10000,
                    name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
                }
            }
        ]
    }
}

module.exports = webpackConfig;
