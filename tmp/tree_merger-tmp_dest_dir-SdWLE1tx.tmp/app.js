define(
  ["data","ractive_components/base"],
  function(data, BaseView) {
    "use strict";
      
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

    return app;
  });