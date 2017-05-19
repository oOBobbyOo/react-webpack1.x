var path = require('path');
var webpack = require('webpack');

module.exports  = {
	entry: './src/app.js',
	output: {
		path: path.resolve(__dirname, 'dist'),
		publicPath: '/dist/',
		filename: 'bundle.js'
	},
	devServer: {
		hot: true,
    inline: true,
    historyApiFallback: true,
    port: 8000 //默认端口8080
	},
	module: {
		loaders: [
			{
				test: /\.(js|jsx)?$/,
				exclude: /node_modules/,
				loader: 'babel-loader'
			},
			{
		    test: /\.css$/,
		    loader: 'style!css-loader'
			},
			{
		    test: /\.scss$/,
		    loader: 'style-loader!css-loader!sass-loader'
			},
			{
		    test: /\.less$/,
		    loader: 'style-loader!css-loader!less-loader'
			},
			{
		    test: /\.(jpe?g|png|gif|svg)$/,
		    loader: 'url-loader?limit=8192&name=[path][hash].[ext]?[hash]'
			},
			{
		    test: /\.(ttf|eot|woff|woff2|svg)\??.*$/,
		    loader: 'url-loader?limit=10000&name=[path][hash].[ext]?[hash]'
			}
		]
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new webpack.NoEmitOnErrorsPlugin(),
  	new webpack.optimize.UglifyJsPlugin({
        output: {
          comments: false,
        },
        compress: {
          warnings: false,
          drop_console: false
        }
    }),
  	new webpack.DefinePlugin({
    	'process.env.NODE_ENV': JSON.stringify('production')
    })
	]
};
