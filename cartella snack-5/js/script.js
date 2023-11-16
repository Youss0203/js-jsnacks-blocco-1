/*L'utente inserisce due parole in successione, con due prompt.
Il software stampa prima la parola più corta, poi la parola più lunga.*/



const firstWord = prompt("scrivi una parola che vuoi");
const secondWord = prompt("scrivi un' altra parola che vuoi");

if(firstWord > secondWord){
    console.log(firstWord,secondWord)
}else if(firstWord<secondWord){
    console.log(secondWord,firstWord)
}