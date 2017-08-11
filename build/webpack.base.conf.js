var path = require('path')
var utils = require('./utils')
var webpack = require('webpack')
var config = require('../config')

var glob = require('glob');
var entries = utils.getMultiEntry('./src/views/**/**/*.js'); // 获得入口js文件
var chunks = Object.keys(entries);

console.log(chunks)

var projectRoot = path.resolve(__dirname, '../')

var vueLoaderConfig = require('./vue-loader.conf')

function resolve(dir) {
  return path.join(__dirname, '..', dir)
}

module.exports = {
  entry: entries,
  output: {
    path: config.build.assetsRoot,
    filename: '[name].js',
    publicPath: process.env.NODE_ENV === 'production' ? config.build.assetsPublicPath : config.dev.assetsPublicPath
  },
  resolve: {
    // 注意一下, extensions webpack2第一个不是空字符串! 对应不需要后缀的情况.
    extensions: ['.js', '.vue', '.json', '.scss'],
    alias: {
      'vue$': 'vue/dist/vue.common.js',
      '@': resolve('src'),
      'src': path.resolve(__dirname, '../src'),
      'assets': path.resolve(__dirname, '../src/assets'),
      'store': path.resolve(__dirname, '../src/store'),
      'components': path.resolve(__dirname, '../src/components')
    }
  },
  module: {
    rules: [{
        test: /\.vue$/,
        loader: 'eslint-loader',
        enforce: 'pre',
        options: {
          fix: true,
          formatter: require('eslint-friendly-formatter') // 编译后错误报告格式
        },
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: vueLoaderConfig
      },
      {
        test: /\.js$/,
        loader: 'eslint-loader',
        enforce: 'pre',
        options: {
          fix: true,
          formatter: require('eslint-friendly-formatter') // 编译后错误报告格式
        },
        include: [resolve('src'), resolve('test')],
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: [resolve('src'), resolve('test')],
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        query: {
          limit: 10000,
          name: utils.assetsPath('img/[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        query: {
          limit: 10000,
          name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
        }
      },

    ]
  },
  plugins: [
    // 在具体环境中
  ]
};