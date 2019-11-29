const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const webpackMerge = require("webpack-merge");
const baseConfg = require("./webpack.base.conf");

module.exports = webpackMerge(baseConfg, {
	mode: "production",
	output: {
		publicPath: './',
		path: path.resolve(__dirname, "../dist"),
		filename: "js/[name].min.[chunkhash:8].js",
		chunkFilename: "js/[name].min.js"
	},
	devtool: '#source-map',
	stats: {
		colors: true,
		modules: false,
		children: false,
		chunks: false,
		chunkModules: false
	},
	performance: {
		hints:'warning',
		//入口起点的最大体积
		maxEntrypointSize: 50000000,
		//生成文件的最大体积
		maxAssetSize: 30000000,
		//只给出 js 文件的性能提示
		assetFilter: function(assetFilename) {
		  return assetFilename.endsWith('.js');
		}
	},
	plugins: [
		new CleanWebpackPlugin({
			dry: false,
			// cleanOnceBeforeBuildPatterns: ['**/*', '!dist/*.*']
		}),
		new HtmlWebpackPlugin({
			template: "index.html",
			minify: {
				removeComments: true,
				collapseWhitespace: true,
				removeAttributeQuotes: true
				// more options:
				// https://github.com/kangax/html-minifier#options-quick-reference
			}
		}),
		// copy custom static assets
		new CopyWebpackPlugin([
			{
				from: path.resolve(__dirname, "../static"),
				to: "static",
				ignore: [".*"],
			},
			{
				from: path.resolve(__dirname, "../text"),
				to: "./",
				ignore: [".*"],
			}
		]),
		new webpack.DefinePlugin({
			"process.env": {
				NODE_ENV: '"production"',
				ENV_CONFIG: '"prod"',
				BASE_URL: '"https://*********/"'
			}
		}),
		new MiniCssExtractPlugin({
			filename: 'style/[name].[chunkhash:8].css',
			chunkFilename: 'style/[name].css'
		})
		// webpack4 已经移除该方法 改为config.optimization.splitChunks
		// new webpack.CommonsChunkPlugin({ 
		//   name: 'vendor',
		//   filename: '[name].js'
		// })
	]
}) 
