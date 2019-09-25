const path = require('path');

module.exports = {
  entry: "./src/main.js",
  output: {
    path: path.resolve(__dirname, 'public', 'build'),
    publicPath: '/build/',
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  devtool: 'source-map',
  devServer: {
    historyApiFallback: true
  }
}