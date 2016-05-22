'use strict';

const ExtractTextPlugin = require("extract-text-webpack-plugin");
const path = require('path');

module.exports = {
  entry: {
    app: './frontend/app'
  },

  output: {
    path: './public',  // FS-путь к статике
    publicPath: '/', // Web-путь к статике (CDN?)
    filename: '[name].js'
  },

  watch: true,

  devtool: "source-map",

  module: {
    loaders: [
      {
        test: /\.js$/,
        include: path.join(__dirname, 'frontend'),
        loader: "babel?presets[]=es2015"
      }, {
        test:   /\.jade$/,
        loader: "jade"
      }, {
        test:   /\.styl$/,
        loader: ExtractTextPlugin.extract('css!stylus')
      }
    ]
  },


  plugins: [
    new ExtractTextPlugin('[name].css', {allChunks: true})
  ]

};
