// Il computer deve generare 16 numeri casuali tra 1 e 100.
// In seguito deve chiedere all’utente di inserire un numero alla volta, sempre compreso tra 1 e 100.
// Se il numero è presente nella lista dei numeri generati, la partita termina, altrimenti si continua chiedendo all’utente un altro numero.
// La partita termina quando il giocatore inserisce un numero “vietato” o raggiunge il numero massimo possibile di numeri consentiti.
// Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito.
// BONUS: all’inizio il software richiede anche una difficoltà all’utente che cambia il range di numeri casuali.
// Con difficoltà 0=> tra 1 e 100, con difficoltà 1 => tra 1 e 80, con difficoltà 2=> tra 1 e 50

// Dichiaro le variabili che fungeranno da attributi per la funzione che genera i numeri casuali
var num1 = 1;
var num2 = 100;

// Facciamo scegliere il livello di difficoltà tra "facile" , "normale" , "difficile"
var livelloDiDifficoltà = prompt("Scegli il livello di difficolta tra facile, normale, difficile");

// Verifico che l utente inserisca solamente le 3 possibili varianti di difficolta altrimenti faccio ripetere
while (livelloDiDifficoltà != 'facile' && livelloDiDifficoltà != 'normale' && livelloDiDifficoltà != 'difficile' ) {
  livelloDiDifficoltà = prompt("Scegli il livello di difficolta tra facile, normale, difficile");
}

// In base alla difficolta scelta vado a impostare gli attributi num 1 e num2 che determinano il range nel quale generare i miei numeri
switch (livelloDiDifficoltà) {
  case 'facile':
    num2 = 100; // range tra 1 e 100
    break;
  case 'normale':
    num2 = 80; // range tra 1 e 80
    break;
  case 'difficile':
    num2 = 50; // range tra 1 e 50
    break;
}

// Generiamo 16 numeri casuali tra 1 e un numero scelto dall utente
// Creo un array dove inserire i 16 numeri
arrayNumeri = [];
console.log(arrayNumeri);

var contRandom = 0;
while (contRandom < 16 ) {
  pusha(); //lancio la funzione che mi pusha i numeri all interno della array
  contRandom++;
}

// Chiediamo all utente un numero tra 1 e 100
var condizione = false;

var contUtente = 0;
while (contUtente <= 84 && condizione == false) {
  var numeroUtente = prompt("Dimmi un numero");
  while (isNaN(numeroUtente)) { // verifico che l utente inserisca un numero e non altri caratteri
    numeroUtente = prompt("Dimmi un numero");
  }
  controllo(numeroUtente);
  contUtente++;
}

// Verifichiamo se l utente ha vinto/perso e restituiamo un messaggio
if (condizione == true) {
  var messaggio = 'Il gioco e finito';
}
else if (contUtente >= 85) {
  var messaggio = 'Hai vinto';
}

console.log(messaggio);

// Funzioni

// Funzione che controlla che il numero inserito dall utente corrisponda a quelli generati dal computer
function controllo(numero) {
  var i = 0;
  while (i < 85) {
    if (arrayNumeri[i] == numero) {
      condizione = true;
      console.log("Hai preso una bomba! Sei riuscito a fare " + contUtente + " tentativi");
    }
  i++;
  }
}

// Funzione che genera numeri random
function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

// Funzione che pusha numeri all interno dell array e verifica che non ci siano doppioni
function pusha() {
  var numeroRandom = getRndInteger(num1, num2);
  if (!(arrayNumeri.includes(numeroRandom))) {
    arrayNumeri.push(numeroRandom);
  }
  else {
    return pusha();
  }
}
