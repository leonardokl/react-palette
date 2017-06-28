const path = require('path')
const webpack = require('webpack')
const BabiliPlugin = require('babili-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  devtool: 'source-map',
  output: {
    filename: 'dist/react-palette.min.js',
    libraryTarget: 'umd',
    library: 'react-palette'
  },
  plugins: [
    new BabiliPlugin()
  ],
  module: {
    rules: [
      {
        test: /\.js?$/,
        loader: 'babel-loader'
      }
    ]
  },
  resolve: {
    extensions: [".js"]
  }
}