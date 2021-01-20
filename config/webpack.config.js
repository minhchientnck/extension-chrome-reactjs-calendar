var path = require('path');
var fs = require('fs');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var CopyPlugin = require("copy-webpack-plugin");

var appDirectory = fs.realpathSync(process.cwd());

var mode = process.argv[2];

function getBuildMode() {
  if(mode === 'production') return 'production';
  return 'development';
}

module.exports = {
  entry: './src/index.js',
  mode: getBuildMode(),
  output: {
    filename: 'index.js',
    path: path.resolve(appDirectory, 'build'),
  },
  module: {
    rules: [
      {
        use: 'babel-loader',
        exclude: /node_modules/,
        test: /\.js$/,
      },
      {
        use: ['style-loader', 'css-loader'],
        exclude: /node_modules/,
        test: /\.css$/
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        exclude: /node_modules/,
        use: ['file-loader'],
      }
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/popup.html',
      filename: 'popup.html',
    }),
    new CopyPlugin({
      patterns: [
        { from: "./src/images", to: "images" },
        { from: "./src/manifest.json", to: "./" },
        { from: "./src/background.js", to: "./" },
        { from: "./src/_locales", to: "./_locales" },
      ],
    }),
  ],
  devServer: {
    contentBase: path.resolve(appDirectory, './src/popup.html'),
    port: 4600,
  },
};
