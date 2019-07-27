const webpack = require('webpack');
const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/app/index.js',
    output: {
        path: __dirname + '/src/public/js',
        filename: 'bundle.js'
    },

    module: {
        rules: [
          {
            use: 'babel-loader',
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            query: {
              present: ['react','es2015'],
              plugins: []
            }
          },

          {
            test: /\.css$/,
            use: ['style-loader', 'css-loader']
          },

          {
            test: /\.(png|svg|jpg|gif)$/,
            use: [
                'file-loader'
            ]
        }
        ]
      },

      plugins: [
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            'window.jQuery': 'jquery',
            Popper: ['popper.js', 'default']
        }),
        new CleanWebpackPlugin(['dist']),
        new HtmlWebpackPlugin({
            template: './index.html'
        })
    ],
    devtool: 'cheap-module-eval-source-map',
    watch: true 
};