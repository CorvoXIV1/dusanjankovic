function dati () {

let input = document.getElementById("input").value;

if (input) {

document.getElementById("colore").classList  = "colorebotton";
document.getElementById("colore").textContent = "Elimina";
document.getElementById("div").classList = "para";
document.getElementById("NumeroMancante").textContent = "";

for (i=0; i<11 ;i++) {

 

if (i == 0) {

    document.getElementById("output0").textContent = input + " * " + i + " = " + input * i ;
    
   } else if (i == 1) {
   
    document.getElementById("output1").textContent = input + " * " + i + " = " + input * i ;
   }
   
   else if (i == 2) {
   
    document.getElementById("output2").textContent = input + " * " + i + " = " + input * i ;
   }
   
   else if (i == 3) {
   
    document.getElementById("output3").textContent = input + " * " + i + " = " + input * i ;
   }
   
   else if (i == 4) {
   
    document.getElementById("output4").textContent = input + " * " + i + " = " + input * i ;
   }
   
   else if (i == 5) {
   
    document.getElementById("output5").textContent = input + " * " + i + " = " + input * i ;
   }
   
   else if (i == 6) {
   
    document.getElementById("output6").textContent = input + " * " + i + " = " + input * i ;
   }
   
   else if (i == 6) {
   
    document.getElementById("output7").textContent = input + " * " + i + " = " + input * i ;
   }
   
   else if (i == 7) {
   
    document.getElementById("output8").textContent = input + " * " + i + " = " + input * i ;
   }
   
   else if (i == 8) {
   
    document.getElementById("output9").textContent = input + " * " + i + " = " + input * i ;
   }
   
   else if (i == 9) {
   
    document.getElementById("output10").textContent = input + " * " + i + " = " + input * i ;
 } else {
   
    document.getElementById("output11").textContent = input + " * " + i + " = " + input * i ;
 }

 document.getElementById("input").value = "";
 } 
    
} else {
    
    document.getElementById("colore").classList  = "disabilitato";
    document.getElementById("colore").textContent = "Verifica";
    document.getElementById("colore").disabled  = true;
    document.getElementById("div").classList = "";
    document.getElementById("NumeroMancante").textContent = "Numero necessario per procedere con la verifica."
    


    document.getElementById("output0").textContent = "";
    document.getElementById("output1").textContent = ""; 
    document.getElementById("output2").textContent = "";
    document.getElementById("output3").textContent = "";
    document.getElementById("output4").textContent = "";
    document.getElementById("output5").textContent = "";
    document.getElementById("output6").textContent = "";
    document.getElementById("output7").textContent = ""; 
    document.getElementById("output8").textContent = "";
    document.getElementById("output9").textContent = ""; 
    document.getElementById("output10").textContent = "";
    document.getElementById("output11").textContent = "";

}} 


let inputValue;

input.addEventListener("input", function() {

    inputValue = input.value;

if (inputValue) {

    document.getElementById("colore").classList  = "colorebottone";
    document.getElementById("colore").textContent = "Verifica";
    document.getElementById("NumeroMancante").textContent = "";
    document.getElementById("colore").disabled  = false;

} else {
    document.getElementById("colore").disabled  = true;
    document.getElementById("colore").classList  = "disabilitato";
    document.getElementById("NumeroMancante").textContent = "Numero necessario per procedere con la verifica."

}});




