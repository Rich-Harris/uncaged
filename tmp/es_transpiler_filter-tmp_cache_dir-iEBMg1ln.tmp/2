define([
	"require",
	"ractive"
], function(
	require,
	Ractive
){
var __options__ = {
	template: {v:1,t:[{t:7,e:"svg",a:{viewBox:"0 0 100 100"},f:[{t:7,e:"g",a:{transform:"translate(50,50)"},f:[{t:7,e:"circle",a:{"class":"clock-face",r:"48"}}," ",{t:4,r:"minor",i:"i",f:[{t:7,e:"line",a:{"class":"minor",y1:"42",y2:"45",transform:["rotate( ",{t:2,x:{r:["i","minor.length"],s:"360*${0}/${1}"}}," )"]}}]}," ",{t:4,r:"major",i:"i",f:[{t:7,e:"line",a:{"class":"major",y1:"35",y2:"45",transform:["rotate( ",{t:2,x:{r:["i","major.length"],s:"360*${0}/${1}"}}," )"]}}]}," ",{t:7,e:"line",a:{"class":"hour",y1:"2",y2:"-20",transform:["rotate( ",{t:2,x:{r:["date"],s:"30*${0}.getHours()+${0}.getMinutes()/2"}}," )"]}}," ",{t:7,e:"line",a:{"class":"minute",y1:"4",y2:"-30",transform:["rotate( ",{t:2,x:{r:["date"],s:"6*${0}.getMinutes()+${0}.getSeconds()/10"}}," )"]}}," ",{t:7,e:"g",a:{transform:["rotate( ",{t:2,x:{r:["date"],s:"6*${0}.getSeconds()"}}," )"]},f:[{t:7,e:"line",a:{"class":"second",y1:"10",y2:"-38"}}," ",{t:7,e:"line",a:{"class":"second-counterweight",y1:"10",y2:"2"}}]}]}]}]},
	css:"svg{width:100%;height:100%}.clock-face{stroke:#333;fill:#fff}.minor{stroke:#999;stroke-width:.5}.major{stroke:#333;stroke-width:1}.hour{stroke:#333}.minute{stroke:#666}.second,.second-counterweight{stroke:#b40000}.second-counterweight{stroke-width:3}",
},
component={},
__prop__,
__export__;

	component.exports = {
		data: {
			minor: new Array( 60 ),
			major: new Array( 12 )
		},

		init: function () {
			var self = this, interval;

			this.set( 'date', new Date() );

			interval = setInterval( function () {
				self.set( 'date', new Date() );
			});

			this.on( 'teardown', function () {
				clearInterval( interval );
			});
		}
	};

  if ( typeof component.exports === "object" ) {
    for ( __prop__ in component.exports ) {
      if ( component.exports.hasOwnProperty(__prop__) ) {
        __options__[__prop__] = component.exports[__prop__];
      }
    }
  }

  __export__ = Ractive.extend( __options__ );
return __export__;
});