const path = require('path');

module.exports = {
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, 'build'),
    publicPath: '/build/',
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node-modules/,
        use: 'babel-loader'
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use:[ 'style-loader', 'css-loader']
      }
    ]
  }
}