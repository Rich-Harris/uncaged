import data from 'data';
import BaseView from 'ractive_components/base';

var app = {
	launch: function ( el ) {
		var levels;

		app.el = el;

		levels = data.levels.map( l => l.split( '\n' ).map( r => r.split( '' ).map( b => b === '-' ? null : b ) ) );

		app.view = new BaseView({
			el: el,
			data: {
				levels: levels
			}
		});

		window.board = app.view.findComponent( 'game-board' );
	}
};

window.app = app; // useful for debugging!

export default app;
