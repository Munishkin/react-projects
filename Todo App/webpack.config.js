const path = require('path');

module.exports = {
  entry: './src/app.js',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js'
  },
  devtool: 'source-map',
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: ['babel-loader']
      },
      {
        test: /\.css$/,
        loader: ['style-loader', 'css-loader']
      }
    ]
  }
}