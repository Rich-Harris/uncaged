import Promise from 'utils/core/Promise';

var head = document.getElementsByTagName( 'head' )[0];

export default function ( url, params, callbackParam ) {
	return new Promise( function ( fulfil, reject ) {
		var script, callbackName, query;

		params = params || {};
		callbackParam = callbackParam || 'jsonp_callback';

		callbackName = params[ callbackParam ] || 'load_jsonp_' + Math.round( Math.random() * 1000000 );
		if ( !params[ callbackParam ] ) {
			params[ callbackParam ] = callbackName;
		}
		query = serializeParams( params );

		window[ callbackName ] = fulfil;

		script = document.createElement( 'script' );
		script.src = url + '?' + query;

		script.onload = function () {
		    script.parentNode.removeChild( script );
		    delete window[ callbackName ];
		};

		script.onerror = reject;

		head.appendChild( script );
	});
}

function serializeParams ( params ) {
	return Object.keys( params ).map( function ( key ) {
		var value = params[ key ];

		if ( isArray( value ) ) {
			return value.map( function ( value ) {
				return serializePair( key, value );
			}).join( '&' );
		}

		return serializePair( key, value );
	}).join( '&' );
}

function serializePair ( key, value ) {
	return key + '=' + encodeURIComponent( value );
}

function isArray ( thing ) {
	return Object.prototype.toString.call( thing ) === '[object Array]';
}
