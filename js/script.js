// JSnack 1
// L’utente inserisce due parole in successione, con due prompt. 
// Il software stampa prima la parola più corta, poi la parola più lunga.

// parola1
var primaParola = prompt('inserisci la prima parola');
console.log(primaParola);

// parola2
var secondaParola = prompt('inserisci la seconda parola');
console.log(secondaParola);

if (primaParola.length > secondaParola.length) {
    document.getElementById('parola').innerHTML = 'La parola più corta è : ' + secondaParola + '.  La più lunga è : ' +primaParola;
} else if (primaParola.length < secondaParola.length) {
    document.getElementById('parola').innerHTML = 'La parola più corta è : ' + primaParola + '.  La più lunga è : ' +secondaParola;
} else {
    document.getElementById('parola').innerHTML = 'Le due parole hanno la stessa lunghezza'
}


// Jsnack2
// Il software deve chiedere per 5 volte all’utente di inserire un numero. 
// Il programma stampa la somma di tutti i numeri inseriti. 
// Esegui questo programma in due versioni, con il for e con il while.

var somma = 0;
for (var i = 0; i < 5; i++) {
    numero = parseInt(prompt('inserisci numero'));
    somma += numero;
}
document.getElementById('somma').innerHTML = somma;


// Jsnack3
// Crea un array vuoto. Chiedi per 6 volte all’utente di inserire un numero, se è dispari inseriscilo nell’array.
var arrayNumeri = [];
console.log(arrayNumeri);
for (var i = 0; i < 6; i++) {
    numero = parseInt(prompt('inserisci numero'));
    if (numero % 2 != 0) {
        arrayNumeri.push(numero)
    }
}
document.getElementById('numeri-dispari').innerHTML = arrayNumeri;



// Jsnack4
// In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby.
// Chiedi all’utente il suo nome e comunicagli se può partecipare o no alla festa.
