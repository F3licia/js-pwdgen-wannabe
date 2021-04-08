
var textName = prompt("Inserisci il tuo nome");
var textSurname = prompt("Inserisci il tuo cognome");
var textColor = prompt("Qual è il tuo colore preferito?");

document.getElementById("user").innerHTML= textName + " " + textSurname;
document.getElementById("info").innerHTML= textColor;