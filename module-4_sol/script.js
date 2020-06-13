(function () {

var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];


for (var i = 0; i < names.length; i++) {

  
  var firstLetter = names[i].charAt(0).toLowerCase();
  var firstLetter1=names[i].charAt(0).toUpperCase();

  if (firstLetter === 'j') {
    Byespeaker.speak(names[i]);
  }
  else if(firstLetter1==='J'){
  Byespeaker.speak(names[i]);
  }
  else {
    helloSpeaker.speak(names[i]);
  }
}

})();
