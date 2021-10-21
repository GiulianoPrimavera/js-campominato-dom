/*
//-devo generare 16 numeri casuali tra 1 e (numero massimo di caselle) -> che si basa sul livello di difficoltà del gioco
//-la lista di numeri (un array) non può contenere dei doppioni


-quando l'utente clicca su una cella
    -controlliamo se la cella su cui ha cliccato è presente nella lista delle bombe (generate prima in maniera randomica)
        -se è presente la cella si colora di rosso e il gioco finisce
        -altrimenti la cella si comporta come al solito e l'utente continua a giocare
-la partita termina quando 1. si calpesta una mina, 2.l'utente ha cliccato su tutte le celle che non sono mine 
    -usando un contatore conto se l'utente ha cliccato n volte(numero massimo di caselle) meno 16 (numero di bombe)
-alla fine devo scoprire tutte le mine e dare un punteggio al giocatore (basato sul contatore di prima)
*/

//definisco l'array
let arrayBombs = [];
/**
 * questa funzione popola l'array arrayBombs finchè non contiene 16 numeri diversi
 * @param {number} livello -> è il numero di caselle della griglia di gioco, cambia a seconda del livello scelto 
 */
function bombsGenerator (livello){
//creo il ciclo per generare i numeri random (sulla base del livello)
//eseguo il push del numero random finché l'array non conterrà 16 numeri
let nVolte = 0; //questa variabile mi serve per vedere quante volte viene eseguito il ciclo
while (arrayBombs.length < 16){
       
    bombRandom = getRandomNumber(livello, 1);
    
    //controllo se il numero è già presente nell'array arrayBombs
    if(arrayBombs.includes(bombRandom)){
        //se il numero random generato è già presente nell'array non succede niente 
        //il numero non viene pushato, l'array rimane statico
    }else{
        //se il numero non è presente nell'array lo pusho nell'array
        //l'array.length cresce di 1
        arrayBombs.push(bombRandom);
    }

    nVolte++
}
console.log(arrayBombs, `l'array continene ${arrayBombs.length} nuemeri, il ciclo è stato eseguito ${nVolte} volte`);
}



/**
 * funzione che genera un certo numero di numeri random sulla base 
 * del numero massimo e minimo che gli viene dato, questi due valori definiscono
 * il range dei numeri random che vengono generati 
 * @param {number} min - rappresenta il numero minimo che il random può raggiungere
 * @param {number} max - rappresenta il numero massimo che il random può raggiungere 
 * @returns {number} numeriRandom
 */

function getRandomNumber(max, min ){
    const numeroRandom = Math.floor(Math.random() * (max - min + 1) + min);

    return numeroRandom;
}                           

