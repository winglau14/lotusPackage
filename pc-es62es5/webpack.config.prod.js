const webpack = require('webpack');
const merge = require('webpack-merge');
const config = require('./webpack.config');
module.exports = merge(config,{
    plugins:[
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('production')
        }),
        /*new webpack.optimize.UglifyJsPlugin({
            uglifyOptions:{
                compress: process.env.NODE_ENV === 'production',
                //warnings: false,
            }
        })*/
    ],
});