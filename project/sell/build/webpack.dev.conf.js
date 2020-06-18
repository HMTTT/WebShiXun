'use strict'
const utils = require('./utils')
const webpack = require('webpack')
const config = require('../config')
const merge = require('webpack-merge')
const path = require('path')
const baseWebpackConfig = require('./webpack.base.conf')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin')
const portfinder = require('portfinder')

const HOST = process.env.HOST
const PORT = process.env.PORT && Number(process.env.PORT)

//mock数据
//创建服务
const express = require('express')
//创建服务连接
const app = express()
//引入数据
var xuJinRenData = require('../static/XuJinRenData.json')
var lijialeData = require('../src/components/lijiale/json/data_memberBuy.json')
var lijialeData_2 = require('../src/components/lijiale/json/data_myData.json')
var dongTaiData = require('../src/components/RenLin/json/dongTai.json')
var xuJinRenData = require('../src/components/XuJinRen/XuJinRenData.json')
//知识区数据
var kzData = require('../src/components/tantengkai/kz/data.json')
var kz = kzData.kz

//定义路由
var apiRoutes = express.Router()
//使用并提供接口
app.use('/api', apiRoutes)
//分别定义数据
var header_navigation = xuJinRenData.header_navigation

var dongTai = dongTaiData
var header_lunbo = xuJinRenData.header_lunbo
const devWebpackConfig = merge(baseWebpackConfig, {
  module: {
    rules: utils.styleLoaders({
      sourceMap: config.dev.cssSourceMap,
      usePostCSS: true
    })
  },
  // cheap-module-eval-source-map is faster for development
  devtool: config.dev.devtool,

  // these devServer options should be customized in /config/index.js
  devServer: {
    before(app) {
      app.get('/api/xujinren_header_navigation', (req, res) => {
          res.json({
            erron: 0,
            data: header_navigation
          })
        }),
        app.get('/api/header_lunbo', (req, res) => {
          res.json({
            erron: 0,
            data: header_lunbo
          })
        }),
        app.get('/api/xujinren', (req, res) => {
          res.json({
            erron: 0,
            data: xuJinRenData
          })
        })

      app.get('/api/DT', (req, res) => {
          res.json({
            erron: 0,
            data: dongTai
          })
        }),

        //知识区
        app.get('/api/kz', (req, res) => {
          res.json({
            errno: 0,
            data: kz
          })
        })
      }),
	  app.get('/api/merberBuy',(req,res)=>{
	    res.json({
	      erron:0,
	      data:lijialeData
	    })
	  }),
	  app.get('/api/LJLdata',(req,res)=>{
	    res.json({
	      erron:0,
	      data:lijialeData_2
	    })
	  })
    },
    clientLogLevel: 'warning',
    historyApiFallback: {
      rewrites: [{
        from: /.*/,
        to: path.posix.join(config.dev.assetsPublicPath, 'index.html')
      }, ],
    },
    hot: true,
    contentBase: false, // since we use CopyWebpackPlugin.
    compress: true,
    host: HOST || config.dev.host,
    port: PORT || config.dev.port,
    open: config.dev.autoOpenBrowser,
    overlay: config.dev.errorOverlay ?
      {
        warnings: false,
        errors: true
      } :
      false,
    publicPath: config.dev.assetsPublicPath,
    proxy: config.dev.proxyTable,
    quiet: true, // necessary for FriendlyErrorsPlugin
    watchOptions: {
      poll: config.dev.poll,
    }
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': require('../config/dev.env')
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(), // HMR shows correct file names in console on update.
    new webpack.NoEmitOnErrorsPlugin(),
    // https://github.com/ampedandwired/html-webpack-plugin
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'index.html',
      inject: true
    }),
    // copy custom static assets
    new CopyWebpackPlugin([{
      from: path.resolve(__dirname, '../static'),
      to: config.dev.assetsSubDirectory,
      ignore: ['.*']
    }])
  ]
})

module.exports = new Promise((resolve, reject) => {
  portfinder.basePort = process.env.PORT || config.dev.port
  portfinder.getPort((err, port) => {
    if (err) {
      reject(err)
    } else {
      // publish the new Port, necessary for e2e tests
      process.env.PORT = port
      // add port to devServer config
      devWebpackConfig.devServer.port = port

      // Add FriendlyErrorsPlugin
      devWebpackConfig.plugins.push(new FriendlyErrorsPlugin({
        compilationSuccessInfo: {
          messages: [
            `Your application is running here: http://${devWebpackConfig.devServer.host}:${port}`
          ],
        },
        onErrors: config.dev.notifyOnErrors ?
          utils.createNotifierCallback() :
          undefined
      }))

      resolve(devWebpackConfig)
    }
  })
})
