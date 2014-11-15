var webpack = require('webpack');

var commonsPlugin =
  new webpack.optimize.CommonsChunkPlugin('common.js');
var uglify = 
  new webpack.optimize.UglifyJsPlugin({ minimize: true });

module.exports = function(profile) {
  var config = {
    entry: {
      App: './app/src/App.js'
    },
    module: {
      loaders: [
        { test: /\.js$/, loader: "jsx" }
      ]
    },
    output: {
      path: 'public/js',
      filename: '[name].js'       
    },
    externals: {
        "React": "React"
    },
    plugins: [commonsPlugin]
  };

  if (profile === "min") {
    config.plugins.push(uglify);
  }

  return config;
};