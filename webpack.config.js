const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
	mode: "development",
	entry: "./src/index.js",
	output: {
	    filename: "main.js",
	    path: path.resolve(__dirname, "dist"),
	    clean: true
	},
	devtool: "eval-source-map",
	devServer: {
		watchFiles: ["./src/template.html"]
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: "./src/template.html"
		}),
	],
	module: {
		rules: [
			{
				test: /\.css$/i,
				use: ["style-loader", "css-loader"],
				// this order is important because webpack runs the loaders starting at the end so it will first turn the css into a string with css-loader and then use style-loader to inject the js
			},
			{
				test: /\.html$/i,
				use: ["html-loader"],
			},
			{
				test: /\.(png|svg|jpg|jpeg|gif)$/i,
				type: "asset/resource",
			},
		],
	},
};
