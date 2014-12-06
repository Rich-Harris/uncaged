var now;

if ( window.performance && typeof window.performance.now === 'function' ) {
	now = function () {
		return window.performance.now();
	};
} else {
	now = function () {
		return Date.now();
	};
}

export default now;
