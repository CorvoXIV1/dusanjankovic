


function Calcolo () {





let Capitale = document.getElementById("input").value;
let Interessi = parseInt(Capitale) * 5 / 100;
let Montante =  Interessi + parseInt(Capitale)



if (Capitale) {

    document.getElementById("para").textContent= "Capitale + Interessi(5%):" + " " +   Montante;
    document.getElementById("input").value = "";

} else if (Capitale === ""){

    document.getElementById("para").innerHTML= " Numero richiesto per il calcolo degli interessi. </br> Procedre all'inserimento nel form sovrastante.";

}}


function bgimg1 () {
    document.body.style.backgroundImage = "url(https://wallpaperaccess.com/full/7270362.gif)";
  
}

function bgimg2 () {

    document.body.style.backgroundImage = "url(https://wallpaperaccess.com/full/8088686.gif)";
} 

function bgimg3 () {

    document.body.style.backgroundImage = "url(https://wallpaperaccess.com/full/8406766.gif)";
}


let contatore = 50;

for (let  i=contatore; i >= 0; i--) {

    console.log(i)
}

