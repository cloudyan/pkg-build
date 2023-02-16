const path = require('path');

module.exports = {
  mode: process.env.NODE_ENV,
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'webpack-numbers.js',
    library: 'webpackNumbers',

    // umd
    // globalObject: 'this',
    // library: {
    //   name: 'webpackNumbers',
    //   type: 'umd',
    // },
  },
  devtool: 'source-map',
};
