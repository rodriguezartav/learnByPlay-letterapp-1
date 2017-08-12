require("dotenv").config();

const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  cache: true,
  context: path.resolve(__dirname, 'src'),
  entry: {
   login: ['react-hot-loader/patch','webpack/hot/only-dev-server','webpack-dev-server/client?http://localhost:8080','./apps/login/index.jsx'],
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',                          // New
  },
  devServer: {
    contentBase: [path.join(__dirname, "src")],
    hot: true,
  },
  resolve: {
     extensions: ['.js', '.jsx']
   },
  devtool: "eval",
  module: {
      rules: [
      {
          test: /\.css$/,
          use: [ 'style-loader', 'css-loader' ]
          },
        {
          test: /\.js$/,
          exclude: [/node_modules/],
          use: [{
            loader: 'babel-loader',
            options: { cacheDirectory: true },
          }],
        },
        {
          test: /\.jsx$/,
          exclude: [/node_modules/],
          use: [{
            loader: 'babel-loader',
            options: { cacheDirectory: true }
          }
         ]
        },

        // Loaders for other file types can go here
      ],
    },
    plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify("development")
      }
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),

    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src','template.html'),
      filename: 'index.html',
      chunks: ['login','style'],
      inject: 'body'
    })
  ],
};
