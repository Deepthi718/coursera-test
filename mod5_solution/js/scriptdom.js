document.addEventListener("DOMContentLoaded",
  function(event){
  	function sayHello(event){
	var name=document.getElementById("name").value;
	this.textContent="Said It!";

	var msg="<h2>Hello "+ name +"!</h2>";
	//document.getElementById("content").textContent=msg;
   document.getElementById("content")
           .innerHTML=msg;

    if(name==="student"){
    	var title=document.querySelector("#title")
    	.textContent;
    	title +=" & iam loving it!";

    	var title=document.querySelector("#title")
    	.textContent=title;

    }


}

//Unobstructive event binding
   document.querySelector("button")
        .addEventListener("click",sayHello);

// document.querySelector("button")
//         .onclick=sayHello;

document.querySelector("body")
        .addEventListener("mousemove",
         function(event){
         	if(event.shiftKey===true){
         		console.log("x : "+ event.clientX);
         		console.log("y : "+event.clientY);
         	}
         }


        );

    }

);


