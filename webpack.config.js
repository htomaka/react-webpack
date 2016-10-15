var webpack = require('webpack');
var path = require('path');

var APP_DIR = path.resolve(__dirname + '/app');
var BUILD_DIR = path.resolve(__dirname + '/build');

var config = {
  entry: APP_DIR + '/index.jsx',
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js',
    publicPath: '/'
  },
  devtool: 'source-map',
  devServer: {
    inline: true,
    contentBase: BUILD_DIR,
    port: 3000
  },
  module: {
    loaders: [
      {
        test: /\.jsx?/,
        loader: 'babel',
        include: APP_DIR,
        query: {
          presets: ["es2015", "react"]
        }
      }
    ]
  }
}

module.exports = config;
