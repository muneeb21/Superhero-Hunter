
console.log("file working");
var retrievedData = localStorage.getItem("superhero_array");
   	        		var superhero_array = JSON.parse(retrievedData);
	
  
   console.log(superhero_array);
//    var filtered = superhero_array.filter(function (el) {
//   return el != null;
// });
//    console.log(filtered);
//    localStorage.setItem("superhero_array", JSON.stringify(filtered));


   for(var i=0;i<superhero_array.length;i++){
   	let heroname=superhero_array[i];
   	console.log(heroname);
   	let xhrRequest=new XMLHttpRequest();
    var string="https://superheroapi.com/api.php/3076078909145759/search/"+ heroname;
     xhrRequest.open('get',string);
     xhrRequest.send();
   	xhrRequest.onload= function(){
     	console.log(xhrRequest.response);
     	
     	
     	var responseJSON=JSON.parse(xhrRequest.response);
     	var check=responseJSON.response;
     	if(check==="success"){
     	 var x=responseJSON.results;
           var len=x.length;
           var imageUrl=x[len-1].image.url;
       
       var whole_div=document.createElement("div");
       whole_div.className="card";
       var text=document.createTextNode(heroname);
       var text_div=document.createElement("div");
       text_div.appendChild(text);
       text_div.className="text_div";
       whole_div.appendChild(text_div);
       var image=document.createElement("img");
       image.className="image";
       image.setAttribute("src",imageUrl);
       // document.getElementById("favorite-items").appendChild(image);
       var image_div=document.createElement("div");
       image_div.appendChild(image);
       whole_div.appendChild(image_div);
       var anchor_div=document.createElement("div");
       var anchor=document.createElement("a");
       anchor.className="button";
       anchor.setAttribute("id","anchor");
       anchor.addEventListener("click",function(){
       	anchor_div.parentElement.style.display="none";

       let name=heroname;
       for(var i=0;i<superhero_array.length;i++){
       	if(name===superhero_array[i])
       	{
       		superhero_array.splice(i,1);

       	}

       }
       localStorage.setItem("superhero_array", JSON.stringify(superhero_array));
       console.log(superhero_array);

       });


       var text1=document.createTextNode("Remove");
       anchor.appendChild(text1);
       anchor_div.appendChild(anchor);
       whole_div.appendChild(anchor_div);
       document.getElementById("favorite-items").appendChild(whole_div);

     	}
     	else{
     		alert("not valid");
     	}
     };

   	 
   }
   // console.log(document.getElementById("anchor").value);



//     var check=document.getElementById("anchor");
//     var i;
// for (i = 0; i < close.length; i++) {
//   close[i].onclick = function() {
//     var element1 = this.parentElement;
//     var element2=element1.parentElement;
//     element2.style.display="none";
//   }
   // function remove(){
   // 	// // var name=document.getElementById("anchor").value;
   // 	// // var element1 = document.getElementById("anchor").parentElement;
   // 	// // var element2=element1.parentElement;
   //  // // element2.style.display = "none";
   //  // console.log("abcd");
   // }