const path = require('path');

module.exports = {
  entry: './src/app.js',
  output: {
    path: path.resolve(__dirname, 'build'),
    publicPath: '/build/',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: ['react-hot-loader/webpack', 'babel-loader']
      },
      {
        test:/\.css$/,
        exclude: /node_modules/,
        loader: ['style-loader', 'css-loader']
      }
    ]
  },
  devtool: 'source-map'
}