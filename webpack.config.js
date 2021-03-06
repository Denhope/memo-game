const webpack = require('webpack');
const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = (env, options) => {
  const isProduction = options.mode === 'production';
  const isAnalyze = env.analyze;
  const config = {
    mode: isProduction ? 'production' : 'development',
    devtool: isProduction ? 'source-map' : 'eval',
    watch: !isProduction,
    entry: ['./src/index.js', './src/sass/style.scss'],
    output: {
<<<<<<< HEAD
      path: path.join(__dirname, '/dist'),
      filename: 'script.js',
      assetModuleFilename: 'assets/public/[hash][ext]',
    },
    // optimization: {
    //   minimize: false,
    // },
=======
      path: path.join(__dirname, "/dist"),
      filename: "script.js",
      assetModuleFilename: "assets/public/[hash][ext]",
    },  
>>>>>>> 739cb0b2fc7aef1f894120718e49bbd9acfcb66d
    resolve: {
      extensions: ['.js', '.json', '.mjs'],
    },

    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env'],
            },
          },
        },
        {
          test: /\.(sa|sc|c)ss$/,
          use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
        },
        {
          test: /\.(png|svg|jpe?g|gif)$/,
          type: 'asset/resource',
        },
        {
          test: /\.html$/,
          loader: 'html-loader',
        },
      ],
    },
    devServer: {
      open: true,
      port: 1000,
    },

    plugins: [
      new CleanWebpackPlugin(),
      new HtmlWebpackPlugin({
        template: 'index.html',
      }),
      new MiniCssExtractPlugin({
        filename: 'style.css',
      }),
      new CopyPlugin({
        patterns: [
          { from: './src/assets/img', to: './assets/img' },
          { from: './src/js/', to: './assets/js' },
        ],
      }),
    ],
    // ...devServer()
  };

  return config;
};
