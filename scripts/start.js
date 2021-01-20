var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('../config/webpack.config');

var compiler = webpack(config);
var server = new WebpackDevServer(compiler, config.devServer);
