//let ciao = "Ciao a tutti, mi chiamo Dusan, ho 27 anni";
//let Vettore =[ciao, "Bello", "Macchina", "Cicken", "Blyat"]; 
//let Random = Math.round(Math.random() * 4);
let vr1 = new Array(10);
let vr2 = new Array(10);
let NumeroCrescente1 = 0;
let NumeroCrescente2 = 0;




//document.getElementById("demo2").innerHTML = Random;
//document.getElementById("demo").innerHTML = Vettore[Random];

document.write("<table>")

for (let i = 0; i < 10; i++) {
let NumeroRandom1 = Math.round(Math.random() * 90);
NumeroCrescente1 = NumeroCrescente1 + 1
vr1[i]=NumeroRandom1

if (i < 1) {
    
    document.write("<tr>" + "<td style=background-color:red>" + NumeroCrescente1 + ") "+ " " + vr1[i]  +"</td>" + "</tr>") ;
  
} else {
  
    document.write("<tr>" + "<td>" + NumeroCrescente1 + ") "+ " " + vr1[i]  +"</td>" + "</tr>") ;
}

}

document.write("</table>")




document.write("<table>")
document.write("<tr>")
for (let i = 0; i < 10; i++) {
    NumeroCrescente2 = NumeroCrescente2 + 1
    let NumeroRandom2 = Math.round(Math.random() * 90);
    document.write()

    vr2[i]=NumeroRandom2
    document.write( "<td>" + NumeroCrescente2 + ") " + " " + vr2[i] + "</td>") ;

    }

    document.write("</tr>")
    document.write("</table>")
 

    




