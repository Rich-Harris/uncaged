define([
	"./clock",
	"./header",
	"require",
	"ractive"
], function(
	__import0__,
	__import1__,
	require,
	Ractive
){
var __options__ = {
	template: {v:1,t:[{t:7,e:"div",a:{"class":"gia"},f:[{t:7,e:"header"}," ",{t:7,e:"clock"}]}]},
	css:".gia{max-width:960px;margin:2em auto}",
	components:{	clock: __import0__,
	header: __import1__}
},
component={},
__prop__,
__export__;__export__ = Ractive.extend( __options__ );
return __export__;
});