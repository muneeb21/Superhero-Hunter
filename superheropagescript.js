	console.log("yoyoyo");
  	var superhero=localStorage.getItem("superhero-name");
		console.log(superhero);
		document.getElementById("title").innerHTML =localStorage.getItem("superhero-name");
		var xhrRequest=new XMLHttpRequest();
     xhrRequest.onload= function(){
     	console.log(xhrRequest.response);
     	var responseJSON=JSON.parse(xhrRequest.response);
     	
     	
           var x=responseJSON.results;
           var len=x.length;
           var imageUrl=x[len-1].image.url;
           
           document.getElementById("hero-image").style.height = "450px";
           document.getElementById("hero-image").style.width = "350px";
       
           
           document.getElementById("hero-image").setAttribute("src",imageUrl);
           var biography=responseJSON.results[0].biography;
           var k=0;
           for(var i in biography){
              if(k>=2){
              	break;
              }
              // console.log(i,powerstats[i]);
           	var element=biography[i];
           	var object_name=i+" :     ";
           	var t2=document.createTextNode(element);
            var t1=document.createTextNode(object_name);
            var span1 = document.createElement("span");
            var span2= document.createElement("span");
           	// console.log(text);
            span1.appendChild(t1);span1.className="span1";
            span2.appendChild(t2);span2.className="span2";
            var info = document.createElement("DIV");
             info.className="info";
             info.appendChild(span1);
             info.appendChild(span2);
             document.getElementById("info-div").appendChild(info);
             k++;

           }

           var powerstats=responseJSON.results[0].powerstats;
           

           for(var i in powerstats){
           	
           	// console.log(i,powerstats[i]);
           	var element=powerstats[i];
           	var object_name=i+" :     ";
           	// console.log(element);
           	
            var t2=document.createTextNode(element);
            var t1=document.createTextNode(object_name);
            var span1 = document.createElement("span");
            var span2= document.createElement("span");
             span1.appendChild(t1);span1.className="span1";
            span2.appendChild(t2);span2.className="span2";
           	// console.log(text);
            span1.appendChild(t1);
            span2.appendChild(t2);
            var info = document.createElement("DIV");
             info.className="info";
             info.appendChild(span1);
             info.appendChild(span2);
             document.getElementById("info-div").appendChild(info);

           }
     	
     };
     var string="https://superheroapi.com/api.php/3076078909145759/search/"+superhero;
     xhrRequest.open('get',string);
     xhrRequest.send();