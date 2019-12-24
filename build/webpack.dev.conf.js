const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const FriendlyErrorsPlugin = require("friendly-errors-webpack-plugin");
const webpackMerge = require("webpack-merge");
const baseConfg = require("./webpack.base.conf");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = webpackMerge(baseConfg,{
	mode: "development",
	devServer: {
		port: "8000",
		publicPath: "/",
		progress: true, //显示打包的进度
		compress: true, //开启gzip压缩
		overlay: true, //在浏览器上全屏显示编译的errors或warnings
		disableHostCheck: true,
		proxy: {
			// 代理请求
			// "/team": {
			//   target: "http://192.168.0.139:11035",
			//   pathRewrite: {"^/team" : ""}
			// }
		},
		// quiet: true,
	},
	devtool: 'eval-source-map', // 原始源代码（仅限行）
	stats: "minimal", // 控制台日志显示控制
	plugins: [
		new HtmlWebpackPlugin({
			template: "index.html",
		}),
		new MiniCssExtractPlugin({
			filename: 'style/[name].[chunkhash:8].css',
			chunkFilename: 'style/[name].css'
    }),
		new webpack.DefinePlugin({
			"process.env": {
				NODE_ENV: '"development"',
				ENV_CONFIG: '"dev"',
				BASE_URL: '"http://***/"'
			}
		}),
		new FriendlyErrorsPlugin()
	]
});
