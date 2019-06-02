module.exports = {
	entry : "./dev/js/app.js" ,
	output : {
		path : __dirname + "/src/js" ,
		filename: "bundle.min.js"
	},
	module : {
		loaders: [
		    {
			exclude: /(node_modules)/,
			loader: "babel" , 
			query : {
			   presets : [ "es2019" , "react" ] 
			}
		    }
		]
	},
	watch:true
}
