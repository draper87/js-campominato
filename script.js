// Il computer deve generare 16 numeri casuali tra 1 e 100.
// In seguito deve chiedere all’utente di inserire un numero alla volta, sempre compreso tra 1 e 100.
// Se il numero è presente nella lista dei numeri generati, la partita termina, altrimenti si continua chiedendo all’utente un altro numero.
// La partita termina quando il giocatore inserisce un numero “vietato” o raggiunge il numero massimo possibile di numeri consentiti.
// Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito.
// BONUS: all’inizio il software richiede anche una difficoltà all’utente che cambia il range di numeri casuali.
// Con difficoltà 0=> tra 1 e 100, con difficoltà 1 => tra 1 e 80, con difficoltà 2=> tra 1 e 50

// Generiamo 16 numeri casuali tra 1 e 100
var z = 0;

arrayNumeri = [];


while (z < 16 ) {
  var numeroRandom = getRndInteger(1, 100);
  console.log(numeroRandom);
  function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
  }
  arrayNumeri.push(numeroRandom);
  z++;
}

// Chiediamo all utente un numero tra 1 e 100
var condizione = false;

var y = 0;
while (y < 85 && condizione == false) {
  // console.log("sono entrato");
  var numeroUtente = prompt("Dimmi un numero");
  controllo(numeroUtente);
  y++;
}

if (condizione == true) {
  var messaggio = 'Il gioco e finito';
}
else if (y>=85) {
  var messaggio = 'Hai vinto';
}

6console.log(messaggio);

function controllo(numero) {
  var i = 0;
  while (i < 85) {
    if (arrayNumeri[i] == numero) {
      console.log('HAI BECCATO UNA BOMBA');
      condizione = true;
      console.log("Sei riuscito a fare " + y + " tentativi");
    }
  i++;
  }
}
