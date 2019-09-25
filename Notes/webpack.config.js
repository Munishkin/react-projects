const path = require('path');
const webpack = require('webpack');

const NODE_ENV = process.env.NODE_ENV || 'development';

module.exports = {
  entry: './src/main.js',
  output:{
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test:/\.css$/,
        use:['style-loader','css-loader']
      }
    ]
  },
  devtool: NODE_ENV ==='development' && "source-map",
  plugins: [
    new webpack.EnvironmentPlugin({
      NODE_ENV: 'development',
      DEBUG: false
    }
  )
  ]
}