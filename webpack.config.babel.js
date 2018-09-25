import path from 'path'
import nodeExternals from 'webpack-node-externals'
const ExtractTextPlugin = require('extract-text-webpack-plugin')

const client = {
  entry: {
    js: ['babel-polyfill', './src/client/index.js'],
  },
  output: {
    path: path.join(__dirname, 'public/js/compiled'),
    filename: 'client.js'
  },
  module: {
    rules: [
      {
        test: path.join(__dirname, 'src'),
        use: {
          loader: 'babel-loader',
          options: 'cacheDirectory=.babel_cache'
        }
      },
      {
        test: /\.s?css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'sass-loader', 'postcss-loader' ]
        })
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]'
            }
          }
        ]
      },
      {
        test: /\.(woff|woff2|eot|TTF|otf|ico)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'url-loader?limit=100000&name=fonts/[name].[ext]'
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin({filename: 'app.bundle.css'})
  ]
}

const server = {
  target: 'node',
  devtool: 'inline-source-map',
  node: {
    __dirname: false
  },
  externals: [nodeExternals({
    modulesFromFile: true
  })],
  entry: {
    js: ['babel-polyfill', './src/server/index.js']
  },
  output: {
    path: path.join(__dirname, 'public/js/compiled'),
    filename: 'server.js',
    libraryTarget: 'commonjs2'
  },
  module: {
    rules: [
      {
        test: path.join(__dirname, 'src'),
        use: {
          loader: 'babel-loader',
          options: 'cacheDirectory=.babel_cache'
        }
      }
    ]
  }
}

export default [client, server]