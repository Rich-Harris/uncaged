/*global define */
define([ 'require' ], function ( localReq ) {

	'use strict';

	return {
		boot: function ( el ) {

			var supported, message, version;

			version = localReq.toUrl( './${version}' );

			// do feature detection etc
			supported = true;

			if ( !supported ) {
				message = '<div class="gia-browser-warning"><h2>Time to upgrade your browser!</h2><p>Your browser lacks features necessary to view this interactive. We strongly recommend upgrading to a modern browser such as <a href="http://google.com/chrome">Google Chrome</a> or <a href="http://getfirefox.com">Mozilla Firefox</a>.</p></div>';
				el.innerHTML = message;

				return;
			}

			loadCSS( version + '/min.css' );

			require([ version + '/js/app.js' ], function ( app ) {
				app.launch( el );
			});
		}
	};

	function loadCSS ( url ) {
		var link;

		// If the stylesheet already exists in the page (e.g. multiple components loading the same
		// fonts.css file), abort
		if ( document.querySelector( 'link[href="' + url + '"]' ) ) {
			return;
		}

		link = document.createElement( 'link' );
		link.setAttribute( 'rel', 'stylesheet' );
		link.setAttribute( 'href', url );

		document.getElementsByTagName( 'head' )[0].appendChild( link );
	}

});
