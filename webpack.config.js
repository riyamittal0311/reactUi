const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack');

module.exports={
    mode:'development',
    entry: './src/index.js',
    devtool:'eval-source-map',
    output : {
        path : path.resolve(__dirname ,'dist'),
        filename: '[name].bundle.js',
    },
    devServer: {
        historyApiFallback: true
      },
    module: {
        rules: [
          {
            test: /\.scss$/i,
            use: [
                {
                    loader: 'style-loader',
                },
                {
                    loader: 'css-loader',
                    options: {
                        sourceMap: true,
                    },
                },
                {
                    loader: 'sass-loader',
                    options: {
                        sourceMap: true,
                    },
                },
            ],
        },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      }
        ],
      },

    plugins:[
        new HTMLWebpackPlugin({
            template: './public/index.html',
            filename :'index.html'
          })
    ]

}