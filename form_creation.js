function createForm(){ 
//creare formular

	var f = document.createElement("form");

//creare input-uri pentru formular
var lN=document.createElement("LABEL");
lN.innerHTML = "Nume";
lN.setAttribute('for',"firstname");

var iN = document.createElement("input"); //input element
iN.setAttribute('type',"text");
iN.setAttribute('name',"firstname");
iN.setAttribute('id',"fname");
iN.setAttribute('placeholder',"Numele tau..");

var lP=document.createElement("LABEL");
lP.innerHTML = "Prenume";
lP.setAttribute('for',"lastname");

var iP = document.createElement("input"); //input element
iP.setAttribute('type',"text");
iP.setAttribute('name',"lastname");
iP.setAttribute('id',"lname");
iP.setAttribute('placeholder',"Prenumele tau..");

//inputurile pentru newline
var mybr0 = document.createElement('br');
var mybr1 = document.createElement('br');
var mybr2 = document.createElement('br');
var mybr3 = document.createElement('br');
var mybr4 = document.createElement('br');
var mybr5 = document.createElement('br');
var mybr6 = document.createElement('br');
var mybr7 = document.createElement('br');
var mybr8 = document.createElement('br');
var mybr9 = document.createElement('br');
var mybr10 = document.createElement('br');
var mybr11 = document.createElement('br');
var mybr12 = document.createElement('br');
var mybr13= document.createElement('br');
var mybr14 = document.createElement('br');
var mybr15 = document.createElement('br');
var mybr16 = document.createElement('br');
var mybr17= document.createElement('br');
var mybr18 = document.createElement('br');
var mybr19 = document.createElement('br');
var mybr20 = document.createElement('br');

var C=document.createElement("LABEL");
C.innerHTML = "Cursul ales";
C.setAttribute('for',"curs");
//radio choice
var iC1= document.createElement("input"); //input element
iC1.setAttribute('type',"radio");
iC1.setAttribute('name',"curs");
iC1.setAttribute('value',"balet");
iC1.setAttribute('checked',"true");

var iC2= document.createElement("input"); //input element
iC2.setAttribute('type',"radio");
iC2.setAttribute('name',"curs");
iC2.setAttribute('value',"individual");

var iC3= document.createElement("input"); //input element
iC3.setAttribute('type',"radio");
iC3.setAttribute('name',"curs");
iC3.setAttribute('value',"contemporan");

var iC4= document.createElement("input"); //input element
iC4.setAttribute('type',"radio");
iC4.setAttribute('name',"curs");
iC4.setAttribute('value',"dans modern");

var iC1Label = document.createElement("span");
iC1Label.innerHTML = "Balet copii";

var iC2Label = document.createElement("span");
iC2Label.innerHTML = "Curs individual";

var iC3Label = document.createElement("span");
iC3Label.innerHTML = "Dans Contemporan";

var iC4Label = document.createElement("span");
iC4Label.innerHTML = "Dans Modern";

//input si label email
var E=document.createElement("LABEL");
E.innerHTML = "Email-ul ";
E.setAttribute('for',"emailaddress");

var iE = document.createElement("input"); //input element
iE.setAttribute('type',"email");
iE.setAttribute('id',"email_address");
iE.setAttribute('name',"emailaddress");
iE.setAttribute('placeholder'," Email-ul..");
//input si label password
var P=document.createElement("LABEL");
P.innerHTML = "Parola  ";
P.setAttribute('for',"passwd");

var iPasswd = document.createElement("input"); //input element
iPasswd.setAttribute('type',"password");
iPasswd.setAttribute('name',"passwd");
iPasswd.setAttribute('placeholder'," Parola..");
iPasswd.setAttribute('id',"passwd");


var para=document.createElement("span");
para.setAttribute('id',"para_valid");
para.innerHTML="The password is not correct";
para.setAttribute('className',"validate hidden"); 

//drop down choice--->select
var lNivel=document.createElement("LABEL");
lNivel.innerHTML = "Nivel ";
lNivel.setAttribute('for',"nivel");


var selectNivel=document.createElement("select");
selectNivel.setAttribute('id',"nivel");
selectNivel.setAttribute('name',"nivel");

var opN1=document.createElement("option");
opN1.innerHTML="Incepator";


selectNivel.appendChild(opN1);

var opN2=document.createElement("option");
opN2.innerHTML="Mediu";


selectNivel.appendChild(opN2);

var opN3=document.createElement("option");
opN3.innerHTML="Avansat";


selectNivel.appendChild(opN3);
//label si input checkbox
var lAbonament=document.createElement("LABEL");
lAbonament.innerHTML = "Tipul Abonamentului ";
lAbonament.setAttribute('for',"abonament");

var ich1 = document.createElement("input"); //input element
ich1.innerHTML="8 sedinte/saptamana";
ich1.setAttribute('type',"checkbox");
ich1.setAttribute('name',"abonament");
ich1.setAttribute('value',"8 sedinte");

var ich2 = document.createElement("input"); //input element
ich2.innerHTML="24 sedinte/saptamana";
ich2.setAttribute('type',"checkbox");
ich2.setAttribute('name',"abonament");
ich2.setAttribute('value',"24 sedinte");

var ich3 = document.createElement("input"); //input element
ich3.innerHTML="32 sedinte/saptamana";
ich3.setAttribute('type',"checkbox");
ich3.setAttribute('name',"abonament");
ich3.setAttribute('value',"32 sedinte");


var iA1Label = document.createElement("span");
iA1Label.innerHTML = "8 sedinte/saptamana";

var iA2Label = document.createElement("span");
iA2Label.innerHTML = "24 sedinte/saptamana";

var iA3Label = document.createElement("span");
iA3Label.innerHTML = "32 sedinte/saptamana";

//label si input range
var lRange=document.createElement("LABEL");
lRange.innerHTML = "Feedback accesibilitate site ";
lRange.setAttribute('for',"feedback");

var irange = document.createElement("input"); //input element
irange.setAttribute('type',"range");
irange.setAttribute('name',"feedback");
irange.setAttribute('min',"1");
irange.setAttribute('max',"100");
irange.setAttribute('value',"50");

var submit = document.createElement("input");
submit.setAttribute('value', "Inscrie-te");
submit.setAttribute('type',"button");
submit.setAttribute('id', "button_submit");
submit.setAttribute('onclick', "validate()");

//adaugarea in formular a tuturor input-urilor

f.appendChild(lN);
f.appendChild(iN);
f.appendChild(lP);
f.appendChild(iP);

f.appendChild(C);
f.appendChild(mybr0);
f.appendChild(iC1);
f.appendChild(iC1Label);
f.appendChild(mybr1);
f.appendChild(iC2);
f.appendChild(iC2Label);
f.appendChild(mybr2);
f.appendChild(iC3);
f.appendChild(iC3Label);
f.appendChild(mybr3);
f.appendChild(iC4);
f.appendChild(iC4Label);
f.appendChild(mybr4);
f.appendChild(mybr5);
f.appendChild(E);
f.appendChild(mybr6);
f.appendChild(iE);
f.appendChild(mybr7);
f.appendChild(mybr8);
f.appendChild(P);
f.appendChild(mybr9);
f.appendChild(iPasswd);
f.appendChild(mybr10);
f.appendChild(para);
f.appendChild(mybr11);
f.appendChild(lNivel)
f.appendChild(selectNivel);
f.appendChild(mybr12);
f.appendChild(lAbonament);
f.appendChild(mybr13);
f.appendChild(ich1);
f.appendChild(iA1Label);
f.appendChild(mybr14);
f.appendChild(ich2);
f.appendChild(iA2Label);
f.appendChild(mybr15);
f.appendChild(ich3);
f.appendChild(iA3Label);
f.appendChild(mybr16);
f.appendChild(lRange);
f.appendChild(mybr17);
f.appendChild(mybr18);
f.appendChild(irange);
f.appendChild(mybr20);
f.appendChild(submit);
//adaugarea formularului 
document.getElementById('form_container').appendChild(f);

//stocarea clientilor 
// var client = {
//   firstName: document.getElementById('fname').value, 
//   lastName:  document.getElementById('lname').value,
//   email: document.getElementById('email_address').value 
 
// };

// var clients= new Array();
// clients.push(client);
// localStorage.setItem("prof", JSON.stringify(clients));
// var cli=localStorage.getItem("prof");

// document.body.addEventListener("keyup", function(event){  
// 	var tasta = event.key;
// 	if (tasta === "Escape"){
// 		console.log(cli);

// 	}
	
// });





};

