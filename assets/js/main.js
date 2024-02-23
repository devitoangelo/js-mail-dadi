

//Lista partecipanti
let list = [
    "Mario@esempio.it",
    "angelo@esempio.it",
    "fabio@esempio.it",
];


// Chiedi all’utente la sua email
let userEmail = prompt("Scrivi la tua mail")



// Valore booleano
let autorizzato = false;


// Ciclo
for (let i = 0; i < list.length; i++) {
    const email = list[i];
    console.log(email, userEmail, email === userEmail);

    if (email === userEmail) {
        autorizzato = true
    }
}



if (autorizzato) {
    console.log("benvenuto", userEmail);


}else {
    console.log("Non autorizzato");
}






// Esercizio 2 
// Genera un numero casuale da 1 a 6
let numeroCasuale = Math.floor(Math.random() * 6) + 1;
console.log(numeroCasuale);

let numeroCasuale2 = Math.floor(Math.random() * 6) + 1;
console.log(numeroCasuale2);

// se il numero è piu grande 
if (numeroCasuale < numeroCasuale2) {
    console.log(" vinto il computer");
    //altrimenti se più piccolo
} else if (numeroCasuale > numeroCasuale2) {
    console.log("vinto il giocatore");

} else {
    console.log("pareggio");
}







