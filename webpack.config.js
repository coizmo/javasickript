const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
  context: __dirname + '/src',
  entry: {
    js: './index.js'
  },
  output: {
    path: __dirname + '/dist',
    filename: './javasickript.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015']
        }
      }
    ]
  },
  plugins: [new HtmlWebpackPlugin()]
}