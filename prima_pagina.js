var myVar = setInterval(myTimer, 1000);
//creare ceas pentru pagina principala stanga jos
function myTimer() {
  var date = new Date();
  var time = date.toLocaleTimeString();
  document.getElementById("clock").innerHTML = time;
}

//functia pentru schimbarea si oprirea unei culori dorite
var timeout = null;
function changeBackgroundColor(){
	var x = Math.floor(Math.random() * 256);
    var y = Math.floor(Math.random() * 256);
    var z = Math.floor(Math.random() * 256);
    var bgColor = "rgb(" + x + "," + y + "," + z + ")";
	//console.log(bgColor);
  
    document.body.style.background = bgColor;
	timeout = setTimeout(changeBackgroundColor, 5000); //setTimeout returneaza id-ul timeout-ului.
}

changeBackgroundColor();
var buton = document.createElement("button");
buton.innerHTML = "Seteaza culoarea!";

document.body.appendChild(buton);

buton.addEventListener("click", function(){
	
	clearTimeout(timeout);
})


//creare functie ca atunci cand se apasa delete sa dispara fluturele de pe prima pagina
document.body.addEventListener("keyup", function(event){  
  
  if(event.keyCode === 46)
  {
    var element = document.getElementById("animation_img");
      element.parentElement.removeChild(element);
  }
});

