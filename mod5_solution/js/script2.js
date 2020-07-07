(function(window){
 var deepgreeter={};
 deepgreeter.name="deep";
 var greeting="Hello ";
 deepgreeter.sayHello=function() {
	console.log(greeting + deepgreeter.name);
}	
window.deepgreeter=deepgreeter;

})(window);

