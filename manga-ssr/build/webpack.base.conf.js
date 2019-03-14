var path = require('path')
var utils = require('./utils')
var config = require('../config')
var vueLoaderConfig = require('./vue-loader.conf')
var ExtractTextPlugin = require('extract-text-webpack-plugin')

function resolve(dir) {
    return path.join(__dirname, '..', dir)
}
// CSS 提取应该只用于生产环境
// 这样我们在开发过程中仍然可以热重载
const isProduction = process.env.NODE_ENV === 'production'
var webpackConfig = {
    entry: {
        //app: './src/main.js'
        app: './src/entry-client.js'
    },
    output: {
        path: config.build.assetsRoot,
        filename: '[name].js',
        publicPath: isProduction
            ? config.build.assetsPublicPath
            : config.dev.assetsPublicPath
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
                test: /\.css$/,
                // 重要：使用 vue-style-loader 替代 style-loader
                use: ['vue-style-loader', 'css-loader']
            },{
                test: /\.vue$/,
                loader: 'vue-loader',
                options: {
                    // enable CSS extraction
                    extractCSS: isProduction
                }
                //options: vueLoaderConfig
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
    },
    plugins: isProduction
        // 确保添加了此插件！
        ? [new ExtractTextPlugin({ filename: 'common.[chunkhash].css' })]
        : []
}

module.exports = webpackConfig;
