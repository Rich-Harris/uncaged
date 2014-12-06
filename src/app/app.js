import data from 'data';
import BaseView from 'ractive_components/base';

var app = {
	launch: function ( el ) {
		var levels;

		app.el = el;

		levels = data.levels.map( l => l.split( '\n' ).map( r => r.split( '' ).map( b => b === 'x' ? null : b ) ) );
		console.log( 'levels', levels );

		app.view = new BaseView({
			el: el,
			data: {
				levels: levels,
				bricks: levels[0]
			}
		});
	}
};

window.app = app; // useful for debugging!

export default app;
