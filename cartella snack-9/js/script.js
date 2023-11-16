/*Chiedi all'utente due numeri, uno piu' piccolo (due cifre) e uno piu' grande 
(almeno quattro cifre): moltiplica il primo numero per 2 finche'
 non arriva ad essere maggiore del secondo numero.*/



 const firstNumber =parseInt(prompt("scrivi un numero lungo due cifre"))
 const secondNumber=parseInt(prompt("scrivi un numero lungo 4 cifre"))


let moltiplicazione = firstNumber


for(let i =0; i <= secondNumber; i++){
    if(moltiplicazione < secondNumber){
    moltiplicazione =moltiplicazione*2}
}

console.log(moltiplicazione)