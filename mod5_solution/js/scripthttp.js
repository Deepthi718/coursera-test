

document.addEventListener("DOMContentLoaded",
  function (event) {

  	// Unobstrusive event binding
  	document.querySelector("button")
  	 .addEventListener("click",function(){
  	 	
  	 	//call server to get the name
  	 	$ajaxUtils
  	 	   .sendGetRequest("/data/name1.json",
  	 	   	function(res){
               var message=
                 res.firstname + " "+res.Lastname;
                 if(res.likesCineseFood){
                 	message+="likes chinese food";
                 }
                 else{
                 	message+=" does not like chinese food";
                 }
                 message+=" and uses ";
                 message+=res.numberofdisplay;
                 message+=" displays for coding. ";


  	 	   		
  	 	   		document.querySelector("#content")
  	 	        .innerHTML="<h2> "+message +"</h2>";
  	 	   	});

  	 	   
  	 });
  }
);