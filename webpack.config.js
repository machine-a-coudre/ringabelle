const HtmlWebPackPlugin = require('html-webpack-plugin');
const Dotenv = require('dotenv-webpack');

// eslint-disable-next-line import/no-extraneous-dependencies
require('dotenv').config({
  path: process.env.NODE_ENV === 'development' ? './.env.dev' : './.env',
});

module.exports = {
  entry: './src/index.tsx',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: 'ts-loader',
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: { loader: 'babel-loader' },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader', 'postcss-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  plugins: [
    new HtmlWebPackPlugin({
      title: process.env.APP_NAME,
      hash: true,
      template: './src/index.html',
    }),
    new Dotenv('./.env'),
  ],
};
