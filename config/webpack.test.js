var webpack = require('webpack');
var helpers = require('./helpers');

module.exports = {

  devtool: 'inline-source-map',

  resolve: {
      extensions: ['.ts', '.js']
  },

  module: {

    rules: [
        {
            test: /\.ts$/,
            use: [
              {
                loader: 'awesome-typescript-loader',
                options: { configFileName: helpers.root('config', 'tsconfig.json') }
              },
              'angular2-template-loader'
            ]
        },
        {
            test: /\.html$/,
            use: 'html-loader'
        },
        {
            test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
            use: 'null-loader'
        },
        {
            test: /\.(css|sass|scss)$/,
            use: 'null-loader'
        }
    ]
  },

  plugins: [

        new webpack.ContextReplacementPlugin(
            // The (\\|\/) piece accounts for path separators in *nix and Windows
            /angular(\\|\/)core(\\|\/)@angular/,
            helpers.root('./src'), // location of your src
            {} // a map of your routes
        )
    ]
}