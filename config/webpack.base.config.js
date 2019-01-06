var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: "css-loader!sass-loader",
        })
      },
      {
        test: /\.(png|jpg|gif|mp4|ogg|svg|woff|woff2|ttf|eot|ico)$/,
        use: {
          loader: 'file-loader',
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({ 
      template: './public/index.html', 
      filename: './index.html' 
    }),
    new ExtractTextPlugin({
      filename: 'style.css',
      allChunks: true,
      disable: process.env.NODE_ENV !== 'production'
    })
  ]
}