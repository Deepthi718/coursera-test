(function(window){
 var Somugreeter={};
 Somugreeter.name="Somu";
 var greeting="Hi ";
 Somugreeter.sayHi=function() {
	// body...
	 console.log(greeting + Somugreeter.name);
}	
window.Somugreeter=Somugreeter;

})(window);


