import interpolate from 'utils/maths/interpolate';
import easing from 'utils/maths/easing';
import rAF from 'utils/compatibility/requestAnimationFrame';
import now from 'utils/timing/now';
import Promise from 'utils/core/promise';

var tween,
	animations,
	addAnimation,
	running = false,
	loop,
	Animation;

tween = function ( from, to, options = {} ) {
	var animation, promise;

	promise = new Promise( fulfil => {
		options.complete = fulfil;
		animation = new Animation( from, to, options );
	});

	promise.stop = function () {
		animation.stop;
	};

	return promise;
};

animations = [];

addAnimation = function ( animation ) {
	animations.push( animation );

	if ( !running ) {
		running = true;
		loop();
	}
};

loop = function () {
	var i, timeNow = now();

	for ( i = 0; i < animations.length; i += 1 ) { // can't cache animations.length, it will change
		if ( !animations[i].tick( timeNow ) ) {
			animations.splice( i--, 1 );
		}
	}

	if ( animations.length ) {
		rAF( loop );
	} else {
		running = false;
	}
};

Animation = function ( from, to, options = {} ) {
	this.interpolator = interpolate( from, to );

	this.from = from;
	this.to = to;

	this.step = options.step;
	this.complete = options.complete;

	this.running = true;

	this.duration = options.duration || 600;
	this.ease = easing[ options.easing ] || easing.linear;

	if ( options.delay ) {
		setTimeout( () => {
			this.start = now();
			addAnimation( this );
		}, options.delay );
	} else {
		this.start = now();
		addAnimation( this );
	}
};

Animation.prototype = {
	tick: function ( timeNow ) {
		var elapsed, t, intermediateValue;

		if ( !this.running ) {
			return;
		}

		timeNow = now();
		elapsed = timeNow - this.start;

		if ( elapsed > this.duration ) {
			if ( this.step ) this.step( this.to );
			if ( this.complete ) this.complete( this.to );
			this.running = false;
		} else {
			t = this.ease( elapsed / this.duration );
			intermediateValue = this.interpolator( t );

			if ( this.step ) {
				this.step( intermediateValue );
			}

			return true;
		}
	},

	stop: function () {
		this.running = false;
	}
};

export default tween;
