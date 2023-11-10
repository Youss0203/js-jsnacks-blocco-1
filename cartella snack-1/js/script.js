const primaPersona = prompt("scrivi la tua età");
const secondaPersona = prompt("scrivi la tua età");

if (primaPersona > secondaPersona){
    console.log("scrivi che prima persona è più grande", primaPersona)
};

elseif (primaPersona < secondaPersona){
    console.log("scrivi che seconda persona è più grande", secondaPersona)
};

else{
    console.log("hanno la stessa età", primaPersona, secondaPersona)
};