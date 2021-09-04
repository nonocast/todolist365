const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const _externals = require('externals-dependencies');
const WebpackBar = require('webpackbar');

let externals = _externals();

module.exports = {
  mode: 'production',
  target: 'node',
  devtool: 'source-map',
  entry: './src/index.js',
  node: {
    __filename: false,
    __dirname: false,
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  optimization: {
    minimizer: [new TerserPlugin()],
  },
  plugins: [
    new WebpackBar(),
    new CopyPlugin({ patterns: [{ from: 'package.json' }, { from: './config', to: 'config' }] }),
  ],
  externals,
};