var proffesors= new Array("Adina Badica ", "Anne Marye Sima", "Daian Ionela Popescu","Ana Guther","Raluca Vornicel");
localStorage.setItem("prof", JSON.stringify(proffesors));
var names=localStorage.getItem("prof");
//functie pentru  ca atunci cand apasc esc sa pot vedea numele tuturor profesrilor in consola
document.body.addEventListener("keyup", function(event){  
	var tasta = event.key;
	if (tasta === "Escape"){
		console.log(names);

	}
	//cand tasta a este apasata unul dintre profesori este sters si noul vector cu nume este afisat
	if(event.keyCode === 65)
	{
		proffesors.pop();
		localStorage.setItem("prof", JSON.stringify(proffesors));
		var names=localStorage.getItem("prof");
		console.log(names);
		alert("Un profesor sters!");

	}
});
