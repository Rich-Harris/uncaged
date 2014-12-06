import data from 'data';
import BaseView from 'ractive_components/base';

var app = {
	launch: function ( el ) {
		app.el = el;

		// optionally, comment this out...
		app.view = new BaseView({
			el: el
		});

		// ...and replace it with this:
		// el.innerHTML = data.scaffolding;
	}
};

window.app = app; // useful for debugging!

export default app;
