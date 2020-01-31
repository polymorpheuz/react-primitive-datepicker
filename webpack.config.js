const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const postcssPresetEnv = require('postcss-preset-env');
const TerserJSPlugin = require('terser-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');

const isProduction = process.env.NODE_ENV === 'production';

module.exports = {
  entry: path.join(__dirname, 'examples/src/index.js'),
  output: {
    path: path.join(__dirname, 'dist/examples'),
    filename: 'bundle.js',
  },
  optimization: {
    minimizer: [new TerserJSPlugin({}), new OptimizeCSSAssetsPlugin({})],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: ["babel-loader", "eslint-loader"],
        exclude: /node_modules/
      },
      {
        test: /\.css$/i,
        exclude: /\.module\.css$/i,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              hmr: process.env.NODE_ENV === 'development',
            },
          },
          'css-loader',
          { loader: 'postcss-loader', options: {
              ident: 'postcss',
              plugins: () => [
                postcssPresetEnv({ grid: true })
              ]
          }},
        ],
      },
      {
        test: /\.module\.css$/i,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              hmr: process.env.NODE_ENV === 'development',
            },
          },
          {
            loader: 'css-loader',
            options: {
              modules: {
                localIdentName: isProduction
                  ? '[local]--[hash:base64:5]'
                  : '[path][name]__[local]--[hash:base64:5]',
              },
            },
          },
          { loader: 'postcss-loader', options: {
              ident: 'postcss',
              plugins: () => [
                postcssPresetEnv({ grid: true })
              ]
          }},
        ],
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
          use: [
            'file-loader',
          ],
      },
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'examples/src/index.html'),
      filename: './index.html'
    }),
    new MiniCssExtractPlugin(),
  ],
  resolve: {
    extensions: ['.js', '.jsx']
  },
  devServer: {
    port: 3001
  }
};
