const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
// const CopyWebpackPlugin = require('copy-webpack-plugin')
const ExtractTextPlugin = require("extract-text-webpack-plugin")
const FriendlyErrorsPlugin = require("friendly-errors-webpack-plugin")


module.exports = {
  mode: "development",
  // output: {
  //   filename: 'bundle.js'
  // },
  devServer: {
    publicPath: "/",
    port: "8080",
    proxy: {
      // 代理请求
      // "/team": {
      //   target: "http://192.168.0.139:11035",
      //   pathRewrite: {"^/team" : ""}
      // }
    },
    disableHostCheck: true
    // quiet: true,
  },
  stats: "minimal", // 控制台日志显示控制
  plugins: [
    new HtmlWebpackPlugin({
      template: "index.html"
    }),
    new VueLoaderPlugin(),
    new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: '"development"',
        ENV_CONFIG: '"dev"',
        BASE_URL: '"http://*********/"'
      }
    }),
    new FriendlyErrorsPlugin()
  ]
};