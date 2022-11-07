"use strict"
// FUNCTIONS
function getRndInteger (min, max) {
    return Math.floor(Math.random()*(max-min+1))+min;
}

// creo un array di 5 numeri da 1 a 100 senza duplicati
const listNumbers= [];
const numbersElement = document.getElementById("simonSays")

while (listNumbers.length<5){
   const numberRandom = getRndInteger(1,100)
  // se il numero non è presente nell'arrey allora lo pusho
  if(listNumbers.includes(numberRandom)=== false){
    listNumbers.push(numberRandom)
  }
}
// stampo nella pagina HTML l'arrey dei numeri
numbersElement.innerHTML= listNumbers

// parte il timer di 30 secondi

 const timer = 3
setInterval (function (){
     if(second === 0){
        clearInterval("simonSays")
     } else{
         console.log(second);
         second--;
     }
 }, 1000);

// chiedo all'utente di inseirire , uno alla volta, i numeri che ha visto precedentemente
setTimeout(function (){
    numbersElement.remove();
    const numbersGuessed= [];
    for(let i=1; i<5; i++){
        const listNumbers = Number(prompt("inserirsci il numero che hai visto precedentemente"));
      if(listNumbers.includes(numberRandom) && !numbersGuessed.includes(numberRandom)){
        numbersGuessed.push(numberRandom)
      }
    }
})




