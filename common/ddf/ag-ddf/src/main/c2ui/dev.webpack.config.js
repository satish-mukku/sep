var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    context: __dirname + '/app',
    entry: {
        app: './app.js',
        vendor: ['angular','angular-translate','angular-translate-loader-static-files']
    },
    output: {
        path: __dirname + '/dist',
        filename: 'app.bundle.js'
    },
    module: {
    loaders: [     
      { test: /\.(html|tmpl)$/, loader: 'raw' }
    //   { test: /\.json$/, loader: 'json' }      
    ]
  },
    plugins: [
        // new webpack.IgnorePlugin(/angular$/),
        new webpack.optimize.CommonsChunkPlugin( /* chunkName= */ "vendor", /* filename= */ "vendor.bundle.js")
    ]
};
