console.log("yo");
 var superhero_array=[];
		var superhero_array_element="error";
		var element_to_be_added="error";

    function newSearch(){
     var inputValue = document.getElementById("myInput").value;
     var xhrRequest=new XMLHttpRequest();
     xhrRequest.onload= function(){
     	console.log(xhrRequest.response);
     	var responseJSON=JSON.parse(xhrRequest.response);
     	var check=responseJSON.response;
     	if(check=='error'){
          alert("You must write a valid superhero!");
     	}
     	else{
     		superhero_array_element=inputValue;
     		element_to_be_added=inputValue;
           var x=responseJSON.results;
           var len=x.length;
           var imageUrl=x[len-1].image.url;
           if (typeof(Storage) !== "undefined"){
           localStorage.setItem("superhero-name", inputValue);
           console.log("does support");
           
       }
           else{
           	console.log("does not support");
           }
           document.getElementById("superhero-image").style.height = "400px";
           document.getElementById("superhero-image").style.width = "300px";
           document.getElementById("add-to-favorite").style.visibility="visible";
           document.getElementById("my-favorites").style.visibility="visible";
           document.getElementById("superhero-image").setAttribute("src",imageUrl);
     	}
     };
     var string="https://superheroapi.com/api.php/3076078909145759/search/"+inputValue;
     xhrRequest.open('get',string);
     xhrRequest.send();
    }
   
   function addHero(){
   	   if(element_to_be_added=="error"){
   	   	alert("Invalid request");
   	   }
   	   else{
   	   	localStorage.setItem("element_to_be_added",element_to_be_added);
   	   }
   	        if(superhero_array_element=="error"){
   	        	alert("Not Valid");
   	        }
   	        else{
   	        	
   	        	if (localStorage.getItem("superhero_array") === null) {
   	        		superhero_array.push(superhero_array_element);
               localStorage.setItem("superhero_array", JSON.stringify(superhero_array)); 
                 }
   	        	else{

   	        		var retrievedData = localStorage.getItem("superhero_array");
   	        		var temp_array = JSON.parse(retrievedData);
   	        		// console.log(retrievedDataaaa);
   	        		var check=0;
   	        		for(var i=0;i<temp_array.length;i++){
   	        			if(temp_array[i]===superhero_array_element){
   	        				check=1;break;
   	        			}
   	        		}
   	        		if(check===0){
                    temp_array.push(superhero_array_element);}
                    else{
                    	alert("Already Added");
                    }
                  localStorage.setItem("superhero_array", JSON.stringify(temp_array));  

   	        	}
   	        	console.log(localStorage.getItem("superhero_array"));
           	
           }
           }
    