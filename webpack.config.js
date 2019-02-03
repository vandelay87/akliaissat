const path = require('path');
const { VueLoaderPlugin } = require('vue-loader');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const Dotenv = require('dotenv-webpack');

const env = process.env.NODE_ENV;
const sourceMap = env === 'development';

const config = {
  entry: path.join(__dirname, 'src', 'main.js'),
  mode: env,
  output: {
    publicPath: '/',
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },
  devtool: sourceMap ? 'cheap-module-eval-source-map' : undefined,
  resolve: {
    extensions: ['.js', '.vue', '.json', 'css', '.scss'],
    alias: {
      '@': path.join(__dirname, 'src'),
      vue$: 'vue/dist/vue.esm.js',
    },
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: [path.join(__dirname, 'src')],
      },
      {
        test: /\.scss$/,
        use: [
          'vue-style-loader',
          'css-loader',
          {
            loader: 'sass-loader',
            options: {
              sourceMap,
            },
          },
        ],
      },
      {
        test: /\.svg/,
        use: {
          loader: 'svg-url-loader',
        },
      },
    ],
  },
  plugins: [
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      filename: path.join(__dirname, 'dist', 'index.html'),
      template: path.join(__dirname, 'src', 'index.html'),
      inject: true,
      meta: {
        viewport: 'width=device-width, initial-scale=1.0',
      },
    }),
    new Dotenv(),
  ],
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
    disableHostCheck: true,
    historyApiFallback: true,
  },
};

module.exports = config;
