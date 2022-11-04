"use strict"
// FUNCTIONS
function getRndInteger (min, max) {
    return Math.floor(Math.random()*(max-min+1))+min;
}

// creo un array di 5 numeri da 1 a 100 senza duplicati
const listNumbers= [];
while (listNumbers.length<5){
   const numberRandom = getRndInteger(1,100)
  // se il numero non è presente nell'arrey allora lo pusho
  if(listNumbers.includes(numberRandom)=== false){
    listNumbers.push(numberRandom)
  }
}
document.getElementById("simonSays").innerHTML=  listNumbers


// Da lì parte un timer di 30 secondi.
// Dopo 30 secondi i numeri scompaiono e l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.