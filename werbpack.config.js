
    const webpack = require('webpack'),

htmlWebpackPlugin = require('html-webpack-plugin'),

             path = require('path');

      module.exports = {

      	entry:{
      		app:'.src/index.js'
      	},
      	output:{
      		path:path.resolve('build'),
      		filename:'bundle.main.js'
      	},
         mode:'development',
      	watch:true,
         target:'web',
      	module:{
      		rules:[{
      			test:/\*.js$/,
      			use:{
      				loader:'babel-loader',
      				options:{
                     lazy:true,
      					presets:['babel/preset-env','es2016'],
                     plugins:['babel/plugin-transform-arrow-functions','babel-preset-stage-3','babel/plugin-proposal-class-properties'],
                    rootMode:'upward',
      					configFile:path.resolve(__dirname,'webpack.config.js')
      				}
      			},
            include:[
            path.resolve(__dirname,'./src/index.js')
            ],
               exclude:'/(node_modules|bower_components',
      		}]
      	},

       stats:{
         colors:true
      }

      }