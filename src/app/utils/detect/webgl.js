var webgl = (function () {
	try {
		var canvas = document.createElement( 'canvas' );
		return !! window.WebGLRenderingContext && ( canvas.getContext( 'webgl' ) || canvas.getContext( 'experimental-webgl' ) );
	} catch ( e ) {
		return false;
	}
})();

export default !~window.navigator.userAgent.toLowerCase().indexOf('msie') && webgl;
