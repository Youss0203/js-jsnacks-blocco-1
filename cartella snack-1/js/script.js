const primaPersona = parseInt(prompt("scrivi la tua età"));
const secondaPersona = parseInt(prompt("scrivi la tua età"));

if (primaPersona > secondaPersona){
    console.log("scrivi che prima persona è più grande", primaPersona)
}

else if (primaPersona < secondaPersona) {
    console.log("scrivi che seconda persona è più grande", secondaPersona)
}

else {
    console.log("hanno la stessa età" , primaPersona,secondaPersona)
}

