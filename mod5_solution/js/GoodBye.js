
(function(window){
	var Byespeaker={};
	var speakWord="Good Bye";

	Byespeaker.speak=function (name) {
   console.log(speakWord + " " + name);
}
window.Byespeaker=Byespeaker;
})(window);

