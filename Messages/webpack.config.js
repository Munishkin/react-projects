const path = require('path');

module.exports = {
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, 'public', 'build'),
    publicPath: '/build/',
    filename: 'bundle.js'
  },
  devtool: 'source-map',
  devServer: {
    historyApiFallback: true
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: ['babel-loader']
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        loaders: ['style-loader', 'css-loader']
      }
    ]
  }
}