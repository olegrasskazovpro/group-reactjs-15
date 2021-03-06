const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
	entry: path.resolve(__dirname, 'src', 'index.js'),
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'bundle.js'
	},

	resolve: {
		extensions: [".js", ".json", ".jsx", ".css"],
		alias: {
			components: path.resolve(__dirname, 'src', 'components'),
			pages: path.resolve(__dirname, 'src', 'pages'),
			reducers: path.resolve(__dirname, 'src', 'reducers'),
			actions: path.resolve(__dirname, 'src', 'actions'),
			containers: path.resolve(__dirname, 'src', 'containers'),
			middlewares: path.resolve(__dirname, 'src', 'middlewares'),
		}
	},

	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				loader: "babel-loader",
			},
			{
				test: /\.s?css$/i,
				use: [
					'style-loader',
					MiniCssExtractPlugin.loader,
					'css-loader',
					'sass-loader',
				],
			},
		]
	},

	plugins: [
		new HtmlWebpackPlugin({
			template: path.resolve(__dirname, 'src', 'index.html'),
			filename: 'index.html',
		}),

		new MiniCssExtractPlugin({
			filename: 'main.css',
		}),
	],

	devServer: {
		historyApiFallback: true,
	}
};