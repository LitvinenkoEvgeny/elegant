var ExtractTextPlugin = require("extract-text-webpack-plugin"),
  path = require('path'),
  webpack = require('webpack');


module.exports = {
  watch: true,
  context: __dirname + '/src',
  entry: './entry.js',
  devTool: "source-map",
  output: {
    path: __dirname + "/dist",
    publicPath: "/dist/",
    filename: '[name].js'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel', // 'babel-loader' is also a legal name to reference
        query: {
          presets: ['es2015', 'react']
        }
      },
      {
        test: /\.html$/,
        loader: "html-loader"
      },
      {
        test: /\.jade$/,
        loader: "jade-loader"
      },

      {
        test: /\.scss$/,
        loaders: ["style", "css", "sass"]
        //loader: ExtractTextPlugin.extract("style-loader", "css-loader!sass-loader")
      },
      {test: /\.(otf|gif|png|jpg|JPG)$/, loader: "url-loader"},
      {
        test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,
        loader: "url?limit=10000&mimetype=application/font-woff"
      }, {
        test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/,
        loader: "url?limit=10000&mimetype=application/font-woff"
      }, {
        test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
        loader: "url?limit=10000&mimetype=application/octet-stream"
      }, {
        test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
        loader: "file"
      }, {
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
        loader: "url?limit=10000&mimetype=image/svg+xml"
      }
    ]
  }
  //plugins: [
  //  new ExtractTextPlugin("[name].css")
  //]
};

