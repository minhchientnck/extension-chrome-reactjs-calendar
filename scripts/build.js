var webpack = require('webpack');
var config = require('../config/webpack.config');

console.log('Building...');

webpack(config, (err, stats) => {
  if (err || stats.hasErrors()) {
    console.log(err);
  }
  console.log('Done');
});
