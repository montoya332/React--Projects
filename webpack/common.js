/*  Webpack configuration */
const PORT = 8081;
const path = require('path');
const webpack = require('webpack');
const fs = require('fs');

const assetPath = '/assets/';
const absolutePath = path.join(__dirname, 'build', assetPath);
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const npmBase = path.join(__dirname, '../node_modules');
const projectsBase = path.join(__dirname, '../src/projects');

class WebpackBaseConfig {
  constructor() {
    this._config = {};
    this._extractSass = new ExtractTextPlugin({
      filename: '[name].bundle.css',
      allChunks: true,
      disable: process.env.NODE_ENV === 'development'
    });
  }
  /* Get the list of included packages */
  get includedPackages() {
    return [].map(pkg => fs.realpathSync(path.join(npmBase, pkg)));
  }
  /*  Set the config data */
  set config(data) {
    this._config = Object.assign({}, this.defaultSettings, data);
    return this._config;
  }
  /*  Get the global config */
  get config() {
    return this._config;
  }
  /*  Get the environment name */
  get env() {
    return 'dev';
  }
  /* Get the absolute path to src directory */
  get srcPathAbsolute() {
    return path.resolve('./src');
  }
  /* Get the absolute path to src directory */
  get publicPathAbsolute() {
    return path.resolve('./public');
  }
  /* Get the absolute path to tests directory */
  get testPathAbsolute() {
    return path.resolve('./test');
  }
  get stylesPathAbsolute() {
    return path.resolve('./stylesheets');
  }
  get projectsEntryObject() {
    return {
      portfolio: ['./portfolio/app.js'],
      resume: ['./projects/resume/index.js'],
      exampleApp: ['./projects/exampleApp/index.js'],
      githubApp: ['./projects/githubApp/index.js'],
      findTheBugApp: ['./projects/findTheBugApp/index.js'],
      chatApp: ['./projects/chatApp/index.js']
    };
  }
  /* Get the default settings */
  get defaultSettings() {
    const cssModulesQuery = {
      modules: true,
      importLoaders: 1,
      localIdentName: '[name]-[local]-[hash:base64:5]'
    };
    return {
      context: this.srcPathAbsolute,
      devtool: 'eval',
      entry: {},
      output: {
        path: path.resolve('./dist'),
        filename: '[name].bundle.js'
      },
      devServer: {
        publicPath: '/dist',
        // contentBase: './dist',
        // publicPath: '/public/',

        historyApiFallback: true,
        hot: true,
        inline: true,
        port: PORT,
        stats: {
          cached: false,
          colors: true,
          hash: false,
          version: false,
          timings: false,
          assets: false,
          chunks: false,
          modules: false,
          reasons: true,
          source: true,
          errors: true,
          errorDetails: true,
          warnings: true
        }
      },
      module: {
        rules: [
          {
            enforce: 'pre',
            test: /\.js?$/,
            include: this.srcPathAbsolute,
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env'],
              plugins: ['@babel/plugin-transform-runtime']
            }
            // options: {
            //   presets: ['@babel/preset-env', '@babel/preset-react']
            // }
            // query: {
            //   presets: ['es2015', 'react', 'stage-1']
            // }
          },
          {
            test: /\.(js|jsx)$/,
            include: [].concat(this.includedPackages, [this.srcPathAbsolute])
          },
          {
            test: /^.((?!cssmodule).)*\.(sass|scss|css)$/,
            use: this._extractSass.extract({
              use: [
                {
                  loader: 'css-loader',
                  options: {
                    sourceMap: false,
                    importLoaders: 1,
                    devtool: 'eval'
                  }
                },
                {
                  loader: 'sass-loader',
                  options: {sourceMap: true}
                }
              ],
              fallback: 'style-loader'
            })
          },
          {
            test: /\.cssmodule\.(sass|scss|css)$/,
            loaders: [
              {
                loader: 'style-loader'
              },
              {
                loader: 'css-loader',
                query: cssModulesQuery
              },
              {
                loader: 'sass-loader'
              }
            ]
          },
          {test: /\.jpg$/, use: ['file-loader']},
          {
            test: /\.(png|woff|woff2|eot|ttf|svg)$/,
            loader: 'url-loader?limit=100000'
          }
        ]
      },
      plugins: [],
      resolve: {
        alias: {
          ReactApp: `${this.srcPathAbsolute}/`,
          projects: `${this.srcPathAbsolute}/projects/`,
          utils: `${this.srcPathAbsolute}/utils/`,
          stylesheets: `${this.stylesPathAbsolute}/`,
          public: `${this.publicPathAbsolute}/`
        },
        extensions: ['.js', '.jsx', '.scss'],
        modules: [this.srcPathAbsolute, 'node_modules']
      }
    };
  }
}

module.exports = WebpackBaseConfig;
