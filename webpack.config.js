const { join } = require('path');

module.exports = {
  entry: { reduxtor: join(__dirname, '/dist/reduxtor-expose.js') },
  output: {
    path: join(__dirname, 'dist'),
    publicPath: '/dist/',
    filename: '[name]-bundle.js'
  },
  resolve: {
    extensions: ['.js']
  },
  module: {
    rules: [{ test: /\.(js)$/, exclude: /node_modules/, use: 'babel-loader' }]
  },
  mode: 'development',
  target: 'web'
};
