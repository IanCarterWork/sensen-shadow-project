/**
 * Système Utilities
 */
const fs = require("fs");
const path = require('path');

/**
 * Webpack Plugins
 */
const CopyPlugin = require("copy-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');


/** * Sensen Shadow Config */
const SensenConfig = require('./sensen.config');









module.exports = {

	target: ['web'],

	mode: SensenConfig.Production ? 'production' : 'development',
	
	entry: {
		
		shadow: './jsbundle/index.js',

		theme: './jsbundle/sensen.theme.bundle.js'
	
	},
	
	


	devtool: 'inline-source-map',




	
	devServer: {

        open: true,
	
		hot: true,
	
		compress: true,
	
		port: SensenConfig.Port || 19620,
	
	},





    
	plugins: [

		new CopyPlugin({
        
			patterns:[
        
				{ from: './assets', to: path.resolve(__dirname, 'public/assets'), },
        
				{ from: './views', to: path.resolve(__dirname, 'public/sensen/views'), },
        
			]
        
		}),


        new FaviconsWebpackPlugin({
		
			logo: './assets/images/ggn.senju.png',
		
			cache: true,
		
			inject:true,
		
			icons: {
		
				android: true, 
		
				appleIcon: true, 
		
				appleStartup: true, 
		
				coast: true, 
		
				favicons: true, 
		
				windows: true, 
		
				yandex: true, 
		
			},
        
		}),


		new HtmlWebpackPlugin({  
		
			filename: 'index.html',
		
			template: './templates/index.web.html',
		
			title: SensenConfig.Title || 'Sensen Shadow',
		
			viewport: 'user-scalable=no, initial-scale=1, maximum-scale=1, minimum-scale=1, width=device-width, height=device-height, target-densitydpi=device-dpi, viewport-fit=cover',
		
			themeColor: '#4285f4',

			port: SensenConfig.Port || '19620',
		
			inject: 'body',
		
		}),

  
	],




	output: {
    
		filename: 'sensen.[name].js',
    
		path: path.resolve(__dirname, 'public/'),
    
		clean: false,
    
	},



    optimization: {
		
        runtimeChunk: 'multiple',
		
    },


    performance: {
        hints: false,
        maxEntrypointSize: 512000,
        maxAssetSize: 512000
    }


};


