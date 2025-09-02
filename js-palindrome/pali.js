// Chiedere all'utente di inserire una parola
let word = prompt ("Inserisci una parola");

// Invocare una funzione per invertire la parola scritta e verificare che sia palindroma
function palindrome(parola) {

    //rendere la parola tutta minuscola in modo da facilitare il confronto
    parola = parola.toLowerCase();
    //var di stringa invertita
    let revertedWord = "";

    //ciclo la stringa
    for (let i = parola.length - 1; i >= 0; i--){
        let lettera = parola[i];
        
        revertedWord += lettera;
    }
    //verificare se la parola è palindroma con true o false
    return parola === revertedWord;
}
// Mandare true o false in console
console.log(palindrome(word))

// Chiamare la funzione e mandare in console il risultato
if (palindrome(word)){
    console.log("La parola è palindroma")
} else {
    console.log("La parola non è palindroma")
}