window.onload=createForm;

// function instantValidationHidden(input, regex, errorClass) {
// 	const errorText = document.querySelector(errorClass); 
// 	if (input.value.match(regex)){
// 		errorText.classList.add("hidden");
// 	} else {
// 		errorText.classList.remove("hidden");
// 	}
// }

// const events = ["keypress", "keyup"];
// events.forEach(function (event){
// 	iPasswd = document.getElementById("passwd");
// 	iPasswd.addEventListener(event, function (){
// 		instantValidationHidden(this, regex_passwd, ".validate");
// 	});
	
// });

//stoarea cleintilor inscrisi


//validarea parolei si a emailului
var regex_passwd=/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/; 
function validate()
{
  var email = document.getElementById('email_address').value;
  var regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  var emailResult =  regex.test(String(email).toLowerCase());


  var pssword=document.getElementById('passwd ');
  
  var passwdResult=regex_passwd.test(String(passwd));
  
  alert("email: "+ emailResult + "password:" + passwdResult);


  
}

//creare cronometru 

var h=0;
var m=0;
var s=0;
function to_start(){

switch(document.getElementById('btn').value)
{
case  'Stop':
window.clearInterval(tm); // stop the timer 
document.getElementById('btn').value='Start';
break;
case  'Start':
tm=window.setInterval('disp()',1000);
document.getElementById('btn').value='Stop';
break;
}
}


function disp(){
// Format the output by adding 0 if it is single digit //
if(s<10){var s1='0' + s;}
else{var s1=s;}
if(m<10){var m1='0' + m;}
else{var m1=m;}
if(h<10){var h1='0' + h;}
else{var h1=h;}
// Display the output //
str= h1 + ':' + m1 +':' + s1 ;
document.getElementById('n1').innerHTML=str;
// Calculate the stop watch // 
if(s<59){ 
s=s+1;
}else{
s=0;
m=m+1;
if(m==60){
m=0;
h=h+1;
} // end if  m ==60
}// end if else s < 59
// end of calculation for next display

}




