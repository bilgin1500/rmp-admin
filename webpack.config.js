const path = require('path');
const webpack = require('webpack');
const WebpackMd5Hash = require('webpack-md5-hash');
const HtmlWebpackPlugin = require('html-webpack-plugin');

// For development purposes
const dev = true;

// Disable the annoying deprecation warning
// https://github.com/webpack/loader-utils/issues/56
process.noDeprecation = true; // eslint-disable-line

const webpackconfig = {
  entry: { main: path.join(__dirname, 'src') + '/app.js' },
  output: {
    path: __dirname + '/public',
    filename: `assets/[name]${dev ? '' : '.[chunkhash]'}.js`,
    chunkFilename: `assets/[name]${dev ? '' : '.[chunkhash]'}.js`
  },
  module: {
    loaders: [
      {
        test: /\.js?$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader?cacheDirectory=true',
        query: {
          babelrc: false,
          presets: [
            'react',
            'es2015',
            'stage-0',
            [
              'env',
              {
                targets: {
                  browsers: ['last 2 versions', 'safari >= 7']
                }
              }
            ]
          ],
          plugins: ['transform-decorators-legacy', 'transform-class-properties']
        }
      },
      {
        test: /\.svg$/,
        loader: 'svg-inline-loader'
      },
      {
        test: /\.(graphql|gql)$/,
        exclude: /node_modules/,
        loader: 'graphql-tag/loader'
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader'
      }
    ]
  },
  node: { fs: 'empty' },
  resolve: {
    modules: ['node_modules', path.resolve(__dirname, 'src')]
  },
  plugins: [
    // Extract all 3rd party modules into a separate 'vendor' chunk
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendors',
      minChunks: ({ resource }) => /node_modules/.test(resource)
    }),

    // Generate a 'manifest' chunk to be inlined in the HTML template
    new webpack.optimize.CommonsChunkPlugin('manifest'),

    // Need this plugin for deterministic hashing
    // until this issue is resolved: https://github.com/webpack/webpack/issues/1315
    // for more info: https://webpack.js.org/how-to/cache/
    new WebpackMd5Hash(),

    // https://github.com/jantimon/html-webpack-plugin
    new HtmlWebpackPlugin({
      filename: __dirname + '/public/index.html',
      title: 'RMP Admin'
    }),

    new webpack.optimize.OccurrenceOrderPlugin()
  ]
};

// Plugins which are only available when env=dev
if (!dev) {
  webpackconfig.plugins.push(new webpack.optimize.UglifyJsPlugin());

  //http://dev.topheman.com/make-your-react-production-minified-version-with-webpack/
  webpackconfig.plugins.push(
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      }
    })
  );
}

module.exports = webpackconfig;
