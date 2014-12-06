import tween from 'utils/animate/tween';

function App ( properties ) {
	var key;

	this._observers = {};
	this._callbacks = {};
	this._animations = {};

	for ( key in properties ) {
		if ( properties.hasOwnProperty( key ) ) {
			this[ key ] = properties[ key ];
		}
	}

	if ( !this.state ) {
		this.state = {};
	}
}

App.prototype = {
	fire: function ( eventName, ...eventArgs ) {
		var callbacks = this._callbacks[ eventName ];

		if ( !callbacks ) return;

		if ( !eventArgs.length ) {
			callbacks.forEach( call );
			return;
		}

		callbacks.forEach( callback => callback.apply( null, eventArgs ) );
	},

	on: function ( eventName, callback ) {
		var callbacks = this._callbacks[ eventName ] || ( this._callbacks[ eventName ] = [] ), cancelled;
		callbacks.push( callback );

		return {
			cancel: function () {
				if ( !cancelled ) {
					callbacks.splice( callbacks.indexOf( callback, 1 ) );
					cancelled = true;
				}
			}
		};
	},

	get: function ( prop ) {
		return this.state[ prop ];
	},

	set: function ( prop, value ) {
		var map, previous, observers;

		if ( typeof prop === 'object' ) {
			map = prop;
			for ( prop in map ) {
				if ( map.hasOwnProperty( map ) ) {
					this.set( prop, map[ prop ] );
				}
			}

			return;
		}

		previous = this.state[ prop ];
		if ( isEqual( value, previous ) ) {
			return;
		}

		this.state[ prop ] = value;

		observers = this._observers[ prop ];
		if ( !observers ) return;

		observers.forEach( observer => {
			try {
				observer( value, previous );
			} catch ( err ) {
				setTimeout( function () {
					throw err;
				});
			}
		});
	},

	animate: function ( prop, to, options = {} ) {
		var self = this, animation, from;

		if ( animation = this._animations[ prop ] ) {
			animation.stop();
		}

		from = this.state[ prop ];

		animation = tween( from, to, {
			duration: options.duration || 600,
			easing: options.easing || 'linear',
			step: function ( intermediate ) {
				self.set( prop, intermediate );
			}
		});

		animation.then( function () {
			self.set( prop, to );
			self._animations[ prop ] = null;
		})

		this._animations[ prop ] = animation;
		return animation;
	},

	observe: function ( prop, observer ) {
		var observers, cancelled;

		observers = this._observers[ prop ] || ( this._observers[ prop ] = [] );
		observers.push( observer );

		observer( this.state[ prop ], void 0 );

		return {
			cancel: () => {
				if ( !cancelled ) {
					observers.splice( observers.indexOf( observer ) );
					cancelled = true;
				}
			}
		};
	}
};

export default App;

function call ( fn ) {
	fn();
}

function isEqual ( a, b ) {
	if ( a === null && b === null ) {
		return true;
	}

	if ( typeof a === 'object' || typeof b === 'object' ) {
		return false;
	}

	return a === b;
}
