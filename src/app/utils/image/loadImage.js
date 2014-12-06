import Promise from 'utils/core/Promise';

export default function loadImage ( src ) {
	return new Promise( ( fulfil, reject ) => {
		var img = new Image();

		img.onload = function () {
			fulfil( img );
		};

		img.onerror = reject;

		img.src = src;
	});
};
