// jscs:disable requireCamelCaseOrUpperCaseIdentifiers
var webpack = require('webpack');
var path = require('path');
var merge = require('webpack-merge');

var APP_DIR = path.resolve(__dirname + '/app');
var BUILD_DIR = path.resolve(__dirname + '/build');

var config;

var common = {
  entry: APP_DIR + '/index.jsx',
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js',
    publicPath: '/'
  },
  devtool: 'source-map',
  module: {
    loaders: [
            {
              test: /\.jsx?/,
              loader: 'babel',
              include: APP_DIR,
              query: {
                presets: ['es2015', 'react']
              }
            }
        ]
  }
};

if (process.env.npm_lifecycle_event === 'dev') {
  config = merge(common, {
    devServer: {
      inline: true,
      contentBase: BUILD_DIR,
      port: 3000,
      historyApiFallback: true
    }
  });
} else if (process.env.npm_lifecycle_event === 'prod') {
  config = merge(common, {
    plugins: [
            new webpack.optimize.UglifyJsPlugin({
              minimize: true
            })
        ]
  });
}

module.exports = config;
