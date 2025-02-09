require('dotenv').config();
const path = require('path');
const webpack = require('webpack');

module.exports = {
  context: path.resolve(__dirname, 'frontend'), // Directorio raíz del código fuente
  mode: process.env.NODE_ENV || 'development',
  entry: './entry.jsx', // Archivo de entrada principal
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  devtool: 'source-map',
  devServer: {
    static: {
      directory: path.resolve(__dirname, 'frontend'),
    },
    historyApiFallback: true,
    hot: true,
    port: 3001,
    host: '0.0.0.0',
    allowedHosts: 'all',
  },
};
