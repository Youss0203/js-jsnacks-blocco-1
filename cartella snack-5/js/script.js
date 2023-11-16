/*L'utente inserisce due parole in successione, con due prompt.
Il software stampa prima la parola più corta, poi la parola più lunga.*/



const firstWord = prompt("scrivi una parola che vuoi");
const secondWord = prompt("scrivi un' altra parola che vuoi");


if(firstWord.length > secondWord.length){
    console.log(firstWord,secondWord)
}else if(firstWord.length<secondWord.length){
    console.log(secondWord,firstWord)
}