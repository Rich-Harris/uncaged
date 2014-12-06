import requestAnimationFrame from 'utils/compatibility/requestAnimationFrame';

export default function loopForever ( callback ) {
	var loop = function(){
		requestAnimationFrame( loop );
		callback();
	};

	loop();
}
