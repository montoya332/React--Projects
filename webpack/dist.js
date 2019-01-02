/*  Dist configuration. Used to build the */
const webpack = require("webpack");
const WebpackBaseConfig = require("./common");

class WebpackDistConfig extends WebpackBaseConfig {
  constructor() {
    super();
    this.config = {
      cache: false,
      devtool: "source-map",
      entry: this.projectsEntryObject,
      plugins: [
        this._extractSass,
        new webpack.DefinePlugin({
          "process.env.NODE_ENV": '"production"'
        }),
        new webpack.optimize.AggressiveMergingPlugin(),
        new webpack.NoEmitOnErrorsPlugin()
      ]
    };

    // Deactivate hot-reloading if we run dist build on the dev server
    this.config.devServer.hot = false;
  }

  /**
   * Get the environment name
   * @return {String} The current environment
   */
  get env() {
    return "dist";
  }
}

module.exports = WebpackDistConfig;
