/*Chiedi un numero di 7 cifre all'utente e calcola la somma di tutte 
le cifre che compongono il numero.*/



const userNumber =prompt("scrivi un numero che contenga 7 cifre")
const myNumber= userNumber.split("")
let somma=0
for(let i = 0; i< myNumber.length ;i++){
   
    somma = somma + parseInt(myNumber[i]); 
}
console.log(somma)


