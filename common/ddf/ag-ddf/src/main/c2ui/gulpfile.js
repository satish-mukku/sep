var gulp = require("gulp");
var gutil = require("gulp-util");
var webpack = require("webpack");
var WebpackDevServer = require("webpack-dev-server");
var webpackConfig = process.env.NODE_ENV?require("./prod.webpack.config.js"):require("./dev.webpack.config.js");
var environment = process.env.NODE_ENV ? process.env.NODE_ENV : 'development';
var getPluginsForProduction = function () {
	return [new webpack.optimize.DedupePlugin(),
		new webpack.optimize.UglifyJsPlugin({
			compress: {
				warnings: false
			}
		})];
};
gulp.task("webpack:build", function (callback) {
	var config = Object.create(webpackConfig);
	if (environment === "production") {
		config.plugins = config.plugins.concat(getPluginsForProduction());
		config.devtool = 'source-map';
	}
	webpack(config, function (err, stats) {
		if (err) throw new gutil.PluginError("webpack:build", err);
		gutil.log("[webpack:build]", stats.toString({
			colors: true
		}));
		callback();
	});
});

gulp.task("serve", function (callback) {
	var config = Object.create(webpackConfig);
	// config.entry.app.unshift("webpack-dev-server/client?http://localhost:8081/");
	var port = 8081;
	var ip = '127.0.0.1';
	webpack(config,function (err, stats) {
		if (err) throw new gutil.PluginError("webpack:build", err);
		new WebpackDevServer(webpack(config), {
		publicPath: config.output.publicPath,
		historyApiFallback: true,
		stats: { colors: true },
		quiet: false,
		noInfo: false
	}).listen(port, ip, function (error) {
		if (error) {
			throw new gutil.PluginError("webpack-dev-server", error);
		}
		gutil.log("[webpack-dev-server]", 'started at' + ip + ':' + port);
	});
		callback();
	});
	
});

gulp.task("default", ["serve"]);
gulp.task("build", ["webpack:build"]);
