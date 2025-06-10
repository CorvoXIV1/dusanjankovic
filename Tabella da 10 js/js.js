let n;  // Dichiarazione della variabile n.

document.write("<table>")  // Creazione del tag di apertura della "Tabella".

document.write("<tr>"); // Creazione del tag di apertura della "Riga".
for (let i = 1; i < 6; i++) {   // Il ciclo di dati inseriti dall'utente e creazione delle colonne a ogni ciclo, di un numero totale di 5.

n = window.prompt(Number("Inserire il " + i + " Numero:"))   // Input per l'inserimento dei dati dall'utente.


if (n == "" || n === null) {
    document.write("<td style='background-color:black;color:black;'>"); 
    document.write(n)         
    document.write("</td>");  
}

else if ( n % 2) {   // Condizioe di verifica qualora il numero inserito dall'utente è "Pari o Dispari".
document.write("<td style='background-color:red;color:white;'>");   // Creazione del tag di apertura della "Colonna".
document.write(n)         // Scrittura del dato contenuto nella variabile "n".
document.write("</td>");  // Creazione del tag di chiusura della "Colonna".
} else {
document.write("<td style='background-color:green;color:white'>");   // Creazione del tag di apertura della "Colonna".
document.write(n)         // Scrittura del dato contenuto nella variabile "n".
document.write("</td>");  // Creazione del tag di chiusura della "Colonna".
}}

document.write("</tr>");  // Creazione del tag di chiusura della "Riga".
document.write("<tr>");   // Creazione del tag di apertura della "Riga".

for (let i = 6; i < 11; i++) {   // Il ciclo di dati inseriti dall'utente e creazione delle colonne a ogni ciclo di un numero totale di 5.

n = window.prompt(Number("Inserire il " + i + " Numero:"))   // Input per l'inserimento dei dati dall'utente.

if (n == "" || n === null) {
    document.write("<td style='background-color:black;color:black;'>"); 
    document.write(n)         
    document.write("</td>");  
}

else if ( n % 2) {  // Condizioe di verifica qualora il numero inserito dall'utente è "Pari o Dispari".
document.write("<td style='background-color:red;color:white;'>");   // Creazione del tag di apertura della "Colonna".
document.write(n)         // Scrittura del dato contenuto nella variabile "n".
document.write("</td>");  // Creazione del tag di chiusura della "Colonna".
} else {  
document.write("<td style='background-color:green;color:white'>");   // Creazione del tag di apertura della "Colonna".
document.write(n)         // Scrittura del dato contenuto nella variabile "n".
document.write("</td>");  // Creazione del tag di chiusura della "Colonna".
}}

document.write("</tr>");  // Creazione del tag di chiusura della "Riga".



document.write("</table>")  // Creazione del tag di chiusura della "Tabella".