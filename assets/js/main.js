// Chiedi all’utente la sua email
let mail = prompt("Scrivi la tua mail")
console.log(mail);


let mailUser = ["angelo", "angelo@esempio.it", "fabio@esempio.it"];
console.log(mailUser);

let autorizzato = mailUser.includes(mail);

// se il suo nome non è all'interno della lista non può accedere

if (autorizzato) {
    console.log("accesso riuscito");
// se il suo nome è all'interno della lista può accedere
} else if (mail != mailUser) {
    console.log("accesso non riuscito");

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
} else if (numeroCasuale2 > numeroCasuale) {
    console.log(" vinto il giocatore");
    //in caso di pareggio 
} else {
    console.log("Pareggio");
}







