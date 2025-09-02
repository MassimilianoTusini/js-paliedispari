// Funzione per generare numero casuale da 1 a 5
function numCasual(){
    return Math.floor(Math.random() * 5) + 1;
}

// Funzione per dichiarare il risultato se è pari o dispari
function pariDispari (num){
    if (num % 2 === 0) {
        return "pari";
    } else {
        return "dispari";
    }
}

// Chiedere all'utente il numero e la scelta di pari e dispari
let userNum = parseInt(prompt("Inserisci un numero da 1 a 5"));
let userChoice = prompt("Scegli fra pari e dispari").toLowerCase();

//Mandare a console le scelte dell'utente
console.log(`Il numero dell'utente è: ${userNum}`)
console.log(`La scelta dell'utente è: ${userChoice}`)

// Generare il numero casuale del PC
let numPc = numCasual();
console.log("Il numero del computer è:",numPc)

//Sommare i numeri dell'utente e del PC
let somma = userNum + numPc;

//Variabile per richiamare la funzione
let risultato = pariDispari(somma);

//Stampare il risultato e dichiarare il vincitore3

if (risultato === userChoice){
    console.log("Vince L'utente")
} else {
    console.log("Vince il PC")
}