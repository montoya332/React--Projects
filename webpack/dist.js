/*  Dist configuration. Used to build the */
const webpack = require('webpack');
const Visualizer = require('webpack-visualizer-plugin');

const WebpackBaseConfig = require('./common');

class WebpackDistConfig extends WebpackBaseConfig {
  constructor() {
    super();
    this.config = {
      mode: this.env,
      cache: false,
      devtool: 'source-map',
      entry: this.projectsEntryObject,
      plugins: [
        this._extractSass,
        new webpack.DefinePlugin({
          'process.env.NODE_ENV': this.env || '"production"'
        }),
        new webpack.optimize.AggressiveMergingPlugin(),
        new webpack.NoEmitOnErrorsPlugin(),
        new Visualizer()
      ]
    };

    // Deactivate hot-reloading if we run dist build on the dev server
    this.config.devServer.hot = false;
  }
}

module.exports = WebpackDistConfig;
