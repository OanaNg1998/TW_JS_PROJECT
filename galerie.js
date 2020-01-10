//cand butonul mai multe este apasat,cu ajutorul api ului deja creat apar alte functii in fereastra noastra  
 var button=document.getElementById("input_galerie");
button.addEventListener("click", function(){
$.get("https://jsonplaceholder.typicode.com/photos")
    .done(function(response) {
        console.log( "s-a terminat cu bine",response);
       
        response.forEach(function(element){
		var imagine = document.createElement("img");
		imagine.src = element.url;
		imagine.title = element.title;
		// document.body.appendChild(imagine);
		 document.getElementById("div_ajax").appendChild(imagine);
	})

    })
    .fail(function(error) {
        console.log( "error",error);
    })
    .always(function() {
        console.log( "Cod-ul din .always se apeleaza de fiecare data, indiferent daca request-ul a fost cu success sau cu fail" );
    }); 
},false);


//adaugare si creare element audio
audio2=document.createElement("audio");
audio2.id="audio2";
audio2.setAttribute("src","melodie_2.wav");
audio2.setAttribute("controls","controls");

document.getElementById("audio_songs").appendChild(audio2);



//adaugare si creare element video

let video =document.createElement("iframe");
video.src ="https://www.valleynewslive.com/templates/2015_Sub_Video_Share?contentObj=502187301";
video.id="ballet_video";
video.setAttribute('allowFullScreen','');
video.setAttribute('style',"margin-left: 28% ;border: none;");
video.setAttribute('width',"500px");
video.setAttribute('height',"500px");
document.body.appendChild(video);



