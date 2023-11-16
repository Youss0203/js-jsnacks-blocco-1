/*In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby 
(createlo voi con almeno 5 nomi), 
chiedi all'utente il suo nome e comunicagli se può partecipare o no alla festa. */



const listaInvitati = [
    "David Steckam",
    "la Roccia",
    "Lionel Pessi",
    "Cristiano Matara",
    "Erlingo Halalando",
]


const nomeInvitato = prompt("scrivi il tuo nome")
let risposta = false;


for(let i = 0; i < listaInvitati.length; i++){
    if(nomeInvitato==listaInvitati[i]){
        risposta = true
    }
}
console.log(risposta)