// eslint-disable-next-line import/no-extraneous-dependencies
const { merge } = require('webpack-merge');
// eslint-disable-next-line import/no-extraneous-dependencies
const Dotenv = require('dotenv-webpack');
const common = require('./webpack.config');

module.exports = merge(
  common,
  {
    mode: 'development',
    devtool: 'eval-source-map',
    cache: false,
    devServer:
        {
          historyApiFallback: true,
          allowedHosts: 'localhost',
        },
    plugins: [
      new Dotenv('./.env.dev'),
    ],
  },
);
