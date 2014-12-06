define(
  ["data","ractive_components/base","exports"],
  function(__dependency1__, __dependency2__, __exports__) {
    "use strict";
    var data = __dependency1__["default"];
    var BaseView = __dependency2__["default"];

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

    __exports__["default"] = app;
  });