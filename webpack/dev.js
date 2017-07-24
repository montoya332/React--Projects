'use strict';

/* Default dev server configuration. */
const webpack = require('webpack');
const WebpackBaseConfig = require('./common');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
class WebpackDevConfig extends WebpackBaseConfig {

	constructor() {
		super();

		this.config = {
			devtool: 'cheap-module-source-map',
			entry: {
				exampleApp: [
					'./projects/exampleApp/index.js'
				],
				algorithmApp: [
					'webpack-dev-server/client?http://0.0.0.0:8000/',
					'webpack/hot/only-dev-server',
					'./projects/algorithmApp/index.js'
				]
			},
			plugins: [
				new ExtractTextPlugin('bundle.css'),
				new webpack.HotModuleReplacementPlugin(),
				new webpack.NoEmitOnErrorsPlugin()
			]
		};
	}
}

module.exports = WebpackDevConfig;
