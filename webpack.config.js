const path = require('path');
const src = path.resolve(__dirname, 'src');
const dist = path.resolve(__dirname, 'dist');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  entry: './src/index.js',

  plugins: [
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin()
  ],

  output: {
    path: dist,
    filename: 'chunk.bundle.js'
  }
};