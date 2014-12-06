var gobble = require( 'gobble' ),
	gia = require( './Giafile' ),
	listBowerPaths = require( 'list-bower-paths' ),

	deploy = gobble.env() === 'deploy',
	production = deploy || gobble.env() === 'production',

	amdPathsConfig,
	baseUrl,
	version;


amdPathsConfig = listBowerPaths.sync({ relative: true, noext: true });
baseUrl = ( deploy ? ( 'http://interactive.guim.co.uk/' + gia.path ) : '.' );
version = 'v/' + ( deploy ? Date.now() : 'dev' );


module.exports = gobble([

	// preview
	gobble( 'preview' ).map( 'replace', {
		baseUrl: baseUrl,
		fonts: baseUrl + '/resources/fonts.css'
	}),

	// boot.js
	gobble( 'src' ).include( 'boot.js' ).map( 'replace', {
		version: version
	}),

	// app.js and dependencies
	(function () {
		var app, amd, ractive_components, data, vendor;

		amd = gobble( 'src/app' ).map( 'esperanto', { type: 'amd', defaultOnly: true });
		ractive_components = gobble( 'src' ).include( 'ractive_components/**/*.html' ).map( 'ractive', { type: 'amd' });

		app = gobble([ amd, ractive_components ]).map( 'es6-transpiler', {
			globals: { define: true }
		});

		data = gobble( 'src/data' ).transform( 'spelunk', { dest: 'data.js', type: 'amd' });
		vendor = gobble( 'src/vendor' );

		app = gobble([ app, data, vendor ]).transform( 'requirejs', {
			name: 'app',
			out: 'app.js',
			paths: amdPathsConfig,
			optimize: 'none'
		}).map( 'amdclean', {
			wrap: {
				start: 'define(function(){',
				end: '\nreturn _app_;});'
			}
		}).map( 'replace', {
			base: baseUrl,
			version: baseUrl + '/' + version
		}).moveTo( version, 'js' );

		if ( deploy ) {
			app = app.map( 'uglifyjs' );
		}

		return app;
	}()),

	// styles
	gobble( 'src/styles' ).transform( 'sass', { src: 'main.scss', dest: version + '/min.css' }),

	// files
	gobble( 'resources' ).moveTo( 'resources' ),
	gobble( 'src/files' ).moveTo( version, 'files' )

]);
