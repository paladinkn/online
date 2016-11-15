var webpack = require('webpack');
var path = require('path');
var HtmlwebpackPlugin = require('html-webpack-plugin');

var APP_PATH = {
	'dist/js/pal': ['webpack-hot-middleware/client?noInfo=true&reload=true', path.resolve(__dirname, './src/js/pal.js')],
	'react': ['react', 'react-dom','jquery'],
}
var BUILD_PATH = {
	path: path.resolve(__dirname, './'),
	filename: '[name].js'
}
var plugins = [
	new webpack.HotModuleReplacementPlugin(),
	new webpack.optimize.CommonsChunkPlugin({
    		name: ['react'],
    		filename: 'dist/js/common.js'
    	}),
	new HtmlwebpackPlugin({
      title: 'paladin',
      template:path.resolve(__dirname, './template/tpl.html'),
      filename: path.resolve(__dirname, './pal.html'),
      inject: true
    })
];
var devServer = {
	historyApiFallback: true,
    hot: true,
    inline: true,
    progress: true,
}
var devtool = 'eval';
var modules = {
	 loaders:[
	  		{test: /\.js$/,loader: 'babel',exclude: /node_modules/},
	  		{test: /\.css$/,loader: 'style!css',include: /src/},
			{test: /\.scss$/, loader: 'style!css!sass?sourceMap'}
	 ]
  }

var config = {
	entry: APP_PATH,
	output: BUILD_PATH,
	plugins: plugins,
	devtool: devtool,
	devServer: devServer,
	module: modules
}


module.exports = config;